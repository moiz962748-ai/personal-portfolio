import React from 'react';
import { portfolioData } from '../data/portfolio';

export const TechTicker: React.FC = () => {
  const { marqueeTech } = portfolioData;

  return (
    <div className="relative w-full border-y border-[#27272a] bg-[#0c0c0e] py-4 overflow-hidden">
      {/* Left/Right gradient fade for smooth cutoffs */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee-left flex items-center gap-6">
        {[...marqueeTech, ...marqueeTech, ...marqueeTech].map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#141416] border border-[#27272a] hover:border-[#3f3f46] transition-colors shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span className="text-xs font-mono font-medium text-zinc-200">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
