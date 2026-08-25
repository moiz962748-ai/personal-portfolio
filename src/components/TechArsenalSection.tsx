import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Code, Database, Layout, Palette, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const TechArsenalSection: React.FC = () => {
  const { arsenal } = portfolioData;

  const categories = [
    { key: 'all', label: 'All Technologies', icon: <Terminal className="w-4 h-4" /> },
    { key: 'frontend', label: 'Frontend & UI', icon: <Code className="w-4 h-4" /> },
    { key: 'backendAndDb', label: 'Backend & Databases', icon: <Database className="w-4 h-4" /> },
    { key: 'cmsAndTools', label: 'CMS & Dev Tools', icon: <Layout className="w-4 h-4" /> },
    { key: 'designAndMedia', label: 'Design & Media', icon: <Palette className="w-4 h-4" /> },
  ];

  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getSkillsForCategory = () => {
    switch (activeCategory) {
      case 'frontend':
        return arsenal.frontend.map((name) => ({ name, category: 'Frontend & UI' }));
      case 'backendAndDb':
        return arsenal.backendAndDb.map((name) => ({ name, category: 'Backend & Database' }));
      case 'cmsAndTools':
        return arsenal.cmsAndTools.map((name) => ({ name, category: 'CMS & Tools' }));
      case 'designAndMedia':
        return arsenal.designAndMedia.map((name) => ({ name, category: 'Design & Media' }));
      default:
        return [
          ...arsenal.frontend.map((name) => ({ name, category: 'Frontend & UI' })),
          ...arsenal.backendAndDb.map((name) => ({ name, category: 'Backend & Database' })),
          ...arsenal.cmsAndTools.map((name) => ({ name, category: 'CMS & Tools' })),
          ...arsenal.designAndMedia.map((name) => ({ name, category: 'Design & Media' })),
        ];
    }
  };

  const skills = getSkillsForCategory();

  return (
    <section id="arsenal" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 border-b border-[#27272a] pb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 tracking-wider uppercase mb-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>Engineering Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technical Arsenal
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-md">
          A modern web stack spanning React, Next.js, backend APIs, relational & NoSQL databases, CMS, and design tools.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
              activeCategory === cat.key
                ? 'bg-white text-black font-semibold shadow-md shadow-white/10'
                : 'bg-[#111113] hover:bg-[#18181b] text-zinc-400 hover:text-zinc-200 border border-[#27272a]'
            }`}
          >
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Grid of Tech Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
        {skills.map((skill, idx) => (
          <motion.div
            key={`${skill.name}-${idx}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: idx * 0.02 }}
            className="p-4 rounded-xl bg-[#111113] border border-[#27272a] hover:border-sky-500/40 transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
              <div className="min-w-0">
                <div className="text-sm font-semibold text-white group-hover:text-sky-300 transition-colors truncate">
                  {skill.name}
                </div>
                <div className="text-[11px] text-zinc-400 font-mono mt-0.5 truncate">
                  {skill.category}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
