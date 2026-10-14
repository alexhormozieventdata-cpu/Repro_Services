import React, { useState, useEffect } from 'react';
import { 
  FileText, Upload, Calendar, CheckCircle2, ArrowRight, ShieldCheck, 
  Sparkles, MessageSquare, Phone, Calculator, AlertCircle, RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitEnquiry, buildWhatsAppUrl } from '../lib/enquiryService';

export default function BookingPage({ bookingPrefill, setBookingPrefill }) {
  const [formData, setFormData] = useState({
    serviceCategory: 'Printing',
    specificService: 'Business & Visiting Cards',
    specifications: '350 GSM Velvet Touch + Spot UV',
    dimensions: '',
    quantity: '500',
    deadline: '',
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    address: 'Patna, Bihar',
    notes: '',
    sendToWhatsapp: true
  });

  const [uploadedFile, setUploadedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [recentEnquiries, setRecentEnquiries] = useState([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const enquiries = JSON.parse(localStorage.getItem('repro-enquiries') || '[]');
      setRecentEnquiries(enquiries.slice(0, 3));
    } catch (error) {
      console.warn('Unable to load recent enquiries:', error);
    }
  }, []);

  // Handle pre-fill if navigated from other pages or calculator
  useEffect(() => {
    if (bookingPrefill) {
      setFormData(prev => ({
        ...prev,
        serviceCategory: bookingPrefill.category || prev.serviceCategory,
        specificService: bookingPrefill.serviceName || prev.specificService,
        specifications: bookingPrefill.specs || prev.specifications,
        quantity: bookingPrefill.quantity ? String(bookingPrefill.quantity) : prev.quantity,
      }));
    }
  }, [bookingPrefill]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.fullName?.trim()) {
      errors.fullName = 'Please enter your full name.';
    }

    if (!formData.phone?.trim()) {
      errors.phone = 'Please enter your phone number.';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errors.phone = 'Please enter a valid phone number with at least 10 digits.';
    }

    if (!formData.quantity?.trim()) {
      errors.quantity = 'Please enter the quantity or project scale.';
    }

    if (!formData.specificService?.trim()) {
      errors.specificService = 'Please select a service.';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    setValidationErrors(errors);

    if (Object.keys(errors).length > 0) {
      const firstErrorField = Object.keys(errors)[0];
      const field = document.querySelector(`[name="${firstErrorField}"]`);
      field?.focus();
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitEnquiry(formData, uploadedFile);

      const generatedId = 'REP-' + Math.floor(100000 + Math.random() * 900000);
      setInquiryId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);

      if (typeof window !== 'undefined') {
        try {
          const stored = JSON.parse(localStorage.getItem('repro-enquiries') || '[]');
          setRecentEnquiries(stored.slice(0, 3));
        } catch (error) {
          console.warn('Unable to refresh recent enquiries:', error);
        }
      }

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      if (formData.sendToWhatsapp) {
        const whatsappUrl = buildWhatsAppUrl({
          ...formData,
          uploadedFileName: uploadedFile?.name || '',
          uploadedFileSize: uploadedFile?.size || 0
        });
        window.open(whatsappUrl, '_blank');
      }

      if (result.mode === 'mailto-fallback') {
        console.info('Enquiry saved locally. Mail client opened for final sending.');
      }
    } catch (error) {
      console.error('Failed to submit enquiry:', error);
      setIsSubmitting(false);
      window.alert('There was a problem sending your enquiry. Please call +91 9308762244 directly or try again.');
    }
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. Page Header */}
      <section className="bg-brand-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-orange/80 opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Enquiry & Booking Form
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-outfit text-white leading-tight">
              Tell Us About Your Project
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Need printing, branding or advertising support? Submit your requirements using our enquiry form. Share the service you need, quantity, specifications and preferred delivery date so our team can review your request and get back to you.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Form & Summary Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {isSubmitted ? (
          /* Submission Success State */
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-emerald-200 shadow-2xl text-center max-w-2xl mx-auto space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                Enquiry Successfully Registered
              </span>
              <h2 className="text-3xl font-extrabold text-brand-navy font-outfit mt-3">
                Thank You, {formData.fullName}!
              </h2>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                Your quotation request has been transmitted directly to Repro Services' senior estimating team in Patna.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-left space-y-2 text-xs">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Inquiry Reference Number:</span>
                <span className="font-mono font-bold text-brand-blue text-sm">{inquiryId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Selected Service:</span>
                <span className="font-semibold text-brand-navy">{formData.specificService}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Quantity / Scale:</span>
                <span className="font-semibold text-brand-navy">{formData.quantity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Contact Number:</span>
                <span className="font-semibold text-brand-navy">{formData.phone}</span>
              </div>
            </div>

            {recentEnquiries.length > 0 && (
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-left text-xs text-slate-700 space-y-2">
                <p className="font-bold text-brand-navy">Recent enquiry records</p>
                <ul className="space-y-2">
                  {recentEnquiries.map((item, index) => (
                    <li key={`${item.createdAt || index}-${index}`} className="flex items-center justify-between border-b border-slate-200 pb-2 last:border-b-0 last:pb-0">
                      <span className="font-medium text-slate-700">{item.specificService || item.serviceCategory || 'Enquiry'}</span>
                      <span className="text-slate-500">{new Date(item.createdAt || Date.now()).toLocaleDateString()}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="p-4 bg-orange-50 rounded-2xl border border-orange-200 text-left text-xs text-orange-900 space-y-1">
              <p className="font-bold">Next Steps:</p>
              <p>Our estimator will review the paper thickness, dimensions, and delivery location in Patna to finalize the exact quote and commercial timeline.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setUploadedFile(null);
                }}
                className="bg-brand-blue hover:bg-brand-blue-hover text-white px-6 py-3 rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Submit Another Request</span>
              </button>
              <a
                href="tel:9308762244"
                className="bg-slate-100 hover:bg-slate-200 text-brand-navy px-6 py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>Call Urgent Desk (9308762244)</span>
              </a>
            </div>
          </div>
        ) : (
          /* Active Form */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Form (8 Cols) */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Step 1: Category & Service */}
                <div>
                  <h3 className="text-lg font-bold text-brand-navy font-outfit mb-4 flex items-center space-x-2">
                    <span className="w-6 h-6 rounded-full bg-brand-blue text-white text-xs flex items-center justify-center font-bold">1</span>
                    <span>Service Category & Type</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    {['Printing', 'Branding & Signage', 'Advertising'].map((cat) => (
                      <button
                        type="button"
                        key={cat}
                        onClick={() => setFormData(prev => ({ ...prev, serviceCategory: cat }))}
                        className={`p-3 rounded-xl text-xs font-bold border transition-all text-left ${
                          formData.serviceCategory === cat
                            ? 'border-brand-blue bg-blue-50/80 text-brand-blue shadow-sm'
                            : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Select Specific Service / Product *
                      </label>
                      <select
                        name="specificService"
                        value={formData.specificService}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs text-brand-navy focus:outline-none bg-slate-50 ${validationErrors.specificService ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-brand-blue'}`}
                        required
                      >
                        {formData.serviceCategory === 'Printing' && (
                          <>
                            <option value="Business & Visiting Cards">Business & Visiting Cards</option>
                            <option value="Brochures & Product Catalogues">Brochures & Product Catalogues</option>
                            <option value="Flyers & Promotional Leaflets">Flyers & Promotional Leaflets</option>
                            <option value="Posters & Large Format Prints">Posters & Large Format Prints</option>
                            <option value="Corporate Stationery Suite">Corporate Stationery Suite</option>
                            <option value="Custom Die-Cut Stickers & Labels">Custom Die-Cut Stickers & Labels</option>
                          </>
                        )}
                        {formData.serviceCategory === 'Branding & Signage' && (
                          <>
                            <option value="3D LED Acrylic Letters">3D LED Acrylic Letters</option>
                            <option value="Shop Front & ACP Signboards">Shop Front & ACP Signboards</option>
                            <option value="Custom Neon Flex Signage">Custom Neon Flex Signage</option>
                            <option value="Backlit Glow Signboards (GSB)">Backlit Glow Signboards (GSB)</option>
                            <option value="Roll-Up Standees & Promo Displays">Roll-Up Standees & Promo Displays</option>
                            <option value="Commercial Vehicle & Fleet Branding">Commercial Vehicle & Fleet Branding</option>
                          </>
                        )}
                        {formData.serviceCategory === 'Advertising' && (
                          <>
                            <option value="Outdoor Hoardings & Unipoles">Outdoor Hoardings & Unipoles</option>
                            <option value="Exhibition Stall & Booth Fabrication">Exhibition Stall & Booth Fabrication</option>
                            <option value="Promo Canopies & Gazebos">Promo Canopies & Gazebos</option>
                            <option value="Mall, Multiplex & Retail Media">Mall, Multiplex & Retail Media</option>
                            <option value="Targeted Newspaper Pamphlet Inserts">Targeted Newspaper Pamphlet Inserts</option>
                            <option value="Creative Design & Pre-Press Services">Creative Design & Pre-Press Services</option>
                          </>
                        )}
                      </select>
                      {validationErrors.specificService && (
                        <p className="mt-1 text-[10px] font-medium text-red-600">{validationErrors.specificService}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Material / Specifications
                      </label>
                      <input
                        type="text"
                        name="specifications"
                        value={formData.specifications}
                        onChange={handleInputChange}
                        placeholder="e.g., 350 GSM Velvet / 3D Acrylic Frontlit"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-brand-navy focus:outline-none focus:border-brand-blue"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 2: Dimensions, Quantity & Deadline */}
                <div>
                  <h3 className="text-lg font-bold text-brand-navy font-outfit mb-4 flex items-center space-x-2">
                    <span className="w-6 h-6 rounded-full bg-brand-blue text-white text-xs flex items-center justify-center font-bold">2</span>
                    <span>Quantity, Dimensions & Timeline</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Quantity / Unit Count *
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        placeholder="e.g., 1000 pcs or 1 unit"
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs text-brand-navy focus:outline-none ${validationErrors.quantity ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-brand-blue'}`}
                        required
                      />
                      {validationErrors.quantity && (
                        <p className="mt-1 text-[10px] font-medium text-red-600">{validationErrors.quantity}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Dimensions (Optional)
                      </label>
                      <input
                        type="text"
                        name="dimensions"
                        value={formData.dimensions}
                        onChange={handleInputChange}
                        placeholder="e.g., 20x4 ft or A4 size"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-brand-navy focus:outline-none focus:border-brand-blue"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Delivery Deadline
                      </label>
                      <input
                        type="date"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-brand-navy focus:outline-none focus:border-brand-blue"
                      />
                    </div>
                  </div>
                </div>

                {/* Step 3: File Upload Simulator */}
                <div>
                  <h3 className="text-lg font-bold text-brand-navy font-outfit mb-3 flex items-center space-x-2">
                    <span className="w-6 h-6 rounded-full bg-brand-blue text-white text-xs flex items-center justify-center font-bold">3</span>
                    <span>Artwork / Reference File Upload (Optional)</span>
                  </h3>

                  <div className="border-2 border-dashed border-slate-200 hover:border-brand-blue/50 rounded-2xl p-6 text-center bg-slate-50/50 transition-colors">
                    <input
                      type="file"
                      id="artworkUpload"
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.ai,.cdr,.psd,.jpg,.png"
                    />
                    <label htmlFor="artworkUpload" className="cursor-pointer block">
                      <Upload className="w-8 h-8 text-brand-blue mx-auto mb-2 opacity-80" />
                      <span className="text-xs font-bold text-brand-navy block">
                        {uploadedFile ? uploadedFile.name : 'Click to attach design files (PDF, CDR, AI, JPG)'}
                      </span>
                      <span className="text-[11px] text-slate-400 block mt-1">
                        {uploadedFile 
                          ? `${(uploadedFile.size / 1024).toFixed(1)} KB - Ready for review` 
                          : 'Max size: 25MB • Our team can also create artwork from scratch'}
                      </span>
                    </label>
                  </div>
                </div>

                {/* Step 4: Contact & Location Info */}
                <div>
                  <h3 className="text-lg font-bold text-brand-navy font-outfit mb-4 flex items-center space-x-2">
                    <span className="w-6 h-6 rounded-full bg-brand-blue text-white text-xs flex items-center justify-center font-bold">4</span>
                    <span>Your Contact Details</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs text-brand-navy focus:outline-none ${validationErrors.fullName ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-brand-blue'}`}
                        required
                      />
                      {validationErrors.fullName && (
                        <p className="mt-1 text-[10px] font-medium text-red-600">{validationErrors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Business / Company Name
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        placeholder="Company / Shop Name"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-brand-navy focus:outline-none focus:border-brand-blue"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / Mobile Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 9308762244"
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs text-brand-navy focus:outline-none ${validationErrors.phone ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-brand-blue'}`}
                        required
                      />
                      {validationErrors.phone && (
                        <p className="mt-1 text-[10px] font-medium text-red-600">{validationErrors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@business.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-brand-navy focus:outline-none focus:border-brand-blue"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Project Notes or Specific Instructions
                    </label>
                    <textarea
                      name="notes"
                      rows="3"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Mention any specific lamination, installation heights, or sample preferences..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-brand-navy focus:outline-none focus:border-brand-blue"
                    ></textarea>
                  </div>

                  <div className="flex items-center space-x-2 mt-4 pt-2 border-t border-slate-100">
                    <input
                      type="checkbox"
                      id="sendToWhatsapp"
                      name="sendToWhatsapp"
                      checked={formData.sendToWhatsapp}
                      onChange={handleInputChange}
                      className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 border-slate-300"
                    />
                    <label htmlFor="sendToWhatsapp" className="text-xs text-slate-700 font-semibold cursor-pointer">
                      Also open WhatsApp with this enquiry for instantaneous confirmation
                    </label>
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white py-4 rounded-2xl font-bold text-sm shadow-xl shadow-brand-orange/30 transition-all flex items-center justify-center space-x-2 disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <span>Registering Project Enquiry...</span>
                  ) : (
                    <>
                      <span>Request a Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  * Form submission registers an official quotation enquiry; production commences upon client sample & design approval.
                </p>
              </form>
            </div>

            {/* Right Information Panel (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Trust Box */}
              <div className="bg-brand-navy text-white rounded-3xl p-6 sm:p-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">
                  Direct Support
                </span>
                <h4 className="text-xl font-bold font-outfit">Need Fast Advice?</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Unsure about the difference between 3D acrylic channel letters versus neon flex, or 300 GSM versus 350 GSM cards? Speak to our production supervisor.
                </p>

                <div className="pt-2 space-y-3">
                  <a
                    href="tel:9308762244"
                    className="w-full bg-brand-blue hover:bg-brand-blue-hover text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call 9308762244</span>
                  </a>

                  <a
                    href="https://wa.me/919308762244?text=Hi%20Repro%20Services%2C%20I%20am%20looking%20for%20project%20advice."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition-all shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md space-y-4">
                <h4 className="text-sm font-bold text-brand-navy uppercase tracking-wider">
                  Our Service Guarantees
                </h4>
                <ul className="space-y-3 text-xs text-slate-700">
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Pre-Press Digital Proof:</strong> We verify all bleed, margins, and resolution before printing.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Transparent Quotation:</strong> All rates include material, laser cutting, and mounting specs.</span>
                  </li>
                  <li className="flex items-start space-x-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>Patna Delivery:</strong> Direct dispatch from our Nagina Market workshop.</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        )}

      </section>

    </div>
  );
}
