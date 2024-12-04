"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import SideNav from "../components/sidenav";
import PeterFooter from "../components/peterfooter";

export default function LoughboroughPage() {
  const [isSidenavOpen, setSidenavOpen] = useState(false);

  useEffect(() => {
    // Ensure the scroll position resets when the page is loaded
    window.scrollTo(0, 0);

    // Ensure body overflow is correctly set
    document.body.style.overflowY = "auto";

    return () => {
      // Cleanup overflow style on unmount
      document.body.style.overflowY = "";
    };
  }, []);

  const toggleSidenav = () => {
    setSidenavOpen(!isSidenavOpen);
  };

  return (
    <div
      className={`flex flex-col min-h-screen transition-transform ${
        isSidenavOpen ? "translate-x-52" : "translate-x-0"
      }`}
    >
      {/* SideNav */}
      <SideNav isOpen={isSidenavOpen} onClose={() => setSidenavOpen(false)} />

      {/* Navbar */}
      <header className="w-full z-50">
        <Navbar onToggleSidenav={toggleSidenav} />
      </header>

      {/* Main Content */}
      <main className="flex-grow overflow-y-auto bg-slate-100">
        {/* Header Section */}
        <div className="relative w-full h-[50vh]">
          <Image
            src="/PetersPizza/background-venue-peter-pizzeria.jpg"
            alt="Loughborough Venue"
            layout="fill"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <h1 className="text-4xl md:text-6xl uppercase font-bold mb-4">
              Loughborough
            </h1>
            <p className="text-lg md:text-xl px-4 text-center">
              Welcome to our Loughborough venue! Explore what we offer at this
              amazing location.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto p-6 md:p-12">
          <div className="flex flex-wrap md:flex-nowrap gap-4">
            <div className="flex-1 bg-white p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">About Our Venue</h2>
              <p>
                Loughborough is home to our very first PETER pizzeria, which opened in 2013. Originally the Crown & Cushion Public House, our venue is decorated in our signature style: relaxed and quirky in all the right places.
              </p>
              <div className="mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.0775649530035!2d-1.20651!3d52.77272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48776418a3d36f47%3A0x1c16a875f3e81b82!2s17-18%20Baxter%20Gate%2C%20Loughborough%20LE11%201TG%2C%20UK!5e0!3m2!1sen!2suk!4v1691572673793!5m2!1sen!2suk"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div className="flex-1 flex flex-col gap-4 group">
              <div className="relative flex-grow w-full h-64 overflow-hidden rounded-lg">
                <div className="w-full h-full">
                  <Image
                    src="/PetersPizza/pizzapeter.jpg"
                    alt="Peter Pizza"
                    layout="fill"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              <div className="relative flex-grow w-full h-64 overflow-hidden rounded-lg">
                <div className="w-full h-full">
                  <Image
                    src="/PetersPizza/venue1.jpg"
                    alt="Venue"
                    layout="fill"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
              <div className="relative flex-grow w-full h-64 overflow-hidden rounded-lg">
                <div className="w-full h-full">
                  <Image
                    src="/PetersPizza/peter-pizzeria-front.jpg"
                    alt="Pizzeria Front"
                    layout="fill"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <PeterFooter />
      </footer>
    </div>
  );
}
