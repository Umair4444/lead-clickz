import Hero from "@/components/HomePage/Hero";
import SparkSignals from "@/components/HomePage/SparkSignals";
import TheShift from "@/components/HomePage/TheShift";
import BrandEvolution from "@/components/HomePage/BrandEvolution";
import TheSystem from "@/components/HomePage/TheSystem";
import MarketFocus from "@/components/HomePage/MarketFocus";
import Outcomes from "@/components/HomePage/Outcomes";
import HumanIntellect from "@/components/HomePage/HumanIntellect";
import Invitation from "@/components/HomePage/Invitation";
import ScrollSection from "@/components/Framer-motion/ScrollSection";

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
      <Invitation />
    </div>

    // {/* <div className="">
    //   <ScrollSection><Hero /></ScrollSection>
    //   <ScrollSection><TheShift /></ScrollSection>
    //   <ScrollSection><SparkSignals /></ScrollSection>
    //   <ScrollSection><TheSystem /></ScrollSection>
    //   <ScrollSection><BrandEvolution /></ScrollSection>
    //   <ScrollSection><HumanIntellect /></ScrollSection>
    //   <ScrollSection><MarketFocus /></ScrollSection>
    //   <ScrollSection><Outcomes /></ScrollSection>
    //   <ScrollSection><Invitation /></ScrollSection>
    // </div> */}
  );
};

export default page;
