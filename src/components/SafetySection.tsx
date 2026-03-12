"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageContext";
import AnimatedSection, { StaggerContainer, StaggerItem } from "./AnimatedSection";

const stepIcons = [
  // Survey - clipboard
  <svg key="0" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
  </svg>,
  // Blast planning - map
  <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
  </svg>,
  // Preparation - wrench
  <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z" />
  </svg>,
  // Execution - target/bolt
  <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>,
  // Monitoring - chart
  <svg key="4" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>,
];

const stepLabels = ["01", "02", "03", "04", "05"];

const certIcons = [
  // Certificate
  <svg key="c0" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
  </svg>,
  // Shield
  <svg key="c1" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
  // Globe
  <svg key="c2" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
  </svg>,
  // Lock/insurance
  <svg key="c3" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>,
];

export default function SafetySection() {
  const { t } = useTranslation();
  const pipelineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(pipelineRef, { once: true, margin: "-100px" });
  const ease = [0.25, 0.4, 0.25, 1] as [number, number, number, number];

  return (
    <section id="safety" className="relative py-16 lg:py-24 bg-neutral-950 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0">
        <img src="/images/bg-dark-1.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      </div>
      {/* Radial overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(180,83,9,0.10),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(245,158,11,0.05),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <AnimatedSection>
            <span className="text-[11px] font-bold tracking-[3px] uppercase text-[#F59E0B]">
              {t.safety.overline}
            </span>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-[36px] font-black text-white leading-[1.2] tracking-[-0.5px] uppercase">
              {t.safety.headline}{" "}
              <span className="text-[#F59E0B]">{t.safety.headlineHighlight}</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-4 text-neutral-400 text-[15px] leading-relaxed">
              {t.safety.description}
            </p>
          </AnimatedSection>
        </div>

        {/* Pipeline */}
        <div ref={pipelineRef} className="relative mb-16">
          {/* Horizontal pipeline line (desktop) */}
          <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-[2px]">
            <div className="absolute inset-0 bg-[#B45309]/20 rounded-full" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#B45309] via-[#F59E0B] to-[#B45309] rounded-full origin-left"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, delay: 0.3, ease }}
            />
            {[0, 1, 2].map((d) => (
              <motion.div
                key={d}
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F59E0B]"
                initial={{ left: "0%", opacity: 0 }}
                animate={inView ? {
                  left: ["0%", "100%"],
                  opacity: [0, 1, 1, 0],
                } : { opacity: 0 }}
                transition={{
                  duration: 5,
                  delay: 1.8 + d * 1.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Vertical pipeline line (mobile) */}
          <div className="md:hidden absolute left-[28px] top-[60px] bottom-[60px] w-[2px]">
            <div className="absolute inset-0 bg-[#B45309]/20 rounded-full" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-[#B45309] via-[#F59E0B] to-[#B45309] rounded-full origin-top"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, delay: 0.3, ease }}
            />
            {[0, 1, 2].map((d) => (
              <motion.div
                key={d}
                className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#F59E0B]"
                initial={{ top: "0%", opacity: 0 }}
                animate={inView ? {
                  top: ["0%", "100%"],
                  opacity: [0, 1, 1, 0],
                } : { opacity: 0 }}
                transition={{
                  duration: 5,
                  delay: 1.8 + d * 1.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          {/* Step cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {t.safety.steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + i * 0.3,
                  ease,
                }}
                className="relative"
              >
                {/* Pipeline node */}
                <div className="flex md:justify-center mb-5">
                  <motion.div
                    className="relative"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.8 + i * 0.3,
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                  >
                    {/* Glow ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-[#F59E0B]/20"
                      animate={inView ? { scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] } : {}}
                      transition={{ duration: 3, repeat: Infinity, delay: 1.5 + i * 0.3 }}
                      style={{ width: 56, height: 56, marginLeft: -4, marginTop: -4 }}
                    />
                    {/* Node circle */}
                    <div className="w-12 h-12 rounded-full bg-[#78350F] border-2 border-[#F59E0B]/50 flex items-center justify-center text-[#F59E0B] shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                      {stepIcons[i]}
                    </div>
                    {/* Step number */}
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#F59E0B] flex items-center justify-center">
                      <span className="text-[9px] font-black text-white">{stepLabels[i]}</span>
                    </div>
                  </motion.div>
                </div>

                {/* Card content */}
                <div className="md:text-center pl-16 md:pl-0">
                  <h3 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-neutral-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Safety stats */}
        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {t.safety.stats.map((stat, i) => (
              <div key={i} className="text-center p-5 rounded-lg border border-white/[0.06] bg-white/[0.02]">
                <div className="text-2xl font-black text-[#F59E0B]">{stat.value}</div>
                <div className="mt-1 text-xs font-semibold tracking-wider uppercase text-neutral-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Certification cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.1}>
          {t.safety.certifications.map((cert, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 hover:border-[#B45309]/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#B45309]/15 border border-[#B45309]/25 flex items-center justify-center text-[#F59E0B] mb-3">
                  {certIcons[i]}
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">{cert.title}</h4>
                <p className="text-[13px] text-neutral-500 leading-relaxed">{cert.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
