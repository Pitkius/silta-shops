import { Link } from "react-router-dom";
import { useHref } from "../useShop";

export default function Shipping() {
  const href = useHref();
  return (
    <section className="section wrap">
      <h2>Pristatymas</h2>
      <p>
        Numatytasis būdas — LP Express ir Omniva paštomatai. Nuo 39 € nemokamai, žemiau 2,90 €. Kurjeris 4,90 €.
      </p>
      <p>Išsiunčiame po apmokėjimo. Terminas nurodytas prie kiekvienos prekės.</p>
      <p>
        <Link to={href("/")}>Grįžti</Link>
      </p>
    </section>
  );
}
