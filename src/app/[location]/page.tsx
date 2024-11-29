import Image from "next/image";
import { notFound } from "next/navigation";

const validLocations = ["lboro", "leicester", "notts"] as const;

const locationNames: Record<typeof validLocations[number], string> = {
  lboro: "Loughborough",
  leicester: "Leicester",
  notts: "Nottingham",
};

// Generate static params for export
export function generateStaticParams() {
  return validLocations.map((location) => ({ location }));
}

export default function LocationPage({ params }: { params: { location: string } }) {
  const location = params.location as typeof validLocations[number];

  // Ensure the location is valid
  if (!validLocations.includes(location)) {
    notFound();
  }

  return (
    <div className="relative h-screen text-white">
      <Image
        src="/background-venue-peter-pizzeria.jpg"
        alt={`${locationNames[location]} Venue`}
        fill
        className="object-cover absolute z-0"
        priority
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50">
        <h1 className="text-4xl uppercase font-bold mb-6">
          {locationNames[location]}
        </h1>
        <p className="text-lg">
          Welcome to our {locationNames[location]} venue! Explore what we offer at
          this amazing location.
        </p>
      </div>
    </div>
  );
}
