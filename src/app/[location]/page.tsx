import Image from "next/image";
import { notFound } from "next/navigation";

// Define valid locations as a constant array
const validLocations = ["lboro", "leicester", "notts"] as const;

// Define location names as a mapping
const locationNames: Record<typeof validLocations[number], string> = {
  lboro: "Loughborough",
  leicester: "Leicester",
  notts: "Nottingham",
};

// Define the type for the page parameters
type LocationPageProps = {
  params: {
    location: typeof validLocations[number];
  };
};

export default function LocationPage({ params }: LocationPageProps) {
  const { location } = params;

  // Validate the location parameter
  if (!validLocations.includes(location)) {
    notFound(); // Trigger a 404 page if the location is invalid
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
