export interface ProductSpec {
  parameter: string;
  value: string;
  method?: string;
}

export interface Product {
  slug: string;
  name: string;
  hindiName?: string;
  botanicalName: string;
  hsCode: string;
  category: string;
  originBelts: string;
  cropSeason: string;
  moq: string;
  shelfLife: string;
  containerCapacity: {
    fcl20: string;
    fcl40: string;
  };
  shortDescription: string;
  fullDescription: string;
  image: string;
  characteristics: string[];
  availableForms: string[];
  packagingOptions: string[];
  specifications: ProductSpec[];
  specificationsNotice: string;
  commonInquiryTopics: string[];
  seoDescription: string;
}

export const products: Product[] = [
  {
    slug: "turmeric",
    name: "Turmeric",
    hindiName: "Haldi (हल्दी)",
    botanicalName: "Curcuma longa",
    hsCode: "0910.30.20 (Whole) / 0910.30.30 (Powder)",
    category: "Indian Spices",
    originBelts: "Sangli (Maharashtra), Erode / Salem (Tamil Nadu), Nizamabad (Telangana)",
    cropSeason: "February to April (Peak Arrivals)",
    moq: "1 x 20ft FCL (Approx. 18 Metric Tons)",
    shelfLife: "24 months when stored in cool, dry conditions away from sunlight",
    containerCapacity: {
      fcl20: "18 MT (in 25kg / 50kg PP/Paper bags)",
      fcl40: "26 MT (Palletized or Floor Loaded)"
    },
    shortDescription: "Vibrant golden Indian turmeric available in whole dried fingers (polished/unpolished) and pure ground powder for international commercial sourcing.",
    fullDescription: "Turmeric is one of India's most celebrated agricultural commodities, renowned for its distinctive deep golden-yellow color, rich essential curcuminoids, and warm earthy aroma. Sourced from primary harvesting belts in Western and Southern India, Nilkanth World Exim coordinates export consignments for industrial food blenders, spice extractors, nutraceutical manufacturers, and international distributors.",
    image: "/images/turmeric.webp",
    characteristics: [
      "Natural vibrant golden-orange pigmentation with high color retention",
      "Earthy, aromatic and mildly warm pungency",
      "Available as double-polished, single-polished, or natural unpolished fingers",
      "Ultra-fine ground powder option (60–80 mesh) with uniform granulation",
      "Thoroughly sun-dried to optimal moisture thresholds under 10%"
    ],
    availableForms: [
      "Whole Dried Turmeric Fingers (Double Polished / Salem / Nizamabad / Rajapore)",
      "Whole Dried Turmeric Fingers (Natural Unpolished / Organic Farm Grade)",
      "Pure Ground Turmeric Powder (Micro-fine 80 Mesh)",
      "Crushed / Turmeric Flakes for oleoresin extraction"
    ],
    packagingOptions: [
      "25 kg / 50 kg PP Woven Bags with inner HDPE moisture barrier liner",
      "25 kg Multi-wall Kraft Paper Bags with PE barrier",
      "Traditional Jute / Hessian Bags with food-grade stencil marking",
      "Custom palletized units with stretch film & container desiccants"
    ],
    specifications: [
      { parameter: "Curcumin Content", value: "2.5% to 5.0% (Graded per requirement)", method: "HPLC / Spectrophotometric" },
      { parameter: "Moisture Content", value: "Max 10.0%", method: "Oven Dry Method" },
      { parameter: "Total Ash", value: "Max 7.0%", method: "Gravimetric" },
      { parameter: "Acid Insoluble Ash", value: "Max 1.0%", method: "Gravimetric" },
      { parameter: "Physical Purity", value: "98.5% to 99.5% Min", method: "Visual & Mechanical Sieve" },
      { parameter: "Extraneous Matter", value: "Max 1.0%", method: "Manual Inspection" },
      { parameter: "Defective Fingers", value: "Max 3.0%", method: "Visual Sorting" }
    ],
    specificationsNotice: "Exact curcumin percentage, finger polishing grade, and microbiological parameters are confirmed individually according to destination customs and food safety regulations.",
    commonInquiryTopics: [
      "Curcumin content target (e.g. 2.5%, 3%, or 5%+)",
      "Polished vs. Unpolished finger preference",
      "Moisture parameter threshold",
      "FOB Hazira/Mundra vs. CIF Destination Seaport quote"
    ],
    seoDescription: "Export-grade Indian Turmeric whole fingers and ground powder sourced and coordinated by Nilkanth World Exim, Surat, Gujarat. Request custom trade specifications and quotations."
  },
  {
    slug: "cumin-seeds",
    name: "Cumin Seeds",
    hindiName: "Jeera (जीरा)",
    botanicalName: "Cuminum cyminum",
    hsCode: "0909.31.29 (Whole) / 0909.32.00 (Crushed/Ground)",
    category: "Spice Seeds",
    originBelts: "Unjha / Saurashtra (Gujarat), Nagaur / Jodhpur (Rajasthan)",
    cropSeason: "February to April (Main Harvest)",
    moq: "1 x 20ft FCL (Approx. 13–14 Metric Tons)",
    shelfLife: "24 months in sealed barrier bags in a cool, ventilated environment",
    containerCapacity: {
      fcl20: "13 to 14 MT (in 25kg PP bags)",
      fcl40: "26 to 27 MT (Floor stuffed)"
    },
    shortDescription: "Aromatic whole cumin seeds sourced from Gujarat and Rajasthan agricultural belts for international culinary, seasoning, and bulk spice trade.",
    fullDescription: "Cumin seeds (Jeera) represent one of Western India's primary agricultural commodities, with the Unjha Mandi in Gujarat serving as the global trade epicentre. Characterized by their distinct elongated striated shape, warm herbaceous flavor, and intense essential oil fragrance, cumin seeds coordinated by Nilkanth World Exim cater to world-leading spice blenders, culinary condiment manufacturers, and food service importers.",
    image: "/images/cumin-seeds.webp",
    characteristics: [
      "Distinctive elongated, boat-shaped striated seeds with sharp tip",
      "High natural volatile oil profile (2.5% to 4.0% v/w)",
      "Natural warm, pungent, earthy culinary aroma",
      "Available across Machine Cleaned and Sortex Cleaned purities",
      "Rigid screening for dead seeds, stones, and foreign matters"
    ],
    availableForms: [
      "Whole Cumin Seeds (Sortex Cleaned 99.5% Purity / Singapore Quality)",
      "Whole Cumin Seeds (Europe Quality / 99% Sortex)",
      "Whole Cumin Seeds (Machine Cleaned 98% / 99%)",
      "Pure Ground Cumin Powder (Fine 60–80 Mesh)"
    ],
    packagingOptions: [
      "25 kg / 50 kg Polypropylene (PP) Bags with inner poly liner",
      "25 kg Multi-ply Kraft Paper Bags with PE inner liner",
      "Traditional Jute Bags with exterior protective covers",
      "Palletized container stuffing with thermal desiccants"
    ],
    specifications: [
      { parameter: "Physical Purity", value: "99.0% / 99.5% / 99.9% (Sortex Cleaned)", method: "Optical Sortex Inspection" },
      { parameter: "Moisture Content", value: "Max 8.0% to 9.0%", method: "Karl Fischer / Vacuum Oven" },
      { parameter: "Volatile Essential Oil", value: "Min 2.5% to 3.5%", method: "Clevenger Distillation" },
      { parameter: "Total Ash", value: "Max 8.5%", method: "Gravimetric" },
      { parameter: "Acid Insoluble Ash", value: "Max 1.0%", method: "Gravimetric" },
      { parameter: "Foreign Organic Matter", value: "Max 0.5%", method: "Manual Inspection" },
      { parameter: "Salmonella", value: "Absent in 25g", method: "Microbiological Culture" }
    ],
    specificationsNotice: "Machine-clean vs. Sortex-clean purity thresholds, volatile oil content, and destination pesticide MRL compliance parameters are verified prior to contract confirmation.",
    commonInquiryTopics: [
      "Sortex purity requirement (99% vs. 99.5% vs. 99.9%)",
      "Volatile oil minimum threshold",
      "Container capacity and target dispatch date",
      "Phytosanitary & Fumigation certificate specifications"
    ],
    seoDescription: "Indian Cumin Seeds (Jeera) export sourcing from Gujarat and Rajasthan. Machine and Sortex cleaned grades coordinated by Nilkanth World Exim."
  },
  {
    slug: "red-chilli",
    name: "Red Chilli",
    hindiName: "Lal Mirch (लाल मिर्च)",
    botanicalName: "Capsicum annuum",
    hsCode: "0904.21.10 (Whole Dried) / 0904.22.11 (Powder)",
    category: "Whole & Ground Spices",
    originBelts: "Guntur (Andhra Pradesh), Byadagi (Karnataka), Warangal (Telangana)",
    cropSeason: "January to May",
    moq: "1 x 40ft HC (Approx. 12–14 MT due to volume bulkiness) or 1 x 20ft (6 MT)",
    shelfLife: "12–18 months stored in moisture-free, dry cold storage",
    containerCapacity: {
      fcl20: "6 to 7 MT (in compressed cartons / gunny bags)",
      fcl40: "12 to 14 MT (40ft High Cube Container)"
    },
    shortDescription: "Sun-dried whole red chillies and pure chilli powder offering balanced heat, high ASTA natural color, and authentic aroma for global food industries.",
    fullDescription: "Indian red chillies are globally acknowledged for their varied pungency profiles (Scoville Heat Units) and rich natural red color (ASTA values). Sourced from Guntur and Byadagi agricultural markets, Nilkanth World Exim handles trade inquiries for whole dried chillies with stem, stemless, crushed pepper flakes (pizza cut), and fine ground chilli powder.",
    image: "/images/red-chilli.webp",
    characteristics: [
      "Deep vibrant red natural skin with uniform gloss",
      "Balanced Scoville heat levels (20,000 to 90,000 SHU depending on variety)",
      "Sun-dried with optimal moisture preservation preventing mold",
      "Intact pods with seeds firmly retained",
      "Graded and screened for discolored, stained, or broken pods"
    ],
    availableForms: [
      "Whole Dried Red Chilli with Stem (Teja, Sanam S4, Byadagi, 334)",
      "Whole Dried Red Chilli Stemless (Hand Selected)",
      "Crushed Red Chilli Flakes with Seeds (Pizza Cut)",
      "Fine Ground Red Chilli Powder (ASTA 40 to 120)"
    ],
    packagingOptions: [
      "10 kg / 25 kg Compressed Corrugated Cartons",
      "25 kg Jute / Gunny Bags with poly lining",
      "10 kg / 20 kg Multi-wall paper bags for chilli powder",
      "Custom branded packaging upon mutual order agreement"
    ],
    specifications: [
      { parameter: "Scoville Heat Units (SHU)", value: "20,000 to 80,000+ SHU (Per crop variety)", method: "HPLC Method" },
      { parameter: "Color Value (ASTA)", value: "50 to 120+ ASTA", method: "ASTA 20.1 Analytical Method" },
      { parameter: "Moisture Content", value: "Max 10.0% to 11.0%", method: "Oven Drying" },
      { parameter: "Total Ash", value: "Max 8.0%", method: "Gravimetric" },
      { parameter: "Broken / Discolored Pods", value: "Max 2.0% (Hand Selected)", method: "Visual Inspection" },
      { parameter: "Aflatoxin (B1+B2+G1+G2)", value: "Compliant with destination norms (<5 to 10 ppb)", method: "HPLC / ELISA" }
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
    botanicalName: "Coriandrum sativum",
    hsCode: "0909.21.10 (Whole) / 0909.22.00 (Crushed/Ground)",
    category: "Spice Seeds",
    originBelts: "Ramganj Mandi / Kota (Rajasthan), Guna (Madhya Pradesh), Saurashtra (Gujarat)",
    cropSeason: "February to April",
    moq: "1 x 20ft FCL (Approx. 9–10 Metric Tons due to light seed density)",
    shelfLife: "24 months stored in moisture-proof packaging",
    containerCapacity: {
      fcl20: "9 to 10 MT (in 25kg PP bags)",
      fcl40: "19 to 20 MT (40ft High Cube Container)"
    },
    shortDescription: "Golden-green whole coriander seeds featuring a mild, citrusy-sweet aroma, thoroughly sorted for global spice blenders and food processors.",
    fullDescription: "Coriander seeds are a staple export commodity originating extensively from western and central agricultural regions of India. Their mellow floral, citrusy taste profile and high volatile oil concentration make them essential for curry powders, pickling spices, and condiment manufacturing.",
    image: "/images/coriander-seeds.webp",
    characteristics: [
      "Uniform round to oval seed morphology with prominent ridges",
      "Delicate greenish-brown to golden hue",
      "Citrus-undertone, mild herbal essential oil aroma",
      "Machine cleaned, Sortex cleaned, and double-polished options",
      "Low moisture and low split percentage options"
    ],
    availableForms: [
      "Whole Coriander Seeds (Eagle Quality / Badami / Scooter Quality)",
      "Whole Coriander Seeds (Single Polished & Double Polished)",
      "Split Coriander Seeds (Dhaniya Dal / Roasted & Salted option)",
      "Pure Ground Coriander Powder (Fine 60 Mesh)"
    ],
    packagingOptions: [
      "25 kg / 40 kg / 50 kg PP Woven Bags with inner liner",
      "25 kg Multi-wall Kraft Paper Bags",
      "Jute Bags with moisture protective liners"
    ],
    specifications: [
      { parameter: "Physical Purity", value: "98.5% to 99.5% Min", method: "Mechanical Screening & Sortex" },
      { parameter: "Moisture Content", value: "Max 9.0%", method: "Moisture Balance" },
      { parameter: "Splits Percentage", value: "Max 5.0% to 8.0% (Per grade)", method: "Manual Count" },
      { parameter: "Volatile Essential Oil", value: "Min 0.3% to 0.6% v/w", method: "Clevenger Method" },
      { parameter: "Extraneous Matter", value: "Max 0.5% to 1.0%", method: "Visual Separation" },
      { parameter: "Total Ash", value: "Max 7.0%", method: "Gravimetric" }
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
    botanicalName: "Sesamum indicum",
    hsCode: "1207.40.90 (Natural / Hulled)",
    category: "Oilseeds & Food Seeds",
    originBelts: "Gujarat (Saurashtra / Kutch), Rajasthan, Uttar Pradesh",
    cropSeason: "October to December (Kharif) & May to July (Summer Crop)",
    moq: "1 x 20ft FCL (Approx. 19 Metric Tons)",
    shelfLife: "18 months in dry, humidity-controlled storage",
    containerCapacity: {
      fcl20: "19 MT (in 25kg / 50kg Paper/PP bags)",
      fcl40: "27 MT (Floor Loaded)"
    },
    shortDescription: "Premium natural white, mechanically hulled, and brown sesame seeds prized for their clean nutty flavor and high purity across global bakery and confectionery sectors.",
    fullDescription: "India is among the world's leading growers and exporters of quality sesame seeds. Valued for their nutty crunch, high oil yield, and nutrition, sesame seeds coordinated by Nilkanth World Exim serve bakeries, tahini makers, snack producers, and oil crushers worldwide.",
    image: "/images/sesame-seeds.webp",
    characteristics: [
      "Delicate, flat tear-shaped seeds with uniform pearl finish",
      "Pristine pearlescent ivory to natural cream shade",
      "Mild, pleasant nutty fragrance and rich oil content (Min 48–50%)",
      "Rigorous cleaning and mechanically hulled options",
      "Sortex cleaned for high visual and culinary purity (up to 99.99%)"
    ],
    availableForms: [
      "Natural White Sesame Seeds (99% / 99.5% / 99.9% Purity)",
      "Mechanically Hulled Sesame Seeds (Auto-Sortex 99.95% / 99.99% Purity)",
      "Black Sesame Seeds (Natural / Sortex Cleaned)",
      "Brown Sesame Seeds (Crushing & Oil extraction grade)"
    ],
    packagingOptions: [
      "25 kg / 50 kg Multi-wall Kraft Paper Bags with PE inner barrier",
      "25 kg / 50 kg PP Bags with food-grade poly liner",
      "1 Metric Ton (1000 kg) Heavy Duty Jumbo Big Bags",
      "Vacuum-sealed barrier packs for specialized confectioneries"
    ],
    specifications: [
      { parameter: "Physical Purity", value: "99.9% to 99.99% (Hulled / Sortex)", method: "Sortex Optical Sorter" },
      { parameter: "Oil Content", value: "Min 48.0% to 50.0%", method: "Soxhlet Solvent Extraction" },
      { parameter: "Moisture Content", value: "Max 4.5% to 5.0%", method: "Vacuum Oven Method" },
      { parameter: "Free Fatty Acids (FFA)", value: "Max 1.0% to 1.5%", method: "Titrimetric" },
      { parameter: "Dark Seeds (for Hulled)", value: "Max 0.05% to 0.10%", method: "Sortex Color Camera" },
      { parameter: "Salmonella", value: "Absent in 25g", method: "Microbiological Protocol" }
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
    botanicalName: "Plantago ovata",
    hsCode: "1211.90.32 (Psyllium Husk) / 1211.90.31 (Psyllium Seeds)",
    category: "Agricultural Commodities & Dietary Fibers",
    originBelts: "Sidhpur / Mehsana / Patan (Gujarat), Jalore (Rajasthan)",
    cropSeason: "February to April",
    moq: "1 x 20ft FCL (Approx. 9–10 Metric Tons due to light, fibrous bulk density)",
    shelfLife: "36 months in moisture-sealed barrier packaging",
    containerCapacity: {
      fcl20: "9 to 10 MT (in 25kg Kraft Paper bags with foil/PE liner)",
      fcl40: "19 to 20 MT (40ft High Cube Container)"
    },
    shortDescription: "High-grade Indian psyllium husk and psyllium seed powder, widely demanded across international nutraceutical and dietary fiber markets.",
    fullDescription: "Derived from the seeds of Plantago Ovata, Isabgol (Psyllium Husk) is an agricultural commodity where Gujarat and Rajasthan lead global production. Famed for its exceptional soluble dietary fiber and water-swelling volume, psyllium is indispensable in functional foods, gluten-free baking, and dietary supplement formulations.",
    image: "/images/isabgol.webp",
    characteristics: [
      "Light white-to-cream fibrous flakes with high natural mucilage",
      "Outstanding natural swell volume (Min 40 to 50+ ml/g)",
      "Neutral taste and odor suitable for food processing",
      "Available across varied pharmaceutical and food purities (85% to 99%)",
      "Cleaned and processed in hygienic agro-milling environments"
    ],
    availableForms: [
      "Psyllium Husk 99% Extra Pure White Grade",
      "Psyllium Husk 98% Premium Export Grade",
      "Psyllium Husk 95% Food Grade",
      "Psyllium Husk 85% Industrial / Cattle Feed Grade",
      "Psyllium Husk Powder (40 Mesh, 60 Mesh, 100 Mesh)",
      "Whole Psyllium Seeds"
    ],
    packagingOptions: [
      "25 kg Multi-wall Paper Bags with PE inner sealed liner",
      "25 kg / 50 kg Fiber Drums with airtight lid for pharmaceutical buyers",
      "Custom palletized units with anti-humidity shrink-wrap covers"
    ],
    specifications: [
      { parameter: "Physical Purity", value: "95% / 98% / 99% (Per specified grade)", method: "Light Extraneous Separation" },
      { parameter: "Swell Volume", value: "Min 40 to 55 ml/g", method: "USP Pharmacopeia Swell Test" },
      { parameter: "Moisture Content", value: "Max 10.0% to 11.0%", method: "Karl Fischer / Oven Dry" },
      { parameter: "Total Ash", value: "Max 4.0%", method: "Gravimetric" },
      { parameter: "Acid Insoluble Ash", value: "Max 0.45%", method: "Gravimetric" },
      { parameter: "Heavy Metals (Pb, As, Cd, Hg)", value: "Compliant with USP/BP limits (<10 ppm)", method: "ICP-MS" }
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
    botanicalName: "Moringa oleifera",
    hsCode: "1211.90.29 (Dried Leaves & Powder)",
    category: "Nutritional Botanical Commodities",
    originBelts: "Gujarat, Tamil Nadu, Andhra Pradesh",
    cropSeason: "Year-Round Harvesting (Peak Quality: November to March)",
    moq: "1 x 20ft FCL (Approx. 6–8 MT for whole leaves / 12–14 MT for leaf powder)",
    shelfLife: "24 months when stored in airtight, moisture-barrier packaging away from light",
    containerCapacity: {
      fcl20: "7 MT (Whole Leaves) / 13 MT (Fine Powder in drums/kraft bags)",
      fcl40: "15 MT (Whole Leaves) / 25 MT (Powder)"
    },
    shortDescription: "Dried Moringa Oleifera leaves, shadow-dried leaf powder, and moringa seeds harvested from fertile Indian agricultural plantations.",
    fullDescription: "Moringa Oleifera, known globally as the 'Miracle Tree', is an Indian native botanical commodity prized for its concentrated plant nutrients, antioxidants, and chlorophyll content. Nilkanth World Exim coordinates sourcing for botanical distributors, herbal tea blenders, and superfood packaging enterprises.",
    image: "/images/moringa.webp",
    characteristics: [
      "Vivid emerald-green coloration with preserved natural chlorophyll",
      "Gentle, grassy herbal aroma with zero burnt notes",
      "Shadow and low-temperature dried to preserve thermo-sensitive phytonutrients",
      "Microfine milling available for smooth solubility in drinks and tablets",
      "Cultivated with controlled agricultural practices"
    ],
    availableForms: [
      "Dried Whole Moringa Oleifera Leaves (Hand Picked)",
      "Coarse Cut Moringa Leaves (Tea Bag Cut 2–4 mm)",
      "Micro-fine Moringa Leaf Powder (80 to 100 Mesh)",
      "Moringa Oleifera Seeds (PKM-1 / Conventional Planting & Oil Grade)"
    ],
    packagingOptions: [
      "20 kg / 25 kg Multi-wall Kraft Bags with food-grade aluminum foil liner",
      "25 kg Fiber Drums with inner sealed polyethylene barrier",
      "Vacuum-sealed barrier pouches to preserve vivid green chlorophyll"
    ],
    specifications: [
      { parameter: "Color", value: "Bright Emerald Green", method: "Visual & Hunter Color Lab" },
      { parameter: "Moisture Content", value: "Max 7.0% to 8.0%", method: "Karl Fischer Method" },
      { parameter: "Mesh Granulation", value: "80 to 100 Mesh (For Powder)", method: "Standard Sieve Analysis" },
      { parameter: "Total Ash", value: "Max 8.0%", method: "Gravimetric" },
      { parameter: "Acid Insoluble Ash", value: "Max 1.0%", method: "Gravimetric" },
      { parameter: "Crude Protein", value: "Min 22.0% to 28.0%", method: "Kjeldahl Method" },
      { parameter: "Salmonella & E. Coli", value: "Absent in 25g", method: "Microbiological Test" }
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
