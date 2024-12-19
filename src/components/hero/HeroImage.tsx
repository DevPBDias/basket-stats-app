import Image from "next/image";
import hero from "../../../public/images/hero.svg";

const HeroImage = () => {
  return (
    <picture className="w-full h-full">
      <Image
        src={hero}
        alt="Basketall court image"
        className="w-full h-full object-cover"
        priority
      />
    </picture>
  );
};

export default HeroImage;
