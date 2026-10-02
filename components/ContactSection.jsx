"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send, Mail, CheckCircle, MessageSquare, ShieldAlert } from "lucide-react";
import { COMPANY_DATA } from "../data/companyData";
import { SERVICES_DATA } from "../data/services";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    telegram: "",
    service: SERVICES_DATA[0].title,
    budget: "₹15k–₹50k",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const budgets = ["₹15k–₹50k", "₹50k–₹1L", "₹1L–₹3L", "₹3L+", "Not sure yet"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const openTelegram = () => {
    const text = encodeURIComponent(
      `Hi Leksuss Network,\n\nName: ${form.name || "-"}\nEmail: ${form.email || "-"}\nTelegram: ${
        form.telegram || "-"
      }\nService: ${form.service}\nBudget: ${form.budget}\n\nMessage:\n${form.message || "-"}`
    );

    window.open(`${COMPANY_DATA.telegramUrl}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const handleMailSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Inquiry — ${form.service}`);
    const body = encodeURIComponent(
      `Hi Leksuss Network Team,\n\nName: ${form.name}\nEmail: ${form.email}\nTelegram: ${form.telegram}\nService: ${form.service}\nBudget: ${form.budget}\n\nMessage:\n${form.message}\n`
    );

    window.location.href = `mailto:${COMPANY_DATA.email}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#05070c] overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>GET IN TOUCH</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Let’s Build Something{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Unstoppable.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-base sm:text-lg text-slate-300"
          >
            Tell us your offer goals, target GEOs, traffic sources, and timeline. We respond with a clear performance scaling blueprint.
          </motion.p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Panel: Telegram & Proof */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 p-8 rounded-3xl bg-[#0b0f19] border border-white/10 flex flex-col justify-between shadow-2xl relative overflow-hidden group"
          >
            <div>
              <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 border border-white/10 bg-slate-900">
                <Image
                  src="/contact/contact.png"
                  alt="Contact Leksuss Network"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/40 to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-[10px] font-bold text-cyan-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>FAST RESPONSE TELEGRAM</span>
                </div>
              </div>

              <h3 className="font-heading text-2xl font-bold text-white mb-2">
                We Reply Within <span className="text-cyan-400">24 Hours</span>.
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Need immediate onboarding or quick offer review? Telegram provides direct access to our senior partner management team.
              </p>

              <button
                type="button"
                onClick={openTelegram}
                className="mt-6 w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/25 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Message on Telegram (@talialorenlekusss)</span>
              </button>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  Tracking & Attribution
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  Creative Testing
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                  Controlled Scaling
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Interactive Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#0b0f19] border border-white/10 shadow-2xl"
          >
            <form onSubmit={handleMailSubmit} className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <h3 className="font-heading text-xl font-bold text-white">
                  Send a Detailed Inquiry
                </h3>
                <span className="text-xs text-slate-400">Or use Telegram for quick replies</span>
              </div>

              {isSubmitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>Your email app has been opened with your inquiry. We will get back to you shortly!</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-500 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-500 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Telegram Handle / Number
                  </label>
                  <input
                    type="text"
                    name="telegram"
                    value={form.telegram}
                    onChange={handleChange}
                    placeholder="@username or phone"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-500 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Target Service
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#0b0f19] border border-white/10 focus:border-cyan-500 focus:outline-none text-sm text-white transition-colors"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.slug} value={s.title}>
                        {s.shortTitle}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Monthly Budget / Revenue Goal
                </label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#0b0f19] border border-white/10 focus:border-cyan-500 focus:outline-none text-sm text-white transition-colors"
                >
                  {budgets.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Project Details / Offer Description *
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your offer, target GEOs, traffic channels, and current scale..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-cyan-500 focus:outline-none text-sm text-white placeholder-slate-500 transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-lg shadow-cyan-500/20"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email Inquiry</span>
                </button>

                <button
                  type="button"
                  onClick={openTelegram}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10"
                >
                  <Send className="w-4 h-4 text-cyan-400" />
                  <span>Telegram Instead</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldAlert className="w-3.5 h-3.5 text-slate-500" />
                <span>Strict privacy guaranteed. No spam. Fast 24-hour turnaround.</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
