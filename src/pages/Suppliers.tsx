import { Link } from "react-router-dom";
import { formatEur, margin, shopProducts } from "../data/products";
import { useHref, useShop } from "../useShop";

export default function Suppliers() {
  const shop = useShop();
  const href = useHref();
  const rows = [...shopProducts(shop.id)].sort((a, b) => a.adPriority - b.adPriority);
  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Tiekėjai · {shop.wordmark}</div>
        <h2>Iš kur imti prekes</h2>
        <p className="muted">{shop.model} Po užsakymo atidarote nuorodą ir siunčiate klientui.</p>
        <table className="data">
          <thead>
            <tr>
              <th>Prekė</th>
              <th>Kaina</th>
              <th>Savikaina</th>
              <th>Marža</th>
              <th>Tiekėjas</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => (
              <tr key={p.slug}>
                <td>
                  <Link to={href(`/p/${p.slug}`)}>
                    <strong>{p.name}</strong>
                  </Link>
                  <div className="muted">{p.shippingDays}</div>
                </td>
                <td>{formatEur(p.price)}</td>
                <td>~{formatEur(p.cogs)}</td>
                <td>
                  <strong>{margin(p)}%</strong>
                </td>
                <td>
                  {p.suppliers.map((s) => (
                    <div key={s.url} style={{ marginBottom: 8 }}>
                      <a href={s.url} target="_blank" rel="noreferrer">
                        {s.name}
                      </a>
                      <div className="muted">
                        {s.unit} · {s.warehouse}
                      </div>
                      <div>{s.notes}</div>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>
          <Link to="/uzsakymai">Užsakymai</Link>
        </p>
      </div>
    </section>
  );
}
