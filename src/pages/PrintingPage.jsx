import React from 'react';
import { 
  Printer, Check, ArrowRight, Sparkles, Layers, ShieldCheck, 
  HelpCircle, FileText, BadgePercent
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { printingServices } from '../data/servicesData';
import { printingGuides } from '../data/faqData';

export default function PrintingPage({ setCurrentPage, setBookingPrefill }) {
  const handleBookService = (service) => {
    setBookingPrefill({
      serviceName: service.title,
      category: 'Printing',
      specs: service.specs ? service.specs[0] : '',
      productType: service.id === 'business-cards' ? 'cards' : 'brochures'
    });
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. Page Header */}
      <section className="bg-brand-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-blue/80 opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Commercial & Digital Printing
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-outfit text-white leading-tight">
              High-Precision Printing Solutions in Patna
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              From executive 350 GSM velvet-touch visiting cards to multi-thousand catalogue runs, our offset and digital presses ensure micron-level color accuracy and clean finishes.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Complete Catalog
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy font-outfit mt-2">
              Explore Our Printing Products
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Select any product to customize quantity, paper stock, and finishing options.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Pre-Press Proofs Available Before Bulk Printing</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {printingServices.map((service) => (
            <ServiceCard key={service.id} service={service} onBook={handleBookService} />
          ))}
        </div>
      </section>

      {/* 3. Paper GSM & Finishing Educational Guide */}
      <section className="bg-brand-grey py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Technical Guide
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy font-outfit mt-2">
              Choosing the Right Paper & Finish
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Understanding GSM weights and special coatings helps you strike the perfect balance between luxury feel and commercial cost.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {printingGuides.map((guide, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card">
                <h3 className="text-xl font-bold text-brand-navy font-outfit mb-2 flex items-center space-x-2">
                  <Layers className="w-5 h-5 text-brand-blue" />
                  <span>{guide.title}</span>
                </h3>
                <p className="text-xs text-slate-500 mb-6">{guide.description}</p>

                <div className="space-y-4">
                  {guide.standards.map((item, sIdx) => (
                    <div key={sIdx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="block text-xs font-bold text-brand-navy font-outfit">
                        {item.gsm}
                      </span>
                      <span className="block text-xs text-slate-600 mt-1">
                        {item.use}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Custom Printing Requirements CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-blue to-blue-700 text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
              Custom Quantities & Non-Standard Sizes
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-outfit">
              Have a special print format or large commercial volume?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
              We specialize in custom die-cut shapes, specialized imported textured boards, and large batch runs for institutional tenders in Bihar.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => {
                setBookingPrefill({ category: 'Printing', serviceName: 'Custom Printing Requirement' });
                setCurrentPage('booking');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-3.5 rounded-xl text-xs font-bold shadow-lg transition-all text-center"
            >
              Request Custom Print Quote
            </button>
            <a
              href="https://wa.me/919308762244?text=Hi%20Repro%20Services%2C%20I%20have%20a%20custom%20printing%20requirement."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-xl text-xs font-semibold border border-white/20 transition-all text-center"
            >
              Discuss on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
