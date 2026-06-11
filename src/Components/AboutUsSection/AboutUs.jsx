import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import AboutUSTop from "./AboutUSTop";
import AboutUSCenter from "./AboutUSCenter";
import AboutUsBottom from "./AboutUsBottom";
import AboutUsReviews from "./AboutUsReviews";

const AboutUs = ({ reviewsData, reviews, nextSlidAbt, preSlidAbt }) => {
  return (
    <div className="min-h-screen bg-[#E8F0F8] pb-10">
      <div className="pt-10 px-4">
        <h3 className="flex justify-center text-[#2D6CCF] font-bold text-xl">
          ABOUT MAISON CAFÉ
        </h3>
        <div className="flex items-center justify-center py-2 gap-2">
          <span className="h-px w-15 bg-[#2D6CCF]"></span>
          <IoIosHeartEmpty className="text-lg text-[#2D6CCF]" />
          <span className="h-px w-15 bg-[#2D6CCF]"></span>
        </div>
      </div>

      <div className="flex justify-center px-4 text-center">
        <div className="flex flex-col items-center gap-3 font-semibold">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl">
            More Than a Café,
          </h1>
          <h1 className="pinyon text-[#2D6CCF] text-3xl sm:text-4xl lg:text-6xl">
            It's an Experience
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-center py-2 gap-2 pt-5">
        <span className="h-px w-15 bg-[#2D6CCF]"></span>
        <FaRegHeart className="text-lg text-[#2D6CCF]" />
        <span className="h-px w-15 bg-[#2D6CCF]"></span>
      </div>

      {/* Desktop description */}
      <div className="hidden lg:flex flex-col items-center justify-center py-2 gap-2 pt-5 font-serif">
        <h3>At Maison Café, we bring together the best of coffee, cakes and</h3>
        <h3>
          ice cream to create moments that feel like home. From the rich aroma
        </h3>
        <h3>of freshly brewed coffee to the joy of our handcrafted treats,</h3>
        <h3>everything we do is made with passion, quality ingredients,</h3>
        <h3>and a touch of love.</h3>
      </div>

      {/* Mobile description */}
      <div className="lg:hidden px-6 pt-5 text-center font-serif text-sm sm:text-base text-gray-700 leading-7">
        <p>
          At Maison Café, we bring together the best of coffee, cakes and ice
          cream to create moments that feel like home. Everything we do is made
          with passion, quality ingredients, and a touch of love.
        </p>
      </div>

      <div className="flex justify-center pt-5">
        <div className="px-6 py-2 rounded-full font-serif font-bold border border-[#2D6CCF] text-[#2D6CCF] flex items-center justify-center gap-2 hover:bg-[#2D6CCF] hover:text-white transition-all duration-300 cursor-pointer">
          <h3>Our Story</h3>
          <FaHeart />
        </div>
      </div>

      <AboutUSTop />
      <AboutUSCenter />
      <AboutUsBottom />
      <AboutUsReviews
        reviewsData={reviewsData}
        reviews={reviews}
        nextSlidAbt={nextSlidAbt}
        preSlidAbt={preSlidAbt}
      />
    </div>
  );
};

export default AboutUs;
