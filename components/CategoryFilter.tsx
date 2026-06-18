import { SlidersHorizontal } from "lucide-react";

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
    <div className="flex flex-wrap items-center justify-center gap-3">
      <span className="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a]/20 bg-white px-3 py-2 text-sm font-medium text-[#111111]">
        <SlidersHorizontal className="h-4 w-4 text-[#c49d08]" />
        Filters
      </span>
      {categories.map((category) => {
        const isSelected =
          selectedCategories.includes(category);

        return (
          <button
            key={category}
            onClick={() =>
              toggleCategory(category)
            }
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer
              ${
                isSelected
                  ? "bg-[#e6be00] text-[#111111] hover:bg-[#f2cf1d]"
                  : "bg-[#1f1f1f] text-[#f3f3f3] hover:bg-[#f2cf1d] hover:text-[#111111]"
              }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}