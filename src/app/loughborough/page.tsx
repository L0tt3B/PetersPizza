"use client";

import Image from "next/image";
import Navbar from "../components/navbar";
import PeterFooter from "../components/peterfooter";
import SideNav from "../components/sidenav";
import { useState } from "react";

export default function LoughboroughPage() {
  const [isSidenavOpen, setSidenavOpen] = useState(false);

  const toggleSidenav = () => {
    setSidenavOpen(!isSidenavOpen);
  };

  return (
    <div className={`bg-slate-100 flex flex-col min-h-screen transition-all duration-300 ${isSidenavOpen ? "mr-64" : "mr-0"}`}>
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
            Welcome to our Loughborough venue! Explore what we offer at this amazing location.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <main className="flex-grow p-6 md:p-12">
        <section className="max-w-4xl mx-auto text-center flex">
          {/* Text Section */}
          <div className="w-1/2 mx-4 p-6 rounded-xl bg-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">About Our Venue</h2>
            <p className="text-base mb-8">
                Loughborough is home to our very first PETER pizzeria, which opened in 2013. Originally the Crown & Cushion Public House, our newest venue is now located on Baxter Gate, decorated in our signature style: relaxed and quirky in all the right places. From cool upcycled furniture to the best pizza you’ll find outside of Italy, we’re truly individual.
            </p>
            <p className="mb-8">We have space for groups of 1-100+ in our Loughborough pizzeria.</p>
            <a
              href="/bookings"
              className="inline-block px-6 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition"
            >
              Make a Booking
            </a>
          </div>

          {/* Image Section */}
          <div className="flex flex-wrap w-1/2 mx-4 gap-4">
            <div className="group relative overflow-hidden">
              <Image
                src="/PetersPizza/pizzapeter.jpg"
                alt="Peter Pizza"
                width={150}
                height={100}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="group relative overflow-hidden">
              <Image
                src="/PetersPizza/venue1.jpg"
                alt="Venue"
                width={150}
                height={100}
                className="group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="group relative overflow-hidden">
              <Image
                src="/PetersPizza/peter-pizzeria-front.jpg"
                alt="Pizzeria Front"
                width={150}
                height={100}
                className="group-hover:scale-110 transition-transform duration-300"
              />
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
