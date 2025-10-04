export const organizationSchema = {
  "@type": "Organization",
  "@id": "https://reviverstudio.com/#organization",
  name: "Reviver Studio",
  url: "https://reviverstudio.com",
  logo: "https://reviverstudio.com/logo.png",
  description: "Premium design and motion agency specializing in brand strategy, identity design, digital products, and motion graphics.",
  foundingDate: "2024",
  founder: {
    "@type": "Person",
    name: "Ritu Saxena",
    email: "ritu@reviverstudio.com",
    jobTitle: "Founder & Creative Director"
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+917985665746",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"]
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN"
  },
  sameAs: [
    "https://www.instagram.com/thereviverstudio",
    "https://wa.me/+917985665746"
  ],
  serviceArea: {
    "@type": "Country",
    name: "India"
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Design Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Brand Strategy",
        description: "Positioning, naming, messaging, and go-to-market foundations."
      },
      {
        "@type": "Offer",
        name: "Identity Design", 
        description: "Logos, visual systems, typography, color, and brand guidelines."
      },
      {
        "@type": "Offer",
        name: "Motion & 3D",
        description: "Title sequences, product animations, and dynamic brand assets."
      },
      {
        "@type": "Offer",
        name: "Product Design (UI/UX)",
        description: "Web/app flows, wireframes, design systems, and prototypes."
      },
      {
        "@type": "Offer", 
        name: "Websites & CMS",
        description: "Marketing sites, headless CMS, and high-performance builds."
      }
    ]
  }
} as const;
