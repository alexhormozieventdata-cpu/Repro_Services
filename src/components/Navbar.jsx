import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, MapPin, Menu, X, ArrowRight, Clock, Award, ChevronDown } from 'lucide-react';

export default function Navbar({ currentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { 
      id: 'services', 
      label: 'Services', 
      isDropdown: true,
      subItems: [
        { id: 'printing', label: 'Printing Services' },
        { id: 'signage', label: 'Branding & Signage' },
        { id: 'advertising', label: 'Advertising Services' },
      ]
    },
    { id: 'portfolio', label: 'Our Portfolio' },
    { id: 'industries', label: 'Industries' },
    { id: 'faq', label: 'FAQ & Guides' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      {/* Top Header Contact Bar */}
      <div className="bg-brand-navy text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center space-x-6">
            <a 
              href="tel:9308762244" 
              className="flex items-center space-x-1.5 hover:text-brand-orange transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              <span>+91 9308762244</span>
            </a>
            <div className="hidden sm:flex items-center space-x-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-brand-blue" />
              <span>Nagina Market, Lala Thakur Lane, Patna - 800027</span>
            </div>
            <div className="hidden md:flex items-center space-x-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Mon - Sat: 10:00 AM - 8:00 PM</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center space-x-1 bg-brand-blue/20 text-brand-blue-light text-[11px] px-2.5 py-0.5 rounded-full font-semibold border border-brand-blue/30">
              <Award className="w-3 h-3 text-brand-orange mr-1" />
              Serving Bihar Since 2005
            </span>
            <a 
              href="https://www.indiamart.com/repro-services/profile.html?srsltid=AU7gw4UPChTc4Np8rpJy97XAqjsWFZDvqTxekrJ2jPTLzg9-BvAidqwh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden lg:inline-block text-[11px] text-slate-300 hover:text-brand-orange transition-colors underline decoration-dotted"
            >
              IndiaMART Verified Supplier
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={handleNavClick}
            className="flex items-center space-x-3 text-left focus:outline-none group py-1"
          >
            <img 
              src="/repro-logo.png" 
              alt="Repro Services Logo" 
              loading="lazy"
              decoding="async"
              className="h-14 w-auto object-contain transition-transform group-hover:scale-105 duration-300 drop-shadow-sm"
            />
            <div className="hidden sm:block">
              <span className="block text-xl font-extrabold text-brand-navy tracking-tight group-hover:text-brand-blue transition-colors font-outfit">
                REPRO <span className="text-brand-orange">SERVICES</span>
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-semibold">
                Printing • Branding • Advertising
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((item) => {
              if (item.isDropdown) {
                const isChildActive = ['printing', 'signage', 'advertising'].includes(currentPage);
                return (
                  <div 
                    key={item.id} 
                    className="relative"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <button 
                      type="button"
                      aria-expanded={servicesDropdown}
                      aria-label="Services menu"
                      className={`px-3 py-2 text-sm font-semibold rounded-lg inline-flex items-center space-x-1 transition-all ${
                        isChildActive 
                          ? 'text-brand-blue bg-blue-50/70 font-bold' 
                          : 'text-brand-navy hover:text-brand-blue hover:bg-slate-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-brand-blue' : 'text-slate-400'}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {servicesDropdown && (
                      <div className="absolute top-full left-0 w-64 pt-2 shadow-xl rounded-xl z-50">
                        <div className="bg-white border border-slate-100 rounded-xl p-2 shadow-lg ring-1 ring-black/5 animate-in fade-in slide-in-from-top-2 duration-150">
                          {item.subItems.map((sub) => (
                            <NavLink
                              key={sub.id}
                              to={`/${sub.id}`}
                              onClick={handleNavClick}
                              className={({ isActive }) => `w-full text-left px-3.5 py-2.5 rounded-lg text-sm transition-all flex items-center justify-between ${
                                isActive
                                  ? 'bg-brand-blue-light text-brand-blue font-bold'
                                  : 'text-slate-700 hover:bg-slate-50 hover:text-brand-blue'
                              }`}
                            >
                              <span>{sub.label}</span>
                              <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.id}
                  to={item.id === 'home' ? '/' : `/${item.id}`}
                  end={item.id === 'home'}
                  onClick={handleNavClick}
                  className={({ isActive: routeIsActive }) => `px-3 py-2 text-sm font-semibold rounded-lg transition-all ${
                    routeIsActive
                      ? 'text-brand-blue bg-blue-50/70 font-bold border-b-2 border-brand-blue rounded-b-none' 
                      : 'text-brand-navy hover:text-brand-blue hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              to="/booking"
              onClick={handleNavClick}
              aria-label="Go to booking form"
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-brand-orange/20 hover:shadow-lg hover:shadow-brand-orange/30 transition-all flex items-center space-x-2 group"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <Link
              to="/booking"
              onClick={handleNavClick}
              className="bg-brand-orange text-white text-xs px-3 py-1.5 rounded-lg font-bold sm:hidden"
            >
              Quote
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-brand-blue hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-2xl px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-1 gap-1">
            <NavLink
              to="/"
              end
              onClick={handleNavClick}
              className={({ isActive }) => `text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${isActive ? 'bg-brand-blue-light text-brand-blue font-bold' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              01. Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={handleNavClick}
              className={({ isActive }) => `text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${isActive ? 'bg-brand-blue-light text-brand-blue font-bold' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              02. About Us
            </NavLink>
            
            <div className="py-1 px-3">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Services</span>
            </div>
            <NavLink
              to="/printing"
              onClick={handleNavClick}
              className={({ isActive }) => `text-left pl-6 pr-3 py-2 rounded-lg text-sm ${isActive ? 'bg-brand-blue-light text-brand-blue font-bold' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              03. Printing Services
            </NavLink>
            <NavLink
              to="/signage"
              onClick={handleNavClick}
              className={({ isActive }) => `text-left pl-6 pr-3 py-2 rounded-lg text-sm ${isActive ? 'bg-brand-blue-light text-brand-blue font-bold' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              04. Branding & Signage
            </NavLink>
            <NavLink
              to="/advertising"
              onClick={handleNavClick}
              className={({ isActive }) => `text-left pl-6 pr-3 py-2 rounded-lg text-sm ${isActive ? 'bg-brand-blue-light text-brand-blue font-bold' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              05. Advertising Services
            </NavLink>

            <NavLink
              to="/portfolio"
              onClick={handleNavClick}
              className={({ isActive }) => `text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${isActive ? 'bg-brand-blue-light text-brand-blue font-bold' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              06. Our Portfolio
            </NavLink>
            <NavLink
              to="/industries"
              onClick={handleNavClick}
              className={({ isActive }) => `text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${isActive ? 'bg-brand-blue-light text-brand-blue font-bold' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              07. Industries We Serve
            </NavLink>
            <NavLink
              to="/booking"
              onClick={handleNavClick}
              className={({ isActive }) => `text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${isActive ? 'bg-brand-orange-light text-brand-orange font-bold' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              08. Booking / Get a Quote
            </NavLink>
            <NavLink
              to="/contact"
              onClick={handleNavClick}
              className={({ isActive }) => `text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${isActive ? 'bg-brand-blue-light text-brand-blue font-bold' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              09. Contact Us
            </NavLink>
            <NavLink
              to="/faq"
              onClick={handleNavClick}
              className={({ isActive }) => `text-left px-3 py-2.5 rounded-lg text-sm font-semibold ${isActive ? 'bg-brand-blue-light text-brand-blue font-bold' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              10. FAQ & Resources
            </NavLink>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a 
              href="tel:9308762244"
              className="w-full bg-brand-blue text-white py-2.5 rounded-xl font-bold text-center text-sm flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call: 9308762244</span>
            </a>
            <a 
              href="https://wa.me/919308762244" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 text-white py-2.5 rounded-xl font-bold text-center text-sm flex items-center justify-center space-x-2"
            >
              <span>WhatsApp Message</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
