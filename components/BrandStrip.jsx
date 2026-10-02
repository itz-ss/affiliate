"use client";

import React from "react";
import { COMPANY_DATA } from "../data/companyData";

export default function BrandStrip() {
  const items = COMPANY_DATA.highlights;
  // Duplicate for infinite marquee effect
  const marqueeList = [...items, ...items, ...items];

  return (
    <section className="relative py-6 bg-[#080c16] border-y border-white/10 overflow-hidden" aria-label="Highlights Marquee">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#080c16] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#080c16] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee space-x-6">
        {marqueeList.map((item, idx) => (
          <div
            key={`${item.label}-${idx}`}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-cyan-500/30 transition-colors"
          >
            <span className="text-lg" aria-hidden="true">
              {item.icon}
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white tracking-wide">
                {item.label}
              </span>
              <span className="text-[11px] text-slate-400 font-normal">
                {item.sub}
              </span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 ml-2" aria-hidden="true" />
          </div>
        ))}
      </div>
    </section>
  );
}
