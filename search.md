---
category: Search
description: Search engines, full-text search, and metasearch aggregators
---

# Search

## Comparison Matrix

| Service | Deploy | Resource | Auth | License | Maintained |
|---------|--------|----------|------|---------|------------|
| [Meilisearch](#meilisearch) | docker, binary | light (~150MB) | API key | MIT | active |
| [SearXNG](#searxng) | docker | light (~128MB) | none (public or restrict via proxy) | AGPL-3.0 | active |
| [Typesense](#typesense) | docker, binary | medium (~256MB+) | API key | GPL-3.0 | active |
| [Elasticsearch / OpenSearch](#elasticsearch--opensearch) | docker, package | heavy (1GB+ JVM heap) | built-in, OIDC, LDAP | SSPL / Apache-2.0 | active |

---

## Meilisearch

| Field | Value |
|-------|-------|
| URL | https://www.meilisearch.com |
| Source | https://github.com/meilisearch/meilisearch |
| Deploy | docker, binary (single Rust binary) |
| Image | `getmeili/meilisearch` |
| Resource | light (~150MB, grows with index size) |
| Auth | API key (master key → generates search/admin keys) |
| Reverse proxy | ✓ |
| Config | env vars + CLI flags |
| Backup | snapshots + dumps (`/meili_data`) |
| License | MIT |
| Maintained | active |

Lightning-fast, typo-tolerant full-text search engine written in Rust. Sub-50ms queries out of the box with zero configuration. RESTful API, faceted search, filtering, sorting, multi-tenancy via tenant tokens, and automatic language detection.

**Pick this if** you want instant search with typo tolerance, minimal resource usage, and the simplest possible setup — ideal for app-embedded search (docs sites, e-commerce, internal tools).

**vs Typesense** — Both are lightweight and developer-friendly. Meilisearch has simpler defaults and broader language support; Typesense has geosearch and more tuning knobs.
**vs Elasticsearch/OpenSearch** — Meilisearch for instant app search with minimal ops; Elasticsearch for log analytics, complex aggregations, or petabyte scale.
**vs SearXNG** — Different purpose. Meilisearch indexes your data; SearXNG aggregates external search engines.

---

## SearXNG

| Field | Value |
|-------|-------|
| URL | https://docs.searxng.org |
| Source | https://github.com/searxng/searxng |
| Deploy | docker |
| Image | `searxng/searxng` |
| Resource | light (~128MB) |
| Auth | none built-in (restrict access via reverse proxy or network) |
| Reverse proxy | ✓ |
| Config | `settings.yml` + `limiter.toml` |
| Backup | config files only (no persistent data) |
| License | AGPL-3.0 |
| Maintained | active |

Privacy-respecting metasearch engine that aggregates results from 70+ search engines (Google, Bing, DuckDuckGo, etc.) without tracking. Supports web, images, news, videos, science, files, music, and more. Configurable engines, bangs, and result formats.

**Pick this if** you want a private, self-hosted search portal that queries multiple engines without leaking your searches to any single provider.

**vs Meilisearch/Typesense** — Different purpose. SearXNG queries the public internet; Meilisearch/Typesense index your own data.
**vs Elasticsearch/OpenSearch** — SearXNG is a search frontend/aggregator with zero indexing; Elasticsearch is a search backend that indexes data you feed it.

---

## Typesense

| Field | Value |
|-------|-------|
| URL | https://typesense.org |
| Source | https://github.com/typesense/typesense |
| Deploy | docker, binary (C++ binary) |
| Image | `typesense/typesense` |
| Resource | medium (~256MB+, in-memory index) |
| Auth | API key (admin + search-only scoped keys) |
| Reverse proxy | ✓ |
| Config | CLI flags + env vars |
| Backup | snapshot `/data` directory |
| License | GPL-3.0 |
| Maintained | active |

Search-as-you-type engine built in C++ with an emphasis on low latency and developer experience. In-memory index for single-digit millisecond responses. Supports faceting, filtering, geosearch, synonyms, curation, and high-availability clustering.

**Pick this if** you need sub-5ms search-as-you-type with geosearch, HA clustering, or fine-grained API key scoping — and you're comfortable with slightly more explicit schema configuration.

**vs Meilisearch** — Typesense has geosearch, joins, vector search, and more explicit schema control. Meilisearch has simpler setup, better typo handling, and broader default language support.
**vs Elasticsearch/OpenSearch** — Typesense for fast app search with minimal ops; Elasticsearch when you need log aggregation, complex query DSL, or multi-TB indexes.
**vs SearXNG** — Different purpose. Typesense indexes your data; SearXNG queries external engines.

---

## Elasticsearch / OpenSearch

| Field | Value |
|-------|-------|
| URL | https://www.elastic.co/elasticsearch · https://opensearch.org |
| Source | https://github.com/elastic/elasticsearch · https://github.com/opensearch-project/OpenSearch |
| Deploy | docker, package (JVM) |
| Image | `docker.elastic.co/elasticsearch/elasticsearch` · `opensearchproject/opensearch` |
| Resource | heavy (1GB+ JVM heap minimum, 4GB+ recommended) |
| Auth | built-in (Security plugin), OIDC, LDAP, SAML |
| Reverse proxy | ✓ (or use Kibana/Dashboards as frontend) |
| Config | `elasticsearch.yml` / `opensearch.yml` + env vars |
| Backup | snapshot to S3/NFS (`_snapshot` API) |
| License | SSPL (Elasticsearch 7.11+) / Apache-2.0 (OpenSearch) |
| Maintained | active |

Distributed search and analytics engine for structured and unstructured data. Full-text search, log analytics, APM, vector/kNN search, and complex aggregations at scale. OpenSearch is the community-driven Apache-2.0 fork after Elastic's license change. Pairs with Kibana (Elastic) or OpenSearch Dashboards for visualization.

**Pick this if** you need distributed full-text search at scale, log/event analytics (ELK/EFK stack), complex aggregations, or a mature ecosystem with extensive plugins and integrations.

**vs Meilisearch/Typesense** — Elasticsearch for analytics, logs, and complex queries at scale; Meilisearch/Typesense for lightweight instant app search with less operational overhead.
**vs SearXNG** — Different purpose. Elasticsearch indexes and analyzes your data; SearXNG is a privacy frontend for public search engines.
**OpenSearch vs Elasticsearch** — Feature-near-identical. Choose OpenSearch for Apache-2.0 licensing and community governance; Elasticsearch for tighter Kibana integration and faster feature releases from Elastic.
