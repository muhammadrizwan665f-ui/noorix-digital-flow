import type { BlogPost, Settings } from "./types";

export const CATEGORIES = [
  { id: "ai-tools", name: "AI Tools", blurb: "ChatGPT, Claude, Midjourney and every premium AI subscription" },
  { id: "design-creative", name: "Design & Creative", blurb: "Adobe Creative Cloud, Canva Pro and premium design software" },
  { id: "streaming-accounts", name: "Streaming Accounts", blurb: "Netflix, Prime Video, HBO Max and more" },
  { id: "seo-marketing-tools", name: "SEO & Marketing Tools", blurb: "Semrush, Moz, keyword and rank tracking tools" },
  { id: "social-media-growth", name: "Social Media Growth", blurb: "Followers, reviews and engagement services" },
  { id: "web-development", name: "Web Development", blurb: "Websites, hosting and domains" },
  { id: "graphic-design", name: "Graphic Design", blurb: "Logo design, branding and landing pages" },
  { id: "vpn-security", name: "VPN & Security", blurb: "NordVPN, ExpressVPN, HMA and more" },
  { id: "google-reviews", name: "Google Reviews", blurb: "Boost your business profile with genuine reviews" },
  { id: "company-registration", name: "Company Registration", blurb: "SECP registration and business setup" },
  { id: "youtube-monetization", name: "YouTube Monetization", blurb: "Grow and monetize your YouTube channel" },
  { id: "digital-marketing", name: "Digital Marketing", blurb: "Full-service digital marketing solutions" },
];

export const SEED_SETTINGS: Settings = {
  theme: "theme-sand",
  brandName: "Noorix Digital Lab",
  tagline: "Premium digital products & services, delivered instantly across Pakistan",
  whatsapp: "+923154429417",
  email: "hello@noorixdigitallab.pk",
  supportPhone: "0315 4429417",
  address: "Lahore, Punjab, Pakistan",
  freeShippingOver: 5000,
  shippingFlat: 350,
  shippingKarachi: 300,
  shippingKarachiUrgent: 450,
  provinceRates: {
    Punjab: 350,
    Sindh: 350,
    "Khyber Pakhtunkhwa": 279,
    Balochistan: 349,
    "Islamabad Capital Territory": 350,
    "Gilgit-Baltistan": 399,
    "Azad Kashmir": 349,
  },
  saleBannerText: "PREMIUM DIGITAL DEALS — Instant Delivery on Every Order",
  saleEndsAt: new Date(Date.now() + 6 * 3600000).toISOString(),
  independenceBanner: true,
  liveSalesPopup: true,
  socials: {
    facebook: "https://facebook.com/noorixdigitallab",
    instagram: "https://instagram.com/noorixdigitallab",
    tiktok: "https://tiktok.com/@noorixdigitallab",
    youtube: "https://youtube.com/@noorixdigitallab",
  },
  seo: {
    title: "Noorix Digital Lab — Premium Subscriptions, Software & Digital Services",
    description:
      "Shop premium AI tools, software subscriptions, streaming accounts, VPNs and social media growth services in Pakistan. Instant delivery available.",
    keywords: "chatgpt plus, netflix, canva pro, vpn, social media growth, digital services pakistan, noorix digital lab",
  },
  analytics: { ga4: "", metaPixel: "", gtm: "", tiktokPixel: "" },
  maintenanceMode: false,
  orderNotificationEmail: "hello@noorixdigitallab.pk",
  currency: "PKR",
  lowStockThreshold: 5,
  allowGuestCheckout: true,
  showInventoryCount: true,
  termsAndConditions: "Standard terms apply.",
  privacyPolicy: "We protect your data.",
  heroSlides: [
    {
      image: "/products/banner-noorix-wide-1.jpg",
      mobileImage: "/products/banner-noorix-mobile-1.jpg",
      link: "/shop",
    },
    {
      image: "/products/banner-noorix-wide-2.jpg",
      mobileImage: "/products/banner-noorix-mobile-2.jpg",
      link: "/shop",
    },
    {
      image: "/products/banner-noorix-wide-3.jpg",
      mobileImage: "/products/banner-noorix-mobile-3.jpg",
      link: "/shop",
    },
  ],
  categories: CATEGORIES,
  tickerSpeed: "medium",
};

export const SEED_BLOG: BlogPost[] = [
  {
    id: "b1",
    slug: "how-to-style-a-crinkle-silk-hijab",
    title: "How to Style a Crinkle Silk Hijab (5 Everyday Looks)",
    excerpt:
      "Five simple, no-slip ways to drape crinkle silk — from the classic wrap to a soft turban finish.",
    body: "Crinkle silk holds its shape without pins, which makes it the easiest fabric for beginners. Start with a fitted undercap, centre the hijab slightly off-balance, and let the longer side carry the drape. For a fuller look, pleat once at the shoulder and secure with a magnet pin.",
    category: "Styling",
    author: "Anayah Studio",
    date: "2026-07-22",
  },
  {
    id: "b2",
    slug: "choosing-the-right-namaz-chadar",
    title: "Choosing the Right Namaz Chadar: Fabric, Length & Care",
    excerpt: "What to look for in a prayer chadar so it stays soft, opaque and easy to wash.",
    body: "A good namaz chadar is lightweight, fully opaque and long enough to cover comfortably while sitting. Cotton-viscose blends breathe best in summer, while brushed poly-cotton keeps warmth in winter. Wash cold, dry flat, and never wring the fabric.",
    category: "Guides",
    author: "Anayah Studio",
    date: "2026-07-10",
  },
  {
    id: "b3",
    slug: "hijab-fabric-care-guide",
    title: "A Simple Fabric Care Guide for Georgette & Jersey Hijabs",
    excerpt: "Keep colour, drape and texture intact with a five-minute routine.",
    body: "Georgette prefers a cold hand wash and shade drying; jersey can be machine washed on a gentle cycle inside a mesh bag. Store folded rather than hung so the fibres do not stretch, and steam instead of ironing directly on printed panels.",
    category: "Care",
    author: "Anayah Studio",
    date: "2026-06-28",
  },
];

export const LIVE_SALES_FEED = [
  "Ayesha from Lahore purchased ChatGPT Plus",
  "Maryam from Karachi purchased Netflix Premium",
  "Fatima from Islamabad purchased Canva Pro",
  "Hira from Faisalabad purchased ExpressVPN",
  "Zainab from Multan purchased Instagram Followers",
  "Sana from Peshawar purchased Adobe Creative Cloud",
];
