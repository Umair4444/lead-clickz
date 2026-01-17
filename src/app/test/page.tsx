import Hero from "@/components/Hero";
import SparkSignals from "@/components/SparkSignals";
import TheShift from "@/components/TheShift";
import BrandEvolution from "@/components/BrandEvolution";
import TheSystem from "../component/TheSystem";

const page = () => {
  return (
    <div>
      <Hero />
      <TheShift />
      <SparkSignals />
      <BrandEvolution />
      {/* <TheSystem /> */}
    </div>
  );
};

export default page;
