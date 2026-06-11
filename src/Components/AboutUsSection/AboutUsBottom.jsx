import AboutUSBox1 from "../../assets/AboutUS/temp1.png";
import AboutUSBox2 from "../../assets/AboutUS/temp2.png";
import AboutUSBox3 from "../../assets/AboutUS/temp3.png";
import { FaRegHeart } from "react-icons/fa6";

const items = [
  {
    img: AboutUSBox1,
    title: "Specialty Coffee",
    desc: "From classic espresso to creamy lattes, our coffee is brewed to perfection",
  },
  {
    img: AboutUSBox2,
    title: "Fresh Cakes",
    desc: "Every slice is a perfect blend of quality ingredients, freshness, and sweetness.",
  },
  {
    img: AboutUSBox3,
    title: "Premium Ice Cream",
    desc: "Handcrafted in-house with real ingredients for the perfect indulgence.",
  },
];

const AboutUsBottom = () => {
  return (
    <div className="pt-20 px-4">
      <div className="flex items-center justify-center gap-3">
        <div className="h-px w-10 bg-[#77a4ed]"></div>
        <div className="text-[#2D6CCF] text-xl font-[lora] font-semibold">
          WHAT WE SERVE
        </div>
        <div className="h-px w-10 bg-[#77a4ed]"></div>
      </div>

      <div className="flex justify-center pt-1">
        <FaRegHeart className="text-[#1a5dc9]" />
      </div>

      {/* Desktop heading */}
      <div className="hidden lg:flex flex-col items-center justify-center font-serif gap-3 pt-3 text-5xl">
        <h2>We Serve Happiness</h2>
        <h2 className="text-[#2D6CCF] pinyon font-semibold">
          In Every Cup, Slice & Scoop
        </h2>
      </div>

      {/* Mobile heading */}
      <div className="lg:hidden flex flex-col items-center justify-center font-serif gap-2 pt-3 text-2xl sm:text-3xl text-center">
        <h2>We Serve Happiness</h2>
        <h2 className="text-[#2D6CCF] pinyon font-semibold">
          In Every Cup, Slice & Scoop
        </h2>
      </div>

      {/* Desktop cards — original layout */}
      <div className="hidden lg:flex flex-wrap items-center justify-center gap-5 pt-10">
        {items.map((item, i) => (
          <div
            key={i}
            className="h-50 w-120 px-5 bg-white flex items-center justify-between rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-50 w-50 object-cover"
            />
            <div className="pr-5 px-3">
              <h3 className="text-3xl font-[lora] font-semibold text-[#2D6CCF]">
                {item.title}
              </h3>
              <div className="pt-3 font-[lora]">
                <h4>{item.desc}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile cards */}
      <div className="lg:hidden flex flex-col gap-4 pt-8">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white flex items-center rounded-xl shadow-lg shadow-blue-200 overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-28 w-28 sm:h-36 sm:w-36 object-cover shrink-0"
            />
            <div className="px-4 py-3">
              <h3 className="text-lg sm:text-xl font-[lora] font-semibold text-[#2D6CCF]">
                {item.title}
              </h3>
              <p className="pt-2 font-[lora] text-sm text-gray-600 leading-6">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUsBottom;
