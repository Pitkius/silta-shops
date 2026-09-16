import { shopProducts, formatEur } from "../data/products";
import { loadEvents } from "../data/analytics";
import { loadOrders } from "../data/orders";
import { HqChrome } from "../HqChrome";
import { HQ_DOMAIN, shopHref, usesPathShops } from "../sites";
import { shops } from "../shops";
import { SmartLink } from "../useShop";

export default function Hub() {
  const events = loadEvents();
  const orders = loadOrders();
  const views = events.filter((e) => e.type === "pageview" && e.shop !== "hq").length;
  const revenue = orders.reduce((n, o) => n + o.total, 0);

  return (
    <HqChrome>
      <section className="section">
        <div className="wrap">
          <div className="kicker">Pagrindinis · HQ</div>
          <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", maxWidth: "16ch" }}>
            Trys vitrinos. Vienas pultas.
          </h1>
          <p className="muted" style={{ maxWidth: "62ch", fontSize: 18, marginTop: 16 }}>
            Reklamas vedate į parduotuvės domeną — ne čia. Čia nuorodos, užsakymai ir analitika.
          </p>
          <div className="stat-grid" style={{ marginTop: 36 }}>
            <article className="stat-card">
              <span className="muted">Vitrinos</span>
              <strong>3</strong>
            </article>
            <article className="stat-card">
              <span className="muted">Peržiūros</span>
              <strong>{views}</strong>
            </article>
            <article className="stat-card">
              <span className="muted">Užsakymai</span>
              <strong>{orders.length}</strong>
            </article>
            <article className="stat-card">
              <span className="muted">Suma</span>
              <strong>{formatEur(revenue)}</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="kicker">Nuorodos</div>
          <h2>Atidaryti parduotuves</h2>
          <div className="grid-3">
            {shops.map((s) => {
              const n = shopProducts(s.id).length;
              return (
                <SmartLink to={shopHref(s.id)} className="card" key={s.id}>
                  <img src={s.heroImage} alt="" style={{ height: 180, objectFit: "cover" }} />
                  <div className="card-body">
                    <span className="badge">{s.domain}</span>
                    <strong>{s.wordmark}</strong>
                    <span className="muted">{s.tagline}</span>
                    <span className="muted">{n} prekės · {usesPathShops() ? `/${s.id}` : s.domain}</span>
                    <span className="badge">Atidaryti →</span>
                  </div>
                </SmartLink>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section night-band">
        <div className="wrap">
          <h2>Kelimas: skirtingi domenai</h2>
          <p className="muted" style={{ maxWidth: "62ch", marginTop: 12 }}>
            Tas pats kodas. Domenas pasako, kuri vitrina. HQ lieka pagrindiniame adrese — klientai ten neina.
          </p>
          <div className="grid-4" style={{ marginTop: 28 }}>
            <div>
              <strong>{HQ_DOMAIN}</strong>
              <p className="muted">HQ. Analitika, užsakymai, nuorodos. Keičiate per VITE_HQ_DOMAIN.</p>
            </div>
            {shops.map((s) => (
              <div key={s.id}>
                <strong>{s.domain}</strong>
                <p className="muted">
                  {s.wordmark} vitrina be /{s.id} kelio. Dabar lokaliai: /{s.id}
                </p>
              </div>
            ))}
          </div>
          <ol className="muted" style={{ maxWidth: "62ch", marginTop: 28 }}>
            <li>Nuperkate silta.lt, ramu.lt, ziburys.lt ir HQ domeną.</li>
            <li>Visi keturi DNS A/CNAME į tą patį hostingą (Netlify / Cloudflare / Vercel).</li>
            <li>Meta ir TikTok ads → https://silta.lt/p/... — ne į HQ.</li>
          </ol>
          <p style={{ marginTop: 28 }} className="row">
            <SmartLink className="btn btn-copper" to="/analitika">
              Analitika
            </SmartLink>
            <SmartLink className="btn btn-ghost" to="/uzsakymai">
              Užsakymai
            </SmartLink>
          </p>
        </div>
      </section>
    </HqChrome>
  );
}
