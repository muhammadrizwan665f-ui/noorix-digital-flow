import type { BulkRule, PaymentMethod, Product, Settings } from "./types";

export const PROVINCES = [
  "Punjab",
  "Sindh",
  "Khyber Pakhtunkhwa",
  "Balochistan",
  "Islamabad Capital Territory",
  "Gilgit-Baltistan",
  "Azad Kashmir",
];

export function formatPKR(value: number): string {
  return "Rs " + Math.round(value).toLocaleString("en-PK");
}

export function unitPrice(product: Product, durationLabel?: string): number {
  if (durationLabel && product.durationPricing?.length) {
    const match = product.durationPricing.find((d) => d.label === durationLabel);
    if (match) return match.price;
  }
  return product.salePrice ?? product.price;
}

export function discountPct(product: Product): number {
  if (!product.salePrice || product.price <= 0) return 0;
  return Math.round(((product.price - product.salePrice) / product.price) * 100);
}

export function bulkDiscountFor(rules: BulkRule[], qty: number): BulkRule | null {
  return null;
}

export function lineTotal(product: Product, qty: number, durationLabel?: string) {
  const base = unitPrice(product, durationLabel) * qty;
  const rule = bulkDiscountFor(product.bulkRules, qty);
  const bulk = rule ? (base * rule.discountPct) / 100 : 0;
  return { base, bulk, total: base - bulk, rule };
}

export interface CartTotals {
  subtotal: number;
  bulkDiscount: number;
  couponDiscount: number;
  paymentDiscount: number;
  shipping: number;
  total: number;
  advanceDue: number;
  isUrgent?: boolean;
}

export function computeTotals(opts: {
  lines: { product: Product; qty: number; durationLabel?: string }[];
  method: PaymentMethod | null;
  couponPct: number;
  settings: Settings;
}): CartTotals {
  let subtotal = 0;
  for (const l of opts.lines) {
    const t = lineTotal(l.product, l.qty, l.durationLabel);
    subtotal += t.base;
  }
  const goods = subtotal;
  const bulkDiscount = 0;
  const couponDiscount = 0;
  const paymentDiscount = 0;

  // Digital products delivered instantly via WhatsApp — no shipping, full payment upfront.
  const shipping = 0;
  const total = goods + shipping;
  const advanceDue = total;

  return { subtotal, bulkDiscount, couponDiscount, paymentDiscount, shipping, total, advanceDue };
}

export function countdown(target: string | null) {
  if (!target) return null;
  const diff = new Date(target).getTime() - Date.now();
  if (Number.isNaN(diff) || diff <= 0) return { d: 0, h: 0, m: 0, s: 0, done: true };
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
    done: false,
  };
}
