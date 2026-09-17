import { Link, NavLink } from "react-router-dom";
import { useEffect, type ReactNode } from "react";
import { hqLogout } from "./hqAuth";
import { shops } from "./shops";
import { shopHref } from "./sites";
import { SmartLink } from "./useShop";

export function HqChrome({ children }: { children: ReactNode }) {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow, noarchive";
    document.head.appendChild(meta);
    document.title = "HQ";
    return () => {
      meta.remove();
    };
  }, []);

  return (
    <div className="hq">
      <header className="hq-bar">
        <div className="wrap header-row">
          <Link to="/" className="logo">
            HQ<span>.</span>
          </Link>
          <nav className="main">
            <NavLink to="/" end>
              Parduotuvės
            </NavLink>
            <NavLink to="/analitika">Analitika</NavLink>
            <NavLink to="/uzsakymai">Užsakymai</NavLink>
            <NavLink to="/reklamos">Reklamos</NavLink>
            <NavLink to="/tiekejai">Tiekėjai</NavLink>
            {shops.map((s) => (
              <SmartLink key={s.id} to={shopHref(s.id)}>
                {s.wordmark}
              </SmartLink>
            ))}
            <button type="button" className="hq-out" onClick={() => void hqLogout()}>
              Išeiti
            </button>
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}
