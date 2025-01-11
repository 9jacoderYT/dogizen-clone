import Faq from "../../components/faq";
import FloatingCredit from "../../components/floating-credit";
import Footer from "../../components/footer";
import GameSlider from "../../components/game-slider";
import HeroSection from "../../components/hero-section";
import HowToBuy from "../../components/how-to-buy";
import MediaSection from "../../components/media-section";
import PartnersSlider from "../../components/partners-sliders";
import RoadMap from "../../components/roadmap";
import Tokenomics from "../../components/tokenomics";

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
