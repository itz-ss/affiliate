"use client";

import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-16 bg-[#05070c] px-4">
      <div className="max-w-md w-full text-center p-8 rounded-3xl bg-[#0b0f19] border border-white/10 shadow-2xl space-y-6">
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
          <AlertCircle className="w-6 h-6" />
        </div>

        <div>
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest block mb-2">
            404 — PAGE NOT FOUND
          </span>
          <h1 className="font-heading text-2xl font-bold text-white">
            Looking for a Growth System?
          </h1>
          <p className="mt-2 text-xs text-slate-300 leading-relaxed">
            The page or service route you opened could not be located.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-lg shadow-cyan-500/20"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
