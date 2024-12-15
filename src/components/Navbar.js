import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/planificacion">Fase de Planificación</Link></li>
        <li><Link to="/diseno">Fase de Diseño y desarrollo</Link></li>
        <li><Link to="/control">Fase de Control de Calidad y evaluación de costos</Link></li>
        <li><Link to="/cierre">Fase de Cierre</Link></li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;