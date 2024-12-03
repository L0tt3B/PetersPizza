"use client";
import React from "react";
import Link from "next/link";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavMenuProps {
  onClose: () => void;
}

const NavVenues: React.FC<NavMenuProps> = ({ onClose }) => {
  const locations = [
    { name: "Loughborough", path: "/loughborough" },
    { name: "Leicester", path: "/leicester" },
    { name: "Nottingham", path: "/nottingham" },
  ];

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
          <li key={location.name} className="p-2 uppercase font-light text-2xl font-bold hover:text-orange-500">
            <Link href={location.path}>
              <a className="cursor-pointer">{location.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavVenues;
