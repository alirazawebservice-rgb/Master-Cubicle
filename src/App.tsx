import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustIntro } from './components/TrustIntro';
import { ProductSection } from './components/ProductSection';
import { AdvantagesSection } from './components/AdvantagesSection';
import { ApplicationsSection } from './components/ApplicationsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ClientsSection } from './components/ClientsSection';
import { GallerySection } from './components/GallerySection';
import { GalleryPage } from './components/GalleryPage';
import { QuoteContactSection } from './components/QuoteContactSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuickQuoteModal } from './components/QuickQuoteModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ProductSubcategory } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'gallery'>(() => {
    if (typeof window !== 'undefined' && window.location.hash.startsWith('#gallery-page')) {
      return 'gallery';
    }
    return 'home';
  });
  const [galleryCategory, setGalleryCategory] = useState<any>('All');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string | undefined>(undefined);
  const [selectedSubcategory, setSelectedSubcategory] = useState<ProductSubcategory | null>(null);

  // Sync hash changes with view state
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash.startsWith('#gallery-page')) {
        setCurrentView('gallery');
      } else if (currentView === 'gallery' && !window.location.hash.startsWith('#gallery-page')) {
        setCurrentView('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentView]);

  const handleNavigateToGallery = (category: string = 'All') => {
    setGalleryCategory(category);
    setCurrentView('gallery');
    window.location.hash = '#gallery-page';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (productName?: string) => {
    setSelectedProductForQuote(productName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
    setSelectedProductForQuote(undefined);
  };

  const handleSelectSubcategory = (sub: ProductSubcategory) => {
    // If currently on gallery page and user selects subcategory from mega menu, navigate to home
    if (currentView !== 'home') {
      setCurrentView('home');
      window.location.hash = '';
    }
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
        currentView={currentView}
        onNavigateToGalleryPage={() => handleNavigateToGallery('All')}
        onNavigateHome={handleBackToHome}
      />

      <main className="flex-grow">
        {currentView === 'gallery' ? (
          /* Dedicated Standalone Gallery Page */
          <GalleryPage
            onBackToHome={handleBackToHome}
            onOpenQuoteModal={handleOpenQuote}
            initialCategory={galleryCategory}
          />
        ) : (
          /* Standard Home View with 2-Line Curated Preview */
          <>
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

            {/* 9. Visual Gallery with Limited 2-Line Preview & Full Page Link */}
            <GallerySection onNavigateToGalleryPage={handleNavigateToGallery} />

            {/* 10. Quote / Contact Conversion Section */}
            <QuoteContactSection preselectedProduct={selectedProductForQuote} />
          </>
        )}
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
