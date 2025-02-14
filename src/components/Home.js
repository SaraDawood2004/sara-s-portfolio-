import React from 'react';
import { motion } from 'framer-motion';
import '../Home.css'; // Tailwind will also be in this file
import './Contact.js';

const Home = () => {
  const handleViewResume = () => {
    window.open('https://drive.google.com/file/d/1YkC6Z4qfPqzQSeHSD5py8XtbYTDorYIz/view?usp=sharing', '_blank');
  };

  const handleContact = () => {
    window.location.href = '/contact';
  };

  return (
    <motion.div
      className="home-container bg-gradient-to-r from-purple-700 via-black to-purple-900 h-screen flex items-center justify-center text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="home-content text-center">
        {/* Animated Title */}
        <h1 className="home-title text-5xl font-extrabold animate__animated animate__fadeIn animate__delay-1s">
          Hi, I'm <span className="gradient-name">Sara Dawood . . .</span></h1>
        
        {/* Subtitle */}
        <p className="home-subtitle text-xl mt-4">
          Aspiring Full-Stack Developer | AI & Data Science Enthusiast
        </p>
        
        {/* Buttons */}
        <div className="home-buttons mt-8">
          <button
            className="btn-primary bg-gradient-to-r from-purple-500 to-pink-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gradient-to-l transition duration-300"
            onClick={handleViewResume}
          >
            View Resume
          </button>
          <button
            className="btn-secondary bg-gradient-to-r from-teal-500 to-teal-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gradient-to-l transition duration-300 mt-4 md:mt-0"
            onClick={handleContact}
          >
            Contact Me
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
