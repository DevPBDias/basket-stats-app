import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const MainHeader = () => {
  return (
    <main className="hidden lg:flex flex-row justify-between px-16 py-4">
      <Logo />
      <Navbar />
    </main>
  );
};

export default MainHeader;
