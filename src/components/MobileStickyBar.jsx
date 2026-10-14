import React from 'react';
import { Phone, MessageCircle, Calculator } from 'lucide-react';

export default function MobileStickyBar({ setCurrentPage }) {
  return (
    <aside 
      aria-label="Mobile Contact and Quote Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 px-3 py-2 shadow-2xl flex items-center justify-between gap-2"
    >
      {/* Call Button */}
      <a
        href="tel:9308762244"
        className="flex-1 bg-brand-blue hover:bg-brand-blue-hover text-white py-2.5 px-2 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 shadow-md active:scale-95 transition-transform"
      >
        <Phone className="w-4 h-4 shrink-0" />
        <span>Call Now</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919308762244?text=Hello%20Repro%20Services%2C%20I%20want%20to%20enquire%20about%20printing%2Fbranding%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-2 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5 shadow-md active:scale-95 transition-transform"
      >
        <MessageCircle className="w-4 h-4 shrink-0" />
        <span>WhatsApp</span>
      </a>

      {/* Quick Quote Button */}
      <button
        onClick={() => {
          setCurrentPage('booking');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="bg-brand-orange hover:bg-brand-orange-hover text-white py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center space-x-1 shadow-md active:scale-95 transition-transform shrink-0"
      >
        <Calculator className="w-4 h-4 shrink-0" />
        <span>Quote</span>
      </button>
    </aside>
  );
}
