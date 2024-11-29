import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Ensure the FontAwesome CSS is globally added if you're using `<i>` icons.
// If you're using `_document.tsx` in Next.js, include the FontAwesome link there.

const PeterFooter: React.FC = () => {
  return (
    <div className="w-full h-full bg-black text-white py-4">
      <div className="flex flex-wrap justify-between items-center px-8">
        {/* Me */}
        <div className="w-1/5 m-3">
          <p>Website developed by Charlotte Burns and designed by Panda Pixel.</p>
        </div>
        {/* Food */}
        <div className="w-fit m-3s">
          <h1>FOOD</h1>
          <ul>
            <li><a href="">Menu</a></li>
            <li><a href="">Deliveroo</a></li>
            <li><a href="">Just Eat</a></li>
            <li><a href="">Uber Eats</a></li>
          </ul>
        </div>
        {/* Venues */}
        <div className="w-fit m-3">
          <h1>VENUES</h1>
          <ul>
            <li><a href="">Loughborough</a></li>
            <li><a href="">Leicester</a></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div className="w-fit m-3">
          <h1>CONTACT INFO</h1>
          <ul>
            <li><a href="">Loughborough</a></li>
            <li><a href="">Leicester</a></li>
            <li><a href="">hello@peterpizzeria.co.uk</a></li>
          </ul>
        </div>
        {/* Locations */}
        <div className="w-fit m-3">
          <h1>LOCATIONS</h1>
          <ul>
            <li><a href="">17-18 Baxter Gate, Loughborough LE11 1TG</a></li>
            <li><a href="">9 Welford Place, Leicester LE16ZH</a></li>
            <li><a href="">Nottingham - Coming Soon!</a></li>
          </ul>
        </div>
      </div>
      {/* Socials */}
      <div className="flex justify-center align-center my-5">
        <a href="https://www.facebook.com/PeterPizzeria/" className="mx-3">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://x.com/peterpizzeria" className="mx-3">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com/peterpizzeria" className="mx-3">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://www.tripadvisor.co.uk/Restaurant_Review-g190776-d4419744-Reviews-Peter_Pizzeria-Loughborough_Leicestershire_England.html"
          className="mx-3"
        >
          <i className="fab fa-tripadvisor" aria-hidden="true"></i>
        </a>
      </div>
      <hr className="w-full" />
      <p className="p-8 justify-center text-center">Copyright Peter Pizzeria - Website developed by Charlotte Burns</p>
    </div>
  );
};

export default PeterFooter;
