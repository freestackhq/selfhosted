---
category: Notes & Wikis
description: Note-taking apps, personal knowledge management, and wiki software
---

# Notes & Wikis

## Comparison Matrix

| Service | Deploy | Resource | Auth | License | Maintained |
|---------|--------|----------|------|---------|------------|
| [SilverBullet](#silverbullet) | docker, binary | light (~128MB) | built-in (basic auth), reverse proxy | MIT | active |
| [Joplin Server](#joplin-server) | docker | medium (~256MB) | built-in, LDAP | Joplin Server Personal Use License | active |
| [Memos](#memos) | docker, binary | light (~64MB) | built-in, OIDC | MIT | active |
| [Wiki.js](#wikijs) | docker, binary | medium (~256MB) | built-in, OIDC, LDAP, SAML | AGPL-3.0 | active |
| [HedgeDoc](#hedgedoc) | docker | medium (~256MB) | built-in, OIDC, LDAP, SAML, OAuth | AGPL-3.0 | active |

---

## SilverBullet

| Field | Value |
|-------|-------|
| URL | https://silverbullet.md |
| Source | https://github.com/silverbulletmd/silverbullet |
| Deploy | docker, binary (Deno/TypeScript) |
| Image | `ghcr.io/silverbulletmd/silverbullet` |
| Resource | light (~128MB) |
| Auth | built-in (basic auth), reverse proxy auth |
| Reverse proxy | ✓ |
| Config | env vars + CLI flags |
| Backup | snapshot `space/` folder (plain Markdown files) |
| License | MIT |
| Maintained | active |

An open-source, self-hosted personal knowledge management platform built on plain Markdown files. Runs entirely in the browser as a PWA with offline support, backed by a Deno server. Features wiki-style bi-directional linking, a built-in query language, live-preview editing, and a Lua scripting environment for programmable note-taking. Your notes are just files on disk — fully compatible with Obsidian vaults and any Markdown editor.

**Pick this if** you want an Obsidian-like experience that's self-hosted, works in the browser, keeps notes as plain Markdown files, and you value extensibility through scripting over a locked-in app.

**vs Joplin Server** — SilverBullet is browser-native with plain files on disk; Joplin uses dedicated desktop/mobile clients with encrypted sync to a server. Choose SilverBullet for hackability and file portability; Joplin for cross-device encrypted sync with native apps.

**vs Memos** — SilverBullet is a full PKM system (wiki linking, queries, pages); Memos is a quick-capture microblog. SilverBullet for structured knowledge; Memos for fleeting thoughts.

**vs Wiki.js** — SilverBullet is personal-first with local Markdown files and scripting. Wiki.js is team-facing with a database backend, WYSIWYG editor, and access controls for organizational wikis.

**vs HedgeDoc** — SilverBullet is for personal knowledge management; HedgeDoc is for real-time collaborative document editing. Different use cases — choose SilverBullet for your second brain, HedgeDoc for team writing sessions.

---

## Joplin Server

| Field | Value |
|-------|-------|
| URL | https://joplinapp.org |
| Source | https://github.com/laurent22/joplin |
| Deploy | docker (docker-compose) |
| Image | `joplin/server` |
| Resource | medium (~256MB; PostgreSQL recommended for production) |
| Auth | built-in, LDAP |
| Reverse proxy | ✓ |
| Config | env vars |
| Backup | snapshot PostgreSQL database + storage directory |
| License | Joplin Server Personal Use License (non-commercial; clients are AGPL-3.0) |
| Maintained | active |

Self-hosted sync server for the Joplin note-taking ecosystem. Joplin clients (desktop, mobile, CLI) support end-to-end encryption, Markdown editing, notebooks, tags, and to-do lists. The server enables fast sync between devices, note sharing via public URLs, and notebook sharing between users. Also supports sync via WebDAV, Nextcloud, Dropbox, or OneDrive without the dedicated server.

**Pick this if** you want encrypted cross-device note sync with native desktop and mobile apps, and you value end-to-end encryption and an Evernote-like experience with import support.

**vs SilverBullet** — Joplin has polished native clients and E2EE; SilverBullet is browser-only but offers programmability and plain Markdown files. Joplin for mobile-first encrypted notes; SilverBullet for hackable PKM.

**vs Memos** — Joplin is a full notebook system with encryption, attachments, and rich organization. Memos is minimalist quick-capture. Joplin if you need structured notes across devices; Memos for rapid jotting.

**vs Wiki.js** — Joplin is personal note-taking with sync; Wiki.js is a team wiki with web UI, search, and access control. Different audiences entirely.

**vs HedgeDoc** — Joplin is for personal encrypted notes synced across devices; HedgeDoc is for real-time collaborative editing in a browser. Joplin for private notes; HedgeDoc for team collaboration.

---

## Memos

| Field | Value |
|-------|-------|
| URL | https://usememos.com |
| Source | https://github.com/usememos/memos |
| Deploy | docker, binary (Go) |
| Image | `ghcr.io/usememos/memos` |
| Resource | light (~64MB) |
| Auth | built-in, OIDC |
| Reverse proxy | ✓ |
| Config | env vars + CLI flags |
| Backup | snapshot database (SQLite/MySQL/PostgreSQL) |
| License | MIT |
| Maintained | active |

A lightweight, open-source, self-hosted note-taking and microblog app designed for quick capture. Twitter-like timeline for jotting thoughts, with Markdown support, tags, pinning, sharing, and a web clipper. Single Go binary with minimal resource usage — deploys in seconds. Supports REST and gRPC APIs for integration.

**Pick this if** you want a dead-simple, low-resource place to quickly capture thoughts, snippets, and links — like a private Twitter/microblog for your ideas.

**vs SilverBullet** — Memos is for fast, unstructured capture (tweets/fleeting notes); SilverBullet is for building a structured knowledge base with linking and queries. Memos for speed; SilverBullet for depth.

**vs Joplin Server** — Memos is a lightweight single-app experience in the browser; Joplin is a full notebook ecosystem with native clients and encryption. Memos for casual quick notes; Joplin for serious cross-device note management.

**vs Wiki.js** — Memos is personal and ephemeral; Wiki.js is structured, team-oriented documentation. Completely different purposes — Memos won't replace a wiki.

**vs HedgeDoc** — Memos is solo quick-capture; HedgeDoc is collaborative long-form editing. Memos for personal micro-notes; HedgeDoc for writing documents together.

---

## Wiki.js

| Field | Value |
|-------|-------|
| URL | https://js.wiki |
| Source | https://github.com/requarks/wiki |
| Deploy | docker, binary (Node.js) |
| Image | `ghcr.io/requarks/wiki` (also `requarks/wiki` on Docker Hub) |
| Resource | medium (~256MB; requires PostgreSQL) |
| Auth | built-in, OIDC, LDAP, SAML, OAuth (30+ providers) |
| Reverse proxy | ✓ |
| Config | env vars + admin UI |
| Backup | snapshot PostgreSQL database + storage assets |
| License | AGPL-3.0 |
| Maintained | active |

A powerful, modern wiki engine built on Node.js with a beautiful interface. Features a WYSIWYG and Markdown editor, full-text search (Elasticsearch/PostgreSQL), granular permissions, page versioning, comments, diagrams, and built-in diagramming (Mermaid, PlantUML). Supports 30+ authentication strategies and multiple storage backends (git, S3, local). Excellent for team documentation and knowledge bases.

**Pick this if** you need a proper team wiki with fine-grained access control, search, versioning, and a polished web interface — a Confluence/Notion alternative for documentation.

**vs SilverBullet** — Wiki.js is team-facing with structured permissions, search, and a database backend. SilverBullet is personal-first with plain files and scripting. Wiki.js for organizational docs; SilverBullet for personal PKM.

**vs Joplin Server** — Wiki.js is a web-first wiki for teams; Joplin is personal note sync with native apps. Different tools for different problems.

**vs Memos** — Wiki.js is structured documentation; Memos is quick-capture snippets. Wiki.js when you need organized, searchable, permission-controlled content.

**vs HedgeDoc** — Wiki.js is a permanent, structured wiki with versioning and permissions. HedgeDoc is for real-time collaborative editing of individual documents. Wiki.js for your knowledge base; HedgeDoc for live co-authoring sessions.

---

## HedgeDoc

| Field | Value |
|-------|-------|
| URL | https://hedgedoc.org |
| Source | https://github.com/hedgedoc/hedgedoc |
| Deploy | docker (docker-compose) |
| Image | `quay.io/hedgedoc/hedgedoc` (also `linuxserver/hedgedoc`) |
| Resource | medium (~256MB; requires PostgreSQL) |
| Auth | built-in, OIDC, LDAP, SAML, OAuth (GitHub, Google, etc.) |
| Reverse proxy | ✓ |
| Config | env vars + `config.json` |
| Backup | snapshot PostgreSQL database + upload directory |
| License | AGPL-3.0 |
| Maintained | active |

An open-source, real-time collaborative Markdown editor (formerly CodiMD). Multiple users edit the same document simultaneously with visible cursors, live preview, and conflict-free merging. Supports slides (reveal.js), diagrams (Mermaid, PlantUML), math (MathJax), tables, and embeds. Great for meeting notes, documentation drafts, and collaborative writing.

**Pick this if** you need Google Docs-style real-time collaboration on Markdown documents — meeting notes, design docs, or any content multiple people write together.

**vs SilverBullet** — HedgeDoc is multi-user real-time collaboration on single documents; SilverBullet is personal knowledge management. HedgeDoc for team writing; SilverBullet for your second brain.

**vs Joplin Server** — HedgeDoc is collaborative web editing; Joplin is personal encrypted sync. HedgeDoc for shared documents; Joplin for private cross-device notes.

**vs Memos** — HedgeDoc is for longer collaborative documents; Memos is solo quick-capture. Entirely different use cases.

**vs Wiki.js** — HedgeDoc excels at real-time co-authoring of individual documents. Wiki.js is a structured wiki with hierarchy, permissions, and search. Use HedgeDoc for live collaboration; Wiki.js for your permanent knowledge base.
