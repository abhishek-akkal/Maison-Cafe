import React from "react";
import { Link } from "react-router-dom";

const NavbarRight = () => {
  return (
    // Right side of the navbar sign up button
    <Link
      to="/signin"
      className="hidden md:flex h-10 w-28 border border-[#f3b667] items-center justify-center rounded-xl hover:border hover:border-[#f9a940] hover:text-[#f7c687] hover:shadow hover:shadow-[#f0aa4e] cursor-pointer active:scale-95 transition-all duration-300"
    >
      <button className="cursor-pointer font-semibold">Sign in</button>
    </Link>
  );
};

export default NavbarRight;
