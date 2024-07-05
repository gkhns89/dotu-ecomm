import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header
      aria-label="header"
      className="min-w-[414px] max-w-[1280px] mx-8 my-6"
    >
      <div
        aria-label="header-top"
        className="flex justify-between items-center"
      >
        <Link to={"/"}>
          <h1
            aria-label="logo"
            className="min-w-[153px] font-bold leading-8 tracking-[0.1px] text-2xl text-txt-b"
          >
            BrandName
          </h1>
        </Link>
        <div aria-label="header-search" className="sm:flex items-center hidden">
          <input
            type="text"
            placeholder="Search"
            className="border-2 border-gray-400 p-2"
          />
          <select className="border-2 border-gray-400">
            <option>Black Friday</option>
            <option>Outlet</option>
          </select>
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div
          aria-label="header-buttons"
          className="flex p-3 gap-8 justify-between"
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
        aria-label="nav-search"
        className="flex flex-col gap-4 mt-12 sm:hidden"
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
        aria-label="mobile-nav"
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
