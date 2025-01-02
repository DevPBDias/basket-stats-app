import Image from "next/image";
import game_day from "../../../public/images/game.png";

const BackgroundImage = () => {
  return (
    <picture className="w-full h-full">
      <Image
        src={game_day}
        alt="Basketall court image"
        className="w-full h-full object-cover"
        priority
      />
    </picture>
  );
};

export default BackgroundImage;
