import { COMPANY_DATA } from "../data/companyData";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "@id": `${COMPANY_DATA.url}/#organization`,
    name: COMPANY_DATA.name,
    legalName: COMPANY_DATA.legalName,
    url: COMPANY_DATA.url,
    logo: `${COMPANY_DATA.url}/assets/logo.png`,
    description: COMPANY_DATA.description,
    foundingDate: COMPANY_DATA.founded,
    areaServed: COMPANY_DATA.areaServed,
    sameAs: [
      COMPANY_DATA.telegramUrl,
      "https://www.linkedin.com",
      "https://www.instagram.com",
      "https://www.youtube.com",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: COMPANY_DATA.email,
      url: COMPANY_DATA.telegramUrl,
      availableLanguage: ["English"],
    },
    knowsAbout: [
      "Affiliate Marketing",
      "Performance Marketing",
      "Paid Traffic Strategy",
      "Conversion Rate Optimization",
      "Server-to-Server Tracking",
      "Cookieless Attribution",
      "iGaming Affiliate Programs",
      "Dating Affiliate Programs",
      "Financial Lead Generation",
      "Nutra Affiliate Offers",
    ],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${COMPANY_DATA.url}/#website`,
    url: COMPANY_DATA.url,
    name: COMPANY_DATA.name,
    description: COMPANY_DATA.description,
    publisher: {
      "@id": `${COMPANY_DATA.url}/#organization`,
    },
    inLanguage: "en-US",
  };
}

export function getServiceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${COMPANY_DATA.url}/services/${service.slug}#service`,
    name: service.title,
    serviceType: service.shortTitle,
    description: service.summary,
    provider: {
      "@id": `${COMPANY_DATA.url}/#organization`,
    },
    areaServed: COMPANY_DATA.areaServed,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.points.map((pt, i) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: pt,
        },
        position: i + 1,
      })),
    },
  };
}

export function getFaqSchema(faqs = []) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getHowToSchema(steps = []) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Leksuss Network Growth Engine Process",
    description:
      "A 3-step systematic workflow for scaling performance marketing campaigns, affiliate programs, and paid traffic.",
    step: steps.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: s.title,
      text: s.desc,
      image: `${COMPANY_DATA.url}${s.bg}`,
    })),
  };
}

export function getBreadcrumbSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${COMPANY_DATA.url}${item.url}`,
    })),
  };
}
