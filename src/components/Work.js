import React from "react";
import KeeperApp from "../Assets/Keeper.png";
import TodoApp from "../Assets/todo.png";
import dogsite from "../Assets/Dogisite.png";
import newsletter from "../Assets/lettersignup.png";
import Blog from "../Assets/blogsite.png";
import simon from "../Assets/game.png";

function Work() {
  return (
    <div name="work" className=" w-full  md:h-screen  text-gray-300 c">
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="3000"
        className="max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full"
      >
        <div className="pb-8 py-3 pt-10">
          <p
            data-aos="fade-left"
            data-aos-duration="3000"
            className="text-4xl  font-bold inline border-b-4 text-gray-300 border-pink-600"
          >
            Portfolio.
          </p>
          <p
            data-aos="fade-left"
            data-aos-duration="3000"
            className="py-7 text-xl text-gray-300"
          >
            Check Out Some of Recent Work 👇🏻
          </p>
        </div>

        {/* container  */}
        <div className=" grid sm:grid-cols-2 md:grid-cols-3  gap-7 ">
          {/* Grid items */}
          <div
            style={{ backgroundImage: `url(${KeeperApp})` }}
            className="shadow-lg shadow-[#040c16]  group container  rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}

            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl text-lime-200 font-bold  tracking-wider">
                Keeper Application
              </span>
              <div>
                <a href="https://webapp-de8dd.web.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white  hover:scale-105 duration-500   text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Kolhehitesh25/KeeperAPP">
                  <button className="text-center rounded-lg px-4  py-3 m-2 hover:scale-105 duration-500 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Blog})` }}
            className="shadow-lg shadow-[#040c16] group container  rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}

            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                Blog Application
              </span>
              <div>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 hover:scale-105 duration-500 bg-white text-gray-700 font-bold text-lg">
                    Look
                  </button>
                </a>
                <a href="https://github.com/Kolhehitesh25/BlogWebsite">
                  <button className="text-center rounded-lg px-4 py-3 m-2 hover:scale-105 duration-500  bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${newsletter})` }}
            className="shadow-lg shadow-[#040c16] group container  rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}

            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                New-Letter Application
              </span>
              <div>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 hover:scale-105 duration-500 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Kolhehitesh25/Newsletter-signup">
                  <button className="text-center rounded-lg px-4 py-3 m-2 hover:scale-105 duration-500 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Items */}
          <div
            style={{ backgroundImage: `url(${simon})` }}
            className="shadow-lg shadow-[#040c16] group container  rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}

            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                GamSimon
              </span>
              <div>
                <a href="https://gamesimon1357.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 hover:scale-105 duration-500 bg-white text-gray-700 font-bold text-lg">
                    Look
                  </button>
                </a>
                <a href="https://github.com/Kolhehitesh25/simon-game">
                  <button className="text-center rounded-lg px-4 py-3 m-2 hover:scale-105 duration-500 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${TodoApp})` }}
            className="shadow-lg shadow-[#040c16] group container   rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}

            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                TO DO App
              </span>
              <div>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 hover:scale-105 duration-500 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Kolhehitesh25/TODOAPP">
                  <button className="text-center rounded-lg px-4 py-3 m-2 hover:scale-105 duration-500 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${dogsite})` }}
            className="shadow-lg shadow-[#040c16] group container  rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}

            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bold text-white tracking-wider">
                Dogisite
              </span>
              <div>
                <a href="https://dogisite.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 hover:scale-105 duration-500 bg-white text-gray-700 font-bold text-lg">
                    look
                  </button>
                </a>
                <a href="https://github.com/Kolhehitesh25/Tindog-site">
                  <button className="text-center rounded-lg px-4 py-3 m-2 hover:scale-105 duration-500  bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
