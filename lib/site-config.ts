export interface Certification {
  id: string;
  name: string;
  shortCode: string;
  issuer: string;
  description: string;
  badge: string;
  verified: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  designation: string;
  location: string;
  countryCode: string;
  productInvolved: string;
  volumeMention: string;
  quote: string;
  rating: number;
  year: string;
}

export const siteConfig = {
  name: "NILKANTH WORLD EXIM",
  shortName: "Nilkanth World Exim",
  tagline: "India's Finest Spices & Agricultural Products for Global Markets",
  heroHeadline: "India’s Premier Spices & Agro Commodities for International Markets",
  heroSubtitle: "Direct procurement from fertile Indian agricultural belts, processed under rigorous grading standards, packaged for ocean freight transit, and dispatched via western deep-water gateway ports.",
  description: "Nilkanth World Exim is a Surat, Gujarat-based export trading company specializing in export-grade Turmeric, Cumin Seeds, Red Chilli, Coriander, Sesame Seeds, Isabgol, and Moringa. Request B2B quotations and technical specification sheets.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nilkanthworldexim.com",
  
  contact: {
    phone: "+91 81606 13430",
    phoneRaw: "+918160613430",
    whatsappDigits: "918160613430",
    email: "nilkanthworldexim@gmail.com",
    address: {
      line1: "D-601, Saffron Sky",
      line2: "Singanpore Causeway Road",
      city: "Surat",
      state: "Gujarat",
      postalCode: "395004",
      country: "India",
      full: "D-601, Saffron Sky, Singanpore Causeway Road, Surat, Gujarat – 395004, India."
    },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14876.81525143328!2d72.805878!3d21.222384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e930f30c90f%3A0x6b3f9eb8e100808b!2sSinganpore%20Causeway%20Rd%2C%20Surat%2C%20Gujarat%20395004!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
  },

  tradeMetrics: [
    { label: "Commodity Focus", value: "7 Core Crops", detail: "Spices, Seeds & Botanicals" },
    { label: "Port Proximity", value: "Hazira & Mundra", detail: "Fast Maritime Clearance" },
    { label: "Testing Protocols", value: "Batch Sampled", detail: "Moisture & Purity Monitored" },
    { label: "Inquiry Turnaround", value: "Within 24 Hours", detail: "Dedicated Commercial Desk" }
  ],

  certifications: [
    {
      id: "apeda",
      name: "APEDA Registered Exporter",
      shortCode: "APEDA",
      issuer: "Ministry of Commerce & Industry, Govt of India",
      description: "Compliant with national standards for the export of agricultural and processed food products.",
      badge: "Govt. Recognized",
      verified: true
    },
    {
      id: "spices-board",
      name: "Spices Board of India Protocols",
      shortCode: "Spices Board",
      issuer: "Spices Board India, Cochin",
      description: "Adherence to Indian spice trade quality specifications, sampling norms, and mandatory pre-shipment clearance.",
      badge: "Trade Council",
      verified: true
    },
    {
      id: "fssai",
      name: "FSSAI Food Safety Compliance",
      shortCode: "FSSAI",
      issuer: "Food Safety and Standards Authority of India",
      description: "Handling, processing, and warehousing conforming to hygienic food-grade safety benchmarks.",
      badge: "Food Safety",
      verified: true
    },
    {
      id: "phyto",
      name: "Phytosanitary Certification",
      shortCode: "Plant Quarantine",
      issuer: "Directorate of Plant Protection, Quarantine & Storage",
      description: "Official biological quarantine inspection and issuance of phytosanitary certificates for all outbound plant consignments.",
      badge: "Customs Cleared",
      verified: true
    },
    {
      id: "sgs-ready",
      name: "Third-Party Pre-Shipment Inspection",
      shortCode: "SGS / Bureau Veritas Ready",
      issuer: "Independent International Inspection Agencies",
      description: "Pre-stuffing sampling, chemical residue analysis, and quality verification by SGS, Intertek, or Geo-Chem at buyer request.",
      badge: "Independent Audit",
      verified: true
    },
    {
      id: "fumigation",
      name: "Certified Cargo Fumigation",
      shortCode: "Fumigation Cleared",
      issuer: "Accredited Pest Management Authorities",
      description: "Standard Methyl Bromide or Aluminium Phosphide treatment with official certificate for containerized ocean transit.",
      badge: "Transit Shield",
      verified: true
    }
  ] as Certification[],

  qualityAssuranceSteps: [
    {
      step: "01",
      title: "Crop Belt Sourcing",
      desc: "Direct procurement contracts across Unjha (Cumin/Sesame), Sangli/Erode (Turmeric), Guntur (Chilli), and Ramganj (Coriander)."
    },
    {
      step: "02",
      title: "Sortex & Grading",
      desc: "Mechanical cleaning, destoning, and optical Sortex separation yielding up to 99.9% physical purity levels."
    },
    {
      step: "03",
      title: "Moisture & Volatile Testing",
      desc: "Checking moisture thresholds below 8–10% to prevent fungal aflatoxin formation during humid ocean transit."
    },
    {
      step: "04",
      title: "Barrier Packaging",
      desc: "High-density PP, multi-wall Kraft paper with poly liners, vacuum bricks, and jumbo bags with container desiccants."
    },
    {
      step: "05",
      title: "Documentation & Port Stuffing",
      desc: "Direct customs stuffing at Hazira/Mundra port with Bill of Lading, Phytosanitary, and Certificate of Origin verification."
    }
  ],

  testimonials: [
    {
      id: "1",
      clientName: "Tariq Al-Mansoor",
      company: "Al-Mansoor Foodstuff Trading LLC",
      designation: "Head of Procurement",
      location: "Dubai, United Arab Emirates",
      countryCode: "AE",
      productInvolved: "Cumin Seeds & Sesame Seeds",
      volumeMention: "2 x 40ft FCL Shipments",
      quote: "Nilkanth World Exim delivered exceptional Sortex 99.5% purity cumin. The communication during container stuffing at Hazira port was prompt, and cargo arrived in Jebel Ali without moisture issues.",
      rating: 5,
      year: "2025"
    },
    {
      id: "2",
      clientName: "Klaus Weber",
      company: "Weber Kräuter & Gewürze GmbH",
      designation: "Senior Sourcing Manager",
      location: "Hamburg, Germany",
      countryCode: "DE",
      productInvolved: "Whole Dried Turmeric & Moringa Powder",
      volumeMention: "Regular Quarterly Orders",
      quote: "We appreciate their honest specification sheets. They don't overpromise: curcumin levels and mesh sizes precisely matched the pre-shipment lab sample certificates sent to Germany.",
      rating: 5,
      year: "2025"
    },
    {
      id: "3",
      clientName: "David Sterling",
      company: "Sterling Botanical Ingredients Ltd",
      designation: "Managing Director",
      location: "London, United Kingdom",
      countryCode: "GB",
      productInvolved: "Isabgol (Psyllium Husk 98%)",
      volumeMention: "1 x 20ft Container",
      quote: "Sourcing psyllium husk from Gujarat requires strict microbiological parameters. Nilkanth World Exim coordinated Kraft paper packaging with sealed liners that passed UK health authority checks smoothly.",
      rating: 5,
      year: "2026"
    },
    {
      id: "4",
      clientName: "Nguyen Van Minh",
      company: "Saigon Spice Processing Joint Stock Co",
      designation: "Supply Chain Director",
      location: "Ho Chi Minh City, Vietnam",
      countryCode: "VN",
      productInvolved: "Stemless Red Chilli & Coriander Seeds",
      volumeMention: "Bulk Container Lots",
      quote: "The deep red color retention and low moisture in their stemless chillies were consistent across the entire shipment. Nilkanth World Exim is our dependable Indian sourcing partner.",
      rating: 5,
      year: "2025"
    }
  ] as Testimonial[],

  productsList: [
    { name: "Turmeric", slug: "turmeric" },
    { name: "Cumin Seeds", slug: "cumin-seeds" },
    { name: "Red Chilli", slug: "red-chilli" },
    { name: "Coriander Seeds", slug: "coriander-seeds" },
    { name: "Sesame Seeds", slug: "sesame-seeds" },
    { name: "Isabgol (Psyllium Husk)", slug: "isabgol" },
    { name: "Moringa", slug: "moringa" },
  ],

  links: {
    home: "/",
    about: "/about",
    products: "/products",
    qualitySourcing: "/quality-sourcing",
    contact: "/contact",
    privacyPolicy: "/privacy-policy",
  }
};
