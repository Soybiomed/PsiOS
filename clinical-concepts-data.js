/* ==========================================================================
   CLINICAL CONCEPTS & EVALUATION PROTOCOLS MODULE (PsiOS)
   Arquitectura clínica integral ampliada con rigor psicopatológico profundo,
   citas exactas y verificadas a Ricardo Capponi, Amparo Belloch (Vol. 1) y APIR,
   ejemplos de discurso clínico de pacientes, tablas comparativas de diagnóstico
   diferencial, escalas de evaluación estructurada y saltos directos al lector nativo de PDF.
   ========================================================================== */

export const ADDITIONAL_CLINICAL_CATALOG = [
  // =========================================================================
  // 1. EL PENSAMIENTO: CURSO Y ESTRUCTURA FORMAL
  // =========================================================================
  {
    id: 'curso-pensamiento',
    title: 'Trastornos del curso y estructura del pensamiento',
    category: 'psicopatologia',
    categoryLabel: 'Definición Semiológica',
    isClinicalEntity: true,
    code: 'SEM-PEN-CUR-01',
    icon: '⚡',
    author: 'Semiología Psiquiátrica • Capponi, Belloch & Nancy Andreasen',
    badge: 'Elemento del Vivenciar • Ritmo & Asociación Formal',
    areas: ['ELEMENTOS DEL VIVENCIAR', 'PSICOPATOLOGÍA', 'SEMIOLOGÍA', 'EXAMEN MENTAL', 'PROCESOS PSICOLÓGICOS'],
    academicAffiliation: 'Ricardo Capponi (Págs. 64-70) • Manual Belloch (Vol. 1, Cap. 8, Págs. 205-224) • APIR (Págs. 44-46)',
    summary: 'Definición: Alteraciones cuantitativas y cualitativas en la velocidad, ritmo, direccionalidad, arquitectura asociativa y fluidez del discurso del pensamiento.\n\nTrastornos de la velocidad: Taquipsiquia (aceleración del pensar), Fuga de ideas (pensamiento ideofugaz con saltos por rima o estímulo ambiental), Bradipsiquia (enlentecimiento del flujo) e Inhibición del pensamiento (vivencia de esfuerzo y parálisis penosa del pensar).\n\nTrastornos de la continuidad y estructura asociativa: Bloqueo o interceptación del pensamiento (detención súbita sin causa externa), Disgregación (quiebre de la idea directriz con sintaxis parcialmente conservada), Incoherencia (ensalada de palabras con anarquía gramatical), Descarrilamiento o pensamiento laxo (derailment), Tangencialidad (respuestas que rozan el tema pero no lo contestan), Circunstancialidad o pensamiento prolijo (incapacidad de sintetizar con abundancia de rodeos superfluos), Perseveración y Pérdida de meta.\n\nCriterio diferencial capital: El curso evalúa CÓMO se elabora y fluye el pensamiento a través del lenguaje, con total independencia de que las ideas sean verdaderas o delirantes.',
    topics: [
      'Diferenciación Fundamental: Curso y Forma vs. Contenido del Pensar',
      'Taquipsiquia y Fuga de Ideas (Saltos Asociativos por Rima, Asonancia o Distractibilidad)',
      'Bradipsiquia e Inhibición Melancólica (Sensación de Esfuerzo Subjetivo y Parálisis)',
      'Bloqueo o Interceptación del Pensamiento (Detención Brusca en Esquizofrenia)',
      'Disgregación (Bleuler) vs. Incoherencia o Ensalada de Palabras (Esquizofasia)',
      'Descarrilamiento y Pensamiento Laxo (Nancy Andreasen - Escala TLC)',
      'Tangencialidad vs. Circunstancialidad (Pensamiento Detallista y Prolijo)',
      'Perseveración Verbal, Ecolalia y Verbigeración',
      'Citas textuales verificadas en Ricardo Capponi (p. 64) y Belloch (Cap. 8)'
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
    academicAffiliation: 'Exploración del Curso del Pensamiento (Belloch Cap. 8 & Capponi Págs. 64-70)',
    summary: 'Protocolo clínico estructurado para el análisis semiográfico del discurso oral del paciente durante la entrevista: evaluación de la latencia de respuesta, débito verbal (palabras por minuto), direccionalidad asociativa hacia la meta, detección de bloqueos súbitos y cuantificación de descarrilamientos con preguntas disparadoras estandarizadas.',
    topics: [
      'Paso 1: Medición de la Latencia de Respuesta y Presión del Habla (Logorrea)',
      'Paso 2: Evaluación de la Direccionalidad Asociativa (Meta de la Respuesta)',
      'Paso 3: Identificación de Saltos Asociativos, Asindesis y Descarrilamiento',
      'Paso 4: Pesquisa de Bloqueos e Interceptaciones Súbitas del Flujo',
      'Paso 5: Diferenciación Semiográfica: Circunstancialidad vs. Tangencialidad',
      'Pauta Semiográfica y Rúbrica de Registro de Severidad'
    ]
  },

  // =========================================================================
  // 2. EL PENSAMIENTO: CONTENIDO Y DELIRIOS
  // =========================================================================
  {
    id: 'contenido-delirios',
    title: 'Trastornos del contenido del pensamiento y delirios',
    category: 'psicopatologia',
    categoryLabel: 'Definición Semiológica',
    isClinicalEntity: true,
    code: 'SEM-PEN-CON-01',
    icon: '👁️',
    author: 'Psicopatología de los Delirios • Jaspers, Schneider, Capponi & Belloch',
    badge: 'Elemento del Vivenciar • Convicción & Juicio de Realidad',
    areas: ['ELEMENTOS DEL VIVENCIAR', 'PSICOPATOLOGÍA', 'SEMIOLOGÍA', 'EXAMEN MENTAL'],
    academicAffiliation: 'Ricardo Capponi (Págs. 71-85) • Manual Belloch (Vol. 1, Cap. 9, Págs. 225-272) • APIR (Págs. 46-50)',
    summary: 'Definición: Juicios de realidad patológicamente falseados, sostenidos con certeza subjetiva inquebrantable, impenetrables a la argumentación lógica o evidencia empírica contradictoria, cuyo contenido es objetivamente inverosímil o imposible (Karl Jaspers, 1913).\n\nClasificación fenomenológica clásica:\n1. Delirios Primarios o Verdaderos (Schneider / Jaspers): Incomprensibles psicológicamente, autónomos de vivencias afectivas previas. Comprenden el Temple delirante (Wahnstimmung), la Percepción delirante (atribución de un significado anormal a una percepción normal) y la Ocurrencia delirante (Wahneinfall).\n2. Delirios Secundarios o Deliroides: Comprensibles a partir del estado afectivo del paciente (delirio de culpa, ruina e hipocondría en la melancolía; delirio de grandeza en la manía; delirio paranoide tras vivencias traumáticas).\n\nDimensiones del delirio (Kendler / Belloch): Convicción, Preocupación / Implicación emocional, Extensión / Sistematización, Implausibilidad y Resonancia conductual.\n\nTemáticas delirantes: Persecución, Referencia / Alusión, Grandeza / Mesiánico, Celotipia (Síndrome de Otelo), Erotomanía (Síndrome de Clérambault), Somático / Hipocondríaco, Negación de órganos (Síndrome de Cotard), Falsos reconocimientos delirantes (Síndromes de Capgras y Frégoli).\n\nFenómenos de influencia y pasividad del Yo (Schneider): Delirio de control, inserción del pensamiento, robo del pensamiento y difusión / irradiación del pensamiento.',
    topics: [
      'Los Tres Criterios Constitutivos de Karl Jaspers (1913)',
      'Delirios Primarios de Schneider: Temple, Percepción y Ocurrencia Delirante',
      'Delirios Secundarios o Deliroides (Comprensibilidad Afectiva)',
      'Dimensiones de Kendler: Convicción, Preocupación, Extensión e Implausibilidad',
      'Temáticas: Persecución, Referencia, Grandeza, Celotipia y Erotomanía',
      'Delirio Nihilista o de Negación (Síndrome de Cotard)',
      'Síndromes de Falso Reconocimiento: Sosías (Capgras) y Frégoli',
      'Fenómenos de Pasividad Schneideriana: Inserción, Robo y Difusión del Pensar',
      'Tabla Diferencial Definitiva: Delirio vs. Idea Sobrevalorada vs. Obsesión'
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
    academicAffiliation: 'Cribado Semiográfico de Convicciones Delirantes (Belloch Cap. 9 & Capponi Págs. 71-85)',
    summary: 'Protocolo clínico estructurado de entrevista para explorar la presencia de convicciones delirantes, evaluar el grado de encapsulamiento vs. sistematización, medir la resonancia afectiva y conductual, pesquisar fenómenos de control yoico y establecer el diagnóstico diferencial con ideas obsesivas y sobrevaloradas.',
    topics: [
      'Paso 1: Exploración Progresiva y Respetuosa de Temáticas Sensibles',
      'Paso 2: Valoración Gradual de la Convicción (Certeza Absoluta vs. Duda)',
      'Paso 3: Evaluación de la Sistematización y Amplitud Redireccional',
      'Paso 4: Pesquisa Específica de Fenómenos de Pasividad del Yo',
      'Paso 5: Medición del Impacto Funcional, Afectivo y Conductual',
      'Rúbrica de Severidad y Guía de Manejo Clínico sin Confrontación Directa'
    ]
  },

  // =========================================================================
  // 3. LA SENSOPERCEPCIÓN: DISTORSIONES PERCEPTIVAS
  // =========================================================================
  {
    id: 'distorsiones-sensoperceptivas',
    title: 'Trastornos de la percepción: distorsiones perceptivas e ilusiones',
    category: 'psicopatologia',
    categoryLabel: 'Definición Semiológica',
    isClinicalEntity: true,
    code: 'SEM-SEN-DIS-01',
    icon: '🔍',
    author: 'Psicopatología Sensoperceptiva • Capponi & Belloch',
    badge: 'Elemento del Vivenciar • Anomalías de la Percepción con Objeto Real',
    areas: ['ELEMENTOS DEL VIVENCIAR', 'PSICOPATOLOGÍA', 'SEMIOLOGÍA', 'EXAMEN MENTAL'],
    academicAffiliation: 'Ricardo Capponi (Págs. 30-45) • Manual Belloch (Vol. 1, Cap. 6, Págs. 147-160) • APIR (Págs. 29-33)',
    summary: 'Definición: Anomalías perceptivas que se producen cuando un estímulo real y accesible a los órganos de los sentidos es percibido de forma distorsionada en su intensidad, cualidad, forma, tamaño o integración espacial (Belloch, 2008).\n\nClasificación semiológica:\n1. Anomalías en la Intensidad: Hiperestesia (vivencia acentuada del estímulo, fotofobia, hiperacusia), Hipoestesia (percepción atenuada de estímulos sensoriales y del dolor) e Hipoalgesia / Analgesia psicógena.\n2. Anomalías en la Cualidad: Xantopsia (visión amarilla), Cloropsia (verde), Eritropsia (roja), disgeusia y parosmias.\n3. Metamorfopsias (Forma y Tamaño): Dismegalopsias (Micropsia / Macropsia), Dismorfopsias (deformación de líneas y figuras) y Autometamorfopsias (distorsión referida a las proporciones del propio cuerpo, como en el Síndrome de Alicia en el País de las Maravillas).\n4. Anomalías en la Integración Perceptiva: Escisión perceptiva (desarticulación entre sonido y forma observada) y Sinestesia patológica.\n5. Ilusiones (Deformación de estímulos ambiguos): Ilusiones por inatención (frecuentes en fatiga), Ilusiones catatímicas (deformación condicionada por un afecto intenso de miedo o culpa) y Pareidolias (estructuración fantástica deliberada sobre estímulos amorfos sin pérdida del juicio de realidad).',
    topics: [
      'Diferenciación Fundamental: Distorsión Perceptiva (con objeto real) vs. Engaño (sin objeto)',
      'Hiperestesia e Hipoestesia Sensorial (Depresión, Manía, Tóxicos y Migraña)',
      'Metamorfopsias: Micropsias, Macropsias y Síndrome de Alicia en el País de las Maravillas',
      'Dismorfopsias y Autometamorfopsias del Esquema Corporal',
      'Anomalías en la Integración Perceptiva: Escisión de Percepciones y Sinestesias',
      'Ilusiones por Inatención, Ilusiones Catatímicas (Afectivas) y Pareidolias',
      'Bases Neurofisiológicas: Lóbulo Parietal, Temporal y Vía Visual Ventral/Dorsal'
    ]
  },
  {
    id: 'evaluacion-distorsiones-sensoperceptivas',
    title: 'Evaluación de distorsiones perceptivas, ilusiones y metamorfopsias',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-SEN-DIS-02',
    icon: '📋',
    author: 'Protocolo Semiográfico • Exploración de la Integración Sensorial',
    badge: 'Examen Mental • Calibración de Anomalías Cualitativas',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'ELEMENTOS DEL VIVENCIAR'],
    academicAffiliation: 'Semiografía Sensoperceptiva (Belloch Cap. 6 & Capponi Págs. 30-45)',
    summary: 'Protocolo clínico estructurado de cribado para identificar distorsiones visuales, auditivas y táctiles, diferenciar ilusiones transitorias de engaños alucinatorios graves, y evaluar el origen neurológico (aura epiléptica, migraña, lóbulo temporal) frente al funcional.',
    topics: [
      'Paso 1: Indagación de Hiperestesia y Modulaciones de Intensidad Sensorial',
      'Paso 2: Exploración Específica de Metamorfopsias (Tamaño, Proporción y Color)',
      'Paso 3: Identificación de Ilusiones Catatímicas y su Disipación al Fijar Atención',
      'Paso 4: Diagnóstico Diferencial Clínico vs. Engaño Alucinatorio Autónomo',
      'Pauta Semiográfica y Rúbrica de Registro de Alteraciones Perceptivas'
    ]
  },

  // =========================================================================
  // 4. LA SENSOPERCEPCIÓN: ENGAÑOS PERCEPTIVOS Y ALUCINACIONES
  // =========================================================================
  {
    id: 'alucinaciones-enganos',
    title: 'Trastornos de la percepción: engaños perceptivos, alucinaciones y alucinosis',
    category: 'psicopatologia',
    categoryLabel: 'Definición Semiológica',
    isClinicalEntity: true,
    code: 'SEM-SEN-ALU-01',
    icon: '👻',
    author: 'Psicopatología Sensoperceptiva • Slade & Bentall, Capponi, Belloch & Schneider',
    badge: 'Elemento del Vivenciar • Percepciones sin Objeto Real',
    areas: ['ELEMENTOS DEL VIVENCIAR', 'PSICOPATOLOGÍA', 'SEMIOLOGÍA', 'EXAMEN MENTAL'],
    academicAffiliation: 'Ricardo Capponi (Págs. 45-63) • Manual Belloch (Vol. 1, Cap. 6, Págs. 160-175) • APIR (Págs. 33-37)',
    summary: 'Definición: Los engaños perceptivos consisten en vivencias perceptivas anómalas que se experimentan sin que exista un estímulo externo que las justifique o fundamente (Ball: «percepción sin objeto»).\n\nCriterios de Slade y Bentall (1988):\n1. La experiencia se vivencia con fuerza y claridad idéntica a una percepción real.\n2. Procede del mundo exterior (espacio extrapersonal objetivo).\n3. Es involuntaria y no susceptible de ser dirigida o suprimida a voluntad por el sujeto.\n\nModalidades sensoriales:\n- Auditivas: Elementales (acúfenos), complejas (fonemas, voces imperativas, voces que dialogan entre sí, eco del pensamiento - primer rango de Kurt Schneider).\n- Visuales: Fotopsias, complejas, liliputienses, gulliverianas, autoscópicas, zoopsias (típicas del delirium tremens alcohólico).\n- Táctiles o Hápticas: Térmicas, hídricas, formicación (sensación de insectos bajo la piel / Síndrome de Ekbom).\n- Cenestésicas o Somáticas: Alteración visceral profunda, petrificación de órganos, desmembramiento corporal.\n- Cinestésicas o Motrices: Sensación de movimiento corporal o levitación involuntaria.\n- Olfativas y Gustativas: Cacosmias, venenos imaginarios, olores pútridos.\n\nClasificación diferencial capital:\n• Alucinación Verdadera: Corporeidad espacial externa + Juicio de realidad positivo (certeza absoluta).\n• Pseudoalucinación (Kandinsky): Localización en el espacio interior (intrapsíquico, ojo o mente interna) + Vivencia de imposición involuntaria sin corporeidad física externa (típica en esquizofrenia).\n• Alucinosis (Wernicke): Corporeidad espacial externa + Juicio de realidad negativo (el sujeto conserva el insight y reconoce que no es real; típica en alcoholismo, tumores y daño neurológico).\n• Alucinaciones Hipnagógicas e Hipnopómpicas: Fenómenos fisiológicos durante la conciliación o despertar del sueño.',
    topics: [
      'Definición de Alucinación y los Tres Criterios de Slade y Bentall (1988)',
      'Alucinaciones Auditivas de Primer Rango de Schneider (Voces Dialogadas, Comentadoras y Eco)',
      'Alucinaciones Visuales: Zoopsias en Delirium Tremens vs. Alucinaciones Liliputienses',
      'Alucinaciones Táctiles (Formicación / Síndrome de Ekbom) y Cenestésicas Viscerales',
      'La Tríada Diferencial Clave: Alucinación Verdadera vs. Pseudoalucinación vs. Alucinosis',
      'Pseudoalucinaciones de Kandinsky (Espacio Intrapsíquico y Falta de Corporeidad)',
      'Alucinosis de Wernicke (Conservación de la Crítica e Insight)',
      'Alucinaciones Funcionales, Reflejas, Extracampinas y Autoscópicas',
      'Tabla Comparativa de Engaños Perceptivos y Diagnóstico Etiológico'
    ]
  },
  {
    id: 'evaluacion-alucinaciones-enganos',
    title: 'Evaluación semiológica de engaños perceptivos y alucinaciones',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-SEN-ALU-02',
    icon: '📋',
    author: 'Protocolo Semiográfico • Fenomenología Alucinatoria Directa',
    badge: 'Examen Mental • Exploración de Modalidades, Espacio & Insight',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'ELEMENTOS DEL VIVENCIAR'],
    academicAffiliation: 'Semiografía Alucinatoria (Belloch Cap. 6 & Capponi Págs. 45-63)',
    summary: 'Protocolo clínico estructurado de entrevista para pesquisar engaños perceptivos, determinar su localización espacial (extrapsíquica vs. intrapsíquica), evaluar el nivel de convicción y crítica, catalogar voces imperativas de riesgo autolesivo o heterolesivo, y diferenciar cuadros orgánicos de psicóticos funcionales.',
    topics: [
      'Paso 1: Preguntas de Sondeo Progresivo sin Sugestionar al Paciente',
      'Paso 2: Localización Espacial (¿Viene de Afuera o de Adentro de su Cabeza?)',
      'Paso 3: Evaluación de la Convicción, Realidad Subjetiva y Crítica (Insight)',
      'Paso 4: Pesquisa Urgente de Voces Imperativas y Riesgo Conductual',
      'Paso 5: Diferenciación Etiológica: Cuadro Orgánico / Delirium vs. Psicosis Esquizofrénica',
      'Rúbrica Semiográfica de Registro de Severidad Alucinatoria'
    ]
  },

  // =========================================================================
  // 5. EL YO Y LA PERSONALIDAD: PSICOPATOLOGÍA DEL YO
  // =========================================================================
  {
    id: 'psicopatologia-del-yo',
    title: 'Psicopatología de la conciencia del Yo',
    category: 'psicopatologia',
    categoryLabel: 'Definición Semiológica',
    isClinicalEntity: true,
    code: 'SEM-YO-CON-01',
    icon: '🪞',
    author: 'Psicopatología del Yo • Jaspers & Ricardo Capponi',
    badge: 'Estructura Yoica • Conciencia de Sí Mismo & Demarcación',
    areas: ['PSICOLOGÍA DEL YO', 'PSICOPATOLOGÍA', 'SEMIOLOGÍA', 'EXAMEN MENTAL'],
    academicAffiliation: 'Ricardo Capponi (Págs. 157-185) • Jaspers (1913) • APIR (Págs. 23-25)',
    summary: 'Definición: Anomalías en la vivencia de la propia mismidad, autoría, continuidad, límites y unidad del Yo como entidad psíquica integrada y consciente de sí misma (Karl Jaspers, 1913; Ricardo Capponi, 1987).\n\nLas 4 Cualidades Fundamentales de la Conciencia del Yo (Jaspers / Capponi):\n1. Conciencia de la Actividad del Yo: Certeza íntima de ser el autor y originador activo de los propios pensamientos, recuerdos, emociones y movimientos voluntarios. Se altera en los fenómenos de pasividad schneideriana, automatismo mental y vivencias de control externo.\n2. Conciencia de la Unidad del Yo: Vivencia de ser uno y el mismo sujeto en un instante dado. Se altera en el desdoblamiento del Yo, personalidad alternante, disociación y vivencia de escisión esquizofrénica.\n3. Conciencia de la Identidad del Yo: Certeza de continuidad histórica, de ser el mismo a lo largo del tiempo biográfico. Se altera en vivencias de transformación profunda de la personalidad, enajenación y certezas delirantes de haber sido transfigurado o sustituido.\n4. Conciencia de la Demarcación y Límites del Yo: Frontera clara y nítida entre lo que pertenece al Yo y lo que pertenece al mundo exterior (no-Yo). Se altera en la difusión del pensamiento, robo, transitivismo y permeabilidad de barreras yoicas.\n\nDespersonalización y Desrealización: Vivencia angustiante de extrañeza y lejanía respecto a uno mismo (despersonalización) o respecto al entorno material circundante (desrealización), conservando el juicio de realidad y la conciencia de anormalidad (insight).',
    topics: [
      'Las Cuatro Dimensiones Formales de la Conciencia del Yo según Karl Jaspers',
      'Actividad del Yo: Trastorno de la Autoría y Fenómenos de Pasividad Schneideriana',
      'Unidad del Yo: Trastorno de la Cohesión, Vivencias de Escisión y Desdoblamiento',
      'Identidad del Yo: Pérdida de la Continuidad Temporal y Vivencias de Transfiguración',
      'Demarcación del Yo: Difusión, Robo de Pensamiento y Pérdida de Límites Yo-Mundo',
      'Despersonalización Psíquica, Corporal y Desrealización del Entorno',
      'Síndrome de Automatismo Mental de Clérambault',
      'Citas y Casos Clínicos en Ricardo Capponi (Págs. 157-185)'
    ]
  },
  {
    id: 'evaluacion-psicopatologia-yo',
    title: 'Evaluación semiológica de las dimensiones y límites del Yo',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-YO-CON-02',
    icon: '📋',
    author: 'Protocolo Semiográfico • Exploración de la Mismidad y Barreras Yoicas',
    badge: 'Examen Mental • Autoría, Continuidad & Demarcación',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'PSICOLOGÍA DEL YO'],
    academicAffiliation: 'Semiografía de la Mismidad y del Yo (Capponi Págs. 157-185)',
    summary: 'Protocolo clínico estructurado para explorar de manera secuencial las cuatro cualidades jasperianas del Yo, pesquisar experiencias de pasividad, investigar vivencias de despersonalización/desrealización y establecer el diagnóstico diferencial entre disociación neurótica y psicosis esquizofrénica.',
    topics: [
      'Paso 1: Exploración de la Actividad y Autoría Vivencial (¿Siente que sus actos son suyos?)',
      'Paso 2: Evaluación de la Cohesión y Unidad del Yo (¿Se siente fragmentado o múltiple?)',
      'Paso 3: Verificación de la Identidad Longitudinal y Continuidad Histórica',
      'Paso 4: Examen de la Demarcación y Límites Yo-Entorno (Difusión e Invasión)',
      'Paso 5: Gradación de Despersonalización / Desrealización y Cuantificación de Insight',
      'Rúbrica Semiográfica de las 4 Dimensiones del Yo'
    ]
  },

  // =========================================================================
  // 6. EL YO Y LA PERSONALIDAD: TRASTORNOS DE LA PERSONALIDAD
  // =========================================================================
  {
    id: 'trastornos-personalidad',
    title: 'Trastornos de la personalidad y dimensiones yoicas',
    category: 'psicopatologia',
    categoryLabel: 'Definición Semiológica',
    isClinicalEntity: true,
    code: 'SEM-YO-PER-01',
    icon: '🎭',
    author: 'Psicopatología de la Personalidad • Capponi, Millon & DSM/CIE',
    badge: 'Estructura de Personalidad • Patrones Inflexibles & Dimensiones Yoicas',
    areas: ['PERSONALIDAD', 'PSICOPATOLOGÍA', 'SEMIOLOGÍA', 'PSICOLOGÍA CLÍNICA'],
    academicAffiliation: 'Ricardo Capponi (Págs. 185-200) • Manual Belloch (Vol. 2, Cap. 18) • APIR (Págs. 15-20)',
    summary: 'Definición: Patrón persistente, inflexible y generalizado de experiencia interna y comportamiento que se desvía acusadamente de las expectativas culturales del sujeto, con inicio en la adolescencia o adultez temprana, estable en el tiempo y que genera malestar clínicamente significativo o deterioro funcional.\n\nLas 4 Polaridades Yoicas de Ricardo Capponi (1987):\n1. Actividad vs. Pasividad: Tendencia alerta, vigilante y transformadora del entorno frente a la inercia, sometimiento y abandono funcional.\n2. Fusión vs. Aislamiento: Grado de demarcación y distancia interpersonal; oscila entre la disolución dependiente/simbiótica y el aislamiento autístico/esquizoide frío.\n3. Labilidad vs. Estabilidad: Capacidad de mantener metas, valores y estados afectivos consistentes frente a la oscilación impulsiva y la fragilidad del humor.\n4. Omnipotencia vs. Sumisión: Autoimagen inflada y autosuficiente frente a la vivencia de minusvalía, indefensión y subordinación.\n\nLos Tres Grupos Clásicos (Clusters DSM/CIE):\n• Grupo A (Raros / Excéntricos): Trastorno Paranoide, Esquizoide y Esquizotípico (distanciamiento social, desconfianza, pensamiento mágico).\n• Grupo B (Dramáticos / Emocionales / Erráticos): Trastorno Límite (TLP - inestabilidad afectiva, miedo al abandono, autoagresión), Narcisista (grandiosidad, falta de empatía), Histriónico (búsqueda de atención, seducción inapropiada) y Antisocial (desprecio por las normas, falta de culpa).\n• Grupo C (Ansiosos / Temerosos): Trastorno Evitativo (miedo al rechazo, hipersensibilidad), Dependiente (necesidad de cuidado, sumisión) y Obsesivo-Compulsivo de la Personalidad / Anancástico (perfeccionismo, rigidez, control).',
    topics: [
      'Concepto de Personalidad Patológica: Inflexibilidad, Maladaptación y Persistencia',
      'Las Cuatro Dimensiones Yoicas de Ricardo Capponi (Págs. 185-200)',
      'Cluster A: Paranoide (Sospecha), Esquizoide (Aislamiento) y Esquizotípico (Excentricidad)',
      'Cluster B: Límite / TLP (Inestabilidad y Vacío), Narcisista, Histriónico y Antisocial',
      'Cluster C: Evitativo (Inhibición Social), Dependiente y Anancástico (Perfeccionismo)',
      'Mecanismos de Defensa Inmaduros: Escisión, Identificación Proyectiva e Idealización',
      'Evaluación Longitudinal: Diagnóstico Diferencial con Trastornos Afectivos y Psicóticos'
    ]
  },
  {
    id: 'evaluacion-trastornos-personalidad',
    title: 'Evaluación semiológica de los trastornos de la personalidad',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-YO-PER-02',
    icon: '📋',
    author: 'Protocolo Dimensional • Entrevista Estructurada de Rasgos & Mecanismos',
    badge: 'Examen Mental • Análisis Longitudinal & Vínculo Terapéutico',
    areas: ['EVALUACIÓN CLÍNICA', 'PERSONALIDAD', 'SEMIOLOGÍA', 'EXAMEN MENTAL'],
    academicAffiliation: 'Exploración Dimensional de Personalidad (Capponi Págs. 185-200)',
    summary: 'Protocolo clínico estructurado de entrevista longitudinal para evaluar el patrón global de funcionamiento de la personalidad, identificar defensas primitivas (escisión, identificación proyectiva), medir las polaridades yoicas de Capponi y discernir entre rasgos de personalidad adaptativos y trastornos desadaptativos.',
    topics: [
      'Paso 1: Análisis Biográfico Longitudinal y Estabilidad de Patrones Relacionales',
      'Paso 2: Evaluación de las 4 Polaridades Yoicas de Capponi en Entrevista',
      'Paso 3: Pesquisa de Defensas Primitivas (Escisión, Negación y Proyección Masiva)',
      'Paso 4: Despistaje Sistemático de Criterios por Clusters (A, B y C)',
      'Paso 5: Valoración de la Alianza Terapéutica y Reacciones Transferenciales/Contratransferenciales',
      'Pauta Semiográfica y Rúbrica Dimensional de Registro'
    ]
  },

  // =========================================================================
  // 7. SÍNDROMES CLÍNICOS: GRANDES SÍNDROMES PSICOPATOLÓGICOS
  // =========================================================================
  {
    id: 'grandes-sindromes',
    title: 'Grandes síndromes psicopatológicos y diagnóstico sindromático',
    category: 'sindromes',
    categoryLabel: 'Definición Semiológica',
    isClinicalEntity: true,
    code: 'SEM-SIN-GRA-01',
    icon: '🧬',
    author: 'Diagnóstico Sindromático • Ricardo Capponi (Págs. 201-227)',
    badge: 'Semiología de Integración • Síntesis Sindromática vs. Nosológica',
    areas: ['SÍNDROMES CLÍNICOS', 'DIAGNÓSTICO SINDROMÁTICO', 'PSICOPATOLOGÍA', 'SEMIOLOGÍA'],
    academicAffiliation: 'Ricardo Capponi (Págs. 201-227) • APIR (Págs. 16-20)',
    summary: 'Definición: El síndrome psicopatológico constituye la agrupación articulada y coherente de signos y síntomas del vivenciar que covarían temporalmente y comparten mecanismos fisiopatológicos o fenomenológicos comunes, situándose en el nivel intermedio entre el síntoma aislado y la entidad nosológica etiológica (Capponi, 1987).\n\nLos Grandes Síndromes descritos por Capponi:\n1. Síndrome Confusional Agudo (Delirium): Compromiso del nivel de conciencia, desorientación témporo-espacial, inatención, labilidad afectiva e ilusiones/alucinaciones visuales.\n2. Síndrome Catatónico: Alteración grave de la psicomotricidad con acinesia, catalepsia (flexibilidad cérea), mutismo, negativismo o agitación motora no finalista.\n3. Síndrome Depresivo: Humor depresivo, anhedonia, inhibición psicomotriz o agitación angustiosa, bradipsiquia, ideas de culpa/ruina e insomnio terminal.\n4. Síndrome Maníaco: Ánimo eufórico o irritable, taquipsiquia con fuga de ideas, hiperactividad, insomnio sin fatiga y megalomanía.\n5. Síndrome Esquizofrénico: Disgregación del pensamiento, delirios de control/influencia, alucinaciones auditivas comentadoras y aplanamiento afectivo.\n6. Síndrome Paranoide: Sistema delirante estructurado (persecutorio, celotípico o de referencia) con preservación relativa de la lucidez y el orden formal.\n7. Síndrome Amnésico (Korsakoff): Pérdida masiva de memoria de fijación (amnesia anterógrada) con confabulaciones de relleno y lucidez de conciencia.\n8. Síndrome Demencial: Deterioro progresivo e irreversible de múltiples funciones corticales superiores (memoria, cálculo, abstracción, juicio y praxias).',
    topics: [
      'Jerarquía Semiológica de Capponi: Elemento del Vivenciar → Síndrome → Diagnóstico Nosológico',
      'Síndrome Confusional Agudo / Delirium: Criterios Cardinales y Fluctuación Diurna',
      'Síndrome Catatónico: Estupor, Flexibilidad Cérea, Negativismo y Agitación',
      'Síndromes Afectivos: Tríada Depresiva vs. Constelación Maníaca Expansiva',
      'Síndrome Esquizofrénico: Trastorno Formal + Schneiderianos + Afecto Aplanado',
      'Síndrome Paranoide: Delirios Sistematizados con Función Cognitiva Preservada',
      'Síndrome Amnésico de Korsakoff (Amnesia Anterógrada + Confabulación)',
      'Síndrome Demencial: Deterioro Cortical Global y Pérdida Funcional',
      'Citas textuales verificadas en Ricardo Capponi (Cap. IV, Págs. 201-227)'
    ]
  },
  {
    id: 'evaluacion-grandes-sindromes',
    title: 'Protocolo de diagnóstico sindromático y jerarquización nosológica',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-SIN-GRA-02',
    icon: '📋',
    author: 'Protocolo de Integración Sindromática • Capponi & CIE/DSM',
    badge: 'Examen Mental • Algoritmo de Decisión Diagnóstica',
    areas: ['EVALUACIÓN CLÍNICA', 'SÍNDROMES CLÍNICOS', 'SEMIOLOGÍA', 'EXAMEN MENTAL'],
    academicAffiliation: 'Jerarquización Sindromática (Capponi Págs. 201-227)',
    summary: 'Protocolo estructurado de examen clínico para categorizar el cuadro del paciente en uno de los 8 grandes síndromes psicopatológicos, aplicar criterios de jerarquía excluyente (orgánico > psicótico > afectivo > neurótico) y guiar la toma de decisiones clínicas de urgencia.',
    topics: [
      'Paso 1: Despistaje Urgente de Síndrome Confusional / Causa Orgánica Cerebral',
      'Paso 2: Evaluación del Eje Motor: Pesquisa de Signos Catatónicos y Estupor',
      'Paso 3: Discriminación entre Síndrome Afectivo (Depresivo/Maníaco) y Psicótico',
      'Paso 4: Análisis del Pensamiento: Síndrome Esquizofrénico vs. Síndrome Paranoide',
      'Paso 5: Jerarquización Diagnóstica Final y Protocolo de Intervención Rápida',
      'Árbol de Decisión Sindromática y Algoritmo de Diagnóstico Diferencial'
    ]
  },

  // =========================================================================
  // 8. CONDUCTAS BIOLÓGICAS BÁSICAS: CONDUCTA ALIMENTARIA (TCA)
  // =========================================================================
  {
    id: 'conducta-alimentaria',
    title: 'Psicopatología de la conducta alimentaria: anorexia, bulimia y atracones',
    category: 'sindromes',
    categoryLabel: 'Definición Semiológica',
    isClinicalEntity: true,
    code: 'SEM-CON-ALI-01',
    icon: '🍽️',
    author: 'Semiología de las Conductas Básicas • Capponi & Belloch',
    badge: 'Conductas Básicas • Imagen Corporal, Restricción & Purgas',
    areas: ['SÍNDROMES CLÍNICOS', 'PSICOPATOLOGÍA', 'SEMIOLOGÍA', 'CONDUCTAS BÁSICAS'],
    academicAffiliation: 'Ricardo Capponi (Págs. 118-125) • Manual Belloch (Vol. 1, Cap. 15, Págs. 403-422)',
    summary: 'Definición: Alteraciones graves y persistentes en la ingesta, apetito, patrones alimentarios y control del peso, acompañadas de distorsión perceptiva de la imagen corporal y miedo patológico a engordar (Capponi, 1987; Perpiñá en Belloch, 2008).\n\nPrincipales entidades semiológicas:\n1. Anorexia Nerviosa: Pérdida voluntaria y deliberada de peso inducida y mantenida por el paciente. Triada psicopatológica clásica: restricción alimentaria severa, fobia intensa e irracional al sobrepeso (peso diana patológicamente bajo) y distorsión cognitiva/perceptiva del esquema corporal (autometamorfopsia). Subtipos: Restrictivo y Purgativo/Compulsivo.\n2. Bulimia Nerviosa: Episodios recurrentes de atracones compulsivos (consumo de cantidades masivas de alimento con sensación subjetiva de pérdida absoluta de control), seguidos de conductas compensatorias inapropiadas para evitar ganar peso (vómito autoinducido, abuso de laxantes, diuréticos, enemas, ayunos estrictos o ejercicio físico extenuante). La autoevaluación está indebidamente influida por la figura y peso.\n3. Trastorno por Atracón (Binge Eating Disorder): Atracones periódicos intensos sin recurrir a conductas compensatorias purgativas regulares, cursando con marcado malestar, culpa, disgusto consigo mismo y obesidad.',
    topics: [
      'Semiología de la Ingesta y el Apetito según Ricardo Capponi (Págs. 118-125)',
      'Anorexia Nerviosa: Miedo Intenso al Sobrepeso, Restricción y Alteración Corporal',
      'Bulimia Nerviosa: El Ciclo Atracón-Culpa-Conducta Compensatoria Inapropiada',
      'Trastorno por Atracón: Criterios Diagnósticos y Falta de Compensación Purgativa',
      'Distorsión Perceptiva del Esquema Corporal: Psicofísica y Evaluación Experimental',
      'Complicaciones Médicas Graves: Hidroelectrolíticas, Cardíacas y Endocrinológicas',
      'Criterios de Hospitalización Inmediata y Rescate Nutricional'
    ]
  },
  {
    id: 'evaluacion-conducta-alimentaria',
    title: 'Evaluación semiológica de los trastornos de la conducta alimentaria (TCA)',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-CON-ALI-02',
    icon: '📋',
    author: 'Protocolo Semiográfico • Pesquisa Nutricional, Purgas & Imagen Corporal',
    badge: 'Examen Mental • Cribado Clínico EAT / SCOFF & Riesgo Vital',
    areas: ['EVALUACIÓN CLÍNICA', 'SÍNDROMES CLÍNICOS', 'SEMIOLOGÍA', 'CONDUCTAS BÁSICAS'],
    academicAffiliation: 'Exploración de la Ingesta (Belloch Cap. 15 & Capponi Págs. 118-125)',
    summary: 'Protocolo estructurado de entrevista para pesquisar conductas alimentarias restrictivas, investigar atracones objetivos, indagar métodos de purga ocultos, evaluar la distorsión del esquema corporal y calcular el Índice de Masa Corporal (IMC) junto con signos físicos de alarma vital.',
    topics: [
      'Paso 1: Medición de Parámetros Antropométricos y Cálculo de IMC (Índice de Quetelet)',
      'Paso 2: Exploración Detallada del Patrón de Ingesta Diaria y Alimentos Prohibidos',
      'Paso 3: Detección de Atracones: Frecuencia, Velocidad y Pérdida de Control',
      'Paso 4: Pesquisa de Conductas Compensatorias (Signo de Russell, Vómito, Laxantes)',
      'Paso 5: Evaluación de la Imagen Corporal y Sobreestimación Perceptiva',
      'Cuestionario SCOFF Integrado y Criterios de Riesgo Médico Inminente'
    ]
  },

  // =========================================================================
  // 9. CONDUCTAS BIOLÓGICAS: CONTROL DE IMPULSOS Y ADICCIONES COMPORTAMENTALES
  // =========================================================================
  {
    id: 'control-impulsos',
    title: 'Psicopatología del control de los impulsos y juego patológico',
    category: 'sindromes',
    categoryLabel: 'Definición Semiológica',
    isClinicalEntity: true,
    code: 'SEM-CON-IMP-01',
    icon: '🎰',
    author: 'Psicopatología de la Conación e Impulsos • Capponi & Belloch',
    badge: 'Conación & Impulsos • Urgencia Compulsiva & Descontrol',
    areas: ['SÍNDROMES CLÍNICOS', 'PSICOPATOLOGÍA', 'SEMIOLOGÍA', 'CONDUCTAS BÁSICAS'],
    academicAffiliation: 'Ricardo Capponi (Pág. 128) • Manual Belloch (Vol. 1, Cap. 16, Págs. 423-448)',
    summary: 'Definición: Fracaso reiterado e incontrolable en resistir un impulso, pulsión, deseo imperioso o tentación de ejecutar un acto que es perjudicial para el propio individuo o para los demás, mediado por un ciclo afectivo de tensión creciente previa, placer/alivio durante el acto y posterior culpa o remordimiento (Belloch, 2008).\n\nEntidades principales:\n1. Juego Patológico (Ludopatía): Conducta de juego desadaptativa, recurrente y persistente que altera el funcionamiento personal, familiar o profesional. Fases evolutivas: Ganancias, Pérdidas (chasing / caza de las pérdidas) y Desesperación. Es el prototipo de las adicciones comportamentales sin sustancia.\n2. Trastorno Explosivo Intermitente: Episodios aislados y repentinos de falta de control de impulsos agresivos que dan lugar a actos de violencia o destrucción de propiedad, desproporcionados a cualquier provocación.\n3. Cleptomanía: Fracaso recurrente en resistir el impulso de hurtar objetos que no son necesarios para uso personal ni por su valor monetario.\n4. Tricotilomanía: Arrancamiento recurrente del propio cabello que da lugar a pérdidas perceptibles, precedido de tensión y seguido de gratificación o alivio.\n5. Compra compulsiva y adicciones a nuevas tecnologías: Pérdida del control inhibitorio frontal con consecuencias socioeconómicas severas.',
    topics: [
      'Ciclo Semiológico del Impulso: Tensión Previa → Alivio Intra-Acto → Culpa Posterior',
      'Juego Patológico / Ludopatía: Modelos Cognitivos de Robert y Botella en Belloch',
      'Las Tres Fases del Jugador Patológico: Ganancias, Caza de Pérdidas y Desesperación',
      'Sesgos Cognitivos en el Juego: Ilusión de Control, Falacia del Jugador y Casualidad',
      'Cleptomanía, Tricotilomanía y Trastorno Explosivo Intermitente',
      'Neurobiología del Sistema de Recompensa: Dopamina Mesolímbica y Córtex Prefrontal',
      'Diagnóstico Diferencial: Manía Bipolar, Trastorno de Personalidad Antisocial y TOC'
    ]
  },
  {
    id: 'evaluacion-control-impulsos',
    title: 'Evaluación semiológica del control de impulsos y ludopatía',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-CON-IMP-02',
    icon: '📋',
    author: 'Protocolo Semiográfico • Cribado NODS, Tensión y Consecuencias',
    badge: 'Examen Mental • Exploración de la Urgencia Compulsiva',
    areas: ['EVALUACIÓN CLÍNICA', 'SÍNDROMES CLÍNICOS', 'SEMIOLOGÍA', 'CONDUCTAS BÁSICAS'],
    academicAffiliation: 'Exploración del Impulso (Belloch Cap. 16 & Capponi Pág. 128)',
    summary: 'Protocolo clínico estructurado para cuantificar la gravedad de la conducta impulsiva, pesquisar el fenómeno de persecución de pérdidas («chasing»), evaluar mentiras y ocultamiento a familiares, y medir el impacto financiero y legal derivado del descontrol con el cribado NODS y criterios DSM.',
    topics: [
      'Paso 1: Medición de la Frecuencia, Tiempo Invertido y Cantidad de Dinero Comprometido',
      'Paso 2: Pesquisa del Fenómeno de "Caza de las Pérdidas" (Chasing)',
      'Paso 3: Evaluación de la Irritabilidad o Inquietud al Intentar Detener la Conducta (Abstinencia)',
      'Paso 4: Exploración de Engaños, Fraudes, Ruptura Familiar y Actos Ilícitos',
      'Paso 5: Despistaje de Episodios Maníacos Subyacentes como Causa Primaria',
      'Escala de Cribado Rápido de Juego Patológico (NODS) y Plan de Bloqueo de Acceso'
    ]
  },

  // =========================================================================
  // 10. EVALUACIONES PSICOMÉTRICAS Y NEUROCOGNITIVAS ESPECÍFICAS
  // =========================================================================
  {
    id: 'evaluacion-memoria-inmediata-trabajo',
    title: 'Evaluación de la memoria inmediata y operativa (Span de Trabajo)',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-MEM-INM-01',
    icon: '🧠',
    author: 'Protocolo Neuropsicológico • Bucle Fonológico & Ejecutivo Central',
    badge: 'Instrumento del Vivenciar • Retención Inmediata & Manipulación',
    areas: ['INSTRUMENTOS DEL VIVENCIAR', 'EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA'],
    academicAffiliation: 'Modelo de Baddeley (Belloch Cap. 7, Págs. 177-195) • Ricardo Capponi (Págs. 149-154)',
    summary: 'Protocolo neuropsicológico estandarizado para evaluar la memoria inmediata y la memoria de trabajo operativa (working memory) mediante la prueba de span de dígitos directos e inversos y secuencias de memoria operativa, permitiendo diferenciar fallas atencionales primarias de déficits amnésicos estructurales.',
    topics: [
      'Diferenciación Conceptual: Memoria Inmediata (Span) vs. Memoria de Trabajo (Operativa)',
      'Administración Estandarizada de Dígitos Directos (Capacidad Fonológica Normal: 7 ± 2)',
      'Administración Estandarizada de Dígitos Inversos (Control Ejecutivo Central: Normal ≥ 4-5)',
      'Interpretación de Asimetrías Directos/Inversos: Alerta vs. Función Ejecutiva Frontal',
      'Baremo de Puntuación por Grupos de Edad y Pautas de Registro'
    ]
  },
  {
    id: 'evaluacion-memoria-largo-plazo',
    title: 'Evaluación de memoria a largo plazo y evocación diferida',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-MEM-LAR-01',
    icon: '📚',
    author: 'Protocolo Semiográfico • Consolidación, Evocación Libre y Claves',
    badge: 'Instrumento del Vivenciar • Consolidación & Amnesia de Fijación',
    areas: ['INSTRUMENTOS DEL VIVENCIAR', 'EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA'],
    academicAffiliation: 'Semiología de la Memoria (Capponi Págs. 149-154 & APIR Págs. 38-41)',
    summary: 'Protocolo semiográfico estructurado para examinar la capacidad de fijación y consolidación hipocámpica a largo plazo: registro de tres palabras, interferencia cognitiva de 10-20 minutos, evocación libre espontánea, facilitación por claves semánticas y prueba de reconocimiento de opciones múltiples.',
    topics: [
      'Paso 1: Registro y Fijación de 3 o 5 Palabras No Relacionadas',
      'Paso 2: Tarea de Distracción Intermedia durante 10 a 20 Minutos',
      'Paso 3: Evocación Libre Espontánea (Recuerdo Libre)',
      'Paso 4: Facilitación con Claves de Categoría Semántica',
      'Paso 5: Prueba de Reconocimiento entre Opciones Múltiples',
      'Diferenciación Clínica: Falla de Recuperación Subcortical vs. Falla Hipocámpica de Almacenamiento (Alzheimer)'
    ]
  },
  {
    id: 'evaluacion-conciencia-glasgow',
    title: 'Escala de coma de Glasgow (GCS): nivel de conciencia cuantitativo',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-CON-GLA-01',
    icon: '👁️',
    author: 'Teasdale & Jennett (1974) • Monitorización del Nivel de Conciencia',
    badge: 'Instrumento del Vivenciar • Cuantificación de Alerta & Coma',
    areas: ['INSTRUMENTOS DEL VIVENCIAR', 'EVALUACIÓN CLÍNICA', 'SEMIOLOGÍA', 'URGENCIAS CLÍNICAS'],
    academicAffiliation: 'Escala Universal GCS • Semiología de la Conciencia (Capponi Págs. 146-148 & APIR Pág. 21)',
    summary: 'Escala clínica universalmente estandarizada para evaluar y monitorizar el nivel cuantitativo de alerta y conciencia a través de tres respuestas independientes: apertura ocular (1 a 4 puntos), respuesta verbal (1 a 5 puntos) y respuesta motora (1 a 6 puntos), totalizando entre 3 y 15 puntos.',
    topics: [
      'Subescala Ocular (1 a 4): Espontánea, a la Orden Verbal, al Estímulo Doloroso, Sin Respuesta',
      'Subescala Verbal (1 a 5): Orientado, Confuso, Palabras Inapropiadas, Sonidos Incomprensibles, Ninguna',
      'Subescala Motora (1 a 6): Obedece Órdenes, Localiza Dolor, Retirada Flexora, Flexión Anormal (Decorticación), Extensión (Descerebración), Ninguna',
      'Puntuación Total (3 a 15) y Clasificación de Gravedad: Leve (13-15), Moderado (9-12), Grave (≤ 8 / Intubación)',
      'Factores de Confusión: Sedación, Intubación Endotraqueal, Hipoacusia y Barrera Idiomática'
    ]
  },
  {
    id: 'evaluacion-conciencia-delirium-cam',
    title: 'Evaluación cualitativa de la conciencia y Delirium (Algoritmo CAM)',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-CON-CAM-01',
    icon: '⚡',
    author: 'Confusion Assessment Method (CAM - Inouye et al., 1990)',
    badge: 'Instrumento del Vivenciar • Detección de Síndrome Confusional Agudo',
    areas: ['INSTRUMENTOS DEL VIVENCIAR', 'EVALUACIÓN CLÍNICA', 'SÍNDROMES CLÍNICOS', 'SEMIOLOGÍA'],
    academicAffiliation: 'Confusion Assessment Method (CAM) • Ricardo Capponi (Pág. 204) • Belloch & APIR',
    summary: 'Algoritmo clínico validado de detección rápida del Síndrome Confusional Agudo (Delirium) basado en 4 características cardinales: 1. Comienzo agudo y curso fluctuante, 2. Desatención / inatención, 3. Pensamiento desorganizado y 4. Alteración del nivel de conciencia. Diagnóstico positivo con criterios 1 y 2, más el 3 o el 4.',
    topics: [
      'Criterio 1: Comienzo Agudo y Curso Fluctuante (Interrogatorio a Familiar o Enfermería)',
      'Criterio 2: Desatención (Dificultad para Mantener y Dirigir el Foco Atencional)',
      'Criterio 3: Pensamiento Desorganizado (Discurso Ilógico, Fragmentado o Impreciso)',
      'Criterio 4: Alteración del Nivel de Conciencia (Hiperalerta, Letargo, Estupor)',
      'Fórmula Diagnóstica del CAM: Presencia Obligatoria de 1 y 2 + Al menos 3 ó 4',
      'Diferenciación Urgente: Delirium (Reversible y Médico) vs. Demencia Primaria vs. Psicosis Funcional'
    ]
  },
  {
    id: 'evaluacion-afectividad-animo',
    title: 'Evaluación del humor, estado de ánimo y modulación afectiva',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-AFE-ANI-01',
    icon: '🎭',
    author: 'Semiografía Afectiva • Ricardo Capponi (Págs. 80-100) & APIR',
    badge: 'Elemento del Vivenciar • Humor Basal, Reactividad & Expresión',
    areas: ['ELEMENTOS DEL VIVENCIAR', 'EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA'],
    academicAffiliation: 'Psicopatología de la Afectividad (Capponi Págs. 80-100 & APIR Págs. 59-60)',
    summary: 'Protocolo semiográfico completo para explorar el estado de ánimo de fondo (humor básico o basal), la reactividad y modulación emocional ante estímulos, el rango de expresión afectiva, pesquisando alexitimia, aplanamiento, embotamiento, paratimia (incongruencia afectiva) y labilidad emocional.',
    topics: [
      'Paso 1: Exploración del Humor Básico (Eutimia, Depresión / Tristeza Vital, Manía / Euforia, Disforia)',
      'Paso 2: Evaluación de la Modulación Afectiva y Capacidad de Resonancia Emocional',
      'Paso 3: Identificación de Aplanamiento Emocional vs. Embotamiento Afectivo vs. Depresión',
      'Paso 4: Pesquisa de Paratimia o Discordancia Afectiva (Risa Inmotivada / Esquizofrenia)',
      'Paso 5: Detección de Labilidad e Incontinencia Emocional (Pseudobulbar o Límite)',
      'Registro Semiográfico de Síntomas Somáticos Afectivos: Astenia, Anhedonia y Pérdida de Peso'
    ]
  },
  {
    id: 'evaluacion-riesgo-suicida',
    title: 'Evaluación multidimensional del riesgo suicida (C-SSRS y Factores Clínicos)',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-AFE-SUI-01',
    icon: '🛡️',
    author: 'Columbia-Suicide Severity Rating Scale (C-SSRS) & Protocolo PsiOS',
    badge: 'Urgencia Clínica • Ideación, Planificación, Letalidad & Seguridad',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'URGENCIAS CLÍNICAS', 'ELEMENTOS DEL VIVENCIAR'],
    academicAffiliation: 'Escala C-SSRS (Posner et al.) • Guías Clínicas de Suicidio • APIR & Capponi',
    summary: 'Protocolo estructurado de triaje y valoración multidimensional del riesgo de suicidio: gradación de la ideación suicida (pasiva de muerte vs. activa con método, plan e intención), evaluación de la impulsividad y desesperanza de Beck, inventario de factores protectores y algoritmo de decisión inmediata de seguridad y derivación hospitalaria.',
    topics: [
      'Nivel 1: Deseo Pasivo de Estar Muerto ("Preferiría no despertar")',
      'Nivel 2: Ideación Suicida Activa Inespecífica sin Plan ni Método Definido',
      'Nivel 3: Ideación Activa con Método pero sin Plan Concreto ni Intención Inmediata',
      'Nivel 4: Ideación con Intención Manifiesta pero sin Plan Específico Cerrado',
      'Nivel 5: Ideación Suicida Activa con Plan Estructurado, Letalidad y Acceso al Método',
      'Inventario de Factores Precipitantes (Crisis, Pérdidas) y Protectores (Familia, Creencias)',
      'Algoritmo de Triaje: Riesgo Bajo (Ambulatorio) vs. Medio (Acompañamiento) vs. Alto (Urgencias)'
    ]
  },
  {
    id: 'evaluacion-ansiedad-panico',
    title: 'Evaluación semiológica de la ansiedad, angustia y crisis de pánico',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-AFE-PAN-01',
    icon: '💓',
    author: 'Semiología de la Angustia • Capponi, Belloch & Criterios DSM/CIE',
    badge: 'Elemento del Vivenciar • Síntomas Autonómicos & Cogniciones Catastróficas',
    areas: ['ELEMENTOS DEL VIVENCIAR', 'EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA'],
    academicAffiliation: 'Psicopatología de la Angustia (Capponi Págs. 80-100) • Manual Belloch (Vol. 2, Cap. 2)',
    summary: 'Protocolo semiográfico para examinar la ansiedad anticipatoria, la angustia somatizada y las crisis de angustia (ataques de pánico): registro de los 13 síntomas autonómicos cardinales (taquicardia, opresión torácica, sudoración, disnea), cogniciones catastróficas (miedo a morir, volverse loco o perder el control) y despersonalización comórbida.',
    topics: [
      'Paso 1: Delimitación Temporal del Episodio: Inicio Brusco y Pico Máximo en < 10 Minutos',
      'Paso 2: Inventario de los 13 Síntomas Cardíacos, Respiratorios y Neurovegetativos',
      'Paso 3: Identificación de Cogniciones Catastróficas Específicas de Pánico',
      'Paso 4: Pesquisa de Vivencias de Despersonalización y Desrealización Asociadas',
      'Paso 5: Valoración de la Ansiedad Anticipatoria y Conductas de Evitación Agorafóbica',
      'Diferenciación Diagnóstica: Crisis de Pánico vs. Feocromocitoma vs. Angina Coronaria'
    ]
  },
  {
    id: 'evaluacion-deterioro-cognitivo-minimental',
    title: 'Examen cognoscitivo Mini-Mental State Examination (MMSE de Folstein)',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-INT-MMS-01',
    icon: '📊',
    author: 'Marshal F. Folstein et al. (1975) • Puntuación de 30 Puntos',
    badge: 'Instrumento del Vivenciar • Cribado Cognitivo Rápido y Estandarizado',
    areas: ['INSTRUMENTOS DEL VIVENCIAR', 'EVALUACIÓN CLÍNICA', 'PSICOMETRÍA', 'NEUROPSICOLOGÍA'],
    academicAffiliation: 'Folstein MMSE • Ricardo Capponi (Inteligencia, Págs. 131-145) • APIR',
    summary: 'Instrumento de cribado neurocognitivo de 30 puntos estructurado en 5 dominios: Orientación témporo-espacial (10 pts), Fijación / Memoria inmediata (3 pts), Atención y Cálculo (5 pts), Memoria diferida a corto plazo (3 pts), Lenguaje y Visoconstrucción (9 pts), con puntos de corte ajustados según escolaridad.',
    topics: [
      '1. Orientación Temporal (Año, Estación, Mes, Fecha, Día) y Espacial (Lugar, Piso, Ciudad, Región, País) [10 pts]',
      '2. Fijación: Repetición Inmediata de Tres Palabras (Ej. Papel, Caballo, Manzana) [3 pts]',
      '3. Atención y Cálculo: Serie Restar de 7 en 7 o Deletreo Inverso de M-U-N-D-O [5 pts]',
      '4. Memoria Diferida: Recuerdo Libre de las Tres Palabras Previamente Fijadas [3 pts]',
      '5. Lenguaje y Visoconstrucción: Denominación, Repetición, Orden Triple, Lectura, Escritura y Copia de Pentágonos [9 pts]',
      'Puntos de Corte Clínico: Normal (27-30), Deterioro Cognitivo Leve (24-26), Demencia Moderada (10-18), Severa (< 10)'
    ]
  },
  {
    id: 'evaluacion-sintomas-negativos',
    title: 'Evaluación semiológica de síntomas negativos (SANS / Defecto Esquizofrénico)',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-PSI-NEG-01',
    icon: '📉',
    author: 'Scale for the Assessment of Negative Symptoms (SANS - Nancy Andreasen)',
    badge: 'Examen Mental • Defecto Esquizofrénico & Avolición',
    areas: ['EVALUACIÓN CLÍNICA', 'SÍNDROMES CLÍNICOS', 'EXAMEN MENTAL', 'SEMIOLOGÍA'],
    academicAffiliation: 'SANS (Andreasen) • Síndrome Esquizofrénico (Capponi Págs. 210-213) • APIR Pág. 46',
    summary: 'Protocolo semiográfico estructurado para examinar las cinco dimensiones cardinales del síndrome deficitario esquizofrénico: Aplanamiento afectivo, Alogia (pobreza del lenguaje), Abulia/Apatía, Anhedonia/Asociabilidad y Atención deteriorada.',
    topics: [
      'Dimensión 1: Aplanamiento Afectivo (Inexpresividad Facial, Escaso Contacto Ocular, Ausencia de Inflexión Vocal)',
      'Dimensión 2: Alogia (Pobreza del Habla, Pobreza del Contenido del Pensamiento y Bloqueo)',
      'Dimensión 3: Abulia y Apatía (Falta de Energía, Abandono del Aseo Personal y Persistencia de Tareas)',
      'Dimensión 4: Anhedonia y Asociabilidad (Incapacidad de Experimentar Placer en Amistad, Pareja o Pasatiempos)',
      'Dimensión 5: Atención Deteriorada (Inatención Social y Desconexión)',
      'Diferenciación Clínica Crucial: Síntomas Negativos Primarios vs. Depresión Secundaria vs. Efectos Extrapiramidales'
    ]
  },
  {
    id: 'evaluacion-sintomas-obsesivos-ybocs',
    title: 'Evaluación semiológica de obsesiones y compulsiones (Escala Y-BOCS)',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-OBS-YBO-01',
    icon: '🔄',
    author: 'Yale-Brown Obsessive Compulsive Scale (Y-BOCS - Goodman et al.)',
    badge: 'Examen Mental • Cuantificación de Severidad del TOC',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'ELEMENTOS DEL VIVENCIAR'],
    academicAffiliation: 'Escala Y-BOCS • Semiología de las Obsesiones (Capponi Pág. 72 & APIR Pág. 47)',
    summary: 'Protocolo clínico estructurado de 10 ítems para cuantificar la severidad objetiva del Trastorno Obsesivo-Compulsivo: tiempo ocupado por obsesiones y compulsiones, grado de interferencia funcional, angustia subjetiva generada, resistencia activa del paciente y grado de control sobre los pensamientos y actos rituales (0 a 40 puntos).',
    topics: [
      'Diferenciación Estricta: Idea Obsesiva (Egodistónica) vs. Idea Delirante (Egosintónica) vs. Idea Sobrevalorada',
      'Ítems 1-5: Severidad de las Obsesiones (Tiempo Diario, Interferencia, Angustia, Resistencia y Control)',
      'Ítems 6-10: Severidad de las Compulsiones y Rituales (Tiempo, Interferencia, Malestar, Resistencia y Control)',
      'Tipología de Obsesiones: Contaminación, Duda Patológica, Simetría/Orden, Agresión y Religiosas/Morales',
      'Tipología de Compulsiones: Limpieza/Lavado, Comprobación, Orden, Repetición y Rituales Mentales Ocultos',
      'Interpretación de Puntuación: Subclínico (0-7), Leve (8-15), Moderado (16-23), Grave (24-31), Extremo (32-40)'
    ]
  },
  {
    id: 'evaluacion-consumo-alcohol-cage',
    title: 'Cuestionario de tamizaje de consumo problemático de alcohol (CAGE)',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-ALC-CAG-01',
    icon: '🍷',
    author: 'Cuestionario CAGE (Ewing, 1984) • 4 Preguntas de Cribado Rápido',
    badge: 'Conductas Básicas • Tamizaje Clínico de Dependencia',
    areas: ['CONDUCTAS BÁSICAS', 'EVALUACIÓN CLÍNICA', 'SEMIOLOGÍA', 'SÍNDROMES CLÍNICOS'],
    academicAffiliation: 'Cuestionario CAGE (Ewing) • Alcoholismo en Belloch (Vol. 1, Cap. 13, Págs. 355-374)',
    summary: 'Cuestionario estandarizado y universal de cribado de cuatro preguntas directas para pesquisar problemas derivados del consumo de alcohol: C (Cut down - Necesidad de reducir el consumo), A (Annoyed - Molestia ante críticas ajenas), G (Guilty - Sentimiento de culpa) y E (Eye-opener - Necesidad de beber a primera hora de la mañana para aliviar el temblor o resaca).',
    topics: [
      'Pregunta 1: C (Cut down) - ¿Ha sentido alguna vez que debería beber menos o reducir su consumo?',
      'Pregunta 2: A (Annoyed) - ¿Le ha molestado alguna vez que la gente critique o comente su forma de beber?',
      'Pregunta 3: G (Guilty) - ¿Se ha sentido alguna vez mal o culpable por sus hábitos con la bebida?',
      'Pregunta 4: E (Eye-opener) - ¿Ha necesitado alguna vez beber un trago a primera hora de la mañana para calmar los nervios o la resaca?',
      'Interpretación Clínica: 1 Respuesta Positiva (Consumo de Riesgo), ≥ 2 Respuestas Positivas (Altísima Probabilidad de Dependencia)',
      'Pesquisa de Complicaciones Neuropsiquiátricas: Delirium Tremens, Encefalopatía de Wernicke y Síndrome de Korsakoff'
    ]
  },
  {
    id: 'evaluacion-signos-extrapiramidales',
    title: 'Evaluación semiológica de signos extrapiramidales inducidos (SAS / BARS)',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-PSI-EXT-01',
    icon: '⚙️',
    author: 'Escalas Simpson-Angus (SAS) y Barnes Akathisia (BARS)',
    badge: 'Psicomotricidad • Síntomas Motores por Antipsicóticos',
    areas: ['EVALUACIÓN CLÍNICA', 'PSICOMOTRICIDAD', 'SEMIOLOGÍA', 'FARMACOVIGILANCIA'],
    academicAffiliation: 'Trastornos Psicomotores (Belloch Cap. 17, Págs. 449-470) • Ricardo Capponi (Pág. 101)',
    summary: 'Protocolo de exploración neurológica y psicomotora para pesquisar y graduar efectos adversos extrapiramidales inducidos por fármacos antipsicóticos: acatisia (inquietud motora subjetiva y objetiva), parkinsonismo medicamentoso (rigidez en rueda dentada, temblor de reposo, bradicinesia), distonía aguda y discinesia tardía.',
    topics: [
      '1. Acatisia (Barnes Scale): Inquietud Motora Subjetiva Intolerable con Necesidad Continua de Mover las Piernas',
      '2. Parkinsonismo Inducido: Rigidez en Rueda Dentada (Muñeca/Codo), Bradicinesia y Facies Inexpresiva',
      '3. Temblor de Reposo y Pérdida del Braceo Espontáneo al Caminar',
      '4. Distonía Aguda: Contracciones Musculares Espasmódicas Súbitas (Tortícolis, Crisis Oculógiras)',
      '5. Discinesia Tardía: Movimientos Involuntarios Coreoatetósicos Orofaciales (Trismus, Chupeteo y Lengua)',
      'Diagnóstico Diferencial: Acatisia vs. Ansiedad Psíquica vs. Agitación Catatónica'
    ]
  },
  {
    id: 'evaluacion-examen-estado-mental-global',
    title: 'Examen del Estado Mental Global (EEMG - Pauta Semiográfica Completa)',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-EXA-MEN-01',
    icon: '🩺',
    author: 'Semiografía Psiquiátrica Integral • Ricardo Capponi & APIR',
    badge: 'Examen Mental Exhaustivo • Exploración de las 8 Esferas Clínicas',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'PSICOPATOLOGÍA'],
    academicAffiliation: 'Ricardo Capponi (Semiología del Vivenciar) • APIR (Psicopatología General)',
    summary: 'Pauta exhaustiva y estructurada de exploración clínica semiográfica que integra las 8 esferas cardinales del examen mental en psiquiatría y psicología clínica: 1. Porte, Actitud y Apariencia, 2. Conciencia y Nivel de Alerta, 3. Atención y Orientación, 4. Sensopercepción, 5. Pensamiento (Curso y Contenido), 6. Afectividad, 7. Psicomotricidad y Conación, 8. Juicio de Realidad e Introspección (Insight).',
    topics: [
      'Esfera 1: Porte, Apariencia, Contacto Visual y Actitud ante el Examinador',
      'Esfera 2: Conciencia (Lucidez Cuantitativa y Cualitativa)',
      'Esfera 3: Atención y Orientación (Alopsíquica Temporal/Espacial y Autopsíquica)',
      'Esfera 4: Sensopercepción (Pesquisa de Distorsiones, Ilusiones y Alucinaciones)',
      'Esfera 5: Pensamiento (Velocidad, Coherencia Asociativa, Ideas Delirantes y Obsesivas)',
      'Esfera 6: Afectividad (Humor Basal, Modulación, Reactividad y Riesgo Suicida)',
      'Esfera 7: Psicomotricidad (Marcha, Temblores, Catatonía, Inhibición o Agitación)',
      'Esfera 8: Juicio Crítico de Realidad y Grado de Conciencia de Enfermedad (Insight)',
      'Formato Estructurado de Informe Semiográfico Oficial para Ficha Clínica'
    ]
  },
  {
    id: 'evaluacion-fobias-ansiedad-social',
    title: 'Evaluación semiológica de fobias específicas y ansiedad social (LSAS)',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-FOB-SOC-01',
    icon: '👥',
    author: 'Liebowitz Social Anxiety Scale (LSAS) & Protocolo Fóbico',
    badge: 'Examen Mental • Miedo a la Evaluación Negativa & Evitación',
    areas: ['EVALUACIÓN CLÍNICA', 'EXAMEN MENTAL', 'SEMIOLOGÍA', 'ELEMENTOS DEL VIVENCIAR'],
    academicAffiliation: 'Escala LSAS (Liebowitz) • Trastornos Fóbicos en Belloch (Vol. 2) • APIR',
    summary: 'Protocolo clínico estructurado para discriminar y medir la intensidad del miedo irracional y la evitación en situaciones fóbicas: evaluación de la fobia específica (animal, ambiental, sangre-inyecciones-daño con respuesta bifásica vasovagal, situacional) y de la ansiedad social (temor persistente a la evaluación negativa, humillación, rubor, temblor y conductas de seguridad).',
    topics: [
      'Paso 1: Delimitación del Estímulo Fóbico Específico y Medición de la Ansiedad Evocada',
      'Paso 2: Pesquisa del Patrón Fóbico Sangre-Inyecciones-Daño (Respuesta Bifásica y Síncope)',
      'Paso 3: Evaluación de la Ansiedad Social: Miedo a la Humillación, Juicio y Ridículo',
      'Paso 4: Análisis de Conductas de Seguridad Sutiles y Evitación Activa (Escala LSAS)',
      'Paso 5: Discriminación Diagnóstica: Fobia Social vs. Personalidad Evitativa vs. Agorafobia',
      'Pauta Semiográfica y Baremo de Severidad Fóbica'
    ]
  },
  {
    id: 'evaluacion-mimica-expresion-facial',
    title: 'Evaluación semiológica de la mímica y expresión psicomotora',
    category: 'evaluacion',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-MIM-FAC-01',
    icon: '😐',
    author: 'Semiología de la Expresión • Ricardo Capponi (Págs. 101-115)',
    badge: 'Psicomotricidad • Facies, Mímica Emocional & Discordancia',
    areas: ['EVALUACIÓN CLÍNICA', 'PSICOMOTRICIDAD', 'SEMIOLOGÍA', 'EXAMEN MENTAL'],
    academicAffiliation: 'Psicopatología de la Expresión Facial (Capponi Págs. 101-115)',
    summary: 'Protocolo de observación clínica directa de la motilidad y expresividad facial: evaluación de la amimia o hipomimia (facies de máscara en Parkinson y depresión melancólica grave con signo de Veraguth), hipermimia (en manía y cuadros de agitación), paramimia y mímica discordante en esquizofrenia, ecomimia y tics.',
    topics: [
      'Observación 1: Tono Mímico en Reposo (Amimia, Facies Inexpresiva de Máscara y Signo Omega Melancólico)',
      'Observación 2: Reactividad Emocional y Flexibilidad de Expresión ante Preguntas',
      'Observación 3: Detección de Hipermimia Cuantitativa en Episodios Maníacos o Agitados',
      'Observación 4: Identificación de Paramimia y Risa Inmotivada / Mímica Discordante',
      'Observación 5: Pesquisa de Movimientos Involuntarios: Tics Motores, Blefaroespasmo y Fasciculaciones',
      'Registro Semiográfico Estandarizado de la Esfera Psicomotora Facial'
    ]
  },
  {
    id: 'evaluacion-apego-vinculo-infantil',
    title: 'Evaluación del apego y vínculo temprano (Situación del Extraño de Ainsworth)',
    category: 'infancia',
    categoryLabel: 'Protocolo de Examen Clínico',
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: 'EVA-APE-INF-01',
    icon: '👶',
    author: 'Mary Ainsworth & Mary Main • Procedimiento de la Situación del Extraño',
    badge: 'Desarrollo Infantil • Patrones de Apego & Regulación Afectiva',
    areas: ['DESARROLLO INFANTIL', 'EVALUACIÓN CLÍNICA', 'PSICOLOGÍA DEL DESARROLLO', 'NEURODESARROLLO'],
    academicAffiliation: 'Teoría del Apego (Bowlby & Ainsworth) • EEDP & Semiología del Vínculo Temprano',
    summary: 'Protocolo clínico observacional estandarizado para clasificar los patrones de apego en lactantes y niños pequeños (12 a 24 meses) mediante el análisis de las conductas de exploración, respuesta ante la separación de la figura de referencia y, fundamentalmente, la conducta de reencuentro (Apego Seguro Tipo B, Inseguro-Evitativo Tipo A, Inseguro-Ambivalente/Resistente Tipo C y Desorganizado Tipo D).',
    topics: [
      'Fundamento: La Conducta de Apego como Sistema Biológico de Búsqueda de Seguridad (Bowlby)',
      'Los 8 Episodios Estandarizados de la Situación del Extraño (Ainsworth)',
      'Patrón Seguro (Tipo B): Exploración Activa, Malestar en la Separación y Calma Inmediata en el Reencuentro',
      'Patrón Inseguro-Evitativo (Tipo A): Falsa Autonomía, Ignora a la Madre en el Reencuentro y Supresión Emocional',
      'Patrón Inseguro-Ambivalente/Resistente (Tipo C): Intensa Angustia, Búsqueda de Contacto Simultánea con Resistencia y Llanto Inconsolable',
      'Patrón Desorganizado/Desorientado (Tipo D - Mary Main): Movimientos Incompletos, Congelamiento (Freezing) y Miedo a la Figura de Apego',
      'Pauta Observacional de Signos de Alerta Temprana en la Díada Madre-Lactante'
    ]
  }
];

/* Helper para renderizar barra de quick-navigation pills */
function renderQuickNavPills(pills = []) {
  if (!pills || pills.length === 0) return '';
  return `
    <div class="orientation-nav-pills-bar">
      ${pills.map(p => `
        <button type="button" class="orientation-nav-pill-btn" data-target-sec="${p.id}">
          <span>${p.icon || '📌'}</span>
          <span>${p.label}</span>
        </button>
      `).join('')}
    </div>
  `;
}

/* Helper para renderizar banner de citas a libros */
function renderCitationsBanner(citations = []) {
  if (!citations || citations.length === 0) return '';
  return `
    <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
      <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
        📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
      </div>
      ${citations.map(c => `
        <button type="button" class="btn-book-citation-jump" data-book-id="${c.bookId}" data-page="${c.page}" title="Saltar directamente a la página ${c.page} en ${c.bookTitle}">
          <span>📖</span>
          <span><strong>${c.author}:</strong> ${c.title} (Pág. ${c.page}) →</span>
        </button>
      `).join('')}
    </div>
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
        <h2 class="orientation-main-title">Trastornos del curso y estructura formal del pensamiento</h2>
        <p class="orientation-authors-meta">Ricardo Capponi (Págs. 64-70) • Manual de Psicopatología Belloch (Vol. 1, Cap. 8, Págs. 205-224) • APIR (Págs. 44-46)</p>
      </div>

      <div class="pedagogical-division-banner">
        <div class="pedagogical-banner-text">
          💡 <strong>Subdivisión Pedagógica Esencial:</strong> El pensamiento se divide semiológicamente en dos esferas autónomas: su <strong>Curso y Estructura Formal</strong> (cómo se hilvanan las ideas, velocidad, ritmo y gramática) y su <strong>Contenido</strong> (las ideas delirantes y creencias erróneas).
        </div>
        <button type="button" class="pedagogical-link-btn" id="btn-goto-delirios-sub">
          <span>👁️ Ver Psicopatología de los Delirios</span>
          <span>→</span>
        </button>
      </div>

      ${renderQuickNavPills([
        { id: 'sec-curso-fundamentos', icon: '📖', label: '1. Fundamentos & Velocidad' },
        { id: 'sec-curso-estructura', icon: '🔀', label: '2. Continuidad & Forma' },
        { id: 'sec-curso-discursos', icon: '💬', label: '3. Discursos Clínicos Reales' },
        { id: 'sec-curso-citas', icon: '📚', label: '4. Citas a Manuales' }
      ])}

      <section class="orientation-block-card" id="sec-curso-fundamentos">
        <div class="orientation-section-badge">SECCIÓN 1</div>
        <h3 class="orientation-sec-title">1. Fundamentos Fenomenológicos y Trastornos de la Velocidad</h3>
        <p class="orientation-lead-p">
          El curso del pensamiento se refiere a la <strong>manera en que una persona formula, organiza y enlaza sus ideas</strong> a lo largo del tiempo para alcanzar una meta directriz comunicable <span class="citation-tag">(Capponi, s. f., p. 64)</span>. Se evalúa a través del lenguaje espontáneo y reactivo.
        </p>

        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">🚀</span>
              <div>
                <h4 class="dim-name">Taquipsiquia y Fuga de Ideas (Ideofugacidad)</h4>
                <span class="dim-badge">Aceleración Extrema</span>
              </div>
            </div>
            <p class="dim-desc">Aumento desbordante de la velocidad del pensamiento con latencia de respuesta nula. En la <strong>fuga de ideas</strong> (Bleuler, 1911; Capponi, p. 65), el flujo asociativo es tan rápido que el paciente se desvía continuamente ante cualquier estímulo ambiental nimio o por asociaciones fonéticas superficiales (asonancia y rima), perdiendo por completo la idea directriz original.</p>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">🐢</span>
              <div>
                <h4 class="dim-name">Bradipsiquia e Inhibición del Pensamiento</h4>
                <span class="dim-badge">Lentitud Patológica</span>
              </div>
            </div>
            <p class="dim-desc">Enlentecimiento evidente de la velocidad del pensar con latencia prolongada. En la <strong>inhibición melancólica</strong> (Capponi, p. 65), el paciente vive con angustioso sufrimiento subjetivo la sensación de impotencia mental: experimenta pesadez de plomo y un esfuerzo extenuante para articular un solo razonamiento.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card" id="sec-curso-estructura">
        <div class="orientation-section-badge">SECCIÓN 2</div>
        <h3 class="orientation-sec-title">2. Trastornos de la Continuidad y Estructura Asociativa</h3>
        <p class="orientation-p">
          Según la escala TLC de Nancy Andreasen (Belloch, Vol. 1, Cap. 8, p. 217), las alteraciones estructurales reflejan fallas en el control semántico y ejecutivo del lóbulo frontal y temporal superior:
        </p>

        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Detención Súbita</span>
            <h4 class="dim-name">Bloqueo o Interceptación del Pensamiento</h4>
            <p class="dim-desc">Detención brusca, inesperada e involuntaria de la marcha del pensamiento en mitad de una frase <span class="citation-tag">(Capponi, p. 68)</span>. El paciente se queda en blanco sin poder retomar el hilo conductor, vivenciándolo frecuentemente como robo o influencia.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Pérdida de la Sintaxis</span>
            <h4 class="dim-name">Disgregación vs. Incoherencia (Esquizofasia)</h4>
            <p class="dim-desc">En la <strong>disgregación</strong> (Capponi, p. 66) se pierde la idea central rectora aunque se preserva parcialmente la estructura gramatical entre frases inmediatas. En la <strong>incoherencia</strong>, la sintaxis misma queda destruida, generando una «ensalada de palabras» ininteligible.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Desvío de la Meta</span>
            <h4 class="dim-name">Descarrilamiento y Pensamiento Laxo (Derailment)</h4>
            <p class="dim-desc">Las ideas se deslizan de forma gradual e imperceptible hacia un tema remotamente relacionado o totalmente inconexo (asíndesis de Cameron), abandonando la meta sin que el paciente perciba la desconexión.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Rodeos Innecesarios</span>
            <h4 class="dim-name">Tangencialidad vs. Circunstancialidad (Prolijidad)</h4>
            <p class="dim-desc">En la <strong>tangencialidad</strong>, la respuesta toca lateralmente el tema pero nunca lo contesta directamente. En la <strong>circunstancialidad</strong>, el paciente sí llega finalmente a la respuesta, pero tras dar infinitos rodeos con detalles superfluos y minucias irrelevantes.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card" id="sec-curso-discursos">
        <div class="orientation-section-badge">SECCIÓN 3</div>
        <h3 class="orientation-sec-title">3. Ejemplos de Discurso Clínico Real de Pacientes</h3>
        
        <div class="clinical-speech-box">
          <strong>💬 Ejemplo 1: Fuga de Ideas (Paciente Maníaco agudo):</strong>
          <span class="clinical-speech-quote">«...Mire mi reloj doctor, es de oro fino, como el sol de mediodía, el sol quema la piel, hay que comprar bloqueador factor cien, cien son los años de soledad de García Márquez, ¡gran escritor de Colombia!, en Bogotá se toma café delicioso, el café negro despierta a las tropas, ¡vamos a la guerra por la paz mundial!...»</span>
          <p style="font-size: 0.8rem; color: var(--text-tertiary); margin-top: 0.4rem; margin-bottom: 0;">Análisis clínico: Taquipsiquia extrema con saltos asociativos por contigüidad y estímulos externos, sin meta fija.</p>
        </div>

        <div class="clinical-speech-box" style="margin-top: 0.9rem;">
          <strong>💬 Ejemplo 2: Descarrilamiento e Incoherencia (Paciente con Esquizofrenia hebefrénica):</strong>
          <span class="clinical-speech-quote">«...La casa tenía dos ventanas de hierro, pero el hierro pesa porque los pájaros vuelan sin brújula, entonces la geometría no alcanza para medir el aceite de los motores celestes... todo gira como una rueda de pan...»</span>
          <p style="font-size: 0.8rem; color: var(--text-tertiary); margin-top: 0.4rem; margin-bottom: 0;">Análisis clínico: Pérdida del enlace conceptual lógico entre oraciones contiguas (asíndesis grave).</p>
        </div>

        <div class="clinical-speech-box" style="margin-top: 0.9rem;">
          <strong>💬 Ejemplo 3: Bloqueo del Pensamiento:</strong>
          <span class="clinical-speech-quote">«...Estaba caminando hacia la estación para tomar el tren de las cinco y de pronto... [Silencio absoluto de 12 segundos, mirada perpleja]... ¿Qué me estaba preguntando? Se me cortó el pensamiento por completo, quedó una pantalla negra en mi cabeza...»</span>
        </div>
      </section>

      <section class="orientation-block-card" id="sec-curso-citas">
        <div class="orientation-section-badge">SECCIÓN 4</div>
        <h3 class="orientation-sec-title">4. Citas Verificadas en los Textos de Estudio</h3>
        <p class="orientation-p">
          Consulte las páginas exactas de las fuentes originales incorporadas en la biblioteca digital de PsiOS:
        </p>
        ${renderCitationsBanner([
          { bookId: 'capponi-psicopatologia', page: 64, author: 'Ricardo Capponi', title: 'Psicopatología y Semiología Psiquiátrica • Trastornos del Curso' },
          { bookId: 'capponi-psicopatologia', page: 68, author: 'Ricardo Capponi', title: 'Bloqueo, Disgregación e Incoherencia' },
          { bookId: 'belloch-psicopatologia-vol1', page: 205, author: 'Belloch, Sandín y Ramos', title: 'Cap. 8: Trastornos Formales del Pensamiento y Escala TLC' },
          { bookId: 'apir-psicopatologia', page: 44, author: 'Manual APIR', title: 'Tema 6: Trastornos Formales vs. Contenido del Pensamiento' }
        ])}
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta primary" id="btn-goto-curso-pensamiento-eval">
          <span class="cta-icon">📋</span>
          <div class="cta-texts">
            <strong class="cta-title">Abrir Protocolo de Evaluación del Curso del Pensamiento</strong>
            <span class="cta-sub">Guía paso a paso de latencia, débito verbal, direccionalidad y registro semiográfico</span>
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
        <h3 class="orientation-sec-title">Paso 1: Medición de la Latencia y Débito Verbal</h3>
        <p class="orientation-p">
          El clínico debe cronometrar de forma encubierta los segundos transcurridos entre la formulación de una pregunta abierta y el inicio de la respuesta verbal del paciente, así como la velocidad de emisión:
        </p>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Parámetro Clínico</th>
                <th>Valor Normal</th>
                <th>Hallazgo Patológico</th>
                <th>Significado Diagnóstico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Latencia de Respuesta</strong></td>
                <td>0.5 a 1.5 segundos</td>
                <td>&gt; 4 a 10 segundos</td>
                <td>Bradipsiquia, inhibición melancólica o estupor orgánico.</td>
              </tr>
              <tr>
                <td><strong>Débito Verbal (Palabras/min)</strong></td>
                <td>120 a 160 palabras/min</td>
                <td>&gt; 220 palabras/min (Presión)</td>
                <td>Taquipsiquia, logorrea irreprimible, episodio maníaco.</td>
              </tr>
              <tr>
                <td><strong>Detención Abrupta</strong></td>
                <td>Fluido sin cortes</td>
                <td>Pausa súbita de 5 a 20 s</td>
                <td>Bloqueo del pensamiento (esquizofrenia / epilepsia temporal).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PASO 2</div>
        <h3 class="orientation-sec-title">Paso 2: Preguntas de Sondeo de Direccionalidad Asociativa</h3>
        <p class="orientation-p">
          Realice preguntas abiertas complejas que requieran elaborar una respuesta secuencial con principio, desarrollo y conclusión:
        </p>
        <div class="clinical-speech-box" style="margin-bottom: 0.75rem;">
          <strong>🎯 Pregunta Disparadora 1:</strong>
          <span class="clinical-speech-quote">«Cuénteme con detalle qué actividades realizó desde que se levantó esta mañana hasta llegar a esta consulta.»</span>
          <p style="font-size: 0.8rem; color: var(--text-tertiary); margin-top: 0.35rem; margin-bottom: 0;">Observar si mantiene la cronología o se pierde en detalles superfluos (circunstancialidad) o si salta de tema sin meta (fuga/descarrilamiento).</p>
        </div>
        <div class="clinical-speech-box">
          <strong>🎯 Pregunta Disparadora 2:</strong>
          <span class="clinical-speech-quote">«¿Por qué cree usted que es necesario que los semáforos tengan tres colores diferentes?»</span>
          <p style="font-size: 0.8rem; color: var(--text-tertiary); margin-top: 0.35rem; margin-bottom: 0;">Permite examinar la lógica formal, ilogicidad, tangencialidad o perseveración temática.</p>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">REGISTRO CLÍNICO</div>
        <h3 class="orientation-sec-title">Rúbrica de Severidad del Trastorno del Curso</h3>
        <ul class="orientation-checklist">
          <li><strong>Grado 0 (Normal):</strong> Discurso fluido, coherente, con velocidad adecuada y meta clara.</li>
          <li><strong>Grado 1 (Leve):</strong> Circunstancialidad moderada o tangencialidad ocasional ante temas de alta carga emotiva.</li>
          <li><strong>Grado 2 (Moderado):</strong> Descarrilamientos frecuentes, latencia marcadamente prolongada o aceleración con pérdida recurrente de meta.</li>
          <li><strong>Grado 3 (Grave / Incomprensible):</strong> Incoherencia (ensalada de palabras), bloqueos reiterados o fuga de ideas incontrolable.</li>
        </ul>

        ${renderCitationsBanner([
          { bookId: 'belloch-psicopatologia-vol1', page: 217, author: 'Belloch et al.', title: 'Criterios de Evaluación Formal y Escala TLC de Andreasen' },
          { bookId: 'capponi-psicopatologia', page: 66, author: 'Ricardo Capponi', title: 'Semiografía del Curso del Pensamiento' }
        ])}
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta secondary" id="btn-bottom-back-curso-pensamiento-def">
          <span class="cta-icon">←</span>
          <div class="cta-texts">
            <strong class="cta-title">Volver a Fundamentos del Curso del Pensamiento</strong>
            <span class="cta-sub">Revisar taxonomía clínica, taquipsiquia, bradipsiquia y citas</span>
          </div>
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
          <span class="modal-type-pill">👁️ ELEMENTO DEL VIVENCIAR & JUICIO DE REALIDAD</span>
          <span class="modal-area-pill">🧬 ÁREA: PSICOPATOLOGÍA</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA</span>
          <span class="modal-area-pill">🔬 ÁREA: EXAMEN MENTAL</span>
        </div>
        <h2 class="orientation-main-title">Trastornos del contenido del pensamiento y delirios</h2>
        <p class="orientation-authors-meta">Karl Jaspers (1913) • Ricardo Capponi (Págs. 71-85) • Manual Belloch (Vol. 1, Cap. 9, Págs. 225-272) • APIR (Págs. 46-50)</p>
      </div>

      <div class="pedagogical-division-banner">
        <div class="pedagogical-banner-text">
          💡 <strong>Subdivisión Pedagógica Esencial:</strong> El contenido del pensamiento evalúa <strong>QUÉ piensa y cree el paciente</strong> (juicio de realidad, delirios y obsesiones), en contraste con el Curso (CÓMO fluyen las ideas).
        </div>
        <button type="button" class="pedagogical-link-btn" id="btn-goto-curso-sub">
          <span>⚡ Ver Trastornos del Curso del Pensamiento</span>
          <span>→</span>
        </button>
      </div>

      ${renderQuickNavPills([
        { id: 'sec-delirios-jaspers', icon: '⚖️', label: '1. Criterios de Jaspers' },
        { id: 'sec-delirios-tipologia', icon: '🧬', label: '2. Primarios vs. Secundarios' },
        { id: 'sec-delirios-tematicas', icon: '👑', label: '3. Temáticas Delirantes' },
        { id: 'sec-delirios-tabla', icon: '📊', label: '4. Diagnóstico Diferencial' },
        { id: 'sec-delirios-citas', icon: '📚', label: '5. Citas a Manuales' }
      ])}

      <section class="orientation-block-card" id="sec-delirios-jaspers">
        <div class="orientation-section-badge">SECCIÓN 1</div>
        <h3 class="orientation-sec-title">1. Los Tres Criterios Constitutivos de Karl Jaspers (1913)</h3>
        <p class="orientation-lead-p">
          En su clásica <em>Psicopatología General</em>, Jaspers delimitó la idea delirante (delirio) a través de tres características fenomenológicas inseparables <span class="citation-tag">(Capponi, p. 71; Belloch, p. 227)</span>:
        </p>

        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Certeza Inquebrantable</span>
            <h4 class="dim-name">1. Certeza Subjetiva Incomparable</h4>
            <p class="dim-desc">El paciente sostiene la creencia con una fuerza vivencial apodíctica, superior a cualquier creencia normal. No alberga la menor duda sobre la veracidad de su afirmación.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Incorregibilidad</span>
            <h4 class="dim-name">2. Inpenetrabilidad a la Experiencia y Argumentación</h4>
            <p class="dim-desc">La idea es refractaria a la evidencia empírica en contrario, a la demostración lógica y al consenso social. Los contraargumentos suelen ser asimilados al delirio.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Inverosimilitud</span>
            <h4 class="dim-name">3. Imposibilidad o Falsedad del Contenido</h4>
            <p class="dim-desc">El contenido de la idea es manifiestamente inverosímil, bizarro o incompatible con las leyes naturales y la realidad compartida de su grupo cultural.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card" id="sec-delirios-tipologia">
        <div class="orientation-section-badge">SECCIÓN 2</div>
        <h3 class="orientation-sec-title">2. Clasificación Clásica: Delirios Primarios vs. Secundarios</h3>
        
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">⚡</span>
              <div>
                <h4 class="dim-name">Delirios Primarios (Verdaderos)</h4>
                <span class="dim-badge">Kurt Schneider / Jaspers</span>
              </div>
            </div>
            <p class="dim-desc">Son psicológicamente incomprensibles e irreductibles a otros estados anímicos previos. Constituyen una vivencia originaria de cambio de significado radical del mundo:</p>
            <ul style="margin: 0.5rem 0 0 1.1rem; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">
              <li><strong>Temple o Humor Delirante (Wahnstimmung):</strong> Vivencia angustiosa y siniestra de que «algo extraño está pasando en el mundo», cargado de misterio pero sin objeto definido.</li>
              <li><strong>Percepción Delirante (Wahnwahrnehmung):</strong> A una percepción real normal se le atribuye de forma inmediata un significado anormalmente autorreferente (Ej. <em>«La luz roja del semáforo me indica que la CIA viene por mí»</em>).</li>
              <li><strong>Ocurrencia Delirante (Wahneinfall):</strong> Una idea súbita irrumpe en la conciencia sin mediación perceptiva previa (Ej. <em>«De pronto supe que soy el Papa»</em>).</li>
            </ul>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">💧</span>
              <div>
                <h4 class="dim-name">Delirios Secundarios (Deliroides)</h4>
                <span class="dim-badge">Comprensibles Afectivamente</span>
              </div>
            </div>
            <p class="dim-desc">Surgen de manera comprensible como consecuencia o justificación de un estado afectivo intenso (Belloch, p. 235; Capponi, p. 75):</p>
            <ul style="margin: 0.5rem 0 0 1.1rem; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">
              <li><strong>En Melancolía / Depresión Grave:</strong> Delirios de culpa imperdonable, de ruina económica absoluta y delirio hipocondríaco o de negación de órganos (Cotard).</li>
              <li><strong>En Manía:</strong> Delirios de grandeza, linaje real, riqueza desmesurada o poderes sobrehumanos.</li>
              <li><strong>En Paranoia Reaccional:</strong> Delirios de perjuicio derivados de aislamiento social o vivencias de marginación prolongada.</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="orientation-block-card" id="sec-delirios-tematicas">
        <div class="orientation-section-badge">SECCIÓN 3</div>
        <h3 class="orientation-sec-title">3. Grandes Temáticas y Síndromes Delirantes Específicos</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Más Frecuente</span>
            <h4 class="dim-name">Persecución y Referencia (Alusión)</h4>
            <p class="dim-desc">Convicción de ser espiado, envenenado, perseguido por agencias gubernamentales o que las noticias de la televisión y gestos de desconocidos contienen mensajes cifrados dirigidos a él.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Síndrome de Otelo</span>
            <h4 class="dim-name">Delirio Celotípico</h4>
            <p class="dim-desc">Certeza absoluta de infidelidad de la pareja, sustentada en indicios absurdos (una arruga en la cama, un retraso de 2 minutos). Altísimo riesgo de violencia de género.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Síndrome de Clérambault</span>
            <h4 class="dim-name">Delirio Erotomaníaco</h4>
            <p class="dim-desc">Convicción de que una persona de estatus social superior (un político, actor, médico) está secretamente enamorada de ella y le envía señales de correspondencia amorosa.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Síndrome de Cotard</span>
            <h4 class="dim-name">Delirio Nihilista o de Negación</h4>
            <p class="dim-desc">Negación de la existencia de los propios órganos internos o del cuerpo: <em>«Mi corazón no late, mis intestinos están podridos, estoy muerto»</em>. Típico en melancolía involutiva.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Síndrome de Capgras</span>
            <h4 class="dim-name">Falso Reconocimiento (Ilusión de Sosías)</h4>
            <p class="dim-desc">Convicción de que una persona íntima (esposa, hijo) ha sido reemplazada por un doble impostor físicamente idéntico. Se debe a una desconexión entre el reconocimiento facial y la respuesta afectiva autonómica.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Pasividad Schneideriana</span>
            <h4 class="dim-name">Fenómenos de Influencia del Yo</h4>
            <p class="dim-desc">Delirio de control motor, <strong>inserción del pensamiento</strong> (pensamientos ajenos metidos en su mente), <strong>robo del pensamiento</strong> y <strong>difusión / irradiación</strong> (los demás escuchan sus pensamientos).</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card" id="sec-delirios-tabla">
        <div class="orientation-section-badge">SECCIÓN 4</div>
        <h3 class="orientation-sec-title">4. Tabla de Diagnóstico Diferencial Fundamental</h3>
        <p class="orientation-p">
          Según la Tabla 5 del Manual APIR (p. 47) y Belloch (p. 238), compare los tres tipos de creencias anómalas:
        </p>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Criterio Clínico</th>
                <th>Idea Delirante (Delirio)</th>
                <th>Idea Obsesiva</th>
                <th>Idea Sobrevalorada (Wernicke)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Convicción y Certeza</strong></td>
                <td>Absoluta e inquebrantable (100%)</td>
                <td>Reconocida como falsa/absurda</td>
                <td>Muy intensa pero permeable a debate</td>
              </tr>
              <tr>
                <td><strong>Sintonía con el Yo</strong></td>
                <td><strong>Egosintónica</strong> (asumida como verdad)</td>
                <td><strong>Egodistónica</strong> (intrusiva y parásita)</td>
                <td><strong>Egosintónica</strong> (eje de su vida y valor)</td>
              </tr>
              <tr>
                <td><strong>Lucha o Resistencia</strong></td>
                <td>No hay lucha; se defiende la idea</td>
                <td>Activa lucha por expulsarla</td>
                <td>No hay lucha; se enorgullece de ella</td>
              </tr>
              <tr>
                <td><strong>Contenido</strong></td>
                <td>Bizarro, inverosímil o imposible</td>
                <td>Temas cotidianos (contaminación, daño)</td>
                <td>Temas comprensibles (política, religión)</td>
              </tr>
              <tr>
                <td><strong>Juicio de Realidad</strong></td>
                <td><strong>Suspendido / Pérdida del juicio</strong></td>
                <td><strong>Conservado (Insight intacto)</strong></td>
                <td><strong>Conservado con sesgo ideológico</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="orientation-block-card" id="sec-delirios-citas">
        <div class="orientation-section-badge">SECCIÓN 5</div>
        <h3 class="orientation-sec-title">5. Citas Verificadas en los Textos de Estudio</h3>
        ${renderCitationsBanner([
          { bookId: 'capponi-psicopatologia', page: 71, author: 'Ricardo Capponi', title: 'Definición y Criterios del Delirio según Jaspers' },
          { bookId: 'capponi-psicopatologia', page: 75, author: 'Ricardo Capponi', title: 'Delirios Primarios vs. Deliroides Secundarios' },
          { bookId: 'belloch-psicopatologia-vol1', page: 225, author: 'Belloch, Sandín y Ramos', title: 'Cap. 9: Psicopatología de los Delirios' },
          { bookId: 'apir-psicopatologia', page: 47, author: 'Manual APIR', title: 'Tabla 4 y 5: Dimensiones y Diagnóstico Diferencial de los Delirios' }
        ])}
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta primary" id="btn-goto-contenido-delirios-eval">
          <span class="cta-icon">📋</span>
          <div class="cta-texts">
            <strong class="cta-title">Abrir Protocolo de Evaluación de Delirios</strong>
            <span class="cta-sub">Guía de entrevista gradual, cuantificación de certeza y pesquisa de pasividad</span>
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
            <p class="orientation-authors-meta">Exploración Fenomenológica Gradual • Certeza, Sistematización & Pasividad</p>
          </div>
          <button type="button" class="btn-back-to-def" id="btn-back-contenido-delirios-def">
            ← Ver Definición y Semiología
          </button>
        </div>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PASO 1</div>
        <h3 class="orientation-sec-title">Paso 1: Entrevista Progresiva sin Confrontación Directa</h3>
        <p class="orientation-p">
          Nunca confronte de entrada la veracidad de la creencia («Eso es imposible»). Indague cómo se siente el paciente con esa vivencia:
        </p>
        <div class="clinical-speech-box" style="margin-bottom: 0.75rem;">
          <strong>🎯 Pregunta de Apertura:</strong>
          <span class="clinical-speech-quote">«Últimamente, ¿ha tenido la sensación de que las cosas a su alrededor han cambiado de manera extraña o que la gente se comporta de un modo inusual con usted?»</span>
          <p style="font-size: 0.8rem; color: var(--text-tertiary); margin-top: 0.35rem; margin-bottom: 0;">Pesquisa el temple delirante (Wahnstimmung) y la vivencia autorreferencial primaria.</p>
        </div>
        <div class="clinical-speech-box">
          <strong>🎯 Pregunta de Convicción y Prueba de Realidad:</strong>
          <span class="clinical-speech-quote">«Cuando piensa en eso que me cuenta, ¿siente que es una certeza absoluta al 100%, o alguna vez ha llegado a dudar de si podría tratarse de una confusión de su mente?»</span>
          <p style="font-size: 0.8rem; color: var(--text-tertiary); margin-top: 0.35rem; margin-bottom: 0;">Mide el grado de flexibilidad cognitiva (Kendler, 1983; Belloch, p. 248).</p>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PASO 2</div>
        <h3 class="orientation-sec-title">Paso 2: Pesquisa Específica de Fenómenos de Pasividad Schneideriana</h3>
        <ul class="orientation-checklist">
          <li><strong>Inserción del Pensamiento:</strong> <em>«¿Tiene la sensación de que algunos pensamientos que pasan por su cabeza no son suyos, sino que alguien desde afuera los puso allí?»</em></li>
          <li><strong>Robo del Pensamiento:</strong> <em>«¿Siente alguna vez como si de pronto alguien o alguna fuerza le quitara o vaciara los pensamientos de la mente?»</em></li>
          <li><strong>Difusión / Irradiación:</strong> <em>«¿Siente que sus pensamientos se escapan o que la gente a su alrededor puede escucharlos tal como si estuvieran en altavoz?»</em></li>
          <li><strong>Control Somático / Motor:</strong> <em>«¿Siente que su cuerpo, sus manos o su voz están siendo manejados por una fuerza ajena a usted?»</em></li>
        </ul>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">REGISTRO CLÍNICO</div>
        <h3 class="orientation-sec-title">Rúbrica de las 5 Dimensiones del Delirio (Kendler)</h3>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Dimensión</th>
                <th>Puntaje Bajo (0-1)</th>
                <th>Puntaje Moderado (2)</th>
                <th>Puntaje Severo (3-4)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Convicción</strong></td>
                <td>Reconoce posibilidad de error</td>
                <td>Certeza pero tolera dudas</td>
                <td>Certeza absoluta inquebrantable</td>
              </tr>
              <tr>
                <td><strong>Preocupación</strong></td>
                <td>Piensa en ello sólo si se le pregunta</td>
                <td>Ocupa varias horas al día</td>
                <td>Invasión total de la conciencia</td>
              </tr>
              <tr>
                <td><strong>Extensión / Sistematización</strong></td>
                <td>Creencia aislada y circunscrita</td>
                <td>Involucra a vecinos o familiares</td>
                <td>Trama conspirativa universal (CIA, Dios)</td>
              </tr>
              <tr>
                <td><strong>Resonancia Afectiva</strong></td>
                <td>Afecto neutro o distante</td>
                <td>Miedo o rabia moderada</td>
                <td>Terror pánico, desesperación o furor</td>
              </tr>
              <tr>
                <td><strong>Resonancia Conductual</strong></td>
                <td>No modifica su rutina</td>
                <td>Pone cerrojos extras</td>
                <td>Ataques defensivos, denuncias o fuga</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta secondary" id="btn-bottom-back-contenido-delirios-def">
          <span class="cta-icon">←</span>
          <div class="cta-texts">
            <strong class="cta-title">Volver a Fundamentos de Psicopatología de los Delirios</strong>
            <span class="cta-sub">Revisar criterios de Jaspers, temáticas y tabla diferencial</span>
          </div>
        </button>
      </div>
    </div>
  `,

  // -------------------------------------------------------------------------
  // 3. LA SENSOPERCEPCIÓN: DISTORSIONES PERCEPTIVAS
  // -------------------------------------------------------------------------
  'distorsiones-sensoperceptivas': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">🔍 ELEMENTO DEL VIVENCIAR & SENSOPERCEPCIÓN</span>
          <span class="modal-area-pill">🧬 ÁREA: PSICOPATOLOGÍA</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA</span>
          <span class="modal-area-pill">🔬 ÁREA: EXAMEN MENTAL</span>
        </div>
        <h2 class="orientation-main-title">Trastornos de la percepción: distorsiones perceptivas e ilusiones</h2>
        <p class="orientation-authors-meta">Ricardo Capponi (Págs. 30-45) • Manual Belloch (Vol. 1, Cap. 6, Págs. 147-160) • APIR (Págs. 29-33)</p>
      </div>

      <div class="pedagogical-division-banner">
        <div class="pedagogical-banner-text">
          💡 <strong>Subdivisión Pedagógica Esencial:</strong> Las anomalías de la sensopercepción se bifurcan en: <strong>Distorsiones Perceptivas</strong> (existe un objeto real, pero es percibido deformado en forma, tamaño o cualidad) y <strong>Engaños Perceptivos / Alucinaciones</strong> (no hay objeto real y se percibe de la nada).
        </div>
        <button type="button" class="pedagogical-link-btn" id="btn-goto-alucinaciones-sub">
          <span>👻 Ver Psicopatología de las Alucinaciones</span>
          <span>→</span>
        </button>
      </div>

      ${renderQuickNavPills([
        { id: 'sec-dist-intensidad', icon: '📶', label: '1. Intensidad & Cualidad' },
        { id: 'sec-dist-metamorfopsias', icon: '📐', label: '2. Metamorfopsias' },
        { id: 'sec-dist-ilusiones', icon: '🎭', label: '3. Ilusiones' },
        { id: 'sec-dist-citas', icon: '📚', label: '4. Citas a Manuales' }
      ])}

      <section class="orientation-block-card" id="sec-dist-intensidad">
        <div class="orientation-section-badge">SECCIÓN 1</div>
        <h3 class="orientation-sec-title">1. Anomalías en la Intensidad y Cualidad de los Estímulos</h3>
        <p class="orientation-lead-p">
          En estas alteraciones, la estructura del objeto se reconoce correctamente, pero la vivencia cuantitativa del impacto sensorial está gravemente distorsionada <span class="citation-tag">(Belloch, Vol. 1, p. 152; Capponi, p. 32)</span>:
        </p>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Hipersensibilidad</span>
            <h4 class="dim-name">Hiperestesia Sensorial</h4>
            <p class="dim-desc">Los sonidos habituales se sienten ensordecedores (hiperacusia), las luces normales resultan deslumbrantes (fotofobia) y el roce de la ropa es doloroso (hiperalgesia). Frecuente en manía, migraña, resaca alcohólica y abstinencia de benzodiacepinas.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Hiposensibilidad</span>
            <h4 class="dim-name">Hipoestesia y Analgesia Psicógena</h4>
            <p class="dim-desc">Atenuación severa de las sensaciones. Los sabores no se sienten, los colores se ven desvaídos y grisáceos, y se observa insensibilidad llamativa al dolor físico en estados disociativos graves y depresión melancólica profunda.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Alteración del Color</span>
            <h4 class="dim-name">Anomalías en la Cualidad: Xantopsia y Eritropsia</h4>
            <p class="dim-desc">Todo el campo visual se tiñe de un color uniforme sin alteración de las formas: visión amarilla (xantopsia, típica por intoxicación por digital / digoxina) o roja (eritropsia tras hemorragia vítrea o exposición solar intensa).</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card" id="sec-dist-metamorfopsias">
        <div class="orientation-section-badge">SECCIÓN 2</div>
        <h3 class="orientation-sec-title">2. Metamorfopsias: Tamaño, Forma y Esquema Corporal</h3>
        <p class="orientation-p">
          Las metamorfopsias corresponden a distorsiones perceptivas visuales referidas al tamaño (dismegalopsias) o a la forma espacial (dismorfopsias), con objeto real presente <span class="citation-tag">(Belloch, p. 153)</span>:
        </p>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Tamaño</span>
            <h4 class="dim-name">Micropsias y Macropsias</h4>
            <p class="dim-desc">Los objetos se perciben a una escala notablemente inferior (micropsias) o superior (macropsias / megalopsias) a su dimensión física real. Frecuente en auras de epilepsia del lóbulo temporal y lesiones del córtex occipitoparietal.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Síndrome de Alicia</span>
            <h4 class="dim-name">Autometamorfopsia (Esquema Corporal)</h4>
            <p class="dim-desc">La distorsión está referida al propio cuerpo del paciente: siente sus manos o cabeza gigantescas o enanas (Síndrome de Alicia en el País de las Maravillas de Todd). Típico en migrañas con aura y encefalitis por virus de Epstein-Barr.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Desarticulación</span>
            <h4 class="dim-name">Escisión Perceptiva y Sinestesia Patológica</h4>
            <p class="dim-desc">Incapacidad de integrar los componentes sensoriales de un mismo estímulo: el paciente ve a una persona hablar pero percibe su voz disociada viniendo desde otro rincón de la habitación.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card" id="sec-dist-ilusiones">
        <div class="orientation-section-badge">SECCIÓN 3</div>
        <h3 class="orientation-sec-title">3. Las Ilusiones: Deformación de Estímulos Ambiguos</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Por Cansancio</span>
            <h4 class="dim-name">Ilusiones por Inatención</h4>
            <p class="dim-desc">Se producen ante sobrecarga o bajo nivel de vigilancia; al fijar la atención deliberada, el estímulo vuelve a percibirse de forma correcta (Ej. confundir un abrigo colgado con una persona al entrar a oscuras).</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Por Emoción</span>
            <h4 class="dim-name">Ilusiones Catatímicas (Afectivas)</h4>
            <p class="dim-desc">La deformación está condicionada directamente por un estado afectivo intenso de pánico, culpa o duelo patológico (Ej. el viudo angustiado cree ver nítidamente a su difunta esposa en las sombras de los árboles).</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Voluntaria</span>
            <h4 class="dim-name">Pareidolias</h4>
            <p class="dim-desc">Estructuración deliberada y fantaseada de figuras vivas a partir de estímulos amorfos (rostros en las nubes, perfiles en las manchas de humedad), conservando permanentemente el juicio de realidad intacto.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card" id="sec-dist-citas">
        <div class="orientation-section-badge">SECCIÓN 4</div>
        <h3 class="orientation-sec-title">4. Citas Verificadas en los Textos de Estudio</h3>
        ${renderCitationsBanner([
          { bookId: 'capponi-psicopatologia', page: 32, author: 'Ricardo Capponi', title: 'Psicopatología de la Sensopercepción • Distorsiones e Ilusiones' },
          { bookId: 'belloch-psicopatologia-vol1', page: 150, author: 'Belloch, Sandín y Ramos', title: 'Cap. 6: Clasificación General de las Distorsiones Perceptivas' },
          { bookId: 'belloch-psicopatologia-vol1', page: 153, author: 'Belloch, Sandín y Ramos', title: 'Metamorfopsias, Dismegalopsias y Autometamorfopsias' },
          { bookId: 'apir-psicopatologia', page: 29, author: 'Manual APIR', title: 'Tema 4: Psicopatología de la Sensopercepción' }
        ])}
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta primary" id="btn-goto-distorsiones-eval">
          <span class="cta-icon">📋</span>
          <div class="cta-texts">
            <strong class="cta-title">Abrir Protocolo de Evaluación de Distorsiones e Ilusiones</strong>
            <span class="cta-sub">Guía de cribado visual, sensorial y descarte neurológico</span>
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
          <span class="modal-area-pill">🩺 ÁREA: EXAMEN MENTAL</span>
          <span class="modal-area-pill">🔍 ÁREA: SENSOPERCEPCIÓN</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-top: 0.4rem;">
          <div>
            <h2 class="orientation-main-title">Evaluación de distorsiones perceptivas, ilusiones y metamorfopsias</h2>
            <p class="orientation-authors-meta">Semiografía Perceptiva • Descarte Orgánico & Calibración de Intensidad</p>
          </div>
          <button type="button" class="btn-back-to-def" id="btn-back-distorsiones-def">
            ← Ver Definición y Semiología
          </button>
        </div>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PASO 1</div>
        <h3 class="orientation-sec-title">Paso 1: Indagación Dirigida de Hiperestesia y Sensibilidad</h3>
        <ul class="orientation-checklist">
          <li><em>«¿Siente que la luz normal de la habitación le resulta insoportablemente intensa o brillante?»</em></li>
          <li><em>«¿Los ruidos cotidianos (el motor de la nevera, los pasos) le provocan molestia física o dolor en los oídos?»</em></li>
          <li><em>«¿Ha sentido que la comida ha perdido todo su sabor o que los colores se ven desteñidos como en blanco y negro?»</em></li>
        </ul>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PASO 2</div>
        <h3 class="orientation-sec-title">Paso 2: Pesquisa de Metamorfopsias y Descarte Orgánico</h3>
        <p class="orientation-p">
          Las metamorfopsias son prioritariamente de origen neurológico (oftalmológico, migrañoso o epiléptico). Pregunte:
        </p>
        <div class="clinical-speech-box">
          <strong>🎯 Pregunta Semiográfica:</strong>
          <span class="clinical-speech-quote">«Al mirar las caras o los objetos, ¿ve que las líneas rectas se tuercen, o que las personas se ven súbitamente diminutas como muñecos (micropsias) o gigantescas?»</span>
        </div>
        <div class="clinical-speech-box" style="margin-top: 0.75rem;">
          <strong>🎯 Exploración de Autometamorfopsia:</strong>
          <span class="clinical-speech-quote">«¿Ha tenido la sensación de que sus manos, brazos o cabeza crecen o se achican de manera desproporcionada respecto al resto de su cuerpo?»</span>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">REGISTRO CLÍNICO</div>
        <h3 class="orientation-sec-title">Diferenciación Semiográfica: Ilusión vs. Alucinación</h3>
        <p class="orientation-p">
          Compruebe la disipación del fenómeno: si al encender la luz o invitar al paciente a tocar el objeto la imagen anómala desaparece inmediatamente, se clasifica como <strong>Ilusión</strong>. Si persiste independientemente del objeto real, clasifíquese como <strong>Engaño Alucinatorio</strong>.
        </p>
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta secondary" id="btn-bottom-back-distorsiones-def">
          <span class="cta-icon">←</span>
          <div class="cta-texts">
            <strong class="cta-title">Volver a Fundamentos de Distorsiones Perceptivas</strong>
            <span class="cta-sub">Revisar metamorfopsias, ilusiones catatímicas y citas</span>
          </div>
        </button>
      </div>
    </div>
  `,

  // -------------------------------------------------------------------------
  // 4. LA SENSOPERCEPCIÓN: ENGAÑOS PERCEPTIVOS Y ALUCINACIONES
  // -------------------------------------------------------------------------
  'alucinaciones-enganos': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">👻 ELEMENTO DEL VIVENCIAR & SENSOPERCEPCIÓN</span>
          <span class="modal-area-pill">🧬 ÁREA: PSICOPATOLOGÍA</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA</span>
          <span class="modal-area-pill">🔬 ÁREA: EXAMEN MENTAL</span>
        </div>
        <h2 class="orientation-main-title">Trastornos de la percepción: engaños perceptivos, alucinaciones y alucinosis</h2>
        <p class="orientation-authors-meta">Slade & Bentall (1988) • Ricardo Capponi (Págs. 45-63) • Manual Belloch (Vol. 1, Cap. 6, Págs. 160-175) • APIR (Págs. 33-37)</p>
      </div>

      <div class="pedagogical-division-banner">
        <div class="pedagogical-banner-text">
          💡 <strong>Subdivisión Pedagógica Esencial:</strong> El engaño perceptivo se diferencia de la distorsión porque <strong>no requiere de un estímulo real externo</strong>: se percibe como corpóreo algo que no existe en el espacio físico.
        </div>
        <button type="button" class="pedagogical-link-btn" id="btn-goto-distorsiones-sub">
          <span>🔍 Ver Distorsiones e Ilusiones</span>
          <span>→</span>
        </button>
      </div>

      ${renderQuickNavPills([
        { id: 'sec-alu-criterios', icon: '📏', label: '1. Criterios de Slade & Bentall' },
        { id: 'sec-alu-modalidades', icon: '👁️', label: '2. Modalidades Sensoriales' },
        { id: 'sec-alu-triada', icon: '⚖️', label: '3. Tríada Diferencial' },
        { id: 'sec-alu-citas', icon: '📚', label: '4. Citas a Manuales' }
      ])}

      <section class="orientation-block-card" id="sec-alu-criterios">
        <div class="orientation-section-badge">SECCIÓN 1</div>
        <h3 class="orientation-sec-title">1. Criterios Diagnósticos de Slade y Bentall (1988)</h3>
        <p class="orientation-lead-p">
          Frente a la clásica definición de Ball («percepción sin objeto»), Slade y Bentall operacionalizaron tres criterios fenomenológicos esenciales <span class="citation-tag">(Belloch, Vol. 1, p. 151; APIR, p. 33)</span>:
        </p>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Vivacidad Sensorial</span>
            <h4 class="dim-name">1. Fuerza y Claridad Perceptiva Real</h4>
            <p class="dim-desc">La experiencia alucinatoria posee un grado de nitidez, volumen, brillo y textura idéntico al de una percepción normal legítima. No es una simple idea o recuerdo vago.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Exterioridad</span>
            <h4 class="dim-name">2. Procedencia del Mundo Exterior</h4>
            <p class="dim-desc">El estímulo es localizado físicamente en el espacio extrapersonal objetivo (afuera del sujeto), viniendo desde un punto concreto del entorno.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Involuntariedad</span>
            <h4 class="dim-name">3. Inaccesibilidad al Control Voluntario</h4>
            <p class="dim-desc">El paciente no puede provocar, modular ni apagar la experiencia a voluntad; irrumpe de forma autónoma e incontrolable.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card" id="sec-alu-modalidades">
        <div class="orientation-section-badge">SECCIÓN 2</div>
        <h3 class="orientation-sec-title">2. Modalidades Sensoriales y Significado Clínico</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Primer Rango de Schneider</span>
            <h4 class="dim-name">Auditivas: Fonemas y Voces</h4>
            <p class="dim-desc">Desde murmullos (acoasmas) hasta voces complejas. Síntomas de primer rango en esquizofrenia: <strong>voces que dialogan entre sí</strong> sobre el paciente, <strong>voces que comentan su conducta en tiempo real</strong> y el <strong>eco del pensamiento</strong> (oír sus propios pensamientos dichos en voz alta) <span class="citation-tag">(Capponi, p. 50)</span>.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Prioridad Orgánica</span>
            <h4 class="dim-name">Visuales: Zoopsias y Liliputienses</h4>
            <p class="dim-desc">Desde destellos (fotopsias) hasta escenas móviles. Las <strong>zoopsias</strong> (insectos, roedores o reptiles que invaden la cama) son patognomónicas del <em>Delirium Tremens</em> alcohólico y encefalopatías tóxicas.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Hápticas</span>
            <h4 class="dim-name">Táctiles (Formicación / Síndrome de Ekbom)</h4>
            <p class="dim-desc">Sensación de descargas eléctricas, humedad o el clásico gateo de bichos o parásitos bajo la piel (formicación), frecuente en abstinencia etílica y psicosis por cocaína.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Viscerales</span>
            <h4 class="dim-name">Cenestésicas / Somáticas</h4>
            <p class="dim-desc">Sensación de órganos petrificados, vísceras huecas, cables atravesando el tórax o agresiones sexuales invisibles. Típico en psicosis de Cotard y esquizofrenia crónica.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card" id="sec-alu-triada">
        <div class="orientation-section-badge">SECCIÓN 3</div>
        <h3 class="orientation-sec-title">3. La Tríada Diferencial Clásica: Alucinación vs. Pseudoalucinación vs. Alucinosis</h3>
        <p class="orientation-p">
          Esta distinción, formulada por Kandinsky y Wernicke (Capponi, Págs. 56-58; APIR, p. 35), es la piedra angular de la semiología psiquiátrica:
        </p>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Entidad Fenomenológica</th>
                <th>Localización Espacial</th>
                <th>Juicio de Realidad / Certeza</th>
                <th>Corporeidad Física</th>
                <th>Diagnóstico Clínico Típico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Alucinación Verdadera</strong></td>
                <td><strong>Espacio Exterior</strong> (extrapsíquico objetivo)</td>
                <td><strong>Positivo</strong> (Certeza absoluta de realidad)</td>
                <td><strong>Sí</strong> (Fuerza perceptiva total)</td>
                <td>Esquizofrenia, Manía psicótica, Delirium.</td>
              </tr>
              <tr>
                <td><strong>Pseudoalucinación (Kandinsky)</strong></td>
                <td><strong>Espacio Interior</strong> (en la mente o cabeza)</td>
                <td><strong>Positivo</strong> (Vivencia de imposición involuntaria)</td>
                <td><strong>No</strong> (Imagen subjetiva forzada)</td>
                <td>Esquizofrenia paranoide, Automatismo mental.</td>
              </tr>
              <tr>
                <td><strong>Alucinosis (Wernicke)</strong></td>
                <td><strong>Espacio Exterior</strong> (en la habitación)</td>
                <td><strong>Negativo</strong> (Crítica intacta / Sabe que es irreal)</td>
                <td><strong>Sí</strong> (Lo ve o lo oye afuera)</td>
                <td>Alucinosis alcohólica, Tumores, Lesión neurológica.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="orientation-block-card" id="sec-alu-citas">
        <div class="orientation-section-badge">SECCIÓN 4</div>
        <h3 class="orientation-sec-title">4. Citas Verificadas en los Textos de Estudio</h3>
        ${renderCitationsBanner([
          { bookId: 'capponi-psicopatologia', page: 45, author: 'Ricardo Capponi', title: 'Psicopatología de las Alucinaciones y Modalidades Sensoriales' },
          { bookId: 'capponi-psicopatologia', page: 56, author: 'Ricardo Capponi', title: 'Pseudoalucinaciones de Kandinsky en el Espacio Interior' },
          { bookId: 'capponi-psicopatologia', page: 57, author: 'Ricardo Capponi', title: 'Alucinosis de Wernicke y Conservación de la Crítica' },
          { bookId: 'belloch-psicopatologia-vol1', page: 160, author: 'Belloch, Sandín y Ramos', title: 'Engaños Perceptivos y Criterios de Slade & Bentall' },
          { bookId: 'apir-psicopatologia', page: 35, author: 'Manual APIR', title: 'Tabla Comparativa: Alucinación vs. Pseudoalucinación vs. Alucinosis' }
        ])}
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta primary" id="btn-goto-alucinaciones-eval">
          <span class="cta-icon">📋</span>
          <div class="cta-texts">
            <strong class="cta-title">Abrir Protocolo de Evaluación de Alucinaciones</strong>
            <span class="cta-sub">Guía de indagación espacial, voces imperativas y calibración de insight</span>
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
          <span class="modal-area-pill">🩺 ÁREA: EXAMEN MENTAL</span>
          <span class="modal-area-pill">👻 ÁREA: SENSOPERCEPCIÓN</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-top: 0.4rem;">
          <div>
            <h2 class="orientation-main-title">Evaluación semiológica de engaños perceptivos y alucinaciones</h2>
            <p class="orientation-authors-meta">Semiografía Alucinatoria • Espacio, Voces Imperativas & Seguridad</p>
          </div>
          <button type="button" class="btn-back-to-def" id="btn-back-alucinaciones-def">
            ← Ver Definición y Semiología
          </button>
        </div>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PASO 1</div>
        <h3 class="orientation-sec-title">Paso 1: Indagación de Espacialidad (Exterior vs. Interior)</h3>
        <p class="orientation-p">
          Para diferenciar una alucinación verdadera de una pseudoalucinación o imagen obsesiva, formule:
        </p>
        <div class="clinical-speech-box">
          <strong>🎯 Pregunta de Localización Espacial:</strong>
          <span class="clinical-speech-quote">«Esa voz que escucha, ¿la oye con sus oídos físicos como si viniera desde afuera, desde la pared o detrás de la puerta, o la siente resonar directamente adentro de su cerebro como un pensamiento impuesto?»</span>
          <p style="font-size: 0.8rem; color: var(--text-tertiary); margin-top: 0.35rem; margin-bottom: 0;">Si procede de afuera = Alucinación verdadera. Si reside en el espacio intracraneal = Pseudoalucinación de Kandinsky.</p>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PASO 2</div>
        <h3 class="orientation-sec-title">Paso 2: Pesquisa Urgente de Voces Imperativas de Riesgo</h3>
        <p class="orientation-p">
          Las voces que imparten órdenes violentas constituyen una urgencia psiquiátrica de hospitalización inmediata:
        </p>
        <ul class="orientation-checklist">
          <li><em>«¿Las voces le dan alguna orden directa o le dicen que haga algo?»</em></li>
          <li><em>«¿Qué cosas le ordenan hacer exactamente?»</em></li>
          <li><em>«¿Ha sentido alguna vez la obligación incontrolable de obedecer esas órdenes, por ejemplo de hacerse daño a usted mismo o a otra persona?»</em></li>
        </ul>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">REGISTRO CLÍNICO</div>
        <h3 class="orientation-sec-title">Rúbrica de Grado de Convicción y Severidad Alucinatoria</h3>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Nivel</th>
                <th>Fenómeno Clínico</th>
                <th>Juicio de Realidad / Insight</th>
                <th>Acción Clínica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Nivel 1</strong></td>
                <td>Alucinosis visual o auditiva aislada</td>
                <td>Crítica conservada (sabe que no es real)</td>
                <td>Descarte neurológico, EEG y analítica.</td>
              </tr>
              <tr>
                <td><strong>Nivel 2</strong></td>
                <td>Voces en tercera persona o pseudoalucinaciones</td>
                <td>Certeza subjetiva pero sin imperatividad</td>
                <td>Inicio de tratamiento antipsicótico.</td>
              </tr>
              <tr>
                <td><strong>Nivel 3</strong></td>
                <td>Voces de comando o imperativas de autolesión</td>
                <td>Pérdida absoluta de insight + Obediencia</td>
                <td><strong>Hospitalización de urgencia inmediata</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta secondary" id="btn-bottom-back-alucinaciones-def">
          <span class="cta-icon">←</span>
          <div class="cta-texts">
            <strong class="cta-title">Volver a Fundamentos de Alucinaciones</strong>
            <span class="cta-sub">Revisar criterios de Slade & Bentall, modalidades y tríada clásica</span>
          </div>
        </button>
      </div>
    </div>
  `,

  // -------------------------------------------------------------------------
  // 5. EL YO Y LA PERSONALIDAD: PSICOPATOLOGÍA DEL YO
  // -------------------------------------------------------------------------
  'psicopatologia-del-yo': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">🪞 ESTRUCTURA YOICA & CONCIENCIA DE MISMIDAD</span>
          <span class="modal-area-pill">🧬 ÁREA: PSICOPATOLOGÍA</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA</span>
          <span class="modal-area-pill">🔬 ÁREA: EXAMEN MENTAL</span>
        </div>
        <h2 class="orientation-main-title">Psicopatología de la conciencia del Yo</h2>
        <p class="orientation-authors-meta">Karl Jaspers (1913) • Ricardo Capponi (Cap. III, Págs. 157-185) • APIR (Págs. 23-25)</p>
      </div>

      <div class="pedagogical-division-banner">
        <div class="pedagogical-banner-text">
          💡 <strong>Subdivisión Pedagógica Esencial:</strong> La psicopatología del Yo estudia la <strong>estructura formal de la propia mismidad</strong> (cómo nos percibimos a nosotros mismos como autores, enteros, continuos y delimitados del mundo), distinguiéndose de los Trastornos de la Personalidad.
        </div>
        <button type="button" class="pedagogical-link-btn" id="btn-goto-personalidad-sub">
          <span>🎭 Ver Trastornos de la Personalidad</span>
          <span>→</span>
        </button>
      </div>

      ${renderQuickNavPills([
        { id: 'sec-yo-cualidades', icon: '💎', label: '1. Las 4 Cualidades del Yo' },
        { id: 'sec-yo-despersonalizacion', icon: '🌫️', label: '2. Despersonalización' },
        { id: 'sec-yo-citas', icon: '📚', label: '3. Citas a Manuales' }
      ])}

      <section class="orientation-block-card" id="sec-yo-cualidades">
        <div class="orientation-section-badge">SECCIÓN 1</div>
        <h3 class="orientation-sec-title">1. Las Cuatro Cualidades de la Conciencia del Yo (Jaspers / Capponi)</h3>
        <p class="orientation-lead-p">
          Según Ricardo Capponi (p. 167) y Karl Jaspers, la vivencia de ser un individuo descansa sobre cuatro pilares estructurales:
        </p>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Autoría de Sí Mismo</span>
            <h4 class="dim-name">1. Conciencia de la Actividad del Yo</h4>
            <p class="dim-desc">Saberse y sentirse originador de las propias representaciones, emociones y actos. Cuando se desmorona, el paciente vive el <em>automatismo mental</em> de Clérambault y las vivencias de pasividad de Schneider (sentir que otro piensa o mueve su cuerpo).</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Cohesión Puntual</span>
            <h4 class="dim-name">2. Conciencia de la Unidad del Yo</h4>
            <p class="dim-desc">Certeza de ser uno y el mismo individuo en un momento dado. Su fractura conduce a vivencias de escisión esquizofrénica, desdoblamiento corporal y estados de personalidad disociativa alternante.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Continuidad Histórica</span>
            <h4 class="dim-name">3. Conciencia de la Identidad del Yo</h4>
            <p class="dim-desc">Certeza biográfica de ser la misma persona a través del cambio temporal del ciclo vital. Su alteración genera vivencias delirantes de transfiguración (sentir que se ha dejado de ser quien se era para ser sustituido).</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Frontera Yo-Mundo</span>
            <h4 class="dim-name">4. Demarcación y Límites del Yo</h4>
            <p class="dim-desc">Diferenciación nítida entre lo que pertenece al Yo y lo que pertenece al mundo exterior. Al borrarse los límites, surge el transitivismo, el robo del pensamiento y la sensación de que sus vivencias íntimas están abiertas y expuestas al público.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card" id="sec-yo-despersonalizacion">
        <div class="orientation-section-badge">SECCIÓN 2</div>
        <h3 class="orientation-sec-title">2. Despersonalización y Desrealización</h3>
        <p class="orientation-p">
          Fenómenos en los cuales se pierde la familiaridad vivencial sin pérdida del juicio de realidad <span class="citation-tag">(Capponi, p. 160)</span>:
        </p>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Extrañeza del Sí Mismo</span>
            <h4 class="dim-name">Despersonalización</h4>
            <p class="dim-desc">El paciente se siente como un autómata, como si estuviera viendo su propia vida en una película, o percibe sus extremidades como ajenas y mecánicas. Conserva el insight: sabe que es él, pero no se siente él.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Extrañeza del Entorno</span>
            <h4 class="dim-name">Desrealización</h4>
            <p class="dim-desc">El mundo exterior se percibe artificial, bidimensional, como una escenografía de cartón piedra o un decorado sin vida. Típico en crisis de pánico, fatiga extrema y cuadros disociativos.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card" id="sec-yo-citas">
        <div class="orientation-section-badge">SECCIÓN 3</div>
        <h3 class="orientation-sec-title">3. Citas Verificadas en los Textos de Estudio</h3>
        ${renderCitationsBanner([
          { bookId: 'capponi-psicopatologia', page: 157, author: 'Ricardo Capponi', title: 'Capítulo III: Psicología y Psicopatología del Yo' },
          { bookId: 'capponi-psicopatologia', page: 167, author: 'Ricardo Capponi', title: 'Las Cuatro Cualidades Fundamentales de la Conciencia del Yo' },
          { bookId: 'apir-psicopatologia', page: 23, author: 'Manual APIR', title: 'Psicopatología del Yo Corporal y de la Mismidad' }
        ])}
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta primary" id="btn-goto-yo-eval">
          <span class="cta-icon">📋</span>
          <div class="cta-texts">
            <strong class="cta-title">Abrir Protocolo de Evaluación del Yo</strong>
            <span class="cta-sub">Guía de entrevista sobre autoría, límites, continuidad y despersonalización</span>
          </div>
          <span class="cta-arrow">→</span>
        </button>
      </div>
    </div>
  `,

  'evaluacion-psicopatologia-yo': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">📋 PROTOCOLO DE EXAMEN CLÍNICO</span>
          <span class="modal-area-pill">🔬 ÁREA: EVALUACIÓN CLÍNICA</span>
          <span class="modal-area-pill">🩺 ÁREA: EXAMEN MENTAL</span>
          <span class="modal-area-pill">🪞 ÁREA: PSICOLOGÍA DEL YO</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-top: 0.4rem;">
          <div>
            <h2 class="orientation-main-title">Evaluación semiológica de las dimensiones y límites del Yo</h2>
            <p class="orientation-authors-meta">Semiografía de la Mismidad • Autoría, Continuidad & Barreras Yoicas</p>
          </div>
          <button type="button" class="btn-back-to-def" id="btn-back-yo-def">
            ← Ver Definición y Semiología
          </button>
        </div>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PASO 1</div>
        <h3 class="orientation-sec-title">Paso 1: Entrevista de las 4 Cualidades Jasperianas del Yo</h3>
        <ul class="orientation-checklist">
          <li><strong>Actividad del Yo:</strong> <em>«¿Siente que sus pensamientos y movimientos son producidos libremente por usted mismo, o siente como si fuera un títere manejado a control remoto?»</em></li>
          <li><strong>Unidad del Yo:</strong> <em>«¿Se siente usted una sola persona completa, o siente que está partido en dos o dividido en varias partes irreconciliables?»</em></li>
          <li><strong>Identidad del Yo:</strong> <em>«¿Reconoce que sigue siendo la misma persona de su infancia y juventud, o siente que fue reemplazado por otro ser diferente?»</em></li>
          <li><strong>Demarcación del Yo:</strong> <em>«¿Tiene la sensación de que sus pensamientos se escapan o que la frontera entre usted y los demás se ha vuelto transparente?»</em></li>
        </ul>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PASO 2</div>
        <h3 class="orientation-sec-title">Paso 2: Gradación de Despersonalización y Desrealización</h3>
        <div class="clinical-speech-box">
          <strong>💬 Ejemplo de Pregunta de Despersonalización:</strong>
          <span class="clinical-speech-quote">«¿Le ocurre a veces mirarse en el espejo y sentir que ese rostro no es el suyo, o escuchar su propia voz como si fuera la de un extraño?»</span>
        </div>
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta secondary" id="btn-bottom-back-yo-def">
          <span class="cta-icon">←</span>
          <div class="cta-texts">
            <strong class="cta-title">Volver a Fundamentos de Psicopatología del Yo</strong>
            <span class="cta-sub">Revisar las cuatro cualidades de Jaspers y despersonalización</span>
          </div>
        </button>
      </div>
    </div>
  `,

  // -------------------------------------------------------------------------
  // 6. EL YO Y LA PERSONALIDAD: TRASTORNOS DE LA PERSONALIDAD
  // -------------------------------------------------------------------------
  'trastornos-personalidad': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">🎭 PERSONALIDAD & VIVENCIAR AFECTIVO</span>
          <span class="modal-area-pill">🧬 ÁREA: PSICOPATOLOGÍA</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA</span>
          <span class="modal-area-pill">🔬 ÁREA: EXAMEN MENTAL</span>
        </div>
        <h2 class="orientation-main-title">Trastornos de la personalidad y dimensiones yoicas</h2>
        <p class="orientation-authors-meta">Ricardo Capponi (Págs. 185-200) • Manual Belloch (Vol. 2, Cap. 18) • APIR (Págs. 15-20)</p>
      </div>

      <div class="pedagogical-division-banner">
        <div class="pedagogical-banner-text">
          💡 <strong>Subdivisión Pedagógica Esencial:</strong> Mientras la Psicopatología del Yo estudia la vivencia formal de la mismidad, los <strong>Trastornos de la Personalidad</strong> analizan los estilos relacionales y emocionales caracterológicos arraigados desde la adolescencia.
        </div>
        <button type="button" class="pedagogical-link-btn" id="btn-goto-yo-sub">
          <span>🪞 Ver Psicopatología de la Conciencia del Yo</span>
          <span>→</span>
        </button>
      </div>

      ${renderQuickNavPills([
        { id: 'sec-per-polaridades', icon: '⚖️', label: '1. Polaridades Yoicas de Capponi' },
        { id: 'sec-per-clusters', icon: '👥', label: '2. Los Tres Clusters (A, B, C)' },
        { id: 'sec-per-citas', icon: '📚', label: '3. Citas a Manuales' }
      ])}

      <section class="orientation-block-card" id="sec-per-polaridades">
        <div class="orientation-section-badge">SECCIÓN 1</div>
        <h3 class="orientation-sec-title">1. Las Cuatro Polaridades Yoicas de Ricardo Capponi (1987)</h3>
        <p class="orientation-lead-p">
          Ricardo Capponi propone analizar el carácter no como un conjunto estático de etiquetas, sino como el equilibrio dinámico entre cuatro polaridades yoicas <span class="citation-tag">(Capponi, Págs. 178-195)</span>:
        </p>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Dimensión 1</span>
            <h4 class="dim-name">Actividad vs. Pasividad</h4>
            <p class="dim-desc">Actitud vigilante, transformadora y activa frente al mundo vs. inercia, renuncia, sometimiento y abandono funcional característico de personalidades pasivo-dependientes.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Dimensión 2</span>
            <h4 class="dim-name">Fusión vs. Aislamiento</h4>
            <p class="dim-desc">La necesidad simbiótica de disolverse en el otro con terror al abandono (TLP) frente a la distancia emocional infranqueable y frialdad defensiva (Esquizoide).</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Dimensión 3</span>
            <h4 class="dim-name">Labilidad vs. Estabilidad</h4>
            <p class="dim-desc">Consistencia afectiva y solidez de objetivos frente a la desregulación emocional impulsiva, los virajes bruscos del humor y la fragilidad del autoconcepto.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Dimensión 4</span>
            <h4 class="dim-name">Omnipotencia vs. Sumisión</h4>
            <p class="dim-desc">Autoimagen inflada con desprecio de las necesidades ajenas (Narcisismo) frente a la vivencia de autodesvalorización profunda y subordinación humillante.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card" id="sec-per-clusters">
        <div class="orientation-section-badge">SECCIÓN 2</div>
        <h3 class="orientation-sec-title">2. Los Tres Clusters Nosológicos (DSM / CIE)</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Cluster A: Raros / Excéntricos</span>
            <h4 class="dim-name">Paranoide, Esquizoide, Esquizotípico</h4>
            <p class="dim-desc">Marcado por la desconfianza suspicaz hacia los demás, la frialdad con desapego afectivo voluntario (esquizoide) y el pensamiento mágico o extravagante con aislamiento social.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Cluster B: Dramáticos / Erráticos</span>
            <h4 class="dim-name">Límite (TLP), Narcisista, Histriónico, Antisocial</h4>
            <p class="dim-desc">Inestabilidad de relaciones, identidad y afecto con autoagresión (TLP), grandiosidad y falta de empatía (Narcisista), dramatización seductora (Histriónico) y transgresión moral de normas (Antisocial).</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Cluster C: Ansiosos / Temerosos</span>
            <h4 class="dim-name">Evitativo, Dependiente, Obsesivo-Compulsivo</h4>
            <p class="dim-desc">Inhibición social por hipersensibilidad a la crítica (Evitativo), subordinación y necesidad constante de reaseguro (Dependiente), y perfeccionismo rígido e inflexible (Anancástico).</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card" id="sec-per-citas">
        <div class="orientation-section-badge">SECCIÓN 3</div>
        <h3 class="orientation-sec-title">3. Citas Verificadas en los Textos de Estudio</h3>
        ${renderCitationsBanner([
          { bookId: 'capponi-psicopatologia', page: 178, author: 'Ricardo Capponi', title: 'Psicopatología de la Dimensión Actividad-Pasividad' },
          { bookId: 'capponi-psicopatologia', page: 185, author: 'Ricardo Capponi', title: 'Dimensiones del Yo y Trastornos de la Personalidad' },
          { bookId: 'apir-psicopatologia', page: 15, author: 'Manual APIR', title: 'Sistemas Clasificatorios y Trastornos de la Personalidad' }
        ])}
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta primary" id="btn-goto-personalidad-eval">
          <span class="cta-icon">📋</span>
          <div class="cta-texts">
            <strong class="cta-title">Abrir Protocolo de Evaluación de Personalidad</strong>
            <span class="cta-sub">Guía de entrevista longitudinal, defensas primitivas y polaridades</span>
          </div>
          <span class="cta-arrow">→</span>
        </button>
      </div>
    </div>
  `,

  'evaluacion-trastornos-personalidad': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">📋 PROTOCOLO DE EXAMEN CLÍNICO</span>
          <span class="modal-area-pill">🔬 ÁREA: EVALUACIÓN CLÍNICA</span>
          <span class="modal-area-pill">🩺 ÁREA: EXAMEN MENTAL</span>
          <span class="modal-area-pill">🎭 ÁREA: PERSONALIDAD</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-top: 0.4rem;">
          <div>
            <h2 class="orientation-main-title">Evaluación semiológica de los trastornos de la personalidad</h2>
            <p class="orientation-authors-meta">Exploración Dimensional • Patrones Relacionales & Mecanismos Inmaduros</p>
          </div>
          <button type="button" class="btn-back-to-def" id="btn-back-personalidad-def">
            ← Ver Definición y Semiología
          </button>
        </div>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PASO 1</div>
        <h3 class="orientation-sec-title">Paso 1: Análisis Longitudinal Biográfico</h3>
        <p class="orientation-p">
          Recuerde la regla de oro: <em>un trastorno de la personalidad no se diagnostica por un síntoma transversal agudo</em>, sino por la rigidez persistente de un patrón a lo largo de los años. Explore:
        </p>
        <ul class="orientation-checklist">
          <li>Estabilidad laboral y académica: ¿Ha habido despidos reiterados por conflictos con la autoridad?</li>
          <li>Historia de vínculos de pareja: ¿Patrón de rupturas tormentosas, sumisión extrema o desconfianza?</li>
          <li>Manejo de la frustración: ¿Aparición de explosiones desmedidas o amenazas de autolesión ante el rechazo?</li>
        </ul>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PASO 2</div>
        <h3 class="orientation-sec-title">Paso 2: Pesquisa de Defensas Primitivas (Kernberg)</h3>
        <div class="clinical-speech-box">
          <strong>💬 Pesquisa de Escisión (Splitting):</strong>
          <span class="clinical-speech-quote">«...La semana pasada la psicóloga anterior era un ángel perfecto que me salvaba la vida, pero hoy me di cuenta de que es un monstruo despiadado que me odia...»</span>
          <p style="font-size: 0.8rem; color: var(--text-tertiary); margin-top: 0.35rem; margin-bottom: 0;">Incapacidad de integrar aspectos positivos y negativos en una misma persona (blanco o negro).</p>
        </div>
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta secondary" id="btn-bottom-back-personalidad-def">
          <span class="cta-icon">←</span>
          <div class="cta-texts">
            <strong class="cta-title">Volver a Fundamentos de Personalidad</strong>
            <span class="cta-sub">Revisar polaridades yoicas de Capponi y los tres clusters</span>
          </div>
        </button>
      </div>
    </div>
  `,

  // -------------------------------------------------------------------------
  // 7. SÍNDROMES CLÍNICOS: GRANDES SÍNDROMES
  // -------------------------------------------------------------------------
  'grandes-sindromes': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">🧬 INTEGRACIÓN SEMIOLÓGICA & SÍNDROMES</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA CLÍNICA</span>
          <span class="modal-area-pill">🔬 ÁREA: DIAGNÓSTICO</span>
        </div>
        <h2 class="orientation-main-title">Grandes síndromes psicopatológicos y diagnóstico sindromático</h2>
        <p class="orientation-authors-meta">Ricardo Capponi (Cap. IV, Págs. 201-227) • APIR (Págs. 16-20)</p>
      </div>

      ${renderQuickNavPills([
        { id: 'sec-sin-concepto', icon: '🏛️', label: '1. Jerarquía Semiológica' },
        { id: 'sec-sin-principales', icon: '🧬', label: '2. Síndromes Mayores' },
        { id: 'sec-sin-citas', icon: '📚', label: '3. Citas a Manuales' }
      ])}

      <section class="orientation-block-card" id="sec-sin-concepto">
        <div class="orientation-section-badge">SECCIÓN 1</div>
        <h3 class="orientation-sec-title">1. La Jerarquía Diagnóstica de Ricardo Capponi</h3>
        <p class="orientation-lead-p">
          En el Capítulo IV de su obra, Ricardo Capponi (p. 201) establece que el clínico no debe saltar apresuradamente al diagnóstico de una enfermedad (nosología), sino transitar rigurosamente por tres peldaños:
        </p>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Nivel 1</span>
            <h4 class="dim-name">Elemento del Vivenciar</h4>
            <p class="dim-desc">Identificación rigurosa del síntoma puro: ¿Es una bradipsiquia? ¿Una alucinosis? ¿Un delirio de referencia?</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Nivel 2</span>
            <h4 class="dim-name">Nivel Sindromático</h4>
            <p class="dim-desc">Agrupación coherente de síntomas en constelaciones clínicas: ¿Configura un síndrome depresivo, confusional o catatónico?</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Nivel 3</span>
            <h4 class="dim-name">Nivel Nosológico</h4>
            <p class="dim-desc">Diagnóstico de la enfermedad definitiva contrastando etiología y curso longitudinal (Ej. Trastorno Afectivo Bipolar I, Demencia frontotemporal).</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card" id="sec-sin-principales">
        <div class="orientation-section-badge">SECCIÓN 2</div>
        <h3 class="orientation-sec-title">2. Los Ocho Síndromes Mayores de Capponi</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Prioridad Orgánica</span>
            <h4 class="dim-name">1. Síndrome Confusional Agudo (Delirium)</h4>
            <p class="dim-desc">Compromiso global de la conciencia y atención, fluctuación diurna, labilidad e ilusiones visuales <span class="citation-tag">(Capponi, p. 204)</span>.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Esfera Psicomotora</span>
            <h4 class="dim-name">2. Síndrome Catatónico</h4>
            <p class="dim-desc">Acinesia, flexibilidad cérea, catalepsia, negativismo, manierismos y estupor catatónico <span class="citation-tag">(Capponi, p. 210)</span>.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Afecto de Fondo</span>
            <h4 class="dim-name">3. Síndrome Depresivo y Maníaco</h4>
            <p class="dim-desc">Tristeza vital con bradipsiquia y anhedonia vs. Euforia expansiva, taquipsiquia y megalomanía.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Eje Psicótico</span>
            <h4 class="dim-name">4. Síndrome Esquizofrénico y Paranoide</h4>
            <p class="dim-desc">Disgregación, síntomas de pasividad y aplanamiento afectivo vs. Sistema delirante persecutorio lúcido.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Memoria de Fijación</span>
            <h4 class="dim-name">5. Síndrome Amnésico (Korsakoff)</h4>
            <p class="dim-desc">Amnesia anterógrada severa con confabulación y preservación de la conciencia lúcida <span class="citation-tag">(Capponi, p. 219)</span>.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Deterioro Cortical</span>
            <h4 class="dim-name">6. Síndrome Demencial</h4>
            <p class="dim-desc">Deterioro adquirido e irreversible de memoria, abstracción, juicio y habilidades funcionales.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card" id="sec-sin-citas">
        <div class="orientation-section-badge">SECCIÓN 3</div>
        <h3 class="orientation-sec-title">3. Citas Verificadas en los Textos de Estudio</h3>
        ${renderCitationsBanner([
          { bookId: 'capponi-psicopatologia', page: 201, author: 'Ricardo Capponi', title: 'Capítulo IV: Diagnóstico Psicopatológico, Sindromático y Nosológico' },
          { bookId: 'capponi-psicopatologia', page: 204, author: 'Ricardo Capponi', title: 'Síndrome Confusional y Cuadros Orgánicos' },
          { bookId: 'capponi-psicopatologia', page: 210, author: 'Ricardo Capponi', title: 'Síndrome Catatónico y Trastornos Psicomotores' },
          { bookId: 'capponi-psicopatologia', page: 219, author: 'Ricardo Capponi', title: 'Síndrome de Korsakoff y Trastornos Amnésicos' }
        ])}
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta primary" id="btn-goto-sindromes-eval">
          <span class="cta-icon">📋</span>
          <div class="cta-texts">
            <strong class="cta-title">Abrir Protocolo de Diagnóstico Sindromático</strong>
            <span class="cta-sub">Algoritmo de triaje jerárquico y árbol de decisión clínica</span>
          </div>
          <span class="cta-arrow">→</span>
        </button>
      </div>
    </div>
  `,

  'evaluacion-grandes-sindromes': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">📋 PROTOCOLO DE EXAMEN CLÍNICO</span>
          <span class="modal-area-pill">🔬 ÁREA: EVALUACIÓN CLÍNICA</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA</span>
          <span class="modal-area-pill">🧬 ÁREA: SÍNDROMES CLÍNICOS</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-top: 0.4rem;">
          <div>
            <h2 class="orientation-main-title">Protocolo de diagnóstico sindromático y jerarquización nosológica</h2>
            <p class="orientation-authors-meta">Algoritmo de Decisión • Jerarquía Excluyente de Ricardo Capponi</p>
          </div>
          <button type="button" class="btn-back-to-def" id="btn-back-sindromes-def">
            ← Ver Definición y Semiología
          </button>
        </div>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">ALGORITMO CLÍNICO</div>
        <h3 class="orientation-sec-title">Regla de Jerarquía Excluyente en Psiquiatría</h3>
        <p class="orientation-p">
          Aplique siempre la jerarquía clásica: <em>los cuadros de nivel superior explican o excluyen a los inferiores</em>:
        </p>
        <div style="padding: 1rem; background: rgba(59, 130, 246, 0.08); border-left: 4px solid #2563eb; border-radius: 8px;">
          <strong style="color: #1d4ed8; display: block; margin-bottom: 0.4rem;">Orden de Descarte Jerárquico:</strong>
          <ol style="margin: 0; padding-left: 1.2rem; font-size: 0.88rem; color: var(--text-primary); line-height: 1.6;">
            <li><strong>1° Causa Médica / Orgánica (Delirium o Demencia):</strong> Si la conciencia o la memoria de fijación están alteradas, no diagnostique psicosis ni depresión primaria.</li>
            <li><strong>2° Cuadros Psicóticos Esquizofreniformes:</strong> Si hay síntomas de primer rango de Schneider y disgregación, priman sobre síntomas afectivos secundarios.</li>
            <li><strong>3° Trastornos del Estado de Ánimo:</strong> Depresión mayor o Manía con síntomas psicóticos congruentes.</li>
            <li><strong>4° Trastornos de Ansiedad, Fóbicos y Somatomorfos (Neuróticos):</strong> Preservación estricta del juicio de realidad.</li>
            <li><strong>5° Trastornos de la Personalidad:</strong> Patrones crónicos y longitudinales de base.</li>
          </ol>
        </div>
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta secondary" id="btn-bottom-back-sindromes-def">
          <span class="cta-icon">←</span>
          <div class="cta-texts">
            <strong class="cta-title">Volver a Grandes Síndromes</strong>
            <span class="cta-sub">Revisar los 8 grandes síndromes de Capponi y citas</span>
          </div>
        </button>
      </div>
    </div>
  `,

  // -------------------------------------------------------------------------
  // 8. CONDUCTAS BIOLÓGICAS: CONDUCTA ALIMENTARIA (TCA)
  // -------------------------------------------------------------------------
  'conducta-alimentaria': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">🍽️ CONDUCTAS BÁSICAS & IMAGEN CORPORAL</span>
          <span class="modal-area-pill">🧬 ÁREA: PSICOPATOLOGÍA</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA</span>
        </div>
        <h2 class="orientation-main-title">Psicopatología de la conducta alimentaria: anorexia, bulimia y atracones</h2>
        <p class="orientation-authors-meta">Ricardo Capponi (Págs. 118-125) • Manual Belloch (Vol. 1, Cap. 15, Págs. 403-422)</p>
      </div>

      ${renderQuickNavPills([
        { id: 'sec-ali-anorexia', icon: '📉', label: '1. Anorexia Nerviosa' },
        { id: 'sec-ali-bulimia', icon: '🔄', label: '2. Bulimia & Purgas' },
        { id: 'sec-ali-citas', icon: '📚', label: '3. Citas a Manuales' }
      ])}

      <section class="orientation-block-card" id="sec-ali-anorexia">
        <div class="orientation-section-badge">SECCIÓN 1</div>
        <h3 class="orientation-sec-title">1. Anorexia Nerviosa y Distorsión de la Imagen Corporal</h3>
        <p class="orientation-lead-p">
          En el capítulo de conductas básicas, Ricardo Capponi (p. 118) y Conxa Perpiñá (Belloch, Cap. 15) describen la anorexia nerviosa no como una simple falta de apetito, sino como una fobia mórbida y obsesiva al peso corporal acompañada de una severa distorsión perceptiva:
        </p>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Peso Dianal</span>
            <h4 class="dim-name">Restricción Energética Voluntaria</h4>
            <p class="dim-desc">Pérdida de peso inducida intencionalmente mediante dietas extremas, descarte de carbohidratos, ayunos y ejercicio físico extenuante.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Fobia</span>
            <h4 class="dim-name">Miedo Intenso al Sobrepeso</h4>
            <p class="dim-desc">El paciente experimenta terror irracional a ganar un solo gramo, manteniéndose en un peso persistentemente por debajo del umbral mínimo de salud.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Percepción</span>
            <h4 class="dim-name">Distorsión del Esquema Corporal</h4>
            <p class="dim-desc">Autometamorfopsia perceptiva: a pesar de presentar emaciación y desnutrición clínica evidente, la paciente se mira al espejo y se percibe «obesa» o con zonas corporales deformadas.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card" id="sec-ali-bulimia">
        <div class="orientation-section-badge">SECCIÓN 2</div>
        <h3 class="orientation-sec-title">2. Bulimia Nerviosa y Trastorno por Atracón</h3>
        <div class="clinical-speech-box">
          <strong>💬 El Ciclo Bulímico Típico:</strong>
          <span class="clinical-speech-quote">«...Aguanto todo el día sin comer casi nada... pero a las diez de la noche siento una ansiedad incontrolable, voy a la cocina y me trago paquetes enteros de galletas, pan, queso, sin saborear... luego viene un asco insoportable y tengo que meterme los dedos para vomitarlo todo...»</span>
        </div>
      </section>

      <section class="orientation-block-card" id="sec-ali-citas">
        <div class="orientation-section-badge">SECCIÓN 3</div>
        <h3 class="orientation-sec-title">3. Citas Verificadas en los Textos de Estudio</h3>
        ${renderCitationsBanner([
          { bookId: 'capponi-psicopatologia', page: 118, author: 'Ricardo Capponi', title: 'Psicopatología de la Alimentación: Anorexia y Bulimia' },
          { bookId: 'belloch-psicopatologia-vol1', page: 403, author: 'Belloch, Sandín y Ramos', title: 'Cap. 15: Trastornos de la Conducta Alimentaria (Perpiñá)' }
        ])}
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta primary" id="btn-goto-alimentaria-eval">
          <span class="cta-icon">📋</span>
          <div class="cta-texts">
            <strong class="cta-title">Abrir Protocolo de Evaluación de TCA</strong>
            <span class="cta-sub">Guía de IMC, cribado SCOFF, purgas y signos de alarma médica</span>
          </div>
          <span class="cta-arrow">→</span>
        </button>
      </div>
    </div>
  `,

  'evaluacion-conducta-alimentaria': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">📋 PROTOCOLO DE EXAMEN CLÍNICO</span>
          <span class="modal-area-pill">🔬 ÁREA: EVALUACIÓN CLÍNICA</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA</span>
          <span class="modal-area-pill">🍽️ ÁREA: CONDUCTAS BÁSICAS</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-top: 0.4rem;">
          <div>
            <h2 class="orientation-main-title">Evaluación semiológica de los trastornos de la conducta alimentaria</h2>
            <p class="orientation-authors-meta">Cuestionario SCOFF • Cálculo de IMC & Signos Físicos de Alerta</p>
          </div>
          <button type="button" class="btn-back-to-def" id="btn-back-alimentaria-def">
            ← Ver Definición y Semiología
          </button>
        </div>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">CUESTIONARIO SCOFF</div>
        <h3 class="orientation-sec-title">Cribado Rápido Estandarizado SCOFF (Morgan et al.)</h3>
        <ul class="orientation-checklist">
          <li><strong>S (Sick):</strong> ¿Se provoca usted el vómito porque se siente incómodamente llena?</li>
          <li><strong>C (Control):</strong> ¿Le preocupa haber perdido el control sobre cuánto come?</li>
          <li><strong>O (One stone):</strong> ¿Ha perdido recientemente más de una talla de ropa o 6 kg en 3 meses?</li>
          <li><strong>F (Fat):</strong> ¿Se considera gorda aunque los demás le digan que está demasiado delgada?</li>
          <li><strong>F (Food):</strong> ¿Diría usted que la comida domina totalmente su vida diaria?</li>
        </ul>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.5rem;">
          <em>Punto de corte:</em> ≥ 2 respuestas afirmativas indican alta probabilidad de TCA y ameritan evaluación diagnóstica formal.
        </p>
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta secondary" id="btn-bottom-back-alimentaria-def">
          <span class="cta-icon">←</span>
          <div class="cta-texts">
            <strong class="cta-title">Volver a Fundamentos de Conducta Alimentaria</strong>
            <span class="cta-sub">Revisar anorexia, bulimia y citas</span>
          </div>
        </button>
      </div>
    </div>
  `,

  // -------------------------------------------------------------------------
  // 9. CONDUCTAS BIOLÓGICAS: CONTROL DE IMPULSOS
  // -------------------------------------------------------------------------
  'control-impulsos': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">🎰 CONDUCTAS BÁSICAS & CONTROL INHIBITORIO</span>
          <span class="modal-area-pill">🧬 ÁREA: PSICOPATOLOGÍA</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA</span>
        </div>
        <h2 class="orientation-main-title">Psicopatología del control de los impulsos y juego patológico</h2>
        <p class="orientation-authors-meta">Ricardo Capponi (Pág. 128) • Manual Belloch (Vol. 1, Cap. 16, Págs. 423-448)</p>
      </div>

      ${renderQuickNavPills([
        { id: 'sec-imp-ciclo', icon: '⚡', label: '1. Ciclo del Impulso' },
        { id: 'sec-imp-ludopatia', icon: '🎲', label: '2. Juego Patológico' },
        { id: 'sec-imp-citas', icon: '📚', label: '3. Citas a Manuales' }
      ])}

      <section class="orientation-block-card" id="sec-imp-ciclo">
        <div class="orientation-section-badge">SECCIÓN 1</div>
        <h3 class="orientation-sec-title">1. El Ciclo Semiológico del Descontrol Impulsivo</h3>
        <p class="orientation-lead-p">
          Ricardo Capponi (p. 128) y Belloch (Cap. 16) diferencian el impulso de la compulsión obsesiva mediante la tríada temporal:
        </p>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Fase 1</span>
            <h4 class="dim-name">Tensión Creciente Previa</h4>
            <p class="dim-desc">Sensación incontenible de inquietud, agitación psicomotriz o excitación fisiológica que demanda ejecución inmediata del acto.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Fase 2</span>
            <h4 class="dim-name">Placer o Alivio Durante el Acto</h4>
            <p class="dim-desc">En el momento de cometer la acción (apostar, hurtar, arrancarse el pelo), el paciente experimenta una intensa gratificación o descarga de tensión.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Fase 3</span>
            <h4 class="dim-name">Culpa y Arrepentimiento Posterior</h4>
            <p class="dim-desc">Tras consumarse la acción sobreviene el autorreproche, la vergüenza y el remordimiento moral al constatar las consecuencias ruinosas.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card" id="sec-imp-ludopatia">
        <div class="orientation-section-badge">SECCIÓN 2</div>
        <h3 class="orientation-sec-title">2. Las Fases del Juego Patológico (Belloch, Cap. 16)</h3>
        <ul class="orientation-checklist">
          <li><strong>1. Fase de Ganancias:</strong> Éxito inicial que crea la ilusión de maestría y control sobre el azar.</li>
          <li><strong>2. Fase de Pérdidas y "Chasing":</strong> Fenómeno patognomónico de <em>«cazar las pérdidas»</em> (apostar dinero urgente para recuperar lo perdido).</li>
          <li><strong>3. Fase de Desesperación:</strong> Deudas impagables, préstamos fraudulentos, mentiras masivas y aislamiento familiar.</li>
        </ul>
      </section>

      <section class="orientation-block-card" id="sec-imp-citas">
        <div class="orientation-section-badge">SECCIÓN 3</div>
        <h3 class="orientation-sec-title">3. Citas Verificadas en los Textos de Estudio</h3>
        ${renderCitationsBanner([
          { bookId: 'capponi-psicopatologia', page: 128, author: 'Ricardo Capponi', title: 'Psicopatología del Control de Impulsos y Cleptomanía' },
          { bookId: 'belloch-psicopatologia-vol1', page: 423, author: 'Belloch, Sandín y Ramos', title: 'Cap. 16: Trastornos de Control de Impulsos: El Juego Patológico' }
        ])}
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta primary" id="btn-goto-impulsos-eval">
          <span class="cta-icon">📋</span>
          <div class="cta-texts">
            <strong class="cta-title">Abrir Protocolo de Evaluación de Impulsos</strong>
            <span class="cta-sub">Guía de pesquisa de ludopatía, chasing, mentiras y escala NODS</span>
          </div>
          <span class="cta-arrow">→</span>
        </button>
      </div>
    </div>
  `,

  'evaluacion-control-impulsos': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">📋 PROTOCOLO DE EXAMEN CLÍNICO</span>
          <span class="modal-area-pill">🔬 ÁREA: EVALUACIÓN CLÍNICA</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA</span>
          <span class="modal-area-pill">🎰 ÁREA: CONTROL DE IMPULSOS</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-top: 0.4rem;">
          <div>
            <h2 class="orientation-main-title">Evaluación semiológica del control de impulsos y ludopatía</h2>
            <p class="orientation-authors-meta">Cribado NODS • Persecución de Pérdidas & Consecuencias Sociofamiliares</p>
          </div>
          <button type="button" class="btn-back-to-def" id="btn-back-impulsos-def">
            ← Ver Definición y Semiología
          </button>
        </div>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PASO 1</div>
        <h3 class="orientation-sec-title">Paso 1: Pesquisa del Fenómeno de "Chasing"</h3>
        <div class="clinical-speech-box">
          <strong>🎯 Pregunta Cardinal:</strong>
          <span class="clinical-speech-quote">«Cuando pierde dinero jugando o apostando, ¿siente la necesidad urgente de volver otro día a jugar para recuperar lo que perdió?»</span>
          <p style="font-size: 0.8rem; color: var(--text-tertiary); margin-top: 0.35rem; margin-bottom: 0;">La respuesta afirmativa es el indicador más sensible de adicción conductual al juego.</p>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PASO 2</div>
        <h3 class="orientation-sec-title">Paso 2: Evaluación del Daño Financiero y Legal</h3>
        <ul class="orientation-checklist">
          <li>¿Ha mentido a su cónyuge, padres o amigos sobre el monto real de lo que apuesta?</li>
          <li>¿Ha pedido préstamos informales o utilizado dinero destinado al alquiler o comida para apostar?</li>
          <li>¿Se siente irritable o desasosegado cuando intenta reducir o dejar de jugar?</li>
        </ul>
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta secondary" id="btn-bottom-back-impulsos-def">
          <span class="cta-icon">←</span>
          <div class="cta-texts">
            <strong class="cta-title">Volver a Fundamentos de Control de Impulsos</strong>
            <span class="cta-sub">Revisar ciclo del impulso, ludopatía y citas</span>
          </div>
        </button>
      </div>
    </div>
  `,

  // -------------------------------------------------------------------------
  // 10. PROTOCOLOS ESPECÍFICOS Y HERRAMIENTAS CLÍNICAS
  // -------------------------------------------------------------------------
  'evaluacion-memoria-inmediata-trabajo': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">🧠 INSTRUMENTO DEL VIVENCIAR & COGNICIÓN</span>
          <span class="modal-area-pill">🔬 ÁREA: EVALUACIÓN NEUROPSICOLÓGICA</span>
          <span class="modal-area-pill">🩺 ÁREA: EXAMEN MENTAL</span>
        </div>
        <h2 class="orientation-main-title">Evaluación de la memoria inmediata y operativa (Span de Trabajo)</h2>
        <p class="orientation-authors-meta">Modelo de Baddeley • Ricardo Capponi (Págs. 149-154) • Belloch (Vol. 1, Cap. 7, Págs. 177-195)</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">FUNDAMENTACIÓN NEUROPSICOLÓGICA</div>
        <h3 class="orientation-sec-title">Bucle Fonológico y Ejecutivo Central</h3>
        <p class="orientation-p">
          La <strong>memoria inmediata</strong> evalúa la capacidad de almacenamiento pasivo del bucle fonológico (Dígitos Directos: retención de 7 ± 2 elementos). La <strong>memoria de trabajo</strong> requiere manipular y transformar la información mientras se retiene mediante el ejecutivo central prefrontal dorsolateral (Dígitos Inversos: normal ≥ 4-5).
        </p>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PROTOCOLOS DE PRUEBA</div>
        <h3 class="orientation-sec-title">Series Estandarizadas de Dígitos Directos e Inversos</h3>
        <p class="orientation-p">
          Lea cada dígito a razón de exactamente <strong>uno por segundo</strong> con tono plano, sin agrupar por pares:
        </p>
        <div style="background: rgba(255, 255, 255, 0.7); border: 1px solid var(--border-color); border-radius: 8px; padding: 0.85rem; font-family: monospace; font-size: 0.95rem; line-height: 1.6;">
          <strong>Dígitos Directos:</strong><br/>
          Intento 3: 5 - 8 - 2<br/>
          Intento 4: 6 - 4 - 3 - 9<br/>
          Intento 5: 4 - 2 - 7 - 3 - 1<br/>
          Intento 6: 6 - 1 - 9 - 4 - 7 - 3<br/>
          Intento 7: 5 - 9 - 1 - 7 - 4 - 2 - 8<br/>
          Intento 8: 5 - 8 - 1 - 9 - 2 - 6 - 4 - 7<br/><br/>
          <strong>Dígitos Inversos (El paciente debe decirlos al revés):</strong><br/>
          Intento 3: 2 - 8 - 3 [Respuesta correcta: 3 - 8 - 2]<br/>
          Intento 4: 3 - 2 - 7 - 9 [Respuesta correcta: 9 - 7 - 2 - 3]<br/>
          Intento 5: 4 - 9 - 6 - 8 - 2 [Respuesta correcta: 2 - 8 - 6 - 9 - 4]<br/>
          Intento 6: 1 - 5 - 2 - 8 - 6 - 3 [Respuesta correcta: 3 - 6 - 8 - 2 - 5 - 1]
        </div>
        ${renderCitationsBanner([
          { bookId: 'capponi-psicopatologia', page: 149, author: 'Ricardo Capponi', title: 'Psicología y Psicopatología de la Memoria' },
          { bookId: 'belloch-psicopatologia-vol1', page: 177, author: 'Belloch, Sandín y Ramos', title: 'Cap. 7: Memoria Operativa y Bucle Fonológico' }
        ])}
      </section>
    </div>
  `,

  'evaluacion-memoria-largo-plazo': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">📚 INSTRUMENTO DEL VIVENCIAR & CONSOLIDACIÓN</span>
          <span class="modal-area-pill">🔬 ÁREA: EVALUACIÓN CLÍNICA</span>
          <span class="modal-area-pill">🩺 ÁREA: EXAMEN MENTAL</span>
        </div>
        <h2 class="orientation-main-title">Evaluación de memoria a largo plazo y evocación diferida</h2>
        <p class="orientation-authors-meta">Ricardo Capponi (Págs. 149-154) • APIR (Págs. 38-41) • Síndrome de Korsakoff</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SEMIOLOGÍA DEL RECUERDO</div>
        <h3 class="orientation-sec-title">Consolidación Hipocámpica vs. Recuperación Frontal</h3>
        <p class="orientation-lead-p">
          Ricardo Capponi (p. 151) distingue la <strong>amnesia de fijación</strong> (incapacidad de consolidar nuevas vivencias en el hipocampo) de la <strong>amnesia de evocación</strong> (dificultad para rescatar recuerdos del pasado):
        </p>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Patología Hipocámpica</span>
            <h4 class="dim-name">Falla de Almacenamiento (Alzheimer)</h4>
            <p class="dim-desc">El paciente no recuerda la palabra en recuerdo libre, y tampoco la reconoce cuando se le ofrece una pista o entre una lista de alternativas. La huella mnésica se perdió.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Patología Subcortical / Depresiva</span>
            <h4 class="dim-name">Falla de Recuperación</h4>
            <p class="dim-desc">El paciente no evoca la palabra espontáneamente, pero en cuanto el clínico le da la categoría semántica (<em>«era una fruta»</em>) o la opción múltiple, la reconoce de inmediato al 100%.</p>
          </div>
        </div>
        ${renderCitationsBanner([
          { bookId: 'capponi-psicopatologia', page: 151, author: 'Ricardo Capponi', title: 'Trastornos Cuantitativos de la Memoria y Amnesia de Fijación' },
          { bookId: 'capponi-psicopatologia', page: 219, author: 'Ricardo Capponi', title: 'Síndrome de Korsakoff y Confabulación' },
          { bookId: 'apir-psicopatologia', page: 38, author: 'Manual APIR', title: 'Tema 5: Psicopatología de la Memoria y Demencias' }
        ])}
      </section>
    </div>
  `,

  'evaluacion-conciencia-glasgow': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">👁️ ESCALA CLÍNICA UNIVERSAL</span>
          <span class="modal-area-pill">🩺 ÁREA: URGENCIAS & CONCIENCIA</span>
          <span class="modal-area-pill">🔬 ÁREA: NEUROLOGÍA</span>
        </div>
        <h2 class="orientation-main-title">Escala de coma de Glasgow (GCS): nivel de conciencia cuantitativo</h2>
        <p class="orientation-authors-meta">Graham Teasdale y Bryan Jennett (1974) • Monitorización del Nivel de Conciencia (3 a 15 pts)</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">DESGLOSE DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Los Tres Parámetros de la Escala de Glasgow</h3>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Respuesta Ocular (1-4 pts)</th>
                <th>Respuesta Verbal (1-5 pts)</th>
                <th>Respuesta Motora (1-6 pts)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>4 - Espontánea</td>
                <td>5 - Orientado y conversa</td>
                <td>6 - Obedece órdenes motoras</td>
              </tr>
              <tr>
                <td>3 - Al estímulo verbal</td>
                <td>4 - Desorientado / Confuso</td>
                <td>5 - Localiza estímulo doloroso</td>
              </tr>
              <tr>
                <td>2 - Al estímulo doloroso</td>
                <td>3 - Palabras inapropiadas</td>
                <td>4 - Retirada en flexión</td>
              </tr>
              <tr>
                <td>1 - Ninguna respuesta</td>
                <td>2 - Sonidos incomprensibles</td>
                <td>3 - Flexión anormal (Decorticación)</td>
              </tr>
              <tr>
                <td>-</td>
                <td>1 - Ninguna respuesta</td>
                <td>2 - Extensión anormal (Descerebración)</td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>1 - Ninguna respuesta (Flacidez)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-primary); margin-top: 0.75rem;">
          <strong>Estratificación de Gravedad:</strong> Leve (13-15 pts), Moderado (9-12 pts), Grave (≤ 8 pts → Criterio universal de protección de vía aérea e intubación orotraqueal).
        </p>
        ${renderCitationsBanner([
          { bookId: 'capponi-psicopatologia', page: 146, author: 'Ricardo Capponi', title: 'Semiología de la Conciencia y Nivel de Alerta' },
          { bookId: 'apir-psicopatologia', page: 21, author: 'Manual APIR', title: 'Tema 3: Trastornos Cuantitativos de la Conciencia' }
        ])}
      </section>
    </div>
  `,

  'evaluacion-conciencia-delirium-cam': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">⚡ SÍNDROME CONFUSIONAL AGUDO</span>
          <span class="modal-area-pill">🩺 ÁREA: EXAMEN MENTAL</span>
          <span class="modal-area-pill">🔬 ÁREA: MEDICINA DE ENLACE</span>
        </div>
        <h2 class="orientation-main-title">Evaluación cualitativa de la conciencia y Delirium (Algoritmo CAM)</h2>
        <p class="orientation-authors-meta">Confusion Assessment Method (CAM - Inouye et al., 1990) • Ricardo Capponi (Pág. 204)</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">ALGORITMO CAM</div>
        <h3 class="orientation-sec-title">Los 4 Criterios Cardinales del Delirium</h3>
        <p class="orientation-p">
          Para confirmar la presencia de Síndrome Confusional Agudo se requiere la presencia obligatoria de los criterios <strong>1 y 2</strong>, más el criterio <strong>3 o el 4</strong>:
        </p>
        <ul class="orientation-checklist">
          <li><strong>Criterio 1: Comienzo agudo y curso fluctuante:</strong> ¿Hay evidencia de un cambio repentino respecto al estado basal del paciente y fluctúa a lo largo del día (empeora al caer la tarde)?</li>
          <li><strong>Criterio 2: Desatención:</strong> ¿El paciente tiene dificultad para fijar y mantener la atención (se distrae continuamente o no puede deletrear M-U-N-D-O al revés)?</li>
          <li><strong>Criterio 3: Pensamiento desorganizado:</strong> ¿El discurso es incoherente, errático o pasa de un tema a otro sin lógica?</li>
          <li><strong>Criterio 4: Nivel de conciencia alterado:</strong> ¿El estado de alerta se encuentra alterado (hiperalerta, letárgico, soporoso o estuporoso)?</li>
        </ul>
        ${renderCitationsBanner([
          { bookId: 'capponi-psicopatologia', page: 204, author: 'Ricardo Capponi', title: 'Semiología del Síndrome Confusional Agudo' },
          { bookId: 'apir-psicopatologia', page: 21, author: 'Manual APIR', title: 'Psicopatología de la Conciencia: Estados Confusionales' }
        ])}
      </section>
    </div>
  `,

  'evaluacion-afectividad-animo': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">🎭 ELEMENTO DEL VIVENCIAR & AFECTIVIDAD</span>
          <span class="modal-area-pill">🧬 ÁREA: PSICOPATOLOGÍA</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA</span>
        </div>
        <h2 class="orientation-main-title">Evaluación del humor, estado de ánimo y modulación afectiva</h2>
        <p class="orientation-authors-meta">Ricardo Capponi (Págs. 80-100) • APIR (Págs. 59-60) • Semiología de los Sentimientos</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SEMIOLOGÍA DEL ÁNIMO</div>
        <h3 class="orientation-sec-title">Exploración de la Tríada Afectiva de Capponi</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Humor Basal</span>
            <h4 class="dim-name">1. Estado de Ánimo de Fondo</h4>
            <p class="dim-desc">Eutimia (normal), Tristeza vital melancólica (pesadumbre somática profunda), Euforia / Manía expansiva, o Disforia (humor amargo, irritable y quejumbroso).</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Reactividad</span>
            <h4 class="dim-name">2. Modulación Emocional</h4>
            <p class="dim-desc">Capacidad del afecto de variar ante estímulos externos cálidos. Su ausencia constituye el <em>aplanamiento</em> (esquizofrenia) o el <em>embotamiento</em> afectivo.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Concordancia</span>
            <h4 class="dim-name">3. Paratimia o Incongruencia</h4>
            <p class="dim-desc">Falta de armonía entre el contenido del discurso y la expresión afectiva (Ej. sonreír abiertamente mientras relata la muerte trágica de un hijo).</p>
          </div>
        </div>
        ${renderCitationsBanner([
          { bookId: 'capponi-psicopatologia', page: 80, author: 'Ricardo Capponi', title: 'Psicología y Psicopatología de la Afectividad' },
          { bookId: 'capponi-psicopatologia', page: 88, author: 'Ricardo Capponi', title: 'Trastornos de los Sentimientos de Estado y Tristeza Vital' },
          { bookId: 'apir-psicopatologia', page: 59, author: 'Manual APIR', title: 'Tema 8: Psicopatología de la Afectividad' }
        ])}
      </section>
    </div>
  `,

  'evaluacion-riesgo-suicida': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">🛡️ URGENCIAS PSIQUIÁTRICAS & PREVENCIÓN</span>
          <span class="modal-area-pill">🩺 ÁREA: EVALUACIÓN DEL RIESGO VITAL</span>
        </div>
        <h2 class="orientation-main-title">Evaluación multidimensional del riesgo suicida (C-SSRS y Factores Clínicos)</h2>
        <p class="orientation-authors-meta">Columbia-Suicide Severity Rating Scale (C-SSRS) • Posner et al. • Protocolo de Seguridad PsiOS</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">C-SSRS GRADUADO</div>
        <h3 class="orientation-sec-title">Niveles de Ideación Suicida y Planificación</h3>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Nivel</th>
                <th>Severidad de la Ideación</th>
                <th>Pregunta Semiográfica Exacta</th>
                <th>Conducta Clínica Requerida</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1</strong></td>
                <td>Deseo pasivo de muerte</td>
                <td><em>«¿Ha deseado estar muerto o dormirse y no despertar jamás?»</em></td>
                <td>Manejo ambulatorio con red de apoyo.</td>
              </tr>
              <tr>
                <td><strong>2</strong></td>
                <td>Ideación suicida activa inespecífica</td>
                <td><em>«¿Ha pensado en suicidarse o quitarse la vida?»</em></td>
                <td>Cita prioritaria de salud mental en 48h.</td>
              </tr>
              <tr>
                <td><strong>3</strong></td>
                <td>Ideación activa con método</td>
                <td><em>«¿Ha pensado en qué método usaría para hacerlo?»</em></td>
                <td>Retiro de fármacos letales y armas.</td>
              </tr>
              <tr>
                <td><strong>4</strong></td>
                <td>Ideación con intención manifiesta</td>
                <td><em>«¿Tiene la intención o decisión tomada de llevarlo a cabo?»</em></td>
                <td>Acompañamiento 24h obligatorio.</td>
              </tr>
              <tr>
                <td><strong>5</strong></td>
                <td>Plan estructurado y letalidad</td>
                <td><em>«¿Tiene una fecha, lugar, carta de despedida o preparativos?»</em></td>
                <td><strong>Hospitalización psiquiátrica de urgencia</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>
        ${renderCitationsBanner([
          { bookId: 'capponi-psicopatologia', page: 88, author: 'Ricardo Capponi', title: 'Semiología de la Depresión Grave y Riesgo Suicida' },
          { bookId: 'apir-psicopatologia', page: 59, author: 'Manual APIR', title: 'Evaluación del Estado Afectivo y Desesperanza' }
        ])}
      </section>
    </div>
  `,

  'evaluacion-ansiedad-panico': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">💓 ELEMENTO DEL VIVENCIAR & ANGUSTIA</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA CLÍNICA</span>
        </div>
        <h2 class="orientation-main-title">Evaluación semiológica de la ansiedad, angustia y crisis de pánico</h2>
        <p class="orientation-authors-meta">Ricardo Capponi (Págs. 80-100) • Manual Belloch (Vol. 2, Cap. 2) • Criterios DSM/CIE</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">LOS 13 SÍNTOMAS DEL PÁNICO</div>
        <h3 class="orientation-sec-title">Inventario de Síntomas del Ataque de Pánico (Pico en &lt; 10 min)</h3>
        <p class="orientation-p">
          Requiere la aparición súbita de al menos <strong>4 de los siguientes síntomas</strong>:
        </p>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Cardiorrespiratorio</span>
            <ul style="margin: 0; padding-left: 1.1rem; font-size: 0.85rem; line-height: 1.6;">
              <li>1. Palpitaciones o taquicardia</li>
              <li>2. Sensación de ahogo o disnea</li>
              <li>3. Opresión o dolor torácico</li>
              <li>4. Sensación de atragantamiento</li>
            </ul>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Neurovegetativo</span>
            <ul style="margin: 0; padding-left: 1.1rem; font-size: 0.85rem; line-height: 1.6;">
              <li>5. Sudoración intensa</li>
              <li>6. Temblores o sacudidas</li>
              <li>7. Mareo o sensación de desmayo</li>
              <li>8. Náuseas o malestar abdominal</li>
              <li>9. Parestesias (hormigueo)</li>
              <li>10. Escalofríos o sofocaciones</li>
            </ul>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Cognitivo / Yoico</span>
            <ul style="margin: 0; padding-left: 1.1rem; font-size: 0.85rem; line-height: 1.6;">
              <li>11. Despersonalización / Desrealización</li>
              <li>12. Miedo a morir de un infarto</li>
              <li>13. Miedo a perder el control o enloquecer</li>
            </ul>
          </div>
        </div>
        ${renderCitationsBanner([
          { bookId: 'capponi-psicopatologia', page: 82, author: 'Ricardo Capponi', title: 'Psicopatología de la Angustia Somatizada' }
        ])}
      </section>
    </div>
  `,

  'evaluacion-deterioro-cognitivo-minimental': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">📊 INSTRUMENTO PSICOMÉTRICO ESTANDARIZADO</span>
          <span class="modal-area-pill">🩺 ÁREA: COGNICIÓN & DEMENCIAS</span>
        </div>
        <h2 class="orientation-main-title">Examen cognoscitivo Mini-Mental State Examination (MMSE de Folstein)</h2>
        <p class="orientation-authors-meta">Marshal F. Folstein et al. (1975) • Batería de 30 Puntos para Detección de Deterioro Cognitivo</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PAUTA COMPLETA DE 30 PUNTOS</div>
        <h3 class="orientation-sec-title">Estructura y Puntuación por Ítem</h3>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Dominio Cognitivo</th>
                <th>Prueba de Administración Específica</th>
                <th>Puntos Máximos</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Orientación Temporal</strong></td>
                <td>¿En qué año (1), estación (1), mes (1), fecha de hoy (1) y día de la semana (1) estamos?</td>
                <td>5 puntos</td>
              </tr>
              <tr>
                <td><strong>Orientación Espacial</strong></td>
                <td>¿En qué lugar/hospital (1), piso (1), comuna/ciudad (1), provincia/región (1) y país (1) estamos?</td>
                <td>5 puntos</td>
              </tr>
              <tr>
                <td><strong>Fijación Inmediata</strong></td>
                <td>Repetir con claridad 3 palabras no asociadas: Papel, Caballo, Manzana (1 pt por palabra al 1er intento).</td>
                <td>3 puntos</td>
              </tr>
              <tr>
                <td><strong>Atención y Cálculo</strong></td>
                <td>Restar de 7 en 7 desde 100 (100 - 93 - 86 - 79 - 72 - 65) o deletrear M-U-N-D-O al revés (O-D-N-U-M).</td>
                <td>5 puntos</td>
              </tr>
              <tr>
                <td><strong>Memoria Diferida</strong></td>
                <td>¿Recuerda las tres palabras que le pedí que repitiera hace unos minutos? (Papel, Caballo, Manzana).</td>
                <td>3 puntos</td>
              </tr>
              <tr>
                <td><strong>Denominación</strong></td>
                <td>Mostrar un lápiz y un reloj de pulsera: ¿Cómo se llama este objeto? (1 pt cada uno).</td>
                <td>2 puntos</td>
              </tr>
              <tr>
                <td><strong>Repetición Verbal</strong></td>
                <td>Repetir exactamente la frase: «Ni sí, ni no, ni un pero» (1 pt si es perfecta).</td>
                <td>1 punto</td>
              </tr>
              <tr>
                <td><strong>Orden en 3 Pasos</strong></td>
                <td>«Tome este papel con la mano derecha, dóblelo por la mitad y déjelo en el suelo» (1 pt por paso).</td>
                <td>3 puntos</td>
              </tr>
              <tr>
                <td><strong>Lectura y Ejecución</strong></td>
                <td>Mostrar tarjeta con texto en grande: «CIERRE LOS OJOS» (1 pt si lee y ejecuta).</td>
                <td>1 punto</td>
              </tr>
              <tr>
                <td><strong>Escritura Espontánea</strong></td>
                <td>Escriba una oración completa que tenga sentido (sujeto y predicado con verbo).</td>
                <td>1 punto</td>
              </tr>
              <tr>
                <td><strong>Copia de Pentágonos</strong></td>
                <td>Copiar dos pentágonos cruzados que formen un rombo de intersección de 4 lados.</td>
                <td>1 punto</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style="font-size: 0.88rem; color: var(--text-primary); margin-top: 0.75rem;">
          <strong>Punto de Corte Ajustado:</strong> &lt; 24 puntos indica sospecha firme de deterioro cognitivo en personas alfabetizadas; &lt; 20 puntos en personas con baja escolaridad.
        </p>
        ${renderCitationsBanner([
          { bookId: 'capponi-psicopatologia', page: 131, author: 'Ricardo Capponi', title: 'Psicopatología de la Inteligencia y Demencias' },
          { bookId: 'apir-psicopatologia', page: 40, author: 'Manual APIR', title: 'Evaluación del Deterioro Cognitivo y Demencias' }
        ])}
      </section>
    </div>
  `,

  'evaluacion-consumo-alcohol-cage': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">🍷 CONDUCTAS BÁSICAS & ADICCIONES</span>
          <span class="modal-area-pill">🩺 ÁREA: TAMIZAJE CLÍNICO RÁPIDO</span>
        </div>
        <h2 class="orientation-main-title">Cuestionario de tamizaje de consumo problemático de alcohol (CAGE)</h2>
        <p class="orientation-authors-meta">John A. Ewing (1984) • 4 Preguntas de Cribado Rápido con Alta Sensibilidad</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PREGUNTAS DEL CAGE</div>
        <h3 class="orientation-sec-title">Las Cuatro Preguntas del Cuestionario CAGE</h3>
        <ul class="orientation-checklist">
          <li><strong>C (Cut down):</strong> ¿Ha sentido alguna vez la necesidad de disminuir o cortar la cantidad de alcohol que bebe?</li>
          <li><strong>A (Annoyed):</strong> ¿Le ha molestado que la gente le critique su forma de beber?</li>
          <li><strong>G (Guilty):</strong> ¿Se ha sentido alguna vez mal o culpable por su forma de beber?</li>
          <li><strong>E (Eye-opener):</strong> ¿Ha tomado alguna vez un trago a primera hora de la mañana para calmar los nervios o librarse de la resaca?</li>
        </ul>
        <div style="padding: 0.9rem; background: rgba(239, 68, 68, 0.08); border-left: 3px solid #ef4444; border-radius: 0 8px 8px 0; margin-top: 0.75rem;">
          <strong style="color: #b91c1c;">Criterio de Baremación:</strong>
          <span style="font-size: 0.85rem; color: var(--text-primary); display: block; margin-top: 0.2rem;">
            2 o más respuestas positivas presentan una sensibilidad del 93% y especificidad del 86% para dependencia alcohólica clínicamente significativa.
          </span>
        </div>
        ${renderCitationsBanner([
          { bookId: 'belloch-psicopatologia-vol1', page: 355, author: 'Belloch, Sandín y Ramos', title: 'Cap. 13: Psicopatología del Alcoholismo y Dependencia' }
        ])}
      </section>
    </div>
  `,

  'evaluacion-examen-estado-mental-global': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">🩺 SEMIOGRAFÍA INTEGRAL DEL VIVENCIAR</span>
          <span class="modal-area-pill">🔬 ÁREA: EVALUACIÓN CLÍNICA COMPLETA</span>
        </div>
        <h2 class="orientation-main-title">Examen del Estado Mental Global (EEMG - Pauta Semiográfica Completa)</h2>
        <p class="orientation-authors-meta">Ricardo Capponi (Estructura del Vivenciar) • Pauta Semiográfica Oficial de PsiOS</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PAUTA INTEGRAL</div>
        <h3 class="orientation-sec-title">Exploración Sistemática de las 8 Esferas Clínicas</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Esfera 1</span>
            <h4 class="dim-name">Porte, Actitud y Aspecto</h4>
            <p class="dim-desc">Aseo, aliño personal, contacto visual, cooperación y actitud (recelosa, hostil, demandante, seductora o pueril).</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Esfera 2</span>
            <h4 class="dim-name">Conciencia y Alerta</h4>
            <p class="dim-desc">Lucidez, embotamiento, somnolencia, sopor, estado crepuscular o delirium fluctuante.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Esfera 3</span>
            <h4 class="dim-name">Atención y Orientación</h4>
            <p class="dim-desc">Orientación alopsíquica témporo-espacial y autopsíquica sobre sí mismo.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Esfera 4</span>
            <h4 class="dim-name">Sensopercepción</h4>
            <p class="dim-desc">Presencia o ausencia de ilusiones, alucinaciones (auditivas, visuales), pseudoalucinaciones y alucinosis.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Esfera 5</span>
            <h4 class="dim-name">Pensamiento (Curso y Contenido)</h4>
            <p class="dim-desc">Velocidad, coherencia asociativa, ideas delirantes primarias/secundarias, obsesiones y pasividad.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Esfera 6</span>
            <h4 class="dim-name">Afectividad</h4>
            <p class="dim-desc">Humor basal, modulación afectiva, congruencia, aplanamiento, labilidad y pesquisa de riesgo suicida.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Esfera 7</span>
            <h4 class="dim-name">Psicomotricidad</h4>
            <p class="dim-desc">Inquietud, marcha, acatisia, temblores, tics, rigidez en rueda dentada o signos catatónicos.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Esfera 8</span>
            <h4 class="dim-name">Juicio Crítico e Insight</h4>
            <p class="dim-desc">Grado de conciencia de enfermedad, necesidad de tratamiento y verosimilitud de metas a futuro.</p>
          </div>
        </div>
        ${renderCitationsBanner([
          { bookId: 'capponi-psicopatologia', page: 201, author: 'Ricardo Capponi', title: 'Capítulo IV: Método Fenomenológico y Semiografía Integral' }
        ])}
      </section>
    </div>
  `,

  'evaluacion-sintomas-negativos': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">📉 DEFECTO ESQUIZOFRÉNICO & SANS</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA CLÍNICA</span>
        </div>
        <h2 class="orientation-main-title">Evaluación semiológica de síntomas negativos (SANS / Defecto Esquizofrénico)</h2>
        <p class="orientation-authors-meta">Nancy Andreasen (Scale for the Assessment of Negative Symptoms) • Ricardo Capponi (Pág. 210)</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">LAS 5 DIMENSIONES SANS</div>
        <h3 class="orientation-sec-title">Exploración de la Pérdida de Funciones Psíquicas</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Aplanamiento</span>
            <h4 class="dim-name">1. Aplanamiento Afectivo</h4>
            <p class="dim-desc">Inexpresividad facial fija, mirada no reactiva, falta de modulación vocal (monótona) y ausencia de gestos corporales comunicativos.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Alogia</span>
            <h4 class="dim-name">2. Alogia (Pobreza del Habla)</h4>
            <p class="dim-desc">Respuestas lacónicas con monosílabos («sí», «no»), latencia prolongada y discursos vacíos sin contenido semántico informativo.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Abulia / Apatía</span>
            <h4 class="dim-name">3. Avolición y Abandono</h4>
            <p class="dim-desc">Falta de iniciativa para iniciar o completar tareas básicas, abandono absoluto del aseo y descuido higiénico.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Anhedonia</span>
            <h4 class="dim-name">4. Anhedonia y Asociabilidad</h4>
            <p class="dim-desc">Incapacidad de disfrutar de actividades placenteras y retiro progresivo de todo contacto social o afectivo.</p>
          </div>
        </div>
        ${renderCitationsBanner([
          { bookId: 'capponi-psicopatologia', page: 210, author: 'Ricardo Capponi', title: 'Síndrome Esquizofrénico y Defecto Afectivo' },
          { bookId: 'apir-psicopatologia', page: 46, author: 'Manual APIR', title: 'Síntomas Positivos vs. Negativos en Psicosis' }
        ])}
      </section>
    </div>
  `,

  'evaluacion-sintomas-obsesivos-ybocs': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">🔄 CUANTIFICACIÓN TOC & Y-BOCS</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA CLÍNICA</span>
        </div>
        <h2 class="orientation-main-title">Evaluación semiológica de obsesiones y compulsiones (Escala Y-BOCS)</h2>
        <p class="orientation-authors-meta">Wayne K. Goodman et al. (1989) • Puntuación de 0 a 40 Puntos • APIR & Capponi</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">DIMENSIONES Y-BOCS</div>
        <h3 class="orientation-sec-title">Los 10 Ítems Cardinales de Severidad</h3>
        <p class="orientation-p">
          Evalúa obsesiones (ítems 1-5) y compulsiones (ítems 6-10) en escala de 0 (ninguno) a 4 (extremo):
        </p>
        <ul class="orientation-checklist">
          <li><strong>1 & 6. Tiempo Ocupado:</strong> ¿Cuánto tiempo diario le quitan las obsesiones / compulsiones? (De 0 pts a &gt; 8 h/día = 4 pts).</li>
          <li><strong>2 & 7. Interferencia Funcional:</strong> ¿Cuánto interfieren en su vida social, laboral o académica?</li>
          <li><strong>3 & 8. Angustia / Malestar:</strong> ¿Cuánta ansiedad le provocan si no puede realizar el ritual?</li>
          <li><strong>4 & 9. Resistencia:</strong> ¿Cuánto esfuerzo activo hace por ignorar o expulsar la idea?</li>
          <li><strong>5 & 10. Grado de Control:</strong> ¿Cuánto control real logra ejercer para detener el ritual?</li>
        </ul>
        ${renderCitationsBanner([
          { bookId: 'capponi-psicopatologia', page: 72, author: 'Ricardo Capponi', title: 'Diagnóstico Diferencial: Delirios vs. Ideas Obsesivas' },
          { bookId: 'apir-psicopatologia', page: 47, author: 'Manual APIR', title: 'Tabla 5: Comparación de Delirios vs. Ideas Obsesivas' }
        ])}
      </section>
    </div>
  `,

  'evaluacion-signos-extrapiramidales': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">⚙️ PSICOMOTRICIDAD & FARMACOVIGILANCIA</span>
          <span class="modal-area-pill">🩺 ÁREA: NEUROPSIQUIATRÍA</span>
        </div>
        <h2 class="orientation-main-title">Evaluación semiológica de signos extrapiramidales inducidos (SAS / BARS)</h2>
        <p class="orientation-authors-meta">Simpson-Angus Scale (SAS) • Barnes Akathisia (BARS) • Ricardo Capponi (Pág. 101) • Belloch (Cap. 17)</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">CUATRO GRANDES SÍNDROMES MOTORES</div>
        <h3 class="orientation-sec-title">Exploración Específica por Trastorno Inducido</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Urgencia Inquieta</span>
            <h4 class="dim-name">1. Acatisia</h4>
            <p class="dim-desc">Inquietud subjetiva intolerable con necesidad imperiosa de mover las piernas continuamente, balancearse o caminar sin rumbo.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Espasmo Agudo</span>
            <h4 class="dim-name">2. Distonía Aguda</h4>
            <p class="dim-desc">Contracciones musculares espasmódicas dolorosas e involuntarias: crisis oculógiras (ojos en blanco), tortícolis o trismus.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Bradicinesia</span>
            <h4 class="dim-name">3. Parkinsonismo Medicamentoso</h4>
            <p class="dim-desc">Rigidez muscular en «rueda dentada», temblor distal de reposo a 4-6 Hz, marcha a pequeños pasos y facies inexpresiva.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Crónico / Tardío</span>
            <h4 class="dim-name">4. Discinesia Tardía</h4>
            <p class="dim-desc">Movimientos involuntarios coreoatetósicos repetitivos en boca, lengua y mandíbula tras meses o años de antipsicóticos.</p>
          </div>
        </div>
        ${renderCitationsBanner([
          { bookId: 'capponi-psicopatologia', page: 101, author: 'Ricardo Capponi', title: 'Psicología y Psicopatología de la Psicomotricidad (Conación)' },
          { bookId: 'belloch-psicopatologia-vol1', page: 449, author: 'Belloch, Sandín y Ramos', title: 'Cap. 17: Trastornos Psicomotores y Efectos Extrapiramidales' }
        ])}
      </section>
    </div>
  `,

  'evaluacion-fobias-ansiedad-social': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">👥 ANSIEDAD SOCIAL & FOBIAS</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA CLÍNICA</span>
        </div>
        <h2 class="orientation-main-title">Evaluación semiológica de fobias específicas y ansiedad social (LSAS)</h2>
        <p class="orientation-authors-meta">Liebowitz Social Anxiety Scale (LSAS) • Manual Belloch (Vol. 2) • APIR</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">DIMENSIONES LSAS</div>
        <h3 class="orientation-sec-title">Miedo vs. Evitación en Situaciones Sociales</h3>
        <p class="orientation-p">
          La fobia social se caracteriza por el miedo persistente e irracional a ser juzgado, criticado o humillado por los demás al hablar en público, comer ante extraños o interactuar con figuras de autoridad.
        </p>
      </section>
    </div>
  `,

  'evaluacion-mimica-expresion-facial': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">😐 PSICOMOTRICIDAD & EXPRESIÓN</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA CLÍNICA</span>
        </div>
        <h2 class="orientation-main-title">Evaluación semiológica de la mímica y expresión psicomotora</h2>
        <p class="orientation-authors-meta">Ricardo Capponi (Págs. 101-115) • Semiología de la Mímica y Facies</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SEMIOGRAFÍA FACIAL</div>
        <h3 class="orientation-sec-title">Trastornos de la Expresión Mímica</h3>
        <ul class="orientation-checklist">
          <li><strong>Amimia / Hipomimia:</strong> Inexpresividad facial o máscara (Parkinson, depresión melancólica con signo de Veraguth).</li>
          <li><strong>Hipermimia:</strong> Exageración de los gestos faciales, gesticulación desbordante (episodio maníaco).</li>
          <li><strong>Paramimia (Discordancia):</strong> Disociación entre el contenido del pensamiento y la expresión mímica (risa bizarra ante hechos trágicos en esquizofrenia).</li>
          <li><strong>Ecomimia:</strong> Imitación automática involuntaria de los gestos del examinador.</li>
        </ul>
        ${renderCitationsBanner([
          { bookId: 'capponi-psicopatologia', page: 101, author: 'Ricardo Capponi', title: 'Psicopatología de la Mímica y Psicomotricidad' }
        ])}
      </section>
    </div>
  `,

  'evaluacion-apego-vinculo-infantil': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">👶 DESARROLLO INFANTIL & VÍNCULO</span>
          <span class="modal-area-pill">🩺 ÁREA: NEURODESARROLLO</span>
        </div>
        <h2 class="orientation-main-title">Evaluación del apego y vínculo temprano (Situación del Extraño de Ainsworth)</h2>
        <p class="orientation-authors-meta">Mary Ainsworth & John Bowlby • Procedimiento Estandarizado de la Situación del Extraño</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">LOS 4 PATRONES DE APEGO</div>
        <h3 class="orientation-sec-title">Clasificación Observacional en Lactantes (12-24 meses)</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Tipo B</span>
            <h4 class="dim-name">Apego Seguro</h4>
            <p class="dim-desc">Explora el entorno libremente en presencia de la madre, muestra malestar en la separación y busca consuelo activo en el reencuentro, calmándose rápidamente.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Tipo A</span>
            <h4 class="dim-name">Inseguro-Evitativo</h4>
            <p class="dim-desc">Aparenta indiferencia ante la partida de la madre y la ignora o esquiva activamente en el reencuentro (supresión emocional defensiva).</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Tipo C</span>
            <h4 class="dim-name">Inseguro-Ambivalente</h4>
            <p class="dim-desc">Ansiedad extrema ante la separación, pero en el reencuentro busca el contacto al tiempo que patalea, llora o rechaza a la madre sin lograr calmarse.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Tipo D</span>
            <h4 class="dim-name">Desorganizado (Main)</h4>
            <p class="dim-desc">Conductas contradictorias, posturas de congelamiento (freezing) y miedo evidente a la figura de apego. Alto riesgo de negligencia o maltrato.</p>
          </div>
        </div>
      </section>
    </div>
  `
};

/* ==========================================================================
   EVENT LISTENERS SETUP FOR MODAL INTERACTIONS
   ========================================================================== */

export function setupAdditionalModalListeners(itemId, modalContent, controller) {
  if (!modalContent || !controller) return;

  // Jump buttons to exact book pages in Native PDF Reader
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
  const btnGotoPersonalidadSub = modalContent.querySelector('#btn-goto-personalidad-sub');
  if (btnGotoPersonalidadSub) {
    btnGotoPersonalidadSub.addEventListener('click', () => controller.openResourceModal('trastornos-personalidad'));
  }
  const btnGotoYoSub = modalContent.querySelector('#btn-goto-yo-sub');
  if (btnGotoYoSub) {
    btnGotoYoSub.addEventListener('click', () => controller.openResourceModal('psicopatologia-del-yo'));
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
