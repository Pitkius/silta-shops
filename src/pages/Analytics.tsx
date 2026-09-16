import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { loadEvents, rangeStart, summarize, type RangeKey } from "../data/analytics";
import { loadOrders } from "../data/orders";
import { formatEur } from "../data/products";
import { HqChrome } from "../HqChrome";
import { shopHref } from "../sites";
import { getShop, shops } from "../shops";
import { SmartLink } from "../useShop";

const ranges: { id: RangeKey; label: string }[] = [
  { id: "siandien", label: "Šiandien" },
  { id: "7d", label: "7 dienos" },
  { id: "30d", label: "30 dienų" },
  { id: "viskas", label: "Viskas" },
];

function shopLabel(id: string) {
  if (id === "hq") return "HQ";
  return getShop(id)?.wordmark || id;
}

function when(t: number) {
  return new Date(t).toLocaleString("lt-LT", { dateStyle: "short", timeStyle: "short" });
}

function typeLabel(t: string) {
  if (t === "pageview") return "puslapis";
  if (t === "add_to_cart") return "į krepšelį";
  if (t === "begin_checkout") return "apmokėjimas";
  if (t === "purchase") return "pirkimas";
  return t;
}

function Bars({ rows }: { rows: { label: string; n: number }[] }) {
  const max = Math.max(1, ...rows.map((r) => r.n));
  if (rows.length === 0) return <p className="muted">Dar nėra duomenų.</p>;
  return (
    <div className="bars">
      {rows.map((r) => (
        <div className="bar-row" key={r.label}>
          <span className="bar-label">{r.label}</span>
          <div className="bar-track">
            <div className="bar-fill" style={{ width: `${(r.n / max) * 100}%` }} />
          </div>
          <strong>{r.n}</strong>
        </div>
      ))}
    </div>
  );
}

export default function Analytics() {
  const [range, setRange] = useState<RangeKey>("7d");
  const [includeHq, setIncludeHq] = useState(false);
  const [tick, setTick] = useState(0);
  const events = useMemo(() => loadEvents(), [tick]);
  const orders = useMemo(() => loadOrders(), [tick]);
  const from = rangeStart(range);
  const s = summarize(events, from, includeHq);
  const ordersIn = orders.filter((o) => new Date(o.at).getTime() >= from);
  const orderRev = ordersIn.reduce((n, o) => n + o.total, 0);
  const byShopOrders = shops.map((shop) => {
    const list = ordersIn.filter((o) => o.shopId === shop.id);
    const views = s.byShop.find((x) => x.label === shop.id)?.n || 0;
    return {
      shop,
      views,
      orders: list.length,
      revenue: list.reduce((n, o) => n + o.total, 0),
    };
  });

  return (
    <HqChrome>
      <section className="section">
        <div className="wrap">
          <div className="kicker">HQ · analitika</div>
          <h2>Kas vyksta vitrinose</h2>
          <p className="muted" style={{ maxWidth: "62ch" }}>
            Apsilankymai, šaltiniai, krepšelis ir apmokėjimai. Lokaliai viskas šiame naršyklėje. Gyvai, kai domenai
            skirtingi — čia pat Meta Pixel ir, jei prijungiate, serverio adresas.
          </p>
          <div className="row" style={{ marginTop: 18 }}>
            {ranges.map((r) => (
              <button
                key={r.id}
                className={`chip ${range === r.id ? "on" : ""}`}
                onClick={() => setRange(r.id)}
              >
                {r.label}
              </button>
            ))}
            <button className={`chip ${includeHq ? "on" : ""}`} onClick={() => setIncludeHq((v) => !v)}>
              {includeHq ? "HQ įskaičiuotas" : "Tik vitrinos"}
            </button>
            <button className="chip" onClick={() => setTick((n) => n + 1)}>
              Atnaujinti
            </button>
          </div>

          {s.pageviews === 0 && ordersIn.length === 0 ? (
            <div className="notice" style={{ marginTop: 28 }}>
              Dar tuščia. Atidarykite vitriną, pavaikščiokite po katalogą — tada grįžkite čia.
              <div className="row" style={{ marginTop: 12 }}>
                {shops.map((shop) => (
                  <SmartLink key={shop.id} className="btn btn-ink" to={shopHref(shop.id)}>
                    {shop.wordmark}
                  </SmartLink>
                ))}
              </div>
            </div>
          ) : null}

          <div className="stat-grid">
            <article className="stat-card">
              <span className="muted">Sesijos</span>
              <strong>{s.sessions}</strong>
            </article>
            <article className="stat-card">
              <span className="muted">Puslapių peržiūros</span>
              <strong>{s.pageviews}</strong>
            </article>
            <article className="stat-card">
              <span className="muted">Į krepšelį</span>
              <strong>{s.carts}</strong>
              <span className="muted">{s.cartRate}% sesijų</span>
            </article>
            <article className="stat-card">
              <span className="muted">Pradėjo mokėti</span>
              <strong>{s.checkouts}</strong>
              <span className="muted">{s.payRate}% sesijų</span>
            </article>
            <article className="stat-card">
              <span className="muted">Užsakymai</span>
              <strong>{Math.max(s.purchases, ordersIn.length)}</strong>
              <span className="muted">{s.buyRate}% sesijų</span>
            </article>
            <article className="stat-card">
              <span className="muted">Pajamos (demo)</span>
              <strong>{formatEur(orderRev || s.revenue)}</strong>
            </article>
          </div>

          <h3 style={{ marginTop: 48 }}>Pagal parduotuvę</h3>
          <table className="data">
            <thead>
              <tr>
                <th>Vitrina</th>
                <th>Domenas</th>
                <th>Peržiūros</th>
                <th>Užsakymai</th>
                <th>Suma</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {byShopOrders.map((row) => (
                <tr key={row.shop.id}>
                  <td>
                    <strong>{row.shop.wordmark}</strong>
                  </td>
                  <td className="muted">{row.shop.domain}</td>
                  <td>{row.views}</td>
                  <td>{row.orders}</td>
                  <td>{formatEur(row.revenue)}</td>
                  <td>
                    <SmartLink to={shopHref(row.shop.id)}>Atidaryti →</SmartLink>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="grid-2" style={{ marginTop: 48 }}>
            <div className="copy-block">
              <strong>Iš kur ateina</strong>
              <p className="muted">utm_source, Facebook, TikTok, Google, arba tiesiogiai.</p>
              <Bars rows={s.bySource} />
            </div>
            <div className="copy-block">
              <strong>Įrenginys</strong>
              <p className="muted">Pagal lango plotį tuo metu.</p>
              <Bars rows={s.byDevice} />
            </div>
          </div>

          <div className="grid-2" style={{ marginTop: 22 }}>
            <div className="copy-block">
              <strong>Populiariausi puslapiai</strong>
              <Bars
                rows={s.byPage.map((r) => ({
                  label: r.label.replace(/^\/(silta|ramu|ziburys)/, "") || "/",
                  n: r.n,
                }))}
              />
            </div>
            <div className="copy-block">
              <strong>Peržiūros pagal dieną</strong>
              <Bars rows={s.byDay} />
            </div>
          </div>

          <h3 style={{ marginTop: 48 }}>Paskutiniai įvykiai</h3>
          {s.recent.length === 0 ? (
            <p className="muted">Nėra įvykių šiame periode.</p>
          ) : (
            <table className="data">
              <thead>
                <tr>
                  <th>Kada</th>
                  <th>Vitrina</th>
                  <th>Kas</th>
                  <th>Kelias</th>
                  <th>Šaltinis</th>
                  <th>Įrenginys</th>
                </tr>
              </thead>
              <tbody>
                {s.recent.map((e) => (
                  <tr key={e.id}>
                    <td>{when(e.t)}</td>
                    <td>{shopLabel(e.shop)}</td>
                    <td>{typeLabel(e.type)}</td>
                    <td className="muted">{e.path}</td>
                    <td>{e.source}</td>
                    <td>{e.device}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <p style={{ marginTop: 28 }}>
            <Link className="btn btn-line" to="/uzsakymai">
              Užsakymai
            </Link>
          </p>
        </div>
      </section>
    </HqChrome>
  );
}
