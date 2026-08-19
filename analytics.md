---
category: Analytics
description: Web analytics, product analytics, and visitor tracking
---

# Analytics

## Comparison Matrix

| Service | Deploy | Resource | Auth | License | Maintained |
|---------|--------|----------|------|---------|------------|
| [Plausible](#plausible) | docker (compose) | medium (~512MB) | built-in, OIDC | AGPL-3.0 | active |
| [Umami](#umami) | docker, Node.js | light (~256MB) | built-in | MIT | active |
| [Matomo](#matomo) | docker, PHP | medium (~512MB) | built-in, LDAP, SAML | GPL-3.0 | active |
| [PostHog](#posthog) | docker (compose), k8s | heavy (~2GB+) | built-in, OIDC, SAML | MIT (core) | active |

---

## Plausible

| Field | Value |
|-------|-------|
| URL | https://plausible.io |
| Source | https://github.com/plausible/analytics |
| Deploy | docker (compose — requires ClickHouse + PostgreSQL) |
| Image | `ghcr.io/plausible/community-edition` |
| Resource | medium (~512MB — ClickHouse is the main consumer) |
| Auth | built-in (email/password), Google/OIDC via config |
| Reverse proxy | ✓ |
| Config | env vars (`plausible-conf.env`) |
| Backup | snapshot PostgreSQL + ClickHouse data volumes |
| License | AGPL-3.0 |
| Maintained | active |

Lightweight, privacy-friendly web analytics. No cookies, fully GDPR/CCPA/PECR compliant out of the box. Single-page dashboard shows top pages, referrers, countries, devices, and goals — nothing more. Script is under 1 KB.

**Pick this if** you want dead-simple, privacy-respecting web analytics with a clean UI and no cookie banners needed.

**vs Umami** — Both are privacy-first and lightweight. Plausible uses ClickHouse (better at scale), has goal/funnel tracking, and revenue attribution. Umami is simpler to deploy (single DB) and MIT-licensed.

**vs Matomo** — Plausible is minimalist and opinionated; Matomo is a full GA replacement with heatmaps, session recordings, and A/B testing. Choose Plausible for simplicity, Matomo for feature parity with Google Analytics.

**vs PostHog** — Different categories. Plausible is web analytics (pageviews, referrers). PostHog is product analytics (funnels, cohorts, feature flags, session replay). Use Plausible for marketing sites, PostHog for SaaS products.

---

## Umami

| Field | Value |
|-------|-------|
| URL | https://umami.is |
| Source | https://github.com/umami-software/umami |
| Deploy | docker, Node.js (requires PostgreSQL or MySQL) |
| Image | `ghcr.io/umami-software/umami` |
| Resource | light (~256MB) |
| Auth | built-in (username/password) |
| Reverse proxy | ✓ |
| Config | env vars (`DATABASE_URL`, etc.) |
| Backup | snapshot PostgreSQL/MySQL database |
| License | MIT |
| Maintained | active |

Simple, fast, privacy-first analytics. Cookie-free, GDPR-compliant. Tracks pageviews, referrers, browsers, OS, devices, countries, and custom events. Multi-site support with team accounts. Clean UI with real-time dashboard.

**Pick this if** you want the simplest possible self-hosted analytics — one container, one database, MIT license, done.

**vs Plausible** — Umami is lighter to deploy (no ClickHouse), MIT-licensed, and has multi-site built in. Plausible has richer goal/funnel tracking and scales better with ClickHouse. Both are privacy-first.

**vs Matomo** — Umami is minimalist (pageviews + events). Matomo gives you session recordings, heatmaps, form analytics, tag manager, and full GA-level reporting. Umami wins on simplicity and resource use.

**vs PostHog** — Umami tracks website visits; PostHog tracks product behavior. No overlap — you could run both (Umami for your blog, PostHog for your app).

---

## Matomo

| Field | Value |
|-------|-------|
| URL | https://matomo.org |
| Source | https://github.com/matomo-org/matomo |
| Deploy | docker, PHP (requires MySQL/MariaDB) |
| Image | `matomo` (Docker Hub official) |
| Resource | medium (~512MB) |
| Auth | built-in, LDAP (plugin), SAML (plugin) |
| Reverse proxy | ✓ |
| Config | `config.ini.php` + UI |
| Backup | snapshot MySQL database + `config/` + `plugins/` |
| License | GPL-3.0 |
| Maintained | active |

Full-featured Google Analytics alternative with 20+ years of development. Supports goals, funnels, ecommerce tracking, custom dimensions, heatmaps (paid plugin), session recordings (paid plugin), A/B testing, tag manager, and roll-up reporting. Import historical GA data. GDPR-compliant with optional cookie consent.

**Pick this if** you need a complete GA replacement with enterprise features — ecommerce tracking, custom reports, import from GA, and a mature plugin ecosystem.

**vs Plausible** — Matomo has 10x more features (tag manager, heatmaps, ecommerce, custom reports). Plausible is intentionally minimal. Matomo needs more maintenance and resources.

**vs Umami** — Matomo is the "full suite" where Umami is the "just pageviews" tool. Matomo if you're migrating from GA and need feature parity; Umami if you want something simple.

**vs PostHog** — Overlapping but different focus. Matomo is web analytics (pageviews, conversions, SEO). PostHog is product analytics (user journeys, feature flags, experiments). Matomo for marketing teams; PostHog for product teams.

---

## PostHog

| Field | Value |
|-------|-------|
| URL | https://posthog.com |
| Source | https://github.com/PostHog/posthog |
| Deploy | docker (compose), Kubernetes (Helm) |
| Image | `posthog/posthog` |
| Resource | heavy (~2GB+ — requires PostgreSQL, Redis, ClickHouse, Kafka) |
| Auth | built-in, OIDC/SAML (enterprise), Google OAuth |
| Reverse proxy | ✓ |
| Config | env vars + `docker-compose.yml` overrides |
| Backup | snapshot PostgreSQL + ClickHouse + Redis volumes |
| License | MIT (core), proprietary (some enterprise features) |
| Maintained | active |

All-in-one product analytics suite. Event tracking, funnels, user paths, cohort analysis, session replay, feature flags, A/B experiments, surveys, and data warehouse queries. Autocapture means minimal instrumentation. Built for product teams who want to understand user behavior end-to-end.

**Pick this if** you're building a SaaS/product and want unified analytics, feature flags, session replay, and experimentation in one platform — and you have the resources to run it.

**vs Plausible** — PostHog is product analytics (funnels, retention, experiments). Plausible is website analytics (pageviews, referrers). Different tools for different jobs. Many teams run both.

**vs Umami** — PostHog is orders of magnitude more complex. Umami gives you page-level stats in 5 minutes. PostHog gives you product intelligence in a few hours of setup and 2 GB of RAM.

**vs Matomo** — PostHog has feature flags, experiments, and session replay built-in. Matomo has stronger traditional web analytics (SEO, ecommerce). PostHog for product-led teams; Matomo for marketing-led teams.
