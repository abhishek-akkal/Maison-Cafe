import { PiCoffee } from "react-icons/pi";
import { BsCake2 } from "react-icons/bs";
import { IoIceCreamOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";

const stats = [
  {
    icon: <PiCoffee className="text-5xl text-[#2D6CCF]" />,
    count: "20+",
    label: "Coffee Varieties",
    desc: ["From rich espressos to handcrafted", "specialty beverages."],
  },
  {
    icon: <BsCake2 className="text-5xl text-[#2D6CCF]" />,
    count: "35+",
    label: "Delicious Cakes",
    desc: ["Freshly baked cakes made daily", "with premium ingredients."],
  },
  {
    icon: <IoIceCreamOutline className="text-5xl text-[#2D6CCF]" />,
    count: "25+",
    label: "Unique Flavors",
    desc: ["Handcrafted ice creams made", "fresh with unique flavors."],
  },
  {
    icon: <MdOutlinePeopleAlt className="text-5xl text-[#2D6CCF]" />,
    count: "1000+",
    label: "Happy Customers",
    desc: ["Serving smiles and creating sweet", "memories every day."],
  },
];

const AboutUSTop = () => {
  return (
    <div className="flex justify-center pt-10 px-4">
      {/* Desktop — original layout */}
      <div className="hidden lg:flex bg-white px-20 py-10 flex-wrap justify-center gap-30 rounded-2xl shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-300">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            {s.icon}
            <h2 className="text-3xl text-[#2D6CCF] font-semibold">{s.count}</h2>
            <h3 className="text-xl font-serif">{s.label}</h3>
            <div className="flex flex-col items-center gap-1 font-[lora]">
              {s.desc.map((d, j) => (
                <h4 key={j}>{d}</h4>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet — 2x2 grid */}
      <div className="lg:hidden w-full bg-white px-6 py-8 grid grid-cols-2 gap-8 rounded-2xl shadow-lg shadow-blue-200">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-center gap-2 text-center">
            {s.icon}
            <h2 className="text-2xl text-[#2D6CCF] font-semibold">{s.count}</h2>
            <h3 className="text-base font-serif">{s.label}</h3>
            <p className="font-[lora] text-sm text-gray-600">
              {s.desc.join(" ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUSTop;
