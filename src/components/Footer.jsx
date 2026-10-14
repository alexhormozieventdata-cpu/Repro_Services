import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300 pt-16 pb-24 md:pb-12 border-t-4 border-brand-orange">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Company Profile & Logo */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-2xl backdrop-blur-sm border border-white/10 max-w-xs">
              <img 
                src="/repro-logo.png" 
                alt="Repro Services Logo" 
                loading="lazy"
                decoding="async"
                className="h-12 w-auto object-contain bg-white rounded-lg p-1"
              />
              <div>
                <span className="block text-lg font-bold text-white font-outfit leading-tight">
                  REPRO <span className="text-brand-orange">SERVICES</span>
                </span>
                <span className="block text-[11px] text-brand-blue font-semibold uppercase tracking-wider">
                  Established 2005
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Patna's trusted destination for precision printing, illuminated 3D signage, ACP storefront facades, and high-impact outdoor advertising campaigns across Bihar.
            </p>

            <div className="pt-2 flex flex-col space-y-2">
              <div className="flex items-center space-x-2 text-xs text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified IndiaMART Business Profile</span>
              </div>
              <a 
                href="https://www.indiamart.com/repro-services/profile.html?srsltid=AU7gw4UPChTc4Np8rpJy97XAqjsWFZDvqTxekrJ2jPTLzg9-BvAidqwh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-brand-blue hover:text-brand-orange inline-flex items-center space-x-1 underline transition-colors"
              >
                <span>View IndiaMART Profile Certificate</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (All 10 Pages) */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base font-outfit uppercase tracking-wider border-b border-slate-700 pb-2">
              Website Pages
            </h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-brand-orange transition-colors flex items-center space-x-1">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-orange transition-colors flex items-center space-x-1">
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/printing" className="hover:text-brand-orange transition-colors flex items-center space-x-1">
                  <span>Printing</span>
                </Link>
              </li>
              <li>
                <Link to="/signage" className="hover:text-brand-orange transition-colors flex items-center space-x-1">
                  <span>Signage</span>
                </Link>
              </li>
              <li>
                <Link to="/advertising" className="hover:text-brand-orange transition-colors flex items-center space-x-1">
                  <span>Advertising</span>
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-brand-orange transition-colors flex items-center space-x-1">
                  <span>Portfolio</span>
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-brand-orange transition-colors flex items-center space-x-1">
                  <span>Industries</span>
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-brand-orange font-semibold hover:underline flex items-center space-x-1">
                  <span>Get a Quote</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-orange transition-colors flex items-center space-x-1">
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-brand-orange transition-colors flex items-center space-x-1">
                  <span>FAQ & Specs</span>
                </Link>
              </li>
            </ul>

            <div className="pt-3">
              <Link
                to="/booking"
                className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white py-2 rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center space-x-1"
              >
                <span>Request Custom Estimate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 3: Specialized Capabilities */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base font-outfit uppercase tracking-wider border-b border-slate-700 pb-2">
              Our Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                <span>3D LED Acrylic Letters & Halo Signs</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                <span>ACP Elevation & Shop Front Branding</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                <span>Luxury Visiting Cards (Velvet & Foil)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                <span>Multi-fold Brochures & Catalogues</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                <span>Prime Outdoor Billboard Hoardings</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                <span>Exhibition Stalls & Promo Canopies</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                <span>Commercial Vehicle Fleet Branding</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Patna Address */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-base font-outfit uppercase tracking-wider border-b border-slate-700 pb-2">
              Patna Head Office
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 leading-relaxed">
                  Nagina Market, Lala Thakur Lane, New Jagannathpura Road, Patna, Bihar – 800027
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" />
                <a 
                  href="tel:9308762244" 
                  className="text-xs text-white font-semibold hover:text-brand-orange transition-colors"
                >
                  +91 9308762244
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                <a 
                  href="mailto:contact@reproservices.in" 
                  className="text-xs text-slate-300 hover:text-brand-orange transition-colors"
                >
                  contact@reproservices.in
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300">
                  Mon – Sat: 10:00 AM – 8:00 PM
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href="https://wa.me/919308762244"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-emerald-600/30 hover:bg-emerald-600/50 text-emerald-300 border border-emerald-500/40 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
              >
                <span>Chat with Senior Estimator</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Repro Services. All Rights Reserved. Patna, Bihar, India.</p>
          <div className="flex items-center space-x-6">
            <span className="text-slate-400">Print. Brand. Advertise. Stand Out.</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
            <span>Registered MSME Enterprise</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
