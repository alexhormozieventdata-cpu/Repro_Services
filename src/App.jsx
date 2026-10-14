import React, { useState, useEffect } from 'react';
import { HashRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';
import PortfolioModal from './components/PortfolioModal';
import SeoMeta from './components/SeoMeta';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PrintingPage from './pages/PrintingPage';
import SignagePage from './pages/SignagePage';
import AdvertisingPage from './pages/AdvertisingPage';
import PortfolioPage from './pages/PortfolioPage';
import IndustriesPage from './pages/IndustriesPage';
import BookingPage from './pages/BookingPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);
  const [bookingPrefill, setBookingPrefill] = useState(null);

  const validPages = [
    'home', 'about', 'printing', 'signage', 'advertising',
    'portfolio', 'industries', 'booking', 'contact', 'faq'
  ];

  const currentPage = (() => {
    const path = location.pathname.replace('/', '');
    return validPages.includes(path) ? path : 'home';
  })();

  const setCurrentPage = (pageId) => {
    const route = pageId === 'home' ? '/' : `/${pageId}`;
    if (location.pathname !== route) {
      navigate(route);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleEnquireFromPortfolio = (project) => {
    setBookingPrefill({
      serviceName: project.title,
      category: project.category,
      specs: project.materials,
    });
    setCurrentPage('booking');
  };

  const pageKey = currentPage || 'home';

  return (
    <div className="min-h-screen flex flex-col bg-[#F3F6FA] text-[#263445]">
      <SeoMeta page={pageKey} />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:text-brand-navy focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Skip to content
      </a>

      <Navbar currentPage={currentPage} />

      <main id="main-content" className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                setCurrentPage={setCurrentPage}
                setSelectedProject={setSelectedProject}
                setBookingPrefill={setBookingPrefill}
              />
            }
          />
          <Route path="/about" element={<AboutPage setCurrentPage={setCurrentPage} />} />
          <Route
            path="/printing"
            element={
              <PrintingPage
                setCurrentPage={setCurrentPage}
                setBookingPrefill={setBookingPrefill}
              />
            }
          />
          <Route
            path="/signage"
            element={
              <SignagePage
                setCurrentPage={setCurrentPage}
                setBookingPrefill={setBookingPrefill}
              />
            }
          />
          <Route
            path="/advertising"
            element={
              <AdvertisingPage
                setCurrentPage={setCurrentPage}
                setBookingPrefill={setBookingPrefill}
              />
            }
          />
          <Route
            path="/portfolio"
            element={
              <PortfolioPage
                setSelectedProject={setSelectedProject}
                setCurrentPage={setCurrentPage}
                setBookingPrefill={setBookingPrefill}
              />
            }
          />
          <Route
            path="/industries"
            element={
              <IndustriesPage
                setCurrentPage={setCurrentPage}
                setBookingPrefill={setBookingPrefill}
              />
            }
          />
          <Route
            path="/booking"
            element={
              <BookingPage
                bookingPrefill={bookingPrefill}
                setBookingPrefill={setBookingPrefill}
              />
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage setCurrentPage={setCurrentPage} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <MobileStickyBar setCurrentPage={setCurrentPage} />

      {selectedProject && (
        <PortfolioModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onEnquire={handleEnquireFromPortfolio}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}
