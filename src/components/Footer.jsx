import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 px-4 sm:px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-base sm:text-lg">
            Email: <a href="mailto:valab1203@gmail.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">valab1203@gmail.com</a>
          </p>
          <p className="text-base sm:text-lg">
            Phone: <a href="tel:+918200386268" className="text-yellow-400 hover:text-yellow-300 transition-colors">+91 8200386268</a>
          </p>
        </div>
        
        <div className="flex space-x-4 sm:space-x-6 text-xl sm:text-2xl">
          <a href="https://www.instagram.com/bharat_ahir_82/" target="_blank" rel="noopener noreferrer" 
            className="text-gray-300 hover:text-pink-400 hover:scale-125 transition-all">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100067915315613" target="_blank" rel="noopener noreferrer" 
            className="text-gray-300 hover:text-blue-500 hover:scale-125 transition-all">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://x.com/bharat_vala_007" target="_blank" rel="noopener noreferrer" 
            className="text-gray-300 hover:text-blue-400 hover:scale-125 transition-all">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/bharat-vala-90a4752a4/" target="_blank" rel="noopener noreferrer" 
            className="text-gray-300 hover:text-blue-600 hover:scale-125 transition-all">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;