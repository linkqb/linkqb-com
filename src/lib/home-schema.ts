// src/lib/home-schema.ts

export const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization
    {
      "@type": "Organization",
      "@id": "${SITE.url}/#organization",
      "name": "AI Mr Ferdy",
	  "description": "Platform AI Indonesia yang menyediakan AI Tools, SEO, automation, dan solusi digital modern.",
      "url": "${SITE.url}/",
      "logo": {
        "@id": "${SITE.url}/images/og-cover.jpg"
      },
      "image": {
        "@id": "${SITE.url}/images/og-cover.jpg"
      },
	  "knowsAbout": [
  "Artificial Intelligence",
  "SEO",
  "Automation",
  "Cloudflare Workers",
  "Astro",
  "Web Development"
],
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
      "@id": "${SITE.url}/about#person",
      "name": "AI Mr Ferdy",
	  "description": "Founder dan pengembang AI Mr Ferdy.",
      "url": "${SITE.url}/",
      "image": {
        "@id": "${SITE.url}/images/og-cover.jpg"
      },
      "worksFor": {
        "@id": "${SITE.url}/#organization"
      },
	  "mainEntityOfPage": {
  "@id": "${SITE.url}/#webpage"
}
    },

    // Website
    {
      "@type": "WebSite",
      "@id": "${SITE.url}/#website",
      "url": "${SITE.url}/",
      "name": "AI Mr Ferdy | Website Resmi Platform AI Indonesia",
	  "alternateName": "AI Mr Ferdy",
      "publisher": {
        "@id": "${SITE.url}/#organization"
      },
      "inLanguage": "id-ID",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "${SITE.url}/searchresult/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },

    // Image
    {
      "@type": "ImageObject",
      "@id": "${SITE.url}/images/og-cover.jpg",
      "url": "${SITE.url}/images/og-cover.jpg",
      "contentUrl": "${SITE.url}/images/og-cover.jpg",
      "caption": "AI Mr Ferdy",
	  "width": 1200,
      "height": 630
    },

    // Breadcrumb
    {
      "@type": "BreadcrumbList",
      "@id": "${SITE.url}/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "${SITE.url}/"
        }
      ]
    },

    // WebPage
    {
      "@type": "WebPage",
      "@id": "${SITE.url}/#webpage",
      "url": "${SITE.url}/",
      "name": "AI Mr Ferdy | Website Resmi Platform AI Indonesia",
      "description": "Website resmi AI Mr Ferdy yang menyediakan AI Tools, SEO, automation, dan solusi digital modern.",
      "isPartOf": {
        "@id": "${SITE.url}/#website"
      },
      "publisher": {
        "@id": "${SITE.url}/#organization"
      },
      "about": {
        "@id": "${SITE.url}/#person"
      },
      "breadcrumb": {
        "@id": "${SITE.url}/#breadcrumb"
      },
      "primaryImageOfPage": {
        "@id": "${SITE.url}/images/og-cover.jpg"
      },
	  "mainEntity": {
     "@id": "${SITE.url}/#organization"
     },
      "inLanguage": "id-ID"
    },

    // Navigation
    {
  "@type": "SiteNavigationElement",
  "@id": "${SITE.url}/#navigation",
  "name": "Main Navigation",
  "hasPart": [
    {
      "@type": "WebPage",
      "name": "Home",
      "url": "${SITE.url}/"
    },
    {
      "@type": "WebPage",
      "name": "Blog",
      "url": "${SITE.url}/blog"
    },
    {
      "@type": "WebPage",
      "name": "Tools",
      "url": "${SITE.url}/tools"
    },
    {
      "@type": "WebPage",
      "name": "Product",
      "url": "${SITE.url}/product"
    },
    {
      "@type": "WebPage",
      "name": "About",
      "url": "${SITE.url}/about"
    },
    {
      "@type": "WebPage",
      "name": "Contact",
      "url": "${SITE.url}/contact"
    }
  ]
},
	// Service
	{
  "@type": "Service",
  "@id": "${SITE.url}/#service",
  "name": "AI Tools & Digital Solutions",
  "provider": {
    "@id": "${SITE.url}/#organization"
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
  "@id": "${SITE.url}/#app",
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
