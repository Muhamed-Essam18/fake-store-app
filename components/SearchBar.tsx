
import { Search } from "lucide-react";

interface SearchBarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({
  search,
  setSearch,
}: SearchBarProps) {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
        <Search className="h-5 w-5 text-[#777777]" />
      </div>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="block w-full rounded-xl border border-[#2a2a2a]/20 bg-white py-3 pl-11 pr-3 text-[#111111] outline-none transition placeholder:text-[#777777] focus:border-[#f2cf1d]/80 focus:ring-2 focus:ring-[#f2cf1d]/30"
      />
    </div>
  );
}