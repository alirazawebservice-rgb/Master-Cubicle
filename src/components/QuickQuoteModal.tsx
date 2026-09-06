import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Phone } from 'lucide-react';
import { COMPANY_INFO, PRODUCT_CATEGORIES, TOILET_CUBICLE_SUBCATEGORIES } from '../data/websiteData';

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

export const QuickQuoteModal: React.FC<QuickQuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: preselectedProduct || 'Toilet Cubicles & Partition',
    cubicleQuantity: '6-20 Cubicles',
    projectLocation: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  useEffect(() => {
    if (preselectedProduct) {
      setFormData((prev) => ({ ...prev, subject: preselectedProduct }));
    }
  }, [preselectedProduct]);

  // Close modal on Escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = 'MC-QUOTE-' + Math.floor(100000 + Math.random() * 900000);
    setRefId(generatedRef);
    setIsSubmitted(true);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200 cursor-pointer"
      role="dialog"
      aria-modal="true"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#11141a] border border-white/20 rounded-sm shadow-2xl overflow-hidden my-4 sm:my-6 cursor-default max-h-[92vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10 bg-[#0c0e12] shrink-0">
          <div className="flex items-center space-x-2 truncate pr-2">
            <span className="w-2 h-2 rounded-full bg-[#d4b483] shrink-0"></span>
            <span className="text-xs uppercase tracking-widest text-[#d4b483] font-mono font-semibold truncate">
              Fast Architectural Quote Request
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close quote modal"
            className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#d4b483]/20 border border-[#d4b483] flex items-center justify-center mx-auto text-[#d4b483]">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white font-['Manrope']">
                Quote Submitted Successfully
              </h3>
              <div className="p-3 bg-[#181c25] border border-white/10 rounded text-xs text-left max-w-sm mx-auto space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-gray-400">Reference:</span>
                  <span className="text-[#d4b483] font-mono font-bold">{refId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">System:</span>
                  <span className="text-white">{formData.subject}</span>
                </div>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed max-w-sm mx-auto">
                Our estimation desk is preparing your BOQ proposal. We will contact you at <strong>{formData.phone}</strong> shortly.
              </p>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#d4b483] text-[#0b0d11] font-bold text-xs uppercase tracking-wider rounded"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-xs text-gray-300 mb-2">
                Enter your project specifications below. Our technical estimator responds with full BOQ and CAD specifications within 24 hours.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quick-name" className="block text-[11px] font-semibold uppercase tracking-wider text-gray-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="quick-name"
                    type="text"
                    required
                    placeholder="e.g. Anand Patel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#181c25] border border-white/10 rounded px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#d4b483]"
                  />
                </div>

                <div>
                  <label htmlFor="quick-email" className="block text-[11px] font-semibold uppercase tracking-wider text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="quick-email"
                    type="email"
                    required
                    placeholder="e.g. anand@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#181c25] border border-white/10 rounded px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#d4b483]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quick-phone" className="block text-[11px] font-semibold uppercase tracking-wider text-gray-300 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="quick-phone"
                    type="tel"
                    required
                    placeholder="+91 99303 77451"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#181c25] border border-white/10 rounded px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#d4b483]"
                  />
                </div>

                <div>
                  <label htmlFor="quick-location" className="block text-[11px] font-semibold uppercase tracking-wider text-gray-300 mb-1">
                    City / Project Location *
                  </label>
                  <input
                    id="quick-location"
                    type="text"
                    required
                    placeholder="e.g. Navi Mumbai, Bangalore, Delhi"
                    value={formData.projectLocation}
                    onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                    className="w-full bg-[#181c25] border border-white/10 rounded px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#d4b483]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quick-subject" className="block text-[11px] font-semibold uppercase tracking-wider text-gray-300 mb-1">
                    System Required *
                  </label>
                  <select
                    id="quick-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#181c25] border border-white/10 rounded px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4b483]"
                  >
                    <optgroup label="Main Categories">
                      {PRODUCT_CATEGORIES.map((c) => (
                        <option key={c.id} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Cubicle Series">
                      {TOILET_CUBICLE_SUBCATEGORIES.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label htmlFor="quick-quantity" className="block text-[11px] font-semibold uppercase tracking-wider text-gray-300 mb-1">
                    Estimated Cubicles / Stalls
                  </label>
                  <select
                    id="quick-quantity"
                    value={formData.cubicleQuantity}
                    onChange={(e) => setFormData({ ...formData, cubicleQuantity: e.target.value })}
                    className="w-full bg-[#181c25] border border-white/10 rounded px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#d4b483]"
                  >
                    <option value="1-5 Cubicles">1 - 5 Cubicles</option>
                    <option value="6-20 Cubicles">6 - 20 Cubicles</option>
                    <option value="21-50 Cubicles">21 - 50 Cubicles</option>
                    <option value="50+ Cubicles">50+ Cubicles (Commercial Site)</option>
                    <option value="Urinal Screens / Accessories">Urinal Screens / Accessories</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="quick-notes" className="block text-[11px] font-semibold uppercase tracking-wider text-gray-300 mb-1">
                  Notes / Technical Preferences
                </label>
                <textarea
                  id="quick-notes"
                  rows={3}
                  placeholder="Thickness (12mm/18mm), hardware preference (SS 304/Nylon/Aluminium), or special dimensions."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#181c25] border border-white/10 rounded px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#d4b483]"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#d4b483] hover:bg-[#e2cca8] text-[#0b0d11] font-bold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Instant Architectural Estimate</span>
                </button>
              </div>

              <div className="pt-1 flex items-center justify-between text-[10px] text-gray-400">
                <span className="flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#d4b483] mr-1" />
                  Confidential Commercial Estimation
                </span>
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-[#d4b483] hover:underline flex items-center">
                  <Phone className="w-3 h-3 mr-1" />
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
