export const siteConfig = {
  name: "NILKANTH WORLD EXIM",
  shortName: "Nilkanth World Exim",
  tagline: "India's Finest Spices & Agricultural Products for Global Markets",
  description: "Explore turmeric, cumin, red chilli, coriander, sesame seeds, isabgol and moringa from Nilkanth World Exim, based in Surat, Gujarat, India. Contact us for bulk product inquiries and international trade requirements.",
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
