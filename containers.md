---
category: Containers & Orchestration
description: Container management, orchestration, and self-hosting platforms
---

# Containers & Orchestration

## Comparison Matrix

| Service | Deploy | Resource | Auth | License | Maintained |
|---------|--------|----------|------|---------|------------|
| [Portainer](#portainer) | docker | medium (~256MB) | built-in, LDAP, OAuth | Business Edition / CE (Zlib) | active |
| [Coolify](#coolify) | docker (self-install script) | heavy (~1GB+) | built-in, OAuth | Apache-2.0 | active |
| [Dockge](#dockge) | docker | light (~128MB) | built-in (multi-user) | MIT | active |
| [CasaOS](#casaos) | install script (bare metal) | medium (~512MB) | built-in (single-user) | Apache-2.0 | active |

---

## Portainer

| Field | Value |
|-------|-------|
| URL | https://www.portainer.io |
| Source | https://github.com/portainer/portainer |
| Deploy | docker |
| Image | `portainer/portainer-ce` |
| Resource | medium (~256MB) |
| Auth | built-in (users/teams/roles), LDAP, OAuth 2.0 |
| Reverse proxy | ✓ |
| Config | UI (internal database) |
| Backup | snapshot `/data` volume |
| License | Zlib (CE), proprietary (Business Edition) |
| Maintained | active |

Full-featured Docker and Kubernetes management UI. Provides container lifecycle management, stack deployment (compose), image management, network/volume configuration, registries, environment management, and role-based access control. Supports multi-node via Portainer Agent or Edge Agent for remote/edge environments.

**Pick this if** you need a production-grade container management UI with RBAC, multi-environment support (Docker standalone, Swarm, Kubernetes), and team workflows.

**vs Coolify** — Portainer is a container management platform (operate what's running); Coolify is a deployment platform (push code, get a running app). Portainer for ops visibility; Coolify for developer PaaS workflows.

**vs Dockge** — Portainer covers the full Docker/K8s surface (containers, images, networks, volumes, registries); Dockge focuses purely on compose stack management with a cleaner UX for that one job.

**vs CasaOS** — Portainer is a professional container management tool; CasaOS is a consumer-friendly home-server OS. Portainer for power users managing infrastructure; CasaOS for non-technical users who want an app-store experience.

---

## Coolify

| Field | Value |
|-------|-------|
| URL | https://coolify.io |
| Source | https://github.com/coollabsio/coolify |
| Deploy | docker (automated install script) |
| Image | `ghcr.io/coollabsio/coolify` (multi-container stack) |
| Resource | heavy (~1GB+ RAM; runs multiple services) |
| Auth | built-in (teams/projects), OAuth (GitHub, GitLab, etc.) |
| Reverse proxy | ✓ (built-in Traefik, auto-TLS via Let's Encrypt) |
| Config | UI + environment variables |
| Backup | built-in database/volume backups to S3-compatible storage |
| License | Apache-2.0 |
| Maintained | active |

Self-hostable PaaS alternative to Heroku, Vercel, and Netlify. Deploys apps from Git repos (any language/framework), supports Dockerfiles, docker-compose, and pre-built images. Includes automatic SSL, preview deployments, database provisioning (Postgres, MySQL, Redis, MongoDB), S3 backups, webhooks, and multi-server management.

**Pick this if** you want a self-hosted Heroku/Vercel — push code to Git, get automatic builds, TLS certificates, preview deploys, and managed databases without touching compose files or reverse proxy config.

**vs Portainer** — Coolify is for deploying applications from source code (developer PaaS); Portainer is for managing existing containers and infrastructure (ops tool). Use Coolify to ship apps; use Portainer to inspect and manage them.

**vs Dockge** — Coolify handles the full deploy pipeline (git → build → deploy → TLS → monitoring); Dockge is a lightweight compose file manager. Coolify for teams shipping apps; Dockge for homelab users managing stacks.

**vs CasaOS** — Coolify is developer-oriented (git integration, CI/CD, multi-server); CasaOS is consumer-oriented (app store, file manager, simple UI). Coolify replaces your PaaS; CasaOS replaces your NAS OS.

---

## Dockge

| Field | Value |
|-------|-------|
| URL | https://dockge.kuma.pet |
| Source | https://github.com/louislam/dockge |
| Deploy | docker |
| Image | `louislam/dockge` |
| Resource | light (~128MB) |
| Auth | built-in (username/password, multi-user) |
| Reverse proxy | ✓ |
| Config | compose files on disk (`/opt/stacks/`) |
| Backup | snapshot stacks directory (standard compose files) |
| License | MIT |
| Maintained | active |

Compose stack manager from the creator of Uptime Kuma. Manages `docker-compose.yml` files directly on disk — no database, no abstraction layer. Features a real-time terminal, interactive compose editor, container status, and multi-agent support for managing stacks across multiple hosts.

**Pick this if** you want a clean, focused UI for managing docker-compose stacks that keeps your compose files as plain files on disk — no vendor lock-in, no abstraction, git-friendly.

**vs Portainer** — Dockge is compose-only with a simpler UX and files-on-disk philosophy; Portainer covers the entire Docker/K8s surface but abstracts compose files into its own database. Dockge for compose purists; Portainer for full platform management.

**vs Coolify** — Dockge manages existing compose stacks; Coolify builds and deploys apps from source. Dockge for "I wrote my compose file, help me run it"; Coolify for "here's my Git repo, deploy it."

**vs CasaOS** — Dockge gives you direct compose file control with a lightweight UI; CasaOS hides Docker behind an app-store metaphor. Dockge for users who think in compose; CasaOS for users who think in apps.

---

## CasaOS

| Field | Value |
|-------|-------|
| URL | https://casaos.io |
| Source | https://github.com/IceWhaleTech/CasaOS |
| Deploy | install script (bare metal on Debian/Ubuntu/RPi OS) |
| Image | N/A (system-level install; apps run as Docker containers) |
| Resource | medium (~512MB base; varies by apps installed) |
| Auth | built-in (single user, local auth) |
| Reverse proxy | built-in (basic), or add your own |
| Config | UI (app store + settings panels) |
| Backup | app data via UI; system snapshots recommended separately |
| License | Apache-2.0 |
| Maintained | active |

Home server operating system with a polished web UI and one-click app store. Installs on top of existing Linux and provides file management, Docker app deployment (via curated store or custom compose), storage management, and a desktop-like web interface. Built by IceWhale (ZimaBoard makers).

**Pick this if** you want a friendly, consumer-grade home server experience — install apps from a store, manage files, and share storage without touching the terminal or writing YAML.

**vs Portainer** — CasaOS is a full home-server OS experience (files, storage, app store); Portainer is purely a container management tool. CasaOS for appliance-like simplicity; Portainer for Docker/K8s power users.

**vs Coolify** — CasaOS is for running pre-packaged self-hosted apps at home; Coolify is for deploying your own applications from source code. CasaOS replaces Synology/Unraid; Coolify replaces Heroku.

**vs Dockge** — CasaOS wraps Docker in an app-store UI with file/storage management; Dockge exposes raw compose files with a thin management layer. CasaOS for "I want a NAS with apps"; Dockge for "I want to manage my stacks."
