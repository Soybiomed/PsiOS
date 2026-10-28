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
  },

  // =========================================================================
  // BLOQUE A: PSICOMETRÍA Y MEDICIÓN (ANASTASI & URBINA)
  // BLOQUE B: NEURODESARROLLO INFANTIL (NELSON ORTIZ EAD-1 & EEDP)
  // =========================================================================
  {
    id: "psicometria-teoria-medida-baremos",
    title: "Fundamentos de Psicometría: Teoría de la Medida, Baremos y Transformación de Puntuaciones",
    category: "psicopatologia",
    categoryLabel: "Definición Psicométrica",
    isClinicalEntity: true,
    code: "PSI-MED-BAR-01",
    icon: "📊",
    author: "Psicometría Clásica • Anne Anastasi & Susana Urbina",
    badge: "Metodología • Baremos & Escalas Normalizadas",
    areas: ["PSICOMETRÍA","EVALUACIÓN CLÍNICA","METODOLOGÍA","PROCESOS PSICOLÓGICOS"],
    academicAffiliation: "Tests Psicológicos (Anastasi & Urbina, 7.ª Ed., Caps. 3 y 4, Págs. 48-83)",
    summary: "Fundamentación matemática y clínica de la medición psicológica: niveles de escala de Stevens (nominal, ordinal, intervalo y razón), estandarización, grupos normativos de referencia y tipificación. Desarrollo profundo de las transformaciones de puntuación bruta a puntuaciones relativas: rangos percentilares, puntuaciones estándar Z (media 0, DT 1), puntuaciones T normalizadas (media 50, DT 10), CI de desviación Wechsler (media 100, DT 15) y eneatipos/stanines (media 5, DT 2).\n\nIncluye tabla comparativa de equivalencias psicométricas universales y normas para evitar los sesgos interpretativos y la falacia de intervalo en puntuaciones ordinales.",
    topics: [
          "Niveles de Medición de Stevens y Límites en la Evaluación Psicológica",
          "Puntuaciones Brutas vs. Puntuaciones Derivadas Normativas",
          "Puntuaciones Estándar Lineales vs. Normalizadas (Transformación Z y T)",
          "Cociente Intelectual de Desviación Wechsler (CI: Media 100, DT 15)",
          "Rangos Percentilares: Ventajas Clínicas y Distorsión de Intervalos",
          "Eneatipos (Stanines), Decatipos (Sten) y Puntuaciones C",
          "Tabla Maestra de Equivalencias y Conversión entre Escalas",
          "Citas verificadas a Anne Anastasi & Susana Urbina (Págs. 48-83)"
    ]
  },

  {
    id: "evaluacion-interpretacion-perfiles-psicometricos",
    title: "Protocolo de Interpretación de Perfiles Psicométricos y Campana de Gauss Interactiva",
    category: "evaluacion",
    categoryLabel: "Protocolo de Evaluación",
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: "EVA-PSI-GAU-02",
    icon: "🔔",
    author: "Protocolo Clínico • Curva Normal, Intervalos de Confianza y Diagnóstico",
    badge: "Evaluación Psicométrica • Campana de Gauss Dinámica",
    areas: ["EVALUACIÓN CLÍNICA","PSICOMETRÍA","INSTRUMENTOS DEL VIVENCIAR"],
    academicAffiliation: "Interpretación de Perfiles y Baremos (Anastasi & Urbina Págs. 48-112)",
    summary: "Protocolo clínico estructurado para la conversión, lectura integrada e interpretación cualitativo-cuantitativa de perfiles psicométricos. Incorpora la Campana de Gauss Psicométrica Interactiva con aguja dinámica en tiempo real, cálculo instantáneo de equivalencias entre CI Wechsler, Z, T, Percentil y Stanine, banda de intervalo de confianza al 95% basada en el Error Estándar de Medición (EEM), y las 5 fases clínicas para la redacción de informes según los estándares de la APA.",
    topics: [
          "Campana de Gauss Psicométrica Interactiva con Marcador Dinámico SVG",
          "Conversión Multiescala en Tiempo Real (CI Wechsler, T, Z, Percentil, Stanine)",
          "Banda Gráfica del Intervalo de Confianza al 95% con Error Estándar",
          "Fase 1: Verificación de Validez del Protocolo y Escalas de Control",
          "Fase 2: Interpretación del Índice Global Compuesto vs. Índices Específicos",
          "Fase 3: Análisis de Discrepancias Intraindividuales (Puntos Fuertes y Débiles)",
          "Fase 4: Formulación Diagnóstica Cualitativa (Clasificaciones DSM-5 / Wechsler)",
          "Fase 5: Directrices para la Devolución del Informe Psicológico"
    ]
  },

  {
    id: "confiabilidad-error-estandar-medicion",
    title: "Confiabilidad Psicométrica, Consistencia y Error Estándar de Medición (EEM)",
    category: "psicopatologia",
    categoryLabel: "Definición Psicométrica",
    isClinicalEntity: true,
    code: "PSI-CON-EEM-03",
    icon: "🎯",
    author: "Teoría Clásica de los Tests • Anne Anastasi & Charles Spearman",
    badge: "Propiedades Psicométricas • Precisión & Varianza de Error",
    areas: ["PSICOMETRÍA","METODOLOGÍA","EVALUACIÓN CLÍNICA"],
    academicAffiliation: "Tests Psicológicos (Anastasi & Urbina, Cap. 4, Págs. 84-112)",
    summary: "Teoría de la confiabilidad en la evaluación psicológica fundamentada en el modelo lineal clásico de Spearman: Puntuación Observada = Puntuación Verdadera + Error (X = V + e). Tipos y procedimientos de estimación: estabilidad temporal (test-retest), formas alternas o paralelas, consistencia interna (Alfa de Cronbach, KR-20, Omega de McDonald) y confiabilidad interjueces (Kappa de Cohen y Fleiss).\n\nDesarrollo matemático del Error Estándar de Medición (EEM = s * sqrt(1 - rxx)) y del Error Estándar de la Diferencia (EED) para determinar si las discrepancias entre dos puntuaciones o subtests son estadísticamente significativas o mero ruido de medida.",
    topics: [
          "Modelo Clásico de Spearman: Varianza Verdadera vs. Varianza de Error",
          "Confiabilidad Test-Retest y Efectos de Práctica o Maduración",
          "Formas Paralelas y Equivalencia de Muestreo de Contenido",
          "Consistencia Interna: Alfa de Cronbach, KR-20 y Coeficiente Omega",
          "Confiabilidad Interjueces: Coeficiente Kappa de Cohen y Concordancia",
          "Fórmula y Significado Clínico del Error Estándar de Medición (EEM)",
          "Error Estándar de la Diferencia (EED) en Discrepancias de Subtests",
          "Citas verificadas a Anne Anastasi & Susana Urbina (Págs. 84-112)"
    ]
  },

  {
    id: "evaluacion-estimacion-error-estandar-eem",
    title: "Protocolo Clínico de Estimación de Precisión y Calculadora de EEM",
    category: "evaluacion",
    categoryLabel: "Protocolo de Evaluación",
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: "EVA-EEM-CAL-04",
    icon: "🧮",
    author: "Protocolo Psicométrico • Calculadora Dinámica de Intervalos de Confianza",
    badge: "Evaluación Metodológica • Precisión Diagnóstica",
    areas: ["EVALUACIÓN CLÍNICA","PSICOMETRÍA","METODOLOGÍA"],
    academicAffiliation: "Cálculo y Reporte del Error Estándar (Anastasi & Urbina Págs. 88, 98)",
    summary: "Protocolo metodológico para la verificación de la calidad psicométrica de un instrumento antes de su aplicación diagnóstica. Incluye la Calculadora Dinámica de Error Estándar de Medición (EEM) e Intervalos de Confianza al 90%, 95% y 99% con inputs en vivo de puntuación observada, desviación típica de la prueba y coeficiente de confiabilidad rxx, junto con la rúbrica de decisión para determinar si un test es admisible para decisiones clínicas individuales.",
    topics: [
          "Calculadora Interactiva de EEM e Intervalos al 90%, 95% y 99%",
          "Criterios de Idoneidad Psicométrica: Umbrales rxx >= 0.90 para Diagnóstico Individual",
          "Cálculo de Intervalos de Confianza Alrededor de la Puntuación Observada y Verdadera",
          "Protocolo de Comparación de Perfiles mediante Error Estándar de la Diferencia (EED)",
          "Modelos de Redacción de Hallazgos Psicométricos según Normas APA",
          "Guía Práctica: Errores Frecuentes al Informar Puntuaciones Puntuales sin Intervalo"
    ]
  },

  {
    id: "validez-psicometrica-multirrasgo",
    title: "Validez Psicométrica: Evidencias de Contenido, Criterio y Constructo (MTMM)",
    category: "psicopatologia",
    categoryLabel: "Definición Psicométrica",
    isClinicalEntity: true,
    code: "PSI-VAL-MTM-05",
    icon: "🔬",
    author: "Metodología Psicométrica • Anne Anastasi, Messick & Campbell-Fiske",
    badge: "Validez Unificada • Red Nomológica & Evidencias",
    areas: ["PSICOMETRÍA","METODOLOGÍA","EVALUACIÓN CLÍNICA"],
    academicAffiliation: "Tests Psicológicos (Anastasi & Urbina, Caps. 5 y 6, Págs. 113-171)",
    summary: "Marco contemporáneo de la validez según Samuel Messick y los estándares APA: la validez como un juicio evaluativo unitario del grado en que la evidencia empírica y la teoría apoyan la adecuación de las interpretaciones basadas en las puntuaciones de las pruebas. Análisis sistemático de las fuentes de evidencia: validez de contenido (muestreo del dominio, índice de Lawshe), validez de criterio (concurrente, predictiva, curvas ROC, sensibilidad, especificidad y razones de verosimilitud) y validez de constructo (red nomológica, matriz multirrasgo-multimétodo MTMM de Campbell y Fiske, y análisis factorial confirmatorio).",
    topics: [
          "Concepto Unitario de Validez de Messick vs. Tríada Clásica",
          "Evidencia de Contenido: Muestreo de Dominio y Coeficiente Lawshe CVR",
          "Evidencia de Criterio: Validez Concurrente y Predictiva",
          "Diagnóstico Clínico: Sensibilidad, Especificidad, VPP, VPN y Curvas ROC",
          "Evidencia de Constructo: Red Nomológica y Estructura Factorial",
          "Matriz Multirrasgo-Multimétodo (MTMM): Validez Convergente vs. Discriminante",
          "Citas verificadas a Anne Anastasi & Susana Urbina (Págs. 113-171)"
    ]
  },

  {
    id: "teoria-respuesta-item-tri",
    title: "Teoría de Respuesta al Ítem (TRI) y Modelado del Rasgo Latente",
    category: "psicopatologia",
    categoryLabel: "Definición Psicométrica",
    isClinicalEntity: true,
    code: "PSI-TRI-RAS-06",
    icon: "📈",
    author: "Modelos Psicométricos Modernos • Rasch, Lord, Birnbaum & Anastasi",
    badge: "Psicometría Avanzada • Curvas Características del Ítem",
    areas: ["PSICOMETRÍA","METODOLOGÍA","PROCESOS PSICOLÓGICOS"],
    academicAffiliation: "Tests Psicológicos (Anastasi & Urbina, Págs. 172-204)",
    summary: "Fundamentos de la Teoría de Respuesta al Ítem (TRI) frente a las limitaciones de invariancia de la Teoría Clásica de los Tests (TCT). Modelado matemático del rasgo latente theta y Curvas Características del Ítem (CCI). Explicación detallada de los modelos logísticos de 1 parámetro (Modelo de Rasch: dificultad b), 2 parámetros (Birnbaum: discriminación a y dificultad b) y 3 parámetros (adivinación o pseudo-azar c). Función de Información del Test (FIT), error de medición condicional y aplicaciones en Tests Adaptativos Computarizados (TAC).",
    topics: [
          "Límites de la TCT: Dependencia del Grupo Muestral y Dificultad del Test",
          "Concepto de Rasgo Latente (Theta) y Curva Característica del Ítem (CCI)",
          "Modelo 1PL de Rasch: Parámetro de Dificultad (b)",
          "Modelo 2PL de Birnbaum: Parámetro de Discriminación (a)",
          "Modelo 3PL: Parámetro de Pseudo-Adivinación o Azar (c)",
          "Función de Información del Ítem (FII) y del Test (FIT)",
          "Tests Adaptativos Computarizados (TAC): Medición Óptima Individualizada",
          "Citas verificadas a Anne Anastasi & Susana Urbina (Págs. 172-204)"
    ]
  },

  {
    id: "neurodesarrollo-infantil-ead",
    title: "Neurodesarrollo Infantil Integral: Principios Ontogenéticos y Alerta Temprana (0-60 Meses)",
    category: "infancia",
    categoryLabel: "Fundamentos de Neurodesarrollo",
    isClinicalEntity: true,
    code: "NEU-DES-ORT-01",
    icon: "🌱",
    author: "Neurodesarrollo Clínico • Dr. Nelson Ortiz Pinilla (EAD-1 / UNICEF)",
    badge: "Desarrollo Infantil • 4 Áreas Sistémicas 0-5 Años",
    areas: ["DESARROLLO INFANTIL","NEURODESARROLLO","SEMIOLOGÍA","EVALUACIÓN CLÍNICA"],
    academicAffiliation: "Escala Abreviada de Desarrollo EAD-1 (Nelson Ortiz, Págs. 5-17)",
    summary: "Modelo holístico y neurobiológico del desarrollo infantil en los primeros 5 años de vida: leyes ontogenéticas de maduración (céfalo-caudal y próximo-distal, diferenciación refleja a voluntaria), sinaptogénesis masiva, mielinización y periodos críticos o sensibles. Estructura de las 4 áreas del desarrollo propuestas por Nelson Ortiz en la EAD-1: Motricidad Gruesa (Área A), Motricidad Fino-Adaptativa (Área B), Audición y Lenguaje (Área C) y Conducta Personal-Social (Área D).\n\nFactores de riesgo biológico (prematuridad, hipoxia perinatal, bajo peso) y psicosocial (deprivación afectiva, negligencia), signos de alerta neurológica absoluta y criterios de remisión temprana.",
    topics: [
          "Leyes Fundamentales: Céfalo-Caudal, Próximo-Distal y Maduración Nerviosa",
          "Ventanas de Oportunidad y Periodos Críticos de Plasticidad Cerebral",
          "Área A: Motricidad Gruesa (Tono, Postura, Equilibrio y Locomoción)",
          "Área B: Motricidad Fino-Adaptativa (Coordinación Óculo-Manual y Prensión)",
          "Área C: Audición y Lenguaje (Vocalización, Comprensión y Expresión Verbal)",
          "Área D: Conducta Personal-Social (Vínculo, Autonomía y Socialización)",
          "Signos de Alarma Neurológica Inmediata en Lactantes y Preescolares",
          "Citas verificadas a Nelson Ortiz Pinilla (Págs. 5-17)"
    ]
  },

  {
    id: "evaluacion-tamizaje-neurodesarrollo-ead1",
    title: "Protocolo de Tamizaje EAD-1 con Semáforo Neuroevolutivo Interactivo (0-60 Meses)",
    category: "evaluacion",
    categoryLabel: "Protocolo de Tamizaje",
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: "EVA-EAD-SEM-02",
    icon: "🚦",
    author: "Protocolo de Tamizaje • Semáforo EAD-1 & Navegador Etario Dinámico",
    badge: "Tamizaje Infantil • Baremos EAD-1 (Rojo/Amarillo/Verde)",
    areas: ["EVALUACIÓN CLÍNICA","DESARROLLO INFANTIL","NEURODESARROLLO","INSTRUMENTOS DEL VIVENCIAR"],
    academicAffiliation: "Protocolo de Aplicación EAD-1 (Nelson Ortiz Págs. 18-62)",
    summary: "Protocolo clínico estructurado de tamizaje neuroevolutivo para niños de 0 a 60 meses. Incorpora el Semáforo EAD-1 Interactivo con clasificación inmediata por rangos normativos: Alerta Roja (P < 10, T < 35), Riesgo Medio-Bajo Amarillo (P 11-25, T 36-45), Rango Medio Típico Gris/Azul (P 26-74, T 46-55), Medio-Alto Azul (P 75-89, T 56-65) y Alto Verde (P > 90, T > 65).\n\nIncluye el Navegador Interactivo de los 9 Rangos Etarios con los criterios exhaustivos de observación y evaluación en las 4 áreas (Gruesa, Fina, Lenguaje, Social), condiciones de aplicación, cálculo de edad cronológica corregida por prematurez y directrices de derivación.",
    topics: [
          "Semáforo EAD-1 Interactivo: Puntos de Corte Normativos (Alerta, Medio, Alto)",
          "Navegador Etario Dinámico de los 9 Grupos de Edad (0 a 60 Meses)",
          "Criterios Específicos por Rango: Motricidad Gruesa, Fina, Lenguaje y Social",
          "Cálculo de Edad Cronológica y Regla de Corrección por Prematuridad",
          "Reglas de Parada: Punto de Partida y Techo de Fracaso en la EAD-1",
          "Condiciones de Administración: Estado del Niño, Ambiente y Materiales",
          "Algoritmo de Derivación Médica: Neuropediatría vs. Estimulación Temprana"
    ]
  },

  {
    id: "coordinacion-visomotriz-fino-adaptativa",
    title: "Coordinación Visomotriz, Prensión y Grafomotricidad en la Primera Infancia",
    category: "infancia",
    categoryLabel: "Fundamentos de Neurodesarrollo",
    isClinicalEntity: true,
    code: "NEU-MOT-VIS-03",
    icon: "✍️",
    author: "Psicomotricidad Fina • Nelson Ortiz, Gesell & Anastasi",
    badge: "Motricidad Fina • Ontogenia de Prensión & Trazo",
    areas: ["DESARROLLO INFANTIL","NEURODESARROLLO","PROCESOS PSICOLÓGICOS","EVALUACIÓN CLÍNICA"],
    academicAffiliation: "EAD-1 Área B (Nelson Ortiz Págs. 26-31) • Tests Psicológicos (Anastasi Págs. 440-455)",
    summary: "Ontogenia de la función manipulativa, prensión digital y coordinación óculo-manual desde el nacimiento hasta los 5 años: transición del reflejo de prensión palmar arcaico a la prensión voluntaria cúbito-palmar (4-5 meses), pinza radial en tijera (7-9 meses), pinza digital fina superior con oposición índice-pulgar (10-12 meses), agarre palmar estático (15-24 meses), pronación digital (2-3 años) y trípode dinámico maduro (4-5 años).\n\nSecuencia cronológica del grafismo infantil: del garabato involuntario desordenado a las líneas direccionales, copia de figuras geométricas (círculo, cruz, triángulo) y dibujo de la figura humana.",
    topics: [
          "Neuroanatomía de la Motricidad Fina: Vía Corticoespinal y Feedback Visual",
          "Evolución del Agarre: Del Reflejo Palmar a la Pinza Superior Digital Fina",
          "Transición del Agarre del Lápiz: Palmar -> Prono Digital -> Trípode Dinámico",
          "Ontogenia del Grafismo: Garabato (15m), Línea (24m), Círculo (36m), Cruz (48m)",
          "Construcción Espacial Tridimensional con Bloques y Enhebrado",
          "Citas verificadas a Nelson Ortiz (Págs. 26-31) y Anastasi & Urbina (Págs. 440-455)"
    ]
  },

  {
    id: "evaluacion-motricidad-fino-adaptativa-grafismo",
    title: "Protocolo de Evaluación Visomotora: Batería de Bloques y Grafismo Evolutivo",
    category: "evaluacion",
    categoryLabel: "Protocolo de Evaluación",
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: "EVA-MOT-GRA-04",
    icon: "🧱",
    author: "Protocolo Psicomotor • Pruebas de Bloques, Tijeras y Copia de Figuras",
    badge: "Evaluación Psicomotriz • Tabla Evolutiva 0-60m",
    areas: ["EVALUACIÓN CLÍNICA","DESARROLLO INFANTIL","NEURODESARROLLO","INSTRUMENTOS DEL VIVENCIAR"],
    academicAffiliation: "Baremos y Administración del Área B (Nelson Ortiz Págs. 27-31)",
    summary: "Protocolo clínico estructurado de examen de la coordinación visomotriz y destreza adaptativa infantil. Presenta la Tabla Evolutiva Maestra de Construcción con Bloques (torre de 2, 4, 6, 8 cubos, tren con chimenea, puente de 3 bloques y puerta de 4), habilidades de tijera y ensartado de cuentas, y la batería de copia de figuras geométricas de Nelson Ortiz y Gesell con criterios cuantitativos de aprobación y guías de intervención sensoriomotriz.",
    topics: [
          "Tabla Maestra de Construcción Tridimensional con Cubos (0 a 60 Meses)",
          "Pruebas de Destreza Digital: Ensartado de Cuentas y Manejo de Tijeras",
          "Batería de Copia de Formas Geométricas: Criterios de Aprobación y Errores Típicos",
          "Diferenciación entre Dispraxia Visoconstructiva y Retraso Psicomotor Global",
          "Rúbrica de Registro de Severidad y Observación de la Tensión Tónica Muscular",
          "Programa de Estimulación Sensoriomotriz Gradual para Terapia en Hogar y Escuela"
    ]
  },

  {
    id: "lateralidad-esquema-corporal-desarrollo",
    title: "Evolución de la Lateralidad Hemisférica y Construcción del Esquema Corporal",
    category: "infancia",
    categoryLabel: "Fundamentos de Neurodesarrollo",
    isClinicalEntity: true,
    code: "NEU-LAT-ESQ-05",
    icon: "🧭",
    author: "Desarrollo Psicomotor • Nelson Ortiz, Harris, Piaget & Anastasi",
    badge: "Lateralidad Infantil • Somatognosia & Dominancia",
    areas: ["DESARROLLO INFANTIL","NEURODESARROLLO","SEMIOLOGÍA","PROCESOS PSICOLÓGICOS"],
    academicAffiliation: "EAD-1 Desarrollo Psicomotor (Nelson Ortiz Págs. 18-31) • Anastasi & Urbina (Págs. 280-295)",
    summary: "Bases neuroevolutivas de la lateralización cerebral, maduración del cuerpo calloso y consolidación de la dominancia funcional. Etapas ontogenéticas: indiferenciación bilateral (0-2 años), alternancia funcional y exploración (2-4 años) y afirmación o fijación definitiva (4-6 años). Tipologías de lateralidad: homogénea (diestra o zurda), cruzada (mano-ojo o mano-pie divergentes), invertida o contrariada (zurdo corregido) y mixta/ambidextra.\n\nEvolución del esquema corporal y somatognosia: reconocimiento en el propio cuerpo (3-5 años), orientación derecha-izquierda sobre sí mismo (5-6 años) y reversibilidad espacial en el otro o en objetos (7-8 años). Correlatos clínicos con el aprendizaje de la lectoescritura, rotación de grafemas (b/d, p/q) y dislexia.",
    topics: [
          "Neurobiología de la Asimetría Hemisférica y Mielinización del Cuerpo Calloso",
          "Fases del Desarrollo: Indiferenciación (0-2a) -> Alternancia (2-4a) -> Fijación (4-6a)",
          "Clasificación Clínica: Homogénea, Cruzada, Invertida y Mixta / Ambidextrismo",
          "Evolución del Esquema Corporal (Somatognosia) y Orientación Espacial",
          "Discriminación Derecha-Izquierda sobre Sí Mismo vs. en el Otro (Piaget & Head)",
          "Impacto en el Aprendizaje Académico: Inversión de Letras, Disgrafía y Dislexia",
          "Citas verificadas a Nelson Ortiz (Págs. 18-31) y Anastasi & Urbina (Págs. 280-295)"
    ]
  },

  {
    id: "evaluacion-lateralidad-dominancia-infantil",
    title: "Protocolo de Dominancia Lateral y Esquema Corporal en Edad Infantil",
    category: "evaluacion",
    categoryLabel: "Protocolo de Evaluación",
    isClinicalEntity: true,
    isEvaluationProtocol: true,
    code: "EVA-LAT-DOM-06",
    icon: "✋",
    author: "Protocolo Clínico • Harris & EAD-1 • Batería de 4 Dimensiones",
    badge: "Evaluación Psicomotriz • Matriz Mano-Pie-Ojo-Oído",
    areas: ["EVALUACIÓN CLÍNICA","DESARROLLO INFANTIL","NEURODESARROLLO","INSTRUMENTOS DEL VIVENCIAR"],
    academicAffiliation: "Evaluación de la Lateralidad y Pruebas EAD-1 (Nelson Ortiz Págs. 21, 27 • Harris)",
    summary: "Protocolo de examen clínico estructurado para determinar la dominancia motora y sensorial en niños de 3 a 7 años a través de 4 dimensiones independientes: Manual (10 tareas funcionales), Pedial (4 pruebas motoras), Ocular (3 pruebas de puntería monocular) y Auditiva (3 pruebas de auscultación). Incorpora la fórmula matemática del Coeficiente de Lateralidad (PL = (D - I) / (D + I) * 100), matriz de riesgo pedagógico y pautas de intervención sin forzar la lateralidad natural.",
    topics: [
          "Batería de Exploración en 4 Dimensiones: Mano, Pie, Ojo y Oído",
          "Fórmula del Coeficiente de Lateralidad (PL) e Interpretación Numérica",
          "Pruebas de Exploración del Esquema Corporal y Orientación Derecha-Izquierda",
          "Matriz de Identificación de Riesgo: Cruce Óculo-Manual y Dislexia del Desarrollo",
          "Pautas de Conducta Clínica: Errores Iatrogénicos de Forzar el Uso de la Mano Derecha",
          "Plan de Reeducación Psicomotriz y Orientación a Docentes y Padres"
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
  
  `,

  // =========================================================================
  // BLOQUE A: PSICOMETRÍA (ANASTASI & URBINA)
  // =========================================================================
// =========================================================================
  // 1. FUNDAMENTOS DE PSICOMETRÍA: TEORÍA DE LA MEDIDA Y BAREMOS
  // =========================================================================
  'psicometria-teoria-medida-baremos': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">📊 FUNDAMENTACIÓN PSICOMÉTRICA & TEORÍA DE LA MEDIDA</span>
          <span class="modal-area-pill">📐 ÁREA: PSICOMETRÍA</span>
          <span class="modal-area-pill">🔬 ÁREA: METODOLOGÍA</span>
          <span class="modal-area-pill">🩺 ÁREA: EVALUACIÓN CLÍNICA</span>
        </div>
        <h2 class="orientation-main-title">Fundamentos de Psicometría: Teoría de la Medida, Baremos y Transformación de Puntuaciones</h2>
        <p class="orientation-authors-meta">Anne Anastasi & Susana Urbina • Tests Psicológicos (7.ª Edición, Capítulos 3 y 4, Págs. 48-83) • APA Standards</p>
      </div>

      <div class="pedagogical-division-banner">
        <div class="pedagogical-banner-text">
          💡 <strong>Transición Metodológica Capital:</strong> Una puntuación bruta en un test psicológico carece por completo de significado interpretativo si no se compara con un <strong>Grupo Normativo de Referencia (Baremo)</strong> o con un criterio estandarizado. Comprender las transformaciones lineales y no lineales es el escudo fundamental contra los diagnósticos erróneos.
        </div>
        <button type="button" class="pedagogical-link-btn" id="btn-goto-psicometria-eval">
          <span>🔔 Ir a Campana de Gauss & Protocolo de Interpretación</span>
          <span>→</span>
        </button>
      </div>

      <div class="orientation-nav-pills-bar">
        <button type="button" class="orientation-nav-pill-btn" data-target-sec="sec-psi-escalas">
          <span>📐</span>
          <span>1. Niveles de Medición de Stevens</span>
        </button>
        <button type="button" class="orientation-nav-pill-btn" data-target-sec="sec-psi-transformaciones">
          <span>🔄</span>
          <span>2. Transformaciones de Puntuación</span>
        </button>
        <button type="button" class="orientation-nav-pill-btn" data-target-sec="sec-psi-tabla-maestra">
          <span>📊</span>
          <span>3. Tabla Maestra de Equivalencias</span>
        </button>
        <button type="button" class="orientation-nav-pill-btn" data-target-sec="sec-psi-sesgos">
          <span>⚠️</span>
          <span>4. Sesgos y Falacias Frecuentes</span>
        </button>
        <button type="button" class="orientation-nav-pill-btn" data-target-sec="sec-psi-citas">
          <span>📚</span>
          <span>5. Citas Textuales Verificadas</span>
        </button>
      </div>

      <!-- SECCIÓN 1: NIVELES DE MEDICIÓN DE STEVENS -->
      <section class="orientation-block-card" id="sec-psi-escalas">
        <span class="orientation-section-badge">NIVELES EPISTEMOLÓGICOS DE MEDIDA</span>
        <h3 class="orientation-sec-title">1. Las Cuatro Escalas de Stevens en la Evaluación Psicológica</h3>
        <p class="orientation-lead-p">
          En 1946, S. S. Stevens formuló la clasificación canónica de los niveles de medición que rige la psicometría moderna. Cada escala determina qué operaciones matemáticas y estadísticas son legítimas y cuáles constituyen aberraciones metodológicas:
        </p>

        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">🏷️</span>
              <span class="dim-name">Escala Nominal (Identidad y Clasificación)</span>
            </div>
            <p class="orientation-p">
              Los números funcionan exclusivamente como etiquetas o nombres cualitativos. No existe orden jerárquico ni magnitud.
            </p>
            <div class="orientation-subcard">
              <div class="orientation-subcard-title">Ejemplos Clínicos & Estadísticos</div>
              <ul class="orientation-bullet-list">
                <li><strong>Diagnóstico categorial:</strong> Código 1 = Depresión Mayor, 2 = Trastorno Bipolar, 3 = Esquizofrenia.</li>
                <li><strong>Sexo / Género o Lateralidad:</strong> 1 = Diestro, 2 = Zurdo, 3 = Ambidextro.</li>
                <li><strong>Estadísticos admisibles:</strong> Frecuencias absolutas, porcentajes y Moda. <em>Operaciones como la media o la resta no tienen sentido alguno.</em></li>
              </ul>
            </div>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">📶</span>
              <span class="dim-name">Escala Ordinal (Orden y Jerarquía)</span>
            </div>
            <p class="orientation-p">
              Existe una relación de orden (mayor que, menor que), pero <strong>las distancias entre rangos adyacentes no son iguales</strong>.
            </p>
            <div class="orientation-subcard">
              <div class="orientation-subcard-title">Ejemplos Clínicos & Estadísticos</div>
              <ul class="orientation-bullet-list">
                <li><strong>Rangos Percentilares (PR):</strong> Un paciente en el percentil 90 tiene mayor rendimiento que uno en el percentil 80, pero la distancia cognitiva real entre PR 90 y PR 99 es inmensamente mayor que entre PR 50 y PR 59.</li>
                <li><strong>Ítems tipo Likert:</strong> 0 = Nunca, 1 = A veces, 2 = Frecuentemente, 3 = Siempre.</li>
                <li><strong>Estadísticos admisibles:</strong> Mediana, Cuartiles, Percentiles y Coeficiente de correlación de Spearman (rho).</li>
              </ul>
            </div>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">📏</span>
              <span class="dim-name">Escala de Intervalo (Distancias Iguales)</span>
            </div>
            <p class="orientation-p">
              Las unidades de medida son idénticas en cualquier tramo de la escala. Sin embargo, <strong>el cero es arbitrario y convencional</strong> (no implica ausencia total del rasgo psicológico).
            </p>
            <div class="orientation-subcard">
              <div class="orientation-subcard-title">Ejemplos Clínicos & Estadísticos</div>
              <ul class="orientation-bullet-list">
                <li><strong>Puntuaciones Estándar (Z, T, CI Wechsler):</strong> La diferencia entre un CI de 100 y 115 (+1σ) equivale exactamente a la diferencia entre 115 y 130 (+1σ). Un CI de 0 no significa ausencia total de inteligencia.</li>
                <li><strong>Temperatura Celsius o Fahrenheit:</strong> El 0°C es el punto de congelación del agua, no la ausencia de calor.</li>
                <li><strong>Estadísticos admisibles:</strong> Media aritmética, Desviación típica, Correlación de Pearson (r), Análisis factorial y ANOVA.</li>
              </ul>
            </div>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">⚖️</span>
              <span class="dim-name">Escala de Razón (Cero Absoluto)</span>
            </div>
            <p class="orientation-p">
              Posee intervalos iguales y un <strong>cero absoluto natural</strong> que indica nulidad total de la propiedad física evaluada.
            </p>
            <div class="orientation-subcard">
              <div class="orientation-subcard-title">Ejemplos Clínicos & Estadísticos</div>
              <ul class="orientation-bullet-list">
                <li><strong>Tiempo de Reacción:</strong> Medido en milisegundos en tareas atencionales de Stroop o CPT. Un tiempo de 400 ms es el doble de 200 ms.</li>
                <li><strong>Frecuencia cardíaca / Conductancia de la piel:</strong> Registro psicofisiológico de la activación autonómica.</li>
                <li><strong>Estadísticos admisibles:</strong> Todas las operaciones aritméticas, medias geométricas y coeficientes de variación.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- SECCIÓN 2: TRANSFORMACIONES DE PUNTUACIÓN -->
      <section class="orientation-block-card" id="sec-psi-transformaciones">
        <span class="orientation-section-badge">DERIVACIONES CUANTITATIVAS</span>
        <h3 class="orientation-sec-title">2. De la Puntuación Bruta a las Puntuaciones Tipificadas</h3>
        <p class="orientation-lead-p">
          Una puntuación bruta (X) refleja únicamente el número directo de aciertos o ítems contestados. Para que adquiera valor clínico debe transformarse a una escala estándar con parámetros de media (μ) y desviación típica (σ) conocidos:
        </p>

        <div class="orientation-subcard">
          <div class="orientation-subcard-title">Principales Escalas Psicométricas Utilizadas en Clínica</div>
          <ul class="orientation-bullet-list">
            <li>
              <strong>Puntuación Z (Puntuación Estándar Fundamental):</strong>
              Expresa la distancia exacta de una puntuación a la media en unidades de desviación típica.
              <br><code>z = (X - μ) / σ</code>
              <br><em>Parámetros: Media = 0.00, Desviación Típica = 1.00.</em> Permite comparar directamente pruebas heterogéneas.
            </li>
            <li>
              <strong>Puntuación T de McCall (Ampliamente usada en Personalidad y EAD-1):</strong>
              Transformación lineal diseñada para eliminar los signos negativos y decimales de la escala Z.
              <br><code>T = 50 + 10 · z</code>
              <br><em>Parámetros: Media = 50, Desviación Típica = 10.</em> Utilizada en el MMPI-2, PAI, BASC-3 y en la tipificación de la Escala Abreviada de Nelson Ortiz.
            </li>
            <li>
              <strong>Cociente Intelectual de Desviación de Wechsler (CI):</strong>
              Creado por David Wechsler para sustituir el anticuado CI cociente mental (Edad Mental / Edad Cronológica × 100) que fracasaba en adultos.
              <br><code>CI = 100 + 15 · z</code>
              <br><em>Parámetros: Media = 100, Desviación Típica = 15.</em> Utilizado en WAIS-IV, WISC-V, WPPSI-IV y escalas Reynolds (RIAS).
            </li>
            <li>
              <strong>Puntuaciones Escalares / Subtests Wechsler (PE):</strong>
              Utilizadas en las subpruebas individuales (ej. Semejanzas, Dígitos, Matrices).
              <br><code>PE = 10 + 3 · z</code>
              <br><em>Parámetros: Media = 10, Desviación Típica = 3.</em> Rango típico entre 1 y 19.
            </li>
            <li>
              <strong>Eneatipos o Stanines (Standard Nines):</strong>
              Escala normalizada dividida en 9 intervalos estándar basada en la curva normal.
              <br><code>Stanine = 5 + 2 · z</code> (redondeado a enteros de 1 a 9).
              <br><em>Parámetros: Media = 5, Desviación Típica = 2.</em> Muy usada en baterías escolares y neuropsicológicas breves.
            </li>
            <li>
              <strong>Decatipos o Sten (Standard Tens):</strong>
              Escala de 10 unidades comúnmente empleada en el test 16PF de Cattell.
              <br><code>Sten = 5.5 + 2 · z</code>
              <br><em>Parámetros: Media = 5.5, Desviación Típica = 2.</em>
            </li>
          </ul>
        </div>

        <div class="orientation-clinical-alert">
          <strong>⚠️ Advertencia Crítica de Anastasi & Urbina sobre los Rangos Percentilares:</strong>
          Los percentiles son muy intuitivos para la devolución a pacientes y familiares ("supera al 75% de las personas de su edad"), pero <strong>comprimen los extremos y expanden el centro</strong>. Una diferencia de 5 puntos percentiles cerca de la media (del PR 48 al PR 53) representa una distancia en habilidad real casi insignificante (apenas 0.12 desviaciones típicas), mientras que esa misma diferencia de 5 percentiles en el extremo superior (del PR 94 al PR 99) representa una distancia colosal en habilidad latente (más de 0.8 desviaciones típicas).
        </div>
      </section>

      <!-- SECCIÓN 3: TABLA MAESTRA DE EQUIVALENCIAS -->
      <section class="orientation-block-card" id="sec-psi-tabla-maestra">
        <span class="orientation-section-badge">SISTEMA INTEGRADO DE CONVERSIÓN</span>
        <h3 class="orientation-sec-title">3. Tabla Maestra de Equivalencias Universales en la Curva Normal</h3>
        <p class="orientation-p">
          Relación exacta entre las distintas escalas psicométricas estandarizadas en función de las desviaciones típicas respecto a la media:
        </p>

        <div class="orientation-table-wrapper">
          <table class="orientation-data-table">
            <thead>
              <tr>
                <th>Desviación (σ)</th>
                <th>Puntaje Z</th>
                <th>CI Wechsler (μ=100, σ=15)</th>
                <th>Puntaje T (μ=50, σ=10)</th>
                <th>Subtest PE (μ=10, σ=3)</th>
                <th>Percentil (PR)</th>
                <th>Eneatipo (1-9)</th>
                <th>Clasificación Clínica (DSM-5 / Wechsler)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>+3.00 σ</strong></td>
                <td>+3.00</td>
                <td>145</td>
                <td>80</td>
                <td>19</td>
                <td>99.9%</td>
                <td>9</td>
                <td><span class="status-badge" style="background: rgba(168, 85, 247, 0.15); color: #7e22ce;">Muy Superior / Genialidad</span></td>
              </tr>
              <tr>
                <td><strong>+2.00 σ</strong></td>
                <td>+2.00</td>
                <td>130</td>
                <td>70</td>
                <td>16</td>
                <td>97.7%</td>
                <td>9</td>
                <td><span class="status-badge" style="background: rgba(147, 51, 234, 0.12); color: #6b21a8;">Superior / Altas Capacidades</span></td>
              </tr>
              <tr>
                <td><strong>+1.33 σ</strong></td>
                <td>+1.33</td>
                <td>120</td>
                <td>63</td>
                <td>14</td>
                <td>90.8%</td>
                <td>8</td>
                <td><span class="status-badge" style="background: rgba(59, 130, 246, 0.12); color: #1d4ed8;">Promedio Alto / Brillante</span></td>
              </tr>
              <tr>
                <td><strong>+1.00 σ</strong></td>
                <td>+1.00</td>
                <td>115</td>
                <td>60</td>
                <td>13</td>
                <td>84.1%</td>
                <td>7</td>
                <td><span class="status-badge" style="background: rgba(59, 130, 246, 0.1); color: #2563eb;">Promedio Normal-Alto</span></td>
              </tr>
              <tr>
                <td><strong>0.00 σ (Media)</strong></td>
                <td>0.00</td>
                <td>100</td>
                <td>50</td>
                <td>10</td>
                <td>50.0%</td>
                <td>5</td>
                <td><span class="status-badge" style="background: rgba(16, 185, 129, 0.12); color: #047857;">Promedio Típico Central</span></td>
              </tr>
              <tr>
                <td><strong>-1.00 σ</strong></td>
                <td>-1.00</td>
                <td>85</td>
                <td>40</td>
                <td>7</td>
                <td>15.9%</td>
                <td>3</td>
                <td><span class="status-badge" style="background: rgba(245, 158, 11, 0.12); color: #b45309;">Promedio Normal-Bajo</span></td>
              </tr>
              <tr>
                <td><strong>-1.33 σ</strong></td>
                <td>-1.33</td>
                <td>80</td>
                <td>37</td>
                <td>6</td>
                <td>9.2%</td>
                <td>2</td>
                <td><span class="status-badge" style="background: rgba(249, 115, 22, 0.12); color: #c2410c;">Rango Límite Inferior</span></td>
              </tr>
              <tr>
                <td><strong>-2.00 σ</strong></td>
                <td>-2.00</td>
                <td>70</td>
                <td>30</td>
                <td>4</td>
                <td>2.3%</td>
                <td>1</td>
                <td><span class="status-badge" style="background: rgba(239, 68, 68, 0.12); color: #b91c1c;">Capacidad Intelectual Limítrofe / Borderline</span></td>
              </tr>
              <tr>
                <td><strong>-2.33 σ</strong></td>
                <td>-2.33</td>
                <td>65</td>
                <td>27</td>
                <td>3</td>
                <td>1.0%</td>
                <td>1</td>
                <td><span class="status-badge" style="background: rgba(220, 38, 38, 0.15); color: #991b1b;">Discapacidad Intelectual Leve</span></td>
              </tr>
              <tr>
                <td><strong>-3.00 σ</strong></td>
                <td>-3.00</td>
                <td>55</td>
                <td>20</td>
                <td>1</td>
                <td>0.1%</td>
                <td>1</td>
                <td><span class="status-badge" style="background: rgba(185, 28, 28, 0.2); color: #7f1d1d;">Discapacidad Intelectual Moderada / Grave</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECCIÓN 4: SESGOS Y FALACIAS -->
      <section class="orientation-block-card" id="sec-psi-sesgos">
        <span class="orientation-section-badge">PRECAUCIONES CLÍNICAS & METODOLÓGICAS</span>
        <h3 class="orientation-sec-title">4. Errores Críticos al Interpretar Baremos</h3>
        <p class="orientation-p">
          Anastasi & Urbina destacan las principales trampas en las que incurren evaluadores principiantes:
        </p>

        <div class="orientation-bullet-list">
          <li>
            <strong>Efecto Flynn y Antigüedad de los Baremos:</strong>
            El rendimiento intelectual promedio de las poblaciones humanas aumentó progresivamente a lo largo del siglo XX a un ritmo de aproximadamente 3 puntos de CI por década. Si se evalúa a un niño contemporáneo con un baremo estandarizado hace 25 años, su CI estará artificialmente inflado entre 7 y 8 puntos, pudiendo enmascarar una discapacidad intelectual o un retraso del desarrollo.
          </li>
          <li>
            <strong>Muestras Normativas No Representativas:</strong>
            Aplicar baremos españoles o norteamericanos a población latinoamericana sin estudios de adaptación cultural y validación local introduce un sesgo sistemático de medición (construct underrepresentation o construct-irrelevant variance).
          </li>
          <li>
            <strong>La Falacia de Reificación del CI:</strong>
            El CI no es una propiedad estática inscrita en los genes del sujeto como la estatura, sino un indicador muestral del rendimiento del individuo en un conjunto específico de tareas culturales en un momento temporal dado.
          </li>
        </div>
      </section>

      <!-- SECCIÓN 5: CITAS TEXTUALES VERIFICADAS -->
      <section class="orientation-block-card" id="sec-psi-citas">
        <span class="orientation-section-badge">FUENTES BIBLIOGRÁFICAS PRIMARIAS</span>
        <h3 class="orientation-sec-title">5. Citas Textuales Verificadas en Anastasi & Urbina (7.ª Edición)</h3>

        <div class="orientation-subcard">
          <div class="orientation-subcard-title">Anne Anastasi & Susana Urbina • Tests Psicológicos (Cap. 3, Pág. 52)</div>
          <p class="orientation-p" style="font-style: italic; border-left: 3px solid #3b82f6; padding-left: 0.8rem;">
            "Las puntuaciones crudas en cualquier prueba psicológica carecen de significado hasta que se evalúan en términos de datos interpretativos basados en normas [...] Un puntaje bruto de 65 en una prueba de vocabulario no nos dice si el examinado es brillante, promedio o deficiente. Sólo al comparar ese 65 con las puntuaciones de un grupo normativo adecuado podemos asignarle un significado clínico preciso."
          </p>
        </div>

        <div class="orientation-subcard">
          <div class="orientation-subcard-title">Anne Anastasi & Susana Urbina • Tests Psicológicos (Cap. 3, Pág. 68)</div>
          <p class="orientation-p" style="font-style: italic; border-left: 3px solid #3b82f6; padding-left: 0.8rem;">
            "La principal limitación de los rangos percentilares radica en la desigualdad de sus unidades, especialmente en los extremos de la distribución. Las diferencias entre rangos percentilares cercanos al centro son pequeñas en términos de diferencias en puntuaciones crudas, mientras que hacia los extremos de la distribución las diferencias entre rangos percentilares reflejan diferencias sustancialmente mayores en el desempeño real."
          </p>
        </div>

        <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
          <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
            📖 Citas Verificadas en la Biblioteca de PsiOS (Clic para abrir en Lector PDF Nativo):
          </div>
          <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="52" title="Consultar significado de puntuaciones brutas y baremos en Anastasi & Urbina">
            <span>📖</span>
            <span><strong>Anastasi & Urbina:</strong> Baremos y Puntuaciones Estándar (Pág. 52) →</span>
          </button>
          <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="68" title="Consultar distorsión de percentiles en Anastasi & Urbina">
            <span>📖</span>
            <span><strong>Anastasi & Urbina:</strong> Rangos Percentilares vs. Puntuaciones Z (Pág. 68) →</span>
          </button>
        </div>
      </section>

      <!-- BOTÓN INFERIOR DE NAVEGACIÓN -->
      <div style="display: flex; justify-content: flex-end; margin-top: 1rem;">
        <button type="button" class="pedagogical-link-btn" id="btn-bottom-goto-psicometria-eval" style="padding: 0.8rem 1.4rem;">
          <span>🔔 Ir al Protocolo con Campana de Gauss Interactiva</span>
          <span>→</span>
        </button>
      </div>
    </div>
  `,

  // =========================================================================
  // 2. PROTOCOLO CON CAMPANA DE GAUSS PSICOMÉTRICA INTERACTIVA
  // =========================================================================
  'evaluacion-interpretacion-perfiles-psicometricos': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill" style="background: rgba(99, 102, 241, 0.15); color: #4f46e5;">🔔 PROTOCOLO CLÍNICO & CAMPANA DE GAUSS DINÁMICA</span>
          <span class="modal-area-pill">📐 ÁREA: PSICOMETRÍA</span>
          <span class="modal-area-pill">🩺 ÁREA: EVALUACIÓN CLÍNICA</span>
        </div>
        <h2 class="orientation-main-title">Protocolo de Interpretación de Perfiles Psicométricos y Campana de Gauss Interactiva</h2>
        <p class="orientation-authors-meta">Psicometría Clínica • Curva Normal, Intervalos de Confianza al 95% y Directrices APA (Anastasi & Urbina Págs. 48-112)</p>
      </div>

      <div class="pedagogical-division-banner" style="background: rgba(99, 102, 241, 0.08); border-color: rgba(99, 102, 241, 0.25);">
        <div class="pedagogical-banner-text">
          💡 <strong>Regla de Oro en Psicometría Clínica:</strong> Toda puntuación psicológica debe concebirse no como un punto infinitesimal e inmutable, sino como una <strong>franja probabilística</strong> (Intervalo de Confianza) delimitada por el Error Estándar de Medición (EEM). Interactúe con la Campana de Gauss inferior para observar la conversión dinámica y su rango de error.
        </div>
        <button type="button" class="pedagogical-link-btn" id="btn-back-psicometria-def" style="background: #4f46e5;">
          <span>← Volver a Fundamentos de Medida & Baremos</span>
        </button>
      </div>

      <!-- WIDGET DE LA CAMPANA DE GAUSS INTERACTIVA -->
      <section class="orientation-block-card" id="sec-gauss-widget" style="border: 2px solid rgba(99, 102, 241, 0.3); background: rgba(255, 255, 255, 0.85);">
        <span class="orientation-section-badge" style="background: rgba(99, 102, 241, 0.12); color: #4338ca;">HERRAMIENTA VISUAL DINÁMICA</span>
        <h3 class="orientation-sec-title">Campana de Gauss Psicométrica Interactiva</h3>
        <p class="orientation-p">
          Mueva el control deslizante del CI Wechsler o ingrese cualquier valor para visualizar en tiempo real la ubicación en la distribución normal, el área bajo la curva, la banda del intervalo de confianza al 95% y las puntuaciones equivalentes en las demás escalas universales:
        </p>

        <!-- CONTROLES INTERACTIVOS -->
        <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; margin-bottom: 1.25rem; padding: 1rem; background: rgba(99, 102, 241, 0.05); border-radius: 14px; border: 1px solid rgba(99, 102, 241, 0.15);">
          <div style="flex: 1; min-width: 260px;">
            <label for="gauss-ci-slider" style="display: flex; justify-content: space-between; font-weight: 700; font-size: 0.88rem; color: var(--text-primary); margin-bottom: 0.4rem;">
              <span>Cociente Intelectual (Escala Wechsler):</span>
              <span id="gauss-slider-val-label" style="color: #4f46e5; font-size: 1.1rem; font-weight: 800;">CI = 100</span>
            </label>
            <input type="range" id="gauss-ci-slider" min="40" max="160" step="1" value="100" style="width: 100%; accent-color: #4f46e5; cursor: pointer;">
          </div>

          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <label for="gauss-ci-input" style="font-size: 0.84rem; font-weight: 700; color: var(--text-secondary);">Entrada Manual:</label>
            <input type="number" id="gauss-ci-input" min="40" max="160" value="100" style="width: 80px; padding: 0.45rem 0.6rem; border-radius: 8px; border: 1px solid rgba(99, 102, 241, 0.3); font-weight: 700; font-size: 1rem; text-align: center; color: #4338ca;">
          </div>
        </div>

        <!-- BOTONES PRESET RÁPIDOS -->
        <div style="display: flex; flex-wrap: wrap; gap: 0.45rem; margin-bottom: 1.25rem;">
          <button type="button" class="gauss-preset-btn" data-ci="65" style="padding: 0.35rem 0.75rem; border-radius: 8px; border: 1px solid rgba(239, 68, 68, 0.3); background: rgba(239, 68, 68, 0.08); color: #b91c1c; font-size: 0.78rem; font-weight: 700; cursor: pointer;">CI 65 (Discapacidad Leve)</button>
          <button type="button" class="gauss-preset-btn" data-ci="75" style="padding: 0.35rem 0.75rem; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3); background: rgba(245, 158, 11, 0.08); color: #b45309; font-size: 0.78rem; font-weight: 700; cursor: pointer;">CI 75 (Limítrofe / Borderline)</button>
          <button type="button" class="gauss-preset-btn" data-ci="90" style="padding: 0.35rem 0.75rem; border-radius: 8px; border: 1px solid rgba(59, 130, 246, 0.3); background: rgba(59, 130, 246, 0.08); color: #1d4ed8; font-size: 0.78rem; font-weight: 700; cursor: pointer;">CI 90 (Promedio Bajo)</button>
          <button type="button" class="gauss-preset-btn" data-ci="100" style="padding: 0.35rem 0.75rem; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.3); background: rgba(16, 185, 129, 0.08); color: #047857; font-size: 0.78rem; font-weight: 700; cursor: pointer;">CI 100 (Promedio Exacto μ)</button>
          <button type="button" class="gauss-preset-btn" data-ci="115" style="padding: 0.35rem 0.75rem; border-radius: 8px; border: 1px solid rgba(59, 130, 246, 0.3); background: rgba(59, 130, 246, 0.08); color: #1d4ed8; font-size: 0.78rem; font-weight: 700; cursor: pointer;">CI 115 (Promedio Alto +1σ)</button>
          <button type="button" class="gauss-preset-btn" data-ci="130" style="padding: 0.35rem 0.75rem; border-radius: 8px; border: 1px solid rgba(147, 51, 234, 0.3); background: rgba(147, 51, 234, 0.08); color: #6b21a8; font-size: 0.78rem; font-weight: 700; cursor: pointer;">CI 130 (Superior +2σ)</button>
          <button type="button" class="gauss-preset-btn" data-ci="145" style="padding: 0.35rem 0.75rem; border-radius: 8px; border: 1px solid rgba(168, 85, 247, 0.3); background: rgba(168, 85, 247, 0.08); color: #7e22ce; font-size: 0.78rem; font-weight: 700; cursor: pointer;">CI 145 (Muy Superior / Genialidad)</button>
        </div>

        <!-- SVG DE LA CAMPANA DE GAUSS -->
        <div style="width: 100%; overflow-x: auto; background: #ffffff; border-radius: 14px; padding: 0.5rem; box-shadow: inset 0 2px 6px rgba(0,0,0,0.03); border: 1px solid rgba(0,0,0,0.08);">
          <svg id="gauss-svg-canvas" viewBox="0 0 900 420" width="100%" height="auto" style="display: block; max-height: 400px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
            <defs>
              <linearGradient id="gradCurvaNormal" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#4f46e5" stop-opacity="0.35" />
                <stop offset="100%" stop-color="#4f46e5" stop-opacity="0.02" />
              </linearGradient>
              <linearGradient id="gradZonaCentro" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.25" />
                <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.05" />
              </linearGradient>
              <filter id="shadowMarker" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#4f46e5" flood-opacity="0.4"/>
              </filter>
            </defs>

            <!-- ZONAS DE DESVIACIÓN TÍPICA COLOREADAS -->
            <!-- -3σ a -2σ (2.1%) -->
            <path d="M 150,317.4 Q 200,305 250,287.5 L 250,320 L 150,320 Z" fill="rgba(239, 68, 68, 0.12)" />
            <!-- -2σ a -1σ (13.6%) -->
            <path d="M 250,287.5 Q 300,240 350,174.5 L 350,320 L 250,320 Z" fill="rgba(245, 158, 11, 0.12)" />
            <!-- -1σ a 0 (34.1%) -->
            <path d="M 350,174.5 Q 400,105 450,80 L 450,320 L 350,320 Z" fill="rgba(59, 130, 246, 0.15)" />
            <!-- 0 a +1σ (34.1%) -->
            <path d="M 450,80 Q 500,105 550,174.5 L 550,320 L 450,320 Z" fill="rgba(59, 130, 246, 0.15)" />
            <!-- +1σ a +2σ (13.6%) -->
            <path d="M 550,174.5 Q 600,240 650,287.5 L 650,320 L 550,320 Z" fill="rgba(99, 102, 241, 0.14)" />
            <!-- +2σ a +3σ (2.1%) -->
            <path d="M 650,287.5 Q 700,305 750,317.4 L 750,320 L 650,320 Z" fill="rgba(147, 51, 234, 0.14)" />

            <!-- LÍNEA BASE -->
            <line x1="100" y1="320" x2="800" y2="320" stroke="#94a3b8" stroke-width="2" />

            <!-- LÍNEAS VERTICALES DE DESVIACIÓN TÍPICA -->
            <line x1="150" y1="320" x2="150" y2="315" stroke="#cbd5e1" stroke-width="1.5" />
            <line x1="250" y1="320" x2="250" y2="288" stroke="#cbd5e1" stroke-dasharray="3,3" stroke-width="1" />
            <line x1="350" y1="320" x2="350" y2="175" stroke="#93c5fd" stroke-dasharray="3,3" stroke-width="1.5" />
            <line x1="450" y1="320" x2="450" y2="80" stroke="#3b82f6" stroke-width="2" />
            <line x1="550" y1="320" x2="550" y2="175" stroke="#93c5fd" stroke-dasharray="3,3" stroke-width="1.5" />
            <line x1="650" y1="320" x2="650" y2="288" stroke="#cbd5e1" stroke-dasharray="3,3" stroke-width="1" />
            <line x1="750" y1="320" x2="750" y2="315" stroke="#cbd5e1" stroke-width="1.5" />

            <!-- CONTORNO CONTINUO DE LA CAMPANA DE GAUSS -->
            <path d="M 100,319 C 140,318 190,305 250,287.5 C 310,270 380,120 450,80 C 520,120 590,270 650,287.5 C 710,305 760,318 800,319" 
                  fill="url(#gradCurvaNormal)" stroke="#4f46e5" stroke-width="3" stroke-linecap="round" />

            <!-- PORCENTAJES DE ÁREA BAJO LA CURVA -->
            <text x="200" y="310" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">2.14%</text>
            <text x="300" y="275" text-anchor="middle" font-size="11" font-weight="700" fill="#d97706">13.59%</text>
            <text x="400" y="210" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">34.13%</text>
            <text x="500" y="210" text-anchor="middle" font-size="12" font-weight="700" fill="#2563eb">34.13%</text>
            <text x="600" y="275" text-anchor="middle" font-size="11" font-weight="700" fill="#7c3aed">13.59%</text>
            <text x="700" y="310" text-anchor="middle" font-size="11" font-weight="700" fill="#9333ea">2.14%</text>

            <!-- BANDA DEL INTERVALO DE CONFIANZA AL 95% (DINÁMICO) -->
            <rect id="gauss-ci-band-rect" x="408" y="70" width="84" height="250" fill="rgba(99, 102, 241, 0.16)" rx="6" />

            <!-- AGUJA / MARCADOR MÓVIL DEL PACIENTE -->
            <g id="gauss-marker-group" transform="translate(450, 0)">
              <line id="gauss-needle-line" x1="0" y1="50" x2="0" y2="320" stroke="#4f46e5" stroke-width="3" stroke-dasharray="4,2" />
              <circle id="gauss-needle-circle" cx="0" cy="80" r="8" fill="#4f46e5" stroke="#ffffff" stroke-width="2.5" filter="url(#shadowMarker)" />
              <g id="gauss-needle-tag" transform="translate(0, 38)">
                <rect x="-40" y="-18" width="80" height="22" rx="6" fill="#1e1b4b" />
                <text id="gauss-needle-tag-text" x="0" y="-3" text-anchor="middle" font-size="11" font-weight="800" fill="#ffffff">CI 100</text>
              </g>
            </g>

            <!-- ETIQUETAS DEL EJE X: ESCALAS MULTIPLES -->
            <!-- Desviación Típica (Z) -->
            <text x="50" y="340" font-size="11" font-weight="700" fill="#64748b">Z (DT):</text>
            <text x="150" y="340" text-anchor="middle" font-size="11" font-weight="600" fill="#64748b">-3σ</text>
            <text x="250" y="340" text-anchor="middle" font-size="11" font-weight="600" fill="#64748b">-2σ</text>
            <text x="350" y="340" text-anchor="middle" font-size="11" font-weight="600" fill="#64748b">-1σ</text>
            <text x="450" y="340" text-anchor="middle" font-size="11" font-weight="800" fill="#1e293b">0 (μ)</text>
            <text x="550" y="340" text-anchor="middle" font-size="11" font-weight="600" fill="#64748b">+1σ</text>
            <text x="650" y="340" text-anchor="middle" font-size="11" font-weight="600" fill="#64748b">+2σ</text>
            <text x="750" y="340" text-anchor="middle" font-size="11" font-weight="600" fill="#64748b">+3σ</text>

            <!-- CI Wechsler -->
            <text x="50" y="362" font-size="11" font-weight="700" fill="#4f46e5">CI Wechsler:</text>
            <text x="150" y="362" text-anchor="middle" font-size="11" font-weight="700" fill="#4f46e5">55</text>
            <text x="250" y="362" text-anchor="middle" font-size="11" font-weight="700" fill="#4f46e5">70</text>
            <text x="350" y="362" text-anchor="middle" font-size="11" font-weight="700" fill="#4f46e5">85</text>
            <text x="450" y="362" text-anchor="middle" font-size="12" font-weight="800" fill="#312e81">100</text>
            <text x="550" y="362" text-anchor="middle" font-size="11" font-weight="700" fill="#4f46e5">115</text>
            <text x="650" y="362" text-anchor="middle" font-size="11" font-weight="700" fill="#4f46e5">130</text>
            <text x="750" y="362" text-anchor="middle" font-size="11" font-weight="700" fill="#4f46e5">145</text>

            <!-- Puntuación T -->
            <text x="50" y="384" font-size="11" font-weight="700" fill="#0891b2">Puntaje T:</text>
            <text x="150" y="384" text-anchor="middle" font-size="11" font-weight="600" fill="#0891b2">20</text>
            <text x="250" y="384" text-anchor="middle" font-size="11" font-weight="600" fill="#0891b2">30</text>
            <text x="350" y="384" text-anchor="middle" font-size="11" font-weight="600" fill="#0891b2">40</text>
            <text x="450" y="384" text-anchor="middle" font-size="11" font-weight="800" fill="#0e7490">50</text>
            <text x="550" y="384" text-anchor="middle" font-size="11" font-weight="600" fill="#0891b2">60</text>
            <text x="650" y="384" text-anchor="middle" font-size="11" font-weight="600" fill="#0891b2">70</text>
            <text x="750" y="384" text-anchor="middle" font-size="11" font-weight="600" fill="#0891b2">80</text>

            <!-- Rangos Percentilares -->
            <text x="50" y="406" font-size="11" font-weight="700" fill="#059669">Percentil (PR):</text>
            <text x="150" y="406" text-anchor="middle" font-size="10" font-weight="600" fill="#059669">0.1%</text>
            <text x="250" y="406" text-anchor="middle" font-size="10" font-weight="600" fill="#059669">2.3%</text>
            <text x="350" y="406" text-anchor="middle" font-size="10" font-weight="600" fill="#059669">15.9%</text>
            <text x="450" y="406" text-anchor="middle" font-size="11" font-weight="800" fill="#047857">50.0%</text>
            <text x="550" y="406" text-anchor="middle" font-size="10" font-weight="600" fill="#059669">84.1%</text>
            <text x="650" y="406" text-anchor="middle" font-size="10" font-weight="600" fill="#059669">97.7%</text>
            <text x="750" y="406" text-anchor="middle" font-size="10" font-weight="600" fill="#059669">99.9%</text>
          </svg>
        </div>

        <!-- DASHBOARD DE RESULTADOS EN TIEMPO REAL -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.85rem; margin-top: 1.25rem;">
          <div style="background: rgba(99, 102, 241, 0.08); border: 1px solid rgba(99, 102, 241, 0.2); border-radius: 12px; padding: 0.85rem; text-align: center;">
            <div style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: #4338ca; margin-bottom: 0.2rem;">Puntuación Z</div>
            <div id="gauss-val-z" style="font-size: 1.4rem; font-weight: 800; color: #312e81;">0.00</div>
            <div style="font-size: 0.72rem; color: var(--text-tertiary);">Media = 0, DT = 1</div>
          </div>

          <div style="background: rgba(8, 145, 178, 0.08); border: 1px solid rgba(8, 145, 178, 0.2); border-radius: 12px; padding: 0.85rem; text-align: center;">
            <div style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: #0891b2; margin-bottom: 0.2rem;">Puntuación T</div>
            <div id="gauss-val-t" style="font-size: 1.4rem; font-weight: 800; color: #0e7490;">50.0</div>
            <div style="font-size: 0.72rem; color: var(--text-tertiary);">Media = 50, DT = 10</div>
          </div>

          <div style="background: rgba(5, 150, 105, 0.08); border: 1px solid rgba(5, 150, 105, 0.2); border-radius: 12px; padding: 0.85rem; text-align: center;">
            <div style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: #059669; margin-bottom: 0.2rem;">Rango Percentil (PR)</div>
            <div id="gauss-val-pr" style="font-size: 1.4rem; font-weight: 800; color: #047857;">50.0 %</div>
            <div style="font-size: 0.72rem; color: var(--text-tertiary);">Supera al 50.0%</div>
          </div>

          <div style="background: rgba(147, 51, 234, 0.08); border: 1px solid rgba(147, 51, 234, 0.2); border-radius: 12px; padding: 0.85rem; text-align: center;">
            <div style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: #7c3aed; margin-bottom: 0.2rem;">Eneatipo / Stanine</div>
            <div id="gauss-val-stanine" style="font-size: 1.4rem; font-weight: 800; color: #581c87;">5</div>
            <div style="font-size: 0.72rem; color: var(--text-tertiary);">Escala del 1 al 9</div>
          </div>

          <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: 12px; padding: 0.85rem; text-align: center;">
            <div style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: #d97706; margin-bottom: 0.2rem;">Intervalo 95% (EEM 3.2)</div>
            <div id="gauss-val-ci95" style="font-size: 1.25rem; font-weight: 800; color: #b45309;">94 - 106</div>
            <div style="font-size: 0.72rem; color: var(--text-tertiary);">Puntuación Verdadera</div>
          </div>
        </div>

        <!-- CLASIFICACIÓN DIAGNÓSTICA CUALITATIVA -->
        <div style="margin-top: 1rem; padding: 0.85rem 1.15rem; background: #ffffff; border: 1px solid rgba(0,0,0,0.08); border-radius: 12px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
          <span style="font-size: 0.88rem; font-weight: 700; color: var(--text-secondary);">Clasificación Cualitativa Normativa:</span>
          <span id="gauss-val-diag" style="font-size: 0.95rem; font-weight: 800; padding: 0.35rem 0.85rem; border-radius: 8px; background: rgba(16, 185, 129, 0.15); color: #047857;">
            Promedio / Rango Normal Típico
          </span>
        </div>
      </section>

      <!-- SECCIÓN DE PROTOCOLO DE INTERPRETACIÓN CLÍNICA EN 5 FASES -->
      <section class="orientation-block-card" id="sec-fases-protocolo">
        <span class="orientation-section-badge">METODOLOGÍA EN 5 ETAPAS</span>
        <h3 class="orientation-sec-title">Protocolo Estructurado de Interpretación de Perfiles</h3>
        <p class="orientation-p">
          Para garantizar una lectura rigurosa de cualquier batería psicométrica (ej. WISC-V, WAIS-IV, MMPI-2, BASC-3), se debe ejecutar estrictamente la siguiente secuencia clínica:
        </p>

        <div class="orientation-subcard">
          <div class="orientation-subcard-title">Fase 1: Verificación de Validez y Calidad del Protocolo</div>
          <p class="orientation-p">
            Antes de calcular puntuaciones, examine:
          </p>
          <ul class="orientation-bullet-list">
            <li><strong>Condiciones físicas y motivacionales:</strong> Fatiga, ansiedad extrema, negativismo o sospecha de simulación.</li>
            <li><strong>Escalas de Validez y Control:</strong> Ítems en blanco, aquiescencia o inconsistencia de respuestas (ej. VRIN/TRIN en pruebas de personalidad).</li>
            <li><strong>Adecuación del Baremo:</strong> Confirmar que la edad cronológica exacta (años y meses) corresponda a la tabla utilizada.</li>
          </ul>
        </div>

        <div class="orientation-subcard">
          <div class="orientation-subcard-title">Fase 2: Interpretación del Índice Compuesto Global</div>
          <p class="orientation-p">
            Evalúe el Coeficiente Intelectual Total (CIT) o el Índice General de la prueba. <strong>Regla de homogeneidad:</strong> Si la discrepancia entre el índice más alto y el más bajo supera 1.5 desviaciones típicas (23 puntos de CI), el CIT no representa una entidad unitaria válida y debe interpretarse como un promedio artefacto, priorizando los índices específicos (Comprensión Verbal, Razonamiento Visoespacial, etc.).
          </p>
        </div>

        <div class="orientation-subcard">
          <div class="orientation-subcard-title">Fase 3: Análisis de Discrepancias Intraindividuales (Puntos Fuertes y Débiles)</div>
          <p class="orientation-p">
            Compare el rendimiento de cada subescala con la media propia del sujeto (análisis ipsativo). Una fortaleza o debilidad solo se considera estadísticamente significativa si la diferencia excede el valor crítico al nivel de significación del 5% (p &lt; 0.05), calculado mediante el Error Estándar de la Diferencia (EED).
          </p>
        </div>

        <div class="orientation-subcard">
          <div class="orientation-subcard-title">Fase 4: Formulación Diagnóstica Cuantitativa y Cualitativa</div>
          <p class="orientation-p">
            Nunca diagnostique basándose exclusivamente en una puntuación aislada. En discapacidad intelectual (DSM-5), el criterio exige déficit en el funcionamiento adaptativo en dominios conceptual, social y práctico, además del CI &lt; 70 ± 5.
          </p>
        </div>

        <div class="orientation-subcard">
          <div class="orientation-subcard-title">Fase 5: Redacción del Informe según Estándares APA</div>
          <p class="orientation-p">
            Todo reporte profesional debe expresar las puntuaciones obligatoriamente acompañadas de su intervalo de confianza al 95%, su percentil de referencia y una descripción explicativa libre de tecnicismos incomprensibles para el paciente o su familia.
          </p>
        </div>
      </section>

      <!-- CITAS A LIBRO -->
      <section class="orientation-block-card">
        <span class="orientation-section-badge">REFERENCIA BIBLIOGRÁFICA</span>
        <h3 class="orientation-sec-title">Citas Verificadas en Anastasi & Urbina (7.ª Edición)</h3>
        <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; padding: 0.85rem 1rem; background: rgba(99, 102, 241, 0.06); border: 1px solid rgba(99, 102, 241, 0.2); border-radius: 12px;">
          <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #4338ca; margin-bottom: 0.2rem;">
            📖 Cita en Anastasi & Urbina:
          </div>
          <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="98" title="Consultar interpretación de perfiles y error estándar en Anastasi & Urbina">
            <span>📖</span>
            <span><strong>Anastasi & Urbina:</strong> Interpretación de Perfiles y Curva Normal (Pág. 98) →</span>
          </button>
        </div>
      </section>

      <div style="display: flex; justify-content: flex-start; margin-top: 1rem;">
        <button type="button" class="pedagogical-link-btn" id="btn-bottom-back-psicometria-def" style="background: #4f46e5; padding: 0.8rem 1.4rem;">
          <span>← Volver a Definición: Baremos & Medida</span>
        </button>
      </div>
    </div>
  `,

  // =========================================================================
  // 3. CONFIABILIDAD Y ERROR ESTÁNDAR DE MEDICIÓN (CONCEPTO)
  // =========================================================================
  'confiabilidad-error-estandar-medicion': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">🎯 PROPIEDADES PSICOMÉTRICAS & TEORÍA CLÁSICA</span>
          <span class="modal-area-pill">📐 ÁREA: PSICOMETRÍA</span>
          <span class="modal-area-pill">🔬 ÁREA: METODOLOGÍA</span>
        </div>
        <h2 class="orientation-main-title">Confiabilidad Psicométrica, Consistencia y Error Estándar de Medición (EEM)</h2>
        <p class="orientation-authors-meta">Anne Anastasi & Susana Urbina • Tests Psicológicos (7.ª Edición, Cap. 4, Págs. 84-112) • Charles Spearman</p>
      </div>

      <div class="pedagogical-division-banner">
        <div class="pedagogical-banner-text">
          💡 <strong>Fundamento Metodológico:</strong> La confiabilidad de un test responde a la pregunta crucial: <em>"¿Qué proporción de la varianza en las puntuaciones de los sujetos se debe a diferencias verdaderas en el rasgo y cuánto es mero ruido de error no sistemático?"</em>
        </div>
        <button type="button" class="pedagogical-link-btn" id="btn-goto-eem-eval">
          <span>🧮 Ir a Calculadora de EEM & Protocolo de Precisión</span>
          <span>→</span>
        </button>
      </div>

      <!-- SECCIÓN 1: EL MODELO CLÁSICO DE SPEARMAN -->
      <section class="orientation-block-card">
        <span class="orientation-section-badge">TEORÍA CLÁSICA DE LOS TESTS (TCT)</span>
        <h3 class="orientation-sec-title">1. El Modelo Lineal Clásico de Spearman</h3>
        <p class="orientation-lead-p">
          En la Teoría Clásica de los Tests formulada por Charles Spearman, toda puntuación observada (X) se descompone en dos sumandos hipotéticos:
        </p>

        <div style="background: rgba(0,0,0,0.03); border: 1px solid rgba(0,0,0,0.08); border-radius: 12px; padding: 1.1rem; text-align: center; margin: 1rem 0;">
          <div style="font-size: 1.5rem; font-weight: 800; color: #1e293b; letter-spacing: 0.05em;">X = V + e</div>
          <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.4rem;">
            <strong>X</strong> (Puntuación Observada) = <strong>V</strong> (Puntuación Verdadera Latente) + <strong>e</strong> (Error de Medición No Sistemático)
          </div>
        </div>

        <p class="orientation-p">
          <strong>Supuestos Axiomáticos de Spearman:</strong>
        </p>
        <ul class="orientation-bullet-list">
          <li><strong>Esperanza matemática del error nula:</strong> <code>E(e) = 0</code>. Los errores se distribuyen aleatoriamente con media cero; en infinitas mediciones los errores positivos y negativos se cancelan.</li>
          <li><strong>Independencia entre error y puntuación verdadera:</strong> <code>r(V, e) = 0</code>. El instrumento no comete más errores con personas de nivel alto o bajo.</li>
          <li><strong>Independencia entre errores de pruebas distintas:</strong> <code>r(e1, e2) = 0</code>. Los factores fortuitos que afectan una medición no correlacionan con los de otra aplicación.</li>
        </ul>
      </section>

      <!-- SECCIÓN 2: MÉTODOS DE ESTIMACIÓN -->
      <section class="orientation-block-card">
        <span class="orientation-section-badge">PROCEDIMIENTOS EMPÍRICOS</span>
        <h3 class="orientation-sec-title">2. Los Cuatro Métodos para Estimar la Confiabilidad</h3>

        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">⏳</span>
              <span class="dim-name">Estabilidad Temporal (Test-Retest)</span>
            </div>
            <p class="orientation-p">
              Se administra la misma prueba en dos momentos temporales distintos a la misma muestra y se calcula la correlación de Pearson (r).
            </p>
            <div class="orientation-subcard">
              <div class="orientation-subcard-title">Fuentes de Error Controladas</div>
              <ul class="orientation-bullet-list">
                <li>Sensible a fluctuaciones transitorias del examinado (enfermedad, fatiga, estrés).</li>
                <li><strong>Riesgo:</strong> Efecto de práctica o aprendizaje si el intervalo es muy breve; maduración si es muy prolongado.</li>
              </ul>
            </div>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">👥</span>
              <span class="dim-name">Formas Alternas / Paralelas</span>
            </div>
            <p class="orientation-p">
              Se crean dos formas equivalentes del test con el mismo número de ítems, dificultad y formato, administradas de forma sucesiva.
            </p>
            <div class="orientation-subcard">
              <div class="orientation-subcard-title">Fuentes de Error Controladas</div>
              <ul class="orientation-bullet-list">
                <li>Muestreo de reactivos o contenido.</li>
                <li>Elimina la memorización de respuestas específicas.</li>
              </ul>
            </div>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">🧩</span>
              <span class="dim-name">Consistencia Interna (Alfa & Omega)</span>
            </div>
            <p class="orientation-p">
              Evalúa en una sola administración el grado en que todos los ítems miden el mismo constructo de forma coherente.
            </p>
            <div class="orientation-subcard">
              <div class="orientation-subcard-title">Coeficientes Clave</div>
              <ul class="orientation-bullet-list">
                <li><strong>Alfa de Cronbach (α):</strong> Promedio de todas las divisiones posibles por mitades. Sensible a la longitud de la prueba.</li>
                <li><strong>Omega de McDonald (ω):</strong> Más robusto ante la violación de tau-equivalencia.</li>
                <li><strong>KR-20:</strong> Versión para ítems dicotómicos (Acierto/Error).</li>
              </ul>
            </div>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">⚖️</span>
              <span class="dim-name">Confiabilidad Interjueces (Kappa)</span>
            </div>
            <p class="orientation-p">
              Dos o más evaluadores independientes corrigen o califican los mismos protocolos clínicos o registros conductuales.
            </p>
            <div class="orientation-subcard">
              <div class="orientation-subcard-title">Coeficientes Clave</div>
              <ul class="orientation-bullet-list">
                <li><strong>Kappa de Cohen (κ):</strong> Para datos categoriales corregidos por concordancia debida al azar.</li>
                <li><strong>Coeficiente de Correlación Intraclase (ICC):</strong> Para medidas cuantitativas continuas.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- SECCIÓN 3: ERROR ESTÁNDAR DE MEDICIÓN -->
      <section class="orientation-block-card">
        <span class="orientation-section-badge">PRECISIÓN DE LA PUNTUACIÓN INDIVIDUAL</span>
        <h3 class="orientation-sec-title">3. El Error Estándar de Medición (EEM)</h3>
        <p class="orientation-lead-p">
          El coeficiente de confiabilidad (rxx) indica la consistencia general del test en un grupo, pero no permite saber el error en la puntuación de un paciente concreto. Para esto, Anastasi & Urbina enfatizan el uso del <strong>Error Estándar de Medición (EEM)</strong>:
        </p>

        <div style="background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px; padding: 1rem; text-align: center; margin: 1rem 0;">
          <div style="font-size: 1.4rem; font-weight: 800; color: #1d4ed8;">EEM = s · √(1 - rxx)</div>
          <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.35rem;">
            Donde <strong>s</strong> es la desviación típica de la prueba y <strong>rxx</strong> es el coeficiente de confiabilidad.
          </div>
        </div>

        <p class="orientation-p">
          <strong>Implicaciones clínicas fundamentales:</strong>
        </p>
        <ul class="orientation-bullet-list">
          <li>Si un test tiene <em>s = 15</em> y una excelente confiabilidad <em>rxx = 0.96</em>, su <code>EEM = 15 · √(1 - 0.96) = 15 · 0.20 = 3.0 puntos</code>.</li>
          <li>El intervalo de confianza al 95% para un CI de 100 será <code>100 ± 1.96 · 3.0 = [94.1, 105.9]</code>.</li>
          <li>Si el test tuviera una confiabilidad mediocre de <em>rxx = 0.70</em>, el <code>EEM = 15 · √(1 - 0.70) = 15 · 0.548 = 8.2 puntos</code>, y el intervalo al 95% sería <code>[83.9, 116.1]</code>, ¡una franja de 32 puntos totalmente inútil para la toma de decisiones clínicas!</li>
        </ul>

        <div class="orientation-diff-note">
          <strong>Regla de Decisión de Anastasi & Urbina:</strong> Ninguna decisión clínica individual que altere la vida del paciente (ej. escolarización especial, incapacidad legal, selección laboral) debe basarse en pruebas con coeficientes de confiabilidad inferiores a <strong>0.90</strong>.
        </div>
      </section>

      <!-- CITAS -->
      <section class="orientation-block-card">
        <span class="orientation-section-badge">BIBLIOGRAFÍA VERIFICADA</span>
        <h3 class="orientation-sec-title">Citas Textuales en Anastasi & Urbina (7.ª Edición)</h3>
        <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
          <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
            📖 Citas en Anastasi & Urbina:
          </div>
          <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="88" title="Consultar cálculo de confiabilidad y error estándar en Anastasi & Urbina">
            <span>📖</span>
            <span><strong>Anastasi & Urbina:</strong> Estimación de Confiabilidad & EEM (Pág. 88) →</span>
          </button>
          <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="95" title="Consultar confiabilidad interjueces y consistencia interna en Anastasi & Urbina">
            <span>📖</span>
            <span><strong>Anastasi & Urbina:</strong> Confiabilidad Interjueces y Alfa (Pág. 95) →</span>
          </button>
        </div>
      </section>

      <div style="display: flex; justify-content: flex-end; margin-top: 1rem;">
        <button type="button" class="pedagogical-link-btn" id="btn-bottom-goto-eem-eval" style="padding: 0.8rem 1.4rem;">
          <span>🧮 Ir a la Calculadora Dinámica de EEM</span>
          <span>→</span>
        </button>
      </div>
    </div>
  `,

  // =========================================================================
  // 4. PROTOCOLO Y CALCULADORA DE EEM (PROTOCOLO)
  // =========================================================================
  'evaluacion-estimacion-error-estandar-eem': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill" style="background: rgba(16, 185, 129, 0.15); color: #047857;">🧮 PROTOCOLO METODOLÓGICO & CALCULADORA DINÁMICA</span>
          <span class="modal-area-pill">📐 ÁREA: PSICOMETRÍA</span>
          <span class="modal-area-pill">🩺 ÁREA: EVALUACIÓN CLÍNICA</span>
        </div>
        <h2 class="orientation-main-title">Protocolo Clínico de Estimación de Precisión y Calculadora de EEM</h2>
        <p class="orientation-authors-meta">Cálculo de Error Estándar e Intervalos de Confianza según Normas APA (Anastasi & Urbina Págs. 88, 98)</p>
      </div>

      <div class="pedagogical-division-banner" style="background: rgba(16, 185, 129, 0.08); border-color: rgba(16, 185, 129, 0.25);">
        <div class="pedagogical-banner-text">
          💡 <strong>Calculadora Psicométrica en Tiempo Real:</strong> Modifique la puntuación observada, la desviación típica y el coeficiente de confiabilidad para estimar instantáneamente el EEM y los tres intervalos de confianza normativos (90%, 95% y 99%).
        </div>
        <button type="button" class="pedagogical-link-btn" id="btn-back-eem-def" style="background: #059669;">
          <span>← Volver a Fundamentos de Confiabilidad</span>
        </button>
      </div>

      <!-- CALCULADORA DE EEM -->
      <section class="orientation-block-card" style="border: 2px solid rgba(16, 185, 129, 0.3); background: rgba(255, 255, 255, 0.9);">
        <span class="orientation-section-badge" style="background: rgba(16, 185, 129, 0.12); color: #047857;">CALCULADORA DINÁMICA</span>
        <h3 class="orientation-sec-title">Estimador de Error Estándar de Medición</h3>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-bottom: 1.25rem; padding: 1.1rem; background: rgba(16, 185, 129, 0.05); border-radius: 14px; border: 1px solid rgba(16, 185, 129, 0.15);">
          <div>
            <label for="eem-calc-score" style="display: block; font-size: 0.84rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">
              Puntuación Observada (X):
            </label>
            <input type="number" id="eem-calc-score" value="100" style="width: 100%; padding: 0.5rem; border-radius: 8px; border: 1px solid rgba(0,0,0,0.15); font-weight: 700; font-size: 1rem;">
          </div>

          <div>
            <label for="eem-calc-sd" style="display: block; font-size: 0.84rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">
              Desviación Típica de la Escala (s):
            </label>
            <input type="number" id="eem-calc-sd" value="15" style="width: 100%; padding: 0.5rem; border-radius: 8px; border: 1px solid rgba(0,0,0,0.15); font-weight: 700; font-size: 1rem;">
            <div style="font-size: 0.72rem; color: var(--text-tertiary); margin-top: 0.2rem;">Wechsler=15, T=10, Subtests=3</div>
          </div>

          <div>
            <label for="eem-calc-rel" style="display: block; font-size: 0.84rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">
              Confiabilidad del Test (rxx): <span id="eem-calc-rel-val" style="color: #047857; font-weight: 800;">0.94</span>
            </label>
            <input type="range" id="eem-calc-rel" min="0.50" max="0.99" step="0.01" value="0.94" style="width: 100%; accent-color: #059669; cursor: pointer;">
          </div>
        </div>

        <!-- TARJETAS DE RESULTADOS -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.85rem;">
          <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 12px; padding: 1rem; text-align: center;">
            <div style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: #047857; margin-bottom: 0.2rem;">Error Estándar (EEM)</div>
            <div id="eem-out-val" style="font-size: 1.6rem; font-weight: 800; color: #065f46;">3.67</div>
            <div style="font-size: 0.72rem; color: var(--text-tertiary);">Margen elemental de error</div>
          </div>

          <div style="background: rgba(59, 130, 246, 0.08); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px; padding: 1rem; text-align: center;">
            <div style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: #1d4ed8; margin-bottom: 0.2rem;">Intervalo 90% (Z = 1.645)</div>
            <div id="eem-out-ci90" style="font-size: 1.3rem; font-weight: 800; color: #1e40af;">94 - 106</div>
            <div style="font-size: 0.72rem; color: var(--text-tertiary);">Pruebas de cribado</div>
          </div>

          <div style="background: rgba(99, 102, 241, 0.08); border: 1px solid rgba(99, 102, 241, 0.2); border-radius: 12px; padding: 1rem; text-align: center;">
            <div style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: #4338ca; margin-bottom: 0.2rem;">Intervalo 95% (Z = 1.960)</div>
            <div id="eem-out-ci95" style="font-size: 1.3rem; font-weight: 800; color: #312e81;">93 - 107</div>
            <div style="font-size: 0.72rem; color: var(--text-tertiary);">Estándar clínico oficial APA</div>
          </div>

          <div style="background: rgba(147, 51, 234, 0.08); border: 1px solid rgba(147, 51, 234, 0.2); border-radius: 12px; padding: 1rem; text-align: center;">
            <div style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: #7c3aed; margin-bottom: 0.2rem;">Intervalo 99% (Z = 2.576)</div>
            <div id="eem-out-ci99" style="font-size: 1.3rem; font-weight: 800; color: #581c87;">91 - 109</div>
            <div style="font-size: 0.72rem; color: var(--text-tertiary);">Forense / Peritajes</div>
          </div>
        </div>

        <div style="margin-top: 1rem; padding: 0.85rem 1.15rem; background: #ffffff; border: 1px solid rgba(0,0,0,0.08); border-radius: 12px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
          <span style="font-size: 0.88rem; font-weight: 700; color: var(--text-secondary);">Idoneidad Psicométrica para Diagnóstico Individual:</span>
          <span id="eem-out-verdict" style="font-size: 0.95rem; font-weight: 800; padding: 0.35rem 0.85rem; border-radius: 8px; background: rgba(16, 185, 129, 0.15); color: #047857;">
            Excelente Confiabilidad (rxx ≥ 0.90) - Apta para Decisiones Clínicas
          </span>
        </div>
      </section>

      <!-- CITAS VERIFICADAS -->
      <section class="orientation-block-card">
        <span class="orientation-section-badge">BIBLIOGRAFÍA VERIFICADA</span>
        <h3 class="orientation-sec-title">Citas Textuales en Anastasi & Urbina (7.ª Edición)</h3>
        <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; padding: 0.85rem 1rem; background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 12px;">
          <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #047857; margin-bottom: 0.2rem;">
            📖 Cita Verificada en Anastasi & Urbina:
          </div>
          <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="88" title="Consultar cálculo y reporte del error estándar en Anastasi & Urbina">
            <span>📖</span>
            <span><strong>Anastasi & Urbina:</strong> Cálculo de EEM y Reporte de Intervalos (Pág. 88) →</span>
          </button>
        </div>
      </section>

      <!-- PROTOCOLO DE COMPARACIÓN: EED -->
      <section class="orientation-block-card">
        <span class="orientation-section-badge">COMPARACIÓN DE SUBTESTS</span>
        <h3 class="orientation-sec-title">Error Estándar de la Diferencia (EED)</h3>
        <p class="orientation-p">
          ¿Cómo saber si la diferencia entre dos subtests (ej. Memoria de Trabajo vs. Comprensión Verbal) es real o debida al azar?
        </p>
        <div style="background: rgba(0,0,0,0.02); border-left: 3px solid #059669; padding: 0.85rem 1rem; border-radius: 0 10px 10px 0; margin: 0.75rem 0;">
          <strong>Fórmula del EED:</strong> <code>EED = s · √(2 - r11 - r22)</code>
          <br>Una diferencia se considera estadísticamente significativa si <code>|X1 - X2| ≥ 1.96 · EED</code> (al nivel del 5%).
        </div>
      </section>

      <div style="display: flex; justify-content: flex-start; margin-top: 1rem;">
        <button type="button" class="pedagogical-link-btn" id="btn-bottom-back-eem-def" style="background: #059669; padding: 0.8rem 1.4rem;">
          <span>← Volver a Fundamentos de Confiabilidad</span>
        </button>
      </div>
    </div>
  `,

  // =========================================================================
  // 5. VALIDEZ PSICOMÉTRICA MULTIRRASGO (CONCEPTO)
  // =========================================================================
  'validez-psicometrica-multirrasgo': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">🔬 MARCO UNITARIO DE VALIDEZ & EVIDENCIAS</span>
          <span class="modal-area-pill">📐 ÁREA: PSICOMETRÍA</span>
          <span class="modal-area-pill">🔬 ÁREA: METODOLOGÍA</span>
        </div>
        <h2 class="orientation-main-title">Validez Psicométrica: Evidencias de Contenido, Criterio y Constructo (MTMM)</h2>
        <p class="orientation-authors-meta">Anne Anastasi & Susana Urbina • Tests Psicológicos (Capítulos 5 y 6, Págs. 113-171) • Samuel Messick & Campbell-Fiske</p>
      </div>

      <div class="pedagogical-division-banner">
        <div class="pedagogical-banner-text">
          💡 <strong>Principio de Validez Unificada de Messick:</strong> La validez no es un atributo estático del test (un test no es "válido" o "inválido" en abstracto), sino el grado en que la evidencia empírica respalda las <strong>inferencias e interpretaciones específicas</strong> que se hacen a partir de sus puntuaciones.
        </div>
      </div>

      <!-- SECCIÓN 1: LAS FUENTES DE EVIDENCIA -->
      <section class="orientation-block-card">
        <span class="orientation-section-badge">TAXONOMÍA DE EVIDENCIAS</span>
        <h3 class="orientation-sec-title">Las Fuentes de Evidencia de Validez</h3>

        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">📋</span>
              <span class="dim-name">Evidencia Basada en el Contenido</span>
            </div>
            <p class="orientation-p">
              Grado en que los reactivos constituyen una muestra representativa del dominio conductual o cognitivo que se pretende evaluar.
            </p>
            <ul class="orientation-bullet-list">
              <li>Juicio de expertos e índice de validez de contenido de Lawshe (CVR).</li>
              <li>Evita la <em>subrepresentación del constructo</em> (dejar facetas esenciales fuera) y la <em>varianza irrelevante al constructo</em> (ej. lenguaje excesivamente complejo en un test de razonamiento espacial).</li>
            </ul>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">🎯</span>
              <span class="dim-name">Evidencia Basada en Relaciones con Criterios</span>
            </div>
            <p class="orientation-p">
              Eficacia de la prueba para predecir el desempeño del sujeto en una medida externa directa e independiente (el criterio).
            </p>
            <ul class="orientation-bullet-list">
              <li><strong>Validez Concurrente:</strong> Criterio medido simultáneamente (ej. diagnóstico psiquiátrico mediante entrevista estructurada SCID).</li>
              <li><strong>Validez Predictiva:</strong> Criterio medido en el futuro (ej. rendimiento académico universitario o respuesta al tratamiento).</li>
              <li><strong>Análisis ROC:</strong> Sensibilidad, Especificidad, Área Bajo la Curva (AUC).</li>
            </ul>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">🕸️</span>
              <span class="dim-name">Evidencia Basada en el Constructo</span>
            </div>
            <p class="orientation-p">
              Grado en que la prueba mide el constructo teórico latente para el cual fue diseñada dentro de una <strong>Red Nomológica</strong>.
            </p>
            <ul class="orientation-bullet-list">
              <li>Análisis Factorial Exploratorio (AFE) y Confirmatorio (AFC).</li>
              <li>Validez Convergente (correlación alta con pruebas que miden el mismo constructo).</li>
              <li>Validez Discriminante (correlación baja con pruebas que miden rasgos ajenos).</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECCIÓN 2: MATRIZ MULTIRRASGO-MULTIMÉTODO -->
      <section class="orientation-block-card">
        <span class="orientation-section-badge">DISEÑO CLÁSICO DE CAMPBELL & FISKE</span>
        <h3 class="orientation-sec-title">La Matriz Multirrasgo-Multimétodo (MTMM)</h3>
        <p class="orientation-lead-p">
          Campbell y Fiske (1959) propusieron el diseño más riguroso para deslindar el rasgo psicológico del sesgo inherente al método de evaluación:
        </p>

        <div class="orientation-subcard">
          <div class="orientation-subcard-title">Los Cuatro Tipos de Coeficientes en la Matriz MTMM</div>
          <ul class="orientation-bullet-list">
            <li><strong>Mismo Rasgo - Mismo Método (Diagonal de Confiabilidad):</strong> La correlación de la prueba consigo misma (debe ser la más alta de la matriz, r &gt; 0.85).</li>
            <li><strong>Mismo Rasgo - Diferente Método (Validez Convergente):</strong> Evaluar el mismo rasgo (ej. Ansiedad) mediante cuestionario de auto-informe y mediante observación conductual. Debe ser significativamente diferente de cero y elevada (r = 0.50 a 0.70).</li>
            <li><strong>Diferente Rasgo - Mismo Método (Sesgo de Método):</strong> Evaluar rasgos distintos (ej. Ansiedad y Depresión) usando el mismo método (auto-informe). Si esta correlación es más alta que la de validez convergente, el test evalúa el sesgo de método (ej. deseabilidad social) y no el rasgo.</li>
            <li><strong>Diferente Rasgo - Diferente Método (Validez Discriminante):</strong> Debe ser la correlación más baja de toda la matriz, confirmando la autonomía del constructo.</li>
          </ul>
        </div>
      </section>

      <!-- CITAS -->
      <section class="orientation-block-card">
        <span class="orientation-section-badge">BIBLIOGRAFÍA VERIFICADA</span>
        <h3 class="orientation-sec-title">Citas Textuales en Anastasi & Urbina (7.ª Edición)</h3>
        <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
          <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
            📖 Cita en Anastasi & Urbina:
          </div>
          <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="115" title="Consultar validez de constructo y matriz MTMM en Anastasi & Urbina">
            <span>📖</span>
            <span><strong>Anastasi & Urbina:</strong> Validez de Constructo & Criterio (Pág. 115) →</span>
          </button>
        </div>
      </section>
    </div>
  `,

  // =========================================================================
  // 6. TEORÍA DE RESPUESTA AL ÍTEM (TRI) (CONCEPTO)
  // =========================================================================
  'teoria-respuesta-item-tri': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill">📈 PSICOMETRÍA AVANZADA & RASGO LATENTE</span>
          <span class="modal-area-pill">📐 ÁREA: PSICOMETRÍA</span>
          <span class="modal-area-pill">🔬 ÁREA: METODOLOGÍA</span>
        </div>
        <h2 class="orientation-main-title">Teoría de Respuesta al Ítem (TRI) y Modelado del Rasgo Latente</h2>
        <p class="orientation-authors-meta">Anne Anastasi & Susana Urbina • Tests Psicológicos (Págs. 172-204) • Georg Rasch, Allan Birnbaum & Frederic Lord</p>
      </div>

      <div class="pedagogical-division-banner">
        <div class="pedagogical-banner-text">
          💡 <strong>Salto Paradigmático:</strong> Mientras la Teoría Clásica asume que el error de medición es constante para todos los sujetos, la <strong>Teoría de Respuesta al Ítem (TRI)</strong> demuestra que el error es <em>condicional al nivel de habilidad (θ)</em> del sujeto.
        </div>
      </div>

      <!-- SECCIÓN 1: LIMITACIONES DE LA TCT VS TRI -->
      <section class="orientation-block-card">
        <span class="orientation-section-badge">RUPTURA EPISTEMOLÓGICA</span>
        <h3 class="orientation-sec-title">1. Por qué surgió la TRI frente a la Teoría Clásica</h3>
        <p class="orientation-lead-p">
          La Teoría Clásica de los Tests sufre de una circularidad insalvable: la puntuación del sujeto depende de la dificultad del examen específico que tomó, y la dificultad de los ítems depende de la habilidad de la muestra con la que se calibraron.
        </p>

        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">⏳</span>
              <span class="dim-name">Teoría Clásica de los Tests (TCT)</span>
            </div>
            <ul class="orientation-bullet-list">
              <li>Unidad de análisis: la puntuación total del test.</li>
              <li>Parámetros dependientes de la muestra normativa.</li>
              <li>Error Estándar de Medición (EEM) constante e idéntico para todos los niveles de habilidad.</li>
              <li>Pruebas de longitud fija para todos los evaluados.</li>
            </ul>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">🚀</span>
              <span class="dim-name">Teoría de Respuesta al Ítem (TRI)</span>
            </div>
            <ul class="orientation-bullet-list">
              <li>Unidad de análisis: el ítem individual y su Curva Característica (CCI).</li>
              <li><strong>Invarianza de parámetros:</strong> La dificultad del ítem no cambia con el grupo examinado.</li>
              <li>El error es condicional: la prueba mide con máxima precisión en ciertos niveles de θ y con alto error en otros.</li>
              <li>Permite los Tests Adaptativos Computarizados (TAC).</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- SECCIÓN 2: LOS MODELOS LOGÍSTICOS -->
      <section class="orientation-block-card">
        <span class="orientation-section-badge">MODELADO MATEMÁTICO</span>
        <h3 class="orientation-sec-title">2. Los Tres Modelos Logísticos Canónicos</h3>

        <div class="orientation-subcard">
          <div class="orientation-subcard-title">1. Modelo de 1 Parámetro (1PL / Modelo de Rasch)</div>
          <p class="orientation-p">
            Asume que los ítems sólo difieren en su <strong>dificultad (b)</strong>. Todos tienen igual capacidad discriminativa y el acierto por azar es nulo.
            <br><code>P(θ) = e^(θ - b) / [1 + e^(θ - b)]</code>
            <br>Es el modelo más parsimonioso y el único que posee la propiedad de medición específica objetiva.
          </p>
        </div>

        <div class="orientation-subcard">
          <div class="orientation-subcard-title">2. Modelo de 2 Parámetros (2PL / Modelo de Birnbaum)</div>
          <p class="orientation-p">
            Incorpora el parámetro de <strong>discriminación (a)</strong>, que representa la pendiente de la Curva Característica en el punto de inflexión.
            <br><code>P(θ) = e^[D · a · (θ - b)] / [1 + e^[D · a · (θ - b)]]</code> (con D = 1.7).
          </p>
        </div>

        <div class="orientation-subcard">
          <div class="orientation-subcard-title">3. Modelo de 3 Parámetros (3PL)</div>
          <p class="orientation-p">
            Añade el parámetro de <strong>pseudo-adivinación o azar (c)</strong>, que representa la asíntota inferior (probabilidad de acertar el ítem al azar con habilidad θ infinitamente baja).
            <br><code>P(θ) = c + (1 - c) · [e^[D · a · (θ - b)] / (1 + e^[D · a · (θ - b)])]</code>
          </p>
        </div>
      </section>

      <!-- CITAS -->
      <section class="orientation-block-card">
        <span class="orientation-section-badge">BIBLIOGRAFÍA VERIFICADA</span>
        <h3 class="orientation-sec-title">Citas Textuales en Anastasi & Urbina (7.ª Edición)</h3>
        <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; padding: 0.85rem 1rem; background: rgba(59, 130, 246, 0.06); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 12px;">
          <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #2563eb; margin-bottom: 0.2rem;">
            📖 Cita en Anastasi & Urbina:
          </div>
          <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="180" title="Consultar modelos de Rasch y curvas de características de ítems en Anastasi & Urbina">
            <span>📖</span>
            <span><strong>Anastasi & Urbina:</strong> Teoría de Respuesta al Ítem & Curvas CCI (Pág. 180) →</span>
          </button>
        </div>
      </section>
    </div>
  `,

  // =========================================================================
  // BLOQUE B: NEURODESARROLLO INFANTIL (NELSON ORTIZ EAD-1)
  // =========================================================================
// =========================================================================
  // 7. NEURODESARROLLO INFANTIL INTEGRAL (CONCEPTO)
  // =========================================================================
  'neurodesarrollo-infantil-ead': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill" style="background: rgba(16, 185, 129, 0.15); color: #047857;">🌱 NEURODESARROLLO INFANTIL INTEGRAL (0-60 MESES)</span>
          <span class="modal-area-pill">👶 ÁREA: DESARROLLO INFANTIL</span>
          <span class="modal-area-pill">🧠 ÁREA: NEURODESARROLLO</span>
          <span class="modal-area-pill">🩺 ÁREA: SEMIOLOGÍA CLÍNICA</span>
        </div>
        <h2 class="orientation-main-title">Neurodesarrollo Infantil Integral: Principios Ontogenéticos y Alerta Temprana (0-60 Meses)</h2>
        <p class="orientation-authors-meta">Dr. Nelson Ortiz Pinilla • Escala Abreviada de Desarrollo EAD-1 (UNICEF / Ministerio de Salud, Págs. 5-17)</p>
      </div>

      <div class="pedagogical-division-banner" style="background: rgba(16, 185, 129, 0.08); border-color: rgba(16, 185, 129, 0.25);">
        <div class="pedagogical-banner-text">
          💡 <strong>Principio Holístico del Desarrollo:</strong> El desarrollo infantil no es un proceso lineal ni aislado, sino un fenómeno dinámico, multidimensional y sistémico. Nelson Ortiz define el desarrollo como la progresiva adquisición de habilidades motoras, adaptativas, comunicativas y afectivas resultantes de la maduración del Sistema Nervioso Central en continua interacción con el entorno sociocultural.
        </div>
        <button type="button" class="pedagogical-link-btn" id="btn-goto-ead-eval" style="background: #059669;">
          <span>🚦 Ver Protocolo con Semáforo EAD-1 Interactivo</span>
          <span>→</span>
        </button>
      </div>

      <div class="orientation-nav-pills-bar">
        <button type="button" class="orientation-nav-pill-btn" data-target-sec="sec-neu-leyes">
          <span>📜</span>
          <span>1. Leyes Ontogenéticas</span>
        </button>
        <button type="button" class="orientation-nav-pill-btn" data-target-sec="sec-neu-areas">
          <span>🧩</span>
          <span>2. Las 4 Áreas Sistémicas</span>
        </button>
        <button type="button" class="orientation-nav-pill-btn" data-target-sec="sec-neu-matriz-hitos">
          <span>📊</span>
          <span>3. Matriz Cronológica (0-60m)</span>
        </button>
        <button type="button" class="orientation-nav-pill-btn" data-target-sec="sec-neu-alarmas">
          <span>🚨</span>
          <span>4. Signos de Alerta Temprana</span>
        </button>
        <button type="button" class="orientation-nav-pill-btn" data-target-sec="sec-neu-citas">
          <span>📚</span>
          <span>5. Citas Textuales Verificadas</span>
        </button>
      </div>

      <!-- SECCIÓN 1: LEYES DEL DESARROLLO -->
      <section class="orientation-block-card" id="sec-neu-leyes">
        <span class="orientation-section-badge">LEYES DE MADURACIÓN NEUROLÓGICA</span>
        <h3 class="orientation-sec-title">1. Leyes Ontogenéticas de la Motricidad y Maduración Nerviosa</h3>
        <p class="orientation-lead-p">
          El neurodesarrollo sigue una secuencia universal e inviolable guiada por el proceso de mielinización corticoespinal:
        </p>

        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">👤</span>
              <span class="dim-name">Ley Céfalo-Caudal</span>
            </div>
            <p class="orientation-p">
              La maduración neuromuscular progresa de la cabeza hacia los pies. El lactante adquiere primero el control cefálico (sostén de la cabeza a los 2-3 meses), posteriormente el tronco (sedestación estable a los 6-7 meses) y finalmente los miembros inferiores (marcha bípeda independiente a los 12-15 meses).
            </p>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">💪</span>
              <span class="dim-name">Ley Próximo-Distal</span>
            </div>
            <p class="orientation-p">
              El control motor se organiza desde el eje central del cuerpo hacia las extremidades periféricas. El niño controla primero los hombros y brazos para movimientos globales de alcance, luego el antebrazo y la muñeca, y finalmente la musculatura intrínseca de los dedos para la pinza digital fina y la grafomotricidad.
            </p>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">⚡</span>
              <span class="dim-name">Diferenciación e Integración</span>
            </div>
            <p class="orientation-p">
              Las respuestas motoras masivas, globales y desorganizadas del recién nacido (movimientos masivos en masa) dan paso a respuestas altamente específicas, voluntarias y moduladas corticalmente, mediante la progresiva inhibición de los reflejos arcaicos.
            </p>
          </div>
        </div>
      </section>

      <!-- SECCIÓN 2: LAS 4 ÁREAS DE NELSON ORTIZ -->
      <section class="orientation-block-card" id="sec-neu-areas">
        <span class="orientation-section-badge">MODELO SISTÉMICO EAD-1</span>
        <h3 class="orientation-sec-title">2. Las 4 Áreas del Neurodesarrollo según Nelson Ortiz</h3>
        <p class="orientation-lead-p">
          La Escala Abreviada de Desarrollo EAD-1 evalúa cuatro ejes complementarios que cubren todo el espectro funcional de los primeros 5 años de vida:
        </p>

        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">🏃‍♂️</span>
              <span class="dim-name">Área A: Motricidad Gruesa</span>
            </div>
            <p class="orientation-p">
              Comprende la maduración del tono muscular, postura, control cefálico y de tronco, giros corporales, equilibrio estático y dinámico, marcha, carrera, trepado y salto.
            </p>
            <div class="orientation-subcard">
              <div class="orientation-subcard-title">Hitos de Referencia</div>
              <ul class="orientation-bullet-list">
                <li>3 meses: Sostén cefálico firme al elevar los brazos.</li>
                <li>6-7 meses: Sedestación sin apoyo.</li>
                <li>12-14 meses: Marcha independiente con base de sustentación amplia.</li>
                <li>3 años: Salto con ambos pies; sube escaleras alternando.</li>
                <li>5 años: Salto en un solo pie y equilibrio en puntas.</li>
              </ul>
            </div>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">✍️</span>
              <span class="dim-name">Área B: Motricidad Fino-Adaptativa</span>
            </div>
            <p class="orientation-p">
              Capacidad de coordinar movimientos musculares finos de la mano y los ojos, manipulación de objetos, cálculo espacial de alcance, destreza constructiva y grafomotricidad.
            </p>
            <div class="orientation-subcard">
              <div class="orientation-subcard-title">Hitos de Referencia</div>
              <ul class="orientation-bullet-list">
                <li>4 meses: Agarre voluntario a dos manos al contacto visual.</li>
                <li>9-10 meses: Pinza digital superior índice-pulgar con objeto diminuto.</li>
                <li>18 meses: Torre de 3 cubos y garabato espontáneo.</li>
                <li>3 años: Copia de círculo y enhebrado de cuentas.</li>
                <li>5 años: Copia de triángulo y dibujo de figura humana reconocible.</li>
              </ul>
            </div>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">🗣️</span>
              <span class="dim-name">Área C: Audición y Lenguaje</span>
            </div>
            <p class="orientation-p">
              Evolución de la recepción auditiva y comprensión comunicativa, desde las vocalizaciones prelingüísticas hasta la estructura sintáctica, léxica y narrativa del habla.
            </p>
            <div class="orientation-subcard">
              <div class="orientation-subcard-title">Hitos de Referencia</div>
              <ul class="orientation-bullet-list">
                <li>3 meses: Orientación hacia la voz humana y sonrisas vocálicas.</li>
                <li>6 meses: Balbuceo canónico polisilábico (ba-ba, ma-ma).</li>
                <li>12 meses: Primera palabra con significado intencional referencial.</li>
                <li>24 meses: Frases de dos palabras ("mamá agua") y comprensión de órdenes simples.</li>
                <li>4-5 años: Relato fluido de historias completas con tiempos verbales y vocabulario amplio.</li>
              </ul>
            </div>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">🤝</span>
              <span class="dim-name">Área D: Conducta Personal-Social</span>
            </div>
            <p class="orientation-p">
              Procesos de apego, vínculo afectivo, autonomía en actividades de la vida diaria (vestido, higiene, alimentación), empatía y seguimiento de normas de convivencia social.
            </p>
            <div class="orientation-subcard">
              <div class="orientation-subcard-title">Hitos de Referencia</div>
              <ul class="orientation-bullet-list">
                <li>2 meses: Sonrisa social de respuesta al rostro del cuidador.</li>
                <li>8 meses: Angustia del octavo mes ante extraños y permanencia del objeto.</li>
                <li>18 meses: Uso funcional de la cuchara y aviso de necesidades.</li>
                <li>3 años: Juego simbólico activo y diferenciación de género.</li>
                <li>5 años: Juego cooperativo con reglas y autonomía total en vestido.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <!-- TABLA MATRIZ CRONOLÓGICA DE HITOS DEL NEURODESARROLLO -->
      <section class="orientation-block-card" id="sec-neu-matriz-hitos">
        <span class="orientation-section-badge">MATRIZ EVOLUTIVA MAESTRA (EAD-1)</span>
        <h3 class="orientation-sec-title">Tabla Cronológica Comparativa de Hitos por Rango de Edad (0 a 60 Meses)</h3>
        <p class="orientation-p">
          Cuadro sinóptico de la adquisición progresiva de pautas del neurodesarrollo en las 4 esferas del modelo de Nelson Ortiz:
        </p>

        <div class="orientation-table-wrapper" style="overflow-x: auto; margin-top: 1rem;">
          <table class="orientation-data-table" style="font-size: 0.83rem; width: 100%; border-collapse: collapse; min-width: 800px;">
            <thead>
              <tr style="background: rgba(16, 185, 129, 0.12); text-align: left;">
                <th style="padding: 0.7rem; color: #065f46; border: 1px solid rgba(0,0,0,0.08);">Edad (Meses)</th>
                <th style="padding: 0.7rem; color: #1e40af; border: 1px solid rgba(0,0,0,0.08); background: rgba(59, 130, 246, 0.08);">Área A: Motricidad Gruesa</th>
                <th style="padding: 0.7rem; color: #b45309; border: 1px solid rgba(0,0,0,0.08); background: rgba(245, 158, 11, 0.08);">Área B: Fino-Adaptativa</th>
                <th style="padding: 0.7rem; color: #047857; border: 1px solid rgba(0,0,0,0.08); background: rgba(16, 185, 129, 0.08);">Área C: Audición y Lenguaje</th>
                <th style="padding: 0.7rem; color: #6b21a8; border: 1px solid rgba(0,0,0,0.08); background: rgba(147, 51, 234, 0.08);">Área D: Personal-Social</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1 a 3 m</strong></td>
                <td>Patea vigorosamente; levanta cabeza en decúbito prono; sostén cefálico incipiente.</td>
                <td>Sigue objetos con la mirada en 180°; abre y mira sus manos; reflejo de prensión palmar.</td>
                <td>Sobresalto o parpadeo al sonido; vocalizaciones guturales reflejas ("agú"); balbuceo inicial.</td>
                <td>Sonrisa social al rostro del cuidador; contacto ocular sostenido; fija la mirada.</td>
              </tr>
              <tr style="background: rgba(0,0,0,0.015);">
                <td><strong>4 a 6 m</strong></td>
                <td>Control cefálico firme al sentarse; rolado supino a prono; apoyo en antebrazos.</td>
                <td>Agarre cúbito-palmar voluntario; sostiene un objeto en cada mano; se lleva objetos a la boca.</td>
                <td>Gira la cabeza hacia la fuente sonora; balbuceo polisilábico (ba-ba, ma-ma); ríe a carcajadas.</td>
                <td>Sonríe a su imagen en el espejo; busca el contacto visual; estira brazos para ser alzado.</td>
              </tr>
              <tr>
                <td><strong>7 a 9 m</strong></td>
                <td>Sedestación estable sin apoyo; posición de gateo o 4 puntos; se sienta por sí solo.</td>
                <td>Pasa objetos de una mano a otra; pinza en tijera (radial-palmar); golpea cubos entre sí.</td>
                <td>Balbuceo reduplicativo canónico; atiende a su nombre; modula tono y entonación vocal.</td>
                <td>Angustia de separación del 8° mes ante extraños; juego de ocultamiento (cu-cú); busca objeto caído.</td>
              </tr>
              <tr style="background: rgba(0,0,0,0.015);">
                <td><strong>10 a 12 m</strong></td>
                <td>Bipedestación con sujeción; pasos laterales con apoyo; gateo coordinado alterno.</td>
                <td>Pinza superior digital fina (índice-pulgar pulpejo a pulpejo); saca objetos de un recipiente.</td>
                <td>Primera palabra con intención referencial (mamá, papá, agua); comprende el "no"; señala.</td>
                <td>Juego de dar y recibir objetos; aplaude y dice adiós con la mano; bebe de taza con ayuda.</td>
              </tr>
              <tr>
                <td><strong>13 a 18 m</strong></td>
                <td>Marcha bípeda independiente autónoma; se agacha a recoger un juguete sin caerse.</td>
                <td>Torre de 2 y 3 cubos; garabateo espontáneo vigoroso; pasa páginas de libros gruesos.</td>
                <td>Vocabulario de 3 a 8 palabras funcionales; jerga expresiva abundante; comprende órdenes simples.</td>
                <td>Uso funcional de la cuchara (derrama poco); ayuda a desvestirse; señala lo que desea.</td>
              </tr>
              <tr style="background: rgba(0,0,0,0.015);">
                <td><strong>19 a 24 m</strong></td>
                <td>Corre con soltura; patea un balón hacia adelante; sube escaleras tomado de la mano.</td>
                <td>Torre de 4 a 6 cubos; alinea cubos en tren; introduce bolitas en botella de cuello angosto.</td>
                <td>Construcción de frases de dos palabras ("mamá agua", "vamos calle"); nombra 4 objetos cotidianos.</td>
                <td>Control diurno inicial de esfínteres (avisa); juego paralelo junto a otros niños; imita tareas del hogar.</td>
              </tr>
              <tr>
                <td><strong>25 a 36 m</strong></td>
                <td>Sube escaleras alternando pies; salta con ambos pies juntos; camina en puntas de pie.</td>
                <td>Torre de 8 cubos; puente con 3 cubos; imita trazo vertical (|); enhebra cuentas grandes.</td>
                <td>Oraciones de 3 palabras (S-V-O); uso del pronombre "Yo"; comprende nociones espaciales (arriba/abajo).</td>
                <td>Come de forma autónoma con cuchara; se quita prendas abiertas; inicio del juego simbólico ("hacer como si").</td>
              </tr>
              <tr style="background: rgba(0,0,0,0.015);">
                <td><strong>37 a 48 m</strong></td>
                <td>Salta a la pata coja (un solo pie); camina hacia atrás; trepa con agilidad en parques.</td>
                <td>Copia círculo cerrado (○) y cruz (+); corta papel con tijeras; agarre trípode estático del lápiz.</td>
                <td>Preguntas causales frecuentes ("¿Por qué?"); relatos breves de vivencias; usa plurales y pasados.</td>
                <td>Juego asociativo con pares estructurado; lavado y secado autónomo de manos; se desabotona ropa.</td>
              </tr>
              <tr>
                <td><strong>49 a 60 m</strong></td>
                <td>Marcha en tándem talón-punta en línea recta; salto de longitud con pies juntos; rebota pelota.</td>
                <td>Copia triángulo (△) y cuadrado; dibuja figura humana completa con cabeza, tronco y extremidades.</td>
                <td>Discurso narrativo fluido complejo; define palabras por su uso; comprende analogías lógicas opuestas.</td>
                <td>Juego cooperativo reglado; se viste y abotona por completo sin ayuda; autonomía total en aseo personal.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- SECCIÓN 3: SIGNOS DE ALERTA -->
      <section class="orientation-block-card" id="sec-neu-alarmas">
        <span class="orientation-section-badge">CRITERIOS DE DERIVACIÓN URGENTE</span>
        <h3 class="orientation-sec-title">3. Banderas Rojas y Signos de Alerta Temprana en Neurodesarrollo</h3>
        <p class="orientation-p">
          Cualquiera de los siguientes signos en la edad señalada constituye indicación perentoria de evaluación neuropediátrica:
        </p>

        <div class="orientation-clinical-alert">
          <strong>🚨 Banderas Rojas Absolutas según Nelson Ortiz:</strong>
          <ul class="orientation-bullet-list" style="margin-top: 0.5rem;">
            <li><strong>A los 3 meses:</strong> Ausencia de sostén cefálico; ausencia de fijación o seguimiento visual; manos persistentemente empuñadas con el pulgar atrapado (pulgar cortical).</li>
            <li><strong>A los 6 meses:</strong> Hipotonía axial marcada (cabeza y tronco cuelgan péndulos); persistencia de reflejos arcaicos (Moro, tónico cervical); asimetría motora entre hemicuerpos (sospecha de parálisis cerebral hemipléjica).</li>
            <li><strong>A los 9 meses:</strong> Incapacidad para mantenerse sentado sin apoyo; ausencia de silabeo o respuesta al propio nombre; falta de interés por agarrar objetos.</li>
            <li><strong>A los 12 meses:</strong> Ausencia de pinza digital; incapacidad para sostenerse en pie con apoyo; falta total de balbuceo imitativo o gestos comunicativos (señalar con el dedo).</li>
            <li><strong>A los 18 meses:</strong> No camina de forma independiente; no pronuncia ninguna palabra con significado; pérdida de cualquier habilidad previamente adquirida (regresión del desarrollo).</li>
            <li><strong>A los 24 meses:</strong> Ausencia de frases de dos palabras; marcha en puntillas permanente; desconexión social o falta de contacto ocular (cribado de TEA).</li>
          </ul>
        </div>
      </section>

      <!-- SECCIÓN 4: CITAS -->
      <section class="orientation-block-card" id="sec-neu-citas">
        <span class="orientation-section-badge">BIBLIOGRAFÍA VERIFICADA</span>
        <h3 class="orientation-sec-title">4. Citas Textuales Verificadas en Nelson Ortiz Pinilla</h3>

        <div class="orientation-subcard">
          <div class="orientation-subcard-title">Nelson Ortiz Pinilla • Escala Abreviada de Desarrollo EAD-1 (Pág. 8)</div>
          <p class="orientation-p" style="font-style: italic; border-left: 3px solid #10b981; padding-left: 0.8rem;">
            "El desarrollo psicomotor infantil es un proceso continuo que refleja la maduración del sistema nervioso central y su integración adaptativa con el medio físico y sociocultural. La detección precoz de cualquier retraso o desviación en las pautas evolutivas normales de motricidad, lenguaje o socialización constituye la herramienta preventiva más eficaz para evitar secuelas neurológicas permanentes en la infancia."
          </p>
        </div>

        <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 12px;">
          <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #047857; margin-bottom: 0.2rem;">
            📖 Cita Verificada en la Biblioteca de PsiOS (Clic para abrir en Lector PDF Nativo):
          </div>
          <button type="button" class="btn-book-citation-jump" data-book-id="nelson-ortiz-escala-abreviada" data-page="8" title="Consultar fundamentos del neurodesarrollo en Nelson Ortiz">
            <span>📖</span>
            <span><strong>Nelson Ortiz:</strong> Principios del Desarrollo & EAD-1 (Pág. 8) →</span>
          </button>
          <button type="button" class="btn-book-citation-jump" data-book-id="nelson-ortiz-escala-abreviada" data-page="19" title="Consultar Área de Motricidad en Nelson Ortiz">
            <span>📖</span>
            <span><strong>Nelson Ortiz:</strong> Maduración Motriz y Reflejos (Pág. 19) →</span>
          </button>
        </div>
      </section>

      <div style="display: flex; justify-content: flex-end; margin-top: 1rem;">
        <button type="button" class="pedagogical-link-btn" id="btn-bottom-goto-ead-eval" style="background: #059669; padding: 0.8rem 1.4rem;">
          <span>🚦 Ir al Semáforo EAD-1 & Navegador Etario</span>
          <span>→</span>
        </button>
      </div>
    </div>
  `,

  // =========================================================================
  // 8. EVALUACIÓN Y SEMÁFORO EAD-1 INTERACTIVO (PROTOCOLO)
  // =========================================================================
  'evaluacion-tamizaje-neurodesarrollo-ead1': () => `
    <div class="orientation-doc-container">
      <!-- ENCABEZADO PRINCIPAL -->
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill" style="background: rgba(16, 185, 129, 0.15); color: #047857;">🚦 PROTOCOLO CLÍNICO DE TAMIZAJE • EAD-1</span>
          <span class="modal-area-pill">👶 ÁREA: DESARROLLO INFANTIL</span>
          <span class="modal-area-pill">🧠 ÁREA: NEURODESARROLLO</span>
          <span class="modal-area-pill">🩺 ÁREA: EVALUACIÓN CLÍNICA</span>
        </div>
        <h2 class="orientation-main-title">Protocolo de Tamizaje EAD-1 con Semáforo Neuroevolutivo Interactivo (0-60 Meses)</h2>
        <p class="orientation-authors-meta">Dr. Nelson Ortiz Pinilla • Escala Abreviada de Desarrollo EAD-1 (Ministerio de Salud / UNICEF, Págs. 14-62)</p>
      </div>

      <!-- BANNER PEDAGÓGICO DE BIENVENIDA -->
      <div class="pedagogical-division-banner" style="background: rgba(16, 185, 129, 0.08); border-color: rgba(16, 185, 129, 0.25);">
        <div class="pedagogical-banner-text">
          💡 <strong>Guía Clínica Esencial:</strong> La EAD-1 es un instrumento de tamizaje rápido y acumulativo diseñado para detectar tempranamente desviaciones o retrasos en el neurodesarrollo infantil. Este protocolo estructurado le guía paso a paso desde el cálculo de la edad corregida hasta la obtención de puntuaciones directas y su clasificación inmediata en el Semáforo Oficial de Nelson Ortiz.
        </div>
        <button type="button" class="pedagogical-link-btn" id="btn-back-ead-def" style="background: #059669;">
          <span>← Volver a Fundamentos de Neurodesarrollo</span>
        </button>
      </div>

      <!-- PÍLDORAS DE NAVEGACIÓN RÁPIDA -->
      <div class="orientation-nav-pills-bar">
        <button type="button" class="orientation-nav-pill-btn" data-target-sec="sec-ead-estructura">
          <span>📖</span>
          <span>1. Estructura & Ítems</span>
        </button>
        <button type="button" class="orientation-nav-pill-btn" data-target-sec="sec-ead-edad-prematurez">
          <span>📅</span>
          <span>2. Cálculo de Edad & Prematurez</span>
        </button>
        <button type="button" class="orientation-nav-pill-btn" data-target-sec="sec-ead-reglas-puntuacion">
          <span>⚖️</span>
          <span>3. Reglas de Puntuación (Base y Techo)</span>
        </button>
        <button type="button" class="orientation-nav-pill-btn" data-target-sec="sec-ead-simulador-baremos">
          <span>🧮</span>
          <span>4. Simulador Interactivo de Baremos</span>
        </button>
        <button type="button" class="orientation-nav-pill-btn" data-target-sec="sec-ead-caso-clinico">
          <span>📝</span>
          <span>5. Caso Clínico Guiado</span>
        </button>
        <button type="button" class="orientation-nav-pill-btn" data-target-sec="sec-ead-tabla-maestra">
          <span>📊</span>
          <span>6. Tabla 1: Baremos Oficiales</span>
        </button>
        <button type="button" class="orientation-nav-pill-btn" data-target-sec="sec-ead-navegador">
          <span>👶</span>
          <span>7. Criterios de Ítems (0-60m)</span>
        </button>
        <button type="button" class="orientation-nav-pill-btn" data-target-sec="sec-ead-valija-materiales">
          <span>🧰</span>
          <span>8. Valija de Materiales</span>
        </button>
      </div>

      <!-- SECCIÓN 1: ESTRUCTURA Y CÓMO FUNCIONA LA EAD-1 -->
      <section class="orientation-block-card" id="sec-ead-estructura">
        <span class="orientation-section-badge">FUNDAMENTACIÓN DE LA PRUEBA</span>
        <h3 class="orientation-sec-title">1. ¿Cómo está Estructurada la EAD-1?</h3>
        <p class="orientation-lead-p">
          La Escala Abreviada de Desarrollo consta de <strong>120 ítems en total</strong>, organizados simétricamente en 4 áreas funcionales de 30 ítems cada una:
        </p>

        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item" style="border-top: 3px solid #3b82f6;">
            <div class="dim-item-header">
              <span class="dim-icon">🏃‍♂️</span>
              <div>
                <span class="dim-name">Área A: Motricidad Gruesa</span>
                <div style="font-size: 0.72rem; color: #2563eb; font-weight: 700;">30 Ítems (Del 1 al 30)</div>
              </div>
            </div>
            <p class="orientation-p">
              Evalúa la maduración neurológica postural, tono muscular, control cefálico, sedestación, marcha bípeda, equilibrio y carrera.
            </p>
          </div>

          <div class="orientation-dim-item" style="border-top: 3px solid #d97706;">
            <div class="dim-item-header">
              <span class="dim-icon">✍️</span>
              <div>
                <span class="dim-name">Área B: Fino-Adaptativa</span>
                <div style="font-size: 0.72rem; color: #d97706; font-weight: 700;">30 Ítems (Del 1 al 30)</div>
              </div>
            </div>
            <p class="orientation-p">
              Evalúa la coordinación óculo-manual, prensión voluntaria, pinza digital, manipulación de objetos y grafomotricidad.
            </p>
          </div>

          <div class="orientation-dim-item" style="border-top: 3px solid #059669;">
            <div class="dim-item-header">
              <span class="dim-icon">🗣️</span>
              <div>
                <span class="dim-name">Área C: Audición y Lenguaje</span>
                <div style="font-size: 0.72rem; color: #059669; font-weight: 700;">30 Ítems (Del 1 al 30)</div>
              </div>
            </div>
            <p class="orientation-p">
              Evalúa orientación sonora, vocalizaciones, balbuceo, vocabulario comprensivo y expresivo, sintaxis y relato verbal.
            </p>
          </div>

          <div class="orientation-dim-item" style="border-top: 3px solid #7c3aed;">
            <div class="dim-item-header">
              <span class="dim-icon">🤝</span>
              <div>
                <span class="dim-name">Área D: Personal-Social</span>
                <div style="font-size: 0.72rem; color: #7c3aed; font-weight: 700;">30 Ítems (Del 1 al 30)</div>
              </div>
            </div>
            <p class="orientation-p">
              Evalúa procesos de apego, sonrisa social, juego interactivo, autonomía en vestido y alimentación, y seguimiento de normas.
            </p>
          </div>
        </div>

        <div class="orientation-diff-note" style="margin-top: 1rem;">
          <strong>💡 ¿Por qué es una Escala "Abreviada"?:</strong> Al niño <em>no se le aplican los 120 ítems</em>. La prueba se divide en <strong>9 rangos etarios</strong>. Cada rango contiene únicamente <strong>3 o 4 ítems por área</strong>. El evaluador sólo administra los ítems pertinentes a la edad del niño, acreditando automáticamente los previos según la regla de la línea base.
        </div>
      </section>

      <!-- SECCIÓN 2: CÁLCULO DE EDAD CRONOLÓGICA Y EDAD CORREGIDA -->
      <section class="orientation-block-card" id="sec-ead-edad-prematurez">
        <span class="orientation-section-badge">PASO 1: DETERMINACIÓN EXACTA DE LA EDAD</span>
        <h3 class="orientation-sec-title">2. Cálculo de Edad y Regla Obligatoria de Prematurez</h3>
        <p class="orientation-p">
          Antes de abrir la escala, es imprescindible determinar la edad exacta del niño en meses y días. Si el infante nació prematuro (antes de las 37 semanas de gestación), su sistema nervioso central aún no ha completado el tiempo de maduración intrauterina.
        </p>

        <div class="orientation-subcard" style="border-left: 3px solid #059669; background: rgba(16, 185, 129, 0.04);">
          <div class="orientation-subcard-title" style="color: #065f46;">Regla de Nelson Ortiz para Niños Prematuros (Pág. 18):</div>
          <p class="orientation-p" style="margin-bottom: 0.5rem;">
            En todo niño nacido con <strong>menos de 37 semanas de gestación</strong>, se debe calcular la <strong>Edad Corregida</strong> durante sus primeros <strong>24 meses de vida</strong> (2 años). A partir de los 2 años, se utiliza la edad cronológica real.
          </p>
          <div style="background: #ffffff; padding: 0.85rem; border-radius: 8px; border: 1px solid rgba(0,0,0,0.08); font-family: monospace; font-size: 0.95rem; font-weight: 700; color: #1e293b; text-align: center;">
            Semanas de Prematurez = 40 semanas - Semanas Reales de Gestación
            <br>
            Edad Corregida = Edad Cronológica - Semanas de Prematurez
          </div>
        </div>

        <!-- CALCULADORA RÁPIDA DE EDAD CORREGIDA -->
        <div style="background: rgba(255, 255, 255, 0.9); border: 1.5px solid rgba(16, 185, 129, 0.25); border-radius: 12px; padding: 1.1rem; margin-top: 1rem;">
          <h4 style="font-size: 0.92rem; font-weight: 800; color: #065f46; margin: 0 0 0.75rem 0;">🧮 Calculadora Rápida de Edad Corregida:</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.85rem; align-items: flex-end;">
            <div>
              <label for="ead-calc-cron-meses" style="display: block; font-size: 0.82rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.3rem;">Edad Cronológica (Meses cumplidos):</label>
              <input type="number" id="ead-calc-cron-meses" min="0" max="60" value="11" style="width: 100%; padding: 0.45rem; border-radius: 8px; border: 1px solid rgba(0,0,0,0.15); font-weight: 700; text-align: center;">
            </div>

            <div>
              <label for="ead-calc-gest-sem" style="display: block; font-size: 0.82rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.3rem;">Semanas de Gestación al Nacer:</label>
              <input type="number" id="ead-calc-gest-sem" min="24" max="42" value="34" style="width: 100%; padding: 0.45rem; border-radius: 8px; border: 1px solid rgba(0,0,0,0.15); font-weight: 700; text-align: center;">
              <div style="font-size: 0.7rem; color: var(--text-tertiary); margin-top: 0.2rem;">Término normal: 38 a 40 semanas</div>
            </div>

            <div style="background: rgba(16, 185, 129, 0.1); border-radius: 8px; padding: 0.6rem; text-align: center;">
              <div style="font-size: 0.74rem; font-weight: 700; text-transform: uppercase; color: #047857;">Edad para Evaluación:</div>
              <div id="ead-calc-result-age" style="font-size: 1.15rem; font-weight: 800; color: #065f46;">9.5 Meses</div>
              <div id="ead-calc-result-rango" style="font-size: 0.72rem; font-weight: 700; color: #1e40af;">Rango 4 (10 a 12m)</div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECCIÓN 3: REGLAS DE PUNTUACIÓN (LÍNEA BASE Y TECHO DE FRACASO) -->
      <section class="orientation-block-card" id="sec-ead-reglas-puntuacion">
        <span class="orientation-section-badge">PASO 2: PROCEDIMIENTO PSICOMÉTRICO EXACTO</span>
        <h3 class="orientation-sec-title">3. ¿Cómo se Obtiene la Puntuación Directa por Área?</h3>
        <p class="orientation-lead-p">
          Cada ítem de la escala se califica con criterio dicotómico estricto:
          <br>• <strong>1 punto:</strong> Si el niño cumple satisfactoriamente el criterio de respuesta.
          <br>• <strong>0 puntos:</strong> Si el niño no logra realizar el ítem o se rehúsa tras tres ensayos.
        </p>

        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">🟢</span>
              <span class="dim-name">Punto de Inicio & Línea Base</span>
            </div>
            <p class="orientation-p">
              1. Comience la evaluación en el <strong>primer ítem correspondiente al rango de edad</strong> del niño.
              <br>2. Si el niño aprueba el primer ítem, continúe hacia adelante.
              <br>3. <strong>Regla de Acreditación Automática:</strong> Cuando el niño aprueba <strong>tres ítems consecutivos</strong>, se consolida la línea base y <em>todos los ítems anteriores de la prueba se califican automáticamente con 1 punto</em> (se asume que las habilidades previas están superadas).
              <br>4. Si el niño falla el primer ítem de su edad, <strong>retroceda de ítem en ítem</strong> hacia atrás hasta que logre aprobar tres ítems seguidos.
            </p>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">🛑</span>
              <span class="dim-name">Techo de Fracaso & Suspensión</span>
            </div>
            <p class="orientation-p">
              1. Una vez consolidada la línea base, continúe administrando los ítems siguientes de mayor complejidad.
              <br>2. <strong>Regla de Parada:</strong> La aplicación en esa área se suspende de manera definitiva en el momento exacto en que el niño <strong>falla tres ítems consecutivos</strong>.
              <br>3. No fatigue al niño administrando ítems superiores si ya se alcanzó el techo de fracaso.
            </p>
          </div>
        </div>

        <!-- DIAGRAMA VISUAL DE CÁLCULO DE PUNTUACIÓN -->
        <div style="background: rgba(0,0,0,0.02); border: 1px solid rgba(0,0,0,0.06); border-radius: 12px; padding: 1.1rem; margin-top: 1rem;">
          <h4 style="font-size: 0.88rem; font-weight: 800; color: var(--text-primary); margin: 0 0 0.5rem 0;">Fórmula Matemática del Puntaje Directo Acumulado (PD):</h4>
          <div style="font-size: 1.15rem; font-weight: 800; color: #1e40af; text-align: center; padding: 0.6rem; background: #ffffff; border-radius: 8px; border: 1px solid rgba(59,130,246,0.2);">
            Puntuación Directa por Área (PD) = (Último Ítem de la Base Acreditada) + (Ítems Posteriores Aprobados)
          </div>
          <p class="orientation-p" style="margin-top: 0.65rem; font-size: 0.82rem; color: var(--text-secondary);">
            <em>Ejemplo:</em> Si el niño consolida su base en el ítem 9 (se acreditan los 9 puntos anteriores) y luego aprueba los ítems 10 y 11, pero falla consecutivamente los ítems 12, 13 y 14 (techo de suspensión), su Puntuación Directa en esa área es: <code>PD = 9 + 2 = 11 puntos</code>.
          </p>
        </div>
      </section>

      <!-- SECCIÓN 4: SIMULADOR INTERACTIVO DE BAREMOS Y SEMÁFORO EN VIVO -->
      <section class="orientation-block-card" id="sec-ead-simulador-baremos" style="border: 2px solid rgba(16, 185, 129, 0.35); background: rgba(255, 255, 255, 0.95);">
        <span class="orientation-section-badge" style="background: rgba(16, 185, 129, 0.15); color: #047857;">HERRAMIENTA CLÍNICA DINÁMICA</span>
        <h3 class="orientation-sec-title">4. Simulador Interactivo de Puntuaciones y Semáforo EAD-1 en Tiempo Real</h3>
        <p class="orientation-lead-p">
          Seleccione el grupo de edad del niño e introduzca las puntuaciones directas obtenidas en cada área (0 a 30 puntos). El sistema calculará instantáneamente el puntaje total, clasificará cada dominio según los cortes de la Tabla 1 de Nelson Ortiz y activará el Semáforo Clínico con su recomendación:
        </p>

        <!-- SELECTOR DE RANGO ETARIO DEL SIMULADOR -->
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem; padding: 0.85rem 1rem; background: rgba(16, 185, 129, 0.08); border-radius: 12px; margin-bottom: 1.25rem; border: 1px solid rgba(16, 185, 129, 0.2);">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <span style="font-size: 1.3rem;">👶</span>
            <label for="ead-sim-age-select" style="font-weight: 800; font-size: 0.9rem; color: #065f46;">Seleccionar Grupo de Edad del Niño:</label>
          </div>
          <select id="ead-sim-age-select" style="padding: 0.45rem 0.9rem; border-radius: 8px; border: 1.5px solid #059669; font-weight: 700; font-size: 0.88rem; color: #065f46; background: #ffffff; cursor: pointer;">
            <option value="0">1. 1 a 3 Meses</option>
            <option value="1">2. 4 a 6 Meses</option>
            <option value="2">3. 7 a 9 Meses</option>
            <option value="3" selected>4. 10 a 12 Meses</option>
            <option value="4">5. 13 a 18 Meses</option>
            <option value="5">6. 19 a 24 Meses</option>
            <option value="6">7. 25 a 36 Meses</option>
            <option value="7">8. 37 a 48 Meses</option>
            <option value="8">9. 49 a 60 Meses</option>
          </select>
        </div>

        <!-- CONTROLES NUMÉRICOS PARA LAS 4 ÁREAS -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 1rem; margin-bottom: 1.25rem;">
          <!-- ÁREA A -->
          <div style="background: rgba(59, 130, 246, 0.05); border: 1.5px solid rgba(59, 130, 246, 0.25); border-radius: 12px; padding: 0.9rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
              <span style="font-size: 0.82rem; font-weight: 800; color: #1e40af;">🏃‍♂️ Motricidad Gruesa (A)</span>
              <span id="ead-sim-badge-a" class="status-badge" style="background: rgba(239,68,68,0.15); color: #b91c1c; font-size: 0.72rem;">ALERTA</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <input type="range" id="ead-sim-slider-a" min="0" max="30" value="11" style="flex: 1; accent-color: #2563eb; cursor: pointer;">
              <input type="number" id="ead-sim-input-a" min="0" max="30" value="11" style="width: 50px; text-align: center; font-weight: 800; border-radius: 6px; border: 1px solid rgba(0,0,0,0.15); padding: 0.25rem;">
            </div>
            <div id="ead-sim-norm-a" style="font-size: 0.72rem; color: var(--text-tertiary); margin-top: 0.35rem;">Cortes: Alerta ≤ 11, Medio 12-13</div>
          </div>

          <!-- ÁREA B -->
          <div style="background: rgba(245, 158, 11, 0.05); border: 1.5px solid rgba(245, 158, 11, 0.25); border-radius: 12px; padding: 0.9rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
              <span style="font-size: 0.82rem; font-weight: 800; color: #b45309;">✍️ Fino-Adaptativa (B)</span>
              <span id="ead-sim-badge-b" class="status-badge" style="background: rgba(59,130,246,0.15); color: #1d4ed8; font-size: 0.72rem;">MEDIO</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <input type="range" id="ead-sim-slider-b" min="0" max="30" value="12" style="flex: 1; accent-color: #d97706; cursor: pointer;">
              <input type="number" id="ead-sim-input-b" min="0" max="30" value="12" style="width: 50px; text-align: center; font-weight: 800; border-radius: 6px; border: 1px solid rgba(0,0,0,0.15); padding: 0.25rem;">
            </div>
            <div id="ead-sim-norm-b" style="font-size: 0.72rem; color: var(--text-tertiary); margin-top: 0.35rem;">Cortes: Alerta ≤ 9, Medio 10-12</div>
          </div>

          <!-- ÁREA C -->
          <div style="background: rgba(16, 185, 129, 0.05); border: 1.5px solid rgba(16, 185, 129, 0.25); border-radius: 12px; padding: 0.9rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
              <span style="font-size: 0.82rem; font-weight: 800; color: #047857;">🗣️ Lenguaje (C)</span>
              <span id="ead-sim-badge-c" class="status-badge" style="background: rgba(59,130,246,0.15); color: #1d4ed8; font-size: 0.72rem;">MEDIO</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <input type="range" id="ead-sim-slider-c" min="0" max="30" value="11" style="flex: 1; accent-color: #059669; cursor: pointer;">
              <input type="number" id="ead-sim-input-c" min="0" max="30" value="11" style="width: 50px; text-align: center; font-weight: 800; border-radius: 6px; border: 1px solid rgba(0,0,0,0.15); padding: 0.25rem;">
            </div>
            <div id="ead-sim-norm-c" style="font-size: 0.72rem; color: var(--text-tertiary); margin-top: 0.35rem;">Cortes: Alerta ≤ 9, Medio 10-12</div>
          </div>

          <!-- ÁREA D -->
          <div style="background: rgba(147, 51, 234, 0.05); border: 1.5px solid rgba(147, 51, 234, 0.25); border-radius: 12px; padding: 0.9rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
              <span style="font-size: 0.82rem; font-weight: 800; color: #6b21a8;">🤝 Personal-Social (D)</span>
              <span id="ead-sim-badge-d" class="status-badge" style="background: rgba(14,165,233,0.15); color: #0369a1; font-size: 0.72rem;">MEDIO-ALTO</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <input type="range" id="ead-sim-slider-d" min="0" max="30" value="13" style="flex: 1; accent-color: #7c3aed; cursor: pointer;">
              <input type="number" id="ead-sim-input-d" min="0" max="30" value="13" style="width: 50px; text-align: center; font-weight: 800; border-radius: 6px; border: 1px solid rgba(0,0,0,0.15); padding: 0.25rem;">
            </div>
            <div id="ead-sim-norm-d" style="font-size: 0.72rem; color: var(--text-tertiary); margin-top: 0.35rem;">Cortes: Alerta ≤ 9, M.Alto 13-14</div>
          </div>
        </div>

        <!-- RESULTADOS GLOBALES Y SEMÁFORO DEL NIÑO -->
        <div style="background: #ffffff; border: 1.5px solid rgba(0,0,0,0.08); border-radius: 14px; padding: 1.15rem; box-shadow: 0 4px 16px rgba(0,0,0,0.03);">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; border-bottom: 1px solid rgba(0,0,0,0.06); padding-bottom: 0.75rem;">
            <div>
              <span style="font-size: 0.74rem; font-weight: 800; text-transform: uppercase; color: var(--text-tertiary); letter-spacing: 0.05em;">PUNTAJE TOTAL ACUMULADO (A + B + C + D):</span>
              <div style="display: flex; align-items: baseline; gap: 0.6rem; margin-top: 0.2rem;">
                <span id="ead-sim-total-num" style="font-size: 2rem; font-weight: 900; color: #1e293b;">47</span>
                <span style="font-size: 0.88rem; color: var(--text-secondary);">/ 120 Puntos Máximos</span>
              </div>
            </div>

            <div style="text-align: right;">
              <span style="font-size: 0.74rem; font-weight: 800; text-transform: uppercase; color: var(--text-tertiary);">CLASIFICACIÓN TOTAL:</span>
              <div id="ead-sim-total-badge" style="font-size: 1rem; font-weight: 800; padding: 0.35rem 0.9rem; border-radius: 8px; background: rgba(59,130,246,0.15); color: #1d4ed8; margin-top: 0.2rem;">
                MEDIO (Desarrollo Global Armónico)
              </div>
            </div>
          </div>

          <!-- BANNER DINÁMICO DE RECOMENDACIÓN CLÍNICA -->
          <div id="ead-sim-verdict-banner" style="margin-top: 0.85rem; padding: 0.85rem 1.1rem; border-radius: 10px; background: rgba(239,68,68,0.08); border-left: 4px solid #ef4444; font-size: 0.85rem; line-height: 1.55; color: var(--text-primary);">
            <strong style="color: #b91c1c;">⚠️ ALERTA EN MOTRICIDAD GRUESA (Puntaje ≤ 11):</strong> Aunque el puntaje total se ubica en rango medio, la disarmonía en el Área A constituye un signo de sospecha patológica. <em>Conducta indicada por Nelson Ortiz:</em> Remitir a valoración neuropediátrica o fisioterapia para descartar alteración del tono muscular.
          </div>
        </div>
      </section>

      <!-- SECCIÓN 5: CASO CLÍNICO RESUELTO GUIADO PASO A PASO -->
      <section class="orientation-block-card" id="sec-ead-caso-clinico">
        <span class="orientation-section-badge">EJEMPLO PRÁCTICO GUIADO</span>
        <h3 class="orientation-sec-title">5. Caso Clínico Resuelto: "Mateo", 11 Meses de Edad</h3>
        <p class="orientation-lead-p">
          Para comprender a la perfección la aplicación de las reglas, examinemos el caso real de Mateo:
        </p>

        <div class="orientation-subcard">
          <div class="orientation-subcard-title">Fase 1: Filiación y Corrección por Prematurez</div>
          <p class="orientation-p">
            • <strong>Edad Cronológica:</strong> 11 meses (44 semanas de vida posnatal).
            <br>• <strong>Antecedente Perinatal:</strong> Nació a las 34 semanas de gestación (prematuro moderado).
            <br>• <strong>Cálculo:</strong> Como es menor de 24 meses, se corrige la edad:
            <br><code>Semanas a descontar = 40 - 34 = 6 semanas (1.5 meses)</code>
            <br><code>Edad Corregida = 11 meses - 1.5 meses = 9.5 meses</code>
            <br>• <strong>Decisión:</strong> Según la tabla de rangos, a los 9.5 meses le corresponde el <strong>Rango 4 (10 a 12 meses)</strong>.
          </p>
        </div>

        <div class="orientation-subcard">
          <div class="orientation-subcard-title">Fase 2: Aplicación de Ítems en Motricidad Gruesa (Área A)</div>
          <p class="orientation-p">
            • El evaluador comienza en el ítem 10 (primer ítem del rango 4): *"Gatea bien"*. Mateo no logra sostenerse en 4 puntos ni gatear (Falla = 0).
            <br>• Se retrocede al ítem 9: *"Se sienta por sí solo"*. Lo logra con éxito (Pasa = 1).
            <br>• Se aplican los ítems anteriores 8 y 7, los cuales aprueba con fluidez.
            <br>• <strong>Línea Base Establecida:</strong> Al tener 3 aprobaciones consecutivas (ítems 7, 8 y 9), se acreditan automáticamente los ítems del 1 al 9 → <strong>9 puntos base</strong>.
            <br>• Luego se avanza hacia adelante: Aprueba ítem 11 (*"Se sostiene de pie apoyado"*), pero falla los ítems 12, 13 y 14 consecutivos → <strong>Techo alcanzado</strong>.
            <br>• <strong>Puntaje Directo Área A:</strong> <code>9 (base) + 2 (aprobados) = <strong>11 puntos</strong></code>.
          </p>
        </div>

        <div class="orientation-subcard">
          <div class="orientation-subcard-title">Fase 3: Consulta en la Tabla 1 Oficial y Diagnóstico</div>
          <p class="orientation-p">
            Al contrastar los 11 puntos de Mateo en el Rango 10-12 meses de la Tabla 1:
            <br>• <strong>Motricidad Gruesa:</strong> 11 puntos → Cae exactamente en el rango <strong>0-11 = ALERTA (Rojo)</strong>.
            <br>• Las demás áreas puntuaron en rango Medio.
            <br>• <strong>Informe Clínico:</strong> Lactante con desarrollo global adecuado pero con <em>retraso específico en locomoción gruesa</em> que amerita interconsulta especializada.
          </p>
        </div>
      </section>

      <!-- SECCIÓN 6: TABLA NO. 1 OFICIAL COMPLETA DE BAREMOS NORMATIVOS -->
      <section class="orientation-block-card" id="sec-ead-tabla-maestra" style="border: 2px solid rgba(16, 185, 129, 0.25);">
        <span class="orientation-section-badge" style="background: rgba(16, 185, 129, 0.12); color: #047857;">TABLA No. 1 OFICIAL (PÁGS. 48 Y 50 DEL MANUAL)</span>
        <h3 class="orientation-sec-title">6. Resumen de Parámetros Normativos Oficiales (0 a 60 Meses)</h3>
        <p class="orientation-lead-p">
          Consulte la matriz completa de puntos de corte de Nelson Ortiz. La fila correspondiente al grupo etario seleccionado en el simulador se destaca visualmente:
        </p>

        <div class="orientation-table-wrapper" style="overflow-x: auto; margin: 1.25rem 0;">
          <table class="orientation-data-table" id="ead-table-1-dom" style="font-size: 0.82rem; width: 100%; border-collapse: collapse; min-width: 820px;">
            <thead>
              <tr style="background: rgba(16, 185, 129, 0.12); text-align: center;">
                <th rowspan="2" style="padding: 0.75rem 0.6rem; border: 1px solid rgba(0,0,0,0.1); font-weight: 800; color: #065f46;">Grupo de Edad (Meses)</th>
                <th colspan="4" style="padding: 0.5rem; border: 1px solid rgba(0,0,0,0.1); font-weight: 800; color: #1e40af; background: rgba(59, 130, 246, 0.08);">Motricidad Gruesa (A)</th>
                <th colspan="4" style="padding: 0.5rem; border: 1px solid rgba(0,0,0,0.1); font-weight: 800; color: #b45309; background: rgba(245, 158, 11, 0.08);">Motricidad Fina (B) Adaptativa</th>
                <th colspan="4" style="padding: 0.5rem; border: 1px solid rgba(0,0,0,0.1); font-weight: 800; color: #047857; background: rgba(16, 185, 129, 0.08);">Audición y Lenguaje (C)</th>
                <th colspan="4" style="padding: 0.5rem; border: 1px solid rgba(0,0,0,0.1); font-weight: 800; color: #6b21a8; background: rgba(147, 51, 234, 0.08);">Personal-Social (D)</th>
                <th colspan="4" style="padding: 0.5rem; border: 1px solid rgba(0,0,0,0.1); font-weight: 800; color: #0f172a; background: rgba(0,0,0,0.06);">Puntaje TOTAL</th>
              </tr>
              <tr style="font-size: 0.74rem; font-weight: 700; text-align: center;">
                <!-- Gruesa -->
                <th style="padding: 0.4rem 0.3rem; background: rgba(239, 68, 68, 0.12); color: #b91c1c; border: 1px solid rgba(0,0,0,0.08);">Alerta</th>
                <th style="padding: 0.4rem 0.3rem; background: rgba(59, 130, 246, 0.08); color: #1d4ed8; border: 1px solid rgba(0,0,0,0.08);">Medio</th>
                <th style="padding: 0.4rem 0.3rem; background: rgba(14, 165, 233, 0.1); color: #0369a1; border: 1px solid rgba(0,0,0,0.08);">M.Alto</th>
                <th style="padding: 0.4rem 0.3rem; background: rgba(16, 185, 129, 0.12); color: #047857; border: 1px solid rgba(0,0,0,0.08);">Alto</th>
                <!-- Fina -->
                <th style="padding: 0.4rem 0.3rem; background: rgba(239, 68, 68, 0.12); color: #b91c1c; border: 1px solid rgba(0,0,0,0.08);">Alerta</th>
                <th style="padding: 0.4rem 0.3rem; background: rgba(59, 130, 246, 0.08); color: #1d4ed8; border: 1px solid rgba(0,0,0,0.08);">Medio</th>
                <th style="padding: 0.4rem 0.3rem; background: rgba(14, 165, 233, 0.1); color: #0369a1; border: 1px solid rgba(0,0,0,0.08);">M.Alto</th>
                <th style="padding: 0.4rem 0.3rem; background: rgba(16, 185, 129, 0.12); color: #047857; border: 1px solid rgba(0,0,0,0.08);">Alto</th>
                <!-- Lenguaje -->
                <th style="padding: 0.4rem 0.3rem; background: rgba(239, 68, 68, 0.12); color: #b91c1c; border: 1px solid rgba(0,0,0,0.08);">Alerta</th>
                <th style="padding: 0.4rem 0.3rem; background: rgba(59, 130, 246, 0.08); color: #1d4ed8; border: 1px solid rgba(0,0,0,0.08);">Medio</th>
                <th style="padding: 0.4rem 0.3rem; background: rgba(14, 165, 233, 0.1); color: #0369a1; border: 1px solid rgba(0,0,0,0.08);">M.Alto</th>
                <th style="padding: 0.4rem 0.3rem; background: rgba(16, 185, 129, 0.12); color: #047857; border: 1px solid rgba(0,0,0,0.08);">Alto</th>
                <!-- Social -->
                <th style="padding: 0.4rem 0.3rem; background: rgba(239, 68, 68, 0.12); color: #b91c1c; border: 1px solid rgba(0,0,0,0.08);">Alerta</th>
                <th style="padding: 0.4rem 0.3rem; background: rgba(59, 130, 246, 0.08); color: #1d4ed8; border: 1px solid rgba(0,0,0,0.08);">Medio</th>
                <th style="padding: 0.4rem 0.3rem; background: rgba(14, 165, 233, 0.1); color: #0369a1; border: 1px solid rgba(0,0,0,0.08);">M.Alto</th>
                <th style="padding: 0.4rem 0.3rem; background: rgba(16, 185, 129, 0.12); color: #047857; border: 1px solid rgba(0,0,0,0.08);">Alto</th>
                <!-- Total -->
                <th style="padding: 0.4rem 0.3rem; background: rgba(239, 68, 68, 0.12); color: #b91c1c; border: 1px solid rgba(0,0,0,0.08);">Alerta</th>
                <th style="padding: 0.4rem 0.3rem; background: rgba(59, 130, 246, 0.08); color: #1d4ed8; border: 1px solid rgba(0,0,0,0.08);">Medio</th>
                <th style="padding: 0.4rem 0.3rem; background: rgba(14, 165, 233, 0.1); color: #0369a1; border: 1px solid rgba(0,0,0,0.08);">M.Alto</th>
                <th style="padding: 0.4rem 0.3rem; background: rgba(16, 185, 129, 0.12); color: #047857; border: 1px solid rgba(0,0,0,0.08);">Alto</th>
              </tr>
            </thead>
            <tbody>
              <!-- RANGO 1 -->
              <tr data-ead-row-idx="0" style="text-align: center; border-bottom: 1px solid rgba(0,0,0,0.06); transition: all 0.2s ease;">
                <td style="padding: 0.55rem; font-weight: 800; background: rgba(0,0,0,0.02); text-align: left;">1 a 3 Meses</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 1</td>
                <td>2 - 3</td>
                <td>4 - 5</td>
                <td style="color: #047857; font-weight: 700;">6+</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 1</td>
                <td>2 - 3</td>
                <td>4 - 5</td>
                <td style="color: #047857; font-weight: 700;">6+</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 1</td>
                <td>2 - 3</td>
                <td>4 - 5</td>
                <td style="color: #047857; font-weight: 700;">6+</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 1</td>
                <td>2 - 3</td>
                <td>4 - 5</td>
                <td style="color: #047857; font-weight: 700;">6+</td>
                <td style="color: #b91c1c; font-weight: 800; background: rgba(239,68,68,0.06);">0 - 6</td>
                <td style="font-weight: 700;">7 - 13</td>
                <td>14 - 22</td>
                <td style="color: #047857; font-weight: 800; background: rgba(16,185,129,0.06);">23+</td>
              </tr>
              <!-- RANGO 2 -->
              <tr data-ead-row-idx="1" style="text-align: center; border-bottom: 1px solid rgba(0,0,0,0.06); background: rgba(0,0,0,0.01); transition: all 0.2s ease;">
                <td style="padding: 0.55rem; font-weight: 800; background: rgba(0,0,0,0.02); text-align: left;">4 a 6 Meses</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 4</td>
                <td>5 - 6</td>
                <td>7 - 9</td>
                <td style="color: #047857; font-weight: 700;">10+</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 4</td>
                <td>5 - 6</td>
                <td>7 - 9</td>
                <td style="color: #047857; font-weight: 700;">10+</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 4</td>
                <td>5 - 6</td>
                <td>7 - 9</td>
                <td style="color: #047857; font-weight: 700;">10+</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 4</td>
                <td>5 - 6</td>
                <td>7 - 9</td>
                <td style="color: #047857; font-weight: 700;">10+</td>
                <td style="color: #b91c1c; font-weight: 800; background: rgba(239,68,68,0.06);">0 - 19</td>
                <td style="font-weight: 700;">20 - 27</td>
                <td>28 - 34</td>
                <td style="color: #047857; font-weight: 800; background: rgba(16,185,129,0.06);">35+</td>
              </tr>
              <!-- RANGO 3 -->
              <tr data-ead-row-idx="2" style="text-align: center; border-bottom: 1px solid rgba(0,0,0,0.06); transition: all 0.2s ease;">
                <td style="padding: 0.55rem; font-weight: 800; background: rgba(0,0,0,0.02); text-align: left;">7 a 9 Meses</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 7</td>
                <td>8 - 10</td>
                <td>11 - 13</td>
                <td style="color: #047857; font-weight: 700;">14+</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 7</td>
                <td>8 - 10</td>
                <td>11 - 12</td>
                <td style="color: #047857; font-weight: 700;">13+</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 7</td>
                <td>8 - 9</td>
                <td>10 - 12</td>
                <td style="color: #047857; font-weight: 700;">13+</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 7</td>
                <td>8 - 9</td>
                <td>10 - 12</td>
                <td style="color: #047857; font-weight: 700;">13+</td>
                <td style="color: #b91c1c; font-weight: 800; background: rgba(239,68,68,0.06);">0 - 31</td>
                <td style="font-weight: 700;">32 - 39</td>
                <td>40 - 48</td>
                <td style="color: #047857; font-weight: 800; background: rgba(16,185,129,0.06);">49+</td>
              </tr>
              <!-- RANGO 4 -->
              <tr data-ead-row-idx="3" style="text-align: center; border-bottom: 1px solid rgba(0,0,0,0.06); background: rgba(16, 185, 129, 0.08); transition: all 0.2s ease;">
                <td style="padding: 0.55rem; font-weight: 800; background: rgba(0,0,0,0.02); text-align: left; color: #065f46;">10 a 12 Meses ⭐</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 11</td>
                <td>12 - 13</td>
                <td>14 - 16</td>
                <td style="color: #047857; font-weight: 700;">17+</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 9</td>
                <td>10 - 12</td>
                <td>13 - 14</td>
                <td style="color: #047857; font-weight: 700;">15+</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 9</td>
                <td>10 - 12</td>
                <td>13 - 14</td>
                <td style="color: #047857; font-weight: 700;">15+</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 9</td>
                <td>10 - 12</td>
                <td>13 - 14</td>
                <td style="color: #047857; font-weight: 700;">15+</td>
                <td style="color: #b91c1c; font-weight: 800; background: rgba(239,68,68,0.06);">0 - 42</td>
                <td style="font-weight: 700;">43 - 49</td>
                <td>50 - 56</td>
                <td style="color: #047857; font-weight: 800; background: rgba(16,185,129,0.06);">57+</td>
              </tr>
              <!-- RANGO 5 -->
              <tr data-ead-row-idx="4" style="text-align: center; border-bottom: 1px solid rgba(0,0,0,0.06); transition: all 0.2s ease;">
                <td style="padding: 0.55rem; font-weight: 800; background: rgba(0,0,0,0.02); text-align: left;">13 a 18 Meses</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 13</td>
                <td>14 - 16</td>
                <td>17 - 19</td>
                <td style="color: #047857; font-weight: 700;">20+</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 12</td>
                <td>13 - 15</td>
                <td>16 - 18</td>
                <td style="color: #047857; font-weight: 700;">19+</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 12</td>
                <td>13 - 14</td>
                <td>15 - 17</td>
                <td style="color: #047857; font-weight: 700;">18+</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 12</td>
                <td>13 - 14</td>
                <td>15 - 17</td>
                <td style="color: #047857; font-weight: 700;">18+</td>
                <td style="color: #b91c1c; font-weight: 800; background: rgba(239,68,68,0.06);">0 - 51</td>
                <td style="font-weight: 700;">52 - 60</td>
                <td>61 - 69</td>
                <td style="color: #047857; font-weight: 800; background: rgba(16,185,129,0.06);">70+</td>
              </tr>
              <!-- RANGO 6 -->
              <tr data-ead-row-idx="5" style="text-align: center; border-bottom: 1px solid rgba(0,0,0,0.06); background: rgba(0,0,0,0.01); transition: all 0.2s ease;">
                <td style="padding: 0.55rem; font-weight: 800; background: rgba(0,0,0,0.02); text-align: left;">19 a 24 Meses</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 16</td>
                <td>17 - 19</td>
                <td>20 - 23</td>
                <td style="color: #047857; font-weight: 700;">24+</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 14</td>
                <td>15 - 18</td>
                <td>19 - 20</td>
                <td style="color: #047857; font-weight: 700;">21+</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 13</td>
                <td>14 - 17</td>
                <td>18 - 20</td>
                <td style="color: #047857; font-weight: 700;">21+</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 14</td>
                <td>15 - 17</td>
                <td>18 - 22</td>
                <td style="color: #047857; font-weight: 700;">23+</td>
                <td style="color: #b91c1c; font-weight: 800; background: rgba(239,68,68,0.06);">0 - 61</td>
                <td style="font-weight: 700;">62 - 71</td>
                <td>72 - 83</td>
                <td style="color: #047857; font-weight: 800; background: rgba(16,185,129,0.06);">84+</td>
              </tr>
              <!-- RANGO 7 -->
              <tr data-ead-row-idx="6" style="text-align: center; border-bottom: 1px solid rgba(0,0,0,0.06); transition: all 0.2s ease;">
                <td style="padding: 0.55rem; font-weight: 800; background: rgba(0,0,0,0.02); text-align: left;">25 a 36 Meses</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 19</td>
                <td>20 - 23</td>
                <td>24 - 27</td>
                <td style="color: #047857; font-weight: 700;">28+</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 18</td>
                <td>19 - 21</td>
                <td>22 - 24</td>
                <td style="color: #047857; font-weight: 700;">25+</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 17</td>
                <td>18 - 21</td>
                <td>22 - 24</td>
                <td style="color: #047857; font-weight: 700;">25+</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 18</td>
                <td>19 - 22</td>
                <td>23 - 27</td>
                <td style="color: #047857; font-weight: 700;">28+</td>
                <td style="color: #b91c1c; font-weight: 800; background: rgba(239,68,68,0.06);">0 - 74</td>
                <td style="font-weight: 700;">75 - 86</td>
                <td>87 - 100</td>
                <td style="color: #047857; font-weight: 800; background: rgba(16,185,129,0.06);">101+</td>
              </tr>
              <!-- RANGO 8 -->
              <tr data-ead-row-idx="7" style="text-align: center; border-bottom: 1px solid rgba(0,0,0,0.06); background: rgba(0,0,0,0.01); transition: all 0.2s ease;">
                <td style="padding: 0.55rem; font-weight: 800; background: rgba(0,0,0,0.02); text-align: left;">37 a 48 Meses</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 22</td>
                <td>23 - 26</td>
                <td>27 - 29</td>
                <td style="color: #047857; font-weight: 700;">30</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 21</td>
                <td>22 - 24</td>
                <td>25 - 28</td>
                <td style="color: #047857; font-weight: 700;">29+</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 21</td>
                <td>22 - 25</td>
                <td>26 - 29</td>
                <td style="color: #047857; font-weight: 700;">30</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 22</td>
                <td>23 - 26</td>
                <td>27 - 29</td>
                <td style="color: #047857; font-weight: 700;">30</td>
                <td style="color: #b91c1c; font-weight: 800; background: rgba(239,68,68,0.06);">0 - 89</td>
                <td style="font-weight: 700;">90 - 100</td>
                <td>101 - 114</td>
                <td style="color: #047857; font-weight: 800; background: rgba(16,185,129,0.06);">115+</td>
              </tr>
              <!-- RANGO 9 -->
              <tr data-ead-row-idx="8" style="text-align: center; transition: all 0.2s ease;">
                <td style="padding: 0.55rem; font-weight: 800; background: rgba(0,0,0,0.02); text-align: left;">49 a 60 Meses</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 26</td>
                <td>27 - 29</td>
                <td>30</td>
                <td style="color: #047857; font-weight: 700;">30</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 23</td>
                <td>24 - 28</td>
                <td>29</td>
                <td style="color: #047857; font-weight: 700;">30</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 24</td>
                <td>25 - 28</td>
                <td>29</td>
                <td style="color: #047857; font-weight: 700;">30</td>
                <td style="color: #b91c1c; font-weight: 700;">0 - 25</td>
                <td>26 - 28</td>
                <td>29</td>
                <td style="color: #047857; font-weight: 700;">30</td>
                <td style="color: #b91c1c; font-weight: 800; background: rgba(239,68,68,0.06);">0 - 101</td>
                <td style="font-weight: 700;">102 - 113</td>
                <td>114 - 119</td>
                <td style="color: #047857; font-weight: 800; background: rgba(16,185,129,0.06);">120</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="orientation-diff-note">
          <strong>💡 Fundamentación Psicométrica de Nelson Ortiz (Pág. 50):</strong>
          <br>• <strong>Alerta:</strong> Corresponde a puntajes inferiores al percentil más próximo al <strong>5% inferior</strong> del grupo normativo (T &lt; 35). Requiere derivación médica inmediata.
          <br>• <strong>Medio:</strong> Corresponde a puntajes comprendidos entre el percentil <strong>5% y el 50%</strong> (T = 36 - 50). Desarrollo típico en curso.
          <br>• <strong>Medio-Alto:</strong> Corresponde a puntajes comprendidos entre el percentil <strong>50% y el 95%</strong> (T = 51 - 65). Habilidades afianzadas.
          <br>• <strong>Alto:</strong> Corresponde a puntajes superiores al percentil <strong>95%</strong> (T &gt; 65). Maduración acelerada.
        </div>
      </section>

      <!-- SECCIÓN 7: NAVEGADOR ETARIO DINÁMICO DE LOS 9 RANGOS -->
      <section class="orientation-block-card" id="sec-ead-navegador" style="border: 2px solid rgba(59, 130, 246, 0.25);">
        <span class="orientation-section-badge" style="background: rgba(59, 130, 246, 0.12); color: #1d4ed8;">EXPLORADOR DE ÍTEMS Y CONDICIONES DE APLICACIÓN</span>
        <h3 class="orientation-sec-title">7. Criterios de Evaluación por Rango Etario (0 a 60 Meses)</h3>
        <p class="orientation-p">
          Seleccione el rango de edad para consultar los ítems específicos, el material requerido, la consigna exacta y el criterio de aprobación para cada una de las cuatro áreas:
        </p>

        <!-- BOTONES SELECTORES DE EDAD (TABS) -->
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.25rem;" id="ead-age-tabs-bar">
          <button type="button" class="ead-age-tab-btn" data-range-idx="0" style="padding: 0.5rem 0.9rem; border-radius: 10px; border: 1px solid rgba(0,0,0,0.12); background: rgba(0,0,0,0.03); color: var(--text-primary); font-weight: 700; font-size: 0.84rem; cursor: pointer; transition: all 0.2s ease;">1. 0 a 3 Meses</button>
          <button type="button" class="ead-age-tab-btn" data-range-idx="1" style="padding: 0.5rem 0.9rem; border-radius: 10px; border: 1px solid rgba(0,0,0,0.12); background: rgba(0,0,0,0.03); color: var(--text-primary); font-weight: 700; font-size: 0.84rem; cursor: pointer; transition: all 0.2s ease;">2. 4 a 6 Meses</button>
          <button type="button" class="ead-age-tab-btn" data-range-idx="2" style="padding: 0.5rem 0.9rem; border-radius: 10px; border: 1px solid rgba(0,0,0,0.12); background: rgba(0,0,0,0.03); color: var(--text-primary); font-weight: 700; font-size: 0.84rem; cursor: pointer; transition: all 0.2s ease;">3. 7 a 9 Meses</button>
          <button type="button" class="ead-age-tab-btn active" data-range-idx="3" style="padding: 0.5rem 0.9rem; border-radius: 10px; border: 1.5px solid #059669; background: #059669; color: #ffffff; font-weight: 700; font-size: 0.84rem; cursor: pointer; transition: all 0.2s ease;">4. 10 a 12 Meses</button>
          <button type="button" class="ead-age-tab-btn" data-range-idx="4" style="padding: 0.5rem 0.9rem; border-radius: 10px; border: 1px solid rgba(0,0,0,0.12); background: rgba(0,0,0,0.03); color: var(--text-primary); font-weight: 700; font-size: 0.84rem; cursor: pointer; transition: all 0.2s ease;">5. 13 a 18 Meses</button>
          <button type="button" class="ead-age-tab-btn" data-range-idx="5" style="padding: 0.5rem 0.9rem; border-radius: 10px; border: 1px solid rgba(0,0,0,0.12); background: rgba(0,0,0,0.03); color: var(--text-primary); font-weight: 700; font-size: 0.84rem; cursor: pointer; transition: all 0.2s ease;">6. 19 a 24 Meses</button>
          <button type="button" class="ead-age-tab-btn" data-range-idx="6" style="padding: 0.5rem 0.9rem; border-radius: 10px; border: 1px solid rgba(0,0,0,0.12); background: rgba(0,0,0,0.03); color: var(--text-primary); font-weight: 700; font-size: 0.84rem; cursor: pointer; transition: all 0.2s ease;">7. 25 a 36 Meses</button>
          <button type="button" class="ead-age-tab-btn" data-range-idx="7" style="padding: 0.5rem 0.9rem; border-radius: 10px; border: 1px solid rgba(0,0,0,0.12); background: rgba(0,0,0,0.03); color: var(--text-primary); font-weight: 700; font-size: 0.84rem; cursor: pointer; transition: all 0.2s ease;">8. 37 a 48 Meses</button>
          <button type="button" class="ead-age-tab-btn" data-range-idx="8" style="padding: 0.5rem 0.9rem; border-radius: 10px; border: 1px solid rgba(0,0,0,0.12); background: rgba(0,0,0,0.03); color: var(--text-primary); font-weight: 700; font-size: 0.84rem; cursor: pointer; transition: all 0.2s ease;">9. 49 a 60 Meses</button>
        </div>

        <!-- CONTENEDOR DE DETALLE DEL RANGO SELECCIONADO (DINÁMICO) -->
        <div id="ead-range-content-box" style="transition: opacity 0.2s ease;">
          <!-- CONTENIDO INYECTADO DINÁMICAMENTE POR JS -->
        </div>
      </section>

      <!-- SECCIÓN 8: TABLA DE VALIJA DE MATERIALES Y CITAS -->
      <section class="orientation-block-card" id="sec-ead-valija-materiales">
        <span class="orientation-section-badge">EQUIPO OFICIAL ESTANDARIZADO</span>
        <h3 class="orientation-sec-title">8. Tabla de la Valija de Materiales de Evaluación EAD-1 (Págs. 16-17)</h3>
        <p class="orientation-p">
          Para garantizar la validez psicométrica, el evaluador debe utilizar exclusivamente los 11 materiales reglamentarios de la batería:
        </p>

        <div class="orientation-table-wrapper" style="overflow-x: auto; margin-top: 1rem;">
          <table class="orientation-data-table" style="font-size: 0.84rem; width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: rgba(0,0,0,0.04); text-align: left;">
                <th style="padding: 0.65rem 0.8rem;">Material</th>
                <th style="padding: 0.65rem 0.8rem;">Especificaciones Técnicas Oficiales</th>
                <th style="padding: 0.65rem 0.8rem;">Área de Aplicación</th>
                <th style="padding: 0.65rem 0.8rem;">Uso Clínico Principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Cubos de Madera</strong></td>
                <td>10 cubos de madera maciza de 2.5 cm de arista (3 rojos, 3 azules y 4 amarillos).</td>
                <td><span class="status-badge" style="background: rgba(245,158,11,0.12); color: #b45309;">Área B (Fina)</span></td>
                <td>Torre de 2, 4, 6 y 8 cubos; tren con chimenea, puente de 3 y puerta de 4.</td>
              </tr>
              <tr>
                <td><strong>2. Cuentas y Cordón</strong></td>
                <td>6 cuentas esféricas de 1.5 cm de diámetro con orificio central y cordón con punta endurecida.</td>
                <td><span class="status-badge" style="background: rgba(245,158,11,0.12); color: #b45309;">Área B (Fina)</span></td>
                <td>Enhebrado de cuentas, destreza bimanual asimétrica y coordinación ojo-mano.</td>
              </tr>
              <tr>
                <td><strong>3. Tijeras de Punta Roma</strong></td>
                <td>Tijeras metálicas pequeñas de 10-12 cm con extremos redondeados de seguridad.</td>
                <td><span class="status-badge" style="background: rgba(245,158,11,0.12); color: #b45309;">Área B (Fina)</span></td>
                <td>Corte libre de papel, flecos a los 3 años y corte sobre línea recta a los 4 años.</td>
              </tr>
              <tr>
                <td><strong>4. Pelota de Caucho</strong></td>
                <td>Pelota de caucho flexible inflable de 15 cm de diámetro, ligera y de color llamativo.</td>
                <td><span class="status-badge" style="background: rgba(59,130,246,0.12); color: #1d4ed8;">Área A (Gruesa)</span></td>
                <td>Patear balón a los 2 años, lanzar con una mano y atrapar al rebote a los 4 años.</td>
              </tr>
              <tr>
                <td><strong>5. Espejo Mediano</strong></td>
                <td>Espejo irrompible de acrílico de 20 x 30 cm con marco protector sin filos.</td>
                <td><span class="status-badge" style="background: rgba(147,51,234,0.12); color: #7c3aed;">Área D (Social)</span></td>
                <td>Auto-reconocimiento en el espejo, sonrisa social y respuesta ante la propia imagen.</td>
              </tr>
              <tr>
                <td><strong>6. Campanilla / Sonajero</strong></td>
                <td>Campanilla pequeña con asa de sonido claro o maraca plástica no estridente.</td>
                <td><span class="status-badge" style="background: rgba(16,185,129,0.12); color: #047857;">Área C (Lenguaje)</span></td>
                <td>Localización sonora lateral, reflejo cócleo-palpebral y orientación auditiva.</td>
              </tr>
              <tr>
                <td><strong>7. Figuras Geométricas</strong></td>
                <td>Círculos, cuadrados y triángulos en madera/plástico en 2 tamaños (8 y 5 cm) y 3 colores.</td>
                <td><span class="status-badge" style="background: rgba(245,158,11,0.12); color: #b45309;">Áreas B y C</span></td>
                <td>Discriminación perceptiva de forma, tamaño y color, clasificación por atributos.</td>
              </tr>
              <tr>
                <td><strong>8. 10 Objetos de Reconocimiento</strong></td>
                <td>Moneda, botón grande, carro, vaca, caballo, muñeca, ping-pong, cuchara, llave, pato.</td>
                <td><span class="status-badge" style="background: rgba(16,185,129,0.12); color: #047857;">Área C (Lenguaje)</span></td>
                <td>Nombrar objetos por uso, vocabulario comprensivo y denominación receptiva.</td>
              </tr>
              <tr>
                <td><strong>9. Taza y Plato de Plástico</strong></td>
                <td>Taza plástica irrompible con asa y plato hondo pequeño de colores vivos.</td>
                <td><span class="status-badge" style="background: rgba(147,51,234,0.12); color: #7c3aed;">Área D (Social)</span></td>
                <td>Uso funcional de instrumentos para la alimentación y juego simbólico inicial.</td>
              </tr>
              <tr>
                <td><strong>10. Cuentos Infantiles</strong></td>
                <td>Libros ilustrados con páginas gruesas plastificadas y escenas cotidianas claras.</td>
                <td><span class="status-badge" style="background: rgba(16,185,129,0.12); color: #047857;">Áreas C y D</span></td>
                <td>Paso de hojas individualmente, relato descriptivo y señalar personajes nombrados.</td>
              </tr>
              <tr>
                <td><strong>11. Papel y Lápiz / Crayones</strong></td>
                <td>Hojas blancas de papel bond tamaño carta y crayones gruesos cilíndricos no tóxicos.</td>
                <td><span class="status-badge" style="background: rgba(245,158,11,0.12); color: #b45309;">Área B (Fina)</span></td>
                <td>Garabato espontáneo, copia de línea vertical, círculo, cruz, cuadrado y figura humana.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- CITAS VERIFICADAS -->
        <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; margin-top: 1.25rem; padding: 0.85rem 1rem; background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 12px;">
          <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #047857; margin-bottom: 0.2rem;">
            📖 Cita Verificada en la Biblioteca de PsiOS (Clic para abrir en Lector PDF Nativo):
          </div>
          <button type="button" class="btn-book-citation-jump" data-book-id="nelson-ortiz-escala-abreviada" data-page="21" title="Consultar administración y baremos en Nelson Ortiz">
            <span>📖</span>
            <span><strong>Nelson Ortiz:</strong> Baremos, Puntos de Corte y Calificación EAD-1 (Pág. 21) →</span>
          </button>
        </div>
      </section>

      <!-- BOTÓN DE RETORNO AL FINAL -->
      <div style="display: flex; justify-content: flex-start; margin-top: 1rem;">
        <button type="button" class="pedagogical-link-btn" id="btn-bottom-back-ead-def" style="background: #059669; padding: 0.8rem 1.4rem;">
          <span>← Volver a Fundamentos de Neurodesarrollo</span>
        </button>
      </div>
    </div>
  `,

  // =========================================================================
  // 9. COORDINACIÓN VISOMOTRIZ Y MOTRICIDAD FINA (CONCEPTO)
  // =========================================================================
  'coordinacion-visomotriz-fino-adaptativa': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill" style="background: rgba(245, 158, 11, 0.15); color: #b45309;">✍️ MOTRICIDAD FINA & COORDINACIÓN VISOMOTRIZ</span>
          <span class="modal-area-pill">👶 ÁREA: DESARROLLO INFANTIL</span>
          <span class="modal-area-pill">🧠 ÁREA: NEURODESARROLLO</span>
        </div>
        <h2 class="orientation-main-title">Coordinación Visomotriz, Prensión y Grafomotricidad en la Primera Infancia</h2>
        <p class="orientation-authors-meta">Nelson Ortiz Pinilla (EAD-1 Área B, Págs. 26-31) • Anne Anastasi & Susana Urbina (Págs. 440-455) • Arnold Gesell</p>
      </div>

      <div class="pedagogical-division-banner" style="background: rgba(245, 158, 11, 0.08); border-color: rgba(245, 158, 11, 0.25);">
        <div class="pedagogical-banner-text">
          💡 <strong>El Vínculo Ojo-Mano:</strong> La motricidad fino-adaptativa refleja la progresiva diferenciación cortical de la mano humana como instrumento del pensamiento y la praxis constructiva.
        </div>
        <button type="button" class="pedagogical-link-btn" id="btn-goto-fina-eval" style="background: #d97706;">
          <span>🧱 Ver Batería de Bloques y Grafismo Evolutivo</span>
          <span>→</span>
        </button>
      </div>

      <!-- SECCIÓN 1: ONTOGÉNIA DEL AGARRE -->
      <section class="orientation-block-card">
        <span class="orientation-section-badge">DESARROLLO DE LA PRENSIÓN</span>
        <h3 class="orientation-sec-title">1. Evolución del Agarre Digital (0 a 12 Meses)</h3>

        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">✊</span>
              <span class="dim-name">0-3 Meses: Reflejo Palmar Arcaico</span>
            </div>
            <p class="orientation-p">
              Cierre reflejo e involuntario de los dedos ante la estimulación de la palma. A los 2-3 meses las manos se van abriendo progresivamente y desaparece el reflejo tónico.
            </p>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">✋</span>
              <span class="dim-name">4-6 Meses: Prensión Cúbito-Palmar Voluntaria</span>
            </div>
            <p class="orientation-p">
              Agarre voluntario pero tosco utilizando la palma y los últimos tres dedos (meñique, anular y medio) contra la eminencia hipotenar. El pulgar aún no interviene.
            </p>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">✂️</span>
              <span class="dim-name">7-9 Meses: Pinza en Tijera / Radial-Palmar</span>
            </div>
            <p class="orientation-p">
              Aproximación lateral del pulgar en aducción contra el borde lateral del dedo índice para sujetar objetos medianos.
            </p>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">👌</span>
              <span class="dim-name">10-12 Meses: Pinza Superior Fina</span>
            </div>
            <p class="orientation-p">
              Verdadera oposición pulgar-índice utilizando las yemas distales (pulpejo a pulpejo) para tomar migas o perlas diminutas sin apoyar la palma en la mesa.
            </p>
          </div>
        </div>
      </section>

      <!-- SECCIÓN 2: EVOLUCIÓN DEL GRAFISMO -->
      <section class="orientation-block-card">
        <span class="orientation-section-badge">ONTOGENIA DEL TRAZO</span>
        <h3 class="orientation-sec-title">2. Secuencia Evolutiva del Grafismo Infantil (Gesell & Ortiz)</h3>
        <p class="orientation-p">
          El desarrollo del dibujo infantil sigue una maduración geométrica constante:
        </p>

        <div class="orientation-bullet-list">
          <li><strong>15-18 meses:</strong> Garabato espontáneo desordenado (movimiento kinestésico impulsado desde el hombro).</li>
          <li><strong>24 meses:</strong> Imitación de trazo vertical (|). Comienza a mirar el lápiz mientras dibuja.</li>
          <li><strong>30 meses:</strong> Imitación de trazo horizontal (—).</li>
          <li><strong>36 meses (3 años):</strong> Copia de círculo cerrado (○). Inicio del control inhibitorio motor.</li>
          <li><strong>48 meses (4 años):</strong> Copia de cruz (+) y cuadrado (□). Dominio de los ángulos rectos.</li>
          <li><strong>60 meses (5 años):</strong> Copia de triángulo (△) y dibujo de la figura humana reconocible con al menos 6 partes corporales.</li>
        </div>
      </section>

      <!-- CITAS -->
      <section class="orientation-block-card">
        <span class="orientation-section-badge">BIBLIOGRAFÍA VERIFICADA</span>
        <h3 class="orientation-sec-title">Citas Textuales en Nelson Ortiz Pinilla & Anastasi</h3>
        <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; padding: 0.85rem 1rem; background: rgba(245, 158, 11, 0.06); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: 12px;">
          <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #b45309; margin-bottom: 0.2rem;">
            📖 Cita Verificada:
          </div>
          <button type="button" class="btn-book-citation-jump" data-book-id="nelson-ortiz-escala-abreviada" data-page="29" title="Consultar Área B en Nelson Ortiz">
            <span>📖</span>
            <span><strong>Nelson Ortiz:</strong> Coordinación Fino-Adaptativa (Pág. 29) →</span>
          </button>
        </div>
      </section>

      <div style="display: flex; justify-content: flex-end; margin-top: 1rem;">
        <button type="button" class="pedagogical-link-btn" id="btn-bottom-goto-fina-eval" style="background: #d97706; padding: 0.8rem 1.4rem;">
          <span>🧱 Ir a la Batería de Bloques y Grafismo</span>
          <span>→</span>
        </button>
      </div>
    </div>
  `,

  // =========================================================================
  // 10. EVALUACIÓN VISOMOTORA Y BLOQUES (PROTOCOLO)
  // =========================================================================
  'evaluacion-motricidad-fino-adaptativa-grafismo': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill" style="background: rgba(245, 158, 11, 0.15); color: #b45309;">🧱 PROTOCOLO DE CONSTRUCCIÓN & GRAFISMO</span>
          <span class="modal-area-pill">👶 ÁREA: DESARROLLO INFANTIL</span>
          <span class="modal-area-pill">🩺 ÁREA: EVALUACIÓN CLÍNICA</span>
        </div>
        <h2 class="orientation-main-title">Protocolo de Evaluación Visomotora: Batería de Bloques y Grafismo Evolutivo</h2>
        <p class="orientation-authors-meta">Pruebas Estructuradas EAD-1 (Nelson Ortiz Págs. 27-31) • Pautas de Manipulación y Construcción Tridimensional</p>
      </div>

      <div class="pedagogical-division-banner" style="background: rgba(245, 158, 11, 0.08); border-color: rgba(245, 158, 11, 0.25);">
        <div class="pedagogical-banner-text">
          💡 <strong>Pruebas Estandarizadas de Destreza Adaptativa:</strong> La construcción con cubos de madera (2.5 cm de arista) y las tareas de tijeras y enhebrado son los mejores indicadores clínicos de la función visoconstructiva infantil.
        </div>
        <button type="button" class="pedagogical-link-btn" id="btn-back-fina-def" style="background: #d97706;">
          <span>← Volver a Fundamentos de Motricidad Fina</span>
        </button>
      </div>

      <!-- TABLA MAESTRA EVOLUTIVA -->
      <section class="orientation-block-card">
        <span class="orientation-section-badge">TABLA EVOLUTIVA MAESTRA DE CONSTRUCCIÓN Y DESTREZA</span>
        <h3 class="orientation-sec-title">Hitos Cronológicos de Construcción con Cubos y Manejo de Herramientas</h3>

        <div class="orientation-table-wrapper">
          <table class="orientation-data-table">
            <thead>
              <tr>
                <th>Edad Cronológica</th>
                <th>Construcción con Cubos</th>
                <th>Grafismo & Dibujo</th>
                <th>Destreza Digital & Herramientas</th>
                <th>Criterio de Aprobación EAD-1</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>12-15 Meses</strong></td>
                <td>Torre de 2 cubos</td>
                <td>Garabato accidental espontáneo</td>
                <td>Introduce bolita en botella</td>
                <td>La torre se sostiene al soltar el 2° cubo sin caerse inmediatamente.</td>
              </tr>
              <tr>
                <td><strong>18-20 Meses</strong></td>
                <td>Torre de 4 cubos</td>
                <td>Garabato vigoroso</td>
                <td>Pasa páginas de libro grueso (de a varias)</td>
                <td>Apila 4 cubos con estabilidad de al menos 5 segundos.</td>
              </tr>
              <tr>
                <td><strong>24 Meses (2 Años)</strong></td>
                <td>Torre de 6 cubos / Alinea cubos como tren</td>
                <td>Imita trazo vertical (|)</td>
                <td>Enhebra una cuenta grande en cordón rígido</td>
                <td>Muestra dirección del trazo de arriba hacia abajo.</td>
              </tr>
              <tr>
                <td><strong>36 Meses (3 Años)</strong></td>
                <td>Torre de 8 cubos / Construye puente de 3 cubos</td>
                <td>Copia círculo cerrado (○)</td>
                <td>Corta papel con tijeras (flecos libres)</td>
                <td>El círculo debe cerrarse sin cruzar los extremos más de 3 mm.</td>
              </tr>
              <tr>
                <td><strong>48 Meses (4 Años)</strong></td>
                <td>Construye puerta de 4-5 cubos con vano</td>
                <td>Copia cruz (+) y cuadrado</td>
                <td>Corta sobre línea recta de 10 cm con tijeras</td>
                <td>Los brazos de la cruz deben intersectarse cerca del centro perpendicular.</td>
              </tr>
              <tr>
                <td><strong>60 Meses (5 Años)</strong></td>
                <td>Estructuras complejas simétricas</td>
                <td>Copia triángulo (△) / Figura humana (6+ partes)</td>
                <td>Recorta un círculo de papel siguiendo el contorno</td>
                <td>El triángulo conserva 3 ángulos agudos reconocibles sin redondearse.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- CITAS VERIFICADAS -->
      <section class="orientation-block-card">
        <span class="orientation-section-badge">BIBLIOGRAFÍA VERIFICADA</span>
        <h3 class="orientation-sec-title">Citas Textuales en Nelson Ortiz (EAD-1)</h3>
        <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; padding: 0.85rem 1rem; background: rgba(245, 158, 11, 0.06); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: 12px;">
          <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #b45309; margin-bottom: 0.2rem;">
            📖 Cita Verificada en Nelson Ortiz:
          </div>
          <button type="button" class="btn-book-citation-jump" data-book-id="nelson-ortiz-escala-abreviada" data-page="27" title="Consultar baremos de motricidad fina y grafismo en Nelson Ortiz">
            <span>📖</span>
            <span><strong>Nelson Ortiz:</strong> Baremos de Cubos y Grafismo (Pág. 27) →</span>
          </button>
        </div>
      </section>

      <!-- ESTIMULACIÓN EN EL HOGAR -->
      <section class="orientation-block-card">
        <span class="orientation-section-badge">INTERVENCIÓN TEMPRANA</span>
        <h3 class="orientation-sec-title">Pautas de Estimulación Fino-Adaptativa</h3>
        <ul class="orientation-bullet-list">
          <li><strong>Modelado con plastilina o arcilla:</strong> Fortalece la musculatura intrínseca de la mano y regula el tono inhibitorio.</li>
          <li><strong>Juegos de pinza con broches de ropa o pinzas de cocina:</strong> Favorece la oposición disociada del pulgar e índice.</li>
          <li><strong>Rasgado y trozado de papel con los dedos:</strong> Desarrolla la coordinación bimanual asimétrica.</li>
        </ul>
      </section>

      <div style="display: flex; justify-content: flex-start; margin-top: 1rem;">
        <button type="button" class="pedagogical-link-btn" id="btn-bottom-back-fina-def" style="background: #d97706; padding: 0.8rem 1.4rem;">
          <span>← Volver a Fundamentos de Motricidad Fina</span>
        </button>
      </div>
    </div>
  `,

  // =========================================================================
  // 11. LATERALIDAD Y ESQUEMA CORPORAL (CONCEPTO)
  // =========================================================================
  'lateralidad-esquema-corporal-desarrollo': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill" style="background: rgba(147, 51, 234, 0.15); color: #7c3aed;">🧭 LATERALIDAD & ESQUEMA CORPORAL INFANTIL</span>
          <span class="modal-area-pill">👶 ÁREA: DESARROLLO INFANTIL</span>
          <span class="modal-area-pill">🧠 ÁREA: NEURODESARROLLO</span>
        </div>
        <h2 class="orientation-main-title">Evolución de la Lateralidad Hemisférica y Construcción del Esquema Corporal</h2>
        <p class="orientation-authors-meta">Nelson Ortiz Pinilla (EAD-1) • Anne Anastasi & Susana Urbina (Págs. 280-295) • Albert J. Harris • Jean Piaget</p>
      </div>

      <div class="pedagogical-division-banner" style="background: rgba(147, 51, 234, 0.08); border-color: rgba(147, 51, 234, 0.25);">
        <div class="pedagogical-banner-text">
          💡 <strong>La Lateralidad como Síntesis Neurofuncional:</strong> La lateralización no consiste simplemente en "usar más una mano", sino en la progresiva especialización y asimetría funcional de los dos hemisferios cerebrales, articulada a través del cuerpo calloso.
        </div>
        <button type="button" class="pedagogical-link-btn" id="btn-goto-lateralidad-eval" style="background: #7c3aed;">
          <span>✋ Ver Protocolo de Evaluación de 4 Dimensiones</span>
          <span>→</span>
        </button>
      </div>

      <!-- SECCIÓN 1: ETAPAS DE CONSOLIDACIÓN -->
      <section class="orientation-block-card">
        <span class="orientation-section-badge">ETAPAS ONTOGENÉTICAS</span>
        <h3 class="orientation-sec-title">Las Tres Fases del Desarrollo de la Lateralidad</h3>

        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">⚖️</span>
              <span class="dim-name">1. Fase de Indiferenciación (0 a 2 Años)</span>
            </div>
            <p class="orientation-p">
              El lactante utiliza indistintamente ambas manos de forma bilateral y simétrica. La prensión depende más de la posición física del objeto (si está a la izquierda usa la mano izquierda) que de una preferencia interna del sistema nervioso.
            </p>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">🔄</span>
              <span class="dim-name">2. Fase de Alternancia y Exploración (2 a 4 Años)</span>
            </div>
            <p class="orientation-p">
              El niño experimenta con ambos lados corporales, cambiando frecuentemente de mano para comer o garabatear. Es una etapa normal y necesaria para enriquecer el mapa sensoriomotor de ambos hemisferios cerebrales.
            </p>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">🎯</span>
              <span class="dim-name">3. Fase de Definición y Afirmación (4 a 6 Años)</span>
            </div>
            <p class="orientation-p">
              Se consolida la dominancia lateral funcional de forma espontánea y estable. El niño demuestra marcada superioridad en velocidad, fuerza y destreza en su hemicuerpo dominante.
            </p>
          </div>
        </div>
      </section>

      <!-- SECCIÓN 2: TIPOLOGÍAS Y RIESGOS -->
      <section class="orientation-block-card">
        <span class="orientation-section-badge">CLASIFICACIÓN CLÍNICA</span>
        <h3 class="orientation-sec-title">Tipos de Lateralidad y Repercusiones en Lectoescritura</h3>

        <div class="orientation-subcard">
          <div class="orientation-subcard-title">Perfiles de Dominancia Lateral</div>
          <ul class="orientation-bullet-list">
            <li><strong>Homogénea Diestra (D-D-D-D) u Homogénea Zurda (I-I-I-I):</strong> Mano, pie, ojo y oído coinciden en el mismo lado. Proporciona máxima estabilidad visoespacial.</li>
            <li><strong>Lateralidad Cruzada (ej. Mano Derecha - Ojo Izquierdo):</strong> Muy prevalente. Puede ocasionar dificultades de seguimiento sacádico en la lectura o rotación de letras en espejo (b/d, p/q) si no se acompaña de una sólida orientación espacial.</li>
            <li><strong>Lateralidad Invertida o Contrariada:</strong> Sujeto zurdo por naturaleza al que se le obligó coactivamente a escribir con la mano derecha. Suele asociarse a bloqueos motores, disgrafía, tartamudez y ansiedad escolar.</li>
            <li><strong>Lateralidad Mixta / Ambidextrismo Patológico:</strong> Incapacidad para consolidar dominancia a los 6 años. Refleja inmadurez en la mielinización del cuerpo calloso.</li>
          </ul>
        </div>
      </section>

      <!-- CITAS -->
      <section class="orientation-block-card">
        <span class="orientation-section-badge">BIBLIOGRAFÍA VERIFICADA</span>
        <h3 class="orientation-sec-title">Citas Textuales en Nelson Ortiz & Anastasi</h3>
        <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; padding: 0.85rem 1rem; background: rgba(147, 51, 234, 0.06); border: 1px solid rgba(147, 51, 234, 0.2); border-radius: 12px;">
          <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #7c3aed; margin-bottom: 0.2rem;">
            📖 Cita Verificada:
          </div>
          <button type="button" class="btn-book-citation-jump" data-book-id="nelson-ortiz-escala-abreviada" data-page="27" title="Consultar lateralidad y pruebas psicomotoras en Nelson Ortiz">
            <span>📖</span>
            <span><strong>Nelson Ortiz:</strong> Dominancia y Habilidades Motoras (Pág. 27) →</span>
          </button>
        </div>
      </section>

      <div style="display: flex; justify-content: flex-end; margin-top: 1rem;">
        <button type="button" class="pedagogical-link-btn" id="btn-bottom-goto-lateralidad-eval" style="background: #7c3aed; padding: 0.8rem 1.4rem;">
          <span>✋ Ir al Protocolo de Evaluación de Lateralidad</span>
          <span>→</span>
        </button>
      </div>
    </div>
  `,

  // =========================================================================
  // 12. EVALUACIÓN DE LATERALIDAD INFANTIL (PROTOCOLO)
  // =========================================================================
  'evaluacion-lateralidad-dominancia-infantil': () => `
    <div class="orientation-doc-container">
      <div class="orientation-doc-header">
        <div class="modal-areas-row">
          <span class="modal-type-pill" style="background: rgba(147, 51, 234, 0.15); color: #7c3aed;">✋ PROTOCOLO CLÍNICO & BATERÍA DE 4 DIMENSIONES</span>
          <span class="modal-area-pill">👶 ÁREA: DESARROLLO INFANTIL</span>
          <span class="modal-area-pill">🩺 ÁREA: EVALUACIÓN CLÍNICA</span>
        </div>
        <h2 class="orientation-main-title">Protocolo de Dominancia Lateral y Esquema Corporal en Edad Infantil</h2>
        <p class="orientation-authors-meta">Batería de Observación EAD-1 & Harris • Evaluación en 4 Dimensiones (Nelson Ortiz Págs. 21, 27 • Harris)</p>
      </div>

      <div class="pedagogical-division-banner" style="background: rgba(147, 51, 234, 0.08); border-color: rgba(147, 51, 234, 0.25);">
        <div class="pedagogical-banner-text">
          💡 <strong>Evaluación Ecológica y Espontánea:</strong> La dominancia lateral debe registrarse en actividades funcionales naturales, sin anticipar al niño cuál lado corporal se está examinando para evitar sesgos de respuesta aprendida.
        </div>
        <button type="button" class="pedagogical-link-btn" id="btn-back-lateralidad-def" style="background: #7c3aed;">
          <span>← Volver a Fundamentos de Lateralidad</span>
        </button>
      </div>

      <!-- BATERÍA DE LAS 4 DIMENSIONES -->
      <section class="orientation-block-card">
        <span class="orientation-section-badge">BATERÍA INTEGRAL EN 4 DIMENSIONES</span>
        <h3 class="orientation-sec-title">Pruebas Clínicas para las 4 Esferas Corporales</h3>

        <div class="orientation-dimensions-grid">
          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">✍️</span>
              <span class="dim-name">1. Dominancia Manual (10 Tareas)</span>
            </div>
            <ul class="orientation-bullet-list">
              <li>1. Escribir o dibujar con lápiz.</li>
              <li>2. Cortar con tijeras sobre papel.</li>
              <li>3. Lanzar una pelota pequeña a una diana.</li>
              <li>4. Cepillarse los dientes.</li>
              <li>5. Usar la cuchara para comer sopa.</li>
              <li>6. Abrir la manija de una puerta.</li>
              <li>7. Desenroscar la tapa de un frasco.</li>
              <li>8. Encender una cerilla simulada.</li>
              <li>9. Martillar un clavo de plástico.</li>
              <li>10. Peinarse frente a un espejo.</li>
            </ul>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">🦶</span>
              <span class="dim-name">2. Dominancia Pedial (4 Tareas)</span>
            </div>
            <ul class="orientation-bullet-list">
              <li>1. Patear un balón hacia una meta.</li>
              <li>2. Saltar a la pata coja sobre un pie.</li>
              <li>3. Iniciar la subida de una escalera.</li>
              <li>4. Apagar una colilla imaginaria con la suela.</li>
            </ul>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">👁️</span>
              <span class="dim-name">3. Dominancia Ocular (3 Tareas)</span>
            </div>
            <ul class="orientation-bullet-list">
              <li>1. Mirar por un catalejo o tubo opaco.</li>
              <li>2. Mirar por el agujero de una cartulina (Test de Miles).</li>
              <li>3. Apuntar con un ojo guiñando el otro.</li>
            </ul>
          </div>

          <div class="orientation-dim-item">
            <div class="dim-item-header">
              <span class="dim-icon">👂</span>
              <span class="dim-name">4. Dominancia Auditiva (3 Tareas)</span>
            </div>
            <ul class="orientation-bullet-list">
              <li>1. Escuchar el tic-tac de un reloj de cuerda.</li>
              <li>2. Escuchar a través de una puerta cerrada.</li>
              <li>3. Ponerse el auricular de un teléfono.</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- FÓRMULA MATEMÁTICA DEL COEFICIENTE DE LATERALIDAD -->
      <section class="orientation-block-card">
        <span class="orientation-section-badge">CUANTIFICACIÓN MATEMÁTICA</span>
        <h3 class="orientation-sec-title">Fórmula del Coeficiente de Lateralidad (PL)</h3>
        <div style="background: rgba(147, 51, 234, 0.05); border: 1px solid rgba(147, 51, 234, 0.2); border-radius: 12px; padding: 1rem; text-align: center; margin: 1rem 0;">
          <div style="font-size: 1.4rem; font-weight: 800; color: #6b21a8;">PL = [(D - I) / (D + I)] · 100</div>
          <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.35rem;">
            Donde <strong>D</strong> es el total de respuestas diestras e <strong>I</strong> el total de respuestas zurdas.
          </div>
        </div>

        <div class="orientation-subcard">
          <div class="orientation-subcard-title">Criterios de Clasificación Diagnóstica</div>
          <ul class="orientation-bullet-list">
            <li><strong>PL = +100 a +70:</strong> Diestro Puro / Definido.</li>
            <li><strong>PL = +69 a +30:</strong> Diestro Moderado con rasgos cruzados.</li>
            <li><strong>PL = +29 a -29:</strong> Ambidextro / Lateralidad Mixta Mal Definida (Requiere estimulación).</li>
            <li><strong>PL = -30 a -69:</strong> Zurdo Moderado.</li>
            <li><strong>PL = -70 a -100:</strong> Zurdo Puro / Definido.</li>
          </ul>
        </div>
      </section>

      <!-- CITAS VERIFICADAS -->
      <section class="orientation-block-card">
        <span class="orientation-section-badge">BIBLIOGRAFÍA VERIFICADA</span>
        <h3 class="orientation-sec-title">Citas Textuales en Nelson Ortiz & Harris</h3>
        <div class="orientation-citations-banner" style="display: flex; gap: 0.6rem; flex-wrap: wrap; padding: 0.85rem 1rem; background: rgba(147, 51, 234, 0.06); border: 1px solid rgba(147, 51, 234, 0.2); border-radius: 12px;">
          <div style="width: 100%; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #7c3aed; margin-bottom: 0.2rem;">
            📖 Citas Verificadas en Biblioteca:
          </div>
          <button type="button" class="btn-book-citation-jump" data-book-id="nelson-ortiz-escala-abreviada" data-page="21" title="Consultar pruebas motoras y lateralidad en Nelson Ortiz">
            <span>📖</span>
            <span><strong>Nelson Ortiz:</strong> Lateralidad Infantil EAD-1 (Pág. 21) →</span>
          </button>
          <button type="button" class="btn-book-citation-jump" data-book-id="tests-psicologicos-anastasi-urbina" data-page="285" title="Consultar destreza motriz y dominancia en Anastasi & Urbina">
            <span>📖</span>
            <span><strong>Anastasi & Urbina:</strong> Pruebas Motoras y Dominancia (Pág. 285) →</span>
          </button>
        </div>
      </section>

      <div style="display: flex; justify-content: flex-start; margin-top: 1rem;">
        <button type="button" class="pedagogical-link-btn" id="btn-bottom-back-lateralidad-def" style="background: #7c3aed; padding: 0.8rem 1.4rem;">
          <span>← Volver a Fundamentos de Lateralidad</span>
        </button>
      </div>
    </div>
  `
};

/* ==========================================================================
   EVENT LISTENERS SETUP FOR MODAL INTERACTIONS
   ========================================================================== */

// Interactive Listeners and Logic for Bloque A & Bloque B

const EAD_RANGES_DATA = [
  {
    range: 'Rango 1: 0 a 3 Meses',
    subtitle: 'Periodo de Adaptación Neonatal y Reflejos Arcaicos Primarios',
    areas: {
      gruesa: {
        item: 'Ítem 1-3: Control Cefálico Incipiente en Decúbito Ventral',
        material: 'Camilla o colchoneta firme',
        procedimiento: 'Colocar al lactante boca abajo sobre la colchoneta. Llamar suavemente su atención al frente.',
        criterio: 'Levanta la cabeza de la superficie al menos 45 grados por 3 segundos consecutivos.'
      },
      fina: {
        item: 'Ítem 1-3: Reflejo de Prensión Palmar e Inspección Ocular',
        material: 'Dedo del examinador o sonajero pequeño',
        procedimiento: 'Tocar suavemente la palma de la mano del lactante con el dedo índice del examinador.',
        criterio: 'Cierra los dedos con firmeza alrededor del dedo estimulador (reflejo de prensión tónico).'
      },
      lenguaje: {
        item: 'Ítem 1-3: Respuestas Auditivas Reflejas y Sonidos Guturales',
        material: 'Campanilla o sonajero suave fuera del campo visual',
        procedimiento: 'Hacer sonar suavemente el sonajero a 20 cm de cada oreja del bebé mientras está tranquilo.',
        criterio: 'Muestra sobresalto, parpadeo o detención del movimiento (reflejo cócleo-palpebral).'
      },
      social: {
        item: 'Ítem 1-3: Sonrisa Social de Respuesta y Contacto Ocular',
        material: 'Rostro y voz del examinador o cuidador',
        procedimiento: 'Colocarse a 30 cm frente a los ojos del bebé, hablarle con tono cálido y sonreírle.',
        criterio: 'Fija la mirada en el rostro humano y responde con una sonrisa social intencional.'
      }
    }
  },
  {
    range: 'Rango 2: 4 a 6 Meses',
    subtitle: 'Sostén Cefálico Consolidado, Rolado y Agarre Voluntario Cúbito-Palmar',
    areas: {
      gruesa: {
        item: 'Ítem 4-6: Control Cefálico Firme y Rolado Supino-Prono',
        material: 'Colchoneta firme',
        procedimiento: 'Tomar al lactante por los antebrazos y llevarlo suavemente a posición sedente.',
        criterio: 'La cabeza se mantiene firmemente alineada con el tronco sin caer hacia atrás.'
      },
      fina: {
        item: 'Ítem 4-6: Agarre Voluntario y Transferencia a la Línea Media',
        material: 'Cubo de madera (2.5 cm) o argolla plástica roja',
        procedimiento: 'Ofrecer el cubo frente al campo visual del niño a la altura de su pecho.',
        criterio: 'Extiende ambos brazos y toma el objeto con agarre cúbito-palmar voluntario.'
      },
      lenguaje: {
        item: 'Ítem 4-6: Balbuceo Monosilábico y Localización Sonora',
        material: 'Voz humana y sonajero',
        procedimiento: 'Observar los sonidos vocálicos que emite en reposo y hablarle desde un lado.',
        criterio: 'Gira claramente la cabeza buscando la fuente de sonido y emite sonidos guturales (gu-gu, agú).'
      },
      social: {
        item: 'Ítem 4-6: Interacción Activa con el Entorno y el Espejo',
        material: 'Espejo irrompible',
        procedimiento: 'Poner al niño frente a su imagen en el espejo a 25 cm.',
        criterio: 'Sonríe a su propia imagen reflejada, vocaliza o intenta tocar el espejo con entusiasmo.'
      }
    }
  },
  {
    range: 'Rango 3: 7 a 9 Meses',
    subtitle: 'Sedestación Estable, Pinza en Tijera y Balbuceo Canónico',
    areas: {
      gruesa: {
        item: 'Ítem 7-9: Sedestación sin Apoyo y Posición de Cuatro Puntos',
        material: 'Colchoneta',
        procedimiento: 'Sentar al niño en la colchoneta sin almohadas ni sujeción lateral.',
        criterio: 'Permanece sentado de forma autónoma con la espalda erguida al menos 30 segundos.'
      },
      fina: {
        item: 'Ítem 7-9: Pinza en Tijera y Paso de Objeto de una Mano a Otra',
        material: 'Dos cubos de madera',
        procedimiento: 'Dar un cubo en una mano y luego ofrecer un segundo cubo en la misma mano.',
        criterio: 'Transfiere el primer cubo a la otra mano para agarrar el nuevo con pinza lateral (tijera).'
      },
      lenguaje: {
        item: 'Ítem 7-9: Balbuceo Reduplicativo Polisílabo (Silabeo)',
        material: 'Observación directa',
        procedimiento: 'Estimular vocalmente al lactante y observar su producción espontánea.',
        criterio: 'Emite cadenas silábicas repetitivas con inflexión de voz: "ba-ba-ba", "da-da-da", "ma-ma-ma".'
      },
      social: {
        item: 'Ítem 7-9: Angustia ante Extraños y Juego de Ocultamiento',
        material: 'Pañal de tela o toalla',
        procedimiento: 'Cubrir el rostro del examinador con el pañal y destaparlo diciendo "¡Aquí está!".',
        criterio: 'Demuestra anticipación, risa y retira el pañal con sus propias manos para buscar el rostro.'
      }
    }
  },
  {
    range: 'Rango 4: 10 a 12 Meses',
    subtitle: 'Bipedestación con Apoyo, Pinza Digital Superior y Primeras Palabras',
    areas: {
      gruesa: {
        item: 'Ítem 10-12: Bipedestación con Sujeción y Desplazamiento Lateral',
        material: 'Mesa baja o baranda firme',
        procedimiento: 'Colocar al niño de pie frente a la mesa apoyando sus manos.',
        criterio: 'Sostiene todo su peso corporal de pie durante 1 minuto e inicia pasos laterales asistidos.'
      },
      fina: {
        item: 'Ítem 10-12: Pinza Digital Fina Superior (Índice-Pulgar)',
        material: 'Pastilla pequeña o pasita sobre superficie blanca',
        procedimiento: 'Colocar la pastilla frente al niño fuera del alcance de la boca.',
        criterio: 'Coge la pastilla usando exclusivamente los extremos distales del pulgar e índice (pinza fina).'
      },
      lenguaje: {
        item: 'Ítem 10-12: Primera Palabra con Significado Referencial',
        material: 'Interacción directa con la madre/padre',
        procedimiento: 'Preguntar a la madre qué palabras utiliza el niño para nombrar personas u objetos.',
        criterio: 'Dice al menos una palabra comprensible (ej. "mamá", "papá", "tete") dirigida con intención clara.'
      },
      social: {
        item: 'Ítem 10-12: Juego de Entrega y Gestos Sociales (Adiós, Aplauso)',
        material: 'Juguete pequeño',
        procedimiento: 'Pedir al niño "dame el juguete" extendiendo la mano con palma abierta.',
        criterio: 'Entrega voluntariamente el juguete en la mano del examinador y aplaude o dice adiós con la mano.'
      }
    }
  },
  {
    range: 'Rango 5: 13 a 18 Meses',
    subtitle: 'Marcha Independiente, Torre de 2 Cubos y Jerga Expresiva',
    areas: {
      gruesa: {
        item: 'Ítem 13-15: Marcha Independiente sin Ayuda',
        material: 'Espacio despejado de 3 metros',
        procedimiento: 'Estimular al niño a caminar hacia el cuidador sin sostenerse.',
        criterio: 'Camina al menos 5 pasos de forma autónoma con marcha balanceante y brazos de equilibrio.'
      },
      fina: {
        item: 'Ítem 13-15: Construcción de Torre de 2 Cubos y Garabateo',
        material: 'Cubos de madera y hoja con crayón',
        procedimiento: 'Mostrar al niño cómo poner un cubo encima del otro e invitarlo a hacerlo.',
        criterio: 'Coloca un cubo sobre otro manteniéndose la torre en equilibrio al soltarlo.'
      },
      lenguaje: {
        item: 'Ítem 13-15: Vocabulario de 3 a 5 Palabras y Comprensión de Órdenes',
        material: 'Objetos cotidianos (pelota, zapato, vaso)',
        procedimiento: 'Solicitar: "Tráeme la pelota" señalando sin tocar el objeto.',
        criterio: 'Comprende la orden y nombra al menos 3 objetos reconocibles además de mamá/papá.'
      },
      social: {
        item: 'Ítem 13-15: Uso Funcional de Instrumentos (Cuchara y Vaso)',
        material: 'Cuchara plástica y taza infantil',
        procedimiento: 'Observar cómo intenta llevar la cuchara a la boca para comer.',
        criterio: 'Lleva la cuchara a la boca con intención de alimentarse, derramando solo parte del contenido.'
      }
    }
  },
  {
    range: 'Rango 6: 19 a 24 Meses',
    subtitle: 'Carrera, Patada de Balón, Torre de 4 Cubos y Frases de Dos Palabras',
    areas: {
      gruesa: {
        item: 'Ítem 16-18: Carrera Inicial y Patear una Pelota',
        material: 'Pelota mediana inflable',
        procedimiento: 'Lanzar suavemente la pelota rodando hacia los pies del niño y pedirle que la patee.',
        criterio: 'Patea la pelota hacia adelante sin caerse ni sujetarse a ningún apoyo.'
      },
      fina: {
        item: 'Ítem 16-18: Torre de 4 Cubos y Paso de Páginas Individuales',
        material: '6 cubos de madera y cuento infantil de hojas delgadas',
        procedimiento: 'Pedir que construya la torre más alta posible.',
        criterio: 'Apila con éxito 4 o más cubos y pasa páginas de un cuento una por una.'
      },
      lenguaje: {
        item: 'Ítem 16-18: Construcción de Frases de Dos Palabras',
        material: 'Registro del habla espontánea',
        procedimiento: 'Observar la comunicación del niño durante el juego.',
        criterio: 'Combina dos palabras con sentido sintáctico ("mamá agua", "vamos calle", "más leche").'
      },
      social: {
        item: 'Ítem 16-18: Control de Esfínteres Inicial y Juego Paralelo',
        material: 'Entrevista a cuidadores',
        procedimiento: 'Preguntar si avisa la necesidad de orinar/defecar antes o después del acto.',
        criterio: 'Avisa verbalmente o con gestos que tiene el pañal mojado o sucio; juega junto a otros niños.'
      }
    }
  },
  {
    range: 'Rango 7: 25 a 36 Meses',
    subtitle: 'Sube Escaleras Alternando, Copia Línea Vertical y Oraciones de 3 Palabras',
    areas: {
      gruesa: {
        item: 'Ítem 19-21: Sube Escaleras con Apoyo y Salto Bipodal',
        material: 'Escalera de 4 peldaños con pasamanos',
        procedimiento: 'Indicar al niño que suba los peldaños.',
        criterio: 'Sube alternando los pies sin colocar ambos pies en el mismo peldaño; salta con pies juntos.'
      },
      fina: {
        item: 'Ítem 19-21: Torre de 8 Cubos, Puente de 3 y Trazo Vertical',
        material: 'Cubos de madera, hoja blanca y lápiz',
        procedimiento: 'Trazar una línea vertical e invitar al niño a trazar una idéntica al lado.',
        criterio: 'Imita el trazo vertical (|) con dirección continua sin desviarse más de 30 grados.'
      },
      lenguaje: {
        item: 'Ítem 19-21: Oraciones de Tres Palabras y Uso del Pronombre "Yo"',
        material: 'Diálogo directo',
        procedimiento: 'Preguntar "¿Qué estás jugando?" o "¿Cómo te llamas?".',
        criterio: 'Responde usando estructura Sujeto-Verbo-Objeto ("yo quiero pan") y comprende adjetivos (grande/chico).'
      },
      social: {
        item: 'Ítem 19-21: Desvestirse Parcialmente e Inicio del Juego Simbólico',
        material: 'Prendas con broches sencillos',
        procedimiento: 'Pedir que se quite los zapatos o el suéter.',
        criterio: 'Se quita prendas abiertas sin ayuda; alimenta una muñeca o simula conducir un coche.'
      }
    }
  },
  {
    range: 'Rango 8: 37 a 48 Meses',
    subtitle: 'Salto en un Pie, Copia de Círculo y Cruz, y Preguntas de Causalidad ("¿Por qué?")',
    areas: {
      gruesa: {
        item: 'Ítem 22-24: Salto Monopodal (Pata Coja) y Equilibrio en Puntas',
        material: 'Piso despejado',
        procedimiento: 'Demostrar cómo saltar en un solo pie y pedir que lo imite.',
        criterio: 'Salta al menos 3 veces consecutivas sobre un pie sin tocar el piso con el otro.'
      },
      fina: {
        item: 'Ítem 22-24: Copia de Círculo y Cruz (+) con Agarre Trípode',
        material: 'Hoja con modelo impreso de círculo y cruz',
        procedimiento: 'Mostrar los modelos y pedir: "Dibuja uno igualito aquí abajo".',
        criterio: 'Copia el círculo cerrado y la cruz con dos líneas perpendiculares que se cruzan cerca del centro.'
      },
      lenguaje: {
        item: 'Ítem 22-24: Oraciones Complejas, Plurales y Cuestionamiento Causal',
        material: 'Láminas descriptivas',
        procedimiento: 'Presentar una escena y mantener una conversación fluida.',
        criterio: 'Formula preguntas causales frecuentes ("¿por qué llueve?") y utiliza plurales y tiempos pasados.'
      },
      social: {
        item: 'Ítem 22-24: Juego Asociativo y Lavado Autónomo de Manos',
        material: 'Lavamanos, jabón y toalla',
        procedimiento: 'Invitarlo a lavarse y secarse las manos.',
        criterio: 'Se lava y seca las manos solo; comparte juguetes en actividades estructuradas con pares.'
      }
    }
  },
  {
    range: 'Rango 9: 49 a 60 Meses',
    subtitle: 'Equilibrio Dinámico Avanzado, Copia de Triángulo y Figura Humana Completa',
    areas: {
      gruesa: {
        item: 'Ítem 25-27: Marcha en Línea Recta (Tándem Talón-Punta)',
        material: 'Línea de 3 metros en el suelo',
        procedimiento: 'Pedir que camine sobre la línea apoyando el talón justo delante de la punta.',
        criterio: 'Camina al menos 2 metros en tándem manteniendo el equilibrio sin salir de la línea.'
      },
      fina: {
        item: 'Ítem 25-27: Copia de Triángulo y Dibujo de Figura Humana (6+ Partes)',
        material: 'Hoja blanca y lápiz grafito',
        procedimiento: 'Pedir: "Dibuja a una persona completa, lo mejor que puedas".',
        criterio: 'Dibuja cabeza, tronco, brazos, piernas y al menos dos rasgos faciales claramente identificables.'
      },
      lenguaje: {
        item: 'Ítem 25-27: Relato Narrativo Fluido y Definición de Palabras por Uso',
        material: 'Preguntas verbales',
        procedimiento: 'Preguntar: "¿Qué es una manzana? ¿Qué es un cuchillo?".',
        criterio: 'Define conceptos por su función o categoría ("una manzana es para comer", "un caballo es un animal").'
      },
      social: {
        item: 'Ítem 25-27: Juego Cooperativo con Reglas y Vestido Completo',
        material: 'Juego de mesa simple o prendas con botones',
        procedimiento: 'Observar cómo se abotona el abrigo y respeta turnos en un juego.',
        criterio: 'Abotona y desabotona prendas sin ayuda; comprende y respeta las reglas de un juego grupal.'
      }
    }
  }
];


export const EAD1_TABLE_1_DATA = [
  { age: '1 a 3 Meses', 
    A: { alerta: 1, medio: 3, medioAlto: 5, alto: 6 },
    B: { alerta: 1, medio: 3, medioAlto: 5, alto: 6 },
    C: { alerta: 1, medio: 3, medioAlto: 5, alto: 6 },
    D: { alerta: 1, medio: 3, medioAlto: 5, alto: 6 },
    total: { alerta: 6, medio: 13, medioAlto: 22, alto: 23 }
  },
  { age: '4 a 6 Meses',
    A: { alerta: 4, medio: 6, medioAlto: 9, alto: 10 },
    B: { alerta: 4, medio: 6, medioAlto: 9, alto: 10 },
    C: { alerta: 4, medio: 6, medioAlto: 9, alto: 10 },
    D: { alerta: 4, medio: 6, medioAlto: 9, alto: 10 },
    total: { alerta: 19, medio: 27, medioAlto: 34, alto: 35 }
  },
  { age: '7 a 9 Meses',
    A: { alerta: 7, medio: 10, medioAlto: 13, alto: 14 },
    B: { alerta: 7, medio: 10, medioAlto: 12, alto: 13 },
    C: { alerta: 7, medio: 9, medioAlto: 12, alto: 13 },
    D: { alerta: 7, medio: 9, medioAlto: 12, alto: 13 },
    total: { alerta: 31, medio: 39, medioAlto: 48, alto: 49 }
  },
  { age: '10 a 12 Meses',
    A: { alerta: 11, medio: 13, medioAlto: 16, alto: 17 },
    B: { alerta: 9, medio: 12, medioAlto: 14, alto: 15 },
    C: { alerta: 9, medio: 12, medioAlto: 14, alto: 15 },
    D: { alerta: 9, medio: 12, medioAlto: 14, alto: 15 },
    total: { alerta: 42, medio: 49, medioAlto: 56, alto: 57 }
  },
  { age: '13 a 18 Meses',
    A: { alerta: 13, medio: 16, medioAlto: 19, alto: 20 },
    B: { alerta: 12, medio: 15, medioAlto: 18, alto: 19 },
    C: { alerta: 12, medio: 14, medioAlto: 17, alto: 18 },
    D: { alerta: 12, medio: 14, medioAlto: 17, alto: 18 },
    total: { alerta: 51, medio: 60, medioAlto: 69, alto: 70 }
  },
  { age: '19 a 24 Meses',
    A: { alerta: 16, medio: 19, medioAlto: 23, alto: 24 },
    B: { alerta: 14, medio: 18, medioAlto: 20, alto: 21 },
    C: { alerta: 13, medio: 17, medioAlto: 20, alto: 21 },
    D: { alerta: 14, medio: 17, medioAlto: 22, alto: 23 },
    total: { alerta: 61, medio: 71, medioAlto: 83, alto: 84 }
  },
  { age: '25 a 36 Meses',
    A: { alerta: 19, medio: 23, medioAlto: 27, alto: 28 },
    B: { alerta: 18, medio: 21, medioAlto: 24, alto: 25 },
    C: { alerta: 17, medio: 21, medioAlto: 24, alto: 25 },
    D: { alerta: 18, medio: 22, medioAlto: 27, alto: 28 },
    total: { alerta: 74, medio: 86, medioAlto: 100, alto: 101 }
  },
  { age: '37 a 48 Meses',
    A: { alerta: 22, medio: 26, medioAlto: 29, alto: 30 },
    B: { alerta: 21, medio: 24, medioAlto: 28, alto: 29 },
    C: { alerta: 21, medio: 25, medioAlto: 29, alto: 30 },
    D: { alerta: 22, medio: 26, medioAlto: 29, alto: 30 },
    total: { alerta: 89, medio: 100, medioAlto: 114, alto: 115 }
  },
  { age: '49 a 60 Meses',
    A: { alerta: 26, medio: 29, medioAlto: 30, alto: 30 },
    B: { alerta: 23, medio: 28, medioAlto: 29, alto: 30 },
    C: { alerta: 24, medio: 28, medioAlto: 29, alto: 30 },
    D: { alerta: 25, medio: 28, medioAlto: 29, alto: 30 },
    total: { alerta: 101, medio: 113, medioAlto: 119, alto: 120 }
  }
];

// Functor to wire interactive DOM event listeners
function setupBlockABModalListeners(itemId, modalContent, controller) {
  if (!modalContent || !controller) return;

  // 1. EVALUACIÓN Y CAMPANA DE GAUSS PSICOMÉTRICA
  if (itemId === 'evaluacion-interpretacion-perfiles-psicometricos') {
    const slider = modalContent.querySelector('#gauss-ci-slider');
    const input = modalContent.querySelector('#gauss-ci-input');
    const sliderValLabel = modalContent.querySelector('#gauss-slider-val-label');
    const markerGroup = modalContent.querySelector('#gauss-marker-group');
    const markerTagText = modalContent.querySelector('#gauss-needle-tag-text');
    const ciBandRect = modalContent.querySelector('#gauss-ci-band-rect');

    const outZ = modalContent.querySelector('#gauss-val-z');
    const outT = modalContent.querySelector('#gauss-val-t');
    const outPR = modalContent.querySelector('#gauss-val-pr');
    const outStanine = modalContent.querySelector('#gauss-val-stanine');
    const outCI95 = modalContent.querySelector('#gauss-val-ci95');
    const outDiag = modalContent.querySelector('#gauss-val-diag');

    function normalCDF(z) {
      const p = 0.2316419;
      const b1 = 0.319381530;
      const b2 = -0.356563782;
      const b3 = 1.781477937;
      const b4 = -1.821255978;
      const b5 = 1.330274429;
      const t = 1.0 / (1.0 + p * Math.abs(z));
      const poly = t * (b1 + t * (b2 + t * (b3 + t * (b4 + t * b5))));
      const phi = (1.0 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * z * z);
      const ans = 1.0 - phi * poly;
      return z >= 0 ? ans : 1.0 - ans;
    }

    function updateGauss(rawCI) {
      let ci = parseFloat(rawCI);
      if (isNaN(ci)) ci = 100;
      ci = Math.max(40, Math.min(160, ci));

      // Sync inputs
      if (slider && parseFloat(slider.value) !== ci) slider.value = ci;
      if (input && parseFloat(input.value) !== ci) input.value = ci;
      if (sliderValLabel) sliderValLabel.textContent = `CI = ${Math.round(ci)}`;

      // Statistical calculations
      const z = (ci - 100) / 15;
      const t = 50 + 10 * z;
      const pr = Math.max(0.1, Math.min(99.9, normalCDF(z) * 100));
      const stanine = Math.max(1, Math.min(9, Math.round(5 + 2 * z)));

      // 95% Confidence Interval assuming standard Wechsler SEM = 3.2
      const sem = 3.2;
      const margin95 = 1.96 * sem;
      const ciLower = Math.max(30, Math.round((ci - margin95) * 10) / 10);
      const ciUpper = Math.min(170, Math.round((ci + margin95) * 10) / 10);

      // Qualitative Classification
      let diagText = '';
      let diagBg = '';
      let diagColor = '';

      if (ci >= 130) {
        diagText = 'Muy Superior / Altas Capacidades Intelectuales';
        diagBg = 'rgba(168, 85, 247, 0.18)';
        diagColor = '#7e22ce';
      } else if (ci >= 120) {
        diagText = 'Superior';
        diagBg = 'rgba(147, 51, 234, 0.15)';
        diagColor = '#6b21a8';
      } else if (ci >= 110) {
        diagText = 'Promedio Alto (Brillante)';
        diagBg = 'rgba(59, 130, 246, 0.15)';
        diagColor = '#1d4ed8';
      } else if (ci >= 90) {
        diagText = 'Promedio / Rango Normal Típico';
        diagBg = 'rgba(16, 185, 129, 0.15)';
        diagColor = '#047857';
      } else if (ci >= 80) {
        diagText = 'Promedio Bajo';
        diagBg = 'rgba(245, 158, 11, 0.15)';
        diagColor = '#b45309';
      } else if (ci >= 70) {
        diagText = 'Capacidad Intelectual Limítrofe (Borderline)';
        diagBg = 'rgba(249, 115, 22, 0.18)';
        diagColor = '#c2410c';
      } else if (ci >= 50) {
        diagText = 'Discapacidad Intelectual Leve (DSM-5)';
        diagBg = 'rgba(239, 68, 68, 0.2)';
        diagColor = '#b91c1c';
      } else if (ci >= 35) {
        diagText = 'Discapacidad Intelectual Moderada';
        diagBg = 'rgba(220, 38, 38, 0.22)';
        diagColor = '#991b1b';
      } else {
        diagText = 'Discapacidad Intelectual Grave / Profunda';
        diagBg = 'rgba(185, 28, 28, 0.25)';
        diagColor = '#7f1d1d';
      }

      // Update text values
      if (outZ) outZ.textContent = (z >= 0 ? '+' : '') + z.toFixed(2);
      if (outT) outT.textContent = t.toFixed(1);
      if (outPR) outPR.textContent = pr.toFixed(1) + ' %';
      if (outStanine) outStanine.textContent = stanine;
      if (outCI95) outCI95.textContent = `${ciLower} - ${ciUpper}`;
      if (outDiag) {
        outDiag.textContent = diagText;
        outDiag.style.background = diagBg;
        outDiag.style.color = diagColor;
      }

      // SVG Needle & CI Band positioning
      // Center (mean 100) is at X = 450, 1 SD = 100 px.
      const svgX = 450 + z * 100;
      const clampedSvgX = Math.max(100, Math.min(800, svgX));

      if (markerGroup) {
        markerGroup.setAttribute('transform', `translate(${clampedSvgX}, 0)`);
      }
      if (markerTagText) {
        markerTagText.textContent = `CI ${Math.round(ci)}`;
      }

      if (ciBandRect) {
        const bandHalfWidth = (margin95 / 15) * 100; // in SVG pixels
        const bandX = Math.max(100, svgX - bandHalfWidth);
        const bandWidth = Math.min(700, bandHalfWidth * 2);
        ciBandRect.setAttribute('x', bandX);
        ciBandRect.setAttribute('width', bandWidth);
      }
    }

    if (slider) {
      slider.addEventListener('input', () => updateGauss(slider.value));
    }
    if (input) {
      input.addEventListener('input', () => updateGauss(input.value));
    }

    modalContent.querySelectorAll('.gauss-preset-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const presetCI = btn.getAttribute('data-ci');
        if (presetCI) updateGauss(presetCI);
      });
    });

    // Initialize with default 100
    updateGauss(100);
  }

  // 2. CALCULADORA DE EEM E INTERVALOS DE CONFIANZA
  if (itemId === 'evaluacion-estimacion-error-estandar-eem') {
    const scoreInp = modalContent.querySelector('#eem-calc-score');
    const sdInp = modalContent.querySelector('#eem-calc-sd');
    const relInp = modalContent.querySelector('#eem-calc-rel');
    const relValLbl = modalContent.querySelector('#eem-calc-rel-val');

    const outVal = modalContent.querySelector('#eem-out-val');
    const out90 = modalContent.querySelector('#eem-out-ci90');
    const out95 = modalContent.querySelector('#eem-out-ci95');
    const out99 = modalContent.querySelector('#eem-out-ci99');
    const outVerdict = modalContent.querySelector('#eem-out-verdict');

    function updateEEM() {
      const x = parseFloat(scoreInp ? scoreInp.value : 100) || 100;
      const s = parseFloat(sdInp ? sdInp.value : 15) || 15;
      const rxx = parseFloat(relInp ? relInp.value : 0.94) || 0.94;

      if (relValLbl) relValLbl.textContent = rxx.toFixed(2);

      const eem = s * Math.sqrt(Math.max(0, 1 - rxx));

      const ci90Low = Math.round((x - 1.645 * eem) * 10) / 10;
      const ci90High = Math.round((x + 1.645 * eem) * 10) / 10;

      const ci95Low = Math.round((x - 1.960 * eem) * 10) / 10;
      const ci95High = Math.round((x + 1.960 * eem) * 10) / 10;

      const ci99Low = Math.round((x - 2.576 * eem) * 10) / 10;
      const ci99High = Math.round((x + 2.576 * eem) * 10) / 10;

      if (outVal) outVal.textContent = eem.toFixed(2);
      if (out90) out90.textContent = `${ci90Low} - ${ci90High}`;
      if (out95) out95.textContent = `${ci95Low} - ${ci95High}`;
      if (out99) out99.textContent = `${ci99Low} - ${ci99High}`;

      if (outVerdict) {
        if (rxx >= 0.90) {
          outVerdict.textContent = 'Excelente Confiabilidad (rxx ≥ 0.90) - Apta para Decisiones Clínicas Individuales';
          outVerdict.style.background = 'rgba(16, 185, 129, 0.15)';
          outVerdict.style.color = '#047857';
        } else if (rxx >= 0.80) {
          outVerdict.textContent = 'Confiabilidad Moderada (0.80 ≤ rxx < 0.90) - Aceptable para Cribado / Investigación';
          outVerdict.style.background = 'rgba(245, 158, 11, 0.15)';
          outVerdict.style.color = '#b45309';
        } else {
          outVerdict.textContent = 'Confiabilidad Deficiente (rxx < 0.80) - Inadecuada para Diagnóstico Individual';
          outVerdict.style.background = 'rgba(239, 68, 68, 0.15)';
          outVerdict.style.color = '#b91c1c';
        }
      }
    }

    if (scoreInp) scoreInp.addEventListener('input', updateEEM);
    if (sdInp) sdInp.addEventListener('input', updateEEM);
    if (relInp) relInp.addEventListener('input', updateEEM);

    updateEEM();
  }

  // 3. EVALUACIÓN Y SEMÁFORO EAD-1 (SIMULADOR EN TIEMPO REAL, CALCULADORA PREMATUREZ Y NAVEGADOR)
  if (itemId === 'evaluacion-tamizaje-neurodesarrollo-ead1') {
    // 3.1 Calculadora de Edad Gestacional y Regla de Prematurez
    const cronInput = modalContent.querySelector('#ead-calc-cron-meses');
    const gestInput = modalContent.querySelector('#ead-calc-gest-sem');
    const outAge = modalContent.querySelector('#ead-calc-result-age');
    const outRango = modalContent.querySelector('#ead-calc-result-rango');

    function updatePrematurityCalc() {
      if (!cronInput || !gestInput) return;
      const cronMeses = Math.max(0, Math.min(60, parseFloat(cronInput.value) || 0));
      const gestSem = Math.max(20, Math.min(42, parseFloat(gestInput.value) || 40));

      let corrMeses = cronMeses;
      let semPrem = 0;
      let isPrem = false;

      if (gestSem < 37 && cronMeses <= 24) {
        semPrem = 40 - gestSem;
        const mesesRestar = (semPrem * 7) / 30.4375;
        corrMeses = Math.max(0, cronMeses - mesesRestar);
        isPrem = true;
      }

      // Determine starting age range
      let rangoIdx = 0;
      if (corrMeses < 3.5) rangoIdx = 0;
      else if (corrMeses < 6.5) rangoIdx = 1;
      else if (corrMeses < 9.5) rangoIdx = 2;
      else if (corrMeses < 12.5) rangoIdx = 3;
      else if (corrMeses < 18.5) rangoIdx = 4;
      else if (corrMeses < 24.5) rangoIdx = 5;
      else if (corrMeses < 36.5) rangoIdx = 6;
      else if (corrMeses < 48.5) rangoIdx = 7;
      else rangoIdx = 8;

      if (outAge) {
        if (isPrem) {
          outAge.innerHTML = `<span style="color: #d97706; font-weight: 800;">${corrMeses.toFixed(1)} Meses</span> <span style="font-size: 0.75rem; color: #b45309;">(Ajuste: -${semPrem} semanas por prematurez)</span>`;
        } else {
          outAge.innerHTML = `<span style="color: #059669; font-weight: 800;">${cronMeses.toFixed(1)} Meses</span> <span style="font-size: 0.75rem; color: #047857;">(Nacido a término / Sin ajuste)</span>`;
        }
      }

      if (outRango) {
        const rName = EAD1_TABLE_1_DATA[rangoIdx] ? EAD1_TABLE_1_DATA[rangoIdx].age : '1 a 3 Meses';
        outRango.innerHTML = `<span style="color: #2563eb; font-weight: 800;">Rango ${rangoIdx + 1}: ${rName}</span>`;
      }
    }

    if (cronInput) cronInput.addEventListener('input', updatePrematurityCalc);
    if (gestInput) gestInput.addEventListener('input', updatePrematurityCalc);
    updatePrematurityCalc();

    // 3.2 Simulador Interactivo de Baremos Nelson Ortiz (Tabla 1)
    const simAgeSelect = modalContent.querySelector('#ead-sim-age-select');
    const tableDom = modalContent.querySelector('#ead-table-1-dom');

    const areasConfig = [
      { key: 'A', prefix: 'a', name: 'Motricidad Gruesa' },
      { key: 'B', prefix: 'b', name: 'Motricidad Fino-Adaptativa' },
      { key: 'C', prefix: 'c', name: 'Audición y Lenguaje' },
      { key: 'D', prefix: 'd', name: 'Personal-Social' }
    ];

    function updateSimulator() {
      const rangeIdx = parseInt(simAgeSelect ? simAgeSelect.value : 0, 10) || 0;
      const norm = EAD1_TABLE_1_DATA[rangeIdx] || EAD1_TABLE_1_DATA[0];

      let sumTotal = 0;
      let hasAlertArea = false;

      areasConfig.forEach(area => {
        const slider = modalContent.querySelector(`#ead-sim-slider-${area.prefix}`);
        const input = modalContent.querySelector(`#ead-sim-input-${area.prefix}`);
        const badge = modalContent.querySelector(`#ead-sim-badge-${area.prefix}`);
        const normLabel = modalContent.querySelector(`#ead-sim-norm-${area.prefix}`);

        let val = parseInt(input ? input.value : 0, 10);
        if (isNaN(val)) val = 0;
        val = Math.max(0, Math.min(30, val));
        sumTotal += val;

        const cutoffs = norm[area.key];
        let label = '';
        let bg = '';
        let color = '';

        if (val <= cutoffs.alerta) {
          label = 'Alerta (< P5)';
          bg = 'rgba(239, 68, 68, 0.18)';
          color = '#dc2626';
          hasAlertArea = true;
        } else if (val <= cutoffs.medio) {
          label = 'Medio (P5-P50)';
          bg = 'rgba(100, 116, 139, 0.15)';
          color = '#475569';
        } else if (val <= cutoffs.medioAlto) {
          label = 'Medio-Alto (P50-P95)';
          bg = 'rgba(37, 99, 235, 0.15)';
          color = '#1d4ed8';
        } else {
          label = 'Alto (> P95)';
          bg = 'rgba(16, 185, 129, 0.18)';
          color = '#047857';
        }

        if (badge) {
          badge.textContent = label;
          badge.style.background = bg;
          badge.style.color = color;
        }

        if (normLabel) {
          normLabel.textContent = `Cortes Nelson Ortiz: Alerta ≤ ${cutoffs.alerta} | Medio: ${cutoffs.alerta + 1}-${cutoffs.medio} | M-Alto: ${cutoffs.medio + 1}-${cutoffs.medioAlto} | Alto: ≥ ${cutoffs.alto}`;
        }
      });

      // Total Score
      const totalNum = modalContent.querySelector('#ead-sim-total-num');
      const totalBadge = modalContent.querySelector('#ead-sim-total-badge');
      const verdictBanner = modalContent.querySelector('#ead-sim-verdict-banner');

      if (totalNum) totalNum.textContent = sumTotal;

      const totalCutoffs = norm.total;
      let totalLabel = '';
      let totalBg = '';
      let totalColor = '';
      let totalIsAlert = false;

      if (sumTotal <= totalCutoffs.alerta) {
        totalLabel = `ALERTA TOTAL (≤ ${totalCutoffs.alerta})`;
        totalBg = 'rgba(239, 68, 68, 0.2)';
        totalColor = '#b91c1c';
        totalIsAlert = true;
      } else if (sumTotal <= totalCutoffs.medio) {
        totalLabel = `DESARROLLO MEDIO (${totalCutoffs.alerta + 1} - ${totalCutoffs.medio})`;
        totalBg = 'rgba(100, 116, 139, 0.18)';
        totalColor = '#334155';
      } else if (sumTotal <= totalCutoffs.medioAlto) {
        totalLabel = `MEDIO-ALTO (${totalCutoffs.medio + 1} - ${totalCutoffs.medioAlto})`;
        totalBg = 'rgba(37, 99, 235, 0.18)';
        totalColor = '#1d4ed8';
      } else {
        totalLabel = `ALTO (≥ ${totalCutoffs.alto})`;
        totalBg = 'rgba(16, 185, 129, 0.2)';
        totalColor = '#047857';
      }

      if (totalBadge) {
        totalBadge.textContent = totalLabel;
        totalBadge.style.background = totalBg;
        totalBadge.style.color = totalColor;
      }

      if (verdictBanner) {
        if (hasAlertArea || totalIsAlert) {
          verdictBanner.style.background = 'rgba(239, 68, 68, 0.08)';
          verdictBanner.style.borderColor = 'rgba(239, 68, 68, 0.3)';
          verdictBanner.innerHTML = `
            <div style="font-size: 1.1rem; font-weight: 800; color: #dc2626; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;">
              <span>🚨</span>
              <span>CRITERIO DE ALERTA OPORTUNA (REMISIÓN INMEDIATA)</span>
            </div>
            <p style="margin: 0; font-size: 0.88rem; color: #991b1b; line-height: 1.55;">
              <strong>Hallazgo Clínico:</strong> Se evidencia puntuación en zona de riesgo (< P5) en una o más áreas o en la puntuación directa global acumulada (${sumTotal} pts vs punto de corte ≤ ${totalCutoffs.alerta}).<br>
              <strong>Conducta Nelson Ortiz:</strong> Remitir con prioridad a <em>Neuropediatría / Pediatría del Desarrollo</em> para valoración diagnóstica integral; coordinar intervención con <em>Terapia Ocupacional, Fonoaudiología o Fisioterapia</em> según el área afectada; capacitar a los padres en estimulación neurosensorial en el hogar y reevaluar en <strong>30 días</strong>.
            </p>
          `;
        } else {
          verdictBanner.style.background = 'rgba(16, 185, 129, 0.08)';
          verdictBanner.style.borderColor = 'rgba(16, 185, 129, 0.3)';
          verdictBanner.innerHTML = `
            <div style="font-size: 1.1rem; font-weight: 800; color: #047857; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;">
              <span>✅</span>
              <span>DESARROLLO NEUROEVOLUTIVO DENTRO DE LOS PARÁMETROS ESPERADOS</span>
            </div>
            <p style="margin: 0; font-size: 0.88rem; color: #065f46; line-height: 1.55;">
              <strong>Hallazgo Clínico:</strong> Todas las áreas y la puntuación total (${sumTotal} pts) se ubican en los percentiles normativos adecuados para el grupo etario (${norm.age}).<br>
              <strong>Conducta Nelson Ortiz:</strong> Reforzar pautas de crianza positiva, fomentar el juego sensorio-motriz y de interacción verbal en el hogar, y citar al próximo control de crecimiento y neurodesarrollo.
            </p>
          `;
        }
      }

      // Highlight active row in Tabla 1
      if (tableDom) {
        const rows = tableDom.querySelectorAll('tbody tr');
        rows.forEach((r, idx) => {
          if (idx === rangeIdx) {
            r.style.background = 'rgba(16, 185, 129, 0.15)';
            r.style.outline = '2px solid #059669';
            r.style.fontWeight = '700';
          } else {
            r.style.background = idx % 2 === 0 ? 'rgba(0,0,0,0.02)' : 'transparent';
            r.style.outline = 'none';
            r.style.fontWeight = 'normal';
          }
        });
      }
    }

    // Connect sliders and inputs
    areasConfig.forEach(area => {
      const slider = modalContent.querySelector(`#ead-sim-slider-${area.prefix}`);
      const input = modalContent.querySelector(`#ead-sim-input-${area.prefix}`);
      if (slider && input) {
        slider.addEventListener('input', () => {
          input.value = slider.value;
          updateSimulator();
        });
        input.addEventListener('input', () => {
          slider.value = input.value;
          updateSimulator();
        });
      }
    });

    if (simAgeSelect) {
      simAgeSelect.addEventListener('change', () => {
        updateSimulator();
        const rangeIdx = parseInt(simAgeSelect.value, 10) || 0;
        selectAgeTab(rangeIdx);
      });
    }

    // 3.3 Navegador de Criterios Etarios (9 Rangos)
    const tabsBar = modalContent.querySelector('#ead-age-tabs-bar');
    const contentBox = modalContent.querySelector('#ead-range-content-box');

    function renderEadRange(rangeIdx) {
      const data = EAD_RANGES_DATA[rangeIdx] || EAD_RANGES_DATA[0];
      if (!contentBox) return;

      contentBox.innerHTML = `
        <div style="background: rgba(255, 255, 255, 0.9); border: 1.5px solid rgba(59, 130, 246, 0.25); border-radius: 14px; padding: 1.25rem; box-shadow: 0 4px 14px rgba(0,0,0,0.03);">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(0,0,0,0.06); padding-bottom: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <span style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; color: #2563eb; letter-spacing: 0.05em;">GRUPO ETARIO SELECCIONADO:</span>
              <h4 style="margin: 0.15rem 0; font-size: 1.2rem; font-weight: 800; color: var(--text-primary);">${data.range}</h4>
              <p style="margin: 0; font-size: 0.82rem; color: var(--text-secondary); font-style: italic;">${data.subtitle}</p>
            </div>
            <span style="padding: 0.35rem 0.75rem; border-radius: 8px; background: rgba(59, 130, 246, 0.1); color: #1d4ed8; font-weight: 700; font-size: 0.82rem;">EAD-1 Oficial</span>
          </div>

          <div class="orientation-dimensions-grid">
            <!-- ÁREA A: MOTRICIDAD GRUESA -->
            <div class="orientation-dim-item" style="border-top: 3px solid #3b82f6;">
              <div class="dim-item-header">
                <span class="dim-icon">🏃‍♂️</span>
                <div>
                  <span class="dim-name">Área A: Motricidad Gruesa</span>
                  <div style="font-size: 0.72rem; color: #2563eb; font-weight: 700;">Tono, Postura y Locomoción</div>
                </div>
              </div>
              <p class="orientation-p" style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">${data.areas.gruesa.item}</p>
              <div class="orientation-subcard" style="margin: 0.35rem 0; padding: 0.75rem;">
                <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-secondary);">Material Requerido:</div>
                <div style="font-size: 0.82rem; color: var(--text-primary); margin-bottom: 0.35rem;">${data.areas.gruesa.material}</div>
                <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-secondary);">Procedimiento de Aplicación:</div>
                <div style="font-size: 0.82rem; color: var(--text-primary); margin-top: 0.2rem;">${data.areas.gruesa.procedimiento}</div>
                <div style="font-size: 0.75rem; font-weight: 700; color: #1e40af; margin-top: 0.4rem;">Criterio de Aprobación (1 punto):</div>
                <div style="font-size: 0.82rem; color: var(--text-primary);">${data.areas.gruesa.criterio}</div>
              </div>
            </div>

            <!-- ÁREA B: MOTRICIDAD FINO-ADAPTATIVA -->
            <div class="orientation-dim-item" style="border-top: 3px solid #d97706;">
              <div class="dim-item-header">
                <span class="dim-icon">✍️</span>
                <div>
                  <span class="dim-name">Área B: Fino-Adaptativa</span>
                  <div style="font-size: 0.72rem; color: #d97706; font-weight: 700;">Coordinación Óculo-Manual & Prensión</div>
                </div>
              </div>
              <p class="orientation-p" style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">${data.areas.fina.item}</p>
              <div class="orientation-subcard" style="margin: 0.35rem 0; padding: 0.75rem;">
                <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-secondary);">Material Requerido:</div>
                <div style="font-size: 0.82rem; color: var(--text-primary); margin-bottom: 0.35rem;">${data.areas.fina.material}</div>
                <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-secondary);">Procedimiento de Aplicación:</div>
                <div style="font-size: 0.82rem; color: var(--text-primary); margin-top: 0.2rem;">${data.areas.fina.procedimiento}</div>
                <div style="font-size: 0.75rem; font-weight: 700; color: #b45309; margin-top: 0.4rem;">Criterio de Aprobación (1 punto):</div>
                <div style="font-size: 0.82rem; color: var(--text-primary);">${data.areas.fina.criterio}</div>
              </div>
            </div>

            <!-- ÁREA C: AUDICIÓN Y LENGUAJE -->
            <div class="orientation-dim-item" style="border-top: 3px solid #059669;">
              <div class="dim-item-header">
                <span class="dim-icon">🗣️</span>
                <div>
                  <span class="dim-name">Área C: Audición y Lenguaje</span>
                  <div style="font-size: 0.72rem; color: #059669; font-weight: 700;">Comprensión, Léxico y Expresión</div>
                </div>
              </div>
              <p class="orientation-p" style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">${data.areas.lenguaje.item}</p>
              <div class="orientation-subcard" style="margin: 0.35rem 0; padding: 0.75rem;">
                <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-secondary);">Material Requerido:</div>
                <div style="font-size: 0.82rem; color: var(--text-primary); margin-bottom: 0.35rem;">${data.areas.lenguaje.material}</div>
                <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-secondary);">Procedimiento de Aplicación:</div>
                <div style="font-size: 0.82rem; color: var(--text-primary); margin-top: 0.2rem;">${data.areas.lenguaje.procedimiento}</div>
                <div style="font-size: 0.75rem; font-weight: 700; color: #047857; margin-top: 0.4rem;">Criterio de Aprobación (1 punto):</div>
                <div style="font-size: 0.82rem; color: var(--text-primary);">${data.areas.lenguaje.criterio}</div>
              </div>
            </div>

            <!-- ÁREA D: CONDUCTA PERSONAL-SOCIAL -->
            <div class="orientation-dim-item" style="border-top: 3px solid #7c3aed;">
              <div class="dim-item-header">
                <span class="dim-icon">🤝</span>
                <div>
                  <span class="dim-name">Área D: Personal-Social</span>
                  <div style="font-size: 0.72rem; color: #7c3aed; font-weight: 700;">Apego, Autonomía y Normas</div>
                </div>
              </div>
              <p class="orientation-p" style="font-weight: 700; color: var(--text-primary); margin-bottom: 0.35rem;">${data.areas.social.item}</p>
              <div class="orientation-subcard" style="margin: 0.35rem 0; padding: 0.75rem;">
                <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-secondary);">Material Requerido:</div>
                <div style="font-size: 0.82rem; color: var(--text-primary); margin-bottom: 0.35rem;">${data.areas.social.material}</div>
                <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-secondary);">Procedimiento de Aplicación:</div>
                <div style="font-size: 0.82rem; color: var(--text-primary); margin-top: 0.2rem;">${data.areas.social.procedimiento}</div>
                <div style="font-size: 0.75rem; font-weight: 700; color: #6b21a8; margin-top: 0.4rem;">Criterio de Aprobación (1 punto):</div>
                <div style="font-size: 0.82rem; color: var(--text-primary);">${data.areas.social.criterio}</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function selectAgeTab(rangeIdx) {
      if (tabsBar) {
        tabsBar.querySelectorAll('.ead-age-tab-btn').forEach(b => {
          const idx = parseInt(b.getAttribute('data-range-idx'), 10);
          if (idx === rangeIdx) {
            b.classList.add('active');
            b.style.background = '#059669';
            b.style.color = '#ffffff';
            b.style.borderColor = '#059669';
          } else {
            b.classList.remove('active');
            b.style.background = 'rgba(0,0,0,0.03)';
            b.style.color = 'var(--text-primary)';
            b.style.borderColor = 'rgba(0,0,0,0.12)';
          }
        });
      }
      renderEadRange(rangeIdx);
    }

    if (tabsBar) {
      tabsBar.querySelectorAll('.ead-age-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-range-idx'), 10) || 0;
          selectAgeTab(idx);
          if (simAgeSelect) {
            simAgeSelect.value = idx;
            updateSimulator();
          }
        });
      });
    }

    // 3.4 Internal anchor navigation buttons
    modalContent.querySelectorAll('.orientation-nav-pill-btn[data-target-sec]').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target-sec');
        const targetElem = modalContent.querySelector(`#${targetId}`);
        if (targetElem) {
          targetElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Initial renders
    updateSimulator();
    selectAgeTab(3); // Start with Rango 4 (10-12m) to match the Mateo clinical case
  }

  // Cross-navigation for the 5 new pairs
  const btnGotoPsicoEval = modalContent.querySelector('#btn-goto-psicometria-eval');
  if (btnGotoPsicoEval) btnGotoPsicoEval.addEventListener('click', () => controller.openResourceModal('evaluacion-interpretacion-perfiles-psicometricos'));
  const btnBottomGotoPsicoEval = modalContent.querySelector('#btn-bottom-goto-psicometria-eval');
  if (btnBottomGotoPsicoEval) btnBottomGotoPsicoEval.addEventListener('click', () => controller.openResourceModal('evaluacion-interpretacion-perfiles-psicometricos'));

  const btnBackPsicoDef = modalContent.querySelector('#btn-back-psicometria-def');
  if (btnBackPsicoDef) btnBackPsicoDef.addEventListener('click', () => controller.openResourceModal('psicometria-teoria-medida-baremos'));
  const btnBottomBackPsicoDef = modalContent.querySelector('#btn-bottom-back-psicometria-def');
  if (btnBottomBackPsicoDef) btnBottomBackPsicoDef.addEventListener('click', () => controller.openResourceModal('psicometria-teoria-medida-baremos'));

  const btnGotoEemEval = modalContent.querySelector('#btn-goto-eem-eval');
  if (btnGotoEemEval) btnGotoEemEval.addEventListener('click', () => controller.openResourceModal('evaluacion-estimacion-error-estandar-eem'));
  const btnBottomGotoEemEval = modalContent.querySelector('#btn-bottom-goto-eem-eval');
  if (btnBottomGotoEemEval) btnBottomGotoEemEval.addEventListener('click', () => controller.openResourceModal('evaluacion-estimacion-error-estandar-eem'));

  const btnBackEemDef = modalContent.querySelector('#btn-back-eem-def');
  if (btnBackEemDef) btnBackEemDef.addEventListener('click', () => controller.openResourceModal('confiabilidad-error-estandar-medicion'));
  const btnBottomBackEemDef = modalContent.querySelector('#btn-bottom-back-eem-def');
  if (btnBottomBackEemDef) btnBottomBackEemDef.addEventListener('click', () => controller.openResourceModal('confiabilidad-error-estandar-medicion'));

  const btnGotoEadEval = modalContent.querySelector('#btn-goto-ead-eval');
  if (btnGotoEadEval) btnGotoEadEval.addEventListener('click', () => controller.openResourceModal('evaluacion-tamizaje-neurodesarrollo-ead1'));
  const btnBottomGotoEadEval = modalContent.querySelector('#btn-bottom-goto-ead-eval');
  if (btnBottomGotoEadEval) btnBottomGotoEadEval.addEventListener('click', () => controller.openResourceModal('evaluacion-tamizaje-neurodesarrollo-ead1'));

  const btnBackEadDef = modalContent.querySelector('#btn-back-ead-def');
  if (btnBackEadDef) btnBackEadDef.addEventListener('click', () => controller.openResourceModal('neurodesarrollo-infantil-ead'));
  const btnBottomBackEadDef = modalContent.querySelector('#btn-bottom-back-ead-def');
  if (btnBottomBackEadDef) btnBottomBackEadDef.addEventListener('click', () => controller.openResourceModal('neurodesarrollo-infantil-ead'));

  const btnGotoFinaEval = modalContent.querySelector('#btn-goto-fina-eval');
  if (btnGotoFinaEval) btnGotoFinaEval.addEventListener('click', () => controller.openResourceModal('evaluacion-motricidad-fino-adaptativa-grafismo'));
  const btnBottomGotoFinaEval = modalContent.querySelector('#btn-bottom-goto-fina-eval');
  if (btnBottomGotoFinaEval) btnBottomGotoFinaEval.addEventListener('click', () => controller.openResourceModal('evaluacion-motricidad-fino-adaptativa-grafismo'));

  const btnBackFinaDef = modalContent.querySelector('#btn-back-fina-def');
  if (btnBackFinaDef) btnBackFinaDef.addEventListener('click', () => controller.openResourceModal('coordinacion-visomotriz-fino-adaptativa'));
  const btnBottomBackFinaDef = modalContent.querySelector('#btn-bottom-back-fina-def');
  if (btnBottomBackFinaDef) btnBottomBackFinaDef.addEventListener('click', () => controller.openResourceModal('coordinacion-visomotriz-fino-adaptativa'));

  const btnGotoLatEval = modalContent.querySelector('#btn-goto-lateralidad-eval');
  if (btnGotoLatEval) btnGotoLatEval.addEventListener('click', () => controller.openResourceModal('evaluacion-lateralidad-dominancia-infantil'));
  const btnBottomGotoLatEval = modalContent.querySelector('#btn-bottom-goto-lateralidad-eval');
  if (btnBottomGotoLatEval) btnBottomGotoLatEval.addEventListener('click', () => controller.openResourceModal('evaluacion-lateralidad-dominancia-infantil'));

  const btnBackLatDef = modalContent.querySelector('#btn-back-lateralidad-def');
  if (btnBackLatDef) btnBackLatDef.addEventListener('click', () => controller.openResourceModal('lateralidad-esquema-corporal-desarrollo'));
  const btnBottomBackLatDef = modalContent.querySelector('#btn-bottom-back-lateralidad-def');
  if (btnBottomBackLatDef) btnBottomBackLatDef.addEventListener('click', () => controller.openResourceModal('lateralidad-esquema-corporal-desarrollo'));
}


export function setupAdditionalModalListeners(itemId, modalContent, controller) {
  setupBlockABModalListeners(itemId, modalContent, controller);

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
