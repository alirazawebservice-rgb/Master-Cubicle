import React, { useState } from 'react';
import {
  PRODUCT_CATEGORIES,
  TOILET_CUBICLE_SUBCATEGORIES
} from '../data/websiteData';
import { ProductSubcategory } from '../types';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface ProductSectionProps {
  onSelectSubcategory: (sub: ProductSubcategory) => void;
  onRequestQuote: (productName: string) => void;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  onSelectSubcategory,
  onRequestQuote
}) => {
  // Selected subcategory index for dynamic catalogue showcase
  const [activeSeriesIndex, setActiveSeriesIndex] = useState(0);

  const activeSeries = TOILET_CUBICLE_SUBCATEGORIES[activeSeriesIndex];

  // Primary categories from websiteData
  const toiletCategory = PRODUCT_CATEGORIES.find(c => c.id === 'toilet-cubicles-partition')!;
  const urinalCategory = PRODUCT_CATEGORIES.find(c => c.id === 'urinal-partition')!;
  const showerCategory = PRODUCT_CATEGORIES.find(c => c.id === 'shower-cubicles')!;
  const changingCategory = PRODUCT_CATEGORIES.find(c => c.id === 'changing-room')!;
  const lockerCategory = PRODUCT_CATEGORIES.find(c => c.id === 'lockers')!;
  const doorsCategory = PRODUCT_CATEGORIES.find(c => c.id === 'pole-door')!;
  const utilityDoorCategory = PRODUCT_CATEGORIES.find(c => c.id === 'utility-door')!;
  const accessoriesCategory = PRODUCT_CATEGORIES.find(c => c.id === 'toilet-cubicle-accessories')!;
  const kitchenCategory = PRODUCT_CATEGORIES.find(c => c.id === 'modular-kitchen')!;

  return (
    <section id="products" className="py-24 sm:py-32 bg-[#ffffff] text-[#121417]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header: Minimal & Editorial */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#a88a60] font-semibold">
            <span className="w-8 h-px bg-[#a88a60]"></span>
            <span>Architectural Systems</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#11141a] tracking-tight font-['Manrope']">
            Product Catalogue
          </h2>
          <p className="text-gray-600 text-base sm:text-lg font-light leading-relaxed">
            Engineered commercial partition systems, shower cubicles, locker suites, and architectural hardware designed to withstand demanding commercial footfalls.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 1. DOMINANT FLAGSHIP SHOWCASE: TOILET CUBICLES & 15-SERIES EXPLORER       */}
        {/* ========================================================================= */}
        <div id="toilet-subcategories" className="scroll-mt-24 mb-24 pb-20 border-b border-black/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Large Dynamic Architectural Product Stage (60%) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#f0eee9]">
                <img
                  src={activeSeries.imageUrl}
                  alt={activeSeries.name}
                  className="w-full h-full object-cover object-center transition-all duration-700 ease-out"
                />
                <div className="absolute top-5 left-5 bg-[#121417]/90 backdrop-blur-sm text-white px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider">
                  Series {String(activeSeriesIndex + 1).padStart(2, '0')} / {activeSeries.name}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2 text-xs text-gray-500">
                <span className="font-mono">Panel: {activeSeries.specifications.thickness} Compact Laminate</span>
                <button
                  onClick={() => onSelectSubcategory(activeSeries)}
                  className="font-bold text-[#11141a] hover:text-[#a88a60] transition-colors flex items-center space-x-1"
                >
                  <span>View Technical Spec Sheet</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Series Title & Elegant Interactive Series Index (40%) */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#a88a60] font-semibold">
                  Flagship Category
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#11141a] font-['Manrope'] mt-1 mb-2">
                  {toiletCategory.name}
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                  {toiletCategory.fullDesc}
                </p>
              </div>

              {/* Architectural Numbered Series List */}
              <div className="border-t border-b border-black/10 divide-y divide-black/5 max-h-[360px] overflow-y-auto pr-2">
                {TOILET_CUBICLE_SUBCATEGORIES.map((sub, index) => (
                  <button
                    key={sub.id}
                    onClick={() => {
                      setActiveSeriesIndex(index);
                    }}
                    onMouseEnter={() => setActiveSeriesIndex(index)}
                    className={`w-full py-2.5 px-3 flex items-center justify-between text-left transition-colors ${
                      activeSeriesIndex === index
                        ? 'bg-[#f5f3ee] text-[#11141a] font-bold'
                        : 'text-gray-600 hover:text-black hover:bg-black/[0.02]'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="font-mono text-xs text-[#a88a60]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs sm:text-sm font-medium font-['Manrope']">
                        {sub.name}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-gray-400">
                      {sub.specifications.hardware.split('(')[0]}
                    </span>
                  </button>
                ))}
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center space-x-4">
                <button
                  onClick={() => onSelectSubcategory(activeSeries)}
                  className="px-6 py-3 bg-[#11141a] hover:bg-[#252a33] text-white text-xs uppercase tracking-[0.15em] font-bold transition-colors"
                >
                  Explore {activeSeries.name}
                </button>
                <button
                  onClick={() => onRequestQuote(activeSeries.name)}
                  className="text-xs font-bold uppercase tracking-[0.15em] text-[#a88a60] hover:text-black transition-colors"
                >
                  Request BOQ Quote →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. ASYMMETRIC ARCHITECTURAL CATALOGUE: OTHER CATEGORIES                   */}
        {/* ========================================================================= */}
        <div className="space-y-24">
          {/* Pair 1: Urinal Partitions (Dominant 60%) + Shower Cubicles (40%) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Urinal Partition: Large visual */}
            <div className="lg:col-span-7 space-y-4 group">
              <div className="aspect-[16/9] overflow-hidden bg-[#f0eee9]">
                <img
                  src={urinalCategory.imageUrl}
                  alt={urinalCategory.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-baseline pt-2">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#11141a] font-['Manrope']">
                    {urinalCategory.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 font-light mt-1 max-w-lg">
                    {urinalCategory.fullDesc}
                  </p>
                </div>
                <button
                  onClick={() => onRequestQuote(urinalCategory.name)}
                  className="text-xs uppercase tracking-[0.15em] font-bold text-[#a88a60] hover:text-black shrink-0 ml-4 inline-flex items-center space-x-1"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Shower Cubicle: Tall architectural framing */}
            <div className="lg:col-span-5 space-y-4 group">
              <div className="aspect-[4/5] overflow-hidden bg-[#f0eee9]">
                <img
                  src={showerCategory.imageUrl}
                  alt={showerCategory.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-baseline pt-2">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#11141a] font-['Manrope']">
                    {showerCategory.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 font-light mt-1">
                    {showerCategory.fullDesc}
                  </p>
                </div>
                <button
                  onClick={() => onRequestQuote(showerCategory.name)}
                  className="text-xs uppercase tracking-[0.15em] font-bold text-[#a88a60] hover:text-black shrink-0 ml-4 inline-flex items-center space-x-1"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Pair 2: Changing Rooms + Commercial Lockers */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Changing Rooms */}
            <div className="lg:col-span-5 space-y-4 group">
              <div className="aspect-[4/3] overflow-hidden bg-[#f0eee9]">
                <img
                  src={changingCategory.imageUrl}
                  alt={changingCategory.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-baseline pt-2">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#11141a] font-['Manrope']">
                    {changingCategory.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 font-light mt-1">
                    {changingCategory.fullDesc}
                  </p>
                </div>
                <button
                  onClick={() => onRequestQuote(changingCategory.name)}
                  className="text-xs uppercase tracking-[0.15em] font-bold text-[#a88a60] hover:text-black shrink-0 ml-4 inline-flex items-center space-x-1"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Lockers */}
            <div className="lg:col-span-7 space-y-4 group">
              <div className="aspect-[16/10] overflow-hidden bg-[#f0eee9]">
                <img
                  src={lockerCategory.imageUrl}
                  alt={lockerCategory.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-baseline pt-2">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-[#11141a] font-['Manrope']">
                    {lockerCategory.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 font-light mt-1 max-w-lg">
                    {lockerCategory.fullDesc}
                  </p>
                </div>
                <button
                  onClick={() => onRequestQuote(lockerCategory.name)}
                  className="text-xs uppercase tracking-[0.15em] font-bold text-[#a88a60] hover:text-black shrink-0 ml-4 inline-flex items-center space-x-1"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Trio: Architectural Doors, Accessories & Modular Kitchen */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 pt-8 border-t border-black/10">
            {/* Pole Door & Utility Doors */}
            <div className="space-y-4 group">
              <div className="aspect-[4/3] overflow-hidden bg-[#f0eee9]">
                <img
                  src={doorsCategory.imageUrl}
                  alt={`${doorsCategory.name} & ${utilityDoorCategory.name}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold text-[#11141a] font-['Manrope']">
                {doorsCategory.name} & {utilityDoorCategory.name}
              </h4>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                {doorsCategory.fullDesc}
              </p>
              <button
                onClick={() => onRequestQuote('Pole & Utility Doors')}
                className="text-xs uppercase tracking-[0.15em] font-bold text-[#a88a60] hover:text-black inline-flex items-center space-x-1"
              >
                <span>Request Door Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Toilet Cubicle Accessories */}
            <div className="space-y-4 group">
              <div className="aspect-[4/3] overflow-hidden bg-[#f0eee9]">
                <img
                  src={accessoriesCategory.imageUrl}
                  alt={accessoriesCategory.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold text-[#11141a] font-['Manrope']">
                {accessoriesCategory.name}
              </h4>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                {accessoriesCategory.fullDesc}
              </p>
              <button
                onClick={() => onRequestQuote(accessoriesCategory.name)}
                className="text-xs uppercase tracking-[0.15em] font-bold text-[#a88a60] hover:text-black inline-flex items-center space-x-1"
              >
                <span>Hardware Catalogue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Modular Kitchen */}
            <div className="space-y-4 group">
              <div className="aspect-[4/3] overflow-hidden bg-[#f0eee9]">
                <img
                  src={kitchenCategory.imageUrl}
                  alt={kitchenCategory.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg font-bold text-[#11141a] font-['Manrope']">
                {kitchenCategory.name}
              </h4>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                {kitchenCategory.fullDesc}
              </p>
              <button
                onClick={() => onRequestQuote(kitchenCategory.name)}
                className="text-xs uppercase tracking-[0.15em] font-bold text-[#a88a60] hover:text-black inline-flex items-center space-x-1"
              >
                <span>Inquire Solutions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
