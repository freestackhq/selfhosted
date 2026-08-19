---
category: Tasks & Projects
description: Task management, project tracking, kanban boards, and team collaboration
---

# Tasks & Projects

## Comparison Matrix

| Service | Deploy | Resource | Auth | License | Maintained |
|---------|--------|----------|------|---------|------------|
| [Vikunja](#vikunja) | docker, binary | light (~128MB) | built-in, OIDC, LDAP | AGPL-3.0 | active |
| [Plane](#plane) | docker | heavy (~1GB+) | built-in, OIDC, SAML | AGPL-3.0 | active |
| [Huly](#huly) | docker | heavy (~1.5GB+) | built-in, OIDC | EPL-2.0 | active |
| [Kanboard](#kanboard) | docker, binary | light (~64MB) | built-in, LDAP, OIDC | MIT | active |

---

## Vikunja

| Field | Value |
|-------|-------|
| URL | https://vikunja.io |
| Source | https://github.com/go-vikunja/vikunja |
| Deploy | docker, binary (Go) |
| Image | `vikunja/vikunja` |
| Resource | light (~128MB) |
| Auth | built-in, OIDC, LDAP |
| Reverse proxy | ✓ |
| Config | `config.yml` + env vars |
| Backup | snapshot database (SQLite/MySQL/PostgreSQL) + `/app/vikunja/files` |
| License | AGPL-3.0 |
| Maintained | active |

A full-featured to-do and project management app with lists, kanban, gantt charts, calendars, and reminders. Single Go binary with a Vue.js frontend — fast, low-resource, and easy to deploy. Supports CalDAV sync, file attachments, labels, priorities, assignees, and recurring tasks.

**Pick this if** you want a personal or small-team task manager that covers to-dos, lists, and light project management without the weight of a full PM suite.

**vs Plane** — Vikunja is lighter and more personal-productivity focused (Todoist/Wunderlist replacement). Plane targets teams doing sprint planning and issue tracking (Jira replacement).

**vs Huly** — Vikunja is simpler and resource-friendly. Huly bundles docs, chat, and HR alongside task management. Choose Vikunja if you only need tasks.

**vs Kanboard** — Both are lightweight, but Vikunja has a modern UI, mobile apps, caldav, and more task features. Kanboard is simpler and pure kanban.

---

## Plane

| Field | Value |
|-------|-------|
| URL | https://plane.so |
| Source | https://github.com/makeplane/plane |
| Deploy | docker (docker-compose) |
| Image | `makeplane/plane-*` (multiple services) |
| Resource | heavy (~1GB+; PostgreSQL + Redis + MinIO + workers) |
| Auth | built-in, OIDC, SAML, Google/GitHub OAuth |
| Reverse proxy | ✓ |
| Config | env vars (`.env` files) |
| Backup | snapshot PostgreSQL + MinIO bucket |
| License | AGPL-3.0 |
| Maintained | active |

Open-source project management tool built as a Jira/Linear alternative. Issues, cycles (sprints), modules, views, pages (docs), and a beautiful UI. Supports custom workflows, bulk operations, analytics dashboards, and intake/triage flows.

**Pick this if** you want a modern, team-oriented issue tracker with sprint planning, roadmaps, and a Linear-like UX — and you have the resources to run it.

**vs Vikunja** — Plane is heavier but purpose-built for team engineering workflows (sprints, modules, roadmaps). Vikunja is better for personal task management.

**vs Huly** — Both target teams, but Plane focuses on project/issue tracking while Huly bundles chat, docs, and HR. Plane has a more polished issue-tracking UX.

**vs Kanboard** — Plane is a full PM suite; Kanboard is a minimal kanban board. Plane when you need sprints and analytics; Kanboard when you want simplicity.

---

## Huly

| Field | Value |
|-------|-------|
| URL | https://huly.io |
| Source | https://github.com/hcengineering/platform |
| Deploy | docker (docker-compose) |
| Image | `hardcoreeng/huly` (multi-container stack) |
| Resource | heavy (~1.5GB+; MongoDB + MinIO + Elastic + multiple services) |
| Auth | built-in, OIDC |
| Reverse proxy | ✓ |
| Config | env vars + docker-compose |
| Backup | snapshot MongoDB + MinIO |
| License | EPL-2.0 |
| Maintained | active |

All-in-one project management platform combining issues, documents, chat, HR, and time tracking. Real-time collaborative editing, Slack-like communication, and a polished UI. Aims to replace Linear + Notion + Slack in one self-hosted package.

**Pick this if** you want a single platform for project management, team chat, and documentation — and you have the resources to run a larger stack.

**vs Vikunja** — Huly is far heavier and team-focused. Vikunja is ideal for personal to-dos and light project work without the overhead.

**vs Plane** — Huly bundles more (chat, docs, HR); Plane has a more focused and polished issue-tracking experience. Choose Plane for engineering PM, Huly if you want fewer separate tools.

**vs Kanboard** — Completely different weight classes. Kanboard for minimal kanban; Huly for teams wanting an integrated workspace.

---

## Kanboard

| Field | Value |
|-------|-------|
| URL | https://kanboard.org |
| Source | https://github.com/kanboard/kanboard |
| Deploy | docker, binary (PHP) |
| Image | `kanboard/kanboard` |
| Resource | light (~64MB) |
| Auth | built-in, LDAP, OIDC (via plugin), reverse proxy auth |
| Reverse proxy | ✓ |
| Config | `config.php` + env vars |
| Backup | snapshot SQLite/MySQL/PostgreSQL database + `data/` dir |
| License | MIT |
| Maintained | active |

Minimalist kanban board focused on simplicity. No bloat — drag-and-drop tasks across columns, swimlanes, subtasks, time tracking, and analytics. Plugin system for extending functionality. Works great on low-powered hardware.

**Pick this if** you want a dead-simple, no-frills kanban board with the smallest footprint and easy maintenance.

**vs Vikunja** — Kanboard is purer kanban with a more spartan UI. Vikunja has a modern interface, multiple views (list/kanban/gantt/calendar), and mobile apps.

**vs Plane** — Kanboard is minimal and personal; Plane is a full team PM suite. Kanboard if you just need cards on a board; Plane for sprint planning and roadmaps.

**vs Huly** — Kanboard for solo lightweight kanban; Huly for teams wanting an integrated all-in-one platform.
