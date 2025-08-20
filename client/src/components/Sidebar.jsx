import profile from "../assets/images/Profile.png.jpg";
import { Link, } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcBiotech,
  FcReadingEbook,
  FcVideoProjector,
  FcBusinessContact,
} from "react-icons/fc";

const Sidebar = () => {
  return (
    <>
    
    <div className="hidden sm:flex flex-col items-center p-5 bg-gray-800 text-white h-screen fixed sm:w-60">
     <Zoom> <img className="w-30 h-30 mb-10 mt-5 rounded-full " src={profile} alt="Profile" /></Zoom>
     <Fade left>
      
      <div>
        <Link to="home"  smooth={true} duration={500}  className="flex items-center gap-2 mt-4 p-2 hover:bg-gray-700 rounded cursor-pointer">
          <FcHome />
          <span>Home</span>
        </Link>
        <Link to="about" smooth={true} duration={500} className="flex items-center gap-2 mt-4 p-2 hover:bg-gray-700 rounded cursor-pointer">
          <FcAbout />
          <span>About</span>
        </Link>
        <Link to="education" smooth={true} duration={500} className="flex items-center gap-2 mt-4 p-2 hover:bg-gray-700 rounded cursor-pointer">
          <FcReadingEbook />
          <span>Education</span>
        </Link>

        <Link to="techstack" smooth={true} duration={500} className="flex items-center gap-2 mt-4 p-2 hover:bg-gray-700 rounded cursor-pointer">
          <FcBiotech />
          <span>Tech Stack</span>
        </Link>

        <Link to="projects" smooth={true} duration={500} className="flex items-center gap-2 mt-4 p-2 hover:bg-gray-700 rounded cursor-pointer">
          <FcVideoProjector />
          <span>Projects</span>
        </Link>
        <Link to="workexperience" smooth={true} duration={500} className="flex items-center gap-2 mt-4 p-2 hover:bg-gray-700 rounded cursor-pointer">
          <FcPortraitMode />
          <span>Work Experience</span>
        </Link>
        <Link to="contact" smooth={true} duration={500} className="flex items-center gap-2 mt-4 p-2 hover:bg-gray-700 rounded cursor-pointer">
          <FcBusinessContact />
          <span>Contact</span>
        </Link>
      </div>
      </Fade>
    </div>
       
       
    </>
  );
};

export default Sidebar;
