import { Link, NavLink, useOutletContext } from "react-router-dom";
import { getCategories, getAllPosts } from "../services/service.js";
import { useMemo, useState } from "react";
import Pagination from "../components/Pagination.jsx";
import Controls from "../components/Controls.jsx";

const POSTS_PER_PAGE = 6;

const BlogPage = () => {
  const { filter } = useOutletContext();
  const [view, setView] = useState("عرض شبكي");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(filter);
  const [page, setPage] = useState(1);
  const categories = getCategories();
  const posts = useMemo(() => {
    return getAllPosts();
  });

  const activeDisplayStyle =
    "p-2 rounded-lg cursor-pointer transition-all duration-300 bg-orange-500 text-white";
  const inactiveDisplayStyle =
    "p-2 rounded-lg cursor-pointer transition-all duration-300 text-neutral-400 hover:text-white";

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return posts.filter((p) => {
      const categoryOk =
        category === "جميع المقالات" ? true : p.category === category;

      const haystack = `${p.title ?? ""} ${p.description ?? ""}`.toLowerCase();
      const queryOk = q ? haystack.includes(q) : true;

      return categoryOk && queryOk;
    });
  }, [posts, query, category]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));

  const pagedPosts = useMemo(() => {
    const safePage = Math.min(Math.max(page, 1), pageCount);
    const start = (safePage - 1) * POSTS_PER_PAGE;
    return filtered?.slice(start, start + POSTS_PER_PAGE);
  }, [filtered, page, pageCount]);

  function onChangeQuery(v) {
    setQuery(v);
    setPage(1);
  }
  function onChangeCategory(v) {
    setCategory(v);
    setPage(1);
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] pb-12">
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-label inline-flex items-center gap-2 mb-6">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              ></path>
            </svg>
            مدونتنا
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            استكشف <span className="gradient-text">مقالاتنا</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </div>

      <Controls
        query={query}
        onQueryChange={onChangeQuery}
        category={category}
        categories={categories}
        onCategoryChange={onChangeCategory}
        filter={filter}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-[146px]">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-neutral-400">
            عرض <span className="font-bold text-white">{filtered.length}</span>{" "}
            مقالات
          </p>
          <div className="flex items-center gap-2">
            <div className="flex items-center bg-[#161616] border border-[#262626] rounded-xl p-1">
              <button
                className={
                  view === "عرض شبكي"
                    ? activeDisplayStyle
                    : inactiveDisplayStyle
                }
                title="عرض شبكي"
                onClick={() => setView("عرض شبكي")}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  ></path>
                </svg>
              </button>
              <button
                className={
                  view === "عرض قائمة"
                    ? activeDisplayStyle
                    : inactiveDisplayStyle
                }
                title="عرض قائمة"
                onClick={() => setView("عرض قائمة")}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {view === "عرض شبكي" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pagedPosts.map((post) => (
              <article
                key={post.id}
                className="group card overflow-hidden"
                style={{ animationDelay: "0ms" }}
              >
                <Link to={`/blog/${post.id}`} className="block">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-neutral-500 mb-3">
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>{" "}
                        </svg>
                        {post.readTime}
                      </span>
                      <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                      <div className="flex items-center gap-3">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                        />
                        <div>
                          <p className="text-sm font-medium text-white">
                            {post.author.name}
                          </p>
                          <p className="text-xs text-neutral-500">
                            {post.author.role}
                          </p>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300 border border-orange-500/20 group-hover:border-transparent">
                        <svg
                          className="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300 rotate-180"
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
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {pagedPosts.map((post) => (
              <article
                key={post.id}
                style={{ animationDelay: "0ms" }}
                className="group bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-500 overflow-hidden"
              >
                <Link
                  to={`/blog/${post.id}`}
                  className="flex flex-col md:flex-row"
                >
                  <div className="relative w-full md:w-72 lg:w-80 h-52 md:h-auto flex-shrink-0 overflow-hidden">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={post.image}
                      alt={post.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-[#161616]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-1 p-6 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-xs font-semibold rounded-full border border-orange-500/20">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-neutral-500">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>{" "}
                        </svg>
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-neutral-500">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          ></path>{" "}
                        </svg>
                        {post.date}
                      </span>
                    </div>
                    <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-neutral-400 mb-4 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center gap-3">
                        <img
                          className="w-10 h-10 rounded-full object-cover ring-2 ring-[#262626]"
                          src={post.author.avatar}
                          alt={post.author.name}
                        />
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {post.author.name}
                          </p>
                          <p className="text-xs text-neutral-500">
                            {post.author.role}
                          </p>
                        </div>
                      </div>
                      <span className="hidden sm:inline-flex items-center gap-2 text-orange-500 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                        اقرأ المقال
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
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>

      <Pagination page={page} pageCount={pageCount} onPageChange={setPage} />
    </div>
  );
};

export default BlogPage;
