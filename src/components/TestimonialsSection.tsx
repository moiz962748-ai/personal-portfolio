import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Quote, Star } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const TestimonialsSection: React.FC = () => {
  // If testimonials exist in data, render them; otherwise don't crash
  const testimonials = (portfolioData as any).testimonials;
  if (!testimonials || !Array.isArray(testimonials) || testimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-[#27272a] pb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 tracking-wider uppercase mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Colleague & Client Endorsements
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((test: any, idx: number) => (
          <motion.div
            key={test.id || idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-[#111113] border border-[#27272a] hover:border-[#3f3f46] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(test.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-4 h-4 text-zinc-400" />
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic mb-6">
                "{test.content}"
              </p>
            </div>

            <div className="pt-4 border-t border-[#27272a]/70 flex items-center gap-3">
              {test.avatarUrl && (
                <img
                  src={test.avatarUrl}
                  alt={test.author}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-[#27272a]"
                />
              )}
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-white truncate">
                  {test.author}
                </div>
                <div className="text-xs text-zinc-400 truncate">
                  {test.role} {test.company && <span>• <span className="text-sky-400">{test.company}</span></span>}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
