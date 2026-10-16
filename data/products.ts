export interface Product {
  slug: string;
  name: string;
  hindiName?: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  characteristics: string[];
  availableForms: string[];
  packagingOptions: string[];
  specificationsNotice: string;
  commonInquiryTopics: string[];
  seoDescription: string;
}

export const products: Product[] = [
  {
    slug: "turmeric",
    name: "Turmeric",
    hindiName: "Haldi (हल्दी)",
    category: "Indian Spices",
    shortDescription: "Vibrant golden Indian turmeric available in whole dried fingers and finely ground powder for international commercial sourcing.",
    fullDescription: "Turmeric is one of India's most celebrated agricultural commodities, renowned for its distinctive deep golden-yellow color, earthy aroma, and natural culinary warmth. Sourced from key turmeric-producing belts in India, Nilkanth World Exim coordinates supply for food manufacturers, spice blenders, extraction units, and international distributors.",
    image: "/images/turmeric.webp",
    characteristics: [
      "Natural vibrant golden-orange pigmentation",
      "Earthy, aromatic and mildly warm pungency",
      "Cleaned, polished or unpolished dried fingers",
      "Finely milled powder option available",
      "Carefully dried to optimal moisture parameters"
    ],
    availableForms: [
      "Whole Dried Turmeric Fingers (Polished)",
      "Whole Dried Turmeric Fingers (Unpolished / Natural)",
      "Ground Pure Turmeric Powder",
      "Crushed / Turmeric Flakes"
    ],
    packagingOptions: [
      "25 kg / 50 kg PP Woven Bags with inner liner",
      "25 kg Multi-wall Kraft Paper Bags",
      "Jute Bags upon trade specification",
      "Custom bulk packaging by mutual agreement"
    ],
    specificationsNotice: "Physical purity, moisture tolerance, curcumin range, and granulation specifications are confirmed on a per-inquiry basis according to destination standards.",
    commonInquiryTopics: [
      "Curcumin content target",
      "Finger size and polishing requirement",
      "Moisture level requirement",
      "Container load capacity (FCL / LCL)"
    ],
    seoDescription: "Export-grade Indian Turmeric whole fingers and ground powder sourced and coordinated by Nilkanth World Exim, Surat, Gujarat. Request custom trade specifications and quotations."
  },
  {
    slug: "cumin-seeds",
    name: "Cumin Seeds",
    hindiName: "Jeera (जीरा)",
    category: "Spice Seeds",
    shortDescription: "Aromatic whole cumin seeds sourced from Gujarat and Rajasthan agricultural belts for international culinary and bulk spice trade.",
    fullDescription: "Cumin seeds (Jeera) represent one of Western India's primary agricultural commodities. Characterized by their distinct elongated shape, warm herbaceous flavor, and intense essential oil fragrance, cumin seeds are a cornerstone spice for worldwide spice processing and seasoning industries.",
    image: "/images/cumin-seeds.webp",
    characteristics: [
      "Distinctive elongated striated seeds",
      "Intense aromatic essential oil profile",
      "Natural warm, pungent culinary flavor",
      "Machine cleaned or Sortex cleaned availability",
      "Strict control over extraneous matter"
    ],
    availableForms: [
      "Whole Cumin Seeds (Sortex Cleaned 99% / 99.5% purity)",
      "Whole Cumin Seeds (Machine Cleaned)",
      "Ground Cumin Powder"
    ],
    packagingOptions: [
      "25 kg / 50 kg Polypropylene (PP) Bags",
      "Multi-ply Paper Bags with poly liner",
      "Jute Bags for traditional bulk handling",
      "Palletized container stuffing upon request"
    ],
    specificationsNotice: "Machine-clean or Sortex-clean purities, moisture limits, and volatile oil expectations are defined prior to contract confirmation.",
    commonInquiryTopics: [
      "Sortex cleaning requirement",
      "Purity percentage parameter",
      "Target shipment schedule",
      "Destination port phytosanitary protocols"
    ],
    seoDescription: "Indian Cumin Seeds (Jeera) export sourcing from Gujarat and Rajasthan. Machine and Sortex cleaned grades coordinated by Nilkanth World Exim."
  },
  {
    slug: "red-chilli",
    name: "Red Chilli",
    hindiName: "Lal Mirch (लाल मिर्च)",
    category: "Whole & Ground Spices",
    shortDescription: "Sun-dried whole red chillies and chilli powder offering balanced heat, rich color, and authentic aroma for global food industries.",
    fullDescription: "Indian red chillies are globally acknowledged for their varied pungency profiles and rich natural red color (ASTA values). Nilkanth World Exim handles trade inquiries for whole dried chillies with stem or stemless, as well as crushed flakes and ground chilli powder.",
    image: "/images/red-chilli.webp",
    characteristics: [
      "Deep natural crimson color",
      "Varying heat intensity tailored to buyer requirements",
      "Sun-dried with optimal moisture preservation",
      "Crisp, uniform dried pods with seeds intact",
      "Carefully screened for discoloration and blemishes"
    ],
    availableForms: [
      "Whole Dried Red Chilli with Stem",
      "Whole Dried Red Chilli Stemless",
      "Crushed Red Pepper Flakes / Pizza Cut",
      "Fine Ground Red Chilli Powder"
    ],
    packagingOptions: [
      "10 kg / 25 kg Compressed Cartons",
      "25 kg / 50 kg Polypropylene / Jute Bags",
      "Custom branded packaging upon mutual agreement"
    ],
    specificationsNotice: "SHU pungency rating, ASTA color value, stem percentage, and moisture limits are confirmed individually according to client specifications.",
    commonInquiryTopics: [
      "Stemless vs. with-stem preference",
      "Heat level / SHU requirement",
      "Color intensity preference",
      "Fumigation and shipping requirements"
    ],
    seoDescription: "Export-grade Indian whole dried red chillies and powder. Sourced and coordinated by Nilkanth World Exim, Surat, Gujarat. Request trade specifications."
  },
  {
    slug: "coriander-seeds",
    name: "Coriander Seeds",
    hindiName: "Dhaniya (धनिया)",
    category: "Spice Seeds",
    shortDescription: "Golden-green whole coriander seeds featuring a mild, citrusy-sweet aroma, thoroughly sorted for global spice blenders and food processors.",
    fullDescription: "Coriander seeds are a staple export commodity originating extensively from western and central agricultural regions of India. Their mellow floral, citrusy taste profile and high volatile oil concentration make them essential for curry powders, pickling spices, and condiment manufacturing.",
    image: "/images/coriander-seeds.webp",
    characteristics: [
      "Uniform round to oval seed morphology",
      "Delicate greenish-brown to golden hue",
      "Citrus-undertone, mild herbal aroma",
      "Machine cleaned and double-polished options",
      "Low moisture and low split percentage options"
    ],
    availableForms: [
      "Whole Coriander Seeds (Eagle Quality / Scooter Quality / Single/Double Polished)",
      "Split Coriander Seeds (Dhaniya Dal)",
      "Ground Coriander Powder"
    ],
    packagingOptions: [
      "25 kg / 40 kg / 50 kg PP Woven Bags",
      "Jute Bags",
      "Kraft Paper Bags upon request"
    ],
    specificationsNotice: "Splits ratio, whole seed size, machine cleaning or Sortex selection, and moisture limits are tailored to order agreements.",
    commonInquiryTopics: [
      "Single or double polish requirement",
      "Allowed split percentage",
      "Moisture and extraneous matter limits",
      "Packaging and container configuration"
    ],
    seoDescription: "High quality Indian Coriander Seeds (Dhaniya) for international B2B export. Coordinated by Nilkanth World Exim, Surat, Gujarat."
  },
  {
    slug: "sesame-seeds",
    name: "Sesame Seeds",
    hindiName: "Til (तिल)",
    category: "Oilseeds & Food Seeds",
    shortDescription: "Premium natural white, hulled, and brown sesame seeds prized for their clean nutty flavor and high purity across global bakery and confectionery sectors.",
    fullDescription: "India is among the world's leading growers and exporters of quality sesame seeds. Valued for their nutty crunch, nutrition, and oil yield, sesame seeds coordinated by Nilkanth World Exim serve bakeries, tahini makers, snack producers, and oil crushers worldwide.",
    image: "/images/sesame-seeds.webp",
    characteristics: [
      "Delicate, flat tear-shaped seeds",
      "Pristine pearlescent ivory to natural cream shade",
      "Mild, pleasant nutty fragrance and rich oil content",
      "Rigorous cleaning and deshelled/hulled options",
      "Sortex cleaned for high visual and culinary purity"
    ],
    availableForms: [
      "Natural White Sesame Seeds (99% / 99.95% Purity)",
      "Hulled Sesame Seeds (Mechanically Hulled / Auto-Sortex)",
      "Black Sesame Seeds",
      "Brown Sesame Seeds (Crushing Grade)"
    ],
    packagingOptions: [
      "25 kg / 50 kg Multi-wall Kraft Paper Bags",
      "25 kg / 50 kg PP Bags with inner poly liner",
      "Bulk container liner bags / Big Bags (1 MT Jumbo Bags)"
    ],
    specificationsNotice: "Purity levels (99.9% to 99.99%), FFA parameters, moisture, and microbiological standards are documented per commercial specification.",
    commonInquiryTopics: [
      "Natural white vs. hulled requirement",
      "Purity target (99.9% / 99.95%)",
      "Packaging type (Paper bags vs. PP)",
      "Import country customs regulations"
    ],
    seoDescription: "Natural white and hulled sesame seeds (Til) export from India. B2B bulk sourcing and coordination by Nilkanth World Exim, Surat."
  },
  {
    slug: "isabgol",
    name: "Isabgol (Psyllium Husk)",
    hindiName: "Isabgol (इसबगोल)",
    category: "Agricultural Commodities & Dietary Fibers",
    shortDescription: "High-grade Indian psyllium husk and psyllium seed powder, widely demanded across international nutraceutical and dietary fiber markets.",
    fullDescription: "Derived from the seeds of Plantago Ovata, Isabgol (Psyllium Husk) is an agricultural commodity where Gujarat and Rajasthan lead global production. Famed for its exceptional soluble fiber and swelling volume, psyllium is indispensable in functional foods, baking, and dietary formulations.",
    image: "/images/isabgol.webp",
    characteristics: [
      "Light white-to-cream fibrous flakes",
      "Outstanding natural swell volume and hydrocolloidal properties",
      "Mild, neutral taste profile",
      "Available across varied mesh purities (85%, 95%, 98%, 99%)",
      "Processed in hygienic agro facilities"
    ],
    availableForms: [
      "Psyllium Husk 85% Purity",
      "Psyllium Husk 95% Purity",
      "Psyllium Husk 98% / 99% Purity",
      "Psyllium Husk Powder (40 Mesh / 60 Mesh / 100 Mesh)",
      "Whole Psyllium Seeds"
    ],
    packagingOptions: [
      "25 kg Multi-wall Paper Bags with PE inner liner",
      "25 kg Fiber Drums / Corrugated Cartons",
      "Custom palletized shrink-wrapped units"
    ],
    specificationsNotice: "Swell volume (ml/g), purity percentage, light extraneous matter, and mesh sizing are confirmed according to customer pharmacopoeia or food standards.",
    commonInquiryTopics: [
      "Purity grade requirement (95% / 98% / 99%)",
      "Husk flakes vs. milled powder mesh",
      "Destination compliance (Food vs. Dietary supplement)",
      "Minimum consignment volume"
    ],
    seoDescription: "Export-grade Indian Isabgol (Psyllium Husk) and psyllium powder. Coordinated from Gujarat by Nilkanth World Exim. Request technical trade terms."
  },
  {
    slug: "moringa",
    name: "Moringa",
    hindiName: "Sahjan / Saragva (सहजन)",
    category: "Nutritional Botanical Commodities",
    shortDescription: "Dried Moringa Oleifera leaves, shadow-dried leaf powder, and moringa seeds harvested from fertile Indian agricultural plantations.",
    fullDescription: "Moringa Oleifera, known globally as the 'Miracle Tree', is an Indian native botanical commodity prized for its concentrated plant nutrients, antioxidants, and chlorophyll content. Nilkanth World Exim coordinates sourcing for botanical distributors, tea blenders, and superfood packaging enterprises.",
    image: "/images/moringa.webp",
    characteristics: [
      "Vivid emerald-green coloration",
      "Gentle, grassy herbal aroma",
      "Shadow dried to preserve natural chlorophyll and nutrients",
      "Microfine milling available for smooth solubility",
      "Cultivated with controlled agricultural practices"
    ],
    availableForms: [
      "Dried Whole / Crushed Moringa Oleifera Leaves (Tea Cut)",
      "Moringa Leaf Powder (Fine 80–100 Mesh)",
      "Moringa Oleifera Seeds (Crude / Decorticated)"
    ],
    packagingOptions: [
      "20 kg / 25 kg Multi-wall Kraft Bags with food-grade foil liner",
      "25 kg Fiber Drums",
      "Vacuum-sealed poly liners to maintain chlorophyll freshness"
    ],
    specificationsNotice: "Mesh sizing, moisture content (typically <8%), microbiological limits, and leaf cut size are confirmed against destination market standards.",
    commonInquiryTopics: [
      "Powder mesh vs. whole leaf cut",
      "Color retention and packaging barrier preferences",
      "Volume and frequency of supply",
      "Phytosanitary documentation"
    ],
    seoDescription: "Indian Moringa Oleifera leaf powder and dried leaves for export. Sourced and coordinated by Nilkanth World Exim, Surat, Gujarat."
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
