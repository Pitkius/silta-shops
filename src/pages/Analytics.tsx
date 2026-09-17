import { Fragment, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  eventsToCsv,
  loadEvents,
  mergeRemoteEvents,
  rangeStart,
  summarize,
  type RangeKey,
  type ShopFilter,
  type TrackEvent,
  type TrackType,
} from "../data/analytics";
import { loadOrders } from "../data/orders";
import { formatEur, getProduct, shopSlugs } from "../data/products";
import { HqChrome } from "../HqChrome";
import { shopHref } from "../sites";
import { getShop, shops } from "../shops";
import { SmartLink } from "../useShop";
import type { ShopId } from "../data/products";

const ranges: { id: RangeKey; label: string }[] = [
  { id: "siandien", label: "Šiandien" },
  { id: "24h", label: "24 val." },
  { id: "7d", label: "7 dienos" },
  { id: "30d", label: "30 dienų" },
  { id: "viskas", label: "Viskas" },
];

type Tab = "apzvalga" | "perziuros" | "prekes" | "sesijos";

function shopLabel(id: string) {
  if (id === "hq") return "HQ";
  return getShop(id)?.wordmark || id;
}

function shopOfSlug(slug: string): ShopId | undefined {
  return (Object.keys(shopSlugs) as ShopId[]).find((id) => shopSlugs[id].includes(slug));
}

function when(t: number) {
  return new Date(t).toLocaleString("lt-LT", { dateStyle: "short", timeStyle: "short" });
}

function typeLabel(t: TrackType | string) {
  if (t === "pageview") return "puslapis";
  if (t === "view_end") return "išėjimas";
  if (t === "product_view") return "prekė";
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
          <span className="bar-label" title={r.label}>
            {r.label}
          </span>
          <div className="bar-track">
            <div className="bar-fill" style={{ width: `${(r.n / max) * 100}%` }} />
          </div>
          <strong>{r.n}</strong>
        </div>
      ))}
    </div>
  );
}

function Funnel({ steps }: { steps: { label: string; n: number }[] }) {
  const max = Math.max(1, steps[0]?.n || 1);
  return (
    <div className="funnel">
      {steps.map((s) => (
        <div key={s.label} className="funnel-step">
          <div className="funnel-bar" style={{ width: `${Math.max(12, (s.n / max) * 100)}%` }}>
            <span>{s.label}</span>
            <strong>{s.n}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Analytics() {
  const [range, setRange] = useState<RangeKey>("7d");
  const [shop, setShop] = useState<ShopFilter>("visos");
  const [tab, setTab] = useState<Tab>("apzvalga");
  const [q, setQ] = useState("");
  const [kind, setKind] = useState<"visi" | TrackType>("visi");
  const [openSession, setOpenSession] = useState<string | null>(null);
  const [tick, setTick] = useState(0);
  const [remoteNote, setRemoteNote] = useState("");

  useEffect(() => {
    let alive = true;
    fetch("/api/events", { credentials: "same-origin" })
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!alive || !d?.events) return;
        mergeRemoteEvents(d.events as TrackEvent[]);
        setRemoteNote(`${d.events.length} įrašų iš serverio`);
        setTick((n) => n + 1);
      })
      .catch(() => undefined);
    const id = window.setInterval(() => setTick((n) => n + 1), 20000);
    return () => {
      alive = false;
      window.clearInterval(id);
    };
  }, []);

  const events = useMemo(() => loadEvents(), [tick]);
  const orders = useMemo(() => loadOrders(), [tick]);
  const from = rangeStart(range);
  const s = summarize(events, from, shop);
  const ordersIn = orders.filter((o) => {
    if (new Date(o.at).getTime() < from) return false;
    if (shop !== "visos" && o.shopId !== shop) return false;
    return true;
  });
  const orderRev = ordersIn.reduce((n, o) => n + o.total, 0);
  const byShopOrders = shops
    .filter((row) => shop === "visos" || row.id === shop)
    .map((row) => {
      const list = ordersIn.filter((o) => o.shopId === row.id);
      const views = s.byShop.find((x) => x.label === row.id)?.n || 0;
      return {
        shop: row,
        views,
        orders: list.length,
        revenue: list.reduce((n, o) => n + o.total, 0),
      };
    });

  const filteredViews = s.list.filter((e) => {
    if (e.type === "view_end") return false;
    if (kind !== "visi" && e.type !== kind) return false;
    if (!q.trim()) return true;
    const hay = `${e.path} ${e.title} ${e.source} ${e.slug || ""} ${e.campaign} ${e.session}`.toLowerCase();
    return hay.includes(q.trim().toLowerCase());
  });
  const sessionRows = s.sessionRows;

  const productRows = useMemo(() => {
    const map = new Map(s.byProduct.map((r) => [r.slug, { ...r }]));
    for (const o of ordersIn) {
      for (const line of o.lines) {
        const cur = map.get(line.slug) || { slug: line.slug, views: 0, carts: 0, buys: 0, revenue: 0 };
        cur.buys += line.qty;
        cur.revenue += line.sell * line.qty;
        map.set(line.slug, cur);
      }
    }
    return [...map.values()].sort((a, b) => b.views - a.views || b.carts - a.carts);
  }, [s.byProduct, ordersIn]);

  function downloadCsv() {
    const blob = new Blob([eventsToCsv(s.list)], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `hq-analitika-${range}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  return (
    <HqChrome>
      <section className="section">
        <div className="wrap">
          <div className="kicker">HQ · analitika</div>
          <h2>Peržiūros ir elgsena</h2>
          <p className="muted" style={{ maxWidth: "68ch" }}>
            Kiekvienas vitrinos puslapis, prekė, krepšelis ir apmokėjimas. Šaltinis, įrenginys, trukmė, slinktis,
            sesijos kelias. Atnaujinama kas 20 s.
            {remoteNote ? ` ${remoteNote}.` : ""}
          </p>
          <div className="row" style={{ marginTop: 18 }}>
            {ranges.map((r) => (
              <button key={r.id} className={`chip ${range === r.id ? "on" : ""}`} onClick={() => setRange(r.id)}>
                {r.label}
              </button>
            ))}
          </div>
          <div className="row" style={{ marginTop: 10 }}>
            <button className={`chip ${shop === "visos" ? "on" : ""}`} onClick={() => setShop("visos")}>
              Visos vitrinos
            </button>
            {shops.map((row) => (
              <button key={row.id} className={`chip ${shop === row.id ? "on" : ""}`} onClick={() => setShop(row.id)}>
                {row.wordmark}
              </button>
            ))}
            <button className="chip" onClick={() => setTick((n) => n + 1)}>
              Atnaujinti
            </button>
            <button className="chip" onClick={downloadCsv}>
              CSV
            </button>
          </div>
          <div className="hq-tabs">
            {(
              [
                ["apzvalga", "Apžvalga"],
                ["perziuros", "Peržiūros"],
                ["prekes", "Prekės"],
                ["sesijos", "Sesijos"],
              ] as const
            ).map(([id, label]) => (
              <button key={id} className={tab === id ? "on" : ""} onClick={() => setTab(id)}>
                {label}
              </button>
            ))}
          </div>

          {s.pageviews === 0 && ordersIn.length === 0 ? (
            <div className="notice" style={{ marginTop: 28 }}>
              Dar tuščia. Atidarykite vitriną ir pavaikščiokite — čia atsiras kiekvienas žingsnis.
              <div className="row" style={{ marginTop: 12 }}>
                {shops.map((row) => (
                  <SmartLink key={row.id} className="btn btn-ink" to={shopHref(row.id)}>
                    {row.wordmark}
                  </SmartLink>
                ))}
              </div>
            </div>
          ) : null}

          {tab === "apzvalga" && (
            <>
              <div className="stat-grid">
                <article className="stat-card">
                  <span className="muted">Sesijos</span>
                  <strong>{s.sessions}</strong>
                  <span className="muted">{s.avgPages} psl. / sesija</span>
                </article>
                <article className="stat-card">
                  <span className="muted">Puslapių peržiūros</span>
                  <strong>{s.pageviews}</strong>
                  <span className="muted">{s.productViews} prekių</span>
                </article>
                <article className="stat-card">
                  <span className="muted">Vid. laikas</span>
                  <strong>{s.avgDwellSec}s</strong>
                  <span className="muted">slinktis {s.avgScroll}%</span>
                </article>
                <article className="stat-card">
                  <span className="muted">Atmetimas</span>
                  <strong>{s.bounceRate}%</strong>
                  <span className="muted">vienas puslapis</span>
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
                  <span className="muted">Pajamos</span>
                  <strong>{formatEur(orderRev || s.revenue)}</strong>
                </article>
              </div>

              <h3 style={{ marginTop: 48 }}>Piltuvėlis</h3>
              <Funnel
                steps={[
                  { label: "Peržiūros", n: s.pageviews },
                  { label: "Prekės", n: s.productViews },
                  { label: "Krepšelis", n: s.carts },
                  { label: "Apmokėjimas", n: s.checkouts },
                  { label: "Pirkimas", n: Math.max(s.purchases, ordersIn.length) },
                ]}
              />

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
                  <strong>Kampanijos</strong>
                  <p className="muted">utm_campaign.</p>
                  <Bars rows={s.byCampaign} />
                </div>
              </div>
              <div className="grid-2" style={{ marginTop: 22 }}>
                <div className="copy-block">
                  <strong>Įrenginys</strong>
                  <Bars rows={s.byDevice} />
                </div>
                <div className="copy-block">
                  <strong>Valanda (peržiūros)</strong>
                  <Bars rows={s.byHour.filter((r) => r.n > 0)} />
                </div>
              </div>
              <div className="grid-2" style={{ marginTop: 22 }}>
                <div className="copy-block">
                  <strong>Populiariausi keliai</strong>
                  <Bars rows={s.byPage} />
                </div>
                <div className="copy-block">
                  <strong>Įėjimo puslapiai</strong>
                  <Bars rows={s.byLanding} />
                </div>
              </div>
              <div className="grid-2" style={{ marginTop: 22 }}>
                <div className="copy-block">
                  <strong>Išėjimo puslapiai</strong>
                  <Bars rows={s.byExit} />
                </div>
                <div className="copy-block">
                  <strong>Peržiūros pagal dieną</strong>
                  <Bars rows={s.byDay} />
                </div>
              </div>
            </>
          )}

          {tab === "perziuros" && (
            <>
              <div className="row" style={{ marginTop: 8 }}>
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Ieškoti kelio, prekės, šaltinio…"
                  style={{ minWidth: 240 }}
                />
                {(
                  [
                    ["visi", "Visi"],
                    ["pageview", "Puslapiai"],
                    ["product_view", "Prekės"],
                    ["add_to_cart", "Krepšelis"],
                    ["begin_checkout", "Apmokėjimas"],
                    ["purchase", "Pirkimai"],
                  ] as const
                ).map(([id, label]) => (
                  <button key={id} className={`chip ${kind === id ? "on" : ""}`} onClick={() => setKind(id)}>
                    {label}
                  </button>
                ))}
              </div>
              <p className="muted" style={{ marginTop: 12 }}>
                {filteredViews.length} įrašų šiame filtre.
              </p>
              {filteredViews.length === 0 ? (
                <p className="muted">Nėra įvykių.</p>
              ) : (
                <table className="data tight">
                  <thead>
                    <tr>
                      <th>Kada</th>
                      <th>Vitrina</th>
                      <th>Kas</th>
                      <th>Kelias / prekė</th>
                      <th>Šaltinis</th>
                      <th>Kampanija</th>
                      <th>Ekranas</th>
                      <th>Laikas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredViews.slice(0, 200).map((e) => {
                      const p = e.slug ? getProduct(e.slug) : undefined;
                      return (
                        <tr key={e.id}>
                          <td>{when(e.t)}</td>
                          <td>{shopLabel(e.shop)}</td>
                          <td>{typeLabel(e.type)}</td>
                          <td>
                            <div>{p ? p.name : e.path}</div>
                            <div className="muted">{e.path}</div>
                          </td>
                          <td>
                            {e.source}
                            {e.medium && e.medium !== "none" ? <div className="muted">{e.medium}</div> : null}
                          </td>
                          <td className="muted">{e.campaign || "—"}</td>
                          <td className="muted">
                            {e.device}
                            {e.screen ? <div>{e.screen}</div> : null}
                          </td>
                          <td className="muted">
                            {e.ms ? `${Math.round(e.ms / 100) / 10}s` : "—"}
                            {e.scroll != null ? <div>{e.scroll}%</div> : null}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </>
          )}

          {tab === "prekes" && (
            <>
              <p className="muted">Kiek kartų atidaryta prekė, kiek dėjo į krepšelį, kiek nupirko.</p>
              {productRows.length === 0 ? (
                <p className="muted">Dar nėra prekių peržiūrų.</p>
              ) : (
                <table className="data">
                  <thead>
                    <tr>
                      <th>Prekė</th>
                      <th>Peržiūros</th>
                      <th>Į krepšelį</th>
                      <th>Pirkimai</th>
                      <th>Krepšelis %</th>
                      <th>Vitrina</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productRows.map((row) => {
                      const p = getProduct(row.slug);
                      const shopId = shopOfSlug(row.slug);
                      return (
                        <tr key={row.slug}>
                          <td>
                            <strong>{p?.name || row.slug}</strong>
                            <div className="muted">{row.slug}</div>
                          </td>
                          <td>{row.views}</td>
                          <td>{row.carts}</td>
                          <td>{row.buys}</td>
                          <td>{row.views ? Math.round((row.carts / row.views) * 1000) / 10 : 0}%</td>
                          <td>
                            {shopId ? (
                              <SmartLink to={shopHref(shopId, `/p/${row.slug}`)}>{shopLabel(shopId)}</SmartLink>
                            ) : (
                              "—"
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </>
          )}

          {tab === "sesijos" && (
            <>
              <p className="muted">{sessionRows.length} sesijų. Spauskite eilutę — visą kelią.</p>
              {sessionRows.length === 0 ? (
                <p className="muted">Nėra sesijų.</p>
              ) : (
                <table className="data tight">
                  <thead>
                    <tr>
                      <th>Pradžia</th>
                      <th>Vitrina</th>
                      <th>Įėjimas → išėjimas</th>
                      <th>Psl.</th>
                      <th>Šaltinis</th>
                      <th>Įrenginys</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {sessionRows.slice(0, 80).map((ses) => (
                      <Fragment key={ses.id}>
                        <tr
                          className="session-row"
                          onClick={() => setOpenSession((id) => (id === ses.id ? null : ses.id))}
                        >
                          <td>{when(ses.start)}</td>
                          <td>{shopLabel(ses.shop)}</td>
                          <td>
                            {ses.landing} → {ses.exit}
                          </td>
                          <td>{ses.pages}</td>
                          <td>
                            {ses.source}
                            {ses.campaign ? <div className="muted">{ses.campaign}</div> : null}
                          </td>
                          <td>{ses.device}</td>
                          <td>
                            {ses.converted ? "pirkimas" : ses.bounce ? "atmetė" : ""}
                          </td>
                        </tr>
                        {openSession === ses.id ? (
                          <tr>
                            <td colSpan={7}>
                              <ol className="session-log">
                                {ses.events
                                  .filter((e) => e.type !== "view_end")
                                  .map((e) => (
                                    <li key={e.id}>
                                      {when(e.t)} · {typeLabel(e.type)} · {e.path}
                                      {e.slug && getProduct(e.slug) ? ` · ${getProduct(e.slug)?.name}` : ""}
                                    </li>
                                  ))}
                              </ol>
                            </td>
                          </tr>
                        ) : null}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              )}
            </>
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
