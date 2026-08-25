'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Code2, Database, Layout, Palette, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Arsenal: React.FC = () => {
  const { personal, arsenal } = portfolioData;

  const categories = [
    {
      title: 'Frontend Ecosystem',
      icon: <Code2 className="w-4 h-4 text-sky-400" />,
      skills: arsenal.frontend,
      description: 'Modern component frameworks, styling engines, and reactive UI runtimes.',
    },
    {
      title: 'Backend & Databases',
      icon: <Database className="w-4 h-4 text-emerald-400" />,
      skills: arsenal.backendAndDb,
      description: 'Server APIs, authentication layers, relational schemas, and document stores.',
    },
    {
      title: 'CMS & Dev Tools',
      icon: <Layout className="w-4 h-4 text-amber-400" />,
      skills: arsenal.cmsAndTools,
      description: 'Headless / WordPress engines, testing suites, version control, and CI tools.',
    },
    {
      title: 'Design & Media',
      icon: <Palette className="w-4 h-4 text-indigo-400" />,
      skills: arsenal.designAndMedia,
      description: 'Creative visual suites, video assets, responsive UI systems, and QA testing.',
    },
  ];

  return (
    <section id="arsenal" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-zinc-800 pb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 tracking-wider uppercase mb-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>Tech Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Technical Stack<span className="text-sky-400">.</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-zinc-400 max-w-md font-normal">
          A comprehensive overview of languages, frameworks, databases, and tooling in my daily workflow.
        </p>
      </div>

      {/* 1. Top Stat Counter Bar (4 Metric Cards) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
      >
        {personal.stats.map((stat, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between shadow-lg"
          >
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
              {stat.value}
            </div>
            <div className="mt-3 text-xs sm:text-sm font-medium text-zinc-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
              <span>{stat.label}</span>
            </div>
          </div>
        ))}
      </motion.div>

      {/* 2. Categorized Skill Groups (4-Column / 2x2 Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="p-6 sm:p-7 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between shadow-lg"
          >
            <div>
              {/* Group Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {cat.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 mb-6 font-normal">
                {cat.description}
              </p>
            </div>

            {/* Interactive Skill Badges with Dark Aesthetic Borders */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/70">
              {cat.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="group/badge px-3 py-1.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-sky-500/50 transition-all duration-200 cursor-default flex items-center gap-2 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 group-hover/badge:bg-sky-400 transition-colors" />
                  <span className="text-xs font-mono font-medium text-zinc-300 group-hover/badge:text-white transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
