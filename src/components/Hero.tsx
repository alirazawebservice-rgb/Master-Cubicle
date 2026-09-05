import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center bg-[#090b0e] overflow-hidden">
      {/* Background Cinematic Architectural Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2400&q=85"
          alt="Master Cubicle Architectural Commercial Washroom Installation"
          className="w-full h-full object-cover object-center scale-[1.02] filter brightness-[0.45] contrast-[1.08]"
          loading="eager"
        />
        {/* Subtle architectural gradient overlays for high typography contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090b0e] via-[#090b0e]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e] via-transparent to-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-24 sm:py-32 relative z-10 w-full">
        <div className="max-w-3xl space-y-8">
          {/* Subtle architectural eyebrow */}
          <div className="flex items-center space-x-3">
            <span className="w-8 h-px bg-[#c5a880]"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-medium">
              Architectural Restroom Systems
            </span>
          </div>

          {/* Majestic Editorial Headline (64-82px on desktop) */}
          <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-extrabold tracking-tight text-white leading-[1.04] font-['Manrope']">
            Commercial Washroom & Cubicle Solutions{' '}
            <span className="font-light italic text-[#ded9ce] block sm:inline">
              Engineered for Architecture.
            </span>
          </h1>

          {/* Concise, Refined Supporting Paragraph */}
          <p className="text-base sm:text-xl text-[#b8bdc7] font-light leading-relaxed max-w-2xl">
            {COMPANY_INFO.subheadline} Fabricated from 100% waterproof Compact Grade Solid Laminate with precision AISI 304 Stainless Steel hardware for high-traffic environments.
          </p>

          {/* Minimal 2-Button Conversion Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
            <button
              onClick={onOpenQuoteModal}
              className="px-9 py-4 bg-[#c5a880] hover:bg-[#d8c19f] text-[#0d0f14] font-bold text-xs sm:text-sm uppercase tracking-[0.15em] rounded-none transition-all duration-200 flex items-center justify-center space-x-2 shadow-2xl group"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#products"
              className="px-8 py-4 bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/20 hover:border-white/40 text-xs sm:text-sm font-medium uppercase tracking-[0.15em] rounded-none transition-all duration-200 flex items-center justify-center backdrop-blur-sm"
            >
              Explore Products
            </a>
          </div>
        </div>

        {/* Bottom Architectural Caption & Scroll Anchor */}
        <div className="mt-20 sm:mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-400 gap-4">
          <div className="flex items-center space-x-4">
            <span className="text-[#c5a880] font-mono">01 / ARCHITECTURE</span>
            <span className="text-white/20">|</span>
            <span className="text-gray-300 font-light">
              Solid Phenolic Core • 100% Moisture Proof • Turnkey Dry Installation
            </span>
          </div>

          <a
            href="#intro"
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
          >
            <span className="text-[11px] uppercase tracking-widest font-mono">Scroll to explore</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#c5a880] transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
