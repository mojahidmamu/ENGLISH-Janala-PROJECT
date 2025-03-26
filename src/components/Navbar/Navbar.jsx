import React from "react";
import Navlogo from "../../assets/assets/logo.png";
import FaqImg from "../../assets/assets/fa-circle-question.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <div>
        {/* Button -01 */}
        <div className="flex flex-row gap-1 border-2 p-1 rounded-lg">
          <img className="w-auto h-10" src={FaqImg} alt="" />
          <Link>
            <li>
              <a className="font-bold">FAQ</a>{" "}
            </li>
          </Link>
        </div>
      </div>

      {/* FAQ, Learn, and Logout */}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <div>
          <a className="btn btn-ghost text-xl">
            <img src={Navlogo} alt="" />
            <h1 className="font-bold text-2xl gap-4">
              ENG<span className="text-green-400">LISH</span>{" "}
              <span className="text-3xl text-orange-500">L</span>earning
            </h1>
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
