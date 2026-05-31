# Komunikasi (Communication) — Unit Maumere (MOF)

Fasilitas komunikasi penerbangan di Maumere dan regulasi yang mengaturnya. Disusun **per alat** —
cara teknisi mikir ("gw pegang VHF A/G, gw butuh regulasi apa").

## Peta Alat → Regulasi

| Alat | Merk | Lokasi | Lisensi/Rating | Spesifikasi teknis | Prosedur pemeliharaan | Penyelenggara |
|---|---|---|---|---|---|---|
| **VHF A/G** | BECKER | Tower Lt.2 | [PR 18/2023 MOS 69-02](../lisensi-rating/PR-18-2023-MOS-69-02.md) | [KP 103/2015 §VHF A/G](../umum/KP-103-2015.md) | [KP 35/2019](../umum/KP-35-2019.md) | [PM 57/2011 Part 171](PM-57-2011-part-171.md) |
| **VHF Portable** | Dittel | Tower Lt.4 | PR 18/2023 MOS 69-02 | KP 103/2015 §VHF | KP 35/2019 | PM 57/2011 |
| **Voice Recorder** | Atis Uher | Tower Lt.2 | PR 18/2023 MOS 69-02 | KP 103/2015 §Recorder | KP 35/2019 | PM 57/2011 |
| **PABX** | Panasonic | Tower Lt.2 | — (fasilitas pendukung) | — | KP 35/2019 (umum) | PM 57/2011 |

> Sumber daftar alat: seed Unit Maumere (project MOFEngineering). DVOR/DME ada di folder `navigasi/`.

## Catatan

- **VHF A/G** = fasilitas inti komunikasi udara-darat. Konfigurasi **DUAL** (main/standby) di Maumere.
- Parameter & toleransi verbatim (frekuensi, power, modulation depth) **belum diisi** — harus ditarik
  dari PDF KP 103/2015 atau SWORD AirNav, bukan dari ingatan (nilai keselamatan).
- Voice Recorder wajib untuk perekaman komunikasi ATS (audit/investigasi) — diatur Part 171 + Annex 10.

## Regulasi di folder ini

- [PM 57/2011 (CASR Part 171)](PM-57-2011-part-171.md) — penyelenggara pelayanan telekomunikasi penerbangan.

Regulasi lintas-disiplin (spesifikasi, pemeliharaan, lisensi, payung) ada di `../umum/` dan
`../lisensi-rating/`.
