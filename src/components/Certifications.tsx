'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Certifications: React.FC = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 border-b border-zinc-800 pb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 tracking-wider uppercase mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Certifications<span className="text-sky-400">.</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-zinc-400 max-w-md font-normal">
          Accredited training programs and government-backed certifications.
        </p>
      </div>

      {/* Clean 3-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative p-6 sm:p-7 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-sky-500/5"
          >
            <div>
              {/* Badge Icon & Verified Tag */}
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400 group-hover:border-emerald-500/30 transition-colors">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified</span>
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                {cert.title}
              </h3>
            </div>

            {/* Issuer */}
            <div className="pt-4 border-t border-zinc-800/70 mt-4">
              <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-1">
                Issued By
              </div>
              <div className="text-xs sm:text-sm font-medium text-zinc-400 leading-snug">
                {cert.issuer}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
