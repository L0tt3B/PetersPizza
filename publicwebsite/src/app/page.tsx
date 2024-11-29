"use client"
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
import React, {useState} from "react";


export default function Home() {
  const [isSidenavOpen, setSidenavOpen] = useState(false);

  const toggleSidenav = () => {
    setSidenavOpen(!isSidenavOpen);
  };

  return (
    <div className={`flex flex-col min-h-screen flex-grow transition-all duration-300 ${isSidenavOpen ? "mr-64" : "mr-0"}`}>
      <SideNav isOpen={isSidenavOpen} onClose={() => setSidenavOpen(false)} />
      <header className="fixed top-0 left-0 w-full z-50">
        <Navbar onToggleSidenav={toggleSidenav} isSideNavOpen={isSidenavOpen}/>
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

      {/* Footer */}
      <footer className="mt-auto w-full h-fit">
        <PeterFooter />
      </footer>
    </div>
  );
}
