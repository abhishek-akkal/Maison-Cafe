import CoffeeSectionBox1 from "../../assets/Coffee/CoffeeSectionBox1.png";
import CoffeeSectionBox2 from "../../assets/Coffee/CoffeeSectionBox2.png";
import CoffeeSectionBox3 from "../../assets/Coffee/CoffeeSectionBox3.png";
import CoffeeSectionBox4 from "../../assets/Coffee/CoffeeSectionBox4.png";
import CoffeeSectionBox5 from "../../assets/Coffee/CoffeeSectionBox5.png";
import { FaRegHeart } from "react-icons/fa";

const coffees = [
  {
    img: CoffeeSectionBox1,
    name: "Spanish Latte",
    price: "$4.50",
    desc: ["Sweet & creamy vibes", "with a hint of caramelized", "milk."],
  },
  {
    img: CoffeeSectionBox2,
    name: "Black Magic",
    price: "$4.70",
    desc: [
      "Bold espresso with",
      "chocolate undertones",
      "for a smooth finish.",
    ],
  },
  {
    img: CoffeeSectionBox3,
    name: "Pistachio Latte",
    price: "$5.20",
    desc: ["Roasted pistachio", "blended with espresso", "and milk."],
  },
  {
    img: CoffeeSectionBox4,
    name: "Honey Oat Latte",
    price: "$4.80",
    desc: ["Smooth & warm with", "honey notes and", "oat cream."],
  },
  {
    img: CoffeeSectionBox5,
    name: "Rose Latte",
    price: "$4.90",
    desc: [
      "Sweet rose notes with",
      "creamy espresso and milk",
      "for a delicate finish.",
    ],
  },
];

const CoffeeSection1 = () => {
  return (
    <>
      {/* Desktop — original layout */}
      <div className="hidden lg:block h-100 mt-15 mb-10">
        <div className="flex items-center justify-center mb-10">
          <div className="h-px w-158 bg-[#D8C5B1]"></div>
          <div className="w-40 py-2 bg-[#2B180C] text-[#E6B36A] text-xl font-[lora] italic flex items-center justify-center rounded-xl">
            Our Signature
          </div>
          <div className="h-px w-158 bg-[#D8C5B1]"></div>
        </div>

        <div className="flex items-center justify-center gap-10 px-11">
          {coffees.map((c, i) => (
            <div
              key={i}
              className="h-80 w-65 bg-[#E5D9CD] rounded-xl cursor-pointer hover:shadow-gray-500 shadow-lg transition-all duration-300"
            >
              <img
                src={c.img}
                alt={c.name}
                className="h-45 w-full object-cover rounded-t-xl overflow-hidden"
              />
              <div className="flex flex-col items-center">
                <h3 className="text-xl text-[#2B180C] font-semibold font-serif">
                  {c.name}
                </h3>
                <p className="text-xl font-semibold text-[#C8923B]">
                  {c.price}
                </p>
                {c.desc.map((line, j) => (
                  <p key={j} className="font-[Poppins] text-sm">
                    {line}
                  </p>
                ))}
                <FaRegHeart className="text-xl text-[#e18008] relative bottom-72 left-25" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile/Tablet — hidden above lg */}
      <div className="lg:hidden px-4 mt-10 mb-6">
        <div className="flex items-center justify-center mb-6">
          <div className="h-px flex-1 bg-[#D8C5B1]"></div>
          <div className="px-4 py-2 bg-[#2B180C] text-[#E6B36A] text-base font-[lora] italic rounded-xl mx-2">
            Our Signature
          </div>
          <div className="h-px flex-1 bg-[#D8C5B1]"></div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {coffees.map((c, i) => (
            <div
              key={i}
              className="bg-[#E5D9CD] rounded-xl cursor-pointer shadow-md hover:shadow-gray-500 transition-all duration-300 overflow-hidden"
            >
              <img
                src={c.img}
                alt={c.name}
                className="w-full h-32 object-cover rounded-t-xl"
              />
              <div className="flex flex-col items-center py-3 px-2">
                <h3 className="text-base text-[#2B180C] font-semibold font-serif text-center">
                  {c.name}
                </h3>
                <p className="text-base font-semibold text-[#C8923B] mt-1">
                  {c.price}
                </p>
                <p className="text-xs text-gray-600 text-center mt-1 font-[Poppins]">
                  {c.desc[0]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoffeeSection1;
