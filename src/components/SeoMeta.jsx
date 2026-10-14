import { useEffect } from 'react';

const pageMeta = {
  home: {
    title: 'Repro Services | Printing, Branding & Advertising in Patna, Bihar',
    description:
      'Repro Services offers premium printing, signage, and advertising solutions in Patna, Bihar. Explore custom business cards, ACP signboards, LED acrylic letters, hoardings, and high-impact marketing campaigns since 2005.',
    keywords:
      'Repro Services, Printing Patna, Branding Patna, Advertising Patna, Signage Bihar, Business Card Printing, ACP Signboard, 3D Acrylic Letters, Hoarding Printing'
  },
  about: {
    title: 'About Repro Services | Patna Printing & Branding Experts',
    description:
      'Learn about Repro Services, a Patna-based printing, branding, and advertising company delivering trusted commercial solutions across Bihar since 2005.',
    keywords: 'About Repro Services, Patna printing company, Bihar signage company, printing company in Patna'
  },
  printing: {
    title: 'Printing Services in Patna | Business Cards, Brochures, Posters',
    description:
      'Get premium commercial printing services in Patna for visiting cards, brochures, flyers, posters, stationery, labels, and product catalogues.',
    keywords: 'Printing services Patna, visiting cards printing Patna, brochure printing Bihar, poster printing in Patna'
  },
  signage: {
    title: 'Branding & Signage Services in Patna | ACP, Acrylic, Neon, LED Signs',
    description:
      'Custom signage and branding solutions in Patna including ACP signboards, acrylic letters, neon signs, glow signboards, fleet branding, and shop front displays.',
    keywords: 'Signage Patna, ACP signboard, 3D acrylic letters, neon signage, glow signboard, shop front branding'
  },
  advertising: {
    title: 'Advertising Services in Bihar | Hoardings, Stalls, Canopies & Media',
    description:
      'Explore hoardings, exhibition stalls, branded canopies, retail media, and hyperlocal newspaper inserts for effective advertising campaigns in Bihar.',
    keywords: 'Advertising services Bihar, hoarding printing Patna, exhibition stall fabrication, canopy printing, newspaper inserts'
  },
  portfolio: {
    title: 'Portfolio | Repro Services Projects in Patna & Bihar',
    description:
      'Browse Repro Services project portfolio featuring signage, printing, branding, advertising, and custom fabrication work across Bihar.',
    keywords: 'Repro Services portfolio, project gallery, signage projects Bihar, print work portfolio'
  },
  industries: {
    title: 'Industries We Serve | Repro Services Bihar',
    description:
      'Repro Services works with retail, education, healthcare, hospitality, and corporate sectors across Bihar with tailored print and branding solutions.',
    keywords: 'Industries we serve, retail branding Patna, healthcare signage, education printing Bihar'
  },
  booking: {
    title: 'Request a Quote | Repro Services Patna',
    description:
      'Submit your printing or branding project requirements to Repro Services for a free consultation and custom quote in Patna, Bihar.',
    keywords: 'Request quote Patna, custom printing quote, signage quote Repro Services, free estimate'
  },
  contact: {
    title: 'Contact Repro Services | Patna Printing & Signage Company',
    description:
      'Contact Repro Services in Patna for printing, branding, advertising, and signage consultations with a quick response from our expert team.',
    keywords: 'Contact Repro Services, Patna printing company, signage company contact, Bihar advertising company'
  },
  faq: {
    title: 'FAQ & Guides | Repro Services',
    description:
      'Get answers on printing options, signage materials, specs, turnaround times, and service guidance for commercial projects with Repro Services.',
    keywords: 'FAQ printing Patna, signage guide, brochure specifications, print material guide'
  }
};

const buildLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Repro Services',
  image: '/repro-logo.png',
  description:
    'Repro Services is a Patna-based printing, branding, signage, and advertising company delivering custom marketing and fabrication solutions across Bihar since 2005.',
  telephone: '+91 9308762244',
  email: 'contact@reproservices.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Nagina Market, Lala Thakur Lane, New Jagannathpura Road',
    addressLocality: 'Patna',
    addressRegion: 'Bihar',
    postalCode: '800027',
    addressCountry: 'IN'
  },
  areaServed: ['Patna', 'Bihar', 'India'],
  founder: 'Repro Services',
  foundingDate: '2005',
  sameAs: [
    'https://www.indiamart.com/repro-services/profile.html?srsltid=AU7gw4UPChTc4Np8rpJy97XAqjsWFZDvqTxekrJ2jPTLzg9-BvAidqwh'
  ],
  url: typeof window !== 'undefined' ? window.location.origin : 'https://reproservices.in'
});

export default function SeoMeta({ page = 'home' }) {
  const meta = pageMeta[page] || pageMeta.home;

  useEffect(() => {
    const setMetaTag = (selector, attr, value) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, value);
        document.head.appendChild(tag);
      }
      if (selector === 'meta[name="description"]') {
        tag.setAttribute('content', value);
      } else if (selector === 'meta[name="keywords"]') {
        tag.setAttribute('content', value);
      } else if (selector === 'meta[property="og:title"]') {
        tag.setAttribute('content', value);
      } else if (selector === 'meta[property="og:description"]') {
        tag.setAttribute('content', value);
      } else if (selector === 'meta[property="og:url"]') {
        tag.setAttribute('content', value);
      }
    };

    document.title = meta.title;
    setMetaTag('meta[name="description"]', 'name', 'description');
    setMetaTag('meta[name="keywords"]', 'name', 'keywords');
    setMetaTag('meta[property="og:title"]', 'property', 'og:title');
    setMetaTag('meta[property="og:description"]', 'property', 'og:description');
    setMetaTag('meta[property="og:url"]', 'property', 'og:url');

    const description = document.querySelector('meta[name="description"]');
    const keywords = document.querySelector('meta[name="keywords"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');

    if (description) description.setAttribute('content', meta.description);
    if (keywords) keywords.setAttribute('content', meta.keywords);
    if (ogTitle) ogTitle.setAttribute('content', meta.title);
    if (ogDescription) ogDescription.setAttribute('content', meta.description);
    if (ogUrl) ogUrl.setAttribute('content', window.location.href);

    let scriptTag = document.querySelector('#repro-services-ld-json');
    const schema = buildLocalBusinessSchema();

    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'repro-services-ld-json';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    scriptTag.textContent = JSON.stringify(schema);
  }, [meta]);

  return null;
}
