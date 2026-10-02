"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, TrendingUp, Globe2, Activity } from "lucide-react";
import { COMPANY_DATA } from "../data/companyData";

export default function Hero() {
  const openTelegram = () => {
    window.open(COMPANY_DATA.telegramUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#05070c]">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/20 via-purple-600/20 to-blue-600/10 rounded-full blur-[140px] pointer-events-none animate-glow-slow" />
      <div className="absolute top-10 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-8 backdrop-blur-md shadow-lg shadow-cyan-500/10"
        >
          <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>LEKSUSS NETWORK • PERFORMANCE AFFILIATE ENGINE</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05] max-w-5xl mx-auto"
        >
          TURN TRAFFIC INTO{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
            UNSTOPPABLE INCOME
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed"
        >
          A premium performance marketing ecosystem built for affiliates, media buyers, and brands who demand explosive scale, cookieless attribution, and ROI dominance.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <button
            type="button"
            onClick={openTelegram}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>JOIN THE NETWORK</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <Link
            href="/services"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-200"
          >
            <span>Explore Programs</span>
          </Link>
        </motion.div>

        {/* GEO & AEO Quick Entity Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md flex flex-col items-center">
            <Globe2 className="w-5 h-5 text-cyan-400 mb-2" />
            <span className="text-xl font-bold text-white font-heading">47+ GEOs</span>
            <span className="text-xs text-slate-400 mt-0.5">Global Traffic Coverage</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md flex flex-col items-center">
            <TrendingUp className="w-5 h-5 text-emerald-400 mb-2" />
            <span className="text-xl font-bold text-white font-heading">1200+</span>
            <span className="text-xs text-slate-400 mt-0.5">Activated Partners</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md flex flex-col items-center">
            <Activity className="w-5 h-5 text-purple-400 mb-2" />
            <span className="text-xl font-bold text-white font-heading">98% Precision</span>
            <span className="text-xs text-slate-400 mt-0.5">S2S Attribution</span>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md flex flex-col items-center">
            <Shield className="w-5 h-5 text-gold mb-2 text-amber-400" />
            <span className="text-xl font-bold text-white font-heading">Bot-Shielded</span>
            <span className="text-xs text-slate-400 mt-0.5">Real-time Fraud Filter</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
