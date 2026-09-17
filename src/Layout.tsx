import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useCart } from "./cart";
import { useHref, useShop } from "./useShop";

export default function Layout() {
  const shop = useShop();
  const href = useHref();
  const { count } = useCart();
  const loc = useLocation();

  return (
    <div className="shop-shell" data-shop={shop.id}>
      <div className="atmosphere" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="topbar">{shop.topbar}</div>
      <header className="header">
        <div className="wrap header-row">
          <Link to={href("/")} className="logo">
            {shop.wordmark}
            <span>.</span>
          </Link>
          <nav className="main">
            {shop.nav.map((n) => (
              <NavLink key={n.to} to={href(n.to)}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="header-actions">
            <Link to={href("/krepselis")} className="icon-btn filled">
              Krepšelis
              {count > 0 && <span className="cart-count">{count}</span>}
            </Link>
          </div>
        </div>
      </header>
      <main className="page" key={loc.pathname}>
        <Outlet />
      </main>
      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <div className="logo">
              {shop.wordmark}
              <span>.</span>
            </div>
            <p className="muted footer-tag">{shop.tagline}</p>
          </div>
          <div>
            <strong>Parduotuvė</strong>
            <p>
              <Link to={href("/katalogas")}>Katalogas</Link>
              <br />
              <Link to={href("/pristatymas")}>Pristatymas</Link>
              <br />
              <Link to={href("/grazinimas")}>Grąžinimas</Link>
            </p>
          </div>
          <div>
            <strong>Kita</strong>
            <p>
              <Link to={href("/dovanos")}>Dovanos</Link>
              <br />
              <Link to={href("/privatumas")}>Privatumas</Link>
            </p>
          </div>
          <div>
            <strong>Kontaktai</strong>
            <p>
              {shop.email}
              <br />
              {shop.domain}
            </p>
          </div>
        </div>
        <div className="wrap legal">
          © 2026 {shop.wordmark}. <Link to={href("/privatumas")}>Privatumas</Link>.
        </div>
      </footer>
    </div>
  );
}
