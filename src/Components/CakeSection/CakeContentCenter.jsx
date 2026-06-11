import CakeContentCenter1 from "../../assets/Cake/CakeContentCenter1.png";
import { FaCheck, FaHeart } from "react-icons/fa";

const CakeContentCenter = () => {
  return (
    <div className="flex justify-center mt-20 px-4">
      {/* Desktop — original layout */}
      <div className="hidden lg:flex h-110 w-350 bg-[#F3DDE5] rounded-2xl items-center justify-between px-14 overflow-hidden shadow-md shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
        <div className="w-[40%] flex justify-center">
          <img
            src={CakeContentCenter1}
            alt="Chocolate Cake"
            className="h-100 object-contain"
          />
        </div>
        <div className="w-[50%]">
          <div className="flex items-center gap-3 text-[#C56A8A] mb-3">
            <span className="h-0.5 w-10 bg-[#D88BA6]"></span>
            <FaHeart />
            <span className="pinyon italic font-[lora] text-xl font-semibold">
              Featured Creation
            </span>
            <FaHeart />
            <span className="h-0.5 w-10 bg-[#D88BA6]"></span>
          </div>
          <h2 className="text-3xl font-[lora] italic font-bold text-[#5A1E2A] leading-tight">
            Chocolate Dream Delight
          </h2>
          <div className="flex items-center gap-4 mt-4 mb-5">
            <span className="h-px w-28 bg-[#D9A2B4]"></span>
            <FaHeart className="text-[#D88BA6]" />
            <span className="h-px w-28 bg-[#D9A2B4]"></span>
          </div>
          <p className="text-[#7A5563] text-lg leading-8 font-[Lora] font-medium italic max-w-2xl">
            A luxurious chocolate masterpiece crafted with rich cocoa layers,
            silky frosting, and decadent toppings. Every bite delivers the
            perfect balance of sweetness and indulgence, making it a favorite
            for celebrations and everyday treats.
          </p>
          <div className="mt-6 space-y-4">
            {[
              "Premium Belgian Chocolate",
              "Freshly Baked Daily",
              "Perfect For Every Occasion",
            ].map((f, i) => (
              <div key={i} className="flex items-center italic gap-4">
                <div className="h-7 w-7 rounded-full bg-[#C56A8A] text-white flex items-center justify-center shrink-0">
                  <FaCheck size={10} />
                </div>
                <span className="text-[#6B3A4D] text-xl font-serif">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet */}
      <div className="lg:hidden w-full bg-[#F3DDE5] rounded-2xl shadow-md shadow-pink-200 overflow-hidden cursor-pointer">
        <div className="flex justify-center pt-6">
          <img
            src={CakeContentCenter1}
            alt="Chocolate Cake"
            className="h-52 object-contain"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 text-[#C56A8A] mb-3">
            <FaHeart />
            <span className="pinyon italic text-lg font-semibold">
              Featured Creation
            </span>
            <FaHeart />
          </div>
          <h2 className="text-2xl font-[lora] italic font-bold text-[#5A1E2A] leading-tight">
            Chocolate Dream Delight
          </h2>
          <p className="text-[#7A5563] text-base leading-7 font-[Lora] font-medium italic mt-4">
            A luxurious chocolate masterpiece crafted with rich cocoa layers,
            silky frosting, and decadent toppings.
          </p>
          <div className="mt-5 space-y-3">
            {[
              "Premium Belgian Chocolate",
              "Freshly Baked Daily",
              "Perfect For Every Occasion",
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-[#C56A8A] text-white flex items-center justify-center shrink-0">
                  <FaCheck size={9} />
                </div>
                <span className="text-[#6B3A4D] text-base font-serif italic">
                  {f}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeContentCenter;
