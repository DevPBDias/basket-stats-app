"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import Navbar from "./Navbar";

const MobileHeader = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <main className="lg:hidden w-full">
      {open ? (
        <header className="flex flex-row justify-between items-center w-full px-4 py-2">
          <Logo />
          <button type="button" onClick={() => setOpen(!open)}>
            <Menu size={28} color="#F2F7F2" />
          </button>
        </header>
      ) : (
        <header className="flex flex-col justify-between items-center w-full gap-10 pb-6 bg-[#F2F7F2]">
          <nav className="flex flex-row justify-between items-center w-full px-4 py-2">
            <Logo />
            <button type="button" onClick={() => setOpen(!open)}>
              <X size={28} color="#0B1D51" />
            </button>
          </nav>
          <div onClick={() => setOpen(!open)}>
            <Navbar />
          </div>
        </header>
      )}
    </main>
  );
};

export default MobileHeader;
