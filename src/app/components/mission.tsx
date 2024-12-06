import React, { useState } from "react";

const Mission = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full text-black py-4 px-4 md:px-8 text-center my-5">
      <h2 className="text-xl md:text-2xl font-semibold">OUR MISSION</h2>
      <h1 className="text-2xl md:text-4xl font-bold mt-2">TO CURE THE INJURED NAME OF PIZZA</h1>
      <h4 className="text-md md:text-lg mt-1">Founded in 2013</h4>

      <div className="relative bg-white w-full sm:w-3/4 md:w-1/2 mx-auto shadow-lg py-6 px-6 md:py-10 md:px-12 rounded-lg">
        <h2 className="text-orange-600 text-lg md:text-2xl">ALL ABOUT</h2>
        <h1 className="font-bold text-3xl md:text-5xl mt-2">PETER</h1>

        <div className={`mt-4 text-sm md:text-base ${isExpanded ? "" : "line-clamp-5"}`}>
          <p>
            Peter is a group of independently run Italian pizzerias, founded in
            2013 with only one mission: to cure the injured name of pizza.
          </p>
          <p className="mt-2">
            Our pizza is authentic, traditional, Neapolitan pizza. It’s our hero.
            We make every pizza with the same care, love and attention that
            Raffaele Esposito would have shown back in the 19th century when
            making the now famous Queen Margherita.
          </p>
          <p className="mt-2">
            Our dough is made fresh on site every day using the finest Le 5
            Stagioni ’00’ flour (which dates back to 1831!) and left to ferment
            for over 24 hours. All of our ingredients are either sourced from
            Italy, or locally to our Pizzerias.
          </p>
          <p className="mt-2">
            But we aren’t just known for our pizza. Our restaurant decor is fun,
            modern and quirky, with eye-catching artwork, exposed brick work and
            upcycled furniture – somewhere you won’t forget in a hurry.
          </p>
          <p className="mt-2">
            You’d be mad not to come and try ‘the worst pizza some guy on
            TripAdvisor ever had’ (yes, really).
          </p>
        </div>

        <button
          onClick={toggleExpanded}
          className="mt-4 text-orange-600 underline decoration-2 text-sm md:text-base"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default Mission;
