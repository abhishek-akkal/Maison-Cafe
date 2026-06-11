import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import NavbarCenter from "./NavbarCenter";
import { HiMenu, HiX } from "react-icons/hi";

const NavbarLeft = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#111111] text-[#F5E6D3]">
      {/* Main Navbar Row */}
      <div className="h-20 flex items-center justify-between px-6 md:px-10">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center cursor-pointer"
        >
          <img src={Logo} alt="Logo" className="h-20 w-auto" />
          <div className="text-xl font-semibold font-serif relative right-6 hover:text-[#f7c687] transition-all duration-300">
            Maison Café
          </div>
        </Link>

        {/* Desktop menu */}
        <NavbarCenter />

        {/* Hamburger — mobile only */}
        <div
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1a1a] flex flex-col px-6 py-6 gap-6 text-lg border-t border-[#2a2a2a]">
          <Link
            to="/"
            onClick={closeMenu}
            className="hover:text-[#f7c687] transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/coffee"
            onClick={closeMenu}
            className="hover:text-[#f7c687] transition-all duration-300"
          >
            Coffee
          </Link>
          <Link
            to="/cake"
            onClick={closeMenu}
            className="hover:text-[#f7c687] transition-all duration-300"
          >
            Cakes
          </Link>
          <Link
            to="/icecream"
            onClick={closeMenu}
            className="hover:text-[#f7c687] transition-all duration-300"
          >
            Ice Cream
          </Link>
          <Link
            to="/aboutus"
            onClick={closeMenu}
            className="hover:text-[#f7c687] transition-all duration-300"
          >
            About Us
          </Link>
          <Link
            to="/signin"
            onClick={closeMenu}
            className="h-10 w-28 border border-[#f3b667] flex items-center justify-center rounded-xl font-semibold hover:text-[#f7c687] transition-all duration-300"
          >
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavbarLeft;
