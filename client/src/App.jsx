import React from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import TechStack from "./pages/TechStack";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import WorkExperience from "./pages/WorkExperience";
import ContactUs from "./pages/ContactUs";
import Navbar from "./components/Navbar";
import { ToastContainer} from 'react-toastify';
const App = () => {
  return (
    <div className="flex">
      <ToastContainer />
      <Sidebar />
      <div className="flex flex-col w-full sm:pl-60 ">
        <Navbar/>
        <Home />
        <About />
        <Education />
        <TechStack />
        <Projects/>
        <WorkExperience/>
        <ContactUs/>
      </div>
    </div>
  );
};

export default App;
