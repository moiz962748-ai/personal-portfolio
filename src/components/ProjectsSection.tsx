import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, ArrowUpRight, ExternalLink, Info, Code } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Extract unique categories dynamically
  const uniqueCategories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 border-b border-[#27272a] pb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 tracking-wider uppercase mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Projects & Case Studies
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-md">
          A showcase of full-stack platforms, multi-tenant portals, and tailored client solutions.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {uniqueCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
              activeCategory === cat
                ? 'bg-white text-black font-semibold shadow-md shadow-white/10'
                : 'bg-[#111113] hover:bg-[#18181b] text-zinc-400 hover:text-zinc-200 border border-[#27272a]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative rounded-2xl bg-[#111113] border border-[#27272a] hover:border-[#3f3f46] p-6 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Bar */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#18181b] border border-[#27272a] text-sky-400">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-sky-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-zinc-400 leading-relaxed mb-5">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack & Details */}
              <div className="pt-4 border-t border-[#27272a]/70">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#18181b] text-zinc-300 border border-[#27272a]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-2.5 py-1 text-xs font-medium text-zinc-300 hover:text-white bg-[#18181b] hover:bg-[#27272a] border border-[#27272a] rounded-lg transition-colors flex items-center gap-1"
                  >
                    <Info className="w-3 h-3 text-sky-400" />
                    <span>Details</span>
                  </button>

                  {project.demoUrl && project.demoUrl !== '#' && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-medium text-sky-400 hover:text-sky-300 flex items-center gap-1"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
