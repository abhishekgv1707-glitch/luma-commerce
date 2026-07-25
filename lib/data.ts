import { Gamepad2, Gem, Headphones, House, Shirt, Smartphone, Sparkles } from "lucide-react";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  old: number;
  rating: string;
  reviews: number;
  image: string;
  gallery: string[];
  badge: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
};

export const categories = [
  { name:"Electronics", caption:"Smart essentials", icon:Smartphone, image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80" },
  { name:"Fashion", caption:"Built to be worn", icon:Shirt, image:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80" },
  { name:"Home & Living", caption:"The good kind of ordinary", icon:House, image:"https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80" },
  { name:"Gaming", caption:"Play without limits", icon:Gamepad2, image:"https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80" },
  { name:"Beauty", caption:"Daily ritual, elevated", icon:Sparkles, image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80" },
  { name:"Accessories", caption:"Small details, big impact", icon:Gem, image:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80" },
];

export const products: Product[] = [
  { id:"arc-headphones", name:"Arc Headphones", category:"Audio", price:279, old:349, rating:"4.9", reviews:128, image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80", gallery:["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1500&q=88","https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1500&q=88","https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1500&q=88"], badge:"20% off", description:"A precisely tuned over-ear headphone built for the quiet, focused moments in your day. Rich sound, a weightless feel, and materials made to age beautifully.", features:["Adaptive noise cancellation", "Up to 32 hours of listening", "Memory-foam comfort cushions", "High-fidelity 40mm drivers"], specs:[{label:"Battery life",value:"Up to 32 hours"},{label:"Charging",value:"USB-C · 10 min for 5 hours"},{label:"Weight",value:"248 g"},{label:"Connectivity",value:"Bluetooth 5.3"}] },
  { id:"studio-carry", name:"Studio Carry", category:"Accessories", price:168, old:0, rating:"4.8", reviews:86, image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80", gallery:["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1500&q=88","https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80&sat=-20","https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80&con=15"], badge:"New", description:"A refined everyday carry, sized for a laptop, a change of plans, and all the essentials that make a day yours.", features:["Water-resistant recycled shell", "Padded 16-inch laptop sleeve", "Quiet magnetic closure", "Designed for all-day carry"], specs:[{label:"Capacity",value:"18 L"},{label:"Material",value:"Recycled nylon"},{label:"Dimensions",value:"42 × 30 × 14 cm"},{label:"Warranty",value:"2 years"}] },
  { id:"orbit-one", name:"Orbit One", category:"Timepieces", price:219, old:0, rating:"4.9", reviews:201, image:"https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=80", gallery:["https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1500&q=88","https://images.unsplash.com/photo-1495857000853-1ed70f2dc52f?auto=format&fit=crop&w=1500&q=88","https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=1500&q=88"], badge:"Bestseller", description:"A considered timepiece with a crisp, uncluttered dial and a slim profile that moves easily between your everyday and your after-hours.", features:["Scratch-resistant sapphire glass", "Japanese quartz movement", "Italian leather strap", "50m water resistance"], specs:[{label:"Case",value:"39 mm stainless steel"},{label:"Movement",value:"Japanese quartz"},{label:"Strap",value:"Genuine leather"},{label:"Water resistance",value:"5 ATM"}] },
  { id:"cloud-knit", name:"Cloud Knit", category:"Footwear", price:142, old:180, rating:"4.7", reviews:94, image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80", gallery:["https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1500&q=88","https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1500&q=88","https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1500&q=88"], badge:"21% off", description:"The soft, springy everyday trainer you reach for without thinking. Made to go everywhere, and feel good doing it.", features:["Breathable engineered knit", "Responsive foam midsole", "Natural rubber outsole", "Machine-washable upper"], specs:[{label:"Upper",value:"Engineered knit"},{label:"Midsole",value:"Responsive foam"},{label:"Fit",value:"True to size"},{label:"Care",value:"Cold machine wash"}] },
];

export const getProductById = (id: string) => products.find((product) => product.id === id);
