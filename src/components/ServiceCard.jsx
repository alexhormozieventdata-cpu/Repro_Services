import React from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

export default function ServiceCard({ service, onBook }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 hover:border-brand-blue/30 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div>
        {/* Top Header Badge */}
        <div className="p-6 pb-4">
          <div className="flex justify-between items-start gap-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-2.5 py-1 rounded-md">
              {service.category}
            </span>
            {service.badge && (
              <span className="text-[11px] font-semibold text-brand-orange bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200/50 flex items-center space-x-1">
                <Sparkles className="w-2.5 h-2.5" />
                <span>{service.badge}</span>
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-blue transition-colors font-outfit mb-2">
            {service.title}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            {service.description}
          </p>

          <div className="pt-2 border-t border-slate-100">
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Specifications & Options:
            </h4>
            <ul className="space-y-1.5">
              {service.specs.map((spec, i) => (
                <li key={i} className="flex items-start text-xs text-slate-700">
                  <Check className="w-3.5 h-3.5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer Price & Button */}
      <div className="p-6 pt-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between gap-3">
        <div>
          <span className="block text-[11px] text-slate-500 uppercase font-semibold">Starting from</span>
          <span className="text-base font-extrabold text-brand-navy font-outfit">
            {service.startingPrice}
          </span>
        </div>

        <button
          onClick={() => onBook(service)}
          className="bg-brand-blue hover:bg-brand-blue-hover text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center space-x-1.5 group/btn"
        >
          <span>Select Service</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
}
