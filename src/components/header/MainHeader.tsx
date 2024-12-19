import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const MainHeader = () => {
  return (
    <main className="hidden">
      <Logo />
      <Navbar />
    </main>
  );
};

export default MainHeader;
