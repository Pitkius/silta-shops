import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../cart";
import { track } from "../data/analytics";
import { saveOrder, type OrderLine } from "../data/orders";
import {
  COURIER_FEE,
  FREE_SHIP,
  LOCKER_FEE,
  WRAP_FEE,
  formatEur,
  getProduct,
} from "../data/products";
import { useHref, useShop } from "../useShop";

const banks = ["Swedbank", "SEB", "Luminor", "Revolut", "Apple Pay", "Kortelė"];

export default function Checkout() {
  const shop = useShop();
  const href = useHref();
  const { items, subtotal, clear, shopId } = useCart();
  const [ship, setShip] = useState<"locker" | "courier">("locker");
  const [pay, setPay] = useState("Swedbank");
  const [wrap, setWrap] = useState(false);
  const [done, setDone] = useState<string | null>(null);

  const shipFee = ship === "courier" ? COURIER_FEE : subtotal >= FREE_SHIP ? 0 : LOCKER_FEE;
  const wrapFee = wrap ? WRAP_FEE : 0;
  const total = subtotal + shipFee + wrapFee;

  useEffect(() => {
    if (items.length) {
      track({ shop: shopId, type: "begin_checkout", path: window.location.pathname, value: total });
    }
  }, [shopId]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const id = shop.wordmark.replace(".", "") + "-" + Math.random().toString(36).slice(2, 7).toUpperCase();
    const lines: OrderLine[] = items.flatMap((i) => {
      const p = getProduct(i.slug);
      if (!p) return [];
      const s = p.suppliers[0];
      return [
        {
          slug: p.slug,
          name: p.name,
          qty: i.qty,
          color: i.color,
          size: i.size,
          sell: p.price,
          cogs: p.cogs,
          supplierName: s?.name || "Tiekėjas",
          supplierUrl: s?.url || "",
          warehouse: s?.warehouse || "",
          notes: s?.notes || "",
        },
      ];
    });
    saveOrder({
      id,
      shopId,
      at: new Date().toISOString(),
      name: String(data.get("name")),
      email: String(data.get("email")),
      phone: String(data.get("phone")),
      city: String(data.get("city")),
      locker: String(data.get("locker")),
      ship,
      pay,
      wrap,
      total,
      status: "naujas",
      lines,
    });
    track({ shop: shopId, type: "purchase", path: window.location.pathname, value: total });
    clear();
    setDone(id);
  }

  if (done) {
    return (
      <section className="section wrap">
        <div className="kicker">Užsakymas</div>
        <h2>Priėmėme {done}</h2>
        <p>Ačiū. Užsakymą priėmėme — laišką su detalemis atsiųsime nurodytu el. paštu.</p>
        <Link className="btn btn-ink" to={href("/katalogas")}>
          Grįžti
        </Link>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="section wrap">
        <p>
          Krepšelis tuščias. <Link to={href("/katalogas")}>Katalogas</Link>
        </p>
      </section>
    );
  }

  return (
    <section className="checkout wrap">
      <form className="stack" onSubmit={onSubmit}>
        <div className="kicker">Apmokėjimas</div>
        <h2>Paštomatas ir bankas.</h2>
        <div className="notice">Demo apmokėjimas. Prieš ads junkite Montonio ir UAB rekvizitus.</div>
        <label>Vardas, pavardė</label>
        <input name="name" required placeholder="Vardas Pavardė" />
        <label>El. paštas</label>
        <input name="email" type="email" required placeholder="vardas@email.lt" />
        <label>Telefonas</label>
        <input name="phone" required placeholder="+370 6" />
        <label>Miestas</label>
        <input name="city" required placeholder="Vilnius" />
        <label>Paštomatas (jei locker)</label>
        <input name="locker" placeholder="LP Express PC Panorama / Omniva Akropolis" />

        <label>Pristatymas</label>
        <div className="pay-grid">
          <button type="button" className={`pay ${ship === "locker" ? "on" : ""}`} onClick={() => setShip("locker")}>
            Paštomatas · {subtotal >= FREE_SHIP ? "nemokamai" : formatEur(LOCKER_FEE)}
          </button>
          <button type="button" className={`pay ${ship === "courier" ? "on" : ""}`} onClick={() => setShip("courier")}>
            Kurjeris · {formatEur(COURIER_FEE)}
          </button>
        </div>

        <label>
          <input type="checkbox" checked={wrap} onChange={(e) => setWrap(e.target.checked)} /> Dovanų pakavimas ·{" "}
          {formatEur(WRAP_FEE)}
        </label>

        <label>Mokėjimas (Montonio vaizdas)</label>
        <div className="pay-grid">
          {banks.map((b) => (
            <button key={b} type="button" className={`pay ${pay === b ? "on" : ""}`} onClick={() => setPay(b)}>
              {b}
            </button>
          ))}
        </div>
        <button className="btn btn-copper" type="submit">
          Mokėti {formatEur(total)}
        </button>
      </form>
      <aside className="summary">
        <h3>Užsakymas</h3>
        {items.map((i) => {
          const p = getProduct(i.slug);
          if (!p) return null;
          return (
            <p key={i.slug + i.size}>
              {p.name} × {i.qty}
              <br />
              <span className="muted">{formatEur(p.price * i.qty)}</span>
            </p>
          );
        })}
        <p>Pristatymas {shipFee === 0 ? "nemokamai" : formatEur(shipFee)}</p>
        {wrap && <p>Pakavimas {formatEur(WRAP_FEE)}</p>}
        <p className="price" style={{ fontSize: 24 }}>
          {formatEur(total)}
        </p>
      </aside>
    </section>
  );
}
