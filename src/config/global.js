export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Gobierno Escolar y Reglamento o Manual de Convivencia',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentación legal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Fundamento legal del Gobierno Escolar',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Fundamento legal del manual de convivencia',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Relación con el quehacer docente y la comunidad educativa',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Interpretación de la legislación para aplicación práctica',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ley 1620 del 2013',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Objetivos y alcance',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Principios para la convivencia y formación en derechos humanos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Educación para la sexualidad y prevención de la violencia escolar',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Decreto 1095 del 2013',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Reglamentación del Sistema Nacional de Convivencia Escolar',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Procedimientos para la elaboración y adopción del manual de convivencia',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Arriola, C. (1994). <i>¿Qué es la democracia?</i> Editorial Miguel Ángel Porrúa. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/72937',
    },
    {
      referencia: 'Aisenstein, Á. (2002). <i>La escuela</i>. Miño y Dávila. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/36270',
    },
    {
      referencia:
        'Cámara de Diputados del H. Congreso de la Unión. (2016). <i>Ley General de Educación</i>. Cámara de Diputados del H. Congreso de la Unión. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/30824',
    },
    {
      referencia:
        'Ñañez Rodríguez, J. J. & Capera Figueroa, J. J. (2017). Participación política y gobierno escolar en las instituciones educativas de Ibagué. <i>Espacios públicos, 20</i>(48), 151-171. ',
      link: 'https://www.redalyc.org/journal/676/67652755008/html/',
    },
    {
      referencia:
        'Valencia Murcia, F. & Mazuera, V. (2006). La figura del manual de convivencia en la vida escolar. Elementos para su comprensión. <i>Revista Científica Guillermo de Ockham, 4</i>(1), 119-131. ',
      link: 'https://www.redalyc.org/pdf/1053/105316847007.pdf',
    },
    {
      referencia:
        'Rodríguez Vega, D., Hadad Larios, I. & Rodríguez Vega, D. (2013). <i>Ideas pedagógicas: análisis de la normatividad sobre Educación Preescolar en Colombia</i>. Universidad del Norte. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69916',
    },
    {
      referencia:
        'López, M. C. & Müller, M. B. (2018). <i>Prevención del abuso sexual en la infancia: guía docente</i>. Editorial Maipue. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/112841',
    },
    {
      referencia:
        'Bocanegra Acosta, H. & Herrera Castillo, C. (2018). LA LEY 1620 DEL 2013 Y LA POLÍTICA PÚBLICA EDUCATIVA DE CONVIVENCIA ESCOLAR EN COLOMBIA: ENTRE LA FORMALIDAD JURÍDICA Y LA REALIDAD SOCIAL. <i>Revista Republicana</i>, 23(23). ',
      link:
        'https://ojs.urepublicana.edu.co/index.php/revistarepublicana/article/view/413',
    },
    {
      referencia:
        'Castro Herrera, L. (2018). Eficacia simbólica de la ley 1620 del 2013 sobre Sistema de Convivencia Escolar. <i>Revista Legem, 4</i>(2), 21–51. ',
      link:
        'https://revistas.uniatlantico.edu.co/index.php/legin/article/view/2217',
    },
    {
      referencia:
        'Peñaranda Cantillo, M. N. (2023). <i>Aplicabilidad y apropiación de la ley 1620 del 2013 en las instituciones educativas</i> (Trabajo de grado - Maestría, Universidad francisco de Paula Santander). ',
      link: 'https://repositorio.ufps.edu.co/handle/ufps/8911',
    },
    {
      referencia:
        'Salcedo, L. M. L., Rodríguez Ávila, G. I. & Parada Ramírez, A. (2021). <i>Clima de aula, estilo docente y educación para la convivencia y la ciudadanía</i>. Editorial Pontificia Universidad Javeriana. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/218699',
    },
    {
      referencia:
        'Santos Guerra, M. Á. (2012). <i>Pasión por la escuela: cartas a la comunidad educativa</i>. Homo Sapiens Ediciones. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/67095',
    },
    {
      referencia:
        'Bello Ramírez, A., León Forero, C., Ruíz, C. A., Rodríguez Buenaventura, C., Chaparro, J. J., Pérez Méndez, J. V., ... & Herrera Peña, V. (2022). Orientaciones para la revisión, fortalecimiento y actualización de los manuales de convivencia escolar. ',
      link:
        'https://repositoriosed.educacionbogota.edu.co/server/api/core/bitstreams/e17e0e90-5205-4091-8074-e7385d102fca/content',
    },
    {
      referencia:
        'ArizaTorres, A. G., Echeverri Alzate, N. & Giraldo Agudelo, V. (2018). CUMPLIMIENTO DEL DECRETO 1965 DE 2013 REGLAMENTARIO DE LA “LEY DE CONVIVENCIA ESCOLAR”, LEY 1620 DE 2013 EN CUANTO A LA ACTUALIZACIÓN DEL MANUAL DE CONVIVENCIA Y APLICACIÓN DE LA RUTA DE ATENCIÓN INTEGRAL EN LAS INSTITUCIONES PÚBLICAS DE EDUCACIÓN MEDIA DEL MUNICIPIO DE PEREIRA. ',
      link: 'https://core.ac.uk/download/pdf/233044024.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Acuerdo escolar',
      significado:
        'Decisión colectiva que regula aspectos de la vida institucional, construida con participación de la comunidad educativa.',
    },
    {
      termino: 'Autorregulación',
      significado:
        'Capacidad de una persona para controlar su conducta, emociones y reacciones, especialmente en contextos sociales.',
    },
    {
      termino: 'Convivencia escolar',
      significado:
        'Relación armónica entre los miembros de la comunidad educativa, basada en el respeto, el diálogo y la inclusión.',
    },
    {
      termino: 'Derechos humanos',
      significado:
        'Principios universales que protegen la dignidad de todas las personas y deben ser garantizados en el entorno escolar.',
    },
    {
      termino: 'Decreto 1095 del 2013',
      significado:
        'Norma que reglamenta la Ley 1620 y establece el funcionamiento del Sistema Nacional de Convivencia Escolar.',
    },
    {
      termino: 'Diversidad',
      significado:
        'Reconocimiento y valoración de las diferencias individuales y culturales dentro del contexto educativo.',
    },
    {
      termino: 'Gobierno Escolar',
      significado:
        'Conjunto de órganos que promueven la participación democrática en la toma de decisiones de la institución educativa.',
    },
    {
      termino: 'Manual de Convivencia',
      significado:
        'Documento institucional que establece normas, acuerdos y procedimientos para regular la vida escolar y resolver conflictos.',
    },
    {
      termino: 'Mediación escolar',
      significado:
        'Estrategia de resolución pacífica de conflictos que promueve el diálogo entre las partes con el acompañamiento de un tercero.',
    },
    {
      termino: 'Normatividad',
      significado:
        'Conjunto de leyes, decretos o reglamentos que rigen una actividad o institución.',
    },
    {
      termino: 'Participación',
      significado:
        'Acción de intervenir activamente en los procesos escolares, aportando ideas, decisiones y responsabilidades compartidas.',
    },
    {
      termino: 'Prevención',
      significado:
        'Conjunto de acciones orientadas a evitar situaciones de conflicto o violencia en el entorno escolar.',
    },
    {
      termino: 'Reglamento',
      significado:
        'Conjunto de normas establecidas para mantener el orden y la convivencia en una organización.',
    },
    {
      termino: 'Resolución de conflictos',
      significado:
        'Proceso mediante el cual se abordan y solucionan desacuerdos o problemas entre miembros de la comunidad escolar.',
    },
    {
      termino: 'Sistema Nacional de Convivencia Escolar',
      significado:
        'Estructura establecida por la Ley 1620 para promover entornos escolares seguros, pacíficos e incluyentes.',
    },
  ],
}
