import {
  PHONE_RAW,
  BUSINESS_NAME,
  BUSINESS_AREA,
  ADDRESS_STREET,
  ADDRESS_VILLAGE,
  ADDRESS_DISTRICT,
  ADDRESS_REGION,
  SOCIALS,
} from "@/shared/config/site";

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: BUSINESS_NAME,
    telephone: PHONE_RAW,
    sameAs: [SOCIALS.instagram],
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS_STREET,
      addressLocality: ADDRESS_VILLAGE,
      addressRegion: `${ADDRESS_DISTRICT}, ${ADDRESS_REGION}`,
      addressCountry: "KZ",
    },
    areaServed: BUSINESS_AREA,
    priceRange: "₸₸",
  };
}
