import { navLinks } from "@/constants/navLinks";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-col gap-4 lg:flex-row justify-center items-center">
      {navLinks.map((link) => (
        <Link
          href={link.path}
          key={link.id}
          className="lg:text-[#F2F7F2] text-[#0B1D51] hover:font-bold hover:border-b-2 hover:border-b-[#F26419] focus:font-bold focus:border-b-2 focus:border-b-[#F26419]"
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
