import React from 'react';
import { motion } from 'framer-motion';
import '../Achievements.css';

const achievements = [
  '1st position in Freshathon 2024 at Sri Eshwar College of Engineering.',
  'Top 20 finalist in Ideathon conducted by Delhi University.',
  '2nd position in C Coding Contest at Sri Eshwar College of Engineering.',
  '7th position in Self-E Hackathon at Sri Eshwar College of Engineering.',
];

const Achievements = () => {
  return (
    <motion.div className="achievements-container" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
      <h2>Achievements</h2>
      <ul>
        {achievements.map((achievement, index) => (
          <motion.li key={index} whileHover={{ scale: 1.1 }}>
            {achievement}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Achievements;