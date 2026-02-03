import { useState } from "react";

export default function Controls({
  query,
  onQueryChange,
  category,
  categories,
  onCategoryChange,
  filter,
}) {
  const [active, setActive] = useState(filter);

  return (
    <div className="sticky top-20 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-80">
            <input
              placeholder="ابحث في المقالات..."
              className="input-dark w-full px-5 py-3 pr-12"
              type="text"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                value={category}
                key={c}
                className={
                  active === c
                    ? "px-4 py-2 cursor-pointer rounded-xl text-sm font-medium transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                    : "px-4 py-2 cursor-pointer rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/30"
                }
                onClick={() => {
                  setActive(c);
                  onCategoryChange(c);
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
