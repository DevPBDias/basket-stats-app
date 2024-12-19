import MainHeader from "./MainHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <header className="absolute z-10 w-full">
      <MainHeader />
      <MobileHeader />
    </header>
  );
};

export default Header;
