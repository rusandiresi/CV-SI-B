import React, { useState } from 'react';
import {
  Clock,
  Calendar,
  ArrowRight,
  X,
  BookOpen,
  Share2
} from 'lucide-react';
import { BlogPost, Language } from '../types';
import { translations } from '../data/translations';
import { blogArticles } from '../data/portfolioData';

interface BlogProps {
  currentLang: Language;
}

export const Blog: React.FC<BlogProps> = ({ currentLang }) => {
  const t = translations[currentLang].blog;
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 bg-[#0b0c0e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/25 text-[#ff5500] text-xs font-bold uppercase tracking-widest mb-4">
            <span>{t.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogArticles.map((article) => {
            const title = currentLang === 'id' ? article.titleId : article.titleEn;
            const excerpt = currentLang === 'id' ? article.excerptId : article.excerptEn;

            return (
              <article
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-[#121418] border border-white/10 rounded-3xl overflow-hidden group hover:border-[#ff5500]/40 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-[#ff5500]/10"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                    <img
                      src={article.coverImage}
                      alt={title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#0b0c0e]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    {/* Metadata */}
                    <div className="flex items-center gap-3 text-xs text-neutral-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#ff5500]" />
                        {article.date}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-neutral-500" />
                        {article.readTime} {t.minRead}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#ff5500] transition-colors line-clamp-2">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-3">
                      {excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs text-[#ff5500] font-semibold border-t border-white/5">
                  <span>{t.readMore}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="w-full max-w-2xl bg-[#121418] border border-white/15 rounded-3xl overflow-hidden shadow-2xl relative my-8 max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header image & close button */}
            <div className="relative aspect-[21/9] w-full shrink-0 overflow-hidden bg-black/50">
              <img
                src={selectedArticle.coverImage}
                alt="Article cover"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Article Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div className="flex items-center gap-3 text-xs text-neutral-400">
                <span className="text-[#ff5500] font-semibold">{selectedArticle.category}</span>
                <span>·</span>
                <span>{selectedArticle.date}</span>
                <span>·</span>
                <span>{selectedArticle.readTime} {t.minRead}</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {currentLang === 'id' ? selectedArticle.titleId : selectedArticle.titleEn}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed border-t border-white/10 pt-6">
                {(currentLang === 'id' ? selectedArticle.contentId : selectedArticle.contentEn).map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold"
                >
                  Tutup / Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
