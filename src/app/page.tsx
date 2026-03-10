import BenefitsSection from "@/components/BenefitsSection/BenefitsSection";
import CardsSection from "@/components/Cardssection/Cardssection";
import Cta from "@/components/CtaComponent/Cta";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import LifeContent from "@/components/LifeContent/LifeContent";
import PricingTable from "@/components/PricingTable/PricingTable";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <CardsSection />
      <LifeContent />
      <PricingTable />
      <BenefitsSection />
      <Cta />
      <Footer />
    </main>
  );
}