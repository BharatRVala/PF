import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      
      <div className='contact'>
        <div className="cp">
        <p>Email: <a href="mailto:valab1203@gmail.com">valab1203@gmail.com</a></p>
        <p>Phone: <a href="tel:+918200386268">+91 8200386268</a></p>
      </div>
      </div>
      
      <div className='socialmedia'>
        <div className="cs">
        <a href="https://www.instagram.com/bharat_ahir_82/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100067915315613" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://x.com/bharat_vala_007" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/bharat-vala-90a4752a4/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      </div>
      
    </footer>
  );
};

export default Footer;
