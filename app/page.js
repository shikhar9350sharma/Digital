import FeatureSection from "@/Components/FeatureSection";
import FeatureSection2 from "@/Components/FeatureSection2";
import Gallary from "@/Components/Gallary";
import HeroSection from "@/Components/HeroSection";
import Navbar from "@/Components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <HeroSection/>
     <FeatureSection/>
     <Gallary/>
     <FeatureSection2/>
    </>
  );
}
