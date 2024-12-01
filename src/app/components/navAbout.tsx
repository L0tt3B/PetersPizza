import React from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavAbout: React.FC<{ onClose: () => void }> = ({ onClose }) => {
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
                <li className="p-2 uppercase font-light text-2xl font-bold hover:text-orange-500">
                    Story
                </li>
                <li className="p-2 uppercase font-light text-2xl font-bold hover:text-orange-500">
                    Pizza Parties
                </li>
                <li className="p-2 uppercase font-light text-2xl font-bold hover:text-orange-500">
                    Events
                </li>
                <li className="p-2 uppercase font-light text-2xl font-bold hover:text-orange-500">
                    Gallery
                </li>
            </ul>
        </div>
    );
};

export default NavAbout;
