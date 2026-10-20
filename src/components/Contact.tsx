import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  Copy,
  Check,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ProfileData, Language } from '../types';
import { translations } from '../data/translations';

interface ContactProps {
  profile: ProfileData;
  currentLang: Language;
  prefilledSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({
  profile,
  currentLang,
  prefilledSubject = '',
}) => {
  const t = translations[currentLang].contact;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: prefilledSubject,
    budget: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (prefilledSubject) {
      setFormData((prev) => ({ ...prev, subject: prefilledSubject }));
    }
  }, [prefilledSubject]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleTemplateClick = (template: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: template,
      message:
        currentLang === 'id'
          ? `Halo ${profile.name}, saya tertarik untuk ${template.toLowerCase()}. Bisakah kita jadwalkan waktu untuk mendiskusikan kebutuhan dan penawarannya?`
          : `Hi ${profile.name}, I am interested in ${template.toLowerCase()}. Could we schedule a time to discuss requirements and estimates?`,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setIsSuccess(true);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
        });
      } catch {
        // ignore
      }
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-[#0e1014] relative border-t border-white/5">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#121418] border border-white/10 rounded-3xl p-8 shadow-xl space-y-6">
              <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                <span>{t.infoTitle}</span>
              </h3>

              {/* Email item */}
              <div className="flex items-start justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/30 flex items-center justify-center text-[#ff5500]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 block">{t.emailLabel}</span>
                    <span className="text-sm font-semibold text-white break-all">
                      {profile.email}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone / WhatsApp item */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/30 flex items-center justify-center text-[#ff5500]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block">{t.phoneLabel}</span>
                  <span className="text-sm font-semibold text-white">{profile.phone}</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/30 flex items-center justify-center text-[#ff5500]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block">{t.locationLabel}</span>
                  <span className="text-sm font-semibold text-white">
                    {currentLang === 'id' ? profile.locationId : profile.locationEn}
                  </span>
                </div>
              </div>

              {/* WhatsApp direct launch button */}
              <a
                href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                  currentLang === 'id'
                    ? `Halo ${profile.name}, saya melihat portofolio Anda dan ingin berdiskusi mengenai proyek web.`
                    : `Hi ${profile.name}, I came across your portfolio and would love to discuss a project.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.whatsappBtn}</span>
              </a>

              <div className="flex items-center gap-2 text-xs text-neutral-400 justify-center">
                <Clock className="w-3.5 h-3.5 text-[#ff5500]" />
                <span>{t.responseTime}</span>
              </div>
            </div>

            {/* Quick Templates Chips */}
            <div className="bg-[#121418] border border-white/10 rounded-3xl p-6 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-3">
                {t.quickInquiryTitle}
              </span>
              <div className="flex flex-wrap gap-2">
                {t.quickTemplates.map((template, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleTemplateClick(template)}
                    className="text-left text-xs px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#ff5500]/20 hover:text-white border border-white/10 hover:border-[#ff5500]/40 text-neutral-300 transition-all cursor-pointer"
                  >
                    + {template}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121418] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl relative">
              {isSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {t.successTitle}
                  </h3>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                    {t.successBody}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        budget: '',
                        message: '',
                      });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold border border-white/10"
                  >
                    {currentLang === 'id' ? 'Kirim Pesan Lainnya' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        {t.formName} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={currentLang === 'id' ? 'Nama Anda...' : 'Your full name...'}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff5500] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        {t.formEmail} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff5500] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        {t.formSubject}
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder={currentLang === 'id' ? 'e.g. Desain Website Company Profile' : 'e.g. Website Redesign'}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff5500] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        {t.formBudget}
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#1a1c22] border border-white/10 text-neutral-300 text-sm focus:outline-none focus:border-[#ff5500] transition-colors cursor-pointer"
                      >
                        <option value="">
                          {currentLang === 'id' ? 'Pilih kisaran anggaran...' : 'Select budget tier...'}
                        </option>
                        <option value="starter">
                          {currentLang === 'id' ? 'Rp 3 - 5 Juta (< $500)' : '$300 - $500'}
                        </option>
                        <option value="growth">
                          {currentLang === 'id' ? 'Rp 5 - 15 Juta ($500 - $1,200)' : '$500 - $1,200'}
                        </option>
                        <option value="enterprise">
                          {currentLang === 'id' ? '> Rp 15 Juta (> $1,200)' : '> $1,200'}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      {t.formMessage} *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.formMessage}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff5500] transition-colors leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-4 rounded-xl bg-[#ff5500] hover:bg-[#ff681a] text-white font-bold text-xs uppercase tracking-wider transition-all transform active:scale-98 shadow-xl shadow-[#ff5500]/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSending ? (
                      <span>{t.sending}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.sendBtn}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
