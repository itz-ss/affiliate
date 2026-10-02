import { COMPANY_DATA } from "../data/companyData";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${COMPANY_DATA.url}/sitemap.xml`,
  };
}
