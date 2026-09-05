import React from 'react';
import { APPLICATIONS } from '../data/websiteData';
import { ArrowRight } from 'lucide-react';

interface ApplicationsSectionProps {
  onRequestQuoteForSector: (sectorName: string) => void;
}

export const ApplicationsSection: React.FC<ApplicationsSectionProps> = ({
  onRequestQuoteForSector,
}) => {
  return (
    <section id="applications" className="py-24 sm:py-32 bg-[#f7f6f2] text-[#121417]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#a88a60] font-semibold">
            <span className="w-8 h-px bg-[#a88a60]"></span>
            <span>Commercial Sectors</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#11141a] tracking-tight font-['Manrope']">
            Where Are Our Systems Used?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg font-light leading-relaxed">
            Tailored compact laminate specifications, vandal-resistant hardware, and dimension standards customized for specific industry environments.
          </p>
        </div>

        {/* Editorial Sector Lookbook Grid (Asymmetric & Open, NOT boxed cards!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {APPLICATIONS.map((app) => (
            <div key={app.id} className="space-y-4 group">
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden bg-[#e8e6df]">
                <img
                  src={app.imageUrl}
                  alt={app.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.96]"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#11141a] font-['Manrope'] group-hover:text-[#a88a60] transition-colors">
                  {app.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mt-1.5 mb-3">
                  {app.description}
                </p>

                <div className="pt-2 border-t border-black/10 flex items-center justify-between text-xs">
                  <span className="font-mono text-gray-500">
                    Ideal: <strong className="text-black font-semibold">{app.idealSeries}</strong>
                  </span>

                  <button
                    onClick={() => onRequestQuoteForSector(app.title)}
                    className="font-bold text-[#a88a60] hover:text-black uppercase tracking-wider inline-flex items-center space-x-1"
                  >
                    <span>BOQ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
