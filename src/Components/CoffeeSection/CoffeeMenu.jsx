import { Link } from "react-router-dom";
import CoffeeMenuImg1 from "../../assets/Coffee/CoffeeMenuImg1.png";
import CoffeeMenuImg2 from "../../assets/Coffee/CoffeeMenuImg2.png";
import CoffeeMenuImg3 from "../../assets/Coffee/CoffeeMenuImg3.png";
import CoffeeMenuImg4 from "../../assets/Coffee/CoffeeMenuImg4.png";
import CoffeeMenuImg5 from "../../assets/Coffee/CoffeeMenuImg5.png";
import CoffeeMenuImg6 from "../../assets/Coffee/CoffeeMenuImg6.png";
import CoffeeMenuImg7 from "../../assets/Coffee/CoffeeMenuImg7.png";
import CoffeeMenuImg8 from "../../assets/Coffee/CoffeeMenuImg8.png";
import CoffeeMenuImg9 from "../../assets/Coffee/CoffeeMenuImg9.png";
import CoffeeMenuImg10 from "../../assets/Coffee/CoffeeMenuImg10.png";
import CoffeeMenuImg11 from "../../assets/Coffee/CoffeeMenuImg11.png";
import CoffeeMenuImg12 from "../../assets/Coffee/CoffeeMenuImg12.png";
import CoffeeMenuImg13 from "../../assets/Coffee/CoffeeMenuImg13.png";
import CoffeeMenuImg14 from "../../assets/Coffee/CoffeeMenuImg14.png";
import CoffeeMenuImg15 from "../../assets/Coffee/CoffeeMenuImg15.png";

const menuItems = [
  { img: CoffeeMenuImg1, name: "Espresso", price: "$2.10" },
  { img: CoffeeMenuImg2, name: "Cappuccino", price: "$3.20" },
  { img: CoffeeMenuImg3, name: "Latte", price: "$3.50" },
  { img: CoffeeMenuImg4, name: "Mocha", price: "$3.50" },
  { img: CoffeeMenuImg5, name: "Rose Latte", price: "$4.90" },
  { img: CoffeeMenuImg6, name: "Caramel Macchiato", price: "$3.10" },
  { img: CoffeeMenuImg7, name: "Vanilla Latte", price: "$3.80" },
  { img: CoffeeMenuImg8, name: "Affogato", price: "$4.20" },
  { img: CoffeeMenuImg9, name: "Cinnamon Latte", price: "$4.20" },
  { img: CoffeeMenuImg10, name: "Cold Brew", price: "$3.80" },
  { img: CoffeeMenuImg11, name: "Matcha Espresso", price: "$4.30" },
  { img: CoffeeMenuImg12, name: "Tiramisu Latte", price: "$4.10" },
  { img: CoffeeMenuImg13, name: "Flat White", price: "$3.10" },
  { img: CoffeeMenuImg14, name: "Irish Coffee", price: "$5.30" },
  { img: CoffeeMenuImg15, name: "Dirty Chai", price: "$4.30" },
];

const CoffeeMenu = () => {
  return (
    <div className="flex flex-col justify-start pb-10">
      {/* Title */}
      <div className="flex items-center justify-center py-10 px-4">
        <div className="h-px flex-1 bg-[#D8C5B1]"></div>
        <div className="px-5 py-2 rounded-xl font-[lora] italic text-base lg:text-xl bg-[#2B180C] text-[#E6B36A] flex items-center justify-center mx-2">
          OUR COFFEE MENU
        </div>
        <div className="h-px flex-1 bg-[#D8C5B1]"></div>
      </div>

      {/* Desktop grid — original layout */}
      <div className="hidden lg:flex flex-wrap items-center justify-center gap-20">
        {menuItems.map((item, i) => (
          <div
            key={i}
            className="h-60 w-50 flex flex-col items-center justify-center bg-[#E5D9CD] rounded-xl cursor-pointer hover:shadow-gray-500 shadow-lg transition-all duration-300"
          >
            <img
              src={item.img}
              alt={item.name}
              className="h-40 object-cover overflow-hidden"
            />
            <div className="flex flex-col items-center gap-2">
              <h4 className="text-xl font-semibold font-serif relative bottom-5 text-center">
                {item.name}
              </h4>
              <p className="text-xl font-semibold text-[#C8923B] flex justify-center relative bottom-5">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet grid */}
      <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4 px-4">
        {menuItems.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-[#E5D9CD] rounded-xl cursor-pointer shadow-md hover:shadow-gray-500 transition-all duration-300 overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-28 object-cover rounded-t-xl"
            />
            <div className="flex flex-col items-center py-3 px-2">
              <h4 className="text-sm font-semibold font-serif text-center">
                {item.name}
              </h4>
              <p className="text-sm font-semibold text-[#C8923B] mt-1">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Order Button */}
      <Link to="/signin" className="flex justify-center mt-10">
        <button className="w-50 py-2 border-2 border-[#e6b36a] rounded-xl text-xl text-[#e08c17] font-[Lora] font-bold cursor-pointer hover:bg-[#e6b36a] hover:text-black hover:scale-105 active:scale-95 transition-all duration-300">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default CoffeeMenu;
