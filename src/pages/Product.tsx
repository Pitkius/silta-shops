import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../cart";
import { formatEur, getShopProduct, shopProducts } from "../data/products";
import { useHref, useShop } from "../useShop";

export default function Product() {
  const { slug = "" } = useParams();
  const shop = useShop();
  const href = useHref();
  const product = getShopProduct(shop.id, slug);
  const { add } = useCart();
  const [color, setColor] = useState(product?.colors?.[0]);
  const [size, setSize] = useState(product?.sizes?.[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setColor(product?.colors?.[0]);
    setSize(product?.sizes?.[0]);
    setQty(1);
    setAdded(false);
  }, [slug, product]);

  if (!product) {
    return (
      <section className="section wrap">
        <p>Prekė nerasta.</p>
        <Link to={href("/katalogas")}>Į katalogą</Link>
      </section>
    );
  }

  const related = shopProducts(shop.id).filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <div className="wrap pdp">
        <div className="gallery">
          <img className="main" src={product.gallery[0]} alt={product.name} />
          {product.gallery.slice(1).map((src) => (
            <img key={src} src={src} alt="" />
          ))}
        </div>
        <div>
          {product.badge && <div className="badge">{product.badge}</div>}
          <h1>{product.name}</h1>
          <p className="muted">{product.short}</p>
          <p className="price" style={{ fontSize: 28, margin: "12px 0" }}>
            {formatEur(product.price)}
            <span className="compare">{formatEur(product.compareAt)}</span>
          </p>
          <p>{product.description}</p>
          <p className="muted">{product.story}</p>
          <p>
            <strong>{product.power}</strong>
            <br />
            <span className="muted">
              {product.weight} · {product.shippingDays}
            </span>
          </p>

          {product.colors && (
            <>
              <div className="muted">Spalva</div>
              <div className="swatches">
                {product.colors.map((c) => (
                  <button key={c} className={`chip ${c === color ? "on" : ""}`} onClick={() => setColor(c)}>
                    {c}
                  </button>
                ))}
              </div>
            </>
          )}
          {product.sizes && (
            <>
              <div className="muted">Dydis</div>
              <div className="sizes">
                {product.sizes.map((s) => (
                  <button key={s} className={`chip ${s === size ? "on" : ""}`} onClick={() => setSize(s)}>
                    {s}
                  </button>
                ))}
              </div>
            </>
          )}

          <ul>
            {product.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <div className="buybar">
            <div className="qty">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <button
              className="btn btn-copper"
              onClick={() => {
                add({ slug: product.slug, qty, color, size });
                setAdded(true);
              }}
            >
              {added ? "Krepšelyje" : "Į krepšelį"}
            </button>
            <Link className="btn btn-line" to={href("/krepselis")}>
              Apmokėti
            </Link>
          </div>
          <p className="muted" style={{ marginTop: 12 }}>
            {product.shippingDays}. Nemokamas paštomatas nuo 39 €. Grąžinimas 14 dienų.
          </p>
        </div>
      </div>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap faq">
          <h2>Klausimai</h2>
          {product.faq.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>Kartu ima ir tai</h2>
          <div className="grid-3">
            {related.map((p) => (
              <Link to={href(`/p/${p.slug}`)} className="card" key={p.slug}>
                <img src={p.image} alt={p.name} />
                <div className="card-body">
                  <strong>{p.name}</strong>
                  <div className="price">{formatEur(p.price)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
