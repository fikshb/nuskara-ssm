"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

const cardIcons = [
  // Blasting - explosion/fire
  <svg key="0" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
  </svg>,
  // Drilling - wrench/tool
  <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1 5.1a2.12 2.12 0 01-3-3l5.1-5.1m0 0L3.87 8.63a1.5 1.5 0 010-2.12l.94-.94a1.5 1.5 0 012.12 0l3.55 3.55m.94.94l2.12-2.12a1.5 1.5 0 012.12 0l.94.94a1.5 1.5 0 010 2.12l-2.12 2.12m-2.12 2.12l5.1 5.1a2.12 2.12 0 003-3l-5.1-5.1" />
  </svg>,
  // Quarry - cube/mountain
  <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
  </svg>,
];

export default function ServicesSection() {
  const { t } = useTranslation();

  return (
    <section id="services" className="relative py-16 lg:py-24 bg-neutral-950 overflow-hidden">
      {/* Subtle radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(180,83,9,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(245,158,11,0.04),transparent_50%)]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <AnimatedSection>
            <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#F59E0B]">
              {t.services.overline}
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-[36px] font-black text-white leading-[1.2] tracking-[-0.5px] uppercase">
              {t.services.headline}{" "}
              <span className="text-[#F59E0B]">{t.services.headlineHighlight}</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-4 text-neutral-400 text-[15px] leading-relaxed">
              {t.services.description}
            </p>
          </AnimatedSection>
        </div>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6" staggerDelay={0.15}>
          {t.services.cards.map((card, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative h-full bg-white/[0.03] border border-white/[0.06] rounded-xl overflow-hidden"
              >
                {/* Card header with icon */}
                <div className="relative h-48 bg-neutral-900 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,83,9,0.15),transparent_70%)]" />
                  <div className="w-16 h-16 rounded-2xl bg-[#B45309]/20 backdrop-blur-sm border border-[#F59E0B]/20 flex items-center justify-center text-[#F59E0B]">
                    {cardIcons[i]}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                    {card.description}
                  </p>
                  <ul className="space-y-2">
                    {card.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#F59E0B]/60 shrink-0" />
                        <span className="text-[13px] text-neutral-400 leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
