import { Link } from "react-router-dom";
import CoffeeH from "../../assets/Coffee/CoffeeHeading.png";
import CoffeeMenu from "./CoffeeMenu";
import CoffeeSection1 from "./CoffeeSection1";

const Coffee = () => {
  const handleposition = () => {
    document.getElementById("section1").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#f0f0f0] pb-20">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-120 overflow-hidden">
        <img
          src={CoffeeH}
          alt="Coffee"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 lg:bg-transparent"></div>

        <div className="relative z-10 h-full flex items-center px-6 sm:px-10 lg:pl-24">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mt-4">
              Crafted for
              <br />
              <span className="text-[#e3c49c]">Coffee Lovers</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-[#e3c49c] font-serif mt-4 lg:mt-6 max-w-xl leading-relaxed">
              From classic brews to modern favorites, we have a coffee for every
              mood and every moment.
            </p>

            <div className="flex gap-3 lg:gap-5 mt-6 lg:mt-8">
              <button
                onClick={handleposition}
                className="px-5 py-2 lg:px-8 lg:py-3 bg-[#e6b36a] text-black rounded-xl cursor-pointer font-[lora] font-semibold text-sm lg:text-base hover:scale-105 active:scale-95 transition"
              >
                Explore Menu
              </button>

              <Link
                to="/aboutus"
                className="px-5 py-2 lg:px-8 lg:py-3 border border-white text-white font-[lora] font-semibold rounded-xl text-sm lg:text-base hover:bg-white cursor-pointer hover:text-black active:scale-95 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>

            <div className="flex gap-8 lg:gap-12 mt-8 lg:mt-10">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  50+
                </h3>
                <p className="text-[#e3c49c] text-xs lg:text-sm font-serif">
                  Coffee Varieties
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  25K+
                </h3>
                <p className="text-[#e3c49c] text-xs lg:text-sm font-serif">
                  Happy Customers
                </p>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white">
                  10+
                </h3>
                <p className="text-[#e3c49c] text-xs lg:text-sm font-serif">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="section1">
        <CoffeeSection1 />
      </div>
      <CoffeeMenu />
    </div>
  );
};

export default Coffee;
