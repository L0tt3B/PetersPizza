"use client";
import FrontHeader from "./components/frontheader";
import Navbar from "./components/navbar";
import PeterFooter from "./components/peterfooter";
import Deliveries from "./components/deliveries";
import MenuComponent from "./components/menucomp";
import Mission from "./components/mission";
import TopNews from "./components/topnews";
import VenueComponent from "./components/venuecomp";
import SideNav from "./components/sidenav";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from "react";

export default function Home() {
  const [isSidenavOpen, setSidenavOpen] = useState(false);

  const toggleSidenav = () => {
    setSidenavOpen(!isSidenavOpen);
    document.body.style.overflow = !isSidenavOpen ? "hidden" : "auto";
  };

  return (
    <div className={`flex flex-col min-h-screen transition-all ${isSidenavOpen ? "mr-52 duration-300" : "mr-0 duration-200"}`}>
      {isSidenavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300"
          onClick={() => setSidenavOpen(false)}
        ></div>
      )}
      <SideNav isOpen={isSidenavOpen} onClose={() => setSidenavOpen(false)} />
      <header className="fixed top-0 left-0 w-full z-50">
        <Navbar onToggleSidenav={toggleSidenav} />
      </header>
      <main className="w-full flex-grow bg-slate-100 font-[family-name:var(--font-geist-sans)]">
        <div className="h-screen relative">
          <FrontHeader />
        </div>
        <TopNews />
        <Mission />
        <MenuComponent />
        <VenueComponent />
        <Deliveries />
      </main>
      <footer className="mt-auto w-full">
        <PeterFooter />
      </footer>
    </div>
  );
}
