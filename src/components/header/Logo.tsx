import { Star } from "lucide-react";

const Logo = () => {
  return (
    <picture className="flex flex-row gap-1 justify-center items-center">
      <h1 className="font-bold text-[#F26419] text-xl">BasketStats</h1>
      <Star size={24} color="#F26419" />
    </picture>
  );
};

export default Logo;
