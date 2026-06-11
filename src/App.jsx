import { useState } from "react";
import ScrollToTop from "./Components/ScrollTop";
import HeroSection from "./Components/Hero/HeroSection";
import NavbarLeft from "./Components/Navbar/NavbarLeft";
import HeroOne from "./assets/HeroSection/HeroOne.png";
import HeroTwo from "./assets/HeroSection/HeroTwo.png";
import HeroThree from "./assets/HeroSection/HeroThree.png";
import ContentTop from "./Components/Content/ContentTop";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coffee from "./Components/CoffeeSection/Coffee";
import Cake from "./Components/CakeSection/Cake";
import IceCream from "./Components/IceCreamSection/IceCream";
import AboutUs from "./Components/AboutUsSection/AboutUs";
import review1 from "./assets/AboutUS/ReviewImg1.png";
import review2 from "./assets/AboutUS/ReviewImg2.png";
import review3 from "./assets/AboutUS/ReviewImg3.png";
import review4 from "./assets/AboutUS/ReviewImg4.png";
import review5 from "./assets/AboutUS/ReviewImg5.png";
import review6 from "./assets/AboutUS/ReviewImg6.png";
import SignIn from "./Components/SignInSection/SignIn";

const heroData = [
  {
    shorttitle: "Signature Coffee Collection",
    title: "Perfect Coffee",
    titletwo: "for Perfect Moments",
    desc: "Discover expertly crafted coffees made with premium beans,",
    desctwo: "bold flavors, and a touch of café artistry in every cup.",
    btn: "Explore More ",
    btntwo: "Learn More",
    image: HeroOne,
    link: "/coffee",
  },
  {
    shorttitle: "Sweet Moments Await",
    title: "Happiness is",
    titletwo: "Just a Slice Away",
    desc: "Indulge in handcrafted cakes baked with premium ingredients,",
    desctwo: "rich flavors, and a touch of sweetness in every bite.",
    btn: "Explore More ",
    btntwo: "Learn More",
    image: HeroTwo,
    link: "/cake",
  },
  {
    shorttitle: "Sweet Chilled Moments",
    title: "Cool Treats for",
    titletwo: "Every Mood",
    desc: "Indulge in refreshing ice creams crafted with",
    desctwo: "premium ingredients and irresistible flavors.",
    btn: "Explore More ",
    btntwo: "Learn More",
    image: HeroThree,
    link: "/icecream",
  },
];

const reviewsData = [
  {
    stars: "5",
    description:
      "Amazing coffee, delicious cake and the ice cream is out of this world! My go-to spot for a perfect evening.",
    image: review1,
    name: "Vanessa Laurent",
    days: "2 days ago",
  },

  {
    stars: 4,
    description:
      "The ambience is cozy, the staff is super friendly and the food is always fresh. Highly recommended!",
    image: review2,
    name: "David Cross",
    days: "1 week ago",
  },

  {
    stars: 5,
    description:
      "Perfect place to hang out with friends. I tried their cold coffee and red velvet cake — absolute perfection!",
    image: review3,
    name: "Sofia Alvarez",
    days: "3 days ago",
  },

  {
    stars: 5,
    description:
      "One of the best cafés I've visited. The coffee is rich, the desserts are amazing and the atmosphere is relaxing.",
    image: review4,
    name: "Rohan Verma",
    days: "5 days ago",
  },

  {
    stars: 4,
    description:
      "Their handcrafted ice creams are incredible. Every flavor tastes fresh and premium. Will definitely visit again!",
    image: review5,
    name: "Hazel Vance",
    days: "4 days ago",
  },

  {
    stars: 5,
    description:
      "A perfect blend of great coffee, delicious cakes and excellent service. Maison Café never disappoints.",
    image: review6,
    name: "Karan Patel",
    days: "1 day ago",
  },
];

const App = () => {
  const [hero, setHero] = useState(0);

  const nextSlid = () => {
    setHero((prev) => (prev + 1) % heroData.length);
  };

  const preSlid = () => {
    setHero((prev) => (prev - 1 + heroData.length) % heroData.length);
  };

  // About Us section Reviews
  const [reviews, setReviews] = useState(0);

  const nextSlidAbt = () => {
    setReviews((prev) => (prev + 3) % reviewsData.length);
  };

  const preSlidAbt = () => {
    setReviews((prev) => (prev - 3 + reviewsData.length) % reviewsData.length);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavbarLeft />

      <div className="min-h-screen pt-20 md:pt-20">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection
                  hero={heroData[hero]}
                  nextSlid={nextSlid}
                  preSlid={preSlid}
                />
                <ContentTop />
              </>
            }
          />

          <Route path="/coffee" element={<Coffee />} />
          <Route path="/cake" element={<Cake />} />
          <Route path="/icecream" element={<IceCream />} />

          <Route
            path="/aboutus"
            element={
              <AboutUs
                reviewsData={reviewsData}
                reviews={reviews}
                nextSlidAbt={nextSlidAbt}
                preSlidAbt={preSlidAbt}
              />
            }
          />
          <Route path="/signin" element={<SignIn />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
