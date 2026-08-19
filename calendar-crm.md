---
category: Calendar & CRM
description: Calendar servers, scheduling tools, and customer relationship management
---

# Calendar & CRM

## Comparison Matrix

| Service | Deploy | Resource | Auth | License | Maintained |
|---------|--------|----------|------|---------|------------|
| [Radicale](#radicale) | docker, pip, binary | minimal (~32MB) | htpasswd, LDAP, reverse proxy | GPL-3.0 | active |
| [Baikal](#baikal) | docker, PHP | light (~64MB) | built-in (web UI) | GPL-3.0 | active |
| [Cal.com](#calcom) | docker (docker-compose) | heavy (~1GB+; PostgreSQL + Redis) | built-in, OAuth, SAML | MIT (Cal.diy) | active |
| [Twenty](#twenty) | docker (docker-compose) | heavy (~1GB+; PostgreSQL + Redis) | built-in, OIDC, SAML, Google/Microsoft OAuth | AGPL-3.0 | active |

---

## Radicale

| Field | Value |
|-------|-------|
| URL | https://radicale.org |
| Source | https://github.com/Kozea/Radicale |
| Deploy | docker, pip (Python), system package |
| Image | `tomsquest/docker-radicale` (community; official Dockerfile in repo) |
| Resource | minimal (~32MB) |
| Auth | htpasswd, LDAP (via plugin), reverse proxy header, PAM |
| Reverse proxy | ✓ |
| Config | INI-style config file + env vars |
| Backup | copy `collections/` directory (flat-file .ics/.vcf storage) |
| License | GPL-3.0 |
| Maintained | active |

A minimal CalDAV and CardDAV server written in Python. Stores calendars and contacts as flat files on the filesystem — no database required. Designed to be simple to install, configure, and maintain. Supports file-based storage with git versioning via plugins, flexible authentication, and fine-grained access control via rights files.

**Pick this if** you want the simplest possible CalDAV/CardDAV server with near-zero resource usage and file-based storage you can easily back up and version-control.

**vs Baikal** — Radicale is lighter (no PHP/web server needed) and stores data as plain files. Baikal has a friendlier web admin UI for managing users and calendars, and uses a database (SQLite/MySQL). Choose Radicale if you prefer filesystem storage and minimal dependencies.

**vs Cal.com** — Completely different purposes. Radicale is a calendar/contacts data server (CalDAV/CardDAV); Cal.com is a scheduling/booking platform. Use Radicale to sync your calendar across devices; use Cal.com to let others book time with you.

**vs Twenty** — No overlap. Radicale serves calendars and contacts; Twenty is a CRM for managing customer relationships and pipelines.

---

## Baikal

| Field | Value |
|-------|-------|
| URL | https://sabre.io/baikal |
| Source | https://github.com/sabre-io/Baikal |
| Deploy | docker, PHP (Apache/nginx) |
| Image | `ckulka/baikal:nginx` / `ckulka/baikal:apache` |
| Resource | light (~64MB) |
| Auth | built-in (web UI user management) |
| Reverse proxy | ✓ |
| Config | web installer + `config/baikal.yaml` |
| Backup | snapshot SQLite or MySQL database + `config/` + `Specific/` |
| License | GPL-3.0 |
| Maintained | active |

A lightweight CalDAV and CardDAV server built on PHP and the sabre/dav library. Provides a clean web admin interface for managing users, calendars, and address books. Uses SQLite by default (MySQL/PostgreSQL supported) and runs on any PHP-capable host. Easy web-based setup wizard gets you running in minutes.

**Pick this if** you want a lightweight CalDAV/CardDAV server with a user-friendly web admin panel for managing calendars and contacts, and you're comfortable running PHP.

**vs Radicale** — Baikal has a polished web UI for administration and uses a proper database. Radicale is even lighter, needs no database, and stores everything as flat files. Choose Baikal if you want a GUI for user management; Radicale if you want maximum simplicity and file-based storage.

**vs Cal.com** — Different tools. Baikal syncs calendar/contact data across devices via CalDAV/CardDAV. Cal.com is a scheduling platform for booking meetings. They can complement each other (Baikal for your private calendar, Cal.com for public booking pages).

**vs Twenty** — No overlap. Baikal is a calendar/contacts server; Twenty is a CRM for customer data and sales pipelines.

---

## Cal.com

| Field | Value |
|-------|-------|
| URL | https://cal.com |
| Source | https://github.com/calcom/cal.com |
| Deploy | docker (docker-compose) |
| Image | `calcom/cal.com` (or `calcom/cal.diy` for community edition) |
| Resource | heavy (~1GB+; PostgreSQL + Redis + Node.js app) |
| Auth | built-in, Google/Microsoft OAuth, SAML |
| Reverse proxy | ✓ |
| Config | env vars (`.env` file) |
| Backup | snapshot PostgreSQL database |
| License | MIT (Cal.diy community edition) |
| Maintained | active |

An open-source scheduling platform — the self-hosted Calendly alternative. Offers booking pages, team scheduling, round-robin assignment, calendar integrations (Google Calendar, Outlook, CalDAV), webhooks, workflows, and recurring events. White-label by design with full API access. The community edition (Cal.diy) is MIT-licensed and maintained independently for personal/non-production use.

**Pick this if** you want a modern, full-featured scheduling and booking platform that replaces Calendly — letting others book meetings with you through customizable booking pages.

**vs Radicale** — Different purposes. Cal.com is for public-facing scheduling/booking; Radicale is for private CalDAV/CardDAV sync. Cal.com can connect to CalDAV servers (including Radicale) as a calendar source.

**vs Baikal** — Same distinction: Baikal syncs your calendar data, Cal.com presents booking pages to the world. They're complementary, not competing.

**vs Twenty** — Cal.com handles scheduling; Twenty handles CRM. They could integrate (book meetings with CRM contacts), but serve different needs. Cal.com if you need booking pages; Twenty if you need pipeline/contact management.

---

## Twenty

| Field | Value |
|-------|-------|
| URL | https://twenty.com |
| Source | https://github.com/twentyhq/twenty |
| Deploy | docker (docker-compose) |
| Image | `twentycrm/twenty` |
| Resource | heavy (~1GB+; PostgreSQL + Redis + Node.js/TypeScript app) |
| Auth | built-in, OIDC, SAML, Google/Microsoft OAuth |
| Reverse proxy | ✓ |
| Config | env vars (`.env` file) |
| Backup | snapshot PostgreSQL database |
| License | AGPL-3.0 |
| Maintained | active |

A modern, open-source CRM built as an alternative to Salesforce. Developer-friendly with a clean UI, custom objects/fields, kanban pipelines, email integration, notes, tasks, and a GraphQL API. Designed for technical teams who want to own their CRM data and extend the platform like the rest of their stack. Supports custom workflows, views, and data models.

**Pick this if** you want a modern, self-hosted CRM with a Notion-like UI that gives you full ownership of customer data — especially if you're a technical team wanting extensibility via API and custom objects.

**vs Radicale** — No overlap. Radicale is a calendar/contacts sync server; Twenty is a full CRM for managing customer relationships, deals, and pipelines.

**vs Baikal** — No overlap. Baikal serves CalDAV/CardDAV for calendar and contact sync; Twenty manages business relationships and sales processes. Twenty has its own contact management but it's CRM-focused, not CalDAV.

**vs Cal.com** — Complementary tools. Twenty tracks customer relationships and pipelines; Cal.com handles scheduling and booking. A team might use both — Twenty for the CRM, Cal.com to book calls with prospects.
