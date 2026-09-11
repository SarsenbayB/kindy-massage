import { Header } from "@/widgets/header/Header";
import { Hero } from "@/widgets/hero/Hero";
import { TrustStrip } from "@/widgets/trust-strip/TrustStrip";
import { ProblemSolution } from "@/widgets/problem-solution/ProblemSolution";
import { Services } from "@/widgets/services/Services";
import { WhyChooseUs } from "@/widgets/why-choose-us/WhyChooseUs";
import { AboutSpecialist } from "@/widgets/about-specialist/AboutSpecialist";
import { Certificates } from "@/widgets/certificates/Certificates";
import { Process } from "@/widgets/process/Process";
import { Gallery } from "@/widgets/gallery/Gallery";
import { Reviews } from "@/widgets/reviews/Reviews";
import { Pricing } from "@/widgets/pricing/Pricing";
import { AdultServices } from "@/widgets/adult-services/AdultServices";
import { Faq } from "@/widgets/faq/Faq";
import { FinalCta } from "@/widgets/final-cta/FinalCta";
import { Contact } from "@/widgets/contact/Contact";
import { Footer } from "@/widgets/footer/Footer";
import { MobileActionBar } from "@/widgets/mobile-action-bar/MobileActionBar";

export default function Home() {
  return (
    <>
      <main className="min-h-screen overflow-x-hidden pb-[68px] xl:pb-0">
        <Header />
        <Hero />
        <TrustStrip />
        <ProblemSolution />
        <Services />
        <WhyChooseUs />
        <AboutSpecialist />
        <Certificates />
        <Process />
        <Gallery />
        <Reviews />
        <Pricing />
        <AdultServices />
        <Faq />
        <FinalCta />
        <Contact />
        <Footer />
      </main>
      <MobileActionBar />
    </>
  );
}
