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
| [analytics.md](analytics.md) | Web/product analytics (Plausible, Umami, Matomo, PostHog) |
| [automation.md](automation.md) | Workflow automation (n8n, Node-RED, Activepieces, Huginn) |
| [backup.md](backup.md) | Backup solutions (Restic, BorgBackup, Duplicati, Kopia) |
| [calendar-crm.md](calendar-crm.md) | CalDAV, scheduling, CRM (Radicale, Cal.com, Twenty) |
| [cms-blogs.md](cms-blogs.md) | CMS and blogging (WordPress, Ghost, Hugo, Strapi) |
| [communication.md](communication.md) | Chat and video (Matrix, Rocket.Chat, Jitsi, Zulip) |
| [containers.md](containers.md) | Container management (Portainer, Coolify, Dockge, CasaOS) |
| [dashboards.md](dashboards.md) | Homepages/startpages (Homarr, Homepage, Dashy, Homer, Glance) |
| [databases.md](databases.md) | Databases and admin tools (PostgreSQL, MariaDB, Valkey, Adminer) |
| [development.md](development.md) | Git forges (Forgejo, Gitea, GitLab CE) |
| [documents.md](documents.md) | Document management (Paperless-ngx, Stirling-PDF, BookStack, Outline) |
| [ecommerce.md](ecommerce.md) | Online stores (WooCommerce, Saleor, Medusa, PrestaShop) |
| [email.md](email.md) | Mail servers and webmail (Stalwart, docker-mailserver, Mailu, Roundcube) |
| [feeds-bookmarks.md](feeds-bookmarks.md) | RSS and bookmarks (FreshRSS, Miniflux, Linkwarden, Wallabag) |
| [file-sync.md](file-sync.md) | File sync and storage (Nextcloud, Syncthing, Seafile, MinIO) |
| [finance.md](finance.md) | Personal finance (Actual, Firefly III, Ghostfolio) |
| [games.md](games.md) | Game servers (Pelican Panel, Crafty, Sunshine, LinuxGSM) |
| [home-automation.md](home-automation.md) | Smart home (Home Assistant, openHAB, Node-RED) |
| [media-management.md](media-management.md) | Media automation (Sonarr, Radarr, Prowlarr, Bazarr) |
| [media.md](media.md) | Media servers (Jellyfin, Plex, Navidrome) |
| [monitoring.md](monitoring.md) | Uptime and metrics (Uptime Kuma, Grafana, Prometheus) |
| [networking.md](networking.md) | Reverse proxies, DNS (NPM, Traefik, Pi-hole, AdGuard Home) |
| [notes-wiki.md](notes-wiki.md) | Notes and wikis (SilverBullet, Joplin, Memos, Wiki.js, HedgeDoc) |
| [photos.md](photos.md) | Photo management (Immich, PhotoPrism) |
| [recipes.md](recipes.md) | Recipe management (Mealie, Tandoor, RecipeSage) |
| [search.md](search.md) | Search engines (Meilisearch, SearXNG, Typesense, OpenSearch) |
| [security-identity.md](security-identity.md) | Auth and identity (Authentik, Keycloak, Authelia, Vaultwarden) |
| [tasks-projects.md](tasks-projects.md) | Tasks and projects (Vikunja, Plane, Huly, Kanboard) |
| [video-surveillance.md](video-surveillance.md) | Camera/NVR (Frigate, ZoneMinder, Viseron, Shinobi) |
| [vpn-remote.md](vpn-remote.md) | VPN and remote access (WireGuard, Headscale, NetBird, Guacamole) |

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
