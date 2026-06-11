import { Link } from "react-router-dom";
import CakeMenuImg1 from "../../assets/Cake/CakeMenuImg1.png";
import CakeMenuImg2 from "../../assets/Cake/CakeMenuImg2.png";
import CakeMenuImg3 from "../../assets/Cake/CakeMenuImg3.png";
import CakeMenuImg4 from "../../assets/Cake/CakeMenuImg4.png";
import CakeMenuImg5 from "../../assets/Cake/CakeMenuImg5.png";
import CakeMenuImg6 from "../../assets/Cake/CakeMenuImg6.png";
import CakeMenuImg7 from "../../assets/Cake/CakeMenuImg7.png";
import CakeMenuImg8 from "../../assets/Cake/CakeMenuImg8.png";
import { FaHeart } from "react-icons/fa";

const menuItems = [
  { img: CakeMenuImg1, name: "Chocolate Fudge Cake", price: "$6.50" },
  { img: CakeMenuImg2, name: "Red Velvet Slice", price: "$6.25" },
  { img: CakeMenuImg3, name: "Mango Mousse Cake", price: "$6.75" },
  { img: CakeMenuImg4, name: "Blueberry Cheesecake", price: "$7.00" },
  { img: CakeMenuImg5, name: "Oreo Cake", price: "$6.50" },
  { img: CakeMenuImg6, name: "Tiramisu Slice", price: "$7.25" },
  { img: CakeMenuImg7, name: "Strawberry Shortcake", price: "$6.75" },
  { img: CakeMenuImg8, name: "Pistachio Cake", price: "$7.50" },
];

const CakeContentMenu = () => {
  return (
    <div className="pt-20 px-4">
      <div className="flex items-center justify-center mb-10">
        <div>
          <h2 className="flex justify-center italic text-[#5A1E2A] font-bold text-2xl lg:text-3xl font-[lora]">
            Our Cake Collection
          </h2>
          <div className="flex items-center justify-center py-2 gap-2">
            <span className="h-px w-29 bg-[#d2415e]"></span>
            <FaHeart className="text-lg text-[#b23d54]" />
            <span className="h-px w-29 bg-[#d2415e]"></span>
          </div>
        </div>
      </div>

      <div className="text-2xl pinyon text-[#5A1E2A] leading-8 font-semibold flex justify-center mb-6">
        Handcrafted with love, baked to perfection.
      </div>

      {/* Desktop — original layout */}
      <div className="hidden lg:flex flex-wrap justify-center gap-20">
        {menuItems.map((item, i) => (
          <div
            key={i}
            className="h-80 w-62 bg-[#f4d6df] flex flex-col justify-around rounded-2xl shadow-md shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <img src={item.img} alt={item.name} className="h-40 object-cover" />
            <div className="flex flex-col justify-center gap-4 px-5">
              <h3 className="text-2xl font-serif font-semibold text-[#6B2E12]">
                {item.name}
              </h3>
              <h5 className="text-xl font-bold text-[#dc143c]">{item.price}</h5>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet — 2 column grid */}
      <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4">
        {menuItems.map((item, i) => (
          <div
            key={i}
            className="bg-[#f4d6df] flex flex-col rounded-2xl shadow-md shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-32 object-cover"
            />
            <div className="flex flex-col justify-center gap-2 px-3 py-3">
              <h3 className="text-sm font-serif font-semibold text-[#6B2E12]">
                {item.name}
              </h3>
              <h5 className="text-base font-bold text-[#dc143c]">
                {item.price}
              </h5>
            </div>
          </div>
        ))}
      </div>

      <Link to="/signin" className="flex justify-center mt-10">
        <button className="w-50 py-2 border-2 border-[#A64D79] rounded-xl text-xl text-[#9f2662] font-[Lora] font-bold cursor-pointer hover:bg-[#A64D79] hover:text-white hover:scale-105 transition-all active:scale-95 duration-300">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default CakeContentMenu;
