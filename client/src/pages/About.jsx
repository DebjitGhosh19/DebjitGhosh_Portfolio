import React from "react";
import AboutImg from "../assets/images/About.png";
import Bounce from "react-reveal/Bounce";
const About = () => {
  return (
    <Bounce>
    <div className="shadow-lg m-5 sm:m-10" id="about">
      <h1 className="text-4xl underline text-center mt-10 font-serif font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
        About Me
      </h1>
      <div className="flex flex-col lg:flex-row py-5 sm:p-10 gap-5 ">
        <div className="w-full">
          <img
            src={AboutImg}
            alt="About"
            className="w-[90%] h-auto max-h-[400px] rounded-2xl font-mono m-auto "
          />
        </div>
        <div className="w-[90%] px-10 py-5  rounded-2xl bg-white m-auto">
          <p className="text-gray-600 font-sans pt-4">
            Hi, I’m Debjit Ghosh, a passionate and dedicated aspiring Full Stack
            Developer with a strong foundation in JavaScript, HTML, CSS, and
            backend technologies. Currently pursuing my B.Tech in Computer Science
            and Engineering at Maulana Abul Kalam Azad University of Technology
            (MAKAUT), I’m on a journey to create clean, responsive, and scalable
            web applications.
          </p>
          <p className="text-gray-600 font-sans py-4">
            When I’m not coding, you’ll find me exploring new tech trends, working
            on innovative projects, or refining my technical and personal growth
            goals. My aim is to build impactful solutions that make a difference
            in people’s lives.
          </p>
        </div>
      </div>
    </div>
    </Bounce>
  );
};

export default About;
