import React from "react";
import FooterNavbar from "./FooterNavbar";
import LogoFooter from "./LogoFooter";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer
      className="bg-[#0B1D51] flex flex-col justify-center items-center px-4 py-6
     gap-12 w-full lg:px-16
     "
    >
      <section
        className="flex flex-col md:flex-row justify-center items-center px-4 py-6
     gap-12 lg:gap-4 w-full lg:justify-between"
      >
        <LogoFooter />
        <FooterNavbar />
      </section>
      <Copyright />
    </footer>
  );
};

export default Footer;
