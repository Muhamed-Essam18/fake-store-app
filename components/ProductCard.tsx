import { Product } from "@/types/product";
import { BadgeDollarSign, Tag } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-[#2a2a2a]/20 bg-white p-5 transition duration-500 hover:border-[#f2cf1d]/80">
      <div className="flex min-h-[12rem] items-center justify-center rounded-3xl bg-[#efefef] p-5 transition duration-500 group-hover:bg-[#f7f7f7]">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-5 space-y-3">
        <h2 className="h-12 text-base font-semibold leading-6 text-[#111111] line-clamp-2">
          {product.title}
        </h2>

        <div className="flex items-center gap-2 text-2xl font-bold text-[#c49d08]">
          <BadgeDollarSign className="h-5 w-5" />
          <p>${product.price}</p>
        </div>

        <div className="flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-[#666666]">
          <Tag className="h-4 w-4" />
          <p>{product.category}</p>
        </div>
      </div>
    </article>
  );
}