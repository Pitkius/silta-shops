import { Link } from "react-router-dom";
import { formatEur, shopProducts } from "../data/products";
import { ProductCard, Shot } from "../ProductCard";
import { useHref, useShop } from "../useShop";

const ribbons = {
  silta: ["Kaklas", "Rankos", "Kojos", "Liemuo", "Kelias", "Stotelė", "Šaltis", "Šiluma"],
  ziburys: ["Šviesa", "LED", "Eglė", "Langas", "Auksas", "Snaigė", "Vakaras", "Žiburys"],
  ramu: ["Tvarka", "Oras", "Vieta", "Ramybė", "Lentyna", "Stalas", "Tyla", "Namai"],
};

export default function Home() {
  const shop = useShop();
  const href = useHref();
  const featured = shopProducts(shop.id);
  const lead = featured[0];
  const rest = featured.slice(1);
  const ribbon = [...ribbons[shop.id], ...ribbons[shop.id]];

  return (
    <>
      {shop.id === "ramu" ? (
        <section className="hero hero-split">
          <div className="wrap hero-split-inner">
            <div className="hero-copy">
              <div className="kicker">{shop.kicker}</div>
              <h1>{shop.heroTitle}</h1>
              <p className="lead">{shop.heroLead}</p>
              <div className="row">
                <Link className="btn btn-copper" to={href(shop.heroCta.to)}>
                  {shop.heroCta.label}
                </Link>
                <Link className="btn btn-ghost" to={href("/katalogas")}>
                  Visas katalogas
                </Link>
              </div>
            </div>
            {lead && <Shot src={lead.image} alt={lead.name} className="hero-product" />}
          </div>
        </section>
      ) : (
        <section className="hero" style={{ backgroundImage: `url(${shop.heroImage})` }}>
          <div className="wrap hero-inner">
            <div className="kicker">{shop.kicker}</div>
            <h1>{shop.heroTitle}</h1>
            <p className="lead">{shop.heroLead}</p>
            <div className="row">
              <Link className="btn btn-copper" to={href(shop.heroCta.to)}>
                {shop.heroCta.label}
              </Link>
              <Link className="btn btn-ghost" to={href("/katalogas")}>
                Visas katalogas
              </Link>
            </div>
          </div>
        </section>
      )}

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {ribbon.map((word, i) => (
            <span key={`${word}-${i}`}>{word}</span>
          ))}
        </div>
      </div>

      <div className="trust">
        <div>
          <strong>Paštomatas</strong>
          LP Express ir Omniva nuo 39 € nemokamai
        </div>
        <div>
          <strong>14 dienų</strong>
          Grąžinimas. Kalėdoms — iki sausio 15
        </div>
        <div>
          <strong>Lietuviškai</strong>
          Klausimai Messenger ir +370
        </div>
        <div>
          <strong>Banku</strong>
          Swedbank, SEB, Luminor, Apple Pay
        </div>
      </div>

      {lead && shop.id === "silta" && (
        <section className="section feature-band">
          <div className="wrap feature-lead">
            <Shot src={lead.image} alt={lead.name} />
            <div>
              <div className="kicker">{lead.badge || "Hero"}</div>
              <h2>{lead.name}</h2>
              <p className="muted">{lead.short}</p>
              <p className="price" style={{ fontSize: 28, margin: "16px 0 22px" }}>
                {formatEur(lead.price)}
                <span className="compare">{formatEur(lead.compareAt)}</span>
              </p>
              <Link className="btn btn-copper" to={href(`/p/${lead.slug}`)}>
                Žiūrėti prekę
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="wrap">
          <div className="kicker">{shop.wordmark}</div>
          <h2>{shop.id === "ziburys" ? "Šviesa, kurią matote." : shop.id === "ramu" ? "Daiktai savo vietose." : "Šiluma, kuri keliauja."}</h2>
          <p className="muted">{shop.model}</p>
          <div className={`grid-3 ${shop.id === "ziburys" ? "mosaic" : ""} ${shop.id === "ramu" ? "air" : ""}`}>
            {(shop.id === "silta" ? rest : featured).map((p) => (
              <ProductCard key={p.slug} product={p} to={href(`/p/${p.slug}`)} />
            ))}
          </div>
        </div>
      </section>

      <section className="section night-band story-band">
        <div className="wrap split">
          <div>
            <div className="kicker">Kodėl atskirai</div>
            <h2>{shop.storyTitle}</h2>
            <p className="muted">{shop.storyBody}</p>
            {lead && (
              <p>
                <Link className="btn btn-copper" to={href(`/p/${lead.slug}`)}>
                  {lead.name}
                </Link>
              </p>
            )}
          </div>
          {lead && <Shot src={lead.image} alt="" className="story-shot" />}
        </div>
      </section>
    </>
  );
}
