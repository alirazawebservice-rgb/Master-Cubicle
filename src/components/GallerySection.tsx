import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/websiteData';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#090b0e] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
            <span className="w-8 h-px bg-[#c5a880]"></span>
            <span>Spatial Photography</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-['Manrope']">
            Visual Gallery
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed">
            High-resolution spatial documentation capturing partition joinery, precision hardware fittings, and completed washroom environments.
          </p>
        </div>

        {/* 80% Image / 20% UI Architectural Editorial Gallery (Varying aspect ratios) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          {GALLERY_ITEMS.map((item, idx) => {
            // Asymmetric layout spans
            const isSpan7 = idx === 0 || idx === 3;
            const isSpan5 = idx === 1 || idx === 2;
            const colClass = isSpan7 ? 'lg:col-span-7' : isSpan5 ? 'lg:col-span-5' : 'lg:col-span-4';
            const aspectClass = isSpan7 ? 'aspect-[16/10]' : 'aspect-[4/3]';

            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className={`${colClass} relative overflow-hidden bg-[#161a22] group cursor-pointer`}
              >
                <div className={`${aspectClass} overflow-hidden`}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.92] group-hover:brightness-100"
                    loading="lazy"
                  />
                </div>

                {/* Subtle, Minimal Hover Caption (Not heavy cards!) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#c5a880]">
                    {item.category}
                  </span>
                  <h4 className="text-lg font-bold text-white font-['Manrope']">
                    {item.title}
                  </h4>
                  {item.location && (
                    <p className="text-xs text-gray-300 font-light mt-0.5">
                      {item.location}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-Screen Minimal Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-6 sm:p-10 animate-in fade-in duration-200">
          <div className="flex items-center justify-between text-white border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono text-[#c5a880] uppercase tracking-wider">
                {GALLERY_ITEMS[lightboxIndex].category} ({lightboxIndex + 1} / {GALLERY_ITEMS.length})
              </span>
              <h3 className="text-lg font-bold font-['Manrope']">
                {GALLERY_ITEMS[lightboxIndex].title}
              </h3>
            </div>

            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="relative flex-1 flex items-center justify-center my-6">
            <button
              onClick={() => setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)}
              className="absolute left-2 p-3 text-white bg-black/60 hover:bg-[#c5a880] hover:text-black rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={GALLERY_ITEMS[lightboxIndex].imageUrl}
              alt={GALLERY_ITEMS[lightboxIndex].title}
              className="max-w-full max-h-[75vh] object-contain shadow-2xl"
            />

            <button
              onClick={() => setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length)}
              className="absolute right-2 p-3 text-white bg-black/60 hover:bg-[#c5a880] hover:text-black rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="text-center text-xs text-gray-400 font-light">
            {GALLERY_ITEMS[lightboxIndex].caption} {GALLERY_ITEMS[lightboxIndex].location && `— ${GALLERY_ITEMS[lightboxIndex].location}`}
          </div>
        </div>
      )}
    </section>
  );
};
