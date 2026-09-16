import { useMemo, useState } from "react";
import { addressBlock, loadOrders, updateOrderStatus, type ShopOrder, type OrderStatus } from "../data/orders";
import { formatEur } from "../data/products";
import { HqChrome } from "../HqChrome";
import { shopHref } from "../sites";
import { getShop } from "../shops";
import { SmartLink } from "../useShop";

export default function Orders() {
  const [tick, setTick] = useState(0);
  const orders = useMemo(() => loadOrders(), [tick]);

  function setStatus(id: string, status: OrderStatus) {
    updateOrderStatus(id, status);
    setTick((n) => n + 1);
  }

  function copy(text: string) {
    navigator.clipboard.writeText(text);
  }

  return (
    <HqChrome>
      <section className="section">
        <div className="wrap">
          <div className="kicker">Užsakymai</div>
          <h2>Užsakymai → tiekėjas</h2>
          <p className="muted">
            Klientas jau apmokėjo vitrinoje. Čia — prekė, tiekėjo nuoroda ir adresas, kurį įrašote siuntimui.
          </p>
          {orders.length === 0 ? (
            <p>
              Eilė tuščia. Eikite į{" "}
              <SmartLink to={shopHref("silta", "/p/sildanti-salike")}>ŠILTA šalikę</SmartLink>, įdėkite į krepšelį ir
              apmokėkite demo — čia atsiras tiekėjo užduotis.
            </p>
          ) : (
            orders.map((o) => <OrderCard key={o.id} order={o} onStatus={setStatus} onCopy={copy} />)
          )}
        </div>
      </section>
    </HqChrome>
  );
}

function OrderCard({
  order,
  onStatus,
  onCopy,
}: {
  order: ShopOrder;
  onStatus: (id: string, s: OrderStatus) => void;
  onCopy: (t: string) => void;
}) {
  const shop = getShop(order.shopId);
  const profit = order.lines.reduce((n, l) => n + (l.sell - l.cogs) * l.qty, 0);
  return (
    <article className="copy-block" style={{ marginTop: 20 }}>
      <div className="badge">
        {shop?.wordmark} · {order.id} · {order.status}
      </div>
      <h3>
        {order.name} · {formatEur(order.total)}
      </h3>
      <p className="muted">
        {order.email} · {order.phone} · {order.city} · {order.ship} · {order.pay}
      </p>
      <p>
        <button className="icon-btn" onClick={() => onCopy(addressBlock(order))}>
          Kopijuoti adresą tiekėjui
        </button>
      </p>
      <table className="data">
        <thead>
          <tr>
            <th>Prekė</th>
            <th>COGS</th>
            <th>Tiekėjas</th>
          </tr>
        </thead>
        <tbody>
          {order.lines.map((l) => (
            <tr key={l.slug + l.size}>
              <td>
                {l.name} × {l.qty}
                <div className="muted">
                  {[l.color, l.size].filter(Boolean).join(" · ")} · parduota {formatEur(l.sell)}
                </div>
              </td>
              <td>~{formatEur(l.cogs * l.qty)}</td>
              <td>
                <a href={l.supplierUrl} target="_blank" rel="noreferrer">
                  {l.supplierName}
                </a>
                <div className="muted">{l.warehouse}</div>
                <div>{l.notes}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Orientacinė prekės marža (be ads): <strong>{formatEur(profit)}</strong>
      </p>
      <div className="row">
        <button className="btn btn-copper" onClick={() => onStatus(order.id, "nupirkta_tiekejui")}>
          Pažymėti: nupirkta tiekėjui
        </button>
        <button className="btn btn-line" onClick={() => onStatus(order.id, "issiusta")}>
          Tiekėjas išsiuntė
        </button>
      </div>
    </article>
  );
}
