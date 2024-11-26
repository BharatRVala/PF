import React from 'react';
import '../App.css';
import deviImage from '../assets/devi.png';
import myself from '../assets/myself.png';
import giti from '../assets/Github.png';
import Demo from '../assets/Demo.png';
import Type from '../components/Type';

function Home() {



  return (
    <div className="container">
      <h1 className="home-title">Home</h1>
      <hr />
      <div className="intro">
        <div className='intron'>
          <h1>Hi There! <span className='heand'>👋🏻</span></h1>

          <h2 className="heading-name">
            I'M
            <strong className="main-name"> BHARAT VALA</strong>
          </h2>
          <h3 className='typec'>
            <Type />
          </h3>

        </div>
        <img className='devim' src={deviImage} alt="Devi" />
      </div>
      <hr />
      <div className="myself">
        <div className="myselfim">
          <div className="myi">
            <img src={myself} className='mys' alt="" />
          </div>

        </div>
        <div className="text">
          <h1 style={{ fontSize: "2.1em" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
          <p className="home-about-body">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
            <br />
            <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am fluent in classics like
            <i>
              <b className="purple"> HTML, Css, Javascript, React and Node. </b>
            </i>
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My field of Interest's are building new &nbsp;
            <i>
              <b className="purple">Web Technologies and Products </b> and
              also in areas related to{" "}
              <b className="purple">
                Blockchain.
              </b>
            </i>
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Whenever possible, I also apply my passion for developing products
            with <b className="purple">Node.js</b> and
            <i>
              <b className="purple">
                {" "}
                Modern Javascript Library and Frameworks
              </b>
            </i>
            &nbsp; like
            <i>
              <b className="purple"> React.js and Next.js</b>
            </i>
          </p>
        </div>

      </div>
      <hr />
      <div className="pro">
        <h1>My Recent Works</h1>
        <div className='projects'>
          <div className="project">
            <h2>authentication system(Login-Signup-Logout)</h2>
            <p>
              This project is a user authentication system built using the MERN stack (MongoDB, Express, React, Node.js). It features secure signup, login, and logout functionality with password hashing (bcrypt) and JWT-based session management. Users can register, log in, and access protected pages. React handles the frontend, while Express and Node manage the backend API, and MongoDB stores user data. This project demonstrates strong skills in authentication, frontend-backend integration, and security best practices
            </p>

            <div className="btnp">
              <button onClick={() => window.open('https://github.com/BharatRVala/LoginSignup-mern', '_blank')} > <img src={giti} alt="github icone" />Github</button>
              <button onClick={() => window.open('https://login-signup-mern-ui1.vercel.app/Login', '_blank')}><img src={Demo} alt="Demo icon" />Demo</button>
            </div>

          </div>
          <div className="project">
            <h2>employee management system</h2>
            <p>
              Built a full-stack application using the MERN Stack (MongoDB, Express, React, Node.js) featuring an Employee Dashboard for profile and task management, an Admin Dashboard for managing employee details and assignments, and a task tracking system. Utilized local storage for session management and optimized user experience with role-based access control and RESTful API integration.</p>
           <br /> <br /><br /><br />
            <div className="btnp">
              <button onClick={() => window.open('https://github.com/BharatRVala/employee-management-system', '_blank')}><img src={giti} alt="github icone" />Github</button>
              <button onClick={() => window.open('https://employee-management-system-smoky-gamma.vercel.app/', '_blank')}><img src={Demo} alt="Demo icon" />Demo</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
