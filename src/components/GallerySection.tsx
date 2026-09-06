import React, { useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../data/websiteData';
import { ArrowRight, Maximize2, X, ChevronLeft, ChevronRight, Images, MapPin } from 'lucide-react';

interface GallerySectionProps {
  onNavigateToGalleryPage: (category?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onNavigateToGalleryPage,
}) => {
  // Curated 2-line preview: exactly 6 featured installation photographs (2 rows of 3 on desktop)
  const previewItems = GALLERY_ITEMS.slice(0, 6);

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Close lightbox on Escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      }
    };

    if (lightboxIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  const handlePrevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + previewItems.length) % previewItems.length);
  };

  const handleNextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % previewItems.length);
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#090b0e] text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
              <span className="w-8 h-px bg-[#c5a880]"></span>
              <span>Spatial Photography</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-['Manrope']">
              Visual Gallery
            </h2>
            <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed">
              Curated highlights of turnkey commercial restrooms, shower cubicles, and precision joinery. Explore our complete gallery archive to view all categories.
            </p>
          </div>

          {/* Direct CTA to Full Gallery Page */}
          <div className="shrink-0">
            <button
              onClick={() => onNavigateToGalleryPage('All')}
              className="px-7 py-3.5 bg-[#c5a880] hover:bg-[#d8c19f] text-[#090b0e] font-bold text-xs uppercase tracking-[0.15em] transition-all flex items-center space-x-2 shadow-xl group"
            >
              <Images className="w-4 h-4" />
              <span>View Full Gallery Page ({GALLERY_ITEMS.length}+ Images)</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Consistent Masonry-Inspired CSS Grid Layout with Uniform Aspect Ratios & Hover Scale Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {previewItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group cursor-pointer flex flex-col space-y-3 transform transition-all duration-500 ease-out hover:-translate-y-1.5"
            >
              {/* Image Frame with Uniform Aspect Ratio & Subtle Scale Effect Matching Projects Section */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#161a22] border border-white/10 group-hover:border-[#c5a880]/50 transition-colors duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center filter brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Subtle Gradient & Quick View Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="px-2.5 py-1 bg-black/75 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-[#c5a880] uppercase tracking-wider">
                      Photo 0{index + 1}
                    </span>
                    <span className="p-2 bg-black/60 backdrop-blur-sm text-[#c5a880] border border-white/10 hover:bg-[#c5a880] hover:text-black transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div>
                    <span className="text-white text-xs font-mono tracking-wider uppercase flex items-center space-x-1.5">
                      <span>Expand View</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#c5a880]" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Metadata Matching Projects Section Typography */}
              <div className="space-y-1 px-0.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#c5a880] font-medium">
                    {item.category}
                  </span>
                  <span className="text-[11px] font-mono text-gray-500">
                    0{index + 1} / 0{previewItems.length}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white font-['Manrope'] group-hover:text-[#c5a880] transition-colors leading-snug line-clamp-1">
                  {item.title}
                </h3>

                {item.location && (
                  <p className="text-xs text-gray-400 font-light flex items-center pt-0.5">
                    <MapPin className="w-3 h-3 text-[#c5a880] mr-1.5 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Category Quick Filter & Jump Bar below the 2 lines */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-gray-500 uppercase mr-2">Jump to category in full gallery:</span>
            {[
              { name: 'Toilet Partitions', key: 'Toilet Cubicles' },
              { name: 'Urinal Screens', key: 'Urinal Partitions' },
              { name: 'Shower Cubicles', key: 'Shower Cubicles' },
              { name: 'Lockers & Changing', key: 'Changing Rooms & Lockers' },
              { name: 'Hardware & Fittings', key: 'Hardware Details' }
            ].map((cat) => (
              <button
                key={cat.key}
                onClick={() => onNavigateToGalleryPage(cat.key)}
                className="text-xs px-3 py-1.5 bg-white/[0.04] hover:bg-[#c5a880] hover:text-black text-gray-300 transition-colors border border-white/10 font-medium"
              >
                {cat.name} →
              </button>
            ))}
          </div>

          <button
            onClick={() => onNavigateToGalleryPage('All')}
            className="text-xs uppercase tracking-widest font-bold text-[#c5a880] hover:text-white transition-colors inline-flex items-center space-x-1 shrink-0"
          >
            <span>Explore All {GALLERY_ITEMS.length}+ Photos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Lightbox for preview items */}
      {lightboxIndex !== null && previewItems[lightboxIndex] && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200 cursor-pointer"
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-between text-white border-b border-white/10 pb-4 shrink-0 cursor-default"
          >
            <div className="pr-4 truncate">
              <span className="text-xs font-mono text-[#c5a880] uppercase tracking-wider block">
                {previewItems[lightboxIndex].category} • Preview {lightboxIndex + 1} of {previewItems.length}
              </span>
              <h3 className="text-base sm:text-xl font-bold font-['Manrope'] mt-0.5 truncate">
                {previewItems[lightboxIndex].title}
              </h3>
            </div>
            <div className="flex items-center space-x-3 shrink-0">
              <button
                onClick={() => {
                  const cat = previewItems[lightboxIndex].category;
                  setLightboxIndex(null);
                  onNavigateToGalleryPage(cat);
                }}
                className="hidden sm:inline-flex text-xs uppercase tracking-wider text-[#c5a880] hover:text-white px-3 py-2 bg-white/5 hover:bg-white/10 transition-colors"
              >
                Open Full Gallery Page →
              </button>
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex-1 flex items-center justify-center my-4 cursor-default"
          >
            <button
              onClick={handlePrevLightbox}
              className="absolute left-2 sm:left-4 z-10 w-11 h-11 flex items-center justify-center text-white bg-black/70 hover:bg-[#c5a880] hover:text-black transition-colors rounded-full sm:rounded-none"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <img
              src={previewItems[lightboxIndex].imageUrl}
              alt={previewItems[lightboxIndex].title}
              className="max-w-full max-h-[70vh] object-contain shadow-2xl select-none"
            />
            <button
              onClick={handleNextLightbox}
              className="absolute right-2 sm:right-4 z-10 w-11 h-11 flex items-center justify-center text-white bg-black/70 hover:bg-[#c5a880] hover:text-black transition-colors rounded-full sm:rounded-none"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div
            onClick={(e) => e.stopPropagation()}
            className="text-center text-xs text-gray-400 font-light border-t border-white/10 pt-4 max-w-2xl mx-auto shrink-0 cursor-default"
          >
            <span className="text-gray-200">{previewItems[lightboxIndex].caption}</span>
            {previewItems[lightboxIndex].location && (
              <span className="text-[#c5a880] block mt-1 font-mono">
                {previewItems[lightboxIndex].location}
              </span>
            )}
            <div className="sm:hidden mt-3">
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                className="px-5 py-2 text-xs text-gray-400 hover:text-white border border-white/20 bg-white/5"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
