---
category: Finance
description: Personal finance, budgeting, expense tracking, and invoicing
---

# Finance

## Comparison Matrix

| Service | Deploy | Resource | Auth | License | Maintained |
|---------|--------|----------|------|---------|------------|
| [Actual Budget](#actual-budget) | docker, binary | light (~100MB) | built-in | MIT | active |
| [Firefly III](#firefly-iii) | docker | medium (~256MB) | built-in, OAuth2 | AGPL-3.0 | active |
| [Ghostfolio](#ghostfolio) | docker | medium (~512MB) | built-in, OIDC | AGPL-3.0 | active |

---

## Actual Budget

| Field | Value |
|-------|-------|
| URL | https://actualbudget.org |
| Source | https://github.com/actualbudget/actual |
| Deploy | docker, binary (Node.js) |
| Image | `actualbudget/actual-server` |
| Resource | light (~100MB) |
| Auth | built-in (password) |
| Reverse proxy | ✓ |
| Config | UI (SQLite backend, local-first sync) |
| Backup | snapshot `/data` |
| License | MIT |
| Maintained | active |

Zero-sum (envelope) budgeting app inspired by YNAB. Local-first architecture means the UI runs entirely in-browser with a sync server for multi-device access. Import via OFX/QFX/CSV, bank-sync via GoCardless/SimpleFIN, and rule-based auto-categorization.

**Pick this if** you want YNAB-style envelope budgeting without the subscription, with fast offline-capable UI and optional bank sync.

**vs Firefly III** — Actual is laser-focused on budgeting (give every dollar a job); Firefly III is a full double-entry bookkeeping system with reports, recurring transactions, and multi-currency.

**vs Ghostfolio** — Different domains. Actual tracks day-to-day spending and budgets; Ghostfolio tracks investment portfolios and market performance.

---

## Firefly III

| Field | Value |
|-------|-------|
| URL | https://www.firefly-iii.org |
| Source | https://github.com/firefly-iii/firefly-iii |
| Deploy | docker |
| Image | `fireflyiii/core` |
| Resource | medium (~256MB, requires PostgreSQL/MySQL) |
| Auth | built-in, OAuth2 (via Passport) |
| Reverse proxy | ✓ |
| Config | `.env` + env vars |
| Backup | snapshot database + `/storage/upload` |
| License | AGPL-3.0 |
| Maintained | active |

Full-featured personal finance manager with double-entry bookkeeping. Tracks transactions, budgets, categories, piggy banks, recurring transactions, and multi-currency accounts. Rich reporting with charts, rule engine for auto-categorization, and a REST API.

**Pick this if** you want comprehensive financial tracking across multiple accounts with double-entry accuracy, detailed reports, and automation rules.

**vs Actual Budget** — Firefly III is a full accounting system (transactions, reports, reconciliation); Actual is purpose-built for envelope budgeting with a simpler, faster UI.

**vs Ghostfolio** — Firefly III tracks cash flow and day-to-day finances; Ghostfolio is specifically for investment portfolio tracking with market data integration.

---

## Ghostfolio

| Field | Value |
|-------|-------|
| URL | https://ghostfol.io |
| Source | https://github.com/ghostfolio/ghostfolio |
| Deploy | docker |
| Image | `ghostfolio/ghostfolio` |
| Resource | medium (~512MB, requires PostgreSQL + Redis) |
| Auth | built-in, OIDC |
| Reverse proxy | ✓ |
| Config | env vars |
| Backup | snapshot PostgreSQL database |
| License | AGPL-3.0 |
| Maintained | active |

Investment portfolio tracker with real-time market data. Supports stocks, ETFs, crypto, commodities, and precious metals. Provides portfolio allocation, performance charts, dividend tracking, and a Fear & Greed index. Multi-account, multi-currency with automatic exchange-rate conversion.

**Pick this if** you want a privacy-first portfolio tracker to visualize holdings, performance, and allocation across brokers — without giving your data to Mint or Yahoo Finance.

**vs Actual Budget** — Different domains. Ghostfolio tracks investments and net worth from securities; Actual tracks day-to-day cash budgeting.

**vs Firefly III** — Ghostfolio specializes in investment tracking with live market data; Firefly III handles cash-flow bookkeeping. Pair them for full visibility (daily spending + portfolio).
