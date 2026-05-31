# Regulasi Teknisi Penerbangan CNS/A

Kumpulan terkurasi regulasi untuk **teknisi penerbangan bidang CNS/A** (Communication, Navigation,
Surveillance, Automation) di Indonesia — fokus: status keberlakuan yang **selalu jelas** (berlaku /
dicabut / diubah), disusun menurut **cara kerja teknisi** (per alat), bukan per nomor dokumen.

> Alat bantu pribadi + open-source untuk sesama teknisi. Bukan dokumen resmi AirNav/Kemenhub —
> selalu rujuk balik ke **[JDIH Kemenhub](https://jdih.dephub.go.id/)** untuk teks resmi terkini.

## ⚠️ Aturan Konten (baca dulu)

- **Repo publik** → HANYA regulasi publik (UU, PP, PM/KM, CASR/PKPS, KP/PR dari JDIH) + tautan ICAO.
- **DILARANG** memuat dokumen internal/terbatas AirNav (Instruksi Teknis, SOP internal, program
  maintenance internal, apa pun bertanda "terbatas/rahasia/internal").
- **Hak cipta ICAO**: Annex & Doc → tautkan + ringkas + kutip seperlunya, jangan unggah teks penuh.
- Parameter/toleransi keselamatan: **hanya** dari sumber resmi (PDF JDIH / SWORD AirNav), jangan dari ingatan.

## Legenda Status

| Status | Arti |
|---|---|
| `aktif` | Berlaku, belum diubah/dicabut |
| `diubah` | Masih berlaku tapi sudah diamandemen — cek dokumen pengubahnya |
| `dicabut` | **Jangan dipakai** — sudah tidak berlaku |
| `draft` | Belum ditetapkan |
| `verifikasi: false` | Nomor/status **belum** dipastikan di JDIH |

## Fokus Awal: Unit Maumere (MOF)

Cakupan pertama = **Komunikasi + Navigasi**, sesuai fasilitas riil Unit Maumere (sumber: project
MOFEngineering). Disiplin Surveillance & Automation menyusul kalau ada alatnya / regulasi relevan.

### Per Disiplin (per alat)

- 📡 **[Komunikasi](komunikasi/README.md)** — VHF A/G, VHF Portable, Voice Recorder, PABX
- 🧭 **[Navigasi](navigasi/README.md)** — DVOR, DME (Shelter VOR; status U/S per AIP SUP 39/2024)
- 🛰️ Surveillance — *(belum ada alat di MOF)*
- ⚙️ Automation — *(belum ada alat di MOF)*

## Indeks Regulasi

### Payung / Umum (`umum/`)
| Nomor | Judul | Status |
|---|---|---|
| [UU 1/2009](umum/UU-1-2009.md) | Penerbangan | diubah (UU 6/2023) |
| [PP 77/2012](umum/PP-77-2012.md) | Perum LPPNPI (AirNav) | aktif |
| [PM 64/2011](umum/PM-64-2011.md) | Kriteria/Tugas/Wewenang Teknisi Penerbangan | aktif |
| [KP 103/2015](umum/KP-103-2015.md) | MOS 171-02 Spesifikasi Teknis Fasilitas Telekomunikasi | aktif |
| [KP 35/2019](umum/KP-35-2019.md) | AC 171-12 Prosedur Pemeliharaan & Pelaporan | aktif ⚠️ |
| [PR-DJPU 08/2025](umum/PR-DJPU-8-2025.md) | MOS 172-03 Persyaratan Kinerja + Pemeliharaan & Pelaporan Fasilitas Telekomunikasi | aktif |

### Lisensi & Rating (`lisensi-rating/`)
| Nomor | Judul | Status |
|---|---|---|
| [CASR Part 69](lisensi-rating/CASR-69.md) | Lisensi/Rating Personel Navigasi Penerbangan | diubah |
| [PM 7/2025](lisensi-rating/PM-7-2025.md) | Perubahan Lampiran Part 69 (selaras Annex 1 ICAO) | aktif |
| [PR 18/2023](lisensi-rating/PR-18-2023-MOS-69-02.md) | MOS 69-02 — Teknik Telekomunikasi Penerbangan | aktif |

**Lisensi berlaku = PM 87/2021 jo. PM 7/2025.** Versi lama (KM 12/2009, PM 1/2014, PM 14/2019) = dicabut.

### Komunikasi (`komunikasi/`)
| Nomor | Judul | Status |
|---|---|---|
| [PM 57/2011](komunikasi/PM-57-2011-part-171.md) | CASR Part 171 Penyelenggara Telekomunikasi Penerbangan | diubah (s.d. PM 48/2017) |

### Navigasi (`navigasi/`)
| Nomor | Judul | Status |
|---|---|---|
| [PM 22/2015](navigasi/PM-22-2015.md) | Kalibrasi/Flight Inspection Fasilitas Navigasi | aktif |

## Cara Pakai / Kontribusi

- Tiap regulasi = 1 file Markdown dengan frontmatter YAML (lihat `template-regulasi.md`).
- Tambah regulasi baru: salin template → isi → taruh di folder disiplin yang pas → tambahkan ke indeks ini.
- Koreksi/tambahan lewat **Pull Request** atau **Issue**. Sertakan tautan JDIH resmi.

## Status & Yang Belum (per 2026-05-31)

- ✅ Nomor & status keberlakuan semua regulasi inti = **terverifikasi** (lihat `docs/DESIGN.md`).
- ⏳ **Belum diisi**: klausul/parameter verbatim (toleransi, interval) — perlu PDF KP 103/2015,
  KP 35/2019, PM 22/2015; serta OCR Lampiran PM 7/2025 (scan).
- ⏳ Tanggal terbit persis beberapa PM/KP masih placeholder (`20XX-XX-XX`) — konfirmasi JDIH.

Detail desain & rasional ada di **[docs/DESIGN.md](docs/DESIGN.md)**.
