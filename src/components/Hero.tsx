import React, { useState, useEffect } from 'react';
import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Linkedin,
  Github,
  ArrowRight,
  Download,
  Mail,
  Sparkles,
  CheckCircle2,
  Award
} from 'lucide-react';
import { ProfileData, Language } from '../types';
import { translations } from '../data/translations';

interface HeroProps {
  profile: ProfileData;
  currentLang: Language;
  onOpenCvModal: () => void;
  onOpenContactModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  currentLang,
  onOpenCvModal,
  onOpenContactModal,
}) => {
  const t = translations[currentLang].hero;
  const rolesList = currentLang === 'id' ? profile.rolesListId : profile.rolesListEn;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  // Animated typewriter effect for role
  useEffect(() => {
    const fullRole = rolesList[currentRoleIndex] || rolesList[0] || 'A Web Designer';

    const handleType = () => {
      if (!isDeleting) {
        setDisplayText(fullRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === fullRole.length) {
          // Pause at end
          setTypingSpeed(1800);
          setIsDeleting(true);
        } else {
          setTypingSpeed(90);
        }
      } else {
        setDisplayText(fullRole.substring(0, displayText.length - 1));
        if (displayText.length - 1 === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % rolesList.length);
          setTypingSpeed(300);
        } else {
          setTypingSpeed(50);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, rolesList, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:py-28 overflow-hidden bg-gradient-to-b from-[#0b0c0e] via-[#101216] to-[#0b0c0e]"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#ff5500]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[420px] h-[420px] bg-[#ff5500]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Exactly matches the layout & typography from reference screenshot */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.badge}</span>
            </div>

            {/* Greeting: Hello, I'm James Smith */}
            <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
              {t.greeting}{' '}
              <span className="font-semibold text-white drop-shadow-sm">
                {profile.name}
              </span>
            </h2>

            {/* Main title: A Web Designer (Signature Orange color matching screenshot) */}
            <div className="min-h-[58px] sm:min-h-[72px] flex items-center">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#ff5500]">
                {displayText || 'A Web Designer'}
                <span className="inline-block w-1 h-9 sm:h-12 bg-[#ff5500] ml-1 animate-pulse align-middle" />
              </h1>
            </div>

            {/* Subtitle / Bio description */}
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xl">
              {currentLang === 'id' ? profile.bioId : profile.bioEn}
            </p>

            {/* Circular Social Icons in Orange Outlines (Matching Reference Screenshot) */}
            <div className="flex items-center gap-3 pt-2">
              {profile.socials.facebook && (
                <a
                  href={profile.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-[#ff5500] flex items-center justify-center text-white hover:bg-[#ff5500] hover:text-white transition-all transform hover:-translate-y-1 shadow-md shadow-[#ff5500]/10"
                  aria-label="Facebook"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
              {profile.socials.twitter && (
                <a
                  href={profile.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-[#ff5500] flex items-center justify-center text-white hover:bg-[#ff5500] hover:text-white transition-all transform hover:-translate-y-1 shadow-md shadow-[#ff5500]/10"
                  aria-label="Twitter / X"
                  title="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              )}
              {profile.socials.youtube && (
                <a
                  href={profile.socials.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-[#ff5500] flex items-center justify-center text-white hover:bg-[#ff5500] hover:text-white transition-all transform hover:-translate-y-1 shadow-md shadow-[#ff5500]/10"
                  aria-label="YouTube"
                  title="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              )}
              {profile.socials.instagram && (
                <a
                  href={profile.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-[#ff5500] flex items-center justify-center text-white hover:bg-[#ff5500] hover:text-white transition-all transform hover:-translate-y-1 shadow-md shadow-[#ff5500]/10"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {profile.socials.linkedin && (
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-[#ff5500] flex items-center justify-center text-white hover:bg-[#ff5500] hover:text-white transition-all transform hover:-translate-y-1 shadow-md shadow-[#ff5500]/10"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {profile.socials.github && (
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-[#ff5500] flex items-center justify-center text-white hover:bg-[#ff5500] hover:text-white transition-all transform hover:-translate-y-1 shadow-md shadow-[#ff5500]/10"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* Action Buttons: Hire Me + Download CV + View Works */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContactModal}
                className="px-6 py-3 rounded-full bg-[#ff5500] hover:bg-[#ff681a] text-white font-semibold text-sm tracking-wide transition-all transform hover:-translate-y-0.5 active:translate-y-0 shadow-xl shadow-[#ff5500]/25 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>{t.hireBtn}</span>
              </button>

              <button
                onClick={onOpenCvModal}
                className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-sm tracking-wide border border-white/10 hover:border-white/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-[#ff5500]" />
                <span>{t.downloadCvBtn}</span>
              </button>

              <a
                href="#services"
                className="px-5 py-3 text-neutral-300 hover:text-white text-sm font-medium transition-colors flex items-center gap-1.5 group"
              >
                <span>{t.viewWorkBtn}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#ff5500]" />
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {profile.experienceYears}+
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">{t.experience}</p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-[#ff5500]">
                  {profile.completedProjects}+
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">{t.completedProjects}</p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-white">
                  {profile.clientSatisfaction}%
                </p>
                <p className="text-xs text-neutral-400 mt-0.5">{t.happyClients}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Person Portrait matching screenshot */}
          <div className="lg:col-span-5 relative flex justify-center items-end">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#1a1c22] via-[#121418] to-[#0b0c0e] shadow-2xl shadow-black/80 group">
              {/* Backlight halo glow */}
              <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#ff5500]/20 to-transparent pointer-events-none" />

              {/* The image from /public/assets/aistudio/image_4af57c09.png */}
              <div className="w-full h-full relative overflow-hidden">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="w-full h-full object-cover object-[78%_center] scale-110 group-hover:scale-115 transition-transform duration-700 ease-out"
                />

                {/* Soft gradient bottom blend so it sits seamlessly in the card */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c0e] via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c0e]/30 via-transparent to-[#0b0c0e]/20" />
              </div>

              {/* Floating Badge 1: Top Rated / Experience */}
              <div className="absolute top-4 right-4 bg-[#0b0c0e]/80 backdrop-blur-md border border-white/10 rounded-2xl px-3.5 py-2 flex items-center gap-2 shadow-xl">
                <Award className="w-4 h-4 text-[#ff5500]" />
                <div className="text-left">
                  <p className="text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">
                    Top Rated
                  </p>
                  <p className="text-xs font-bold text-white">100% Quality</p>
                </div>
              </div>

              {/* Floating Badge 2: Open for freelance */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0b0c0e]/90 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex items-center justify-between shadow-2xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#ff5500]/20 border border-[#ff5500]/40 flex items-center justify-center text-[#ff5500]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">
                      {profile.name}
                    </p>
                    <p className="text-[11px] text-neutral-400">
                      {currentLang === 'id' ? 'Tersedia untuk Kontrak Proyek' : 'Available for Freelance & Contracts'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={onOpenContactModal}
                  className="px-3 py-1.5 rounded-xl bg-[#ff5500] hover:bg-[#ff681a] text-white text-xs font-semibold tracking-wide transition-all"
                >
                  {currentLang === 'id' ? 'Chat' : 'Hire'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
