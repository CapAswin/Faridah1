import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: "Vanilla Royale 64",
    category: "Signature",
    price: 145,
    description: "A cinematic fragrance journey through sun-drenched gardens, crafted with velvety Moroccan rose and rare golden amber.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    color: "bg-berry/5",
    notes: {
      top: ["Italian Bergamot", "Royal Vanilla"],
      middle: ["Moroccan Rose", "White Jasmine"],
      base: ["Golden Amber", "Sandalwood"]
    },
    details: "Vanilla Royale 64 is our flagship fragrance, capturing the essence of timeless elegance. It settles into a warm, creamy finish that lasts throughout the evening."
  },
  {
    id: '2',
    name: "Velvet Rose 23",
    category: "Floral Musky",
    price: 138,
    description: "A deep, romantic embrace of midnight roses and rare musk.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    color: "bg-berry/5",
    notes: {
      top: ["Damasked Rose", "Pink Pepper"],
      middle: ["Peony", "Geranium"],
      base: ["White Musk", "Cedar"]
    },
    details: "The 23rd iteration of our rose blend, focusing on the dark, velvet petals of the Baccara rose."
  },
  {
    id: '3',
    name: "Golden Amber 45",
    category: "Spicy Oriental",
    price: 145,
    description: "Warmth personified. A spicy, resinous trail that commands attention.",
    image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=800&auto=format&fit=crop",
    color: "bg-gold/5",
    notes: {
      top: ["Saffron", "Cardamom"],
      middle: ["Labdanum", "Incense"],
      base: ["Ambergris", "Vanilla Bean"]
    },
    details: "A fragrance for the bold. Golden Amber 45 uses traditional extraction methods to preserve the raw intensity of the resins."
  },
  {
    id: '4',
    name: "Eden Apple 01",
    category: "Juicy Floral",
    price: 120,
    description: "Fresh, crisp, and ethereal. A morning walk through a forbidden garden.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    color: "bg-pink/5",
    notes: {
      top: ["Crisp Green Apple", "Wild Berry"],
      middle: ["Lily of the Valley", "Violet"],
      base: ["Clean Musk", "Blonde Woods"]
    },
    details: "The first scent ever designed by our founder, focusing on the purity of nature."
  },
  {
    id: '5',
    name: "Iris Crush 32",
    category: "Powdery Floral",
    price: 138,
    description: "Sophisticated and clean. The perfect daytime signature.",
    image: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&w=800&auto=format&fit=crop",
    color: "bg-pink/5",
    notes: {
      top: ["Iris Petals", "Pear"],
      middle: ["Orris Root", "Orange Blossom"],
      base: ["Cashmere Wood", "Vetiver"]
    },
    details: "A masterclass in powdery florals, utilizing the most expensive iris extracts from Tuscany."
  },
  {
    id: '6',
    name: "Midnight Oud 88",
    category: "The Oud",
    price: 195,
    description: "Complex, smokey, and mysterious. The pinnacle of luxury.",
    image: "https://images.unsplash.com/photo-1582211594533-268f4f1edeb9?q=80&w=800&auto=format&fit=crop",
    color: "bg-ink/5",
    notes: {
      top: ["Oud", "Leather"],
      middle: ["Tobacco Leaf", "Clove"],
      base: ["Patchouli", "Dark Chocolate"]
    },
    details: "Sourced from 100-year-old trees, our Oud is aged for three years before formulation."
  },
  {
    id: '7',
    name: "Citrus Silk 12",
    category: "Botanicals",
    price: 110,
    description: "A bright, shimmering veil of Mediterranean citrus.",
    image: "https://images.unsplash.com/photo-1583445095369-9c651e7e5d30?q=80&w=800&auto=format&fit=crop",
    color: "bg-champagne/10",
    notes: {
      top: ["Neroli", "Mandarin"],
      middle: ["White Tea", "Basil"],
      base: ["Ambrette", "Oakmoss"]
    },
    details: "Refreshing yet elevated. Designed to feel like wearing a silk scarf in the sun."
  },
  {
    id: '8',
    name: "Wild Musk 09",
    category: "Signature",
    price: 125,
    description: "A second-skin fragrance. Subtle yet intoxicating.",
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=800&auto=format&fit=crop",
    color: "bg-nude/10",
    notes: {
      top: ["Rice Steam", "Aldehydes"],
      middle: ["Cotton Flower", "Hibiscus"],
      base: ["White Musk", "Skin Accord"]
    },
    details: "An intimate scent that reacts with your skin's unique chemistry."
  },
  {
    id: '9',
    name: "Jasmine Silk 55",
    category: "Botanicals",
    price: 135,
    description: "Luminous jasmine blooms under the moonlight.",
    image: "https://images.unsplash.com/photo-1595425970377-c9703cf443aa?q=80&w=800&auto=format&fit=crop",
    color: "bg-cream/20",
    notes: {
      top: ["Honeysuckle", "Mint"],
      middle: ["Jasmine Sambac", "Tuberose"],
      base: ["Honey", "Vanilla"]
    },
    details: "Captured using the enfleurage method to preserve the delicate floral structure."
  },
  {
    id: '10',
    name: "Desert Sandalwood 77",
    category: "Signature",
    price: 150,
    description: "Dry, woody, and intensely calming.",
    image: "https://images.unsplash.com/photo-1616984253401-0975619cc24d?q=80&w=800&auto=format&fit=crop",
    color: "bg-gold/10",
    notes: {
      top: ["Papyrus", "Bergamot"],
      middle: ["Australian Sandalwood", "Violet"],
      base: ["Leather", "Amber"]
    },
    details: "Inspired by the architectural lines of the desert landscape."
  },
  {
    id: '11',
    name: "Rose Gold 10",
    category: "Floral Musky",
    price: 160,
    description: "A sparkling, metallic floral with a creamy heart.",
    image: "https://images.unsplash.com/photo-1563170351-be8d1882fe95?q=80&w=800&auto=format&fit=crop",
    color: "bg-rose/5",
    notes: {
      top: ["Champagne", "Pink Pepper"],
      middle: ["Taif Rose", "Nectarine"],
      base: ["Musk", "Woody Notes"]
    },
    details: "Celebration in a bottle. Shimmering and joyous."
  },
  {
    id: '12',
    name: "Blue Lotus 04",
    category: "Botanicals",
    price: 130,
    description: "Serene aquatic floral with deep spiritual roots.",
    image: "https://images.unsplash.com/photo-1619994403073-2cec844d8e63?q=80&w=800&auto=format&fit=crop",
    color: "bg-pink/5",
    notes: {
      top: ["Water Lily", "Sea Salt"],
      middle: ["Blue Lotus", "Green Tea"],
      base: ["Guaiac Wood", "Iso E Super"]
    },
    details: "Inspired by the tranquil waters of the Nile at dawn."
  },
  {
    id: '13',
    name: "Smoked Vanilla 92",
    category: "Signature",
    price: 140,
    description: "A dark, charred twist on the classic vanilla.",
    image: "https://images.unsplash.com/photo-1557170342-cc36009849d5?q=80&w=800&auto=format&fit=crop",
    color: "bg-ink/5",
    notes: {
      top: ["Burnt Sugar", "Rum"],
      middle: ["Vanilla Co2 Sap", "Cocoa"],
      base: ["Bourbon Vanilla", "Smoke"]
    },
    details: "Gourmand yet sophisticated. Not your typical sweet scent."
  },
  {
    id: '14',
    name: "Copper Saffron 33",
    category: "Spicy Oriental",
    price: 170,
    description: "Metalic, spicy, and earthy.",
    image: "https://images.unsplash.com/photo-1512789675414-06443bd84175?q=80&w=800&auto=format&fit=crop",
    color: "bg-gold/5",
    notes: {
      top: ["Red Saffron", "Cumin"],
      middle: ["Copper Accord", "Rose"],
      base: ["Amber", "Soil Tincture"]
    },
    details: "A study in contrasts. Cold metal and warm spice."
  },
  {
    id: '15',
    name: "Velvet Moss 06",
    category: "Botanicals",
    price: 115,
    description: "Green, damp, and incredibly fresh.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    color: "bg-champagne/10",
    notes: {
      top: ["Dew Notes", "Galbanum"],
      middle: ["Oakmoss", "White Floral"],
      base: ["Vetiver", "Patchouli"]
    },
    details: "The scent of a misty forest after rain."
  },
  {
    id: '16',
    name: "White Pepper 11",
    category: "Spicy Oriental",
    price: 128,
    description: "Sharp, clean spice with a soft finish.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
    color: "bg-cream/10",
    notes: {
      top: ["White Pepper", "Juniper"],
      middle: ["Mate", "Clary Sage"],
      base: ["Ambrette", "Sandalwood"]
    },
    details: "Modern minimalism in fragrance form."
  },
  {
    id: '17',
    name: "Royal Patchouli 21",
    category: "The Oud",
    price: 180,
    description: "Elegant, earthy, and commanding.",
    image: "https://images.unsplash.com/photo-1583445095369-9c651e7e5d30?q=80&w=800&auto=format&fit=crop",
    color: "bg-ink/10",
    notes: {
      top: ["Bergamot", "Lime"],
      middle: ["Patchouli Heart", "Rose"],
      base: ["Vanilla", "Tonka Bean"]
    },
    details: "A refined take on patchouli, stripping away the rough edges for a royal finish."
  },
  {
    id: '18',
    name: "Violet Bloom 08",
    category: "Floral Musky",
    price: 132,
    description: "Delicate violets with a sugar-dusted edge.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
    color: "bg-pink/5",
    notes: {
      top: ["Violet Leaf", "Raspberry"],
      middle: ["Violet Petals", "Rose"],
      base: ["Heliotrope", "Musk"]
    },
    details: "Sweet but never cloying. Reminiscent of heritage Parisian confectionery."
  },
  {
    id: '19',
    name: "Cedar Silk 44",
    category: "Signature",
    price: 148,
    description: "Sharp cedarwood softened by smooth silk notes.",
    image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=800&auto=format&fit=crop",
    color: "bg-gold/5",
    notes: {
      top: ["Pink Pepper", "Bergamot"],
      middle: ["Cedarwood Virginia", "Silk Accord"],
      base: ["White Amber", "Vetiver"]
    },
    details: "Sophisticated wood scent for the modern executive."
  },
  {
    id: '20',
    name: "Black Cherry 00",
    category: "Signature",
    price: 165,
    description: "Deep, dark, and syrupy. A gourmand masterpiece.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
    color: "bg-berry/10",
    notes: {
      top: ["Black Cherry", "Bitter Almond"],
      middle: ["Griotte Syrup", "Turkish Rose"],
      base: ["Roasted Tonka Bean", "Sandalwood"]
    },
    details: "The forbidden fruit captured in its most intense state."
  }
];
