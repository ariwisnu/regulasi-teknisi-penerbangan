import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Custom frontmatter dari file regulasi dibiarkan longgar (z.any) supaya tidak
// gagal validasi; title/description tetap dari skema Starlight.
const regulasiFields = z
  .object({
    nomor: z.any().optional(),
    judul: z.any().optional(),
    jenis: z.any().optional(),
    penerbit: z.any().optional(),
    tanggal_terbit: z.any().optional(),
    tanggal_berlaku: z.any().optional(),
    status: z.any().optional(),
    mencabut: z.any().optional(),
    dicabut_oleh: z.any().optional(),
    diubah_oleh: z.any().optional(),
    disiplin: z.any().optional(),
    kategori: z.any().optional(),
    ruang_lingkup: z.any().optional(),
    referensi_icao: z.any().optional(),
    sumber_resmi: z.any().optional(),
    arsip_lokal: z.any().optional(),
    verifikasi: z.any().optional(),
  });

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({ extend: regulasiFields }),
  }),
};
