interface CategoryFilterProps {
  categories: string[];
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<
    React.SetStateAction<string[]>
  >;
}

export default function CategoryFilter({
  categories,
  selectedCategories,
  setSelectedCategories,
}: CategoryFilterProps) {
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const isSelected =
          selectedCategories.includes(category);

        return (
          <button
            key={category}
            onClick={() =>
              toggleCategory(category)
            }
            className={`rounded-full px-4 py-2 text-sm font-medium transition cursor-pointer
              ${
                isSelected
                  ? "bg-fuchsia-500 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}