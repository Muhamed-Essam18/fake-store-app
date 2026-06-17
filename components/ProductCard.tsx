import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-slate-700/80 bg-slate-950/80 p-5 shadow-2xl shadow-slate-950/40 transition duration-500 hover:-translate-y-1 hover:border-fuchsia-400/30 hover:bg-slate-900/95">
      <div className="flex min-h-[12rem] items-center justify-center rounded-3xl bg-slate-900/60 p-5 transition duration-500 group-hover:bg-fuchsia-500/10">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-5 space-y-3">
        <h2 className="text-base font-semibold leading-6 text-slate-100 line-clamp-2">
          {product.title}
        </h2>

        <p className="text-2xl font-bold text-fuchsia-300">
          ${product.price}
        </p>

        <p className="text-sm uppercase tracking-[0.18em] text-slate-500">
          {product.category}
        </p>
      </div>
    </article>
  );
}