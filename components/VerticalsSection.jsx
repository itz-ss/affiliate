"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Flame } from "lucide-react";
import { COMPANY_DATA } from "../data/companyData";

export default function VerticalsSection() {
  const verticals = COMPANY_DATA.verticals;

  return (
    <section id="verticals" className="relative py-24 bg-[#07090e] overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Flame className="w-3.5 h-3.5 text-purple-400" />
            <span>TOP VERTICALS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            We Scale Offers That Print Revenue.{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Across High-Intent Sectors.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-base sm:text-lg text-slate-300"
          >
            Our network delivers top EPC performance across multiple lucrative verticals with pre-tested funnels, creatives, and real-time S2S attribution.
          </motion.p>
        </div>

        {/* Verticals List */}
        <div className="space-y-12">
          {verticals.map((vert, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.article
                key={vert.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 lg:gap-12 p-6 sm:p-8 rounded-3xl bg-[#0b0f19] border border-white/10 hover:border-purple-500/30 transition-all duration-300 shadow-2xl`}
              >
                {/* Media Image */}
                <div className="relative w-full lg:w-1/2 h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group">
                  <Image
                    src={vert.img}
                    alt={vert.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-xs font-bold text-cyan-300">
                    {vert.metrics}
                  </div>
                </div>

                {/* Info Text Card */}
                <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{vert.icon}</span>
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                        {vert.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                      {vert.description}
                    </p>
                  </div>

                  {/* Metadata Spec Table */}
                  <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/10">
                    <div>
                      <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Conversion Types
                      </span>
                      <span className="text-xs font-bold text-cyan-300 mt-1 block">
                        {vert.tags}
                      </span>
                    </div>

                    <div>
                      <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Daily Network Scale
                      </span>
                      <span className="text-xs font-bold text-emerald-400 mt-1 block">
                        {vert.metrics}
                      </span>
                    </div>
                  </div>

                  <div>
                    <Link
                      href={vert.link}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-white/5 hover:bg-purple-600/30 border border-white/10 hover:border-purple-500/40 transition-all group"
                    >
                      <span>Explore Vertical Strategy</span>
                      <ArrowUpRight className="w-4 h-4 text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
