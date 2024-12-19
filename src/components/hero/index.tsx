import React from "react";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";
import CtaBtn from "./CtaBtn";
import ScrollDownBtn from "./ScrollDownBtn";

const HeroSection = () => {
  return (
    <main className="relative w-full h-[90dvh]">
      <HeroImage />
      <section className="absolute top-1/4 left-0 w-full px-4 flex flex-col gap-4 justify-center items-center">
        <HeroText />
        <CtaBtn />
      </section>
      <ScrollDownBtn />
    </main>
  );
};

export default HeroSection;
