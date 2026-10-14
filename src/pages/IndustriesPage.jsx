import React from 'react';
import { 
  Store, GraduationCap, HeartPulse, UtensilsCrossed, Building2, 
  CalendarDays, CheckCircle2, ArrowRight, ShieldCheck, Sparkles 
} from 'lucide-react';
import { industriesData } from '../data/servicesData';

export default function IndustriesPage({ setCurrentPage, setBookingPrefill }) {
  const iconMap = {
    Store,
    GraduationCap,
    HeartPulse,
    UtensilsCrossed,
    Building2,
    CalendarDays
  };

  const handleIndustrySelect = (ind) => {
    setBookingPrefill({
      serviceName: `${ind.name} Package`,
      category: 'Custom Requirements',
      specs: `Tailored for ${ind.name}`
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
            <span className="inline-block bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Specialized Sector Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-outfit text-white leading-tight">
              Industries We Serve Across Bihar
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Every industry demands unique materials, regulatory signages, and distinct customer touchpoints. Discover our proven industry packages tailored for maximum ROI.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Industries Breakdown Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.map((ind) => {
            const Icon = iconMap[ind.icon] || Store;
            return (
              <div 
                key={ind.id}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue-light text-brand-blue flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold text-brand-navy font-outfit mb-3 group-hover:text-brand-blue transition-colors">
                    {ind.name}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {ind.description}
                  </p>

                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                      Most Requested Collateral:
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {ind.popularItems.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => handleIndustrySelect(ind)}
                    className="w-full bg-slate-50 hover:bg-brand-orange text-brand-navy hover:text-white py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Request {ind.name} Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Industry Trust Section */}
      <section className="bg-brand-grey py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <span className="text-3xl sm:text-4xl font-black text-brand-blue font-outfit">500+</span>
              <h4 className="font-bold text-brand-navy text-sm">Retail Storefronts Branded</h4>
              <p className="text-xs text-slate-500">From high street boutiques to multi-brand supermarkets across Bihar</p>
            </div>
            <div className="space-y-2 border-y md:border-y-0 md:border-x border-slate-100 py-4 md:py-0">
              <span className="text-3xl sm:text-4xl font-black text-brand-orange font-outfit">100+</span>
              <h4 className="font-bold text-brand-navy text-sm">Colleges & Schools Supplied</h4>
              <p className="text-xs text-slate-500">Prospectuses, student ID cards, certificates & campus display boards</p>
            </div>
            <div className="space-y-2">
              <span className="text-3xl sm:text-4xl font-black text-brand-navy font-outfit">18 Years</span>
              <h4 className="font-bold text-brand-navy text-sm">Reliable Bihar Delivery</h4>
              <p className="text-xs text-slate-500">Continuous prompt support from our central Patna production workshop</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-navy to-brand-navy-dark text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">Bespoke Requirements</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-outfit">
              Don't see your specific sector listed?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We design custom solutions for government departments, NGO awareness campaigns, pharmaceutical launches, and multi-location retail chains.
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-2xl text-xs font-bold shadow-lg transition-all text-center shrink-0"
          >
            Speak with an Industry Specialist
          </button>
        </div>
      </section>

    </div>
  );
}
