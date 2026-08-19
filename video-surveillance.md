---
category: Video Surveillance
description: NVR, camera management, motion detection, and AI-powered monitoring
---

# Video Surveillance

## Comparison Matrix

| Service | Deploy | Resource | Auth | License | Maintained |
|---------|--------|----------|------|---------|------------|
| [Frigate](#frigate) | docker, compose | heavy (~1GB + AI accelerator recommended) | none (proxy auth) | MIT | active |
| [ZoneMinder](#zoneminder) | docker, compose, package | heavy (~1GB + MySQL) | built-in | GPL-2.0 | active |
| [Viseron](#viseron) | docker | heavy (~1GB + GPU optional) | none (proxy auth) | MIT | active |
| [Shinobi](#shinobi) | docker, compose, script | medium (~500MB + MySQL/MariaDB) | built-in, LDAP | AGPL-3.0 | maintenance |

---

## Frigate

| Field | Value |
|-------|-------|
| URL | https://frigate.video |
| Source | https://github.com/blakeblackshear/frigate |
| Deploy | docker, compose |
| Image | `ghcr.io/blakeblackshear/frigate:stable` |
| Resource | heavy (~1GB idle; AI accelerator strongly recommended — Coral TPU or GPU) |
| Auth | none (use reverse proxy auth) |
| Reverse proxy | ✓ |
| Config | YAML (`config.yml`) |
| Backup | snapshot `/config` and `/media` (recordings/clips) |
| License | MIT |
| Maintained | active |

AI-powered NVR with realtime local object detection for IP cameras. Uses TensorFlow/OpenVINO/ONNX for detection, supports Google Coral TPU and various GPU accelerators. Tight Home Assistant integration via MQTT and a custom component. Features include 24/7 recording, motion-triggered object detection, zone-based alerts, RTSP re-streaming, WebRTC live view, and a review workflow for events.

**Pick this if** you want the best-in-class AI object detection NVR, use Home Assistant, or have a Coral TPU / GPU available for inference. The modern UI, active community, and detection accuracy make it the top choice for homelabbers.

**vs ZoneMinder** — Frigate if you want modern AI detection, better UX, and Home Assistant integration; ZoneMinder if you need a traditional CCTV platform with decades of maturity, PTZ control, or zone-based legacy motion detection.
**vs Viseron** — Frigate if you want the larger community, better docs, polished UI, and Home Assistant support; Viseron if you want face recognition built-in or prefer a more modular/plugin architecture.
**vs Shinobi** — Frigate if you want AI detection and modern architecture; Shinobi if you need multi-tenant accounts, browser-based management for many cameras, or don't need AI.

---

## ZoneMinder

| Field | Value |
|-------|-------|
| URL | https://zoneminder.com |
| Source | https://github.com/ZoneMinder/zoneminder |
| Deploy | docker, compose, package |
| Image | `ghcr.io/zoneminder/zoneminder` (community: `dlandon/zoneminder.master-docker`) |
| Resource | heavy (~1GB + requires MySQL/MariaDB) |
| Auth | built-in (users/roles) |
| Reverse proxy | ✓ (Apache/nginx) |
| Config | web UI + `/etc/zm/` config files |
| Backup | snapshot MySQL DB + `/var/cache/zoneminder/events` |
| License | GPL-2.0 |
| Maintained | active |

Traditional open-source CCTV software with 20+ years of development. Supports IP, USB, and analog cameras. Features include zone-based motion detection, PTZ control, event recording, email/SMS alerts, multi-user access control, and an API. Can be extended with machine learning via the Event Notification Server (zmeventnotification) for object/face detection.

**Pick this if** you want a battle-tested, feature-complete CCTV platform with granular zone configuration, PTZ support, and don't mind the legacy UI. Good for large camera counts with traditional motion detection requirements.

**vs Frigate** — ZoneMinder if you want PTZ control, traditional zone-based motion detection, or need the maturity of a 20-year-old project; Frigate if you want modern AI detection, better UX, and lower-latency live views.
**vs Viseron** — ZoneMinder if you need traditional CCTV features (PTZ, multi-user); Viseron if you want a more modern AI-first approach without the legacy baggage.
**vs Shinobi** — ZoneMinder if you want GPL licensing and proven stability; Shinobi if you prefer a modern Node.js stack and multi-tenant architecture.

---

## Viseron

| Field | Value |
|-------|-------|
| URL | https://viseron.netlify.app |
| Source | https://github.com/roflcoopter/viseron |
| Deploy | docker |
| Image | `roflcoopter/viseron` |
| Resource | heavy (~1GB; GPU recommended for AI — supports CUDA, VAAPI, EdgeTPU, Hailo) |
| Auth | none (use reverse proxy auth) |
| Reverse proxy | ✓ |
| Config | YAML (`config.yaml`) |
| Backup | snapshot `/config` and `/recordings` |
| License | MIT |
| Maintained | active |

Self-hosted, local-only NVR with AI computer vision. Features object detection, motion detection, face recognition, license plate recognition, and post-processing. Modular component architecture supports multiple detection backends (DeepStack, CodeProject.AI, YOLO, EdgeTPU, Hailo). Includes a web UI with live views and event browsing.

**Pick this if** you want built-in face recognition or license plate detection, prefer a modular plugin architecture, or want to run multiple AI backends simultaneously. Good alternative to Frigate if you don't use Home Assistant.

**vs Frigate** — Viseron if you want native face recognition, don't use Home Assistant, or prefer its plugin system; Frigate if you want larger community, better docs, more polished UI, and tighter HA integration.
**vs ZoneMinder** — Viseron if you want modern AI without legacy baggage; ZoneMinder if you need PTZ, multi-user, or traditional CCTV features.
**vs Shinobi** — Viseron if you want AI-first with face/plate recognition; Shinobi if you need multi-tenant management or a simpler non-AI setup.

---

## Shinobi

| Field | Value |
|-------|-------|
| URL | https://shinobi.video |
| Source | https://gitlab.com/Shinobi-Systems/Shinobi |
| Deploy | docker, compose, script |
| Image | `shinobicctv/shinobi` |
| Resource | medium (~500MB + MySQL/MariaDB) |
| Auth | built-in (multi-account, API keys), LDAP |
| Reverse proxy | ✓ |
| Config | web UI + `conf.json` |
| Backup | snapshot MySQL DB + `/opt/shinobi/videos` |
| License | AGPL-3.0 |
| Maintained | maintenance |

Open-source CCTV platform written in Node.js. Designed for multi-account/multi-tenant use with WebSocket-based streaming. Supports 6000+ camera models via ONVIF/RTSP/MJPEG. Features include motion detection, recording schedules, two-factor auth, plugin system for object detection (via external plugins), and a developer-friendly API.

**Pick this if** you need multi-tenant camera management (separate accounts per user/site), want a modern Node.js stack, or need an API-first platform for integration. Good for small businesses managing cameras across multiple locations.

**vs Frigate** — Shinobi if you need multi-tenant accounts or don't need AI; Frigate if you want object detection, Home Assistant integration, and active development.
**vs ZoneMinder** — Shinobi if you want modern architecture, multi-tenant, and WebSocket streaming; ZoneMinder if you want GPL licensing, PTZ control, and proven long-term stability.
**vs Viseron** — Shinobi if you need multi-user accounts and simpler non-AI recording; Viseron if you want native AI detection and face recognition.
