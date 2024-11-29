"use client"
import Image from "next/image";
import { usePathname } from "next/navigation";

const validLocations = {
  lboro: "Loughborough",
  leicester: "Leicester",
  notts: "Nottingham",
};

export default function LocationPage() {
  const pathname = usePathname(); // Get the current route path
  const location = pathname.split("/").pop(); // Extract the last part of the path

  if (!location || !(location in validLocations)) {
    return (
      <div className="relative h-screen flex items-center justify-center text-white bg-black">
        <h1 className="text-3xl font-bold">404 - Location Not Found</h1>
      </div>
    );
  }

  const locationName = validLocations[location as keyof typeof validLocations];

  return (
    <div className="relative h-screen text-white">
      <Image
        src="/background-venue-peter-pizzeria.jpg"
        alt={`${locationName} Venue`}
        fill
        className="object-cover absolute z-0"
        priority
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50">
        <h1 className="text-4xl uppercase font-bold mb-6">{locationName}</h1>
        <p className="text-lg">
          Welcome to our {locationName} venue! Explore what we offer at this
          amazing location.
        </p>
      </div>
    </div>
  );
}
