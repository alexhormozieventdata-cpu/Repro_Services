import React, { useState } from 'react';
import { 
  Filter, MapPin, Calendar, ArrowRight, Eye, Sparkles, 
  Layers, CheckCircle2 
} from 'lucide-react';
import { portfolioProjects, portfolioCategories } from '../data/portfolioData';

export default function PortfolioPage({ setSelectedProject, setCurrentPage, setBookingPrefill }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.categoryKey === activeCategory);

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. Page Header Banner */}
      <section className="bg-brand-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-blue/80 opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Work Across Bihar
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-outfit text-white leading-tight">
              Our Completed Projects Portfolio
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Explore real-world 3D LED signage installations, luxury stationery suites, prime highway billboards, and retail brand transformations fabricated by Repro Services.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {portfolioCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all shadow-sm ${
                activeCategory === cat.key
                  ? 'bg-brand-blue text-white shadow-brand-blue/30 scale-105'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 3. Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-card hover:shadow-card-hover group cursor-pointer transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-brand-navy font-bold text-xs px-4 py-2 rounded-xl shadow-lg flex items-center space-x-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4 text-brand-blue" />
                      <span>View Specifications</span>
                    </span>
                  </div>

                  <div className="absolute top-3 left-3 bg-brand-navy/85 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {project.category}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-white text-xs">
                    <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-brand-orange" />
                      <span>{project.location}</span>
                    </span>
                    <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-lg text-brand-navy group-hover:text-brand-blue transition-colors font-outfit mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-medium">Dimensions:</span>
                      <span className="font-semibold text-slate-700">{project.dimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-medium">Client:</span>
                      <span className="font-semibold text-brand-navy">{project.client}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 flex flex-wrap gap-1.5">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="bg-slate-100 text-slate-600 text-[10px] font-semibold px-2 py-0.5 rounded">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Portfolio Bottom Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-navy to-brand-blue text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">Inspired by our work?</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-outfit">
              Let's create something extraordinary for your business.
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              We provide free digital 3D architectural mockups and material recommendation sheets before you commit to production.
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentPage('booking');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="bg-brand-orange hover:bg-brand-orange-hover text-white px-8 py-4 rounded-2xl text-xs font-bold shadow-lg transition-all text-center shrink-0"
          >
            Request Quotation for Your Site
          </button>
        </div>
      </section>

    </div>
  );
}
