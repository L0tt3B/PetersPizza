import Image from "next/image";
import { notFound } from "next/navigation";

const validLocations = ["lboro", "leicester", "notts"];

const locationNames: Record<string, string> = {
    lboro: "Loughborough",
    leicester: "Leicester",
    notts: "Nottingham",
};

export default function LocationPage({ params }: { params: { location?: string } }) {
    // Safely extract location from params
    const location = params?.location;

    if (!location || !validLocations.includes(location)) {
        console.error("Invalid Location:", location); // Log invalid location access
        notFound(); // Trigger a 404 for invalid locations
        return null; // Ensure no further rendering
    }

    return (
        <div className="relative h-1/2 text-white">
            {/* Background Image */}
            <Image
                src="/background-venue-peter-pizzeria.jpg"
                alt={`${locationNames[location]} Venue`}
                fill
                className="object-cover absolute z-0"
            />

            {/* Overlay Content */}
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
