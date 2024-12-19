import React from "react";
import TextContent from "./TextContent";
import AboutImage from "./AboutImg";
import CtaBtn from "../hero/CtaBtn";

const AboutSection = () => {
  return (
    <main className="text-[#0B1D51] w-full px-4 py-16 flex flex-col lg:flex-row gap-12">
      <section className="flex flex-col gap-9">
        <TextContent />
        <CtaBtn />
      </section>
      <AboutImage />
    </main>
  );
};

export default AboutSection;
