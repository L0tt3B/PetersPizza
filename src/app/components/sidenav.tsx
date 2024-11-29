import { faBars, faChevronRight, faPenToSquare, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import NavMenu from './navMenu';
import NavVenues from './navVenues';
import NavAbout from './navAbout';

interface SidenavProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideNav: React.FC<SidenavProps> = ({isOpen, onClose}) => {
    const [isNavMenuOpen, setNavMenuOpen] = useState(false);
    const [isNavVenuesOpen, setNavVenuesOpen] = useState(false);
    const [isNavAboutOpen, setNavAboutOpen] = useState(false);

    const handleMenuClick = () => {
        setNavMenuOpen(true);
    };

    const handleVenueClick = () => {
        setNavVenuesOpen(true);
    };

    const handleAboutClick = () => {
        setNavAboutOpen(true);
    };
    
    return (
        <>
        <div className={`fixed top-0 pt-6 right-0 h-full transition-transform duration-200 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} w-64 bg-black text-white shadow-xl z-30`}>
            <div className='top-0 mt-1 flex justify-between'>
                <div>
                    <button className="text-black hover:bg-gray-200 p-2 rounded-md items-center">
                        <FontAwesomeIcon icon={faBars} className="m-1 text-lg" onClick={onClose}/>
                    </button>
                </div>
            </div>
            <div className='mt-4 w-full pl-4'>
                <ul className=''>
                    <li className='p-2 font-light text-2xl font-bold hover:text-orange-500 duration-100'>Home</li>
                    <div className='flex justify-between hover:text-orange-500 duration-100' onClick={handleVenueClick}>
                        <li className='p-2 font-light text-2xl font-bold'>Venues</li>
                        <FontAwesomeIcon className='p-4' icon={faChevronRight}/>
                    </div>
                    <div className='flex justify-between hover:text-orange-500 duration-100' onClick={handleMenuClick}>
                       <li className='p-2 font-light text-2xl font-bold'>Menu</li>
                       <FontAwesomeIcon className='p-4' icon={faChevronRight}/>
                    </div>
                    <div className='flex justify-between hover:text-orange-500 duration-100' onClick={handleAboutClick}>
                        <li className='p-2 font-light text-2xl font-bold'>About</li>
                        <FontAwesomeIcon className='p-4' icon={faChevronRight}/>
                    </div>
                    <li className='p-2 font-light text-2xl font-bold hover:text-orange-500 duration-100'>Contact Us</li>
                </ul>
            </div>
        </div>
        {isNavMenuOpen && <NavMenu onClose={() => setNavMenuOpen(false)}/>}
        {isNavVenuesOpen && <NavVenues onClose={() => setNavVenuesOpen(false)}/>}
        {isNavAboutOpen && <NavAbout onClose={() => setNavAboutOpen(false)}/>}
        </>
    );
};

export default SideNav;
