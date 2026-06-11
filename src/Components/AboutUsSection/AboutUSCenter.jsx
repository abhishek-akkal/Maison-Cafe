import AboutUSC1 from "../../assets/AboutUS/AboutUsCenterImg1.png";
import AboutUSC2 from "../../assets/AboutUS/AboutUsCenterImg2.png";
import AboutUSC3 from "../../assets/AboutUS/AboutUsCenterImg3.png";
import AboutUSC4 from "../../assets/AboutUS/AboutUsCenterImg4.png";
import AboutUSC5 from "../../assets/AboutUS/AboutUsCenterImg5.png";
import { FaRegHeart } from "react-icons/fa6";

const AboutUSCenter = () => {
  return (
    <div className="pt-20 px-4">
      <div className="flex items-center justify-center gap-3">
        <div className="h-px w-10 bg-[#77a4ed]"></div>
        <div className="text-[#2D6CCF] text-xl font-[lora] font-semibold">
          OUR CAFÉ
        </div>
        <div className="h-px w-10 bg-[#77a4ed]"></div>
      </div>

      <div className="flex justify-center pt-1">
        <FaRegHeart className="text-[#1a5dc9]" />
      </div>

      {/* Desktop heading */}
      <div className="hidden lg:flex justify-center font-[lora] gap-2 text-5xl">
        <h2>A Cozy Place to</h2>
        <h2 className="text-[#1a5dc9] italic">Relax & Enjoy</h2>
      </div>

      {/* Mobile heading */}
      <div className="lg:hidden flex flex-col items-center font-[lora] text-2xl sm:text-3xl text-center pt-1">
        <h2>A Cozy Place to</h2>
        <h2 className="text-[#1a5dc9] italic">Relax & Enjoy</h2>
      </div>

      <div className="flex justify-center font-[lora] pt-3 gap-2 text-sm sm:text-base lg:text-xl text-center px-4">
        Step into Maison Café and enjoy good food, great coffee and warm
        conversations.
      </div>

      {/* Desktop gallery — original layout */}
      <div className="hidden lg:flex justify-center flex-wrap pt-10 gap-5">
        <div>
          <img
            src={AboutUSC1}
            alt="Cafe"
            className="h-115 w-200 object-cover rounded-xl shadow-lg shadow-gray-200 hover:shadow-gray-400 hover:scale-103 transition-all duration-300 cursor-pointer"
          />
        </div>
        <div>
          <div className="flex flex-wrap justify-around gap-5">
            <img
              src={AboutUSC2}
              alt="Cafe"
              className="h-50 w-70 object-cover rounded-xl shadow-lg shadow-gray-200 hover:shadow-gray-400 hover:scale-105 transition-all duration-300 cursor-pointer"
            />
            <img
              src={AboutUSC3}
              alt="Cafe"
              className="h-50 w-70 object-cover rounded-xl shadow-lg shadow-gray-200 hover:shadow-gray-400 hover:scale-105 transition-all duration-300 cursor-pointer"
            />
          </div>
          <div className="flex flex-wrap justify-around gap-5 pt-5">
            <img
              src={AboutUSC4}
              alt="Cafe"
              className="h-60 w-70 object-cover rounded-xl shadow-lg shadow-gray-200 hover:shadow-gray-400 hover:scale-105 transition-all duration-300 cursor-pointer"
            />
            <img
              src={AboutUSC5}
              alt="Cafe"
              className="h-60 w-70 object-cover rounded-xl shadow-lg shadow-gray-200 hover:shadow-gray-400 hover:scale-105 transition-all duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Mobile gallery — 2 column grid */}
      <div className="lg:hidden grid grid-cols-2 gap-3 pt-8">
        <img
          src={AboutUSC1}
          alt="Cafe"
          className="col-span-2 w-full h-48 sm:h-64 object-cover rounded-xl shadow-lg cursor-pointer"
        />
        <img
          src={AboutUSC2}
          alt="Cafe"
          className="w-full h-32 sm:h-40 object-cover rounded-xl shadow-lg cursor-pointer"
        />
        <img
          src={AboutUSC3}
          alt="Cafe"
          className="w-full h-32 sm:h-40 object-cover rounded-xl shadow-lg cursor-pointer"
        />
        <img
          src={AboutUSC4}
          alt="Cafe"
          className="w-full h-32 sm:h-40 object-cover rounded-xl shadow-lg cursor-pointer"
        />
        <img
          src={AboutUSC5}
          alt="Cafe"
          className="w-full h-32 sm:h-40 object-cover rounded-xl shadow-lg cursor-pointer"
        />
      </div>
    </div>
  );
};

export default AboutUSCenter;
