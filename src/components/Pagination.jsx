import { NavLink } from "react-router-dom";

export default function Pagination({ page, pageCount, onPageChange }) {
  if (pageCount <= 1) return null;

  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <>
      <div className="flex justify-center items-center gap-2 mt-12">
        <button
          onClick={() => onPageChange(Math.max(1, page - 1))}
          className={
            page === 1
              ? "p-3 rounded-xl border transition-all duration-300 bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
              : "p-3 rounded-xl border transition-all duration-300 bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
          }
          disabled={page === 1}
        >
          <svg
            className="w-5 h-5 rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        <div className="flex items-center gap-1">
          {pages.map((p) => (
            <NavLink
              key={p}
              onClick={() => onPageChange(p)}
              className={
                page === p
                  ? "min-w-[44px] flex items-center justify-center h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                  : "min-w-[44px] flex items-center justify-center h-11 rounded-xl text-sm font-medium transition-all duration-300 bg-[#161616] text-neutral-400 border border-[#262626] hover:border-orange-500/50 hover:text-white"
              }
            >
              {p}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => onPageChange(Math.min(pageCount, page + 1))}
          className={
            page === pageCount
              ? "p-3 rounded-xl border transition-all duration-300 bg-[#0a0a0a] border-[#262626] text-neutral-600 cursor-not-allowed"
              : "p-3 rounded-xl border transition-all duration-300 bg-[#161616] border-[#262626] text-white hover:border-orange-500/50 hover:bg-[#1a1a1a]"
          }
          disabled={page === pageCount}
        >
          <svg
            className="w-5 h-5 rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>

      <p className="text-center text-neutral-500 mt-4 text-sm">
        الصفحة {page} من {pageCount}{" "}
      </p>
    </>
  );
}
