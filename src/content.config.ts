import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),

    // 👇 TAMBAHKAN INI
    popular: z.boolean().optional(),
  }),
});


const aplikasi = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),

    pubDate: z.coerce.date(),

    image: z.string().optional(),
    hero: z.string().optional(),
    icon: z.string().optional(),

    popular: z.boolean().optional(),

    category: z.string().optional(),
    version: z.string().optional(),
    size: z.string().optional(),

    rating: z.number().optional(),
    downloads: z.string().optional(),

    android: z.string().optional(),
    updated: z.string().optional(),

    download: z.string().optional(),

    // ===== Tambahan =====
    pembaruanTerbaru: z.string().optional(),
    pembaruanSebelumnya: z.string().optional(),

    kelebihan: z.array(z.string()).optional(),
    kekurangan: z.array(z.string()).optional(),

    ulasan: z.array(
      z.object({
        nama: z.string(),
        komentar: z.string(),
      })
    ).optional(),

    faq: z.array(
      z.object({
        pertanyaan: z.string(),
        jawaban: z.string(),
      })
    ).optional(),
  }),
});

export const collections = {
  blog,
  aplikasi,
};
