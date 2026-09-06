import React, { useState, useRef } from 'react';
import {
  PRODUCT_CATEGORIES,
  TOILET_CUBICLE_SUBCATEGORIES
} from '../data/websiteData';
import { ProductSubcategory } from '../types';
import { ChevronLeft, ChevronRight, ArrowUpRight, Layers, Sparkles } from 'lucide-react';

interface ProductSectionProps {
  onSelectSubcategory: (sub: ProductSubcategory) => void;
  onRequestQuote: (productName: string) => void;
}

type CatalogViewMode = 'categories' | 'series';

export const ProductSection: React.FC<ProductSectionProps> = ({
  onSelectSubcategory,
  onRequestQuote
}) => {
  const [viewMode, setViewMode] = useState<CatalogViewMode>('categories');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);

  // Core system categories with clean counts/subtitles matching image.png style
  const catalogItems = [
    {
      id: 'toilet-cubicles-partition',
      name: 'Toilet Cubicles & Partitions',
      subtitle: '15 Modular Series Available',
      badge: 'Flagship Core',
      imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
      action: 'view-series'
    },
    {
      id: 'urinal-partition',
      name: 'Urinal Privacy Screens',
      subtitle: 'Wall-Hung & Floor Anchored',
      badge: 'CNC Radiused',
      imageUrl: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80',
      action: 'quote'
    },
    {
      id: 'shower-cubicles',
      name: 'Shower Wet Area Cubicles',
      subtitle: '100% Steam & Moisture Proof',
      badge: 'Watertight',
      imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80',
      action: 'quote'
    },
    {
      id: 'changing-room',
      name: 'Changing Room Suites',
      subtitle: 'Modular Benches & Partitions',
      badge: 'Heavy Footfall',
      imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
      action: 'quote'
    },
    {
      id: 'lockers',
      name: 'Phenolic Lockers',
      subtitle: '1 to 6-Tier Electronic Units',
      badge: 'Anti-Vandal',
      imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
      action: 'quote'
    },
    {
      id: 'pole-door',
      name: 'Pole & Utility Doors',
      subtitle: 'Floor-to-Ceiling Structural Pivots',
      badge: 'Heavy Duty',
      imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
      action: 'quote'
    },
    {
      id: 'toilet-cubicle-accessories',
      name: 'Restroom Hardware & Fittings',
      subtitle: 'Grade 304 / 316 Stainless Steel',
      badge: '500k Cycles',
      imageUrl: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80',
      action: 'quote'
    },
    {
      id: 'modular-kitchen',
      name: 'Modular Pantries & Vanities',
      subtitle: 'Solid Phenolic Moisture Resistant',
      badge: 'Commercial',
      imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
      action: 'quote'
    }
  ];

  // Scroll handlers for circular arrows
  const checkScrollPosition = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      const cardWidth = 320;
      const index = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(index);
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const cardWidth = 340;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleCardClick = (item: typeof catalogItems[0]) => {
    if (item.action === 'view-series') {
      setViewMode('series');
      if (carouselRef.current) {
        carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      }
    } else {
      onRequestQuote(item.name);
    }
  };

  const handleSeriesCardClick = (series: ProductSubcategory) => {
    onSelectSubcategory(series);
  };

  return (
    <section id="products" className="py-24 sm:py-32 bg-[#090b0e] text-white border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Main Grid: Clean Left Column Header + Right Cards Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Title, Subtext & System Switcher                              */}
          {/* ========================================================================= */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-6 pt-2">
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
                <span className="w-6 h-px bg-[#c5a880]"></span>
                <span>Systems Archive</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-[50px] font-extrabold text-white tracking-tight font-['Manrope'] leading-[1.08]">
                Product<br className="hidden sm:inline" /> Catalog
              </h2>
              <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed max-w-sm">
                A wide selection of engineered compact laminate restroom partitions, shower cubicles, and sanitary systems for commercial architecture.
              </p>
            </div>

            {/* Segmented Mode Selector matching Dark Luxury Theme */}
            <div className="pt-2 space-y-2.5">
              <span className="text-[11px] uppercase tracking-wider font-mono text-gray-500 block font-semibold">
                Browse System Range
              </span>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2">
                <button
                  onClick={() => {
                    setViewMode('categories');
                    if (carouselRef.current) carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                  }}
                  className={`px-4 py-3 text-xs uppercase tracking-wider font-bold text-left transition-all duration-200 rounded-[14px] flex items-center justify-between border ${
                    viewMode === 'categories'
                      ? 'bg-[#c5a880] text-[#090b0e] border-[#c5a880] shadow-lg font-bold'
                      : 'bg-[#12151d] hover:bg-[#191d26] text-gray-300 hover:text-white border-white/10 font-medium'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <Layers className={`w-3.5 h-3.5 ${viewMode === 'categories' ? 'text-[#090b0e]' : 'text-[#c5a880]'}`} />
                    <span>All Core Systems</span>
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      viewMode === 'categories'
                        ? 'bg-black/20 text-[#090b0e] font-bold'
                        : 'bg-white/5 text-gray-400'
                    }`}
                  >
                    8 Systems
                  </span>
                </button>

                <button
                  onClick={() => {
                    setViewMode('series');
                    if (carouselRef.current) carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                  }}
                  className={`px-4 py-3 text-xs uppercase tracking-wider font-bold text-left transition-all duration-200 rounded-[14px] flex items-center justify-between border ${
                    viewMode === 'series'
                      ? 'bg-[#c5a880] text-[#090b0e] border-[#c5a880] shadow-lg font-bold'
                      : 'bg-[#12151d] hover:bg-[#191d26] text-gray-300 hover:text-white border-white/10 font-medium'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <Sparkles className={`w-3.5 h-3.5 ${viewMode === 'series' ? 'text-[#090b0e]' : 'text-[#c5a880]'}`} />
                    <span>Toilet Cubicle 15 Series</span>
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      viewMode === 'series'
                        ? 'bg-black/20 text-[#090b0e] font-bold'
                        : 'bg-white/5 text-gray-400'
                    }`}
                  >
                    15 Models
                  </span>
                </button>
              </div>
            </div>

            {/* Quick Helper Note */}
            <div className="hidden lg:block pt-4 border-t border-white/10 text-xs text-gray-500 font-light leading-relaxed">
              Click any card to inspect technical specifications, solid compact phenolic core thickness, or request custom BOQ pricing.
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: 3-Column Tall Dark Rounded Cards + Navigation Controls       */}
          {/* ========================================================================= */}
          <div className="lg:col-span-8 xl:col-span-9 overflow-hidden">
            {/* View Mode 1: Core System Categories */}
            {viewMode === 'categories' && (
              <div
                ref={carouselRef}
                onScroll={checkScrollPosition}
                className="flex space-x-5 sm:space-x-6 overflow-x-auto pb-4 pt-1 scroll-smooth no-scrollbar scrollbar-none snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {catalogItems.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => handleCardClick(item)}
                    className="w-[280px] sm:w-[320px] shrink-0 snap-start group cursor-pointer"
                  >
                    {/* Tall Image Card with Dark Architectural Framing */}
                    <div className="aspect-[3/4] sm:aspect-[4/5] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#161a22] border border-white/10 group-hover:border-[#c5a880]/50 relative shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.88] contrast-[1.05] group-hover:brightness-100"
                        loading="lazy"
                      />
                      {/* Subtle hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                        <span className="text-white text-xs font-bold uppercase tracking-wider flex items-center space-x-1">
                          <span>{item.action === 'view-series' ? 'Explore 15 Series' : 'Request BOQ Specs'}</span>
                          <ArrowUpRight className="w-4 h-4 text-[#c5a880]" />
                        </span>
                      </div>
                    </div>

                    {/* Clean Minimal Typography Matching Rest of Website */}
                    <div className="mt-4 px-1 space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white font-['Manrope'] tracking-tight group-hover:text-[#c5a880] transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 font-light">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* View Mode 2: All 15 Toilet Cubicle Series */}
            {viewMode === 'series' && (
              <div
                ref={carouselRef}
                onScroll={checkScrollPosition}
                className="flex space-x-5 sm:space-x-6 overflow-x-auto pb-4 pt-1 scroll-smooth no-scrollbar scrollbar-none snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {TOILET_CUBICLE_SUBCATEGORIES.map((series, idx) => (
                  <div
                    key={series.id}
                    onClick={() => handleSeriesCardClick(series)}
                    className="w-[280px] sm:w-[320px] shrink-0 snap-start group cursor-pointer"
                  >
                    {/* Tall Image Card with Dark Architectural Framing */}
                    <div className="aspect-[3/4] sm:aspect-[4/5] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#161a22] border border-white/10 group-hover:border-[#c5a880]/50 relative shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300">
                      <img
                        src={series.imageUrl}
                        alt={series.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.88] contrast-[1.05] group-hover:brightness-100"
                        loading="lazy"
                      />
                      {/* Number Tag */}
                      <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono font-bold text-[#c5a880] border border-white/10">
                        Series {String(idx + 1).padStart(2, '0')}
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                        <span className="text-white text-xs font-bold uppercase tracking-wider flex items-center space-x-1">
                          <span>View Spec Sheet</span>
                          <ArrowUpRight className="w-4 h-4 text-[#c5a880]" />
                        </span>
                      </div>
                    </div>

                    {/* Typography Below Image */}
                    <div className="mt-4 px-1 space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white font-['Manrope'] tracking-tight group-hover:text-[#c5a880] transition-colors">
                        {series.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 font-light">
                        {series.specifications.thickness} • {series.specifications.hardware.split('(')[0]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Circular Arrow Navigation Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10 mt-4">
              <div className="text-xs font-mono text-gray-400">
                {viewMode === 'categories' ? (
                  <span>8 Primary Partition & Cubicle Systems</span>
                ) : (
                  <span>15 Architectural Toilet Series Available</span>
                )}
              </div>

              {/* Circular < and > navigation buttons in Website Theme */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleScroll('left')}
                  disabled={!canScrollLeft}
                  className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 ${
                    canScrollLeft
                      ? 'border-white/20 text-white hover:border-[#c5a880] hover:text-[#c5a880] hover:bg-white/5 cursor-pointer'
                      : 'border-white/5 text-gray-600 cursor-not-allowed opacity-40'
                  }`}
                  aria-label="Previous products"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={() => handleScroll('right')}
                  disabled={!canScrollRight}
                  className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-200 ${
                    canScrollRight
                      ? 'bg-[#c5a880] text-[#090b0e] border-[#c5a880] hover:bg-[#d8c19f] cursor-pointer shadow-lg'
                      : 'border-white/5 text-gray-600 cursor-not-allowed opacity-40'
                  }`}
                  aria-label="Next products"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
