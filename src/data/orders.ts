import type { ShopId } from "./products";

export type OrderStatus = "naujas" | "nupirkta_tiekejui" | "issiusta";

export type OrderLine = {
  slug: string;
  name: string;
  qty: number;
  color?: string;
  size?: string;
  sell: number;
  cogs: number;
  supplierName: string;
  supplierUrl: string;
  warehouse: string;
  notes: string;
};

export type ShopOrder = {
  id: string;
  shopId: ShopId;
  at: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  locker: string;
  ship: string;
  pay: string;
  wrap: boolean;
  total: number;
  status: OrderStatus;
  lines: OrderLine[];
};

const KEY = "shop-orders";
const LEGACY_KEY = "dropship-orders";

export function loadOrders(): ShopOrder[] {
  try {
    const fresh = JSON.parse(localStorage.getItem(KEY) || "[]") as ShopOrder[];
    const legacy = JSON.parse(localStorage.getItem(LEGACY_KEY) || "[]") as ShopOrder[];
    return [...fresh, ...legacy].filter((o) => o && Array.isArray(o.lines));
  } catch {
    return [];
  }
}

export function saveOrder(order: ShopOrder) {
  const next = [order, ...loadOrders()];
  localStorage.setItem(KEY, JSON.stringify(next));
}

export function updateOrderStatus(id: string, status: OrderStatus) {
  const next = loadOrders().map((o) => (o.id === id ? { ...o, status } : o));
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}

export function addressBlock(o: ShopOrder) {
  return `${o.name}\n${o.phone}\n${o.city}\n${o.locker || "Paštomatas nenurodytas"}\n${o.email}`;
}
