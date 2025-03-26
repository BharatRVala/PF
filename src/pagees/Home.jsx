import React from 'react';
import ProjectCard from '../components/ProjectCard';
import deviImage from '../assets/devi.png';
import myself from '../assets/myself.png';
import Type from '../components/Type';

const projects = [
  {
    title: "Authentication System (Login-Signup-Logout)",
    description: "This project is a secure user authentication system built with the MERN stack (MongoDB, Express, React, and Node.js). It allows users to register, log in, and log out with JWT-based authentication. The system includes password hashing for security, error handling, and session management. It also features user-friendly UI with form validation and real-time feedback.",
    githubLink: "https://github.com/BharatRVala/LoginSignup-mern",
    demoLink: "https://login-signup-mern-pi.vercel.app/login"
  },
  {
    title: "Jokes Platform",
    description: "The Jokes Platform is an interactive web application where users can create an account, post jokes, and engage with content by liking or disliking jokes. Users have full control over their content, allowing them to edit or delete their jokes and even update their account details. The platform categorizes jokes into different sections, including Most Popular, Latest, Oldest, and My Jokes, making it easy for users to explore trending and newly posted jokes. The system ensures a smooth user experience with authentication, joke publishing, and real-time updates.",
    githubLink: "https://github.com/BharatRVala/Jokes.git",
    demoLink: "https://jokes-dun.vercel.app/"
  },
  {
    title: "Photoshop UI Design Hub – Creative Editing & Design Services",
    description: "A modern and user-friendly Photoshop UI website designed using Elementor Pro and essential plugins. This platform showcases high-quality photo editing, graphic design, and UI/UX customization services with an intuitive interface. Built for seamless navigation and a visually engaging experience, it provides real-time previews, service booking options, and an interactive portfolio of creative designs.",
    githubLink: "https://github.com/BharatRVala",
    demoLink: "https://bharat.infy.uk"
  },
  {
    title: "Restaurant UI",
    description: "A beautifully designed restaurant UI website featuring a modern and interactive user experience. Built with Elementor Pro and essential plugins, this platform offers a seamless menu browsing, table reservations, and customer engagement system. Users can register, log in, and contact the restaurant for inquiries or bookings. The intuitive Contact Us section ensures easy communication, while the responsive design provides a smooth experience across all devices.",
    githubLink: "https://github.com/BharatRVala/",
    demoLink: "https://kababmahal.com/"
  },
  {
    title: "My Portfolio – Showcasing Skills & Projects",
    description: "A personal portfolio website designed to showcase skills, projects, and experiences in a professional and visually appealing manner. Built using Elementor Pro and essential plugins, this website highlights expertise in full-stack development, WordPress, and UI/UX design. It includes sections for About Me, Skills, Projects, Contact, and Resume Download, ensuring easy navigation for visitors. Fully responsive and optimized for performance, this portfolio serves as a digital identity to attract potential clients and employers.",
    githubLink: "https://github.com/BharatRVala/PF.git",
    demoLink: "https://portfolio-bharatvala.vercel.app/"
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
