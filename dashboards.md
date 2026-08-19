---
category: Dashboards
description: Homepage dashboards, startpages, and service overview panels
---

# Dashboards

## Comparison Matrix

| Service | Deploy | Resource | Auth | License | Maintained |
|---------|--------|----------|------|---------|------------|
| [Homarr](#homarr) | docker | medium (~256MB) | built-in, OIDC, LDAP | MIT | active |
| [Homepage](#homepage) | docker, node | light (~128MB) | none (proxy-level) | GPL-3.0 | active |
| [Dashy](#dashy) | docker, node | light (~100MB) | built-in, Keycloak | MIT | active |
| [Homer](#homer) | docker, static | very light (~20MB) | none (proxy-level) | Apache-2.0 | active |
| [Glance](#glance) | docker, binary | very light (~30MB) | none (proxy-level) | AGPL-3.0 | active |

---

## Homarr

| Field | Value |
|-------|-------|
| URL | https://homarr.dev |
| Source | https://github.com/ajnart/homarr |
| Deploy | docker |
| Image | `ghcr.io/ajnart/homarr` |
| Resource | medium (~256MB) |
| Auth | built-in (users/groups), OIDC, LDAP |
| Reverse proxy | ✓ |
| Config | UI (SQLite backend) |
| Backup | snapshot `/appdata` |
| License | MIT |
| Maintained | active |

Feature-rich homelab dashboard with drag-and-drop layout, deep integrations with Sonarr/Radarr/qBittorrent/Docker, and a widget ecosystem. Supports multiple boards, user permissions, and real-time service status.

**Pick this if** you want a polished, interactive dashboard with live service integrations, drag-and-drop editing, and built-in multi-user auth.

**vs Homepage** — Homarr is more interactive with drag-and-drop and deeper media-stack integrations; Homepage is faster to configure via YAML and lighter on resources.

**vs Dashy** — Homarr is more opinionated with a modern UI and built-in integrations; Dashy offers more raw customization (themes, layouts, widgets) via config file.

**vs Homer** — Homarr for dynamic, widget-rich dashboards; Homer for a simple, static links page with zero overhead.

**vs Glance** — Homarr for full service management and integrations; Glance for a minimal RSS/weather/status feed page.

---

## Homepage

| Field | Value |
|-------|-------|
| URL | https://gethomepage.dev |
| Source | https://github.com/gethomepage/homepage |
| Deploy | docker, node |
| Image | `ghcr.io/gethomepage/homepage` |
| Resource | light (~128MB) |
| Auth | none built-in (use reverse proxy) |
| Reverse proxy | ✓ |
| Config | YAML (`services.yaml`, `widgets.yaml`, `bookmarks.yaml`) |
| Backup | snapshot config directory |
| License | GPL-3.0 |
| Maintained | active |

Service-integrated dashboard configured entirely via YAML. Over 100 service integrations (Docker, Kubernetes, Proxmox, *arr stack, network gear) with automatic service discovery. Fast, clean UI with widgets for weather, search, resources, and more.

**Pick this if** you want a config-as-code dashboard that auto-discovers Docker/Kubernetes services and displays live stats with minimal resource use.

**vs Homarr** — Homepage is YAML-driven and lighter; Homarr offers a GUI editor and richer interactivity. Homepage has broader service API integrations out of the box.

**vs Dashy** — Homepage has stronger service-integration widgets (live stats from APIs); Dashy has more visual customization (themes, icon packs, layouts).

**vs Homer** — Homepage is dynamic with live service data; Homer is a fast static page with no API calls.

**vs Glance** — Homepage focuses on service status and discovery; Glance focuses on feeds, weather, and lightweight info panels.

---

## Dashy

| Field | Value |
|-------|-------|
| URL | https://dashy.to |
| Source | https://github.com/Lissy93/dashy |
| Deploy | docker, node |
| Image | `lissy93/dashy` |
| Resource | light (~100MB) |
| Auth | built-in (basic), Keycloak, header auth |
| Reverse proxy | ✓ |
| Config | YAML (`conf.yml`) + UI editor |
| Backup | snapshot `conf.yml` + `item-icons/` |
| License | MIT |
| Maintained | active |

Highly customizable dashboard with 50+ themes, multiple layout modes (grid, sidebar, workspace), status checking, search, keyboard shortcuts, and icon packs. Supports a built-in config editor alongside the YAML file.

**Pick this if** you want maximum visual and layout control — multiple themes, custom CSS, workspace-style views, and a massive icon library.

**vs Homarr** — Dashy is more configurable (themes, layouts, raw YAML power); Homarr is more polished out of the box with deeper live integrations.

**vs Homepage** — Dashy has richer theming and layout options; Homepage has better service API integrations and auto-discovery.

**vs Homer** — Dashy adds themes, status checks, widgets, and a UI editor on top of the static-links concept.

**vs Glance** — Dashy is a full-featured dashboard builder; Glance is a minimalist single-column feed page.

---

## Homer

| Field | Value |
|-------|-------|
| URL | https://homer-demo.netlify.app |
| Source | https://github.com/bastienwirtz/homer |
| Deploy | docker, static files (any web server) |
| Image | `b4bz/homer` |
| Resource | very light (~20MB) |
| Auth | none built-in (use reverse proxy) |
| Reverse proxy | ✓ |
| Config | YAML (`config.yml`) |
| Backup | snapshot `config.yml` + `assets/` |
| License | Apache-2.0 |
| Maintained | active |

Simple static homepage generator configured via a single YAML file. Supports service grouping, custom icons, search, themes, and optional health checks. Serves as plain HTML/JS with no backend.

**Pick this if** you want the lightest possible homepage — a static links page with grouping and search, no database, no API calls, no dependencies.

**vs Homarr** — Homer is a static links page; Homarr is a full interactive dashboard. Homer when you just need bookmarks; Homarr when you want live widgets.

**vs Homepage** — Homer is static and simple; Homepage queries service APIs for live data. Homer for pure speed; Homepage for real-time info.

**vs Dashy** — Homer is intentionally minimal; Dashy is maximal. Homer for "just links"; Dashy for themes/widgets/status.

**vs Glance** — Both are lightweight, but Homer is a links-grid and Glance is a feeds/info-panel layout.

---

## Glance

| Field | Value |
|-------|-------|
| URL | https://github.com/glanceapp/glance |
| Source | https://github.com/glanceapp/glance |
| Deploy | docker, binary (Go) |
| Image | `glanceapp/glance` |
| Resource | very light (~30MB) |
| Auth | none built-in (use reverse proxy) |
| Reverse proxy | ✓ |
| Config | YAML (`glance.yml`) |
| Backup | snapshot `glance.yml` |
| License | AGPL-3.0 |
| Maintained | active |

Lightweight feed dashboard written in Go. Displays RSS feeds, weather, bookmarks, Hacker News, Reddit, calendar, Twitch, GitHub releases, and service monitors in a clean column layout. Single binary, fast startup, minimal resource use.

**Pick this if** you want a personal startpage that aggregates feeds, weather, and bookmarks in a clean layout without the overhead of a full dashboard.

**vs Homarr** — Glance is a personal feed/info page; Homarr is a service management dashboard. Glance for "what's new"; Homarr for "what's running."

**vs Homepage** — Glance focuses on content feeds and information; Homepage focuses on service status and Docker integration.

**vs Dashy** — Glance is minimal and feed-oriented; Dashy is a feature-packed customizable dashboard.

**vs Homer** — Both are lightweight, but Glance is feed-centric (RSS, weather, news) while Homer is a static service-links page.
