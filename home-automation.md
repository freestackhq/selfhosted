---
category: Home Automation
description: Smart home platforms, IoT management, and device control
---

# Home Automation

## Comparison Matrix

| Service | Deploy | Resource | Auth | License | Maintained |
|---------|--------|----------|------|---------|------------|
| [Home Assistant](#home-assistant) | docker, OS image, venv | medium (~512MB) | built-in, OIDC (via proxy) | Apache-2.0 | active |
| [openHAB](#openhab) | docker, package, binary | heavy (~1GB JVM) | built-in, OIDC (via proxy) | EPL-2.0 | active |
| [Node-RED](#node-red) | docker, npm | light (~150MB) | built-in, httpNodeAuth | Apache-2.0 | active |

---

## Home Assistant

| Field | Value |
|-------|-------|
| URL | https://www.home-assistant.io |
| Source | https://github.com/home-assistant/core |
| Deploy | docker, OS image (HAOS), venv |
| Image | `ghcr.io/home-assistant/home-assistant` |
| Resource | medium (~512MB) |
| Auth | built-in (user accounts), OIDC via auth proxy |
| Reverse proxy | ✓ |
| Config | `configuration.yaml` + UI automations |
| Backup | built-in snapshots or volume `/config` |
| License | Apache-2.0 |
| Maintained | active |

The most comprehensive open-source home automation platform. Integrates with 2000+ devices and services out of the box — Zigbee, Z-Wave, MQTT, Wi-Fi devices, cloud APIs, media players, climate systems, and more. Automations can be built in the UI or in YAML. Add-ons ecosystem provides Zigbee2MQTT, MQTT brokers, voice assistants, and databases as managed containers.

**Pick this if** you want the widest device support, an active community, frequent updates, and a polished mobile app — the "just works" choice for most self-hosters.

**vs openHAB** — Home Assistant has broader integrations, faster release cadence, and a larger community. openHAB is more modular and better suited to complex rule engines or Java-friendly teams.

**vs Node-RED** — Home Assistant is the central hub (state, UI, device management); Node-RED is a flow-based programming tool you wire alongside it for complex logic or API orchestration.

---

## openHAB

| Field | Value |
|-------|-------|
| URL | https://www.openhab.org |
| Source | https://github.com/openhab/openhab-core |
| Deploy | docker, package (apt/yum), binary (Java) |
| Image | `openhab/openhab` |
| Resource | heavy (~1GB, JVM-based) |
| Auth | built-in (role-based), OIDC via reverse proxy |
| Reverse proxy | ✓ |
| Config | `.items`, `.things`, `.rules` files or UI |
| Backup | `openhab-cli backup` or volume `/openhab` |
| License | EPL-2.0 |
| Maintained | active |

Vendor-agnostic home automation platform built on Java/OSGi. Strong separation between "things" (devices), "items" (state), and "rules" (logic). Supports 400+ bindings for protocols like KNX, EnOcean, Modbus, MQTT, Zigbee, and Z-Wave. Rule engine supports Blockly, JavaScript, and Jython.

**Pick this if** you want explicit abstraction layers between physical devices and automation logic, need KNX or industrial protocols, or prefer a Java ecosystem.

**vs Home Assistant** — openHAB's architecture enforces cleaner separation of concerns but has fewer integrations and a smaller community. Home Assistant is more approachable for most users.

**vs Node-RED** — openHAB handles device bindings and state natively; Node-RED handles flow-based logic. They pair well together (openHAB exposes items via REST API to Node-RED).

---

## Node-RED

| Field | Value |
|-------|-------|
| URL | https://nodered.org |
| Source | https://github.com/node-red/node-red |
| Deploy | docker, npm |
| Image | `nodered/node-red` |
| Resource | light (~150MB) |
| Auth | built-in (`settings.js` httpNodeAuth), passport strategies |
| Reverse proxy | ✓ |
| Config | `settings.js` + flows JSON (UI-driven) |
| Backup | snapshot `/data` (flows.json + settings) |
| License | Apache-2.0 |
| Maintained | active |

Flow-based visual programming tool built on Node.js. In the IoT and home automation context, Node-RED excels at wiring together MQTT brokers, HTTP APIs, WebSocket streams, serial devices, and home automation hubs. Thousands of community nodes cover GPIO, Zigbee bridges, Telegram bots, database writes, and protocol translation.

> **Note:** Node-RED also appears in the Automation category for general workflow/integration use. This entry focuses on its IoT and smart home role.

**Pick this if** you need a visual glue layer between IoT protocols, want to prototype device logic fast, or need to bridge systems that don't natively talk to each other (MQTT ↔ HTTP ↔ WebSocket ↔ serial).

**vs Home Assistant** — Node-RED is a logic/flow engine, not a device management platform. Many users run Node-RED as a companion to Home Assistant (via the `node-red-contrib-home-assistant-websocket` palette) for complex automations that outgrow HA's native automation editor.

**vs openHAB** — Node-RED is lighter and more flexible for arbitrary integrations; openHAB provides structured device/state management. Node-RED complements openHAB via its REST API.
