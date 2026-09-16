import { Link } from "react-router-dom";
import { formatEur, shopProducts } from "../data/products";
import { useHref, useShop } from "../useShop";

export default function Home() {
  const shop = useShop();
  const href = useHref();
  const featured = shopProducts(shop.id);
  const hero = featured[0];
  return (
    <>
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

      <section className="section">
        <div className="wrap">
          <div className="kicker">{shop.wordmark}</div>
          <h2>Šios parduotuvės daiktai.</h2>
          <p className="muted">{shop.model}</p>
          <div className="grid-3">
            {featured.map((p) => (
              <Link to={href(`/p/${p.slug}`)} className="card" key={p.slug}>
                <img src={p.image} alt={p.name} />
                <div className="card-body">
                  {p.badge && <span className="badge">{p.badge}</span>}
                  <strong>{p.name}</strong>
                  <span className="muted">{p.short}</span>
                  <div className="price">
                    {formatEur(p.price)}
                    <span className="compare">{formatEur(p.compareAt)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section night-band">
        <div className="wrap split">
          <div>
            <div className="kicker">Kodėl atskirai</div>
            <h2>{shop.storyTitle}</h2>
            <p className="muted">{shop.storyBody}</p>
            {hero && (
              <p>
                <Link className="btn btn-copper" to={href(`/p/${hero.slug}`)}>
                  {hero.name}
                </Link>
              </p>
            )}
          </div>
          <img src={featured[0]?.image || shop.heroImage} alt="" />
        </div>
      </section>
    </>
  );
}
