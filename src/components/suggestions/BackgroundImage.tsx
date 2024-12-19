import Image from "next/image";
import bg_ball from "../../../public/images/bg_ball.svg";

const BackgroundImage = () => {
  return (
    <picture className="w-full h-full">
      <Image
        src={bg_ball}
        alt="Basketall image"
        className="w-full h-full object-cover"
        priority
      />
    </picture>
  );
};

export default BackgroundImage;
