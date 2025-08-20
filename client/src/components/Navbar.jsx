import React, { useState } from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { GoArrowLeft } from "react-icons/go";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className='sm:hidden flex justify-between items-center bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 z-20 '>
       <div className="sm:hidden flex">
        <FiAlignJustify className=' size-[30px]' onClick={() => setVisible(!visible)} />
        </div>
        <div>
          {visible && (
           <div className='absolute top-0 left-0 right-0 z-10 w-full overflow-hidden'>

             <div className="flex flex-col bg-gray-800 text-white p-4 ">
              <div className="flex items-center cursor-pointer" onClick={() => setVisible(false)}>
                <GoArrowLeft className='size-[30px] ml-2' onClick={() => setVisible(false)} /> 
                  <span className="ml-2">Back</span>
              </div>
              <a onClick={() => setVisible(false)} href="#home" className="p-2">Home</a>
              <a onClick={() => setVisible(false)} href="#about" className="p-2">About</a>
              <a onClick={() => setVisible(false)} href="#education" className="p-2">Education</a>
              <a onClick={() => setVisible(false)} href="#techstack" className="p-2">Tech Stack</a>
              <a onClick={() => setVisible(false)} href="#projects" className="p-2">Projects</a>
              <a onClick={() => setVisible(false)} href="#workexperience" className="p-2">Work Experience</a>
              <a onClick={() => setVisible(false)} href="#contact" className="p-2">Contact</a>
            </div>
           </div>
          )}
        </div>
    </div>
  )
}

export default Navbar