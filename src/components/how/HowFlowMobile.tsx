import { cardContent } from "@/constants/howCardContent";
import { ArrowBigDown } from "lucide-react";
import Image from "next/image";

const HowFlowMobile = () => {
  return (
    <section className="w-full flex flex-col gap-9">
      <h2 className="w-full font-bold text-2xl mb-7">
        Como Funciona: Estatísticas em 4 Passos Simples
      </h2>
      {cardContent.map((item) => (
        <div
          key={item.id}
          className="w-full flex flex-col justify-center items-center gap-9"
        >
          <div className="w-full flex flex-row justify-center items-center gap-4">
            <Image
              src={item.icon}
              alt="Icon step"
              className="w-12 h-12 object-cover"
            />
            <div className="w-full flex flex-col gap-3">
              <h3 className="font-bold text-xl">
                {item.id}. {item.title}
              </h3>
              <p className="text-sm">{item.text}</p>
            </div>
          </div>
          <ArrowBigDown size={24} color="#0B1D51" />
        </div>
      ))}
    </section>
  );
};

export default HowFlowMobile;
