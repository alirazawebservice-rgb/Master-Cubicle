import React, { useState } from 'react';
import { ADVANTAGES } from '../data/websiteData';
import { ArrowRight } from 'lucide-react';

interface AdvantagesSectionProps {
  onOpenQuoteModal: () => void;
}

export const AdvantagesSection: React.FC<AdvantagesSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeAdvantageIndex, setActiveAdvantageIndex] = useState(0);

  const activeAdv = ADVANTAGES[activeAdvantageIndex];

  // Specific high-res architectural material & installation photography for each advantage
  const advantageVisuals: { [key: string]: string } = {
    'solvent-resistant': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80',
    'scratch-resistant': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    'quick-installation': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80',
    'impact-resistant': 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=1400&q=80',
    'environment-friendly': 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1400&q=80',
    'durable': 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1400&q=80',
    'cigarette-burn-resistant': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80'
  };

  return (
    <section id="advantages" className="py-24 sm:py-32 bg-[#0c0e13] text-white border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Editorial 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 Cols): Why Master Cubicle Statement */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
              <span className="w-8 h-px bg-[#c5a880]"></span>
              <span>Why Master Cubicle</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.08] font-['Manrope']">
              BUILT FOR <br />
              HIGH-TRAFFIC <br />
              COMMERCIAL <br />
              SPACES.
            </h2>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
              Our compact grade solid laminate panels and engineered hardware are subjected to extreme moisture, cleaning chemicals, dynamic door slams, and non-stop public usage.
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenQuoteModal}
                className="text-xs uppercase tracking-[0.15em] font-bold text-[#c5a880] hover:text-white transition-colors inline-flex items-center space-x-2 border-b border-[#c5a880] pb-1"
              >
                <span>Request Technical Data Sheet</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column (7 Cols): Interactive Vertical Index + Responsive Visual Stage */}
          <div className="lg:col-span-7 space-y-8">
            {/* 7 Advantages Vertical List */}
            <div className="divide-y divide-white/10 border-t border-b border-white/10">
              {ADVANTAGES.map((adv, index) => {
                const isActive = activeAdvantageIndex === index;
                return (
                  <div
                    key={adv.id}
                    onClick={() => setActiveAdvantageIndex(index)}
                    onMouseEnter={() => setActiveAdvantageIndex(index)}
                    className={`py-4 cursor-pointer transition-all duration-200 group ${
                      isActive ? 'bg-white/[0.04] px-4 -mx-4' : 'hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span className="font-mono text-xs text-[#c5a880]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className={`text-base sm:text-lg font-['Manrope'] transition-colors ${
                          isActive ? 'text-white font-bold' : 'text-gray-400 group-hover:text-white'
                        }`}>
                          {adv.title}
                        </h3>
                      </div>

                      {adv.metric && (
                        <span className="text-[11px] font-mono text-gray-400">
                          {adv.metric}
                        </span>
                      )}
                    </div>

                    {/* Expandable detail when active */}
                    {isActive && (
                      <p className="mt-2 text-xs sm:text-sm text-gray-400 leading-relaxed font-light pl-8 animate-in fade-in duration-200">
                        {adv.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Dynamic Photography Stage for the Selected Advantage */}
            <div className="relative aspect-[16/8] overflow-hidden bg-[#161a22]">
              <img
                src={advantageVisuals[activeAdv.id] || advantageVisuals['solvent-resistant']}
                alt={activeAdv.title}
                className="w-full h-full object-cover object-center filter contrast-[1.05] brightness-90 transition-all duration-500"
              />
              <div className="absolute bottom-3 left-4 bg-black/80 backdrop-blur-sm px-3 py-1.5 text-[11px] font-mono text-[#c5a880] uppercase tracking-wider">
                {activeAdv.title} • Tested Standard
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
