---
title: "Komunikasi (Communication)"
description: "Fasilitas komunikasi penerbangan + regulasi yang mengaturnya, disusun per alat."
---

Fasilitas komunikasi penerbangan dan regulasi yang mengaturnya. Disusun **per alat** — cara teknisi
mikir ("gw pegang VHF A/G, gw butuh regulasi apa").

## Peta Alat → Regulasi

| Alat | Lisensi/Rating | Spesifikasi | Pemeliharaan/Kinerja | Penyelenggara | Frekuensi |
|---|---|---|---|---|---|
| **VHF A/G** | [PR 18/2023](/lisensi-rating/pr-18-2023-mos-69-02/) + [PR 20/2023](/lisensi-rating/pr-20-2023-si-69-02/) | [Tower](/umum/kp-103-2015/#vhf-ag-tower-set) · [APP](/umum/kp-103-2015/#vhf-ag-app) · [Portable](/umum/kp-103-2015/#vhf-ag-portable) | [PR-DJPU 08/2025](/umum/pr-djpu-8-2025/) | [PM 29/2021](/komunikasi/pm-29-2021-part-172/) | [KP 110/2017](/komunikasi/kp-110-2017-ac-171-10/) |
| **HF A/G** | PR 18/2023 + PR 20/2023 | [KP 103/2015 §HF](/umum/kp-103-2015/#hf-ag) | PR-DJPU 08/2025 | PM 29/2021 | KP 110/2017 |
| **Voice Recorder** | PR 18/2023 + PR 20/2023 | [KP 103/2015 (di Tower Set)](/umum/kp-103-2015/#vhf-ag-tower-set) | PR-DJPU 08/2025 | PM 29/2021 | — |
| **ATIS / D-ATIS** | PR 18/2023 + PR 20/2023 | [KP 103/2015 §ATIS](/umum/kp-103-2015/#atis) | PR-DJPU 08/2025 | PM 29/2021 | KP 110/2017 |
| **AMHS/AFTN, jaringan ATS/DS** | PR 18/2023 | KP 103/2015 *(ditangguhkan → Automation)* | PR-DJPU 08/2025 | PM 29/2021 | — |

> Sertifikasi penyelenggara: [PR 3/2022 (SI 172-01)](/komunikasi/pr-3-2022-si-172-01/) (rezim baru) /
> [KP 528/2015 (SI 171-01)](/komunikasi/kp-528-2015-si-171-01/) (rezim lama). Tatanan jaringan komunikasi:
> [KP 008/2017](/komunikasi/kp-008-2017/). Navigasi (DVOR/DME) ada di folder `navigasi/`.

## Catatan

- **VHF A/G** = fasilitas inti komunikasi udara-darat (umumnya konfigurasi DUAL main/standby).
- Parameter & toleransi verbatim (frekuensi, power, modulation depth) sudah **ditranskripsi** dari
  KP 103/2015 → [VHF Tower](/umum/kp-103-2015/#vhf-ag-tower-set) ·
  [VHF APP](/umum/kp-103-2015/#vhf-ag-app) · [VHF Portable](/umum/kp-103-2015/#vhf-ag-portable) ·
  [HF](/umum/kp-103-2015/#hf-ag) · [ATIS](/umum/kp-103-2015/#atis). ⚠️ Tabel VHF Portable di dokumen
  sumber teracak (label↔nilai) — ditandai di halaman spec.
- Voice Recorder wajib untuk perekaman komunikasi ATS (audit/investigasi) — Part 172 + Annex 10.
- **Pemeliharaan & pelaporan:** acuan aktif = [PR-DJPU 08/2025](/umum/pr-djpu-8-2025/) (MOS 172-03).
  KP 35/2019 (AC 171-12) sudah **dicabut** oleh dokumen ini (14 Apr 2025).
- **Penyelenggara:** [PM 29/2021 (Part 172)](/komunikasi/pm-29-2021-part-172/) — menggantikan PM 57/2011 (dicabut).

## Regulasi di folder ini

- [PM 29/2021 (Part 172)](/komunikasi/pm-29-2021-part-172/) — penyelenggara ATM + telekomunikasi penerbangan **(aktif)**.
- [PR 3/2022 (SI 172-01)](/komunikasi/pr-3-2022-si-172-01/) — tata cara sertifikasi penyelenggara (rezim 172).
- [KP 528/2015 (SI 171-01)](/komunikasi/kp-528-2015-si-171-01/) — sertifikasi penyelenggara telkom (rezim lama).
- [KP 110/2017 (AC 171-10)](/komunikasi/kp-110-2017-ac-171-10/) — penggunaan frekuensi radio penerbangan.
- [KP 017/2017 (AC 171-09)](/komunikasi/kp-017-2017-ac-171-09/) — internet publik untuk aplikasi aeronautika.
- [KP 008/2017](/komunikasi/kp-008-2017/) — Tatanan Jaringan Komunikasi Penerbangan Nasional.
- [Perdirjen SDPPI 1/2021](/komunikasi/perdirjen-sdppi-1-2021/) — pencatatan stasiun radio ke ITU (Kominfo, spektrum).
- [PM 57/2011 (Part 171)](/komunikasi/pm-57-2011-part-171/) — 🚫 **dicabut** (arsip jejak versi).

Regulasi lintas-disiplin (spesifikasi, pemeliharaan, lisensi, payung) ada di `../umum/` dan
`../lisensi-rating/`.
