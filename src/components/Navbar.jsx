import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import hitesh from "../Assets/Hiteshkolheresume.pdf";

function Navbar() {
  const [nav, setnav] = useState(false);

  const handleclick = () => setnav(!nav);

  return (
    <div className=" z-10 fixed w-full h-[50px] flex justify-between items-center px-4 c text-gray-300">
      <div>
        <h1
          className="text-2xl font-bold text-[#51d5bb]"
          style={{ fontFamily: "Great Vibes" }}
        >
          HK
        </h1>
      </div>
      {/* menu */}
      <ul className="hidden md:flex ">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skill" smooth={true} duration={500}>
            Skill
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamberger */}
      <div onClick={handleclick} className="md:hidden z-10">
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen c flex flex-col justify-center items-center "
        }
      >
        <li className="py-6 text-4xl hover:text-[#27E1C1]">
          <Link onClick={handleclick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl  hover:text-[#27E1C1]">
          <Link onClick={handleclick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl  hover:text-[#27E1C1]">
          <Link onClick={handleclick} to="skill" smooth={true} duration={500}>
            Skill
          </Link>
        </li>
        <li className="py-6 text-4xl  hover:text-[#27E1C1]">
          <Link onClick={handleclick} to="work" smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className="py-6 text-4xl  hover:text-[#27E1C1]">
          <Link onClick={handleclick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <a href={hitesh} download>
          <button className="py-5 font-bold bg-[#37634d] rounded-lg border-2 hover:scale-100 duration-500 hover:border-emerald-600  m-2 p-5   text-4xl">
            Resume
          </button>
        </a>
      </ul>

      {/* social media icons */}
      <div className="hidden lg:flex fixed flex-col top-[37%] left-0">
        <ul>
          <li className="w-[170px] h-[70px] flex justify-between items-center">
            <a
              className="  flex justify-between items-center w-full border-r-6 text-gray-200 ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600"
              href="https://linkedin.com/in/hitesh-kolhe-86aab0210"
            >
              Linkedin
              <FaLinkedin size={50} />
            </a>
          </li>
        </ul>
        <ul>
          <li className="w-[170px] h-[70px] flex justify-between items-center">
            <a
              className="flex justify-between items-center w-full border-r-6 text-gray-200 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]"
              href="https://github.com/Kolhehitesh25"
            >
              Github
              <FaGithub size={50} />
            </a>
          </li>
        </ul>
        <ul>
          <li className="w-[170px] h-[70px] flex justify-between items-center">
            <a
              className="  flex justify-between items-center w-full border-r-6 text-gray-200 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#675D50]"
              href={hitesh}
            >
              Resume
              <BsFillPersonLinesFill size={50} />
            </a>
          </li>
        </ul>
        {/* <ul>
          <li className="w-[170px] h-[50px]  flex justify-between items-center">
            <a
              className="flex justify-between items-center w-full border-r-6 text-gray-200 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3ca190]"
              href="https://hiteshkohle25@gmail.com"
            >
              Email
              <HiOutlineMail size={50} />
            </a>
          </li>
        </ul> */}
      </div>
    </div>
  );
}

export default Navbar;
