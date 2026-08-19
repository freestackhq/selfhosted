---
category: Development
description: Git forges, CI/CD, code review, and developer tooling
---

# Development

## Comparison Matrix

| Service | Deploy | Resource | Auth | License | Maintained |
|---------|--------|----------|------|---------|------------|
| [Forgejo](#forgejo) | docker, binary, package | light (~150MB) | OIDC, LDAP, built-in | GPL-3.0 | active |
| [Gitea](#gitea) | docker, binary, package | light (~150MB) | OIDC, LDAP, built-in | MIT | active |
| [GitLab CE](#gitlab-ce) | docker, compose, helm | heavy (~4GB) | OIDC, LDAP, SAML, built-in | MIT | active |

---

## Forgejo

| Field | Value |
|-------|-------|
| URL | https://forgejo.org |
| Source | https://codeberg.org/forgejo/forgejo |
| Deploy | docker, binary, package |
| Image | `codeberg.org/forgejo/forgejo` |
| Resource | light (~150MB) |
| Auth | OIDC, LDAP, built-in |
| Reverse proxy | ✓ |
| Config | `app.ini` + env vars |
| Backup | built-in `forgejo dump`, or snapshot `/data` |
| License | GPL-3.0 |
| Maintained | active |

Lightweight Git forge — code hosting, pull requests, CI (Forgejo Actions), packages. Community-governed fork of Gitea.

**Pick this if** you want community governance, low resource usage, and GitHub Actions-compatible CI without the corporate overhead.

**vs Gitea** — Forgejo if you want community governance; Gitea if you want the larger plugin ecosystem.
**vs GitLab CE** — Forgejo if you want lightweight; GitLab if you need built-in CI/CD + container registry at scale (and can spare 4GB RAM).

---

## Gitea

| Field | Value |
|-------|-------|
| URL | https://about.gitea.com |
| Source | https://github.com/go-gitea/gitea |
| Deploy | docker, binary, package |
| Image | `gitea/gitea` |
| Resource | light (~150MB) |
| Auth | OIDC, LDAP, built-in |
| Reverse proxy | ✓ |
| Config | `app.ini` + env vars |
| Backup | built-in `gitea dump`, or snapshot `/data` |
| License | MIT |
| Maintained | active |

Lightweight Git forge with a large plugin/integration ecosystem. Originally inspired by Gogs.

**Pick this if** you want a mature, lightweight forge with broad community integrations and permissive licensing.

**vs Forgejo** — Gitea if you want commercial backing and wider integrations; Forgejo if you prefer community governance.
**vs GitLab CE** — Same tradeoff as Forgejo: lightweight vs full-fat CI/CD platform.

---

## GitLab CE

| Field | Value |
|-------|-------|
| URL | https://about.gitlab.com |
| Source | https://gitlab.com/gitlab-org/gitlab-foss |
| Deploy | docker, compose, helm, package |
| Image | `gitlab/gitlab-ce` |
| Resource | heavy (~4GB) |
| Auth | OIDC, LDAP, SAML, built-in |
| Reverse proxy | ✓ |
| Config | `gitlab.rb` + env vars |
| Backup | built-in `gitlab-backup`, snapshot volumes |
| License | MIT |
| Maintained | active |

Full DevOps platform — Git hosting, CI/CD pipelines, container registry, issue tracking, wiki, pages, and more. All-in-one but resource-hungry.

**Pick this if** you want a single platform for everything from code to deployment and can afford the RAM.

**vs Forgejo/Gitea** — GitLab if you need built-in CI, registry, and project management in one box; Forgejo/Gitea if you want lightweight and composable.
