import React from "react";
import AOS from "aos";

import "aos/dist/aos.css";
AOS.init();

function About() {
  return (
    <div name="about" className="w-full h-screen c text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4 ">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div className="sm:text-right  text-4xl font-bold ">
            <p data-aos="fade-up-right" data-aos-duration="2000" className="">
              Hi,I'm Hitesh, Nice to meet you.Please take a look around.
            </p>
          </div>
          <div>
            <p
              data-aos="fade-up-left"
              data-aos-duration="2000"
              className="text-xl  text-gray-400 "
            >
              As a Frontend Developer, I leverage the power of React to build an
              responsive user interface that deliver exceptional user
              experiences. On other side, I have worked with the technology
              stack
              <strong>MongoDB</strong> , <strong>Express js</strong>,{" "}
              <strong>React</strong>, and <strong>Node js</strong>.allowing me
              to create end-to-end solutions for various industries and
              purposes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
