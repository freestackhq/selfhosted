---
category: Recipes
description: Recipe management, meal planning, and shopping lists
---

# Recipes

## Comparison Matrix

| Service | Deploy | Resource | Auth | License | Maintained |
|---------|--------|----------|------|---------|------------|
| [Mealie](#mealie) | docker, compose | light (~200MB) | built-in, LDAP, OIDC | AGPL-3.0 | active |
| [Tandoor Recipes](#tandoor-recipes) | docker, compose | medium (~300MB) | built-in, reverse-proxy header | AGPL-3.0 (common clause) | active |
| [RecipeSage](#recipesage) | docker, compose | medium (~400MB) | built-in | AGPL-3.0 (dual-licensed) | active |

---

## Mealie

| Field | Value |
|-------|-------|
| URL | https://mealie.io |
| Source | https://github.com/mealie-recipes/mealie |
| Deploy | docker, compose |
| Image | `ghcr.io/mealie-recipes/mealie` |
| Resource | light (~200MB idle) |
| Auth | built-in, LDAP, OIDC |
| Reverse proxy | ✓ |
| Config | env vars |
| Backup | built-in export + snapshot `/app/data` |
| License | AGPL-3.0 |
| Maintained | active |

Self-hosted recipe manager with integrated meal planning, shopping lists, and cookbooks. Import recipes by URL with automatic scraping. REST API for third-party integrations. Vue frontend, Python/FastAPI backend, SQLite or PostgreSQL.

**Pick this if** you want the most polished all-in-one experience with meal planning, shopping lists, URL import, multi-user support, and OIDC/LDAP auth — especially if you run a reverse proxy with SSO.

**vs Tandoor Recipes** — Mealie if you want simpler setup, better mobile UX, and native OIDC; Tandoor if you want more granular permissions, advanced search (trigram), and AI-assisted features.
**vs RecipeSage** — Mealie if you want a single-container deploy with built-in auth providers; RecipeSage if you want Paprika import compatibility, offline PWA, or collaborative sharing with external users.

---

## Tandoor Recipes

| Field | Value |
|-------|-------|
| URL | https://tandoor.dev |
| Source | https://github.com/TandoorRecipes/recipes |
| Deploy | docker, compose |
| Image | `vabene1111/recipes` |
| Resource | medium (~300MB idle; PostgreSQL required) |
| Auth | built-in, reverse-proxy header auth |
| Reverse proxy | ✓ |
| Config | env vars (`.env` file) |
| Backup | snapshot PostgreSQL + `/opt/recipes/mediafiles` |
| License | AGPL-3.0 (common clause) |
| Maintained | active |

Django-based recipe manager built for households. Manage recipes, plan meals, build shopping lists, and organize cookbooks. Powerful search with PostgreSQL trigram similarity. Supports import from many other recipe managers. AI features for image recognition, step sorting, and nutrition lookup.

**Pick this if** you want a power-user recipe manager with advanced search, fine-grained permissions for households, AI integrations, and don't mind running PostgreSQL alongside it.

**vs Mealie** — Tandoor if you need granular space/user permissions, trigram search, or AI-assisted recipe handling; Mealie if you prefer simpler setup and native OIDC.
**vs RecipeSage** — Tandoor if you want richer household permissions, advanced search, and Django admin flexibility; RecipeSage if you want offline PWA, real-time collaboration, or Paprika-format import.

---

## RecipeSage

| Field | Value |
|-------|-------|
| URL | https://recipesage.com |
| Source | https://github.com/julianpoy/RecipeSage |
| Deploy | docker, compose |
| Image | `julianpoy/recipesage-selfhost` |
| Resource | medium (~400MB; PostgreSQL + proxy containers) |
| Auth | built-in |
| Reverse proxy | built-in proxy (can sit behind another) |
| Config | env vars (`.env` file) |
| Backup | snapshot PostgreSQL data volume |
| License | AGPL-3.0 (dual-licensed; non-commercial self-host free) |
| Maintained | active |

Collaborative recipe keeper, meal planner, and shopping list organizer delivered as a PWA. Imports from URL, image, PDF, or text. Supports Paprika, Pepperplate, Living Cookbook, Recipe Keeper, CopyMeThat, and CSV import formats. Works offline and syncs across devices. AI cooking assistant, nutrition tracking, recipe scaling with unit conversion.

**Pick this if** you're migrating from Paprika or another commercial recipe app and want full import compatibility, offline-first PWA experience, and real-time collaboration on meal plans and shopping lists.

**vs Mealie** — RecipeSage if you need Paprika/Pepperplate import, offline PWA, or collaborative sharing with family who won't use your SSO; Mealie if you want simpler deploy, OIDC/LDAP auth, and a more traditional server-rendered feel.
**vs Tandoor Recipes** — RecipeSage if you want offline capability, broader import format support, or a PWA that feels native on mobile; Tandoor if you want Django power-user features, AI image recognition, or household permission spaces.
