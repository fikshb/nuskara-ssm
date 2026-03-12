"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

const systemIcons: Record<string, ReactNode> = {
  drill: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1 5.1a2.12 2.12 0 01-3-3l5.1-5.1m0 0L3.87 8.63a1.5 1.5 0 010-2.12l.94-.94a1.5 1.5 0 012.12 0l3.55 3.55m.94.94l2.12-2.12a1.5 1.5 0 012.12 0l.94.94a1.5 1.5 0 010 2.12l-2.12 2.12m-2.12 2.12l5.1 5.1a2.12 2.12 0 003-3l-5.1-5.1" />
    </svg>
  ),
  software: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
    </svg>
  ),
  monitor: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  ),
  gps: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
};

export default function EquipmentSection() {
  const { t } = useTranslation();

  return (
    <section id="equipment" className="relative py-16 lg:py-24 bg-[#FAF7F0] overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(180,83,9,0.03),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <AnimatedSection>
            <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#B45309]">
              {t.equipment.overline}
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-[36px] font-black text-neutral-900 leading-[1.2] tracking-[-0.5px] uppercase">
              {t.equipment.headline}{" "}
              <span className="text-[#B45309]">{t.equipment.headlineHighlight}</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-4 text-neutral-600 text-[15px] leading-relaxed">
              {t.equipment.description}
            </p>
          </AnimatedSection>
        </div>

        {/* Stats bar */}
        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {t.equipment.stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-lg border border-neutral-200 p-5 text-center">
                <div className="text-2xl font-black text-[#B45309]">{stat.value}</div>
                <div className="mt-1 text-xs font-semibold tracking-wider uppercase text-neutral-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Systems grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5" staggerDelay={0.12}>
          {t.equipment.systems.map((system, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="group bg-white rounded-xl border border-neutral-200 p-6 hover:border-[#B45309]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-[#B45309]/10 border border-[#B45309]/20 flex items-center justify-center text-[#B45309] shrink-0 group-hover:bg-[#B45309]/15 transition-colors">
                    {systemIcons[system.icon]}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 mb-1.5">
                      {system.title}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {system.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
