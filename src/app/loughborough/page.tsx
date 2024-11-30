"use client";
import Image from "next/image";

export default function LoughboroughPage() {
  return (
    <div className="relative h-screen text-white">
      <Image
        src="/background-venue-peter-pizzeria.jpg"
        alt="Loughborough Venue"
        fill
        className="object-cover absolute z-0"
        priority
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50">
        <h1 className="text-4xl uppercase font-bold mb-6">Loughborough</h1>
        <p className="text-lg">
          Welcome to our Loughborough venue! Explore what we offer at this amazing location.
        </p>
      </div>
    </div>
  );
}
