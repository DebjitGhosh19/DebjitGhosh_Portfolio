import React from "react";
import Typewriter from "typewriter-effect";
import cv from "../assets/doc/DEBJIT_GHOSH_cv .pdf";
import Fade from "react-reveal/Fade";
const Home = () => {
  return (
    <div
      className="flex flex-col  bg-gray-900 text-white w-full h-[50vh] "
      id="home"
    >
      
      <Fade right>
        <div className="p-20">
          <h1 className="text-4xl font-bold">Hi👋 I'm a </h1>
          <p className="mt-4">
            <Typewriter
              options={{
                strings: ["Full Stack Developer!", "MERN Stack Developer!"],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
        </div>
      </Fade>
      <Fade bottom>
        <div className="px-20 flex gap-4">
          <a href="https://api.whatsapp.com/send?phone=7449705009" target="_blank" rel="noopener" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer">
            Hire Me
          </a>
          <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 cursor-pointer ">
            <a href={cv} download="DEBJIT_GHOSH_cv.pdf">
              My Resume
            </a>
          </button>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
