import FlipLinkButton from "@/components/button/Button";
import { Fm } from "@/components/fm";
import AboutMe from "@/components/home/AboutMe";
import Hero from "@/components/home/Hero";
import HeroV2 from "@/components/home/HeroV2";
import Marquee from "@/components/home/Marquee";
import MarqueeV2 from "@/components/home/MarqueeV2";
import WhatICanDo from "@/components/home/WhatICanDo";
import Index from "@/components/Index";
import Header from "@/components/layout/Header";
import CustomCursorV2 from "@/components/shared/CustomCursorV2";
import HeroV3 from "@/components/Test";
import { FaCarSide } from "react-icons/fa6";


export default function Home() {
  return (
    <div className="">
      <HeroV2 />
      <WhatICanDo />
      <AboutMe />
      <HeroV3 />

      <Hero />

      <Fm />
      {/* <Index /> */}
      <FlipLinkButton leftIcon={<FaCarSide size={20} />
      } className="" href="/about" text="About Us" hoverText="Learn More Learn More Learn More" />

      <Marquee />
      <MarqueeV2 />
    </div>
  );
}
