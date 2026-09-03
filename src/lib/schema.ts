import { SITE } from "./site";

const URL = SITE.url();

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${URL}#organization`,
  name: SITE.name,
  description: SITE.description,
  url: URL,
  logo: {
    "@type": "ImageObject",
    "@id": `${URL}${SITE.image}#logo`,
    url: SITE.imageUrl(SITE.image),
    contentUrl: SITE.imageUrl(SITE.image),
  },
  image: SITE.imageUrl(SITE.image),
  knowsAbout: [
    "Artificial Intelligence",
    "AI Tools",
    "Automation",
    "SEO",
    "Cloudflare Workers",
    "Astro",
    "Web Development"
  ],
  sameAs: [
    "https://www.youtube.com/@ai-mr-ferdy",
    "https://www.instagram.com/aimrferdyofficial",
    "https://medium.com/@aimrferdy",
    "https://github.com/aimrferdy",
    "https://web.facebook.com/groups/aimrferdyofficial",
    "https://heylink.me/mrferdy"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${URL}#website`,
  name: SITE.name,
  alternateName: SITE.title,
  url: URL,
  publisher: {
    "@id": `${URL}#organization`
  },
  inLanguage: SITE.locale,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE.url("search")}?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

export function articleSchema(post) {
  const articleUrl = SITE.blog(post.slug);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${articleUrl}#article`,
    headline: post.title,
    description: post.description,
    image: SITE.imageUrl(post.image || SITE.image),
    author: {
      "@type": "Person",
      name: SITE.author
    },
    publisher: {
      "@id": `${URL}#organization`
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl
    },
    url: articleUrl,
    inLanguage: SITE.locale
  };
}
