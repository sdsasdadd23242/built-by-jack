/**
 * This file contains structured data (JSON-LD) for SEO optimization
 * Reference: https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data
 */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "WebDesign",
  "name": "BuiltByJack",
  "url": "https://builtbyjack.com",
  "logo": "https://builtbyjack.com/images/logo.png",
  "sameAs": [
    "https://www.facebook.com/builtbyjack",
    "https://www.instagram.com/builtbyjack",
    "https://twitter.com/builtbyjack",
    "https://www.linkedin.com/company/builtbyjack"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+61-7-1234-5678",
    "contactType": "customer service",
    "areaServed": "Brisbane",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Web Developer St",
    "addressLocality": "Brisbane",
    "addressRegion": "QLD",
    "postalCode": "4000",
    "addressCountry": "AU"
  },
  "description": "BuiltByJack offers affordable web design and development services in Brisbane. We create fast, beautiful, and high-converting websites at competitive prices."
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "BuiltByJack - Web Design Brisbane",
  "image": "https://builtbyjack.com/images/office.jpg",
  "@id": "https://builtbyjack.com",
  "url": "https://builtbyjack.com",
  "telephone": "+61-7-1234-5678",
  "priceRange": "$399 - $1299",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Web Developer St",
    "addressLocality": "Brisbane",
    "addressRegion": "QLD",
    "postalCode": "4000",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -27.4698,
    "longitude": 153.0251
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/builtbyjack",
    "https://www.instagram.com/builtbyjack"
  ]
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Web Design and Development",
  "provider": {
    "@type": "LocalBusiness",
    "name": "BuiltByJack",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Brisbane",
      "addressRegion": "QLD",
      "addressCountry": "AU"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Brisbane"
  },
  "description": "Professional website design and development services in Brisbane. We create custom, affordable, and high-performing websites for businesses of all sizes.",
  "offers": {
    "@type": "Offer",
    "price": "399",
    "priceCurrency": "AUD",
    "priceValidUntil": "2024-12-31",
    "availability": "https://schema.org/InStock"
  }
};

// FAQ structured data for cheap websites page
export const faqSchemaAffordableWebsites = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a website cost in Brisbane?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Website costs in Brisbane can vary widely depending on complexity and features. At BuiltByJack, our affordable websites start from just $399 for a basic package, with our most popular business package at $899. Custom websites with advanced features typically range from $1,299 to $3,000+."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get a cheap website that still looks professional?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! At BuiltByJack, our affordable websites are designed to look professional and represent your brand effectively. We use modern design principles, mobile-responsive layouts, and high-quality components to ensure your website looks premium regardless of budget."
      }
    },
    {
      "@type": "Question",
      "name": "How quickly can you build a website in Brisbane?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our basic websites typically take 3-5 business days to complete once we have all your content and requirements. More complex projects may take 2-4 weeks, but we always provide clear timelines upfront and work efficiently to get your site live as quickly as possible."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer ongoing support for websites?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer various support and maintenance packages to keep your website secure, updated, and performing at its best. Our Brisbane-based team provides local support and quick response times to any issues or questions you might have."
      }
    },
    {
      "@type": "Question",
      "name": "What makes BuiltByJack different from other web designers in Brisbane?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BuiltByJack combines affordable pricing with professional quality. We focus on creating websites that not only look great but also drive business results through SEO optimization, fast loading times, and conversion-focused design. As a local Brisbane business, we understand the market and provide personalized service that offshore or template-based services can't match."
      }
    }
  ]
};

// Reviews structured data
export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Service",
    "name": "BuiltByJack Web Design Services",
    "image": "https://builtbyjack.com/images/service-preview.jpg"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "John Smith"
  },
  "reviewBody": "BuiltByJack created an amazing website for my Brisbane business at an affordable price. The site looks professional, loads quickly, and has already brought in new customers. Highly recommended!"
};

// Aggregate rating schema
export const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "BuiltByJack Web Design Services",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "87"
  }
}; 