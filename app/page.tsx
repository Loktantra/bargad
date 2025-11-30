import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import PillarsSection from "@/components/PillarsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ManifestoSection from "@/components/ManifestoSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <VisionSection />
        <PillarsSection />
        <FeaturesSection />
        <ManifestoSection />
        <JoinSection />
      </main>
      <Footer />
    </div>
  );
}
