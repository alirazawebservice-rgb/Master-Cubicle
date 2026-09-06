import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section className="relative min-h-[68vh] lg:min-h-[72vh] flex items-center bg-[#090b0e] overflow-hidden">
      {/* Background Cinematic Architectural Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2400&q=85"
          alt="Master Cubicle Architectural Commercial Washroom Installation"
          className="w-full h-full object-cover object-center scale-[1.02] filter brightness-[0.42] contrast-[1.08]"
          loading="eager"
        />
        {/* Architectural gradient overlays for clear legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090b0e] via-[#090b0e]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e] via-transparent to-black/30"></div>
      </div>

      {/* Content Container - Compact & Balanced */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-14 sm:py-18 lg:py-20 relative z-10 w-full">
        <div className="max-w-2xl space-y-5 sm:space-y-6">
          {/* Subtle architectural eyebrow */}
          <div className="flex items-center space-x-3">
            <span className="w-6 h-px bg-[#c5a880]"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
              Architectural Restroom Systems
            </span>
          </div>

          {/* Punchy Headline (Balanced scale that fits comfortably on screen) */}
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.1] font-['Manrope']">
            Commercial Washroom & Cubicle Solutions{' '}
            <span className="font-light italic text-[#ded9ce] block sm:inline">
              for Architecture.
            </span>
          </h1>

          {/* Crisp, Single-Sentence Supporting Text */}
          <p className="text-sm sm:text-base lg:text-lg text-[#c3c8d4] font-light leading-relaxed max-w-xl">
            100% waterproof solid phenolic compact laminates and AISI 304 stainless steel hardware engineered for high-traffic environments.
          </p>

          {/* Minimal 2-Button Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              onClick={onOpenQuoteModal}
              className="px-8 py-3.5 bg-[#c5a880] hover:bg-[#d8c19f] text-[#0d0f14] font-bold text-xs uppercase tracking-[0.15em] rounded-none transition-all duration-200 flex items-center justify-center space-x-2 shadow-xl group"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#products"
              className="px-7 py-3.5 bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/20 hover:border-white/40 text-xs font-medium uppercase tracking-[0.15em] rounded-none transition-all duration-200 flex items-center justify-center backdrop-blur-sm"
            >
              Explore Products
            </a>
          </div>
        </div>

        {/* Bottom Bar: Compact Metadata + Direct Peek Prompt to Next Section */}
        <div className="mt-10 sm:mt-12 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-400 gap-3">
          <div className="flex items-center space-x-3 text-[11px] sm:text-xs">
            <span className="text-[#c5a880] font-mono font-semibold">100% MOISTURE PROOF</span>
            <span className="text-white/20">|</span>
            <span className="text-gray-300 font-light">Grade 304 Hardware • Turnkey Dry Installation</span>
          </div>

          <a
            href="#intro"
            className="inline-flex items-center space-x-1.5 text-xs text-gray-300 hover:text-white transition-colors group"
          >
            <span className="text-[11px] uppercase tracking-wider font-mono text-[#c5a880]">See company profile below</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#c5a880] transition-transform group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
