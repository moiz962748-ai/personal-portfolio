'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Copy, Check, ArrowUp, Github, Linkedin, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Footer: React.FC = () => {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Arsenal', href: '#arsenal' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#060608] border-t border-zinc-800/80 pt-20 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-sky-500/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Availability Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-zinc-950/80 border border-zinc-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-3.5">
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div>
              <div className="text-sm sm:text-base font-bold text-white tracking-tight">
                Available for full-time roles & freelance projects
              </div>
              <div className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                Specialized in Next.js, scalable React architectures, and high-converting web apps.
              </div>
            </div>
          </div>

          {/* Clickable Direct Email Box with Clipboard Copy */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="group flex items-center justify-between gap-3 px-4 py-2.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 transition-all w-full sm:w-auto">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-zinc-200 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{personal.email}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                className="p-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors ml-2"
                aria-label="Copy Email"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Middle Navigation & Socials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-y border-zinc-800/80 items-center">
          {/* Quick Info */}
          <div>
            <div className="flex items-center gap-1.5 text-lg font-bold text-white tracking-tight">
              <span>Abdul Moiz</span>
              <span className="text-sky-400">.</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-sm leading-relaxed">
              Front-end & Full-Stack Developer based in Rawalpindi / Islamabad. Crafting polished, scalable digital products.
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-start md:justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs sm:text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center justify-start md:justify-end gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-white transition-colors active:scale-95 ml-2"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
            </button>
          </div>
        </div>

        {/* Large Decorative Watermark Branding Header */}
        <div className="pt-16 pb-8 text-center select-none pointer-events-none overflow-hidden">
          <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-zinc-900/60 uppercase">
            ABDUL MOIZ
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-600 pt-6 border-t border-zinc-900 gap-3">
          <div>
            © {new Date().getFullYear()} Abdul Moiz. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-zinc-500">
            <span>Built with React, Next.js, Tailwind CSS & Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
