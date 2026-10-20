/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Reviews } from './components/Reviews';
import { Pricing } from './components/Pricing';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { CvModal } from './components/CvModal';
import { Language, ProfileData } from './types';
import { defaultProfile } from './data/portfolioData';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    return (saved === 'en' || saved === 'id') ? saved : 'id';
  });

  const [profile] = useState<ProfileData>(defaultProfile);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [prefilledSubject, setPrefilledSubject] = useState('');

  // Persist language
  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang;
  };

  // Quick navigation to contact with a specific subject pre-selected
  const handleSelectServiceOrPlan = (subject: string) => {
    setPrefilledSubject(subject);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContactDirect = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Keyboard shortcut Ctrl/Cmd + K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#e5e7eb] flex flex-col selection:bg-[#ff5500] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={handleOpenContactDirect}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section: Exact visual layout from reference screenshot */}
        <Hero
          profile={profile}
          currentLang={currentLang}
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onOpenContactModal={handleOpenContactDirect}
        />

        {/* About Section */}
        <About
          profile={profile}
          currentLang={currentLang}
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />

        {/* Services Section */}
        <Services
          currentLang={currentLang}
          onSelectService={handleSelectServiceOrPlan}
        />

        {/* Portfolio / Featured Works Section */}
        <Portfolio
          currentLang={currentLang}
        />

        {/* Review / Testimonials Section */}
        <Reviews
          currentLang={currentLang}
        />

        {/* Pricing Plans Section */}
        <Pricing
          currentLang={currentLang}
          onSelectPlan={handleSelectServiceOrPlan}
        />

        {/* Blog / Articles Section */}
        <Blog
          currentLang={currentLang}
        />

        {/* Contact Section */}
        <Contact
          profile={profile}
          currentLang={currentLang}
          prefilledSubject={prefilledSubject}
        />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        currentLang={currentLang}
      />

      {/* Quick Search Dialog (CMD/CTRL + K or Search button in navbar) */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        currentLang={currentLang}
      />

      {/* Interactive & Printable CV Modal */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        profile={profile}
        currentLang={currentLang}
      />
    </div>
  );
}
