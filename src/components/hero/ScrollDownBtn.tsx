import { ArrowDownCircle } from "lucide-react";
import Link from "next/link";

const ScrollDownBtn = () => {
  return (
    <Link
      href="#about"
      className="absolute bottom-4 left-0 w-full px-4 flex flex-col justify-center items-center"
    >
      <p className="text-[#F2F7F2] font-bold lg:text-lg">Saiba mais</p>
      <ArrowDownCircle size={24} color="#F2F7F2" />
    </Link>
  );
};

export default ScrollDownBtn;
