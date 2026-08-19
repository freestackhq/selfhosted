const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const Ajv = require("ajv");

const SCHEMA_PATH = path.join(__dirname, "..", "schema", "selfhosted.schema.json");
const ROOT = path.join(__dirname, "..");

const REQUIRED_TABLE_FIELDS = ["URL", "Deploy", "License", "Maintained"];
const VALID_MAINTAINED = ["active", "maintenance", "stale", "archived"];

const schema = JSON.parse(fs.readFileSync(SCHEMA_PATH, "utf8"));
const ajv = new Ajv();
const validate = ajv.compile(schema);

// Find all .md files in root that have frontmatter with 'category'
const mdFiles = fs
  .readdirSync(ROOT)
  .filter((f) => f.endsWith(".md") && !["README.md", "CONTRIBUTING.md", "ROADMAP.md"].includes(f));

let errors = 0;

for (const file of mdFiles) {
  const filePath = path.join(ROOT, file);
  const content = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content: body } = matter(content);

  // Validate frontmatter
  const valid = validate(frontmatter);
  if (!valid) {
    console.error(`❌ ${file}: frontmatter validation failed`);
    for (const err of validate.errors) {
      console.error(`   ${err.instancePath || "root"}: ${err.message}`);
    }
    errors++;
    continue;
  }

  // Parse ## entries and check required table fields
  const entries = body.split(/^## /m).slice(1); // split on ## headings

  for (const entry of entries) {
    const lines = entry.split("\n");
    const name = lines[0].trim();

    // Skip "Comparison Matrix" section
    if (name === "Comparison Matrix") continue;

    // Extract table fields from | Field | Value | pattern
    const tableFields = [];
    for (const line of lines) {
      const match = line.match(/^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|$/);
      if (match && match[1] !== "Field" && match[1] !== "---" && !match[1].startsWith("-")) {
        tableFields.push(match[1].trim());
      }
    }

    // Check required fields
    for (const required of REQUIRED_TABLE_FIELDS) {
      if (!tableFields.includes(required)) {
        console.error(`❌ ${file} > ${name}: missing required field "${required}"`);
        errors++;
      }
    }

    // Validate 'Maintained' value if present
    const maintainedLine = lines.find((l) => l.match(/^\|\s*Maintained\s*\|/));
    if (maintainedLine) {
      const val = maintainedLine.match(/^\|\s*Maintained\s*\|\s*([^|]+?)\s*\|$/);
      if (val && !VALID_MAINTAINED.includes(val[1].trim())) {
        console.error(
          `❌ ${file} > ${name}: "Maintained" must be one of: ${VALID_MAINTAINED.join(", ")} (got "${val[1].trim()}")`
        );
        errors++;
      }
    }
  }

  console.log(`✓ ${file} (${entries.filter((e) => !e.startsWith("Comparison Matrix")).length} entries)`);
}

if (errors > 0) {
  console.error(`\n${errors} error(s) found.`);
  process.exit(1);
} else {
  console.log(`\n✅ All files valid.`);
}
