---
category: Databases & Management
description: Database servers, management tools, and admin interfaces
---

# Databases & Management

## Comparison Matrix

| Service | Deploy | Resource | Auth | License | Maintained |
|---------|--------|----------|------|---------|------------|
| [PostgreSQL](#postgresql) | docker, binary, package | medium (~256MB+) | role-based (md5, scram, cert) | PostgreSQL (BSD-like) | active |
| [MariaDB](#mariadb) | docker, binary, package | medium (~256MB+) | role-based (native, PAM, LDAP) | GPL-2.0 | active |
| [Redis / Valkey](#redis--valkey) | docker, binary | light (~50MB) | password, ACL | BSD-3-Clause (Valkey) | active |
| [Adminer](#adminer) | docker, binary (PHP) | light (~30MB) | passthrough to DB | Apache-2.0 / GPL-2.0 | active |

---

## PostgreSQL

| Field | Value |
|-------|-------|
| URL | https://www.postgresql.org |
| Source | https://github.com/postgres/postgres |
| Deploy | docker, binary, package |
| Image | `postgres` |
| Resource | medium (~256MB+, grows with data/connections) |
| Auth | role-based (md5, scram-sha-256, cert, LDAP, GSSAPI) |
| Reverse proxy | N/A (TCP 5432; use PgBouncer or stunnel for TLS) |
| Config | `postgresql.conf`, `pg_hba.conf`, env vars |
| Backup | `pg_dump` / `pg_basebackup` / WAL archiving / restic on data dir |
| License | PostgreSQL (BSD-like) |
| Maintained | active |

The most advanced open-source relational database. Full SQL compliance, ACID transactions, JSONB, full-text search, extensions (PostGIS, pgvector, TimescaleDB), logical replication, and CTEs. The default choice for application backends.

**Pick this if** you want a battle-tested relational database with rich extension ecosystem, advanced SQL features, and long-term reliability.

**vs MariaDB** — PostgreSQL has stronger standards compliance, better JSONB support, and a richer extension ecosystem. MariaDB is lighter on resources and a drop-in MySQL replacement.
**vs Redis / Valkey** — Different layer. PostgreSQL is durable disk-based storage; Redis is an in-memory cache/broker. Often used together.

---

## MariaDB

| Field | Value |
|-------|-------|
| URL | https://mariadb.org |
| Source | https://github.com/MariaDB/server |
| Deploy | docker, binary, package |
| Image | `mariadb` |
| Resource | medium (~256MB+, grows with data/connections) |
| Auth | role-based (native password, PAM, LDAP, ed25519) |
| Reverse proxy | N/A (TCP 3306; use ProxySQL or stunnel for TLS) |
| Config | `my.cnf` / `mariadb.conf.d/`, env vars |
| Backup | `mariadb-dump` / `mariabackup` / restic on data dir |
| License | GPL-2.0 |
| Maintained | active |

Community-developed fork of MySQL with full wire-protocol compatibility. Adds Aria storage engine, ColumnStore for analytics, and improved replication. Most MySQL-targeting apps (WordPress, Nextcloud, Gitea) work unmodified.

**Pick this if** you need MySQL compatibility for existing apps, prefer a community-governed fork, or want a lighter relational DB for standard CRUD workloads.

**vs PostgreSQL** — MariaDB is simpler to operate for MySQL-ecosystem apps; PostgreSQL is more capable for complex queries, JSONB, and extensions.
**vs Adminer** — MariaDB is the database engine; Adminer is a web UI to manage it.

---

## Redis / Valkey

| Field | Value |
|-------|-------|
| URL | https://valkey.io / https://redis.io |
| Source | https://github.com/valkey-io/valkey |
| Deploy | docker, binary |
| Image | `valkey/valkey` (or `redis` for legacy) |
| Resource | light (~50MB base, grows with dataset in RAM) |
| Auth | password (`requirepass`), ACL (user/command/key level) |
| Reverse proxy | N/A (TCP 6379; TLS built-in since Redis 6 / Valkey) |
| Config | `valkey.conf` / `redis.conf`, CLI `CONFIG SET` |
| Backup | RDB snapshots + AOF; copy `dump.rdb` / `appendonly.aof` |
| License | BSD-3-Clause (Valkey); RSALv2+SSPLv1 (Redis ≥7.4) |
| Maintained | active |

In-memory data structure store used as cache, message broker, session store, and rate limiter. Sub-millisecond latency. Valkey is the community fork after Redis changed to a non-open-source license in 2024 — API-compatible, same commands and clients.

**Pick this if** you need a fast cache layer, session store, job queue (Sidekiq/BullMQ), or pub/sub broker alongside your primary database.

**vs PostgreSQL / MariaDB** — Redis/Valkey is in-memory and ephemeral by default; relational DBs are durable primary storage. Use them together: DB for truth, Redis for speed.
**vs Adminer** — No overlap; Adminer doesn't manage Redis. Use `redis-cli` or RedisInsight for Redis admin.

---

## Adminer

| Field | Value |
|-------|-------|
| URL | https://www.adminer.org |
| Source | https://github.com/vrana/adminer |
| Deploy | docker, binary (single PHP file) |
| Image | `adminer` |
| Resource | light (~30MB) |
| Auth | passthrough (authenticates against the target database) |
| Reverse proxy | ✓ |
| Config | `plugins/` directory, CSS themes, env vars for defaults |
| Backup | stateless (no local data to back up) |
| License | Apache-2.0 / GPL-2.0 (dual-licensed) |
| Maintained | active |

Single-file PHP database admin interface supporting PostgreSQL, MySQL/MariaDB, SQLite, MS SQL, Oracle, and MongoDB. Lighter and faster than phpMyAdmin with multi-driver support in one tool.

**Pick this if** you want a minimal, zero-dependency web UI to browse and manage multiple database engines from one interface.

**vs phpMyAdmin** — Adminer is a single file, supports multiple DB engines, and has a cleaner UI. phpMyAdmin is MySQL-only and heavier.
**vs pgAdmin** — Adminer is multi-database and lightweight; pgAdmin is PostgreSQL-specific with richer PG tooling (explain plans, server groups).
