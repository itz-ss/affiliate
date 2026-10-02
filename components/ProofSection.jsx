"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { motion, useInView, animate } from "framer-motion";
import { ShieldCheck, BarChart3, Globe, Clock, ArrowRight } from "lucide-react";
import { COMPANY_DATA } from "../data/companyData";

function CounterStat({ value, suffix, label, sub }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 1.6,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="relative p-6 sm:p-8 rounded-3xl bg-[#0b0f19]/90 border border-white/10 hover:border-cyan-500/30 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight flex items-baseline gap-1">
        <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
          {displayValue.toLocaleString()}
        </span>
        <span className="text-cyan-400 text-2xl sm:text-4xl">{suffix}</span>
      </div>

      <div className="mt-2 font-bold text-sm sm:text-base text-white">
        {label}
      </div>

      <p className="mt-1 text-xs text-slate-400 leading-relaxed">
        {sub}
      </p>

      {/* Decorative corner glow */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/5 rounded-bl-full pointer-events-none" />
    </div>
  );
}

export default function ProofSection() {
  const stats = COMPANY_DATA.stats;

  return (
    <section id="proof" className="relative py-24 bg-[#05070c] overflow-hidden">
      {/* Glow shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>PROOF OF PERFORMANCE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Built for scale.{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Validated by data.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-base sm:text-lg text-slate-300"
          >
            We optimize what works, track cookieless conversions precisely, and systematically scale profitable media spend.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <CounterStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              sub={stat.sub}
            />
          ))}
        </div>

        {/* Growth Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-[#0b0f19] to-purple-950/40 border border-cyan-500/20 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="max-w-xl text-center md:text-left">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
              Want results like this for your brand or traffic?
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Let’s audit your offers, landing pages, and tracking setup — then map out a rapid performance expansion plan.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-lg shadow-cyan-500/20"
            >
              <span>Get Growth Plan</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link
              href="/services"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10"
            >
              <span>Explore Services</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
