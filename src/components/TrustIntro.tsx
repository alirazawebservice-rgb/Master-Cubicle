import React, { useState } from 'react';
import { COMPANY_INFO, TRUST_HIGHLIGHTS } from '../data/websiteData';
import { ArrowRight, ChevronDown, ChevronUp, Check, X } from 'lucide-react';

interface TrustIntroProps {
  onOpenQuoteModal: () => void;
}

export const TrustIntro: React.FC<TrustIntroProps> = ({ onOpenQuoteModal }) => {
  const [showFullProfile, setShowFullProfile] = useState(false);

  return (
    <section id="intro" className="py-24 sm:py-32 bg-[#f7f6f2] text-[#181c22] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Editorial 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left 45%: Large Architectural Editorial Heading */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#a88a60] font-semibold">
              <span className="w-8 h-px bg-[#a88a60]"></span>
              <span>Architectural Profile</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-[#11141a] leading-[1.12] font-['Manrope']">
              Welcome to <br />
              <span className="text-[#a88a60]">Master Cubicle</span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light">
              Manufacturing sustainable, precision-fitted washroom architecture across India's premier commercial and civic infrastructure.
            </p>
          </div>

          {/* Right 55%: ONE Strong Introductory Paragraph + Expandable Action */}
          <div className="lg:col-span-7 space-y-6 pt-2">
            <p className="text-lg sm:text-xl text-[#222730] font-light leading-relaxed">
              Master Cubicle is a prominent manufacturer and supplier of building materials and architectural interior products, specializing in commercial washroom partitions and modular cubicles. Our toilet partitions are fabricated using premium Compact Grade Solid Laminates, delivering complete moisture resistance, high impact strength, and hygienic performance.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button
                onClick={() => setShowFullProfile(!showFullProfile)}
                className="text-xs uppercase tracking-[0.15em] font-bold text-[#11141a] hover:text-[#a88a60] transition-colors inline-flex items-center space-x-2 border-b-2 border-[#11141a] pb-1 hover:border-[#a88a60]"
              >
                <span>{showFullProfile ? 'Hide Detailed Background' : 'Read Full Company Profile'}</span>
                {showFullProfile ? <ChevronUp className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>

              <button
                onClick={onOpenQuoteModal}
                className="text-xs uppercase tracking-[0.15em] font-medium text-gray-500 hover:text-black transition-colors"
              >
                Request Architectural Spec Sheet →
              </button>
            </div>

            {/* Expandable Extended Profile Content */}
            {showFullProfile && (
              <div className="pt-6 border-t border-black/10 text-sm text-gray-700 leading-relaxed space-y-4 font-light animate-in fade-in duration-300">
                <p>
                  Every Master Cubicle system is engineered with tailored hardware configurations manufactured from AISI 304 Stainless Steel, virgin Nylon Polyamide, or structural Anodised Aluminium to match specific architectural BOQ requirements.
                </p>
                <p>
                  From corporate high-rises and international transit terminals to shopping centers, schools, gyms, and sports complexes, Master Cubicle provides turnkey partitions that eliminate wet masonry on site, reduce ongoing housekeeping expenditure, and elevate the aesthetic standard of commercial spaces.
                </p>
                <div className="p-4 bg-white/70 border border-black/5 rounded-none text-xs text-gray-600 font-mono">
                  Factory & Works: Plot No. B93, Sai Kripa, CSM Chowk, Sector 12, Kharghar, Navi Mumbai 410210
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Large Architectural Photography Break (70% Visual Principle) */}
        <div className="mt-16 sm:mt-20 relative aspect-[16/8] sm:aspect-[21/9] overflow-hidden bg-[#e8e6df]">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
            alt="Master Cubicle Commercial Washroom Space and Interior Partitions"
            className="w-full h-full object-cover object-center filter contrast-[1.05]"
            loading="lazy"
          />
          <div className="absolute bottom-4 left-6 bg-[#11141a]/80 backdrop-blur-sm text-white px-4 py-2 text-[11px] font-mono uppercase tracking-wider">
            Commercial Restroom Architecture • Engineered Dry Construction
          </div>
        </div>

        {/* Understated Editorial Highlights (Not Heavy Cards!) */}
        <div className="mt-16 pt-12 border-t border-black/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_HIGHLIGHTS.map((item) => (
            <div key={item.number} className="space-y-2">
              <span className="text-xl font-mono font-bold text-[#a88a60] block">
                {item.number}
              </span>
              <h3 className="text-base font-bold text-[#11141a] font-['Manrope']">
                {item.title}
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
