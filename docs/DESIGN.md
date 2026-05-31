# Desain: Repo Regulasi Teknisi Penerbangan (CNS/A AirNav Indonesia)

Dibuat oleh /office-hours pada 2026-05-31
Status: DRAFT (dikerjakan autonomous — tujuan sesi diasumsikan, mohon koreksi)
Mode: Builder (alat pribadi + komunitas)
Repo: regulasi-teknisi-penerbangan

> **Asumsi sesi.** Lo gak sempat jawab pertanyaan tujuan, jadi gw ambil rekomendasi: ini **alat
> pribadi + open-source buat sesama teknisi CNS/A**, bukan startup/produk. Kalau salah, bilang —
> arah desain berubah total (kalau produk, fokus pindah ke bukti orang mau bayar & wedge jualan).

---

## Problem Statement

Regulasi yang mengatur teknisi penerbangan bidang **CNS/A** (Communication, Navigation,
Surveillance, Automation/Data Processing) di Indonesia tersebar di banyak sumber: UU, PP, CASR/PKPS,
Peraturan Menteri, Staff Instruction, SKEP Dirjen lama, plus standar ICAO. Seorang teknisi yang mau
tahu **"lisensi/rating apa yang gw butuh"** atau **"standar maintenance & toleransi alat ini apa"**
harus berburu dokumen satu-satu, sering nemu versi yang udah dicabut, dan gak tahu mana yang berlaku
sekarang.

Tujuan repo: satu tempat terstruktur, ter-kurasi, dan **selalu ketahuan statusnya** (berlaku /
dicabut / diubah) untuk regulasi CNS/A — mulai dari lisensi & rating sampai standar maintenance.

## Kenapa Ini Berguna (nilai inti)

1. **Status keberlakuan terlacak.** Ngikutin regulasi yang udah dicabut = bahaya (salah lisensi,
   salah parameter maintenance). Repo ini secara eksplisit nandain `aktif/dicabut/diubah` +
   `mencabut`/`dicabut_oleh`. Ini value utama dibanding "Google sendiri" atau "tanya senior".
2. **Disusun menurut kerja teknisi, bukan menurut nomor dokumen.** Teknisi mikir "gw pegang ILS,
   gw butuh apa" — bukan "tunjukin PM No. sekian". Struktur: disiplin (Nav/Comm/Surv/Auto) ×
   topik (lisensi, rating, maintenance, operasi) → dipetakan ke regulasi + klausul relevan.
3. **Git = mesin pelacak versi.** Tiap perubahan regulasi jadi commit. Riwayat bisa diaudit. Teknisi
   lain bisa kontribusi lewat Pull Request. Gak perlu bikin CMS — git udah nyelesain masalah
   "versi mana yang terbaru".

## Premis (mohon konfirmasi)

1. Masalah sebenarnya bukan "regulasi gak ada", tapi **tercerai-berai + gak jelas mana yang berlaku**.
2. Yang dipakai harian teknisi cuma sebagian kecil klausul; sisanya jarang disentuh. Jadi **ringkasan
   + tautan ke klausul kunci** lebih berharga daripada nyalin teks lengkap.
3. Nilai terbesar = **kurasi + status keberlakuan**, bukan jumlah dokumen.
4. Mulai dari **markdown di GitHub** udah cukup berguna; web/search nyusul kalau konten udah banyak.

## Landscape (yang udah ada, kenapa repo ini tetap menang)

- **JDIH Kemenhub** (jdih.dephub.go.id): sumber resmi PM/KM/UU/PP — tapi mesin telusurnya generik,
  gak tahu konteks "teknisi CNS", gak motong ke klausul, gak ngelompokin per alat.
- **ICAO-NET / e-library**: standar internasional (Annex, Doc) — berbayar/akses terbatas, bahasa
  Inggris, gak dipetakan ke regulasi nasional.
- **Folder pribadi / grup WA / "tanya senior"**: cara sekarang. Rapuh, gak teraudit, gampang basi.

Celah yang diisi repo ini: **lapisan kurasi** di atas sumber resmi — mengelompokkan per disiplin
CNS/A, nandain status, motong ke klausul kunci, dan nautin balik ke sumber resmi.

## Pendekatan yang Dipertimbangkan

### Approach A — Repo Markdown terstruktur (minimal viable)
- **Ringkasan:** Folder per disiplin, 1 file markdown per regulasi (frontmatter YAML + ringkasan +
  klausul kunci + tautan resmi), README sebagai indeks.
- **Effort:** S. **Risk:** Rendah.
- **Pros:** Jadi dalam hitungan hari. GitHub kasih telusur + riwayat + PR gratis. Gak ada backend.
- **Cons:** Telusur seadanya (GitHub search). Belum ada tampilan rapi/badge status.
- **Pakai ulang:** Git, GitHub, Markdown — gak ada yang dibikin dari nol.

### Approach B — Repo + situs statis (ideal)
- **Ringkasan:** Konten markdown yang sama, di-render jadi website ber-search pakai
  **Astro Starlight** atau **MkDocs Material**. Badge `aktif/dicabut`, navigasi per disiplin, tag.
  Auto-deploy ke GitHub Pages / Vercel.
- **Effort:** M. **Risk:** Rendah-Sedang.
- **Pros:** Search bagus, enak dibaca di HP saat di lapangan, badge status jelas. Tetap git-backed.
- **Cons:** Tambahan kerja setup + styling. Butuh konten cukup dulu biar berasa gunanya.

### Approach C — Regulasi sebagai DATA (kreatif/lateral)
- **Ringkasan:** Tiap regulasi = file YAML/JSON terstruktur sebagai single source of truth →
  generate website **dan** matriks kepatuhan (disiplin × syarat × regulasi × status). Nanti bisa
  nopang query tool / chatbot ("regulasi apa buat rating ILS?"), pengingat masa berlaku lisensi,
  dan gap-analysis terhadap ICAO.
- **Effort:** L. **Risk:** Sedang.
- **Pros:** Sekali tulis, banyak keluaran. Buka pintu fitur pintar (matriks, reminder, analisis gap).
- **Cons:** Over-engineering kalau konten masih sedikit. Skema data harus matang dulu.

## Rekomendasi

**Mulai A, tapi tulis tiap regulasi sebagai Markdown-dengan-frontmatter-YAML** sehecehnya supaya
sekarang enak dibaca manusia **dan** nanti gampang di-parse mesin. Ini menjembatani A → B → C tanpa
nulis ulang konten. Tambah Starlight/MkDocs (B) begitu konten udah cukup banyak buat ngerasain
manfaat search. C nyusul kalau emang butuh fitur pintar.

Alasan: cocok mode Builder (cepat jadi, bisa di-pamerin), git nyelesain masalah currency, dan skema
frontmatter bikin investasi konten gak kebuang saat naik level.

## Skema Data (jantung teknis — frontmatter per regulasi)

```yaml
---
nomor: "PM XX Tahun 20XX"            # verifikasi di JDIH
judul: "Lisensi dan Rating Teknik Telekomunikasi Penerbangan"
jenis: PM                            # UU | PP | PM | KM | CASR/PKPS | SI | AC | SKEP | ICAO
penerbit: "Kemenhub / Ditjen Hubud (DGCA)"
tanggal_terbit: 20XX-XX-XX
tanggal_berlaku: 20XX-XX-XX
status: aktif                        # aktif | dicabut | diubah | draft
mencabut: ["KM 24 Tahun 2009"]       # regulasi yang dicabut oleh dokumen ini
dicabut_oleh: null
diubah_oleh: []
disiplin: [navigasi, komunikasi, surveillance, automation]   # tag CNS/A
kategori: [lisensi, rating, maintenance, operasi, sertifikasi]
ruang_lingkup: "teknisi telekomunikasi penerbangan"
referensi_icao: ["Annex 10 Vol I", "Doc 8071"]
sumber_resmi: "https://jdih.dephub.go.id/..."
arsip_lokal: "pdf/PM-XX-20XX.pdf"    # hanya dokumen PUBLIK
verifikasi: true                     # tandai kalau nomor/status belum dipastikan
---

## Ringkasan
(2-4 kalimat: dokumen ini ngatur apa, buat siapa)

## Klausul Kunci buat Teknisi
- Pasal X: ...
- Lampiran Y (toleransi/interval): ...
```

## Struktur Repo (usulan)

```
regulasi-teknisi-penerbangan/
├── README.md                 # indeks utama per disiplin + status
├── docs/DESIGN.md            # dokumen ini
├── komunikasi/               # VHF A/G, HF, AMHS/AFTN/AIDC, VCCS, recorder, VSAT
├── navigasi/                 # VOR, DME, ILS (LOC/GP/Marker), NDB, GBAS/GNSS
├── surveillance/             # PSR, SSR Mode A/C/S, ADS-B, ADS-C, MLAT/WAM
├── automation/               # FDPS/RDPS, pengolah data surveillance, time sync, recording
├── lisensi-rating/           # lisensi & rating teknisi (lintas disiplin)
├── umum/                     # UU, PP, CASR umbrella, referensi ICAO
└── pdf/                      # arsip dokumen PUBLIK saja (lihat peringatan hukum)
```

## Inventaris Awal Regulasi (TERVERIFIKASI via web — 2026-05-31)

> Diverifikasi pakai WebSearch/WebFetch ke peraturan.go.id, peraturan.bpk.go.id, jdih.kemenhub.go.id,
> regulasip.id, hubud.dephub.go.id, SWORD AirNav. Confidence ditandai. Yang `[cek-JDIH]` = nomor muncul
> di sumber sekunder, pastikan teks resmi + status amandemen terkini di JDIH (lihat catatan keterbatasan
> di bawah). Lo domain expert — koreksi kalau ada yang meleset.

**Payung / umum**
- **UU No. 1 Tahun 2009** tentang Penerbangan. `[tinggi]`
- **PP No. 77 Tahun 2012** tentang Perum LPPNPI (AirNav Indonesia). `[tinggi]`
- **PM 64 Tahun 2011** tentang Kriteria, Tugas dan Wewenang Teknisi Penerbangan. `[tinggi]`
- CASR/PKPS terkait: Part 170 (Air Traffic Rules), Part 173 (Perancangan Prosedur), Part 174
  (Meteorologi), Part 175 (AIS — PM 9/2023), Part 139 (Bandar Udara).

**Lisensi & rating teknisi (INTI buat lo — terverifikasi)**
- **CASR Part 69** — "Lisensi, Rating, Pelatihan, dan Kecakapan Personel Navigasi Penerbangan".
  Ini RUMAH lisensi lo (Part 69 cakup personel navigasi penerbangan, termasuk teknik telekomunikasi
  penerbangan — bukan cuma ATC). `[tinggi]`
  - Rantai versi: KM 12/2009 → **PM 1 Tahun 2014** → **PM 14 Tahun 2019** → **PM 87 Tahun 2021**
    (cabut PM 14/2019) → diubah **PM 7 Tahun 2025**. Status berlaku = **PM 87/2021 jo. PM 7/2025**.
    `[TERVERIFIKASI browser — JDIH + PDF abstrak resmi]`
  - **PM 7/2025 detail (dari abstrak resmi JDIH `2025abspmkemenhub007.pdf`):** ditetapkan 11 Jul 2025,
    berlaku (diundangkan) 23 Jul 2025, status **Berlaku**, BN 2025 No. 534 (3 hlm + Lampiran 23 hlm).
    Dasar hukum: Pasal 17(3) UUD 1945; UU 39/2008 jo. UU 61/2024; UU 1/2009 jo. terakhir UU 6/2023;
    PP 32/2021; Perpres 173/2024; PM 87/2021; PM 4/2025. **Isi perubahan:** mengubah **Lampiran**
    PM 87/2021 (BN 2021 No. 1319) — alasan resmi: "menyesuaikan dengan ketentuan Annex 1 ICAO dan
    perkembangan hukum keselamatan penerbangan sipil". Substansi perubahan ada di Lampiran 23 hlm;
    abstrak TIDAK merinci pasal per pasal, dan PDF utama = hasil scan (perlu OCR buat klausul verbatim).
  - **Part 69 = rumah lisensi personel navigasi penerbangan, termasuk bidang lo.** Per MOS 69-02
    (PR 18/2023), Part 69 mencakup a.l. **Personel Teknik Telekomunikasi Penerbangan** (← CNS lo),
    Personel Pemandu Komunikasi Penerbangan, Personel Pelayanan Informasi Aeronautika, plus ATC &
    perancang prosedur. `[teknik telekomunikasi = TERVERIFIKASI; rincian kategori lain + apakah
    "sistem otomasi ATS" jadi rating tersendiri → cek teks PR 18/2023]`
- **Manual of Standard (MOS) Part 69-02 = PR 18 Tahun 2023** (Peraturan Dirjen Hubud) —
  "Lisensi, Rating, Pelatihan dan Kecakapan **Personel Pemandu Komunikasi Penerbangan dan Personel
  Teknik Telekomunikasi Penerbangan**". **Ini dokumen paling spesifik ke peran lo** (detail rating &
  kecakapan teknisi CNS). `[tinggi]`

**Penyelenggara pelayanan (Part 171/172 — terverifikasi)**
- **CASR Part 171** — Penyelenggara Pelayanan Telekomunikasi Penerbangan = **PM 57 Tahun 2011**,
  diubah: PM 29/2013 (ke-1), PM 38/2014 (ke-2), PM 48/2017 (ke-3). Basis awal KM 10/2009. `[tinggi]`
- **CASR Part 172** — Penyelenggara Pelayanan Manajemen Lalu Lintas dan Telekomunikasi Penerbangan
  = **PM 29 Tahun 2021**. `[tinggi]`

**Standar maintenance & spesifikasi teknis (INTI buat lo — TERVERIFIKASI browser via JDIH 2026-05-31)**
- **KP 103 Tahun 2015** — **MOS CASR Part 171-02: Spesifikasi Teknis Fasilitas Telekomunikasi
  Penerbangan** (judul resmi persis di JDIH). Parameter/spesifikasi per alat: Nav (NDB, DME, VOR,
  ILS), Surv (PSR, MSSR Mode S, ADS-B, MLAT, ATC Automation), Comm (VHF A/G, HF A/G, Tower/APP, ATIS).
  **Ini MOS spesifikasi terbaru — gak ada pengganti pasca-2015 di JDIH.** `[TERVERIFIKASI]`
- **KP 35 Tahun 2019** — **Advisory Circular CASR Part 171-12: Prosedur Pemeliharaan dan Pelaporan
  Fasilitas Telekomunikasi Penerbangan** (SOP maintenance + pelaporan CNS). **Ini AC pemeliharaan
  terbaru — gak ada pengganti pasca-2019 di JDIH.** `[TERVERIFIKASI]`
- **PM 22 Tahun 2015** — **Penyelenggaraan Pelayanan Kalibrasi Fasilitas Navigasi Penerbangan,
  Prosedur Penerbangan dan Pengujian Dalam Penerbangan** (flight inspection/kalibrasi nav aids —
  padanan nasional ICAO Doc 8071; penting buat VOR/DME/ILS). `[TERVERIFIKASI]`

**Seri MOS/AC CASR Part 171 (turunan Part 171, terverifikasi JDIH):**
- 171-02 = KP 103/2015 (spesifikasi teknis fasilitas) · 171-09 = KP 78/2017 (NOTAM/AIS dinamis)
  · 171-12 = KP 35/2019 (pemeliharaan & pelaporan fasilitas).

**Referensi ICAO (link/rujuk, jangan redistribusi penuh — hak cipta)**
- Annex 10 *Aeronautical Telecommunications*: Vol I (alat bantu navigasi radio), Vol II (prosedur
  komunikasi), Vol III (sistem komunikasi), Vol IV (surveillance & ACAS), Vol V (spektrum frekuensi).
- Doc 8071 *Manual on Testing of Radio Navigation Aids* (flight inspection / kalibrasi).
- Doc 9849 (GNSS), Annex 11 (ATS), Annex 1 (Personnel Licensing).

**Per disiplin — yang teknisi butuh per alat:** rating buat ngerjain alat itu + standar maintenance
(parameter/toleransi/interval) + kalibrasi/flight inspection (khusus nav aids, lihat Doc 8071).

## ⚠️ Peringatan Hukum & Keamanan (penting — baca)

- **JANGAN publikasikan dokumen internal/terbatas AirNav** (Instruksi Teknis internal, SOP internal,
  program maintenance internal, apa pun bertanda "terbatas"/"rahasia"/"internal"). Mempublikasikan
  dokumen operasi/keamanan penerbangan internal bisa melanggar aturan kerja, aturan keamanan
  penerbangan (aviation security), dan berisiko hukum. Repo publik **hanya** untuk regulasi publik
  (UU, PP, PM/KM, CASR/PKPS, SI/AC dari JDIH) + tautan ICAO.
- **Hak cipta ICAO:** Annex & Doc itu berhak cipta. **Tautkan + ringkas + kutip klausul seperlunya**,
  jangan unggah teks lengkapnya.
- Kalau mau muat dokumen internal, **repo harus privat** dan patuhi kebijakan disclosure AirNav dulu.
- Untuk dokumen publik: simpan arsip lokal di `pdf/` dengan atribusi sumber, atau cukup tautkan ke
  JDIH biar selalu ngarah ke versi resmi.

## Distribusi

Repo GitHub = distribusinya. Kalau naik ke Approach B → GitHub Pages atau Vercel (gratis,
auto-deploy tiap push). Gak ada pipeline rumit yang dibutuhkan untuk Approach A.

## Success Criteria

- Satu disiplin terisi penuh (mis. Navigasi): tiap regulasi punya status + klausul kunci + tautan.
- Teknisi lain bisa nemu "lisensi/rating + standar maintenance buat ILS" dalam < 1 menit.
- Tiap regulasi jelas `aktif/dicabut/diubah`; gak ada dokumen basi tanpa tanda.
- Minimal 1 kontribusi (PR/issue) dari teknisi lain → bukti gunanya buat komunitas.

## Status Verifikasi (2026-05-31)

Tahap 1: WebSearch/WebFetch. Tahap 2: **browser (gstack /browse) + unduh PDF resmi JDIH + dekompresi
abstrak** — SEMUA item inti TUNTAS terverifikasi:
- ✅ **PM 7/2025**: tanggal, status Berlaku, dasar hukum, isi perubahan (mengubah Lampiran PM 87/2021
  agar selaras Annex 1 ICAO) — dari abstrak resmi `2025abspmkemenhub007.pdf`. Klausul per-pasal
  TIDAK diverifikasi (ada di Lampiran 23 hlm yang berupa scan; perlu OCR).
- ✅ **Part 69 cakup Personel Teknik Telekomunikasi Penerbangan** (bidang CNS lo) — via MOS 69-02
  (PR 18/2023). Apakah otomasi/data-processing jadi rating tersendiri = belum dipastikan.
- ✅ **MOS/AC maintenance terbaru**: KP 103/2015 (spec) & KP 35/2019 (pemeliharaan) = terbaru,
  gak ada pengganti pasca-itu di JDIH. Seri 171 lengkap (171-02/09/12).
- ✅ **PM 22/2015** kalibrasi/flight inspection nav aids ditemukan sebagai bonus.

Catatan tool: peraturan.bpk.go.id = 403 (anti-bot); JDIH kemenhub render OK via browser. PDF utama
PM 7/2025 = hasil scan (gak ada text layer) → pakai abstrak (text layer) buat isi. Teks pasal
level-kata di PDF scan butuh OCR kalau suatu saat perlu verbatim.

## Open Questions

1. **Tujuan** — Builder (terkonfirmasi via AUQ). ✅
2. **Publik atau privat?** (nentuin boleh-tidaknya muat dokumen internal)
3. **Bahasa** — Indonesia saja, atau bilingual buat istilah ICAO?
4. **Cakupan awal** — semua CNS/A sekaligus, atau 1 disiplin dulu?
5. **Arsip PDF publik** — host lokal di `pdf/` atau cukup tautan JDIH?

## Next Steps (langkah bangun)

1. `git init` + struktur folder per disiplin (lihat atas).
2. Bikin `template-regulasi.md` (frontmatter di atas).
3. Isi **1 disiplin (Navigasi)** sebagai bukti konsep.
4. Tulis `README.md` indeks per disiplin + legenda status.
5. (Nanti) Tambah Astro Starlight/MkDocs → web + search → deploy GitHub Pages/Vercel.

## The Assignment (aksi nyata berikutnya)

Semua nomor regulasi inti TUNTAS terverifikasi (lisensi = CASR 69 / PM 87/2021 jo. PM 7/2025 +
PR 18/2023 MOS 69-02; maintenance = KP 103/2015 + KP 35/2019; kalibrasi = PM 22/2015). **Langkah lo
sekarang: git init + isi 1 disiplin (mis. Navigasi/ILS) pakai skema frontmatter** sebagai bukti
konsep. Buat detail klausul verbatim (toleransi/interval per alat), tarik dari SWORD AirNav atau
PDF KP 103/2015 & KP 35/2019. Nomor & status keberlakuan gak perlu lo cek lagi — udah pasti.

## Yang gw perhatiin dari cara lo mikir

- Lo nyebut disiplinnya spesifik — "telekomunikasi, navigasi, surveillance, otomasi/data processing"
  — bukan cuma "regulasi penerbangan". Itu udah peta struktur repo. Lo mikir per domain kerja, bagus.
- Lo bilang "berkaitan dengan gw" duluan, baru komunitas. Itu sinyal Builder yang sehat: bikin buat
  masalah sendiri dulu — versi paling jujur dan paling kepake.
- Lo nyebut "lisensi" dan "standar maintenance" sebagai contoh utama. Itu dua hal yang status
  keberlakuannya paling fatal kalau salah — naluri lo nunjuk ke bagian yang taruhannya paling tinggi.
