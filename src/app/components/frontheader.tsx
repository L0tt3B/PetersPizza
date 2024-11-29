import Image from "next/image";

const FrontHeader = () => {
    return (
      <div className="w-full h-full text-white">
        {/* Video Background */}
        <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="/PETER-WEB-COVER-1.mp4" type="video/mp4"/>
        </video>
        <div className="relative z-10 bg-black/50 w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-center text-2xl font-bold justify-center my-10">PETER PIZZERIA</h1>
          <h3 className="text-center">Fresh Pizzerias. Serving up Neapolitan Pizza the Traditional Way. Curing the injured Name of Pizza of pizza since 2013.</h3>
          <div className="flex flex-wrap justify-center my-12">
              <button className="bg-white border-1 text-black border-black font-bold hover:bg-black hover:text-white mx-4 py-3 px-5 rounded-lg"><a href="https://www.peterpizzeria.co.uk/wp-content/uploads/2024/04/peter-menu-2024-1-4-1.pdf">VIEW MENU</a></button>
              <button className="bg-white border-1 text-black border-black font-bold hover:bg-black hover:text-white mx-4 py-3 px-5 rounded-lg"><a href="https://linktr.ee/peterpizzeria">Bookings</a></button>
              <button className="bg-white border-1 text-black border-black font-bold hover:bg-black hover:text-white mx-4 py-3 px-5 rounded-lg"><a href="https://www.peterpizzeria.co.uk/wp-content/uploads/2024/09/Peter-Christmas-Menu-2024-1.pdf">XMAS MENU</a></button>
          </div>
        </div>
      </div>
    );
  };
  
  export default FrontHeader;
  