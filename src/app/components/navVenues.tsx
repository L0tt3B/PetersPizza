"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavMenuProps {
  onClose: () => void;
}

const NavVenues: React.FC<NavMenuProps> = ({ onClose }) => {
  const router = useRouter();

  const locations = [
    { name: "Loughborough", path: "/loughborough" },
    { name: "Leicester", path: "/leicester" },
    { name: "Nottingham", path: "/nottingham" },
  ];

  const handleLocationClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="w-full">
      <div
        className="flex items-center hover:text-orange-500 cursor-pointer"
        onClick={onClose}
      >
        <FontAwesomeIcon icon={faChevronLeft} className="p-4" />
        <span className="text-xl">Back</span>
      </div>
      <ul>
        {locations.map((location) => (
          <li
            key={location.name}
            onClick={() => handleLocationClick(location.path)}
            className="p-2 uppercase font-light text-2xl font-bold hover:text-orange-500 cursor-pointer"
          >
            {location.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavVenues;