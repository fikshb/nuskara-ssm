"use client";

import { motion } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

export default function ClientsSection() {
  const { t } = useTranslation();

  return (
    <section id="clients" className="relative py-16 lg:py-24 bg-[#FAF7F0] overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(180,83,9,0.04),transparent_65%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <AnimatedSection>
            <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#B45309]">
              {t.clients.overline}
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-[36px] font-black text-neutral-900 leading-[1.2] tracking-[-0.5px] uppercase">
              {t.clients.headline}{" "}
              <span className="text-[#B45309]">{t.clients.headlineHighlight}</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-4 text-neutral-600 text-[15px] leading-relaxed">
              {t.clients.description}
            </p>
          </AnimatedSection>
        </div>

        {/* Client grid */}
        <StaggerContainer
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          staggerDelay={0.08}
        >
          {t.clients.names.map((name, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="group bg-white rounded-lg border border-neutral-200 p-6 flex items-center justify-center min-h-[100px] hover:border-[#B45309]/30 hover:shadow-md transition-all duration-300"
              >
                <span className="text-sm font-bold text-neutral-700 group-hover:text-[#B45309] transition-colors text-center">
                  {name}
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
