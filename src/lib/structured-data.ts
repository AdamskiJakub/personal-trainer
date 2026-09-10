import { site } from "@/lib/site";

/**
 * Bazowy adres strony. Tymczasowo domena Vercel — do podmiany razem z
 * `metadataBase` w layout.tsx, gdy ustalimy docelową domenę.
 */
const BASE_URL = "https://personal-trainer.vercel.app";

const CONTACT_EMAIL = site.contact.channels.email.value;
const FACEBOOK_URL = site.contact.channels.messenger.href;
const INSTAGRAM_URL = site.contact.channels.instagram.href;
const MAPS_URL = site.services.location.mapsUrl;

/**
 * Osoba — trener personalny. Główny byt opisujący stronę.
 */
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  name: site.name,
  jobTitle: site.role,
  description: site.hero.description,
  url: BASE_URL,
  email: `mailto:${CONTACT_EMAIL}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location,
    addressCountry: "PL",
  },
  sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
  knowsAbout: [
    "trening personalny",
    "trening siłowy",
    "trening funkcjonalny",
    "kickboxing",
    "przygotowanie motoryczne",
  ],
};

/**
 * Miejsce prowadzenia usług — siłownia, w której odbywają się treningi.
 * `SportsActivityLocation` jest trafniejszy niż ogólny `LocalBusiness`.
 */
export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "@id": `${BASE_URL}/#business`,
  name: `${site.name} — ${site.role}`,
  description: site.hero.description,
  url: BASE_URL,
  email: `mailto:${CONTACT_EMAIL}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.location,
    addressCountry: "PL",
  },
  areaServed: {
    "@type": "City",
    name: site.location,
  },
  hasMap: MAPS_URL,
  sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
  founder: {
    "@id": `${BASE_URL}/#person`,
  },
  makesOffer: [
    {
      "@type": "Offer",
      name: site.services.single.name,
      description: site.services.single.description,
      price: "120",
      priceCurrency: "PLN",
      url: `${BASE_URL}/#oferta`,
    },
    {
      "@type": "Offer",
      name: site.services.coaching.name,
      description: site.services.coaching.description,
      price: "1500",
      priceCurrency: "PLN",
      url: `${BASE_URL}/#oferta`,
    },
  ],
};

/**
 * Usługa — trening personalny wraz z wariantami cenowymi.
 */
export const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE_URL}/#service`,
  name: "Trening personalny",
  serviceType: "Trening personalny",
  description: site.services.intro,
  url: `${BASE_URL}/#oferta`,
  provider: {
    "@id": `${BASE_URL}/#person`,
  },
  areaServed: {
    "@type": "City",
    name: site.location,
  },
  offers: [
    {
      "@type": "Offer",
      name: site.services.single.name,
      description: site.services.single.description,
      price: "120",
      priceCurrency: "PLN",
    },
    ...site.services.packages.options.map((option) => ({
      "@type": "Offer" as const,
      name: `${site.services.packages.name} — ${option.count}`,
      description: option.per,
      price: option.price.replace(/\s*zł$/, ""),
      priceCurrency: "PLN",
    })),
    {
      "@type": "Offer",
      name: site.services.coaching.name,
      description: site.services.coaching.description,
      price: "1500",
      priceCurrency: "PLN",
    },
  ],
};

/**
 * FAQ — na podstawie pytań i odpowiedzi z sekcji FAQ.
 */
export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${BASE_URL}/#faq`,
  mainEntity: site.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

/**
 * Wszystkie bloki JSON-LD dla strony głównej.
 */
export const homeJsonLd = [
  personJsonLd,
  businessJsonLd,
  serviceJsonLd,
  faqJsonLd,
];
