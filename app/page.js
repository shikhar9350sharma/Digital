import FaqSection from "@/Components/FaqSection";
import FeatureSection from "@/Components/FeatureSection";
import FeatureSection2 from "@/Components/FeatureSection2";
import FeatureSection3 from "@/Components/FeatureSection3";
import Gallary from "@/Components/Gallary";
import HeroSection from "@/Components/HeroSection";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
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
