import React from "react";
import Html from "../Assets/html.png";
import CSS from "../Assets/css.png";
import node from "../Assets/node.png";
import mongo from "../Assets/mongo.png";
import react from "../Assets/react.png";
import github from "../Assets/github.png";
import AWS from "../Assets/aws.PNG";
import Javascript from "../Assets/javascript.png";
import Express from "../Assets/express.png";
import C from "../Assets/c++.PNG";

function Skill() {
  return (
    <div name="skill" className="w-full md:h-screen c text-gray-300">
      {/* container */}
      <div
        data-aos="zoom-in-up"
        data-aos-duration="3000"
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"
      >
        <div>
          <p className="text-4xl font-bold inline border-b-4  border-pink-600  text-gray-300 ">
            Skills
          </p>
          <p
            data-aos="fade-left"
            data-aos-duration="3000"
            className="py-6 text-xl text-[#c1acd6]"
          >
            These are the{" "}
            <span
              data-aos="fade-left"
              data-aos-duration="3000"
              className="text-emerald-400"
            >
              technology stack
            </span>{" "}
            that I've worked with ➺
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-10 text-center py-4 ">
          <div className="shadow-md    shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Html} alt="html icn" />
            <p className="my-4 font-bold">Html</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={CSS} alt="html icn" />
            <p className="my-4 font-bold">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Javascript} alt="html icn" />
            <p className="my-4 font-bold">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={github} alt="html icn" />
            <p className="my-4 font-bold">Github</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={mongo} alt="html icn" />
            <p className="my-4 font-bold">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Express} alt="html icn" />
            <p className="my-4 font-bold">Express</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={react} alt="html icn" />
            <p className="my-4 font-bold">React</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={node} alt="html icn" />
            <p className="my-4 font-bold">Node</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={AWS} alt="html icn" />
            <p className="my-4 font-bold">Aws</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={C} alt="html icn" />
            <p className="my-4 font-bold">C++</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
