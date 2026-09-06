import {
  ProductCategory,
  ProductSubcategory,
  Advantage,
  ApplicationSector,
  ProjectItem,
  GalleryItem,
  ClientLogo
} from '../types';

export const COMPANY_INFO = {
  name: 'Master Cubicle',
  fullName: 'Master Cubicle Systems',
  tagline: 'Premium Commercial Washroom & Cubicle Solutions',
  eyebrow: 'PREMIUM TOILET CUBICLE & WASHROOM SOLUTIONS',
  headline: 'Architectural Washroom Cubicles Engineered for High-Traffic Commercial Spaces',
  subheadline: 'Manufacturer & specialist contractor of 100% waterproof compact laminate toilet cubicles, urinal partitions, shower enclosures, lockers, and architectural restroom hardware.',
  welcomeTitle: 'Welcome to the Master Cubicle',
  welcomeDescription: 'Master Cubicle is a leading manufacturer and supplier of building materials and architectural interior & exterior products. We specialize in engineering premium toilet cubicles, washroom partitions, urinal partitions, shower cubicles, changing rooms, lockers, and restroom accessories. Crafted from 100% waterproof Compact Grade Solid Laminate (Phenolic Core) with Grade 304 Stainless Steel, Nylon Polyamide, and Anodised Aluminium hardware, our systems are designed to deliver uncompromising hygiene, durability, and contemporary architectural elegance for high-footfall commercial projects across India.',
  phone: '+91 99303 77451',
  phoneDisplay: '+91 993-037-7451',
  phoneRaw: '+919930377451',
  email: 'sales@mastercubicle.in',
  altEmail: 'mehdi@mastercubicle.in',
  address: 'Plot No. B93, Sai Kripa, CSM Chowk, Sector 12, Kharghar, Navi Mumbai, Maharashtra 410210',
  secondaryAddress: '204, 2nd Floor, Opp. Deepam CHS, Plot No. 1047, Sector 5, Kopar Khairane, Navi Mumbai – 400709',
  workingHours: 'Monday – Saturday: 9:00 AM – 7:30 PM (IST)',
  whatsapp: '919930377451',
};

export const TRUST_HIGHLIGHTS = [
  {
    number: '01',
    title: 'Certified Quality',
    description: 'Precision manufactured compact solid grade phenolic panels conforming to international hygiene, fire retardance, and structural safety standards.'
  },
  {
    number: '02',
    title: '100% Waterproof Materials',
    description: 'Zero porosity, steam-proof, and impervious to standing water or constant dampness with solid core non-delaminating compact laminates.'
  },
  {
    number: '03',
    title: 'Professional Turnkey Installation',
    description: 'End-to-end site survey, precise fabrication, and rapid on-site installation by factory-trained specialists with zero wet-work on site.'
  },
  {
    number: '04',
    title: 'Premium Architectural Hardware',
    description: 'Heavy-duty AISI 304/316 Stainless Steel, anti-corrosive nylon polyamide, and anodized aluminium hardware engineered for 500,000+ operating cycles.'
  }
];

export const TOILET_CUBICLE_SUBCATEGORIES: ProductSubcategory[] = [
  {
    id: 'stainless-steel',
    name: 'Stainless Steel Series',
    tagline: 'Heavy-Duty SS 304 Hardware with Compact Laminate',
    description: 'The Stainless Steel Series combines 12mm/18mm compact grade solid laminate panels with high-grade AISI 304 stainless steel hardware. Engineered for high-traffic corporate offices, airports, and luxury public washrooms seeking longevity and polished elegance.',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80'
    ],
    specifications: {
      panelMaterial: '100% Waterproof Compact Grade Solid Laminate (HPL)',
      thickness: '12mm or 18mm Solid Phenolic Core',
      hardware: 'Grade 304 / 316 Stainless Steel (Brushed Satin or Mirror Polish)',
      standardHeight: '1980mm – 2100mm overall height',
      standardDepth: '1500mm – 1800mm customizable',
      groundClearance: '100mm – 150mm with adjustable SS feet',
      fireRating: 'Class 1 / Class B fire retardant option',
      waterResistance: '100% impervious to water, steam, and chemical detergents'
    },
    features: [
      'Adjustable heavy-duty SS leg pedestals (100mm–150mm)',
      'Gravity self-closing hinges with adjustable angles',
      'Emergency release exterior occupancy indicator thumbturn',
      'Continuous U-channel wall brackets for vibration resistance',
      'Heavy-duty SS coat hook with built-in rubber door bumper'
    ],
    recommendedFor: ['Corporate Headquarters', 'International Airports', 'Five-Star Hotels', 'Financial Centers']
  },
  {
    id: 'nylon-toilet',
    name: 'Nylon Toilet Series',
    tagline: 'Vibrant, Corrosion-Proof Polyamide Hardware',
    description: 'Features high-density virgin nylon polyamide hardware that never corrodes, tarnishes, or chips. Available in neutral and vibrant color trims, perfectly suited for educational institutions, healthcare complexes, and moist coastal environments.',
    imageUrl: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80'
    ],
    specifications: {
      panelMaterial: 'Compact Grade Laminate with Phenolic Resin Core',
      thickness: '12mm Solid Compact Board',
      hardware: 'Virgin Nylon Polyamide 6 (Grey, Black, Blue, Custom)',
      standardHeight: '2000mm standard height',
      standardDepth: '1500mm standard depth',
      groundClearance: '150mm nylon adjustable legs',
      fireRating: 'BS 476 Part 7 Class 1 Flame Spread',
      waterResistance: 'Non-corrosive under 100% relative humidity'
    },
    features: [
      'Completely impervious to salt spray, chlorine, and chemical oxidizers',
      'Scratch-resistant solid-dyed polyamide that will not chip or peel',
      'Anodised or powder-coated aluminium top rail stabilizing system',
      'Smooth ergonomic turn-lock with red/green visibility indicator',
      'Cost-effective high-durability investment for public infrastructure'
    ],
    recommendedFor: ['Schools & Colleges', 'Swimming Complexes', 'Government Facilities', 'Hospitals']
  },
  {
    id: 'shoe-box',
    name: 'Shoe Box Model',
    tagline: 'Flush-Mounted Box Pedestal Base for Sleek Cleanliness',
    description: 'The Shoe Box cubicle model incorporates concealed stainless steel box shoe anchors at the base of intermediate and end dividers, giving a clean, seamless architectural floating line while maintaining rigid floor anchoring.',
    imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80'
    ],
    specifications: {
      panelMaterial: 'High-Density Compact Laminate',
      thickness: '12mm / 18mm',
      hardware: 'Concealed SS 304 Shoe Box Anchors + Top Channel',
      standardHeight: '2000mm',
      standardDepth: '1500mm – 1650mm',
      groundClearance: 'Concealed base bracket / 50-70mm minimal gap',
      fireRating: 'Class 1 Fire Retardant',
      waterResistance: 'Zero water absorption'
    },
    features: [
      'Streamlined modern aesthetic with no visible floor bolts',
      'Box shoe base protects laminate edge from mop strikes',
      'Enhanced floor-to-ceiling stability for heavy public usage',
      'Satin brushed stainless steel finish on all metalwork'
    ],
    recommendedFor: ['Shopping Malls', 'Tech Parks', 'Convention Centers']
  },
  {
    id: 'ceiling-hung',
    name: 'Ceiling Hung Model',
    tagline: 'Unobstructed Floor Clearance for Superior Hygiene',
    description: 'Suspended entirely from overhead structural steel beams without floor pedestals or ground contact. Provides 100% unobstructed floor surface, drastically cutting daily washroom cleaning time and preventing grime accumulation.',
    imageUrl: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80'
    ],
    specifications: {
      panelMaterial: 'Compact Grade Solid Phenolic Laminate',
      thickness: '12mm / 18mm heavy structural panels',
      hardware: 'Heavy Overhead Steel Cantilever Box Beam + SS Fittings',
      standardHeight: 'Suspended 150mm–200mm above finished floor level',
      standardDepth: '1500mm – 1700mm',
      groundClearance: '150mm – 200mm full clear ground gap',
      fireRating: 'Class 1 / Class B',
      waterResistance: '100% moisture and pressure-washer safe'
    },
    features: [
      'Complete ground clearance eliminates dirt accumulation zones',
      'Fast automated or manual mop floor maintenance',
      'Ultra-minimalist modern European architectural silhouette',
      'Engineered structural overhead load distribution'
    ],
    recommendedFor: ['High-End Hotels', 'Premium Office Towers', 'Luxury Lounges']
  },
  {
    id: 'ss-with-aluminium',
    name: 'SS with Aluminium Series',
    tagline: 'Hybrid Strength: Anodized Aluminium & SS 304 Hardware',
    description: 'Combines structural anodized aluminium top rail profiles and wall wall-mount U-channels with premium Grade 304 stainless steel operating hardware. Offers optimal structural rigidity, lightweight alignment, and high cost-efficiency.',
    imageUrl: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80'
    ],
    specifications: {
      panelMaterial: 'Compact Solid Laminate Board',
      thickness: '12mm standard',
      hardware: 'Anodized Silver / Matt Black Aluminium + SS 304 Hinges/Locks',
      standardHeight: '2000mm',
      standardDepth: '1500mm',
      groundClearance: '100mm – 150mm',
      fireRating: 'Class 1 Flame Retardant',
      waterResistance: '100% waterproof'
    },
    features: [
      'Heavy-duty D-shape architectural aluminium top rail',
      'Sleek anodized silver or powder-coated black channel trim',
      'Stainless steel self-closing hinges and occupancy locks',
      'Exceptional anti-sagging door alignment'
    ],
    recommendedFor: ['Commercial Complexes', 'Business Parks', 'Universities']
  },
  {
    id: 'handicap',
    name: 'Handicap / Accessible Series',
    tagline: 'ADA & Universal Design Compliant Accessible Cubicles',
    description: 'Specifically engineered cubicle systems meeting universal accessibility and ADA guidelines. Features wide outward-swinging doors, zero-threshold floor entry, heavy-duty stainless steel grab bars, and accessible lock handles for persons with disabilities.',
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80'
    ],
    specifications: {
      panelMaterial: 'High-Impact Compact Laminate',
      thickness: '12mm / 18mm',
      hardware: 'Grade 304 SS Outward Hinges, Lever Handle Lock, Grab Bars',
      standardHeight: '2000mm',
      standardDepth: '1750mm – 2000mm for wheelchair turning radius',
      groundClearance: '100mm or flush threshold',
      fireRating: 'Class 1',
      waterResistance: '100% waterproof'
    },
    features: [
      'Clear door opening width of 900mm+ for unrestricted wheelchair access',
      'Outward swing gravity hinges with anti-panic emergency release',
      'Ergonomic large-turn lever latch operable with closed fist',
      'Compliant heavy-duty SS 304 L-shaped & straight grab bar integration'
    ],
    recommendedFor: ['Public Transportation Hubs', 'Hospitals', 'Malls', 'Corporate Centers']
  },
  {
    id: 'kids',
    name: 'Kids Restroom Series',
    tagline: 'Ergonomic Heights, Anti-Pinch Safety & Friendly Colors',
    description: 'Custom-designed for kindergartens, primary schools, and play arenas. Built with lowered panel heights for teacher supervision, anti-finger-pinch hinge geometries, rounded safety edges, and bright hygienic compact laminates.',
    imageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1000&q=80'
    ],
    specifications: {
      panelMaterial: 'Food-Safe Antibacterial Compact Laminate',
      thickness: '12mm with chamfered radius safety corners',
      hardware: 'Nylon Polyamide or Smooth SS with Anti-Finger Trap Design',
      standardHeight: '1200mm – 1500mm reduced height for adult supervision',
      standardDepth: '1200mm – 1400mm',
      groundClearance: '100mm – 150mm',
      fireRating: 'Class 1 Non-Toxic',
      waterResistance: '100% moisture-proof & disinfectant safe'
    },
    features: [
      'Continuous anti-finger trap rubber safety profiles prevent pinched fingers',
      'Soft radius rounded corners on all doors and pilasters',
      'Low height partitions allow visual supervision while offering child privacy',
      'Vibrant playful colors (Yellow, Sky Blue, Lime, Pastel Orange, Red)'
    ],
    recommendedFor: ['Primary Schools', 'Daycares', 'Children Amusement Centers', 'Pediatric Clinics']
  },
  {
    id: 'indian',
    name: 'Indian Squat Toilet Partition',
    tagline: 'Optimized Depth & Splash Protection for Asian Squat Pans',
    description: 'Specifically proportioned for Indian-type squatting water closets (Orissa pans). Features increased partition depth, floor-level splash guards, moisture-resistant base anchoring, and high wash-down tolerance for wet restroom environments.',
    imageUrl: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=1000&q=80'
    ],
    specifications: {
      panelMaterial: 'High-Density Solid Phenolic Resin Sheet',
      thickness: '12mm solid waterproof core',
      hardware: 'Grade 304 Stainless Steel or Heavy Nylon',
      standardHeight: '2000mm',
      standardDepth: '1200mm – 1400mm tailored for squat pan footprint',
      groundClearance: '150mm high clearance for vigorous floor washing',
      fireRating: 'Class 1 Fire Safe',
      waterResistance: '100% resistant to standing water and pressurized jet sprays'
    },
    features: [
      'Extra ground clearance prevents water stagnation during routine floor washdowns',
      'Non-porous compact laminate prevents bacterial nesting around pan perimeter',
      'High chemical tolerance against toilet cleaning acid and caustic agents',
      'Robust gravity hinges withstand aggressive daily footfall'
    ],
    recommendedFor: ['Railway Stations', 'Industrial Staff Facilities', 'Bus Terminals', 'Public Utilities']
  },
  {
    id: 'seamless-series',
    name: 'Seamless Series',
    tagline: 'Zero-Sightline Privacy with Interlocking Rebated Edges',
    description: 'Designed for absolute privacy. Features precision CNC-rebated door edges and pilasters that interlock, completely eliminating the vertical sightline gaps common in standard cubicles. Ideal for high-end corporate suites and luxury hospitality.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80'
    ],
    specifications: {
      panelMaterial: '18mm Solid Grade Compact Laminate',
      thickness: '18mm Heavy-Duty Core with CNC Machined Rebates',
      hardware: 'Concealed Pivot Hinges + Flush Magnetic / Indicator Latch',
      standardHeight: '2100mm – Full Height 2400mm',
      standardDepth: '1500mm – 1800mm',
      groundClearance: 'Minimal 20mm–50mm or floor-to-ceiling privacy',
      fireRating: 'Class 1',
      waterResistance: '100% waterproof'
    },
    features: [
      'Zero vertical sightlines: 100% visual privacy with overlapping tongue & rebate',
      'Flush aesthetic resembling custom luxury joinery',
      'Heavy 18mm thickness provides solid acoustic dampening',
      'Sleek concealed pivot system with smooth silent return'
    ],
    recommendedFor: ['Executive Boardrooms', 'Five-Star Hotels', 'Luxury Spas', 'VIP Lounges']
  },
  {
    id: 'top-anchored',
    name: 'Top Anchored Model',
    tagline: 'Reinforced Overhead Beam for Extended Cubicle Runs',
    description: 'Utilizes a continuous structural extruded aluminium top rail anchored securely into flanking masonry walls. Delivers superior horizontal rigidity across long continuous banks of cubicles in stadium and terminal concourses.',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80'
    ],
    specifications: {
      panelMaterial: '12mm Compact Laminate Sheet',
      thickness: '12mm Solid Core',
      hardware: 'Heavy Box-Section Anodised Aluminium Headrail + SS 304 Accessories',
      standardHeight: '2000mm – 2100mm',
      standardDepth: '1500mm',
      groundClearance: '150mm with adjustable footings',
      fireRating: 'Class 1',
      waterResistance: '100% waterproof'
    },
    features: [
      'Telescopic wall anchoring absorbs structural building tolerances',
      'Overhead headrail locks every pilaster in precise vertical plumb',
      'Resists dynamic slamming forces in high-turnover public restrooms',
      'Clean horizontal sightline along the cubicle run'
    ],
    recommendedFor: ['Sports Stadiums', 'Exhibition Centers', 'Metro Stations']
  },
  {
    id: 'invisible-series',
    name: 'Invisible Series',
    tagline: 'Concealed Hardware & Floating Architectural Minimalism',
    description: 'All structural wall fixings, top brackets, and leg pedestals are cleverly recessed or concealed behind flush panels. Creates a pure monolithic block aesthetic celebrating modern architectural minimalism.',
    imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80'
    ],
    specifications: {
      panelMaterial: '18mm Ultra-Dense Compact Laminate with Monolithic Core',
      thickness: '18mm',
      hardware: 'Hidden Recessed Anchors + Soft-Close Hydraulic Pivot Hinges',
      standardHeight: '2100mm – 2400mm',
      standardDepth: '1600mm – 1800mm',
      groundClearance: 'Deeply recessed legs (100mm setback from facade)',
      fireRating: 'Class 1',
      waterResistance: '100% waterproof'
    },
    features: [
      'Invisible floor legs set back 100mm create a stunning floating impression',
      'Internalized channel fixings with zero visible face screws',
      'Precision bevelled 45° edges on pilaster intersections',
      'High aesthetic rating favored by interior architects and designers'
    ],
    recommendedFor: ['Architectural Studios', 'Design Hotels', 'Luxury Real Estate Experience Centers']
  },
  {
    id: 'elegance-series',
    name: 'Elegance Series',
    tagline: 'Warm Timber & Textured Stone Laminate Decors',
    description: 'Elevates functional restroom spaces with sophisticated woodgrain, travertine, marble, and micro-cement tactile finishes embedded in high-pressure compact phenolic boards. Warm, welcoming, and resilient.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
    ],
    specifications: {
      panelMaterial: 'Decorative Compact Laminate with Synchronized Pore Texture',
      thickness: '12mm / 18mm',
      hardware: 'PVD Coated Bronze / Matte Black / Brushed Gold SS 304',
      standardHeight: '2000mm – 2200mm',
      standardDepth: '1500mm – 1800mm',
      groundClearance: '100mm – 150mm',
      fireRating: 'Class 1',
      waterResistance: '100% waterproof & UV stable'
    },
    features: [
      'Authentic natural wood and stone textures with zero rot or swelling',
      'Matching edge banding or black solid core architectural contrast',
      'PVD titanium hardware finishes (Brushed Brass, Copper, Matte Anthracite)',
      'Transforms commercial restrooms into hospitality-grade sanctuary spaces'
    ],
    recommendedFor: ['Boutique Hotels', 'Fine Dining Restaurants', 'Golf Clubs', 'Private Clinics']
  },
  {
    id: 'designer',
    name: 'Designer Series',
    tagline: 'Custom CNC Perforations, Inlays & Tailored Geometries',
    description: 'Tailored for projects requiring unique branding or statement interior design. Allows custom CNC routed geometric patterns, laser-etched signage, two-tone contrasting laminates, and bespoke hardware configurations.',
    imageUrl: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1000&q=80'
    ],
    specifications: {
      panelMaterial: 'Multi-Tone Solid Phenolic Core with Precision CNC Milling',
      thickness: '12mm or 18mm',
      hardware: 'Custom Architectural SS 304 or Anodised Bronze Aluminium',
      standardHeight: 'Custom (up to 2400mm)',
      standardDepth: 'Custom to site architectural drawings',
      groundClearance: '100mm',
      fireRating: 'Class 1',
      waterResistance: '100% waterproof'
    },
    features: [
      'Custom routed grooves, company logos, and geometric patterns',
      'Dual-color core reveal for striking graphic accents',
      'Bespoke signage and ADA tactile braille integration',
      'Full technical drafting support for architectural specifications'
    ],
    recommendedFor: ['Tech Campuses', 'Flagship Retail Malls', 'Entertainment Complexes']
  },
  {
    id: 'athena-series',
    name: 'Athena Series',
    tagline: 'Heavy-Duty Commercial Champion for Maximum Longevity',
    description: 'The Athena Series is Master Cubicle’s benchmark high-durability restroom cubicle system. Specifically engineered with reinforced aluminium framing, heavy-gauge stainless steel components, and high-density compact laminate to withstand relentless footfall with effortless maintenance.',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80'
    ],
    specifications: {
      panelMaterial: 'High-Density Solid Phenolic Compact Grade Laminate',
      thickness: '12mm solid core',
      hardware: 'Reinforced Grade 304 SS Pedestals, Top Rail & Gravity Hinges',
      standardHeight: '1980mm – 2000mm standard',
      standardDepth: '1500mm standard',
      groundClearance: '150mm for easy janitorial access',
      fireRating: 'Class 1 Fire Retardant',
      waterResistance: '100% waterproof, chemical and solvent resistant'
    },
    features: [
      'Tested to withstand over 350,000 continuous door slam cycles',
      'Superior anti-graffiti surface that wipes clean with common solvents',
      'Impact resistant edges that will never dent, splinter, or peel',
      'Master Cubicle’s most specified commercial washroom system'
    ],
    recommendedFor: ['Commercial IT Parks', 'Shopping Malls', 'Transit Hubs', 'Hospitals']
  },
  {
    id: 'glass',
    name: 'Glass Partition Series',
    tagline: 'Laminated Toughened Glass with Precision Stainless Fittings',
    description: 'For clients demanding absolute prestige and luminescent light reflection. Fabricated using 10mm/12mm ceramic-coated toughened safety glass or laminated opaque glass panels paired with marine-grade SS 316 architectural fittings.',
    imageUrl: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80'
    ],
    specifications: {
      panelMaterial: 'Toughened Laminated Safety Glass (Frosted, Enamelled, or Opaque)',
      thickness: '10mm / 12mm Toughened Ceramic Frit Glass',
      hardware: 'Grade 316 Marine Stainless Steel Clamps, Hinges & Locksets',
      standardHeight: '2000mm – 2200mm',
      standardDepth: '1500mm',
      groundClearance: '100mm – 150mm with SS floor mounts',
      fireRating: 'Non-combustible Class 0 / A1',
      waterResistance: '100% chemically inert & impervious to all liquids'
    },
    features: [
      'Ultra-hygienic non-porous glass surface repels all stains and microbes',
      'Opaque ceramic enamel baked at 700°C for lifetime color permanence',
      'Impact-resistant safety glass compliant with international glazing codes',
      'Supreme aesthetic luxury for flagship headquarters and 5-star suites'
    ],
    recommendedFor: ['Five-Star Luxury Hotels', 'Flagship Corporate Headquarters', 'Private VIP Clubs']
  }
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'toilet-cubicles-partition',
    name: 'Toilet Cubicles & Partition',
    shortDesc: '100% waterproof compact grade laminate restroom cubicles available in 15 engineered series.',
    fullDesc: 'Our core architectural offering. Master Cubicle designs, manufactures, and installs modular toilet cubicle partition systems built with 12mm and 18mm Compact Grade Solid Laminate (phenolic core). Available in 15 tailored series featuring Grade 304 Stainless Steel, Anodized Aluminium, and Nylon Polyamide hardware for any commercial specification.',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    subcategories: TOILET_CUBICLE_SUBCATEGORIES,
    keySpecs: ['100% Waterproof', '12mm & 18mm Thickness', 'SS 304 / Nylon / Aluminium Hardware', 'Zero Delamination'],
    applications: ['Corporate Offices', 'Airports', 'Malls', 'Hotels', 'Educational Institutions']
  },
  {
    id: 'changing-room',
    name: 'Changing Room',
    shortDesc: 'Modular private changing cubicles designed for sports complexes, gyms, retail stores, and pools.',
    fullDesc: 'Engineered for optimal privacy, rapid assembly, and superior moisture resilience. Master Cubicle changing room systems feature integrated interior benches, vanity shelves, heavy-duty garment hooks, and full-height or standard-height partitions built to handle constant high-volume turnover.',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
    keySpecs: ['Integrated Phenolic Benches', 'Heavy-Duty SS Coat Hooks', 'Full-Height or Standard', 'Zero Odor Absorption'],
    applications: ['Gyms & Fitness Centers', 'Sports Stadiums', 'Apparel Retail Fitting Rooms', 'Resort Pool Areas']
  },
  {
    id: 'shower-cubicles',
    name: 'Shower Cubicles',
    shortDesc: 'Complete moisture and steam-resistant shower cubicles with watertight sealing and drainage clearance.',
    fullDesc: 'Specifically crafted for continuous wet environments subject to hot water, steam, and soaps. Utilizing non-porous phenolic compact laminates or toughened glass with anti-fungal silicone channels and heavy SS 304 gravity hinges with water-deflecting seals.',
    imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1000&q=80',
    keySpecs: ['Steam & Moisture Proof', 'Anti-Fungal Seals', 'Grade 304/316 SS Hardware', 'Easy Drainage Clearance'],
    applications: ['Health Clubs & Spas', 'Industrial Staff Quarters', 'Hotels & Resorts', 'Aquatic Centers']
  },
  {
    id: 'urinal-partition',
    name: 'Urinal Partition',
    shortDesc: 'Wall-hung or floor-anchored compact laminate and glass urinal privacy divider screens.',
    fullDesc: 'Architectural privacy dividers installed between urinal bowls. Available in wall-hung cantilevered brackets or floor-supported models with curved radius edges for user comfort and safety. Non-porous compact laminate prevents bacterial nesting and urine stain degradation.',
    imageUrl: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80',
    keySpecs: ['Standard 400x900mm & 450x1200mm', 'Wall-Hung / Floor Mounted', 'Radiused Safety Edges', 'Stain Resistant'],
    applications: ['Corporate Washrooms', 'Multiplexes & Malls', 'Airport Restrooms', 'Restaurants']
  },
  {
    id: 'pole-door',
    name: 'Pole Door',
    shortDesc: 'Floor-to-ceiling structural pole pivot door assemblies for high-impact commercial entranceways.',
    fullDesc: 'Master Cubicle pole doors feature heavy-duty vertical aluminium or stainless steel continuous pivot poles anchored into structural slabs. Ideal for heavy-duty commercial partition access points requiring swing durability and wind resistance.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
    keySpecs: ['Heavy Floor-to-Ceiling Pivot Pole', 'Double-Action Swing Available', 'High Torsional Strength', 'Concealed Bearings'],
    applications: ['Public Restroom Entrances', 'Changing Room Gateways', 'Service Corridors']
  },
  {
    id: 'utility-door',
    name: 'Utility Door',
    shortDesc: 'Vandal-proof, moisture-sealed compact laminate utility and plumbing service duct doors.',
    fullDesc: 'Engineered for electrical shaft access, plumbing duct enclosures, and janitorial utility cupboards. Master Cubicle utility doors blend seamlessly with washroom partition finishes, resisting accidental water splashes and humidity while providing tamper-resistant key locks.',
    imageUrl: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1000&q=80',
    keySpecs: ['Compact Laminate Facing', 'Keyed Master Locksets', 'Flush Frame Detailing', 'Ventilation Louver Option'],
    applications: ['Janitorial Rooms', 'Plumbing Shafts', 'Electrical Ducts', 'Storage Lockers']
  },
  {
    id: 'lockers',
    name: 'Lockers',
    shortDesc: 'Solid compact laminate tier lockers engineered for gymnasiums, sports arenas, offices, and factories.',
    fullDesc: 'Heavy-duty modular storage locker systems constructed with 10mm/12mm solid phenolic compact boards. Impervious to moisture, sweat, and corrosion, unlike sheet metal lockers. Available in 1, 2, 3, 4, 5-tier configurations with digital RFID, coin-return, padlock, or cam lock systems.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80',
    keySpecs: ['1 to 5 Tier Formats', 'Phenolic Solid Core', 'RFID / Digital / Key Locks', 'Integrated Air Louvers'],
    applications: ['Gyms & Fitness Centers', 'Corporate End-of-Trip Facilities', 'Schools & Universities', 'Factories']
  },
  {
    id: 'toilet-cubicle-accessories',
    name: 'Toilet Cubicle Accessories',
    shortDesc: 'Commercial-grade SS 304 and Nylon Polyamide hardware, indicator latches, hinges, legs, and hooks.',
    fullDesc: 'Comprehensive catalog of architectural washroom fittings and replacement hardware: adjustable pedestal legs, gravity self-closing hinges, thumbturn locks with red/green occupancy indicators, emergency key release mechanisms, continuous U-channels, and heavy coat hooks.',
    imageUrl: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80',
    keySpecs: ['AISI 304 Stainless Steel', 'Nylon Polyamide 6', 'Tested 500k Cycles', 'Complete Fastener Kits Included'],
    applications: ['New Installations', 'Facility Maintenance', 'Hardware Retrofitting']
  },
  {
    id: 'modular-kitchen',
    name: 'Modular Kitchen',
    shortDesc: 'Commercial pantry units and modular kitchen cabinetry manufactured from waterproof solid laminate boards.',
    fullDesc: 'Tailored for corporate pantries, executive dining rooms, and moisture-prone commercial kitchens. Built with boiling-water-proof compact phenolic carcases that will never swell, rot, or harbor termites, finished with soft-close architectural hardware.',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    keySpecs: ['100% Boiling Water Proof', 'Termite & Borer Immune', 'Soft-Close German Fittings', 'Commercial Grade Durability'],
    applications: ['Corporate Office Pantries', 'Hotel Staff Kitchens', 'Institutional Cafeterias']
  }
];

export const ADVANTAGES: Advantage[] = [
  {
    id: 'solvent-resistant',
    title: 'Solvent Resistant',
    subtitle: 'Chemical & Graffiti Proof',
    description: 'The dense, non-porous resin surface resists aggressive cleaning solvents, acetone, paint thinners, and graffiti removal agents without surface haze, discoloration, or polymer breakdown.',
    iconName: 'FlaskConical',
    metric: 'ISO 2812 Standard'
  },
  {
    id: 'scratch-resistant',
    title: 'Scratch Resistant',
    subtitle: 'High Abrasion Defense',
    description: 'High-pressure melamine surface layer exhibits exceptional scratch and scuff resistance against keys, buckles, fingernails, and abrasive cleaning pads in punishing public facilities.',
    iconName: 'ShieldAlert',
    metric: 'Class 4+ Abrasion Rating'
  },
  {
    id: 'quick-installation',
    title: 'Quick Installation',
    subtitle: 'Zero Wet-Work on Site',
    description: 'Precision CNC factory pre-cut and pre-drilled systems allow turnkey dry-assembly in hours rather than weeks, eliminating wet masonry mess and dramatically accelerating site handover.',
    iconName: 'Clock',
    metric: 'Up to 70% Faster than Brick'
  },
  {
    id: 'impact-resistant',
    title: 'Impact Resistant',
    subtitle: 'Structural Core Tenacity',
    description: 'Homogeneous thermosetting phenolic resin core absorbs high dynamic impact and blunt forces without denting, cracking, or splintering under heavy vandalism conditions.',
    iconName: 'Hammer',
    metric: 'High Tensile & Flexural Core'
  },
  {
    id: 'environment-friendly',
    title: 'Environment Friendly',
    subtitle: 'Low VOC & Sustainable',
    description: 'Manufactured with sustainably sourced kraft paper layers and non-emitting cured resins. Zero added urea-formaldehyde emissions ensure healthy indoor air quality for green building credits.',
    iconName: 'Leaf',
    metric: 'Zero Formaldehyde Off-gassing'
  },
  {
    id: 'durable',
    title: 'Durable & Long Lasting',
    subtitle: 'Multi-Decade Service Life',
    description: 'Engineered for over 15 to 20 years of continuous service life in harsh, wet commercial washroom environments with zero delamination, zero rot, and minimal lifecycle maintenance costs.',
    iconName: 'Award',
    metric: '15+ Years Commercial Life'
  },
  {
    id: 'cigarette-burn-resistant',
    title: 'Cigarette Burn Resistant',
    subtitle: 'Extreme Thermal Tolerance',
    description: 'Tested against direct contact with burning cigarettes and radiant heat. The heat-resistant surface prevents scorching, bubbling, or ignition, complying with strict fire safety regulations.',
    iconName: 'Flame',
    metric: 'EN 438-2 Flame Spread Safe'
  }
];

export const APPLICATIONS: ApplicationSector[] = [
  {
    id: 'corporate-offices',
    title: 'Corporate Offices & IT Parks',
    description: 'Sleek, minimalist restroom cubicles that mirror premium corporate brand architecture and impress clients and employees.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    idealSeries: 'Stainless Steel / Seamless / Invisible Series',
    keyBenefits: ['Acoustic privacy', 'Minimalist lines', 'Fast janitorial maintenance']
  },
  {
    id: 'five-star-hotels',
    title: 'Five-Star Hotels & Resorts',
    description: 'Ultra-luxurious textured finishes, zero-sightline privacy, and glass partitions creating hospitality sanctuary spaces.',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
    idealSeries: 'Elegance Series / Glass Series / Invisible Series',
    keyBenefits: ['Warm woodgrain decors', 'Concealed hardware', 'VIP guest comfort']
  },
  {
    id: 'shopping-malls',
    title: 'Shopping Malls & Retail Hubs',
    description: 'Heavy-duty washroom partition runs built to withstand thousands of daily footfalls with rapid mop-floor clearance.',
    imageUrl: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1000&q=80',
    idealSeries: 'Athena Series / Top Anchored / Shoe Box Model',
    keyBenefits: ['Maximum vandal resistance', 'Quick door turnover', 'Anti-graffiti surface']
  },
  {
    id: 'schools',
    title: 'Schools & Educational Campuses',
    description: 'Robust, impact-resistant, cost-effective cubicle partitions designed for heavy student use and effortless hygiene.',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80',
    idealSeries: 'Nylon Toilet Series / SS with Aluminium',
    keyBenefits: ['Non-corrosive polyamide', 'Durable against heavy slamming', 'Safe radiused corners']
  },
  {
    id: 'nursery-children',
    title: 'Nursery & Children Facilities',
    description: 'Lowered partition heights, playful hygienic color palettes, and anti-finger-trap safety profiles for early education.',
    imageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1000&q=80',
    idealSeries: 'Kids Restroom Series',
    keyBenefits: ['Anti-pinch safety hinges', 'Adult supervision height', 'Vibrant certified non-toxic laminates']
  },
  {
    id: 'gyms',
    title: 'Gyms & Fitness Centers',
    description: '100% steam-proof, water-resistant shower cubicles, changing stalls, and ventilated phenolic lockers for locker rooms.',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
    idealSeries: 'Shower Cubicles / Changing Rooms / Phenolic Lockers',
    keyBenefits: ['Zero odor absorption', 'Steam and sweat proof', 'Integrated benching']
  },
  {
    id: 'sports-complexes',
    title: 'Sports Complexes & Stadiums',
    description: 'High-density heavy-impact cubicle configurations engineered for sudden peak interval crowds during events and matches.',
    imageUrl: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=1000&q=80',
    idealSeries: 'Top Anchored / Athena Series',
    keyBenefits: ['Overhead structural rail', 'Emergency release locks', 'High volume crowd durability']
  },
  {
    id: 'restaurants',
    title: 'Restaurants & Cafes',
    description: 'Refined, compact restroom solutions maintaining hygienic excellence while harmonizing with interior hospitality concepts.',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    idealSeries: 'Elegance Series / Stainless Steel Series',
    keyBenefits: ['Compact spatial efficiency', 'Odor-free non-porous core', 'Sophisticated finishes']
  },
  {
    id: 'commercial-buildings',
    title: 'Commercial & Healthcare Buildings',
    description: 'Universal accessible handicap restrooms, medical-grade bacterial resistance, and durable public utility partition walls.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    idealSeries: 'Handicap Series / SS 304 Series / Utility Doors',
    keyBenefits: ['Universal ADA compliance', 'Hospital grade sanitization', 'Zero maintenance downtime']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'navi-mumbai-tech-park',
    title: 'Navi Mumbai IT Park Restroom Complex',
    client: 'Mindspace Corporate Park',
    category: 'Corporate',
    location: 'Navi Mumbai, Maharashtra',
    cubiclesInstalled: '140+ Cubicles & Urinal Partitions',
    systemUsed: 'Stainless Steel Series (12mm Compact Laminate in Graphite & Brushed SS 304)',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80'
    ],
    year: '2023',
    description: 'Turnkey fabrication and installation of 140 premium commercial cubicles across 8 corporate office floors, completed on schedule with zero wet work on site.'
  },
  {
    id: 'hyatt-restroom-modernization',
    title: 'Five-Star Luxury Hotel Washroom Renovation',
    client: 'Grand Hyatt Hospitality Group',
    category: 'Hospitality',
    location: 'Mumbai, Maharashtra',
    cubiclesInstalled: '45 Bespoke Cubicles & Changing Stalls',
    systemUsed: 'Seamless Series & Glass Partition Series (Matte Bronze PVD & Opaque Glass)',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80'
    ],
    year: '2024',
    description: 'Engineered zero-sightline privacy partition suites for ballroom banquets and executive lounge restrooms, harmonizing with custom marble interiors.'
  },
  {
    id: 'phoenix-mall-restrooms',
    title: 'Phoenix Marketcity Mall High-Traffic Restrooms',
    client: 'The Phoenix Mills Ltd.',
    category: 'Retail',
    location: 'Kurla, Mumbai',
    cubiclesInstalled: '88 Heavy-Duty Cubicles + Kids Units',
    systemUsed: 'Athena Series & Kids Restroom Series with Reinforced Headrails',
    imageUrl: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1000&q=80',
    year: '2023',
    description: 'Designed to handle 35,000+ weekend shoppers with anti-vandal hardware, continuous overhead aluminium bracing, and anti-finger-trap nursery restrooms.'
  },
  {
    id: 'international-school-campus',
    title: 'Kharghar International School Campus',
    client: 'Ryan Educational Trust',
    category: 'Education',
    location: 'Kharghar, Navi Mumbai',
    cubiclesInstalled: '72 Cubicles & Changing Cabins',
    systemUsed: 'Nylon Toilet Series (Vibrant Dual Tone & Corrosion-Proof Polyamide)',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80',
    year: '2024',
    description: 'Safe, rounded-corner educational washrooms with bright hygienic panels resistant to heavy daily washdown cycles and cleaning chemicals.'
  },
  {
    id: 'prestige-commercial-towers',
    title: 'Prestige Commercial Headquarters',
    client: 'Prestige Group Commercials',
    category: 'Corporate',
    location: 'Pune, Maharashtra',
    cubiclesInstalled: '110 Cubicles & Urinal Screens',
    systemUsed: 'SS with Aluminium Series (Anodized Matte Silver Channels & SS 304)',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    year: '2023',
    description: 'Rapid floor-by-floor implementation for multi-tenant commercial IT tower with custom ADA accessible handicap restroom pods.'
  },
  {
    id: 'gold-gym-wellness-center',
    title: 'Gold Gym & Wellness Club Locker Facility',
    client: 'Gold Gym Franchise',
    category: 'Hospitality',
    location: 'Thane, Mumbai',
    cubiclesInstalled: '30 Shower Cubicles + 120 Phenolic Lockers',
    systemUsed: 'Shower Cubicles & 2-Tier Waterproof Phenolic Lockers with Digital Locks',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
    year: '2024',
    description: '100% steam-proof locker room modernization featuring non-corrosive solid laminate lockers with concealed digital RFID access.'
  }
];

export const CLIENTS: ClientLogo[] = [
  { id: '1', name: 'Larsen & Toubro', sector: 'Engineering & Construction', initials: 'L&T' },
  { id: '2', name: 'Godrej Properties', sector: 'Commercial Real Estate', initials: 'GP' },
  { id: '3', name: 'Oberoi Realty', sector: 'Luxury Infrastructure', initials: 'OR' },
  { id: '4', name: 'The Phoenix Mills', sector: 'Retail & Shopping Malls', initials: 'PM' },
  { id: '5', name: 'Tata Projects', sector: 'Infrastructure', initials: 'TATA' },
  { id: '6', name: 'Infosys Campuses', sector: 'Technology Infrastructure', initials: 'INFY' },
  { id: '7', name: 'DLF Commercial', sector: 'Business Parks', initials: 'DLF' },
  { id: '8', name: 'Grand Hyatt Hotels', sector: 'Hospitality', initials: 'HYATT' },
  { id: '9', name: 'Prestige Group', sector: 'Commercial Developers', initials: 'PG' },
  { id: '10', name: 'Ryan International', sector: 'Educational Campuses', initials: 'RIS' }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // 1. Toilet Cubicles & Partitions
  {
    id: 'g1',
    title: 'Stainless Steel Series Restroom Cubicles',
    category: 'Toilet Cubicles',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85',
    location: 'Corporate HQ, Navi Mumbai',
    caption: '12mm Compact Laminate in Charcoal Grey with SS 304 brushed satin hardware.'
  },
  {
    id: 'g2',
    title: 'Ceiling Hung Floating Washroom Partitions',
    category: 'Toilet Cubicles',
    imageUrl: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1400&q=85',
    location: 'Luxury Airport Lounge',
    caption: 'Cantilever overhead suspension providing zero ground interference for effortless maintenance.'
  },
  {
    id: 'g4',
    title: 'Seamless Series Zero-Sightline Executive Stalls',
    category: 'Toilet Cubicles',
    imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85',
    location: 'Five-Star Hotel Suite',
    caption: '18mm rebated interlocking edges delivering total visual acoustic privacy.'
  },
  {
    id: 'g6',
    title: 'Elegance Series Natural Woodgrain Finish',
    category: 'Toilet Cubicles',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
    location: 'Executive Dining & Club',
    caption: 'Warm textured timber laminate combined with dark architectural accents.'
  },
  {
    id: 'g8',
    title: 'Kids Anti-Finger-Trap Restroom Cubicles',
    category: 'Toilet Cubicles',
    imageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1400&q=85',
    location: 'International Primary School',
    caption: 'Reduced 1300mm height with anti-pinch hinge buffers and bright hygienic laminates.'
  },
  {
    id: 'g9',
    title: 'Glass Partition Cubicles with SS 316 Fittings',
    category: 'Toilet Cubicles',
    imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1400&q=85',
    location: 'Boutique Design Center',
    caption: 'Toughened ceramic frit opaque glass paired with precision marine grade stainless hardware.'
  },
  {
    id: 'g10',
    title: 'Athena Commercial High-Traffic Restroom Stalls',
    category: 'Toilet Cubicles',
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1400&q=85',
    location: 'Mindspace Corporate Park',
    caption: 'Heavy-duty 12mm solid phenolic core with structural top rail stabilization.'
  },

  // 2. Urinal Partitions
  {
    id: 'g3',
    title: 'Architectural Urinal Divider Screens',
    category: 'Urinal Partitions',
    imageUrl: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1400&q=85',
    location: 'Shopping Mall Restrooms',
    caption: 'Radiused safety corners with heavy-duty wall-mounted clamp brackets.'
  },
  {
    id: 'g11',
    title: 'Wall-Hung Compact Grade Urinal Privacy Screens',
    category: 'Urinal Partitions',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85',
    location: 'Bespoke Restaurant Lounge',
    caption: 'Water-impervious solid phenolic panels with chamfered CNC-beveled edges.'
  },
  {
    id: 'g12',
    title: 'Floor-Anchored Heavy-Duty Urinal Partitions',
    category: 'Urinal Partitions',
    imageUrl: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1400&q=85',
    location: 'Transit Station Restroom Pod',
    caption: 'Dual wall-and-floor mounted stainless brackets for high-vibration stability.'
  },

  // 3. Shower Cubicles
  {
    id: 'g13',
    title: '100% Waterproof Solid Phenolic Shower Cubicles',
    category: 'Shower Cubicles',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=1400&q=85',
    location: 'Wellness Health Club, Mumbai',
    caption: 'Impermeable phenolic shower partitions engineered to withstand direct high-pressure waterjets.'
  },
  {
    id: 'g14',
    title: 'Commercial Poolside Shower Enclosure Suites',
    category: 'Shower Cubicles',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
    location: 'Sports & Aquatic Center',
    caption: 'Anti-fungal, steam-resistant enclosures with integrated drainage clearance.'
  },
  {
    id: 'g15',
    title: 'Architectural Frosted Glass Shower Stalls',
    category: 'Shower Cubicles',
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85',
    location: 'Luxury Hotel Fitness Suite',
    caption: 'Toughened frosted safety glass with AISI 316 marine-grade perimeter clamping.'
  },

  // 4. Changing Rooms & Lockers
  {
    id: 'g5',
    title: 'Solid Phenolic 2-Tier Waterproof Lockers',
    category: 'Changing Rooms & Lockers',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=85',
    location: 'Sports & Fitness Club',
    caption: 'Waterproof compact laminate locker units with electronic numeric locks and ventilation slits.'
  },
  {
    id: 'g16',
    title: 'Commercial Changing Cabins with Integrated Benches',
    category: 'Changing Rooms & Lockers',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85',
    location: 'Athletic Training Complex',
    caption: 'Heavy-duty privacy changing cubicles with matching phenolic bench seating.'
  },
  {
    id: 'g17',
    title: 'Z-Locker Phenolic Storage System',
    category: 'Changing Rooms & Lockers',
    imageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=85',
    location: 'Corporate Wellness Center',
    caption: 'Optimized space-saving Z-shape locker compartments allowing hanging garments and footwear.'
  },

  // 5. Architectural Hardware & Details
  {
    id: 'g7',
    title: 'Grade 304 SS Indicator Lock & Gravity Hinge Detailing',
    category: 'Hardware Details',
    imageUrl: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1400&q=85',
    location: 'Factory Precision Test',
    caption: 'Precision engineered emergency release occupancy indicator and self-closing gravity hinge.'
  },
  {
    id: 'g18',
    title: 'Adjustable SS 304 Pedestal Foot & Floor Mounting',
    category: 'Hardware Details',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85',
    location: 'Structural Engineering Review',
    caption: 'Corrosion-resistant adjustable floor leg supporting 100mm-150mm janitorial floor clearance.'
  },
  {
    id: 'g19',
    title: 'Heavy-Duty Top Headrail & Corner Channel Jointing',
    category: 'Hardware Details',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85',
    location: 'Assembly Works, Kharghar',
    caption: 'Anodized aluminium D-section headrail providing overhead structural rigidity across multiple stalls.'
  }
];
