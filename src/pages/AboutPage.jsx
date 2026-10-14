import React from 'react';
import { 
  Award, ShieldCheck, CheckCircle2, Factory, Users, 
  MapPin, Phone, Mail, ArrowRight, Target, Compass, HeartHandshake,
  Layers, Wrench, Sparkles
} from 'lucide-react';

export default function AboutPage({ setCurrentPage }) {
  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. Page Header Banner */}
      <section className="bg-brand-navy text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-blue/80 opacity-90"></div>
        <div className="absolute -bottom-10 right-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              About Repro Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-outfit text-white leading-tight">
              Crafting Enduring Brands & Quality Print in Bihar Since 2005
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Repro Services focuses on comprehensive printing, branding, and advertising solutions for businesses, organizations, and institutions across Patna and the state of Bihar.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Company Story & Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-outfit">
              18+ Years of Dedication to Commercial Print & Visual Media
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Whether you are preparing business stationery, promotional flyers, illuminated shop signage, or an extensive outdoor hoarding campaign, our approach begins with understanding your unique commercial objectives and identifying an optimal material solution.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Founded in 2005 in Patna, Repro Services has evolved from a specialized commercial printing setup into a full-scale multi-disciplinary signage fabrication and advertising agency. Over nearly two decades, we have partnered with hundreds of retail showrooms, educational institutions, hospitals, and real estate developers across Bihar.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <span className="block text-2xl font-extrabold text-brand-blue font-outfit">2005</span>
                <span className="text-xs text-slate-500 font-semibold">Year Established</span>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <span className="block text-2xl font-extrabold text-brand-orange font-outfit">Patna, Bihar</span>
                <span className="text-xs text-slate-500 font-semibold">Registered Headquarters</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl space-y-6">
              <div className="flex items-center space-x-4 border-b border-slate-100 pb-6">
                <img 
                  src="/repro-logo.png" 
                  alt="Repro Services Logo" 
                  loading="lazy"
                  decoding="async"
                  className="h-20 w-auto object-contain"
                />
                <div>
                  <h3 className="font-bold text-xl text-brand-navy font-outfit">Repro Services</h3>
                  <span className="text-xs text-brand-orange font-bold uppercase tracking-wider block">
                    Printing • Branding • Advertising
                  </span>
                  <span className="text-xs text-slate-400">Patna – 800027, Bihar</span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Verified IndiaMART Supplier:</strong> Recognized for trustworthy business practices and consistent quality delivery.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Full In-House Workshop:</strong> Complete control over printing, acrylic laser cutting, channel bending, and finishing.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Commercial Warranty:</strong> All LED lighting modules and ACP substrates include standard replacement warranties.</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.indiamart.com/repro-services/profile.html?srsltid=AU7gw4UPChTc4Np8rpJy97XAqjsWFZDvqTxekrJ2jPTLzg9-BvAidqwh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-slate-50 hover:bg-slate-100 text-brand-navy border border-slate-200 py-3 rounded-xl text-xs font-bold text-center block transition-all"
                >
                  Verify IndiaMART Profile Credentials
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="bg-brand-grey py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy font-outfit mb-3">Our Mission</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To empower enterprises, small retailers, and institutions across Bihar with high-precision print production, eye-catching architectural signage, and impactful advertising solutions that communicate clearly, build strong brand equity, and drive verifiable customer footfall.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy font-outfit mb-3">Our Vision</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                To be eastern India’s most reliable and technologically advanced brand engineering partner, bridging the gap between innovative creative concepts and flawless physical execution with sustainable materials and timely delivery.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Customer Project Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-outfit mt-3">
            From Your Brief to a Finished Project
          </h2>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            A clear, practical process helps you choose the right print or signage solution before production begins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              step: '01',
              title: 'Tell us what you need',
              description: 'Share your idea, quantity, dimensions, location, and timeline. We work with businesses, retailers, and institutions across Bihar.',
              icon: Users,
            },
            {
              step: '02',
              title: 'Choose materials and finish',
              description: 'Discuss suitable paper, display materials, signage finishes, and production details with our team before confirming the work.',
              icon: Layers,
            },
            {
              step: '03',
              title: 'Approve and produce',
              description: 'Confirm the project specifications and estimate, then our Patna team prepares the print, signage, or advertising work.',
              icon: CheckCircle2,
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.step} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-card">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-brand-blue-light text-brand-blue flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-extrabold text-brand-orange font-outfit">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-brand-navy font-outfit mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* 5. Production Workshop & Infrastructure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            Technical Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-outfit mt-2">
            In-House Machinery & Infrastructure
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            We invest continuously in top-tier manufacturing equipment to guarantee edge sharpness and color accuracy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Multi-Color Offset Printing',
              desc: 'High-speed automated presses for high-volume brochures, catalogues, flyers, and corporate stationery with micron-level color registration.',
              icon: Factory
            },
            {
              title: 'CNC & Acrylic Laser Routers',
              desc: 'Computer-numerical controlled laser routing tables providing razor-sharp precision cuts for 3D acrylic letters, ACP panels, and MDF woodwork.',
              icon: Wrench
            },
            {
              title: 'Solvent & Eco-Solvent Plotters',
              desc: 'Large format roll printers delivering weatherproof outdoor star flex, backlit banners, roll-up standees, and vinyl stickers with UV inks.',
              icon: Layers
            },
            {
              title: 'Channel Letter Bending Machines',
              desc: 'Automated aluminum and stainless steel profile bending machines engineered for perfect curves on 3D LED storefront letters.',
              icon: Sparkles
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-card hover:shadow-card-hover transition-all">
                <div className="w-10 h-10 rounded-xl bg-brand-blue-light text-brand-blue flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-brand-navy font-outfit mb-2">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Verified Business Address CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">Direct Collaboration</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy font-outfit">
              Visit Our Patna Workshop & Sample Room
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              Inspect paper GSM swatches, metallic foil cards, neon color palettes, and 3D acrylic mockups before confirming your production run.
            </p>
            <div className="flex items-center space-x-2 text-xs font-semibold text-brand-navy pt-1">
              <MapPin className="w-4 h-4 text-brand-orange" />
              <span>Nagina Market, Lala Thakur Lane, New Jagannathpura Road, Patna – 800027</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => {
                setCurrentPage('booking');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-3.5 rounded-xl text-xs font-bold shadow-md transition-all text-center"
            >
              Request Consultation
            </button>
            <a
              href="tel:9308762244"
              className="bg-brand-navy hover:bg-slate-800 text-white px-6 py-3.5 rounded-xl text-xs font-bold transition-all text-center"
            >
              Call +91 9308762244
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
