'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Layers, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Projects: React.FC = () => {
  const { projects, personal } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Compute unique categories
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 border-b border-zinc-800 pb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 tracking-wider uppercase mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Selected Work<span className="text-sky-400">.</span>
          </h2>
        </div>

        <a
          href={personal.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium font-mono text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 transition-all self-start sm:self-auto"
        >
          <FolderGit2 className="w-4 h-4 text-sky-400" />
          <span>View GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-xl text-xs font-medium transition-all ${
              activeCategory === cat
                ? 'bg-white text-black font-semibold shadow-md shadow-white/10'
                : 'bg-zinc-900/60 hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Interactive Project Cards Grid with Scroll-in Animations */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 28, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group relative rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-600 p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:shadow-sky-500/5"
            >
              <div>
                {/* Header: Category Badge + Featured Indicator */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-zinc-900 text-sky-400 border border-zinc-800">
                    {project.category}
                  </span>

                  {project.featured && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Featured
                    </span>
                  )}
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-sky-300 transition-colors">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Pills & Action Links */}
              <div className="pt-4 border-t border-zinc-800/70">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800 group-hover:border-zinc-700 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links for Live Demo and GitHub */}
                <div className="flex items-center justify-between pt-2">
                  {project.demoUrl && project.demoUrl !== '#' ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-zinc-400">Enterprise Solution</span>
                  )}

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Source</span>
                    </a>
                  ) : (
                    <a
                      href={personal.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
