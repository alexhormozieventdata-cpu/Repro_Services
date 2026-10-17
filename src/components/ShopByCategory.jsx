import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Clock,
  FileText,
  Megaphone,
  Package,
  PanelsTopLeft,
  Printer,
  Signpost,
  Tag,
} from 'lucide-react';

const categories = [
  {
    title: 'Fast Print Options',
    icon: Clock,
    page: 'printing',
  },
  {
    title: 'Business Cards',
    icon: Briefcase,
    page: 'printing',
  },
  {
    title: 'Stationery',
    icon: FileText,
    page: 'printing',
  },
  {
    title: 'Bulk Printing',
    icon: Package,
    page: 'printing',
  },
  {
    title: 'Labels & Stickers',
    icon: Tag,
    page: 'printing',
  },
  {
    title: 'Signage & Banners',
    icon: Signpost,
    page: 'signage',
  },
  {
    title: 'Acrylic & LED Signs',
    icon: PanelsTopLeft,
    page: 'signage',
  },
  {
    title: 'Standees & Displays',
    icon: Printer,
    page: 'signage',
  },
  {
    title: 'Outdoor Advertising',
    icon: Megaphone,
    page: 'advertising',
  },
  {
    title: 'Booklets & Catalogues',
    icon: BookOpen,
    page: 'printing',
  },
];

export default function ShopByCategory({ onNavigate }) {
  return (
    <section className="bg-white py-6 sm:py-8" aria-labelledby="shop-by-category-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => onNavigate('booking')}
          className="mb-7 flex min-h-11 w-full flex-col items-center justify-center gap-1 rounded-md bg-brand-orange px-4 py-2 text-center text-white transition-colors hover:bg-brand-orange-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy sm:flex-row sm:gap-3"
        >
          <span className="text-xs font-extrabold uppercase sm:text-sm">Repro Services</span>
          <span className="hidden text-white/80 sm:inline" aria-hidden="true">|</span>
          <span className="text-xs font-semibold sm:text-sm">Printing · Branding · Advertising in Patna</span>
          <span className="inline-flex items-center gap-1 text-[11px] font-bold uppercase sm:ml-2 sm:text-xs">
            Get a Quote <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </button>

        <h2 id="shop-by-category-title" className="sr-only">Shop by category</h2>
        <div className="scrollbar-hidden flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:gap-4 md:grid md:grid-cols-10 md:gap-3 md:overflow-visible">
          {categories.map(({ title, icon: Icon, page }) => (
            <button
              key={title}
              type="button"
              onClick={() => onNavigate(page)}
              className="group flex w-24 shrink-0 snap-start flex-col items-center gap-2 text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue sm:w-28 md:w-auto"
            >
              <span className="flex h-14 w-14 items-center justify-center text-brand-blue transition-colors group-hover:text-brand-orange sm:h-16 sm:w-16">
                <Icon className="h-11 w-11 stroke-[1.7] sm:h-12 sm:w-12" aria-hidden="true" />
              </span>
              <span className="min-h-9 text-xs font-semibold leading-tight text-brand-navy group-hover:text-brand-blue sm:text-sm">
                {title}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-4 flex justify-end border-t border-slate-100 pt-3">
          <button
            type="button"
            onClick={() => onNavigate('industries')}
            className="inline-flex items-center gap-1 text-sm font-bold text-brand-blue transition-colors hover:text-brand-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            Shop by industry <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}