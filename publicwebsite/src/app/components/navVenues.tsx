import React from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

interface NavMenuProps {
    onClose: () => void;
}

const NavVenues: React.FC<NavMenuProps> = ({ onClose }) => {
    const router = useRouter();

    const handleLocationClick = (location: string) => {
        console.log("Navigating to:", location); // Debugging
        router.push(`/${location}`);
    };

    return (
        <div
            className={`fixed top-0 pt-20 right-0 h-full transition-transform duration-200 ease-in-out translate-x-0 w-64 bg-black text-white shadow-xl z-40`}
        >
            <div className="top-0 mt-1 flex justify-between">
                <div className="flex hover:text-orange-500">
                    <button
                        className="text-white hover:text-orange-500 p-2 pl-4 rounded-md items-center"
                        onClick={onClose}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} className="m-1 text-lg" />
                    </button>
                    <p className="pt-3 uppercase font-light text-sm">Back</p>
                </div>
            </div>
            <div className="w-full pl-4">
                <ul>
                    <li
                        className="p-2 uppercase font-light text-2xl font-bold hover:text-orange-500 duration-100 cursor-pointer"
                        onClick={() => handleLocationClick("lboro")}
                    >
                        LOUGHBOROUGH
                    </li>
                    <li
                        className="p-2 uppercase font-light text-2xl font-bold hover:text-orange-500 duration-100 cursor-pointer"
                        onClick={() => handleLocationClick("leicester")}
                    >
                        LEICESTER
                    </li>
                    <li
                        className="p-2 uppercase font-light text-2xl font-bold hover:text-orange-500 duration-100 cursor-pointer"
                        onClick={() => handleLocationClick("notts")}
                    >
                        NOTTINGHAM
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavVenues;
