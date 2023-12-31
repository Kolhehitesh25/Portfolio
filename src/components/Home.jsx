import React from "react";
import hitesh from "../Assets/myprofile.png";
// import { motion } from "framer-motion";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Home() {
  return (
    <div name="home" className=" c pt-24 w-full h-screen">
      {/* container */}

      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="3000"
        className="max-w-[1000px]  mx-auto px-3  flex flex-col items-center md:flex-row justify-center h-full "
      >
        <div>
          <p className="text-[#AD1C42]  pt-6 mx-1 text-2xl font-semibold">
            Hi,My name is
          </p>
          <h1 className="text-4xl sm:text-7xl pt-2 font-bold text-[#efefef]">
            Hitesh Kolhe
          </h1>
          <h2 className="  text-xl sm:text-7xl pt-2 font-bold text-[#bcbc6b] ">
            {/* I'm <span className="M text-yellow-400">MERN</span> Stack Developer. */}

            <Typewriter
              options={{
                strings: ["Mern Stack developer", "Frontend developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          <p className="text-[#8992b0] text-xl py-4 max-w-[700px]">
            🤝 Welcome to my portfolio! .This portfolio shows about me well in a
            world of 💻 computer science.
          </p>

          <div>
            <button className="text-white shadow-md group  d border-2 px-6 py-3 my-2 flex items-center  hover:border-pink-600  ">
              <Link to="work" smooth={true} duration={500}>
                Portfolio
              </Link>
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
            <div className="lg:hidden ml-[-275px] p-5 show1  flex  gap-4 fex-row justify-center items-center ">
              <a
                data-aos="fade-up"
                data-aos-duration="3000"
                className="hover:scale-125 duration-500 "
                href="https://github.com/Kolhehitesh25"
              >
                <FaGithub size={35} color={"white"} />
              </a>

              <a
                data-aos="fade-up"
                data-aos-duration="3000"
                className="hover:scale-125 duration-500  bg-white"
                href="https://linkedin.com/in/hitesh-kolhe-86aab0210"
              >
                <FaLinkedin size={35} color={"#0A66C2"} />
              </a>
            </div>
          </div>
        </div>
        {/* <motion.div
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.8 }}
          style={{ x: 1, duration: 1000 }}
          className=" shadow-sm ml-44 mb-20"
        > */}

        <img className="image" src={hitesh} alt="profile"></img>

        {/* </motion.div> */}
      </div>
    </div>
  );
}

export default Home;
