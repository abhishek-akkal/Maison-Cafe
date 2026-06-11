import { Link } from "react-router-dom";
import CakeH from "../../assets/Cake/CakeHeading.png";
import CakeContentCenter from "./CakeContentCenter";
import CakeContentMenu from "./CakeContentMenu";
import CakeContentTop from "./CakeContentTop";

const Cake = () => {
  const handleposition = () => {
    document.getElementById("top").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#EFC7D2] pb-20">
      {/* Hero Section */}
      <section className="relative h-64 sm:h-80 md:h-96 lg:h-120 overflow-hidden">
        <img
          src={CakeH}
          alt="Cake"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Mobile overlay for readability */}
        <div className="absolute inset-0 bg-black/30 lg:bg-transparent"></div>

        {/* Desktop content — right side */}
        <div className="hidden lg:flex relative z-10 h-full items-center justify-end">
          <div className="w-[45%] pr-24 flex flex-col gap-6">
            <span className="pinyon text-[#5A1E2A] font-semibold text-3xl relative bottom-2">
              Sweet Moments
            </span>
            <h1 className="text-6xl pinyon font-bold text-[#5A1E2A] leading-tight mt-3">
              Crafted With Love,
              <br />
              Baked To Perfection
            </h1>
            <p className="text-xl font-[Lora] text-[#82354c] mt-6 leading-8 max-w-lg">
              Indulge in our handcrafted cakes made with premium ingredients,
              rich flavors, and a touch of sweetness in every bite.
            </p>
            <div className="flex gap-5 mt-8">
              <button
                onClick={handleposition}
                className="px-8 py-3 rounded-xl bg-[#A64D79] text-white font-[Lora] font-bold cursor-pointer hover:scale-105 transition active:scale-95"
              >
                Explore Cakes
              </button>
              <Link
                to="/aboutus"
                className="px-8 py-3 rounded-xl border border-white text-white font-[Lora] font-bold hover:bg-white cursor-pointer hover:text-[#5A1E2A] transition active:scale-95"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile content — left side */}
        <div className="lg:hidden relative z-10 h-full flex items-center px-6">
          <div className="flex flex-col gap-4">
            <span className="pinyon text-white text-2xl">Sweet Moments</span>
            <h1 className="text-3xl sm:text-4xl pinyon font-bold text-white leading-tight">
              Crafted With Love,
              <br />
              Baked To Perfection
            </h1>
            <p className="text-sm sm:text-base font-[Lora] text-white/90 max-w-sm">
              Handcrafted cakes with premium ingredients and rich flavors.
            </p>
            <div className="flex gap-3 mt-2">
              <button
                onClick={handleposition}
                className="px-5 py-2 rounded-xl bg-[#A64D79] text-white font-[Lora] font-bold text-sm cursor-pointer active:scale-95"
              >
                Explore Cakes
              </button>
              <Link
                to="/aboutus"
                className="px-5 py-2 rounded-xl border border-white text-white font-[Lora] font-bold text-sm cursor-pointer active:scale-95"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div id="top">
        <CakeContentTop />
      </div>
      <CakeContentCenter />
      <CakeContentMenu />
    </div>
  );
};

export default Cake;
