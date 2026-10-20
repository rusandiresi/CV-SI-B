import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  X,
  CheckCircle2,
  Calendar,
  UserCheck,
  Building,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { ProjectItem, Language } from '../types';
import { translations } from '../data/translations';
import { portfolioProjects } from '../data/portfolioData';

interface PortfolioProps {
  currentLang: Language;
}

export const Portfolio: React.FC<PortfolioProps> = ({ currentLang }) => {
  const t = translations[currentLang].portfolio;
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#0e1014] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
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

        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-[#ff5500] text-white shadow-md shadow-[#ff5500]/25'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.categories.all}
            </button>
            <button
              onClick={() => setActiveCategory('webapp')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'webapp'
                  ? 'bg-[#ff5500] text-white shadow-md shadow-[#ff5500]/25'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.categories.webapp}
            </button>
            <button
              onClick={() => setActiveCategory('uiux')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'uiux'
                  ? 'bg-[#ff5500] text-white shadow-md shadow-[#ff5500]/25'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.categories.uiux}
            </button>
            <button
              onClick={() => setActiveCategory('ecommerce')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'ecommerce'
                  ? 'bg-[#ff5500] text-white shadow-md shadow-[#ff5500]/25'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.categories.ecommerce}
            </button>
            <button
              onClick={() => setActiveCategory('mobile')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === 'mobile'
                  ? 'bg-[#ff5500] text-white shadow-md shadow-[#ff5500]/25'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.categories.mobile}
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const summary = currentLang === 'id' ? project.summaryId : project.summaryEn;

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-[#121418] border border-white/10 rounded-3xl overflow-hidden group hover:border-[#ff5500]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-[#ff5500]/10"
              >
                <div>
                  {/* Project Image Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-transparent opacity-80" />
                    
                    {/* Floating year / category */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-[#0b0c0e]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0b0c0e]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-[#ff5500] group-hover:border-[#ff5500] transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium text-neutral-400"
                        >
                          {tag}
                          {i < 2 ? ' ·' : ''}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[#ff5500] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                      {summary}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs text-neutral-400 border-t border-white/5">
                  <span>{project.client}</span>
                  <span className="font-semibold text-white group-hover:text-[#ff5500] transition-colors flex items-center gap-1">
                    {t.viewProject} &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-[#121418] border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative aspect-[16/9] w-full bg-black/50 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Meta Grid */}
              <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 text-xs">
                <div>
                  <span className="text-neutral-400 block mb-1">{t.clientLabel}</span>
                  <span className="text-white font-semibold">{selectedProject.client}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block mb-1">{t.yearLabel}</span>
                  <span className="text-white font-semibold">{selectedProject.year}</span>
                </div>
                <div>
                  <span className="text-neutral-400 block mb-1">{t.roleLabel}</span>
                  <span className="text-[#ff5500] font-semibold">
                    {currentLang === 'id' ? selectedProject.roleId : selectedProject.roleEn}
                  </span>
                </div>
              </div>

              {/* Narrative description */}
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                  {currentLang === 'id' ? 'Tentang Proyek' : 'About Project'}
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  {currentLang === 'id' ? selectedProject.fullDescId : selectedProject.fullDescEn}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                  {t.keyHighlights}
                </h4>
                <div className="space-y-2">
                  {(currentLang === 'id' ? selectedProject.highlightsId : selectedProject.highlightsEn).map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons in modal */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 justify-between items-center">
                <div className="flex gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-[#ff5500] hover:bg-[#ff6a1f] text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md shadow-[#ff5500]/20"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t.liveDemo}</span>
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold flex items-center gap-1.5 transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>{t.sourceCode}</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white"
                >
                  {t.closeModal}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
