import { FaLeaf, FaHeart } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import ContentCoffee from "./ContentCoffee";
import ContentCake from "./ContentCake";
import ContentIceCream from "./ContentIceCream";

const ContentTop = () => {
  return (
    <div>
      {/* Features Bar */}
      <div className="flex items-center justify-center py-3 px-4">
        <div className="w-full max-w-5xl bg-[#F5F1EA] flex flex-col sm:flex-row items-center justify-around rounded-2xl px-6 py-5 gap-6 sm:gap-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-[#F5E6D3] text-[#eb8500] text-2xl flex items-center justify-center rounded-full shrink-0">
              <FaLeaf />
            </div>
            <div className="font-[lora]">
              <h2 className="text-lg font-semibold">Premium Ingredients</h2>
              <p className="text-sm text-gray-700">
                We use only the finest ingredients
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-[#F5E6D3] text-[#ff9500] text-2xl flex items-center justify-center rounded-full shrink-0">
              <FaHeart />
            </div>
            <div className="font-[lora]">
              <h2 className="text-lg font-semibold">Made with Love</h2>
              <p className="text-sm text-gray-700">
                Crafted with passion every day
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-[#F5E6D3] text-[#ff9100] text-2xl flex items-center justify-center rounded-full shrink-0">
              <BsStars />
            </div>
            <div className="font-[lora]">
              <h2 className="text-lg font-semibold">Satisfaction Guaranteed</h2>
              <p className="text-sm text-gray-700">
                Your happiness, our priority
              </p>
            </div>
          </div>
        </div>
      </div>

      <ContentCoffee />
      <ContentCake />
      <ContentIceCream />
    </div>
  );
};

export default ContentTop;
