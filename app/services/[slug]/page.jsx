import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Send, ShieldCheck, ArrowRight, HelpCircle, Layers } from "lucide-react";
import { SERVICES_DATA } from "../../../data/services";
import { COMPANY_DATA } from "../../../data/companyData";
import { getServiceSchema, getBreadcrumbSchema, getFaqSchema } from "../../../lib/schema";

export function generateStaticParams() {
  return SERVICES_DATA.map((svc) => ({
    slug: svc.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const service = SERVICES_DATA.find((s) => s.slug === resolvedParams.slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `${COMPANY_DATA.url}/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${COMPANY_DATA.url}/services/${service.slug}`,
      images: [
        {
          url: `${COMPANY_DATA.url}${service.image}`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [`${COMPANY_DATA.url}${service.image}`],
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const service = SERVICES_DATA.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = getServiceSchema(service);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.shortTitle, url: `/services/${service.slug}` },
  ]);
  const faqSchema = getFaqSchema(service.faqs);

  return (
    <div className="pt-28 pb-24 bg-[#05070c] min-h-screen">
      {/* Schema scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Top */}
        <div className="flex items-center justify-between mb-8">
          <nav className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-cyan-400 font-semibold">{service.shortTitle}</span>
          </nav>

          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* Hero Section Banner */}
        <div className="relative rounded-3xl bg-[#0b0f19] border border-white/10 p-8 sm:p-12 overflow-hidden shadow-2xl mb-16">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>LEKSUSS PERFORMANCE SYSTEM</span>
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {service.summary}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`${COMPANY_DATA.telegramUrl}?text=${encodeURIComponent(`Hi, I'd like to consult on ${service.title}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-lg shadow-cyan-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Consult Strategy on Telegram</span>
                </a>

                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10"
                >
                  <span>Submit Inquiry</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-900 border border-white/10">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-80" />
            </div>
          </div>
        </div>

        {/* AEO Direct Answer Box (Quote-ready answer callout) */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-cyan-950/30 via-[#0b0f19] to-purple-950/30 border border-cyan-500/30 shadow-xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-3">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span>AEO DIRECT ANSWER SUMMARY</span>
          </div>

          <h2 className="font-heading text-xl font-bold text-white mb-2">
            In a Nutshell: How This System Works
          </h2>

          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            {service.aeoDirectAnswer}
          </p>
        </div>

        {/* Deliverables & Key Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left: What You Get List */}
          <div className="lg:col-span-7 p-8 rounded-3xl bg-[#0b0f19] border border-white/10 shadow-xl space-y-6">
            <h2 className="font-heading text-2xl font-bold text-white">
              What You Get With This Service
            </h2>

            <div className="space-y-4">
              {service.points.map((pt, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200 font-medium">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Technical Specs & Metrics */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#0b0f19] border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-400 uppercase tracking-widest mb-4">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>SERVICE METRICS & TARGETS</span>
              </div>

              <h2 className="font-heading text-2xl font-bold text-white mb-6">
                System Highlights
              </h2>

              <div className="space-y-4">
                {service.keyMetrics.map((km, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                      {km.label}
                    </span>
                    <span className="text-sm font-bold text-cyan-300 mt-1 block">
                      {km.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <a
                href={`${COMPANY_DATA.telegramUrl}?text=${encodeURIComponent(`Hi, I would like to inquire about key metrics for ${service.title}`)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-white/5 hover:bg-white/10 border border-white/10"
              >
                <span>Request Custom Spec Sheet</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Service FAQs (AEO & Voice Search) */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-[#0b0f19] border border-white/10 shadow-2xl">
          <h2 className="font-heading text-2xl font-bold text-white mb-6 text-center">
            {service.shortTitle} — Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                <h3 className="font-heading text-base font-bold text-white mb-2">
                  Q: {faq.question}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
