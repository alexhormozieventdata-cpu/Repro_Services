import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, MessageCircle, Phone, X } from 'lucide-react';
import { printingServices } from '../data/servicesData';
import { printingProductDetails } from '../data/printingProductDetails';
import { portfolioProjects } from '../data/portfolioData';

const categoryImageByService = {
  'business-cards': 'https://cms.cloudinary.vpsvc.com/image/upload/c_fill,ar_4:5,g_auto,dpr_auto,f_auto,w_450/India%20LOB/NVHP/New%20Home%20Page/Explore%20all%20categories/Explore-all-categories_Stationery_-letterheads-and-Stamps-01',
  'brochures-catalogues': 'https://cms.cloudinary.vpsvc.com/image/upload/c_fill,ar_4:5,g_auto,dpr_auto,f_auto,w_450/India%20LOB/NVHP/New%20Home%20Page/Explore%20all%20categories/Explore_all_categories_Flyers_Folders_and_Marketing_Materials',
  'flyers-pamphlets': 'https://cms.cloudinary.vpsvc.com/image/upload/c_fill,ar_4:5,g_auto,dpr_auto,f_auto,w_450/India%20LOB/NVHP/New%20Home%20Page/Explore%20all%20categories/Explore_all_categories_Flyers_Folders_and_Marketing_Materials',
  'posters-large-format': 'https://cms.cloudinary.vpsvc.com/image/upload/c_fill,ar_4:5,g_auto,dpr_auto,f_auto,w_450/India%20LOB/NVHP/New%20Home%20Page/Explore%20all%20categories/Explore_all_categories_sign_poster',
  'corporate-stationery': 'https://cms.cloudinary.vpsvc.com/image/upload/c_fill,ar_4:5,g_auto,dpr_auto,f_auto,w_450/India%20LOB/NVHP/New%20Home%20Page/Explore%20all%20categories/Explore-all-categories_Stationery_-letterheads-and-Stamps-01',
  'stickers-labels': 'https://cms.cloudinary.vpsvc.com/image/upload/c_fill,ar_4:5,g_auto,dpr_auto,f_auto,w_450/India%20LOB/NVHP/New%20Home%20Page/Explore%20all%20categories/Explore-all-categories_Labels-and-Stickers-01',
};

const exampleProjectByService = {
  'business-cards': 2,
  'brochures-catalogues': 6,
  'flyers-pamphlets': 4,
  'posters-large-format': 3,
  'corporate-stationery': 2,
  'stickers-labels': 7,
};

export default function ServiceCategory({ onGetQuote }) {
  const categoriesRef = useRef(null);
  const dialogRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!selectedService || !dialog) return undefined;

    dialog.showModal();

    return () => {
      if (dialog.open) dialog.close();
    };
  }, [selectedService]);

  const scrollCategories = (direction) => {
    const categories = categoriesRef.current;
    categories?.scrollBy({
      left: direction * categories.clientWidth * 0.8,
      behavior: 'smooth',
    });
  };

  const selectedDetails = selectedService && printingProductDetails[selectedService.id];
  const selectedExample = selectedService && portfolioProjects.find(
    (project) => project.id === exampleProjectByService[selectedService.id]
  );

  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" aria-labelledby="print-categories-heading">
      <div className="mb-6 sm:mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">Print, your way</span>
          <h2 id="print-categories-heading" className="mt-2 font-outfit text-2xl font-extrabold text-brand-navy sm:text-3xl">
            Explore all categories
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Find the right format for your next idea, campaign, or brand essential.
          </p>
        </div>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={() => scrollCategories(-1)}
          aria-label="Scroll categories left"
          className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-brand-navy shadow-md transition-colors hover:border-brand-blue hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <div
          ref={categoriesRef}
          className="scrollbar-hidden flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 sm:gap-5"
          aria-label="Printing product categories"
        >
          {printingServices.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => setSelectedService(service)}
              aria-label={`View details for ${service.title}`}
              className="group w-[42%] min-w-36 max-w-56 shrink-0 snap-start text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue sm:w-[28%] lg:w-[17%]"
            >
              <span className="relative block aspect-[4/5] overflow-hidden rounded-xl border border-slate-200 bg-slate-100 sm:rounded-2xl">
                <img
                  src={categoryImageByService[service.id]}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
                />
                <span className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-navy/95 via-brand-navy/45 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 text-left font-outfit text-sm font-bold leading-snug text-white transition-colors duration-200 group-hover:text-brand-orange sm:p-4 sm:text-base">
                  <span>{service.title}</span>
                  <ArrowRight className="mb-0.5 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </span>
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => scrollCategories(1)}
          aria-label="Scroll categories right"
          className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-brand-navy shadow-md transition-colors hover:border-brand-blue hover:text-brand-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {selectedService && (
        <dialog
          ref={dialogRef}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              event.preventDefault();
              setSelectedService(null);
            }
          }}
          className="fixed inset-0 z-[80] m-0 grid h-dvh max-h-none w-screen max-w-none place-items-center overflow-y-auto border-0 bg-brand-navy/70 p-3 backdrop-blur-sm sm:p-6"
        >
          <div className="relative grid max-h-[92dvh] w-full max-w-5xl grid-cols-1 overflow-y-auto rounded-xl bg-white shadow-2xl sm:rounded-2xl md:grid-cols-[0.8fr_1.2fr]">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              aria-label="Close product details"
              autoFocus
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-brand-navy shadow-md transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <div className="min-h-48 bg-slate-100 md:sticky md:top-0 md:h-[92dvh] md:self-start">
              <img
                src={categoryImageByService[selectedService.id]}
                alt={selectedService.title}
                className="h-52 w-full object-cover md:h-full"
              />
            </div>

            <div className="flex flex-col p-5 sm:p-8">
              <span className="self-start rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-blue">
                {selectedService.category}
              </span>
              <h3 id="product-details-title" className="mt-3 pr-10 font-outfit text-2xl font-extrabold leading-tight text-brand-navy sm:text-3xl">
                {selectedService.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {selectedService.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-y border-slate-100 py-4">
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">Starting from</span>
                  <span className="font-outfit text-xl font-extrabold text-brand-navy">{selectedService.startingPrice}</span>
                </div>
                {selectedService.badge && (
                  <span className="rounded-full bg-orange-50 px-3 py-1.5 text-xs font-semibold text-brand-orange">
                    {selectedService.badge}
                  </span>
                )}
              </div>

              <h4 className="mt-5 font-outfit text-sm font-bold text-brand-navy">Key production specifications</h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {selectedService.specs.map((spec) => (
                  <li key={spec} className="flex items-start gap-2 text-sm leading-snug text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>

              {selectedDetails?.sections.map((section) => (
                <section key={section.title} className="mt-7 border-t border-slate-100 pt-5">
                  <h4 className="font-outfit text-lg font-bold text-brand-navy">{section.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{section.description}</p>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 rounded-lg bg-slate-50 px-3 py-2 text-sm leading-snug text-slate-700">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}

              {selectedExample && (
                <section className="mt-7 border-t border-slate-100 pt-5">
                  <h4 className="font-outfit text-lg font-bold text-brand-navy">From our project portfolio</h4>
                  <div className="mt-3 overflow-hidden rounded-xl border border-slate-100 bg-slate-50 sm:grid sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
                    <img
                      src={selectedExample.image}
                      alt={selectedExample.title}
                      loading="lazy"
                      decoding="async"
                      className="h-40 w-full object-cover sm:h-full sm:min-h-40"
                    />
                    <div className="p-4">
                      <h5 className="font-outfit text-base font-bold text-brand-navy">{selectedExample.title}</h5>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{selectedExample.description}</p>
                    </div>
                  </div>
                </section>
              )}

              {selectedDetails?.note && (
                <p className="mt-6 rounded-lg border border-blue-100 bg-blue-50/70 p-3 text-xs leading-relaxed text-slate-600">
                  {selectedDetails.note}
                </p>
              )}

              <div className="sticky bottom-0 mt-6 grid gap-2 border-t border-slate-100 bg-white py-4 sm:grid-cols-3">
                <button
                  type="button"
                  onClick={() => {
                    onGetQuote?.(selectedService);
                    setSelectedService(null);
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-orange px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-orange-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                >
                  Get a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <a
                  href="tel:9308762244"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm font-bold text-brand-navy transition-colors hover:border-brand-blue hover:text-brand-blue"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call Now
                </a>
                <a
                  href={`https://wa.me/919308762244?text=${encodeURIComponent('Hi Repro Services, I need a quote for ' + selectedService.title + '.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-emerald-700"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
}