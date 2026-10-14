import React from 'react';
import { X, MapPin, Calendar, Layers, CheckCircle2, Phone } from 'lucide-react';

export default function PortfolioModal({ project, onClose, onEnquire }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image */}
        <div className="relative h-64 sm:h-80 bg-slate-900 overflow-hidden shrink-0">
          <img 
            src={project.image} 
            alt={project.title} 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
            <div>
              <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-outfit">
                {project.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Project Details Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs">
            <div>
              <span className="block text-slate-400 font-semibold uppercase">Location</span>
              <span className="font-bold text-brand-navy flex items-center space-x-1 mt-1">
                <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                <span>{project.location}</span>
              </span>
            </div>
            <div>
              <span className="block text-slate-400 font-semibold uppercase">Completed</span>
              <span className="font-bold text-brand-navy flex items-center space-x-1 mt-1">
                <Calendar className="w-3.5 h-3.5 text-brand-blue" />
                <span>Year {project.year}</span>
              </span>
            </div>
            <div>
              <span className="block text-slate-400 font-semibold uppercase">Dimensions</span>
              <span className="font-bold text-brand-navy mt-1 block">
                {project.dimensions}
              </span>
            </div>
            <div>
              <span className="block text-slate-400 font-semibold uppercase">Client</span>
              <span className="font-bold text-brand-navy mt-1 block">
                {project.client}
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">Project Overview</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-brand-navy uppercase tracking-wider mb-2 flex items-center space-x-2">
              <Layers className="w-4 h-4 text-brand-blue" />
              <span>Materials & Production Specs</span>
            </h4>
            <p className="text-xs text-slate-700 bg-blue-50/50 p-3.5 rounded-xl border border-blue-100">
              {project.materials}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-md">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <span className="text-xs text-slate-500 text-center sm:text-left">
            Need a similar custom project fabricated in Patna?
          </span>
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onEnquire(project);
              }}
              className="flex-1 sm:flex-initial bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md text-center"
            >
              Request Quote for Similar Project
            </button>
            <a
              href="tel:9308762244"
              className="bg-brand-navy hover:bg-slate-800 text-white p-2.5 rounded-xl text-xs font-bold transition-all"
              title="Call Senior Consultant"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
