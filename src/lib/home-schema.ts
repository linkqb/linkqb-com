// src/lib/home-schema.ts

export const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization
    {
      "@type": "Organization",
      "@id": "https://aimrferdy.com/#organization",
      "name": "AI Mr Ferdy",
	  "description": "Platform AI Indonesia yang menyediakan AI Tools, SEO, automation, dan solusi digital modern.",
      "url": "https://aimrferdy.com/",
      "logo": {
        "@id": "https://aimrferdy.com/images/og-cover.jpg"
      },
      "image": {
        "@id": "https://aimrferdy.com/images/og-cover.jpg"
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
      "@id": "https://aimrferdy.com/about#person",
      "name": "AI Mr Ferdy",
	  "description": "Founder dan pengembang AI Mr Ferdy.",
      "url": "https://aimrferdy.com/",
      "image": {
        "@id": "https://aimrferdy.com/images/og-cover.jpg"
      },
      "worksFor": {
        "@id": "https://aimrferdy.com/#organization"
      },
	  "mainEntityOfPage": {
  "@id": "https://aimrferdy.com/#webpage"
}
    },

    // Website
    {
      "@type": "WebSite",
      "@id": "https://aimrferdy.com/#website",
      "url": "https://aimrferdy.com/",
      "name": "AI Mr Ferdy | Website Resmi Platform AI Indonesia",
	  "alternateName": "AI Mr Ferdy",
      "publisher": {
        "@id": "https://aimrferdy.com/#organization"
      },
      "inLanguage": "id-ID",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://aimrferdy.com/searchresult/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },

    // Image
    {
      "@type": "ImageObject",
      "@id": "https://aimrferdy.com/images/og-cover.jpg",
      "url": "https://aimrferdy.com/images/og-cover.jpg",
      "contentUrl": "https://aimrferdy.com/images/og-cover.jpg",
      "caption": "AI Mr Ferdy",
	  "width": 1200,
      "height": 630
    },

    // Breadcrumb
    {
      "@type": "BreadcrumbList",
      "@id": "https://aimrferdy.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://aimrferdy.com/"
        }
      ]
    },

    // WebPage
    {
      "@type": "WebPage",
      "@id": "https://aimrferdy.com/#webpage",
      "url": "https://aimrferdy.com/",
      "name": "AI Mr Ferdy | Website Resmi Platform AI Indonesia",
      "description": "Website resmi AI Mr Ferdy yang menyediakan AI Tools, SEO, automation, dan solusi digital modern.",
      "isPartOf": {
        "@id": "https://aimrferdy.com/#website"
      },
      "publisher": {
        "@id": "https://aimrferdy.com/#organization"
      },
      "about": {
        "@id": "https://aimrferdy.com/#person"
      },
      "breadcrumb": {
        "@id": "https://aimrferdy.com/#breadcrumb"
      },
      "primaryImageOfPage": {
        "@id": "https://aimrferdy.com/images/og-cover.jpg"
      },
	  "mainEntity": {
     "@id": "https://aimrferdy.com/#organization"
     },
      "inLanguage": "id-ID"
    },

    // Navigation
    {
  "@type": "SiteNavigationElement",
  "@id": "https://aimrferdy.com/#navigation",
  "name": "Main Navigation",
  "hasPart": [
    {
      "@type": "WebPage",
      "name": "Home",
      "url": "https://aimrferdy.com/"
    },
    {
      "@type": "WebPage",
      "name": "Blog",
      "url": "https://aimrferdy.com/blog"
    },
    {
      "@type": "WebPage",
      "name": "Tools",
      "url": "https://aimrferdy.com/tools"
    },
    {
      "@type": "WebPage",
      "name": "Product",
      "url": "https://aimrferdy.com/product"
    },
    {
      "@type": "WebPage",
      "name": "About",
      "url": "https://aimrferdy.com/about"
    },
    {
      "@type": "WebPage",
      "name": "Contact",
      "url": "https://aimrferdy.com/contact"
    }
  ]
},
	// Service
	{
  "@type": "Service",
  "@id": "https://aimrferdy.com/#service",
  "name": "AI Tools & Digital Solutions",
  "provider": {
    "@id": "https://aimrferdy.com/#organization"
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
  "@id": "https://aimrferdy.com/#app",
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
  "@id": "https://aimrferdy.com/#faq",
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
        "text": "Website resmi AI Mr Ferdy adalah https://aimrferdy.com, yang menyediakan informasi terbaru, AI Tools, artikel, produk digital, dan layanan resmi AI Mr Ferdy."
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
