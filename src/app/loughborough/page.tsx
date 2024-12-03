"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../components/navbar";
import SideNav from "../components/sidenav";
import PeterFooter from "../components/peterfooter";

export default function LoughboroughPage() {
  const [isSidenavOpen, setSidenavOpen] = useState(false);

  useEffect(() => {
    const resetScroll = () => {
      window.scrollTo(0, 0);
    };

    // Attach resetScroll to popstate and pushstate events for navigation
    window.addEventListener("popstate", resetScroll);
    window.addEventListener("pushstate", resetScroll);

    // Initial scroll reset on mount
    resetScroll();

    return () => {
      // Clean up the event listeners
      window.removeEventListener("popstate", resetScroll);
      window.removeEventListener("pushstate", resetScroll);
    };
  }, []);

  const toggleSidenav = () => {
    setSidenavOpen(!isSidenavOpen);
  };

  return (
    <div
      className={`bg-slate-100 flex flex-col min-h-screen overflow-y-auto transition-all ${
        isSidenavOpen ? "mr-52 duration-300" : "mr-0 duration-200"
      }`}
    >
      {/* SideNav */}
      <SideNav isOpen={isSidenavOpen} onClose={() => setSidenavOpen(false)} />

      {/* Navbar */}
      <header className="w-full z-50">
        <Navbar onToggleSidenav={toggleSidenav} />
      </header>

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
      <main className="flex-grow p-6 md:p-12">
        <section className="max-w-4xl mx-auto text-center flex flex-wrap md:flex-nowrap gap-4">
          {/* Text Section */}
          <div className="flex-1 p-6 rounded-xl bg-white text-gray-900">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              About Our Venue
            </h2>
            <p className="text-base mb-8">
              Loughborough is home to our very first PETER pizzeria, which
              opened in 2013. Originally the Crown & Cushion Public House, our
              venue is decorated in our signature style: relaxed and quirky in
              all the right places.
            </p>
            <p className="mb-8">
              We have space for groups of 1-100+ in our Loughborough pizzeria.
            </p>
            <a
              href="/bookings"
              className="inline-block px-6 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition"
            >
              Make a Booking
            </a>
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
