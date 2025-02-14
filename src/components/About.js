import React from 'react';
import { motion } from 'framer-motion';
import '../About.css';

const About = () => {
  return (
    <motion.div 
      className="about-container" 
      initial={{ x: '-100vw' }} 
      animate={{ x: 0 }} 
      transition={{ duration: 1 }}
    >
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          Hey there! I'm Sara Dawood, an AI and Data Science enthusiast currently diving deep into the world of technology and development. With a background in front-end web development and a growing passion for full-stack development, I've been building projects that blend creativity with functionality. From creating apps that make life easier to exploring the limitless potential of AI, I'm all about solving real-world problems with innovative solutions.
          <br />
          <br />
          I’ve had the privilege of working on diverse projects – from helping people with hearing impairments communicate seamlessly to developing a system to monitor safety in real-time. I’m also actively exploring new tools and technologies to grow my skill set and stay ahead in the ever-evolving tech landscape.
          <br />
          <br />
          When I'm not coding, you can find me experimenting with new ideas, sharing tech insights, or just exploring ways to make the world a bit more connected through tech.
        </p>
        <div className="about-image">
          <img src="/sara dawwood_blazer.jpg" alt="Sara Dawood" />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
