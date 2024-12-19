import React from "react";
import HowFlowMobile from "./HowFlowMobile";
import CtaBtn from "../hero/CtaBtn";

const HowSection = () => {
  return (
    <main
      id="how"
      className="text-[#0B1D51] w-full px-4 py-16 flex flex-col justify-center items-center gap-12 lg:px-16"
    >
      <HowFlowMobile />
      <CtaBtn />
    </main>
  );
};

export default HowSection;
