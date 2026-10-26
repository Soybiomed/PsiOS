/* ==========================================================================
   CLINICAL CONCEPTS & EVALUATION PROTOCOLS MODULE (PsiOS)
   Arquitectura clínica integral con divisiones pedagógicas,
   protocolos de evaluación enfocados, ejemplos de discurso clínico real,
   navegación rápida por tabs y saltos directos al lector nativo de PDF.
   ========================================================================== */

export const ADDITIONAL_CLINICAL_CATALOG = [
  // =========================================================================
  // SUBDIVISIÓN 1: EL PENSAMIENTO (CURSO vs CONTENIDO)
  // =========================================================================
  {
    id: 'curso-pensamiento',
    title: 'Trastornos del curso y estructura del pensamiento',
    category: 'psicopatologia',
    categoryLabel: 'Definición Semiológica',
    isClinicalEntity: true,
    code: 'SEM-PEN-CUR-01',
    icon: '⚡',
    author: 'Semiología Psiquiátrica • Capponi & Belloch',
    badge: 'Elemento del Vivenciar • Ritmo & Continuidad',
    areas: ['ELEMENTOS DEL VIVENCIAR', 'PSICOPATOLOGÍA', 'SEMIOLOGÍA', 'EXAMEN MENTAL', 'PROCESOS PSICOLÓGICOS'],
    academicAffiliation: 'Manual Belloch (Vol. 1, Cap. 8, Pág. 218) • Ricardo Capponi (Pág. 64)',
    summary: 'Definición: anomalías en la velocidad, ritmo, continuidad asociativa y arquitectura formal del flujo de ideas.\nTrastornos de la velocidad: taquipsiquia (aceleración), fuga de ideas, bradipsiquia (enlentecimiento) e inhibición del pensamiento.\nTrastornos de la continuidad: bloqueo o interceptación, disgregación, descarrilamiento, tangencialidad, circunstancialidad (pensamiento prolijo) y perseveración.\nCriterio diferencial: el curso evalúa CÓMO se elabora y fluye el pensamiento, con independencia de que el contenido sea o no delirante.\nEvaluación: análisis semiográfico del débito verbal, latencia de respuesta y preservación del hilo conductor.',
    topics: [
      'Diferenciación Fundamental: Curso (Forma) vs. Contenido del Pensar',
      'Taquipsiquia y Fuga de Ideas (Saltos Asociativos por Rima o Distracción)',
      'Bradipsiquia e Inhibición Melancólica (Sensación de Esfuerzo Subjetivo)',
      'Bloqueo del Pensamiento (Detención Brusca en Esquizofrenia)',
      'Disgregación y Ensalada de Palabras (Pérdida de Sintaxis y Lógica)',
      'Descarrilamiento y Pensamiento Laxo (Deslizamiento Inadvertido de Tema)',
      'Tangencialidad (Respuestas que Rozan el Tema sin Tocarlo) vs. Circunstancialidad',
      'Perseveración Verbal y Ecolalia Motora'
    ]
  },
  {
    id: 'evaluacion-curso-pensamiento',
    title: 'Evaluación del curso y estructura formal del pensamiento',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-PEN-CUR-02',
    icon: '📋',
    author: 'Protocolo Semiográfico • Flujo, Ritmo y Asociación del Habla',
    badge: 'Examen Mental • Análisis del Discurso & Continuidad',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'ELEMENTOS DEL VIVENCIAR'],
    academicAffiliation: 'Exploración del Curso del Pensamiento (Belloch Cap. 8 & Capponi)',
    summary: 'Protocolo estructurado para examinar la velocidad, direccionalidad asociativa y coherencia formal del discurso verbal durante la entrevista clínica, diferenciando bradipsiquia, fuga de ideas, disgregación y perseveración con pauta de preguntas y observación.',
    topics: [
      'Paso 1: Medición de la Latencia de Respuesta y Presión del Habla',
      'Paso 2: Evaluación de la Direccionalidad (Meta de la Respuesta)',
      'Paso 3: Identificación de Saltos Asociativos y Descarrilamiento',
      'Paso 4: Verificación de Bloqueos Repentinos del Pensar',
      'Pauta Semiográfica de Registro del Curso Verbal'
    ]
  },
  {
    id: 'contenido-delirios',
    title: 'Trastornos del contenido del pensamiento y delirios',
    category: 'psicopatologia',
    categoryLabel: 'Definición Semiológica',
    isClinicalEntity: true,
    code: 'SEM-PEN-CON-01',
    icon: '👁️',
    author: 'Psicopatología de los Delirios • Jaspers, Capponi & Belloch',
    badge: 'Elemento del Vivenciar • Convicción & Delirios',
    areas: ['ELEMENTOS DEL VIVENCIAR', 'PSICOPATOLOGÍA', 'SEMIOLOGÍA', 'EXAMEN MENTAL'],
    academicAffiliation: 'Manual Belloch (Vol. 1, Cap. 9, Pág. 238) • Ricardo Capponi (Pág. 75)',
    summary: 'Definición: juicios de realidad falsos sostenidos con certeza subjetiva inquebrantable, impenetrables a la argumentación lógica o evidencia empírica.\nTipología clásica: delirios primarios (ocurrencia, percepción delirante y temple delirante) y secundarios o deliroides (derivados del humor o trauma).\nTemáticas delirantes: persecución, referencia, grandeza/megalomanía, celotipia (Otelo), culpa, ruina, hipocondría, Cotard (nihilista) y místico.\nControl yoico (Schneider): delirios de control, inserción, robo y difusión del pensamiento.\nDiagnóstico diferencial: idea delirante vs. idea sobrevalorada vs. idea obsesiva.',
    topics: [
      'Criterios Clásicos de Jaspers: Certeza Inquebrantable e Incorregibilidad',
      'Delirios Primarios de Kurt Schneider: Ocurrencia, Temple y Percepción Delirante',
      'Delirios Secundarios o Deliroides (Comprensibles desde el Afecto)',
      'Temática de Persecución, Perjuicio y Alusión/Referencia',
      'Delirio de Grandeza y Misión Místico-Mesiánica',
      'Delirio Celotípico (Síndrome de Otelo) y Delirio Erotomaníaco (Clérambault)',
      'Delirio de Culpa, Ruina y Síndrome de Cotard (Negación de Órganos)',
      'Fenómenos de Pasividad del Pensamiento: Inserción, Robo y Difusión',
      'Tabla Diferencial: Delirio vs. Idea Sobrevalorada vs. Obsesión'
    ]
  },
  {
    id: 'evaluacion-contenido-delirios',
    title: 'Evaluación de ideas delirantes y convicción del contenido',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-PEN-CON-02',
    icon: '📋',
    author: 'Protocolo Semiográfico • Cribado Delirante & Convicción',
    badge: 'Examen Mental • Exploración de Temáticas & Certeza',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'ELEMENTOS DEL VIVENCIAR'],
    academicAffiliation: 'Cribado Semiográfico de Convicciones Delirantes (Belloch Cap. 9)',
    summary: 'Protocolo clínico estructurado de entrevista para explorar la presencia de ideas delirantes, cuantificar el grado de convicción y sistematización, pesquisar fenómenos de pasividad/influencia del Yo y establecer el diagnóstico diferencial con ideas obsesivas y sobrevaloradas.',
    topics: [
      'Paso 1: Entrevista Progresiva de Temáticas Sensibles (Persecución, Referencia, Culpa)',
      'Paso 2: Valoración de la Convicción Subjetiva (Certeza Absoluta vs. Duda)',
      'Paso 3: Evaluación de la Resonancia Emocional y Conductual de la Creencia',
      'Paso 4: Cribado de Pasividad Yoica (Robo, Inserción y Difusión Mental)',
      'Tabla Diferencial de las 3 Formas de Ideas Anómalas',
      'Pauta de Registro Semiográfico de Ideas Delirantes'
    ]
  },

  // =========================================================================
  // SUBDIVISIÓN 2: LA SENSOPERCEPCIÓN (DISTORSIONES vs ENGAÑOS/ALUCINACIONES)
  // =========================================================================
  {
    id: 'distorsiones-sensoperceptivas',
    title: 'Distorsiones perceptivas e ilusiones',
    category: 'psicopatologia',
    categoryLabel: 'Definición Semiológica',
    isClinicalEntity: true,
    code: 'SEM-PER-DIS-01',
    icon: '🌀',
    author: 'Semiología de la Percepción • Capponi & Belloch',
    badge: 'Elemento del Vivenciar • Estímulo Real Deformado',
    areas: ['ELEMENTOS DEL VIVENCIAR', 'PSICOPATOLOGÍA', 'SEMIOLOGÍA', 'EXAMEN MENTAL'],
    academicAffiliation: 'Manual Belloch (Vol. 1, Cap. 6, Pág. 150) • Ricardo Capponi (Pág. 48)',
    summary: 'Definición: alteraciones en las que un estímulo sensorial real y accesible a los sentidos es percibido de manera anómala en su intensidad, cualidad, forma o espacialidad.\nAnomalías de intensidad: hiperestesia (estímulos vividos con intensidad dolorosa o deslumbrante) e hipoestesia perceptiva.\nMetamorfopsias: dismegalopsias (micropsias: objetos más pequeños; macropsias: objetos agrandados), dismorfopsias (deformación de formas) y autometamorfopsias (percepción alterada del propio cuerpo).\nIlusiones: deformación de un objeto real por inatención, por afecto intenso (catatímicas) o pareidolias (reconstrucción imaginativa voluntaria sobre formas difusas).',
    topics: [
      'Concepto de Distorsión Perceptiva: El Objeto Físico Existe',
      'Hiperestesias e Hipoestesias Sensoriales (Luz, Sonido, Tacto)',
      'Metamorfopsias: Micropsias (Gulliverianas) y Macropsias (Liliputienses)',
      'Dismorfopsias y Escisión Perceptiva (Morfolisis)',
      'Ilusiones por Inatención (Déficit de Alerta)',
      'Ilusiones Catatímicas (Deformación Guiada por Emociones Intensas como Miedo)',
      'Pareidolias (Caras en Nubes o Grietas: Fenómeno No Patológico)'
    ]
  },
  {
    id: 'evaluacion-distorsiones-sensoperceptivas',
    title: 'Evaluación de distorsiones perceptivas e ilusiones',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-PER-DIS-02',
    icon: '📋',
    author: 'Protocolo Clínico • Exploración de Formas, Tamaños y Estímulos',
    badge: 'Examen Mental • Exploración de Deformaciones Perceptivas',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'ELEMENTOS DEL VIVENCIAR'],
    academicAffiliation: 'Exploración de Distorsiones Perceptivas (Belloch Cap. 6)',
    summary: 'Protocolo clínico para interrogar metamorfopsias, hiperestesias sensoriales e ilusiones catatímicas, diferenciándolas de trastornos oftalmológicos/neurológicos y de alucinaciones verdaderas.',
    topics: [
      'Paso 1: Exploración de Sensibilidad Sensorial a Ruidos y Luces (Hiperestesias)',
      'Paso 2: Interrogatorio de Alteraciones de Tamaño y Distancia (Metamorfopsias)',
      'Paso 3: Análisis de Ilusiones en Situaciones de Temor o Penumbra',
      'Pauta de Diagnóstico Diferencial con Cuadros Neurológicos (Aura Migrañosa)'
    ]
  },
  {
    id: 'alucinaciones-enganos',
    title: 'Engaños perceptivos, alucinaciones y alucinosis',
    category: 'psicopatologia',
    categoryLabel: 'Definición Semiológica',
    isClinicalEntity: true,
    code: 'SEM-PER-ALU-01',
    icon: '🔊',
    author: 'Semiología de las Alucinaciones • Capponi, Belloch & APIR',
    badge: 'Elemento del Vivenciar • Percepciones sin Objeto',
    areas: ['ELEMENTOS DEL VIVENCIAR', 'PSICOPATOLOGÍA', 'SEMIOLOGÍA', 'EXAMEN MENTAL'],
    academicAffiliation: 'Manual Belloch (Vol. 1, Cap. 6, Pág. 158) • Ricardo Capponi (Pág. 52) • APIR',
    summary: 'Definición: percepciones corpóreas en el espacio objetivo que se producen sin que exista un estímulo externo real que las justifique.\nAlucinaciones en los 5 sentidos: auditivas (voces dialogadas, comentadoras e imperativas de primer rango de Schneider), visuales (complejas, zoomórficas), táctiles/hápticas (sensación de bichos bajo la piel / Síndrome de Ekbom), cenestésicas (viscerales internas) y cinestésicas (motoras).\nPseudopercepciones: alucinaciones psíquicas que ocurren en el espacio interno («dentro de mi cabeza»).\nAlucinosis: percepción sin objeto en la que el sujeto CONSERVA EL JUICIO CRÍTICO (sabe que no es real; típico en abstinencia etílica / síndrome de Korsakoff).',
    topics: [
      'Criterios Diagnósticos de la Alucinación Verdadera (Corporeidad y Espacio Externo)',
      'Alucinaciones Auditivas de Primer Rango de Schneider (Voces Comentadoras e Imperativas)',
      'Alucinaciones Visuales y Causas Orgánicas (Delirium, Intoxicaciones, Epilepsia)',
      'Alucinaciones Táctiles o Hápticas (Síndrome de Ekbom o Delirio de Parasitosis)',
      'Alucinaciones Cenestésicas o Somáticas (Órganos Petrificados o Vacíos)',
      'Pseudopercepciones o Alucinaciones Psíquicas (Espacio Mental Interno)',
      'Alucinosis Alcohólica y su Distinción por el Juicio Crítico Preservado',
      'Tabla Comparativa: Alucinación vs. Pseudopercepción vs. Alucinosis'
    ]
  },
  {
    id: 'evaluacion-alucinaciones-enganos',
    title: 'Evaluación fenomenológica de alucinaciones y alucinosis',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-PER-ALU-02',
    icon: '📋',
    author: 'Protocolo Semiográfico • Exploración por Canales Sensoriales',
    badge: 'Examen Mental • Exploración de Corporeidad & Convicción',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'ELEMENTOS DEL VIVENCIAR'],
    academicAffiliation: 'Exploración Fenomenológica de Alucinaciones (Capponi & Belloch)',
    summary: 'Protocolo de examen clínico semiográfico para explorar exhaustivamente la presencia de alucinaciones en todos los sentidos, evaluar conductas alucinatorias observables (soliloquios, actitud de escucha) y determinar si se trata de alucinaciones verdaderas, pseudopercepciones o alucinosis.',
    topics: [
      'Paso 1: Detección de Conductas Alucinatorias Indirectas (Soliloquios, Mirada Fija)',
      'Paso 2: Exploración de Voces Auditivas (Número, Localización, Tono Imperativo)',
      'Paso 3: Exploración de Alucinaciones Visuales, Táctiles y Cenestésicas',
      'Paso 4: Determinación de la Vivencia de Realidad (Juicio Crítico)',
      'Pauta Semiográfica de Registro de Alucinaciones'
    ]
  },

  // =========================================================================
  // SUBDIVISIÓN 3: EL YO Y LA PERSONALIDAD
  // =========================================================================
  {
    id: 'psicopatologia-del-yo',
    title: 'La psicopatología del Yo y conciencia de sí mismo',
    category: 'psicopatologia',
    categoryLabel: 'Definición Semiológica',
    isClinicalEntity: true,
    code: 'SEM-YO-01',
    icon: '🪞',
    author: 'Psicología y Psicopatología del Yo • Ricardo Capponi',
    badge: 'Cualidad del Vivenciar • Identidad, Unidad & Límites',
    areas: ['PSICOLOGÍA DEL YO', 'PSICOPATOLOGÍA', 'SEMIOLOGÍA', 'EXAMEN MENTAL'],
    academicAffiliation: 'Ricardo Capponi (Cap. II, Sección 3, Pág. 154)',
    summary: 'Definición: vivencia fundamental mediante la cual el individuo se reconoce como una entidad individualizada, continua, dueña de sus actos y diferenciada del entorno.\nLas 4 cualidades fundamentales del Yo (Capponi / Jaspers):\n1. Conciencia de Actividad del Yo: vivencia de pertenencia y autoría.\n2. Conciencia de Unidad del Yo: ser uno solo indiviso.\n3. Conciencia de Identidad del Yo: continuidad en el tiempo biográfico.\n4. Conciencia de Demarcación o Límites del Yo: frontera Yo/No-Yo.',
    topics: [
      'Concepto de Yo y Conciencia de Sí Mismo en Semiología Clínica',
      '1. Conciencia de Actividad del Yo: Enajenación, Influencia y Pasividad',
      '2. Conciencia de Unidad del Yo: Cohesión vs. Escisión Esquizofrénica',
      '3. Conciencia de Identidad del Yo: Continuidad Biográfica y Extrañeza',
      '4. Conciencia de Demarcación o Límites: Pérdida de Barreras y Transitivismo',
      'Fenómenos de Despersonalización y Desrealización Profunda'
    ]
  },
  {
    id: 'evaluacion-psicopatologia-yo',
    title: 'Evaluación de las vivencias del Yo y límites de sí mismo',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-YO-02',
    icon: '📋',
    author: 'Protocolo Clínico • 4 Cualidades del Yo & Despersonalización',
    badge: 'Examen Mental • Exploración de Vivencias Yoicas',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'PSICOLOGÍA DEL YO'],
    academicAffiliation: 'Exploración de la Funcionalidad Yoica (Capponi Pág. 154)',
    summary: 'Protocolo de entrevista clínica estructurada para interrogar sistemáticamente las 4 dimensiones de la conciencia del Yo (Actividad, Unidad, Identidad y Límites/Demarcación), así como vivencias disociativas de despersonalización y desrealización.',
    topics: [
      'Paso 1: Exploración de Pertenencia y Control de Actos Mentales (Actividad)',
      'Paso 2: Interrogatorio de Unidad y Cohesión del Sí Mismo',
      'Paso 3: Exploración de Continuidad e Identidad a lo Largo del Tiempo',
      'Paso 4: Pesquisa de Límites del Yo (Difusión y Permeabilidad de Pensamientos)',
      'Paso 5: Cribado de Despersonalización y Desrealización'
    ]
  },
  {
    id: 'trastornos-personalidad',
    title: 'Semiología de la personalidad y funcionalidad yoica',
    category: 'psicopatologia',
    categoryLabel: 'Definición Semiológica',
    isClinicalEntity: true,
    code: 'SEM-PER-01',
    icon: '🎭',
    author: 'Semiología de la Personalidad • Ricardo Capponi',
    badge: 'Estructura Caracterológica • Dimensiones Yoicas',
    areas: ['PERSONALIDAD', 'PSICOLOGÍA DEL YO', 'PSICOPATOLOGÍA', 'SEMIOLOGÍA'],
    academicAffiliation: 'Ricardo Capponi (Cap. III, Pág. 181, Funcionalidad Yoica)',
    summary: 'Definición: patrón arraigado, inflexible e interpersonalmente desadaptativo de percibir, relacionarse y pensar sobre el entorno y uno mismo.\nLas 4 Dimensiones Yoicas de Capponi:\n1. Dimensión Realidad - Irrealidad: capacidad de contrastar fantasías con la realidad objetiva.\n2. Dimensión Actividad - Pasividad: capacidad de actuar como agente proactivo vs. receptor pasivo.\n3. Dimensión Adhesión - Evitación: capacidad vincular.\n4. Dimensión Dependencia - Independencia: autonomía afectiva.',
    topics: [
      'Concepto de Personalidad y Estructura Caracterológica',
      'Las 4 Dimensiones de la Funcionalidad Yoica (Ricardo Capponi)',
      'Mecanismos de Defensa Primitivos (Escisión, Identificación Proyectiva)',
      'Clústeres Clásicos de Personalidad (A: Raros, B: Dramáticos, C: Temerosos)'
    ]
  },
  {
    id: 'evaluacion-trastornos-personalidad',
    title: 'Evaluación semiológica de la personalidad y funcionalidad yoica',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-PER-02',
    icon: '📋',
    author: 'Protocolo Semiográfico • 4 Dimensiones Yoicas & Vínculos',
    badge: 'Examen Mental • Exploración de Rasgos & Mecanismos',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'PERSONALIDAD'],
    academicAffiliation: 'Exploración de la Funcionalidad Yoica (Capponi Cap. III)',
    summary: 'Protocolo semiográfico para examinar la rigidez o flexibilidad de los rasgos de personalidad, la funcionalidad de las 4 dimensiones yoicas de Capponi y la repercusión interpersonal crónica en la vida cotidiana.',
    topics: [
      'Paso 1: Historia Biográfica y Estabilidad de las Relaciones Interpersonales',
      'Paso 2: Evaluación de la Tolerancia a la Frustración y Manejo de la Impulsividad',
      'Paso 3: Análisis de las 4 Dimensiones Yoicas de Capponi',
      'Paso 4: Identificación de Mecanismos de Defensa Predominantes'
    ]
  },

  // =========================================================================
  // SUBDIVISIÓN 4: SÍNDROMES Y CONDUCTAS BIOLÓGICAS
  // =========================================================================
  {
    id: 'grandes-sindromes',
    title: 'Los grandes síndromes psicopatológicos',
    category: 'psicopatologia',
    categoryLabel: 'Definición Semiológica',
    isClinicalEntity: true,
    code: 'SEM-SIN-01',
    icon: '🧬',
    author: 'Diagnóstico Sindromático • Ricardo Capponi',
    badge: 'Síntesis Clínica • Agrupaciones Sindromáticas',
    areas: ['SÍNDROMES CLÍNICOS', 'DIAGNÓSTICO SINDROMÁTICO', 'PSICOPATOLOGÍA', 'SEMIOLOGÍA'],
    academicAffiliation: 'Ricardo Capponi (Cap. IV, Pág. 198, Diagnóstico Sindromático)',
    summary: 'Definición: constelación coherente de signos y síntomas psicopatológicos que concurren en el tiempo.\nLos 7 grandes síndromes clínicos de Capponi: Depresivo, Maníaco, Delirante-Alucinatorio, Confusional Agudo (Delirium), Demencial, Catatónico y Ansioso.',
    topics: [
      'El Diagnóstico Sindromático como Eslabón Fundamental antes de la Nosología',
      '1. Síndrome Depresivo (Melancólico vs. Reactivo)',
      '2. Síndrome Maníaco y Estados Mixtos',
      '3. Síndrome Delirante-Alucinatorio (Psicótico)',
      '4. Síndrome Confusional Agudo (Delirium Orgánico)',
      '5. Síndrome Demencial y Deterioro Cognitivo',
      '6. Síndrome Catatónico y Urgencias Psicomotoras',
      '7. Síndrome Ansioso y Crisis de Angustia'
    ]
  },
  {
    id: 'evaluacion-grandes-sindromes',
    title: 'Evaluación y jerarquización de los grandes síndromes',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-SIN-02',
    icon: '📋',
    author: 'Protocolo Semiográfico • Algoritmo de Jerarquía Sindromática',
    badge: 'Examen Mental • Integración Sindromática',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'SÍNDROMES CLÍNICOS'],
    academicAffiliation: 'Diagnóstico Sindromático (Capponi Cap. IV)',
    summary: 'Protocolo de integración del examen mental para clasificar las alteraciones observadas en una constelación sindromática rectora, siguiendo el principio de jerarquía de Capponi y descartando organicidad primaria antes de asumir patología psiquiátrica funcional.',
    topics: [
      'Paso 1: Regla de Oro: Descartar Síndrome Confusional Agudo (Conciencia y Orientación)',
      'Paso 2: Evaluación del Eje Afectivo (Síndrome Depresivo vs. Maníaco)',
      'Paso 3: Evaluación del Eje Psicótico (Síndrome Delirante-Alucinatorio)',
      'Paso 4: Identificación de Signos Catatónicos o Motores'
    ]
  },
  {
    id: 'conducta-alimentaria',
    title: 'Conducta alimentaria e imagen corporal',
    category: 'psicopatologia',
    categoryLabel: 'Definición Semiológica',
    isClinicalEntity: true,
    code: 'SEM-TCA-01',
    icon: '🍽️',
    author: 'Psicopatología Alimentaria • Amparo Belloch',
    badge: 'Proceso Biológico & Conductual • TCA & Dismorfia',
    areas: ['PSICOPATOLOGÍA', 'SEMIOLOGÍA', 'PROCESOS PSICOLÓGICOS', 'EVALUACIÓN CLÍNICA'],
    academicAffiliation: 'Manual Belloch (Vol. 1, Cap. 15, Pág. 416)',
    summary: 'Definición: perturbación persistente en la alimentación o en las conductas relacionadas con ella, asociada a una alteración severa de la percepción del peso y la silueta corporal (Anorexia, Bulimia, Trastorno por Atracón).',
    topics: [
      'Distorsión Perceptiva de la Silueta Corporal (Dismorfia Alimentaria)',
      'Anorexia Nerviosa: Subtipo Restrictivo vs. Purgativo',
      'Bulimia Nerviosa y el Ciclo Atracón-Purga-Culpa',
      'Trastorno por Atracón (Binge Eating Disorder)',
      'Signos Físicos de Purgas: Signo de Russell, Erosiones Dentales, Parotidomegalia'
    ]
  },
  {
    id: 'evaluacion-conducta-alimentaria',
    title: 'Evaluación de conducta alimentaria e imagen corporal',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-TCA-02',
    icon: '📋',
    author: 'Protocolo Clínico • Tamizaje de TCA & Signos Somatomorfos',
    badge: 'Examen Clínico • Exploración de Hábitos & Riesgo Nutricional',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'PSICOPATOLOGÍA'],
    academicAffiliation: 'Exploración de Trastornos Alimentarios (Belloch Cap. 15)',
    summary: 'Protocolo de entrevista semiológica para explorar actitudes frente a la comida, miedo a ganar peso, frecuencia de atracones y métodos compensatorios, junto con la inspección no invasiva de estigmas físicos de purga y desnutrición.',
    topics: [
      'Paso 1: Registro de la Dieta Habitual y Alimentos Prohibidos',
      'Paso 2: Exploración de Atracones (Pérdida de Control y Voracidad)',
      'Paso 3: Interrogatorio de Conductas Purgativas (Vómitos, Laxantes, Diuréticos)',
      'Paso 4: Evaluación de la Imagen Corporal (Sobreestimación del Tamaño)',
      'Paso 5: Búsqueda de Signos Físicos (Signo de Russell, Parótidas)'
    ]
  },
  {
    id: 'control-impulsos',
    title: 'Control de impulsos y conductas adictivas',
    category: 'psicopatologia',
    categoryLabel: 'Definición Semiológica',
    isClinicalEntity: true,
    code: 'SEM-IMP-01',
    icon: '🎰',
    author: 'Psicopatología del Impulso • Amparo Belloch',
    badge: 'Proceso Volitivo • Impulsividad & Compulsión',
    areas: ['PSICOPATOLOGÍA', 'SEMIOLOGÍA', 'PROCESOS PSICOLÓGICOS', 'EVALUACIÓN CLÍNICA'],
    academicAffiliation: 'Manual Belloch (Vol. 1, Caps. 13, 14 y 16, Págs. 368, 388 y 436)',
    summary: 'Definición: fracaso reiterado en resistir un impulso que es perjudicial para el propio individuo o para los demás (tensión previa → acto → alivio inmediato → culpa posterior).\nTrastornos: Juego patológico, tricotilomanía, cleptomanía, tolerancia y craving adictivo.',
    topics: [
      'Psicopatología del Acto Voluntario: Impulsividad vs. Compulsividad',
      'El Ciclo Impulsivo: Tensión Prodrómica, Descarga y Culpa Posterior',
      'Juego Patológico (Ludopatía): Pérdida de Control sobre las Apuestas',
      'Neurobiología del Sistema de Recompensa Dopaminérgico',
      'Tolerancia, Dependencia, Abstinencia y Craving'
    ]
  },
  {
    id: 'evaluacion-control-impulsos',
    title: 'Evaluación del control de impulsos y conductas adictivas',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-IMP-02',
    icon: '📋',
    author: 'Protocolo Semiográfico • Pérdida de Control & Tamizaje Adictivo',
    badge: 'Examen Clínico • Exploración de Impulso & Craving',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'PSICOPATOLOGÍA'],
    academicAffiliation: 'Exploración del Control de Impulsos (Belloch Caps. 13, 14, 16)',
    summary: 'Protocolo de examen semiológico para evaluar el grado de control volitivo sobre los impulsos, medir la intensidad de la urgencia interna, cuantificar el impacto sociofamiliar de conductas adictivas (juego, sustancias, compras) y cribar el riesgo de hetero/autoagresión impulsiva.',
    topics: [
      'Paso 1: Exploración de la Tensión Previa y Disparadores Ambientales',
      'Paso 2: Evaluación del Grado de Resistencia Volitiva Intentada',
      'Paso 3: Cuantificación del Tiempo y Recursos Dedicados a la Conducta',
      'Paso 4: Cribado de Craving y Tolerancia Progresiva'
    ]
  },

  // =========================================================================
  // SUBDIVISIÓN 5: EVALUACIONES ENFOCADAS Y DIVIDIDAS
  // =========================================================================
  // Memoria Inmediata vs Largo Plazo
  {
    id: 'evaluacion-memoria-inmediata-trabajo',
    title: 'Evaluación de memoria inmediata y operativa (Working Memory)',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-MEM-WM-02',
    icon: '⚡',
    author: 'Neuropsicología de la Memoria • Capponi & Belloch',
    badge: 'Exploración Cognitiva • Retención & Bucle Fonológico',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'PROCESOS PSICOLÓGICOS', 'INSTRUMENTOS DEL VIVENCIAR'],
    academicAffiliation: 'Exploración de la Memoria de Trabajo (Capponi Pág. 148)',
    summary: 'Protocolo especializado en la retención inmediata, bucle fonológico y memoria operativa activa antes de la consolidación: span de dígitos directos e inversos, repetición de palabras en orden inverso y cálculo secuencial mental inmediato.',
    topics: [
      'Dígitos Directos (Span Atencional Inmediato: Normal 6-7)',
      'Dígitos Inversos (Memoria Operativa y Manipulación Mental: Normal 4-5)',
      'Repetición Inmediata de Lista de Palabras No Relacionadas',
      'Detección Precoz de Fallas en TDAH, Delirium y Cuadros Ansiosos'
    ]
  },
  {
    id: 'evaluacion-memoria-largo-plazo',
    title: 'Evaluación de memoria diferida, remota y consolidación',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-MEM-LP-02',
    icon: '💾',
    author: 'Neuropsicología y Semiología • Capponi & Belloch',
    badge: 'Exploración Clínica • Consolidación & Recuerdo a 5 Minutos',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'INSTRUMENTOS DEL VIVENCIAR'],
    academicAffiliation: 'Exploración de Consolidación Mnésica (Capponi & Belloch Cap. 7)',
    summary: 'Protocolo enfocado en la fijación hipocámpica y evocación a largo plazo: recuerdo libre diferido tras intervalo de 5 minutos, facilitación con claves semánticas, prueba de reconocimiento y memoria autobiográfica/histórica remota verificable.',
    topics: [
      'Recuerdo Libre Diferido a los 5 Minutos (Test de las 3 o 5 Palabras)',
      'Facilitación Semántica (Pistas de Categoría: «Era una fruta»)',
      'Prueba de Reconocimiento de Opciones Múltiples',
      'Memoria Remota Episódica y Semántica Verificable (Biografía y Efemérides)',
      'Diagnóstico Diferencial: Falla de Recuperación Frontal vs. Falla de Almacenamiento Alzheimer'
    ]
  },

  // Conciencia: Glasgow vs Delirium CAM
  {
    id: 'evaluacion-conciencia-glasgow',
    title: 'Protocolo cuantitativo de vigilia y Escala de Glasgow',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Urgencia & Examen Físico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-CON-GLAS-02',
    icon: '👁️',
    author: 'Escala de Coma de Glasgow (Teasdale & Jennett) & Capponi',
    badge: 'Nivel Cuantitativo • Apertura Ocular, Verbal y Motora',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'INSTRUMENTOS DEL VIVENCIAR'],
    academicAffiliation: 'Exploración del Nivel de Vigilia (Capponi Pág. 116)',
    summary: 'Protocolo estructurado para cuantificar el nivel de alerta y vigilia mediante los 3 parámetros de la Escala de Coma de Glasgow (Ocular: 1-4, Verbal: 1-5, Motor: 1-6) y la clasificación de gravedad de compromiso encefálico (3 a 15 puntos).',
    topics: [
      'Apertura Ocular: Espontánea, a la Voz, al Dolor o Nula',
      'Respuesta Verbal: Orientada, Confusa, Inapropiada, Incomprensible o Ninguna',
      'Respuesta Motora: Obedece Órdenes, Localiza Dolor, Flexión Normal, Decorticación, Descerebración',
      'Estratificación de Gravedad: Leve (13-15), Moderado (9-12), Grave (3-8)'
    ]
  },
  {
    id: 'evaluacion-conciencia-delirium-cam',
    title: 'Protocolo de cribado de Delirium (Confusion Assessment Method - CAM)',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-CON-CAM-02',
    icon: '🚨',
    author: 'Método CAM (Inouye et al.) & Semiología de Capponi',
    badge: 'Cualidad de Conciencia • Inicio Agudo & Fluctuación',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'INSTRUMENTOS DEL VIVENCIAR'],
    academicAffiliation: 'Psicopatología de la Conciencia y Síndrome Confusional (Capponi Pág. 125)',
    summary: 'Protocolo estándar de oro para detectar Síndrome Confusional Agudo (Delirium) mediante los 4 criterios del CAM: 1) Comienzo agudo y curso fluctuante, 2) Inatención marcada, 3) Pensamiento desorganizado, y 4) Alteración del nivel de conciencia.',
    topics: [
      'Criterio 1: Comienzo Agudo y Curso Fluctuante a lo Largo del Día',
      'Criterio 2: Inatención Severa (Incapacidad de Sostener el Foco)',
      'Criterio 3: Pensamiento Desorganizado o Incoherente',
      'Criterio 4: Nivel de Conciencia Alterado (Hiperalerta o Letárgico)',
      'Regla Diagnóstica: Requiere Presencia Obligatoria de (1 + 2) Y (3 o 4)'
    ]
  },

  // Afectividad: Ánimo vs Riesgo Suicida
  {
    id: 'evaluacion-afectividad-animo',
    title: 'Evaluación del estado de ánimo, modulación y anhedonia',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-AFE-ANM-02',
    icon: '🎭',
    author: 'Semiología Afectiva • Ricardo Capponi',
    badge: 'Examen Mental • Humor Basal & Reactividad',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'ELEMENTOS DEL VIVENCIAR'],
    academicAffiliation: 'Semiología Psiquiátrica de la Afectividad (Capponi Pág. 90)',
    summary: 'Protocolo para evaluar el tono afectivo basal, la reactividad frente a estímulos, la modulación prosódica y mímica, el grado de anhedonia física y social, y la presencia de alexitimia o labilidad emocional.',
    topics: [
      'Paso 1: Exploración del Humor Subjetivo y Variaciones Diurnas (Peor matutino melancólico)',
      'Paso 2: Valoración de la Modulación y Resonancia Emocional (Aplanamiento vs. Labilidad)',
      'Paso 3: Exploración Sistemática de Anhedonia Física y Social',
      'Paso 4: Evaluación de Alexitimia (Dificultad para Identificar y Poner Palabras a las Emociones)'
    ]
  },
  {
    id: 'evaluacion-riesgo-suicida',
    title: 'Protocolo de evaluación y estratificación del riesgo suicida',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Urgencia Clínica & Seguridad',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-SUIC-02',
    icon: '🆘',
    author: 'Protocolo de Seguridad Clínica • Adaptación C-SSRS & Capponi',
    badge: 'Criterio de Urgencia • Estratificación de Riesgo & Plan',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'URGENCIAS'],
    academicAffiliation: 'Evaluación del Riesgo de Autoagresión y Desesperanza (Capponi Pág. 92)',
    summary: 'Protocolo riguroso y secuencial de seguridad para pesquisar ideación de muerte pasiva, ideación suicida activa con método, intención, letalidad de planes elaborados, antecedentes de intentos previos, impulsividad, factores de riesgo y red de contención.',
    topics: [
      'Paso 1: Ideación Pasiva («Dormirse y no despertar»)',
      'Paso 2: Pensamientos Suicidas Activos con Método Inespecífico',
      'Paso 3: Ideación Activa con Plan Elaborado y Acceso a Medios Letales',
      'Paso 4: Intención y Preparativos Finales (Despedidas, Donaciones, Notas)',
      'Estratificación de Riesgo: Bajo, Moderado, Alto y Extremo',
      'Criterios de Derivación a Hospitalización Inmediata Acompañada'
    ]
  },

  // =========================================================================
  // SUBDIVISIÓN 6: NUEVAS EVALUACIONES CLÍNICAS ADICIONALES
  // =========================================================================
  {
    id: 'evaluacion-ansiedad-panico',
    title: 'Protocolo de evaluación de la ansiedad y crisis de pánico',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-ANSI-PAN-02',
    icon: '😰',
    author: 'Semiología de la Angustia • Capponi & Belloch',
    badge: 'Examen Mental • Ansiedad Psíquica vs. Somática & Pánico',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'ELEMENTOS DEL VIVENCIAR'],
    academicAffiliation: 'Semiología de la Ansiedad y Crisis de Pánico (Capponi Pág. 94)',
    summary: 'Protocolo para diferenciar la ansiedad psíquica (anticipación aprensiva, rumiación, despersonalización) de la ansiedad somática/vegetativa (taquicardia, opresión torácica, disnea, mareos, temblor) y caracterizar la presencia de crisis de angustia o ataques de pánico.',
    topics: [
      'Componente Psíquico: Tensión Interna, Miedo al Descontrol o a Morir',
      'Componente Somático: Cortejo Vegetativo Simpático (Cardiovascular, Respiratorio, Digestivo)',
      'Criterios de Crisis de Pánico (Aparición Súbita que Alcanza el Clímax en Minutos)',
      'Conductas de Evitación Agorafóbica Asociadas'
    ]
  },
  {
    id: 'evaluacion-deterioro-cognitivo-minimental',
    title: 'Protocolo de tamizaje de deterioro cognitivo y demencia (Cribado MMSE)',
    category: 'evaluacion',
    categoryLabel: 'Protocolo Psicométrico & Cribado Cognitivo',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-COG-MMSE-02',
    icon: '🧮',
    author: 'Cribado Cognitivo (Folstein / Lobo) & Semiología de Capponi',
    badge: 'Tamizaje Breve de 30 Puntos • Orientación, Memoria & Praxias',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'INSTRUMENTOS DEL VIVENCIAR'],
    academicAffiliation: 'Cribado de Síndrome Demencial (Capponi Pág. 140 & Belloch)',
    summary: 'Batería estandarizada breve de 30 puntos para despistaje rápido de deterioro cognitivo: Orientación temporal y espacial (10 pts), Fijación de 3 palabras (3 pts), Atención y cálculo serie de 7 (5 pts), Recuerdo diferido de palabras (3 pts), Lenguaje y copia de pentágonos intersectados (9 pts).',
    topics: [
      'Orientación Temporal y Espacial (10 Puntos)',
      'Fijación y Registro Inmediato (3 Puntos)',
      'Atención, Concentración y Cálculo (5 Puntos)',
      'Recuerdo Diferido a Corto Plazo (3 Puntos)',
      'Lenguaje, Órdenes Complejas y Praxia Visoconstructiva (9 Puntos)',
      'Puntos de Corte: Normal (≥ 24), Deterioro Leve (19-23), Demencia Moderada-Grave (< 19)'
    ]
  },
  {
    id: 'evaluacion-sintomas-negativos',
    title: 'Protocolo de evaluación de síntomas negativos y déficit (Las 5 As)',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-NEG-5A-02',
    icon: '👤',
    author: 'Semiología del Síndrome Deficitario • Capponi & Belloch',
    badge: 'Examen Mental • Las 5 As: Apatía, Avolición, Alogia, Anhedonia, Aplanamiento',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'ELEMENTOS DEL VIVENCIAR'],
    academicAffiliation: 'Semiología de Síntomas Negativos en Psicosis y Melancolía (Capponi Pág. 204)',
    summary: 'Protocolo clínico estructurado para pesquisar y graduar los 5 síntomas deficitarios nucleares: Apatía (indiferencia afectiva), Avolición (falta de iniciativa y energía para iniciar conductas dirigidas a metas), Alogia (pobreza cuantitativa y cualitativa del habla), Anhedonia y Aplanamiento afectivo.',
    topics: [
      '1. Apatía: Falta de Interés y Resonancia Emocional hacia el Entorno',
      '2. Avolición: Dificultad Severa para Iniciar y Mantener Tareas Cotidianas',
      '3. Alogia: Pobreza del Lenguaje Espontáneo y Brevedad Telegráfica de Respuestas',
      '4. Anhedonia: Pérdida Radical de la Capacidad de Goce',
      '5. Aplanamiento Afectivo: Inexpresividad Facial, Contacto Visual Evitado y Prosodia Plana'
    ]
  },
  {
    id: 'evaluacion-sintomas-obsesivos-ybocs',
    title: 'Protocolo de exploración de síntomas obsesivo-compulsivos (Y-BOCS)',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-TOC-YBOCS-02',
    icon: '🔄',
    author: 'Semiología de Obsesiones y Compulsiones • Capponi & Belloch',
    badge: 'Examen Mental • Obsesiones, Compulsiones & Lucha Egodistónica',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'ELEMENTOS DEL VIVENCIAR'],
    academicAffiliation: 'Exploración de Ideas Obsesivas y Compulsiones (Capponi Pág. 72)',
    summary: 'Protocolo de entrevista clínica basado en la estructura del Y-BOCS para cuantificar el tiempo ocupado por obsesiones (contaminación, duda patológica, daño, simetría), la interferencia funcional, la angustia generada, la resistencia voluntaria y las compulsiones motoras/mentales.',
    topics: [
      'Identificación de Temáticas Obsesivas: Contaminación, Duda Patológica, Simetría, Pensamientos Agresivos',
      'Reconocimiento del Carácter Absurdo (Lucha Egodistónica)',
      'Identificación de Compulsiones Motoras (Lavado, Comprobación, Orden) y Mentales (Rezar, Contar)',
      'Cuantificación del Tiempo Ocupado al Día (Horas) y Grado de Angustia'
    ]
  },
  {
    id: 'evaluacion-consumo-alcohol-cage',
    title: 'Protocolo de tamizaje de consumo problemático de alcohol (CAGE)',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Tamizaje Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-ALC-CAGE-02',
    icon: '🍷',
    author: 'Cuestionario CAGE (Ewing) & Semiología de las Adicciones (Belloch)',
    badge: 'Tamizaje Breve de 4 Preguntas • Dependencia & Tolerancia',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'ADICCIONES'],
    academicAffiliation: 'Psicopatología del Alcoholismo (Belloch Vol. 1, Cap. 13, Pág. 368)',
    summary: 'Cuestionario estandarizado de 4 preguntas de máxima sensibilidad para cribado de alcoholismo y consumo perjudicial en atención clínica: C (Cut down - Necesidad de reducir), A (Annoyed - Molestia ante críticas de otros), G (Guilty - Culpa por beber), E (Eye-opener - Trago matutino para estabilizar nervios o resaca).',
    topics: [
      'Pregunta C: ¿Ha sentido alguna vez que debería beber menos o reducir su consumo?',
      'Pregunta A: ¿Le ha molestado que la gente critique su forma de beber?',
      'Pregunta G: ¿Se ha sentido mal o culpable alguna vez por su hábito de beber?',
      'Pregunta E: ¿Ha tomado alguna vez un trago a primera hora en la mañana para calmar los nervios o la resaca?',
      'Puntuación e Interpretación: 2 o más respuestas afirmativas indican alta probabilidad de dependencia'
    ]
  },
  {
    id: 'evaluacion-signos-extrapiramidales',
    title: 'Protocolo de exploración de signos extrapiramidales y discinesias',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Físico-Neurológico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-EXT-DISC-02',
    icon: '🩺',
    author: 'Semiología Neurológica y Psicofarmacológica • Capponi & Belloch',
    badge: 'Examen Físico • Parkinsonismo, Acatisia & Rueda Dentada',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'NEUROLOGÍA'],
    academicAffiliation: 'Semiología Motora y Efectos Secundarios de Fármacos (Capponi Pág. 108 & Belloch Cap. 17)',
    summary: 'Protocolo semiológico para evaluar signos extrapiramidales inducidos por fármacos antipsicóticos o cuadros neurológicos: Rigidez en rueda dentada (maniobra de Negro), temblor de reposo, bradicinesia, acatisia (necesidad imperiosa de mover las piernas) y discinesia tardía orofacial.',
    topics: [
      'Maniobra de la Rueda Dentada en Muñeca y Codo',
      'Inspección del Temblor de Reposo vs. Temblor Postural',
      'Exploración de Acatisia (Inquietud Subjetiva en Extremidades Inferiores)',
      'Pesquisa de Movimientos Bucolinguofaciales Involuntarios (Discinesia Tardía)'
    ]
  },
  {
    id: 'evaluacion-examen-estado-mental-global',
    title: 'Pauta de cotejo del examen del estado mental global (E.E.M. en 10 Minutos)',
    category: 'evaluacion',
    categoryLabel: 'Pauta Sintética de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-EEM-GLOB-02',
    icon: '📝',
    author: 'Examen del Estado Mental Integral • Ricardo Capponi (Cap. IV)',
    badge: 'Síntesis Rápida Integral • Hoja de Cotejo del Vivenciar',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'SÍNTESIS CLÍNICA'],
    academicAffiliation: 'Diagnóstico Psicopatológico y Diagnóstico del Vivenciar (Capponi Cap. IV)',
    summary: 'Pauta clínica estandarizada de cabecera para registrar en un único documento sintético los 8 apartados del examen psicopatológico: 1) Apariencia y conducta, 2) Conciencia y orientación, 3) Atención y concentración, 4) Memoria, 5) Pensamiento (curso y contenido), 6) Afecto y humor, 7) Sensopercepción, 8) Juicio e insight.',
    topics: [
      '1. Apariencia, Porte, Higiene y Actitud ante el Entrevistador',
      '2. Conciencia (Lucidez) y Orientación (Tiempo, Espacio, Persona)',
      '3. Atención, Concentración y Esfuerzo Atencional',
      '4. Memoria (Inmediata, Reciente y Remota)',
      '5. Pensamiento: Velocidad (Curso) y Convicciones (Contenido)',
      '6. Afectividad: Humor Basal, Modulación y Reactividad',
      '7. Sensopercepción: Distorsiones y Alucinaciones',
      '8. Juicio Práctico y Conciencia de Enfermedad (Insight)'
    ]
  },
  {
    id: 'evaluacion-fobias-ansiedad-social',
    title: 'Protocolo de tamizaje de fobias específicas y ansiedad social',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-FOB-SOC-02',
    icon: '👥',
    author: 'Semiología de las Fobias • Belloch & APIR',
    badge: 'Examen Mental • Evitación Fóbica & Ansiedad de Desempeño',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'ELEMENTOS DEL VIVENCIAR'],
    academicAffiliation: 'Psicopatología de la Ansiedad y Fobias (Belloch Vol. 1)',
    summary: 'Protocolo de entrevista clínica para evaluar conductas de evitación sistemática ante situaciones sociales (hablar en público, comer frente a otros, interacción) o estímulos específicos (animales, sangre-inyecciones-daño, alturas), midiendo la anticipación ansiosa y la disfunción vital.',
    topics: [
      'Miedo Intenso y Desproporcionado ante Estímulos Específicos',
      'Ansiedad de Desempeño y Temor al Escrutinio o Juicio Ajeno (Ansiedad Social)',
      'Conductas Activas de Evitación y Rutas Alternativas',
      'Cortejo Vegetativo Situacional (Rubor, Temblor de Voz, Sudoración)'
    ]
  },
  {
    id: 'evaluacion-mimica-expresion-facial',
    title: 'Protocolo de observación de la mímica y expresión facial',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-MIM-VERA-02',
    icon: '🎭',
    author: 'Semiología de la Mímica • Capponi & APIR',
    badge: 'Examen No Verbal • Signos de Veraguth, Hipomimia & Dismimia',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'ELEMENTOS DEL VIVENCIAR'],
    academicAffiliation: 'Trastornos de la Mímica y Psicomotricidad (Capponi Pág. 102 & APIR Pág. 67)',
    summary: 'Protocolo semiológico para examinar la expresividad facial durante la entrevista: Hipermimia (manía), Hipomimia o amimia (depresión melancólica / parkinsonismo), Signo de Veraguth (pliegue en omega melancólica de la frente), Dismimia o paraimia (discordancia entre lo que dice y su sonrisa).',
    topics: [
      'Inspección del Tono Muscular Facial y Mirada',
      'Signo del Pliegue Frontal de Veraguth (Omega Melancólica en Depresión)',
      'Hipomimia y Facies Inexpresiva «de Máscara» (Parkinsonismo y Catatonía)',
      'Paramimia o Mímica Paradójica (Risa Forzada Incongruente en Esquizofrenia)'
    ]
  },
  {
    id: 'evaluacion-apego-vinculo-infantil',
    title: 'Protocolo de evaluación del apego y vínculo madre-lactante',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Observación Pediátrica',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-APEGO-EEDP-02',
    icon: '👶',
    author: 'Observación Diádica • E.E.D.P. (Rodríguez et al.)',
    badge: 'Vínculo 0-24m • Sincronía Afectiva & Consuelo',
    areas: ['EVALUACIÓN CLÍNICA', 'DESARROLLO INFANTIL', 'SEMIOLOGÍA', 'NEURODESARROLLO'],
    academicAffiliation: 'Escala E.E.D.P. Área Social y Vínculo Temprano (Págs. 10–12)',
    summary: 'Pauta observacional estandarizada para evaluar la díada madre-hijo o cuidador-lactante en consulta: contacto visual mutuo, sensibilidad y respuesta a señales de malestar, búsqueda de consuelo en brazos y capacidad del cuidador para calmar al niño durante la administración del EEDP.',
    topics: [
      'Sincronía en la Mirada Mutua y Contacto Físico de Sostén (Holding)',
      'Respuesta del Cuidador ante el Llanto o Frustración del Lactante',
      'Comportamiento de Búsqueda de Refugio Seguro en el Cuidador',
      'Exploración del Entorno desde una Base Segura'
    ]
  }
];

// Helper to generate the quick-navigation bar inside HTML templates
function renderQuickNavPills(sections) {
  return `
    <nav class="orientation-nav-pills-bar" aria-label="Navegación rápida de secciones">
      ${sections.map(s => `
        <button type="button" class="orientation-nav-pill-btn" data-target-sec="${s.id}">
          <span>${s.icon}</span>
          <span>${s.label}</span>
        </button>
      `).join('')}
    </nav>
  `;
}

/* ==========================================================================
   HTML TEMPLATES GENERATORS FOR CLINICAL CONCEPTS & PROTOCOLS
   ========================================================================== */

export const ADDITIONAL_DOCS_HTML = {
  // -------------------------------------------------------------------------
  // 1. EL PENSAMIENTO: CURSO Y ESTRUCTURA FORMAL
  // -------------------------------------------------------------------------
  'curso-pensamiento': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">⚡ ELEMENTO DEL VIVENCIAR & RITMO COGNITIVO</span>
          <span class="modal-area-pill">🧬 ÁREA: PSICOPATOLOGÍA</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA</span>
          <span class="modal-area-pill">🔬 ÁREA: EXAMEN MENTAL</span>
        </div>
        <h2 class="orientation-main-title">Trastornos del curso y estructura del pensamiento</h2>
        <p class="orientation-authors-meta">Manual de Psicopatología Belloch (Vol. 1, Cap. 8) • Ricardo Capponi (Pág. 64) • APIR</p>
      </div>

      <div class="pedagogical-division-banner">
        <div class="pedagogical-banner-text">
          💡 <strong>Subdivisión Pedagógica Esencial:</strong> El pensamiento se divide clínicamente en su <strong>Curso/Forma</strong> (cómo se hilvanan las ideas, velocidad y gramática) y su <strong>Contenido</strong> (las ideas delirantes y creencias).
        </div>
        <button type="button" class="pedagogical-link-btn" id="btn-goto-delirios-sub">
          <span>👁️ Ver Psicopatología de los Delirios</span>
          <span>→</span>
        </button>
      </div>

      ${renderQuickNavPills([
        { id: 'sec-curso-def', icon: '⚡', label: '1. Velocidad & Ritmo' },
        { id: 'sec-curso-cont', icon: '🔀', label: '2. Continuidad & Forma' },
        { id: 'sec-curso-citas', icon: '📖', label: '3. Citas a Manuales' }
      ])}

      <section class="orientation-block-card" id="sec-curso-def">
        <div class="orientation-section-badge">SECCIÓN 1</div>
        <h3 class="orientation-sec-title">1. Trastornos de la Velocidad y Ritmo del Pensamiento</h3>
        <p class="orientation-lead-p">
          El curso del pensamiento se refiere a la <strong>manera en que una persona formula, organiza y enlaza sus ideas</strong> a lo largo del tiempo para alcanzar una meta lógica comunicable <span class="citation-tag">(Capponi, s. f., p. 64)</span>.
        </p>

        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">🚀</span>
              <div>
                <h4 class="dim-name">Taquipsiquia y Fuga de Ideas</h4>
                <span class="dim-badge">Aceleración Extrema</span>
              </div>
            </div>
            <p class="dim-desc">Aceleración masiva del flujo del pensamiento. En la <em>fuga de ideas</em> la velocidad es tan alta que el paciente cambia de tema ante cualquier estímulo ambiental o por asociaciones superficiales (asonancia/rimas), perdiendo la idea directriz.</p>
            <div class="clinical-speech-box">
              <strong>💬 Ejemplo de Fuga de Ideas (Manía):</strong>
              <span class="clinical-speech-quote">«Mire mi reloj... es de oro, como el sol, el sol quema, hay que ir a la playa, la arena está caliente, caliente como el café de Colombia, ¡vamos a viajar a Bogotá!»</span>
            </div>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">🐢</span>
              <div>
                <h4 class="dim-name">Bradipsiquia e Inhibición</h4>
                <span class="dim-badge">Lentitud Patológica</span>
              </div>
            </div>
            <p class="dim-desc">Enlentecimiento manifiesto de los procesos asociativos. El paciente experimenta pesadez mental y esfuerzo extenuante para hilar dos conceptos consecutivos (típico en depresión grave y demencias).</p>
            <div class="clinical-speech-box">
              <strong>💬 Ejemplo de Bradipsiquia (Depresión):</strong>
              <span class="clinical-speech-quote">«...Me cuesta... pensar... siento... como si tuviera... plomo... en la cabeza... no puedo responderle rápido...»</span>
            </div>
          </div>
        </div>
      </section>

      <section class="orientation-block-card" id="sec-curso-cont">
        <div class="orientation-section-badge">SECCIÓN 2</div>
        <h3 class="orientation-sec-title">2. Trastornos de la Continuidad y Estructura Asociativa</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Detención Súbita</span>
            <h4 class="dim-name">Bloqueo o Interceptación</h4>
            <p class="dim-desc">Corte abrupto e involuntario del flujo de pensamiento en mitad de una frase. El paciente se queda en blanco sin poder reanudar el tema (signo característico en esquizofrenia).</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Pérdida de Sintaxis</span>
            <h4 class="dim-name">Disgregación e Incoherencia</h4>
            <p class="dim-desc">Se quiebra la estructura asociativa y gramatical. Las palabras o fragmentos de frases se suceden sin enlace lógico comprensible («ensalada de palabras» o esquizofasia).</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Desvío Asociativo</span>
            <h4 class="dim-name">Descarrilamiento y Pensamiento Laxo</h4>
            <p class="dim-desc">Las ideas se deslizan de forma gradual e inadvertida hacia un tema remotamente relacionado o totalmente ajeno, abandonando la meta directriz original.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Rodeos Innecesarios</span>
            <h4 class="dim-name">Circunstancialidad (Pensamiento Prolijo)</h4>
            <p class="dim-desc">El paciente llega finalmente al objetivo de la respuesta, pero sólo tras dar infinitos rodeos con detalles superfluos, minucias y paréntesis sin jerarquizar lo esencial.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card" id="sec-curso-citas">
        <div class="orientation-section-badge">SECCIÓN 3</div>
        <h3 class="orientation-sec-title">3. Consulta en Manuales de Referencia</h3>
        <div style="display: flex; gap: 0.55rem; flex-wrap: wrap;">
          <button type="button" class="btn-book-citation-jump" data-book-id="belloch-psicopatologia-vol1" data-page="218">
            📖 Consultar en Belloch: Cap. 8 Trastornos Formales del Pensamiento (Pág. 218) →
          </button>
          <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="64">
            📖 Consultar en Capponi: Psicopatología del Pensamiento (Pág. 64) →
          </button>
        </div>
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta primary" id="btn-goto-curso-pensamiento-eval">
          <span class="cta-icon">📋</span>
          <div class="cta-texts">
            <strong class="cta-title">Abrir Protocolo de Evaluación del Curso del Pensamiento</strong>
            <span class="cta-sub">Guía de observación del flujo verbal, latencia, direccionalidad asociativa y registro</span>
          </div>
          <span class="cta-arrow">→</span>
        </button>
      </div>
    </div>
  `,

  'evaluacion-curso-pensamiento': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">📋 PROTOCOLO DE EXAMEN CLÍNICO</span>
          <span class="modal-area-pill">🔬 ÁREA: EVALUACIÓN CLÍNICA</span>
          <span class="modal-area-pill">🩺 ÁREA: EXAMEN MENTAL</span>
          <span class="modal-area-pill">⚡ ÁREA: ELEMENTOS DEL VIVENCIAR</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-top: 0.4rem;">
          <div>
            <h2 class="orientation-main-title">Evaluación del curso y estructura formal del pensamiento</h2>
            <p class="orientation-authors-meta">Exploración Semiográfica Directa • Débito Verbal, Ritmo & Asociación</p>
          </div>
          <button type="button" class="btn-back-to-def" id="btn-back-curso-pensamiento-def">
            ← Ver Definición y Semiología
          </button>
        </div>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PASO 1</div>
        <h3 class="orientation-sec-title">1. Análisis de la Velocidad y Presión del Habla</h3>
        <p class="orientation-p">
          Formule preguntas abiertas que requieran elaboración narrativa («¿Cómo describiría su situación familiar actual?», «Cuénteme qué actividades realiza habitualmente»). Registre latencia e interrumpibilidad.
        </p>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PASO 2</div>
        <h3 class="orientation-sec-title">2. Evaluación de la Coherencia y Direccionalidad</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Prueba de Meta</span>
            <p class="dim-desc">Pida al paciente que cuente una anécdota concreta. Observe si alcanza la conclusión o si se extravía definitivamente en ramas irrelevantes (tangencialidad) o si el hilo directriz se rompe por completo (descarrilamiento).</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Pesquisa de Bloqueos</span>
            <p class="dim-desc">Si el paciente calla en seco a mitad de una frase, pregunte con delicadeza: <em>«¿Qué sucedió recién? ¿Se le fue la idea o sintió que algo le detuvo el pensamiento?»</em></p>
          </div>
        </div>
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta secondary" id="btn-bottom-back-curso-pensamiento-def">
          <span class="cta-icon">⚡</span>
          <div class="cta-texts">
            <strong class="cta-title">Volver a Trastornos del curso (Definición & Semiología)</strong>
            <span class="cta-sub">Consultar definiciones de taquipsiquia, bradipsiquia, fuga de ideas y disgregación</span>
          </div>
          <span class="cta-arrow">←</span>
        </button>
      </div>
    </div>
  `,

  // -------------------------------------------------------------------------
  // 2. EL PENSAMIENTO: CONTENIDO Y DELIRIOS
  // -------------------------------------------------------------------------
  'contenido-delirios': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">👁️ ELEMENTO DEL VIVENCIAR & PSICOPATOLOGÍA DEL CONTENIDO</span>
          <span class="modal-area-pill">🧬 ÁREA: PSICOPATOLOGÍA</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA</span>
          <span class="modal-area-pill">🔬 ÁREA: EXAMEN MENTAL</span>
        </div>
        <h2 class="orientation-main-title">Trastornos del contenido del pensamiento y delirios</h2>
        <p class="orientation-authors-meta">Manual Belloch (Vol. 1, Cap. 9) • Semiología Psiquiátrica (Ricardo Capponi, Pág. 75)</p>
      </div>

      <div class="pedagogical-division-banner">
        <div class="pedagogical-banner-text">
          💡 <strong>Subdivisión Pedagógica Esencial:</strong> Esta ficha aborda el <strong>QUÉ piensa el sujeto</strong> (certeza de creencias, delirios y pasividad). Para evaluar la velocidad y la gramática del habla, consulte [Trastornos del Curso del Pensamiento].
        </div>
        <button type="button" class="pedagogical-link-btn" id="btn-goto-curso-sub">
          <span>⚡ Ver Trastornos del Curso</span>
          <span>→</span>
        </button>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SECCIÓN 1</div>
        <h3 class="orientation-sec-title">1. Criterios de Jaspers y Temáticas Delirantes</h3>
        <p class="orientation-lead-p">
          Un <strong>delirio</strong> es un juicio de realidad falseado sostenido con certeza subjetiva inquebrantable, impenetrable a la argumentación lógica <span class="citation-tag">(Capponi, s. f., p. 75; Belloch et al., cap. 9, p. 238)</span>.
        </p>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Persecución & Referencia</span>
            <h4 class="dim-name">Paranoide / Alusión</h4>
            <p class="dim-desc">Convicción de ser espiado o perseguido. En la <em>referencia</em> hechos fortuitos neutros se interpretan como mensajes en clave dirigidos exclusivamente a él.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Megalomanía</span>
            <h4 class="dim-name">Grandeza / Misión Mesiánica</h4>
            <p class="dim-desc">Certeza de poseer facultades sobrenaturales, riqueza inmensa o una misión divina de salvación de la humanidad.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Cotard</span>
            <h4 class="dim-name">Culpa, Ruina y Nihilismo</h4>
            <p class="dim-desc">En el síndrome nihilista de Cotard, el paciente está convencido de que sus órganos internos están muertos o ya no existen.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Pasividad</span>
            <h4 class="dim-name">Inserción, Robo y Difusión</h4>
            <p class="dim-desc">Vivencia de que fuerzas extrañas le insertan pensamientos en su cabeza, se los arrebatan o se los leen a distancia.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SECCIÓN 2</div>
        <h3 class="orientation-sec-title">2. Consulta en Manuales de Referencia</h3>
        <div style="display: flex; gap: 0.55rem; flex-wrap: wrap;">
          <button type="button" class="btn-book-citation-jump" data-book-id="belloch-psicopatologia-vol1" data-page="238">
            📖 Consultar en Belloch: Cap. 9 Psicopatología de los Delirios (Pág. 238) →
          </button>
          <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="75">
            📖 Consultar en Capponi: Psicopatología de los Delirios (Pág. 75) →
          </button>
        </div>
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta primary" id="btn-goto-contenido-delirios-eval">
          <span class="cta-icon">📋</span>
          <div class="cta-texts">
            <strong class="cta-title">Abrir Protocolo de Exploración de Ideas Delirantes</strong>
            <span class="cta-sub">Guía de entrevista respetuosa sin confrontación y cribado de convicción subjetiva</span>
          </div>
          <span class="cta-arrow">→</span>
        </button>
      </div>
    </div>
  `,

  'evaluacion-contenido-delirios': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">📋 PROTOCOLO DE EXAMEN CLÍNICO</span>
          <span class="modal-area-pill">🔬 ÁREA: EVALUACIÓN CLÍNICA</span>
          <span class="modal-area-pill">🩺 ÁREA: EXAMEN MENTAL</span>
          <span class="modal-area-pill">👁️ ÁREA: ELEMENTOS DEL VIVENCIAR</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-top: 0.4rem;">
          <div>
            <h2 class="orientation-main-title">Evaluación de ideas delirantes y convicción del contenido</h2>
            <p class="orientation-authors-meta">Exploración Clínica del Estado Mental • Cribado Delirante & Convicción</p>
          </div>
          <button type="button" class="btn-back-to-def" id="btn-back-contenido-delirios-def">
            ← Ver Definición y Semiología
          </button>
        </div>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">ACTITUD TÉCNICA</div>
        <h3 class="orientation-sec-title">Exploración sin Confrontación</h3>
        <p class="orientation-lead-p">
          Nunca confronte frontalmente el delirio diciendo «eso no es real» ni asienta tampoco falsamente diciendo «tiene toda la razón». La postura clínica correcta es de escucha empática y neutralidad investigativa.
        </p>
        <div class="orientation-subcard">
          <ul class="orientation-bullet-list">
            <li><strong>Alusión:</strong> <em>«¿Ha tenido la sensación de que las personas en la calle lo miran de manera especial o murmuran a su paso?»</em></li>
            <li><strong>Persecución:</strong> <em>«¿Ha sentido que alguien tiene un interés particular en perjudicarlo, vigilarlo o hacerle daño?»</em></li>
            <li><strong>Pasividad Mental:</strong> <em>«¿Siente que sus pensamientos están protegidos en su mente o le parece que otros pueden saber lo que piensa?»</em></li>
          </ul>
        </div>
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta secondary" id="btn-bottom-back-contenido-delirios-def">
          <span class="cta-icon">👁️</span>
          <div class="cta-texts">
            <strong class="cta-title">Volver a Trastornos del contenido (Definición & Semiología)</strong>
            <span class="cta-sub">Consultar temáticas paranoide, mística, síndrome de Cotard y tabla diferencial</span>
          </div>
          <span class="cta-arrow">←</span>
        </button>
      </div>
    </div>
  `,

  // -------------------------------------------------------------------------
  // 3. SENSOPERCEPCIÓN: DISTORSIONES vs ENGAÑOS
  // -------------------------------------------------------------------------
  'distorsiones-sensoperceptivas': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">🌀 ELEMENTO DEL VIVENCIAR & DEFORMACIÓN SENSORIAL</span>
          <span class="modal-area-pill">🧬 ÁREA: PSICOPATOLOGÍA</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA</span>
        </div>
        <h2 class="orientation-main-title">Distorsiones perceptivas e ilusiones</h2>
        <p class="orientation-authors-meta">Manual Belloch (Vol. 1, Cap. 6, Pág. 150) • Ricardo Capponi (Pág. 48)</p>
      </div>

      <div class="pedagogical-division-banner">
        <div class="pedagogical-banner-text">
          💡 <strong>Subdivisión Pedagógica Esencial:</strong> En las distorsiones el <strong>estímulo real EXISTE</strong> pero es percibido con tamaño, forma o intensidad alterada. Para percepciones sin estímulo (alucinaciones), consulte [Engaños Perceptivos].
        </div>
        <button type="button" class="pedagogical-link-btn" id="btn-goto-alucinaciones-sub">
          <span>🔊 Ver Alucinaciones & Engaños</span>
          <span>→</span>
        </button>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SECCIÓN 1</div>
        <h3 class="orientation-sec-title">1. Metamorfopsias e Ilusiones</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Tamaño</span>
            <h4 class="dim-name">Micropsias y Macropsias</h4>
            <p class="dim-desc">En las <em>micropsias</em> los objetos se perciben a escala diminuta; en las <em>macropsias</em> gigantescos (común en auras epilépticas, migrañas e intoxicaciones).</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Forma</span>
            <h4 class="dim-name">Dismorfopsias</h4>
            <p class="dim-desc">Deformación de contornos espaciales percibidos como ondulantes o derretidos.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Emocional</span>
            <h4 class="dim-name">Ilusiones Catatímicas</h4>
            <p class="dim-desc">La fuerte carga emocional (miedo, culpa) deforma el estímulo real (el paciente atemorizado escucha amenazas en el rumor del viento).</p>
          </div>
        </div>
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta primary" id="btn-goto-distorsiones-eval">
          <span class="cta-icon">📋</span>
          <div class="cta-texts">
            <strong class="cta-title">Abrir Protocolo de Exploración de Distorsiones Sensoriales</strong>
            <span class="cta-sub">Pauta de tamizaje de metamorfopsias, hiperestesias sensoriales e ilusiones</span>
          </div>
          <span class="cta-arrow">→</span>
        </button>
      </div>
    </div>
  `,

  'evaluacion-distorsiones-sensoperceptivas': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">📋 PROTOCOLO DE EXAMEN CLÍNICO</span>
          <span class="modal-area-pill">🔬 ÁREA: EVALUACIÓN CLÍNICA</span>
          <span class="modal-area-pill">🌀 ÁREA: ELEMENTOS DEL VIVENCIAR</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-top: 0.4rem;">
          <div>
            <h2 class="orientation-main-title">Evaluación de distorsiones perceptivas e ilusiones</h2>
            <p class="orientation-authors-meta">Exploración Clínica Directa • Metamorfopsias & Deformación de Estímulos</p>
          </div>
          <button type="button" class="btn-back-to-def" id="btn-back-distorsiones-def">
            ← Ver Definición y Semiología
          </button>
        </div>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERROGATORIO</div>
        <h3 class="orientation-sec-title">Pauta de Preguntas Semiográficas</h3>
        <div class="orientation-subcard">
          <ul class="orientation-bullet-list">
            <li><strong>Tamaño:</strong> <em>«¿Ha notado en algún momento que las personas u objetos de la habitación se vean repentinamente más pequeños o más grandes de lo normal?»</em></li>
            <li><strong>Forma:</strong> <em>«¿Ha visto que las paredes, cuadros o rostros parezcan ondularse o deformarse como si estuvieran en el agua?»</em></li>
            <li><strong>Intensidad:</strong> <em>«¿Le molestan los ruidos cotidianos o la luz habitual hasta el punto de sentir dolor físico en los ojos u oídos (hiperestesia)?»</em></li>
          </ul>
        </div>
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta secondary" id="btn-bottom-back-distorsiones-def">
          <span class="cta-icon">🌀</span>
          <div class="cta-texts">
            <strong class="cta-title">Volver a Distorsiones perceptivas (Definición & Semiología)</strong>
            <span class="cta-sub">Consultar micropsias, macropsias, autometamorfopsias e ilusiones catatímicas</span>
          </div>
          <span class="cta-arrow">←</span>
        </button>
      </div>
    </div>
  `,

  'alucinaciones-enganos': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">🔊 ELEMENTO DEL VIVENCIAR & ENGAÑOS PERCEPTIVOS</span>
          <span class="modal-area-pill">🧬 ÁREA: PSICOPATOLOGÍA</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA</span>
        </div>
        <h2 class="orientation-main-title">Engaños perceptivos, alucinaciones y alucinosis</h2>
        <p class="orientation-authors-meta">Manual Belloch (Vol. 1, Cap. 6, Pág. 158) • Ricardo Capponi (Pág. 52)</p>
      </div>

      <div class="pedagogical-division-banner">
        <div class="pedagogical-banner-text">
          💡 <strong>Subdivisión Pedagógica Esencial:</strong> En los engaños perceptivos <strong>NO EXISTE estímulo físico externo</strong>. El sujeto percibe un objeto de la nada (alucinación) o con juicio crítico de que es un engaño cerebral (alucinosis).
        </div>
        <button type="button" class="pedagogical-link-btn" id="btn-goto-distorsiones-sub">
          <span>🌀 Ver Distorsiones e Ilusiones</span>
          <span>→</span>
        </button>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SECCIÓN 1</div>
        <h3 class="orientation-sec-title">1. Vías Sensoriales de las Alucinaciones Verdaderas</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Auditivas (Primer Rango)</span>
            <h4 class="dim-name">Voces Dialogadas e Imperativas</h4>
            <p class="dim-desc">Voces que hablan entre sí sobre el paciente o le dan órdenes («Hazte daño»).</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Visuales (Organicidad)</span>
            <h4 class="dim-name">Sombras y Zoopsias</h4>
            <p class="dim-desc">Ver animales o insectos (zoopsias); sugiere delirium tremens o patología orgánica.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Táctiles / Hápticas</span>
            <h4 class="dim-name">Sensación Dérmica y Ekbom</h4>
            <p class="dim-desc">Sentir bichos o parásitos caminando bajo la epidermis.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SECCIÓN 2</div>
        <h3 class="orientation-sec-title">2. Alucinosis: El Juicio Crítico Preservado</h3>
        <p class="orientation-p">
          En la <strong>alucinosis</strong> el paciente ve o escucha cosas sin objeto real, pero <strong>reconoce que su cerebro le está engañando</strong> (típico en abstinencia alcohólica).
        </p>
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta primary" id="btn-goto-alucinaciones-eval">
          <span class="cta-icon">📋</span>
          <div class="cta-texts">
            <strong class="cta-title">Abrir Protocolo de Exploración de Alucinaciones</strong>
            <span class="cta-sub">Pesquisa de soliloquios, actitud de escucha y pauta semiográfica por sentidos</span>
          </div>
          <span class="cta-arrow">→</span>
        </button>
      </div>
    </div>
  `,

  'evaluacion-alucinaciones-enganos': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">📋 PROTOCOLO DE EXAMEN CLÍNICO</span>
          <span class="modal-area-pill">🔬 ÁREA: EVALUACIÓN CLÍNICA</span>
          <span class="modal-area-pill">🔊 ÁREA: ELEMENTOS DEL VIVENCIAR</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-top: 0.4rem;">
          <div>
            <h2 class="orientation-main-title">Evaluación fenomenológica de alucinaciones y alucinosis</h2>
            <p class="orientation-authors-meta">Exploración Semiográfica Directa • Canales Sensoriales & Convicción</p>
          </div>
          <button type="button" class="btn-back-to-def" id="btn-back-alucinaciones-def">
            ← Ver Definición y Semiología
          </button>
        </div>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">EXPLORACIÓN CLÍNICA</div>
        <h3 class="orientation-sec-title">Pauta de Preguntas por Canales Sensoriales</h3>
        <div class="orientation-subcard">
          <ul class="orientation-bullet-list">
            <li><strong>Auditivas:</strong> <em>«¿Ha escuchado murmullos o voces cuando está solo? ¿Las voces le hablan a usted directamente o hablan entre ellas sobre usted?»</em></li>
            <li><strong>Imperativas:</strong> <em>«¿Esas voces le dan instrucciones u órdenes para hacer cosas que usted no desea hacer?»</em></li>
            <li><strong>Juicio Crítico:</strong> <em>«¿Le parece a usted que esto es algo que su cerebro produce por estrés, o está totalmente seguro de que es una persona real en el exterior?»</em></li>
          </ul>
        </div>
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta secondary" id="btn-bottom-back-alucinaciones-def">
          <span class="cta-icon">🔊</span>
          <div class="cta-texts">
            <strong class="cta-title">Volver a Engaños perceptivos (Definición & Semiología)</strong>
            <span class="cta-sub">Consultar canales sensoriales, pseudopercepciones y alucinosis</span>
          </div>
          <span class="cta-arrow">←</span>
        </button>
      </div>
    </div>
  `,

  // -------------------------------------------------------------------------
  // 4. MEMORIA DIVIDIDA: INMEDIATA/TRABAJO vs LARGO PLAZO
  // -------------------------------------------------------------------------
  'evaluacion-memoria-inmediata-trabajo': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">📋 PROTOCOLO DE EXAMEN CLÍNICO</span>
          <span class="modal-area-pill">⚡ ÁREA: MEMORIA DE TRABAJO</span>
          <span class="modal-area-pill">🧠 ÁREA: INSTRUMENTOS DEL VIVENCIAR</span>
        </div>
        <h2 class="orientation-main-title">Evaluación de memoria inmediata y operativa (Working Memory)</h2>
        <p class="orientation-authors-meta">Exploración de Retención Activa & Bucle Fonológico • Capponi (Pág. 148)</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PRUEBA 1</div>
        <h3 class="orientation-sec-title">1. Retención Inmediata de Dígitos Directos</h3>
        <p class="orientation-p">
          Lea las siguientes series a razón de un dígito por segundo. Pida al paciente que las repita en el mismo orden inmediatamente:
        </p>
        <div class="orientation-subcard">
          <ul class="orientation-bullet-list">
            <li>Serie de 4: <strong>5 - 8 - 2 - 4</strong></li>
            <li>Serie de 5: <strong>6 - 3 - 9 - 1 - 7</strong></li>
            <li>Serie de 6: <strong>4 - 2 - 8 - 5 - 1 - 9</strong></li>
            <li>Serie de 7: <strong>8 - 1 - 4 - 9 - 3 - 6 - 2</strong></li>
          </ul>
          <div class="orientation-small-note">Criterio Normal: Capacidad de reproducir al menos 5 a 6 dígitos directos.</div>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PRUEBA 2</div>
        <h3 class="orientation-sec-title">2. Dígitos Inversos (Memoria de Trabajo y Manipulación Mental)</h3>
        <p class="orientation-p">
          Lea la serie y pida al paciente que la repita <strong>al revés</strong> (del último al primero):
        </p>
        <div class="orientation-subcard">
          <ul class="orientation-bullet-list">
            <li>Serie de 3: <strong>2 - 8 - 5</strong> (Respuesta esperada: 5 - 8 - 2)</li>
            <li>Serie de 4: <strong>7 - 1 - 4 - 9</strong> (Respuesta esperada: 9 - 4 - 1 - 7)</li>
            <li>Serie de 5: <strong>3 - 8 - 2 - 6 - 1</strong> (Respuesta esperada: 1 - 6 - 2 - 8 - 3)</li>
          </ul>
          <div class="orientation-small-note">Criterio Normal: Capacidad de reproducir al menos 4 dígitos inversos.</div>
        </div>
      </section>
    </div>
  `,

  'evaluacion-memoria-largo-plazo': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">📋 PROTOCOLO DE EXAMEN CLÍNICO</span>
          <span class="modal-area-pill">💾 ÁREA: MEMORIA DE LARGO PLAZO</span>
          <span class="modal-area-pill">🧠 ÁREA: INSTRUMENTOS DEL VIVENCIAR</span>
        </div>
        <h2 class="orientation-main-title">Evaluación de memoria diferida, remota y consolidación</h2>
        <p class="orientation-authors-meta">Exploración de Fijación Hipocámpica & Evocación • Capponi & Belloch</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PRUEBA 1</div>
        <h3 class="orientation-sec-title">1. Recuerdo Libre Diferido a los 5 Minutos (Test de las 3 Palabras)</h3>
        <p class="orientation-lead-p">
          Diga al paciente: <em>«Le voy a decir tres palabras que debe memorizar porque se las preguntaré en unos minutos: <strong>ÁRBOL, MESA, AVIÓN</strong>».</em>
        </p>
        <p class="orientation-p">
          Realice otra tarea distractora durante 5 minutos y luego pida el recuerdo libre:
        </p>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Recuerdo Libre</span>
            <p class="dim-desc">Pídale que recuerde las palabras sin ayuda. Si logra las 3/3, la consolidación es normal.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Con Pistas Semánticas</span>
            <p class="dim-desc">Si falla, dé una pista: «Una era una planta... otra un mueble...». Si evoca con pista, indica falla de recuperación frontal y no daño de almacenamiento hipocámpico.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PRUEBA 2</div>
        <h3 class="orientation-sec-title">2. Memoria Remota Biográfica y Semántica</h3>
        <ul class="orientation-bullet-list">
          <li><strong>Biográfica:</strong> Nombre de la escuela primaria, fecha exacta de casamiento o nombres de los abuelos.</li>
          <li><strong>Histórica:</strong> Fechas patrias o presidentes anteriores conocidos por el paciente.</li>
        </ul>
      </section>
    </div>
  `,

  // -------------------------------------------------------------------------
  // 5. AFECTIVIDAD: RIESGO SUICIDA SEPARADO
  // -------------------------------------------------------------------------
  'evaluacion-riesgo-suicida': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">🆘 PROTOCOLO DE SEGURIDAD CLÍNICA</span>
          <span class="modal-area-pill">🚨 CRITERIO DE URGENCIA</span>
          <span class="modal-area-pill">🩺 ÁREA: EXAMEN MENTAL</span>
        </div>
        <h2 class="orientation-main-title">Protocolo de evaluación y estratificación del riesgo suicida</h2>
        <p class="orientation-authors-meta">Pauta de Exploración Gradual & Estratificación • Adaptación C-SSRS & Capponi</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">EXPLORACIÓN GRADUAL</div>
        <h3 class="orientation-sec-title">Pasos de Evaluación de Riesgo</h3>
        <div class="orientation-subcard">
          <ul class="orientation-bullet-list">
            <li><strong>Nivel 1 (Ideación Pasiva):</strong> <em>«¿Ha deseado estar muerto o dormirse y no despertar jamás?»</em></li>
            <li><strong>Nivel 2 (Ideación Activa sin Método):</strong> <em>«¿Ha pensado en suicidarse o terminar con su vida?»</em></li>
            <li><strong>Nivel 3 (Ideación Activa con Método):</strong> <em>«¿Ha pensado en alguna forma o método concreto para hacerlo?»</em></li>
            <li><strong>Nivel 4 (Intención y Plan):</strong> <em>«¿Tiene la intención de llevar a cabo este plan? ¿Tiene acceso a los medios?»</em></li>
            <li><strong>Nivel 5 (Preparativos Finales):</strong> <em>«¿Ha escrito cartas de despedida, regalado pertenencias valiosas o acumulado medicamentos?»</em></li>
          </ul>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">CRITERIOS DE CONDUCTA MÉDICA</div>
        <div class="orientation-clinical-alert">
          <strong>⚠️ Alerta de Hospitalización Urgente:</strong> La presencia de Nivel 4 o 5, asociada a desesperanza profunda, antecedentes de intentos previos y aislamiento social, constituye indicación inmediata de hospitalización protegida o derivación acompañada a urgencia psiquiátrica.
        </div>
      </section>
    </div>
  `,

  // -------------------------------------------------------------------------
  // 6. PROTOCOLOS NUEVOS: ANSIEDAD, MMSE, SÍNTOMAS NEGATIVOS, CAGE, ETC.
  // -------------------------------------------------------------------------
  'evaluacion-ansiedad-panico': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">📋 PROTOCOLO DE EXAMEN CLÍNICO</span>
          <span class="modal-area-pill">😰 ÁREA: ANSIEDAD & PÁNICO</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA</span>
        </div>
        <h2 class="orientation-main-title">Protocolo de evaluación de la ansiedad y crisis de pánico</h2>
        <p class="orientation-authors-meta">Semiología de la Angustia • Capponi (Pág. 94) & Belloch</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SECCIÓN 1</div>
        <h3 class="orientation-sec-title">Diferenciación Ansiedad Psíquica vs. Somática</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Psíquica</span>
            <h4 class="dim-name">Anticipación Aprensiva</h4>
            <p class="dim-desc">Sensación inminente de catástrofe, hipervigilancia, rumiación continua y dificultad extrema para relajarse.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Somática</span>
            <h4 class="dim-name">Descarga Vegetativa</h4>
            <p class="dim-desc">Palpitaciones, taquicardia, opresión precordial en el pecho, nudo en la garganta, sudoración fría, temblor y sensación de falta de aire.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SECCIÓN 2</div>
        <h3 class="orientation-sec-title">Criterios de Crisis de Pánico (Ataque de Angustia)</h3>
        <p class="orientation-p">
          Aparición súbita de miedo pavoroso o malestar intenso que alcanza su pico máximo en menos de 10 minutos, acompañado de temor inminente a morir, perder el control o volverse loco.
        </p>
      </section>
    </div>
  `,

  'evaluacion-deterioro-cognitivo-minimental': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">🧮 PROTOCOLO PSICOMÉTRICO BREVE</span>
          <span class="modal-area-pill">🔬 CRIBADO COGNITIVO (30 PUNTOS)</span>
          <span class="modal-area-pill">🩺 ÁREA: EXAMEN MENTAL</span>
        </div>
        <h2 class="orientation-main-title">Protocolo de tamizaje de deterioro cognitivo (Cribado MMSE)</h2>
        <p class="orientation-authors-meta">Adaptación Clínica del Mini-Mental State Examination • Capponi & Belloch</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">BATERÍA DE 30 PUNTOS</div>
        <div class="orientation-subcard">
          <ul class="orientation-bullet-list">
            <li><strong>Orientación (10 pts):</strong> Temporal (año, estación, mes, fecha, día = 5 pts) y Espacial (país, región, ciudad, hospital/consulta, piso = 5 pts).</li>
            <li><strong>Fijación (3 pts):</strong> Nombrar 3 palabras (p. ej. Pelota, Bandera, Árbol). 1 punto por cada una repetida al primer intento.</li>
            <li><strong>Atención y Cálculo (5 pts):</strong> Restar de 7 en 7 desde 100 (100 - 93 - 86 - 79 - 72 - 65) o deletrear la palabra «MUNDO» al revés.</li>
            <li><strong>Recuerdo Diferido (3 pts):</strong> Solicitar que recuerde las 3 palabras fijadas anteriormente (1 pt cada una).</li>
            <li><strong>Lenguaje y Praxias (9 pts):</strong> Denominar lápiz y reloj (2), repetir «ni sí, ni no, ni pero» (1), orden triple de papel (3), leer y obedecer «Cierre los ojos» (1), escribir una frase completa (1) y copiar el dibujo de dos pentágonos intersectados (1).</li>
          </ul>
        </div>
        <div class="orientation-clinical-note">
          📊 <strong>Puntos de corte clásicos:</strong> ≥ 24 Normal | 19 - 23 Deterioro Cognitivo Leve | ≤ 18 Sospecha de Demencia Moderada/Grave.
        </div>
      </section>
    </div>
  `,

  'evaluacion-consumo-alcohol-cage': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">🍷 PROTOCOLO DE TAMIZAJE CLÍNICO</span>
          <span class="modal-area-pill">🔬 ADICCIONES & DROGODEPENDENCIA</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA</span>
        </div>
        <h2 class="orientation-main-title">Protocolo de tamizaje de consumo problemático de alcohol (CAGE)</h2>
        <p class="orientation-authors-meta">Cuestionario CAGE (Ewing) • Belloch Vol. 1 (Cap. 13, Pág. 368)</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">LAS 4 PREGUNTAS CLAVE</div>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">C - Cut down</span>
            <h4 class="dim-name">¿Ha sentido que debe reducir su consumo?</h4>
            <p class="dim-desc">Explora la pérdida de control y la percepción subjetiva de que la bebida le está generando problemas.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">A - Annoyed</span>
            <h4 class="dim-name">¿Le molesta que otros critiquen su forma de beber?</h4>
            <p class="dim-desc">Pesquisa la reactividad defensiva interpersonal ante señalamientos de familiares o amigos.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">G - Guilty</span>
            <h4 class="dim-name">¿Se ha sentido culpable o mal por beber?</h4>
            <p class="dim-desc">Identifica remordimiento moral tras intoxicaciones o actos cometidos bajo los efectos del alcohol.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">E - Eye-opener</span>
            <h4 class="dim-name">¿Ha bebido en la mañana para calmar nervios o resaca?</h4>
            <p class="dim-desc">Signo cardinal de dependencia física y síndrome de abstinencia matutino incipiente.</p>
          </div>
        </div>
        <div class="orientation-clinical-alert" style="margin-top: 1rem;">
          <strong>📊 Interpretación Clínica:</strong> 2 o más respuestas afirmativas («Sí») poseen una especificidad superior al 90% para consumo perjudicial o dependencia alcohólica activa.
        </div>
      </section>
    </div>
  `,

  'evaluacion-examen-estado-mental-global': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">📝 SÍNTESIS CLÍNICA GLOBAL</span>
          <span class="modal-area-pill">🩺 EXAMEN DEL ESTADO MENTAL (E.E.M.)</span>
          <span class="modal-area-pill">🔬 ÁREA: SEMIOLOGÍA</span>
        </div>
        <h2 class="orientation-main-title">Pauta de cotejo del examen del estado mental global (E.E.M.)</h2>
        <p class="orientation-authors-meta">Examen del Vivenciar en 10 Minutos • Ricardo Capponi (Cap. IV)</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">HOJA DE COTEJO RÁPIDA</div>
        <div class="orientation-table-wrap">
          <table class="orientation-table">
            <thead>
              <tr>
                <th style="width: 28%;">Área Semiológica</th>
                <th style="width: 42%;">Aspectos Específicos Observables</th>
                <th style="width: 30%;">Registro Clínico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Apariencia & Porte</strong></td>
                <td>Higiene, aseo personal, contacto visual, cooperación y mímica facial.</td>
                <td>Adecuado / Descuidado / Hostil</td>
              </tr>
              <tr>
                <td><strong>2. Conciencia & Orientación</strong></td>
                <td>Nivel de vigilia lúcido y orientación en tiempo, espacio y persona.</td>
                <td>Lúcido / Somnoliento / Desorientado</td>
              </tr>
              <tr>
                <td><strong>3. Atención & Memoria</strong></td>
                <td>Capacidad de concentración y recuerdo de datos inmediatos y remotos.</td>
                <td>Normoprosexia / Hipomnesia</td>
              </tr>
              <tr>
                <td><strong>4. Curso del Pensamiento</strong></td>
                <td>Velocidad, fluidez, coherencia y direccionalidad del discurso.</td>
                <td>Coherente / Taquipsíquico / Bloqueos</td>
              </tr>
              <tr>
                <td><strong>5. Contenido del Pensamiento</strong></td>
                <td>Presencia de ideas delirantes, obsesiones o rumiaciones.</td>
                <td>Sin delirios / Delirio paranoide</td>
              </tr>
              <tr>
                <td><strong>6. Afectividad & Humor</strong></td>
                <td>Tono de ánimo basal, resonancia afectiva y reactividad emocional.</td>
                <td>Eutímico / Deprimido / Expansivo</td>
              </tr>
              <tr>
                <td><strong>7. Sensopercepción</strong></td>
                <td>Alucinaciones auditivas, visuales, táctiles o ilusiones.</td>
                <td>Sin alucinaciones / Alucinatorio</td>
              </tr>
              <tr>
                <td><strong>8. Juicio & Insight</strong></td>
                <td>Conciencia de enfermedad y adecuación lógica a la realidad.</td>
                <td>Juicio conservado / Juicio desviado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `
};

/* ==========================================================================
   NAVIGATION & CITATION JUMP BINDINGS HELPER
   ========================================================================== */

export function setupAdditionalModalListeners(itemId, modalContent, controller) {
  if (!modalContent || !controller) return;

  // Jump buttons to exact book pages
  modalContent.querySelectorAll('[data-book-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const bookId = btn.getAttribute('data-book-id');
      const page = parseInt(btn.getAttribute('data-page'), 10) || 1;
      const catalog = controller.catalog || window.__LIBRARY_CATALOG_REF;
      const book = catalog ? catalog.find(x => x.id === bookId) : null;
      if (book) {
        controller.closeModal();
        controller.openPdfReader(book, page);
      }
    });
  });

  // Quick navigation pills (scroll to section)
  modalContent.querySelectorAll('.orientation-nav-pill-btn[data-target-sec]').forEach(pBtn => {
    pBtn.addEventListener('click', () => {
      const targetId = pBtn.getAttribute('data-target-sec');
      const targetEl = modalContent.querySelector('#' + targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Cross-subdivision banner links
  const btnGotoDeliriosSub = modalContent.querySelector('#btn-goto-delirios-sub');
  if (btnGotoDeliriosSub) {
    btnGotoDeliriosSub.addEventListener('click', () => controller.openResourceModal('contenido-delirios'));
  }
  const btnGotoCursoSub = modalContent.querySelector('#btn-goto-curso-sub');
  if (btnGotoCursoSub) {
    btnGotoCursoSub.addEventListener('click', () => controller.openResourceModal('curso-pensamiento'));
  }
  const btnGotoAlucinacionesSub = modalContent.querySelector('#btn-goto-alucinaciones-sub');
  if (btnGotoAlucinacionesSub) {
    btnGotoAlucinacionesSub.addEventListener('click', () => controller.openResourceModal('alucinaciones-enganos'));
  }
  const btnGotoDistorsionesSub = modalContent.querySelector('#btn-goto-distorsiones-sub');
  if (btnGotoDistorsionesSub) {
    btnGotoDistorsionesSub.addEventListener('click', () => controller.openResourceModal('distorsiones-sensoperceptivas'));
  }

  // Navigation between Definition and Evaluation Protocols
  const navMap = {
    // Curso
    'curso-pensamiento': { forward: 'evaluacion-curso-pensamiento', forwardBtn: '#btn-goto-curso-pensamiento-eval' },
    'evaluacion-curso-pensamiento': { back: 'curso-pensamiento', backBtns: ['#btn-back-curso-pensamiento-def', '#btn-bottom-back-curso-pensamiento-def'] },

    // Contenido / Delirios
    'contenido-delirios': { forward: 'evaluacion-contenido-delirios', forwardBtn: '#btn-goto-contenido-delirios-eval' },
    'evaluacion-contenido-delirios': { back: 'contenido-delirios', backBtns: ['#btn-back-contenido-delirios-def', '#btn-bottom-back-contenido-delirios-def'] },

    // Distorsiones
    'distorsiones-sensoperceptivas': { forward: 'evaluacion-distorsiones-sensoperceptivas', forwardBtn: '#btn-goto-distorsiones-eval' },
    'evaluacion-distorsiones-sensoperceptivas': { back: 'distorsiones-sensoperceptivas', backBtns: ['#btn-back-distorsiones-def', '#btn-bottom-back-distorsiones-def'] },

    // Alucinaciones
    'alucinaciones-enganos': { forward: 'evaluacion-alucinaciones-enganos', forwardBtn: '#btn-goto-alucinaciones-eval' },
    'evaluacion-alucinaciones-enganos': { back: 'alucinaciones-enganos', backBtns: ['#btn-back-alucinaciones-def', '#btn-bottom-back-alucinaciones-def'] },

    // Psicopatología del Yo
    'psicopatologia-del-yo': { forward: 'evaluacion-psicopatologia-yo', forwardBtn: '#btn-goto-yo-eval' },
    'evaluacion-psicopatologia-yo': { back: 'psicopatologia-del-yo', backBtns: ['#btn-back-yo-def', '#btn-bottom-back-yo-def'] },

    // Personalidad
    'trastornos-personalidad': { forward: 'evaluacion-trastornos-personalidad', forwardBtn: '#btn-goto-personalidad-eval' },
    'evaluacion-trastornos-personalidad': { back: 'trastornos-personalidad', backBtns: ['#btn-back-personalidad-def', '#btn-bottom-back-personalidad-def'] },

    // Grandes Síndromes
    'grandes-sindromes': { forward: 'evaluacion-grandes-sindromes', forwardBtn: '#btn-goto-sindromes-eval' },
    'evaluacion-grandes-sindromes': { back: 'grandes-sindromes', backBtns: ['#btn-back-sindromes-def', '#btn-bottom-back-sindromes-def'] },

    // Conducta Alimentaria
    'conducta-alimentaria': { forward: 'evaluacion-conducta-alimentaria', forwardBtn: '#btn-goto-alimentaria-eval' },
    'evaluacion-conducta-alimentaria': { back: 'conducta-alimentaria', backBtns: ['#btn-back-alimentaria-def', '#btn-bottom-back-alimentaria-def'] },

    // Control de Impulsos
    'control-impulsos': { forward: 'evaluacion-control-impulsos', forwardBtn: '#btn-goto-impulsos-eval' },
    'evaluacion-control-impulsos': { back: 'control-impulsos', backBtns: ['#btn-back-impulsos-def', '#btn-bottom-back-impulsos-def'] }
  };

  const nav = navMap[itemId];
  if (!nav) return;

  if (nav.forward && nav.forwardBtn) {
    const fBtn = modalContent.querySelector(nav.forwardBtn);
    if (fBtn) {
      fBtn.addEventListener('click', () => {
        controller.openResourceModal(nav.forward);
      });
    }
  }

  if (nav.back && nav.backBtns) {
    nav.backBtns.forEach(sel => {
      const bBtn = modalContent.querySelector(sel);
      if (bBtn) {
        bBtn.addEventListener('click', () => {
          controller.openResourceModal(nav.back);
        });
      }
    });
  }
}
