import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { CartProvider } from "./cart";
import { trackPageview, type SiteId } from "./data/analytics";
import Layout from "./Layout";
import Ads from "./pages/Ads";
import Analytics from "./pages/Analytics";
import CartPage from "./pages/CartPage";
import Catalog from "./pages/Catalog";
import Checkout from "./pages/Checkout";
import Gifts from "./pages/Gifts";
import Home from "./pages/Home";
import Hub from "./pages/Hub";
import Orders from "./pages/Orders";
import Privacy from "./pages/Privacy";
import Product from "./pages/Product";
import Returns from "./pages/Returns";
import Shipping from "./pages/Shipping";
import Suppliers from "./pages/Suppliers";
import { getShopFromHost } from "./sites";
import { getShop } from "./shops";
import { ShopProvider } from "./useShop";

const shopChildRoutes = (
  <>
    <Route index element={<Home />} />
    <Route path="katalogas" element={<Catalog />} />
    <Route path="p/:slug" element={<Product />} />
    <Route path="krepselis" element={<CartPage />} />
    <Route path="apmokejimas" element={<Checkout />} />
    <Route path="dovanos" element={<Gifts />} />
    <Route path="reklamos" element={<Ads />} />
    <Route path="tiekejai" element={<Suppliers />} />
    <Route path="pristatymas" element={<Shipping />} />
    <Route path="grazinimas" element={<Returns />} />
    <Route path="privatumas" element={<Privacy />} />
  </>
);

function siteFromPath(pathname: string): SiteId {
  const hosted = getShopFromHost();
  if (hosted) return hosted.id;
  const seg = pathname.split("/")[1];
  if (getShop(seg)) return seg as SiteId;
  return "hq";
}

function AnalyticsListener() {
  const loc = useLocation();
  useEffect(() => {
    const site = siteFromPath(loc.pathname);
    const shop = site === "hq" ? undefined : getShop(site);
    if (shop) document.title = `${shop.wordmark} — ${shop.tagline}`;
    else if (loc.pathname.startsWith("/analitika")) document.title = "HQ — analitika";
    else if (loc.pathname.startsWith("/uzsakymai")) document.title = "HQ — užsakymai";
    else document.title = "HQ — trys parduotuvės";
    trackPageview(site, loc.pathname + loc.search);
  }, [loc.pathname, loc.search]);
  return null;
}

function ShopGate() {
  const { shopId } = useParams();
  const shop = getShop(shopId);
  if (!shop) return <Navigate to="/" replace />;
  return (
    <ShopProvider shop={shop}>
      <CartProvider key={shop.id} shopId={shop.id}>
        <Layout />
      </CartProvider>
    </ShopProvider>
  );
}

function HostedShop() {
  const shop = getShopFromHost();
  if (!shop) return <Navigate to="/" replace />;
  return (
    <ShopProvider shop={shop}>
      <CartProvider key={shop.id} shopId={shop.id}>
        <Layout />
      </CartProvider>
    </ShopProvider>
  );
}

export default function App() {
  const hosted = getShopFromHost();
  return (
    <BrowserRouter>
      <AnalyticsListener />
      {hosted ? (
        <Routes>
          <Route path="/" element={<HostedShop />}>
            {shopChildRoutes}
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Hub />} />
          <Route path="/uzsakymai" element={<Orders />} />
          <Route path="/analitika" element={<Analytics />} />
          <Route path="/:shopId" element={<ShopGate />}>
            {shopChildRoutes}
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}
