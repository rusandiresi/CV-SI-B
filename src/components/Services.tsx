import React from 'react';
import {
  Palette,
  Code2,
  ShoppingBag,
  Sparkles,
  Zap,
  ShieldCheck,
  Check,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { servicesData } from '../data/portfolioData';

interface ServicesProps {
  currentLang: Language;
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({
  currentLang,
  onSelectService,
}) => {
  const t = translations[currentLang].services;

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#ff5500]" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-[#ff5500]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-[#ff5500]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#ff5500]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#ff5500]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#ff5500]" />;
      default:
        return <Code2 className="w-6 h-6 text-[#ff5500]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#0b0c0e] relative border-t border-white/5">
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const title = currentLang === 'id' ? service.titleId : service.titleEn;
            const desc = currentLang === 'id' ? service.descId : service.descEn;
            const features = currentLang === 'id' ? service.featuresId : service.featuresEn;
            const price = currentLang === 'id' ? service.priceIdr : service.priceUsd;

            return (
              <div
                key={service.id}
                className="bg-[#121418] border border-white/10 rounded-3xl p-7 flex flex-col justify-between hover:border-[#ff5500]/50 transition-all duration-300 group hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-[#ff5500]/10"
              >
                <div>
                  {/* Icon & Starting Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#ff5500]/10 group-hover:border-[#ff5500]/30 transition-all duration-300">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-semibold text-neutral-400 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                      {price}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[#ff5500] transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {desc}
                  </p>

                  {/* Feature checklist */}
                  <div className="space-y-2.5 mb-8 pt-4 border-t border-white/5">
                    {features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onSelectService(title)}
                  className="w-full py-3 rounded-xl bg-white/5 hover:bg-[#ff5500] text-neutral-300 hover:text-white font-semibold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-[#ff5500]/25 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{t.consultNow}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
