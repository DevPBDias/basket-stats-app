import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const CtaBtn = () => {
  return (
    <Link
      href="/game"
      className="flex flex-row w-full lg:w-60 justify-center items-center gap-3 bg-[#F26419] rounded-xl py-[6px] lg:py-2 shadow-lg mt-5"
    >
      <p className="text-[#0B1D51] font-bold lg:text-lg">Ir para o jogo</p>
      <ArrowRightCircle size={24} color="#0B1D51" />
    </Link>
  );
};

export default CtaBtn;
