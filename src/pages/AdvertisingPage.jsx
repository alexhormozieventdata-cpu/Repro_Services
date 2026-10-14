import React from 'react';
import { 
  Megaphone, MapPin, CheckCircle2, ShieldCheck, ArrowRight, 
  TrendingUp, Calendar, Compass, Phone
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { advertisingServices } from '../data/servicesData';

export default function AdvertisingPage({ setCurrentPage, setBookingPrefill }) {
  const handleBookService = (service) => {
    setBookingPrefill({
      serviceName: service.title,
      category: 'Advertising',
      specs: service.specs ? service.specs[0] : '',
      productType: service.id === 'canopy-promotional-kiosks' ? 'standee' : 'flex'
    });
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. Page Header */}
      <section className="bg-brand-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy-dark to-brand-blue/90 opacity-95"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Mass Reach & Field Activations
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-outfit text-white leading-tight">
              High-Impact Advertising Services Across Bihar
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Dominate prime road corridors in Patna with high-traffic outdoor hoardings, turnkey exhibition pavilions at Gyan Bhawan, promotional canopies for activations, and hyperlocal newspaper inserts.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Media & Campaign Formats
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy font-outfit mt-2">
              Our Advertising Solutions
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Select any advertising medium to check site availability, fabrication specs, and distribution options.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500">
            <TrendingUp className="w-4 h-4 text-brand-orange" />
            <span>High Footfall Transit & Event Locations</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advertisingServices.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onBook={handleBookService} 
            />
          ))}
        </div>
      </section>

      {/* 3. Prime Patna Hoarding Junctions */}
      <section className="bg-brand-grey py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Strategic Media Assets
            </span>
            <h2 className="text-3xl font-extrabold text-brand-navy font-outfit mt-2">
              Prime Outdoor Locations in Patna
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Connect your brand with hundreds of thousands of commuters every day at key traffic arteries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                zone: 'Dak Bunglow Chauraha',
                impressions: '350,000+ Daily Footfall',
                desc: 'The commercial heart of Patna connecting Fraser Road, Station Road, and Exhibition Road.',
                type: 'Unipole & Rooftop Billboards'
              },
              {
                zone: 'Bailey Road (Raja Bazar - Saguna More)',
                impressions: '280,000+ Daily Vehicles',
                desc: 'The primary tech and residential lifeline connecting central Patna to Danapur.',
                type: 'Gantry & Large Hoardings'
              },
              {
                zone: 'Boring Road Chauraha',
                impressions: '200,000+ Students & Shoppers',
                desc: 'Premier educational hub surrounded by coaching centers, colleges, cafes, and fashion showrooms.',
                type: 'High-Impact Corner Displays'
              },
              {
                zone: 'Kankarbagh Main Road & Tempo Stand',
                impressions: '220,000+ Daily Density',
                desc: 'One of Asia’s largest residential colonies with dense commercial retail frontages.',
                type: 'Frontlit Star Flex Billboards'
              },
              {
                zone: 'Gandhi Maidan & Exhibition Road',
                impressions: '300,000+ Transit Commuters',
                desc: 'Proximity to major corporate banks, government administrative centers, and Gyan Bhawan.',
                type: 'Transit Media & Panels'
              },
              {
                zone: 'Patna Junction & Karbigahiya Area',
                impressions: '400,000+ Travelers',
                desc: 'Mass transit hub for travelers arriving from all districts of Bihar and across India.',
                type: 'High Reach Transit Displays'
              }
            ].map((loc, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-xs font-bold text-brand-orange mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{loc.zone}</span>
                  </div>
                  <span className="block text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md mb-3 w-fit">
                    {loc.impressions}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{loc.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Format: <span className="text-brand-navy">{loc.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Exhibition Stall Fabrication Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">Events & Expos</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-navy font-outfit">
              Exhibiting at Gyan Bhawan or BIA Hall, Patna?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We provide 3D stall design, carpentry fabrication, vinyl graphics cladding, rental counters, LED spotlights, and on-ground booth management so your exhibition presence is hassle-free.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => {
                setBookingPrefill({ category: 'Advertising', serviceName: 'Exhibition Stall Fabrication' });
                setCurrentPage('booking');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-3.5 rounded-xl text-xs font-bold shadow-md transition-all text-center"
            >
              Book Exhibition Stall Design
            </button>
            <a
              href="tel:9308762244"
              className="bg-brand-navy hover:bg-slate-800 text-white px-6 py-3.5 rounded-xl text-xs font-bold transition-all text-center flex items-center justify-center space-x-1.5"
            >
              <Phone className="w-4 h-4" />
              <span>Call Media Team</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
