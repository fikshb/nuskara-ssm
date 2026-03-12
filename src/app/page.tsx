import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CompanyOverviewSection from "@/components/CompanyOverviewSection";
import ServicesSection from "@/components/ServicesSection";
import SafetySection from "@/components/SafetySection";
import EquipmentSection from "@/components/EquipmentSection";
import CoverageSection from "@/components/CoverageSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CompanyOverviewSection />
        <ServicesSection />
        <SafetySection />
        <EquipmentSection />
        <CoverageSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
