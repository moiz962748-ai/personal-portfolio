import React from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, ShieldCheck, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const CertificationsSection: React.FC = () => {
  const { certifications, education } = portfolioData;

  return (
    <section id="credentials" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 border-b border-[#27272a] pb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 tracking-wider uppercase mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Education & Certifications
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-400 max-w-sm">
          Academic foundations in Computer Science and verified technical certifications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="p-6 rounded-2xl bg-[#111113] border border-[#27272a] hover:border-sky-500/40 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-[#18181b] border border-[#27272a] text-sky-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-zinc-400">{education.period}</span>
            </div>

            <div className="text-xs font-mono text-sky-400 uppercase tracking-wide mb-1">
              Degree Program
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {education.degree}
            </h3>
            <div className="text-sm font-medium text-zinc-300 mb-4">
              {education.institution}
            </div>
          </div>

          <div className="pt-4 border-t border-[#27272a]/60 flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-400">Academic Standing</span>
            <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/30">
              CGPA: {education.cgpa}
            </span>
          </div>
        </motion.div>

        {/* Certifications List Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="p-5 rounded-2xl bg-[#111113] border border-[#27272a] hover:border-[#3f3f46] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-lg bg-[#18181b] border border-[#27272a] text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase font-semibold">
                    Certified
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white mb-2 leading-snug">
                  {cert.title}
                </h3>
              </div>

              <div className="pt-3 border-t border-[#27272a]/60 text-[11px] text-zinc-400 font-mono">
                {cert.issuer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
