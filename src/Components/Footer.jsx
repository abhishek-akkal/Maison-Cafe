import { Link } from "react-router-dom";
import { SiCoffeescript } from "react-icons/si";
import { FaPhoneAlt, FaRegClock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-center gap-2">
            <SiCoffeescript className="text-[#c9a26b] text-5xl" />
            <h2 className="text-3xl font-serif text-[#c9a26b]">MAISON CAFÉ</h2>
          </div>
          <div className="text-gray-300 text-base text-center sm:text-left">
            <p>Premium café experience</p>
            <p>crafted with passion.</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[#c9a26b] text-xl font-semibold">QUICK LINKS</h3>
          <Link
            to="/"
            className="hover:text-[#c9a26b] transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/coffee"
            className="hover:text-[#c9a26b] transition-all duration-300"
          >
            Coffee
          </Link>
          <Link
            to="/cake"
            className="hover:text-[#c9a26b] transition-all duration-300"
          >
            Cakes
          </Link>
          <Link
            to="/icecream"
            className="hover:text-[#c9a26b] transition-all duration-300"
          >
            Ice Cream
          </Link>
          <Link
            to="/aboutus"
            className="hover:text-[#c9a26b] transition-all duration-300"
          >
            About Us
          </Link>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[#c9a26b] text-xl font-semibold">CATEGORIES</h3>
          <p>Coffee</p>
          <p>Cakes</p>
          <p>Ice Cream</p>
          <p>Specials</p>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[#c9a26b] text-xl font-semibold">CONTACT</h3>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-[#c9a26b] shrink-0" />
            <p>+1 (555) 234-5678</p>
          </div>
          <div className="flex items-center gap-3">
            <IoIosMail className="text-[#c9a26b] text-xl shrink-0" />
            <p>orders@maisoncafe.com</p>
          </div>
          <div className="flex items-center gap-3">
            <FaLocationDot className="text-[#c9a26b] shrink-0" />
            <p>123 Coffee Street, Brew City</p>
          </div>
          <div className="flex items-center gap-3">
            <FaRegClock className="text-[#c9a26b] shrink-0" />
            <p>Open Daily: 7:30 AM - 10:30 PM</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#252525] px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm text-center">
          © 2026 Maison Café. All Rights Reserved.
        </p>
        <div className="flex gap-5">
          <FaInstagram className="text-2xl cursor-pointer hover:text-[#c9a26b] transition-all duration-300" />
          <FaFacebookF className="text-2xl cursor-pointer hover:text-[#c9a26b] transition-all duration-300" />
          <FaTwitter className="text-2xl cursor-pointer hover:text-[#c9a26b] transition-all duration-300" />
          <FaYoutube className="text-2xl cursor-pointer hover:text-[#c9a26b] transition-all duration-300" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
