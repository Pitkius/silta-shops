import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../cart";
import { formatEur, getShopProduct, shopProducts } from "../data/products";
import { ProductCard } from "../ProductCard";
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
  const [shot, setShot] = useState(0);

  useEffect(() => {
    setColor(product?.colors?.[0]);
    setSize(product?.sizes?.[0]);
    setQty(1);
    setAdded(false);
    setShot(0);
  }, [slug, product]);

  if (!product) {
    return (
      <section className="section wrap">
        <p>Prekė nerasta.</p>
        <Link to={href("/katalogas")}>Į katalogą</Link>
      </section>
    );
  }

  const related = shopProducts(shop.id).filter((p) => p.slug !== product.slug).slice(0, 6);
  const photos = product.gallery;
  const main = photos[Math.min(shot, photos.length - 1)] || product.image;

  return (
    <>
      <div className="wrap pdp">
        <div className="gallery">
          <div className="stage">
            <img className="main" src={main} alt={product.name} />
          </div>
          {photos.length > 1 && (
            <div className="gallery-thumbs">
              {photos.map((src, i) => (
                <button key={src} className={i === shot ? "on" : ""} onClick={() => setShot(i)} type="button">
                  <span className="shot">
                    <img src={src} alt="" />
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="pdp-info">
          {product.badge && <div className="badge">{product.badge}</div>}
          <h1>{product.name}</h1>
          <p className="muted">{product.short}</p>
          <p className="price" style={{ fontSize: 28, margin: "12px 0" }}>
            {formatEur(product.price)}
            <span className="compare">{formatEur(product.compareAt)}</span>
          </p>
          <div className="pdp-copy">
            {product.description.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
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

          {product.includes && product.includes.length > 0 && (
            <>
              <div className="muted" style={{ marginTop: 18 }}>
                Kas dėžutėje
              </div>
              <ul className="includes">
                {product.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}

          <div className="muted" style={{ marginTop: 8 }}>
            Savybės
          </div>
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
          <div className={`grid-3 ${shop.id === "ramu" ? "air" : ""}`}>
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} to={href(`/p/${p.slug}`)} compact />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
