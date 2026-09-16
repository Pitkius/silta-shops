import { createContext, useContext, type ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { getShopFromHost } from "./sites";
import { getShop, type Shop } from "./shops";

export const ShopContext = createContext<Shop | null>(null);

export function ShopProvider({ shop, children }: { shop: Shop; children: ReactNode }) {
  return <ShopContext.Provider value={shop}>{children}</ShopContext.Provider>;
}

export function useShop(): Shop {
  const ctx = useContext(ShopContext);
  if (ctx) return ctx;
  const { shopId } = useParams();
  const shop = getShop(shopId);
  if (!shop) throw new Error("Parduotuvė nerasta");
  return shop;
}

export function useHref() {
  const shop = useShop();
  const dedicated = getShopFromHost()?.id === shop.id;
  return (path: string) => {
    const p = path.startsWith("/") ? path : `/${path}`;
    if (dedicated) return p;
    return `/${shop.id}${p === "/" ? "" : p}`;
  };
}

export function SmartLink({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  if (to.startsWith("http://") || to.startsWith("https://")) {
    return (
      <a href={to} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
