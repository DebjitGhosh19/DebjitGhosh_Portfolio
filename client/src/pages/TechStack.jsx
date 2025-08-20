import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt, FaJsSquare, FaBootstrap, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import Fade from "react-reveal/Fade";
const TechStack = () => {
  // Import additional icons

  return (
    

    <div className='py-20 m-5 sm:m-10 bg-gradient-to-br from-gray-50 via-white to-gray-200 shadow-sm' id="techstack">
      <h1 className='text-4xl font-bold text-center text-indigo-700'>Technologies Stack</h1>
      <hr className='my-4 border-indigo-300' />
      <p className='text-center text-gray-700'>👉 Including programming languages, frameworks, databases, front-end and back-end tools,and APIs</p>
      <Fade left>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 px-5 '>
        <div className='flex flex-col items-center bg-orange-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
          <FaHtml5 className='text-6xl text-orange-600 mx-auto' />
          <p className='text-orange-700 font-semibold'>HTML5</p>
        </div>
        <div className='flex flex-col items-center bg-blue-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
          <FaCss3Alt className='text-6xl text-blue-500 mx-auto' />
          <p className='text-blue-700 font-semibold'>CSS</p>
        </div>
        <div className='flex flex-col items-center bg-yellow-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
          <FaJsSquare className='text-6xl text-yellow-400 mx-auto' />
          <p className='text-yellow-700 font-semibold'>JavaScript</p>
        </div>
        <div className='flex flex-col items-center bg-purple-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
          <FaBootstrap className='text-6xl text-purple-700 mx-auto' />
          <p className='text-purple-700 font-semibold'>Bootstrap</p>
        </div>
        <div className='flex flex-col items-center bg-teal-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
          <SiTailwindcss className='text-6xl text-teal-400 mx-auto' />
          <p className='text-teal-700 font-semibold'>TailwindCSS</p>
        </div>
        <div className='flex flex-col items-center bg-blue-100 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
          <FaReact className='text-6xl text-blue-400 mx-auto' />
          <p className='text-blue-700 font-semibold'>React</p>
        </div>
        <div className='flex flex-col items-center bg-green-50 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
          <FaNodeJs className='text-6xl text-green-600 mx-auto' />
          <p className='text-green-700 font-semibold'>Node.js</p>
        </div>
        <div className='flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
          <SiExpress className='text-6xl text-gray-700 mx-auto' />
          <p className='text-gray-800 font-semibold'>Express</p>
        </div>
        <div className='flex flex-col items-center bg-green-100 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
          <SiMongodb className='text-6xl text-green-700 mx-auto' />
          <p className='text-green-800 font-semibold'>MongoDB</p>
        </div>
        <div className='flex flex-col items-center bg-gray-300 p-6 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl'>
          <FaGithub className='text-6xl text-black mx-auto' />
          <p className='text-gray-900 font-semibold'>GitHub</p>
        </div>
      </div>
      </Fade>
    </div>

  )
}

export default TechStack