import React from "react";
import HowFlowMobile from "./HowFlowMobile";
import CtaBtn from "../hero/CtaBtn";

const HowSection = () => {
  return (
    <main
      id="how"
      className="text-[#0B1D51] w-full px-4 py-16 flex flex-col lg:flex-row gap-12"
    >
      <HowFlowMobile />
      <CtaBtn />
    </main>
  );
};

export default HowSection;
