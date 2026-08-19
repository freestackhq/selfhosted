# freestack / selfhosted

> Every entry tells you what it does, how to run it, what it costs your box, and what else you could pick instead.

A structured, opinionated catalog for comparing self-hosted software. Unlike awesome-lists, every entry has standardized fields covering deployment method, resource usage, auth integration, and alternatives — so you can actually decide without opening 15 tabs.

## Why this exists

[awesome-selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) is great for discovery but terrible for decisions. You get a one-liner and a link. You still don't know:

- How do I deploy it? Docker? Binary? Helm?
- How much RAM does it eat?
- Does it support OIDC so I can hook it into my identity provider?
- What should I pick instead, and why?

This project answers those questions in a scannable format.

## How it works

Each category is a Markdown file in the project root:

```text
development.md
media.md
security-identity.md
networking.md
monitoring.md
photos.md
...
```

Each file contains:

1. **Frontmatter** — category name and description (YAML)
2. **Comparison matrix** — feature grid at the top for quick scanning
3. **Service entries** — `##` heading per service with a standardized info table + short prose + "pick this if" + alternatives comparison

## Browsing

- **GitHub** — open any `.md` file and read it directly
- **Web** — coming soon (auto-generated from the Markdown source)

## Categories

| File | What's in it |
|------|-------------|
| [development.md](development.md) | Git forges, CI/CD |
| [media.md](media.md) | Media servers, music streaming |
| [security-identity.md](security-identity.md) | IdPs, auth proxies, password managers |
| [networking.md](networking.md) | Reverse proxies, DNS, ad blocking |
| [monitoring.md](monitoring.md) | Uptime, metrics, dashboards |
| [photos.md](photos.md) | Photo/video management |

## Roadmap

See [ROADMAP.md](ROADMAP.md).

**Verticals planned:**

- ✅ Self-hosted software (this repo)
- 🔜 APIs (payment, auth, email — compared by pricing, DX, limits)
- 🔜 Free AI resources (models, API tiers, rate limits)
- 🔜 Free/cheap cloud (always-free tiers, gotchas, real limits)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). The short version:

1. Pick a category (or create one)
2. Add your entry with the standard table format
3. Include "pick this if" + alternatives comparison
4. Open a PR — CI validates your entry

**Quality bar:** If an entry doesn't have enough info to help someone decide, it doesn't belong here.

## Lineage

Evolved from [kuyacarlo/awesome-freestack](https://github.com/kuyacarlo/awesome-freestack).

## License

Content: [CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/)
Tooling/scripts: MIT
