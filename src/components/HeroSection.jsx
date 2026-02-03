import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0a0a0a]">
      <div
        className="
    absolute inset-0
    bg-[linear-gradient(to_right,rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,38,38,0.5)_1px,transparent_1px)]
    bg-[size:60px_60px]
    bg-repeat
    pointer-events-none
  "
      />
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl blob"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl blob"
        style={{ animationDelay: "-2s" }}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="section-label inline-flex items-center gap-2 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-sm font-medium text-neutral-300">
              مرحباً بك في عدسة
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            اكتشف <span className="gradient-text">فن</span>
            <br />
            التصوير الفوتوغرافي
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link
              className="btn-primary inline-flex items-center justify-center gap-2 group"
              to="/blog"
              data-discover="true"
            >
              <span>استكشف المقالات</span>
              <svg
                className="w-5 h-5 group-hover:-translate-x-1 transition-transform rotate-180"
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
            </Link>
            <Link
              className="btn-secondary inline-flex items-center justify-center gap-2"
              to="/about"
              data-discover="true"
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
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>اعرف المزيد</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="glass-card p-4 hover:scale-105 transition-transform duration-300">
              <i className="fa-solid fa-newspaper text-2xl text-orange-500 mb-1"></i>
              <p className="text-2xl md:text-3xl font-bold gradient-text">
                +50
              </p>
              <p className="text-neutral-500 text-sm">مقالة</p>
            </div>
            <div className="glass-card p-4 hover:scale-105 transition-transform duration-300">
              <i className="fa-solid fa-users text-2xl text-orange-500 mb-1"></i>
              <p className="text-2xl md:text-3xl font-bold gradient-text">
                +100 الف
              </p>
              <p className="text-neutral-500 text-sm">قارئ</p>
            </div>
            <div className="glass-card p-4 hover:scale-105 transition-transform duration-300">
              <i className="fa-solid fa-folder-open text-2xl text-orange-500 mb-1"></i>
              <p className="text-2xl md:text-3xl font-bold gradient-text">4</p>
              <p className="text-neutral-500 text-sm">تصنيفات</p>
            </div>
            <div className="glass-card p-4 hover:scale-105 transition-transform duration-300">
              <i className="fa-solid fa-pen-nib text-2xl text-orange-500 mb-1"></i>
              <p className="text-2xl md:text-3xl font-bold gradient-text">6</p>
              <p className="text-neutral-500 text-sm">كاتب</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
