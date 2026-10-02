import { SERVICES_DATA } from "../data/services";
import { COMPANY_DATA } from "../data/companyData";

export default function sitemap() {
  const baseUrl = COMPANY_DATA.url;

  const routes = [
    "",
    "/services",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...routes, ...serviceRoutes];
}
