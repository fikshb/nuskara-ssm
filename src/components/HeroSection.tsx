"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";

function CountUp({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const num = parseInt(target.replace(/[^0-9]/g, ""));
  const hasPlus = target.includes("+");
  const isText = isNaN(num);

  useEffect(() => {
    if (!inView || isText) return;
    let start = 0;
    const duration = 2000;
    const step = duration / num;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= num) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, num, isText]);

  if (isText) return <span ref={ref}>{target}</span>;
  return (
    <span ref={ref}>
      {count}
      {hasPlus ? "+" : ""}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background - solid dark with subtle amber radial until hero-bg.webp is ready */}
      <div className="absolute inset-0 bg-neutral-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(180,83,9,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.08),transparent_50%)]" />
      </div>

      {/* Top gradient - smooth transition from white navbar */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/40 to-transparent z-[1]" />

      {/* Bottom gradient - smooth transition to Company Overview cream bg */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FAF7F0] via-[#FAF7F0]/40 to-transparent z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-0 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[11px] font-bold tracking-[3px] uppercase text-[#F59E0B] border border-[#B45309]/40 rounded-full px-4 py-1.5 mb-6">
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-3xl sm:text-4xl lg:text-[52px] font-black text-white leading-[1.1] tracking-[-1px] uppercase"
          >
            {t.hero.headline.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
            <span className="text-[#F59E0B]">{t.hero.headlineHighlight}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 text-sm font-semibold tracking-widest uppercase text-[#F59E0B]/70"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 flex flex-wrap gap-x-5 gap-y-2"
          >
            {t.hero.tags.map((tag, i) => (
              <span key={i} className="flex items-center gap-2 text-sm text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B45309] hidden md:block" />
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-neutral-400 text-[15px] leading-relaxed max-w-lg"
          >
            {t.hero.description}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8"
          >
            <a
              href="#services"
              className="inline-block bg-[#B45309] hover:bg-[#D97706] text-white text-sm font-semibold px-7 py-3.5 rounded transition-colors"
            >
              {t.hero.cta}
            </a>
          </motion.div>

          {/* KPI Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 flex gap-8 lg:gap-12"
          >
            {t.hero.kpis.map((kpi, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-black text-white">
                  <CountUp target={kpi.value} />
                </div>
                <div className="text-[11px] font-medium tracking-wider uppercase text-neutral-500 mt-1">
                  {kpi.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
