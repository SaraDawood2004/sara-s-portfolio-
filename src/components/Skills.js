import React from 'react';
import { motion } from 'framer-motion';
import '../Skills.css';

const Skills = () => {
  const skills = ['C', 'C++', 'HTML', 'CSS', 'JavaScript', 'Python', 'Figma', 'GitHub'];

  return (
    <motion.div className="skills-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <motion.li key={index} whileHover={{ scale: 1.1 }}>
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Skills;