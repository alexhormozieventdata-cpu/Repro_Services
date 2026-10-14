import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, 
  ExternalLink, ShieldCheck, Building 
} from 'lucide-react';

export default function ContactPage() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'Printing Services',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      const text = encodeURIComponent(
        `*Quick Contact - Repro Services*\nName: ${contactForm.name}\nPhone: ${contactForm.phone}\nService: ${contactForm.serviceInterest}\nMessage: ${contactForm.message}`
      );
      window.open(`https://wa.me/919308762244?text=${text}`, '_blank');
    }, 600);
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. Page Header */}
      <section className="bg-brand-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-blue/80 opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-outfit text-white leading-tight">
              Let's Discuss Your Next Project
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Have a question or a custom requirement? Contact Repro Services to discuss your printing, branding, or advertising needs. You can also submit an online enquiry with your project specifications.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contact Details & Form Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue-light text-brand-blue flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Call Us Directly</span>
                <a 
                  href="tel:9308762244" 
                  className="text-lg font-bold text-brand-navy hover:text-brand-blue transition-colors block"
                >
                  +91 9308762244
                </a>
                <p className="text-xs text-slate-500">Mon - Sat from 10:00 AM to 8:00 PM</p>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">WhatsApp Instant Chat</span>
                <a 
                  href="https://wa.me/919308762244?text=Hello%20Repro%20Services" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-emerald-700 hover:underline transition-colors block"
                >
                  +91 9308762244
                </a>
                <p className="text-xs text-slate-500">Fast quotes, artwork file reviews & status updates</p>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange-light text-brand-orange flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Head Office & Production Facility</span>
                <p className="text-sm font-bold text-brand-navy leading-snug">
                  Nagina Market, Lala Thakur Lane, New Jagannathpura Road, Patna, Bihar – 800027
                </p>
                <div className="pt-2">
                  <a
                    href="https://share.google/372LwGWXp3wc8ultb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-brand-blue hover:text-brand-orange inline-flex items-center space-x-1"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card flex items-start space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Official Correspondence</span>
                <a 
                  href="mailto:contact@reproservices.in" 
                  className="text-sm font-bold text-brand-navy hover:text-brand-blue transition-colors block"
                >
                  contact@reproservices.in
                </a>
                <p className="text-xs text-slate-500">Corporate RFPs, tenders and vendor inquiries</p>
              </div>
            </div>

          </div>

          {/* Right Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl">
            <h3 className="text-2xl font-bold text-brand-navy font-outfit mb-2">
              Send a Quick Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Fill in your contact details below and our Patna customer support team will connect with you shortly.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-brand-navy font-outfit">Message Received!</h4>
                <p className="text-xs text-slate-600">
                  Thank you! We have also opened WhatsApp so you can instantly confirm receipt with our team.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-brand-blue hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-brand-navy focus:outline-none focus:border-brand-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      placeholder="+91 9308762244"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-brand-navy focus:outline-none focus:border-brand-blue"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="name@business.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-brand-navy focus:outline-none focus:border-brand-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Service Interested In
                    </label>
                    <select
                      value={contactForm.serviceInterest}
                      onChange={(e) => setContactForm({ ...contactForm, serviceInterest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-brand-navy focus:outline-none focus:border-brand-blue bg-slate-50"
                    >
                      <option value="Printing Services">Printing Services (Cards, Brochures, Catalogues)</option>
                      <option value="Branding & Signage">Branding & Signage (3D LED Letters, ACP Façade)</option>
                      <option value="Advertising Services">Advertising Services (Hoardings, Stalls, Canopies)</option>
                      <option value="General Consultation">General Commercial Enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Message / Requirements *
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Describe what you need: quantity, dimensions, location, or preferred material..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-brand-navy focus:outline-none focus:border-brand-blue"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white py-3.5 rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message & Connect on WhatsApp</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 3. Interactive Map & Patna Location View */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl overflow-hidden space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-blue">Find Us in Patna</span>
              <h3 className="text-xl font-bold text-brand-navy font-outfit">Workshop & Showroom Location</h3>
            </div>
            <a
              href="https://share.google/372LwGWXp3wc8ultb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-blue text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 shadow-sm"
            >
              <span>Get Driving Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Embedded Google Map iframe */}
          <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-200">
            <iframe
              title="Repro Services Patna Location"
              src="https://maps.google.com/maps?q=Nagina+Market,+Lala+Thakur+Lane,+New+Jagannathpura+Road,+Patna,+Bihar+800027&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span>Nagina Market, Lala Thakur Lane, New Jagannathpura Road, Patna, Bihar – 800027</span>
            <span className="font-semibold text-brand-navy">Nearby Landmark: New Jagannathpura</span>
          </div>
        </div>
      </section>

    </div>
  );
}
