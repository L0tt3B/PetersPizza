const VenueComponent = () => {
  return (
    <div className="w-full text-black py-4 text-center my-5">
        <div className="h-fit py-20 w-full bg-black text-white mb-10">
            <h2 className="font-light text-4xl mb-4">VENUES</h2>
            <h1 className="font-bold text-5xl mx-4">LOUGHBOROUGH, LEICESTER & NOTTINGHAM</h1>
        </div>
        <div className="px-8 relative bg-white w-3/4 md:w-1/2 mx-auto shadow-lg py-10 px-12 rounded-lg">
            <h1 className="font-bold text-5xl">VENUES</h1>
            <p className="mt-4">
                We have pizzerias in Loughborough, Leicester (Nottingham Coming Soon) as well as our at home pizza kits.
            </p>
            <p className="mt-4">
                Looking to host a birthday, work event or even a wedding We have a variety of spaces available to book in both Loughborough and Leicester, perfect for that special occasion.
            </p>
            <a href="" className="inline-block mt-5 text-orange-600 underline decoration-2">
            View Venues
            </a>
        </div>
    </div>
  );
};

export default VenueComponent;
