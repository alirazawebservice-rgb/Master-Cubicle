import React, { useState } from 'react';
import { CLIENTS } from '../data/websiteData';

export const ClientsSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate items for seamless, infinite single-line auto-sliding
  const loopedClients = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section className="py-20 sm:py-24 bg-[#edebe4] text-[#1a1e24] border-t border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mb-10">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#a88a60] font-semibold block mb-1.5">
            Commercial Trust
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#11141a] tracking-tight font-['Manrope']">
            Specified by India's Premier Developers & Architects
          </h2>
        </div>
      </div>

      {/* Single-Line Continuous Auto-Sliding Slider */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left & Right Smooth Edge Fade Vignettes */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#edebe4] via-[#edebe4]/90 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#edebe4] via-[#edebe4]/90 to-transparent z-10 pointer-events-none"></div>

        {/* Sliding Track - Strictly One Line */}
        <div
          className={`animate-auto-slide flex items-center space-x-10 sm:space-x-14 whitespace-nowrap cursor-grab active:cursor-grabbing ${
            isPaused ? 'paused' : ''
          }`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {loopedClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="inline-flex items-center space-x-8 sm:space-x-12 shrink-0 group select-none"
            >
              <div className="flex flex-col items-start transition-transform duration-200 group-hover:scale-105">
                <span className="text-base sm:text-xl font-bold tracking-tight text-[#222730] group-hover:text-black font-['Manrope'] transition-colors">
                  {client.name}
                </span>
                <span className="text-[10px] uppercase tracking-widest font-mono text-[#a88a60] mt-0.5">
                  {client.sector}
                </span>
              </div>

              {/* Elegant architectural spacer separator */}
              <span className="w-1.5 h-1.5 rounded-full bg-black/15 group-hover:bg-[#a88a60] transition-colors shrink-0"></span>
            </div>
          ))}
        </div>
      </div>

      {/* Quiet Footnote */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 mt-10 text-center">
        <p className="text-xs text-gray-500 font-light">
          500+ turnkey commercial washroom installations delivered across Mumbai, Pune, Bangalore, Delhi NCR, and Hyderabad.
        </p>
      </div>
    </section>
  );
};
