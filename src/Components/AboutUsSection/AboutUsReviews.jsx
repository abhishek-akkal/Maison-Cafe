import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const AboutUsReviews = ({ reviewsData, reviews, nextSlidAbt, preSlidAbt }) => {
  const visibleReviews = reviewsData.slice(reviews, reviews + 3);
  const mobileReview = reviewsData[reviews];

  return (
    <div>
      <div className="pt-20 px-4">
        <h3 className="flex justify-center text-[#2D6CCF] font-[lora] font-bold text-xl">
          OUR HAPPY CUSTOMERS
        </h3>
        <div className="flex items-center justify-center py-2 gap-2">
          <span className="h-px w-15 bg-[#2D6CCF]"></span>
          <IoIosHeartEmpty className="text-lg text-[#2D6CCF]" />
          <span className="h-px w-15 bg-[#2D6CCF]"></span>
        </div>
      </div>

      {/* Desktop heading */}
      <div className="hidden lg:flex justify-center pb-12">
        <div className="text-5xl flex font-serif items-center gap-3 font-semibold">
          <h1>Loved by Many,</h1>
          <h1 className="text-[#2D6CCF]">Recommended by All</h1>
        </div>
      </div>

      {/* Mobile heading */}
      <div className="lg:hidden flex flex-col items-center pb-8 font-serif text-2xl sm:text-3xl font-semibold text-center px-4">
        <h1>Loved by Many,</h1>
        <h1 className="text-[#2D6CCF]">Recommended by All</h1>
      </div>

      {/* Desktop reviews — original 3-card layout */}
      <div className="hidden lg:flex items-center justify-center gap-8">
        <button
          onClick={preSlidAbt}
          className="h-14 w-14 flex items-center justify-center rounded-full bg-white shadow-lg text-4xl text-[#2D6CCF] cursor-pointer hover:bg-[#2D6CCF] hover:text-white active:scale-95 transition-all duration-300"
        >
          <MdKeyboardArrowLeft />
        </button>

        <div className="flex gap-8">
          {visibleReviews.map((review, index) => (
            <div
              key={index}
              className="w-100 h-70 bg-white rounded-3xl p-8 shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-300"
            >
              <div className="text-xl text-yellow-500">
                {"⭐".repeat(review.stars)}
              </div>
              <p className="text-gray-700 mt-5 leading-8 text-lg font-[lora]">
                {review.description}
              </p>
              <div className="flex items-center gap-4 mt-8">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-[#2D6CCF] font-semibold text-xl">
                    {review.name}
                  </h3>
                  <p className="text-gray-500">{review.days}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlidAbt}
          className="h-14 w-14 flex items-center justify-center rounded-full bg-white shadow-lg text-4xl text-[#2D6CCF] cursor-pointer hover:bg-[#2D6CCF] hover:text-white active:scale-95 transition-all duration-300"
        >
          <MdKeyboardArrowRight />
        </button>
      </div>

      {/* Mobile reviews — 1 card at a time */}
      <div className="lg:hidden flex items-center justify-center gap-4 px-4">
        <button
          onClick={preSlidAbt}
          className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-white shadow-lg text-3xl text-[#2D6CCF] cursor-pointer hover:bg-[#2D6CCF] hover:text-white active:scale-95 transition-all duration-300"
        >
          <MdKeyboardArrowLeft />
        </button>

        {mobileReview && (
          <div className="flex-1 bg-white rounded-3xl p-6 shadow-lg shadow-blue-200">
            <div className="text-lg text-yellow-500">
              {"⭐".repeat(mobileReview.stars)}
            </div>
            <p className="text-gray-700 mt-4 leading-7 text-sm sm:text-base font-[lora]">
              {mobileReview.description}
            </p>
            <div className="flex items-center gap-3 mt-6">
              <img
                src={mobileReview.image}
                alt={mobileReview.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-[#2D6CCF] font-semibold text-base">
                  {mobileReview.name}
                </h3>
                <p className="text-gray-500 text-sm">{mobileReview.days}</p>
              </div>
            </div>
          </div>
        )}

        <button
          onClick={nextSlidAbt}
          className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-white shadow-lg text-3xl text-[#2D6CCF] cursor-pointer hover:bg-[#2D6CCF] hover:text-white active:scale-95 transition-all duration-300"
        >
          <MdKeyboardArrowRight />
        </button>
      </div>

      {/* Footer CTA */}
      <div className="flex flex-col justify-center pt-20 px-4">
        <div className="flex flex-col items-center justify-center font-[lora] font-bold text-2xl lg:text-3xl text-center">
          <h2>Good Food. Good Coffee</h2>
          <h2 className="text-[#2D6CCF]">Great Memories.</h2>
        </div>
        <div className="flex items-center justify-center text-base lg:text-xl font-[lora] text-center mt-2">
          That's what we promise at Maison Café
        </div>
        <Link to="/signin" className="flex justify-center pt-5">
          <div className="px-6 py-3 rounded-full font-serif font-bold border border-[#2D6CCF] text-[#2D6CCF] flex items-center justify-center gap-2 hover:bg-[#2D6CCF] hover:text-white active:scale-95 transition-all duration-300 cursor-pointer">
            <h3>Visit Us Today</h3>
            <FaHeart />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AboutUsReviews;
