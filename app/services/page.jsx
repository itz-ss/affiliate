import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { SERVICES_DATA } from "../../data/services";
import { COMPANY_DATA } from "../../data/companyData";
import { getBreadcrumbSchema } from "../../lib/schema";

export const metadata = {
  title: "Performance Growth Services | Leksuss Network",
  description:
    "Explore Leksuss Network's core growth services: Affiliate Marketing Management, Paid Traffic Strategy, Conversion Optimization (CRO), S2S Tracking & Attribution, and High-Converting Ad Content Creation.",
  alternates: {
    canonical: `${COMPANY_DATA.url}/services`,
  },
};

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ]);

  return (
    <div className="pt-28 pb-24 bg-[#05070c] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-cyan-400 font-semibold">Services</span>
        </nav>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>ENTERPRISE PERFORMANCE SERVICES</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Comprehensive Growth Systems for{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Scalable Performance
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            From partner onboarding and multi-network media buying to cookieless S2S attribution and conversion funnel optimization, we deliver compounding revenue engines.
          </p>
        </div>

        {/* Services Showcase */}
        <div className="space-y-16">
          {SERVICES_DATA.map((svc, idx) => (
            <article
              key={svc.slug}
              id={svc.slug}
              className="p-8 sm:p-12 rounded-3xl bg-[#0b0f19] border border-white/10 hover:border-cyan-500/30 transition-all duration-300 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Image Media */}
              <div className="lg:col-span-5 relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
                <Image
                  src={svc.image}
                  alt={svc.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-70" />
                <div className="absolute top-4 left-4 p-3 rounded-xl bg-black/70 backdrop-blur-md text-2xl">
                  {svc.icon}
                </div>
              </div>

              {/* Service Info Content */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 tracking-widest uppercase block mb-2">
                    GROWTH SYSTEM 0{idx + 1}
                  </span>

                  <h2 className="font-heading text-2xl sm:text-4xl font-bold text-white leading-tight">
                    {svc.title}
                  </h2>

                  <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                    {svc.summary}
                  </p>
                </div>

                {/* Key Deliverables */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {svc.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Direct Action */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-lg shadow-cyan-500/20"
                  >
                    <span>View Full Service Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <a
                    href="#contact"
                    className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                  >
                    Book Consultation →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
