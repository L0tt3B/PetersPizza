const FrontHeader = () => {
  return (
    <div className="w-full h-full text-white relative">
      <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="/PetersPizza/PETER-WEB-COVER-1.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 bg-black/50 w-full h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-5xl font-bold my-5">PETER PIZZERIA</h1>
        <h3 className="text-sm md:text-lg px-4">
          Fresh Pizzerias. Serving up Neapolitan Pizza the Traditional Way.
        </h3>
        <div className="flex flex-wrap justify-center mt-6">
          <button className="mx-2 my-2 bg-white border text-black font-bold hover:bg-black hover:text-white px-4 py-2 rounded">
            <a href="https://www.peterpizzeria.co.uk/wp-content/uploads/2024/04/peter-menu-2024-1-4-1.pdf">VIEW MENU</a>
          </button>
          <button className="mx-2 my-2 bg-white border text-black font-bold hover:bg-black hover:text-white px-4 py-2 rounded">
            <a href="https://linktr.ee/peterpizzeria">BOOKINGS</a>
          </button>
          <button className="mx-2 my-2 bg-white border text-black font-bold hover:bg-black hover:text-white px-4 py-2 rounded">
            <a href="https://www.peterpizzeria.co.uk/wp-content/uploads/2024/09/Peter-Christmas-Menu-2024-1.pdf">XMAS MENU</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrontHeader;
