"use client";

import { useEffect, useState } from "react";
import { getProducts } from "@/services/products";
import { Product } from "@/types/product";
import LoadingSpinner from "@/components/LoadingSpinner";
export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Fake Store
      </h1>

      <p>Total Products: {products.length}</p>
    </main>
  );
}