---
category: Media Management
description: Media library automation, downloading, organizing, and metadata management
---

# Media Management

## Comparison Matrix

| Service | Deploy | Resource | Auth | License | Maintained |
|---------|--------|----------|------|---------|------------|
| [Sonarr](#sonarr) | docker, compose, binary, package | light (~150MB) | API key + forms auth | GPL-3.0 | active |
| [Radarr](#radarr) | docker, compose, binary, package | light (~150MB) | API key + forms auth | GPL-3.0 | active |
| [Prowlarr](#prowlarr) | docker, compose, binary, package | light (~100MB) | API key + forms auth | GPL-3.0 | active |
| [Bazarr](#bazarr) | docker, compose, binary | light (~100MB) | API key + forms auth | GPL-3.0 | active |

---

## Sonarr

| Field | Value |
|-------|-------|
| URL | https://sonarr.tv |
| Source | https://github.com/Sonarr/Sonarr |
| Deploy | docker, compose, binary, package |
| Image | `linuxserver/sonarr` / `ghcr.io/hotio/sonarr` |
| Resource | light (~150MB idle) |
| Auth | API key + built-in forms auth |
| Reverse proxy | ✓ (base URL support) |
| Config | UI + SQLite DB + `config.xml` |
| Backup | snapshot `/config` (includes DB, config, logs) |
| License | GPL-3.0 |
| Maintained | active |

PVR for TV series. Monitors RSS feeds and indexers for new episodes, grabs them via Usenet or BitTorrent download clients, sorts and renames files, and upgrades quality when better releases appear. Integrates with Prowlarr for indexer management.

**Pick this if** you want automated TV show downloading with quality profiles, season packs, calendar tracking, and automatic library organization.

**vs Radarr** — Sonarr is TV-only; Radarr is the same concept but for movies. Use both together for a complete library.
**vs Medusa/SickChill** — Sonarr has a modern UI, better API, active development, and tighter integration with the *arr ecosystem. Medusa/SickChill are legacy alternatives with dwindling communities.

---

## Radarr

| Field | Value |
|-------|-------|
| URL | https://radarr.video |
| Source | https://github.com/Radarr/Radarr |
| Deploy | docker, compose, binary, package |
| Image | `linuxserver/radarr` / `ghcr.io/hotio/radarr` |
| Resource | light (~150MB idle) |
| Auth | API key + built-in forms auth |
| Reverse proxy | ✓ (base URL support) |
| Config | UI + SQLite DB + `config.xml` |
| Backup | snapshot `/config` (includes DB, config, logs) |
| License | GPL-3.0 |
| Maintained | active |

Movie collection manager for Usenet and BitTorrent. Monitors watchlists and RSS feeds for new movies, interfaces with download clients and indexers to grab, sort, and rename them. Supports quality profiles, custom formats, and automatic upgrades.

**Pick this if** you want automated movie downloading with wishlists, quality upgrades, custom formats for preferred releases, and integration with Plex/Jellyfin/Emby.

**vs Sonarr** — Radarr is movies; Sonarr is TV. Fork of Sonarr adapted for movie workflows (no seasons/episodes, different metadata sources). Use both together.
**vs CouchPotato** — CouchPotato is abandoned. Radarr is the direct spiritual successor with active development, better UI, and broader integration.

---

## Prowlarr

| Field | Value |
|-------|-------|
| URL | https://prowlarr.com |
| Source | https://github.com/Prowlarr/Prowlarr |
| Deploy | docker, compose, binary, package |
| Image | `linuxserver/prowlarr` / `ghcr.io/hotio/prowlarr` |
| Resource | light (~100MB idle) |
| Auth | API key + built-in forms auth |
| Reverse proxy | ✓ (base URL support) |
| Config | UI + SQLite DB + `config.xml` |
| Backup | snapshot `/config` (includes DB, config, logs) |
| License | GPL-3.0 |
| Maintained | active |

Indexer manager and proxy for the *arr stack. Manages both torrent trackers and Usenet indexers in one place, syncing them to Sonarr, Radarr, Lidarr, and Readarr. No per-app indexer configuration needed — add once in Prowlarr and sync everywhere.

**Pick this if** you run multiple *arr apps and want centralized indexer management with automatic sync, or if you want to search across all indexers from a single UI.

**vs Jackett** — Prowlarr is the modern replacement. Native *arr integration (auto-sync indexers), built on the same stack, supports Cardigann definitions. Jackett still works but requires manual per-app indexer setup and doesn't sync configuration.
**vs NZBHydra2** — NZBHydra2 is Usenet-only; Prowlarr handles both Usenet and torrents. Prowlarr has tighter arr-stack integration. NZBHydra2 has better search statistics if you only use Usenet.

---

## Bazarr

| Field | Value |
|-------|-------|
| URL | https://www.bazarr.media |
| Source | https://github.com/morpheus65535/bazarr |
| Deploy | docker, compose, binary |
| Image | `linuxserver/bazarr` / `ghcr.io/hotio/bazarr` |
| Resource | light (~100MB idle) |
| Auth | API key + built-in forms auth |
| Reverse proxy | ✓ (base URL support) |
| Config | UI + SQLite DB + `config.ini` |
| Backup | snapshot `/config` (includes DB, config) |
| License | GPL-3.0 |
| Maintained | active |

Companion application to Sonarr and Radarr for automated subtitle management. Monitors your library, searches multiple subtitle providers (OpenSubtitles, Addic7ed, Subscene, etc.), downloads matching subtitles, and keeps them synced as your library changes. Supports multiple languages, hearing-impaired subtitles, and forced subtitles.

**Pick this if** you watch content in multiple languages or want automatic subtitle downloads without manual searching. Essential if your library serves non-English speakers.

**vs manual subtitle downloads** — Bazarr automates the entire workflow: matching, downloading, renaming, and re-downloading if a better subtitle appears or your media file changes.
**vs Jellyfin/Plex built-in subtitle search** — Media servers can search for subtitles on-demand but don't pre-download or monitor. Bazarr ensures subtitles are ready before you hit play.
