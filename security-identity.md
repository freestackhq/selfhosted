---
category: Security & Identity
description: Authentication, identity providers, SSO, password managers, and secrets management
---

# Security & Identity

## Comparison Matrix

| Service | Deploy | Resource | Auth | License | Maintained |
|---------|--------|----------|------|---------|------------|
| [Authentik](#authentik) | docker, compose, helm | medium (~800MB) | OIDC/OAuth2 provider, LDAP, SAML | MIT | active |
| [Keycloak](#keycloak) | docker, compose, helm | heavy (~1GB) | OIDC/OAuth2 provider, LDAP, SAML | Apache-2.0 | active |
| [Authelia](#authelia) | docker, binary | light (~30MB) | forward-auth proxy | Apache-2.0 | active |
| [Vaultwarden](#vaultwarden) | docker | light (~50MB) | built-in | AGPL-3.0 | active |

---

## Authentik

| Field | Value |
|-------|-------|
| URL | https://goauthentik.io |
| Source | https://github.com/goauthentik/authentik |
| Deploy | docker, compose, helm |
| Image | `ghcr.io/goauthentik/server` |
| Resource | medium (~800MB with worker + server) |
| Auth | OIDC/OAuth2/SAML provider, LDAP outpost |
| Reverse proxy | ✓ (includes forward-auth and embedded proxy) |
| Config | UI + YAML blueprints |
| Backup | PostgreSQL dump + media volume |
| License | MIT |
| Maintained | active |

Full identity provider with flow-based authentication, application proxy, LDAP outpost, and user management. Beautiful admin UI.

**Pick this if** you want a modern IdP with visual flow builder, built-in forward-auth proxy, and don't mind the resource usage.

**vs Keycloak** — Authentik for better UX and built-in proxy; Keycloak for enterprise maturity and broader protocol support.
**vs Authelia** — Authentik is a full IdP; Authelia is just a forward-auth proxy. Use Authentik if you want SSO for all your apps.

---

## Keycloak

| Field | Value |
|-------|-------|
| URL | https://www.keycloak.org |
| Source | https://github.com/keycloak/keycloak |
| Deploy | docker, compose, helm |
| Image | `quay.io/keycloak/keycloak` |
| Resource | heavy (~1GB) |
| Auth | OIDC/OAuth2/SAML provider, LDAP federation, social login |
| Reverse proxy | ✓ |
| Config | UI + realm JSON export/import |
| Backup | PostgreSQL dump + realm export |
| License | Apache-2.0 |
| Maintained | active |

Enterprise-grade IdP by Red Hat. Battle-tested, massive protocol support, but steeper learning curve and heavier footprint.

**Pick this if** you need enterprise-grade IdP with full SAML support, user federation, and don't mind Java-level resource usage.

**vs Authentik** — Keycloak for protocol depth and enterprise track record; Authentik for better DX and integrated proxy.

---

## Authelia

| Field | Value |
|-------|-------|
| URL | https://www.authelia.com |
| Source | https://github.com/authelia/authelia |
| Deploy | docker, binary |
| Image | `authelia/authelia` |
| Resource | light (~30MB) |
| Auth | forward-auth proxy (works with Nginx, Traefik, Caddy) |
| Reverse proxy | ✓ (designed for it) |
| Config | YAML config file |
| Backup | snapshot config + user DB |
| License | Apache-2.0 |
| Maintained | active |

Lightweight authentication and authorization server providing 2FA and SSO via forward-auth headers. Not a full IdP — it sits in front of your reverse proxy.

**Pick this if** you just want "add login to any app behind your reverse proxy" without running a full IdP. Extremely lightweight.

**vs Authentik/Keycloak** — Authelia is not an IdP. It adds auth to apps that don't have it via reverse proxy headers. Use a full IdP if your apps support OIDC natively.

---

## Vaultwarden

| Field | Value |
|-------|-------|
| URL | https://github.com/dani-garcia/vaultwarden |
| Source | https://github.com/dani-garcia/vaultwarden |
| Deploy | docker |
| Image | `vaultwarden/server` |
| Resource | light (~50MB) |
| Auth | built-in (Bitwarden clients) |
| Reverse proxy | ✓ |
| Config | env vars |
| Backup | snapshot `/data` (SQLite or PostgreSQL) |
| License | AGPL-3.0 |
| Maintained | active |

Lightweight Bitwarden-compatible server written in Rust. Works with all official Bitwarden clients and browser extensions. Unlocks premium features (TOTP, attachments, org vaults) for free.

**Pick this if** you want self-hosted password management with Bitwarden's excellent clients but without the official server's heavy .NET stack.

**vs Bitwarden official** — Vaultwarden for lightweight self-hosting on a homelab; official Bitwarden server if you need enterprise compliance or support contracts.
