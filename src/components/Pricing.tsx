import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { pricingPlans } from '../data/portfolioData';

interface PricingProps {
  currentLang: Language;
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({
  currentLang,
  onSelectPlan,
}) => {
  const t = translations[currentLang].pricing;
  const [currency, setCurrency] = useState<'IDR' | 'USD'>(currentLang === 'id' ? 'IDR' : 'USD');

  const formatPrice = (plan: typeof pricingPlans[0]) => {
    if (currency === 'IDR') {
      return `Rp ${(plan.priceIdr / 1000000).toFixed(1)} Juta`;
    }
    return `$${plan.priceUsd}`;
  };

  return (
    <section id="pricing" className="py-24 bg-[#0e1014] relative border-t border-white/5">
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

          {/* Currency Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 p-1 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-xs text-neutral-400 pl-3 font-medium">
              {t.currencyToggle}
            </span>
            <div className="flex gap-1">
              <button
                onClick={() => setCurrency('IDR')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  currency === 'IDR'
                    ? 'bg-[#ff5500] text-white shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                IDR (Rp)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  currency === 'USD'
                    ? 'bg-[#ff5500] text-white shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                USD ($)
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const name = currentLang === 'id' ? plan.nameId : plan.nameEn;
            const tagline = currentLang === 'id' ? plan.taglineId : plan.taglineEn;
            const features = currentLang === 'id' ? plan.featuresId : plan.featuresEn;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.isPopular
                    ? 'bg-[#15171d] border-2 border-[#ff5500] shadow-2xl shadow-[#ff5500]/15 lg:-translate-y-2'
                    : 'bg-[#121418] border border-white/10 hover:border-white/20'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#ff5500] text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                    {t.popularBadge}
                  </div>
                )}

                <div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    {name}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed mb-6 min-h-[36px]">
                    {tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-8 pb-6 border-b border-white/10">
                    <span className="font-display text-3xl sm:text-4xl font-extrabold text-white">
                      {formatPrice(plan)}
                    </span>
                    <span className="text-xs text-neutral-400 block mt-1">
                      {t.perProject}
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      {t.included}
                    </p>
                    {features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectPlan(name)}
                  className={`w-full py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    plan.isPopular
                      ? 'bg-[#ff5500] hover:bg-[#ff6a1f] text-white shadow-lg shadow-[#ff5500]/30'
                      : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                  }`}
                >
                  <span>{t.getStarted}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
