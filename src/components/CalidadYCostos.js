import React from 'react';
import { motion } from 'framer-motion';

const PresentacionMVM = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
        

      <section className="analisis-costos">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Análisis de Costos
        </motion.h2>
        <p>
          Nuestros costos están optimizados para garantizar la calidad y rentabilidad de cada proyecto.
        </p>
        <ul>
          <li><strong>Mano de Obra:</strong> Bs 13,500</li>
          <li><strong>Equipo:</strong> Bs 36,600</li>
          <li><strong>Materiales:</strong> Bs 220</li>
          <li><strong>Total:</strong> Bs 50,320</li>
        </ul>
        <a href="/analisis-de-costos.pdf" download>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                  >
                    Descargar Evaluacion de Control de Calidad
                  </motion.button>
                </a>
      </section>

      {/* Sección de Control de Calidad */}
      <section className="control-calidad">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Control de Calidad
        </motion.h2>
        <p>
          Alineados con normativas internacionales como ISO 9001, ISO 27001, e ISO 31000, aseguramos la calidad y seguridad en todos nuestros procesos.
        </p>
        <ul>
          <li><strong>ISO 9001:</strong> Gestión de calidad.</li>
          <li><strong>ISO 27001:</strong> Seguridad de la información.</li>
          <li><strong>ISO 31000:</strong> Gestión de riesgos.</li>
        </ul>
        <a href="/control-de-Calidad-de-MVM.pdf" download>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                  >
                    Descargar Evaluacion de Control de Calidad
                  </motion.button>
                </a>
      </section>

      
    </motion.div>
  );
};

export default PresentacionMVM;
