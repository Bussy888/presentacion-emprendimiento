import React from 'react';
import { motion } from 'framer-motion';

const Cierre = () => {
  return (
    <div className="cierre">
      {/* Conclusiones */}
      <section className="conclusiones">
        <h2>1. Conclusiones</h2>
        <p>
          MVM Solutions ha demostrado un compromiso firme con la satisfacción de las necesidades de sus clientes, implementando soluciones tecnológicas personalizadas y alcanzando los objetivos establecidos en su misión y visión. La estructura organizacional clara, el enfoque en innovación y calidad, y el sólido sistema de gestión de riesgos son elementos fundamentales que posicionan a la empresa hacia el liderazgo en el sector. Además, la adopción de herramientas tecnológicas avanzadas y una estrategia de marketing bien definida contribuyen al crecimiento y competitividad de la empresa y sus clientes.
        </p>
        <a href="/conclusiones-del-proyecto.pdf" download>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Descargar Conclusiones
          </motion.button>
        </a>
      </section>

      {/* Recomendaciones */}
      <section className="recomendaciones">
        <h2>2. Recomendaciones</h2>
        <p>
          Se recomienda implementar estrategias clave para fortalecer la posición de MVM Solutions en el mercado. Entre estas estrategias se incluyen la creación de un Comité Estratégico, la adopción de tecnologías emergentes como la inteligencia artificial, y la implementación de metodologías ágiles para mejorar el desarrollo de productos. Además, se deben optimizar los procesos internos mediante la automatización, mejorar la capacitación del equipo y establecer métricas claras para evaluar el rendimiento.
        </p>
        <a href="/recomendaciones-para-mvm-solutions.pdf" download>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            Descargar Recomendaciones
          </motion.button>
        </a>
      </section>

      {/* Plan Básico de Sostenibilidad en el Tiempo */}
      <section className="sostenibilidad">
        <h2>3. Plan Básico de Sostenibilidad en el Tiempo</h2>
        <p>
          El plan básico de sostenibilidad para MVM Solutions se centra en garantizar la capacidad operativa, financiera y de innovación de la empresa en el tiempo. Se destacan estrategias en diversas dimensiones como la económica, social, tecnológica y ambiental, asegurando el uso eficiente de recursos, la responsabilidad social, la innovación continua y el cumplimiento de estándares de seguridad. La implementación efectiva de estas estrategias será clave para asegurar el éxito y la competitividad sostenibles de MVM Solutions.
        </p>
        <a href="/plan-basico-de-sostenibilidad.pdf" download>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            Descargar Plan Básico de Sostenibilidad
          </motion.button>
        </a>
      </section>
    </div>
  );
};

export default Cierre;
