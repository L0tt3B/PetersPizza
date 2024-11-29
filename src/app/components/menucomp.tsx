import Image from "next/image";

const MenuComponent = () => {
  return (
    <div className="w-full text-black py-4 px-8 text-center my-5">
      <div className="relative bg-white w-3/4 md:w-1/2 mx-auto shadow-lg py-10 px-12 rounded-lg">
        <h2 className="text-orange-600 text-2xl">WE LOVE PIZZA</h2>
        <h1 className="font-bold text-5xl">OUR MENU</h1>
        <p className="mt-4">
          All our ingredients are sourced from the finest local and international suppliers to create the freshest, high quality food.
        </p>
      
        <a href="" className="inline-block mt-5 text-orange-600 underline decoration-2">
        View Menu
        </a>
      </div>

    </div>
  );
};

export default MenuComponent;
