import React, { useState } from 'react';
import { 
  HelpCircle, ChevronDown, ChevronUp, Search, FileCheck, 
  Palette, Layers, CheckCircle2, ArrowRight, BookOpen, AlertCircle
} from 'lucide-react';
import { faqsData, printingGuides } from '../data/faqData';

export default function FaqPage({ setCurrentPage }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState({});

  const toggleAccordion = (catIdx, qIdx) => {
    const key = `${catIdx}-${qIdx}`;
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. Page Header */}
      <section className="bg-brand-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-blue/80 opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Knowledge Base & Specs
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-outfit text-white leading-tight">
              Frequently Asked Questions & Printing Guides
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Find answers regarding file preparation, turnaround times, delivery across Bihar, paper weight comparisons, and technical signage specifications.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Search & FAQ Categories */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search FAQs (e.g. GSM, turnaround time, Patna delivery, CMYK, file format)..."
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-white text-sm text-brand-navy focus:outline-none focus:border-brand-blue shadow-sm"
          />
        </div>

        {/* Accordions */}
        <div className="space-y-8">
          {faqsData.map((category, catIdx) => {
            // Filter questions based on searchTerm
            const filteredQuestions = category.questions.filter(item => 
              item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.a.toLowerCase().includes(searchTerm.toLowerCase())
            );

            if (searchTerm && filteredQuestions.length === 0) return null;

            return (
              <div key={catIdx} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-card">
                <h3 className="text-xl font-bold text-brand-navy font-outfit mb-6 pb-2 border-b border-slate-100 flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-blue"></span>
                  <span>{category.category}</span>
                </h3>

                <div className="space-y-4">
                  {filteredQuestions.map((item, qIdx) => {
                    const key = `${catIdx}-${qIdx}`;
                    const isOpen = openItems[key] ?? (catIdx === 0 && qIdx === 0 && !searchTerm);

                    return (
                      <div 
                        key={qIdx}
                        className="border border-slate-100 rounded-2xl overflow-hidden transition-colors"
                      >
                        <button
                          onClick={() => toggleAccordion(catIdx, qIdx)}
                          className="w-full text-left p-4 sm:p-5 flex justify-between items-center bg-slate-50/50 hover:bg-slate-50 transition-colors focus:outline-none"
                        >
                          <span className="text-sm font-bold text-brand-navy pr-4">
                            {item.q}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-brand-blue shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                          )}
                        </button>

                        {isOpen && (
                          <div className="p-4 sm:p-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white animate-in fade-in duration-150">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* 3. Essential Pre-Press Preparation Checklist */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-navy text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              Designer Checklist
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-outfit">
              How to Prepare Your Files for Error-Free Printing
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Follow these simple professional standards to guarantee that your finished cards, brochures, or hoardings match your visual expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {[
              {
                title: 'Set Color Mode to CMYK',
                desc: 'Never send RGB files for offset printing. Convert color profiles to CMYK to prevent unexpected darkening or color shifts.'
              },
              {
                title: 'Add 3mm Bleed Margins',
                desc: 'Extend background colors and edge imagery 3mm beyond the trim line so automated cutting blades leave no white borders.'
              },
              {
                title: 'Convert Fonts to Outlines / Curves',
                desc: 'Press Ctrl+Shift+O in Adobe Illustrator or Ctrl+Q in CorelDraw so fonts render identically across all production RIP servers.'
              },
              {
                title: 'Ensure 300 DPI at 100% Size',
                desc: 'Web images (72 DPI) will appear pixelated when printed. Use crisp vector assets or 300 DPI high-resolution photography.'
              }
            ].map((tip, idx) => (
              <div key={idx} className="bg-white/5 p-4 rounded-2xl border border-white/5 space-y-1">
                <h4 className="text-sm font-bold text-brand-blue-light flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{tip.title}</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-300">
              Need our studio to verify your file before placing an order?
            </span>
            <button
              onClick={() => {
                setCurrentPage('booking');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md"
            >
              Upload Artwork for Free Verification
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
