import { Link } from "react-router-dom";
import iceCreamH from "../../assets/IceCream/IceCreamHeading.png";
import IceCreamContentCenter from "./IceCreamContentCenter";
import IceCreamContentTop from "./IceCreamContentTop";
import IceCreamMenu from "./IceCreamMenu";

const IceCream = () => {
  const handleposition = () => {
    document.getElementById("top").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#E6F1FB] pb-20">
      {/* Hero */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-120 overflow-hidden">
        <img
          src={iceCreamH}
          alt="Ice Cream"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 lg:bg-transparent"></div>

        {/* Desktop content */}
        <div className="hidden lg:flex relative z-10 h-full items-center">
          <div className="ml-40 max-w-xl">
            <h4 className="text-[#2D7FEA] italic font-serif font-semibold text-lg mb-4">
              ❄ Frozen Delights Await
            </h4>
            <h1 className="text-7xl font-serif italic font-bold leading-tight text-[#4B240F]">
              Scoops of
              <br />
              <span className="text-[#2D7FEA]">Happiness!</span>
            </h1>
            <p className="mt-8 text-xl text-[#4B240F] font-[lora] italic leading-relaxed">
              Creamy, dreamy and made with love.
              <br />
              Discover our delicious ice creams crafted
              <br />
              with the finest ingredients.
            </p>
            <div className="flex gap-5 mt-10">
              <button
                onClick={handleposition}
                className="px-8 py-4 font-[lora] rounded-full bg-[#2D7FEA] text-white font-semibold hover:bg-[#1f6ed4] transition-all duration-300 cursor-pointer active:scale-95"
              >
                Explore Flavors
              </button>
              <Link
                to="/aboutus"
                className="px-8 py-4 rounded-full font-[lora] border-2 border-[#2D7FEA] text-[#2D7FEA] font-semibold hover:bg-[#2D7FEA] hover:text-white transition-all duration-300 cursor-pointer active:scale-95"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile content */}
        <div className="lg:hidden relative z-10 h-full flex items-center px-6">
          <div className="flex flex-col gap-4">
            <h4 className="text-white italic font-serif font-semibold text-sm">
              ❄ Frozen Delights Await
            </h4>
            <h1 className="text-3xl sm:text-4xl font-serif italic font-bold leading-tight text-white">
              Scoops of
              <br />
              <span className="text-[#2D7FEA]">Happiness!</span>
            </h1>
            <p className="text-sm sm:text-base text-white/90 font-[lora] italic">
              Creamy, dreamy and made with love.
            </p>
            <div className="flex gap-3 mt-2">
              <button
                onClick={handleposition}
                className="px-5 py-2 font-[lora] rounded-full bg-[#2D7FEA] text-white font-semibold text-sm cursor-pointer active:scale-95"
              >
                Explore Flavors
              </button>
              <Link
                to="/aboutus"
                className="px-5 py-2 rounded-full font-[lora] border-2 border-white text-white font-semibold text-sm cursor-pointer active:scale-95"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div id="top">
        <IceCreamContentTop />
      </div>
      <IceCreamContentCenter />
      <IceCreamMenu />
    </div>
  );
};

export default IceCream;
