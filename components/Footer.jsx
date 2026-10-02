"use client";

import React from "react";
import Link from "next/link";
import { Send, ArrowRight, Shield } from "lucide-react";
import { COMPANY_DATA } from "../data/companyData";
import { SERVICES_DATA } from "../data/services";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const openTelegram = () => {
    window.open(COMPANY_DATA.telegramUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="relative bg-[#05070c] border-t border-white/10 pt-16 pb-12 overflow-hidden text-slate-400">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top CTA Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0b0f19] via-cyan-950/30 to-[#0b0f19] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 shadow-2xl">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
              READY TO SCALE YOUR PERFORMANCE?
            </span>
            <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-white">
              Let’s build your growth engine —{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                strategy → execution → scale.
              </span>
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              Fast partner responses on Telegram. Serious performance systems built for high-intent advertisers and affiliates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <button
              type="button"
              onClick={openTelegram}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-xl shadow-cyan-500/20"
            >
              <Send className="w-4 h-4" />
              <span>Telegram Now</span>
            </button>

            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10"
            >
              <span>Contact Form</span>
            </a>
          </div>
        </div>

        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600">
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
              </div>
              <span className="font-heading text-xl font-bold tracking-wider text-white">
                LEKSUSS
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Performance marketing systems that scale brands through high-converting affiliate programs, paid traffic, conversion optimization, and cookieless S2S attribution.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-slate-300">
                Affiliate Programs
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-slate-300">
                Paid Traffic
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-slate-300">
                S2S Tracking
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <a href="#proof" className="hover:text-cyan-400 transition-colors">
                  Proof & Data
                </a>
              </li>
              <li>
                <a href="#how" className="hover:text-cyan-400 transition-colors">
                  How We Work
                </a>
              </li>
              <li>
                <a href="#geo-aeo" className="hover:text-cyan-400 transition-colors">
                  Knowledge Hub
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Growth Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Growth Services
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES_DATA.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>{s.shortTitle}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider">
              Contact Channel
            </h4>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 text-xs">
              <div>
                <span className="block text-slate-500 font-medium">Instant Support:</span>
                <button
                  type="button"
                  onClick={openTelegram}
                  className="mt-1 font-bold text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>@talialorenlekusss</span>
                </button>
              </div>

              <div>
                <span className="block text-slate-500 font-medium">Response SLA:</span>
                <span className="text-white font-semibold">Under 24 Hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {COMPANY_DATA.legalName}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-500">•</span>
            <Link href="/terms" className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </Link>
            <span className="text-slate-500">•</span>
            <a href="/sitemap.xml" className="hover:text-cyan-400 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
