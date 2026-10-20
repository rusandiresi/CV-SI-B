import React, { useState, useEffect } from 'react';
import { Search, Menu, X, Globe, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenSearch: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenSearch,
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const t = translations[currentLang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'review', 'pricing', 'blog', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: t.home, href: '#home' },
    { id: 'about', label: t.about, href: '#about' },
    { id: 'services', label: t.services, href: '#services' },
    { id: 'review', label: t.review, href: '#review' },
    { id: 'pricing', label: t.pricing, href: '#pricing' },
    { id: 'blog', label: t.blog, href: '#blog' },
    { id: 'contact', label: t.contact, href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0c0e]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/50'
          : 'bg-[#0b0c0e]/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - exactly matching PORTFOLIO VIEW */}
          <a
            href="#home"
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <span className="font-display font-extrabold tracking-wider text-xl sm:text-2xl text-white flex items-center">
              PORTFOLIO<span className="text-[#ff5500] ml-1.5 font-bold">VIEW</span>
              <span className="inline-block w-2 h-2 rounded-full bg-[#ff5500] ml-1 animate-pulse" />
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors duration-200 relative py-1 ${
                    isActive
                      ? 'text-[#ff5500]'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff5500] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Search Trigger (from screenshot) */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition-colors duration-200 cursor-pointer"
              title={currentLang === 'id' ? 'Cari di portofolio' : 'Search portfolio'}
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Language Switcher Button */}
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5 text-xs">
              <button
                onClick={() => onLanguageChange('id')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full font-medium transition-all ${
                  currentLang === 'id'
                    ? 'bg-[#ff5500] text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Bahasa Indonesia"
              >
                <span>ID</span>
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full font-medium transition-all ${
                  currentLang === 'en'
                    ? 'bg-[#ff5500] text-white shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="English"
              >
                <span>EN</span>
              </button>
            </div>

            {/* Hire Me CTA button */}
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-[#ff5500] hover:bg-[#ff6a1f] text-white transition-all transform active:scale-95 shadow-lg shadow-[#ff5500]/20"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.hireMe}</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#0b0c0e]/98 backdrop-blur-xl px-4 pt-3 pb-6 animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3 py-2 text-sm font-semibold tracking-wider rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#ff5500]/15 text-[#ff5500]'
                    : 'text-neutral-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-neutral-400">Pilih Bahasa / Language</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onLanguageChange('id')}
                  className={`px-3 py-1 rounded text-xs font-semibold ${
                    currentLang === 'id' ? 'bg-[#ff5500] text-white' : 'bg-white/5 text-neutral-300'
                  }`}
                >
                  🇮🇩 ID
                </button>
                <button
                  onClick={() => onLanguageChange('en')}
                  className={`px-3 py-1 rounded text-xs font-semibold ${
                    currentLang === 'en' ? 'bg-[#ff5500] text-white' : 'bg-white/5 text-neutral-300'
                  }`}
                >
                  🇬🇧 EN
                </button>
              </div>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full mt-2 py-2.5 rounded-lg text-sm font-semibold bg-[#ff5500] text-white text-center"
            >
              {t.hireMe}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
