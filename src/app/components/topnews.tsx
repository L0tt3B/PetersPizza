const TopNews = () => {
  return (
    <div className="w-full text-black py-4 px-8 text-center my-5">
      <div className="relative bg-zinc-200 w-11/12 md:w-3/4 mx-auto shadow-lg py-8 px-6 rounded-lg">
        <h2 className="text-orange-600 text-2xl">NEW PIZZERIA</h2>
        <h1 className="font-bold text-3xl md:text-5xl my-4">NOTTINGHAM OPEN NOW</h1>
        <a
          href="https://www.google.com/maps?q=nottingham+pizzeria"
          className="font-bold inline-block text-orange-600 underline"
        >
          Get Directions
        </a>
        <div className="relative w-full h-64 md:h-96 mt-6">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/930VI-vuGzw"
            title="Nottingham Pizzeria Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TopNews;
