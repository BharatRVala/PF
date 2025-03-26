import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SkillCard from '../components/SkillCard';

const skills = [
    { title: "React", items: ["Components", "React Hooks", "React State", "React Router", "Redux"] },
    { title: "Node.js", items: ["Create A Rest API", "Async/Await", "Node.js Callback", "File System", "Database APIs"] },
    { title: "Express", items: ["Routing", "Middleware", "REST API", "Sessions & Cookies", "Request & Response"] },
    { title: "HTML", items: ["Basic Structure", "HTML Tags", "Forms", "Media Tags", "Semantic HTML"] },
    { title: "CSS", items: ["Selectors", "Typography", "Positioning", "Animations", "CSS Variables"]},
    { title: "JavaScript", items: ["Async JS", "Classes", "Modules", "JSON", "Web Storage"] },
    { title: "JavaScript", items: ["Async JS", "Classes", "Modules", "JSON", "Web Storage"] },
    { title: "JavaScript", items: ["Async JS", "Classes", "Modules", "JSON", "Web Storage"] },
    { title: "MongoDB", items: ["Documents", "CRUD Operations", "Aggregation", "Schema Design", "MongoDB Atlas"]}
  ];
function About() {
  const skillRefs = useRef([]);

  useEffect(() => {
    const dboxes = document.querySelectorAll('.dbox');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          gsap.fromTo(entry.target, { scale: 0 }, { scale: 1, rotate: 0, duration: 1 });
          entry.target.dataset.animated = 'true';
        }
      });
    }, { threshold: 0.5 });
    dboxes.forEach(dbox => observer.observe(dbox));
    return () => dboxes.forEach(dbox => observer.unobserve(dbox));
  }, []);
  
  useEffect(() => {
    const progressBars = document.querySelectorAll('.progress');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const percentage = entry.target.getAttribute('data-percentage');
          gsap.to(entry.target, { width: `${percentage}%`, duration: 1 });
        }
      });
    });
    progressBars.forEach(bar => observer.observe(bar));
    return () => progressBars.forEach(bar => observer.unobserve(bar));
  }, []);

  return (
    <div className="w-full min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('./assets/bg.jpg')" }}>
      <div className="container mx-auto px-4 py-8 w-full max-w-none md:max-w-6xl">
        <div className="w-full bg-[rgba(90,89,85,0.35)] rounded-xl shadow-2xl backdrop-blur-md p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl text-center text-gray-200 mb-5 animate-bounceIn">About Me</h1>
          <hr className="border-gray-600 my-4" />
          
          <div className="w-full">
            <h2 className="text-2xl md:text-3xl text-center text-yellow-400 my-6">Skills</h2>
            <div className="w-full px-2 md:px-8">
              <SkillBar skill="React" percentage={60} ref={el => skillRefs.current[0] = el} />
              <SkillBar skill="Node.js" percentage={70} ref={el => skillRefs.current[1] = el} />
              <SkillBar skill="Express" percentage={70} ref={el => skillRefs.current[2] = el} />
              <SkillBar skill="HTML" percentage={90} ref={el => skillRefs.current[3] = el} />
              <SkillBar skill="CSS" percentage={90} ref={el => skillRefs.current[4] = el} />
              <SkillBar skill="JavaScript" percentage={70} ref={el => skillRefs.current[5] = el} />
              <SkillBar skill="MongoDB" percentage={80} ref={el => skillRefs.current[6] = el} />
            </div>
          </div>
          
          <hr className="border-gray-600 my-4" />
          
          <div className="w-full px-2 md:px-0">
            <h1 className="text-2xl md:text-3xl text-center text-yellow-400 mb-4 md:mb-8 hover:text-gray-900 hover:text-shadow-lg transition-all">
              Professional Skill
            </h1>
            
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
            {skills.map((skill, index) => (
              <SkillCard key={index} title={skill.title} items={skill.items}  />
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SkillBar = React.forwardRef(({ skill, percentage }, ref) => {
    return (
      <div className="skill-bar flex flex-col sm:flex-row items-center my-2 md:my-3 w-full" ref={ref}>
        {/* Skill Name */}
        <span className="skill-name w-full sm:w-36 text-sm sm:text-base font-bold text-gray-300 mb-1 sm:mb-0 
                        hover:text-blue-400 transition-all duration-300">
          {skill}
        </span>
  
        {/* Progress Bar */}
        <div className="progress-bar w-full sm:flex-grow h-3 sm:h-5 bg-gray-800 rounded-full sm:mr-5 overflow-hidden 
                        hover:shadow-lg transition-all duration-300">
          <div 
            className="progress h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500 
                        hover:from-purple-500 hover:to-pink-400 hover:scale-105"
            data-percentage={percentage}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
  
        {/* Percentage Display */}
        <span className="percentage w-full sm:w-14 text-right text-sm sm:text-base text-gray-300 mt-1 sm:mt-0 
                        hover:text-blue-400 transition-all duration-300">
          {percentage}%
        </span>
      </div>
    );
  });
  

export default About;