import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { track } from "./data/analytics";
import { getProduct } from "./data/products";
import type { ShopId } from "./data/products";

export type CartItem = {
  slug: string;
  qty: number;
  color?: string;
  size?: string;
};

type CartCtx = {
  shopId: ShopId;
  items: CartItem[];
  add: (item: CartItem) => void;
  setQty: (slug: string, qty: number, color?: string, size?: string) => void;
  remove: (slug: string, color?: string, size?: string) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const Ctx = createContext<CartCtx | null>(null);

function load(shopId: ShopId): CartItem[] {
  try {
    return JSON.parse(localStorage.getItem(`cart-${shopId}`) || "[]");
  } catch {
    return [];
  }
}

function same(a: CartItem, b: Pick<CartItem, "slug" | "color" | "size">) {
  return a.slug === b.slug && a.color === b.color && a.size === b.size;
}

export function CartProvider({ shopId, children }: { shopId: ShopId; children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => load(shopId));

  function persist(next: CartItem[]) {
    setItems(next);
    localStorage.setItem(`cart-${shopId}`, JSON.stringify(next));
  }

  const value = useMemo<CartCtx>(() => {
    const add = (item: CartItem) => {
      const next = [...items];
      const i = next.findIndex((x) => same(x, item));
      if (i >= 0) next[i] = { ...next[i], qty: next[i].qty + item.qty };
      else next.push(item);
      persist(next);
      const p = getProduct(item.slug);
      track({
        shop: shopId,
        type: "add_to_cart",
        path: window.location.pathname,
        slug: item.slug,
        value: p ? p.price * item.qty : 0,
      });
    };
    const setQty = (slug: string, qty: number, color?: string, size?: string) => {
      persist(
        items
          .map((x) => (same(x, { slug, color, size }) ? { ...x, qty } : x))
          .filter((x) => x.qty > 0)
      );
    };
    const remove = (slug: string, color?: string, size?: string) => {
      persist(items.filter((x) => !same(x, { slug, color, size })));
    };
    const clear = () => persist([]);
    const count = items.reduce((n, i) => n + i.qty, 0);
    const subtotal = items.reduce((n, i) => {
      const p = getProduct(i.slug);
      return n + (p ? p.price * i.qty : 0);
    }, 0);
    return { shopId, items, add, setQty, remove, clear, count, subtotal };
  }, [items, shopId]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("cart");
  return c;
}
