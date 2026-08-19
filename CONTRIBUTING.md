# Contributing

Thanks for wanting to improve the catalog. Here's how to keep the quality bar high.

## The standard

Every entry must answer: *"Can I decide whether to use this without leaving this page?"*

If not, it's not ready.

## Entry format

Each service lives as a `##` section inside a category file. Follow this structure:

```markdown
## Service Name

| Field | Value |
|-------|-------|
| URL | https://project-url.org |
| Source | https://github.com/org/repo |
| Deploy | docker, compose, binary, helm, package |
| Image | `registry/image` |
| Resource | light (~100MB) / medium (~500MB) / heavy (~2GB) |
| Auth | OIDC, LDAP, built-in, none |
| Reverse proxy | ✓ / ✗ / partial |
| Config | env vars, YAML, UI, etc. |
| Backup | brief description |
| License | SPDX identifier |
| Maintained | active / maintenance / stale / archived |

One paragraph: what it does and why you'd want it.

**Pick this if** one-liner for when to choose this.

**vs Alternative** — when to pick this one vs the other.
```

## Required fields

Every entry MUST have:

- `URL`, `Source`, `Deploy`, `License`, `Maintained`
- At least one "vs" comparison (unless it's truly unique in its category)
- A "Pick this if" one-liner

## Encouraged fields

- `Image` (if Docker is a deploy option)
- `Resource` (with ballpark RAM)
- `Auth` (critical for homelab stacks)
- `Reverse proxy`
- `Config`
- `Backup`

## Comparison matrix

Each category file has a comparison matrix table at the top. When you add an entry, add a row to the matrix too.

## Resource tiers

| Tier | RAM range | Example |
|------|-----------|---------|
| light | <256MB idle | Pi-hole, Authelia, Vaultwarden |
| medium | 256MB–1GB | Jellyfin, Grafana, Authentik |
| heavy | >1GB | GitLab CE, Immich (with ML) |

## Creating a new category

1. Create `category-name.md` in the project root (kebab-case)
2. Add frontmatter: `category` (display name) and `description` (one-line, max 200 chars)
3. Add the comparison matrix table
4. Add at least 2 entries (a single entry with no comparison isn't useful)

## What gets rejected

- One-liner descriptions with no comparison context
- Entries for abandoned projects without an explicit "archived" status
- Duplicate entries without clear differentiation from existing ones
- Promotional content or entries that read like marketing copy
- Services that cannot be self-hosted (SaaS-only)

## PR process

1. Fork the repo
2. Create a branch (`add/service-name` or `fix/category-correction`)
3. Add your entry following the format above
4. Run validation locally: `node scripts/validate.js`
5. Submit a PR

## Running validation locally

```bash
npm ci
npm run validate
```

The validator checks:

- Frontmatter against the JSON schema
- Every `##` entry has the required table fields
- No broken internal links in the comparison matrix

## Review criteria

- Is the information accurate?
- Does the entry help someone decide?
- Are comparisons fair (not biased toward one project)?
- Does it follow the format consistently?
