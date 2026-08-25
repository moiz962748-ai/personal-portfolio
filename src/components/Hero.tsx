'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

interface HeroProps {
  onOpenContact?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const { personal, marqueeTech } = portfolioData;

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-12 sm:pt-20 pb-16 overflow-hidden">
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-sky-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-5 w-[300px] h-[300px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* 1. Location & Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs sm:text-sm font-medium text-zinc-300 shadow-inner mb-6"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Rawalpindi / Islamabad • Open to Work</span>
          </motion.div>

          {/* 2. Main Headline (Clean & Compact) */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-3xl mx-auto"
          >
            Building scalable systems &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
              digital experiences.
            </span>
          </motion.h1>

          {/* 3. Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed font-normal"
          >
            Specializing in <span className="text-zinc-200 font-semibold">Next.js</span>,{' '}
            <span className="text-zinc-200 font-semibold">React</span>, and modern full-stack architectures.
            Building scalable enterprise portals, multi-tenant systems, and high-converting web applications.
          </motion.p>

          {/* 4. Dual CTAs + Social Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            {/* View Projects CTA */}
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-all duration-200 shadow-lg shadow-white/10 active:scale-[0.98]"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            {/* Download Resume CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                if (onOpenContact) {
                  e.preventDefault();
                  onOpenContact();
                }
              }}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 hover:border-zinc-700 font-medium text-sm transition-all duration-200 active:scale-[0.98]"
            >
              <FileText className="w-4 h-4 text-sky-400" />
              <span>Download Resume</span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-2 ml-1">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                title="GitHub Profile"
                className="p-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                title="LinkedIn Profile"
                className="p-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Quick Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-14 w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl"
          >
            {personal.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#111113]/90 border border-zinc-800/80 hover:border-zinc-700 transition-colors text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-zinc-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 5. Seamless Infinite Auto-Scrolling Tech Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-20 relative w-full border-y border-zinc-800 bg-[#0d0d0f] py-4 overflow-hidden"
      >
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-left flex items-center gap-6 whitespace-nowrap cursor-default select-none">
          {[...marqueeTech, ...marqueeTech, ...marqueeTech, ...marqueeTech].map((tech, index) => (
            <div key={index} className="flex items-center gap-6 shrink-0">
              <span className="text-xs sm:text-sm font-mono font-medium text-zinc-300 hover:text-white transition-colors">
                {tech}
              </span>
              <span className="text-sky-400/80 text-xs select-none">✦</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};