export const SITE = {
  name: "AI Mr Ferdy",

  title: "AI Mr Ferdy - Pusat Informasi Game Online, Teknologi, Aplikasi & Hiburan Digital",

  description:
    "AI Mr Ferdy merupakan portal informasi yang menyajikan artikel berkualitas tentang game online, teknologi terbaru, aplikasi, keamanan siber, tutorial, tips digital, serta berbagai informasi menarik yang selalu diperbarui.",

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
