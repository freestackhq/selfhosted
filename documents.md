---
category: Documents & Knowledge
description: Document management, OCR, PDF tools, and knowledge bases
---

# Documents & Knowledge

## Comparison Matrix

| Service | Deploy | Resource | Auth | License | Maintained |
|---------|--------|----------|------|---------|------------|
| [Paperless-ngx](#paperless-ngx) | docker, compose | medium (~300MB) | built-in, LDAP, OIDC | GPL-3.0 | active |
| [Stirling-PDF](#stirling-pdf) | docker | light (~200MB) | built-in (optional) | GPL-3.0 | active |
| [BookStack](#bookstack) | docker, compose, bare metal | light (~100MB) | built-in, LDAP, SAML, OIDC | MIT | active |
| [Outline](#outline) | docker, compose | medium (~300MB) | OIDC required | BSL-1.1 | active |

---

## Paperless-ngx

| Field | Value |
|-------|-------|
| URL | https://docs.paperless-ngx.com |
| Source | https://github.com/paperless-ngx/paperless-ngx |
| Deploy | docker, compose |
| Image | `ghcr.io/paperless-ngx/paperless-ngx` |
| Resource | medium (~300MB idle; spikes during OCR) |
| Auth | built-in, LDAP, OIDC, SSO |
| Reverse proxy | ✓ |
| Config | env vars, `docker-compose.env` |
| Backup | built-in export command (`document_exporter`), snapshot `/data` + `/media` + database |
| License | GPL-3.0 |
| Maintained | active |

Document management system that ingests paper documents (via scanner or file upload), runs OCR with Tesseract, and indexes everything for full-text search. Automatic tagging, correspondent detection, and date parsing. Supports consumption from directories, email, and mobile apps.

**Pick this if** you want to go paperless — scan/photograph documents and have them automatically OCR'd, tagged, searchable, and archived with minimal manual effort.

**vs Stirling-PDF** — Paperless-ngx is a full document management system (ingest, OCR, archive, search); Stirling-PDF is a stateless toolkit for manipulating existing PDFs. They complement rather than compete.
**vs BookStack** — Paperless-ngx manages scanned/uploaded documents (invoices, receipts, letters); BookStack is for writing and organizing knowledge. Different use cases.
**vs Outline** — Paperless-ngx archives existing documents; Outline is for creating new collaborative documents. Use both together.

---

## Stirling-PDF

| Field | Value |
|-------|-------|
| URL | https://stirlingpdf.com |
| Source | https://github.com/Stirling-Tools/Stirling-PDF |
| Deploy | docker |
| Image | `stirlingtools/stirling-pdf` |
| Resource | light (~200MB idle; spikes during processing) |
| Auth | built-in (optional, disabled by default) |
| Reverse proxy | ✓ |
| Config | env vars, `settings.yml` |
| Backup | stateless — only persist `/configs` if auth is enabled |
| License | GPL-3.0 |
| Maintained | active |

Self-hosted PDF manipulation toolkit. Merge, split, rotate, compress, convert, watermark, sign, OCR, and dozens more operations via a clean web UI. Entirely stateless — files are processed and returned, never stored.

**Pick this if** you need an all-in-one PDF Swiss army knife without uploading sensitive documents to cloud services like ILovePDF or Adobe.

**vs Paperless-ngx** — Stirling-PDF is a stateless tool for one-off PDF operations; Paperless-ngx stores and manages your document archive long-term. Use Stirling-PDF to prep files before feeding them to Paperless-ngx.
**vs BookStack** — No overlap. Stirling-PDF manipulates PDF files; BookStack is a wiki platform.

---

## BookStack

| Field | Value |
|-------|-------|
| URL | https://www.bookstackapp.com |
| Source | https://github.com/BookStackApp/BookStack |
| Deploy | docker, compose, bare metal (PHP + MySQL) |
| Image | `lscr.io/linuxserver/bookstack` |
| Resource | light (~100MB) |
| Auth | built-in, LDAP, SAML, OIDC |
| Reverse proxy | ✓ |
| Config | `.env` file |
| Backup | snapshot database + `/uploads` + `/storage` |
| License | MIT |
| Maintained | active |

Wiki and documentation platform organized around a books/chapters/pages hierarchy. WYSIWYG and Markdown editors, diagrams (draw.io integration), full-text search, role-based permissions, revision history, and PDF/HTML export.

**Pick this if** you want a structured wiki for documentation, runbooks, or knowledge that benefits from a hierarchical book/chapter/page model and a straightforward UI.

**vs Outline** — BookStack if you prefer a rigid hierarchy (books → chapters → pages) and simpler self-hosting; Outline if you want a flatter structure, real-time collaboration, and a Notion-like feel.
**vs Paperless-ngx** — BookStack is for authored documentation; Paperless-ngx is for archived scanned documents. Different purposes, often used side by side.

---

## Outline

| Field | Value |
|-------|-------|
| URL | https://www.getoutline.com |
| Source | https://github.com/outline/outline |
| Deploy | docker, compose |
| Image | `outlinewiki/outline` |
| Resource | medium (~300MB; requires PostgreSQL + Redis + S3-compatible storage) |
| Auth | OIDC required (no built-in username/password) |
| Reverse proxy | ✓ |
| Config | env vars |
| Backup | snapshot PostgreSQL + S3 bucket |
| License | BSL-1.1 (source-available, converts to Apache-2.0 after 4 years) |
| Maintained | active |

Modern, fast wiki designed for teams. Real-time collaborative editing, slash commands, Markdown-native, nested collections, public sharing, API-first. Feels like Notion but self-hosted.

**Pick this if** you want a modern, Notion-like knowledge base with real-time collaboration and you already have an OIDC provider (Authentik, Keycloak, etc.) for auth.

**vs BookStack** — Outline if you want real-time collab, a Notion-like UX, and a flat/flexible structure; BookStack if you prefer strict hierarchy and simpler deployment (no mandatory OIDC).
**vs Paperless-ngx** — Outline is for writing and collaborating on living documents; Paperless-ngx is for archiving scanned/uploaded static documents.
