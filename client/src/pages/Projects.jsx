import React from "react";
import { projects } from "../utils/ProjectsDetails";
import Bounce from "react-reveal/Bounce";
const Projects = () => {
  

  return (
    <div id="projects">
      <div>
        <h1 className="text-4xl font-bold text-center text-indigo-700 py-10" >
          Top Recent Projects
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Here are some of my recent projects that showcase my skills and
          expertise in web development.
        </p>
      </div>
      <Bounce>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center transition-transform hover:scale-105"
          >
            <img
              className="w-full h-40 object-cover"
              src={project.image}
              alt={project.title}
            />
            <div className="flex flex-wrap  gap-2 p-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="font-bold bg-blue-400 px-3 py-1 text-white rounded-3xl text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-center font-semibold mb-4">{project.title}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 text-white rounded-3xl px-6 py-2 mb-4 transition-colors hover:bg-blue-600"
            >
              View
            </a>
          </div>
        ))}
      </div>
      </Bounce>
    </div>
  );
};

export default Projects;
