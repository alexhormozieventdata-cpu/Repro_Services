import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function QuoteCalculator({ onProceedToBooking }) {
  const [productType, setProductType] = useState('cards');
  const [quantity, setQuantity] = useState(500);
  const [finish, setFinish] = useState('matte');
  const [isUrgent, setIsUrgent] = useState(false);

  // Pricing calculation logic
  const calculateEstimate = () => {
    let base = 0;
    if (productType === 'cards') {
      // Visiting cards: ₹350 for 100, ₹700 for 500, ₹1200 for 1000, ₹2200 for 2000, ₹4500 for 5000
      const perUnit = quantity <= 100 ? 3.5 : quantity <= 500 ? 1.4 : quantity <= 1000 ? 1.2 : 0.9;
      base = quantity * perUnit;
      if (finish === 'velvet') base += quantity * 0.5;
      if (finish === 'foil') base += quantity * 0.8 + 300;
      if (finish === 'spotuv') base += quantity * 0.6 + 250;
    } else if (productType === 'brochures') {
      // Brochures: ₹1500 for 500, ₹2500 for 1000, etc.
      const perUnit = quantity <= 500 ? 3.2 : quantity <= 1000 ? 2.6 : 2.1;
      base = quantity * perUnit;
      if (finish === 'gloss') base += quantity * 0.4;
      if (finish === 'velvet') base += quantity * 0.9;
    } else if (productType === 'signage') {
      // Signage: based on approx letter count or sq ft (mapped from quantity slider: 10 to 100 sq ft)
      const sqft = Math.max(10, Math.round(quantity / 20));
      base = sqft * 180; // ₹180 per sq ft / inch
      if (finish === 'led') base += sqft * 45;
      if (finish === 'acp') base += sqft * 70;
    } else if (productType === 'standee') {
      // Roll-up standees: quantity = 1 to 20 units
      const units = Math.max(1, Math.round(quantity / 100));
      base = units * 950;
      if (finish === 'premium') base += units * 250;
    } else if (productType === 'flex') {
      // Flex banner: mapped to sq ft (20 to 500 sq ft)
      const sqft = Math.max(20, Math.round(quantity / 5));
      base = sqft * 18; // ₹18 / sq ft
      if (finish === 'star') base += sqft * 8; // Star flex premium
    }

    if (isUrgent) {
      base *= 1.25; // 25% rush charge
    }

    return Math.round(base);
  };

  const estimatedTotal = calculateEstimate();

  const handleProceed = () => {
    onProceedToBooking({
      productType,
      quantity,
      finish,
      isUrgent,
      estimatedPrice: estimatedTotal
    });
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl relative overflow-hidden">
      {/* Decorative gradient corner */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-brand-blue/10 via-brand-orange/5 to-transparent rounded-bl-full pointer-events-none"></div>

      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 bg-brand-blue-light text-brand-blue rounded-2xl">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-brand-navy font-outfit">
            Instant Cost Estimator
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Get an instant pricing guide for your custom project in Patna
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Product Selection */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
              1. Choose Service / Product
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'cards', label: 'Business Cards', icon: '📇' },
                { id: 'brochures', label: 'Brochures', icon: '📄' },
                { id: 'signage', label: '3D LED Letters', icon: '✨' },
                { id: 'standee', label: 'Roll-Up Standee', icon: '🚩' },
                { id: 'flex', label: 'Flex Banner', icon: '🖼️' },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setProductType(p.id)}
                  className={`p-3 rounded-xl text-left border text-xs font-bold transition-all flex items-center space-x-2 ${
                    productType === p.id
                      ? 'border-brand-blue bg-blue-50/80 text-brand-blue shadow-sm'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span className="text-base">{p.icon}</span>
                  <span>{p.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Quantity Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                2. Volume / Scale
              </label>
              <span className="text-sm font-extrabold text-brand-blue bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                {productType === 'cards' || productType === 'brochures' 
                  ? `${quantity} pieces` 
                  : productType === 'standee' 
                  ? `${Math.max(1, Math.round(quantity / 100))} units` 
                  : `${Math.max(10, Math.round(quantity / 20))} sq. ft.`}
              </span>
            </div>

            <input
              type="range"
              min="100"
              max="5000"
              step="100"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
              <span>Standard Volume</span>
              <span>Medium Run</span>
              <span>Bulk Commercial</span>
            </div>
          </div>

          {/* Step 3: Finish / Options */}
          <div>
            <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">
              3. Select Finish & Material Grade
            </label>
            <div className="grid grid-cols-2 gap-2">
              {productType === 'cards' && (
                <>
                  <button
                    onClick={() => setFinish('matte')}
                    className={`p-2.5 rounded-xl text-xs font-medium border text-left ${finish === 'matte' ? 'border-brand-blue bg-blue-50 text-brand-blue font-bold' : 'border-slate-200 text-slate-600'}`}
                  >
                    Classic Matte Lamination
                  </button>
                  <button
                    onClick={() => setFinish('velvet')}
                    className={`p-2.5 rounded-xl text-xs font-medium border text-left ${finish === 'velvet' ? 'border-brand-blue bg-blue-50 text-brand-blue font-bold' : 'border-slate-200 text-slate-600'}`}
                  >
                    Velvet Soft-Touch
                  </button>
                  <button
                    onClick={() => setFinish('spotuv')}
                    className={`p-2.5 rounded-xl text-xs font-medium border text-left ${finish === 'spotuv' ? 'border-brand-blue bg-blue-50 text-brand-blue font-bold' : 'border-slate-200 text-slate-600'}`}
                  >
                    Raised Spot UV
                  </button>
                  <button
                    onClick={() => setFinish('foil')}
                    className={`p-2.5 rounded-xl text-xs font-medium border text-left ${finish === 'foil' ? 'border-brand-blue bg-blue-50 text-brand-blue font-bold' : 'border-slate-200 text-slate-600'}`}
                  >
                    Gold / Silver Hot Foil
                  </button>
                </>
              )}

              {productType === 'brochures' && (
                <>
                  <button
                    onClick={() => setFinish('matte')}
                    className={`p-2.5 rounded-xl text-xs font-medium border text-left ${finish === 'matte' ? 'border-brand-blue bg-blue-50 text-brand-blue font-bold' : 'border-slate-200 text-slate-600'}`}
                  >
                    170 GSM Matte Art Paper
                  </button>
                  <button
                    onClick={() => setFinish('gloss')}
                    className={`p-2.5 rounded-xl text-xs font-medium border text-left ${finish === 'gloss' ? 'border-brand-blue bg-blue-50 text-brand-blue font-bold' : 'border-slate-200 text-slate-600'}`}
                  >
                    220 GSM High Gloss Paper
                  </button>
                  <button
                    onClick={() => setFinish('velvet')}
                    className={`p-2.5 rounded-xl text-xs font-medium border text-left ${finish === 'velvet' ? 'border-brand-blue bg-blue-50 text-brand-blue font-bold' : 'border-slate-200 text-slate-600'}`}
                  >
                    300 GSM Heavy Card Cover
                  </button>
                </>
              )}

              {(productType === 'signage' || productType === 'standee' || productType === 'flex') && (
                <>
                  <button
                    onClick={() => setFinish('standard')}
                    className={`p-2.5 rounded-xl text-xs font-medium border text-left ${finish === 'standard' ? 'border-brand-blue bg-blue-50 text-brand-blue font-bold' : 'border-slate-200 text-slate-600'}`}
                  >
                    Standard Commercial Grade
                  </button>
                  <button
                    onClick={() => setFinish('premium')}
                    className={`p-2.5 rounded-xl text-xs font-medium border text-left ${finish === 'premium' ? 'border-brand-blue bg-blue-50 text-brand-blue font-bold' : 'border-slate-200 text-slate-600'}`}
                  >
                    Premium Heavy-Duty Media
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Urgent Checkbox */}
          <div className="flex items-center space-x-2 pt-1">
            <input
              type="checkbox"
              id="urgentCheck"
              checked={isUrgent}
              onChange={(e) => setIsUrgent(e.target.checked)}
              className="w-4 h-4 rounded text-brand-orange focus:ring-brand-orange border-slate-300"
            />
            <label htmlFor="urgentCheck" className="text-xs text-slate-700 font-semibold cursor-pointer">
              Express Rush Delivery required (24-48 hours delivery in Patna)
            </label>
          </div>
        </div>

        {/* Right Output Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-brand-navy to-brand-navy-dark text-white rounded-2xl p-6 flex flex-col justify-between shadow-xl border border-slate-800">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs uppercase tracking-widest text-brand-blue font-bold">
                Preliminary Estimate
              </span>
              <span className="bg-emerald-500/20 text-emerald-400 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                Verified Pricing
              </span>
            </div>

            <div className="my-4">
              <span className="text-3xl sm:text-4xl font-extrabold text-white font-outfit">
                ₹{estimatedTotal.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-slate-400 block mt-1">
                *Approximate pre-tax estimate based on standard specifications.
              </span>
            </div>

            <div className="space-y-2 py-4 border-t border-slate-700/60 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span>Selected Item:</span>
                <span className="font-bold text-white uppercase">{productType}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Estimated Turnaround:</span>
                <span className="font-bold text-emerald-400">{isUrgent ? '24 - 48 Hours' : '3 - 5 Business Days'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Production Facility:</span>
                <span className="font-bold text-white">Patna, Bihar</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800 space-y-3">
            <button
              onClick={handleProceed}
              className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-brand-orange/30 transition-all flex items-center justify-center space-x-2 group"
            >
              <span>Submit Project Requirements</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`https://wa.me/919308762244?text=Hi%20Repro%20Services%2C%20I%20used%20your%20cost%20estimator%20for%20${productType}%20and%20got%20an%20estimate%20of%20Rs.%20${estimatedTotal}.%20Can%20we%20proceed%3F`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white/10 hover:bg-white/20 text-slate-200 py-2.5 rounded-xl font-semibold text-xs transition-colors flex items-center justify-center space-x-2 text-center"
            >
              <span>Share Estimate on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
