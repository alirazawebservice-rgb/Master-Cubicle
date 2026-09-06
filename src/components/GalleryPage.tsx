import React, { useState, useMemo, useEffect } from 'react';
import { GALLERY_ITEMS, COMPANY_INFO } from '../data/websiteData';
import { GalleryItem } from '../types';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Layers,
  ArrowLeft,
  Phone,
  ArrowRight,
  Filter
} from 'lucide-react';

type GalleryFilterCategory =
  | 'All'
  | 'Toilet Cubicles'
  | 'Urinal Partitions'
  | 'Shower Cubicles'
  | 'Changing Rooms & Lockers'
  | 'Hardware Details';

interface FilterTab {
  id: GalleryFilterCategory;
  label: string;
  description: string;
}

const FILTER_TABS: FilterTab[] = [
  {
    id: 'All',
    label: 'All Installations',
    description: 'Complete visual archive of turnkey commercial washrooms, partition runs, and precision joinery.'
  },
  {
    id: 'Toilet Cubicles',
    label: 'Bathroom & Toilet Partitions',
    description: '100% waterproof solid phenolic core restroom cubicles in floor-anchored, ceiling-hung, and seamless series.'
  },
  {
    id: 'Urinal Partitions',
    label: 'Urinal Privacy Screens',
    description: 'Wall-hung and floor-stabilized privacy dividers with CNC radiused safety corners and moisture-impervious finishes.'
  },
  {
    id: 'Shower Cubicles',
    label: 'Shower Cubicles',
    description: 'Heavy-duty wet area enclosures engineered for direct high-pressure water contact in wellness, sports, and hospitality clubs.'
  },
  {
    id: 'Changing Rooms & Lockers',
    label: 'Changing Rooms & Lockers',
    description: 'Modular phenolic changing cubicles and multi-tier electronic lockers for high-traffic fitness and corporate facilities.'
  },
  {
    id: 'Hardware Details',
    label: 'Architectural Hardware & Details',
    description: 'Grade 304 / 316 Stainless Steel indicator locks, gravity hinges, structural aluminium headrails, and CNC edge bevels.'
  }
];

interface GalleryPageProps {
  onBackToHome: () => void;
  onOpenQuoteModal: (productName?: string) => void;
  initialCategory?: GalleryFilterCategory;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onBackToHome,
  onOpenQuoteModal,
  initialCategory = 'All'
}) => {
  const [activeFilter, setActiveFilter] = useState<GalleryFilterCategory>(initialCategory);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Scroll to top upon mounting the gallery page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter items based on active toggle
  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') {
      return GALLERY_ITEMS;
    }
    return GALLERY_ITEMS.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const currentTab = FILTER_TABS.find((t) => t.id === activeFilter) || FILTER_TABS[0];

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handlePrevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  };

  // Keyboard navigation and body scroll lock for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrevLightbox();
      if (e.key === 'ArrowRight') handleNextLightbox();
    };

    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, filteredItems.length]);

  return (
    <div className="min-h-screen bg-[#080a0d] text-white flex flex-col">
      {/* Top Header Bar with Return Navigation */}
      <header className="sticky top-0 z-40 bg-[#090b0e]/95 backdrop-blur-md border-b border-white/10 px-6 sm:px-10 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#c5a880] hover:text-white transition-colors group px-3 py-2 bg-white/[0.04] hover:bg-white/10 border border-white/10"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </button>

            <span className="hidden sm:inline text-white/20">|</span>

            <span className="hidden sm:inline text-xs text-gray-400 font-mono uppercase tracking-wider">
              Spatial Photography Archive ({GALLERY_ITEMS.length} Total Projects)
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="hidden md:flex items-center space-x-2 text-xs text-gray-300 hover:text-white font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => onOpenQuoteModal('General Commercial Inquiry')}
              className="px-5 py-2.5 bg-[#c5a880] hover:bg-[#d8c19f] text-[#080a0d] font-bold text-xs uppercase tracking-[0.15em] transition-colors"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          {/* Breadcrumb & Section Header */}
          <div className="max-w-3xl mb-12 space-y-4">
            <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
              <span className="w-8 h-px bg-[#c5a880]"></span>
              <span>Architectural Lookbook & Field Documentation</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-['Manrope']">
              Complete Visual Gallery
            </h1>

            <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed">
              Explore our full photographic collection of commercial restroom partitions, wet area shower cubicles, urinal divider screens, changing suites, and precision CNC hardware installations across India.
            </p>
          </div>

          {/* Category Filter Toggles */}
          <div className="mb-10 space-y-4 bg-[#10131a] p-5 sm:p-6 border border-white/10">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-gray-400 mb-1">
              <Filter className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Filter by System Category</span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {FILTER_TABS.map((tab) => {
                const isSelected = activeFilter === tab.id;
                const count =
                  tab.id === 'All'
                    ? GALLERY_ITEMS.length
                    : GALLERY_ITEMS.filter((item) => item.category === tab.id).length;

                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveFilter(tab.id);
                      setLightboxIndex(null);
                    }}
                    className={`px-4 py-2.5 text-xs font-['Manrope'] uppercase tracking-wider transition-all duration-200 flex items-center space-x-2 border ${
                      isSelected
                        ? 'bg-[#c5a880] text-[#090b0e] border-[#c5a880] font-bold shadow-lg'
                        : 'bg-white/[0.03] hover:bg-white/[0.08] text-gray-300 hover:text-white border-white/10 hover:border-white/20 font-medium'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.5 rounded-none ${
                        isSelected
                          ? 'bg-black/20 text-[#090b0e] font-bold'
                          : 'bg-white/10 text-gray-400'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Contextual Description of Selected Category */}
            <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-400 gap-2">
              <p className="font-light text-gray-300">
                <strong className="text-white font-medium">{currentTab.label}:</strong>{' '}
                {currentTab.description}
              </p>
              <span className="font-mono text-[11px] text-[#c5a880] shrink-0">
                Displaying {filteredItems.length} of {GALLERY_ITEMS.length} Photographs
              </span>
            </div>
          </div>

          {/* Full Image Gallery Grid (All matching images) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
            {filteredItems.map((item, idx) => {
              // Asymmetric editorial rhythm
              const isWide = idx % 5 === 0 || idx % 5 === 3;
              const colClass = isWide ? 'lg:col-span-7' : 'lg:col-span-5';
              const aspectClass = isWide ? 'aspect-[16/10]' : 'aspect-[4/3]';

              return (
                <div
                  key={item.id}
                  onClick={() => handleOpenLightbox(idx)}
                  className={`${colClass} relative overflow-hidden bg-[#161a22] group cursor-pointer animate-in fade-in duration-300`}
                >
                  <div className={`${aspectClass} overflow-hidden`}>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.92] group-hover:brightness-100"
                      loading="lazy"
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between">
                    <div className="flex justify-end">
                      <span className="p-2 bg-black/60 backdrop-blur-sm text-white rounded-none">
                        <Maximize2 className="w-4 h-4 text-[#c5a880]" />
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#c5a880] block mb-1">
                        {item.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white font-['Manrope']">
                        {item.title}
                      </h3>
                      {item.location && (
                        <p className="text-xs text-gray-300 font-light mt-0.5">
                          {item.location}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Conversion Banner */}
          <div className="mt-20 pt-12 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-[#11141b] p-8 sm:p-10">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#c5a880]">
                Commercial BOQ & Estimation
              </span>
              <h2 className="text-2xl font-bold font-['Manrope'] text-white">
                Require any of these systems for your project?
              </h2>
              <p className="text-sm text-gray-400 font-light max-w-xl">
                Send your layout drawings, cubicle counts, or BOQ specs. Our technical estimation desk prepares turnkey proposals within 24 hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 shrink-0">
              <button
                onClick={() => onOpenQuoteModal(currentTab.label)}
                className="px-8 py-3.5 bg-[#c5a880] hover:bg-[#d8c19f] text-[#080a0d] font-bold text-xs uppercase tracking-[0.15em] transition-colors flex items-center justify-center space-x-2"
              >
                <span>Request BOQ Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onBackToHome}
                className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 text-xs font-mono uppercase tracking-wider transition-colors text-center"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Full-Screen Minimal Lightbox */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200 cursor-pointer"
          role="dialog"
          aria-modal="true"
        >
          {/* Lightbox Header */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-between text-white border-b border-white/10 pb-4 shrink-0 cursor-default"
          >
            <div className="pr-4 truncate">
              <span className="text-xs font-mono text-[#c5a880] uppercase tracking-wider block">
                {filteredItems[lightboxIndex].category} • Photograph {lightboxIndex + 1} of{' '}
                {filteredItems.length}
              </span>
              <h3 className="text-base sm:text-xl font-bold font-['Manrope'] mt-0.5 truncate">
                {filteredItems[lightboxIndex].title}
              </h3>
            </div>

            <button
              onClick={() => setLightboxIndex(null)}
              className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded transition-colors shrink-0"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Main Stage with Navigation Arrows */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex-1 flex items-center justify-center my-4 cursor-default"
          >
            {filteredItems.length > 1 && (
              <button
                onClick={handlePrevLightbox}
                className="absolute left-2 sm:left-4 z-10 w-11 h-11 flex items-center justify-center text-white bg-black/70 hover:bg-[#c5a880] hover:text-black transition-colors rounded-full sm:rounded-none"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            <img
              src={filteredItems[lightboxIndex].imageUrl}
              alt={filteredItems[lightboxIndex].title}
              className="max-w-full max-h-[70vh] object-contain shadow-2xl select-none"
            />

            {filteredItems.length > 1 && (
              <button
                onClick={handleNextLightbox}
                className="absolute right-2 sm:right-4 z-10 w-11 h-11 flex items-center justify-center text-white bg-black/70 hover:bg-[#c5a880] hover:text-black transition-colors rounded-full sm:rounded-none"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Lightbox Footer Caption */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="text-center text-xs text-gray-400 font-light border-t border-white/10 pt-4 max-w-2xl mx-auto shrink-0 cursor-default"
          >
            <span className="text-gray-200">{filteredItems[lightboxIndex].caption}</span>
            {filteredItems[lightboxIndex].location && (
              <span className="text-[#c5a880] block mt-1 font-mono">
                Installation Location: {filteredItems[lightboxIndex].location}
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
    </div>
  );
};
