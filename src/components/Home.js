import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Sección de Introducción */}
      <section className="intro">
        <motion.h1
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Bienvenido a MVM Solutions
        </motion.h1>
        <p>
          MVM Solutions es una empresa tecnológica dedicada al diseño, desarrollo e implementación de soluciones personalizadas para empresas de diversos sectores. Nuestro enfoque se centra en la creación de software a medida, integraciones tecnológicas y soporte continuo, con un equipo altamente capacitado.
        </p>

        {/* Imagen debajo del párrafo */}
        <motion.img
          src="https://static.mercadonegro.pe/wp-content/uploads/2023/09/26160534/SFSDFG.png"  // Reemplaza con la URL de tu imagen
          alt="Tecnología y soluciones"
          className="intro-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        />
      </section>
      {/* Sección de Quiénes Somos */}
      <section className="who-we-are">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          ¿Quiénes Somos?
        </motion.h2>
        <motion.p
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Somos un equipo de profesionales altamente capacitados, comprometidos con la innovación tecnológica y la satisfacción del cliente. Nos especializamos en crear soluciones tecnológicas personalizadas que ayudan a las empresas a optimizar sus procesos y a alcanzar sus objetivos.
        </motion.p>
      </section>

      {/* Sección de Misión */}
      <section className="mission-vision">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Misión
        </motion.h2>
        <motion.p
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          En MVM Solutions, buscamos satisfacer las necesidades específicas de cada cliente. A través de una colaboración cercana con nuestros socios estratégicos, ejecutamos proyectos de alta calidad que optimizan procesos, mejoran la productividad y fomentan el crecimiento empresarial.
        </motion.p>
      </section>

      {/* Sección de Visión */}
      <section className="mission-vision">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Visión
        </motion.h2>
        <motion.p
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          Nuestra visión es ser una empresa líder en el desarrollo de soluciones tecnológicas, reconocida por nuestra capacidad para transformar los desafíos de nuestros clientes en oportunidades de éxito. Nos esforzamos por estar siempre a la vanguardia de la innovación.
        </motion.p>
      </section>

      

      {/* Sección de Objetivos */}
      <section className="objectives">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Objetivos
        </motion.h2>
        <ul>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
          >
            Innovación constante: Desarrollar soluciones tecnológicas innovadoras.
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            Satisfacción del cliente: Ofrecer productos y servicios de alta calidad.
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 1 }}
          >
            Crecimiento sostenible: Expandir nuestra presencia mediante proyectos diversos.
          </motion.li>
        </ul>
      </section>

      {/* Sección de Alcances */}
      <section className="scope">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          Alcances
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 4.5, duration: 1 }}
        >
          En MVM Solutions, nos enfocamos en ofrecer soluciones que transformen a las empresas. Con una metodología ágil, trabajamos en sectores como la automatización, el análisis de datos, la gestión empresarial y la integración de sistemas. Nuestros proyectos abarcan desde pequeñas empresas hasta grandes corporaciones.
        </motion.p>
      </section>

      
    </motion.div>
  );
};

export default Home;
