"use client";

import Image from "next/image";
import Navbar from "../components/navbar";
import PeterFooter from "../components/peterfooter";
import SideNav from "../components/sidenav";
import { useState } from "react";

export default function LeicesterPage() {
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
          alt="Loughborough Venue"
          layout="fill"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl md:text-6xl uppercase font-bold mb-4">Leicester</h1>
          <p className="text-lg md:text-xl px-4 text-center">
            Welcome to our Leicester venue! Explore what we offer at this amazing location.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <main className="flex-grow p-6 md:p-12">
        <section className="max-w-4xl mx-auto text-center flex flex-wrap md:flex-nowrap">
          {/* Text Section */}
          <div className="w-full md:w-1/2 mx-4 p-6 rounded-xl bg-white text-gray-900">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">About Our Venue</h2>
            <p className="text-base mb-8">
              Our Leicester pizzeria is a Grade II listed building in the city centre – a real piece of Leicester history. We have plenty of space for private events up to 250+ people.
            </p>
            <p className="mb-8">
              Formerly a gentleman’s club, keep your eye out for an array of original features (but don’t look away from your pizza for too long, they have feelings you know!) Devour your pizza and relax with friends in a homely & friendly environment.
            </p>
            <a
              href="/bookings"
              className="inline-block px-6 py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition"
            >
              Make a Booking
            </a>

            {/* Google Map */}
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.510282989486!2d-1.133953!3d52.631907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487761203878e491%3A0x37792d694c445065!2s9%20Welford%20Pl%2C%20Leicester%20LE1%206ZH%2C%20UK!5e0!3m2!1sen!2suk!4v1691572673793!5m2!1sen!2suk"
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
          <div className="flex flex-wrap w-full md:w-1/2 mx-4 gap-4">
            <div className="group relative overflow-hidden flex-1">
              <Image
                src="/PetersPizza/venue2.jpg"
                alt="Peter Pizza"
                layout="responsive"
                width={400}
                height={300}
                className="group-hover:scale-110 transition-transform duration-300 object-cover"
              />
            </div>
            <div className="group relative overflow-hidden flex-1">
              <Image
                src="/PetersPizza/food3.jpg"
                alt="Venue"
                layout="responsive"
                width={400}
                height={300}
                className="group-hover:scale-110 transition-transform duration-300 object-cover"
              />
            </div>
            <div className="group relative overflow-hidden flex-1">
              <Image
                src="/PetersPizza/banner-divider.jpg"
                alt="Pizzeria Front"
                layout="responsive"
                width={400}
                height={300}
                className="group-hover:scale-110 transition-transform duration-300 object-cover"
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
