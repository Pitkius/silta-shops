import { useState } from "react";
import { Navigate } from "react-router-dom";
import Ads from "./Ads";
import Suppliers from "./Suppliers";
import { HqChrome } from "../HqChrome";
import { ShopProvider } from "../useShop";
import { getShop, shops } from "../shops";
import type { ShopId } from "../data/products";

function HqShopSwitch({ page }: { page: "ads" | "suppliers" }) {
  const [id, setId] = useState<ShopId>("silta");
  const shop = getShop(id);
  if (!shop) return <Navigate to="/" replace />;
  return (
    <HqChrome>
      <div className="wrap" style={{ paddingTop: 24 }}>
        <div className="row">
          {shops.map((s) => (
            <button key={s.id} className={`chip ${id === s.id ? "on" : ""}`} onClick={() => setId(s.id)}>
              {s.wordmark}
            </button>
          ))}
        </div>
      </div>
      <ShopProvider shop={shop}>{page === "ads" ? <Ads /> : <Suppliers />}</ShopProvider>
    </HqChrome>
  );
}

export function HqAds() {
  return <HqShopSwitch page="ads" />;
}

export function HqSuppliers() {
  return <HqShopSwitch page="suppliers" />;
}
