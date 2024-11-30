import Image from "next/image";

const Deliveries = () => {
    return (
      <div className="w-full text-black py-4 px-8 justify-center text-center my-5">
        <h1 className="text-4xl font-bold mb-2">Order your next Pizza delivery</h1>
        <h2 className="text-2xl font-light mb-8">available with...</h2>
        <div className="flex flex-wrap justify-center justify-between mx-10">
            <a href="https://deliveroo.co.uk/brands/peters-pizzeria">
                <Image 
                    src="/PetersPizza/deliveroo.png"
                    alt="Peter Logo"
                    width={150}
                    height={100}/>
            </a>
            <a href="https://www.just-eat.co.uk/restaurants-peterpizzeria-loughborough-university">
                <Image 
                    src="/PetersPizza/JustEat.png"
                    alt="Peter Logo"
                    width={150}
                    height={100}/>
            </a>
            <a href="https://www.ubereats.com/gb/store/peter-pizzeria-loughborough/1qVcE1y3RWSDjnY0PdvPuA">
                <Image 
                    src="/PetersPizza/UberEats.png"
                    alt="Peter Logo"
                    width={150}
                    height={100}/>
            </a>
        </div>
      </div>
    );
  };
  
  export default Deliveries;
  