import { Link } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const HeroSection = ({ hero, nextSlid, preSlid }) => {
  return (
    <div
      className="h-64 sm:h-80 md:h-96 lg:h-120 bg-no-repeat bg-center md:bg-right bg-cover relative"
      style={{
        backgroundImage: `url(${hero.image})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-10 md:pl-20 lg:pl-35 gap-4 md:gap-8">
        <div className="text-sm sm:text-lg md:text-2xl text-[#e3c49c] font-[lora] italic">
          {hero.shorttitle}
        </div>

        <div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif italic leading-tight">
            {hero.title}
          </h1>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#e3c49c] font-serif italic leading-tight">
            {hero.titletwo}
          </h1>
        </div>

        <div className="font-[lora] hidden sm:block">
          <p className="text-[#F5E6D3] text-sm md:text-xl">{hero.desc}</p>
          <p className="text-[#F5E6D3] text-sm md:text-xl">{hero.desctwo}</p>
        </div>

        <div className="flex items-center gap-3 md:gap-5">
          <Link
            to={hero.link}
            className="h-10 w-32 md:h-12 md:w-40 bg-[#efb973] flex items-center justify-center rounded-xl text-sm md:text-lg font-semibold cursor-pointer active:scale-95 hover:scale-105 transition-all duration-300"
          >
            {hero.btn}
          </Link>
          <Link
            to="/aboutus"
            className="h-10 w-32 md:h-12 md:w-40 border border-white text-white flex items-center justify-center rounded-xl text-sm md:text-lg font-semibold hover:bg-white cursor-pointer hover:text-black active:scale-95 hover:scale-105 transition-all duration-300"
          >
            {hero.btntwo}
          </Link>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={preSlid}
        className="absolute z-10 left-3 md:left-8 top-1/2 -translate-y-1/2 h-9 w-9 md:h-12 md:w-12 rounded-full bg-[#111111] text-[#e3c49c] flex items-center justify-center cursor-pointer active:scale-95 hover:bg-[#e3c49c] hover:text-black"
      >
        <HiChevronLeft size={22} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlid}
        className="absolute z-10 right-3 md:right-8 top-1/2 -translate-y-1/2 h-9 w-9 md:h-12 md:w-12 rounded-full bg-[#111111] text-[#F5E6D3] flex items-center justify-center cursor-pointer active:scale-95 hover:bg-[#e3c49c] hover:text-black"
      >
        <HiChevronRight size={22} />
      </button>
    </div>
  );
};

export default HeroSection;
