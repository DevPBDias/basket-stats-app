import React from "react";
import FooterNavbar from "./FooterNavbar";
import LogoFooter from "./LogoFooter";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer
      className="bg-[#0B1D51] flex flex-col justify-center items-center px-4 py-6
     gap-12 w-full
     "
    >
      <section
        className="flex flex-col justify-center items-center px-4 py-6
     gap-12 w-full"
      >
        <LogoFooter />
        <FooterNavbar />
      </section>
      <Copyright />
    </footer>
  );
};

export default Footer;
