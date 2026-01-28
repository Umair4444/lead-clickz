import Hero from "@/components/HomePage/Hero";
import SparkSignals from "@/components/SparkSignals2";
import TheShift from "@/components/HomePage/TheShift";
import BrandEvolution from "@/components/HomePage/BrandEvolution";
import TheSystem from "@/components/HomePage/TheSystem";
import MarketFocus from "@/components/HomePage/MarketFocus";
import Outcomes from "@/components/HomePage/Outcomes";
import HumanIntellect from "@/components/HomePage/HumanIntellect";

const page = () => {
  return (
    <div>
      <Hero />
      <TheShift />
      <SparkSignals />
      <TheSystem />
      <BrandEvolution />
      <HumanIntellect />
      <MarketFocus />
      <Outcomes />
    </div>
  );
};

export default page;
