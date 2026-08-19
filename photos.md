---
category: Photos
description: Photo and video management, backup, and sharing
---

# Photos

## Comparison Matrix

| Service | Deploy | Resource | Auth | License | Maintained |
|---------|--------|----------|------|---------|------------|
| [Immich](#immich) | docker, compose | heavy (~1.5GB) | built-in, OAuth2 | AGPL-3.0 | active |
| [PhotoPrism](#photoprism) | docker, compose | medium (~500MB) | built-in | AGPL-3.0 | active |

---

## Immich

| Field | Value |
|-------|-------|
| URL | https://immich.app |
| Source | https://github.com/immich-app/immich |
| Deploy | docker, compose |
| Image | `ghcr.io/immich-app/immich-server` |
| Resource | heavy (~1.5GB with ML, less without) |
| Auth | built-in, OAuth2 |
| Reverse proxy | ✓ |
| Config | env vars (`.env` file) |
| Backup | PostgreSQL dump + `/upload` volume |
| License | AGPL-3.0 |
| Maintained | active |

Google Photos alternative with mobile auto-backup, facial recognition, map view, shared albums, and ML-powered search. Excellent mobile apps (iOS/Android).

**Pick this if** you want the closest experience to Google Photos with auto-backup from phone, face detection, and ML search.

**vs PhotoPrism** — Immich for mobile-first auto-backup workflow; PhotoPrism for existing photo libraries and DAM-style browsing.

> **Note:** Immich is under very active development. Breaking changes between versions are common. Check release notes before upgrading.

---

## PhotoPrism

| Field | Value |
|-------|-------|
| URL | https://www.photoprism.app |
| Source | https://github.com/photoprism/photoprism |
| Deploy | docker, compose |
| Image | `photoprism/photoprism` |
| Resource | medium (~500MB, more during indexing) |
| Auth | built-in |
| Reverse proxy | ✓ |
| Config | env vars, `options.yml` |
| Backup | snapshot DB + sidecar files |
| License | AGPL-3.0 |
| Maintained | active |

AI-powered photo management that indexes your existing library. Face/object detection, map views, albums. More focused on browsing/organizing than mobile backup.

**Pick this if** you have an existing photo library on disk and want to browse it with AI-powered search without moving files around.

**vs Immich** — PhotoPrism for organizing existing libraries; Immich for phone-to-server auto-backup workflow.
