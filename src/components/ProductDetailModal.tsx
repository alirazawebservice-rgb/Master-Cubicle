import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Shield, ArrowRight, Layers, Ruler, FileText } from 'lucide-react';
import { ProductSubcategory } from '../types';

interface ProductDetailModalProps {
  product: ProductSubcategory | null;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onRequestQuote,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Close modal on Escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (product) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [product, onClose]);

  if (!product) return null;

  const images = product.galleryImages && product.galleryImages.length > 0
    ? product.galleryImages
    : [product.imageUrl];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200 cursor-pointer"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-[#11141a] border border-white/15 rounded-sm shadow-2xl overflow-hidden my-4 sm:my-6 cursor-default max-h-[92vh] flex flex-col"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10 bg-[#0c0e12] shrink-0">
          <div className="flex items-center space-x-3 truncate pr-2">
            <span className="w-2 h-2 rounded-full bg-[#d4b483] shrink-0"></span>
            <span className="text-xs uppercase tracking-widest text-[#d4b483] font-mono truncate">
              Architectural Product Specification
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close product details modal"
            className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {/* Main 2-Column Product Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left: Product Image Gallery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-[#171b22] border border-white/10 relative">
                <img
                  src={images[activeImageIndex]}
                  alt={`${product.name} Architectural Washroom Cubicle`}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />
                <div className="absolute bottom-3 left-3 bg-[#0b0d11]/80 backdrop-blur-sm px-3 py-1 rounded text-[11px] text-gray-300 font-mono">
                  View {activeImageIndex + 1} of {images.length}
                </div>
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex space-x-3">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-16 rounded overflow-hidden border transition-all ${
                        activeImageIndex === idx
                          ? 'border-[#d4b483] ring-1 ring-[#d4b483]'
                          : 'border-white/10 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt="Thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Material Assurance Box */}
              <div className="p-4 bg-[#161a22] border border-white/5 rounded text-xs space-y-2 text-gray-300">
                <div className="flex items-center text-white font-semibold text-xs space-x-1.5">
                  <Shield className="w-4 h-4 text-[#d4b483]" />
                  <span>Master Cubicle Technical Guarantee</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  100% solid core phenolic compact laminates. Impervious to steam, moisture, and disinfectants. Tested for 350,000+ continuous door slam operations.
                </p>
              </div>
            </div>

            {/* Right: Product Information & Specifications */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#d4b483] font-semibold mb-1">
                  Toilet Cubicles & Partitions Series
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Manrope'] mb-2">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#e0caaa] font-medium mb-4">
                  {product.tagline}
                </p>
                <p className="text-sm text-gray-300 leading-relaxed mb-6 font-light">
                  {product.description}
                </p>

                {/* Technical Specifications Table */}
                <div className="border border-white/10 rounded-sm overflow-hidden mb-6 bg-[#0e1117]">
                  <div className="bg-[#181c24] px-4 py-2 text-xs font-bold text-white uppercase tracking-wider border-b border-white/10 flex items-center justify-between">
                    <span className="flex items-center">
                      <Ruler className="w-3.5 h-3.5 mr-1.5 text-[#d4b483]" />
                      Technical Specifications
                    </span>
                    <span className="text-[10px] text-gray-400 font-mono">EN 438-4</span>
                  </div>

                  <div className="divide-y divide-white/5 text-xs">
                    <div className="grid grid-cols-3 p-2.5">
                      <span className="text-gray-400 font-medium">Panel Material</span>
                      <span className="col-span-2 text-white font-mono">{product.specifications.panelMaterial}</span>
                    </div>
                    <div className="grid grid-cols-3 p-2.5 bg-white/[0.01]">
                      <span className="text-gray-400 font-medium">Core Thickness</span>
                      <span className="col-span-2 text-white font-mono">{product.specifications.thickness}</span>
                    </div>
                    <div className="grid grid-cols-3 p-2.5">
                      <span className="text-gray-400 font-medium">Hardware Grade</span>
                      <span className="col-span-2 text-white font-mono">{product.specifications.hardware}</span>
                    </div>
                    <div className="grid grid-cols-3 p-2.5 bg-white/[0.01]">
                      <span className="text-gray-400 font-medium">Standard Height</span>
                      <span className="col-span-2 text-white font-mono">{product.specifications.standardHeight}</span>
                    </div>
                    <div className="grid grid-cols-3 p-2.5">
                      <span className="text-gray-400 font-medium">Depth Standard</span>
                      <span className="col-span-2 text-white font-mono">{product.specifications.standardDepth}</span>
                    </div>
                    <div className="grid grid-cols-3 p-2.5 bg-white/[0.01]">
                      <span className="text-gray-400 font-medium">Ground Clearance</span>
                      <span className="col-span-2 text-white font-mono">{product.specifications.groundClearance}</span>
                    </div>
                    <div className="grid grid-cols-3 p-2.5">
                      <span className="text-gray-400 font-medium">Water Resistance</span>
                      <span className="col-span-2 text-[#d4b483] font-semibold">{product.specifications.waterResistance}</span>
                    </div>
                  </div>
                </div>

                {/* Features & Inclusions */}
                <div className="space-y-2 mb-6">
                  <div className="text-xs uppercase tracking-wider text-white font-semibold">
                    Engineered System Features:
                  </div>
                  <ul className="grid grid-cols-1 gap-2 text-xs text-gray-300">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#d4b483] mr-2 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommended Applications */}
                <div className="mb-6">
                  <div className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
                    Recommended Sectors:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.recommendedFor.map((app, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[11px] text-gray-300 font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <button
                  onClick={() => {
                    onRequestQuote(product.name);
                    onClose();
                  }}
                  className="flex-1 py-3 px-6 bg-[#d4b483] hover:bg-[#e2cca8] text-[#0b0d11] font-bold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center space-x-2"
                >
                  <span>Request a Quote for this Series</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onClose}
                  className="py-3 px-5 bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-300 hover:text-white rounded-sm font-medium transition-colors"
                >
                  Close Catalogue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
