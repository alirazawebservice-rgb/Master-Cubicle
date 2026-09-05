import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustIntro } from './components/TrustIntro';
import { ProductSection } from './components/ProductSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { ApplicationsSection } from './components/ApplicationsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ClientsSection } from './components/ClientsSection';
import { GallerySection } from './components/GallerySection';
import { QuoteContactSection } from './components/QuoteContactSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuickQuoteModal } from './components/QuickQuoteModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ProductSubcategory } from './types';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string | undefined>(undefined);
  const [selectedSubcategory, setSelectedSubcategory] = useState<ProductSubcategory | null>(null);

  const handleOpenQuote = (productName?: string) => {
    setSelectedProductForQuote(productName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
    setSelectedProductForQuote(undefined);
  };

  const handleSelectSubcategory = (sub: ProductSubcategory) => {
    setSelectedSubcategory(sub);
  };

  const handleCloseSubcategoryModal = () => {
    setSelectedSubcategory(null);
  };

  const handleRequestQuoteFromProduct = (productName: string) => {
    setSelectedProductForQuote(productName);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0b0d11] text-[#e5e7eb] flex flex-col selection:bg-[#c5a880]/30 selection:text-white pb-14 lg:pb-0">
      {/* 1. Architectural Sticky Header / Navigation */}
      <Navbar
        onOpenQuoteModal={handleOpenQuote}
        onSelectProductSubcategory={handleSelectSubcategory}
      />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuote()} />

        {/* 3. Trust / Company Introduction */}
        <TrustIntro onOpenQuoteModal={() => handleOpenQuote()} />

        {/* 4. Product Categories & 15 Subcategories */}
        <ProductSection
          onSelectSubcategory={handleSelectSubcategory}
          onRequestQuote={handleOpenQuote}
        />

        {/* 5. Master Cubicle Advantages (Technical Feature System) */}
        <AdvantagesSection onOpenQuoteModal={() => handleOpenQuote()} />

        {/* 6. Applications / Industries */}
        <ApplicationsSection onRequestQuoteForSector={handleOpenQuote} />

        {/* 7. Projects Portfolio */}
        <ProjectsSection onOpenQuoteModal={() => handleOpenQuote()} />

        {/* 8. Clients Logo Wall */}
        <ClientsSection />

        {/* 9. Visual Gallery with Lightbox */}
        <GallerySection />

        {/* 10. Quote / Contact Conversion Section */}
        <QuoteContactSection preselectedProduct={selectedProductForQuote} />
      </main>

      {/* 11. Sophisticated Dark Footer */}
      <Footer />

      {/* Product Detail Specifications Modal */}
      <ProductDetailModal
        product={selectedSubcategory}
        onClose={handleCloseSubcategoryModal}
        onRequestQuote={handleRequestQuoteFromProduct}
      />

      {/* Quick Quote Request Modal */}
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuote}
        preselectedProduct={selectedProductForQuote}
      />

      {/* Mobile Sticky Bar for quick conversions */}
      <MobileStickyBar onOpenQuoteModal={() => handleOpenQuote()} />
    </div>
  );
}
