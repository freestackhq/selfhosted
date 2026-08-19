---
category: Games & Game Servers
description: Game servers, game management panels, and multiplayer hosting
---

# Games & Game Servers

## Comparison Matrix

| Service | Deploy | Resource | Auth | License | Maintained |
|---------|--------|----------|------|---------|------------|
| [Pelican Panel](#pelican-panel) | docker, compose, binary | medium (~512MB) | built-in, LDAP | AGPL-3.0 | active |
| [Crafty Controller](#crafty-controller) | docker, compose, binary | light (~200MB) | built-in | GPL-3.0 | active |
| [Sunshine](#sunshine) | binary, package | light (~100MB) | PIN pairing | GPL-3.0 | active |
| [LinuxGSM](#linuxgsm) | script (bash) | light (~50MB + game) | none (CLI) | MIT | active |

---

## Pelican Panel

| Field | Value |
|-------|-------|
| URL | https://pelican.dev |
| Source | https://github.com/pelican-dev/panel |
| Deploy | docker, compose, binary |
| Image | `ghcr.io/pelican-dev/panel:latest` |
| Resource | medium (~512MB panel + Wings daemon per node) |
| Auth | built-in, LDAP |
| Reverse proxy | ✓ |
| Config | `.env` + web UI + YAML eggs |
| Backup | snapshot database + `/var/lib/pelican/volumes` |
| License | AGPL-3.0 |
| Maintained | active |

Community-driven successor to Pterodactyl Panel. Web-based game server management with full Docker isolation — each game server runs in its own container with dedicated resources. Supports hundreds of games via "eggs" (server templates). Two components: Panel (web UI, API, database) and Wings (daemon that provisions and manages containers on each node).

**Pick this if** you want a polished web UI to manage multiple game servers across multiple machines, with per-user permissions, Docker isolation, and a large ecosystem of community eggs.

**vs Crafty Controller** — Pelican for multi-game, multi-node hosting with Docker isolation and user management; Crafty if you only need Minecraft and want a simpler single-node setup.
**vs LinuxGSM** — Pelican if you want a web UI, user accounts, and Docker isolation; LinuxGSM if you prefer CLI-only, no overhead, and direct access to game server files.

---

## Crafty Controller

| Field | Value |
|-------|-------|
| URL | https://craftycontrol.com |
| Source | https://gitlab.com/crafty-controller/crafty-4 |
| Deploy | docker, compose, binary |
| Image | `registry.gitlab.com/crafty-controller/crafty-4:latest` |
| Resource | light (~200MB idle) |
| Auth | built-in (role-based) |
| Reverse proxy | ✓ (panel runs HTTPS on 8443 by default) |
| Config | web UI + SQLite database |
| Backup | built-in scheduled backups + snapshot `/crafty/backups` |
| License | GPL-3.0 |
| Maintained | active |

Minecraft-focused server management panel. Supports Java and Bedrock editions. Web UI for creating servers, managing players, running commands, editing files, and scheduling backups. Built in Python, lightweight, and designed for single-node deployments.

**Pick this if** you only run Minecraft servers (Java + Bedrock) and want a dedicated, lightweight panel with built-in backup scheduling and a file manager.

**vs Pelican Panel** — Crafty if Minecraft is all you need and you want simplicity; Pelican if you host multiple game types or need multi-node orchestration.
**vs LinuxGSM** — Crafty if you want a Minecraft-specific web UI with backup scheduling; LinuxGSM if you prefer CLI management and support for many game types beyond Minecraft.

---

## Sunshine

| Field | Value |
|-------|-------|
| URL | https://app.lizardbyte.dev/Sunshine |
| Source | https://github.com/LizardByte/Sunshine |
| Deploy | binary, package (deb, rpm, flatpak, exe, dmg) |
| Image | n/a (runs as system service, not containerized) |
| Resource | light (~100MB idle, GPU required for encoding) |
| Auth | PIN pairing (Moonlight client pairs with host) |
| Reverse proxy | not applicable (streams over RTSP/UDP) |
| Config | web UI (port 47990) + `sunshine.conf` |
| Backup | snapshot config directory |
| License | GPL-3.0 |
| Maintained | active |

Self-hosted game streaming host for Moonlight clients. Low-latency remote desktop and game streaming with hardware encoding support for AMD, Intel, and Nvidia GPUs. Software encoding fallback available. Replaces Nvidia GameStream (discontinued). Connect from any Moonlight client on PC, Mac, Android, iOS, or TV.

**Pick this if** you want to stream games or your desktop from a host machine to other devices with minimal latency, especially as a replacement for Nvidia GameStream.

**vs Pelican Panel** — entirely different use case. Sunshine streams games to remote displays; Pelican manages dedicated game server processes.
**vs LinuxGSM** — Sunshine is for playing games remotely on your own hardware; LinuxGSM is for hosting multiplayer dedicated servers for others to connect to.

---

## LinuxGSM

| Field | Value |
|-------|-------|
| URL | https://linuxgsm.com |
| Source | https://github.com/GameServerManagers/LinuxGSM |
| Deploy | script (bash) |
| Image | `gameservermanagers/linuxgsm` (community Docker image) |
| Resource | light (~50MB + game server requirements) |
| Auth | none (CLI tool, SSH access) |
| Reverse proxy | not applicable (game traffic is direct UDP/TCP) |
| Config | cfg files per game server instance |
| Backup | built-in backup command + cron scheduling |
| License | MIT |
| Maintained | active |

Command-line tool for quick deployment and management of 120+ Linux dedicated game servers. Handles installation, updates, monitoring, backups, and alerts via simple commands (`./csgoserver start`, `./csgoserver update`). No web UI — designed for admins comfortable with the terminal.

**Pick this if** you want the fastest path to a running game server with minimal overhead, prefer CLI workflows, and don't need a web UI or multi-user access control.

**vs Pelican Panel** — LinuxGSM if you want zero overhead and direct file access; Pelican if you need a web UI, user permissions, and Docker isolation.
**vs Crafty Controller** — LinuxGSM if you want broad game support (120+ games) via CLI; Crafty if you specifically want a Minecraft web panel with GUI management.
