import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../App.css';

function About() {
  const skillRefs = useRef([]);

  useEffect(() => {
    const dboxes = document.querySelectorAll('.dbox');
  
    // Animate each .dbox when it scrolls into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
          gsap.fromTo(entry.target, { scale: 0 }, { scale: 1, rotate: 0, duration: 1 });
          entry.target.dataset.animated = 'true'; // Mark this element as animated
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is visible
  
    dboxes.forEach(dbox => observer.observe(dbox));
  
    // Cleanup observer on component unmount
    return () => {
      dboxes.forEach(dbox => observer.unobserve(dbox));
    };
  }, []);
  
  useEffect(() => {
    const progressBars = document.querySelectorAll('.progress');

    // Animate progress bars when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const percentage = entry.target.getAttribute('data-percentage');
          gsap.to(entry.target, { width: `${percentage}%`, duration: 1 });
        }
      });
    });

    progressBars.forEach(bar => observer.observe(bar));

    // Cleanup observer on component unmount
    return () => {
      progressBars.forEach(bar => observer.unobserve(bar));
    };
  }, []);

  return (
    <div className="container">
      <h1 className="home-title bounceIn">About Me</h1>
      <hr />
      <div className="skc">
        <h2 className="fadeIn sk">Skills</h2>
        <div className="skills-container">
          <SkillBar skill="React" percentage={60} ref={el => skillRefs.current[0] = el} />
          <SkillBar skill="Node.js" percentage={70} ref={el => skillRefs.current[1] = el} />
          <SkillBar skill="Express" percentage={70} ref={el => skillRefs.current[2] = el} />
          <SkillBar skill="HTML" percentage={90} ref={el => skillRefs.current[3] = el} />
          <SkillBar skill="CSS" percentage={90} ref={el => skillRefs.current[4] = el} />
          <SkillBar skill="JavaScript" percentage={70} ref={el => skillRefs.current[5] = el} />
          <SkillBar skill="MongoDB" percentage={80} ref={el => skillRefs.current[6] = el} />
        </div>
      </div>
<hr />
      <div className='details'>
        <div className='topics'>
          <h1>Professional Skillset</h1>
        </div>

        <div className="dbox">
          <h3>React</h3>
          <ul>
            <li>Components</li>
            <li>React Hooks</li>
            <li>React state</li>
            <li>React Router</li>
            <li>Redux</li>
            <button
              className="readmore"
              onClick={() => window.open('https://www.javatpoint.com/reactjs-tutorial', '_blank')}
            >
              Read More
            </button>
          </ul>
        </div>
        <div className="dbox">
          <h3>Node.js</h3>
          <ul>
            <li>Create A Rest Api</li>
            <li>Async/await</li>
            <li>Node.js Callback Concept</li>
            <li>File system</li>
            <li>create api related database</li>
            <button
              className="readmore"
              onClick={() => window.open('https://www.javatpoint.com/nodejs-tutorial', '_blank')}
            >
              Read More
            </button>
          </ul>
        </div>
        <div className="dbox">
          <h3>Express</h3>
          <ul>
            <li>Routing in Express</li>
            <li>Middleware</li>
            <li>HTTP request and REST API</li>
            <li>Sessions and cookies</li>
            <li>Request and response</li>
            <button
              className="readmore"
              onClick={() => window.open('https://www.javatpoint.com/expressjs-tutorial', '_blank')}
            >
              Read More
            </button>
          </ul>
        </div>
        <div className="dbox">
          <h3>HTML</h3>
          <ul>
            <li>Basic Structure of HTML Document</li>
            <li>HTML Tags and Elements</li>
            <li>Lists, Forms, Table etc tags</li>
            <li>Link, Images, audio, video etc tags</li>
            <li>Semantic HTML</li>
            <button
              className="readmore"
              onClick={() => window.open('https://www.javatpoint.com/html-tutorial', '_blank')}
            >
              Read More
            </button>
          </ul>
        </div>
        <div className="dbox">
          <h3>CSS</h3>
          <ul>
            <li>Selectors</li>
            <li>Typography and Fonts</li>
            <li>CSS Positioning</li>
            <li>CSS Transitions and Animations</li>
            <li>CSS Variables (Custom Properties)</li>
            <button
              className="readmore"
              onClick={() => window.open('https://www.javatpoint.com/css-tutorial', '_blank')}
            >
              Read More
            </button>
          </ul>
        </div>
        <div className="dbox">
          <h3>JavaScript</h3>
          <ul>
            <li>Async JavaScript</li>
            <li>Classes and Objects</li>
            <li>Modules</li>
            <li>JSON</li>
            <li>Local Storage and Session Storage</li>
            <button
              className="readmore"
              onClick={() => window.open('https://www.javatpoint.com/javascript-tutorial', '_blank')}
            >
              Read More
            </button>
          </ul>
        </div>
        <div className="dbox">
          <h3>MongoDB</h3>
          <ul>
            <li>Documents and Collections</li>
            <li>CRUD Operations</li>
            <li>Aggregation Framework</li>
            <li>Schema Design</li>
            <li>MongoDB Atlas</li>
            <button
              className="readmore"
              onClick={() => window.open('https://www.javatpoint.com/mongodb-tutorial', '_blank')}
            >
              Read More
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

const SkillBar = React.forwardRef(({ skill, percentage }, ref) => {
  return (
    <div className="skill-bar" ref={ref}>
      <span className="skill-name">{skill}</span>
      <div className="progress-bar">
        <div className="progress" data-percentage={percentage} style={{ width: 0 }}></div>
      </div>
      <span className="percentage">{percentage}%</span>
    </div>
  );
});

export default About;
