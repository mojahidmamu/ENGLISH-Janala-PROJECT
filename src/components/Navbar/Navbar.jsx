import React from "react";
import Navlogo from "../../assets/assets/logo.png";
import FaqImg from "../../assets/assets/fa-circle-question.png";
import LearnImg from "../../assets/assets/fa-book-open.png";
import LogOutImg from "../../assets/assets/fa-arrow-right-from-bracket.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <div className="flex gap-3">
        {/* Button -01 */}
        <div className="flex flex-row items-center gap-2 border-2 p-1 rounded-lg">
          <img className="w-7 h-7" src={FaqImg} alt="" />
          <Link to="/FAQsection">
            <li className="font-bold">FAQ</li>
          </Link>
        </div>
        {/* Button -02 */}
        <div className="flex flex-row items-center gap-2 border-2 p-1 rounded-lg">
          <img className="w-7 h-7" src={LearnImg} alt="" />
          <Link to="/learn">
            <li className="font-bold">Learn</li>
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
        <Link to="/">
          {" "}
          <button className="btn btn-outline mr-2">Home</button>
        </Link>
        <a className="btn">
          <h1 className="font-bold text-2xl gap-4">
            FOUR<span className="text-red-400 underline">TEEN</span>{" "}
            <span className="text-4xl text-amber-400">E</span>nglish
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
