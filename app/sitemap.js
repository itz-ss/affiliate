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
  }));

  const serviceRoutes = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
  }));

  return [...routes, ...serviceRoutes];
}
