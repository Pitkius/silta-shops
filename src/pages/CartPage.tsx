import { Link } from "react-router-dom";
import { useCart } from "../cart";
import { COURIER_FEE, FREE_SHIP, LOCKER_FEE, formatEur, getProduct } from "../data/products";
import { useHref } from "../useShop";

export default function CartPage() {
  const href = useHref();
  const { items, setQty, remove, subtotal } = useCart();
  const locker = subtotal >= FREE_SHIP ? 0 : LOCKER_FEE;

  return (
    <section className="section">
      <div className="wrap">
        <div className="kicker">Krepšelis</div>
        <h2>Jūsų užsakymas.</h2>
        {items.length === 0 ? (
          <p>
            Tuščia. <Link to={href("/katalogas")}>Į katalogą</Link>
          </p>
        ) : (
          <div className="checkout">
            <table className="cart-table">
              <tbody>
                {items.map((i) => {
                  const p = getProduct(i.slug);
                  if (!p) return null;
                  return (
                    <tr key={i.slug + i.color + i.size}>
                      <td>
                        <img src={p.image} alt="" />
                      </td>
                      <td>
                        <strong>{p.name}</strong>
                        <div className="muted">{[i.color, i.size].filter(Boolean).join(" · ")}</div>
                        <button className="icon-btn" onClick={() => remove(i.slug, i.color, i.size)}>
                          Pašalinti
                        </button>
                      </td>
                      <td>
                        <div className="qty">
                          <button onClick={() => setQty(i.slug, i.qty - 1, i.color, i.size)}>−</button>
                          <span>{i.qty}</span>
                          <button onClick={() => setQty(i.slug, i.qty + 1, i.color, i.size)}>+</button>
                        </div>
                      </td>
                      <td>{formatEur(p.price * i.qty)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <aside className="summary">
              <h3>Suma</h3>
              <p>
                Prekės {formatEur(subtotal)}
                <br />
                Paštomatas {locker === 0 ? "nemokamai" : formatEur(locker)}
                <br />
                <span className="muted">Kurjeris būtų {formatEur(COURIER_FEE)}</span>
              </p>
              <p className="price" style={{ fontSize: 24 }}>
                {formatEur(subtotal + locker)}
              </p>
              <Link className="btn btn-copper" to={href("/apmokejimas")}>
                Eiti apmokėti
              </Link>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
