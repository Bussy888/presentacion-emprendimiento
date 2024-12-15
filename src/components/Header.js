import React from 'react';
import { motion } from 'framer-motion';
import logo from '../img/MVM_Solutions.png';
const Header = () => {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="logo">
        <img src={logo} alt="MVM Solutions" />
      </div>
    </motion.header>
  );
};

export default Header;