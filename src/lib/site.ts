export const SITE = {
  name: "AI Mr Ferdy",

  title: "AI Mr Ferdy | Website Resmi Platform AI Indonesia",

  description:
    "Website resmi AI Mr Ferdy. Akses platform AI Indonesia untuk produktivitas digital, pembuatan konten, dan solusi otomatisasi modern.",

  author: "AI Mr Ferdy",

  locale: "id-ID",

  themeColor: "#ffffff",

  image: "/images/og-cover.jpg",

  baseUrl: import.meta.env.SITE,

  url(path = "") {
    return `${this.baseUrl}/${path}`.replace(/([^:]\/)\/+/g, "$1");
  },

  blog(slug = "") {
    return this.url(slug);
  },

  blogAmp(slug = "") {
    return this.url(`${slug}/amp`);
  },

  category(slug = "") {
    return this.url(`category/${slug}`);
  },

  tag(slug = "") {
    return this.url(`tag/${slug}`);
  },

  imageUrl(path = "") {
    return this.url(path);
  },

  menu: [
    {
      name: "SEO",
      url: "/seo",
    },
    {
      name: "AI",
      url: "/ai",
    },
    {
      name: "Crypto",
      url: "/crypto",
    },
  ],

  social: {
    twitter: "@ai_mr_ferdy",
    github: "https://github.com/aimrferdy",
  },
};
