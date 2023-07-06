export default {
  global: {
    componenteFormativo: 'Valoración integral en salud',
    descripcionCurso:
      'Este componente formativo aborda aspectos generales y claves sobre el reconocimiento, aplicación e interpretación de los instrumentos de valoración integral en salud por curso de vida, los cuales permiten definir las condiciones necesarias para garantizar la promoción de la salud, la prevención de la enfermedad y la generación de una cultura del cuidado para todas las personas, familias y comunidades.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Instrumentos para la valoración integral en salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Marco normativo y técnico',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Instrumentos de tamizaje',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Instrumentos asociados a la valoración integral en salud de aplicación obligatoria',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Instrumentos sugeridos o complementarios',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Aplicación e interpretación de instrumentos de valoración integral por momento de curso de vida',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Primera infancia',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Infancia',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Adolescencia y juventud',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Adultez',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Vejez',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/33110287_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Instrumentos para la valoración integral en salud',
      referencia:
        'Álvarez Cosmea, A.  (2001).  Las tablas de riesgo cardiovascular.  Una revisión crítica.  <em>Medifam,11</em>(3), 132-139.',
      tipo: 'Artículo',
      link: 'https://scielo.isciii.es/pdf/medif/v11n3/revision.pdf',
    },
    {
      tema: 'Marco normativo y técnico',
      referencia:
        'Ministerio de Salud Pública y Asistencia Social de Guatemala (s.f.).  <em>Modelo de atención integral en salud. </em>',
      tipo: 'Documento PDF',
      link:
        'https://docs.bvsalud.org/biblioref/2019/06/998258/modelo-de-atencion-integral-en-salud.pdf',
    },
    {
      tema: 'Marco normativo y técnico',
      referencia:
        'Ministerio de Salud y Protección Social.  (2015).  <em>ABECÉ.  Enfoque de curso de vida. </em> ',
      tipo: 'Documento PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ABCenfoqueCV.pdf',
    },
    {
      tema: 'Marco normativo y técnico',
      referencia:
        'Ministerio de Salud y Protección Social.  (2016).  <em>Guía de práctica clínica para el diagnóstico, tratamiento y seguimiento de la diabetes mellitus tipo 2 en la población mayor de 18 años. </em>',
      tipo: 'Documento PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/CA/gpc-completa-diabetes-mellitus-tipo2-poblacion-mayor-18-anos.pdf',
    },
    {
      tema: 'Marco normativo y técnico',
      referencia:
        'Ministerio de Salud y Protección Social (2016).  <em>Política de atención integral en salud. </em> ',
      tipo: 'Documento PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/modelo-pais-2016.pdf',
    },
    {
      tema: 'Marco normativo y técnico',
      referencia:
        'Ministerio de Salud y Protección Social.  (2018).  <em>Marco conceptual y metodológico para el desarrollo de la educación para la salud de las Rutas Integrales de Atención en Salud -RIAS. </em>',
      tipo: 'Documento PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/directrices-educacion-pp.pdf',
    },
    {
      tema: 'Instrumentos para la valoración integral en salud',
      referencia:
        'Ministerio de Salud y Protección Social (s.f.).  Anexos.  <em>Tests de valoración integral. Instrumentos.</em> ',
      tipo: 'Documento PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/anexo-instrumentos-valoracion-ruta-promocion.pdf',
    },
    {
      tema:
        'Aplicación e interpretación de instrumentos de valoración integral por momento de curso de vida',
      referencia:
        'Organización Panamericana de Salud.  (s.f.).  <em>Curso de vida saludable. </em> ',
      tipo: 'Artículo página web',
      link: 'https://www.paho.org/es/temas/curso-vida-saludable',
    },
    {
      tema: 'Marco normativo y técnico',
      referencia:
        'Resolución 3280 de 2018.  [Ministerio de Salud y Protección Social].  Por medio de la cual se adoptan lineamientos técnicos y operativos de la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud y la Ruta Integral de Atención en Salud para la Población Materno Perinatal y se establecen las directrices para su operación.  2 de agosto de 2018',
      tipo: 'Documento PDF',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%203280%20de%2020183280.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Adolescencia',
      significado:
        'es un periodo de desarrollo biológico, psicológico, sexual y social inmediatamente posterior a la niñez y que comienza con la pubertad.',
    },
    {
      termino: 'Adultez',
      significado:
        'etapa donde la identidad, responsabilidad y aptitud están bien definidas, los valores, conceptos y definiciones se han ido adaptando a los cambios usuales de la vida en el desempeño de su quehacer diario y en su centro de trabajo.',
    },
    {
      termino: 'Atención en salud',
      significado:
        'acciones de los proveedores de salud institucionales y comunitarios para promoción de la salud, prevenir las enfermedades, recuperar la salud y rehabilitar el daño, ejecutando intervenciones a escala individual, familiar y comunitaria.',
    },
    {
      termino: 'Curso de vida',
      significado:
        'estudio a largo plazo de los efectos en la salud o la enfermedad de la exposición a riesgos físicos o sociales durante la gestación, la infancia, la adolescencia, la juventud y la vida adulta.',
    },
    {
      termino: 'Estratificación del riesgo',
      significado:
        'proceso continuo de identificación y evaluación de los distintos riesgos de enfermar y morir por un problema de salud, jerarquizándolos en distintos estratos de riesgo para seleccionar y aplicar las intervenciones diferenciadas para cada conjunto.',
    },
    {
      termino: 'Factores de riesgo',
      significado:
        'cualquier característica o circunstancia detectable de una persona o grupo de personas que se sabe asociada con la probabilidad de estar especialmente expuesta a desarrollar o padecer un proceso mórbido, sus características se asocian a un cierto tipo de daño a la salud.',
    },
    {
      termino: 'Factores protectores',
      significado:
        'aquellos que reducen la probabilidad de emitir conductas de riesgo o de tener consecuencias negativas cuando se involucran en ellas, estos factores cumplen una función beneficiosa o de protección en el estado de salud del individuo, ayudándolo a su adaptación al medio.',
    },
    {
      termino: 'Infancia',
      significado:
        'primer período de la vida de la persona, comprendido entre el nacimiento y el principio de la adolescencia.',
    },
    {
      termino: 'Instrumento de valoración integral en salud',
      significado:
        'herramienta operativa de obligatorio cumplimiento en todo el territorio nacional que define a los integrantes del sector salud (Dirección territorial de salud, aseguradores, entidades a cargo de regímenes especiales o de excepción y prestadores) las condiciones necesarias para garantizar la promoción de la salud, la prevención de la enfermedad y la generación de una cultura del cuidado para todas las personas, familias y comunidades ,como parte de la garantía del derecho a la salud, definido en la Ley Estatutaria de Salud.  ',
    },
    {
      termino: 'Juventud',
      significado:
        'período de la vida de la persona comprendido entre la infancia y la madurez. ',
    },
    {
      termino: 'Plan de cuidado',
      significado:
        'protocolización de las actuaciones de enfermería según las necesidades de cuidados que presentan grupos de pacientes con un mismo diagnóstico médico, que una vez implementados y monitoreados permiten consolidar la evaluación como eje de mejora de las intervenciones.',
    },
    {
      termino: 'Primera infancia',
      significado:
        'periodo que va del nacimiento a los cinco años de edad, y constituye un momento único del crecimiento en que el cerebro se desarrolla notablemente. Durante esta etapa, los niños reciben una mayor influencia de sus entornos y contextos.',
    },
    {
      termino: 'Rutas integrales',
      significado:
        'condiciones necesarias para asegurar la integralidad en la atención por parte de los agentes del sistema de salud (territorio, asegurador, prestador) y de otros sectores.',
    },
    {
      termino: 'Valoración integral',
      significado:
        'espacio de relacionamiento entre el profesional de la salud y las madres, padres o cuidadores, fundamental para conocer todos los aspectos que rodean el desarrollo y crecimiento de un niño o niña en su primera infancia.  ',
    },
    {
      termino: 'Vejez',
      significado:
        'último período de la vida de una persona, que sigue a la madurez, y en el cual se tiene edad avanzada.',
    },
    {
      termino: 'Vida saludable',
      significado:
        'hábitos de la vida diaria que ayudan a mantenernos más sanos y con menos limitaciones funcionales.',
    },
  ],
  referencias: [
    {
      referencia: '<em>Escala Abreviada de Desarrollo – 3. </em> (2016).  ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/Escala-abreviada-de-desarrollo-3.pdf ',
    },
    {
      referencia:
        'Instituto Nacional de Geriatría.  (s.f.).  <em>Escala de Evaluación Familiar (APGAR Family). </em> ',
      link:
        'http://inger.gob.mx/pluginfile.php/1682/mod_resource/content/19/Repositorio_Cursos/Archivos/Cuidamhe/MODULO_I/UNIDAD_3/APGAR.pdf ',
    },
    {
      referencia:
        'Ministerio de Inclusión Económica y Social de Ecuador.  (s.f.).  <em>Escala de Lawton y Brody (Actividades instrumentales de la vida diaria).  Ficha No. 3b.</em> ',
      link:
        'https://www.inclusion.gob.ec/wp-content/uploads/2019/01/3b-ESCALA-DE-LAWTON-Y-BRODY.pdf ',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social.  (2018).  <em>Anexo.  Instrumentos sugeridos en la valoración integral para detección temprana de riesgos o alteraciones.  </em>',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/instrumentos-aplicacion-sugerida-rpms.pdf',
    },
    {
      referencia:
        'Organización Panamericana de Salud.  (s.f.).  <em>Calculadora de riesgo cardiovascular. </em> ',
      link:
        'https://www.paho.org/es/hearts-americas/calculadora-riesgo-cardiovascular',
    },
    {
      referencia:
        'Paramio Rodríguez, A., Hernández Navas, M. y Carrazana Garcés, E. (2018). Riesgo cardiovascular global en un barrio del municipio Cárdenas, Estado Táchira, Venezuela. <em>CorSalud, 10</em>(1), 40-46. ',
      link: 'http://www.revcorsalud.sld.cu/index.php/cors/article/view/220/640',
    },
    {
      referencia:
        'Zumalacárregui, J. A.  (s.f.) <em> Test de Findrisk. Tuotromedico.</em>  ',
      link: 'https://www.tuotromedico.com/autotest/autotest_findrisk.htm',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Suralba Mosquera ',
          cargo: 'Experta Temática',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
        {
          nombre: 'Maribel Avellaneda Nieves',
          cargo: 'Diseñadora instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador instruccional',
          centro:
            'Regional Santander – Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador web',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
