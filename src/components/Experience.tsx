'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Experience: React.FC = () => {
  const { experience, education, certifications } = portfolioData;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 border-b border-zinc-800 pb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 tracking-wider uppercase mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Experience<span className="text-sky-400">.</span>
          </h2>
        </div>
        <p className="text-sm sm:text-base text-zinc-400 max-w-md font-normal">
          My journey building software across internships and teams.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative border-l border-zinc-800 ml-3 sm:ml-6 space-y-12 mb-16">
        {experience.map((item, index) => (
          <motion.div
            key={`${item.company}-${index}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            className="relative pl-6 sm:pl-8 group"
          >
            {/* Timeline Node Indicator */}
            <div
              className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                index === 0
                  ? 'bg-sky-400 border-zinc-950 ring-4 ring-sky-500/20'
                  : 'bg-zinc-900 border-zinc-700 group-hover:border-sky-400'
              }`}
            />

            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 shadow-lg">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {item.role}
                    </h3>
                    {index === 0 && (
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="text-sm sm:text-base font-semibold text-sky-400 mt-1">
                    {item.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800 px-2.5 py-1 rounded-lg">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800 px-2.5 py-1 rounded-lg">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Highlights using subtle diamond/star bullets (✦) */}
              <div className="space-y-2.5 mb-6">
                {item.highlights.map((highlight, hIdx) => (
                  <div
                    key={hIdx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal"
                  >
                    <span className="text-sky-400 text-xs mt-0.5 select-none shrink-0">✦</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="pt-4 border-t border-zinc-800/70 flex flex-wrap gap-2">
                {item.skills.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-zinc-900 text-zinc-300 border border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education & Academic Standing Card at Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="p-6 sm:p-8 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 shadow-lg"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-sky-400 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-1">
                Education & Degree
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {education.degree}
              </h3>
              <p className="text-sm font-medium text-zinc-300">
                {education.institution}
              </p>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                Academic Session: {education.period}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-zinc-800">
            <div className="px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center">
              <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400/80">Academic CGPA</div>
              <div className="text-lg font-bold font-mono">{education.cgpa}</div>
            </div>

            {certifications && certifications.length > 0 && (
              <div className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 text-center">
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">Verified Certifications</div>
                <div className="text-sm font-bold font-mono text-sky-400">DigiSkills (SEO, WP)</div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
