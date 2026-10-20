import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { ProfileData, Language } from '../types';
import { translations } from '../data/translations';
import { experienceTimeline, educationList, skillsData } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  currentLang: Language;
}

export const CvModal: React.FC<CvModalProps> = ({
  isOpen,
  onClose,
  profile,
  currentLang,
}) => {
  const t = translations[currentLang].cv;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-[#121418] border border-white/15 rounded-3xl overflow-hidden shadow-2xl relative my-8 print:border-none print:shadow-none print:bg-white print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Action Header (hidden in print) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 print:hidden bg-white/5">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-sm text-white">
              {t.title}
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-[#ff5500]/20 text-[#ff5500] font-semibold">
              PDF / Print
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-1.5 rounded-lg bg-[#ff5500] hover:bg-[#ff681a] text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.downloadPdf}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable CV Document Content */}
        <div className="p-8 sm:p-12 space-y-8 max-h-[75vh] overflow-y-auto print:max-h-none print:p-0 print:text-black">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 print:border-black/20">
            <h1 className="font-display text-3xl font-extrabold text-white print:text-black">
              {profile.name}
            </h1>
            <p className="text-base text-[#ff5500] font-semibold mt-1 print:text-[#cc4400]">
              {currentLang === 'id' ? profile.roleId : profile.roleEn}
            </p>

            {/* Quick Contact Bar */}
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-neutral-400 print:text-neutral-700">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#ff5500]" />
                {profile.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-[#ff5500]" />
                {profile.phone}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#ff5500]" />
                {currentLang === 'id' ? profile.locationId : profile.locationEn}
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#ff5500] mb-2 print:text-black">
              {t.summary}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 print:text-neutral-800 leading-relaxed">
              {currentLang === 'id' ? profile.bioId : profile.bioEn}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#ff5500] mb-3 print:text-black">
              {t.workExperience}
            </h2>
            <div className="space-y-4">
              {experienceTimeline.map((item, idx) => (
                <div key={idx} className="border-l-2 border-[#ff5500]/40 pl-4 py-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-sm font-bold text-white print:text-black">
                      {currentLang === 'id' ? item.roleId : item.roleEn}
                    </h3>
                    <span className="text-[11px] text-neutral-400 print:text-neutral-600">
                      {currentLang === 'id' ? item.period : item.periodEn}
                    </span>
                  </div>
                  <p className="text-xs text-[#ff5500] print:text-neutral-700 font-medium mb-1">
                    {item.company}
                  </p>
                  <p className="text-xs text-neutral-300 print:text-neutral-800 leading-relaxed">
                    {currentLang === 'id' ? item.descId : item.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies & Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#ff5500] mb-3 print:text-black">
              {t.coreCompetencies}
            </h2>
            <div className="flex flex-wrap gap-2">
              {skillsData.map((skill) => (
                <span
                  key={skill.name}
                  className="px-2.5 py-1 rounded bg-white/5 border border-white/10 print:border-black/20 text-xs font-medium text-neutral-300 print:text-black"
                >
                  {skill.name} ({skill.level}%)
                </span>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#ff5500] mb-3 print:text-black">
              {t.education}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {educationList.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white/5 border border-white/5 print:border-black/10"
                >
                  <span className="text-[10px] text-[#ff5500] font-bold block">
                    {edu.year}
                  </span>
                  <h4 className="text-xs font-bold text-white print:text-black">
                    {currentLang === 'id' ? edu.titleId : edu.titleEn}
                  </h4>
                  <p className="text-[11px] text-neutral-400 print:text-neutral-700">
                    {edu.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
