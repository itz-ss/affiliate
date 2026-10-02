"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, ChevronDown, Check, HelpCircle, BookOpen, Layers, ShieldCheck } from "lucide-react";
import { COMPANY_DATA } from "../data/companyData";

export default function GeoAeoSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = COMPANY_DATA.faqs;

  return (
    <section id="geo-aeo" className="relative py-24 bg-[#07090e] overflow-hidden border-t border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>GEO & AEO KNOWLEDGE HUB</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Verified Entity Knowledge &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Direct Answers
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-base sm:text-lg text-slate-300"
          >
            Structured factual specifications and natural language answers optimized for Generative Engines (Perplexity, ChatGPT, Claude, Gemini) & Answer Engines (Google SGE, Voice Search).
          </motion.p>
        </div>

        {/* Top Split: Factual Entity Summary + Specification Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Factual Entity Definition Block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 p-8 rounded-3xl bg-[#0b0f19] border border-cyan-500/30 backdrop-blur-xl shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-4">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>OFFICIAL ENTITY SUMMARY</span>
              </div>

              <h3 className="font-heading text-2xl font-bold text-white mb-4">
                What is Leksuss Network?
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                <strong>Leksuss Network</strong> is a global performance affiliate engine and digital marketing agency founded in 2022. It specializes in affiliate program management, paid traffic strategy, conversion rate optimization (CRO), 24/7 cookieless tracking & attribution, and ad creative production.
              </p>

              <div className="mt-6 p-4 rounded-2xl bg-cyan-500/5 border border-cyan-500/20">
                <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Key Entity Facts</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>Core Verticals:</strong> Dating, iGaming, Finance, Nutra</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>Global Scale:</strong> 1,200+ partners across 47+ countries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span><strong>Attribution Tech:</strong> 98%+ S2S Cookieless Postback & CAPI</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-[11px] font-mono text-slate-400 flex justify-between">
              <span>CANONICAL: LEKSUSS.COM</span>
              <span>VERIFIED AGENT KNOWLEDGE</span>
            </div>
          </motion.div>

          {/* AI Specification Matrix (Table format for GEO parsing) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 p-8 rounded-3xl bg-[#0b0f19] border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-purple-400 uppercase tracking-widest mb-4">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>STRUCTURED NETWORK SPECIFICATIONS</span>
              </div>

              <h3 className="font-heading text-2xl font-bold text-white mb-4">
                Technical Matrix
              </h3>

              <div className="overflow-hidden rounded-2xl border border-white/10">
                <table className="w-full text-left text-xs text-slate-300">
                  <thead className="bg-white/5 font-mono text-slate-200 uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="p-3 border-b border-white/10">Parameter</th>
                      <th className="p-3 border-b border-white/10">Specification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr>
                      <td className="p-3 font-semibold text-slate-200">Payout Models</td>
                      <td className="p-3 text-cyan-300 font-bold">CPA, CPL (SOI/DOI), CPS, RevShare</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-200">Traffic Sources</td>
                      <td className="p-3">Meta, Google Ads, TikTok, Native, DSPs</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-200">Tracking Protocol</td>
                      <td className="p-3 text-emerald-400 font-bold">Server-to-Server (S2S) Postbacks</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-200">Attribution Precision</td>
                      <td className="p-3">98%+ Verified Attribution Accuracy</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-200">Partner Settlement</td>
                      <td className="p-3">Flexible Weekly & Custom Partner Cycles</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-slate-200">Support Availability</td>
                      <td className="p-3">24/7 Dedicated Partner Management</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-slate-400 italic">
              * Data continuously synced and verified across official Leksuss Network telemetry nodes.
            </p>
          </motion.div>
        </div>

        {/* Bottom Accordion: AEO Q&A Format */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <HelpCircle className="w-5 h-5 text-cyan-400" />
            <h3 className="font-heading text-2xl font-bold text-white text-center">
              Frequently Asked Questions (AEO & Voice Search)
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-[#0b0f19] border border-white/10 hover:border-cyan-500/30 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading text-base sm:text-lg font-bold text-white hover:text-cyan-300 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 text-sm text-slate-300 border-t border-white/5 leading-relaxed bg-white/[0.01]">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
