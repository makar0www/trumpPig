// src/App.tsx
import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./sections/HeroSection/HeroSection";
import GeneratorSection from "./sections/GeneratorSection/GeneratorSection";
import { TokenomicsSection } from "./sections/TokenomicsSection/TokenomicsSection";
import { TokenomicsSection2 } from "./sections/TokenomicsSection2/TokenomicsSection2";
import { ChartSection } from "./sections/ChartSection/ChartSection";
// import IntroSection from "./sections/IntroSection/IntroSection";
import GeneratorHeroSection from "./sections/GeneratorHeroSection/GeneratorHeroSection";
import ContractToast from "./components/ContractToast/ContractToast";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HeroSection />
        <TokenomicsSection2/>
        {/* <IntroSection /> */}
        <GeneratorHeroSection />
        <GeneratorSection />
        <TokenomicsSection />
        <ChartSection />
      </main>

      {/* всплывающий тост с контрактом в правом нижнем углу */}
      <ContractToast address="HU1qaZFFLNneXjnjaqvSKekALVyGtHcbxA2ykDPHpump" />
    </div>
  );
}

export default App;
