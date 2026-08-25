'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface ServicesProps {
  onSelectService?: (title: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const { services } = portfolioData;

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-zinc-800 pb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Offerings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Services<span className="text-sky-400">.</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-zinc-400 max-w-md font-normal">
          Partner with me to build scalable, modern web products.
        </p>
      </div>

      {/* 2x2 Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="group relative p-7 sm:p-8 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-600 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-sky-500/5"
          >
            {/* Top Bar: Numbered Badge */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono font-bold text-sky-400 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full">
                  {service.id}
                </span>

                {onSelectService && (
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono text-zinc-400 hover:text-white flex items-center gap-1"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Service Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-sky-300 transition-colors">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                {service.description}
              </p>
            </div>

            {/* Bottom Tech Tag Pills */}
            <div className="pt-5 border-t border-zinc-800/70 flex flex-wrap gap-2">
              {service.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-2.5 py-1 rounded-lg bg-zinc-900/90 text-zinc-300 border border-zinc-800 group-hover:border-zinc-700 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
