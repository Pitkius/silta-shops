import { useEffect, useRef, type ReactElement } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { CartProvider } from "./cart";
import { trackPageview, trackViewEnd, type SiteId } from "./data/analytics";
import { HqGate } from "./hqAuth";
import Layout from "./Layout";
import Analytics from "./pages/Analytics";
import CartPage from "./pages/CartPage";
import Catalog from "./pages/Catalog";
import Checkout from "./pages/Checkout";
import Gifts from "./pages/Gifts";
import Home from "./pages/Home";
import Hub from "./pages/Hub";
import { HqAds, HqSuppliers } from "./pages/HqTools";
import Orders from "./pages/Orders";
import Privacy from "./pages/Privacy";
import Product from "./pages/Product";
import Returns from "./pages/Returns";
import Shipping from "./pages/Shipping";
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
    <Route path="reklamos" element={<Navigate to="../katalogas" replace />} />
    <Route path="tiekejai" element={<Navigate to="../katalogas" replace />} />
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

function scrollDepth() {
  const el = document.documentElement;
  const max = el.scrollHeight - el.clientHeight;
  if (max <= 0) return 100;
  return Math.min(100, Math.round((el.scrollTop / max) * 100));
}

function AnalyticsListener() {
  const loc = useLocation();
  const start = useRef({ path: "", t: Date.now(), scroll: 0 });

  useEffect(() => {
    const site = siteFromPath(loc.pathname);
    const shop = site === "hq" ? undefined : getShop(site);
    if (shop) document.title = `${shop.wordmark} — ${shop.tagline}`;
    else if (loc.pathname.startsWith("/analitika")) document.title = "HQ — analitika";
    else if (loc.pathname.startsWith("/uzsakymai")) document.title = "HQ — užsakymai";
    else document.title = "HQ";

    const prev = start.current;
    if (prev.path) {
      const prevShop = siteFromPath(prev.path);
      trackViewEnd(prevShop, prev.path, Date.now() - prev.t, prev.scroll);
    }
    start.current = { path: loc.pathname + loc.search, t: Date.now(), scroll: 0 };
    trackPageview(site, loc.pathname + loc.search);

    const onScroll = () => {
      start.current.scroll = Math.max(start.current.scroll, scrollDepth());
    };
    const onHide = () => {
      const cur = start.current;
      trackViewEnd(site, cur.path, Date.now() - cur.t, cur.scroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pagehide", onHide);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pagehide", onHide);
    };
  }, [loc.pathname, loc.search]);
  return null;
}

function ShopGate() {
  const { shopId } = useParams();
  const shop = getShop(shopId);
  if (!shop) return <Navigate to="/silta" replace />;
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

function hq(el: ReactElement) {
  return <HqGate>{el}</HqGate>;
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
          <Route path="/" element={hq(<Hub />)} />
          <Route path="/uzsakymai" element={hq(<Orders />)} />
          <Route path="/analitika" element={hq(<Analytics />)} />
          <Route path="/reklamos" element={hq(<HqAds />)} />
          <Route path="/tiekejai" element={hq(<HqSuppliers />)} />
          <Route path="/:shopId" element={<ShopGate />}>
            {shopChildRoutes}
          </Route>
          <Route path="*" element={<Navigate to="/silta" replace />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}
