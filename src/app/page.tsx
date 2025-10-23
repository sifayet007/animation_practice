import RevealLink from "@/components/animation/RevealLink";
import FlipLinkButton from "@/components/button/Button";
import { Fm } from "@/components/fm";
import AboutMe from "@/components/home/AboutMe";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Hero from "@/components/home/Hero";
import HeroSpotlight from "@/components/home/HeroSpotlight";
import HeroV2 from "@/components/home/HeroV2";
import Marquee from "@/components/home/Marquee";
import MarqueeV2 from "@/components/home/MarqueeV2";
import Testimonials from "@/components/home/Testimonials";
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
      <FeaturedProjects />
      <Testimonials />
      <RevealLink />
      <HeroSpotlight />
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
