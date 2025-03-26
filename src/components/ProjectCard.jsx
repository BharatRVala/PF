import React from 'react';

const githubIcon = "/githubIcon.png";
const demoIcon = "/demoicon.png";

const ProjectCard = ({ title, description, githubLink, demoLink }) => {
  return (
    <div className="bg-gray-700 text-white p-6 rounded-xl shadow-md flex flex-col justify-between h-full transition-transform hover:scale-105">
      <h3 className="text-yellow-400 text-xl font-bold text-center">{title}</h3>
      <p className="text-sm flex-grow mt-3">{description}</p>
      
      <div className="flex justify-center gap-4 mt-4">
        <a href={githubLink} target="_blank" rel="noopener noreferrer"
          className="bg-blue-600 px-4 py-2 rounded-lg text-white flex items-center gap-2 hover:bg-blue-500 transition">
          <img src={githubIcon} alt="GitHub" className="w-5 h-5" /> GitHub
        </a>
        <a href={demoLink} target="_blank" rel="noopener noreferrer"
          className="bg-blue-600 px-4 py-2 rounded-lg text-white flex items-center gap-2 hover:bg-blue-500 transition">
          <img src={demoIcon} alt="Demo" className="w-5 h-5" /> Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
