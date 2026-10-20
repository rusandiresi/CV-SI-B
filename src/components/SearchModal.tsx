import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, Layers, Briefcase, FileText, Wrench } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import {
  servicesData,
  portfolioProjects,
  skillsData,
  blogArticles
} from '../data/portfolioData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const [query, setQuery] = useState('');
  const t = translations[currentLang].search;

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const q = query.toLowerCase();
    const list: Array<{
      type: 'service' | 'project' | 'skill' | 'blog';
      title: string;
      desc: string;
      href: string;
    }> = [];

    // Search services
    servicesData.forEach((s) => {
      const title = currentLang === 'id' ? s.titleId : s.titleEn;
      const desc = currentLang === 'id' ? s.descId : s.descEn;
      if (title.toLowerCase().includes(q) || desc.toLowerCase().includes(q)) {
        list.push({
          type: 'service',
          title,
          desc,
          href: '#services',
        });
      }
    });

    // Search projects
    portfolioProjects.forEach((p) => {
      const summary = currentLang === 'id' ? p.summaryId : p.summaryEn;
      if (
        p.title.toLowerCase().includes(q) ||
        summary.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
      ) {
        list.push({
          type: 'project',
          title: p.title,
          desc: summary,
          href: '#portfolio',
        });
      }
    });

    // Search skills
    skillsData.forEach((sk) => {
      if (sk.name.toLowerCase().includes(q)) {
        list.push({
          type: 'skill',
          title: sk.name,
          desc: `Proficiency: ${sk.level}% · Category: ${sk.category}`,
          href: '#about',
        });
      }
    });

    // Search blog
    blogArticles.forEach((b) => {
      const title = currentLang === 'id' ? b.titleId : b.titleEn;
      const excerpt = currentLang === 'id' ? b.excerptId : b.excerptEn;
      if (title.toLowerCase().includes(q) || excerpt.toLowerCase().includes(q)) {
        list.push({
          type: 'blog',
          title,
          desc: excerpt,
          href: '#blog',
        });
      }
    });

    return list;
  }, [query, currentLang]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-xl bg-[#121418] border border-white/15 rounded-3xl overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10">
          <Search className="w-5 h-5 text-[#ff5500] mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.placeholder}
            className="w-full bg-transparent text-white text-sm focus:outline-none placeholder:text-neutral-500"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-neutral-400 hover:text-white mr-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 text-xs"
          >
            ESC
          </button>
        </div>

        {/* Results / Suggestions Container */}
        <div className="p-4 max-h-96 overflow-y-auto space-y-2">
          {!query.trim() ? (
            <div className="py-6 text-center text-xs text-neutral-400">
              <span className="block mb-3 font-semibold text-neutral-300">
                {t.recent}:
              </span>
              <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                {['React', 'UI/UX', 'E-Commerce', 'Fintech', 'Next.js', 'Figma', 'SEO'].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-3 py-1 rounded-full bg-white/5 hover:bg-[#ff5500]/20 hover:text-white border border-white/10 text-[11px] text-neutral-300 transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-xs text-neutral-400">
              {t.noResults}
            </div>
          ) : (
            results.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-[#ff5500]/15 border border-transparent hover:border-[#ff5500]/30 transition-all group"
              >
                <div className="flex items-center gap-3 pr-2 overflow-hidden">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-[#ff5500]">
                    {item.type === 'service' && <Wrench className="w-4 h-4" />}
                    {item.type === 'project' && <Briefcase className="w-4 h-4" />}
                    {item.type === 'skill' && <Layers className="w-4 h-4" />}
                    {item.type === 'blog' && <FileText className="w-4 h-4" />}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-semibold text-white group-hover:text-[#ff5500] truncate">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-neutral-400 truncate">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
