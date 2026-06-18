"use client";

import useProducts from "@/hooks/useProducts";
import LoadingSpinner from "@/components/LoadingSpinner";
import ProductCard from "@/components/ProductCard";
import {useMemo, useState} from "react";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import {
  Boxes,
  SearchCheck,
  SearchX,
  Sparkles,
} from "lucide-react";


export default function Home() {

  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  
  const filteredProducts = useMemo(() => {
  return products.filter((product) => {
    const matchesSearch =
      product.title
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(
        product.category
      );

    return matchesSearch && matchesCategory;
  });
}, [
  products,
  search,
  selectedCategories,
]);

const categories = useMemo(() => {
  return [
    ...new Set(
      products.map((product) => product.category)
    ),
  ];
}, [products]);

if (loading) {
    return <LoadingSpinner />;
  }
  if (error) {
    return (
      <p className="mx-auto mt-16 max-w-xl rounded-3xl border border-red-400/40 bg-white p-6 text-center text-red-700">
        {error}
      </p>
    );
  }


  return (
    <main className="relative overflow-hidden px-4 py-16 sm:py-20 lg:py-24">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12">
        <section className="rounded-[2rem] shadow-2xl shadow-black/50 border border-[#2a2a2a] bg-gradient-to-b from-[#101010] to-[#242424] px-6 py-10 text-center sm:px-10">
          <span className="inline-flex items-center justify-center rounded-full border border-[#f2cf1d]/60 bg-[#f2cf1d] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#1b1b1b]">
            <Sparkles className="mr-2 h-4 w-4" />
            Discover premium products
          </span>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
            Shop quality products with a faster, cleaner experience.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#d2d2d2] sm:text-lg">
            Browse, search, and filter products instantly with a modern interface designed for clarity, speed, and responsiveness.
          </p>

          <div className="mx-auto mt-10 grid max-w-md grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-[#f2cf1d]/40 bg-[#f2cf1d] p-6 transition duration-500 hover:border-[#f2cf1d]/80">
              <div className="flex items-center justify-center gap-2">
                <Boxes className="h-7 w-7 text-[#111111]" />
                <p className="text-4xl font-black text-[#111111]">{products.length}</p>
              </div>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[#5b5b5b]">Total products</p>
            </div>
            <div className="rounded-[2rem] border border-[#f2cf1d]/40 bg-[#f2cf1d] p-6 transition duration-500 hover:border-[#f2cf1d]/80">
              <div className="flex items-center justify-center gap-2">
                <SearchCheck className="h-6 w-6 text-[#111111]" />
                <p className="text-4xl font-black text-[#111111]">Live</p>
              </div>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[#5b5b5b]">Search and filters</p>
            </div>
          </div>
        </section>
      <SearchBar
          search={search}
          setSearch={setSearch}
        />
        <CategoryFilter
          categories={categories}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
/>
        {filteredProducts.length === 0 ? (
          <div className="col-span-full rounded-3xl border border-[#2a2a2a]/20 bg-white p-12 text-center">
      <SearchX className="mx-auto mb-3 h-8 w-8 text-[#c49d08]" />
      <h2 className="text-2xl font-bold text-[#111111]">
        No matching products
      </h2>

      <p className="mt-3 text-[#666666]">
        Try another keyword or change your selected categories.
      </p>
    </div>
        ) : (
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}