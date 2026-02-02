import FaqSection from "@/components/FaqSection";
import FeatureSection from "@/components/FeatureSection";
import FeatureSection2 from "@/components/FeatureSection2";
import FeatureSection3 from "@/components/FeatureSection3";
import Gallary from "@/components/Gallary";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <HeroSection/>
     <FeatureSection/>
     <Gallary/>
     <FeatureSection2/>
     <FeatureSection3/>
     <FaqSection/>
     <Footer/>
    </>
  );
}
