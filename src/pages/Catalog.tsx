import { formatEur, shopProducts } from "../data/products";
import { useHref, useShop } from "../useShop";
import { Link } from "react-router-dom";

export default function Catalog() {
  const shop = useShop();
  const href = useHref();
  const list = shopProducts(shop.id);
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">{shop.wordmark}</div>
        <h2>Katalogas</h2>
        <p className="muted">{shop.model}</p>
        <div className="grid-3">
          {list.map((p) => (
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
  );
}
