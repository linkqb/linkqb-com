import { SITE } from "./site";

const URL = SITE.url();

export const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${URL}#organization`,
      name: SITE.name,
      description: SITE.description,
      url: URL,
      logo: {
        "@type": "ImageObject",
        "@id": `${URL}${SITE.image}#logo`,
        url: SITE.imageUrl(SITE.image),
        contentUrl: SITE.imageUrl(SITE.image)
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
    },

    {
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
    },

    {
      "@type": "ImageObject",
      "@id": `${URL}${SITE.image}`,
      url: SITE.imageUrl(SITE.image),
      contentUrl: SITE.imageUrl(SITE.image),
      caption: SITE.name
    },

    {
      "@type": "WebPage",
      "@id": `${URL}#webpage`,
      url: URL,
      name: SITE.title,
      description: SITE.description,
      isPartOf: {
        "@id": `${URL}#website`
      },
      publisher: {
        "@id": `${URL}#organization`
      },
      about: {
        "@id": `${URL}#organization`
      },
      mainEntity: {
        "@id": `${URL}#organization`
      },
      primaryImageOfPage: {
        "@id": `${URL}${SITE.image}`
      },
      inLanguage: SITE.locale
    },

    {
      "@type": "SiteNavigationElement",
      "@id": `${URL}#navigation`,
      name: "Main Navigation",
      hasPart: SITE.menu.map((item) => ({
        "@type": "WebPage",
        name: item.name,
        url: SITE.url(item.url)
      }))
    },

    {
      "@type": "Service",
      "@id": `${URL}#service`,
      name: "AI Tools & Digital Solutions",
      provider: {
        "@id": `${URL}#organization`
      },
      serviceType: [
        "AI Tools",
        "Prompt Generator",
        "AI Humanizer",
        "SEO",
        "Automation",
        "Web Development"
      ],
      areaServed: {
        "@type": "Country",
        name: "Indonesia"
      }
    },

    {
      "@type": "WebApplication",
      "@id": `${URL}#app`,
      name: "AI Mr Ferdy App",
      url: "https://app.aimrferdy.workers.dev/",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "AI Tools",
      operatingSystem: "Web",
      creator: {
        "@id": `${URL}#organization`
      }
    }
  ]
};
