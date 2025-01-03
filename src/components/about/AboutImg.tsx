import Image from "next/image";
import about from "../../../public/images/about.svg";

const AboutImage = () => {
  return (
    <picture className="w-full h-full lg:w-1/2">
      <Image
        src={about}
        alt="Basketall court image"
        className="w-full h-full object-cover"
        priority
      />
    </picture>
  );
};

export default AboutImage;
