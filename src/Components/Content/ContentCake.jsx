import { Link } from "react-router-dom";
import ContentCakeH1 from "../../assets/HomeContent/ContentCakeH1.png";
import ContentCakeBox1 from "../../assets/HomeContent/ContentCakeBox1.png";
import ContentCakeBox2 from "../../assets/HomeContent/ContentCakeBox2.png";
import ContentCakeBox3 from "../../assets/HomeContent/ContentCakeBox3.png";
import ContentCakeBox4 from "../../assets/HomeContent/ContentCakeBox4.png";
import { GiCakeSlice } from "react-icons/gi";
import { HiArrowRight } from "react-icons/hi";

const cakes = [
  { img: ContentCakeBox1, name: "Chocolate Cake", price: "$4.50" },
  { img: ContentCakeBox2, name: "Red Velvet", price: "$4.20" },
  { img: ContentCakeBox3, name: "Blueberry Cake", price: "$4.30" },
  { img: ContentCakeBox4, name: "Caramel Cake", price: "$4.50" },
];

const ContentCake = () => {
  return (
    <>
      {/* Desktop — original layout, hidden below lg */}
      <div className="hidden lg:flex items-center justify-center relative bottom-10">
        <div className="h-130 w-370 bg-[#F6EDE4] mt-15 flex justify-between rounded-2xl shadow-gray-300 shadow-lg">
          <div className="bg-no-repeat bg-right bg-cover">
            <img
              src={ContentCakeH1}
              alt="Cake"
              className="bg-cover rounded-xl overflow-hidden h-130"
            />
          </div>

          <div className="flex flex-col items-start justify-around">
            <div className="flex items-center justify-center relative">
              <div className="flex flex-col justify-between px-15 gap-3">
                <GiCakeSlice className="text-[#f09000] text-4xl relative left-25" />
                <div className="text-3xl font-bold font-serif italic">
                  Our Signature Cakes
                </div>
                <div className="w-20 h-1 leading-8 bg-[#f49506] rounded-full"></div>
                <div className="font-[lora]">
                  Irresistible cakes made with love,
                </div>
                <div className="relative bottom-2 font-[lora]">
                  perfect for every celebration.
                </div>
              </div>
              <Link
                to="/cake"
                className="mt-8 h-10 w-30 text-[#fb8e00] flex items-center justify-center gap-1 rounded-3xl text-lg font-semibold cursor-pointer active:scale-95 hover:bg-[#F8F2EC] hover:border border-[#fb8e00] relative left-55 bottom-10"
              >
                <button className="cursor-pointer">View All</button>
                <HiArrowRight className="text-[#fb8e00] text-xl" />
              </Link>
            </div>

            <div className="flex justify-around px-10 gap-5">
              {cakes.map((c, i) => (
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
                    <h3 className="mt-3 text-xl font-semibold font-[lora]">
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
        </div>
      </div>

      {/* Mobile/Tablet — hidden above lg */}
      <div className="lg:hidden px-4 mt-10">
        <div className="bg-[#F6EDE4] rounded-2xl shadow-gray-300 shadow-lg p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="flex flex-col gap-2">
              <GiCakeSlice className="text-[#f09000] text-3xl" />
              <div className="text-2xl font-bold font-serif italic">
                Our Signature Cakes
              </div>
              <div className="w-16 h-1 bg-[#f49506] rounded-full"></div>
              <p className="font-[lora] text-sm text-gray-600">
                Irresistible cakes made with love, perfect for every
                celebration.
              </p>
            </div>
            <Link
              to="/cake"
              className="flex items-center gap-1 text-[#fb8e00] font-semibold text-sm shrink-0 ml-4"
            >
              <span>View All</span>
              <HiArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {cakes.map((c, i) => (
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

export default ContentCake;
