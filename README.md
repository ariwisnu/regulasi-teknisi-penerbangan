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
- 🛰️ **[Surveillance](surveillance/README.md)** — *belum ada alat di MOF; regulasi kode (SAC/SIC/SSR) disertakan untuk kelengkapan*
- ⚙️ Automation — *belum ada alat khusus di MOF; spesifikasi ATC Automation tercakup di KP 103/2015 & MOS 172-03*

## Indeks Regulasi

> **⚠️ Restrukturisasi Part 171 ↔ 172 (2021) — wajib paham.** Fungsi **penyelenggara telekomunikasi
> penerbangan** pindah dari **Part 171 → Part 172**. Sekarang: **Part 172 (PM 29/2021)** = penyelenggara
> ATM **+ telekomunikasi** (mencabut PM 57/2011); **Part 171 (PM 86/2021)** = penyelenggara **kalibrasi**
> fasilitas navigasi. Akibatnya seri MOS bergeser 171-xx → 172-xx (mis. MOS 172-03 mencabut AC 171-12).

### Payung / Umum (`umum/`)
| Nomor | Judul | Status |
|---|---|---|
| [UU 1/2009](umum/UU-1-2009.md) | Penerbangan | diubah (UU 6/2023) |
| [PP 77/2012](umum/PP-77-2012.md) | Perum LPPNPI (AirNav) | aktif |
| [PP 32/2021](umum/PP-32-2021.md) | Penyelenggaraan Bidang Penerbangan | aktif |
| [PM 64/2011](umum/PM-64-2011.md) | Kriteria/Tugas/Wewenang Teknisi Penerbangan | aktif |
| [KM 55/2026](umum/KM-55-2026.md) | Pedoman Formasi Jabatan Fungsional Teknisi Penerbangan | aktif |
| [KP 103/2015](umum/KP-103-2015.md) | MOS 171-02 Spesifikasi Teknis Fasilitas Telekomunikasi | aktif (rezim lama) |
| [PR-DJPU 08/2025](umum/PR-DJPU-8-2025.md) | MOS 172-03 Persyaratan Kinerja + Pemeliharaan & Pelaporan | **aktif** |
| [KP 220/2016](umum/KP-220-2016-MOS-172-02.md) | MOS 172-02 Aerodrome Flight Information Services (AFIS) | aktif (terbit di bawah Part 172 lama) |
| [KP 35/2019](umum/KP-35-2019.md) | ~~AC 171-12 Pemeliharaan & Pelaporan~~ | 🚫 **dicabut** (oleh PR-DJPU 08/2025) |
| [Legacy SKEP](umum/legacy-skep-elektronika-listrik.md) | Seri Elektronika & Listrik Penerbangan (2001–2005, pra-CASR) | ⚠️ historis/blm dikonfirmasi |

### Lisensi & Rating (`lisensi-rating/`)
| Nomor | Judul | Status |
|---|---|---|
| [CASR Part 69](lisensi-rating/CASR-69.md) | Lisensi/Rating Personel Navigasi Penerbangan | diubah |
| [PM 7/2025](lisensi-rating/PM-7-2025.md) | Perubahan Lampiran Part 69 (selaras Annex 1 ICAO) | aktif |
| [PR 18/2023](lisensi-rating/PR-18-2023-MOS-69-02.md) | MOS 69-02 — rating Teknik Telekomunikasi Penerbangan | aktif |
| [PR 20/2023](lisensi-rating/PR-20-2023-SI-69-02.md) | SI 69-02 — pengujian lisensi/rating teknisi telkom | aktif |

**Lisensi berlaku = PM 87/2021 jo. PM 7/2025.** Versi lama (KM 12/2009, PM 1/2014, PM 14/2019) = dicabut.
Catatan: MOS 69-01 (PR 15/2022) = lisensi **ATC** (Pemandu Lalu Lintas), bukan teknisi — di luar fokus.

### Komunikasi (`komunikasi/`)
| Nomor | Judul | Status |
|---|---|---|
| [PM 29/2021](komunikasi/PM-29-2021-part-172.md) | CASR Part 172 Penyelenggara ATM + Telekomunikasi | **aktif** (mencabut PM 57/2011) |
| [PR 3/2022](komunikasi/PR-3-2022-SI-172-01.md) | SI 172-01 Sertifikasi Penyelenggara ATM+Telkom | aktif |
| [KP 528/2015](komunikasi/KP-528-2015-SI-171-01.md) | SI 171-01 Sertifikasi Penyelenggara Telekomunikasi | aktif (rezim lama) |
| [KP 110/2017](komunikasi/KP-110-2017-AC-171-10.md) | AC 171-10 Penggunaan Frekuensi Radio Penerbangan | aktif |
| [KP 017/2017](komunikasi/KP-017-2017-AC-171-09.md) | AC 171-09 Internet Publik untuk Aplikasi Aeronautika | aktif |
| [KP 008/2017](komunikasi/KP-008-2017.md) | Tatanan Jaringan Komunikasi Penerbangan Nasional | aktif |
| [Perdirjen SDPPI 1/2021](komunikasi/PERDIRJEN-SDPPI-1-2021.md) | Pencatatan Stasiun Radio Teresterial ke ITU (Kominfo, lintas-sektor) | aktif |
| [PM 57/2011](komunikasi/PM-57-2011-part-171.md) | ~~CASR Part 171 Penyelenggara Telekomunikasi~~ | 🚫 **dicabut** (oleh PM 29/2021) |

### Navigasi (`navigasi/`)
| Nomor | Judul | Status |
|---|---|---|
| [PM 86/2021](navigasi/PM-86-2021-part-171.md) | CASR Part 171 Penyelenggara Kalibrasi Fasilitas Navigasi | **aktif** |
| [PM 22/2015](navigasi/PM-22-2015.md) | Kalibrasi/Flight Inspection Fasilitas Navigasi | aktif |

### Surveillance (`surveillance/`)
| Nomor | Judul | Status |
|---|---|---|
| [PR 6 DJPU 2024](surveillance/PR-6-DJPU-2024.md) | Alokasi SAC/SIC/II Code, ICAO 24-bit, ELT 406 MHz, Location Indicator | **aktif** |
| [KP 243/2014](surveillance/KP-243-2014.md) | ~~Izin Kode SSR Mode-S & ELT 406 MHz~~ | 🚫 **dicabut** (oleh PR 6 DJPU 2024) |

> Unit Maumere belum punya alat surveillance (radar/ADS-B/MLAT) — folder ini untuk kelengkapan disiplin.

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
