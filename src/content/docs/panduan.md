---
title: Cara Pakai & Status
description: Legenda status keberlakuan, aturan konten repo publik, dan cara kontribusi.
---

## Legenda Status

| Status | Arti |
|---|---|
| `aktif` | Berlaku, belum diubah/dicabut |
| `diubah` | Masih berlaku tapi sudah diamandemen — cek dokumen pengubahnya |
| `dicabut` | **Jangan dipakai** — sudah tidak berlaku |
| `draft` | Belum ditetapkan |
| `verifikasi: false` | Nomor/status **belum** dipastikan di JDIH |

Tiap halaman regulasi punya frontmatter: `nomor`, `status`, `mencabut`, `dicabut_oleh`, `disiplin`,
`sumber_resmi`, `arsip_lokal`.

## Restrukturisasi Part 171 ↔ 172 (2021)

Fungsi **penyelenggara telekomunikasi penerbangan** pindah dari **Part 171 → Part 172**:

- **Part 172 (PM 29/2021)** = penyelenggara ATM **+ telekomunikasi** (mencabut PM 57/2011).
- **Part 171 (PM 86/2021)** = penyelenggara **kalibrasi** fasilitas navigasi.
- Akibatnya seri MOS bergeser 171-xx → 172-xx (mis. MOS 172-03 / PR-DJPU 08/2025 mencabut AC 171-12 / KP 35/2019).

## ⚠️ Aturan Konten (repo publik)

- HANYA regulasi publik (UU, PP, PM/KM, CASR/PKPS, KP/PR/SKEP dari JDIH) + tautan ICAO.
- **DILARANG** memuat dokumen internal/terbatas AirNav (Instruksi Teknis, SOP internal, dokumen SMS).
- Hak cipta ICAO: tautkan + ringkas + kutip seperlunya, jangan unggah teks penuh.
- Parameter/toleransi keselamatan: hanya dari sumber resmi (PDF JDIH / SWORD), jangan dari ingatan.

## Kontribusi

- Tiap regulasi = 1 file Markdown + frontmatter YAML (lihat `template-regulasi.md` di repo).
- Tambah/koreksi lewat **Pull Request** atau **Issue** di
  [GitHub](https://github.com/ariwisnu/regulasi-teknisi-penerbangan). Sertakan tautan JDIH resmi.

## Sumber

Diverifikasi via **JDIH Kemenhub** (jdih.dephub.go.id) + **SWORD AirNav**. PDF resmi diarsip via Git LFS
di folder `pdf/`.
