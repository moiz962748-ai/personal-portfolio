import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle, Cpu, Layers } from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-[#111113] border border-[#27272a] rounded-2xl p-6 sm:p-8 shadow-2xl z-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-[#18181b] border border-[#27272a] text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Info */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#18181b] border border-[#27272a] text-sky-400">
                {project.category}
              </span>
              {project.featured && (
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Featured Project
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {project.title}
            </h3>
          </div>

          {/* Project Summary */}
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
              Overview & Architecture
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
              Core Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-[#18181b] border border-[#27272a] text-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#27272a]">
            {project.demoUrl && project.demoUrl !== '#' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors shadow-lg"
              >
                <span>Launch Live System</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#18181b] hover:bg-[#27272a] text-zinc-200 border border-[#27272a] text-xs font-medium transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Repository</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="ml-auto px-4 py-2.5 text-xs text-zinc-400 hover:text-white"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
