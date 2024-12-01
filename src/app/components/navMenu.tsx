import React from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
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
                    Xmas Menu
                </li>
                <li className="p-2 uppercase font-light text-2xl font-bold hover:text-orange-500">
                    Autumn Menu
                </li>
                <li className="p-2 uppercase font-light text-2xl font-bold hover:text-orange-500">
                    Allergens and Nutrition
                </li>
            </ul>
        </div>
    );
};

export default NavMenu;
