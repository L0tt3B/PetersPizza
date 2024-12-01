import { useState, useEffect } from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavMenu from "./navMenu";
import NavVenues from "./navVenues";
import NavAbout from "./navAbout";

interface SidenavProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideNav: React.FC<SidenavProps> = ({ isOpen }) => {
    const [activeComponent, setActiveComponent] = useState<"main" | "menu" | "venues" | "about">(
        "main"
    );
    const [isAnimating, setAnimating] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            setActiveComponent("main");
            setAnimating(false);
        }
    }, [isOpen]);

    const handleItemClick = (component: "main" | "menu" | "venues" | "about") => {
        setAnimating(true);
        setTimeout(() => {
            setActiveComponent(component);
        }, 150);

        setTimeout(() => {
            setAnimating(false);
        }, 150); // Match animation duration
    };

    return (
        <div
            className={`fixed pt-20 top-0 right-0 h-full w-64 bg-black text-white shadow-xl z-30
                transition-transform duration-300 ease-in-out 
                ${isOpen ? "translate-x-0 overflow-hidden" : "translate-x-full"}`}
        >
            <div className="mt-4 w-full pl-4 relative h-full">
                {/* Main Menu */}
                <ul
                    className={`absolute transition-all duration-300 ease-in-out transform ${
                        activeComponent === "main" && !isAnimating
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-full opacity-0"
                    }`}
                >
                    <li className="p-2 font-light text-2xl font-bold hover:text-orange-500 duration-100">
                        Home
                    </li>
                    <div
                        className="flex justify-between hover:text-orange-500 duration-100"
                        onClick={() => handleItemClick("venues")}
                    >
                        <li className="p-2 font-light text-2xl font-bold">Venues</li>
                        <FontAwesomeIcon className="p-4 mr-4" icon={faChevronRight} />
                    </div>
                    <div
                        className="flex justify-between hover:text-orange-500 duration-100"
                        onClick={() => handleItemClick("menu")}
                    >
                        <li className="p-2 font-light text-2xl font-bold">Menu</li>
                        <FontAwesomeIcon className="p-4 mr-4" icon={faChevronRight} />
                    </div>
                    <div
                        className="flex justify-between hover:text-orange-500 duration-100"
                        onClick={() => handleItemClick("about")}
                    >
                        <li className="p-2 font-light text-2xl font-bold">About</li>
                        <FontAwesomeIcon className="p-4 mr-4" icon={faChevronRight} />
                    </div>
                    <li className="p-2 font-light text-2xl font-bold hover:text-orange-500 duration-100">
                        Contact Us
                    </li>
                </ul>

                {/* Subcomponents */}
                <div
                    className={`absolute transition-all duration-300 ease-in-out transform ${
                        activeComponent === "venues" && !isAnimating
                            ? "translate-x-0 opacity-100"
                            : "translate-x-full opacity-0"
                    }`}
                >
                    {activeComponent === "venues" && (
                        <NavVenues onClose={() => handleItemClick("main")} />
                    )}
                </div>

                <div
                    className={`absolute transition-all duration-300 ease-in-out transform ${
                        activeComponent === "menu" && !isAnimating
                            ? "translate-x-0 opacity-100"
                            : "translate-x-full opacity-0"
                    }`}
                >
                    {activeComponent === "menu" && (
                        <NavMenu onClose={() => handleItemClick("main")} />
                    )}
                </div>

                <div
                    className={`absolute transition-all duration-300 ease-in-out transform ${
                        activeComponent === "about" && !isAnimating
                            ? "translate-x-0 opacity-100"
                            : "translate-x-full opacity-0"
                    }`}
                >
                    {activeComponent === "about" && (
                        <NavAbout onClose={() => handleItemClick("main")} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default SideNav;
