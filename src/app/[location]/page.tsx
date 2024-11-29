import Image from "next/image";
import { notFound } from "next/navigation";

const validLocations: string[] = ["lboro", "leicester", "notts"];

type LocationParams = {
  params: {
    location: string;
  };
};

const locationNames: Record<string, string> = {
  lboro: "Loughborough",
  leicester: "Leicester",
  notts: "Nottingham",
};

export default async function LocationPage({ params }: LocationParams): Promise<JSX.Element | null> {
  const { location } = params;

  // Validate location and trigger 404 for invalid entries
  if (!validLocations.includes(location)) {
    console.error("Invalid Location:", location);
    notFound();
    return null;
  }

  return (
    <div className="relative h-1/2 text-white">
      <Image
        src="/background-venue-peter-pizzeria.jpg"
        alt={`${locationNames[location]} Venue`}
        fill
        className="object-cover absolute z-0"
        priority // Optimize loading
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50">
        <h1 className="text-4xl uppercase font-bold mb-6">
          {locationNames[location]}
        </h1>
        <p className="text-lg">
          Welcome to our {locationNames[location]} venue! Explore what we offer at this
          amazing location.
        </p>
      </div>
    </div>
  );
}
