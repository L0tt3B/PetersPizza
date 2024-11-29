import Image from "next/image";

const Mission = () => {
  return (
    <div className="w-full text-black py-4 px-8 text-center my-5">
      <h2>OUR MISSION</h2>
      <h1>TO CURE THE INJURED NAME OF PIZZA</h1>
      <h4>Founded in 2013</h4>

      <div className="relative bg-white w-3/4 md:w-1/2 mx-auto shadow-lg py-10 px-12 rounded-lg">
        <h2 className="text-orange-600 text-2xl">ALL ABOUT</h2>
        <h1 className="font-bold text-5xl">PETER</h1>
        <p className="mt-4">
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
        <a href="" className="inline-block mt-5 text-orange-600 underline decoration-2">
        Learn More
        </a>
      </div>

    </div>
  );
};

export default Mission;
