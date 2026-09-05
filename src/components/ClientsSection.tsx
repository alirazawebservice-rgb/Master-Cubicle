import React from 'react';
import { CLIENTS } from '../data/websiteData';

export const ClientsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-28 bg-[#edebe4] text-[#1a1e24] border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Subtle Minimal Eyebrow */}
        <div className="text-center mb-16 space-y-2">
          <span className="text-xs uppercase tracking-[0.3em] text-[#a88a60] font-semibold block">
            Commercial Trust
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#11141a] tracking-tight font-['Manrope']">
            Specified by India's Premier Developers & Architects
          </h2>
        </div>

        {/* Minimal Monochrome Architectural Client Showcase (No heavy cards!) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-12 gap-x-8 items-center text-center">
          {CLIENTS.map((client) => (
            <div key={client.id} className="space-y-1 group">
              <span className="text-base sm:text-lg font-bold tracking-tight text-gray-500 group-hover:text-black font-['Manrope'] transition-colors block">
                {client.name}
              </span>
              <span className="text-[10px] uppercase tracking-widest font-mono text-gray-400 block">
                {client.sector}
              </span>
            </div>
          ))}
        </div>

        {/* Quiet Subtext */}
        <div className="mt-16 pt-8 border-t border-black/10 text-center text-xs text-gray-500 font-light">
          500+ commercial washroom installations delivered across Mumbai, Pune, Bangalore, Delhi NCR, and Hyderabad.
        </div>
      </div>
    </section>
  );
};
