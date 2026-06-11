import React from "react";
import NavbarRight from "./NavbarRight";
import { NavLink } from "react-router-dom";

const NavbarCenter = () => {
  const linkClass = ({ isActive }) =>
    `active:scale-95 cursor-pointer relative group transition-all duration-300 ${
      isActive ? "text-[#f7c687]" : "hover:text-[#f7c687]"
    }`;

  return (
    <div className="hidden md:flex items-center gap-6 lg:gap-12 pr-10">
      <div className="flex items-center gap-20">
        <NavLink to="/" end className={linkClass}>
          {({ isActive }) => (
            <>
              Home
              <span
                className={`absolute left-0 -bottom-5 h-1 bg-[#f7c687] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </>
          )}
        </NavLink>

        <NavLink to="/coffee" className={linkClass}>
          {({ isActive }) => (
            <>
              Coffee
              <span
                className={`absolute left-0 -bottom-5 h-1 bg-[#f7c687] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </>
          )}
        </NavLink>

        <NavLink to="/cake" className={linkClass}>
          {({ isActive }) => (
            <>
              Cakes
              <span
                className={`absolute left-0 -bottom-5 h-1 bg-[#f7c687] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </>
          )}
        </NavLink>

        <NavLink to="/icecream" className={linkClass}>
          {({ isActive }) => (
            <>
              Ice Cream
              <span
                className={`absolute left-0 -bottom-5 h-1 bg-[#f7c687] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </>
          )}
        </NavLink>

        <NavLink to="/aboutus" className={linkClass}>
          {({ isActive }) => (
            <>
              About Us
              <span
                className={`absolute left-0 -bottom-5 h-1 bg-[#f7c687] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
              ></span>
            </>
          )}
        </NavLink>
      </div>
      <NavbarRight />
    </div>
  );
};

export default NavbarCenter;
