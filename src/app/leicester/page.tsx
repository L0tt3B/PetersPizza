"use client";
import Image from "next/image";

export default function LeicesterPage() {
  return (
    <div className="relative h-screen text-white">
      <Image
        src="/PetersPizza/background-venue-peter-pizzeria.jpg"
        alt="Leicester Venue"
        fill
        className="object-cover absolute z-0"
        priority
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50">
        <h1 className="text-4xl uppercase font-bold mb-6">Leicester</h1>
        <p className="text-lg">
          Welcome to our Leicester venue! Explore what we offer at this amazing location.
        </p>
      </div>
    </div>
  );
}
