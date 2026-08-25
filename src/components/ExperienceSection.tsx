import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const ExperienceSection: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-[#27272a] pb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 tracking-wider uppercase mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Professional Experience
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-md">
          Hands-on software development internships and enterprise web engineering roles.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l border-[#27272a] ml-3 sm:ml-6 space-y-10">
        {experience.map((item, index) => (
          <motion.div
            key={`${item.company}-${index}`}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative pl-6 sm:pl-8 group"
          >
            {/* Timeline Node Point */}
            <div
              className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                index === 0
                  ? 'bg-sky-400 border-[#0a0a0a] ring-4 ring-sky-500/20'
                  : 'bg-[#18181b] border-[#3f3f46] group-hover:border-sky-400'
              }`}
            />

            {/* Experience Card */}
            <div className="p-6 rounded-2xl bg-[#111113] border border-[#27272a] hover:border-[#3f3f46] transition-all">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      {item.role}
                    </h3>
                    {index === 0 && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="text-sm font-medium text-sky-400 mt-0.5">
                    {item.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2 mb-5">
                {item.highlights.map((ach, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack chips */}
              <div className="pt-3 border-t border-[#27272a]/60 flex flex-wrap gap-1.5">
                {item.skills.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-[#161619] text-zinc-300 border border-[#27272a]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
