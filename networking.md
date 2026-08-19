---
category: Networking
description: Reverse proxies, DNS, VPNs, tunnels, and network management
---

# Networking

## Comparison Matrix

| Service | Deploy | Resource | Auth | License | Maintained |
|---------|--------|----------|------|---------|------------|
| [Nginx Proxy Manager](#nginx-proxy-manager) | docker, compose | light (~100MB) | built-in UI | MIT | active |
| [Traefik](#traefik) | docker, binary, helm | light (~100MB) | none (config-driven) | MIT | active |
| [Caddy](#caddy) | docker, binary | light (~50MB) | none (config-driven) | Apache-2.0 | active |
| [Pi-hole](#pi-hole) | docker, bare metal | light (~100MB) | built-in UI | EUPL-1.2 | active |
| [AdGuard Home](#adguard-home) | docker, binary | light (~80MB) | built-in UI | GPL-3.0 | active |

---

## Nginx Proxy Manager

| Field | Value |
|-------|-------|
| URL | https://nginxproxymanager.com |
| Source | https://github.com/NginxProxyManager/nginx-proxy-manager |
| Deploy | docker, compose |
| Image | `jc21/nginx-proxy-manager` |
| Resource | light (~100MB) |
| Auth | built-in UI login |
| Reverse proxy | IS the reverse proxy |
| Config | UI (generates nginx configs) |
| Backup | snapshot `/data` + `/letsencrypt` |
| License | MIT |
| Maintained | active |

GUI for managing Nginx reverse proxy with Let's Encrypt SSL, access lists, and stream proxying. Point-and-click SSL cert management.

**Pick this if** you want dead-simple reverse proxy management with a GUI and don't want to write config files.

**vs Traefik** — NPM for GUI-first management; Traefik for Docker-native auto-discovery and config-as-code.
**vs Caddy** — NPM for GUI; Caddy for minimal config files with automatic HTTPS.

---

## Traefik

| Field | Value |
|-------|-------|
| URL | https://traefik.io |
| Source | https://github.com/traefik/traefik |
| Deploy | docker, binary, helm |
| Image | `traefik` |
| Resource | light (~100MB) |
| Auth | none built-in (use middleware or external auth) |
| Reverse proxy | IS the reverse proxy |
| Config | YAML/TOML + Docker labels + auto-discovery |
| Backup | stateless (config only) |
| License | MIT |
| Maintained | active |

Cloud-native reverse proxy that auto-discovers services from Docker, Kubernetes, and other providers. Config-as-code via labels.

**Pick this if** you want auto-discovery of Docker containers, dynamic config via labels, and a dashboard for monitoring routes.

**vs NPM** — Traefik for automation and Docker-native workflows; NPM for GUI simplicity.
**vs Caddy** — Traefik for Docker/K8s auto-discovery; Caddy for simplicity and the cleanest config format.

---

## Pi-hole

| Field | Value |
|-------|-------|
| URL | https://pi-hole.net |
| Source | https://github.com/pi-hole/pi-hole |
| Deploy | docker, bare metal install script |
| Image | `pihole/pihole` |
| Resource | light (~100MB) |
| Auth | built-in web UI (password) |
| Reverse proxy | ✓ |
| Config | UI + config files + env vars |
| Backup | built-in `teleporter` export |
| License | EUPL-1.2 |
| Maintained | active |

Network-wide DNS sinkhole for ad blocking. Also functions as a DHCP server and local DNS resolver (great for split-horizon setups).

**Pick this if** you want network-level ad blocking and local DNS management with a mature, well-documented project.

**vs AdGuard Home** — Pi-hole for maturity and community size; AdGuard Home for modern UI, DoH/DoT built-in, and per-client settings.

---

## AdGuard Home

| Field | Value |
|-------|-------|
| URL | https://adguard.com/adguard-home.html |
| Source | https://github.com/AdguardTeam/AdGuardHome |
| Deploy | docker, binary |
| Image | `adguard/adguardhome` |
| Resource | light (~80MB) |
| Auth | built-in web UI |
| Reverse proxy | ✓ |
| Config | YAML + UI |
| Backup | snapshot `/opt/adguardhome/conf` + `/opt/adguardhome/work` |
| License | GPL-3.0 |
| Maintained | active |

DNS-level ad blocking with DNS-over-HTTPS, DNS-over-TLS, and per-client filtering rules built in. More modern UI than Pi-hole.

**Pick this if** you want encrypted DNS (DoH/DoT) out of the box, per-client rules, and a cleaner UI.

**vs Pi-hole** — AdGuard Home for modern features and encrypted DNS; Pi-hole for larger community, more guides, and longer track record.
