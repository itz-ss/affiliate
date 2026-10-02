import React from "react";
import Link from "next/link";
import { COMPANY_DATA } from "../../data/companyData";

export const metadata = {
  title: "Terms of Service | Leksuss Network",
  description: "Terms of service and partner agreement guidelines for Leksuss Network.",
  alternates: {
    canonical: `${COMPANY_DATA.url}/terms`,
  },
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-24 bg-[#05070c] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-cyan-400 font-semibold">Terms of Service</span>
        </nav>

        <div className="p-8 sm:p-12 rounded-3xl bg-[#0b0f19] border border-white/10 shadow-2xl space-y-8">
          <div>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
              Terms of Service
            </h1>
            <p className="mt-2 text-xs font-mono text-slate-400">
              LAST UPDATED: OCTOBER 2026 • LEKSUSS NETWORK
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-heading text-xl font-bold text-white">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the services, website, or affiliate tracking portal of Leksuss Network, you agree to comply with and be bound by these Terms of Service.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-heading text-xl font-bold text-white">2. Partner Conduct & Compliance</h2>
              <p>
                Affiliates and media buyers must adhere strictly to compliance guidelines for each active campaign. Fraudulent traffic, automated bot clicks, misleading creative angles, unauthorized spam, or IP manipulation will result in immediate partner termination and payout forfeiture.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-heading text-xl font-bold text-white">3. Tracking & Payouts</h2>
              <p>
                Payouts are processed based on verified S2S postback records validated by our tracking system. Leksuss Network reserves the right to withhold payments pending advertiser audit for suspicious conversion activity.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-heading text-xl font-bold text-white">4. Intellectual Property</h2>
              <p>
                All brand logos, ad creative templates, custom software, and website content remain the exclusive property of Leksuss Network or its respective brand licensors.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
