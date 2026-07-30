// src/lib/home-schema.ts

import { SITE } from "./site";

const URL = SITE.url();

export const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization
    {
      "@type": "Organization",
      "@id": `${URL}/#organization`,
      "name": SITE.name,
      "description": SITE.description,
      "url": SITE.url(),
      "logo": {
        "@id": `${URL}${SITE.image}`
      },
      "image": {
        "@id": `${URL}${SITE.image}`
      },
      "knowsAbout": [
        "Artificial Intelligence",
        "SEO",
        "Automation",
        "Cloudflare Workers",
        "Astro",
        "Web Development"
      ],
    }
  ]
};
      "sameAs": [
    "https://www.youtube.com/@ai-mr-ferdy",
    "https://www.instagram.com/aimrferdyofficial",
    "https://medium.com/@aimrferdy",
    "https://github.com/aimrfredy",
    "https://web.facebook.com/groups/aimrferdyofficial",
    "https://heylink.me/mrferdy"
      ]
    },

   // Person
{
  "@type": "Person",
  "@id": `${URL}/about#person`,
  "name": SITE.name,
  "description": "Founder dan pengembang AI Mr Ferdy.",
  "url": SITE.url(),
  "image": {
    "@id": `${URL}${SITE.image}`
  },
  "worksFor": {
    "@id": `${URL}/#organization`
  },
  "mainEntityOfPage": {
    "@id": `${URL}/#webpage`
  }
},
// Website
{
  "@type": "WebSite",
  "@id": `${URL}/#website`,
  "url": SITE.url(),
  "name": SITE.title,
  "alternateName": SITE.name,
  "publisher": {
    "@id": `${URL}/#organization`
  },
  "inLanguage": SITE.locale,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${URL}/searchresult/?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
},

// Image
{
  "@type": "ImageObject",
  "@id": `${URL}${SITE.image}`,
  "url": `${URL}${SITE.image}`,
  "contentUrl": `${URL}${SITE.image}`,
  "caption": SITE.name,
  "width": 1200,
  "height": 630
},

 // Breadcrumb
{
  "@type": "BreadcrumbList",
  "@id": `${URL}/#breadcrumb`,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": SITE.url()
    }
  ]
},

// WebPage
{
  "@type": "WebPage",
  "@id": `${URL}/#webpage`,
  "url": SITE.url(),
  "name": SITE.title,
  "description": SITE.description,
  "isPartOf": {
    "@id": `${URL}/#website`
  },
  "publisher": {
    "@id": `${URL}/#organization`
  },
  "about": {
    "@id": `${URL}/#person`
  },
  "breadcrumb": {
    "@id": `${URL}/#breadcrumb`
  },
  "primaryImageOfPage": {
    "@id": `${URL}${SITE.image}`
  },
  "mainEntity": {
    "@id": `${URL}/#organization`
  },
  "inLanguage": SITE.locale
},
// Navigation
{
  "@type": "SiteNavigationElement",
  "@id": `${URL}/#navigation`,
  "name": "Main Navigation",
  "hasPart": [
    {
      "@type": "WebPage",
      "name": "Home",
      "url": SITE.url()
    },
    {
      "@type": "WebPage",
      "name": "Blog",
      "url": SITE.url("blog")
    },
    {
      "@type": "WebPage",
      "name": "Tools",
      "url": SITE.url("tools")
    },
    {
      "@type": "WebPage",
      "name": "Product",
      "url": SITE.url("product")
    },
    {
      "@type": "WebPage",
      "name": "About",
      "url": SITE.url("about")
    },
    {
      "@type": "WebPage",
      "name": "Contact",
      "url": SITE.url("contact")
    }
  ]
},

// Service
{
  "@type": "Service",
  "@id": `${URL}/#service`,
  "name": "AI Tools & Digital Solutions",
  "provider": {
    "@id": `${URL}/#organization`
  },
  "serviceType": [
    "AI Tools",
    "Prompt Generator",
    "AI Humanizer",
    "SEO",
    "Automation",
    "Web Development"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Indonesia"
  }
},

// WebApplication
{
  "@type": "WebApplication",
  "@id": `${URL}/#app`,
  "name": "AI Mr Ferdy App",
  "url": "https://app.aimrferdy.workers.dev/",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "applicationSubCategory": "AI Tools",
  "browserRequirements": "Requires JavaScript",
},

    // FAQ
   {
  "@type": "FAQPage",
  "@id": "${SITE.url}/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apa itu AI Mr Ferdy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI Mr Ferdy adalah platform AI Indonesia yang menyediakan berbagai AI Tools, solusi otomatisasi, teknologi, pembuatan konten, dan layanan digital untuk membantu meningkatkan produktivitas individu maupun bisnis."
      }
    },
    {
      "@type": "Question",
      "name": "Apa saja layanan yang tersedia di AI Mr Ferdy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI Mr Ferdy menyediakan AI Tools, Prompt Generator, AI Humanizer, solusi SEO, automasi digital, artikel edukasi, serta berbagai produk digital yang terus dikembangkan."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah AI Mr Ferdy dapat digunakan secara gratis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI Mr Ferdy menyediakan berbagai AI Tools yang dapat digunakan secara gratis. Beberapa layanan lanjutan tersedia dalam paket premium dengan fitur tambahan."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah AI Mr Ferdy aman digunakan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya. AI Mr Ferdy dikembangkan dengan memperhatikan keamanan, performa, dan pengalaman pengguna sehingga layanan dapat digunakan secara nyaman melalui website resmi."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah AI Mr Ferdy dapat digunakan di perangkat mobile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya. Seluruh website dan AI Tools AI Mr Ferdy dirancang menggunakan pendekatan mobile-first sehingga dapat diakses melalui smartphone, tablet, maupun desktop."
      }
    },
    {
      "@type": "Question",
      "name": "Di mana website resmi AI Mr Ferdy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Website resmi AI Mr Ferdy adalah ${SITE.url}, yang menyediakan informasi terbaru, AI Tools, artikel, produk digital, dan layanan resmi AI Mr Ferdy."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah AI Mr Ferdy menyediakan AI Tools?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya. AI Mr Ferdy menyediakan berbagai AI Tools untuk membantu pembuatan konten, optimasi SEO, otomatisasi pekerjaan, dan meningkatkan produktivitas digital."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah AI Mr Ferdy menyediakan solusi SEO modern?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya. AI Mr Ferdy menyediakan solusi SEO modern, automasi, serta ekosistem digital yang dirancang untuk membantu meningkatkan visibilitas website di mesin pencari."
      }
    },
    {
      "@type": "Question",
      "name": "Bagaimana cara mulai menggunakan AI Mr Ferdy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pengguna dapat mengunjungi website resmi AI Mr Ferdy atau membuka aplikasi AI melalui platform yang tersedia untuk mulai menggunakan berbagai fitur dan layanan."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah AI Mr Ferdy mendukung bisnis dan individu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ya. AI Mr Ferdy dirancang untuk individu, kreator konten, UMKM, maupun perusahaan yang membutuhkan AI Tools, automasi, SEO, dan solusi digital modern."
      }
    }
  ]
}
  ]
};
