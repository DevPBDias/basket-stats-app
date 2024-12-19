import React from "react";
import TextContent from "./TextContent";
import AboutImage from "./AboutImg";
import CtaBtn from "../hero/CtaBtn";

const AboutSection = () => {
  return (
    <main
      id="about"
      className="text-[#0B1D51] w-full px-4 py-16 flex flex-col lg:flex-row gap-12 lg:px-16"
    >
      <section className="flex flex-col justify-center items-center lg:items-start gap-9 lg:w-1/2">
        <TextContent />
        <CtaBtn />
      </section>
      <AboutImage />
    </main>
  );
};

export default AboutSection;
