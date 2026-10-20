import React, { useState } from 'react';
import {
  Star,
  Quote,
  PlusCircle,
  X,
  CheckCircle,
  MessageSquareHeart,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { ReviewItem, Language } from '../types';
import { translations } from '../data/translations';
import { reviewsData as initialReviews } from '../data/portfolioData';

interface ReviewsProps {
  currentLang: Language;
}

export const Reviews: React.FC<ReviewsProps> = ({ currentLang }) => {
  const t = translations[currentLang].reviews;
  const [reviews, setReviews] = useState<ReviewItem[]>(initialReviews);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    rating: 5,
    projectTitle: '',
    comment: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) return;

    const newRev: ReviewItem = {
      id: `custom-rev-${Date.now()}`,
      name: formData.name,
      roleId: formData.role || 'Klien',
      roleEn: formData.role || 'Client',
      company: formData.company || 'Partner',
      avatar: `https://images.unsplash.com/photo-${1534528741775 + (reviews.length % 5)}?q=80&w=200&auto=format&fit=crop`,
      rating: formData.rating,
      commentId: formData.comment,
      commentEn: formData.comment,
      date: new Date().toLocaleDateString(currentLang === 'id' ? 'id-ID' : 'en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      projectTitle: formData.projectTitle || 'Digital Project',
    };

    setReviews([newRev, ...reviews]);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore
    }

    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
      setFormData({
        name: '',
        role: '',
        company: '',
        rating: 5,
        projectTitle: '',
        comment: '',
      });
    }, 1800);
  };

  return (
    <section id="review" className="py-24 bg-[#0b0c0e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
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

          <button
            onClick={() => setIsModalOpen(true)}
            className="self-start md:self-end px-5 py-2.5 rounded-xl bg-white/5 hover:bg-[#ff5500] border border-white/10 hover:border-[#ff5500] text-white text-xs font-semibold tracking-wide transition-all flex items-center gap-2 cursor-pointer shadow-lg"
          >
            <PlusCircle className="w-4 h-4 text-[#ff5500] group-hover:text-white" />
            <span>{t.addReviewBtn}</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev) => {
            const comment = currentLang === 'id' ? rev.commentId : rev.commentEn;
            const role = currentLang === 'id' ? rev.roleId : rev.roleEn;

            return (
              <div
                key={rev.id}
                className="bg-[#121418] border border-white/10 rounded-3xl p-7 flex flex-col justify-between hover:border-white/20 transition-all shadow-xl relative group"
              >
                <div>
                  {/* Rating stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < rev.rating
                              ? 'text-[#ff5500] fill-[#ff5500]'
                              : 'text-neutral-700'
                          }`}
                        />
                      ))}
                    </div>
                    <Quote className="w-7 h-7 text-[#ff5500]/20" />
                  </div>

                  {/* Comment */}
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed italic mb-6">
                    &ldquo;{comment}&rdquo;
                  </p>
                </div>

                {/* Client Info footer */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-11 h-11 rounded-full object-cover border border-white/10"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                        {rev.name}
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      </h4>
                      <p className="text-xs text-neutral-400">
                        {role} · {rev.company}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] text-neutral-500 hidden sm:inline">
                    {rev.projectTitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add Review Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-[#121418] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">{t.successMsg}</h4>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {t.modalTitle}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">{t.modalDesc}</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    {t.formName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rusandi Resi"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#ff5500]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      {t.formRole}
                    </label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="e.g. Product Lead"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#ff5500]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1">
                      {t.formCompany}
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Studio Tech"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#ff5500]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    {t.formRating}
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="p-1 cursor-pointer"
                      >
                        <Star
                          className={`w-5 h-5 ${
                            star <= formData.rating
                              ? 'text-[#ff5500] fill-[#ff5500]'
                              : 'text-neutral-600'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    {t.formComment} *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    placeholder="Tulis ulasan Anda..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#ff5500]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#ff5500] hover:bg-[#ff681a] text-white text-xs font-bold tracking-wide uppercase transition-all shadow-lg shadow-[#ff5500]/20"
                >
                  {t.submitReview}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
