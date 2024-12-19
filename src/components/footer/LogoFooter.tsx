import React from "react";
import Logo from "../header/Logo";

const LogoFooter = () => {
  return (
    <section className="flex flex-col justify-center items-start gap-1 w-full">
      <Logo />
      <p className="text-sm">
        Estatísticas em tempo real, emoção em cada jogada!
      </p>
    </section>
  );
};

export default LogoFooter;
