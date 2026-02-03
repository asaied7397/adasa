import React from "react";

const RecentArticles = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-orange-500/5 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <span className="section-label mb-4">
              <span className="relative flex h-2 w-2 ml-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              الأحدث
            </span>
            <h2 className="section-title text-white">أحدث المقالات</h2>
            <p className="section-subtitle max-w-lg">
              محتوى جديد طازج من المطبعة
            </p>
          </div>
          <a
            className="group inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors"
            href="/blog"
            data-discover="true"
          >
            عرض جميع المقالات
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
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            className="group card overflow-hidden"
            style={{ animationDelay: "0ms" }}
          >
            <a className="block" href="/blog/4" data-discover="true">
              <div className="relative h-52 overflow-hidden">
                <img
                  alt="أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&amp;h=400&amp;fit=crop"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                    تقنيات
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
                      ></path>
                    </svg>
                    7 دقائق للقراءة
                  </span>
                  <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                  <span>٨ يناير ٢٠٢٦</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                  أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي
                </h3>
                <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                  افهم العلاقة بين فتحة العدسة وسرعة الغالق وحساسية ISO للتحكم
                  الكامل في صورك.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                  <div className="flex items-center gap-3">
                    <img
                      alt="داود خالد"
                      className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&amp;h=100&amp;fit=crop&amp;crop=face"
                    />
                    <div>
                      <p className="text-sm font-medium text-white">
                        داود خالد
                      </p>
                      <p className="text-xs text-neutral-500">مدرب تصوير</p>
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
            </a>
          </article>
          <article
            className="group card overflow-hidden"
            style={{ animationDelay: "100ms" }}
          >
            <a className="block" href="/blog/5" data-discover="true">
              <div className="relative h-52 overflow-hidden">
                <img
                  alt="قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&amp;h=400&amp;fit=crop"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                    تقنيات
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
                      ></path>
                    </svg>
                    9 دقائق للقراءة
                  </span>
                  <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                  <span>٥ يناير ٢٠٢٦</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                  قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية
                </h3>
                <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                  تعلم قواعد التكوين الأساسية التي يستخدمها المصورون المحترفون
                  لإنشاء صور مؤثرة بصرياً.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                  <div className="flex items-center gap-3">
                    <img
                      alt="ليث محمود"
                      className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop&amp;crop=face"
                    />
                    <div>
                      <p className="text-sm font-medium text-white">
                        ليث محمود
                      </p>
                      <p className="text-xs text-neutral-500">فنان بصري</p>
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
            </a>
          </article>
          <article
            className="group card overflow-hidden"
            style={{ animationDelay: "200ms" }}
          >
            <a className="block" href="/blog/6" data-discover="true">
              <div className="relative h-52 overflow-hidden">
                <img
                  alt="تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&amp;h=400&amp;fit=crop"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-[#0a0a0a]/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#333333]">
                    معدات
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
                      ></path>
                    </svg>
                    8 دقائق للقراءة
                  </span>
                  <span className="w-1 h-1 bg-neutral-600 rounded-full"></span>
                  <span>٣ يناير ٢٠٢٦</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2 leading-tight">
                  تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك
                </h3>
                <p className="text-neutral-400 mb-5 line-clamp-2 text-sm leading-relaxed">
                  اكتشف كيف تحول هاتفك الذكي إلى أداة تصوير قوية مع هذه النصائح
                  والتقنيات.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-[#262626]">
                  <div className="flex items-center gap-3">
                    <img
                      alt="جمال عبدالله"
                      className="w-9 h-9 rounded-full object-cover ring-2 ring-[#262626]"
                      src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&amp;h=100&amp;fit=crop&amp;crop=face"
                    />
                    <div>
                      <p className="text-sm font-medium text-white">
                        جمال عبدالله
                      </p>
                      <p className="text-xs text-neutral-500">
                        مصور ومراجع تقني
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
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default RecentArticles;
