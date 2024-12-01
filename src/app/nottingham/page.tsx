"use client";

import Image from "next/image";
import Navbar from "../components/navbar";
import PeterFooter from "../components/peterfooter";
import SideNav from "../components/sidenav";
import { useState } from "react";

export default function NottinghamPage() {
  const [isSidenavOpen, setSidenavOpen] = useState(false);

  const toggleSidenav = () => {
    setSidenavOpen(!isSidenavOpen);
  };

  return (
    <div className={`bg-slate-100 flex flex-col min-h-screen transition-all ${isSidenavOpen ? "mr-52 duration-300" : "mr-0 duration-200"}`}>
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
          alt="Nottingham Venue"
          layout="fill"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl uppercase font-bold mb-4">Nottingham</h1>
          <p className="text-lg md:text-xl px-4 text-center">
            Welcome to our Nottingham venue! Explore what we offer at this amazing location.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <main className="flex-grow p-6 md:p-12">
        <section className="max-w-4xl mx-auto text-center flex flex-wrap md:flex-nowrap gap-4">
          {/* Text Section */}
          <div className="flex-1 p-6 rounded-xl bg-white text-gray-900">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">About Our Venue</h2>
            <p className="text-base mb-8">
              Our newest pizzeria is based in Nottingham city centre.
            </p>
            <p className="mb-8">We have space for groups of 1-100+ in our Nottingham pizzeria.</p>
            <a
              href="/bookings"
              className="inline-block px-6 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition"
            >
              Make a Booking
            </a>

            {/* Google Map */}
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.0775649530035!2d-1.20651!3d52.77272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48776418a3d36f47%3A0x1c16a875f3e81b82!2s17-18%20Baxter%20Gate%2C%20Loughborough%20LE11%201TG%2C%20UK!5e0!3m2!1sen!2suk!4v1691572673793!5m2!1sen!2suk"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="relative flex-grow w-full h-full">
              <Image
                src="/PetersPizza/peter-pizzeria-nottingham.jpg"
                alt="Peter Pizza"
                layout="fill"
                className="object-contain"
              />
            </div>
            <div className="relative flex-grow w-full h-full">
              <Image
                src="/PetersPizza/peter-pizzeria-nottingham2.jpg"
                alt="Venue"
                layout="fill"
                className="object-contain"
              />
            </div>
            <div className="relative flex-grow w-full h-full">
              <Image
                src="/PetersPizza/peter-pizzeria-nottingham3.jpg"
                alt="Pizzeria Front"
                layout="fill"
                className="object-contain"
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
