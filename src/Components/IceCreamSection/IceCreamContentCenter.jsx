import { Link } from "react-router-dom";
import IceCreamCC1 from "../../assets/IceCream/IceCreamContentCenter1.png";
import IceCreamCC2 from "../../assets/IceCream/IceCreamContentCenter2.png";
import { IoIceCream } from "react-icons/io5";

const IceCreamContentCenter = () => {
  return (
    <div className="pt-20 px-4">
      <div className="flex justify-center text-2xl lg:text-3xl gap-1 font-[lora] italic font-bold">
        <h3>Sweet Deals,</h3>
        <h3 className="text-[#2D7FEA]">Cool Treats</h3>
      </div>
      <div className="flex items-center justify-center pt-1">
        <span className="h-px w-35 bg-[#2D7FEA]"></span>
        <IoIceCream className="text-2xl text-[#2D7FEA]" />
        <span className="h-px w-35 bg-[#2D7FEA]"></span>
      </div>

      {/* Desktop — original layout */}
      <div className="hidden lg:flex justify-center pt-10">
        <div className="h-70 w-340 flex justify-center gap-10 bg-[#2D7FEA] rounded-2xl shadow-md shadow-blue-200 hover:shadow-xl hover:shadow-blue-300">
          <div className="flex items-center justify-center gap-10 pl-10">
            <div className="flex flex-col text-5xl gap-3 font-serif italic text-white font-bold">
              <h3>Frozen Treats,</h3>
              <h3 className="text-[#F4D677]">Hot Deals!</h3>
            </div>
            <span className="h-40 w-px bg-white"></span>
            <div className="font-semibold text-white font-[lora]">
              <h2 className="text-2xl">Get 20% OFF</h2>
              <h2 className="text-2xl">On ALL Sundaes</h2>
              <h2 className="text-2xl">This Weekend Only!</h2>
              <Link
                to="/signin"
                className="h-10 w-45 border-2 border-[#F4D677] text-xl font-semibold flex items-center justify-center mt-5 rounded-full hover:bg-[#F4D677] hover:text-black active:scale-95 cursor-pointer transition-all duration-300"
              >
                Grab the Deal
              </Link>
            </div>
          </div>
          <img src={IceCreamCC1} alt="Ice cream" />
          <div className="relative h-30 w-36 top-25 right-15">
            <img
              src={IceCreamCC2}
              alt="Offer"
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-[#4B240F] text-3xl pinyon font-semibold">
                Only
              </p>
              <p className="text-[#2D7FEA] text-xl italic font-bold leading-none">
                $10
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet */}
      <div className="lg:hidden mt-8">
        <div className="bg-[#2D7FEA] rounded-2xl shadow-md shadow-blue-200 p-6 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl sm:text-3xl font-serif italic text-white font-bold">
              Frozen Treats,
            </h3>
            <h3 className="text-2xl sm:text-3xl font-serif italic text-[#F4D677] font-bold">
              Hot Deals!
            </h3>
          </div>

          <div className="w-full h-px bg-white/40"></div>

          <div className="font-semibold text-white font-[lora] flex flex-col gap-1">
            <h2 className="text-lg sm:text-xl">Get 20% OFF</h2>
            <h2 className="text-lg sm:text-xl">On ALL Sundaes</h2>
            <h2 className="text-lg sm:text-xl">This Weekend Only!</h2>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/signin"
              className="px-5 py-2 border-2 border-[#F4D677] text-[#F4D677] font-semibold rounded-full hover:bg-[#F4D677] hover:text-black active:scale-95 cursor-pointer transition-all duration-300 text-sm font-[lora]"
            >
              Grab the Deal
            </Link>
            <div className="relative h-16 w-16">
              <img
                src={IceCreamCC2}
                alt="Offer"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-[#4B240F] text-xs pinyon font-semibold">
                  Only
                </p>
                <p className="text-[#2D7FEA] text-xs italic font-bold leading-none">
                  $10
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={IceCreamCC1}
              alt="Ice cream"
              className="h-32 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IceCreamContentCenter;
