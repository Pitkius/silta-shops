import { Link, NavLink } from "react-router-dom";
import type { ReactNode } from "react";
import { shops } from "./shops";
import { shopHref } from "./sites";
import { SmartLink } from "./useShop";

export function HqChrome({ children }: { children: ReactNode }) {
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
            {shops.map((s) => (
              <SmartLink key={s.id} to={shopHref(s.id)}>
                {s.wordmark}
              </SmartLink>
            ))}
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}
