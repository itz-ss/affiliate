import React from "react";
import Link from "next/link";
import { COMPANY_DATA } from "../../data/companyData";

export const metadata = {
  title: "Privacy Policy | Leksuss Network",
  description: "Privacy policy and data protection commitments of Leksuss Network.",
  alternates: {
    canonical: `${COMPANY_DATA.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-24 bg-[#05070c] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-8">
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-cyan-400 font-semibold">Privacy Policy</span>
        </nav>

        <div className="p-8 sm:p-12 rounded-3xl bg-[#0b0f19] border border-white/10 shadow-2xl space-y-8">
          <div>
            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-white">
              Privacy Policy
            </h1>
            <p className="mt-2 text-xs font-mono text-slate-400">
              LAST UPDATED: OCTOBER 2026 • LEKSUSS NETWORK
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-heading text-xl font-bold text-white">1. Overview</h2>
              <p>
                Leksuss Network (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting the personal data of our affiliates, media partners, advertisers, and web visitors. This Privacy Policy outlines how we collect, use, store, and safeguard information.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-heading text-xl font-bold text-white">2. Information We Collect</h2>
              <p>
                We collect information provided directly by you when submitting contact forms or communicating via Telegram, including your name, email address, instant messaging handles, monthly budget, and offer details. Additionally, we collect cookieless Server-to-Server (S2S) postback telemetry and IP logs to prevent affiliate fraud.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-heading text-xl font-bold text-white">3. How We Use Data</h2>
              <p>
                We use collected information to onboard partners, configure tracking postbacks, process payouts, evaluate offer performance, enforce anti-fraud validation, and respond to business inquiries.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-heading text-xl font-bold text-white">4. Data Security</h2>
              <p>
                We implement industry-standard encryption, strict access controls, and secure S2S API endpoints. We do not sell or trade your personal information to third parties.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-heading text-xl font-bold text-white">5. Contact Us</h2>
              <p>
                For privacy inquiries or data requests, please contact us at{" "}
                <a href={`mailto:${COMPANY_DATA.email}`} className="text-cyan-400 font-bold hover:underline">
                  {COMPANY_DATA.email}
                </a>{" "}
                or message us via Telegram.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
