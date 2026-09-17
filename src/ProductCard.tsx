import { Link } from "react-router-dom";
import { formatEur, type Product } from "./data/products";

export function Shot({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`shot ${className}`.trim()}>
      <img src={src} alt={alt} />
    </div>
  );
}

export function ProductCard({
  product,
  to,
  compact = false,
}: {
  product: Product;
  to: string;
  compact?: boolean;
}) {
  return (
    <Link to={to} className="card">
      <Shot src={product.image} alt={product.name} />
      <div className="card-body">
        {product.badge && <span className="badge">{product.badge}</span>}
        <strong>{product.name}</strong>
        {!compact && <span className="muted">{product.short}</span>}
        <div className="price">
          {formatEur(product.price)}
          {!compact && <span className="compare">{formatEur(product.compareAt)}</span>}
        </div>
      </div>
    </Link>
  );
}
