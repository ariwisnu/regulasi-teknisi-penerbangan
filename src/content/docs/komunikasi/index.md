---
title: "Komunikasi (Communication)"
description: "Fasilitas komunikasi penerbangan Unit Maumere (MOF) + regulasinya, per alat."
---

Fasilitas komunikasi penerbangan di Maumere dan regulasi yang mengaturnya. Disusun **per alat** —
cara teknisi mikir ("gw pegang VHF A/G, gw butuh regulasi apa").

## Peta Alat → Regulasi

| Alat | Merk | Lokasi | Lisensi/Rating | Spesifikasi teknis | Prosedur pemeliharaan | Penyelenggara |
|---|---|---|---|---|---|---|
| Alat | Lisensi/Rating | Spesifikasi | Pemeliharaan/Kinerja | Penyelenggara | Frekuensi |
|---|---|---|---|---|---|
| **VHF A/G** (BECKER, Tower Lt.2, DUAL) | [PR 18/2023](../lisensi-rating/PR-18-2023-MOS-69-02.md) + [PR 20/2023](../lisensi-rating/PR-20-2023-SI-69-02.md) | [KP 103/2015 §VHF](../umum/KP-103-2015.md) | [PR-DJPU 08/2025](../umum/PR-DJPU-8-2025.md) | [PM 29/2021 Part 172](PM-29-2021-part-172.md) | [KP 110/2017](KP-110-2017-AC-171-10.md) |
| **VHF Portable** (Dittel, Tower Lt.4) | PR 18/2023 + PR 20/2023 | KP 103/2015 §VHF | PR-DJPU 08/2025 | PM 29/2021 | KP 110/2017 |
| **Voice Recorder** (Atis Uher, Tower Lt.2) | PR 18/2023 + PR 20/2023 | KP 103/2015 §Recorder | PR-DJPU 08/2025 | PM 29/2021 | — |
| **PABX** (Panasonic, Tower Lt.2) | — (pendukung) | — | PR-DJPU 08/2025 (umum) | PM 29/2021 | — |

> Sumber daftar alat: seed Unit Maumere (project MOFEngineering). DVOR/DME ada di folder `navigasi/`.
> Sertifikasi penyelenggara: [PR 3/2022 (SI 172-01)](PR-3-2022-SI-172-01.md) (rezim baru) /
> [KP 528/2015 (SI 171-01)](KP-528-2015-SI-171-01.md) (rezim lama).

## Catatan

- **VHF A/G** = fasilitas inti komunikasi udara-darat. Konfigurasi **DUAL** (main/standby) di Maumere.
- Parameter & toleransi verbatim (frekuensi, power, modulation depth) **belum diisi** — harus ditarik
  dari PDF KP 103/2015 atau SWORD AirNav, bukan dari ingatan (nilai keselamatan).
- Voice Recorder wajib untuk perekaman komunikasi ATS (audit/investigasi) — Part 172 + Annex 10.
- **Pemeliharaan & pelaporan:** acuan aktif = [PR-DJPU 08/2025](../umum/PR-DJPU-8-2025.md) (MOS 172-03).
  KP 35/2019 (AC 171-12) sudah **dicabut** oleh dokumen ini (14 Apr 2025).
- **Penyelenggara:** [PM 29/2021 (Part 172)](PM-29-2021-part-172.md) — menggantikan PM 57/2011 (dicabut).

## Regulasi di folder ini

- [PM 29/2021 (Part 172)](PM-29-2021-part-172.md) — penyelenggara ATM + telekomunikasi penerbangan **(aktif)**.
- [PR 3/2022 (SI 172-01)](PR-3-2022-SI-172-01.md) — tata cara sertifikasi penyelenggara (rezim 172).
- [KP 528/2015 (SI 171-01)](KP-528-2015-SI-171-01.md) — sertifikasi penyelenggara telkom (rezim lama).
- [KP 110/2017 (AC 171-10)](KP-110-2017-AC-171-10.md) — penggunaan frekuensi radio penerbangan.
- [KP 017/2017 (AC 171-09)](KP-017-2017-AC-171-09.md) — internet publik untuk aplikasi aeronautika.
- [KP 008/2017](KP-008-2017.md) — Tatanan Jaringan Komunikasi Penerbangan Nasional.
- [Perdirjen SDPPI 1/2021](PERDIRJEN-SDPPI-1-2021.md) — pencatatan stasiun radio ke ITU (Kominfo, spektrum).
- [PM 57/2011 (Part 171)](PM-57-2011-part-171.md) — 🚫 **dicabut** (arsip jejak versi).

Regulasi lintas-disiplin (spesifikasi, pemeliharaan, lisensi, payung) ada di `../umum/` dan
`../lisensi-rating/`.
