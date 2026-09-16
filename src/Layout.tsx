import { Link, NavLink, Outlet } from "react-router-dom";
import { useCart } from "./cart";
import { hqHref } from "./sites";
import { SmartLink, useHref, useShop } from "./useShop";

export default function Layout() {
  const shop = useShop();
  const href = useHref();
  const { count } = useCart();
  return (
    <div data-shop={shop.id}>
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
            <SmartLink to={hqHref("/")}>Visos parduotuvės</SmartLink>
          </nav>
          <div className="header-actions">
            <Link to={href("/krepselis")} className="icon-btn filled">
              Krepšelis
              {count > 0 && <span className="cart-count">{count}</span>}
            </Link>
          </div>
        </div>
      </header>
      <Outlet />
      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <div className="logo">
              {shop.wordmark}
              <span>.</span>
            </div>
            <p className="muted" style={{ color: "var(--ice)" }}>
              {shop.tagline}
            </p>
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
              <SmartLink to={hqHref("/")}>Kitos parduotuvės</SmartLink>
              <br />
              <Link to={href("/dovanos")}>Dovanos</Link>
              <br />
              <Link to={href("/reklamos")}>Reklamos</Link>
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
