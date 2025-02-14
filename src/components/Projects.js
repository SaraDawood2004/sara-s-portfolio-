import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../Projects.css';

const projects = [
  {
    title: 'Guardiana',
    description: 'AI-powered leaf analysis for diagnosing diseases in plants, ensuring their health. The application uses advanced machine learning to analyze leaf patterns and detect abnormalities. Users can upload images of affected leaves and receive instant insights. Guardiana also offers solutions for improving soil and plant health.',
  },
  {
    title: 'Weather Assistant',
    description: 'A Python-based application that provides accurate and real-time weather updates. It includes features like humidity, wind speed, and temperature checks. Designed with simplicity in mind, the app ensures users are always prepared for weather changes. Its intuitive interface makes it user-friendly.',
  },
  {
    title: 'To-Do List',
    description: 'A dynamic to-do list application built using HTML, CSS, and JavaScript. This app allows users to add, edit, and delete tasks efficiently. It is visually appealing and highly functional. Designed for users who value organization and time management.',
  },
  {
    title: 'Landing Page',
    description: 'A bakery-themed landing page with an attractive and user-friendly design. Developed using HTML and CSS, it includes elements like menus, customer reviews, and promotions. The page is responsive and optimized for various devices. It highlights the business’s offerings effectively.',
  },
  {
    title: 'Hospital Management System',
    description: 'A simple yet efficient C program for managing patient and doctor information. It includes features like registration, appointment scheduling, and report generation. Designed to streamline hospital workflows and improve overall efficiency. Lightweight and optimized for quick operations.',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (index) => {
    setSelectedProject(selectedProject === index ? null : index); // Toggle selection
  };

  return (
    <body>
      <center>
        <h2>Projects</h2>
      </center>
      <motion.div className="projects-container" initial={{ y: '100vh' }} animate={{ y: 0 }} transition={{ duration: 1 }}>
        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              whileHover={{ scale: 1.05 }}
              onClick={() => handleClick(index)}
            >
              <h3>{project.title}</h3>
              <p>
                {selectedProject === index
                  ? project.description
                  : `${project.description.substring(0, 60)}...`}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </body>
  );
};

export default Projects;
