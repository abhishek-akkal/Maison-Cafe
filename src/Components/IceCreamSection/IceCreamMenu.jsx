import Menu1 from "../../assets/IceCream/IceCreamMenu1.png";
import Menu2 from "../../assets/IceCream/IceCreamMenu2.png";
import Menu3 from "../../assets/IceCream/IceCreamMenu3.png";
import Menu4 from "../../assets/IceCream/IceCreamMenu4.png";
import Menu5 from "../../assets/IceCream/IceCreamMenu5.png";
import Menu6 from "../../assets/IceCream/IceCreamMenu6.png";
import Menu7 from "../../assets/IceCream/IceCreamMenu7.png";
import Menu8 from "../../assets/IceCream/IceCreamMenu8.png";
import Menu9 from "../../assets/IceCream/IceCreamMenu9.png";
import Menu10 from "../../assets/IceCream/IceCreamMenu10.png";
import { IoIceCream } from "react-icons/io5";
import { Link } from "react-router-dom";

const menuItems = [
  {
    img: Menu1,
    name: "Chocolate Chip",
    price: "$4.99",
    shadow: "shadow-[#F4E8DE]",
    hoverShadow: "hover:shadow-[#ebd3bf]",
    bg: "#F4E8DE",
    color: "#6B3A1E",
  },
  {
    img: Menu2,
    name: "Strawberry Bliss",
    price: "$4.79",
    shadow: "shadow-[#FFE4EC]",
    hoverShadow: "hover:shadow-[#fed5e1]",
    bg: "#FFE4EC",
    color: "#F24C8D",
  },
  {
    img: Menu3,
    name: "Mint Chocolate Chips",
    price: "$4.89",
    shadow: "shadow-[#dcf8e9]",
    hoverShadow: "hover:shadow-[#c0e4d0]",
    bg: "#E4F6EC",
    color: "#2E8B57",
  },
  {
    img: Menu4,
    name: "Butterscotch Crunch",
    price: "$5.29",
    shadow: "shadow-[#f4e7d1]",
    hoverShadow: "hover:shadow-[#f7dfb9]",
    bg: "#FFF0D8",
    color: "#C98224",
  },
  {
    img: Menu5,
    name: "Rainbow Sprinkle",
    price: "$5.49",
    shadow: "shadow-[#FFF4FA]",
    hoverShadow: "hover:shadow-[#efd5e3]",
    bg: "#FFF4FA",
    color: "#FF4FA0",
  },
  {
    img: Menu6,
    name: "Brownie Sundae",
    price: "$6.99",
    shadow: "shadow-[#F4E5DA]",
    hoverShadow: "hover:shadow-[#f1dac8]",
    bg: "#F4E5DA",
    color: "#5A2D16",
  },
  {
    img: Menu7,
    name: "Ice Cream Roll",
    price: "$7.49",
    shadow: "shadow-[#F4E2C8]",
    hoverShadow: "hover:shadow-[#ecd6b7]",
    bg: "#F4E2C8",
    color: "#C77D1F",
  },
  {
    img: Menu8,
    name: "Belgian Waffle",
    price: "$8.49",
    shadow: "shadow-[#FFF3D9]",
    hoverShadow: "hover:shadow-[#f3e4c2]",
    bg: "#FFF3D9",
    color: "#D89A2B",
  },
  {
    img: Menu9,
    name: "Caramel Crunch",
    price: "$7.99",
    shadow: "shadow-[#FDECCF]",
    hoverShadow: "hover:shadow-[#ebd9b9]",
    bg: "#FDECCF",
    color: "#C97A1D",
  },
  {
    img: Menu10,
    name: "Oreo Milkshake",
    price: "$5.99",
    shadow: "shadow-[#e9d8c7]",
    hoverShadow: "hover:shadow-[#eedac7]",
    bg: "#EEE9E4",
    color: "#4A3A35",
  },
];

const IceCreamMenu = () => {
  return (
    <div className="pt-20 px-4">
      <div>
        <div className="flex justify-center text-3xl sm:text-5xl font-serif italic font-bold gap-1">
          <h2>Our</h2>
          <h2 className="text-[#2D7FEA]">Menu</h2>
        </div>
        <div className="flex items-center justify-center pt-1">
          <span className="h-px w-35 bg-[#2D7FEA]"></span>
          <IoIceCream className="text-2xl text-[#2D7FEA]" />
          <span className="h-px w-35 bg-[#2D7FEA]"></span>
        </div>
        <div className="flex flex-col text-base lg:text-lg font-[lora] items-center justify-center pt-3 text-center">
          <h3>Handcrafted ice creams made with love,</h3>
          <h3>perfectly scooped for your happiness</h3>
        </div>
      </div>

      {/* Desktop — original layout */}
      <div className="hidden lg:flex flex-wrap justify-center gap-7 pt-10">
        {menuItems.map((item, i) => (
          <div
            key={i}
            className={`h-87 w-63 bg-[#F8FBFF] flex flex-col items-center justify-start gap-2 rounded-2xl shadow-lg ${item.shadow} hover:shadow-xl ${item.hoverShadow} hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
          >
            <img
              src={item.img}
              alt="Ice Cream"
              className="h-65 w-full object-cover rounded-t-xl overflow-hidden"
              style={{ backgroundColor: item.bg }}
            />
            <div className="flex flex-col justify-start gap-2 font-semibold px-3">
              <h3
                className="text-2xl font-[lora]"
                style={{ color: item.color }}
              >
                {item.name}
              </h3>
              <h4 className="text-xl text-[#2D7FEA] font-bold">{item.price}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet — 2 column grid */}
      <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8">
        {menuItems.map((item, i) => (
          <div
            key={i}
            className="bg-[#F8FBFF] flex flex-col rounded-2xl shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <img
              src={item.img}
              alt="Ice Cream"
              className="w-full h-32 object-cover rounded-t-xl"
              style={{ backgroundColor: item.bg }}
            />
            <div className="flex flex-col gap-1 px-3 py-3 font-semibold">
              <h3 className="text-sm font-[lora]" style={{ color: item.color }}>
                {item.name}
              </h3>
              <h4 className="text-sm text-[#2D7FEA] font-bold">{item.price}</h4>
            </div>
          </div>
        ))}
      </div>

      <Link to="/signin" className="flex justify-center mt-15">
        <button className="px-8 py-3 rounded-full font-[lora] border-2 border-[#2D7FEA] text-[#2D7FEA] font-semibold hover:bg-[#2D7FEA] hover:text-white transition-all duration-300 cursor-pointer active:scale-95">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default IceCreamMenu;
