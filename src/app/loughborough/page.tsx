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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12..."
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
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
