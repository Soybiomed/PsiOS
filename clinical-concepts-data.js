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
    academicAffiliation: 'Ricardo Capponi (Págs. 64-70) • Manual Belloch (Vol. 1, Cap. 8) • APIR • Tests Psicológicos (Anastasi & Urbina, Pág. 210) • EAD-1 (Nelson Ortiz, Pág. 34)',
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
    academicAffiliation: 'Ricardo Capponi (Págs. 71-85) • Manual Belloch (Vol. 1, Cap. 9) • APIR • Tests Psicológicos (Anastasi & Urbina, Pág. 355: MMPI-2 y Escalas L, F, K)',
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
    academicAffiliation: 'Folstein MMSE • Tests Psicológicos (Anastasi & Urbina, Pág. 490: Baremos y EEM) • EAD-1 (Nelson Ortiz, Pág. 50: Involución vs. Desarrollo) • Capponi',
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
    academicAffiliation: 'Psicopatología de la Expresión Facial (Capponi Págs. 101-115) • EAD-1 (Nelson Ortiz, Pág. 36) • Tests Psicológicos (Anastasi & Urbina, Pág. 460)',
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
    academicAffiliation: 'Teoría del Apego (Bowlby & Ainsworth) • Escala Abreviada de Desarrollo EAD-1 (Nelson Ortiz, Págs. 38-42) • Tests Psicológicos (Anastasi & Urbina, Pág. 325)',
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
          { bookId: 'apir-psicopatologia', page: 44, author: 'Manual APIR', title: 'Tema 6: Trastornos Formales vs. Contenido del Pensamiento' },
          { bookId: 'tests-psicologicos-anastasi-urbina', page: 210, author: 'Anne Anastasi & Susana Urbina', title: 'Evaluación Psicométrica de la Fluidez Verbal y Velocidad de Procesamiento (Cap. 9)' },
          { bookId: 'nelson-ortiz-escala-abreviada', page: 34, author: 'Nelson Ortiz Pinilla', title: 'Área C (Audición y Lenguaje): Hitos Evolutivos del Discurso y Gramática EAD-1' }
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
            <p class="orientation-authors-meta">Exploración Semiográfica Directa • Débito Verbal, Ritmo & Asociación • Escala TLC de Andreasen</p>
          </div>
          <button type="button" class="btn-back-to-def" id="btn-back-curso-pensamiento-def">
            ← Ver Definición y Semiología
          </button>
        </div>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PASO 1: MEDICIÓN CUANTITATIVA</div>
        <h3 class="orientation-sec-title">Medición de la Latencia y Débito Verbal</h3>
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
        <div class="orientation-section-badge">PASO 2: SONDEO ASOCIATIVO</div>
        <h3 class="orientation-sec-title">Preguntas de Sondeo de Direccionalidad Asociativa</h3>
        <p class="orientation-p">
          Realice preguntas abiertas complejas que requieran elaborar una respuesta secuencial con principio, desarrollo y conclusión:
        </p>
        <div class="clinical-speech-box" style="margin-bottom: 0.75rem;">
          <strong>🎯 Pregunta Disparadora 1 (Cronología y Meta):</strong>
          <span class="clinical-speech-quote">«Cuénteme con detalle qué actividades realizó desde que se levantó esta mañana hasta llegar a esta consulta.»</span>
          <p style="font-size: 0.8rem; color: var(--text-tertiary); margin-top: 0.35rem; margin-bottom: 0;">Observar si mantiene la cronología o se pierde en detalles superfluos (circunstancialidad) o si salta de tema sin meta (fuga/descarrilamiento).</p>
        </div>
        <div class="clinical-speech-box">
          <strong>🎯 Pregunta Disparadora 2 (Lógica y Abstracción):</strong>
          <span class="clinical-speech-quote">«¿Por qué cree usted que es necesario que los semáforos tengan tres colores diferentes?»</span>
          <p style="font-size: 0.8rem; color: var(--text-tertiary); margin-top: 0.35rem; margin-bottom: 0;">Permite examinar la lógica formal, ilogicidad, tangencialidad o perseveración temática.</p>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SOLUCIONES Y SISTEMA DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Puntuación Semiográfica Estandarizada (Escala TLC Adaptada)</h3>
        <p class="orientation-p">
          Se evalúan 6 dimensiones formales en una escala de 0 a 3 puntos (0 = Ausente; 1 = Leve/Ocasional; 2 = Moderado evidente; 3 = Grave/Disruptivo continuo):
        </p>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Dimensión Formal</th>
                <th>0 Puntos (Normal)</th>
                <th>1 Punto (Leve)</th>
                <th>2 Puntos (Moderado)</th>
                <th>3 Puntos (Grave)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Velocidad / Presión del Habla</strong></td>
                <td>Ritmo normal fluido (120-160 ppm).</td>
                <td>Aceleración leve, pero interrumplible.</td>
                <td>Logorrea marcada, cuesta interrumpir.</td>
                <td>Presión incesante incontenible, atropellada.</td>
              </tr>
              <tr>
                <td><strong>2. Latencia / Bradipsiquia</strong></td>
                <td>Respuesta inmediata (&lt; 2 s).</td>
                <td>Pausa de 2 a 4 s; discurso lento.</td>
                <td>Latencia de 5 a 10 s; habla laboriosa.</td>
                <td>Latencia &gt; 10 s o mutismo casi total.</td>
              </tr>
              <tr>
                <td><strong>3. Descarrilamiento / Pérdida de Meta</strong></td>
                <td>Llega a la meta sin desviarse.</td>
                <td>Se desvía levemente pero retoma solo.</td>
                <td>Pierde el hilo; requiere reconducción.</td>
                <td>Salto incoherente caótico continuo.</td>
              </tr>
              <tr>
                <td><strong>4. Tangencialidad</strong></td>
                <td>Responde exactamente lo preguntado.</td>
                <td>Responde cerca del tema sin precisión.</td>
                <td>Responde de forma oblicua y distante.</td>
                <td>Respuesta totalmente inconexa con la pregunta.</td>
              </tr>
              <tr>
                <td><strong>5. Circunstancialidad / Prolijidad</strong></td>
                <td>Va al grano con detalles útiles.</td>
                <td>Exceso de detalles menores pero concluye.</td>
                <td>Laberinto de detalles superfluos con demora.</td>
                <td>Incapacidad absoluta de discriminar lo accesorio.</td>
              </tr>
              <tr>
                <td><strong>6. Bloqueo del Pensamiento</strong></td>
                <td>Flujo continuo sin quiebres.</td>
                <td>Duda momentánea con recuperación rápida.</td>
                <td>Detención súbita del habla de 5-10 s.</td>
                <td>Corte abrupto con vivencia de vacío o robo.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="orientation-diff-note" style="margin-top: 0.85rem;">
          <strong>Puntos de Corte Globales (0 a 18 puntos):</strong><br/>
          • <strong>0 a 2 puntos:</strong> Curso del pensamiento dentro de límites normales.<br/>
          • <strong>3 a 6 puntos:</strong> Trastorno formal leve (neurosis ansiosa, estrés agudo, fatiga cognitiva).<br/>
          • <strong>7 a 11 puntos:</strong> Trastorno formal moderado (episodio afectivo activo, pródromo psicótico).<br/>
          • <strong>12 a 18 puntos:</strong> Trastorno formal severo / desorganización psicótica franca.
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERPRETACIÓN CLÍNICA DE LAS RESPUESTAS</div>
        <h3 class="orientation-sec-title">Significado Semiográfico y Perfiles Diagnósticos</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Perfil Positivo / Maníaco</span>
            <h4 class="dim-name">Taquipsiquia y Fuga de Ideas</h4>
            <p class="dim-desc">Puntuación alta en Presión del habla y Descarrilamiento con asociación por asonancia (rimas). Traduce hiperdopaminergia y noradrenalina elevada en circuitos frontolímbicos. Patognomónico de <strong>Episodio Maníaco</strong> o intoxicación por estimulantes.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Perfil Negativo / Melancólico</span>
            <h4 class="dim-name">Bradipsiquia y Latencia Extrema</h4>
            <p class="dim-desc">Puntuación alta en Latencia y Pobreza del habla. Traduce hipoactividad frontoestriatal y desaceleración psíquica profunda. Típico de <strong>Depresión Melancólica Mayor</strong> o defecto esquizofrénico.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Perfil Desorganizado / Esquizofrénico</span>
            <h4 class="dim-name">Descarrilamiento, Bloqueos e Incoherencia</h4>
            <p class="dim-desc">Puntuación alta en Tangencialidad, Bloqueos y Pérdida de meta. Traduce fallo en la compuerta talámica sensorial y desconexión asociativa (Bleuler). Patognomónico de <strong>Esquizofrenia</strong> activa o trastorno esquizoafectivo.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">TRATAMIENTOS POSIBLES Y PROTOCOLO TERAPÉUTICO</div>
        <h3 class="orientation-sec-title">Abordaje Farmacológico, Psicoterapéutico y Ambiental</h3>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">💊 Tratamiento Farmacológico por Etiología</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Si predomina Perfil Positivo / Manía con Fuga de Ideas:</strong> Estabilizador del ánimo (Carbonato de Litio: litemia objetivo 0.8-1.2 mEq/L o Valproato de Sodio 1000-1500 mg/día) + Antipsicótico atípico antimaníaco (Olanzapina 10-20 mg/día, Quetiapina 400-800 mg/día o Aripiprazol 15-30 mg/día).</li>
            <li><strong>Si predomina Perfil Desorganizado / Bloqueos Esquizofrénicos:</strong> Antipsicótico de 2ª generación con fuerte bloqueo D2/5HT2A (Paliperidona 6-9 mg/día, Risperidona 3-6 mg/día u Olanzapina 10-20 mg/día). Si persiste refractariedad tras 2 antipsicóticos: Clozapina (150-450 mg/día).</li>
            <li><strong>Si predomina Bradipsiquia Melancólica:</strong> Antidepresivo dual (Venlafaxina 150-225 mg/día o Duloxetina 60-90 mg/día). Si coexisten síntomas psicóticos: agregar antipsicótico atípico a dosis bajas o valorar Terapia Electroconvulsiva (TEC).</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🗣️ Abordaje Psicoterapéutico y Rehabilitación Cognitiva</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Terapia de Remediación Cognitiva (CRT):</strong> Ejercicios computarizados de flexibilidad cognitiva, atención sostenida y categorización para mejorar el control ejecutivo del discurso.</li>
            <li><strong>Técnicas de Estructuración del Discurso (TCC):</strong> Enseñar al paciente la regla del semáforo verbal: parar, resumir la idea central en una sola frase y verificar si respondió la pregunta antes de continuar.</li>
          </ul>
        </div>
        <div class="orientation-clinical-alert">
          <strong>Pauta de Manejo en Crisis:</strong> Ante fuga de ideas severa o agitación, usar preguntas cerradas («sí/no»), hablar con voz calmada y en volumen bajo, reducir estímulos visuales/auditivos y evitar confrontar la aceleración del paciente.
        </div>
        
    <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
      <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
        📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
      
        <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="88" title="Saltar directamente a la página 88 en Cap. 4: Confiabilidad en Pruebas Cronometradas y Débito Verbal (Pág. 88)">
          <span>📖</span>
          <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 4: Confiabilidad en Pruebas Cronometradas y Débito Verbal (Pág. 88) →</span>
        </button>
        <button type="button" class="btn-book-citation-jump" data-book-id="nelson-ortiz-escala-abreviada" data-page="35" title="Saltar directamente a la página 35 en Área C (Audición y Lenguaje): Fluidez y Articulación Infantil EAD-1 (Pág. 35)">
          <span>📖</span>
          <span><strong>Nelson Ortiz Pinilla:</strong> Área C (Audición y Lenguaje): Fluidez y Articulación Infantil EAD-1 (Pág. 35) →</span>
        </button>
    </div>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="belloch-psicopatologia-vol1" data-page="217" title="Saltar directamente a la página 217 en Criterios de Evaluación Formal y Escala TLC de Andreasen">
          <span>📖</span>
          <span><strong>Belloch et al.:</strong> Criterios de Evaluación Formal y Escala TLC de Andreasen (Pág. 217) →</span>
        </button>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="66" title="Saltar directamente a la página 66 en Semiografía del Curso del Pensamiento">
          <span>📖</span>
          <span><strong>Ricardo Capponi:</strong> Semiografía del Curso del Pensamiento (Pág. 66) →</span>
        </button>
      
    </div>
  
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
          { bookId: 'apir-psicopatologia', page: 47, author: 'Manual APIR', title: 'Tabla 4 y 5: Dimensiones y Diagnóstico Diferencial de los Delirios' },
          { bookId: 'tests-psicologicos-anastasi-urbina', page: 355, author: 'Anne Anastasi & Susana Urbina', title: 'Cap. 13: MMPI-2, Escalas de Validez L, F, K y Escala Clínica 6 (Paranoia)' }
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
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA DEL PENSAMIENTO</span>
          <span class="modal-area-pill">⚡ ÁREA: PSICOPATOLOGÍA CLÁSICA</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-top: 0.4rem;">
          <div>
            <h2 class="orientation-main-title">Evaluación de ideas delirantes y convicción del contenido</h2>
            <p class="orientation-authors-meta">Exploración Semiológica de Delirios • Criterios de Jaspers & Dimensiones de Kendler</p>
          </div>
          <button type="button" class="btn-back-to-def" id="btn-back-contenido-delirios-def">
            ← Ver Definición y Semiología
          </button>
        </div>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PASO 1: ENTREVISTA SEMIESTRUCTURADA</div>
        <h3 class="orientation-sec-title">Protocolo de Preguntas de Gradación Periférica</h3>
        <p class="orientation-p">
          Para no generar confrontación ni despertar desconfianza paranoide, explore el contenido desde preguntas indirectas neutras hacia el núcleo de la creencia:
        </p>
        <ul class="orientation-checklist">
          <li><strong>Sondeo de Clima Persecutorio:</strong> <em>«¿Ha sentido últimamente que las personas a su alrededor lo miran de manera especial o que las cosas tienen un significado oculto para usted?»</em></li>
          <li><strong>Sondeo de Autorreferencialidad:</strong> <em>«¿Siente que la televisión, la radio o las redes sociales envían mensajes dirigidos específicamente a usted?»</em></li>
          <li><strong>Sondeo de Persecución / Perjuicio:</strong> <em>«¿Cree que hay alguien que esté intentando perjudicarlo, espiarlo o hacerle daño a usted o a su familia?»</em></li>
          <li><strong>Sondeo de Vivencias de Pasividad e Influencia:</strong> <em>«¿Siente que sus pensamientos están siendo leídos, extraídos, transmitidos o controlados por fuerzas externas?»</em></li>
        </ul>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SOLUCIONES Y SISTEMA DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Rúbrica Cuantitativa de las 5 Dimensiones del Delirio (Kendler)</h3>
        <p class="orientation-p">
          Puntúe cada dimensión de 0 a 4 puntos para obtener el índice de invasión delirante (Total 0 a 20 puntos):
        </p>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Dimensión</th>
                <th>0-1 Pts (Leve / Duda)</th>
                <th>2 Pts (Moderado)</th>
                <th>3-4 Pts (Severo / Máximo)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Convicción Subjetiva</strong></td>
                <td>Reconoce posibilidad de estar equivocado o tener duda.</td>
                <td>Certeza subjetiva fuerte, pero tolera hipótesis contrarias.</td>
                <td>Certeza absoluta inquebrantable; irrebatible a la lógica.</td>
              </tr>
              <tr>
                <td><strong>2. Preocupación Temporal</strong></td>
                <td>Piensa en ello sólo cuando se le pregunta directamente.</td>
                <td>Ocupa varias horas al día; aparta la atención de tareas.</td>
                <td>Invasión total de la conciencia las 24 horas del día.</td>
              </tr>
              <tr>
                <td><strong>3. Extensión y Sistematización</strong></td>
                <td>Creencia aislada y circunscrita a un solo hecho.</td>
                <td>Involucra a vecinos o familiares cercanos.</td>
                <td>Trama conspirativa universal estructurada (CIA, Dios, chips).</td>
              </tr>
              <tr>
                <td><strong>4. Resonancia Afectiva</strong></td>
                <td>Afecto neutro, distante o con resignación fría.</td>
                <td>Miedo o rabia moderada ante la creencia.</td>
                <td>Terror pánico, desesperación extrema o furor homicida.</td>
              </tr>
              <tr>
                <td><strong>5. Resonancia Conductual</strong></td>
                <td>No modifica su rutina diaria ni sus hábitos.</td>
                <td>Pone cerrojos extras o evita salir en ciertos horarios.</td>
                <td>Ataques preventivos, barricadas, denuncias o huida masiva.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="orientation-diff-note" style="margin-top: 0.85rem;">
          <strong>Puntos de Corte Clínicos (Kendler 0 a 20 pts):</strong><br/>
          • <strong>0 a 4 puntos:</strong> Creencia sobrevalorada o delirio residual encapsulado sin impacto conductual.<br/>
          • <strong>5 a 10 puntos:</strong> Delirio activo moderado; requiere intervención psicofarmacológica ambulatoria.<br/>
          • <strong>11 a 15 puntos:</strong> Delirio severo invasivo con riesgo de descompensación social o laboral.<br/>
          • <strong>16 a 20 puntos:</strong> <strong>EMERGENCIA PSIQUIÁTRICA</strong> (alto riesgo hetero/autoagresivo por resonancia conductual).
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERPRETACIÓN CLÍNICA DE LAS RESPUESTAS</div>
        <h3 class="orientation-sec-title">Significado Semiográfico y Diagnóstico Diferencial</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Delirio Primario (Jaspers)</span>
            <h4 class="dim-name">Incomprensible y Autónomo</h4>
            <p class="dim-desc">Surge sin antecedente afectivo comprensible, a partir de una percepción delirante o intuición súbita. Indica <strong>Esquizofrenia</strong> o psicosis esquizofreniforme.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Idea Deliroide Secundaria</span>
            <h4 class="dim-name">Comprensible por el Humor</h4>
            <p class="dim-desc">Se deriva lógicamente de un estado afectivo extremo (ej. delirio de ruina o culpa atroz en melancolía; delirio megalómano en manía). Indica <strong>Trastorno Afectivo con Síntomas Psicóticos</strong>.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Idea Sobrevalorada</span>
            <h4 class="dim-name">Egosintónica y No Absurda</h4>
            <p class="dim-desc">Creencia comprensible culturalmente, no bizarra, ligada a valores morales, corporales o políticos profundos (ej. hipocondría, celotipia no psicótica, anorexia).</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">TRATAMIENTOS POSIBLES Y PROTOCOLO TERAPÉUTICO</div>
        <h3 class="orientation-sec-title">Abordaje Farmacológico, Psicoterapia Especializada y Seguridad</h3>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">💊 Farmacoterapia Antipsicótica de Primera y Segunda Línea</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Antipsicóticos Atípicos de 2ª Generación (1ª Línea):</strong> Risperidona (2-6 mg/día), Olanzapina (10-20 mg/día), Aripiprazol (10-30 mg/día) o Paliperidona (6-12 mg/día). Reducen la saliencia aberrante dopaminérgica en el estriado ventral.</li>
            <li><strong>Delirio Refractario / Resistente (tras fallar 2 antipsicóticos a dosis plenas durante 6-8 semanas):</strong> <strong>Clozapina</strong> (titulación progresiva desde 12.5 mg hasta 300-600 mg/día, con monitorización estricta de recuento leucocitario y neutrófilos absolutos por riesgo de agranulocitosis).</li>
            <li><strong>Si es secundario a Depresión Psicótica:</strong> Combinación de ISRS/IRSN (Sertralina 100-200 mg o Venlafaxina 150-225 mg) + Antipsicótico (Olanzapina 10 mg o Quetiapina 300 mg) o Terapia Electroconvulsiva (TEC).</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🗣️ Psicoterapia Especializada: TCC para Psicosis (CBTp)</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Regla Fundamental de Interacción:</strong> <em>NUNCA confrontar frontalmente el delirio</em> (aumenta la resistencia y suspicacia), ni validarlo como verdadero.</li>
            <li><strong>Técnica de Normalización y Conexión Emocional:</strong> Validar el afecto (miedo, desamparo) sin validar la premisa delirante: «Entiendo lo angustiante y aterrador que debe ser sentirse perseguido».</li>
            <li><strong>Exploración de Evidencias Alternativas:</strong> Plantear hipótesis periféricas colaborativas: «¿Se le ocurre alguna otra explicación posible para ese ruido en el techo?».</li>
          </ul>
        </div>
        <div class="orientation-clinical-alert">
          <strong>Criterios de Hospitalización Inmediata:</strong> Si la dimensión «Resonancia Conductual» puntúa 3-4 (intento de agresión al supuesto perseguidor, fuga con abandono de tratamiento médico vital o riesgo suicida altruista/delirante), tramitar ingreso hospitalario de urgencia.
        </div>
        
    <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
      <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
        📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
      
        <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="115" title="Saltar directamente a la página 115 en Cap. 5: Validez de Criterio y Escalas de Certeza Delirante (Pág. 115)">
          <span>📖</span>
          <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 5: Validez de Criterio y Escalas de Certeza Delirante (Pág. 115) →</span>
        </button>
        <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="355" title="Saltar directamente a la página 355 en Cap. 13: Perfiles MMPI-2 en Psicosis y Escala 6-Pa (Pág. 355)">
          <span>📖</span>
          <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 13: Perfiles MMPI-2 en Psicosis y Escala 6-Pa (Pág. 355) →</span>
        </button>
    </div>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="71" title="Saltar directamente a la página 71 en Psicopatología del Contenido del Pensamiento y Delirios">
          <span>📖</span>
          <span><strong>Ricardo Capponi:</strong> Psicopatología del Contenido del Pensamiento y Delirios (Pág. 71) →</span>
        </button>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="belloch-psicopatologia-vol1" data-page="225" title="Saltar directamente a la página 225 en Cap. 9: Psicopatología de los Delirios y Kendler">
          <span>📖</span>
          <span><strong>Belloch, Sandín y Ramos:</strong> Cap. 9: Psicopatología de los Delirios y Kendler (Pág. 225) →</span>
        </button>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="apir-psicopatologia" data-page="47" title="Saltar directamente a la página 47 en Tabla 4 y 5: Dimensiones y Diferencial de Delirios">
          <span>📖</span>
          <span><strong>Manual APIR:</strong> Tabla 4 y 5: Dimensiones y Diferencial de Delirios (Pág. 47) →</span>
        </button>
      
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
          { bookId: 'apir-psicopatologia', page: 29, author: 'Manual APIR', title: 'Tema 4: Psicopatología de la Sensopercepción' },
          { bookId: 'tests-psicologicos-anastasi-urbina', page: 450, author: 'Anne Anastasi & Susana Urbina', title: 'Cap. 15: Evaluación Visoperceptiva y Test Gestáltico Visomotor de Bender' },
          { bookId: 'nelson-ortiz-escala-abreviada', page: 28, author: 'Nelson Ortiz Pinilla', title: 'Área B (Motricidad Fino-Adaptativa): Integración Visomotriz en EAD-1' }
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
          <span class="modal-area-pill">🩺 ÁREA: SENSOPERCEPCIÓN</span>
          <span class="modal-area-pill">👁️ ÁREA: DISTORSIONES</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-top: 0.4rem;">
          <div>
            <h2 class="orientation-main-title">Evaluación de distorsiones perceptivas, ilusiones y metamorfopsias</h2>
            <p class="orientation-authors-meta">Exploración Semiológica de la Percepción Alterada • Ricardo Capponi & Amparo Belloch</p>
          </div>
          <button type="button" class="btn-back-to-def" id="btn-back-distorsiones-def">
            ← Ver Definición y Semiología
          </button>
        </div>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PASO 1: ENTREVISTA EXPLORATORIA</div>
        <h3 class="orientation-sec-title">Pesquisa Directa de Distorsiones Sensoriales</h3>
        <p class="orientation-p">
          Interrogue la presencia de anomalías en la intensidad, tamaño, forma y color de objetos reales presentes:
        </p>
        <ul class="orientation-checklist">
          <li><strong>Anomalías Cuantitativas:</strong> <em>«¿Siente que la luz le molesta excesivamente o que los sonidos cotidianos le parecen ensordecedores (hiperestesia)?»</em></li>
          <li><strong>Metamorfopsias de Tamaño:</strong> <em>«¿Ha visto que las cosas o las personas se vuelven de repente diminutas (micropsias) o gigantescas (macropsias)?»</em></li>
          <li><strong>Dismorfopsias y Autometamorfopsias:</strong> <em>«¿Ha notado que las paredes se deforman, que su mano cambia de tamaño o que su cara en el espejo se ve distorsionada?»</em></li>
          <li><strong>Ilusiones Afectivas:</strong> <em>«En momentos de miedo o soledad, ¿ha creído ver una figura o una persona donde sólo había un abrigo o una sombra?»</em></li>
        </ul>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SOLUCIONES Y SISTEMA DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Pauta de Puntuación de Distorsiones Sensoriales (Total 0 a 18 pts)</h3>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Ítem Exploratorio</th>
                <th>0 Puntos</th>
                <th>1 Punto (Ocasional)</th>
                <th>2-3 Puntos (Frecuente / Continuo)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Hiperestesia / Hipoestesia</strong></td>
                <td>Sensibilidad normal.</td>
                <td>Molestia leve con luces o ruidos.</td>
                <td>Hipersensibilidad sensorial invalidante continua.</td>
              </tr>
              <tr>
                <td><strong>2. Dismegalopsia (Micro/Macropsia)</strong></td>
                <td>Percepción métrica normal.</td>
                <td>Episodios fugaces de segundos.</td>
                <td>Deformación métrica prolongada con desorientación.</td>
              </tr>
              <tr>
                <td><strong>3. Dismorfopsia espacial</strong></td>
                <td>Contornos nítidos estables.</td>
                <td>Ondulación transitoria al fijar la vista.</td>
                <td>Deformación continua de caras y objetos circundantes.</td>
              </tr>
              <tr>
                <td><strong>4. Autometamorfopsia corporal</strong></td>
                <td>Esquema corporal íntegro.</td>
                <td>Sensación fugaz de pesadez o elongación.</td>
                <td>Vivencia deformante severa de miembros o rostro.</td>
              </tr>
              <tr>
                <td><strong>5. Ilusiones Catatímicas</strong></td>
                <td>Reconoce estímulos tal como son.</td>
                <td>Corrige la ilusión de inmediato al mirar bien.</td>
                <td>Confusión sostenida con gran angustia catatímica.</td>
              </tr>
              <tr>
                <td><strong>6. Pareidolias patológicas</strong></td>
                <td>Juegos visuales voluntarios normales.</td>
                <td>Ve rostros involuntarios pero los critica.</td>
                <td>Invasión pareidólica incontrolable que asusta.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="orientation-diff-note" style="margin-top: 0.85rem;">
          <strong>Puntos de Corte Clínicos:</strong><br/>
          • <strong>0 a 2 puntos:</strong> Variaciones fisiológicas normales (fatiga, transición vigilia-sueño).<br/>
          • <strong>3 a 7 puntos:</strong> Distorsión sensorial leve (ansiedad intensa, estrés, migraña común).<br/>
          • <strong>8 a 18 puntos:</strong> <strong>Compromiso neurológico o tóxico severo</strong> (aura epiléptica, tóxicos, lesión parietal).
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERPRETACIÓN CLÍNICA DE LAS RESPUESTAS</div>
        <h3 class="orientation-sec-title">Significado Semiográfico y Etiologías Médicas</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Síndrome de Alicia en el País de las Maravillas</span>
            <h4 class="dim-name">Metamorfopsias Puras</h4>
            <p class="dim-desc">Compromiso de la unión parieto-occipital. Típico de <strong>Migraña con Aura</strong> en niños/jóvenes, <strong>Mononucleosis Infecciosa</strong> (virus Epstein-Barr) o intoxicación por LSD y ketamina.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Ilusión Catatímica</span>
            <h4 class="dim-name">Deformación Afectiva</h4>
            <p class="dim-desc">El afecto intenso (miedo o duelo) altera la interpretación del objeto real. El juicio de realidad se conserva: el paciente se da cuenta del error al aproximarse.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Hiperestesia Acústica / Visual</span>
            <h4 class="dim-name">Hipersensibilidad</h4>
            <p class="dim-desc">Frecuente en síndrome de abstinencia a alcohol o benzodiacepinas, resaca etílica severa, migraña aguda o trastorno de pánico descompensado.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">TRATAMIENTOS POSIBLES Y PROTOCOLO TERAPÉUTICO</div>
        <h3 class="orientation-sec-title">Abordaje Etiológico, Sintomático y Manejo Clínico</h3>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🩺 Tratamiento Etiológico Médico / Neurológico</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Si la causa es Migraña con Aura:</strong> Profilaxis con Topiramato (50-100 mg/día), Betabloqueantes (Propranolol 40-80 mg/día) o Flunarizina (5 mg noche). Triptanes (Zolmitriptán o Sumatriptán) en la crisis aguda tras cesar el aura.</li>
            <li><strong>Si hay sospecha de Epilepsia del Lóbulo Temporal o Parietal:</strong> Solicitar EEG prolongado o video-EEG. Iniciar fármacos anticrisis (Levetiracetam 500-1500 mg c/12h o Lamotrigina 100-200 mg/día).</li>
            <li><strong>Si hay Abstinencia a Depresores del SNC:</strong> Diazepam o Lorazepam pautado en descenso con Tiamina de base.</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🧘 Abordaje Psicoterapéutico y Psicoeducación</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Psicoeducación de Desensibilización:</strong> Explicar detalladamente al paciente que las metamorfopsias son distorsiones óptico-cerebrales transitorias y benignas, desarmando la angustia de creer que «se está volviendo loco».</li>
            <li><strong>Entrenamiento en Verificación Sensorial (TCC):</strong> Enseñar a tocar el objeto físico cuando vea que oscila o cambia de tamaño para que la vía táctil somatosensorial corrija inmediatamente el engaño visual.</li>
          </ul>
        </div>
        
    <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
      <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
        📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
      
        <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="450" title="Saltar directamente a la página 450 en Cap. 15: Test Gestáltico Visomotor de Bender y Maduración Perceptiva (Pág. 450)">
          <span>📖</span>
          <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 15: Test Gestáltico Visomotor de Bender y Maduración Perceptiva (Pág. 450) →</span>
        </button>
        <button type="button" class="btn-book-citation-jump" data-book-id="nelson-ortiz-escala-abreviada" data-page="28" title="Saltar directamente a la página 28 en Área B (Motricidad Fino-Adaptativa): Discriminación Visoespacial EAD-1 (Pág. 28)">
          <span>📖</span>
          <span><strong>Nelson Ortiz Pinilla:</strong> Área B (Motricidad Fino-Adaptativa): Discriminación Visoespacial EAD-1 (Pág. 28) →</span>
        </button>
    </div>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="belloch-psicopatologia-vol1" data-page="150" title="Saltar directamente a la página 150 en Cap. 6: Distorsiones Perceptivas e Ilusiones">
          <span>📖</span>
          <span><strong>Belloch, Sandín y Ramos:</strong> Cap. 6: Distorsiones Perceptivas e Ilusiones (Pág. 150) →</span>
        </button>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="30" title="Saltar directamente a la página 30 en Psicopatología de la Sensopercepción: Distorsiones">
          <span>📖</span>
          <span><strong>Ricardo Capponi:</strong> Psicopatología de la Sensopercepción: Distorsiones (Pág. 30) →</span>
        </button>
      
    </div>
  
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta secondary" id="btn-bottom-back-distorsiones-def">
          <span class="cta-icon">←</span>
          <div class="cta-texts">
            <strong class="cta-title">Volver a Fundamentos de Distorsiones Sensoperceptivas</strong>
            <span class="cta-sub">Revisar taxonomía de metamorfopsias, ilusiones y citas</span>
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
          { bookId: 'apir-psicopatologia', page: 35, author: 'Manual APIR', title: 'Tabla Comparativa: Alucinación vs. Pseudoalucinación vs. Alucinosis' },
          { bookId: 'tests-psicologicos-anastasi-urbina', page: 92, author: 'Anne Anastasi & Susana Urbina', title: 'Cap. 4: Escalas Estandarizadas de Psicosis (PANSS / BPRS) y Confiabilidad' }
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
          <span class="modal-area-pill">🩺 ÁREA: SENSOPERCEPCIÓN</span>
          <span class="modal-area-pill">👻 ÁREA: ENGAÑOS PERCEPTIVOS</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-top: 0.4rem;">
          <div>
            <h2 class="orientation-main-title">Evaluación semiológica de engaños perceptivos y alucinaciones</h2>
            <p class="orientation-authors-meta">Slade & Bentall • Escala PSYRATS Adaptada • Diagnóstico Diferencial Schneideriano</p>
          </div>
          <button type="button" class="btn-back-to-def" id="btn-back-alucinaciones-def">
            ← Ver Definición y Semiología
          </button>
        </div>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PASO 1: EXPLORACIÓN DIRECTA</div>
        <h3 class="orientation-sec-title">Pesquisa Fenomenológica de Voces y Visiones</h3>
        <p class="orientation-p">
          Explore las modalidades sensoriales, localización y resonancia afectiva con preguntas progresivas:
        </p>
        <ul class="orientation-checklist">
          <li><strong>Auditivo-Fonémica (Primer Rango):</strong> <em>«¿Escucha voces de personas cuando no hay nadie alrededor o nadie está hablando? ¿Hablan entre ellas sobre usted o comentan lo que usted hace?»</em></li>
          <li><strong>Localización Espacial (Crucial):</strong> <em>«¿Esa voz suena afuera, en el espacio físico como la mía, o la siente adentro de su cabeza como un pensamiento que no es suyo?»</em></li>
          <li><strong>Convicción y Crítica:</strong> <em>«¿Cree que esas voces son personas de carne y hueso reales o siente que podrían ser producto del estrés o de su propia mente?»</em></li>
          <li><strong>Imperatividad y Comando:</strong> <em>«¿Las voces le dan órdenes directas de hacer algo, hacerse daño o dañar a otros?»</em></li>
        </ul>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SOLUCIONES Y SISTEMA DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Escala de Severidad de Alucinaciones (PSYRATS Adaptada - Total 0 a 24 pts)</h3>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Dimensión Alucinatoria</th>
                <th>0 Puntos</th>
                <th>1-2 Puntos (Leve/Moderado)</th>
                <th>3-4 Puntos (Severo/Extremo)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Frecuencia Temporal</strong></td>
                <td>Ausente.</td>
                <td>1 vez por semana a 1 vez al día.</td>
                <td>Continuas durante muchas horas o todo el día.</td>
              </tr>
              <tr>
                <td><strong>2. Duración de Episodios</strong></td>
                <td>Ausente.</td>
                <td>Segundos a pocos minutos.</td>
                <td>Horas ininterrumpidas continuas.</td>
              </tr>
              <tr>
                <td><strong>3. Localización Espacial</strong></td>
                <td>No hay.</td>
                <td>Intrapsíquica (dentro del cráneo).</td>
                <td>Espacio exterior nítido con timbre físico real.</td>
              </tr>
              <tr>
                <td><strong>4. Contenido / Malevolencia</strong></td>
                <td>Neutro / amistoso.</td>
                <td>Críticas o insultos ocasionales.</td>
                <td>Amenazas de muerte continuas u órdenes de daño.</td>
              </tr>
              <tr>
                <td><strong>5. Convicción de Realidad</strong></td>
                <td>Sabe 100% que no es real (crítica).</td>
                <td>Duda de su realidad pero teme que lo sea.</td>
                <td>100% convencido de que es una persona real exterior.</td>
              </tr>
              <tr>
                <td><strong>6. Disrupción Conductual</strong></td>
                <td>No altera su vida diaria.</td>
                <td>Le distrae pero puede trabajar o conversar.</td>
                <td>Grita a las voces, se tapa los oídos o las obedece.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="orientation-diff-note" style="margin-top: 0.85rem;">
          <strong>Puntos de Corte de la Escala PSYRATS (0 a 24 puntos):</strong><br/>
          • <strong>0 a 3 puntos:</strong> Sin engaños perceptivos significativos.<br/>
          • <strong>4 a 9 puntos:</strong> Alucinosis con crítica o pseudoalucinaciones leves sin comando.<br/>
          • <strong>10 a 17 puntos:</strong> Alucinaciones moderadas con interferencia funcional y afectiva clara.<br/>
          • <strong>18 a 24 puntos:</strong> <strong>ALTO RIESGO PSICÓTICO VITAL</strong> (alucinaciones continuas con órdenes imperativas de daño).
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERPRETACIÓN CLÍNICA DE LAS RESPUESTAS</div>
        <h3 class="orientation-sec-title">Tabla Diferencial Fenomenológica: Las Tres Grandes Formas</h3>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Criterio Fenomenológico</th>
                <th>Alucinación Verdadera</th>
                <th>Pseudoalucinación (Kandinsky)</th>
                <th>Alucinosis (Wernicke)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Espacio de Proyección</strong></td>
                <td><strong>Espacio externo físico</strong> objetivo.</td>
                <td><strong>Espacio interior subjetivo</strong> (mente).</td>
                <td><strong>Espacio externo físico</strong> objetivo.</td>
              </tr>
              <tr>
                <td><strong>Juicio de Realidad</strong></td>
                <td><strong>Sin crítica</strong> (certeza de realidad).</td>
                <td><strong>Sin crítica</strong> (vivencia impuesta).</td>
                <td><strong>Con juicio de realidad conservado</strong> (sabe que no es real).</td>
              </tr>
              <tr>
                <td><strong>Timbre Sensorial</strong></td>
                <td>Corporeidad y nitidez sensorial plena.</td>
                <td>Vivencia imaginativa sin corporeidad física.</td>
                <td>Corporeidad sensorial nítida.</td>
              </tr>
              <tr>
                <td><strong>Etiología Típica</strong></td>
                <td>Esquizofrenia, Manía psicótica.</td>
                <td>Esquizofrenia paranoide, TEPT severo.</td>
                <td><strong>Causa orgánica / Tóxica</strong> (abstinencia alcohólica).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">TRATAMIENTOS POSIBLES Y PROTOCOLO TERAPÉUTICO</div>
        <h3 class="orientation-sec-title">Farmacoterapia Antipsicótica, CBTp para Voces y Manejo de Crisis</h3>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">💊 Farmacoterapia Dirigida</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Para Alucinaciones Auditivas en Esquizofrenia (1ª Línea):</strong> Antipsicóticos de 2ª generación a dosis plenas: Olanzapina (10-20 mg/día), Risperidona (3-6 mg/día), Aripiprazol (15-30 mg/día) o Paliperidona (6-12 mg/día).</li>
            <li><strong>Para Alucinaciones Auditivas Refractarias Persistentes:</strong> <strong>Clozapina</strong> (200-500 mg/día), el único antipsicótico con evidencia de reducción de alucinaciones refractarias a otros fármacos en un 40-60%.</li>
            <li><strong>Para Alucinosis Alcohólica Aguda:</strong> Tiamina (500 mg IV c/8h) + Benzodiacepinas para sedación + Haloperidol a dosis bajas (1-2.5 mg VO/IM) si hay gran angustia (evitar dosis altas por riesgo convulsivo).</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🗣️ Psicoterapia Cognitivo-Conductual para Voces (CBTp / ACT)</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Desactivación de la Omnipotencia Percibida:</strong> Enseñar al paciente que las voces no tienen poder físico para obligarlo a actuar («las voces pueden hablar, pero usted decide si se mueve o no»).</li>
            <li><strong>Técnica de Focalización:</strong> Atender a las características acústicas de la voz (tono, velocidad, género) en vez de al contenido agresivo para desarmar la carga amenazante.</li>
            <li><strong>Pactos de Horario:</strong> Establecer 10 minutos al día para escuchar las voces en un cuaderno y luego cerrar el cuaderno y dedicarse a otra actividad.</li>
          </ul>
        </div>
        <div class="orientation-clinical-alert">
          <strong>ALERTA DE SEGURIDAD VITAL:</strong> Las <em>alucinaciones imperativas de comando</em> («mátate», «salta», «ataca») con puntuación de convicción 4 y disrupción 4 constituyen una indicación mandatoria de <strong>Hospitalización Psiquiátrica Inmediata</strong> bajo vigilancia continua 1:1.
        </div>
        
    <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
      <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
        📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
      
        <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="94" title="Saltar directamente a la página 94 en Cap. 4: Medición de Síntomas Psicóticos, Escala PANSS y Confiabilidad (Pág. 94)">
          <span>📖</span>
          <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 4: Medición de Síntomas Psicóticos, Escala PANSS y Confiabilidad (Pág. 94) →</span>
        </button>
    </div>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="belloch-psicopatologia-vol1" data-page="151" title="Saltar directamente a la página 151 en Cap. 6: Slade & Bentall y Engaños Perceptivos">
          <span>📖</span>
          <span><strong>Belloch et al.:</strong> Cap. 6: Slade & Bentall y Engaños Perceptivos (Pág. 151) →</span>
        </button>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="45" title="Saltar directamente a la página 45 en Psicopatología de las Alucinaciones y Alucinosis">
          <span>📖</span>
          <span><strong>Ricardo Capponi:</strong> Psicopatología de las Alucinaciones y Alucinosis (Pág. 45) →</span>
        </button>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="apir-psicopatologia" data-page="35" title="Saltar directamente a la página 35 en Tabla Comparativa: Alucinación vs. Pseudoalucinación vs. Alucinosis">
          <span>📖</span>
          <span><strong>Manual APIR:</strong> Tabla Comparativa: Alucinación vs. Pseudoalucinación vs. Alucinosis (Pág. 35) →</span>
        </button>
      
    </div>
  
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta secondary" id="btn-bottom-back-alucinaciones-def">
          <span class="cta-icon">←</span>
          <div class="cta-texts">
            <strong class="cta-title">Volver a Fundamentos de Engaños Perceptivos</strong>
            <span class="cta-sub">Revisar criterios de Slade & Bentall, alucinosis y citas</span>
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
          { bookId: 'apir-psicopatologia', page: 23, author: 'Manual APIR', title: 'Psicopatología del Yo Corporal y de la Mismidad' },
          { bookId: 'tests-psicologicos-anastasi-urbina', page: 415, author: 'Anne Anastasi & Susana Urbina', title: 'Cap. 14: Evaluación de los Límites del Yo y Autoimagen (Rorschach Exner)' },
          { bookId: 'nelson-ortiz-escala-abreviada', page: 40, author: 'Nelson Ortiz Pinilla', title: 'Área D (Personal-Social): Autonomía, Autorreconocimiento y Génesis del Yo EAD-1' }
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
          <span class="modal-area-pill">🩺 ÁREA: PSICOPATOLOGÍA DEL YO</span>
          <span class="modal-area-pill">🧘 ÁREA: CONCIENCIA DE IDENTIDAD</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-top: 0.4rem;">
          <div>
            <h2 class="orientation-main-title">Evaluación semiológica de las dimensiones y límites del Yo</h2>
            <p class="orientation-authors-meta">Las 4 Cualidades del Yo de Jaspers • Escala de Despersonalización de Cambridge (CDS Adaptada)</p>
          </div>
          <button type="button" class="btn-back-to-def" id="btn-back-yo-def">
            ← Ver Definición y Semiología
          </button>
        </div>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PASO 1: ENTREVISTA EXPLORATORIA</div>
        <h3 class="orientation-sec-title">Exploración de las 4 Cualidades del Yo Consciente (Jaspers)</h3>
        <ul class="orientation-checklist">
          <li><strong>1. Actividad del Yo (Autoría):</strong> <em>«¿Siente que sus pensamientos, sus deseos y sus movimientos corporales los genera usted mismo o siente que provienen de una fuerza externa?»</em></li>
          <li><strong>2. Unidad del Yo (Cohesión):</strong> <em>«¿Siente que usted es una sola persona o tiene la vivencia de estar dividido en dos partes o personalidades opuestas al mismo tiempo?»</em></li>
          <li><strong>3. Identidad del Yo (Continuidad Temporal):</strong> <em>«¿Reconoce que sigue siendo la misma persona que era en su infancia o siente que su ser fue reemplazado por otro totalmente distinto?»</em></li>
          <li><strong>4. Límites / Demarcación del Yo:</strong> <em>«¿Siente que la barrera entre su mente y el mundo exterior está abierta, que otros leen sus pensamientos o que los pensamientos de otros entran en su cabeza?»</em></li>
        </ul>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SOLUCIONES Y SISTEMA DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Pauta de Puntuación de Vivencias del Yo (Total 0 a 18 pts)</h3>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Dimensión del Yo</th>
                <th>0 Pts (Normal)</th>
                <th>1 Pt (Duda / Leve)</th>
                <th>2-3 Pts (Grave / Psicótico)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Autoría / Actividad</strong></td>
                <td>Control total de sus actos.</td>
                <td>Sensación de ser un espectador (despersonalización).</td>
                <td>Vivencia de influencia o control motor externo.</td>
              </tr>
              <tr>
                <td><strong>Unidad / Cohesión</strong></td>
                <td>Vivencia integrada de sí mismo.</td>
                <td>Duda interior o ambivalencia neurótica marcada.</td>
                <td>Escisión del Yo / vivencia de fragmentación psíquica.</td>
              </tr>
              <tr>
                <td><strong>Identidad en el Tiempo</strong></td>
                <td>Reconoce su biografía continua.</td>
                <td>Extrañeza ante recuerdos antiguos pero con crítica.</td>
                <td>Certeza delirante de ser otra persona o haber muerto (Cotard).</td>
              </tr>
              <tr>
                <td><strong>Límites y Demarcación</strong></td>
                <td>Límites mentales herméticos.</td>
                <td>Sensación de ser muy transparente ante otros.</td>
                <td>Robo, difusión o inserción activa del pensamiento.</td>
              </tr>
              <tr>
                <td><strong>Despersonalización</strong></td>
                <td>Conexión natural con el cuerpo.</td>
                <td>Cuerpo extraño o anestesiado con crítica total.</td>
                <td>Metamorfosis corporal delirante con pérdida de insight.</td>
              </tr>
              <tr>
                <td><strong>Desrealización</strong></td>
                <td>Entorno familiar y vivo.</td>
                <td>Mundo como una escenografía de cartón con crítica.</td>
                <td>Delirio de fin del mundo o sustitución de personas (Capgras).</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="orientation-diff-note" style="margin-top: 0.85rem;">
          <strong>Puntos de Corte Clínicos:</strong><br/>
          • <strong>0 a 3 puntos:</strong> Vivencia del Yo normotípica.<br/>
          • <strong>4 a 8 puntos:</strong> Despersonalización/desrealización disociativa o ansiosa con juicio de realidad intacto.<br/>
          • <strong>9 a 18 puntos:</strong> <strong>Pérdida psicótica de los límites del Yo</strong> (Esquizofrenia schneideriana activa).
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERPRETACIÓN CLÍNICA DE LAS RESPUESTAS</div>
        <h3 class="orientation-sec-title">Significado Semiográfico: Neurosis Disociativa vs. Psicosis Esquizofrénica</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Despersonalización Neurótica</span>
            <h4 class="dim-name">Insight Intacto («Como si...»)</h4>
            <p class="dim-desc">El paciente dice: <em>«Siento como si mi cuerpo fuera un robot, pero sé perfectamente que soy yo»</em>. Típico de crisis de pánico, estrés postraumático, consumo de cannabis o cansancio severo.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Pérdida Psicótica de Límites</span>
            <h4 class="dim-name">Convicción Delirante Schneideriana</h4>
            <p class="dim-desc">El paciente afirma: <em>«La antena del vecino me inserta pensamientos en el lóbulo frontal»</em>. Síntoma patognomónico de primer rango de Kurt Schneider en la <strong>Esquizofrenia</strong>.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">TRATAMIENTOS POSIBLES Y PROTOCOLO TERAPÉUTICO</div>
        <h3 class="orientation-sec-title">Abordaje Terapéutico Específico</h3>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🧘 En Despersonalización / Desrealización Neurótica y Disociativa</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Técnicas de «Grounding» Sensorial Inmediato:</strong> Ejercicios de anclaje a la realidad física (sostener un cubo de hielo, técnica 5-4-3-2-1 de estimulación sensorial de los 5 sentidos, caminar descalzo sintiendo el suelo).</li>
            <li><strong>Psicoterapia Focalizada en el Trauma (EMDR / TCC):</strong> Procesamiento de memorias traumáticas infantiles o eventos estresantes agudos que detonaron la disociación defensiva.</li>
            <li><strong>Farmacoterapia Coadyuvante:</strong> Lamotrigina (100-200 mg/día) o Naltrexona a dosis bajas (50 mg/día) han demostrado revertir la desconexión opioide/glutamatérgica endógena en despersonalización crónica. ISRS para la ansiedad comórbida.</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">💊 En Pérdida Psicótica de Límites del Yo (Esquizofrenia)</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Antipsicóticos de Segunda Generación:</strong> Paliperidona (6-12 mg/día), Risperidona (3-6 mg/día) u Olanzapina (10-20 mg/día) para restablecer la compuerta talámica y la demarcación del vivenciar.</li>
            <li><strong>Ambiente Terapéutico Contenedor:</strong> Entorno altamente predecible, con horarios estables y límites físicos claros para reducir la angustia de difusión.</li>
          </ul>
        </div>
        
    <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
      <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
        📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
      
        <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="418" title="Saltar directamente a la página 418 en Cap. 14: Indicadores de Límites del Yo y Autoimagen (Pág. 418)">
          <span>📖</span>
          <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 14: Indicadores de Límites del Yo y Autoimagen (Pág. 418) →</span>
        </button>
        <button type="button" class="btn-book-citation-jump" data-book-id="nelson-ortiz-escala-abreviada" data-page="42" title="Saltar directamente a la página 42 en Área D (Personal-Social): Autonomía e Individuación Infantil EAD-1 (Pág. 42)">
          <span>📖</span>
          <span><strong>Nelson Ortiz Pinilla:</strong> Área D (Personal-Social): Autonomía e Individuación Infantil EAD-1 (Pág. 42) →</span>
        </button>
    </div>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="157" title="Saltar directamente a la página 157 en Psicopatología del Yo: Las Cuatro Cualidades y Polaridades">
          <span>📖</span>
          <span><strong>Ricardo Capponi:</strong> Psicopatología del Yo: Las Cuatro Cualidades y Polaridades (Pág. 157) →</span>
        </button>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="apir-psicopatologia" data-page="23" title="Saltar directamente a la página 23 en Tema 2: Psicopatología de la Conciencia y del Yo">
          <span>📖</span>
          <span><strong>Manual APIR:</strong> Tema 2: Psicopatología de la Conciencia y del Yo (Pág. 23) →</span>
        </button>
      
    </div>
  
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta secondary" id="btn-bottom-back-yo-def">
          <span class="cta-icon">←</span>
          <div class="cta-texts">
            <strong class="cta-title">Volver a Fundamentos de la Psicopatología del Yo</strong>
            <span class="cta-sub">Revisar cualidades de Jaspers, polaridades de Capponi y citas</span>
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
          { bookId: 'apir-psicopatologia', page: 15, author: 'Manual APIR', title: 'Sistemas Clasificatorios y Trastornos de la Personalidad' },
          { bookId: 'tests-psicologicos-anastasi-urbina', page: 370, author: 'Anne Anastasi & Susana Urbina', title: 'Cap. 13: Evaluación de la Personalidad, MMPI-2, MCMI y NEO-PI-R Big Five' }
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
          <span class="modal-area-pill">🩺 ÁREA: PERSONALIDAD</span>
          <span class="modal-area-pill">🧭 ÁREA: DSM-5 / CIE-11</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-top: 0.4rem;">
          <div>
            <h2 class="orientation-main-title">Evaluación semiológica de los trastornos de la personalidad</h2>
            <p class="orientation-authors-meta">Criterio A del Modelo Dimensional DSM-5 • Severidad del Funcionamiento & Polaridades de Capponi</p>
          </div>
          <button type="button" class="btn-back-to-def" id="btn-back-personalidad-def">
            ← Ver Definición y Semiología
          </button>
        </div>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PASO 1: ENTREVISTA EXPLORATORIA</div>
        <h3 class="orientation-sec-title">Exploración de Áreas Cardinales de Disfuncionalidad</h3>
        <p class="orientation-p">
          Un trastorno de la personalidad se distingue de un estado psicopatológico agudo por su carácter <strong>inflexible, omnipresente, de inicio en la adolescencia y egosintónico</strong>:
        </p>
        <ul class="orientation-checklist">
          <li><strong>Patrón Relacional:</strong> <em>«¿Sus relaciones afectivas suelen ser tormentosas, con rupturas dramáticas o temor extremo a que lo abandonen?»</em></li>
          <li><strong>Regulación del Afecto:</strong> <em>«¿Pasa de la euforia a la ira o a la desesperación en cuestión de pocas horas ante frustraciones mínimas?»</em></li>
          <li><strong>Control de Impulsos:</strong> <em>«¿Realiza actos impulsivos autolesivos, gastos desmedidos o abuso de sustancias cuando se siente vacío o rechazado?»</em></li>
          <li><strong>Autoimagen e Identidad:</strong> <em>«¿Siente con frecuencia una sensación crónica de vacío interno o no tiene claridad sobre quién es usted?»</em></li>
        </ul>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SOLUCIONES Y SISTEMA DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Escala de Severidad del Funcionamiento de la Personalidad (DSM-5 Sección III / CIE-11)</h3>
        <p class="orientation-p">
          Puntúe cada dominio de 0 (Sin deterioro) a 4 (Deterioro extremo). Total 0 a 16 puntos:
        </p>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Dominio Funcional</th>
                <th>0-1 Pts (Norma / Leve)</th>
                <th>2 Pts (Moderado)</th>
                <th>3-4 Pts (Severo / Extremo)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Identidad</strong></td>
                <td>Autoestima estable; límites yoicos claros.</td>
                <td>Autoestima frágil dependiente de la aprobación ajena.</td>
                <td>Vacío crónico, identidad difusa o disociación grave.</td>
              </tr>
              <tr>
                <td><strong>2. Autodirección</strong></td>
                <td>Persigue metas constructivas realistas.</td>
                <td>Metas contradictorias; normas morales cambiantes.</td>
                <td>Incapacidad de trazarse metas vitales; transgresión anómica.</td>
              </tr>
              <tr>
                <td><strong>3. Empatía</strong></td>
                <td>Comprende y respeta vivencias ajenas.</td>
                <td>Inclinación a juzgar o hipersensibilidad al rechazo.</td>
                <td>Incapacidad de empatizar; crueldad o desprecio por terceros.</td>
              </tr>
              <tr>
                <td><strong>4. Intimidad</strong></td>
                <td>Relaciones profundas, duraderas y recíprocas.</td>
                <td>Conflictos crónicos o dependencia sumisa.</td>
                <td>Relaciones caóticas, violentas o aislamiento total.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="orientation-diff-note" style="margin-top: 0.85rem;">
          <strong>Puntos de Corte de Severidad Global:</strong><br/>
          • <strong>0 a 3 puntos:</strong> Estilo de personalidad adaptativo / Rasgos sin trastorno.<br/>
          • <strong>4 a 7 puntos:</strong> Trastorno de la Personalidad Leve.<br/>
          • <strong>8 a 11 puntos:</strong> Trastorno de la Personalidad Moderado (afectación laboral y afectiva crónica).<br/>
          • <strong>12 a 16 puntos:</strong> <strong>Trastorno de la Personalidad Severo</strong> (alta destructividad, parasuicidios recurrentes).
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERPRETACIÓN CLÍNICA DE LAS RESPUESTAS</div>
        <h3 class="orientation-sec-title">Significado Semiográfico por Grupos (Clusters)</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Cluster A: Raros / Excéntricos</span>
            <h4 class="dim-name">Paranoide, Esquizoide, Esquizotípico</h4>
            <p class="dim-desc">Retiro social profundo, suspicacia extrema o pensamiento mágico. Vulnerabilidad a descompensaciones micropsicóticas ante estrés.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Cluster B: Dramáticos / Impulsivos</span>
            <h4 class="dim-name">Límite (TLP), Narcisista, Histriónico, Antisocial</h4>
            <p class="dim-desc">Desregulación afectiva masiva, intolerancia al abandono, impulsividad y acting-out. Alto riesgo de autolesiones y conductas de riesgo.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Cluster C: Ansiosos / Temerosos</span>
            <h4 class="dim-name">Evitativo, Dependiente, Obsesivo-Compulsivo</h4>
            <p class="dim-desc">Ansiedad crónica, hipersensibilidad a la crítica, sumisión o perfeccionismo rígido e hipercontrolador.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">TRATAMIENTOS POSIBLES Y PROTOCOLO TERAPÉUTICO</div>
        <h3 class="orientation-sec-title">Psicoterapia Especializada (Tratamiento Nuclear) y Psicofarmacología Coadyuvante</h3>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🗣️ Psicoterapia Específica Basada en la Evidencia (Primera Elección)</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Terapia Dialéctico-Conductual (DBT de Marsha Linehan) para TLP:</strong> Es el tratamiento con mayor evidencia empírica para reducir autolesiones e ingresos hospitalarios. Se compone de 4 módulos: Mindfulness, Tolerancia al Malestar, Regulación Emocional y Efectividad Interpersonal.</li>
            <li><strong>Terapia Basada en la Mentalización (MBT de Bateman & Fonagy):</strong> Fomenta la capacidad de pensar sobre los estados mentales propios y ajenos antes de reaccionar impulsivamente.</li>
            <li><strong>Terapia de Esquemas (Jeffrey Young):</strong> Identificación y reprogramación de esquemas tempranos desadaptativos (abandono, desconfianza, defectuosidad).</li>
            <li><strong>Terapia Focalizada en la Transferencia (TFP de Kernberg):</strong> Para la difusión de la identidad mediante la resolución de la escisión en la relación analítica.</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">💊 Psicofarmacología Sintomática Coadyuvante (No Curativa)</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Para Impulsividad y Desregulación Afectiva:</strong> Estabilizadores del ánimo como Lamotrigina (100-200 mg/día) o Topiramato (50-150 mg/día).</li>
            <li><strong>Para Micropsicosis o Angustia Masiva:</strong> Antipsicóticos de 2ª generación a dosis bajas: Quetiapina (50-150 mg/día) o Aripiprazol (5-10 mg/día).</li>
            <li><strong>¡PRECAUCIÓN CON BENZODIACEPINAS!:</strong> Evitar en Cluster B por alto riesgo de desinhibición paradójica conductual, abuso y letalidad por sobredosis.</li>
          </ul>
        </div>
        
    <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
      <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
        📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
      
        <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="375" title="Saltar directamente a la página 375 en Cap. 13: Baremos T >= 65, MMPI-2, MCMI y NEO-PI-R en Personalidad (Pág. 375)">
          <span>📖</span>
          <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 13: Baremos T >= 65, MMPI-2, MCMI y NEO-PI-R en Personalidad (Pág. 375) →</span>
        </button>
    </div>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="178" title="Saltar directamente a la página 178 en Psicopatología de la Personalidad: Las 4 Polaridades Yoicas">
          <span>📖</span>
          <span><strong>Ricardo Capponi:</strong> Psicopatología de la Personalidad: Las 4 Polaridades Yoicas (Pág. 178) →</span>
        </button>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="apir-psicopatologia" data-page="15" title="Saltar directamente a la página 15 en Tema 1: Clasificación de los Trastornos de Personalidad">
          <span>📖</span>
          <span><strong>Manual APIR:</strong> Tema 1: Clasificación de los Trastornos de Personalidad (Pág. 15) →</span>
        </button>
      
    </div>
  
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta secondary" id="btn-bottom-back-personalidad-def">
          <span class="cta-icon">←</span>
          <div class="cta-texts">
            <strong class="cta-title">Volver a Fundamentos de Trastornos de la Personalidad</strong>
            <span class="cta-sub">Revisar polaridades de Capponi, clusters DSM y citas</span>
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
          { bookId: 'capponi-psicopatologia', page: 219, author: 'Ricardo Capponi', title: 'Síndrome de Korsakoff y Trastornos Amnésicos' },
          { bookId: 'tests-psicologicos-anastasi-urbina', page: 130, author: 'Anne Anastasi & Susana Urbina', title: 'Cap. 5: Validez Concurrente y Predictiva de las Clasificaciones Diagnósticas' },
          { bookId: 'nelson-ortiz-escala-abreviada', page: 50, author: 'Nelson Ortiz Pinilla', title: 'Parámetros Normativos y Baremos por Percentiles de la EAD-1' }
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
          <span class="modal-area-pill">🩺 ÁREA: DIAGNÓSTICO SINDROMÁTICO</span>
          <span class="modal-area-pill">⚡ ÁREA: JERARQUIZACIÓN MÉDICA</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-top: 0.4rem;">
          <div>
            <h2 class="orientation-main-title">Protocolo de diagnóstico sindromático y jerarquización nosológica</h2>
            <p class="orientation-authors-meta">Ricardo Capponi (Págs. 201-227) • Jerarquía Orgánica & Escala Bush-Francis de Catatonía</p>
          </div>
          <button type="button" class="btn-back-to-def" id="btn-back-sindromes-def">
            ← Ver Definición y Semiología
          </button>
        </div>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PASO 1: PIRÁMIDE DE JERARQUIZACIÓN</div>
        <h3 class="orientation-sec-title">Principio Diagnóstico de Capponi y Jaspers</h3>
        <p class="orientation-p">
          Antes de diagnosticar un cuadro psiquiátrico funcional, se debe descartar obligatoriamente la jerarquía médica superior:
        </p>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Nivel 1: Máxima Prioridad</span>
            <h4 class="dim-name">Síndromes Orgánico-Cerebrales</h4>
            <p class="dim-desc">Delirium, Demencias, Síndrome Amnésico de Korsakoff, Catatonía. Tienen causa somática directa y compromiso vital.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Nivel 2: Intermedio</span>
            <h4 class="dim-name">Síndromes Psicóticos y Afectivos Mayores</h4>
            <p class="dim-desc">Esquizofrenia, Trastorno Bipolar, Depresión Mayor Melancólica. Ruptura del juicio de realidad o desregulación afectiva basal.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Nivel 3: Base de la Pirámide</span>
            <h4 class="dim-name">Síndromes Neuróticos y de la Personalidad</h4>
            <p class="dim-desc">Trastornos de Ansiedad, Fobias, TOC, Trastornos de Personalidad. Conservan el juicio de realidad.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SOLUCIONES Y SISTEMA DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Pesquisa Específica de Catatonía: Escala Bush-Francis Abreviada</h3>
        <p class="orientation-p">
          La presencia de <strong>≥ 2 signos de los siguientes 10</strong> confirma el diagnóstico clínico de Catatonía:
        </p>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Signo Motor Bush-Francis</th>
                <th>Maniobra Exploratoria</th>
                <th>Respuesta Positiva (1 Pt)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Inmovilidad / Estupor</strong></td>
                <td>Observar al paciente en reposo.</td>
                <td>Hipoactividad motora severa; no habla ni se mueve ante estímulos.</td>
              </tr>
              <tr>
                <td><strong>2. Mutismo</strong></td>
                <td>Hacer preguntas directas.</td>
                <td>Ausencia casi total de respuesta verbal con aparato fonatorio intacto.</td>
              </tr>
              <tr>
                <td><strong>3. Fijación de la Mirada (Staring)</strong></td>
                <td>Contacto ocular.</td>
                <td>Mirada fija inmóvil en el vacío sin parpadear durante minutos.</td>
              </tr>
              <tr>
                <td><strong>4. Postura Mantenida (Catalepsia)</strong></td>
                <td>Mantener una postura espontánea.</td>
                <td>Mantiene posturas antigravitatorias incómodas por &gt; 1 minuto.</td>
              </tr>
              <tr>
                <td><strong>5. Flexibilidad Cérea</strong></td>
                <td>Mover pasivamente el brazo del paciente.</td>
                <td>Resistencia suave y plástica semejante a doblar una vela de cera.</td>
              </tr>
              <tr>
                <td><strong>6. Negativismo</strong></td>
                <td>Pedir que abra la boca o dé la mano.</td>
                <td>Resistencia motora contraria a toda instrucción o intento de movimiento.</td>
              </tr>
              <tr>
                <td><strong>7. Mitgehen (Pasividad extrema)</strong></td>
                <td>Mover una extremidad con presión leve.</td>
                <td>Sigue el movimiento con una leve presión del dedo del examinador.</td>
              </tr>
              <tr>
                <td><strong>8. Manierismos / Estereotipias</strong></td>
                <td>Observar movimientos voluntarios.</td>
                <td>Movimientos rituales repetitivos, bizarros o rebuscados continuos.</td>
              </tr>
              <tr>
                <td><strong>9. Ecofenómenos (Ecolalia / Ecopraxia)</strong></td>
                <td>Hablar o hacer un gesto con la mano.</td>
                <td>Imita de inmediato las palabras o gestos del clínico como un eco.</td>
              </tr>
              <tr>
                <td><strong>10. Signo de la Almohada Psíquica</strong></td>
                <td>Retirar suavemente la almohada de la cama.</td>
                <td>Mantiene la cabeza suspendida en el aire a pocos centímetros de la cama.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERPRETACIÓN CLÍNICA DE LAS RESPUESTAS</div>
        <h3 class="orientation-sec-title">Significado Semiográfico y Peligros Vitales</h3>
        <div class="orientation-clinical-alert">
          <strong>URGENCIA VITAL - CATATONÍA MALIGNA:</strong> Si a la presencia de catatonía motora se agrega <em>hipertermia (&gt; 38 °C), inestabilidad autonómica (taquicardia, fluctuaciones tensionales, diaforesis profusa) y rigidez extrema</em>, el cuadro corresponde a una <strong>Catatonía Maligna</strong> o Síndrome Neuroléptico Maligno (SNM). Mortalidad &gt; 20% por rabdomiólisis e insuficiencia renal si no se trata en horas.
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">TRATAMIENTOS POSIBLES Y PROTOCOLO TERAPÉUTICO</div>
        <h3 class="orientation-sec-title">Protocolo de Intervención en Catatonía y Síndromes Orgánicos</h3>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🚨 Test de Lorazepam y Farmacoterapia de Choque</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Test Diagnóstico-Terapéutico de Lorazepam (Test de Bush):</strong> Administrar 1 a 2 mg de Lorazepam vía intravenosa lenta o intramuscular. En el 60-80% de los pacientes catatónicos, los signos motores revierten espectacularmente en 10 a 30 minutos, confirmando el diagnóstico.</li>
            <li><strong>Tratamiento de Mantenimiento:</strong> Lorazepam oral o parenteral a dosis altas: 6 a 16 mg/día repartidos en 3-4 tomas.</li>
            <li><strong>¡SUSPENSIÓN INMEDIATA DE ANTIPSICÓTICOS!:</strong> Si un paciente presenta catatonía, <em>retirar de inmediato todo antipsicótico típico o atípico</em>, ya que el bloqueo dopaminérgico precipita o empeora el Síndrome Neuroléptico Maligno.</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">⚡ Terapia Electroconvulsiva (TEC) de Emergencia</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Indicación de Rescate Vital:</strong> Si no hay respuesta al lorazepam en 48-72 horas, o ante Catatonía Maligna con inestabilidad autonómica, la <strong>Terapia Electroconvulsiva (TEC)</strong> bilateral es el tratamiento salvador de elección, con tasas de remisión superiores al 85-90%.</li>
          </ul>
        </div>
        
    <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
      <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
        📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
      
        <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="135" title="Saltar directamente a la página 135 en Cap. 5: Sensibilidad, Especificidad y Entrevistas Estructuradas (Pág. 135)">
          <span>📖</span>
          <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 5: Sensibilidad, Especificidad y Entrevistas Estructuradas (Pág. 135) →</span>
        </button>
        <button type="button" class="btn-book-citation-jump" data-book-id="nelson-ortiz-escala-abreviada" data-page="52" title="Saltar directamente a la página 52 en Baremos Percentilares y Criterios de Alerta Sindromática EAD-1 (Pág. 52)">
          <span>📖</span>
          <span><strong>Nelson Ortiz Pinilla:</strong> Baremos Percentilares y Criterios de Alerta Sindromática EAD-1 (Pág. 52) →</span>
        </button>
    </div>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="201" title="Saltar directamente a la página 201 en Diagnóstico Sindromático y Grandes Síndromes">
          <span>📖</span>
          <span><strong>Ricardo Capponi:</strong> Diagnóstico Sindromático y Grandes Síndromes (Pág. 201) →</span>
        </button>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="210" title="Saltar directamente a la página 210 en Síndrome Catatónico y Flexibilidad Cérea">
          <span>📖</span>
          <span><strong>Ricardo Capponi:</strong> Síndrome Catatónico y Flexibilidad Cérea (Pág. 210) →</span>
        </button>
      
    </div>
  
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta secondary" id="btn-bottom-back-sindromes-def">
          <span class="cta-icon">←</span>
          <div class="cta-texts">
            <strong class="cta-title">Volver a Fundamentos de Grandes Síndromes</strong>
            <span class="cta-sub">Revisar criterios de Capponi, diagnóstico sindromático y citas</span>
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
          { bookId: 'belloch-psicopatologia-vol1', page: 403, author: 'Belloch, Sandín y Ramos', title: 'Cap. 15: Trastornos de la Conducta Alimentaria (Perpiñá)' },
          { bookId: 'tests-psicologicos-anastasi-urbina', page: 125, author: 'Anne Anastasi & Susana Urbina', title: 'Cap. 5: Inventarios Psicométricos de Trastornos Alimentarios (EDI-3 y EAT-40)' }
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
          <span class="modal-area-pill">🩺 ÁREA: TRASTORNOS ALIMENTARIOS</span>
          <span class="modal-area-pill">⚖️ ÁREA: CRIBAJE SCOFF</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-top: 0.4rem;">
          <div>
            <h2 class="orientation-main-title">Evaluación semiológica de los trastornos de la conducta alimentaria (TCA)</h2>
            <p class="orientation-authors-meta">Cuestionario SCOFF (Morgan et al.) • Semiología de Anorexia y Bulimia (Belloch & Capponi)</p>
          </div>
          <button type="button" class="btn-back-to-def" id="btn-back-alimentaria-def">
            ← Ver Definición y Semiología
          </button>
        </div>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PASO 1: CUESTIONARIO DE CRIBADO SCOFF</div>
        <h3 class="orientation-sec-title">Las 5 Preguntas Cardinales del Test SCOFF</h3>
        <p class="orientation-p">
          Formule las siguientes 5 preguntas cerradas de respuesta dicotómica («Sí» = 1 punto / «No» = 0 puntos):
        </p>
        <ul class="orientation-checklist">
          <li><strong>S (Sick / Vómito autoinducido):</strong> <em>«¿Se provoca usted el vómito porque se siente incómodamente lleno/a después de comer?»</em></li>
          <li><strong>C (Control / Pérdida de control):</strong> <em>«¿Le preocupa haber perdido el control sobre cuánto o qué come?»</em></li>
          <li><strong>O (One stone / Pérdida ponderal marcada):</strong> <em>«¿Ha perdido recientemente más de 6 kilogramos (1 stone ≈ 6.35 kg) en un período de 3 meses?»</em></li>
          <li><strong>F (Fat / Distorsión corporal):</strong> <em>«¿Cree usted que está gordo/a a pesar de que los demás le dicen que está demasiado delgado/a?»</em></li>
          <li><strong>F (Food / Dominancia del alimento):</strong> <em>«¿Diría que la comida, las calorías o las dietas dominan totalmente sus pensamientos diarios?»</em></li>
        </ul>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SOLUCIONES Y SISTEMA DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Puntuación y Puntos de Corte del Cuestionario SCOFF</h3>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Puntuación Total</th>
                <th>Clasificación del Riesgo</th>
                <th>Significado Clínico & Sensibilidad</th>
                <th>Conducta a Seguir</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>0 a 1 Punto</strong></td>
                <td>Riesgo Bajo</td>
                <td>Poco probable la presencia de un TCA activo clínico.</td>
                <td>Control de rutina habitual.</td>
              </tr>
              <tr>
                <td><strong>≥ 2 Puntos</strong></td>
                <td><strong>RESULTADO POSITIVO (Sospecha Alta)</strong></td>
                <td><strong>Sensibilidad del 84.6% y especificidad del 89.6%</strong> para Anorexia o Bulimia.</td>
                <td><strong>Derivación a evaluación clínica y nutricional formal inmediata.</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERPRETACIÓN CLÍNICA DE LAS RESPUESTAS</div>
        <h3 class="orientation-sec-title">Significado Semiográfico de los Ítems y Señales de Gravedad Médica</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Perfil Purgativo / Bulímico</span>
            <h4 class="dim-name">Ítems S y C Positivos</h4>
            <p class="dim-desc">Sugiere ciclo de atracones con pérdida de control seguidos de purgas compensatorias (vómitos, laxantes o diuréticos). Riesgo de hipopotasemia y arritmias.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Perfil Restrictivo / Anoréxico</span>
            <h4 class="dim-name">Ítems O y F Positivos</h4>
            <p class="dim-desc">Pérdida ponderal acelerada con distorsión sobrevalorada de la imagen corporal. Severa emaciación corporal con amenorrea o retraso puberal.</p>
          </div>
        </div>
        <div class="orientation-clinical-alert" style="margin-top: 0.85rem;">
          <strong>CRITERIOS DE HOSPITALIZACIÓN MÉDICA URGENTE:</strong><br/>
          • IMC &lt; 14 kg/m² o pérdida de peso &gt; 20% en 3 meses.<br/>
          • Bradicardia severa (&lt; 40 lpm) o hipotensión arterial (&lt; 80/50 mmHg).<br/>
          • Alteraciones hidroelectrolíticas graves: Hipopotasemia (&lt; 3.0 mEq/L) con riesgo de paro cardíaco.<br/>
          • Hipotermia (&lt; 35.5 °C) o síncopes recurrentes.
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">TRATAMIENTOS POSIBLES Y PROTOCOLO TERAPÉUTICO</div>
        <h3 class="orientation-sec-title">Abordaje Nutricional, Psicoterapéutico y Farmacoterapia</h3>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🥗 Manejo Nutricional y Prevención del Síndrome de Realimentación</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Protocolo de Realimentación Progresiva:</strong> En desnutrición severa, iniciar con 1200-1500 kcal/día e incrementar gradualmente. <em>Monitorizar fósforo, magnesio y potasio sérico diariamente durante las primeras 2 semanas</em> para prevenir el <strong>Síndrome de Realimentación</strong> (hipofosfatemia severa con colapso cardíaco).</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🗣️ Psicoterapia de Primera Elección Basada en la Evidencia</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Terapia Cognitivo-Conductual Mejorada (CBT-E de Fairburn):</strong> Psicoterapia de elección para Bulimia Nerviosa y Trastorno por Atracón (técnicas de alimentación regular estructurada, registro de desencadenantes de atracones y reestructuración de la sobrevaloración de la figura).</li>
            <li><strong>Terapia Basada en la Familia (FBT - Método Maudsley):</strong> Tratamiento de primera línea en adolescentes con Anorexia Nerviosa (empoderamiento de los padres en la supervisión de las comidas).</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">💊 Farmacoterapia Específica</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Fluoxetina a Dosis Alta (60 mg/día):</strong> Único fármaco aprobado por la FDA con indicación específica en Bulimia Nerviosa para reducir la frecuencia de atracones y purgas.</li>
            <li><strong>Lisdexanfetamina (30-70 mg/día):</strong> Aprobada para Trastorno por Atracón moderado a grave en adultos.</li>
            <li><strong>Olanzapina a Dosis Bajas (2.5-5 mg/día):</strong> Útil en Anorexia Nerviosa restrictiva refractaria para disminuir la rumiación obsesiva y la ansiedad previa a las comidas.</li>
          </ul>
        </div>
        
    <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
      <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
        📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
      
        <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="128" title="Saltar directamente a la página 128 en Cap. 5: Puntos de Corte Psicométricos y Curvas ROC en TCA (Pág. 128)">
          <span>📖</span>
          <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 5: Puntos de Corte Psicométricos y Curvas ROC en TCA (Pág. 128) →</span>
        </button>
    </div>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="belloch-psicopatologia-vol1" data-page="403" title="Saltar directamente a la página 403 en Cap. 15: Trastornos de la Conducta Alimentaria">
          <span>📖</span>
          <span><strong>Belloch, Sandín y Ramos:</strong> Cap. 15: Trastornos de la Conducta Alimentaria (Pág. 403) →</span>
        </button>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="118" title="Saltar directamente a la página 118 en Semiología de las Conductas Básicas: Apetito y Alimentación">
          <span>📖</span>
          <span><strong>Ricardo Capponi:</strong> Semiología de las Conductas Básicas: Apetito y Alimentación (Pág. 118) →</span>
        </button>
      
    </div>
  
      </section>

      <div class="orientation-bottom-cta">
        <button type="button" class="btn-orientation-cta secondary" id="btn-bottom-back-alimentaria-def">
          <span class="cta-icon">←</span>
          <div class="cta-texts">
            <strong class="cta-title">Volver a Fundamentos de Conducta Alimentaria</strong>
            <span class="cta-sub">Revisar semiología de anorexia, bulimia, atracones y citas</span>
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
          { bookId: 'belloch-psicopatologia-vol1', page: 423, author: 'Belloch, Sandín y Ramos', title: 'Cap. 16: Trastornos de Control de Impulsos: El Juego Patológico' },
          { bookId: 'tests-psicologicos-anastasi-urbina', page: 495, author: 'Anne Anastasi & Susana Urbina', title: 'Cap. 17: Evaluación de la Impulsividad, BIS-11 y Pruebas Ejecutivas' },
          { bookId: 'nelson-ortiz-escala-abreviada', page: 29, author: 'Nelson Ortiz Pinilla', title: 'Área B (Motricidad Fino-Adaptativa): Control Inhibitorio Motor en Preescolares' }
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
            <p class="orientation-authors-meta">Cribado NODS (DSM-IV/5) • Persecución de Pérdidas («Chasing») & Consecuencias Sociofamiliares</p>
          </div>
          <button type="button" class="btn-back-to-def" id="btn-back-impulsos-def">
            ← Ver Definición y Semiología
          </button>
        </div>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PASO 1: ENTREVISTA EXPLORATORIA</div>
        <h3 class="orientation-sec-title">Pesquisa del Fenómeno de «Chasing» y Pérdida de Control</h3>
        <p class="orientation-p">
          Interrogue los componentes cardinales del ciclo impulsivo-adictivo:
        </p>
        <div class="clinical-speech-box" style="margin-bottom: 0.75rem;">
          <strong>🎯 Pregunta Cardinal («Chasing» / Persecución de Pérdidas):</strong>
          <span class="clinical-speech-quote">«Cuando pierde dinero jugando o apostando, ¿siente la necesidad urgente de volver otro día a jugar para recuperar lo que perdió?»</span>
          <p style="font-size: 0.8rem; color: var(--text-tertiary); margin-top: 0.35rem; margin-bottom: 0;">La respuesta afirmativa es el indicador más sensible de adicción conductual al juego.</p>
        </div>
        <ul class="orientation-checklist">
          <li><strong>Tolerancia:</strong> <em>«¿Ha necesitado apostar sumas cada vez mayores para sentir la misma emoción o excitación?»</em></li>
          <li><strong>Abstinencia:</strong> <em>«¿Se siente irritable, ansioso o desasosegado cuando intenta reducir o detener el juego?»</em></li>
          <li><strong>Ocultamiento y Mentiras:</strong> <em>«¿Ha mentido a su pareja, familia o amigos sobre el monto real de lo que apuesta o el tiempo que dedica al juego?»</em></li>
          <li><strong>Rescate Financiero:</strong> <em>«¿Ha tenido que pedir dinero prestado a familiares, bancos o prestamistas para saldar deudas provocadas por el juego?»</em></li>
        </ul>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SOLUCIONES Y SISTEMA DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Puntuación y Criterios del Instrumento NODS (Total 0 a 10 pts)</h3>
        <p class="orientation-p">
          Cada criterio positivo suma 1 punto en base a las 10 preguntas diagnósticas del NODS / DSM-5:
        </p>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Puntuación Obtenida</th>
                <th>Categoría Diagnóstica</th>
                <th>Significado Clínico & Impacto</th>
                <th>Intervención Indicada</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>0 Puntos</strong></td>
                <td>Jugador Social</td>
                <td>Sin patología de control; juega como diversión recreativa.</td>
                <td>Ninguna intervención requerida.</td>
              </tr>
              <tr>
                <td><strong>1 a 2 Puntos</strong></td>
                <td>Jugador de Riesgo</td>
                <td>Comienzan conductas de tolerancia o persecución leve de pérdidas.</td>
                <td>Consejo preventivo y psicoeducación temprana.</td>
              </tr>
              <tr>
                <td><strong>3 a 4 Puntos</strong></td>
                <td>Jugador Problemático</td>
                <td>Conflictos familiares incipientes, deudas moderadas y mentiras.</td>
                <td>Intervención psicológica y control de estímulos estricto.</td>
              </tr>
              <tr>
                <td><strong>≥ 5 Puntos</strong></td>
                <td><strong>LUDOPATÍA / JUEGO PATOLÓGICO CLÍNICO</strong></td>
                <td><strong>Adicción conductual severa</strong> con secuestro del sistema de recompensa dopaminérgico.</td>
                <td><strong>Tratamiento especializado intensivo (TCC + Farmacoterapia).</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERPRETACIÓN CLÍNICA DE LAS RESPUESTAS</div>
        <h3 class="orientation-sec-title">Fisiopatología de la Adicción Conductual y Fases de Custer</h3>
        <p class="orientation-p">
          Robert Custer describe tres fases en la evolución de la ludopatía:
        </p>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Fase 1</span>
            <h4 class="dim-name">Fase de Ganancia</h4>
            <p class="dim-desc">Éxitos iniciales alimentan la ilusión de control y la creencia mágica de tener un método ganador especial.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Fase 2</span>
            <h4 class="dim-name">Fase de Pérdida («Chasing»)</h4>
            <p class="dim-desc">Aparece la urgencia imperiosa de recuperar lo perdido, comenzando las deudas, mentiras y apuestas desesperadas mayores.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Fase 3</span>
            <h4 class="dim-name">Fase de Desesperación</h4>
            <p class="dim-desc">Quiebra financiera total, desintegración familiar, actos ilícitos y alto riesgo de suicidio por acorralamiento económico.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">TRATAMIENTOS POSIBLES Y PROTOCOLO TERAPÉUTICO</div>
        <h3 class="orientation-sec-title">Abordaje Psicoterapéutico, Farmacoterapia y Medidas de Autoexclusión</h3>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🗣️ Psicoterapia Cognitivo-Conductual y Grupos de Ayuda</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Reestructuración de Sesgos Cognitivos (TCC):</strong> Desmantelar la «falacia del jugador» (creer que tras muchas pérdidas una máquina «debe» pagar), la «ilusión de control sobre el azar» y la memoria selectiva de ganancias.</li>
            <li><strong>Control de Estímulos y Restricción de Medios:</strong> <strong>Autoexclusión formal voluntaria</strong> de salas de juego y casinos; bloqueo de aplicaciones de apuestas bancarias y control del dinero por un familiar de confianza.</li>
            <li><strong>Grupos de Ayuda Mutua:</strong> Participación activa en <strong>Jugadores Anónimos (JA)</strong> mediante el programa de 12 pasos.</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">💊 Farmacoterapia Coadyuvante del Craving y Control de Impulsos</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Antagonistas Opioides (Primera Elección):</strong> <strong>Naltrexona</strong> (50-100 mg/día): bloquea la liberación de dopamina en el núcleo accumbens inducida por la anticipación de la apuesta, reduciendo el *craving* del juego de forma muy significativa.</li>
            <li><strong>Anticonvulsivantes Moduladores del Impulso:</strong> Topiramato (100-200 mg/día) para estabilizar la impulsividad cerebral.</li>
            <li><strong>ISRS a Dosis Altas:</strong> Sertralina (100-200 mg/día) o Paroxetina si coexiste depresión reactiva o trastorno ansioso severo.</li>
          </ul>
        </div>
        
    <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
      <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
        📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
      
        <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="498" title="Saltar directamente a la página 498 en Cap. 17: Escala BIS-11, Medición de la Impulsividad y Toma de Decisiones (Pág. 498)">
          <span>📖</span>
          <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 17: Escala BIS-11, Medición de la Impulsividad y Toma de Decisiones (Pág. 498) →</span>
        </button>
        <button type="button" class="btn-book-citation-jump" data-book-id="nelson-ortiz-escala-abreviada" data-page="31" title="Saltar directamente a la página 31 en Área B: Control Inhibitorio Motor y Persistencia en la Tarea EAD-1 (Pág. 31)">
          <span>📖</span>
          <span><strong>Nelson Ortiz Pinilla:</strong> Área B: Control Inhibitorio Motor y Persistencia en la Tarea EAD-1 (Pág. 31) →</span>
        </button>
    </div>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="belloch-psicopatologia-vol1" data-page="423" title="Saltar directamente a la página 423 en Cap. 16: Trastornos de Control de Impulsos y Juego Patológico">
          <span>📖</span>
          <span><strong>Belloch, Sandín y Ramos:</strong> Cap. 16: Trastornos de Control de Impulsos y Juego Patológico (Pág. 423) →</span>
        </button>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="128" title="Saltar directamente a la página 128 en Semiología de la Voluntad y Control de Impulsos">
          <span>📖</span>
          <span><strong>Ricardo Capponi:</strong> Semiología de la Voluntad y Control de Impulsos (Pág. 128) →</span>
        </button>
      
    </div>
  
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
          La <strong>memoria inmediata</strong> evalúa la capacidad de almacenamiento pasivo del bucle fonológico (Dígitos Directos). La <strong>memoria de trabajo (operativa)</strong> requiere manipular y transformar activamente la información mientras se retiene mediante el ejecutivo central prefrontal dorsolateral (Dígitos Inversos).
        </p>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PROTOCOLO DE APLICACIÓN</div>
        <h3 class="orientation-sec-title">Series Estandarizadas de Dígitos Directos e Inversos</h3>
        <p class="orientation-p">
          Lea cada dígito a razón de exactamente <strong>uno por segundo</strong> con tono monótono, sin agrupar por pares:
        </p>
        <div style="background: rgba(255, 255, 255, 0.7); border: 1px solid var(--border-color); border-radius: 8px; padding: 0.85rem; font-family: monospace; font-size: 0.95rem; line-height: 1.6;">
          <strong>Dígitos Directos (Repetir en el mismo orden):</strong><br/>
          • Serie 3: 5 - 8 - 2<br/>
          • Serie 4: 6 - 4 - 3 - 9<br/>
          • Serie 5: 4 - 2 - 7 - 3 - 1<br/>
          • Serie 6: 6 - 1 - 9 - 4 - 7 - 3<br/>
          • Serie 7: 5 - 9 - 1 - 7 - 4 - 2 - 8<br/>
          • Serie 8: 5 - 8 - 1 - 9 - 2 - 6 - 4 - 7<br/><br/>
          <strong>Dígitos Inversos (El paciente debe decirlos al revés):</strong><br/>
          • Serie 3: 2 - 8 - 3 [Solución correcta: 3 - 8 - 2]<br/>
          • Serie 4: 3 - 2 - 7 - 9 [Solución correcta: 9 - 7 - 2 - 3]<br/>
          • Serie 5: 4 - 9 - 6 - 8 - 2 [Solución correcta: 2 - 8 - 6 - 9 - 4]<br/>
          • Serie 6: 1 - 5 - 2 - 8 - 6 - 3 [Solución correcta: 3 - 6 - 8 - 2 - 5 - 1]
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SOLUCIONES Y SISTEMA DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Puntuación Estandarizada y Valores Normativos</h3>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Prueba Mnésica</th>
                <th>Rendimiento Normal</th>
                <th>Límite / Dudoso</th>
                <th>Déficit Patológico Severo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Dígitos Directos (Span Fonológico)</strong></td>
                <td><strong>6 a 8 dígitos</strong> correctos</td>
                <td>5 dígitos correctos</td>
                <td><strong>≤ 4 dígitos</strong> (Atención/Bucle alterado)</td>
              </tr>
              <tr>
                <td><strong>Dígitos Inversos (Span Operativo)</strong></td>
                <td><strong>4 a 6 dígitos</strong> correctos</td>
                <td>3 dígitos correctos</td>
                <td><strong>≤ 2 dígitos</strong> (Falla ejecutiva frontal)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERPRETACIÓN CLÍNICA DE LAS RESPUESTAS</div>
        <h3 class="orientation-sec-title">Significado Semiográfico y Localización de la Disfunción</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Falla en Dígitos Directos</span>
            <h4 class="dim-name">Déficit Atencional Primario</h4>
            <p class="dim-desc">Si el paciente no retiene ni 4 dígitos directos, no es un problema de memoria propiamente tal, sino de <strong>inatención masiva</strong>, somnolencia, estado confusional agudo (delirium), intoxicación o angustia extrema.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Directos Normales + Inversos Bajos</span>
            <h4 class="dim-name">Déficit del Ejecutivo Central</h4>
            <p class="dim-desc">El paciente almacena la información (retiene 7 directos) pero no puede invertirla (falla en 3 inversos). Indica disfunción de la <strong>corteza prefrontal dorsolateral</strong>: TDAH del adulto, demencia frontotemporal o traumatismo frontal.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">TRATAMIENTOS POSIBLES Y PROTOCOLO TERAPÉUTICO</div>
        <h3 class="orientation-sec-title">Estimulación Neurocognitiva y Manejo Clínico</h3>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🧩 Rehabilitación Neurocognitiva</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Entrenamiento Computarizado de Memoria de Trabajo:</strong> Tareas n-back adaptativas, ejercicios de secuenciación alfanumérica y problemas de doble tarea.</li>
            <li><strong>Estrategias de Compensación Metacognitiva:</strong> Enseñar técnicas de agrupamiento (*chunking*: recordar los números telefónicos de 3 en 3), uso de agendas externas digitales, notas de voz y checklist de tareas diarias.</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">💊 Farmacoterapia y Optimización Médica</h4>
          <ul class="orientation-bullet-list">
            <li><strong>En TDAH del Adulto con Falla Operativa Frontal:</strong> Psicoestimulantes de acción prolongada (Metilfenidato OROS 18-54 mg/día o Lisdexanfetamina 30-70 mg/día) o no estimulantes (Atomoxetina 40-80 mg/día).</li>
            <li><strong>Higiene Farmacológica:</strong> Descontinuar o reducir de forma escalonada psicofármacos con <strong>alta carga anticolinérgica o sedante</strong> (benzodiacepinas crónicas, antihistamínicos de 1ª generación o antiespasmódicos) que deterioran directamente la memoria de trabajo.</li>
          </ul>
        </div>
        
    <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
      <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
        📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
      
        <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="220" title="Saltar directamente a la página 220 en Cap. 9: WAIS-IV Índice de Memoria de Trabajo IMT y Cálculo del EEM (Pág. 220)">
          <span>📖</span>
          <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 9: WAIS-IV Índice de Memoria de Trabajo IMT y Cálculo del EEM (Pág. 220) →</span>
        </button>
        <button type="button" class="btn-book-citation-jump" data-book-id="nelson-ortiz-escala-abreviada" data-page="35" title="Saltar directamente a la página 35 en Área C: Retención Inmediata y Órdenes Secuenciales en Niños EAD-1 (Pág. 35)">
          <span>📖</span>
          <span><strong>Nelson Ortiz Pinilla:</strong> Área C: Retención Inmediata y Órdenes Secuenciales en Niños EAD-1 (Pág. 35) →</span>
        </button>
    </div>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="149" title="Saltar directamente a la página 149 en Psicología y Psicopatología de la Memoria">
          <span>📖</span>
          <span><strong>Ricardo Capponi:</strong> Psicología y Psicopatología de la Memoria (Pág. 149) →</span>
        </button>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="belloch-psicopatologia-vol1" data-page="177" title="Saltar directamente a la página 177 en Cap. 7: Memoria Operativa y Bucle Fonológico">
          <span>📖</span>
          <span><strong>Belloch, Sandín y Ramos:</strong> Cap. 7: Memoria Operativa y Bucle Fonológico (Pág. 177) →</span>
        </button>
      
    </div>
  
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
        <p class="orientation-authors-meta">Ricardo Capponi (Págs. 149-154) • APIR (Págs. 38-41) • Test de 3 Palabras con Clave y Reconocimiento</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">PROTOCOLO DE EXPLORACIÓN</div>
        <h3 class="orientation-sec-title">Test Estandarizado de las 3 Palabras a los 5 Minutos</h3>
        <p class="orientation-p">
          Presente al paciente 3 palabras no asociadas semánticamente (ej: <strong>«MESA» - «LLAVE» - «ÁRBOL»</strong>). Pídale que las repita inmediatamente para asegurar la fijación inicial. Continúe con otras preguntas del examen mental durante 5 minutos y luego solicite su recuerdo.
        </p>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SOLUCIONES Y SISTEMA DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Protocolo Escalonado de Recuerdo (0 a 3 Puntos)</h3>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Paso Exploratorio</th>
                <th>Maniobra Clínica</th>
                <th>Solución / Respuesta Correcta</th>
                <th>Puntaje</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Paso 1: Evocación Libre</strong></td>
                <td>«Dígame las 3 palabras que le pedí que recordara».</td>
                <td>Recuerda las 3 palabras espontáneamente sin ayuda.</td>
                <td>1 punto por cada palabra (0-3 pts).</td>
              </tr>
              <tr>
                <td><strong>Paso 2: Clave Semántica</strong></td>
                <td>Para palabras no recordadas: «Una era un mueble, otra un objeto de metal, otra una planta».</td>
                <td>Recupera la palabra con la pista semántica.</td>
                <td>Recuperación facilitada (almacenamiento ok).</td>
              </tr>
              <tr>
                <td><strong>Paso 3: Reconocimiento</strong></td>
                <td>Si aún no recuerda: «¿Era mesa, silla o cama? ¿Era lápiz, llave o moneda?».</td>
                <td>Elige la palabra correcta entre 3 alternativas.</td>
                <td>Reconocimiento ok (almacenamiento ok).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERPRETACIÓN CLÍNICA DE LAS RESPUESTAS</div>
        <h3 class="orientation-sec-title">Significado Semiográfico: Hipocampo vs. Córtex Frontal</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Falla Cortical-Hipocámpica</span>
            <h4 class="dim-name">Amnesia de Consolidación (Alzheimer)</h4>
            <p class="dim-desc">El paciente <strong>NO recuerda libremente (0-1/3) y TAMPOCO mejora con claves ni con opciones múltiples</strong> (comete intrusiones de palabras falsas). La huella biológica nunca se consolidó por atrofia amígdalo-hipocámpica. Patognomónico de <strong>Enfermedad de Alzheimer</strong>.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Falla Subcortical-Frontal</span>
            <h4 class="dim-name">Déficit de Evocación / Acceso</h4>
            <p class="dim-desc">El paciente no recuerda espontáneamente (0-1/3), pero <strong>al darle la clave o el reconocimiento acierta al 100% (3/3)</strong>. La huella sí se grabó en el hipocampo, pero la corteza frontal no logra rescatarla. Típico de <strong>Demencia Vascular, Parkinson o Depresión Melancólica («Pseudodemencia»)</strong>.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">TRATAMIENTOS POSIBLES Y PROTOCOLO TERAPÉUTICO</div>
        <h3 class="orientation-sec-title">Abordaje Terapéutico Específico</h3>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">💊 Farmacoterapia para Deterioro de Consolidación Hipocámpica</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Inhibidores de la Acetilcolinesterasa (IACE - Fases Leve a Moderada):</strong> <strong>Donepezilo</strong> (5-10 mg/día en la noche), <strong>Rivastigmina</strong> (en parches transdérmicos de 4.6 mg a 9.5-13.3 mg/24h) o <strong>Galantamina</strong> (16-24 mg/día). Aumentan la disponibilidad de acetilcolina en las sinapsis hipocámpicas.</li>
            <li><strong>Antagonista NMDA (Fases Moderada a Severa):</strong> <strong>Memantina</strong> (iniciando en 5 mg hasta 20 mg/día) para evitar la excitotoxicidad por glutamato.</li>
            <li><strong>En Síndrome Amnésico de Korsakoff:</strong> <strong>Tiamina parenteral</strong> urgente (500 mg IV cada 8 horas por 5 días) antes de aportar glucosa.</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🧩 Terapia No Farmacológica</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Terapia de Estimulación Cognitiva (CST):</strong> Sesiones grupales de reminiscencia estructurada, orientación a la realidad y lectura de prensa.</li>
          </ul>
        </div>
        
    <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
      <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
        📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
      
        <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="490" title="Saltar directamente a la página 490 en Cap. 17: Curvas de Aprendizaje Verbal de Rey (RAVLT) y Retención a 30 Min (Pág. 490)">
          <span>📖</span>
          <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 17: Curvas de Aprendizaje Verbal de Rey (RAVLT) y Retención a 30 Min (Pág. 490) →</span>
        </button>
        <button type="button" class="btn-book-citation-jump" data-book-id="nelson-ortiz-escala-abreviada" data-page="36" title="Saltar directamente a la página 36 en Área C: Memoria Semántica y Evocación de Relatos Infantiles EAD-1 (Pág. 36)">
          <span>📖</span>
          <span><strong>Nelson Ortiz Pinilla:</strong> Área C: Memoria Semántica y Evocación de Relatos Infantiles EAD-1 (Pág. 36) →</span>
        </button>
    </div>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="151" title="Saltar directamente a la página 151 en Trastornos Cuantitativos de la Memoria y Amnesia de Fijación">
          <span>📖</span>
          <span><strong>Ricardo Capponi:</strong> Trastornos Cuantitativos de la Memoria y Amnesia de Fijación (Pág. 151) →</span>
        </button>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="219" title="Saltar directamente a la página 219 en Síndrome de Korsakoff y Confabulación">
          <span>📖</span>
          <span><strong>Ricardo Capponi:</strong> Síndrome de Korsakoff y Confabulación (Pág. 219) →</span>
        </button>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="apir-psicopatologia" data-page="38" title="Saltar directamente a la página 38 en Tema 5: Psicopatología de la Memoria y Demencias">
          <span>📖</span>
          <span><strong>Manual APIR:</strong> Tema 5: Psicopatología de la Memoria y Demencias (Pág. 38) →</span>
        </button>
      
    </div>
  
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
        <div class="orientation-section-badge">SOLUCIONES Y SISTEMA DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Desglose de Puntuación de la Escala de Glasgow (GCS)</h3>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Respuesta Ocular (1-4 Pts)</th>
                <th>Respuesta Verbal (1-5 Pts)</th>
                <th>Respuesta Motora (1-6 Pts)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>4:</strong> Espontánea.</td>
                <td><strong>5:</strong> Orientado y conversa adecuadamente.</td>
                <td><strong>6:</strong> Obedece órdenes motoras simples.</td>
              </tr>
              <tr>
                <td><strong>3:</strong> Al estímulo verbal (a la voz).</td>
                <td><strong>4:</strong> Desorientado y confuso.</td>
                <td><strong>5:</strong> Localiza el estímulo doloroso.</td>
              </tr>
              <tr>
                <td><strong>2:</strong> Al estímulo doloroso (presión ungueal).</td>
                <td><strong>3:</strong> Palabras inapropiadas o inconexas.</td>
                <td><strong>4:</strong> Retirada motora normal en flexión.</td>
              </tr>
              <tr>
                <td><strong>1:</strong> Ninguna apertura ocular.</td>
                <td><strong>2:</strong> Sonidos incomprensibles (quejidos).</td>
                <td><strong>3:</strong> Flexión anormal (Decorticación).</td>
              </tr>
              <tr>
                <td>-</td>
                <td><strong>1:</strong> Ninguna respuesta verbal.</td>
                <td><strong>2:</strong> Extensión anormal (Descerebración).</td>
              </tr>
              <tr>
                <td>-</td>
                <td>-</td>
                <td><strong>1:</strong> Ninguna respuesta motora (flacidez).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERPRETACIÓN CLÍNICA DE LAS RESPUESTAS</div>
        <h3 class="orientation-sec-title">Puntos de Corte de Severidad y Riesgo Vital</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">14 a 15 Puntos</span>
            <h4 class="dim-name">Conciencia Normal / TCE Leve</h4>
            <p class="dim-desc">Paciente alerta o con confusión mínima transitoria. Observación clínica neurológica ambulatoria o en urgencias por 6 horas.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">9 a 13 Puntos</span>
            <h4 class="dim-name">Deterioro Moderado de Conciencia</h4>
            <p class="dim-desc">Estupor o letargo severo. <strong>Indicación obligatoria de TAC de cráneo urgente</strong> e ingreso hospitalario en unidad de cuidados intermedios.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">3 a 8 Puntos</span>
            <h4 class="dim-name">Coma Grave / Falla de Vía Aérea</h4>
            <p class="dim-desc">Pérdida de la reactividad cortical y del tronco encefálico. Pérdida inminente de los reflejos deglutorios y protectores de la vía aérea.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">TRATAMIENTOS POSIBLES Y PROTOCOLO TERAPÉUTICO</div>
        <h3 class="orientation-sec-title">Protocolo de Emergencia Neurocrítica (Soporte Vital ABCDE)</h3>
        <div class="orientation-clinical-alert">
          <strong>REGLA DE ORO DE URGENCIAS: GCS ≤ 8 = INTUBACIÓN OROTRAQUEAL INMEDIATA.</strong><br/>
          Todo paciente con Glasgow ≤ 8 puntos ha perdido los reflejos protectores de la vía aérea contra la broncoaspiración masiva. Se debe realizar intubación en secuencia rápida (ISR) y conexión a ventilación mecánica en UCI.
        </div>
        <div class="orientation-subcard" style="margin-top: 0.85rem;">
          <h4 class="orientation-subcard-title">🚨 Medidas Neurocríticas Inmediatas</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Oxigenación y Perfusión:</strong> Mantener SatO2 &gt; 94%, PaO2 &gt; 80 mmHg y PaCO2 entre 35-40 mmHg (evitar hipocapnia severa que causa isquemia cerebral). Mantener Presión Arterial Media (PAM) &gt; 80 mmHg para asegurar Presión de Perfusión Cerebral (PPC &gt; 60 mmHg).</li>
            <li><strong>Sospecha de Hipertensión Endocraneana Aguda:</strong> Cabecera elevada a 30°, solución salina hipertónica al 3% (250 ml en bolo) o Manitol al 20% (0.5 a 1 g/kg IV) y evaluación urgente por Neurocirugía.</li>
          </ul>
        </div>
        
    <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
      <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
        📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
      
        <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="98" title="Saltar directamente a la página 98 en Cap. 4: Confiabilidad Inter-Evaluador Kappa Ponderado en Urgencias (Pág. 98)">
          <span>📖</span>
          <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 4: Confiabilidad Inter-Evaluador Kappa Ponderado en Urgencias (Pág. 98) →</span>
        </button>
        <button type="button" class="btn-book-citation-jump" data-book-id="nelson-ortiz-escala-abreviada" data-page="20" title="Saltar directamente a la página 20 en Área A (Motricidad): Reactividad Motora y Reflejos en Lactantes EAD-1 (Pág. 20)">
          <span>📖</span>
          <span><strong>Nelson Ortiz Pinilla:</strong> Área A (Motricidad): Reactividad Motora y Reflejos en Lactantes EAD-1 (Pág. 20) →</span>
        </button>
    </div>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="146" title="Saltar directamente a la página 146 en Psicopatología de la Conciencia: Niveles Cuantitativos">
          <span>📖</span>
          <span><strong>Ricardo Capponi:</strong> Psicopatología de la Conciencia: Niveles Cuantitativos (Pág. 146) →</span>
        </button>
      
    </div>
  
      </section>
    </div>
  
  `,

  'evaluacion-conciencia-delirium-cam': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">⚡ PROTOCOLO DIAGNÓSTICO DELIRIUM</span>
          <span class="modal-area-pill">🩺 ÁREA: URGENCIAS & GERIATRÍA</span>
          <span class="modal-area-pill">🔬 ÁREA: NEUROPSIQUIATRÍA</span>
        </div>
        <h2 class="orientation-main-title">Evaluación cualitativa de la conciencia y Delirium (Algoritmo CAM)</h2>
        <p class="orientation-authors-meta">Confusion Assessment Method (Inouye et al., 1990) • Ricardo Capponi (Pág. 204)</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SOLUCIONES Y SISTEMA DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Los 4 Criterios Cardinales del Algoritmo CAM</h3>
        <p class="orientation-p">
          Para confirmar el diagnóstico de <strong>Delirium (Síndrome Confusional Agudo)</strong> se requiere la presencia obligatoria de los criterios 1 y 2, sumados al criterio 3 o al criterio 4:
        </p>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Criterio Clínico CAM</th>
                <th>Pregunta de Verificación Semiográfica</th>
                <th>Resultado Requerido</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Comienzo Agudo y Curso Fluctuante</strong></td>
                <td>¿Existe evidencia de un cambio agudo en el estado mental del paciente respecto a su basal? ¿Fluyen los síntomas a lo largo del día (empeoramiento nocturno)?</td>
                <td><strong>OBLIGATORIO (Positivo)</strong></td>
              </tr>
              <tr>
                <td><strong>2. Inatención</strong></td>
                <td>¿Tiene dificultad para fijar la atención (se distrae con facilidad, no puede deletrear «MUNDO» al revés o contar hacia atrás)?</td>
                <td><strong>OBLIGATORIO (Positivo)</strong></td>
              </tr>
              <tr>
                <td><strong>3. Pensamiento Desorganizado</strong></td>
                <td>¿Es el discurso incoherente, desarticulado, con paso ilógico de un tema a otro o con ideas de persecución transitorias?</td>
                <td rowspan="2"><strong>AL MENOS UNO DE LOS DOS (Criterio 3 O Criterio 4 Positivo)</strong></td>
              </tr>
              <tr>
                <td><strong>4. Nivel de Conciencia Alterado</strong></td>
                <td>¿Presenta cualquier nivel distinto a «Alerta normal»: hiperalerta (vigilante), letárgico (somnoliento pero despierta), o estuporoso?</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="orientation-diff-note" style="margin-top: 0.85rem;">
          <strong>Regla Diagnóstica:</strong> Criterio 1 (+) Y Criterio 2 (+) Y [ Criterio 3 (+) O Criterio 4 (+) ] = <strong>CAM POSITIVO (Delirium Confirmado)</strong> con sensibilidad 94-100% y especificidad 90-95%.
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERPRETACIÓN CLÍNICA DE LAS RESPUESTAS</div>
        <h3 class="orientation-sec-title">Subtipos Clínicos y Pronóstico</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Subtipo Hipoactivo</span>
            <h4 class="dim-name">El más Peligroso e Infradiagnosticado</h4>
            <p class="dim-desc">Paciente quieto, somnoliento, apático, con habla enlentecida. Se confunde con depresión o demencia. <strong>Tiene la tasa de mortalidad hospitalaria más alta</strong>.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Subtipo Hiperactivo</span>
            <h4 class="dim-name">Agitación y Alucinaciones</h4>
            <p class="dim-desc">Paciente combativo, con hiperactividad motora, alucinaciones visuales zoopsias (animales/bichos) e inversión completa del ciclo sueño-vigilia.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Subtipo Mixto</span>
            <h4 class="dim-name">Fluctuación Diurna / Nocturna</h4>
            <p class="dim-desc">Letargo durante el día y agitación nocturna franca (*«sundowning»* o empeoramiento al atardecer).</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">TRATAMIENTOS POSIBLES Y PROTOCOLO TERAPÉUTICO</div>
        <h3 class="orientation-sec-title">Protocolo de Intervención Etiológica y Ambiental</h3>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🔍 Identificación y Reversión de la Causa Médica Subyacente</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Búsqueda Inmediata:</strong> Infección urinaria oculta (urocultivo), neumonía por aspiración (Rx tórax), deshidratación e hiponatremia/hipercalcemia, retención urinaria aguda por globo vesical, fecaloma, hipoxemia o abstinencia a sedantes/alcohol.</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🌿 Medidas Ambientales de Primera Línea (Programa HELP)</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Reorientación Espaciotemporal Continua:</strong> Reloj y calendario grandes a la vista; habitación con luz natural de día y penumbra de noche; permitir la compañía de un familiar 24 horas.</li>
            <li><strong>Conservación Sensorial:</strong> Asegurar que el paciente use sus anteojos y prótesis auditivas.</li>
            <li><strong>¡EVITAR LA SUJECIÓN MECÁNICA!:</strong> Atar a un paciente con delirium duplica la mortalidad y dispara la agitación psicomotriz.</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">💊 Farmacoterapia de Rescate (Sólo si hay agitación severa peligrosa)</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Haloperidol a Dosis Bajas:</strong> 0.5 a 1 mg vía oral o intramuscular cada 4-6 horas (monitorizar intervalo QTc en el electrocardiograma).</li>
            <li><strong>Quetiapina (Especialmente en ancianos o Parkinson/Lewy):</strong> 12.5 a 25 mg por la noche.</li>
            <li><strong>¡Contraindicación de Benzodiacepinas!:</strong> Empeoran y prolongan el delirium (sólo se usan si el delirium es secundario a abstinencia alcohólica - Delirium Tremens).</li>
          </ul>
        </div>
        
    <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
      <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
        📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
      
        <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="120" title="Saltar directamente a la página 120 en Cap. 5: Sensibilidad (94-100%) y Especificidad (90-95%) del Algoritmo CAM (Pág. 120)">
          <span>📖</span>
          <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 5: Sensibilidad (94-100%) y Especificidad (90-95%) del Algoritmo CAM (Pág. 120) →</span>
        </button>
    </div>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="204" title="Saltar directamente a la página 204 en Síndrome Confusional y Delirium">
          <span>📖</span>
          <span><strong>Ricardo Capponi:</strong> Síndrome Confusional y Delirium (Pág. 204) →</span>
        </button>
      
    </div>
  
      </section>
    </div>
  
  `,

  'evaluacion-afectividad-animo': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">❤️ SEMIOLOGÍA DEL AFECTO & ÁNIMO</span>
          <span class="modal-area-pill">🔬 ÁREA: EVALUACIÓN CLÍNICA</span>
          <span class="modal-area-pill">🩺 ÁREA: EXAMEN MENTAL</span>
        </div>
        <h2 class="orientation-main-title">Evaluación del humor, estado de ánimo y modulación afectiva</h2>
        <p class="orientation-authors-meta">Ricardo Capponi (Págs. 80-100) • Sentimientos de Estado, Reactividad y Congruencia Afectiva</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SOLUCIONES Y SISTEMA DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Pauta Semiográfica de 4 Ejes Afectivos (Total 0 a 12 pts)</h3>
        <p class="orientation-p">
          Cada dimensión se gradúa de 0 (Normal) a 3 (Severamente patológico):
        </p>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Eje Semiográfico</th>
                <th>0 Puntos (Eutimia / Normal)</th>
                <th>1-2 Puntos (Leve/Moderado)</th>
                <th>3 Puntos (Grave / Disruptivo)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Tono Basal del Humor</strong></td>
                <td>Eutímico (ánimo modulado estable).</td>
                <td>Hipotimia leve o disforia irritable.</td>
                <td>Melancolía profunda con dolor moral / Manía eufórica.</td>
              </tr>
              <tr>
                <td><strong>2. Reactividad Emocional</strong></td>
                <td>Responde con sonrisa o tristeza adecuada.</td>
                <td>Reactividad amortiguada pero presente.</td>
                <td><strong>Anhedonia y arreactividad total</strong> («anestesia psíquica»).</td>
              </tr>
              <tr>
                <td><strong>3. Modulación y Flexibilidad</strong></td>
                <td>Pasa naturalmente de un afecto a otro.</td>
                <td>Afecto algo rígido o lábil ocasional.</td>
                <td>Afecto totalmente aplanado o incontinencia espasmódica.</td>
              </tr>
              <tr>
                <td><strong>4. Congruencia Ideo-Afectiva</strong></td>
                <td>Afecto congruente con el pensamiento.</td>
                <td>Incongruencia dudosa en temas neutros.</td>
                <td><strong>Discordancia afectiva / Paramimia</strong> (risa ante tragedia).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERPRETACIÓN CLÍNICA DE LAS RESPUESTAS</div>
        <h3 class="orientation-sec-title">Significado Semiográfico de los Perfiles Afectivos</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Tristeza Vital Melancólica (Capponi)</span>
            <h4 class="dim-name">Depresión Endógena Severa</h4>
            <p class="dim-desc">Puntuación máxima en arreactividad afectiva y dolor moral somatizado (opresión precordial, pesadez corporal). Empeoramiento matutino. Patognomónico de <strong>Depresión Mayor Melancólica</strong>.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Hipertimia Expansiva</span>
            <h4 class="dim-name">Episodio Maníaco / Bipolar</h4>
            <p class="dim-desc">Euforia contagiosa, hiperactividad desbordante, desinhibición social y labilidad extrema hacia la ira si se le pone un límite. Típico de <strong>Trastorno Bipolar I</strong>.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Aplanamiento y Discordancia</span>
            <h4 class="dim-name">Esquizofrenia / Defecto Afectivo</h4>
            <p class="dim-desc">Inexpresividad fría e indiferencia hacia noticias trágicas o risa insulsa simultánea (paramimia). Refleja quiebre de la síntesis psíquica.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">TRATAMIENTOS POSIBLES Y PROTOCOLO TERAPÉUTICO</div>
        <h3 class="orientation-sec-title">Abordaje Farmacológico y Psicoterapéutico</h3>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">💊 Farmacoterapia según la Polaridad del Humor</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Para Depresión Melancólica Mayor:</strong> Antidepresivos de acción dual (Venlafaxina 150-225 mg/día, Duloxetina 60-90 mg/día) o multimodal (Vortioxetina 10-20 mg/día). Si no responde: Terapia Electroconvulsiva (TEC) o Ketamina/Esketamina.</li>
            <li><strong>Para Episodio Maníaco Agudo:</strong> Carbonato de Litio (litemia 0.8-1.2 mEq/L) o Ácido Valproico (1000-1500 mg/día) + Antipsicótico antimaníaco (Quetiapina 400-600 mg o Aripiprazol 15-30 mg). <em>Suspender inmediatamente cualquier fármaco antidepresivo previo</em>.</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🗣️ Psicoterapia Específica</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Activación Conductual (TCC):</strong> Romper el círculo de inactividad-desesperanza programando tareas placenteras y de logro graduales sin esperar a «tener ganas».</li>
            <li><strong>Terapia Interpersonal y del Ritmo Social (IPSRT) para Bipolaridad:</strong> Estabilizar rutinas de sueño-vigilia, horarios de comida y actividades sociales para prevenir nuevos episodios.</li>
          </ul>
        </div>
        
    <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
      <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
        📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
      
        <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="102" title="Saltar directamente a la página 102 en Cap. 4: Escalas de Depresión HDRS y BDI-II, Confiabilidad y EEM (Pág. 102)">
          <span>📖</span>
          <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 4: Escalas de Depresión HDRS y BDI-II, Confiabilidad y EEM (Pág. 102) →</span>
        </button>
        <button type="button" class="btn-book-citation-jump" data-book-id="nelson-ortiz-escala-abreviada" data-page="39" title="Saltar directamente a la página 39 en Área D (Personal-Social): Modulación Afectiva y Conexión Social EAD-1 (Pág. 39)">
          <span>📖</span>
          <span><strong>Nelson Ortiz Pinilla:</strong> Área D (Personal-Social): Modulación Afectiva y Conexión Social EAD-1 (Pág. 39) →</span>
        </button>
    </div>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="80" title="Saltar directamente a la página 80 en Psicología y Psicopatología de la Afectividad">
          <span>📖</span>
          <span><strong>Ricardo Capponi:</strong> Psicología y Psicopatología de la Afectividad (Pág. 80) →</span>
        </button>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="apir-psicopatologia" data-page="59" title="Saltar directamente a la página 59 en Tema 9: Psicopatología de la Afectividad">
          <span>📖</span>
          <span><strong>Manual APIR:</strong> Tema 9: Psicopatología de la Afectividad (Pág. 59) →</span>
        </button>
      
    </div>
  
      </section>
    </div>
  
  `,

  'evaluacion-riesgo-suicida': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">🚨 EMERGENCIA PSIQUIÁTRICA VITAL</span>
          <span class="modal-area-pill">🩺 ÁREA: PREVENCIÓN DEL SUICIDIO</span>
          <span class="modal-area-pill">🔬 ÁREA: EVALUACIÓN DE CRISIS</span>
        </div>
        <h2 class="orientation-main-title">Evaluación multidimensional del riesgo suicida (C-SSRS y Factores Clínicos)</h2>
        <p class="orientation-authors-meta">Columbia-Suicide Severity Rating Scale (Posner et al.) • Ricardo Capponi (Págs. 88-92)</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SOLUCIONES Y SISTEMA DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Los 6 Niveles de Severidad del C-SSRS</h3>
        <p class="orientation-p">
          Formule las preguntas de forma directa y compasiva. La respuesta afirmativa a cualquier nivel superior califica el riesgo total del paciente:
        </p>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Nivel C-SSRS</th>
                <th>Pregunta Semiográfica Estandarizada</th>
                <th>Nivel de Riesgo Clínico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Nivel 1: Deseo Pasivo de Morir</strong></td>
                <td>«¿Ha deseado estar muerto/a o acostarse a dormir y no volver a despertar jamás?»</td>
                <td>Riesgo Bajo a Moderado</td>
              </tr>
              <tr>
                <td><strong>Nivel 2: Ideación Activa sin Método</strong></td>
                <td>«¿Ha tenido pensamientos sobre quitarse la vida, sin haber pensado cómo lo haría?»</td>
                <td>Riesgo Moderado</td>
              </tr>
              <tr>
                <td><strong>Nivel 3: Ideación con Método sin Plan</strong></td>
                <td>«¿Ha pensado en formas o métodos de cómo podría quitarse la vida (ej. pastillas, precipitación)?»</td>
                <td>Riesgo Moderado-Alto</td>
              </tr>
              <tr>
                <td><strong>Nivel 4: Ideación con Intención sin Plan</strong></td>
                <td>«¿Ha tenido la intención real de llevar a cabo estos pensamientos suicidas?»</td>
                <td><strong>RIESGO SEVERO / CRÍTICO</strong></td>
              </tr>
              <tr>
                <td><strong>Nivel 5: Intención con Plan Específico</strong></td>
                <td>«¿Tiene un plan concreto sobre cuándo, dónde y cómo va a realizarlo?»</td>
                <td><strong>RIESGO INMINENTE DE SUICIDIO</strong></td>
              </tr>
              <tr>
                <td><strong>Nivel 6: Actos Preparatorios o Intentos</strong></td>
                <td>«¿Ha empezado a reunir pastillas, escribir cartas de despedida o ha intentado quitarse la vida?»</td>
                <td><strong>EMERGENCIA PSIQUIÁTRICA VITAL</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERPRETACIÓN CLÍNICA DE LAS RESPUESTAS</div>
        <h3 class="orientation-sec-title">Estratificación del Riesgo y Factores Agravantes</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Niveles 1 y 2</span>
            <h4 class="dim-name">Riesgo Bajo a Moderado</h4>
            <p class="dim-desc">Ideación sin método ni intención. Manejo ambulatorio estrecho, compromiso de familiares en la custodia de fármacos y cita de control en menos de 7 días.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Nivel 3</span>
            <h4 class="dim-name">Riesgo Moderado a Alto</h4>
            <p class="dim-desc">Método presente. Retirar de inmediato todo medio letal en el domicilio (medicamentos, armas, cuerdas). Contacto diario y derivación prioritaria.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Niveles 4 a 6</span>
            <h4 class="dim-name">RIESGO INMINENTE VITAL</h4>
            <p class="dim-desc">Plan estructurado, intención o preparativos. <strong>Indicación mandatoria de HOSPITALIZACIÓN PSIQUIÁTRICA INMEDIATA</strong>. No dejar solo al paciente ni un segundo.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">TRATAMIENTOS POSIBLES Y PROTOCOLO TERAPÉUTICO</div>
        <h3 class="orientation-sec-title">Protocolo de Intervención en Crisis Suicida</h3>
        <div class="orientation-clinical-alert">
          <strong>PROTOCOLO DE EMERGENCIA VITAL:</strong> Paciente con C-SSRS nivel 4 a 6: Notificar a familiares de inmediato, activar ambulancia o traslado a urgencias, y mantener vigilancia visual directa 1 a 1 sin permitir acceso a baños a solas ni objetos cortantes.
        </div>
        <div class="orientation-subcard" style="margin-top: 0.85rem;">
          <h4 class="orientation-subcard-title">📝 Plan de Seguridad Escrito (Stanley & Brown)</h4>
          <ul class="orientation-bullet-list">
            <li>1. Identificar señales de advertencia personales que indican el inicio de la crisis.</li>
            <li>2. Estrategias internas de afrontamiento (ejercicios de respiración, ducharse, escuchar música).</li>
            <li>3. Contactos sociales y lugares seguros que ayuden a distraerse de la crisis.</li>
            <li>4. Familiares o amigos específicos a quienes pedir auxilio directo.</li>
            <li>5. Teléfonos de emergencia médica y líneas de prevención del suicidio (ej. Línea 4141).</li>
            <li>6. Medidas de seguridad ambiental: Retiro absoluto de medios letales del hogar.</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">💊 Farmacoterapia con Evidencia Antisuicida Comprobada</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Carbonato de Litio:</strong> Único estabilizador del ánimo que reduce significativamente la tasa de suicidios consumados a largo plazo tanto en trastorno bipolar como en depresión recurrente unipolar.</li>
            <li><strong>Clozapina:</strong> Único antipsicótico con indicación aprobada por la FDA para la prevención de la conducta suicida recurrente en esquizofrenia y esquizoafectivo.</li>
            <li><strong>Esketamina Intranasal:</strong> Aprobada para la reducción rápida de síntomas depresivos e ideación suicida aguda inminente en urgencias.</li>
          </ul>
        </div>
        
    <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
      <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
        📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
      
        <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="135" title="Saltar directamente a la página 135 en Cap. 5: Validez Predictiva de Escalas Clínicas y Prevención del Error (Pág. 135)">
          <span>📖</span>
          <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 5: Validez Predictiva de Escalas Clínicas y Prevención del Error (Pág. 135) →</span>
        </button>
    </div>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="88" title="Saltar directamente a la página 88 en Semiología de la Melancolía, Culpa y Riesgo Suicida">
          <span>📖</span>
          <span><strong>Ricardo Capponi:</strong> Semiología de la Melancolía, Culpa y Riesgo Suicida (Pág. 88) →</span>
        </button>
      
    </div>
  
      </section>
    </div>
  
  `,

  'evaluacion-ansiedad-panico': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">⚡ CRISIS DE ANGUSTIA & PÁNICO</span>
          <span class="modal-area-pill">🔬 ÁREA: EVALUACIÓN CLÍNICA</span>
          <span class="modal-area-pill">🩺 ÁREA: TRASTORNOS DE ANSIEDAD</span>
        </div>
        <h2 class="orientation-main-title">Evaluación semiológica de la ansiedad, angustia y crisis de pánico</h2>
        <p class="orientation-authors-meta">Los 13 Síntomas Cardinales del DSM-5 • Ricardo Capponi (Pág. 82) • Belloch (Vol. 2)</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SOLUCIONES Y SISTEMA DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Los 13 Síntomas Somáticos y Cognitivos de la Crisis de Pánico</h3>
        <p class="orientation-p">
          Un ataque de pánico consiste en la aparición súbita de miedo o malestar intenso que <strong>alcanza su máxima expresión en cuestión de 10 minutos</strong>, acompañado de al menos 4 de los siguientes síntomas:
        </p>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Grupo de Síntomas</th>
                <th>Síntomas DSM-5 (Marcar Positivos)</th>
                <th>Criterio de Corte Diagnóstico</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Síntomas Cardiorrespiratorios</strong></td>
                <td>
                  1. Palpitaciones, taquicardia o golpeteo del corazón.<br/>
                  2. Sensación de dificultad para respirar o asfixia (disnea).<br/>
                  3. Opresión, dolor o malestar torácico pre-cordial.
                </td>
                <td rowspan="4">
                  <strong>PUNTOS DE CORTE:</strong><br/><br/>
                  • <strong>&lt; 4 Síntomas:</strong> Crisis de síntomas limitados (paucisintomática).<br/><br/>
                  • <strong>≥ 4 Síntomas:</strong> <strong>ATAQUE DE PÁNICO FORMAL</strong>.<br/><br/>
                  Si se asocia a &gt; 1 mes de preocupación constante por nuevas crisis o cambios conductuales desadaptativos: <strong>Trastorno de Pánico</strong>.
                </td>
              </tr>
              <tr>
                <td><strong>Síntomas Neurovegetativos</strong></td>
                <td>
                  4. Sudoración profusa (diaforesis).<br/>
                  5. Temblores o sacudidas musculares.<br/>
                  6. Sensación de atragantamiento o nudo en la garganta.<br/>
                  7. Náuseas o dolor abdominal difuso.<br/>
                  8. Escalofríos o sensaciones de calor sofocante.
                </td>
              </tr>
              <tr>
                <td><strong>Síntomas Neurológicos / Sensoriales</strong></td>
                <td>
                  9. Mareo, inestabilidad, aturdimiento o desmayo.<br/>
                  10. Parestesias (hormigueo o entumecimiento en manos/cara).
                </td>
              </tr>
              <tr>
                <td><strong>Síntomas Cognitivos de Catástrofe</strong></td>
                <td>
                  11. Desrealización (mundo irreal) o Despersonalización.<br/>
                  12. <strong>Miedo a perder el control o «volverse loco»</strong>.<br/>
                  13. <strong>Miedo inminente a morir</strong>.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERPRETACIÓN CLÍNICA DE LAS RESPUESTAS</div>
        <h3 class="orientation-sec-title">Fisiopatología: La Tormenta Adrenérgica y la Hiperventilación</h3>
        <p class="orientation-p">
          La crisis se dispara por una falsa alarma en el <strong>locus coeruleus y la amígdala cerebral</strong>, liberando una descarga masiva de noradrenalina y adrenalina. El paciente hiperventila de forma refleja, lo que barre el CO2 plasmático causando <strong>alcalosis respiratoria</strong>: esto produce vasoconstricción cerebral (mareo e irrealidad) y disminución del calcio iónico (parestesias en manos y boca).
        </p>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">TRATAMIENTOS POSIBLES Y PROTOCOLO TERAPÉUTICO</div>
        <h3 class="orientation-sec-title">Manejo en Crisis Aguda y Farmacoterapia a Largo Plazo</h3>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🚨 Protocolo de Rescate en Crisis Aguda</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Desescalamiento Verbal y Psicoeducación:</strong> Asegurar con firmeza y calma que los síntomas corresponden a una descarga de adrenalina temporal, que <em>no es un infarto ni va a perder la razón</em>, y que alcanzará una meseta y descenderá sola en minutos.</li>
            <li><strong>Respiración con Freno Labial o Diafragmática (4-2-6):</strong> Inhalar en 4 segundos, pausar 2 segundos y exhalar lentamente en 6 segundos con labios fruncidos para normalizar el CO2 arterial y revertir las parestesias.</li>
            <li><strong>Fármacos de Rescate Ocasional:</strong> Benzodiacepinas sublinguales de acción rápida (Lorazepam 1-2 mg o Clonazepam 0.5 mg) exclusivamente para crisis agudas severas (no mantener de forma pautada fija crónica para evitar tolerancia y dependencia).</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">💊 Tratamiento Farmacológico de Mantenimiento (Primera Elección)</h4>
          <ul class="orientation-bullet-list">
            <li><strong>ISRS a Dosis Plenas:</strong> <strong>Sertralina</strong> (50-150 mg/día), <strong>Escitalopram</strong> (10-20 mg/día) o <strong>Paroxetina</strong> (20-40 mg/día). <em>Regla de inicio: comenzar a mitad de dosis durante la primera semana</em> para prevenir la ansiedad paradójica inicial.</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🗣️ Terapia Cognitivo-Conductual (TCC) de Elección</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Exposición Interoceptiva:</strong> Provocar voluntariamente en la consulta sensaciones temidas (hiperventilar 1 minuto, girar en una silla para marearse) para romper la asociación de pánico ante las señales corporales internas.</li>
            <li><strong>Reestructuración Cognitiva:</strong> Modificar los pensamientos catastrofistas («mi corazón va rápido = me va a dar un paro cardíaco»).</li>
          </ul>
        </div>
        
    <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
      <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
        📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
      
        <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="105" title="Saltar directamente a la página 105 en Cap. 4: Inventarios de Ansiedad BAI y HARS, Baremos y Puntos de Corte (Pág. 105)">
          <span>📖</span>
          <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 4: Inventarios de Ansiedad BAI y HARS, Baremos y Puntos de Corte (Pág. 105) →</span>
        </button>
        <button type="button" class="btn-book-citation-jump" data-book-id="nelson-ortiz-escala-abreviada" data-page="40" title="Saltar directamente a la página 40 en Área D: Angustia de Separación y Reacciones ante Extraños en Infantes EAD-1 (Pág. 40)">
          <span>📖</span>
          <span><strong>Nelson Ortiz Pinilla:</strong> Área D: Angustia de Separación y Reacciones ante Extraños en Infantes EAD-1 (Pág. 40) →</span>
        </button>
    </div>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="82" title="Saltar directamente a la página 82 en Semiología de la Angustia y Ansiedad Somatizada">
          <span>📖</span>
          <span><strong>Ricardo Capponi:</strong> Semiología de la Angustia y Ansiedad Somatizada (Pág. 82) →</span>
        </button>
      
    </div>
  
      </section>
    </div>
  
  `,

  'evaluacion-deterioro-cognitivo-minimental': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">📊 TEST DE CRIBADO COGNITIVO</span>
          <span class="modal-area-pill">🩺 ÁREA: DEMENCIAS & GERIATRÍA</span>
          <span class="modal-area-pill">🔬 ÁREA: NEUROPSICOLOGÍA</span>
        </div>
        <h2 class="orientation-main-title">Examen cognoscitivo Mini-Mental State Examination (MMSE de Folstein)</h2>
        <p class="orientation-authors-meta">Marshal F. Folstein et al. (1975) • Puntuación de 0 a 30 Puntos • Cribado de Deterioro Cognitivo</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SOLUCIONES Y SISTEMA DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Desglose de los 30 Puntos del MMSE</h3>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Dominio Cognitivo</th>
                <th>Ítems y Preguntas Específicas</th>
                <th>Puntuación Máxima</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Orientación Temporal</strong></td>
                <td>¿En qué año estamos? (1), ¿estación? (1), ¿mes? (1), ¿fecha del mes? (1), ¿día de la semana? (1).</td>
                <td><strong>5 Puntos</strong></td>
              </tr>
              <tr>
                <td><strong>2. Orientación Espacial</strong></td>
                <td>¿En qué país estamos? (1), ¿región/provincia? (1), ¿ciudad? (1), ¿lugar/hospital? (1), ¿piso? (1).</td>
                <td><strong>5 Puntos</strong></td>
              </tr>
              <tr>
                <td><strong>3. Fijación / Registro</strong></td>
                <td>Nombrar 3 palabras claramente (ej. «Balón», «Bandera», «Árbol»). 1 punto por cada una repetida al primer intento.</td>
                <td><strong>3 Puntos</strong></td>
              </tr>
              <tr>
                <td><strong>4. Atención y Cálculo</strong></td>
                <td>Restar de 7 en 7 desde 100 (93, 86, 79, 72, 65: 1 pt c/u) o deletrear «MUNDO» al revés (O-D-N-U-M: 1 pt c/u).</td>
                <td><strong>5 Puntos</strong></td>
              </tr>
              <tr>
                <td><strong>5. Evocación Diferida</strong></td>
                <td>Pedir las 3 palabras nombradas anteriormente («Balón», «Bandera», «Árbol»). 1 punto por cada una.</td>
                <td><strong>3 Puntos</strong></td>
              </tr>
              <tr>
                <td><strong>6. Lenguaje y Praxias</strong></td>
                <td>
                  • Denominar lápiz y reloj (2 pts).<br/>
                  • Repetir frase «Ni sí, ni no, ni un pero» (1 pt).<br/>
                  • Orden de 3 pasos: «Tome este papel con la mano derecha, dóblelo por la mitad y póngalo en el suelo» (3 pts).<br/>
                  • Leer y ejecutar: «CIERRE LOS OJOS» (1 pt).<br/>
                  • Escribir una frase completa con sujeto y verbo coherente (1 pt).
                </td>
                <td><strong>8 Puntos</strong></td>
              </tr>
              <tr>
                <td><strong>7. Praxia Visoconstructiva</strong></td>
                <td>Copiar dos pentágonos intersectados que forman un cuadrilátero en la intersección (1 pt).</td>
                <td><strong>1 Punto</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERPRETACIÓN CLÍNICA DE LAS RESPUESTAS</div>
        <h3 class="orientation-sec-title">Puntos de Corte Diagnósticos y Ajuste por Escolaridad</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">27 a 30 Puntos</span>
            <h4 class="dim-name">Cognición Normal</h4>
            <p class="dim-desc">Rendimiento cognitivo conservado para la edad y escolaridad.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">24 a 26 Puntos</span>
            <h4 class="dim-name">Deterioro Cognitivo Leve (DCL / MCI)</h4>
            <p class="dim-desc">Sospecha de deterioro incipiente. Suele haber pérdida en recuerdo diferido con orientación aún conservada. Requiere evaluación neuropsicológica extensa.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">19 a 23 Puntos</span>
            <h4 class="dim-name">Demencia Leve / Moderada-Leve</h4>
            <p class="dim-desc">Fallas evidentes en orientación temporal y espacial, evocación y cálculo. Afecta la autonomía en actividades instrumentales de la vida diaria.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">10 a 18 Puntos</span>
            <h4 class="dim-name">Demencia Moderada</h4>
            <p class="dim-desc">Deterioro marcado del lenguaje, praxias y memoria. Dependencia para actividades básicas de la vida diaria.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">&lt; 10 Puntos</span>
            <h4 class="dim-name">Demencia Grave / Avanzada</h4>
            <p class="dim-desc">Pérdida casi total de las funciones corticales superiores; dependencia absoluta.</p>
          </div>
        </div>
        <div class="orientation-clinical-note" style="margin-top: 0.85rem;">
          <strong>Ajuste por Escolaridad:</strong> En personas analfabetas o con menos de 5 años de escolaridad, el punto de corte estándar desciende a <strong>20-21 puntos</strong> para evitar falsos positivos de demencia.
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">TRATAMIENTOS POSIBLES Y PROTOCOLO TERAPÉUTICO</div>
        <h3 class="orientation-sec-title">Abordaje Multimodal del Deterioro Cognitivo</h3>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">💊 Farmacoterapia en Enfermedad de Alzheimer y Demencias</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Inhibidores de la Colinesterasa (IACE - Fases Leve a Moderada):</strong> Donepezilo (5-10 mg/día), Rivastigmina (parches 9.5-13.3 mg/24h) o Galantamina (16-24 mg/día).</li>
            <li><strong>Memantina (Fases Moderada a Grave):</strong> 10-20 mg/día para proteger de la toxicidad glutamatérgica.</li>
            <li><strong>Manejo de Síntomas Conductuales y Psicológicos de la Demencia (SCPD):</strong> Agitación o agresividad refractaria a medidas no farmacológicas: Risperidona a dosis muy bajas (0.5 a 1 mg/día) durante el menor tiempo posible (riesgo de ACV en ancianos).</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🌿 Intervenciones No Farmacológicas y Cuidado del Cuidador</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Estimulación Cognitiva y Mantenimiento de Rutinas:</strong> Actividades adaptadas, musicoterapia, caminatas diarias y adaptación del hogar para prevenir caídas.</li>
            <li><strong>Prevención de la Sobrecarga del Cuidador:</strong> Evaluación con la Escala de Zarit y apoyo psicoeducativo para evitar el colapso del cuidador principal.</li>
          </ul>
        </div>
        
    <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
      <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
        📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
      
        <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="490" title="Saltar directamente a la página 490 en Cap. 17: Ajuste del MMSE por Edad y Escolaridad, Error de Medida (Pág. 490)">
          <span>📖</span>
          <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 17: Ajuste del MMSE por Edad y Escolaridad, Error de Medida (Pág. 490) →</span>
        </button>
        <button type="button" class="btn-book-citation-jump" data-book-id="nelson-ortiz-escala-abreviada" data-page="50" title="Saltar directamente a la página 50 en Baremos EAD-1: Comparativa entre Involución Senil y Neurodesarrollo Infantil (Pág. 50)">
          <span>📖</span>
          <span><strong>Nelson Ortiz Pinilla:</strong> Baremos EAD-1: Comparativa entre Involución Senil y Neurodesarrollo Infantil (Pág. 50) →</span>
        </button>
    </div>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="belloch-psicopatologia-vol1" data-page="177" title="Saltar directamente a la página 177 en Cap. 7: Exploración de la Memoria y Demencias">
          <span>📖</span>
          <span><strong>Belloch, Sandín y Ramos:</strong> Cap. 7: Exploración de la Memoria y Demencias (Pág. 177) →</span>
        </button>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="149" title="Saltar directamente a la página 149 en Semiología de la Memoria y Diagnóstico de Demencia">
          <span>📖</span>
          <span><strong>Ricardo Capponi:</strong> Semiología de la Memoria y Diagnóstico de Demencia (Pág. 149) →</span>
        </button>
      
    </div>
  
      </section>
    </div>
  
  `,

  'evaluacion-consumo-alcohol-cage': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">🍷 TAMIZAJE DE ALCOHOLISMO</span>
          <span class="modal-area-pill">🩺 ÁREA: ADICCIONES & URGENCIAS</span>
          <span class="modal-area-pill">🔬 ÁREA: TOXICOLOGÍA</span>
        </div>
        <h2 class="orientation-main-title">Cuestionario de tamizaje de consumo problemático de alcohol (CAGE)</h2>
        <p class="orientation-authors-meta">John A. Ewing (1984) • 4 Preguntas Cardinales • Sensibilidad del 85% para Dependencia</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SOLUCIONES Y SISTEMA DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Las 4 Preguntas del Acrónimo CAGE (0 a 4 Puntos)</h3>
        <p class="orientation-p">
          Cada respuesta afirmativa («Sí») suma exactamente 1 punto:
        </p>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Letra / Ítem CAGE</th>
                <th>Pregunta Semiográfica Estandarizada</th>
                <th>Puntuación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>C (Cut down)</strong></td>
                <td>¿Ha sentido alguna vez que debería <strong>disminuir o cortar</strong> la cantidad de alcohol que bebe?</td>
                <td>Sí = 1 pt / No = 0 pts</td>
              </tr>
              <tr>
                <td><strong>A (Annoyed)</strong></td>
                <td>¿Le ha <strong>molestado o enfadado</strong> que la gente critique su forma de beber?</td>
                <td>Sí = 1 pt / No = 0 pts</td>
              </tr>
              <tr>
                <td><strong>G (Guilty)</strong></td>
                <td>¿Se ha sentido alguna vez mal o <strong>culpable</strong> por su costumbre de beber?</td>
                <td>Sí = 1 pt / No = 0 pts</td>
              </tr>
              <tr>
                <td><strong>E (Eye-opener)</strong></td>
                <td>¿Ha tomado alguna vez un <strong>trago a primera hora de la mañana</strong> para calmar los nervios o librarse de la resaca?</td>
                <td>Sí = 1 pt / No = 0 pts</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="orientation-diff-note" style="margin-top: 0.85rem;">
          <strong>Puntos de Corte Clínicos del Cuestionario CAGE:</strong><br/>
          • <strong>0 Puntos:</strong> Consumo no problemático o abstemio.<br/>
          • <strong>1 Punto:</strong> Sospecha de consumo de riesgo. Requiere entrevista motivacional y dosaje de biomarcadores (GGT, VCM).<br/>
          • <strong>≥ 2 Puntos:</strong> <strong>RESULTADO POSITIVO: Alto índice de sospecha de Consumo Perjudicial o Dependencia al Alcohol</strong> (Sensibilidad 85%, Especificidad 90%).<br/>
          • <strong>3 a 4 Puntos:</strong> Certeza diagnóstica virtual de <strong>Dependencia Alcohólica Severa</strong>.
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERPRETACIÓN CLÍNICA DE LAS RESPUESTAS</div>
        <h3 class="orientation-sec-title">Significado Semiográfico del Ítem «Eye-opener»</h3>
        <div class="orientation-clinical-alert">
          <strong>SIGNO PATOGNOMÓNICO DE DEPENDENCIA FÍSICA:</strong> La respuesta afirmativa a la pregunta <strong>«E» (trago matutino)</strong> revela que el paciente experimenta síntomas de <em>abstinencia autonómica matinal</em> (temblor, diaforesis, ansiedad) que aborta consumiendo más alcohol. Esto confirma neuroadaptación de receptores GABA-A y tolerancia irreversible.
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">TRATAMIENTOS POSIBLES Y PROTOCOLO TERAPÉUTICO</div>
        <h3 class="orientation-sec-title">Desintoxicación Aguda, Fármacos Antirrecaída y Psicoterapia</h3>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🚨 Desintoxicación Aguda y Prevención del Delirium Tremens</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Tiamina Parenteral (Vitamina B1 - OBLIGATORIA):</strong> 300 a 500 mg IV cada 8 horas durante 3 a 5 días, <em>siempre antes de administrar cualquier solución con glucosa</em> para prevenir la <strong>Encefalopatía de Wernicke</strong> (ataxia, oftalmoplejía y confusión).</li>
            <li><strong>Pauta Descendente de Benzodiacepinas:</strong> Diazepam (10-20 mg cada 6 horas) o Clordiazepóxido titulados con la escala CIWA-Ar para prevenir crisis convulsivas y Delirium Tremens. Si hay cirrosis hepática o falla hepática aguda: usar <strong>Lorazepam</strong> (1-2 mg) porque no tiene metabolismo hepático oxidativo fase I.</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">💊 Farmacoterapia de Mantenimiento de la Abstinencia (Antirrecaídas)</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Acamprosato (Calcio Homotaurinato):</strong> 666 mg tres veces al día (con las comidas). Modula el hipertono glutamatérgico y alivia el malestar crónico (*craving* negativo).</li>
            <li><strong>Naltrexona:</strong> 50 mg/día vía oral. Bloquea los receptores opioides mu en el área tegmental ventral, eliminando el refuerzo placentero del consumo si hay un desliz (*craving* positivo).</li>
            <li><strong>Disulfiram (Antabus):</strong> 250 mg/día como terapia aversiva supervisada (inhibe la enzima aldehído deshidrogenasa produciendo náuseas, taquicardia y rubor si bebe alcohol).</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🗣️ Psicoterapia y Redes de Apoyo</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Entrevista Motivacional (Miller & Rollnick):</strong> Trabajar la ambivalencia y promover el paso de la fase de precontemplación a contemplación y acción.</li>
            <li><strong>Grupos de Autoayuda:</strong> Incorporación a <strong>Alcohólicos Anónimos (AA)</strong> para sostenimiento de la sobriedad en comunidad.</li>
          </ul>
        </div>
        
    <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
      <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
        📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
      
        <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="118" title="Saltar directamente a la página 118 en Cap. 5: Psicometría de Cuestionarios Dicotómicos de Tamizaje (Pág. 118)">
          <span>📖</span>
          <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 5: Psicometría de Cuestionarios Dicotómicos de Tamizaje (Pág. 118) →</span>
        </button>
    </div>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="belloch-psicopatologia-vol1" data-page="355" title="Saltar directamente a la página 355 en Cap. 13: Trastornos Relacionados con el Alcohol">
          <span>📖</span>
          <span><strong>Belloch, Sandín y Ramos:</strong> Cap. 13: Trastornos Relacionados con el Alcohol (Pág. 355) →</span>
        </button>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="219" title="Saltar directamente a la página 219 en Síndrome Amnésico de Korsakoff y Alcoholismo">
          <span>📖</span>
          <span><strong>Ricardo Capponi:</strong> Síndrome Amnésico de Korsakoff y Alcoholismo (Pág. 219) →</span>
        </button>
      
    </div>
  
      </section>
    </div>
  
  `,

  'evaluacion-examen-estado-mental-global': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">🩺 PROTOCOLO CLÍNICO MAESTRO</span>
          <span class="modal-area-pill">📋 ÁREA: EXAMEN MENTAL INTEGRAL</span>
          <span class="modal-area-pill">🧠 ÁREA: SEMIOGRAFÍA PSIQUIÁTRICA</span>
        </div>
        <h2 class="orientation-main-title">Examen del Estado Mental Global (EEMG - Pauta Semiográfica Completa)</h2>
        <p class="orientation-authors-meta">Ricardo Capponi • Strub & Black • Evaluación de las 10 Esferas Clínicas del Vivenciar</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SOLUCIONES Y SISTEMA DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Pauta de Registro de las 10 Esferas y Severidad Global (CGI-S)</h3>
        <p class="orientation-p">
          El clínico califica cada esfera como 0 = Normal / Intacta o 1 = Alterada, y concluye con la Escala de Impresión Clínica Global de Severidad (CGI-S de 1 a 7 puntos):
        </p>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Esfera del Vivenciar</th>
                <th>Parámetro Semiográfico Exploratorio</th>
                <th>Criterio de Normalidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Porte, Actitud y Marcha</strong></td>
                <td>Higiene personal, vestimenta acorde, marcha y contacto visual.</td>
                <td>Aliñado, cooperador, contacto visual adecuado.</td>
              </tr>
              <tr>
                <td><strong>2. Nivel de Conciencia</strong></td>
                <td>Vigilancia, reactividad y lucidez cuantitativa.</td>
                <td>Alerta y vigil sin fluctuación ni somnolencia.</td>
              </tr>
              <tr>
                <td><strong>3. Orientación Tridimensional</strong></td>
                <td>Tiempo, espacio y persona (alopsíquica y autopsíquica).</td>
                <td>Orientado globalmente en las 3 esferas.</td>
              </tr>
              <tr>
                <td><strong>4. Atención y Concentración</strong></td>
                <td>Inversión de series (meses del año hacia atrás).</td>
                <td>Atención sostenida sin distractibilidad evidente.</td>
              </tr>
              <tr>
                <td><strong>5. Memoria (Fijación/Evocación)</strong></td>
                <td>Dígitos y evocación de 3 palabras a 5 min.</td>
                <td>Memoria inmediata, reciente y remota conservadas.</td>
              </tr>
              <tr>
                <td><strong>6. Pensamiento (Curso/Contenido)</strong></td>
                <td>Velocidad, lógica formal y ausencia de delirios.</td>
                <td>Coherente, fluido, meta clara, sin delirios ni obsesiones.</td>
              </tr>
              <tr>
                <td><strong>7. Sensopercepción</strong></td>
                <td>Presencia de alucinaciones, alucinosis o ilusiones.</td>
                <td>Sin engaños ni distorsiones perceptivas.</td>
              </tr>
              <tr>
                <td><strong>8. Afectividad y Humor</strong></td>
                <td>Tono basal, reactividad y congruencia afectiva.</td>
                <td>Eutímico, modulado, resonante y congruente.</td>
              </tr>
              <tr>
                <td><strong>9. Voluntad y Psicomotricidad</strong></td>
                <td>Actividad conativa, acatisia, temblores o catatonía.</td>
                <td>Normocinesia, eutimia motora sin tics ni inhibición.</td>
              </tr>
              <tr>
                <td><strong>10. Juicio de Realidad e Insight</strong></td>
                <td>Conciencia de enfermedad mental y necesidad de ayuda.</td>
                <td>Insight pleno con juicio de realidad conservado.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERPRETACIÓN CLÍNICA DE LAS RESPUESTAS</div>
        <h3 class="orientation-sec-title">Escala de Impresión Clínica Global (CGI-S) y Nivel de Atención</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">CGI-S 1 a 3 (Leve)</span>
            <h4 class="dim-name">Manejo Ambulatorio</h4>
            <p class="dim-desc">Paciente normal o con síntomas leves que no comprometen la autonomía ni el juicio de realidad (trastorno adaptativo, ansiedad leve). Consulta en Atención Primaria o ambulatoria.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">CGI-S 4 a 5 (Moderado-Grave)</span>
            <h4 class="dim-name">Equipo Multidisciplinario</h4>
            <p class="dim-desc">Afectación marcada en múltiples esferas (depresión mayor, psicosis compensada, TOC severo). Requiere seguimiento en Centro Comunitario de Salud Mental (COSAM/CSM) o Hospital de Día.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">CGI-S 6 a 7 (Extremo)</span>
            <h4 class="dim-name">Hospitalización Inmediata</h4>
            <p class="dim-desc">Ruptura del juicio de realidad, ideación suicida activa, riesgo heteroagresivo o incapacidad de autocuidado vital. <strong>Criterio de internación psiquiátrica de urgencia</strong>.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">TRATAMIENTOS POSIBLES Y PROTOCOLO TERAPÉUTICO</div>
        <h3 class="orientation-sec-title">Plan Terapéutico Integral Biopsicosocial</h3>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">📋 Los 4 Pilares del Tratamiento Psiquiátrico Integral</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Pilar Biológico:</strong> Tratamiento psicofarmacológico específico según el diagnóstico sindromático principal, optimizando la dosis y vigilando efectos adversos metabólicos y extrapiramidales.</li>
            <li><strong>Pilar Psicoterapéutico:</strong> Modalidad con evidencia clínica acorde a la patología (TCC para depresión/ansiedad/TOC; DBT para impulsividad/labilidad; CBTp para psicosis; FBT para adolescentes con TCA).</li>
            <li><strong>Pilar Social y Familiar:</strong> Psicoeducación formal a la familia sobre la enfermedad, reducción de la emoción expresada (críticas y hostilidad en el hogar) y apoyo por Trabajo Social.</li>
            <li><strong>Pilar Ocupacional:</strong> Rehabilitación comunitaria y reincorporación gradual al estudio o trabajo mediante Terapia Ocupacional.</li>
          </ul>
        </div>
        
    <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
      <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
        📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
      
        <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="505" title="Saltar directamente a la página 505 en Cap. 18: Evaluación Psicológica Multimétodo y Directrices Éticas APA (Pág. 505)">
          <span>📖</span>
          <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 18: Evaluación Psicológica Multimétodo y Directrices Éticas APA (Pág. 505) →</span>
        </button>
        <button type="button" class="btn-book-citation-jump" data-book-id="nelson-ortiz-escala-abreviada" data-page="45" title="Saltar directamente a la página 45 en Formulario de Aplicación Integral y Perfil del Desarrollo Infantil EAD-1 (Pág. 45)">
          <span>📖</span>
          <span><strong>Nelson Ortiz Pinilla:</strong> Formulario de Aplicación Integral y Perfil del Desarrollo Infantil EAD-1 (Pág. 45) →</span>
        </button>
    </div>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="201" title="Saltar directamente a la página 201 en Diagnóstico Sindromático y Estructuración del Examen Mental">
          <span>📖</span>
          <span><strong>Ricardo Capponi:</strong> Diagnóstico Sindromático y Estructuración del Examen Mental (Pág. 201) →</span>
        </button>
      
    </div>
  
      </section>
    </div>
  
  `,

  'evaluacion-sintomas-negativos': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">📉 SÍNTOMAS NEGATIVOS & DEFECTO</span>
          <span class="modal-area-pill">🩺 ÁREA: ESQUIZOFRENIA</span>
          <span class="modal-area-pill">🔬 ÁREA: ESCALA SANS</span>
        </div>
        <h2 class="orientation-main-title">Evaluación semiológica de síntomas negativos (SANS / Defecto Esquizofrénico)</h2>
        <p class="orientation-authors-meta">Nancy C. Andreasen (1983) • Scale for the Assessment of Negative Symptoms (SANS) • Ricardo Capponi</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SOLUCIONES Y SISTEMA DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Las 5 Dimensiones Globales de la Escala SANS (0 a 25 Puntos)</h3>
        <p class="orientation-p">
          Cada dimensión global se califica de 0 (Ausente) a 5 (Severo / Extremo):
        </p>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Dimensión Global SANS</th>
                <th>Signos Semiográficos Específicos</th>
                <th>Puntaje de 0 a 5 Pts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Aplanamiento Afectivo</strong></td>
                <td>Inexpresividad facial, contacto ocular pobre, voz monótona, ausencia de gestos corporales.</td>
                <td>0 = Expresivo normal<br/>5 = Inexpresividad total fría</td>
              </tr>
              <tr>
                <td><strong>2. Alogia</strong></td>
                <td>Pobreza del habla (respuestas monosilábicas) y pobreza del contenido del habla (habla vacía sin sustancia).</td>
                <td>0 = Discurso fluido<br/>5 = Mutismo casi total</td>
              </tr>
              <tr>
                <td><strong>3. Abulia - Apatía</strong></td>
                <td>Abandono del aseo e higiene personal, impersistencia en el trabajo/estudio, anergia física.</td>
                <td>0 = Motivado normal<br/>5 = Abandono absoluto total</td>
              </tr>
              <tr>
                <td><strong>4. Anhedonia - Asocialidad</strong></td>
                <td>Incapacidad de disfrutar de aficiones, desinterés en relaciones sexuales, falta de amistades.</td>
                <td>0 = Placer y lazos intactos<br/>5 = Aislamiento y anhedonia total</td>
              </tr>
              <tr>
                <td><strong>5. Déficit de Atención</strong></td>
                <td>Distraibilidad evidente durante la entrevista, desatención a señales sociales.</td>
                <td>0 = Atención normal<br/>5 = Inatención masiva</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="orientation-diff-note" style="margin-top: 0.85rem;">
          <strong>Puntos de Corte de Severidad SANS (0 a 25 puntos):</strong><br/>
          • <strong>0 a 5 puntos:</strong> Síntomas negativos mínimos / Subclínicos.<br/>
          • <strong>6 a 12 puntos:</strong> Síndrome negativo leve a moderado.<br/>
          • <strong>13 a 18 puntos:</strong> Síndrome negativo moderado a severo con disfunción sociolaboral.<br/>
          • <strong>19 a 25 puntos:</strong> <strong>Defecto Esquizofrénico Grave Primario</strong> (Kraepelin).
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERPRETACIÓN CLÍNICA DE LAS RESPUESTAS</div>
        <h3 class="orientation-sec-title">Diferencial Crucial: Síntomas Negativos Primarios vs. Secundarios</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Negativos Primarios (Déficit)</span>
            <h4 class="dim-name">Intrínsecos de la Enfermedad</h4>
            <p class="dim-desc">Causados por hipoactividad dopaminérgica en la vía mesocortical frontal. Persisten de forma continua en fases de estabilidad psicótica.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Negativos Secundarios (Tratables)</span>
            <h4 class="dim-name">Causas Externas Reversibles</h4>
            <p class="dim-desc">Secundarios a: 1) Depresión postpsicótica; 2) Paranoia activa que hace aislarse al paciente; 3) <strong>Parkinsonismo/acinesia inducida por antipsicóticos típicos</strong>.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">TRATAMIENTOS POSIBLES Y PROTOCOLO TERAPÉUTICO</div>
        <h3 class="orientation-sec-title">Optimización Farmacológica y Terapia Psicosocial</h3>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">💊 Farmacoterapia de Última Generación para Síntomas Negativos</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Cariprazina (Primera Elección):</strong> 3 a 6 mg/día. Es un agonista parcial de receptores D3/D2 con afinidad preferente por D3, siendo el único antipsicótico que ha demostrado en ensayos clínicos aleatorizados superioridad estadísticamente significativa en revertir síntomas negativos primarios.</li>
            <li><strong>Aripiprazol (10-15 mg/día):</strong> Agonista parcial D2 que mejora la transmisión mesocortical sin provocar bloqueo extrapiramidal.</li>
            <li><strong>Amisulprida a Dosis Bajas (50-100 mg/día):</strong> A dosis bajas bloquea autorreceptores presinápticos D2/D3 aumentando la liberación de dopamina en la corteza frontal.</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🧩 Rehabilitación Psicosocial y Entrenamiento en Habilidades Sociales</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Terapia de Remediación Cognitiva (CRT):</strong> Ejercicios de memoria y funciones ejecutivas para potenciar la funcionalidad.</li>
            <li><strong>Entrenamiento en Habilidades Sociales (EHS):</strong> Ensayos conductuales de contacto ocular, modulación vocal y comunicación interpersonal.</li>
            <li><strong>Terapia Ocupacional Orientada a la Comunidad:</strong> Talleres laborales protegidos y actividades estructuradas de ocio.</li>
          </ul>
        </div>
        
    <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
      <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
        📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
      
        <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="95" title="Saltar directamente a la página 95 en Cap. 4: Estructura Factorial de la Escala SANS y Confiabilidad Interjueces (Pág. 95)">
          <span>📖</span>
          <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 4: Estructura Factorial de la Escala SANS y Confiabilidad Interjueces (Pág. 95) →</span>
        </button>
    </div>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="210" title="Saltar directamente a la página 210 en Síndrome Esquizofrénico y Defecto Afectivo">
          <span>📖</span>
          <span><strong>Ricardo Capponi:</strong> Síndrome Esquizofrénico y Defecto Afectivo (Pág. 210) →</span>
        </button>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="apir-psicopatologia" data-page="46" title="Saltar directamente a la página 46 en Síntomas Positivos vs. Negativos en Psicosis">
          <span>📖</span>
          <span><strong>Manual APIR:</strong> Síntomas Positivos vs. Negativos en Psicosis (Pág. 46) →</span>
        </button>
      
    </div>
  
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
        <div class="orientation-section-badge">SOLUCIONES Y SISTEMA DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Los 10 Ítems Cardinales de Severidad Y-BOCS</h3>
        <p class="orientation-p">
          Se evalúan las obsesiones (ítems 1-5) y las compulsiones (ítems 6-10) en escala de 0 a 4 puntos (Total 0 a 40 puntos):
        </p>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Dimensión Y-BOCS</th>
                <th>0 Puntos</th>
                <th>1-2 Puntos (Leve/Moderado)</th>
                <th>3-4 Puntos (Severo/Extremo)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1 y 6. Tiempo Ocupado</strong></td>
                <td>Ninguno.</td>
                <td>&lt; 1 hora al día (1) a 3 horas/día (2).</td>
                <td>3 a 8 horas/día (3) a &gt; 8 horas/día continuas (4).</td>
              </tr>
              <tr>
                <td><strong>2 y 7. Interferencia en la Vida</strong></td>
                <td>Ninguna.</td>
                <td>Interferencia leve en lo social/laboral.</td>
                <td>Interferencia severa o incapacidad funcional total.</td>
              </tr>
              <tr>
                <td><strong>3 y 8. Angustia / Malestar</strong></td>
                <td>Ninguno.</td>
                <td>Ansiedad moderada tolerable.</td>
                <td>Angustia masiva intolerable o pánico continuo.</td>
              </tr>
              <tr>
                <td><strong>4 y 9. Resistencia a la Idea/Acto</strong></td>
                <td>Se resiste siempre con éxito.</td>
                <td>Intenta resistirse la mayor parte del tiempo.</td>
                <td>Cede a todos los rituales sin oponer resistencia.</td>
              </tr>
              <tr>
                <td><strong>5 y 10. Grado de Control</strong></td>
                <td>Control completo.</td>
                <td>Control moderado sobre el ritual.</td>
                <td>Control nulo (esclavo absoluto del ritual).</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="orientation-diff-note" style="margin-top: 0.85rem;">
          <strong>Puntos de Corte de la Escala Y-BOCS (0 a 40 puntos):</strong><br/>
          • <strong>0 a 7 puntos:</strong> Nivel subclínico.<br/>
          • <strong>8 a 15 puntos:</strong> TOC Leve.<br/>
          • <strong>16 a 23 puntos:</strong> <strong>TOC MODERADO</strong> (Umbral clínico formal para inicio de farmacoterapia + psicoterapia intensiva).<br/>
          • <strong>24 a 31 puntos:</strong> TOC Severo.<br/>
          • <strong>32 a 40 puntos:</strong> TOC Extremo / Discapacitante.
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERPRETACIÓN CLÍNICA DE LAS RESPUESTAS</div>
        <h3 class="orientation-sec-title">Neurobiología del Circuito Córtico-Estriato-Tálamo-Cortical (CETC)</h3>
        <p class="orientation-p">
          El TOC se produce por hiperactividad metabólica en la <strong>corteza orbitofrontal y el núcleo caudado</strong>. Las obsesiones (pensamientos intrusivos egodistónicos) disparan una ansiedad intolerable; el paciente ejecuta compulsiones (físicas o mentales) como mecanismo de neutralización que alivia transitoriamente la ansiedad, reforzando negativamente el circuito y cronificando el trastorno.
        </p>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">TRATAMIENTOS POSIBLES Y PROTOCOLO TERAPÉUTICO</div>
        <h3 class="orientation-sec-title">Psicoterapia de Exposición y Farmacoterapia a Dosis Altas</h3>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🗣️ Psicoterapia de Primera Elección: Exposición con Prevención de Respuesta (EPR)</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Protocolo de EPR:</strong> Es la intervención psicológica con mayor eficacia empírica (tasa de respuesta &gt; 70%). Consiste en jerarquizar los estímulos ansiógenos y <em>exponer al paciente al estímulo temido (ej. tocar el picaporte) bloqueando de forma absoluta la ejecución del ritual (no lavarse las manos)</em> hasta que la curva de ansiedad decaiga por habituación natural.</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">💊 Farmacoterapia: ISRS a Dosis Altas</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Dosis Supramáximas de ISRS:</strong> El TOC requiere dosis considerablemente más altas que la depresión y períodos de latencia más largos (10 a 12 semanas):<br/>
            • <strong>Sertralina:</strong> 200 mg/día.<br/>
            • <strong>Fluoxetina:</strong> 60 a 80 mg/día.<br/>
            • <strong>Fluvoxamina:</strong> 200 a 300 mg/día.<br/>
            • <strong>Clomipramina (Tricíclico):</strong> 150 a 250 mg/día (muy potente, requiere ECG previo por toxicidad cardíaca).</li>
            <li><strong>Potenciación en Resistencia:</strong> Adición de antipsicóticos atípicos a dosis bajas: <strong>Aripiprazol</strong> (5-10 mg/día) o <strong>Risperidona</strong> (1-2 mg/día).</li>
          </ul>
        </div>
        
    <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
      <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
        📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
      
        <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="108" title="Saltar directamente a la página 108 en Cap. 4: Escala Y-BOCS en 10 Ítems, Alfa de Cronbach (0.89) y Baremos (Pág. 108)">
          <span>📖</span>
          <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 4: Escala Y-BOCS en 10 Ítems, Alfa de Cronbach (0.89) y Baremos (Pág. 108) →</span>
        </button>
    </div>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="72" title="Saltar directamente a la página 72 en Diagnóstico Diferencial: Delirios vs. Ideas Obsesivas">
          <span>📖</span>
          <span><strong>Ricardo Capponi:</strong> Diagnóstico Diferencial: Delirios vs. Ideas Obsesivas (Pág. 72) →</span>
        </button>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="apir-psicopatologia" data-page="47" title="Saltar directamente a la página 47 en Tabla 5: Comparación de Delirios vs. Ideas Obsesivas">
          <span>📖</span>
          <span><strong>Manual APIR:</strong> Tabla 5: Comparación de Delirios vs. Ideas Obsesivas (Pág. 47) →</span>
        </button>
      
    </div>
  
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
        <div class="orientation-section-badge">SOLUCIONES Y SISTEMA DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Exploración Específica por Trastorno Motor Inducido</h3>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Signo Extrapiramidal</th>
                <th>Tiempo de Aparición Típico</th>
                <th>Maniobra Exploratoria y Hallazgo Clave</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Distonía Aguda</strong></td>
                <td>Horas a primeros 5 días.</td>
                <td>Contracción muscular espasmódica dolorosa sostenida: crisis oculógiras (ojos desviados hacia arriba), tortícolis o trismus mandibular.</td>
              </tr>
              <tr>
                <td><strong>2. Acatisia</strong></td>
                <td>Días a semanas.</td>
                <td>Inquietud subjetiva intolerable en miembros inferiores con necesidad imperiosa de moverse, balancearse o caminar sin rumbo (*«no poder estarse quieto»*).</td>
              </tr>
              <tr>
                <td><strong>3. Parkinsonismo Medicamentoso</strong></td>
                <td>Semanas a meses.</td>
                <td>Rigidez en «rueda dentada» en muñeca/codo, temblor de reposo a 4-6 Hz, marcha a pequeños pasos festinante y facies de máscara inexpresiva.</td>
              </tr>
              <tr>
                <td><strong>4. Discinesia Tardía</strong></td>
                <td>Meses a años de tratamiento.</td>
                <td>Movimientos coreoatetósicos involuntarios repetitivos orofaciales (chupeteo, masticación, protrusión lingual en «dardo») o de dedos.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERPRETACIÓN CLÍNICA DE LAS RESPUESTAS</div>
        <h3 class="orientation-sec-title">Fisiopatología: Vía Dopaminérgica Nigroestriatal</h3>
        <p class="orientation-p">
          Los síntomas extrapiramidales (SEP) ocurren cuando el bloqueo de receptores dopaminérgicos D2 en el cuerpo estriado supera el <strong>umbral crítico del 78-80%</strong>. Rompe el equilibrio entre dopamina (inhibitoria) y acetilcolina (excitatoria), generando un hipertono colinérgico relativo.
        </p>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">TRATAMIENTOS POSIBLES Y PROTOCOLO TERAPÉUTICO</div>
        <h3 class="orientation-sec-title">Protocolo de Intervención por Cada Efecto Extrapiramidal</h3>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🚨 Para Distonía Aguda (Urgencia Inmediata)</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Anticolinérgicos Parenterales:</strong> <strong>Biperideno</strong> (2.5 a 5 mg intramuscular o intravenoso lento) o <strong>Difenhidramina</strong> (50 mg IM/IV). Produce alivio completo de los espasmos en 5 a 15 minutos.</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🏃 Para Acatisia (Primera Elección: Betabloqueantes)</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Propranolol (Primera Línea):</strong> 20 a 80 mg/día en dosis divididas (efecto antiadrenérgico central).</li>
            <li><strong>Benzodiacepinas:</strong> Clonazepam (0.5 a 2 mg/día) o Lorazepam como coadyuvante.</li>
            <li><strong>Reducción de Dosis:</strong> Bajar la dosis del antipsicótico o rotar a un fármaco con menor propensión a acatisia (Quetiapina u Olanzapina).</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🤝 Para Parkinsonismo Medicamentoso</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Ajuste Antipsicótico:</strong> Rotar a un antipsicótico atípico con muy baja afinidad estriatal (Quetiapina o Clozapina).</li>
            <li><strong>Biperideno Oral:</strong> 2 a 4 mg/día de forma temporal (evitar uso crónico de más de 3 meses por riesgo de deterioro cognitivo y empeoramiento de discinesia tardía).</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">⚠️ Para Discinesia Tardía</h4>
          <ul class="orientation-bullet-list">
            <li><strong>¡Suspender Anticolinérgicos!:</strong> El biperideno empeora gravemente la discinesia tardía al aumentar la hipersensibilidad de receptores D2.</li>
            <li><strong>Rotación a Clozapina:</strong> Es el único antipsicótico que no produce discinesia tardía e incluso puede mejorarla.</li>
            <li><strong>Inhibidores de VMAT-2:</strong> Valbenazina o Deutetrabenazina (tratamientos específicos aprobados para discinesia tardía).</li>
          </ul>
        </div>
        
    <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
      <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
        📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
      
        <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="90" title="Saltar directamente a la página 90 en Cap. 4: Confiabilidad Inter-Observador en Escalas de Síntomas Motores (Pág. 90)">
          <span>📖</span>
          <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 4: Confiabilidad Inter-Observador en Escalas de Síntomas Motores (Pág. 90) →</span>
        </button>
        <button type="button" class="btn-book-citation-jump" data-book-id="nelson-ortiz-escala-abreviada" data-page="22" title="Saltar directamente a la página 22 en Área A (Motricidad Gruesa): Evaluación del Tono Muscular y Espasticidad EAD-1 (Pág. 22)">
          <span>📖</span>
          <span><strong>Nelson Ortiz Pinilla:</strong> Área A (Motricidad Gruesa): Evaluación del Tono Muscular y Espasticidad EAD-1 (Pág. 22) →</span>
        </button>
    </div>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="101" title="Saltar directamente a la página 101 en Psicología y Psicopatología de la Psicomotricidad (Conación)">
          <span>📖</span>
          <span><strong>Ricardo Capponi:</strong> Psicología y Psicopatología de la Psicomotricidad (Conación) (Pág. 101) →</span>
        </button>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="belloch-psicopatologia-vol1" data-page="449" title="Saltar directamente a la página 449 en Cap. 17: Trastornos Psicomotores y Efectos Extrapiramidales">
          <span>📖</span>
          <span><strong>Belloch, Sandín y Ramos:</strong> Cap. 17: Trastornos Psicomotores y Efectos Extrapiramidales (Pág. 449) →</span>
        </button>
      
    </div>
  
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
        <div class="orientation-section-badge">SOLUCIONES Y SISTEMA DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Escala de Ansiedad Social de Liebowitz (LSAS - Total 0 a 144 pts)</h3>
        <p class="orientation-p">
          Evalúa 24 situaciones sociales puntuando por separado el <strong>Miedo</strong> (0 a 3) y la <strong>Evitación</strong> (0 a 3):
        </p>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Situaciones Típicas de Rendimiento y Socialización</th>
                <th>Escala de Miedo (0 a 3 Pts)</th>
                <th>Escala de Evitación (0 a 3 Pts)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1. Hablar en público ante una audiencia grande.</td>
                <td>0 = Ninguno; 1 = Leve; 2 = Moderado; 3 = Severo.</td>
                <td>0 = Nunca; 1 = Ocasional; 2 = Frecuente; 3 = Casi siempre.</td>
              </tr>
              <tr>
                <td>2. Comer o beber en lugares públicos delante de otros.</td>
                <td>0 = Ninguno; 1 = Leve; 2 = Moderado; 3 = Severo.</td>
                <td>0 = Nunca; 1 = Ocasional; 2 = Frecuente; 3 = Casi siempre.</td>
              </tr>
              <tr>
                <td>3. Iniciar o mantener una conversación con desconocidos.</td>
                <td>0 = Ninguno; 1 = Leve; 2 = Moderado; 3 = Severo.</td>
                <td>0 = Nunca; 1 = Ocasional; 2 = Frecuente; 3 = Casi siempre.</td>
              </tr>
              <tr>
                <td>4. Hablar con figuras de autoridad (jefe, profesor).</td>
                <td>0 = Ninguno; 1 = Leve; 2 = Moderado; 3 = Severo.</td>
                <td>0 = Nunca; 1 = Ocasional; 2 = Frecuente; 3 = Casi siempre.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="orientation-diff-note" style="margin-top: 0.85rem;">
          <strong>Puntos de Corte de la Escala LSAS (0 a 144 puntos):</strong><br/>
          • <strong>&lt; 30 puntos:</strong> Sin fobia social significativa.<br/>
          • <strong>30 a 49 puntos:</strong> Ansiedad social leve.<br/>
          • <strong>50 a 64 puntos:</strong> Ansiedad social moderada.<br/>
          • <strong>65 a 79 puntos:</strong> Ansiedad social marcada / severa.<br/>
          • <strong>≥ 80 puntos:</strong> <strong>Ansiedad social muy severa / generalizada</strong> (afectación vital total).
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERPRETACIÓN CLÍNICA DE LAS RESPUESTAS</div>
        <h3 class="orientation-sec-title">Subtipo Circunscrito (Ejecución) vs. Subtipo Generalizado</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Ansiedad de Ejecución Pura</span>
            <h4 class="dim-name">Miedo a Hablar en Público</h4>
            <p class="dim-desc">El miedo se limita exclusivamente a actuar, dar discursos o tocar un instrumento ante otros. Las relaciones sociales informales uno a uno están completamente conservadas.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Ansiedad Social Generalizada</span>
            <h4 class="dim-name">Fobia Social Global</h4>
            <p class="dim-desc">El miedo invade casi todas las situaciones interpersonales (comer, llamar por teléfono, caminar por la calle sintiéndose observado). Frecuente solapamiento con Trastorno de la Personalidad Evitativo.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">TRATAMIENTOS POSIBLES Y PROTOCOLO TERAPÉUTICO</div>
        <h3 class="orientation-sec-title">Psicoterapia de Exposición y Farmacoterapia</h3>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🗣️ Terapia Cognitivo-Conductual Individual o Grupal</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Reestructuración Cognitiva:</strong> Desmontar la hipótesis del «foco de atención» (*self-focused attention*: creer que todos están pendientes de si me ruborizo o tiembla mi mano).</li>
            <li><strong>Exposición Gradual en Vivo sin Conductas de Seguridad:</strong> Exponerse a situaciones sociales eliminando conductas defensivas encubiertas (ej. no mirar a los ojos, taparse la cara con el pelo, tomar alcohol para hablar).</li>
          </ul>
        </div>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">💊 Farmacoterapia según Subtipo</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Para Ansiedad Social Generalizada (Tratamiento Continuo):</strong> ISRS de primera línea (<strong>Sertralina</strong> 50-150 mg/día, <strong>Paroxetina</strong> 20-40 mg/día o <strong>Escitalopram</strong> 10-20 mg/día) o IRSN (Venlafaxina 75-150 mg/día).</li>
            <li><strong>Para Ansiedad de Rendimiento Circunscrita (Uso Puntual):</strong> Betabloqueantes: <strong>Propranolol</strong> (10 a 40 mg) tomado exactamente 30 a 60 minutos antes de la conferencia o presentación pública para bloquear el temblor y la taquicardia periférica.</li>
          </ul>
        </div>

        <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
          <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
            📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
          </div>
          <button type="button" class="btn-book-citation-jump" data-book-id="belloch-psicopatologia-vol1" data-page="130" title="Saltar a Belloch Vol. 1 Pág. 130">
            <span>📖</span>
            <span><strong>Manual Belloch (Vol. 1):</strong> Trastornos de Ansiedad y Fobia Social (Pág. 130) →</span>
          </button>
          <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="100" title="Saltar a Anastasi & Urbina Pág. 100">
            <span>📖</span>
            <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 4: Escala de Ansiedad Social de Liebowitz (LSAS), Validez y Consistencia (Pág. 100) →</span>
          </button>
          <button type="button" class="btn-book-citation-jump" data-book-id="nelson-ortiz-escala-abreviada" data-page="41" title="Saltar a Nelson Ortiz Pág. 41">
            <span>📖</span>
            <span><strong>Nelson Ortiz Pinilla:</strong> Área D: Inhibición Conductual Temprana vs. Timidez Normativa en Niños EAD-1 (Pág. 41) →</span>
          </button>
        </div>
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
        <p class="orientation-authors-meta">Ricardo Capponi (Págs. 101-115) • Semiología de la Mímica, Facies y Motilidad Expresiva</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SOLUCIONES Y SISTEMA DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Pauta Semiográfica Facial de 4 Ejes (0 a 12 Puntos)</h3>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Alteración Mímica</th>
                <th>Maniobra de Observación</th>
                <th>Puntuación (0 a 3 Pts)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Amimia / Hipomimia</strong></td>
                <td>Inexpresividad facial, facies de máscara, reducción del parpadeo.</td>
                <td>0 = Mímica viva; 3 = Máscara rígida total.</td>
              </tr>
              <tr>
                <td><strong>2. Hipermimia</strong></td>
                <td>Exageración gesticular desbordante, cejas elevadas continuamente, muecas teatrales.</td>
                <td>0 = Gestos normales; 3 = Gesticulación incesante desbordada.</td>
              </tr>
              <tr>
                <td><strong>3. Paramimia (Discordancia)</strong></td>
                <td>Sonrisa insulsa o muecas mientras relata un suceso trágico de duelo.</td>
                <td>0 = Coherente; 3 = Discordancia franca bizarra.</td>
              </tr>
              <tr>
                <td><strong>4. Ecomimia</strong></td>
                <td>Imitación involuntaria refleja en espejo de los gestos del examinador.</td>
                <td>0 = Ausente; 3 = Copia automática inmediata continua.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERPRETACIÓN CLÍNICA DE LAS RESPUESTAS</div>
        <h3 class="orientation-sec-title">Significado Semiográfico y Signos Físicos Clásicos</h3>
        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <span class="dim-badge">Signo de Veraguth y Omega</span>
            <h4 class="dim-name">Facies Melancólica (Capponi)</h4>
            <p class="dim-desc">Pliegue triangular en el párpado superior (signo de Veraguth) y arrugas en forma de omega en el entrecejo por contracción tónica sostenida del corrugador superciliar. Típico de <strong>Depresión Melancólica Mayor</strong>.</p>
          </div>
          <div class="orientation-dim-item">
            <span class="dim-badge">Paramimia Esquizofreniforme</span>
            <h4 class="dim-name">Quiebre de la Síntesis</h4>
            <p class="dim-desc">Risa insulsa e inapropiada ante temas trágicos. Refleja la discordancia ideo-afectiva propia de la <strong>Esquizofrenia Desorganizada / Hebefrénica</strong>.</p>
          </div>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">TRATAMIENTOS POSIBLES Y PROTOCOLO TERAPÉUTICO</div>
        <h3 class="orientation-sec-title">Tratamiento según la Etiología Subyacente</h3>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">💊 Manejo Terapéutico Específico</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Si es Hipomimia por Parkinsonismo Medicamentoso:</strong> Ajustar dosis de antipsicóticos o rotar a Quetiapina/Clozapina; Biperideno transitorio (2 mg/día).</li>
            <li><strong>Si es Facies Melancólica con Inhibición Motora:</strong> Antidepresivos de acción dual o Terapia Electroconvulsiva (TEC).</li>
            <li><strong>Si es Hipermimia Maníaca Desbordante:</strong> Estabilizadores del ánimo (Litio/Valproato) + Antipsicóticos antimaníacos.</li>
          </ul>
        </div>
        
    <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
      <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
        📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
      
        <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="460" title="Saltar directamente a la página 460 en Cap. 15: Sistemas de Codificación Facial Objetiva (FACS de Ekman) (Pág. 460)">
          <span>📖</span>
          <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 15: Sistemas de Codificación Facial Objetiva (FACS de Ekman) (Pág. 460) →</span>
        </button>
        <button type="button" class="btn-book-citation-jump" data-book-id="nelson-ortiz-escala-abreviada" data-page="36" title="Saltar directamente a la página 36 en Áreas C y D: Sonrisa Social y Maduración de la Expresión Afectiva EAD-1 (Pág. 36)">
          <span>📖</span>
          <span><strong>Nelson Ortiz Pinilla:</strong> Áreas C y D: Sonrisa Social y Maduración de la Expresión Afectiva EAD-1 (Pág. 36) →</span>
        </button>
    </div>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="capponi-psicopatologia" data-page="101" title="Saltar directamente a la página 101 en Psicopatología de la Mímica y Psicomotricidad">
          <span>📖</span>
          <span><strong>Ricardo Capponi:</strong> Psicopatología de la Mímica y Psicomotricidad (Pág. 101) →</span>
        </button>
      
    </div>
  
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
        <p class="orientation-authors-meta">Mary Ainsworth & John Bowlby • Protocolo de la Situación del Extraño • Escala EEDP</p>
      </div>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">SOLUCIONES Y SISTEMA DE PUNTUACIÓN</div>
        <h3 class="orientation-sec-title">Los 4 Patrones Estandarizados de Apego</h3>
        <p class="orientation-p">
          El procedimiento de la «Situación del Extraño» observa la conducta del infante (11 a 18 meses) durante dos breves separaciones y reencuentros con la figura materna en un entorno no familiar:
        </p>
        <div style="overflow-x: auto; margin-top: 0.75rem;">
          <table class="orientation-comp-table">
            <thead>
              <tr>
                <th>Patrón de Apego</th>
                <th>Conducta ante la Separación</th>
                <th>Conducta ante el Reencuentro (Clave)</th>
                <th>Significado Relacional</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Tipo B: Apego Seguro</strong></td>
                <td>Angustia moderada, disminuye la exploración.</td>
                <td>Busca activamente el contacto físico, se calma rápidamente y retoma el juego.</td>
                <td><strong>Óptimo / Saludable:</strong> Cuidador sensible, predecible y disponible.</td>
              </tr>
              <tr>
                <td><strong>Tipo A: Inseguro-Evitativo</strong></td>
                <td>Aparenta indiferencia, sigue explorando los juguetes.</td>
                <td>Evita el contacto visual y físico, se aleja o ignora a la madre deliberadamente.</td>
                <td><strong>Defensivo:</strong> Cuidador rechazante de las demandas de consuelo.</td>
              </tr>
              <tr>
                <td><strong>Tipo C: Inseguro-Ambivalente</strong></td>
                <td>Angustia masiva e inconsolable ante la partida.</td>
                <td>Busca el contacto pero con rabia (pega, patalea), no logra calmarse ni jugar.</td>
                <td><strong>Hipervigilante:</strong> Cuidador inconsistente e impredecible.</td>
              </tr>
              <tr>
                <td><strong>Tipo D: Desorganizado (Main)</strong></td>
                <td>Conductas de desorientación o paralización (*freezing*).</td>
                <td>Posturas contradictorias (se acerca mirando hacia otro lado, colapso corporal).</td>
                <td><strong>Patológico / Alto Riesgo:</strong> Cuidador fuente de miedo, maltrato o trauma.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">INTERPRETACIÓN CLÍNICA DE LAS RESPUESTAS</div>
        <h3 class="orientation-sec-title">Impacto en el Neurodesarrollo y Vulnerabilidad Futura</h3>
        <div class="orientation-clinical-alert">
          <strong>PREDICTOR DE TRASTORNOS SEVEROS EN LA ADULTEZ:</strong> El <strong>Apego Desorganizado (Tipo D)</strong> es el factor de vulnerabilidad más consistente para el desarrollo de <em>Trastorno Límite de la Personalidad (TLP), trastornos disociativos graves y conducta antisocial</em> en la adolescencia y adultez, reflejando una falla primaria en la integración de la autoimagen.
        </div>
      </section>

      <section class="orientation-block-card">
        <div class="orientation-section-badge">TRATAMIENTOS POSIBLES Y PROTOCOLO TERAPÉUTICO</div>
        <h3 class="orientation-sec-title">Intervenciones Vinculares Tempranas</h3>
        <div class="orientation-subcard">
          <h4 class="orientation-subcard-title">🌱 Psicoterapias de la Díada Madre-Bebé</h4>
          <ul class="orientation-bullet-list">
            <li><strong>Video-Feedback Intervention to Promote Positive Parenting (VIPP-SD):</strong> Grabación en video de momentos de juego cotidianos y revisión guiada con la madre para enseñarle a detectar microseñales del bebé y responder con sensibilidad inmediata.</li>
            <li><strong>Terapia de Interacción Padres-Hijos (PCIT):</strong> Entrenamiento en directo con audífono en el oído del progenitor mientras interactúa con el niño.</li>
            <li><strong>Terapia Basada en la Mentalización Parental:</strong> Fortalecer la capacidad de los padres de entender las rabietas como expresiones de malestar emocional y no como provocaciones maliciosas.</li>
            <li><strong>Protección Infantil:</strong> Ante indicadores de maltrato físico, abuso o negligencia grave en Tipo D, activar el protocolo de protección judicial infantil de urgencia.</li>
          </ul>
        </div>
        
    <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
      <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
        📖 Citas Verificadas en Libros de la Biblioteca (Clic para abrir en Lector PDF Nativo):
      
        <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="325" title="Saltar directamente a la página 325 en Cap. 12: Evaluación del Desarrollo Socioemocional Infantil y Factores Protectores (Pág. 325)">
          <span>📖</span>
          <span><strong>Anne Anastasi & Susana Urbina:</strong> Cap. 12: Evaluación del Desarrollo Socioemocional Infantil y Factores Protectores (Pág. 325) →</span>
        </button>
        <button type="button" class="btn-book-citation-jump" data-book-id="nelson-ortiz-escala-abreviada" data-page="39" title="Saltar directamente a la página 39 en Área D (Personal-Social): Criterios de Apego y Semáforo de Alerta EAD-1 (Pág. 39)">
          <span>📖</span>
          <span><strong>Nelson Ortiz Pinilla:</strong> Área D (Personal-Social): Criterios de Apego y Semáforo de Alerta EAD-1 (Pág. 39) →</span>
        </button>
    </div>
      
        <button type="button" class="btn-book-citation-jump" data-book-id="escala-eedp-0-24-meses" data-page="1" title="Saltar directamente a la página 1 en Evaluación del Desarrollo Psicomotor y Coordinación Temprana">
          <span>📖</span>
          <span><strong>Soledad Rodríguez et al.:</strong> Evaluación del Desarrollo Psicomotor y Coordinación Temprana (Pág. 1) →</span>
        </button>
      
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
