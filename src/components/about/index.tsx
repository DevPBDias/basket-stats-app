import React from "react";
import TextContent from "./TextContent";
import AboutImage from "./AboutImg";

const AboutSection = () => {
  return (
    <main className="text-[#0B1D51] w-full px-4 py-16 flex flex-col gap-12">
      <TextContent />
      <AboutImage />
    </main>
  );
};

export default AboutSection;
