import React from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavMenuProps {
    onClose: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ onClose }) => {
    return (
        <div
            className={`fixed top-0 pt-20 right-0 h-full transition-transform duration-200 ease-in-out translate-x-0 w-64 bg-black text-white shadow-xl z-40`}
        >
            <div className="top-0 mt-1 flex justify-between">
                <div>
                    <button
                        className="text-white hover:bg-gray-700 p-2 rounded-md items-center"
                        onClick={onClose}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} className="m-1 text-lg" />
                    </button>
                </div>
            </div>
            <div className="w-full pl-4">
                <ul>
                    <li className="p-2 font-light text-2xl font-bold hover:text-orange-500 duration-100">
                        OUR MENU
                    </li>
                    <li className="p-2 uppercase font-light text-2xl font-bold hover:text-orange-500 duration-100">
                        Xmas Menu
                    </li>
                    <li className="p-2 uppercase font-light text-2xl font-bold hover:text-orange-500 duration-100">
                        Autumn Menu
                    </li>
                    <li className="p-2 uppercase font-light text-2xl font-bold hover:text-orange-500 duration-100">
                        Allergens and Nutritional
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default NavMenu;
