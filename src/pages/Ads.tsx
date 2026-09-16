import { ads, captionsByShop, targetingNotes } from "../data/ads";
import { formatEur, getProduct, shopProducts } from "../data/products";
import { useHref, useShop } from "../useShop";

export default function Ads() {
  const shop = useShop();
  const href = useHref();
  const copy = captionsByShop[shop.id];
  const slugs = new Set(shopProducts(shop.id).map((p) => p.slug));
  const list = ads.filter((a) => slugs.has(a.productSlug));
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Paruošta postinti</div>
        <h2>{shop.wordmark}: tekstai reklamoms</h2>
        <p className="muted">Ads vedate į /{shop.id}/p/... — tik šios parduotuvės prekes.</p>
        <div className="notice">
          <strong>Paleidimas:</strong> Meta Advantage+ Sales, tik LT, 25–40 €/d. TikTok Ads (ne Shop) 15–20 €/d.
          Pixel + CAPI. Nužudyti, jei CTR &lt; 0,8 % po 50 €. TikTok Shop Lietuvoje neveikia.
        </div>
        <pre style={{ whiteSpace: "pre-wrap", background: "white", padding: 16, border: "1px solid var(--line)" }}>
          {targetingNotes}
        </pre>

        {list.map((ad) => {
          const p = getProduct(ad.productSlug);
          return (
            <article key={ad.id} className="ad-grid">
              <div className="ad-visual" style={{ aspectRatio: ad.ratio === "9:16" ? "9/16" : "1/1" }}>
                <img src={ad.image} alt="" />
                <div className="ad-overlay">{ad.hook}</div>
              </div>
              <div className="copy-block">
                <div className="badge">
                  {ad.channel} · {ad.ratio} · {p ? formatEur(p.price) : ""}
                </div>
                <h3 style={{ margin: "8px 0 12px" }}>{ad.headline}</h3>
                <p>
                  <strong>Hook (pirmos 3 sek.)</strong>
                </p>
                <pre>{ad.hook}</pre>
                <p>
                  <strong>Primary text</strong>
                </p>
                <pre>{ad.primary}</pre>
                <p>
                  <strong>Headline / description / CTA</strong>
                </p>
                <pre>
                  {ad.headline}
                  {"\n"}
                  {ad.description}
                  {"\n"}
                  {ad.cta}
                </pre>
                <p>
                  <strong>Filmavimo scenarijus</strong>
                </p>
                <ul>
                  {ad.script.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                {p && (
                  <p>
                    Landing: <a href={href(`/p/${p.slug}`)}>{href(`/p/${p.slug}`)}</a> — ne katalogas.
                  </p>
                )}
              </div>
            </article>
          );
        })}

        <h3 style={{ marginTop: 48 }}>Organika</h3>
        <div className="grid-2">
          <div className="copy-block">
            <strong>Instagram caption</strong>
            {copy.ig.map((c) => (
              <pre key={c}>{c}</pre>
            ))}
          </div>
          <div className="copy-block">
            <strong>Facebook įrašas</strong>
            {copy.fb_organic.map((c) => (
              <pre key={c}>{c}</pre>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
