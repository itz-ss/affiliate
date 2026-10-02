import Hero from "../components/Hero";
import BrandStrip from "../components/BrandStrip";
import ServicesSection from "../components/ServicesSection";
import ProofSection from "../components/ProofSection";
import VerticalsSection from "../components/VerticalsSection";
import HowWeWork from "../components/HowWeWork";
import GeoAeoSection from "../components/GeoAeoSection";
import ContactSection from "../components/ContactSection";
import { getFaqSchema, getHowToSchema } from "../lib/schema";
import { COMPANY_DATA } from "../data/companyData";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  const faqSchema = getFaqSchema(COMPANY_DATA.faqs);
  const howToSchema = getHowToSchema(COMPANY_DATA.workflow);

  return (
    <>
      {/* Schema.org Injection for AEO / GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <Hero />
      <BrandStrip />
      <ServicesSection />
      <ProofSection />
      <VerticalsSection />
      <HowWeWork />
      <GeoAeoSection />
      <ContactSection />
    </>
  );
}
