// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://regulasi-teknisi-penerbangan.vercel.app',
  integrations: [
    starlight({
      title: 'Regulasi Teknisi CNS/A',
      description:
        'Kumpulan terkurasi regulasi teknisi penerbangan CNS/A (Communication, Navigation, Surveillance, Automation) Indonesia — status keberlakuan terlacak, per disiplin.',
      defaultLocale: 'root',
      locales: {
        root: { label: 'Bahasa Indonesia', lang: 'id' },
      },
      social: {
        github: 'https://github.com/ariwisnu/regulasi-teknisi-penerbangan',
      },
      sidebar: [
        {
          label: 'Mulai',
          items: [
            { label: 'Beranda', link: '/' },
            { label: 'Cara Pakai & Status', link: '/panduan/' },
          ],
        },
        { label: 'Umum / Payung', autogenerate: { directory: 'umum' } },
        { label: 'Lisensi & Rating', autogenerate: { directory: 'lisensi-rating' } },
        { label: 'Komunikasi', autogenerate: { directory: 'komunikasi' } },
        { label: 'Navigasi', autogenerate: { directory: 'navigasi' } },
        { label: 'Surveillance', autogenerate: { directory: 'surveillance' } },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
