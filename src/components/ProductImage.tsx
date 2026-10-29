import type { Product } from "@/data/catalog";

/**
 * Branded placeholder shown until real product photos are added.
 * If a product has a real `image` (a local /uploads path or absolute URL),
 * it is rendered instead. This avoids mismatched / stock photos.
 */
export default function ProductImage({
  product,
}: {
  product: Pick<Product, "name" | "category" | "subcategory" | "swatch" | "image">;
}) {
  const hasReal = product.image && product.image.length > 0;

  if (hasReal) {
    // Real photo (local upload or URL). Plain <img> keeps config simple.
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src={product.image}
        alt={product.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    );
  }

  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br ${product.swatch} p-4 text-center transition-transform duration-700 group-hover:scale-105`}
    >
      <CategoryIcon category={product.category} />
      <p className="mt-3 font-display text-sm font-semibold text-foreground/90">
        {product.name}
      </p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-foreground/50">
        {product.subcategory}
      </p>
    </div>
  );
}

function CategoryIcon({ category }: { category: Product["category"] }) {
  const common = {
    width: 40,
    height: 40,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "text-foreground/40",
  };

  switch (category) {
    case "Footwear":
      return (
        <svg {...common}>
          <path d="M2 17h20l-1 3H3z" />
          <path d="M2 17v-3l5-1 3-4 2 2 3 1 5 2v3" />
          <path d="M7 13l2 2M10 11l2 2" />
        </svg>
      );
    case "Outerwear":
      return (
        <svg {...common}>
          <path d="M12 3 7 5v16h10V5z" />
          <path d="M7 5 3 7v5l3 1M17 5l4 2v5l-3 1M12 3v18" />
        </svg>
      );
    case "Pants":
      return (
        <svg {...common}>
          <path d="M7 3h10l-1 18h-4l-1-10-1 10H6z" />
          <path d="M7 3h10" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M8 3 3 6l2 3 3-1v12h8V8l3 1 2-3-5-3-2 2h-4z" />
        </svg>
      );
  }
}
