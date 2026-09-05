import React from 'react';
import { COMPANY_INFO, PRODUCT_CATEGORIES } from '../data/websiteData';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080b] border-t border-white/10 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center space-x-3 group">
              <div className="w-9 h-9 rounded-sm bg-[#161a22] border border-[#c5a880]/40 flex items-center justify-center p-2">
                <div className="w-full h-full border border-[#c5a880]/60 flex flex-col justify-between p-0.5">
                  <div className="w-full h-0.5 bg-[#c5a880]"></div>
                  <div className="w-1/2 h-0.5 bg-[#c5a880]"></div>
                  <div className="w-full h-0.5 bg-[#c5a880]"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold text-white tracking-tight uppercase font-['Manrope']">
                  MASTER <span className="text-[#d4b483]">CUBICLE</span>
                </span>
                <span className="text-[10px] tracking-widest text-gray-500 uppercase font-medium">
                  Partition Systems
                </span>
              </div>
            </a>

            <p className="text-xs text-gray-400 leading-relaxed font-light pr-4">
              Leading manufacturer and specialist supplier of 100% waterproof compact grade solid laminate toilet cubicles, washroom partitions, urinal privacy screens, shower cubicles, lockers, and architectural restroom hardware.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-[#d4b483]">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[11px] font-semibold uppercase tracking-wider">
                Engineering Commercial Durability Since 2020
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-white text-xs font-bold uppercase tracking-wider font-['Manrope'] mb-3">
              Quick Links
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-[#d4b483] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#d4b483] transition-colors">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#toilet-subcategories" className="hover:text-[#d4b483] transition-colors">
                  15 Cubicle Series
                </a>
              </li>
              <li>
                <a href="#advantages" className="hover:text-[#d4b483] transition-colors">
                  Advantages & Specs
                </a>
              </li>
              <li>
                <a href="#applications" className="hover:text-[#d4b483] transition-colors">
                  Applications & Sectors
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#d4b483] transition-colors">
                  Our Projects
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#d4b483] transition-colors">
                  Visual Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#d4b483] transition-colors">
                  Contact Us / Get Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-white text-xs font-bold uppercase tracking-wider font-['Manrope'] mb-3">
              Our Products
            </div>
            <ul className="space-y-2 text-xs">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a
                    href="#products"
                    className="hover:text-[#d4b483] transition-colors line-clamp-1"
                  >
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-white text-xs font-bold uppercase tracking-wider font-['Manrope'] mb-3">
              Contact Details
            </div>
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-[#d4b483] shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-500 block text-[10px]">Phone Number</span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="text-white hover:text-[#d4b483] font-semibold transition-colors"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 text-[#d4b483] shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-500 block text-[10px]">Official Email</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-white hover:text-[#d4b483] transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#d4b483] shrink-0 mt-0.5" />
                <div>
                  <span className="text-gray-500 block text-[10px]">Registered Office & Factory</span>
                  <p className="text-gray-300 leading-relaxed font-light">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-gray-500 text-[11px] gap-4">
          <p>© {new Date().getFullYear()} Master Cubicle. All Rights Reserved. Commercial Washroom & Partition Solutions.</p>

          <div className="flex items-center space-x-4">
            <span>Website: mastercubicle.in</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 ml-1 text-[#d4b483]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
