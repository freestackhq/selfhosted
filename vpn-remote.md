---
category: VPN & Remote Access
description: VPN servers, mesh networking, remote desktop, and tunneling
---

# VPN & Remote Access

## Comparison Matrix

| Service | Deploy | Resource | Auth | License | Maintained |
|---------|--------|----------|------|---------|------------|
| [WireGuard](#wireguard) | kernel module, docker | minimal (~10MB) | key-pair | GPL-2.0 | active |
| [Tailscale / Headscale](#tailscale--headscale) | binary, docker | light (~50MB) | SSO (Tailscale) / OIDC (Headscale) | BSD-3-Clause / BSD-3-Clause | active |
| [NetBird](#netbird) | binary, docker, compose | light (~80MB) | OIDC / SSO (Authentik, Keycloak, etc.) | BSD-3-Clause | active |
| [Guacamole](#guacamole) | docker, compose | medium (~500MB) | built-in + OIDC/LDAP/SAML | Apache-2.0 | active |

---

## WireGuard

| Field | Value |
|-------|-------|
| URL | https://www.wireguard.com |
| Source | https://github.com/WireGuard |
| Deploy | kernel module, docker (wg-easy, wg-access-server) |
| Image | `ghcr.io/wg-easy/wg-easy` (GUI wrapper) |
| Resource | minimal (~10MB kernel module; ~50MB with GUI wrapper) |
| Auth | pre-shared key-pair (no built-in user auth) |
| Reverse proxy | not applicable (UDP tunnel) |
| Config | config files (`/etc/wireguard/wg0.conf`) or GUI wrapper |
| Backup | snapshot config dir + private keys |
| License | GPL-2.0 |
| Maintained | active |

Extremely fast, modern VPN protocol built into the Linux kernel. Minimal attack surface (~4000 lines of code), cryptographically sound (Noise protocol framework), and outperforms IPsec/OpenVPN on throughput and latency.

**Pick this if** you want raw VPN performance with minimal overhead, already manage your own key distribution, or need a single point-to-point or hub-and-spoke tunnel without extra dependencies.

**vs Tailscale/Headscale** — WireGuard for raw protocol control and zero dependencies; Tailscale/Headscale for automatic key exchange, NAT traversal, and mesh topology.
**vs NetBird** — WireGuard for simplicity and kernel-level speed; NetBird for managed mesh with SSO and ACLs on top of WireGuard.
**vs OpenVPN** — WireGuard for speed, simplicity, and modern crypto; OpenVPN for legacy compatibility and TCP fallback.

---

## Tailscale / Headscale

| Field | Value |
|-------|-------|
| URL | https://tailscale.com (Tailscale) / https://github.com/juanfont/headscale (Headscale) |
| Source | https://github.com/tailscale/tailscale / https://github.com/juanfont/headscale |
| Deploy | binary (client), docker (Headscale control server) |
| Image | `headscale/headscale` (self-hosted control plane) |
| Resource | light (~50MB client; ~30MB Headscale server) |
| Auth | SSO via identity provider (Tailscale SaaS); OIDC (Headscale) |
| Reverse proxy | ✓ (for Headscale admin UI / headscale-ui) |
| Config | CLI + YAML (Headscale) / web UI (Tailscale) |
| Backup | snapshot Headscale SQLite DB + config |
| License | BSD-3-Clause (both) |
| Maintained | active |

Mesh VPN built on WireGuard that handles key exchange, NAT traversal (DERP relays), and peer discovery automatically. Tailscale is the hosted SaaS; Headscale is the self-hosted, open-source control server implementing the Tailscale coordination protocol.

**Pick this if** you want zero-config mesh networking across NATs with automatic peer discovery, MagicDNS, and ACLs — especially if you want to self-host the control plane (Headscale).

**vs WireGuard** — Tailscale/Headscale for automatic mesh topology, NAT traversal, and SSO; raw WireGuard for maximum control and no coordination server.
**vs NetBird** — Tailscale/Headscale for maturity and ecosystem (Funnel, Serve, exit nodes); NetBird for native OIDC integration, network policies, and self-hosted-first design.
**vs Nebula** — Tailscale/Headscale for ease of setup and richer features; Nebula for certificate-based auth and Slack-backed pedigree.

---

## NetBird

| Field | Value |
|-------|-------|
| URL | https://netbird.io |
| Source | https://github.com/netbirdio/netbird |
| Deploy | binary (agent), docker compose (management + signal + TURN) |
| Image | `netbirdio/management`, `netbirdio/signal`, `netbirdio/coturn` |
| Resource | light (~80MB total for self-hosted stack) |
| Auth | OIDC / SSO (Authentik, Keycloak, Zitadel, Auth0, Google, etc.) |
| Reverse proxy | ✓ (management UI + API) |
| Config | web UI + API + CLI (`netbird`) |
| Backup | snapshot management SQLite/Postgres + config |
| License | BSD-3-Clause |
| Maintained | active |

Mesh networking platform that combines WireGuard tunnels with SSO-based identity, network policies (ACLs, routes, DNS), and NAT traversal. Self-hosted-first architecture with a management UI for peer groups, access control, and posture checks.

**Pick this if** you want a self-hosted mesh VPN with first-class SSO integration (e.g., Authentik), granular network policies, and a management UI — especially in a homelab already running an IdP.

**vs Tailscale/Headscale** — NetBird for native self-hosted design with rich ACLs and SSO from day one; Tailscale/Headscale for maturity, larger community, and extra features (Funnel, exit nodes).
**vs WireGuard** — NetBird for managed mesh with identity-based access; WireGuard for raw tunnel performance with manual key management.
**vs ZeroTier** — NetBird for WireGuard-based speed and OIDC auth; ZeroTier for layer-2 virtual networking and longer track record.

---

## Guacamole

| Field | Value |
|-------|-------|
| URL | https://guacamole.apache.org |
| Source | https://github.com/apache/guacamole-server + https://github.com/apache/guacamole-client |
| Deploy | docker, compose |
| Image | `guacamole/guacamole` (client) + `guacamole/guacd` (daemon) |
| Resource | medium (~500MB; Java client + C daemon + DB) |
| Auth | built-in (database) + OIDC, LDAP, SAML, TOTP, header auth |
| Reverse proxy | ✓ |
| Config | web UI + `guacamole.properties` + extensions |
| Backup | snapshot database (MySQL/PostgreSQL) + config |
| License | Apache-2.0 |
| Maintained | active |

Clientless remote desktop gateway — access RDP, VNC, SSH, Telnet, and Kubernetes terminals through a web browser with no plugins or client software required. Supports session recording, file transfer, and multi-factor auth.

**Pick this if** you want browser-based remote access to desktops and servers without installing client software — ideal for accessing Windows machines, jumpboxes, or lab hosts from any device.

**vs RustDesk** — Guacamole for browser-based access to existing RDP/VNC/SSH; RustDesk for peer-to-peer remote desktop with its own client.
**vs MeshCentral** — Guacamole for protocol-gateway simplicity (RDP/VNC/SSH via browser); MeshCentral for full remote management suite with agents, file transfer, and device inventory.
**vs Apache NiFi + SSH** — Guacamole for interactive GUI/terminal sessions; direct SSH/RDP for scripted access without a web layer.
