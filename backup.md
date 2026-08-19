---
category: Backup
description: Backup solutions, snapshot tools, and disaster recovery
---

# Backup

## Comparison Matrix

| Service | Deploy | Resource | Auth | License | Maintained |
|---------|--------|----------|------|---------|------------|
| [Restic](#restic) | binary | light (~50MB) | none (encryption passphrase) | BSD-2-Clause | active |
| [BorgBackup](#borgbackup) | binary, package | light (~80MB) | none (encryption passphrase) | BSD-3-Clause | active |
| [Duplicati](#duplicati) | docker, binary | medium (~256MB) | built-in (web UI password) | LGPL-2.1 | active |
| [Kopia](#kopia) | docker, binary | light (~100MB) | built-in (web UI password) | Apache-2.0 | active |

---

## Restic

| Field | Value |
|-------|-------|
| URL | https://restic.net |
| Source | https://github.com/restic/restic |
| Deploy | binary (Go, single static binary) |
| Image | `restic/restic` (utility image) |
| Resource | light (~50MB runtime) |
| Auth | none (repository passphrase for encryption) |
| Reverse proxy | N/A (CLI tool, no web UI) |
| Config | env vars + CLI flags (no config file) |
| Backup | repository is the backup (local, S3, SFTP, rclone, REST) |
| License | BSD-2-Clause |
| Maintained | active |

Fast, secure, cross-platform backup program. Encrypts and deduplicates data at the chunk level. Supports dozens of storage backends via rclone integration. No daemon — run via cron or systemd timers.

**Pick this if** you want a simple, fast CLI backup tool with excellent dedup, encryption by default, and broad backend support (S3, B2, SFTP, local, rclone).

**vs BorgBackup** — Restic has more native backends (S3, B2, Azure, GCS) and better Windows support. Borg has better compression and slightly better dedup ratios. Restic is simpler to set up for cloud targets.

**vs Duplicati** — Restic is CLI-only and scriptable; Duplicati has a GUI for less technical users. Restic is faster and more reliable for large datasets.

**vs Kopia** — Both are fast Go-based tools with similar backends. Kopia adds a built-in web UI, policies, and snapshot mounting. Restic is more battle-tested with a larger community.

---

## BorgBackup

| Field | Value |
|-------|-------|
| URL | https://www.borgbackup.org |
| Source | https://github.com/borgbackup/borg |
| Deploy | binary (Python + C), package |
| Image | N/A (no official container; community images exist) |
| Resource | light (~80MB runtime) |
| Auth | none (repository passphrase for encryption) |
| Reverse proxy | N/A (CLI tool, no web UI) |
| Config | env vars + CLI flags |
| Backup | repository is the backup (local, SSH/SFTP) |
| License | BSD-3-Clause |
| Maintained | active |

Deduplicating archiver with compression and authenticated encryption. Excellent space efficiency via content-defined chunking. Append-only mode for tamper resistance. Primarily targets local and SSH-accessible storage.

**Pick this if** you want the best deduplication and compression ratios for local or SSH-based backup targets, and you value a mature, well-audited codebase.

**vs Restic** — Borg has better compression (lz4/zstd/lzma) and slightly better dedup. Restic supports more backends natively (S3, B2) without extra tooling. Borg requires SSH access to remote repos.

**vs Duplicati** — Borg is CLI-only with better performance and reliability. Duplicati provides a web GUI and native cloud support but has a history of database corruption issues on large backups.

**vs Kopia** — Borg is older and proven; Kopia is newer with built-in cloud backends, GUI, and policies. Borg's dedup is slightly more space-efficient; Kopia is faster on large repos.

---

## Duplicati

| Field | Value |
|-------|-------|
| URL | https://www.duplicati.com |
| Source | https://github.com/duplicati/duplicati |
| Deploy | docker, binary (.NET) |
| Image | `duplicati/duplicati` |
| Resource | medium (~256MB) |
| Auth | built-in (web UI password) |
| Reverse proxy | ✓ |
| Config | web UI + SQLite database |
| Backup | targets 30+ cloud backends (S3, B2, Google Drive, OneDrive, SFTP, WebDAV) |
| License | LGPL-2.1 |
| Maintained | active |

Encrypted cloud backup with a web-based GUI. Supports incremental backups, scheduling, and email notifications. Targets virtually any cloud or local storage. AES-256 encryption before upload.

**Pick this if** you want a GUI-driven backup tool that non-technical users can manage, with broad cloud storage support out of the box.

**vs Restic** — Duplicati has a GUI and built-in scheduler; Restic is CLI-only but faster and more reliable at scale. Duplicati has had historical database corruption bugs on very large backup sets.

**vs BorgBackup** — Duplicati supports cloud backends natively and has a web UI. Borg is more reliable and space-efficient but SSH-only for remote targets.

**vs Kopia** — Both have GUIs. Kopia is faster, has better dedup, and is more actively developed. Duplicati supports more obscure cloud backends and has been around longer.

---

## Kopia

| Field | Value |
|-------|-------|
| URL | https://kopia.io |
| Source | https://github.com/kopia/kopia |
| Deploy | docker, binary (Go, single binary) |
| Image | `kopia/kopia` |
| Resource | light (~100MB runtime) |
| Auth | built-in (web UI password, optional TLS) |
| Reverse proxy | ✓ |
| Config | `repository.config` + CLI flags + policies |
| Backup | repository is the backup (local, S3, B2, GCS, Azure, SFTP, rclone, WebDAV) |
| License | Apache-2.0 |
| Maintained | active |

Fast encrypted backup tool with built-in web UI and CLI. Content-addressable deduplication, compression (zstd), and client-side encryption. Policy-based retention, snapshot browsing, and FUSE/WebDAV mounting of snapshots.

**Pick this if** you want the speed and scriptability of Restic plus a built-in web UI, snapshot policies, and native multi-backend support — essentially a modern all-in-one.

**vs Restic** — Kopia adds a web UI, policy engine, snapshot mounting, and server mode. Restic has a larger community and longer track record. Performance is comparable; Kopia edges ahead on large repos.

**vs BorgBackup** — Kopia has native cloud backends and a GUI; Borg is SSH-only but has better compression ratios. Kopia is faster for initial backups.

**vs Duplicati** — Kopia is significantly faster, more reliable, and has better dedup. Duplicati supports a few more exotic backends but Kopia covers all mainstream ones.
