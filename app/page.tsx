"use client";
import useProducts from "@/hooks/useProducts";
import LoadingSpinner from "@/components/LoadingSpinner";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <p className="mx-auto mt-16 max-w-xl rounded-3xl border border-red-500/20 bg-red-500/10 p-6 text-center text-red-100 shadow-lg shadow-red-500/10">
        {error}
      </p>
    );
  }

  return (
    <main className="relative overflow-hidden px-4 py-16 sm:py-20 lg:py-24">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12">
        <section className="text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-fuchsia-200 shadow-sm shadow-fuchsia-500/10 backdrop-blur-sm">
            Modern UI theme inspired landing
          </span>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
            Shop smarter with an elegant fake storefront.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Smooth glassmorphism cards, ambient gradient accents, and subtle motion create a premium landing experience — fully styled with inline Tailwind classes.
          </p>

          <div className="mx-auto mt-10 grid max-w-md grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-700/80 bg-slate-900/75 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-fuchsia-400/30">
              <p className="text-4xl font-black text-white">{products.length}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-400">Available products</p>
            </div>
            <div className="rounded-[2rem] border border-slate-700/80 bg-slate-900/75 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-fuchsia-400/30">
              <p className="text-4xl font-black text-white">Fast</p>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-slate-400">Responsive grid</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </div>
    </main>
  );
}