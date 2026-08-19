---
category: E-commerce
description: Online stores, payment processing, and shop management
---

# E-commerce

## Comparison Matrix

| Service | Deploy | Resource | Auth | License | Maintained |
|---------|--------|----------|------|---------|------------|
| [WooCommerce](#woocommerce) | docker | medium (~512MB) | built-in, OAuth2 | GPL-3.0 | active |
| [Saleor](#saleor) | docker | heavy (~1GB) | built-in, OIDC, JWT | BSD-3-Clause | active |
| [Medusa](#medusa) | docker, Node.js | medium (~512MB) | built-in, JWT | MIT | active |
| [PrestaShop](#prestashop) | docker | medium (~512MB) | built-in | OSL-3.0 | active |

---

## WooCommerce

| Field | Value |
|-------|-------|
| URL | https://woocommerce.com |
| Source | https://github.com/woocommerce/woocommerce |
| Deploy | docker (WordPress + WooCommerce plugin) |
| Image | `wordpress` + WooCommerce plugin |
| Resource | medium (~512MB, requires MySQL/MariaDB) |
| Auth | built-in (WordPress user system), OAuth2 (REST API) |
| Reverse proxy | ✓ |
| Config | `wp-config.php` + WordPress admin UI |
| Backup | snapshot database + `wp-content/` |
| License | GPL-3.0 |
| Maintained | active |

The dominant open-source e-commerce platform, built as a WordPress plugin. Inherits the entire WordPress ecosystem — themes, plugins, page builders, SEO tools. Handles physical and digital products, variable products, shipping zones, tax rules, coupons, and dozens of payment gateways. REST API available for headless use but not its primary design.

**Pick this if** you already run WordPress, want the largest plugin/theme ecosystem, or need a traditional server-rendered storefront with minimal custom development.

**vs Saleor** — WooCommerce is monolithic (server-rendered pages, PHP); Saleor is headless-first (GraphQL API, bring your own frontend). WooCommerce has vastly more plugins but Saleor gives full frontend freedom.

**vs Medusa** — WooCommerce is a WordPress plugin with a bundled storefront; Medusa is a standalone headless engine. WooCommerce is easier to launch without a developer; Medusa is easier to customize programmatically.

**vs PrestaShop** — Both are traditional full-stack platforms. WooCommerce rides on WordPress (content + commerce together); PrestaShop is purpose-built for commerce with deeper built-in merchandising (product combinations, stock management, multi-store).

---

## Saleor

| Field | Value |
|-------|-------|
| URL | https://saleor.io |
| Source | https://github.com/saleor/saleor |
| Deploy | docker |
| Image | `ghcr.io/saleor/saleor` |
| Resource | heavy (~1GB, requires PostgreSQL + Redis) |
| Auth | built-in, OIDC, JWT (multi-tenant permissions) |
| Reverse proxy | ✓ |
| Config | env vars |
| Backup | snapshot PostgreSQL database + media storage |
| License | BSD-3-Clause |
| Maintained | active |

Python/Django headless commerce engine exposing a comprehensive GraphQL API. Designed for custom storefronts (Next.js, Gatsby, mobile apps). Supports multi-channel selling, multi-currency, multi-warehouse, gift cards, vouchers, draft orders, and a plugin/webhook system for extensibility. Ships with a React-based admin dashboard.

**Pick this if** you want a Python-native headless commerce backend with GraphQL, multi-channel support, and plan to build a custom frontend.

**vs Medusa** — Both are headless-first. Saleor uses Python/Django + GraphQL; Medusa uses Node.js + REST (GraphQL via plugin). Saleor has more built-in enterprise features (multi-warehouse, multi-channel); Medusa is more modular and easier to extend with custom logic.

**vs WooCommerce** — Saleor is headless (API-only, bring your own frontend); WooCommerce bundles a storefront. Saleor suits custom builds; WooCommerce suits quick launches with off-the-shelf themes.

**vs PrestaShop** — Saleor is headless and developer-oriented (GraphQL, custom frontend); PrestaShop is a full-stack platform with a built-in storefront and admin. PrestaShop is faster to launch without custom development; Saleor gives total frontend control.

---

## Medusa

| Field | Value |
|-------|-------|
| URL | https://medusajs.com |
| Source | https://github.com/medusajs/medusa |
| Deploy | docker, Node.js |
| Image | `medusajs/medusa` (community) |
| Resource | medium (~512MB, requires PostgreSQL + Redis) |
| Auth | built-in, JWT (customer + admin) |
| Reverse proxy | ✓ |
| Config | `medusa-config.ts` + env vars |
| Backup | snapshot PostgreSQL database + file storage |
| License | MIT |
| Maintained | active |

Node.js headless commerce engine with a modular architecture. Exposes REST APIs (and GraphQL via plugin) for storefronts. Extensible through services, subscribers, and custom endpoints. Supports regions, multi-currency, tax-inclusive pricing, gift cards, discounts, swaps, returns, and order editing. Ships with a React admin dashboard and a Next.js starter storefront.

**Pick this if** you want a JavaScript/TypeScript headless commerce backend that's highly modular, MIT-licensed, and easy to extend with custom business logic.

**vs Saleor** — Medusa is Node.js/TypeScript with REST-first APIs and a plug-in-based architecture; Saleor is Python/Django with GraphQL. Medusa is lighter and more modular; Saleor has more built-in enterprise features out of the box.

**vs WooCommerce** — Medusa is a headless engine (you build or pick a frontend); WooCommerce is a full-stack WordPress plugin. Medusa favors developer-driven customization; WooCommerce favors no-code/low-code store setup.

**vs PrestaShop** — Medusa is headless (API + custom frontend); PrestaShop is full-stack (admin + storefront included). Medusa suits teams building a unique checkout/storefront experience; PrestaShop suits merchants who want a ready-to-use shop.

---

## PrestaShop

| Field | Value |
|-------|-------|
| URL | https://www.prestashop-project.org |
| Source | https://github.com/PrestaShop/PrestaShop |
| Deploy | docker |
| Image | `prestashop/prestashop` |
| Resource | medium (~512MB, requires MySQL/MariaDB) |
| Auth | built-in (admin + customer accounts) |
| Reverse proxy | ✓ |
| Config | admin UI + `parameters.php` |
| Backup | snapshot database + `/var/www/html/` (themes, modules, uploads) |
| License | OSL-3.0 |
| Maintained | active |

Full-featured e-commerce platform built in PHP/Symfony. Ships with a complete storefront, back office, and module marketplace. Handles product combinations (size/color), advanced stock management, multi-store, multi-language, carrier configuration, invoice generation, and customer groups. Large European user base with strong localization support.

**Pick this if** you want a standalone, full-stack e-commerce platform with deep built-in merchandising features, multi-store support, and a module marketplace — without depending on WordPress.

**vs WooCommerce** — Both are PHP full-stack platforms. PrestaShop is purpose-built for commerce (better native stock management, product combinations, multi-store); WooCommerce rides on WordPress (better for content-heavy sites, larger ecosystem).

**vs Saleor** — PrestaShop is a complete platform (storefront + admin included); Saleor is headless (API-only, build your own frontend). PrestaShop is faster to launch; Saleor offers more frontend flexibility.

**vs Medusa** — PrestaShop includes everything out of the box (themes, checkout, admin); Medusa is a backend engine requiring a custom frontend. PrestaShop suits merchants; Medusa suits developers building bespoke experiences.
