import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { ProfileData, Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  profile: ProfileData;
  currentLang: Language;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  currentLang,
}) => {
  const t = translations[currentLang].footer;
  const nav = translations[currentLang].nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090b] border-t border-white/5 py-16 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-display font-extrabold tracking-wider text-xl text-white flex items-center">
              PORTFOLIO<span className="text-[#ff5500] ml-1.5 font-bold">VIEW</span>
              <span className="inline-block w-2 h-2 rounded-full bg-[#ff5500] ml-1 animate-pulse" />
            </span>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              {t.desc}
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">
              {t.quickLinks}
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <a href="#home" className="hover:text-white transition-colors">{nav.home}</a>
              <a href="#about" className="hover:text-white transition-colors">{nav.about}</a>
              <a href="#services" className="hover:text-white transition-colors">{nav.services}</a>
              <a href="#portfolio" className="hover:text-white transition-colors">Portofolio</a>
              <a href="#review" className="hover:text-white transition-colors">{nav.review}</a>
              <a href="#pricing" className="hover:text-white transition-colors">{nav.pricing}</a>
              <a href="#blog" className="hover:text-white transition-colors">{nav.blog}</a>
              <a href="#contact" className="hover:text-white transition-colors">{nav.contact}</a>
            </div>
          </div>

          {/* Socials / Channels */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-xs">
              {t.connect}
            </h4>
            <div className="flex flex-col space-y-2">
              {profile.socials.github && (
                <a href={profile.socials.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  GitHub &rarr;
                </a>
              )}
              {profile.socials.linkedin && (
                <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  LinkedIn &rarr;
                </a>
              )}
              {profile.socials.twitter && (
                <a href={profile.socials.twitter} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Twitter / X &rarr;
                </a>
              )}
              {profile.socials.instagram && (
                <a href={profile.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Instagram &rarr;
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500">
            &copy; {new Date().getFullYear()} {profile.name} · PORTFOLIO VIEW. {t.rights}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer group"
          >
            <span>{t.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform text-[#ff5500]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
