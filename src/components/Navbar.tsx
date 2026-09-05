import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, ChevronDown, ArrowRight, ShieldCheck, Layers } from 'lucide-react';
import { COMPANY_INFO, PRODUCT_CATEGORIES, TOILET_CUBICLE_SUBCATEGORIES } from '../data/websiteData';
import { ProductSubcategory } from '../types';

interface NavbarProps {
  onOpenQuoteModal: (productName?: string) => void;
  onSelectProductSubcategory?: (sub: ProductSubcategory) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal, onSelectProductSubcategory }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsMegaOpen, setIsProductsMegaOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubcategoryClick = (sub: ProductSubcategory) => {
    setIsProductsMegaOpen(false);
    setIsMobileMenuOpen(false);
    if (onSelectProductSubcategory) {
      onSelectProductSubcategory(sub);
    }
    const elem = document.getElementById('toilet-subcategories');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#08090c] border-b border-white/[0.06] text-xs text-[#9ca3af] py-2 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-xs tracking-wider text-[#d4b483] font-medium uppercase">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-[#d4b483]" />
              Architectural Commercial Partitions & Cubicles
            </span>
            <span className="text-white/20">|</span>
            <span className="text-gray-400">Navi Mumbai • Pan-India Delivery & Installation</span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 mr-1.5 text-[#d4b483]" />
              {COMPANY_INFO.email}
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center text-white hover:text-[#d4b483] font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-[#d4b483]" />
              {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0b0d11]/95 backdrop-blur-md py-3 shadow-xl border-b border-white/10'
            : 'bg-[#0b0d11]/80 backdrop-blur-sm py-4 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#1a1e26] to-[#0f1217] border border-[#c5a880]/30 flex items-center justify-center p-2 group-hover:border-[#c5a880] transition-colors shadow-inner">
              <div className="w-full h-full border border-[#c5a880]/60 flex flex-col justify-between p-0.5">
                <div className="w-full h-0.5 bg-[#c5a880]"></div>
                <div className="w-1/2 h-0.5 bg-[#c5a880]"></div>
                <div className="w-full h-0.5 bg-[#c5a880]"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-white uppercase font-['Manrope']">
                MASTER <span className="text-[#d4b483]">CUBICLE</span>
              </span>
              <span className="text-[10px] tracking-widest text-gray-400 uppercase font-medium">
                Washroom Systems
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>

            {/* Our Products with Mega Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsMegaOpen(true)}
              onMouseLeave={() => setIsProductsMegaOpen(false)}
            >
              <button
                type="button"
                className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setIsProductsMegaOpen(!isProductsMegaOpen)}
              >
                <span>Our Products</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    isProductsMegaOpen ? 'rotate-180 text-[#d4b483]' : ''
                  }`}
                />
              </button>

              {/* Mega Menu Dropdown */}
              {isProductsMegaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[840px] bg-[#11141a] border border-[#272f3d] shadow-2xl rounded-sm p-6 mt-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="grid grid-cols-3 gap-6">
                    {/* Column 1: Core Restroom Series */}
                    <div>
                      <div className="flex items-center space-x-2 pb-2 mb-3 border-b border-white/10 text-xs font-semibold text-[#d4b483] uppercase tracking-wider">
                        <Layers className="w-4 h-4" />
                        <span>Toilet Cubicles (15 Series)</span>
                      </div>
                      <ul className="space-y-1.5 text-xs">
                        {TOILET_CUBICLE_SUBCATEGORIES.slice(0, 8).map((sub) => (
                          <li key={sub.id}>
                            <button
                              onClick={() => handleSubcategoryClick(sub)}
                              className="text-left w-full py-1 px-2 rounded hover:bg-white/5 text-gray-300 hover:text-white transition-colors flex items-center justify-between group"
                            >
                              <span>{sub.name}</span>
                              <ArrowRight className="w-3 h-3 text-transparent group-hover:text-[#d4b483] transition-colors" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 2: Architectural & Specialty Series */}
                    <div>
                      <div className="flex items-center space-x-2 pb-2 mb-3 border-b border-white/10 text-xs font-semibold text-[#d4b483] uppercase tracking-wider">
                        <Layers className="w-4 h-4" />
                        <span>Architectural & Specialty</span>
                      </div>
                      <ul className="space-y-1.5 text-xs">
                        {TOILET_CUBICLE_SUBCATEGORIES.slice(8).map((sub) => (
                          <li key={sub.id}>
                            <button
                              onClick={() => handleSubcategoryClick(sub)}
                              className="text-left w-full py-1 px-2 rounded hover:bg-white/5 text-gray-300 hover:text-white transition-colors flex items-center justify-between group"
                            >
                              <span>{sub.name}</span>
                              <ArrowRight className="w-3 h-3 text-transparent group-hover:text-[#d4b483] transition-colors" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 3: Partitions, Lockers & Accessories */}
                    <div className="bg-[#171b22] p-4 rounded border border-white/5 flex flex-col justify-between">
                      <div>
                        <div className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                          Other Systems
                        </div>
                        <ul className="space-y-2 text-xs text-gray-300">
                          {PRODUCT_CATEGORIES.filter(
                            (c) => c.id !== 'toilet-cubicles-partition'
                          ).map((cat) => (
                            <li key={cat.id}>
                              <a
                                href="#products"
                                onClick={() => setIsProductsMegaOpen(false)}
                                className="block hover:text-[#d4b483] transition-colors font-medium"
                              >
                                {cat.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/10">
                        <button
                          onClick={() => {
                            setIsProductsMegaOpen(false);
                            onOpenQuoteModal();
                          }}
                          className="w-full text-center py-2 px-3 bg-[#c5a880]/15 hover:bg-[#c5a880] text-[#e0caaa] hover:text-[#0b0d11] font-semibold text-xs rounded transition-all flex items-center justify-center space-x-1"
                        >
                          <span>Request Custom Spec</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#advantages"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Advantages
            </a>
            <a
              href="#applications"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Applications
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#gallery"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center space-x-2 text-xs text-gray-300 hover:text-white font-medium px-3 py-2 border border-white/10 rounded-sm hover:border-white/25 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4b483]" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#0b0d11] bg-[#d4b483] hover:bg-[#e2cca8] active:scale-[0.98] transition-all rounded-sm shadow-md"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu & Quick Phone Trigger */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              aria-label="Call Master Cubicle"
              className="p-2 text-[#d4b483] bg-white/5 border border-white/10 rounded-sm"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenQuoteModal()}
              className="px-3 py-1.5 text-xs font-semibold text-[#0b0d11] bg-[#d4b483] rounded-sm"
            >
              Quote
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 text-gray-300 hover:text-white bg-white/5 border border-white/10 rounded-sm"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-[#0b0d11]/98 z-50 backdrop-blur-xl overflow-y-auto px-6 py-8 border-t border-white/10 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-5 text-base">
            <a
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-[#d4b483] font-medium py-2 border-b border-white/5"
            >
              Home
            </a>

            <div>
              <div className="text-xs uppercase tracking-wider text-[#d4b483] font-semibold mb-2">
                Our Products (All Categories)
              </div>
              <div className="grid grid-cols-1 gap-2 pl-2 border-l border-white/10 mb-4">
                {PRODUCT_CATEGORIES.map((cat) => (
                  <a
                    key={cat.id}
                    href="#products"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm text-gray-300 hover:text-white py-1"
                  >
                    {cat.name}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#advantages"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-[#d4b483] font-medium py-2 border-b border-white/5"
            >
              Advantages & Quality
            </a>
            <a
              href="#applications"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-[#d4b483] font-medium py-2 border-b border-white/5"
            >
              Applications & Sectors
            </a>
            <a
              href="#projects"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-[#d4b483] font-medium py-2 border-b border-white/5"
            >
              Our Projects
            </a>
            <a
              href="#gallery"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-[#d4b483] font-medium py-2 border-b border-white/5"
            >
              Visual Gallery
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-[#d4b483] font-medium py-2 border-b border-white/5"
            >
              Contact Us
            </a>

            {/* Mobile Contact Box */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center space-x-2 py-3 bg-[#171b22] border border-white/10 rounded text-sm text-white font-medium"
              >
                <Phone className="w-4 h-4 text-[#d4b483]" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3.5 bg-[#d4b483] text-[#0b0d11] font-bold text-sm uppercase tracking-wider rounded"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
