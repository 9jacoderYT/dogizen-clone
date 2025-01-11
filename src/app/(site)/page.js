import Faq from "@/app/components/faq";
import Footer from "@/app/components/footer";
import GameSlider from "@/app/components/game-slider";
import HeroSection from "@/app/components/hero-section";
import HowToBuy from "@/app/components/how-to-buy";
import MediaSection from "@/app/components/media-section";
import PartnersSlider from "@/app/components/partners-sliders";
import RoadMap from "@/app/components/roadmap";
import Tokenomics from "@/app/components/tokenomics";
import FloatingCredit from "@/app/components/floating-credit";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PartnersSlider />
      <MediaSection />
      <GameSlider />
      <HowToBuy />
      <RoadMap />
      <Tokenomics />
      <Faq />
      <Footer />
      <FloatingCredit />
    </div>
  );
}
