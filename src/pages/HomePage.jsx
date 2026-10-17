import React from 'react';
import { 
  ArrowRight, ShieldCheck, CheckCircle2, Star, Award, 
  Printer, Sparkles, Megaphone, Clock, MapPin, Phone,
  TrendingUp, Users, CheckCheck
} from 'lucide-react';
import SliderMain from '../components/SliderMain';
import ServiceCategory from '../components/ServiceCategory';
import ShopByCategory from '../components/ShopByCategory';
import QuoteCalculator from '../components/QuoteCalculator';
import { printingServices, brandingSignageServices, advertisingServices } from '../data/servicesData';
import { portfolioProjects } from '../data/portfolioData';
import { testimonials, caseStudies, portfolioProofStats } from '../data/testimonialsData';
import { faqsData } from '../data/faqData';

export default function HomePage({ setCurrentPage, setSelectedProject, setBookingPrefill }) {
  const handleServiceSelect = (service) => {
    setBookingPrefill({
      serviceName: service.title,
      category: service.category,
      specs: service.specs ? service.specs[0] : ''
    });
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCalculatorProceed = (calcData) => {
    setBookingPrefill(calcData);
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-brand-grey pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
        {/* Glow ambient background elements */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-brand-blue/10 via-brand-orange/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-2 bg-white border border-brand-blue/20 shadow-sm px-4 py-1.5 rounded-full text-xs font-semibold text-brand-navy">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping"></span>
                <span className="font-bold text-brand-blue">Serving Patna & Bihar</span>
                <span className="text-slate-400">•</span>
                <span>Established Since 2005</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-navy tracking-tight leading-[1.1] font-outfit">
                Print. Brand. <br />
                <span className="gradient-text-blue">Advertise.</span>{' '}
                <span className="gradient-text-orange">Stand Out.</span>
              </h1>

              {/* Supporting Content */}
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Repro Services brings printing, branding, and advertising solutions together under one roof. From everyday commercial print materials to illuminated 3D signage and large-scale outdoor displays, explore solutions tailored to elevate your business presence.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => {
                    setCurrentPage('booking');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-2xl font-bold text-base shadow-lg shadow-brand-orange/25 hover:shadow-xl hover:shadow-brand-orange/35 transition-all flex items-center justify-center space-x-2 group"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => {
                    setCurrentPage('printing');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto bg-white hover:bg-slate-50 text-brand-navy border border-slate-200 px-7 py-4 rounded-2xl font-bold text-base shadow-sm hover:border-brand-blue/40 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Explore Services</span>
                </button>

                <button
                  onClick={() => {
                    setCurrentPage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto text-brand-blue hover:text-brand-orange font-bold text-sm px-4 py-2 transition-colors text-center"
                >
                  Contact Us
                </button>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 max-w-lg mx-auto lg:mx-0">
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-brand-navy font-outfit">18+</span>
                  <span className="text-xs text-slate-500 font-medium">Years in Bihar</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-brand-blue font-outfit">5,000+</span>
                  <span className="text-xs text-slate-500 font-medium">Projects Done</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-brand-orange font-outfit">100%</span>
                  <span className="text-xs text-slate-500 font-medium">Quality Check</span>
                </div>
              </div>
            </div>

            {/* Right Hero Graphic & Official Emblem Card */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 hover:shadow-card-hover transition-all duration-300">
                
                {/* Official Logo Display */}
                <div className="flex flex-col items-center text-center pb-6 border-b border-slate-100">
                  <div className="relative p-2 bg-gradient-to-tr from-slate-50 to-white rounded-2xl shadow-inner border border-slate-100 mb-4">
                    <img 
                      src="/repro-logo.png" 
                      alt="Repro Services Logo" 
                      loading="lazy"
                      decoding="async"
                      className="h-32 sm:h-36 w-auto object-contain mx-auto"
                    />
                  </div>
                  <span className="inline-block bg-brand-orange/10 text-brand-orange text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-1">
                    Bihar's Comprehensive Media Hub
                  </span>
                  <p className="text-xs text-slate-500">
                    Nagina Market, Lala Thakur Lane, Patna - 800027
                  </p>
                </div>

                {/* Quick Capability Highlights */}
                <div className="pt-4 space-y-3">
                  <div className="flex items-center space-x-3 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0" />
                    <span className="font-semibold">3D LED Acrylic Channel Letters & ACP Signs</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                    <span className="font-semibold">Offset & Digital Commercial Color Printing</span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-semibold">Prime Hoardings, Exhibition Stalls & Canopies</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Need urgent same-day print?</span>
                  <a 
                    href="tel:9308762244"
                    className="text-xs font-bold text-brand-blue hover:text-brand-orange flex items-center space-x-1"
                  >
                    <Phone className="w-3.5 h-3.5 mr-1" />
                    <span>Call 9308762244</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <SliderMain onProjectSelect={setSelectedProject} />
      <ShopByCategory onNavigate={setCurrentPage} />
      <ServiceCategory
        onGetQuote={(service) => {
          setBookingPrefill({
            serviceName: service.title,
            category: 'Printing',
            specs: service.specs?.[0] || '',
            productType: service.id === 'business-cards' ? 'cards' : 'brochures',
          });
          setCurrentPage('booking');
        }}
      />

      {/* 2. Interactive Instant Estimator Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-outfit mt-2">
            Calculate Your Project Estimate
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Adjust volume, paper specs, and finishes to get real-time indicative pricing tailored for Bihar businesses.
          </p>
        </div>

        <QuoteCalculator onProceedToBooking={handleCalculatorProceed} />
      </section>

      {/* 3. The 3 Core Pillars of Repro Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            End-to-End Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-outfit mt-2">
            Our 3 Core Service Divisions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            From pocket-sized executive business cards to 40-foot illuminated highway hoardings, discover how we build consistent brand visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Division 1: Printing */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card hover:shadow-card-hover hover:border-brand-blue/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all">
                <Printer className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Division 01</span>
              <h3 className="text-2xl font-bold text-brand-navy font-outfit mt-1 mb-3">
                Printing Solutions
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Business cards, brochures, flyers, posters, catalogues, corporate stationery, and promotional paper materials with velvet, spot UV, and gold foil finishes.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCheck className="w-4 h-4 text-emerald-500" />
                  <span>350 GSM Velvet Touch Visiting Cards</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCheck className="w-4 h-4 text-emerald-500" />
                  <span>Multi-fold Product Catalogues & Booklets</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCheck className="w-4 h-4 text-emerald-500" />
                  <span>Large Format Posters & Fine Art Prints</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => {
                setCurrentPage('printing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full bg-slate-50 hover:bg-brand-blue text-brand-navy hover:text-white py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center space-x-2"
            >
              <span>Explore Printing Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Division 2: Branding & Signage */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card hover:shadow-card-hover hover:border-brand-orange/30 transition-all duration-300 flex flex-col justify-between group relative">
            <div className="absolute top-4 right-4 bg-brand-orange text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <div>
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all">
                <Sparkles className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Division 02</span>
              <h3 className="text-2xl font-bold text-brand-navy font-outfit mt-1 mb-3">
                Branding & Signage
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Visual identity materials, storefront ACP cladding, 3D LED acrylic channel letters, neon flex wall art, roll-up standees, and vehicle fleet branding.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCheck className="w-4 h-4 text-brand-orange" />
                  <span>3D Frontlit & Halo Backlit Letters</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCheck className="w-4 h-4 text-brand-orange" />
                  <span>Weatherproof ACP Sheet Elevation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCheck className="w-4 h-4 text-brand-orange" />
                  <span>Custom Silicone LED Neon Flex Signs</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => {
                setCurrentPage('signage');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white py-3 rounded-xl font-bold text-xs transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <span>Explore Signage Options</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Division 3: Advertising */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card hover:shadow-card-hover hover:border-brand-navy/30 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-slate-100 text-brand-navy flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-navy group-hover:text-white transition-all">
                <Megaphone className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Division 03</span>
              <h3 className="text-2xl font-bold text-brand-navy font-outfit mt-1 mb-3">
                Advertising Services
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Prime outdoor hoardings and unipoles, event and exhibition stall fabrication at Gyan Bhawan, promotional canopies, and newspaper pamphlet distribution.
              </p>
              <ul className="space-y-2 text-xs text-slate-700 mb-6">
                <li className="flex items-center space-x-2">
                  <CheckCheck className="w-4 h-4 text-emerald-500" />
                  <span>High-Traffic Highway & Chauraha Billboards</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCheck className="w-4 h-4 text-emerald-500" />
                  <span>Custom Expo Stalls & 3D Stage Sets</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCheck className="w-4 h-4 text-emerald-500" />
                  <span>Field Canopies & Hyperlocal Inserts</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => {
                setCurrentPage('advertising');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full bg-slate-50 hover:bg-brand-navy text-brand-navy hover:text-white py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center space-x-2"
            >
              <span>Explore Advertising Solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-outfit mt-2">
            How We Turn Your Requirement Into a Delivered Product
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: '01',
              title: 'Share your requirement',
              text: 'Tell us the product, measurements, quantity, finish, and timeline you need for your business or campaign.'
            },
            {
              step: '02',
              title: 'Get expert review',
              text: 'Our team recommends the right material, finishing details, print standard, and design adjustments before production.'
            },
            {
              step: '03',
              title: 'Production & delivery',
              text: 'We manufacture, install, and deliver on schedule with clear quality checks and completion support.'
            }
          ].map((item) => (
            <div key={item.step} className="bg-white rounded-3xl p-7 border border-slate-100 shadow-card hover:shadow-card-hover transition-all">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center font-black text-sm mb-5">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-brand-navy font-outfit mb-3">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Why Choose Repro Services */}
      <section className="bg-brand-navy text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                The Repro Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit leading-tight">
                Why Bihar Businesses Trust Repro Services Since 2005
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We combine Japanese precision printing technology, CNC router accuracy, and skilled on-site structural technicians to deliver seamless brand experiences.
              </p>

              <div className="space-y-4 pt-2">
                {[
                  {
                    title: 'Tailored Solutions for Your Budget',
                    desc: 'Every project is customized to your preferred materials, quantities, timeline, and exact commercial scope.'
                  },
                  {
                    title: 'Multiple Printing & Signage Options',
                    desc: 'Choose from 20+ paper stocks, 10+ finishes, cast acrylic grades, and certified Samsung LED components.'
                  },
                  {
                    title: 'Clear Communication & Honest Advice',
                    desc: 'Transparent pricing, pre-press artwork proofs, and regular progress updates from inquiry to installation.'
                  },
                  {
                    title: 'Turnkey On-Site Installation Team',
                    desc: 'Safe mounting, certified electrical connections, and weatherproof fabrication across Bihar.'
                  },
                  {
                    title: 'Convenient Online Enquiry & Booking',
                    desc: 'Submit your requirements, upload artwork files, and request quick estimates anytime online.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="p-1.5 bg-brand-blue/20 rounded-lg text-brand-blue mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="bg-gradient-to-tr from-white/10 to-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-brand-orange rounded-2xl text-white">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-outfit">18+ Years of Proven Quality</h3>
                    <p className="text-xs text-slate-300">Continuous operation in Patna, Bihar since 2005</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-center">
                  <div className="bg-white/5 p-4 rounded-2xl">
                    <span className="block text-2xl font-extrabold text-brand-blue font-outfit">500+</span>
                    <span className="text-xs text-slate-300">Active Business Clients</span>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl">
                    <span className="block text-2xl font-extrabold text-brand-orange font-outfit">99.4%</span>
                    <span className="text-xs text-slate-300">On-Time Completion</span>
                  </div>
                </div>

                <div className="p-4 bg-black/20 rounded-2xl border border-white/5">
                  <p className="text-xs italic text-slate-200 leading-relaxed">
                    "Repro Services handled our complete hospital frontage ACP board and interior acrylic direction signage with outstanding precision. Their team installed everything within the promised 5 days."
                  </p>
                  <span className="block text-right text-[11px] font-bold text-brand-orange mt-2">
                    — Senior Administrator, Kankarbagh Health Clinic
                  </span>
                </div>

                <button
                  onClick={() => {
                    setCurrentPage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-md text-center"
                >
                  Visit Our Patna Workshop
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Client Proof & Case Study Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
            Client Proof
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-outfit mt-2">
            Trusted by Local Businesses That Need Results
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Proof points from real project delivery, signage execution, and brand upgrades across Patna and Bihar.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {portfolioProofStats.map((stat, index) => (
            <div key={index} className="bg-white border border-slate-100 rounded-2xl p-5 text-center shadow-card">
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-outfit">{stat.value}</div>
              <div className="text-[11px] uppercase tracking-wider text-slate-500 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <div key={study.title} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-card hover:shadow-card-hover transition-all">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-2.5 py-1 rounded-full inline-block border border-blue-200">
                Case Study
              </div>
              <h3 className="text-xl font-bold text-brand-navy font-outfit mt-4 mb-2">{study.title}</h3>
              <div className="text-base font-extrabold text-brand-orange mb-3">{study.metric}</div>
              <p className="text-sm text-slate-600 leading-relaxed">{study.summary}</p>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
                {study.outcome}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.business} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-1 text-brand-orange mb-4">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic">“{testimonial.quote}”</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="text-sm font-bold text-brand-navy font-outfit">{testimonial.name}</div>
                <div className="text-[11px] uppercase tracking-wider text-slate-500 mt-1">{testimonial.business}</div>
                <div className="text-[11px] text-brand-blue mt-2 font-semibold">{testimonial.result}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Featured Portfolio Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Real Work in Bihar
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-outfit mt-2">
              Recent Completed Projects
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Take a look at actual signboards, brochures, and outdoor displays fabricated by our team.
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentPage('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-brand-blue hover:text-brand-orange font-bold text-sm flex items-center space-x-1.5 self-start md:self-auto"
          >
            <span>View Full Portfolio (8+ Case Studies)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioProjects.slice(0, 3).map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-card hover:shadow-card-hover group cursor-pointer transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-brand-navy/80 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                  {project.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-brand-navy text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center space-x-1">
                  <MapPin className="w-3 h-3 text-brand-orange" />
                  <span>{project.location}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-brand-navy text-lg group-hover:text-brand-blue transition-colors font-outfit mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-100">
                  <span className="text-slate-500 font-medium">Client: {project.client}</span>
                  <span className="text-brand-orange font-bold flex items-center space-x-1">
                    <span>Inspect</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Common Customer Questions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Quick Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-outfit mt-2">
            The Questions Most Businesses Ask First
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {faqsData.slice(0, 3).map((group) => (
            <div key={group.category} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-card">
              <div className="text-xs font-bold uppercase tracking-wider text-brand-orange mb-4">{group.category}</div>
              <div className="space-y-4">
                {group.questions.slice(0, 2).map((faq) => (
                  <div key={faq.q} className="border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
                    <div className="text-sm font-bold text-brand-navy mb-1">{faq.q}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. High-Converting Bottom Action CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-blue text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
              Let's Discuss Your Next Project
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-outfit">
              Ready to elevate your brand presence in Patna?
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Share your project specifications, required quantities, materials, and timeline. Our technical estimator will review your file and provide a customized quote within hours.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-slate-300">
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Obligation Quotes</span>
              </span>
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Pre-Press File Calibration</span>
              </span>
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Safe Doorstep Delivery</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
            <button
              onClick={() => {
                setCurrentPage('booking');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-2xl font-bold text-sm shadow-xl shadow-brand-orange/30 transition-all flex items-center justify-center space-x-2"
            >
              <span>Submit Project Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:9308762244"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-2xl font-semibold text-sm transition-colors flex items-center justify-center space-x-2 border border-white/20"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>Call +91 9308762244</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
