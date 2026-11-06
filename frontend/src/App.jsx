import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import MobileDrawer from './components/MobileDrawer';
import SubNav from './components/SubNav';
import Footer from './components/Footer';
import BlueprintModal from './components/BlueprintModal';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HomeDesignsPage from './pages/HomeDesignsPage';
import InteriorDesignPage from './pages/InteriorDesignPage';
import ExteriorDesignPage from './pages/ExteriorDesignPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface">
      <ScrollToTop />
      
      {/* Top Navbar */}
      <Navbar onOpenDrawer={() => setDrawerOpen(true)} />

      {/* Slide-out Navigation Drawer for mobile/tablet */}
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />

      {/* Main Content Area */}
      <div className="pt-16 flex-1 flex flex-col">
        {/* Sticky Sub-Navigation */}
        <SubNav />

        {/* Page Views via React Router */}
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/designs" element={<HomeDesignsPage />} />
            <Route path="/interiors" element={<InteriorDesignPage />} />
            <Route path="/exteriors" element={<ExteriorDesignPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>

      {/* Global Architectural Blueprint Modal */}
      <BlueprintModal />

      {/* Comprehensive Architectural Studio Footer */}
      <Footer />
    </div>
  );
}

