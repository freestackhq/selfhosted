---
category: Feeds & Bookmarks
description: RSS readers, feed aggregators, bookmark managers, and read-later tools
---

# Feeds & Bookmarks

## Comparison Matrix

| Service | Deploy | Resource | Auth | License | Maintained |
|---------|--------|----------|------|---------|------------|
| [FreshRSS](#freshrss) | docker, compose, package | light (~100MB) | built-in, OIDC | AGPL-3.0 | active |
| [Miniflux](#miniflux) | docker, compose, binary | very light (~30MB) | built-in, OIDC | Apache-2.0 | active |
| [Linkwarden](#linkwarden) | docker, compose | medium (~300MB) | built-in, OIDC, SSO | AGPL-3.0 | active |
| [Wallabag](#wallabag) | docker, compose, package | light (~150MB) | built-in, OIDC, LDAP | MIT | active |

---

## FreshRSS

| Field | Value |
|-------|-------|
| URL | https://freshrss.org |
| Source | https://github.com/FreshRSS/FreshRSS |
| Deploy | docker, compose, package |
| Image | `freshrss/freshrss` |
| Resource | light (~100MB idle) |
| Auth | built-in, OIDC (via extensions) |
| Reverse proxy | ✓ |
| Config | UI + `config.php` |
| Backup | snapshot `/data` (SQLite/PostgreSQL/MySQL) |
| License | AGPL-3.0 |
| Maintained | active |

Full-featured, self-hosted RSS aggregator supporting multiple users, categories, labels, search, and an extension system. Compatible with Google Reader API and Fever API for third-party mobile clients. Supports WebSub for real-time push notifications from compatible feeds.

**Pick this if** you want a batteries-included RSS reader with multi-user support, extension ecosystem, and broad mobile client compatibility.

**vs Miniflux** — FreshRSS if you want extensions, theming, and Google Reader API; Miniflux if you want minimal footprint, native Fever/GReader API without extensions, and a cleaner reading UI.
**vs Wallabag** — FreshRSS for feed aggregation and subscription management; Wallabag for saving individual articles and reading them later offline.

---

## Miniflux

| Field | Value |
|-------|-------|
| URL | https://miniflux.app |
| Source | https://github.com/miniflux/v2 |
| Deploy | docker, compose, binary |
| Image | `miniflux/miniflux` |
| Resource | very light (~30MB idle, single Go binary) |
| Auth | built-in, OIDC |
| Reverse proxy | ✓ |
| Config | env vars |
| Backup | PostgreSQL dump |
| License | Apache-2.0 |
| Maintained | active |

Minimalist, opinionated feed reader written in Go. Single binary, PostgreSQL-backed, fast and clean. Built-in Fever and Google Reader API support for mobile clients. Focuses on reading experience with no bloat — no extensions, no themes, just feeds.

**Pick this if** you want the leanest RSS reader with excellent performance, prefer configuration via env vars, and don't need extensions or theming.

**vs FreshRSS** — Miniflux if you value minimalism, speed, and a single-binary deployment; FreshRSS if you want extensions, multiple database backends, and more customization.
**vs Wallabag** — Miniflux for subscribing to and reading feeds in real-time; Wallabag for archiving and reading specific articles later.

---

## Linkwarden

| Field | Value |
|-------|-------|
| URL | https://linkwarden.app |
| Source | https://github.com/linkwarden/linkwarden |
| Deploy | docker, compose |
| Image | `ghcr.io/linkwarden/linkwarden` |
| Resource | medium (~300MB, Next.js + Playwright for archiving) |
| Auth | built-in, OIDC, SSO |
| Reverse proxy | ✓ |
| Config | env vars |
| Backup | snapshot PostgreSQL + `/data` (archived pages/screenshots) |
| License | AGPL-3.0 |
| Maintained | active |

Collaborative bookmark and archive manager. Saves bookmarks with full-page screenshots and PDF/HTML archives. Supports collections, tags, sharing, and collaboration. Browser extensions for quick saving. Automatically preserves pages so content isn't lost when sites go down.

**Pick this if** you want a modern bookmark manager with automatic page archiving, collaboration features, and a polished UI for organizing web links.

**vs Wallabag** — Linkwarden for bookmark organization, collections, collaboration, and full-page archiving; Wallabag for distraction-free article reading and offline text extraction.
**vs FreshRSS** — Linkwarden for saving individual pages you discover; FreshRSS for subscribing to sites and reading new content as it appears.

---

## Wallabag

| Field | Value |
|-------|-------|
| URL | https://wallabag.org |
| Source | https://github.com/wallabag/wallabag |
| Deploy | docker, compose, package |
| Image | `wallabag/wallabag` |
| Resource | light (~150MB idle) |
| Auth | built-in, OIDC, LDAP |
| Reverse proxy | ✓ |
| Config | env vars, `parameters.yml` |
| Backup | snapshot database (MySQL/PostgreSQL/SQLite) + `/images` |
| License | MIT |
| Maintained | active |

Self-hosted read-later and article archiver (Pocket/Instapaper alternative). Extracts article text from web pages, strips clutter, and stores clean readable versions. Supports tagging, annotations, full-text search, and export to ePub/PDF. Mobile apps and browser extensions available.

**Pick this if** you want a Pocket replacement — save articles, read distraction-free later (including offline), and annotate/tag for future reference.

**vs Linkwarden** — Wallabag for clean article extraction and distraction-free reading; Linkwarden for full-page archiving, screenshots, and bookmark organization with collaboration.
**vs FreshRSS** — Wallabag for saving and reading individual articles on your own schedule; FreshRSS for subscribing to feeds and staying current with new posts.
**vs Miniflux** — Wallabag for read-later workflow and article archiving; Miniflux for real-time feed consumption.
