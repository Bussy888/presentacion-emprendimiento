import React from "react";
import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
const Disenio = () => {
  const etapas = [
    {
      etapa: "Análisis de Procesos",
      duracion: "2 semanas",
      objetivo:
        "Identificar flujos de trabajo actuales y definir áreas de mejora en cada departamento.",
      actividades: [
        {
          actividad: "Reunión con líderes de área",
          duracion: "3 días",
          responsable: "Dirección General",
          dependencias: "Ninguna",
          entregable: "Lista de objetivos clave",
        },
        {
          actividad: "Documentación de procesos actuales",
          duracion: "5 días",
          responsable: "CIO",
          dependencias: "Reuniones",
          entregable: "Diagramas de procesos",
        },
        {
          actividad: "Análisis de flujos y cuellos de botella",
          duracion: "3 días",
          responsable: "Dirección General y CIO",
          dependencias: "Documentación",
          entregable: "Informe preliminar",
        },
        {
          actividad: "Presentación del informe final",
          duracion: "2 días",
          responsable: "Dirección General",
          dependencias: "Análisis",
          entregable: "Propuesta de mejoras",
        },
      ],
    },
    {
      etapa: "Diseño del Modelo de Funcionamiento",
      duracion: "3 semanas",
      objetivo:
        "Crear un modelo funcional que articule la interacción entre áreas y estandarice procesos internos.",
      actividades: [
        {
          actividad: "Diseño del modelo general",
          duracion: "7 días",
          responsable: "Dirección General y CTO",
          dependencias: "Informe de análisis",
          entregable: "Modelo general preliminar",
        },
        {
          actividad: "Desarrollo de submodelos por áreas",
          duracion: "5 días",
          responsable: "Líderes de área",
          dependencias: "Modelo general",
          entregable: "Diagramas funcionales",
        },
        {
          actividad: "Revisión y ajustes",
          duracion: "3 días",
          responsable: "Dirección General y CIO",
          dependencias: "Submodelos",
          entregable: "Modelo aprobado",
        },
      ],
    },
    {
      etapa: "Desarrollo de Prototipos",
      duracion: "4-6 semanas",
      objetivo:
        "Crear y probar prototipos funcionales del sistema o procesos identificados en las etapas anteriores.",
      actividades: [
        {
          actividad: "Desarrollo inicial",
          duracion: "10 días",
          responsable: "CTO y Equipo de Desarrollo",
          dependencias: "Modelos aprobados",
          entregable: "Prototipo preliminar",
        },
        {
          actividad: "Pruebas iniciales",
          duracion: "5 días",
          responsable: "CTO y QA",
          dependencias: "Prototipo preliminar",
          entregable: "Informe de pruebas",
        },
        {
          actividad: "Iteraciones y ajustes",
          duracion: "10 días",
          responsable: "CTO y Equipo de Desarrollo",
          dependencias: "Retroalimentación",
          entregable: "Prototipo funcional",
        },
      ],
    },
    {
      etapa: "Pruebas de Infraestructura",
      duracion: "3 semanas",
      objetivo:
        "Garantizar la funcionalidad y estabilidad de las tecnologías implementadas.",
      actividades: [
        {
          actividad: "Configuración inicial",
          duracion: "5 días",
          responsable: "CIO",
          dependencias: "Prototipo funcional",
          entregable: "Infraestructura operativa",
        },
        {
          actividad: "Pruebas de carga",
          duracion: "5 días",
          responsable: "CIO y QA",
          dependencias: "Configuración inicial",
          entregable: "Informe de rendimiento",
        },
        {
          actividad: "Ajustes finales",
          duracion: "5 días",
          responsable: "CIO",
          dependencias: "Informe de pruebas",
          entregable: "Infraestructura aprobada",
        },
      ],
    },
    {
      etapa: "Diseño de Estrategias de Marketing",
      duracion: "2 semanas",
      objetivo:
        "Desarrollar estrategias para el lanzamiento o promoción del sistema.",
      actividades: [
        {
          actividad: "Investigación de mercado",
          duracion: "5 días",
          responsable: "Gerente de Marketing",
          dependencias: "Ninguna",
          entregable: "Informe de análisis",
        },
        {
          actividad: "Diseño de la campaña",
          duracion: "3 días",
          responsable: "Equipo de Marketing",
          dependencias: "Informe de mercado",
          entregable: "Estrategia inicial",
        },
        {
          actividad: "Pruebas piloto",
          duracion: "2 días",
          responsable: "Equipo de Marketing",
          dependencias: "Estrategia inicial",
          entregable: "Ajustes en estrategias",
        },
      ],
    },
    {
      etapa: "Revisión General y Ajustes",
      duracion: "2 semanas",
      objetivo:
        "Realizar una evaluación final e implementar ajustes antes del despliegue o entrega final.",
      actividades: [
        {
          actividad: "Auditoría",
          duracion: "5 días",
          responsable: "Dirección General y CTO",
          dependencias: "Todas las etapas",
          entregable: "Informe de auditoría",
        },
        {
          actividad: "Implementación de ajustes finales",
          duracion: "5 días",
          responsable: "CTO y CIO",
          dependencias: "Informe de auditoría",
          entregable: "Sistema final ajustado",
        },
        {
          actividad: "Preparación para el despliegue",
          duracion: "2 días",
          responsable: "Todos los equipos",
          dependencias: "Sistema final ajustado",
          entregable: "Sistema listo para entrega",
        },
      ],
    },
  ];

  return (
    <motion.div
      className="container" // Contenedor principal
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Sección Principal */}
      <section className="seccion-principal">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.h2>
      </section>

      {/* Flujos de Trabajo y Análisis de Procesos */}
      <section className="flujos-trabajo">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Flujos de Trabajo y Análisis de Procesos
        </motion.h2>

        <div className="flujo">
          <h2>Dirección General (CEO)</h2>
          <p>
            <strong>Flujo:</strong> Definir objetivos estratégicos, coordinar
            líderes, monitorear KPIs clave.
          </p>
          <p>
            <strong>Análisis:</strong> Identificar cuellos de botella, evaluar
            comunicación interna y priorizar decisiones basadas en datos.
          </p>
          <p>
            <strong>Herramientas:</strong> Diagramas de flujo (Lucidchart),
            software de OKRs (WorkBoard, Perdoo), BI (Tableau, Power BI).
          </p>
        </div>

        <div className="flujo">
          <h2>Tecnología e Infraestructura (CIO)</h2>
          <p>
            <strong>Flujo:</strong> Identificación de necesidades tecnológicas,
            pruebas de infraestructura, capacitación del personal.
          </p>
          <p>
            <strong>Análisis:</strong> Asegurar seguridad de datos y ROI de
            tecnologías adquiridas.
          </p>
          <p>
            <strong>Herramientas:</strong> ITIL, COBIT, monitorización con
            SolarWinds, evaluación de seguridad (Splunk, Nessus).
          </p>
        </div>

        <div className="flujo">
          <h2>Desarrollo de Productos (CTO)</h2>
          <p>
            <strong>Flujo:</strong> Análisis de requisitos del cliente,
            desarrollo ágil del producto, pruebas antes del despliegue.
          </p>
          <p>
            <strong>Análisis:</strong> Evaluar rendimiento por sprint, priorizar
            backlog y verificar escalabilidad.
          </p>
          <p>
            <strong>Herramientas:</strong> Jira, Trello, pruebas automatizadas
            (Selenium, Postman), control de versiones (GitHub).
          </p>
        </div>

        <div className="flujo">
          <h2>Marketing y Comunicación</h2>
          <p>
            <strong>Flujo:</strong> Investigación de mercado, diseño de
            campañas, análisis y optimización de resultados.
          </p>
          <p>
            <strong>Análisis:</strong> Identificar canales efectivos, evaluar
            contenido de mayor engagement y usar dashboards dinámicos.
          </p>
          <p>
            <strong>Herramientas:</strong> HubSpot, redes sociales (Hootsuite),
            análisis de resultados (Google Analytics, Crazy Egg).
          </p>
        </div>

        <div className="flujo">
          <h2>Finanzas</h2>
          <p>
            <strong>Flujo:</strong> Elaboración de presupuestos, monitoreo de
            flujo de caja, generación de informes financieros.
          </p>
          <p>
            <strong>Análisis:</strong> Detectar sobrecostos, optimizar
            inversiones, prever escenarios adversos.
          </p>
          <p>
            <strong>Herramientas:</strong> SAP, Oracle NetSuite, previsión con
            Excel avanzado o Power BI.
          </p>
        </div>

        <div className="flujo">
          <h2>Recursos Humanos (CPO)</h2>
          <p>
            <strong>Flujo:</strong> Reclutamiento, evaluación del desempeño y
            desarrollo profesional.
          </p>
          <p>
            <strong>Análisis:</strong> Reducir rotación, identificar capacidades
            del equipo y medir productividad.
          </p>
          <p>
            <strong>Herramientas:</strong> BambooHR, eLearning (Udemy,
            Coursera).
          </p>
        </div>

        <div className="flujo">
          <h2>Logística y Operaciones (COO)</h2>
          <p>
            <strong>Flujo:</strong> Gestión de proveedores, optimización
            logística, control de inventarios.
          </p>
          <p>
            <strong>Análisis:</strong> Identificar cuellos de botella, analizar
            costes y minimizar tiempos muertos.
          </p>
          <p>
            <strong>Herramientas:</strong> SAP SCM, rutas logísticas (Route4Me),
            control de inventarios (TradeGecko).
          </p>
        </div>

        <div className="consideraciones">
          <h2>Consideraciones Finales</h2>
          <ul>
            <li>
              <strong>Automatización:</strong> Reducir tiempos y costos en
              diversas áreas.
            </li>
            <li>
              <strong>Cultura Organizacional:</strong> Fomentar sinergias entre
              los equipos.
            </li>
            <li>
              <strong>Estrategia:</strong> Unificar flujos de trabajo para
              evitar redundancias.
            </li>
          </ul>
        </div>
      </section>

      {/* Manual de Información */}
      <section className="manual-informacion">
        <p>Aquí se puede descargar los flujos de trabajo.</p>
        <a href="downloables/flujo.pdf" download>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Descargar Los Flujos de Trabajo
          </motion.button>
        </a>
      </section>

      {/* Creación de un Modelo de Funcionamiento General y por Áreas */}
      <section className="modelo-funcionamiento">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Creación de un Modelo de Funcionamiento General y por Áreas
        </motion.h2>

        {/* Modelo General */}
        <div className="modelo-general">
          <h2>Modelo General</h2>
          <h2>Interacciones entre áreas:</h2>
          <ul>
            <li>
              <strong>Flujo jerárquico claro:</strong> Comunicación definida
              desde el nivel operativo hasta la alta dirección.
            </li>
            <li>
              <strong>Integración horizontal:</strong> Colaboración entre áreas
              clave para eliminar silos.
            </li>
            <li>
              <strong>Retroalimentación continua:</strong> Conectar decisiones
              estratégicas con datos y resultados operativos.
            </li>
          </ul>

          <h2>
            <strong>Procesos clave:</strong>
          </h2>
          <ul>
            <li>
              <strong>Desarrollo de productos:</strong> Relacionar visión
              estratégica con innovación tecnológica orientada al cliente.
            </li>
            <li>
              <strong>Gestión de riesgos:</strong> Identificar riesgos
              (financieros, tecnológicos, operativos) y mitigarlos.
            </li>
            <li>
              <strong>Decisiones estratégicas:</strong> Uso de KPIs y análisis
              de datos que guían las prioridades.
            </li>
          </ul>

          <h2>
            <strong>Elementos principales:</strong>
          </h2>
          <ul>
            <li>
              <strong>Visión estratégica compartida:</strong> Enfoque claro de
              cada área hacia los objetivos generales.
            </li>
            <li>
              <strong>Interdependencia operativa:</strong> Colaboración entre
              áreas (ejemplo: Marketing aporta feedback al CTO).
            </li>
            <li>
              <strong>Ciclos de evaluación:</strong> Definir plazos y revisiones
              para ajustar prioridades.
            </li>
          </ul>

          <p>
            <strong>Herramientas de referencia:</strong> Arquitectura
            Empresarial como TOGAF para estructuración. Complementar con ITIL o
            BPMN para modelar procesos.
          </p>
        </div>

        {/* Modelo por Áreas */}
        <div className="modelo-por-areas">
          <h2>Modelo por Áreas</h2>
          <div className="area">
            <h2>1. Dirección General (CEO)</h2>
            <p>
              <strong>Rol:</strong> Liderar decisiones estratégicas y garantizar
              alineación con los objetivos.
            </p>
            <p>
              <strong>Responsabilidades:</strong>
            </p>
            <ul>
              <li>Establecer objetivos estratégicos.</li>
              <li>
                Monitorear KPIs relacionados con ingreso, crecimiento y
                eficiencia operativa.
              </li>
              <li>
                Coordinar con líderes para fomentar la colaboración inter-áreas.
              </li>
            </ul>
            <p>
              <strong>Indicadores clave (KPIs):</strong> Cumplimiento de
              objetivos estratégicos, satisfacción de stakeholders, tiempo de
              toma de decisiones.
            </p>
          </div>

          <div className="area">
            <h2>2. Tecnología e Infraestructura (CIO)</h2>
            <p>
              <strong>Rol:</strong> Asegurar una infraestructura tecnológica
              estable y segura.
            </p>
            <p>
              <strong>Responsabilidades:</strong>
            </p>
            <ul>
              <li>Gestionar sistemas tecnológicos y su mantenimiento.</li>
              <li>Adoptar nuevas tecnologías para optimizar procesos.</li>
              <li>Proteger datos mediante ciberseguridad.</li>
            </ul>
            <p>
              <strong>Indicadores clave (KPIs):</strong> Disponibilidad de
              sistemas (% de uptime), tiempo de resolución de problemas,
              adopción de nuevas herramientas por empleados.
            </p>
          </div>

          <div className="area">
            <h2>3. Innovación y Desarrollo de Productos (CTO)</h2>
            <p>
              <strong>Rol:</strong> Crear y mejorar productos innovadores según
              las necesidades del cliente.
            </p>
            <p>
              <strong>Responsabilidades:</strong>
            </p>
            <ul>
              <li>Implementar metodologías ágiles (Scrum, Kanban).</li>
              <li>Monitorear calidad en cada etapa del desarrollo.</li>
              <li>Incorporar feedback post-lanzamiento.</li>
            </ul>
            <p>
              <strong>Indicadores clave (KPIs):</strong> Tiempo de desarrollo
              por sprint, tasa de éxito en lanzamientos, % de feedback del
              cliente aplicado.
            </p>
          </div>

          <div className="area">
            <h2>4. Marketing y Comunicación</h2>
            <p>
              <strong>Rol:</strong> Desarrollar estrategias de posicionamiento y
              captación de clientes.
            </p>
            <p>
              <strong>Responsabilidades:</strong>
            </p>
            <ul>
              <li>Diseñar campañas omnicanal orientadas al cliente.</li>
              <li>
                Analizar resultados de campañas (ROI) y ajustar estrategias.
              </li>
              <li>
                Realizar investigaciones de mercado para mejorar productos y
                servicios.
              </li>
            </ul>
            <p>
              <strong>Indicadores clave (KPIs):</strong> Tasa de adquisición de
              clientes, ROI de campañas, satisfacción del cliente (%).
            </p>
          </div>

          <div className="area">
            <h2>5. Finanzas</h2>
            <p>
              <strong>Rol:</strong> Garantizar la sostenibilidad financiera y
              manejar eficientemente los recursos.
            </p>
            <p>
              <strong>Responsabilidades:</strong>
            </p>
            <ul>
              <li>Elaborar presupuestos y controlar asignación de recursos.</li>
              <li>Monitorear flujo de caja para evitar riesgos de liquidez.</li>
              <li>
                Proporcionar análisis financieros claros para evaluar proyectos
                y costos.
              </li>
            </ul>
            <p>
              <strong>Indicadores clave (KPIs):</strong> EBITDA, margen de
              costos (%), tiempo para generar reportes financieros.
            </p>
          </div>
        </div>

        {/* Consideraciones Generales */}
        <div className="consideraciones-generales">
          <h2>Consideraciones Generales del Modelo</h2>
          <ul>
            <li>
              <strong>Implementar comunicación transversal:</strong> Con
              herramientas comunes (Slack, Microsoft Teams) para visibilidad de
              proyectos.
            </li>
            <li>
              <strong>Usar herramientas interoperables:</strong> Como ERP (SAP,
              Odoo) para evitar duplicidad.
            </li>
            <li>
              <strong>Establecer mecanismos de evaluación periódica:</strong>{" "}
              Reuniones mensuales para medir avances y alinear decisiones
              estratégicas con datos actualizados.
            </li>
          </ul>
        </div>
      </section>

      {/* Manual de Información */}
      <section className="manual-informacion">
        <p>Aquí se puede descargar el modelo.</p>
        <a href="downloables/modelo.pdf" download>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Descargar Modelos de Funcionamiento
          </motion.button>
        </a>
      </section>

      {/* Resumen de Herramientas */}
      <section className="herramientas">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Resumen de Herramientas
        </motion.h2>

        {/* Gestión de Proyectos */}
        <div className="categoria">
          <h2>1. Gestión de Proyectos</h2>
          <p>Ayudan a planificar, organizar y monitorear tareas y equipos.</p>
          <ul>
            <li>
              <strong>Jira:</strong> Gestión ágil (Kanban, Scrum).
            </li>
            <li>
              <strong>Trello:</strong> Tableros visuales simples.
            </li>
            <li>
              <strong>Asana/Monday.com:</strong> Gestión de tareas y seguimiento
              de progreso.
            </li>
          </ul>
        </div>

        {/* Modelado de Procesos */}
        <div className="categoria">
          <h2>2. Modelado de Procesos</h2>
          <p>
            Herramientas para crear diagramas de flujo y analizar procesos
            organizativos.
          </p>
          <ul>
            <li>
              <strong>Microsoft Visio y Lucidchart:</strong> Diagramas de flujo
              y mapas de procesos.
            </li>
            <li>
              <strong>Bizagi:</strong> Modelador BPMN para procesos complejos.
            </li>
            <li>
              <strong>Miro/Draw.io:</strong> Pizarras colaborativas y diseño
              visual.
            </li>
          </ul>
        </div>

        {/* Desarrollo de Software */}
        <div className="categoria">
          <h2>3. Desarrollo de Software</h2>
          <p>Apoyan programación, control de versiones y despliegue.</p>
          <ul>
            <li>
              <strong>Visual Studio Code:</strong> Editor de código
              multiplataforma.
            </li>
            <li>
              <strong>GitHub:</strong> Control de versiones y colaboración.
            </li>
            <li>
              <strong>Docker:</strong> Contenedores para ambientes consistentes.
            </li>
            <li>
              <strong>Postman:</strong> Pruebas de APIs.
            </li>
            <li>
              <strong>Jenkins:</strong> Integración/despliegue continuo (CI/CD).
            </li>
            <li>
              <strong>IDEs especializados:</strong> IntelliJ IDEA (Java),
              PyCharm (Python).
            </li>
          </ul>
        </div>

        {/* Colaboración y Comunicación */}
        <div className="categoria">
          <h2>4. Colaboración y Comunicación</h2>
          <p>Facilitan la interacción entre equipos.</p>
          <ul>
            <li>
              <strong>Slack/Microsoft Teams:</strong> Comunicación en tiempo
              real e integraciones.
            </li>
            <li>
              <strong>Notion:</strong> Documentación, bases de datos y tareas en
              un mismo lugar.
            </li>
            <li>
              <strong>Miro/Zoom:</strong> Colaboración visual y reuniones
              virtuales.
            </li>
          </ul>
        </div>

        {/* Análisis y Gestión de Datos */}
        <div className="categoria">
          <h2>5. Análisis y Gestión de Datos</h2>
          <p>
            Permiten extraer y visualizar insights para la toma de decisiones.
          </p>
          <ul>
            <li>
              <strong>Power BI/Tableau:</strong> Dashboards y visualización
              avanzada.
            </li>
            <li>
              <strong>Google Data Studio:</strong> Informes dinámicos gratuitos.
            </li>
            <li>
              <strong>Snowflake/Apache Spark:</strong> Procesamiento avanzado de
              datos en la nube.
            </li>
          </ul>
        </div>

        {/* Marketing y Comunicación Digital */}
        <div className="categoria">
          <h2>6. Marketing y Comunicación Digital</h2>
          <p>Gestión y monitoreo de campañas de marketing.</p>
          <ul>
            <li>
              <strong>Google Ads/HubSpot:</strong> Publicidad y automatización.
            </li>
            <li>
              <strong>Hootsuite/Sprout Social:</strong> Gestión de redes
              sociales.
            </li>
            <li>
              <strong>Canva:</strong> Creación de contenido gráfico accesible.
            </li>
            <li>
              <strong>SEO:</strong> SEMRush o Ahrefs para investigación de
              palabras clave y análisis competitivo.
            </li>
          </ul>
        </div>

        {/* Finanzas y Contabilidad */}
        <div className="categoria">
          <h2>7. Finanzas y Contabilidad</h2>
          <p>Apoyan la sostenibilidad financiera y gestión contable.</p>
          <ul>
            <li>
              <strong>Sistema ERP:</strong> SAP, Microsoft Dynamics 365, Odoo.
            </li>
            <li>
              <strong>QuickBooks/Xero/Zoho Books:</strong> Gestión financiera
              para pequeñas y medianas empresas.
            </li>
            <li>
              <strong>Anaplan:</strong> Análisis y planificación financiera
              avanzada.
            </li>
          </ul>
        </div>

        {/* Recursos Humanos */}
        <div className="categoria">
          <h2>8. Recursos Humanos</h2>
          <p>Optimización del talento, la nómina y el desempeño.</p>
          <ul>
            <li>
              <strong>BambooHR/Workday:</strong> Gestión de nóminas y procesos
              de RR.HH.
            </li>
            <li>
              <strong>LinkedIn Talent Solutions:</strong> Reclutamiento
              profesional.
            </li>
            <li>
              <strong>Evaluación:</strong> 15Five, SAP SuccessFactors.
            </li>
          </ul>
        </div>

        {/* Operaciones y Logística */}
        <div className="categoria">
          <h2>9. Operaciones y Logística</h2>
          <p>Gestionan cadenas de suministro y optimización operativa.</p>
          <ul>
            <li>
              <strong>Odoo:</strong> ERP multifuncional.
            </li>
            <li>
              <strong>Manhattan Associates:</strong> Gestión avanzada de la
              cadena de suministro.
            </li>
            <li>
              <strong>Route4Me:</strong> Planificación de rutas de transporte.
            </li>
            <li>
              <strong>Fishbowl Inventory:</strong> Control en tiempo real de
              inventarios.
            </li>
          </ul>
        </div>

        {/* Recomendación Final */}
        <div className="recomendacion-final">
          <h2>Recomendación Final</h2>
          <p>
            <strong>Integración centralizada:</strong> Utilizar un ERP como SAP
            u Odoo o herramientas de automatización como Zapier o Integromat
            para conectar datos y procesos, evitando redundancias y garantizando
            fluidez entre áreas.
          </p>
        </div>
      </section>

      {/* Manual de Información */}
      <section className="manual-informacion">
        <p>Aquí se puede descargar la docuemntacion de las herramientas.</p>
        <a href="downloables/Herramientas.pdf" download>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Descargar Herramientas
          </motion.button>
        </a>
      </section>

      <section className="flujos-trabajo">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Cronogramas
        </motion.h2>
      </section>

      <div>
        {etapas.map((etapa, index) => (
          <div key={index} style={{ marginBottom: "40px" }}>
            <h2>{`Etapa ${index + 1}: ${etapa.etapa}`}</h2>
            <p>
              <strong>Duración:</strong> {etapa.duracion}
            </p>
            <p>
              <strong>Objetivo:</strong> {etapa.objetivo}
            </p>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Actividad</TableCell>
                    <TableCell>Duración</TableCell>
                    <TableCell>Responsable</TableCell>
                    <TableCell>Dependencias</TableCell>
                    <TableCell>Entregable</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {etapa.actividades.map((actividad, i) => (
                    <TableRow key={i}>
                      <TableCell>{actividad.actividad}</TableCell>
                      <TableCell>{actividad.duracion}</TableCell>
                      <TableCell>{actividad.responsable}</TableCell>
                      <TableCell>{actividad.dependencias}</TableCell>
                      <TableCell>{actividad.entregable}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ))}
      </div>

            {/* Manual de Información */}
            <section className="manual-informacion">
        <p>Aquí se puede descargar los cronogramas.</p>
        <a href="downloables/Cronogramas.pdf" download>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Descargar Cronogramas
          </motion.button>
        </a>
      </section>
    </motion.div>
  );
};
export default Disenio;
