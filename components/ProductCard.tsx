import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-lg transition duration-300 scale-100 hover:scale-105">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain"
      />

      <h2 className="mt-4 font-semibold line-clamp-2">
        {product.title}
      </h2>

      <p className="mt-2 text-lg font-bold">
        ${product.price}
      </p>

      <p className="mt-1 text-sm text-gray-500">
        {product.category}
      </p>
    </div>
  );
}