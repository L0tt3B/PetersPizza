import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";


interface NavbarProps {
    onToggleSidenav: () => void;
    isSideNavOpen: boolean;
}


const Navbar: React.FC<NavbarProps> = ({onToggleSidenav, isSideNavOpen}) => {
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return() => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <div className={`fixed top-0 w-full py-4 px-8 transition duration-300 ${isScrolling ? "bg-white text-black shadow-md" : "bg-transparent text-white"}`}>
        <div className="flex justify-between">
          <div>
            <a className="text-black">
                <Image 
                    src="/PetersLogo.png"
                    alt="Peter Logo"
                    width={100}
                    height={50}/>
            </a>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-white rounded-lg text-black font-bold border-black border-2 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition duration-200"><a href="https://linktr.ee/peterpizzeria">Bookings</a></button>
        
                <button className="px-4 py-2 bg-white rounded-lg hover:bg-orange-600 text-black font-bold hover:text-white transition duration-200" onClick={onToggleSidenav}>
                    <FontAwesomeIcon icon={faBars}/>
                </button>
            
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  