import { Link } from "react-router-dom";
import { useCart } from "../cart";
import { bundles, formatEur, getProduct } from "../data/products";
import { Shot } from "../ProductCard";
import { useHref, useShop } from "../useShop";

export default function Gifts() {
  const shop = useShop();
  const href = useHref();
  const { add } = useCart();
  const list = bundles.filter((b) => b.shopId === shop.id);
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Dovanos</div>
        <h2>Rinkiniai virš nemokamo paštomato.</h2>
        <p className="muted">Rinkiniai šiai parduotuvei. Nemokamas paštomatas nuo 39 €.</p>
        <div className="grid-3">
          {list.map((b) => (
            <div className="card" key={b.slug}>
              <Shot src={getProduct(b.items[0])?.image || ""} alt="" />
              <div className="card-body">
                <strong>{b.name}</strong>
                <span className="muted">{b.blurb}</span>
                <div className="price">
                  {formatEur(b.price)}
                  <span className="compare">{formatEur(b.compareAt)}</span>
                </div>
                <button
                  className="btn btn-ink"
                  onClick={() => {
                    b.items.forEach((slug) => add({ slug, qty: 1 }));
                  }}
                >
                  Į krepšelį
                </button>
              </div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 28 }}>
          <Link to={href("/katalogas")}>Visas {shop.wordmark} katalogas</Link>
        </p>
      </div>
    </section>
  );
}
