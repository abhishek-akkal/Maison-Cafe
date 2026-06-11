import CakeContentImg1 from "../../assets/Cake/CakeContentImg1.png";
import CakeContentImg2 from "../../assets/Cake/CakeContentImg2.png";
import CakeContentImg3 from "../../assets/Cake/CakeContentImg3.png";
import CakeContentImg4 from "../../assets/Cake/CakeContentImg4.png";
import CakeContentImg5 from "../../assets/Cake/CakeContentImg5.png";
import { FaHeart } from "react-icons/fa";

const cakes = [
  {
    img: CakeContentImg1,
    name: "Chocolate Cakes",
    color: "#6B2E12",
    desc: "Rich cocoa layers crafted for true chocolate lovers.",
  },
  {
    img: CakeContentImg2,
    name: "Red Velvet Cakes",
    color: "#A61B2B",
    desc: "Velvety layers with smooth cream cheese frosting.",
  },
  {
    img: CakeContentImg3,
    name: "Cheesecakes",
    color: "#7A2C74",
    desc: "Creamy, smooth, and baked to perfection.",
  },
  {
    img: CakeContentImg4,
    name: "Fruit Cakes",
    color: "#D67A00",
    desc: "Fresh fruits and light flavors in every bite.",
  },
  {
    img: CakeContentImg5,
    name: "Specialty Cakes",
    color: "#C73A75",
    desc: "Unique creations made for every celebration.",
  },
];

const CakeContentTop = () => {
  return (
    <div className="mt-13 px-4">
      <div className="mb-10">
        <h2 className="flex justify-center text-[#5A1E2A] italic font-bold text-2xl lg:text-3xl font-[lora]">
          Explore Our Cake Categories
        </h2>
        <div className="flex items-center justify-center py-2 gap-1">
          <span className="h-px w-45 bg-[#d2415e]"></span>
          <FaHeart className="text-lg text-[#b23d54]" />
          <span className="h-px w-45 bg-[#d2415e]"></span>
        </div>
      </div>

      {/* Desktop — original layout */}
      <div className="hidden lg:flex flex-wrap justify-center gap-10">
        {cakes.map((c, i) => (
          <div
            key={i}
            className="h-87 w-62 bg-[#f4d6df] rounded-2xl shadow-md shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center overflow-hidden cursor-pointer"
          >
            <img src={c.img} alt={c.name} className="w-full object-cover" />
            <div className="flex-1 flex flex-col items-center justify-center gap-2 px-3">
              <h3
                className="text-2xl font-serif font-semibold"
                style={{ color: c.color }}
              >
                {c.name}
              </h3>
              <h4
                className="font-[lora] font-medium text-sm px-2 text-center"
                style={{ color: c.color }}
              >
                {c.desc}
              </h4>
              <FaHeart className="text-[#de91a0]" />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet — 2 column grid */}
      <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4">
        {cakes.map((c, i) => (
          <div
            key={i}
            className="bg-[#f4d6df] rounded-2xl shadow-md shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center overflow-hidden cursor-pointer"
          >
            <img
              src={c.img}
              alt={c.name}
              className="w-full h-36 object-cover"
            />
            <div className="flex flex-col items-center py-3 px-2 gap-1">
              <h3
                className="text-base font-serif font-semibold text-center"
                style={{ color: c.color }}
              >
                {c.name}
              </h3>
              <h4
                className="font-[lora] text-xs text-center"
                style={{ color: c.color }}
              >
                {c.desc}
              </h4>
              <FaHeart className="text-[#de91a0] text-sm mt-1" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CakeContentTop;
