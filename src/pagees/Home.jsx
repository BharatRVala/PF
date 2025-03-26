import React from 'react';
import ProjectCard from '../components/ProjectCard';
import deviImage from '../assets/devi.png';
import myself from '../assets/myself.png';
import Type from '../components/Type';

const projects = [
  {
    title: "Authentication System (Login-Signup-Logout)",
    description: "A MERN authentication system with JWT, password hashing, and session management A MERN authentication system with JWT, password hashing, and session management A MERN authentication system with JWT, password hashing, and session management.",
    githubLink: "https://github.com/BharatRVala/LoginSignup-mern",
    demoLink: "https://login-signup-mern-pi.vercel.app/login"
  },
  {
    title: "Authentication System (Login-Signup-Logout)",
    description: "A MERN authentication system with JWT, password hashing, and session management.",
    githubLink: "https://github.com/BharatRVala/LoginSignup-mern",
    demoLink: "https://login-signup-mern-pi.vercel.app/login"
  },
  {
    title: "Employee Management System",
    description: "A full-stack MERN app with an employee dashboard, admin panel, and task management.",
    githubLink: "https://github.com/BharatRVala/employee-management-system",
    demoLink: "https://employee-management-system-smoky-gamma.vercel.app/"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built using React and Tailwind CSS showcasing projects and skills.",
    githubLink: "https://github.com/BharatRVala/ReactPF",
    demoLink: "https://bharatvala.vercel.app/"
  },
  {
    title: "Kabab Mahal",
    description: "A restaurant website built with React and Tailwind CSS.",
    githubLink: "https://github.com/BharatRVala/KababMahal",
    demoLink: "https://kababmahal.vercel.app/"
  },
];

function Home() {
  return (
    <div className="max-w-6xl mx-auto my-5 p-5 bg-[rgba(90,89,85,0.35)] rounded-xl shadow-2xl backdrop-blur-md">
      <h1 className="text-5xl text-center text-gray-200 mb-5 animate-bounceIn hover:scale-110 transition-all">Home</h1>
      <hr className="border-gray-600 my-4" />
      
      {/* Introduction Section */}
      <div className="intro md:flex">
        <div className='intron md:w-3/5'>
          <h1 className="text-4xl my-10 mx-20">Hi There! <span className="inline-block animate-wave">👋🏻</span></h1>
          <h2 className="text-4xl">
            I'M <strong className="text-yellow-400 hover:text-green-600 transition-all">BHARAT VALA</strong>
          </h2>
          <h3 className='text-purple-400 text-3xl m-8'>
            <Type />
          </h3>
        </div>
        <img className='devim w-2/5 transition-all hover:scale-105' src={deviImage} alt="Devi" />
      </div>
      
      <hr className="border-gray-600 my-4" />
      
      {/* About Me Section */}
      <div className="myself md:flex">
        <div className="myselfim md:w-2/5 flex justify-center items-center">
          <img src={myself} className='w-2/5 transition-all hover:scale-110' alt="Myself" />
        </div>
        
        <div className="text md:w-3/5 p-4">
          <h1 className="text-4xl mb-6">
            LET ME <span className="text-yellow-400"> INTRODUCE </span> MYSELF
          </h1>
          <p className="text-xl text-left">
            I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
            <br /><br />
            I am fluent in classics like
            <b className="text-yellow-400"> HTML, CSS, JavaScript, React, and Node.js.</b>
            <br /><br />
            My field of interest includes building <b className="text-yellow-400">Web Technologies and Products</b>.
            <br /><br />
            I love developing products using <b className="text-yellow-400">Node.js</b> and frameworks like
            <b className="text-yellow-400"> React.js and Next.js.</b>
          </p>
        </div>
      </div>
      
      <hr className="border-gray-600 my-4" />
      
      {/* Projects Section */}
      <div className="pro mt-5">
        <h1 className="text-yellow-500 text-3xl p-4 text-center">My Recent Works</h1>
        
        <div className='projects grid grid-cols-1 md:grid-cols-2 gap-6'>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
