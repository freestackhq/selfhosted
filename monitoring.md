---
category: Monitoring
description: Uptime monitoring, metrics, alerting, and observability
---

# Monitoring

## Comparison Matrix

| Service | Deploy | Resource | Auth | License | Maintained |
|---------|--------|----------|------|---------|------------|
| [Uptime Kuma](#uptime-kuma) | docker, binary | light (~100MB) | built-in | MIT | active |
| [Grafana](#grafana) | docker, binary, package | medium (~256MB) | built-in, OIDC, LDAP | AGPL-3.0 | active |
| [Prometheus](#prometheus) | docker, binary | medium (~500MB+) | none (pair with proxy) | Apache-2.0 | active |

---

## Uptime Kuma

| Field | Value |
|-------|-------|
| URL | https://uptime.kuma.pet |
| Source | https://github.com/louislam/uptime-kuma |
| Deploy | docker, binary (Node.js) |
| Image | `louislam/uptime-kuma` |
| Resource | light (~100MB) |
| Auth | built-in (username/password) |
| Reverse proxy | ✓ |
| Config | UI (SQLite backend) |
| Backup | snapshot `/app/data` |
| License | MIT |
| Maintained | active |

Self-hosted monitoring tool with a beautiful UI. HTTP/TCP/DNS/ping/push monitors, status pages, notifications via 90+ channels (Slack, Discord, Telegram, etc.).

**Pick this if** you want simple uptime monitoring with a gorgeous UI, easy setup, and zero config files.

**vs Grafana + Prometheus** — Uptime Kuma for uptime/status page monitoring; Grafana+Prometheus for full metrics/observability.

---

## Grafana

| Field | Value |
|-------|-------|
| URL | https://grafana.com |
| Source | https://github.com/grafana/grafana |
| Deploy | docker, binary, package |
| Image | `grafana/grafana` |
| Resource | medium (~256MB) |
| Auth | built-in, OIDC, LDAP, OAuth2 |
| Reverse proxy | ✓ |
| Config | `grafana.ini` + env vars + UI provisioning |
| Backup | snapshot `/var/lib/grafana` or use provisioning-as-code |
| License | AGPL-3.0 |
| Maintained | active |

The industry-standard dashboarding and visualization platform. Connects to dozens of data sources (Prometheus, Loki, InfluxDB, PostgreSQL, etc.).

**Pick this if** you want beautiful, customizable dashboards for metrics, logs, and traces from multiple sources.

**vs Uptime Kuma** — Different tools. Grafana visualizes metrics; Uptime Kuma monitors uptime. Often used together.

---

## Prometheus

| Field | Value |
|-------|-------|
| URL | https://prometheus.io |
| Source | https://github.com/prometheus/prometheus |
| Deploy | docker, binary |
| Image | `prom/prometheus` |
| Resource | medium (~500MB, grows with cardinality) |
| Auth | none built-in (use reverse proxy) |
| Reverse proxy | ✓ |
| Config | `prometheus.yml` |
| Backup | snapshot `/prometheus` data dir |
| License | Apache-2.0 |
| Maintained | active |

Pull-based metrics collection and time-series database. The backbone of most self-hosted observability stacks. Pairs with Grafana for visualization and Alertmanager for notifications.

**Pick this if** you want a proper metrics pipeline with alerting rules and long-term storage.

**vs Uptime Kuma** — Prometheus for full observability (CPU, memory, custom app metrics); Uptime Kuma for simple "is it up?" checks.
