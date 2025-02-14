import React from 'react';
import { motion } from 'framer-motion';
import '../Contact.css';

const Contact = () => {
  return (
    <motion.div className="contact-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2>Contact Me</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required placeholder='Your Name . . .'/>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required placeholder='Your Email. . .' />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required placeholder='Send me a Message...'></textarea>

        <button type="submit">Send</button>
      </form>
    </motion.div>
  );
};

export default Contact;