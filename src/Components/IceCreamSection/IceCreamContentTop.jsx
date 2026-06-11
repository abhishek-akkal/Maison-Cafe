import IceCreamContentImg1 from "../../assets/IceCream/IceCreamContentImg1.png";
import IceCreamContentImg2 from "../../assets/IceCream/IceCreamContentImg2.png";
import IceCreamContentImg3 from "../../assets/IceCream/IceCreamContentImg3.png";
import IceCreamContentImg4 from "../../assets/IceCream/IceCreamContentImg4.png";
import IceCreamContentImg5 from "../../assets/IceCream/IceCreamContentImg5.png";
import { IoIceCream } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const flavors = [
  {
    img: IceCreamContentImg1,
    name: "Cookies & Cream",
    color: "#4A4A4A",
    price: "$4.99",
    rating: "4.9",
  },
  {
    img: IceCreamContentImg2,
    name: "Vanilla Dream",
    color: "#eea84d",
    price: "$4.49",
    rating: "4.7",
  },
  {
    img: IceCreamContentImg3,
    name: "Strawberry Bliss",
    color: "#E75480",
    price: "$4.79",
    rating: "4.8",
  },
  {
    img: IceCreamContentImg4,
    name: "Mango Mania",
    color: "#F4A300",
    price: "$4.79",
    rating: "4.7",
  },
  {
    img: IceCreamContentImg5,
    name: "Mint Chocolate",
    color: "#6B3E26",
    price: "$4.99",
    rating: "4.8",
  },
];

const IceCreamContentTop = () => {
  return (
    <div className="pt-10 px-4">
      <div>
        <div className="flex justify-center text-2xl lg:text-3xl font-[lora] italic font-bold gap-2">
          <div>Our</div>
          <div className="text-[#2D7FEA]">Ice Cream</div>
          <div>Collection</div>
        </div>
        <div className="flex items-center justify-center pt-1">
          <span className="h-px w-37 bg-[#2D7FEA]"></span>
          <IoIceCream className="text-2xl text-[#2D7FEA]" />
          <span className="h-px w-37 bg-[#2D7FEA]"></span>
        </div>
      </div>

      {/* Desktop — original layout */}
      <div className="hidden lg:flex flex-wrap justify-center pt-10 gap-10">
        {flavors.map((f, i) => (
          <div
            key={i}
            className="h-80 w-60 bg-[#F8FBFF] flex flex-col items-center justify-center gap-4 rounded-2xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <img src={f.img} alt={f.name} />
            <div className="flex flex-col items-center justify-center gap-1">
              <div
                className="text-2xl font-semibold font-[lora]"
                style={{ color: f.color }}
              >
                {f.name}
              </div>
              <div className="flex items-center text-amber-400 gap-2 text-lg font-semibold">
                <FaStar />
                <p>{f.rating}</p>
              </div>
              <div className="text-[#2D7FEA] text-xl font-bold">{f.price}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile/Tablet — 2 column grid */}
      <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8">
        {flavors.map((f, i) => (
          <div
            key={i}
            className="bg-[#F8FBFF] flex flex-col items-center rounded-2xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <img
              src={f.img}
              alt={f.name}
              className="w-full h-32 object-cover"
            />
            <div className="flex flex-col items-center py-3 gap-1">
              <div
                className="text-sm font-semibold font-[lora] text-center"
                style={{ color: f.color }}
              >
                {f.name}
              </div>
              <div className="flex items-center text-amber-400 gap-1 text-sm font-semibold">
                <FaStar />
                <p>{f.rating}</p>
              </div>
              <div className="text-[#2D7FEA] text-base font-bold">
                {f.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IceCreamContentTop;
