---
category: Email
description: Complete mail servers, webmail clients, and email infrastructure
---

# Email

## Comparison Matrix

| Service | Deploy | Resource | Auth | License | Maintained |
|---------|--------|----------|------|---------|------------|
| [Stalwart Mail Server](#stalwart-mail-server) | docker, binary | low–medium (~256MB) | built-in, OIDC, LDAP | AGPL-3.0 | active |
| [docker-mailserver](#docker-mailserver) | docker | medium (~512MB) | built-in, LDAP, OAuth2 (via Dovecot) | MIT | active |
| [Mailu](#mailu) | docker | medium (~512MB) | built-in, LDAP | MIT | active |
| [Roundcube](#roundcube) | docker, package | low (~128MB) | IMAP passthrough, OAuth2, LDAP | GPL-3.0 | active |

---

## Stalwart Mail Server

| Field | Value |
|-------|-------|
| URL | https://stalw.art |
| Source | https://github.com/stalwartlabs/mail-server |
| Deploy | docker, binary (Linux/macOS/Windows) |
| Image | `stalwartlabs/mail-server` |
| Resource | low–medium (~256MB; single binary, no external DB required) |
| Auth | built-in, OIDC, LDAP, MTA-STS, DKIM/DMARC/SPF |
| Reverse proxy | ✓ (optional; can terminate TLS itself) |
| Config | TOML config file + web admin UI |
| Backup | built-in data export, or snapshot the data directory |
| License | AGPL-3.0 (dual-licensed; enterprise features available) |
| Maintained | active |

All-in-one mail server written in Rust supporting JMAP, IMAP4, POP3, and SMTP. Ships as a single binary with built-in spam filtering (sieve), full-text search, web admin panel, and webmail. No external database required — uses an embedded RocksDB/SQLite store by default, but can connect to PostgreSQL/MySQL. Handles DKIM signing, DMARC, SPF, ARC, MTA-STS, and DANE out of the box.

**Pick this if** you want a modern, memory-efficient, all-in-one mail server with minimal moving parts — especially if JMAP support matters to you or you prefer a single-binary deployment over a multi-container stack.

**vs docker-mailserver** — Stalwart is a single Rust binary with built-in everything (spam filter, full-text search, webmail); docker-mailserver assembles battle-tested components (Postfix, Dovecot, Rspamd) into one container. Pick Stalwart for simplicity and modern protocols (JMAP); docker-mailserver for the proven Postfix/Dovecot ecosystem and extensive community docs.

**vs Mailu** — Both are all-in-one solutions, but Stalwart is a single process while Mailu is a multi-container suite with its own webmail and admin UI. Pick Stalwart for lower resource use and JMAP; Mailu for a more batteries-included Docker experience with built-in antivirus and webmail choices.

**vs Roundcube** — No overlap — Stalwart is a mail server (MTA + MDA); Roundcube is a webmail client. Stalwart includes its own webmail, but you can point Roundcube at Stalwart's IMAP if you prefer it.

---

## docker-mailserver

| Field | Value |
|-------|-------|
| URL | https://docker-mailserver.github.io/docker-mailserver |
| Source | https://github.com/docker-mailserver/docker-mailserver |
| Deploy | docker |
| Image | `mailserver/docker-mailserver` |
| Resource | medium (~512MB; Postfix + Dovecot + Rspamd + ClamAV optional) |
| Auth | built-in (flat files), LDAP, OAuth2 (via Dovecot) |
| Reverse proxy | not typical (expose ports 25/465/587/993 directly) |
| Config | env vars + `docker-data/dms/config/` flat files + `setup.sh` CLI |
| Backup | mail data (`/var/mail`) + config directory + optional DKIM keys |
| License | MIT |
| Maintained | active |

Production-ready mail server built on Postfix (SMTP) and Dovecot (IMAP/POP3) packed into a single Docker container. Includes Rspamd for spam filtering, optional ClamAV for antivirus, Fail2Ban for brute-force protection, and Let's Encrypt integration. Configuration is file-based (no database), managed through a `setup.sh` helper or by editing flat files directly.

**Pick this if** you want a proven, well-documented Postfix/Dovecot stack that runs in a single container with minimal fuss — particularly if your team already understands traditional mail server components.

**vs Stalwart** — docker-mailserver uses established, battle-hardened components (Postfix/Dovecot) with decades of community knowledge; Stalwart is newer but simpler (single binary, built-in everything). Pick docker-mailserver for production confidence and ecosystem familiarity; Stalwart for lower overhead and modern protocols.

**vs Mailu** — Both use Postfix/Dovecot under the hood, but docker-mailserver is a single container configured via flat files, while Mailu is a multi-container suite with a web admin UI and integrated webmail. Pick docker-mailserver for tighter control and fewer moving parts; Mailu for a more GUI-friendly experience.

**vs Roundcube** — No overlap — docker-mailserver is the mail server (MTA + MDA); Roundcube provides a web UI for reading/sending. Pair them together for a complete self-hosted email stack.

---

## Mailu

| Field | Value |
|-------|-------|
| URL | https://mailu.io |
| Source | https://github.com/Mailu/Mailu |
| Deploy | docker (Compose) |
| Image | `mailu/front` + `mailu/admin` + `mailu/imap` + `mailu/smtp` + `mailu/webmail` + `mailu/antispam` |
| Resource | medium (~512MB base; more with antivirus enabled) |
| Auth | built-in (admin UI), LDAP |
| Reverse proxy | built-in nginx front (`mailu/front`); can sit behind external proxy |
| Config | `mailu.env` + web admin panel |
| Backup | mail data + PostgreSQL/SQLite admin DB + DKIM keys |
| License | MIT |
| Maintained | active |

Simple, full-featured Docker mail suite that bundles Postfix, Dovecot, Rspamd, an admin web UI, and a choice of webmail (Roundcube or SnappyMail) into a coordinated Compose stack. Includes automatic TLS, DKIM/DMARC/SPF, rate limiting, quotas, aliases, and domain management — all configurable through the admin panel. Ships a setup wizard that generates your Compose file.

**Pick this if** you want an opinionated, GUI-managed mail suite that handles everything (server + webmail + admin + antispam) in one Compose stack with minimal manual configuration.

**vs docker-mailserver** — Mailu adds a web admin UI, integrated webmail, and multi-container architecture; docker-mailserver is a leaner single container managed via CLI/flat files. Pick Mailu for a friendlier admin experience; docker-mailserver for simplicity and direct control.

**vs Stalwart** — Mailu is a traditional Postfix/Dovecot stack wrapped in Docker with admin UI; Stalwart is a modern single-binary rewrite in Rust. Pick Mailu for proven components and built-in webmail choice; Stalwart for lower resource use, JMAP, and fewer containers.

**vs Roundcube** — Mailu includes Roundcube (or SnappyMail) as its webmail component. If you run Mailu, you already have webmail — no need to deploy Roundcube separately.

---

## Roundcube

| Field | Value |
|-------|-------|
| URL | https://roundcube.net |
| Source | https://github.com/roundcube/roundcubemail |
| Deploy | docker, package (Debian/Ubuntu/Fedora), manual (PHP) |
| Image | `roundcube/roundcubemail` |
| Resource | low (~128MB; PHP + small database) |
| Auth | IMAP passthrough (login = IMAP credentials), OAuth2, LDAP address book |
| Reverse proxy | ✓ |
| Config | `config.inc.php` + env vars (Docker) |
| Backup | database (MySQL/PostgreSQL/SQLite) + config file + custom skins/plugins |
| License | GPL-3.0 |
| Maintained | active |

Mature, widely-deployed webmail client with a clean interface for reading, composing, and organizing email. Supports drag-and-drop, address books, identities, filters (ManageSieve), folder management, and a plugin ecosystem for calendars, 2FA, and skins. Connects to any IMAP server — it's a frontend only, not a mail server.

**Pick this if** you already have a mail server (Stalwart, docker-mailserver, or any IMAP server) and want a polished, reliable webmail UI without the bloat of a full groupware suite.

**vs Stalwart** — Roundcube is a webmail client; Stalwart is a mail server that includes its own webmail. Use Roundcube if you prefer its UI or plugin ecosystem over Stalwart's built-in webmail.

**vs docker-mailserver** — Complementary — docker-mailserver handles SMTP/IMAP; Roundcube provides the web UI on top. Deploy both for a complete stack.

**vs Mailu** — Mailu bundles Roundcube (or SnappyMail) as its webmail layer. If you're not using Mailu but have another mail server, deploy Roundcube standalone for webmail access.
