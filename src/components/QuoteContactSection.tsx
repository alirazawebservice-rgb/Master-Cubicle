import React, { useState } from 'react';
import { COMPANY_INFO, PRODUCT_CATEGORIES, TOILET_CUBICLE_SUBCATEGORIES } from '../data/websiteData';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

interface QuoteContactSectionProps {
  preselectedProduct?: string;
}

export const QuoteContactSection: React.FC<QuoteContactSectionProps> = ({ preselectedProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: preselectedProduct || 'Toilet Cubicles & Partition',
    cubicleQuantity: '6-20 Cubicles',
    projectLocation: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = 'MC-EST-' + Math.floor(100000 + Math.random() * 900000);
    setRefId(generatedRef);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 bg-[#0a0c10] text-white border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="flex items-center space-x-3 text-xs uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
            <span className="w-8 h-px bg-[#c5a880]"></span>
            <span>Commercial Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-['Manrope']">
            Request an Architectural Quote
          </h2>
          <p className="text-gray-400 text-base sm:text-lg font-light leading-relaxed">
            Submit your layout drawings, cubicle count, or system requirements. Our estimation team prepares technical BOQs and elevations within 24 hours.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Factory Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#c5a880]">
                Direct Sales & Estimation
              </span>
              <h3 className="text-2xl font-bold font-['Manrope'] text-white">
                Master Cubicle Systems
              </h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">
                Manufacturer and turnkey contractor of solid phenolic partitions, changing cubicles, and commercial washroom hardware.
              </p>
            </div>

            <div className="space-y-6 text-sm border-t border-white/10 pt-6">
              {/* Phone */}
              <div className="space-y-1">
                <span className="text-xs text-gray-500 uppercase font-mono tracking-wider block">
                  Direct Line (Call & WhatsApp)
                </span>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="text-lg font-bold text-white hover:text-[#c5a880] transition-colors block"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <span className="text-xs text-gray-500 uppercase font-mono tracking-wider block">
                  Commercial BOQ Submissions
                </span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-base text-gray-200 hover:text-[#c5a880] transition-colors block"
                >
                  {COMPANY_INFO.email}
                </a>
                <span className="text-xs text-gray-500 block">Alt: {COMPANY_INFO.altEmail}</span>
              </div>

              {/* Factory Address */}
              <div className="space-y-1">
                <span className="text-xs text-gray-500 uppercase font-mono tracking-wider block">
                  Registered Works & Office
                </span>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  {COMPANY_INFO.address}
                </p>
                <p className="text-xs text-gray-500 font-light mt-1">
                  Branch: {COMPANY_INFO.secondaryAddress}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Master%20Cubicle,%20I%20would%20like%20to%20request%20a%20commercial%20quote%20for%20washroom%20cubicles.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.15em] font-bold text-[#4ade80] hover:text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Directly on WhatsApp →</span>
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Form (Generous whitespace, clean inputs, no card outlines) */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="py-16 space-y-6 text-center border-t border-b border-white/10">
                <div className="w-16 h-16 rounded-full bg-[#c5a880]/20 text-[#c5a880] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-['Manrope']">
                  Estimate Request Received
                </h3>
                <p className="text-sm text-gray-400 max-w-md mx-auto font-light leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Reference ID: <span className="text-[#c5a880] font-mono">{refId}</span>. Our technical estimator is preparing your BOQ proposal.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs uppercase tracking-widest text-[#c5a880] border-b border-[#c5a880] pb-1"
                >
                  Submit Another Project Scope
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Anand Patel"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#12161f] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. anand@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#12161f] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 99303 77451"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#12161f] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                      Project Location / City *
                    </label>
                    <input
                      type="text"
                      name="projectLocation"
                      required
                      placeholder="e.g. Mumbai, Pune, Bangalore"
                      value={formData.projectLocation}
                      onChange={handleChange}
                      className="w-full bg-[#12161f] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c5a880]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                      System Required *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-[#12161f] border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#c5a880]"
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
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                      Estimated Stalls / Scope
                    </label>
                    <select
                      name="cubicleQuantity"
                      value={formData.cubicleQuantity}
                      onChange={handleChange}
                      className="w-full bg-[#12161f] border border-white/10 px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#c5a880]"
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
                  <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                    Architectural Notes / Specifications
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Provide details on ceiling height, depth, preferred hardware (SS 304 / Nylon), color preference, or site schedule."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#12161f] border border-white/10 px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#c5a880]"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-8 bg-[#c5a880] hover:bg-[#d8c19f] text-[#0a0c10] font-bold text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Request a Quote</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
