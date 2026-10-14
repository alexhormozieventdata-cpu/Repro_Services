import React from 'react';
import { 
  Sparkles, CheckCircle2, ShieldCheck, Wrench, Layers, 
  ArrowRight, Phone, Eye, Sun, Zap
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { brandingSignageServices } from '../data/servicesData';

export default function SignagePage({ setCurrentPage, setBookingPrefill }) {
  const handleBookService = (service) => {
    setBookingPrefill({
      serviceName: service.title,
      category: 'Branding & Signage',
      specs: service.specs ? service.specs[0] : '',
      productType: 'signage'
    });
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. Page Header */}
      <section className="bg-brand-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-orange/80 opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Architectural & Retail Signage
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-outfit text-white leading-tight">
              3D LED Signboards & Brand Elevations in Bihar
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Transform your storefront with laser-cut 3D acrylic channel letters, weatherproof ACP facade cladding, vibrant custom neon flex, and illuminated showroom graphics.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Signage Solutions
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy font-outfit mt-2">
              Engineered for 24/7 Day & Night Visibility
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Select your preferred signage format to customize dimensions and illumination specifications.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
            <ShieldCheck className="w-4 h-4" />
            <span>2-Year Replacement Warranty on Samsung LED Modules</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandingSignageServices.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onBook={handleBookService} 
            />
          ))}
        </div>
      </section>

      {/* 3. Signage Illumination & Material Breakdown */}
      <section className="bg-brand-grey py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Premium Standards
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy font-outfit mt-2">
              Our 4 Pillars of Signage Durability
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Why our storefront boards withstand Bihar's harsh monsoons, summer heat, and dust.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'High-Grade Cast Acrylic Face',
                desc: 'We use 100% virgin cast acrylic that will not yellow, crack, or fade under relentless sunlight.',
                icon: Sun
              },
              {
                title: 'IP67 Waterproof LED Modules',
                desc: 'Certified Samsung or Osram injection LED modules with IP67 silicon sealing for complete rain protection.',
                icon: Zap
              },
              {
                title: 'Heavy GI Sub-Frame Fabrication',
                desc: 'Galvanized iron hollow square pipe structures coated with anti-corrosion primer for long structural life.',
                icon: Wrench
              },
              {
                title: 'Aludecor / Alstrong ACP Panels',
                desc: '3mm and 4mm architectural grade aluminum composite panels routed with high-speed CNC cutters.',
                icon: Layers
              }
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-card">
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange-light text-brand-orange flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-brand-navy font-outfit mb-2">{pillar.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. On-site Installation Guarantee CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">Turnkey Execution</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy font-outfit">
              Need on-site measurement & installation in Patna?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our technicians visit your site to take accurate laser measurements, evaluate electrical points, and recommend the best letter height for maximum roadside visibility.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => {
                setBookingPrefill({ category: 'Branding & Signage', serviceName: 'Site Survey & 3D Signage Estimate' });
                setCurrentPage('booking');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-3.5 rounded-xl text-xs font-bold shadow-md transition-all text-center"
            >
              Book Site Survey
            </button>
            <a
              href="tel:9308762244"
              className="bg-brand-navy hover:bg-slate-800 text-white px-6 py-3.5 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center space-x-1.5"
            >
              <Phone className="w-4 h-4" />
              <span>Call 9308762244</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
