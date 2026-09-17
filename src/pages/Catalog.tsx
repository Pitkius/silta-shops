import { shopProducts } from "../data/products";
import { ProductCard } from "../ProductCard";
import { useHref, useShop } from "../useShop";

export default function Catalog() {
  const shop = useShop();
  const href = useHref();
  const list = shopProducts(shop.id);
  return (
    <section className="section catalog-page">
      <div className="wrap">
        <div className="catalog-head">
          <div className="kicker">{shop.wordmark}</div>
          <h2>Katalogas</h2>
          <p className="muted">{shop.model}</p>
        </div>
        <div className={`grid-3 ${shop.id === "ziburys" ? "mosaic" : ""} ${shop.id === "ramu" ? "air" : ""}`}>
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} to={href(`/p/${p.slug}`)} />
          ))}
        </div>
      </div>
    </section>
  );
}
