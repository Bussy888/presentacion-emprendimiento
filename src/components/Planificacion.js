import React from 'react';
import { motion } from 'framer-motion';
import Jerarquico from '../img/jerarquico.png';
const Planificacion = () => {
  return (
    <motion.div
      className="home" // Usamos la clase 'home' para el contenedor principal
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Sección de Diagrama Jerárquico */}
      <section className="hierarchical-diagram">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Diagrama Jerárquico de la Empresa
        </motion.h2>
        <motion.img
          src={Jerarquico} // Reemplaza con la URL de tu imagen
          alt="Diagrama Jerárquico de la Empresa"
          className="intro-image" // Usamos la clase 'intro-image' para la imagen
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        />
      </section>

      {/* Sección de Manual de Funciones */}
      <section className="manual-de-funciones">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Manual de Funciones
        </motion.h2>
        <p>
          El manual de funciones describe los roles y responsabilidades de cada puesto en la empresa, asegurando que todos los empleados estén alineados con los objetivos estratégicos.
        </p>
        <ul>
          <li><strong>Chief Executive Officer (CEO)</strong> - Responsable de liderar la empresa y tomar decisiones estratégicas clave.</li>
          <li><strong>Chief Information Officer (CIO)</strong> - Alinea la infraestructura tecnológica con las necesidades del negocio.</li>
          <li><strong>Chief Technology Officer (CTO)</strong> - Dirige el desarrollo y la calidad de los productos tecnológicos.</li>
          <li><strong>Gerente de Marketing</strong> - Desarrolla e implementa estrategias de marketing para aumentar la visibilidad de la empresa.</li>
          <li><strong>Gerente de Finanzas</strong> - Supervisa las finanzas, controla los recursos y prepara informes financieros.</li>
          <li><strong>Gerente de Operaciones</strong> - Asegura la correcta ejecución de proyectos y optimiza procesos operativos.</li>
        </ul>
        <a href="/manual-de-funciones.pdf" download>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            Descargar Manual de Funciones
          </motion.button>
        </a>
      </section>

      {/* Sección de Manual de Actividades */}
      <section className="manual-de-actividades">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          Manual de Actividades
        </motion.h2>
        <p>
          El manual de actividades especifica las tareas y objetivos clave para cada área de la empresa, asegurando que cada departamento cumpla con su rol de manera eficiente.
        </p>
        <ul>
          <li><strong>Dirección General (CEO)</strong>: Definir la estrategia anual de crecimiento, ajustar la misión y visión.</li>
          <li><strong>Tecnología e Infraestructura (CIO)</strong>: Actualizar la infraestructura, implementar ciberseguridad y evaluar nuevas tecnologías.</li>
          <li><strong>Desarrollo de Productos (CTO)</strong>: Diseñar productos alineados con el mercado, revisar calidad y aplicar metodologías ágiles.</li>
          <li><strong>Marketing y Comunicación</strong>: Diseñar campañas de marketing digital, analizar el mercado y medir el ROI.</li>
          <li><strong>Finanzas</strong>: Elaborar el presupuesto anual, controlar el flujo de caja y preparar informes financieros.</li>
          <li><strong>Seguridad</strong>: Elaborar políticas de seguridad informática y realizar auditorías periódicas.</li>
        </ul>
        <a href="/manual-de-actividades.pdf" download>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            Descargar Manual de Actividades
          </motion.button>
        </a>
      </section>

      {/* Sección de Gestión de Riesgos */}
      <section className="gestion-de-riesgos">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
        >
          Gestión de Riesgos
        </motion.h2>
        <p>
          En MVM Solutions, hemos implementado un enfoque sistemático para identificar, evaluar y mitigar los riesgos que puedan afectar el cumplimiento de nuestros objetivos estratégicos.
        </p>
        <ul>
          <li><strong>Riesgo: Decisiones estratégicas erróneas</strong> - Impacto alto. Implementación de revisiones colegiadas.</li>
          <li><strong>Riesgo: Obsolescencia tecnológica</strong> - Impacto alto. Auditorías anuales y renovación tecnológica.</li>
          <li><strong>Riesgo: Retrasos en el desarrollo de productos</strong> - Impacto medio. Implementación de metodologías ágiles.</li>
          <li><strong>Riesgo: Ineficiencia en campañas de marketing</strong> - Impacto alto. Análisis de mercado y medición de ROI.</li>
          <li><strong>Riesgo: Pérdidas financieras por mala gestión</strong> - Impacto alto. Auditorías financieras y simulaciones de escenarios.</li>
          <li><strong>Riesgo: Fallas en la seguridad</strong> - Impacto alto. Auditorías periódicas y protocolos de ciberseguridad avanzados.</li>
        </ul>
        <a href="/gestion-de-riesgos.pdf" download>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
          >
            Descargar Documento de Gestión de Riesgos
          </motion.button>
        </a>
      </section>

    </motion.div>
  );
};

export default Planificacion;
