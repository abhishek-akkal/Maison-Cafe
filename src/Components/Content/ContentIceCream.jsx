import { Link } from "react-router-dom";
import ContentIceCreamH1 from "../../assets/HomeContent/ContentIceCreamH1.png";
import ContentIceCreamBox1 from "../../assets/HomeContent/ContentIceCreamBox1.png";
import ContentIceCreamBox2 from "../../assets/HomeContent/ContentIceCreamBox2.png";
import ContentIceCreamBox3 from "../../assets/HomeContent/ContentIceCreamBox3.png";
import ContentIceCreamBox4 from "../../assets/HomeContent/ContentIceCreamBox4.png";
import { LuIceCreamBowl } from "react-icons/lu";
import { HiArrowRight } from "react-icons/hi";

const icecreams = [
  { img: ContentIceCreamBox1, name: "Chocolate", price: "$3.10" },
  { img: ContentIceCreamBox2, name: "Mango", price: "$3.10" },
  { img: ContentIceCreamBox3, name: "Strawberry", price: "$3.10" },
  { img: ContentIceCreamBox4, name: "Cookies & Cream", price: "$3.30" },
];

const ContentIceCream = () => {
  return (
    <>
      {/* Desktop — original layout, hidden below lg */}
      <div className="hidden lg:flex items-center justify-center mb-15 relative bottom-5">
        <div className="h-130 w-370 bg-[#F3EBE3] flex justify-between rounded-2xl shadow-gray-300 shadow-lg">
          <div className="flex flex-col items-start justify-around">
            <div className="flex items-center justify-center relative">
              <div className="flex flex-col justify-between px-15 gap-3">
                <LuIceCreamBowl className="text-[#f09000] text-4xl relative left-25" />
                <div className="text-3xl font-bold font-serif italic">
                  Ice Cream Favorites
                </div>
                <div className="w-20 h-1 bg-[#f49506] rounded-full"></div>
                <div className="font-[lora]">
                  Creamy, delicious, and crafted
                </div>
                <div className="relative bottom-2 font-[lora]">
                  to make your day extra special.
                </div>
              </div>
              <Link
                to="/icecream"
                className="mt-8 h-10 w-30 text-[#fb8e00] flex items-center justify-center gap-1 rounded-3xl text-lg font-semibold cursor-pointer active:scale-95 hover:bg-[#F8F2EC] hover:border border-[#fb8e00] relative left-57 bottom-10"
              >
                <button className="cursor-pointer">View All</button>
                <HiArrowRight className="text-[#fb8e00] text-xl" />
              </Link>
            </div>

            <div className="flex justify-around px-10 gap-5">
              {icecreams.map((c, i) => (
                <div
                  key={i}
                  className="h-65 w-43 flex flex-col border border-[#E8DED3] rounded-xl bg-white overflow-hidden cursor-pointer hover:scale-105 hover:shadow-gray-400 shadow-lg transition-all duration-300"
                >
                  <img
                    src={c.img}
                    alt={c.name}
                    className="h-45 w-full object-cover rounded-t-xl overflow-hidden"
                  />
                  <div className="flex flex-col items-center p-3 relative bottom-4">
                    <h3 className="mt-3 text-lg font-semibold font-[lora]">
                      {c.name}
                    </h3>
                    <p className="text-[#ff9d00] font-bold text-xl relative top-3">
                      {c.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-no-repeat bg-right bg-cover">
            <img
              src={ContentIceCreamH1}
              alt="Ice Cream"
              className="bg-cover rounded-xl overflow-hidden h-130"
            />
          </div>
        </div>
      </div>

      {/* Mobile/Tablet — hidden above lg */}
      <div className="lg:hidden px-4 mt-10 mb-10">
        <div className="bg-[#F3EBE3] rounded-2xl shadow-gray-300 shadow-lg p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="flex flex-col gap-2">
              <LuIceCreamBowl className="text-[#f09000] text-3xl" />
              <div className="text-2xl font-bold font-serif italic">
                Ice Cream Favorites
              </div>
              <div className="w-16 h-1 bg-[#f49506] rounded-full"></div>
              <p className="font-[lora] text-sm text-gray-600">
                Creamy, delicious, and crafted for you.
              </p>
            </div>
            <Link
              to="/icecream"
              className="flex items-center gap-1 text-[#fb8e00] font-semibold text-sm shrink-0 ml-4"
            >
              <span>View All</span>
              <HiArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {icecreams.map((c, i) => (
              <div
                key={i}
                className="flex flex-col border border-[#E8DED3] rounded-xl bg-white overflow-hidden cursor-pointer shadow-md transition-all duration-300"
              >
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-32 object-cover rounded-t-xl"
                />
                <div className="flex flex-col items-center py-3">
                  <h3 className="text-base font-semibold font-[lora]">
                    {c.name}
                  </h3>
                  <p className="text-[#ff9d00] font-bold text-base mt-1">
                    {c.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentIceCream;
