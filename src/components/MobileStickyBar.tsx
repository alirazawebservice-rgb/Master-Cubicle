import React from 'react';
import { Phone, MessageSquare, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

interface MobileStickyBarProps {
  onOpenQuoteModal: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0c0e13]/95 backdrop-blur-md border-t border-white/10 px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl">
      {/* Call Button */}
      <a
        href={`tel:${COMPANY_INFO.phoneRaw}`}
        className="flex-1 py-3 px-3 bg-[#171b24] active:bg-[#202531] border border-white/10 rounded text-xs font-semibold text-white flex items-center justify-center space-x-2 transition-colors min-h-[44px]"
      >
        <Phone className="w-4 h-4 text-[#d4b483]" />
        <span>Call Now</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Master%20Cubicle,%20I%20would%20like%20to%20inquire%20about%20washroom%20cubicles.`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="py-3 px-3.5 bg-[#25D366]/20 active:bg-[#25D366] text-[#4ade80] active:text-[#0b0d11] border border-[#25D366]/30 rounded flex items-center justify-center min-h-[44px]"
      >
        <MessageSquare className="w-4 h-4" />
      </a>

      {/* Primary Quote CTA Button */}
      <button
        onClick={onOpenQuoteModal}
        className="flex-[1.4] py-3 px-4 bg-[#d4b483] active:bg-[#e2cca8] text-[#0b0d11] font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center space-x-1.5 shadow-md min-h-[44px]"
      >
        <Send className="w-3.5 h-3.5" />
        <span>Get a Quote</span>
      </button>
    </div>
  );
};
