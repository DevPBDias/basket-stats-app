import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const CtaBtn = () => {
  return (
    <Link
      href="/game"
      className="md:max-w-64 flex flex-row w-full lg:w-60 justify-center items-center gap-3 bg-[#F26419] hover:scale-105 hover:border-2 hover:border-[#0B1D51] rounded-xl py-[6px] lg:py-2 shadow-lg mt-5"
    >
      <p className="text-[#0B1D51] font-bold lg:text-lg">Ir para o jogo</p>
      <ArrowRightCircle size={24} color="#0B1D51" />
    </Link>
  );
};

export default CtaBtn;
