import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface NavbarProps {
  onToggleSidenav: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidenav }) => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full py-3 px-4 transition duration-300 ${
        isScrolling ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="flex justify-between items-center">
        <Image src="/PetersPizza/PetersLogo.png" alt="Peter Logo" width={80} height={40} />
        <div className="hidden md:flex gap-4">
          <button className="px-4 py-2 bg-white text-black rounded hover:bg-orange-600 hover:text-white">
            <a href="https://linktr.ee/peterpizzeria">Bookings</a>
          </button>
        </div>
        <button className="md:hidden" onClick={onToggleSidenav}>
          <FontAwesomeIcon icon={faBars} className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
