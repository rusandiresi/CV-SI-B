import React, { useState } from 'react';
import {
  User,
  Layers,
  Briefcase,
  GraduationCap,
  Download,
  CheckCircle,
  ExternalLink,
  Code,
  Layout,
  Cpu,
  Wrench
} from 'lucide-react';
import { ProfileData, Language } from '../types';
import { translations } from '../data/translations';
import {
  skillsData,
  experienceTimeline,
  educationList
} from '../data/portfolioData';

interface AboutProps {
  profile: ProfileData;
  currentLang: Language;
  onOpenCvModal: () => void;
}

export const About: React.FC<AboutProps> = ({
  profile,
  currentLang,
  onOpenCvModal,
}) => {
  const t = translations[currentLang].about;
  const [activeTab, setActiveTab] = useState<'story' | 'skills' | 'experience' | 'education'>('story');
  const [skillCategory, setSkillCategory] = useState<'all' | 'frontend' | 'design' | 'backend' | 'tools'>('all');

  const filteredSkills = skillCategory === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === skillCategory);

  return (
    <section id="about" className="py-24 bg-[#0e1014] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/25 text-[#ff5500] text-xs font-bold uppercase tracking-widest mb-4">
            <span>{t.badge}</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {t.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            {t.leadText}
          </p>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-white/5 border border-white/10 max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab('story')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'story'
                  ? 'bg-[#ff5500] text-white shadow-lg shadow-[#ff5500]/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <User className="w-4 h-4" />
              <span>{t.tabs.story}</span>
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'skills'
                  ? 'bg-[#ff5500] text-white shadow-lg shadow-[#ff5500]/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{t.tabs.skills}</span>
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'experience'
                  ? 'bg-[#ff5500] text-white shadow-lg shadow-[#ff5500]/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>{t.tabs.experience}</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === 'education'
                  ? 'bg-[#ff5500] text-white shadow-lg shadow-[#ff5500]/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>{t.tabs.education}</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="bg-[#121418] border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Story Tab */}
          {activeTab === 'story' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5 text-neutral-300 leading-relaxed text-sm sm:text-base">
                {t.storyContent.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onOpenCvModal}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ff5500] hover:bg-[#ff681a] text-white font-semibold text-sm transition-all shadow-lg shadow-[#ff5500]/20"
                  >
                    <Download className="w-4 h-4" />
                    <span>{t.downloadCv}</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-neutral-400 text-xs block mb-1">
                    {currentLang === 'id' ? 'Keahlian Inti' : 'Core Craft'}
                  </span>
                  <span className="text-white font-semibold text-base sm:text-lg block">
                    Modern UI/UX & Web Dev
                  </span>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-neutral-400 text-xs block mb-1">
                    {currentLang === 'id' ? 'Status Ketersediaan' : 'Availability'}
                  </span>
                  <span className="text-emerald-400 font-semibold text-base sm:text-lg flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    {currentLang === 'id' ? 'Tersedia' : 'Available'}
                  </span>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-neutral-400 text-xs block mb-1">
                    {currentLang === 'id' ? 'Lokasi Kerja' : 'Base Location'}
                  </span>
                  <span className="text-white font-semibold text-base sm:text-lg block">
                    {currentLang === 'id' ? profile.locationId : profile.locationEn}
                  </span>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/5">
                  <span className="text-neutral-400 text-xs block mb-1">
                    {currentLang === 'id' ? 'Kepuasan Klien' : 'Satisfaction'}
                  </span>
                  <span className="text-[#ff5500] font-bold text-base sm:text-lg block">
                    {profile.clientSatisfaction}% Top Rated
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Skills Tab */}
          {activeTab === 'skills' && (
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
                <p className="text-sm text-neutral-400">{t.skillsSubtitle}</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSkillCategory('all')}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                      skillCategory === 'all'
                        ? 'bg-[#ff5500] text-white'
                        : 'bg-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setSkillCategory('frontend')}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                      skillCategory === 'frontend'
                        ? 'bg-[#ff5500] text-white'
                        : 'bg-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    Frontend
                  </button>
                  <button
                    onClick={() => setSkillCategory('design')}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                      skillCategory === 'design'
                        ? 'bg-[#ff5500] text-white'
                        : 'bg-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    UI/UX
                  </button>
                  <button
                    onClick={() => setSkillCategory('backend')}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                      skillCategory === 'backend'
                        ? 'bg-[#ff5500] text-white'
                        : 'bg-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    Backend
                  </button>
                  <button
                    onClick={() => setSkillCategory('tools')}
                    className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                      skillCategory === 'tools'
                        ? 'bg-[#ff5500] text-white'
                        : 'bg-white/5 text-neutral-400 hover:text-white'
                    }`}
                  >
                    Tools & SEO
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/15 transition-all"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-white text-sm">
                        {skill.name}
                      </span>
                      <span className="text-xs font-bold text-[#ff5500]">
                        {skill.level}%
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-black/40 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#ff5500] to-[#ff7a33] rounded-full transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience Tab */}
          {activeTab === 'experience' && (
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-white/10">
              {experienceTimeline.map((item, idx) => (
                <div key={idx} className="relative pl-10 group">
                  <div className="absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full bg-[#0b0c0e] border-2 border-[#ff5500] group-hover:bg-[#ff5500] transition-colors" />
                  <div className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:border-white/15 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {currentLang === 'id' ? item.roleId : item.roleEn}
                      </h4>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#ff5500]/15 text-[#ff5500]">
                        {currentLang === 'id' ? item.period : item.periodEn}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-neutral-400 mb-3">
                      {item.company}
                    </p>
                    <p className="text-sm text-neutral-300 leading-relaxed">
                      {currentLang === 'id' ? item.descId : item.descEn}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education Tab */}
          {activeTab === 'education' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {educationList.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-white/15 transition-all"
                >
                  <div>
                    <span className="text-xs font-semibold text-[#ff5500] block mb-2">
                      {edu.year}
                    </span>
                    <h4 className="text-base font-bold text-white mb-1">
                      {currentLang === 'id' ? edu.titleId : edu.titleEn}
                    </h4>
                    <p className="text-xs text-neutral-400 mb-4">{edu.institution}</p>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {currentLang === 'id' ? edu.detailsId : edu.detailsEn}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs text-emerald-400">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Verified Credential</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
