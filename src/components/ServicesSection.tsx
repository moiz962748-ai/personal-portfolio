import React from 'react';
import { motion } from 'motion/react';
import { LayoutGrid, Globe, ShoppingCart, Cpu, ArrowRight, Sparkles, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const iconMap: Record<string, React.ReactNode> = {
  '01': <Code2 className="w-5 h-5 text-sky-400" />,
  '02': <LayoutGrid className="w-5 h-5 text-emerald-400" />,
  '03': <ShoppingCart className="w-5 h-5 text-amber-400" />,
  '04': <Cpu className="w-5 h-5 text-indigo-400" />,
};

interface ServicesSectionProps {
  onSelectService?: (title: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const { services } = portfolioData;

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-[#27272a] pb-6 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 tracking-wider uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Services & Expertise
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-md font-normal">
          From full-stack web applications and multi-tenant portals to high-converting e-commerce and API integrations.
        </p>
      </div>

      {/* Services Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative p-6 sm:p-7 rounded-2xl bg-[#111113] border border-[#27272a] hover:border-[#3f3f46] transition-all flex flex-col justify-between"
          >
            {/* Top Bar: Icon + Deliverables Badge */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="p-3 rounded-xl bg-[#18181b] border border-[#27272a] group-hover:border-zinc-700 transition-colors">
                  {iconMap[service.id] || <Globe className="w-5 h-5 text-sky-400" />}
                </div>
                <span className="text-[11px] font-mono text-zinc-400 bg-[#161619] px-2.5 py-1 rounded-md border border-[#27272a]">
                  Service #{service.id}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            {/* Bottom Tech Tags & Action */}
            <div className="pt-4 border-t border-[#27272a]/70 flex items-center justify-between gap-2">
              {/* Tech Chips */}
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#1c1c20] text-zinc-300 border border-[#2c2c32]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {onSelectService && (
                <button
                  onClick={() => onSelectService(service.title)}
                  className="text-xs font-medium text-sky-400 hover:text-sky-300 flex items-center gap-1 group/btn shrink-0"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
