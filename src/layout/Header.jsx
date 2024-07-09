import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faBars,
  faSearch,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header
      aria-label="header"
      className="flex flex-col sm:bg-[rgba(243,243,243,0.74)] min-w-[414px] px-8 py-6 justify-between"
    >
      <div
        aria-label="header-top"
        className="flex min-w-full lg:gap-10 md:gap-6 sm:gap-2 justify-between items-center"
      >
        <Link to={"/"}>
          <h1
            aria-label="logo"
            className="min-w-[153px] font-bold leading-8 tracking-[0.1px] text-2xl text-txt-b"
          >
            BrandName
          </h1>
        </Link>
        <div
          aria-label="header-search"
          className="sm:mx-2 md:mx-4 items-center hidden sm:flex"
        >
          <input
            type="text"
            placeholder="Search"
            className="md:max-w-36 lg:max-w-52 px-6 py-3 sm:hidden md:block sm:h-max"
          />
          <select className="px-6 py-4 mr-2 max-w-36 sm:hidden md:block">
            <option>Black Friday</option>
            <option>Outlet</option>
          </select>
          <button className="p-5 bg-c3 text-txt-w sm:rounded-md md:rounded-e-md lg:rounded-e-md">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div aria-label="header-login-register" className="sm:flex md:flex-col md:gap-2 lg:flex-row lg:gap-11 gap-11 text-sm hidden">
          <button className="text-txt-b">Login</button>
          <button className=" text-txt-w bg-c3 rounded-s-md py-4 px-6 min-w-56">
            Become a member <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <div
          aria-label="mobile-header-buttons"
          className="flex p-3 gap-8 justify-between sm:hidden"
        >
          <FontAwesomeIcon
            icon={faUser}
            className="cursor-pointer text-2xl text-txt-b"
          />
          <FontAwesomeIcon
            icon={faCartShopping}
            className="cursor-pointer text-2xl text-txt-b"
          />
          <FontAwesomeIcon
            icon={faBars}
            className="cursor-pointer text-2xl text-txt-b"
          />
        </div>
      </div>
      <div
        aria-label="mobile-search"
        className="flex flex-col min-w-full gap-4 mt-12 sm:hidden"
      >
        <input
          type="text"
          placeholder="Search"
          className="px-6 py-3 border-2 rounded border-c3 text-txt-g"
        />
        <select className="px-6 py-3 border-2 rounded border-c3 text-txt-g">
          <option>Black Friday</option>
          <option>Outlet</option>
        </select>
        <button className="px-10 py-4 rounded fond-bold text-txt-w bg-c3">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <nav
        aria-label="header-nav"
        className="flex flex-col text-center gap-10 pt-14 sm:flex-row sm:text-sm sm:font-bold sm:pt-8 sm:gap-5"
      >
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
