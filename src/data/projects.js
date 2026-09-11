export const projectsData = [
  {
    id: "khodia",
    category: "mobility",
    categoryLabel: "Movilidad & GeoAI",
    title: "Khodia — Smart Routes for Every Child",
    tagline: "Plataforma integral de logística geoespacial, seguridad y optimización de rutas con IA",
    gradient: "from-[#0052FF] via-[#6E0DF2] to-[#FF007A]",
    accentColor: "#0052FF",
    badgeColor: "text-[#FF007A] bg-[#FF007A]/10 border-[#FF007A]/20",
    featuredBadge: "Desarrollado por Altikore",
    logoImage: "/assets/projects/logo-khodia.png",
    targetAudience: "Instituciones Educativas, Empresas de Transporte Escolar y Secretarías de Educación",
    summary: "Ecosistema distribuido de alta disponibilidad que conecta colegios, empresas transportadoras, conductores y acudientes con telemetría satelital continua, geocercas predictivas y reordenamiento de paradas asistido por IA.",
    challenge: "El transporte escolar tradicional adolece de incertidumbre en tiempos de llegada, falta de monitoreo continuo de velocidad/geocercas y rutas ineficientes que generan sobrecostos de combustible y estrés en padres e instituciones.",
    solution: "Altikore diseñó una arquitectura desacoplada y escalable: apps móviles nativas en Flutter para conductores y familias, backend central en Node.js/Prisma, microservicio en Python para ruteo algorítmico asistido por IA y observabilidad con Prometheus/Grafana.",
    architecture: [
      { step: "01. Captura Móvil", desc: "Apps Flutter transmiten GPS de alta frecuencia cada 3 segundos con reconexión offline." },
      { step: "02. Ingesta & Geo-Cercas", desc: "Backend Node.js procesa coordenadas, valida límites de velocidad y dispara webhooks." },
      { step: "03. Motor de IA en Python", desc: "Algoritmos heurísticos de optimización TSP reordenan paradas según tráfico y ausencias." },
      { step: "04. Notificaciones Push", desc: "Firebase Cloud Messaging envía alertas predictivas de aproximación a padres (ETA <1s)." }
    ],
    highlights: [
      "Apps nativas Flutter para Conductores y Padres con rastreo en mapa vectorial en vivo",
      "Microservicio de optimización y reordenamiento de paradas asistido por IA",
      "Geocercas dinámicas con notificaciones push predictivas de aproximación",
      "Panel web de supervisión y analítica de seguridad vial escolar para instituciones"
    ],
    stack: [
      "Flutter", "Dart", "Node.js", "Prisma ORM", "PostgreSQL", "Python", "FastAPI", "Docker", "Prometheus", "Grafana"
    ],
    metrics: [
      { label: "Reducción en tiempos de ruta", value: "35%" },
      { label: "Visibilidad GPS en tiempo real", value: "100%" },
      { label: "Alertas de aproximación", value: "<1s" },
      { label: "Uptime de plataforma", value: "99.98%" }
    ],
    github: "github.com/Altikore/Khodia-Core",
    demoStatus: "Producción Activa"
  },
  {
    id: "haltsense",
    category: "ai",
    categoryLabel: "Computer Vision & AI",
    title: "HaltSense — Industrial Fatigue & Vigilance Monitor",
    tagline: "Visión por computadora en tiempo real para prevención de accidentes y somnolencia laboral",
    gradient: "from-[#00D2FF] via-[#0052FF] to-[#6E0DF2]",
    accentColor: "#00D2FF",
    badgeColor: "text-[#00D2FF] bg-[#00D2FF]/10 border-[#00D2FF]/20",
    featuredBadge: "Deep Tech",
    targetAudience: "Gerencias de Seguridad y Salud en el Trabajo (HSE), Centros de Control Minero/Energético y Flotas de Carga",
    summary: "Sistema biométrico de visión artificial que analiza operarios en salas de control y transporte mediante Eye Aspect Ratio (EAR), PERCLOS, postura 3D (solvePnP) e ingesta de sensores IoT.",
    challenge: "La fatiga humana y los micro-sueños son responsables del 40% de accidentes graves en industrias críticas. Los métodos convencionales son reactivos y carecen de precisión milimétrica sin contacto físico invasivo.",
    solution: "Pipeline desacoplado multihilo con frame-skip automático (cero latencia acumulada). MediaPipe FaceMesh calcula apertura ocular y cabeceo; DeepFace detecta riesgos psicosociales y un endpoint REST ingiere métricas de sensores wearables (SpO2, FC, CO2).",
    architecture: [
      { step: "01. Hilo de Captura", desc: "Lee frames de cámara industrial y actualiza una cola de tamaño 1 con descarte de cuadros viejos." },
      { step: "02. Hilo Analista CV", desc: "MediaPipe FaceMesh extrae 468 landmarks faciales para calcular EAR, MAR y ángulo de cabeceo." },
      { step: "03. Ingesta Multimodal IoT", desc: "Endpoint REST FastAPI correlaciona métricas de signos vitales (pulsómetro y CO2)." },
      { step: "04. WebSockets Push", desc: "Notificaciones inmediatas a supervisores en <90ms ante somnolencia o ausencia de puesto." }
    ],
    highlights: [
      "Detección de somnolencia EAR y fatiga acumulada PERCLOS con histéresis",
      "Cálculo de cabeceo y posible desmayo mediante pose landmarks 3D",
      "Pipeline de streaming MJPEG anotado con WebSocket push de eventos críticos",
      "Dashboard reactivo en React 19 + TypeScript con registro persistente en SQLite"
    ],
    stack: [
      "Python 3.11", "FastAPI", "OpenCV", "MediaPipe", "DeepFace", "WebSockets", "React 19", "TypeScript", "Vite", "SQLite"
    ],
    metrics: [
      { label: "Latencia de inferencia CV", value: "<90ms" },
      { label: "Procesamiento de rostros", value: "Multi-face" },
      { label: "Lag acumulado en video", value: "0 ms (Skip)" },
      { label: "Índice de indisposición", value: "Multifactorial" }
    ],
    github: "github.com/Altikore/HaltSense",
    demoStatus: "Beta Avanzada / Piloto"
  },
  {
    id: "dfiesta",
    category: "saas",
    categoryLabel: "Enterprise SaaS & ERP",
    title: "DFiestaKlozet — Event Logistics & Commerce ERP",
    tagline: "Suite integral para gestión comercial de cotizaciones, alquileres y control de inventario",
    gradient: "from-[#FF007A] via-[#FF4D94] to-[#6E0DF2]",
    accentColor: "#FF007A",
    badgeColor: "text-[#FF4D94] bg-[#FF4D94]/10 border-[#FF4D94]/20",
    featuredBadge: "High Performance SaaS",
    targetAudience: "Empresas de Alquiler de Mobiliario, Productoras de Eventos Masivos y Casas de Banquetes",
    summary: "Plataforma empresarial de alta concurrencia diseñada para el sector de eventos y alquiler de mobiliario, integrando inventario en tiempo real, préstamos internos y generación dinámica de PDFs.",
    challenge: "Pérdidas de inventario por falta de trazabilidad en préstamos para showroom, cotizaciones lentas que pierden clientes y dificultades para conciliar cuentas por cobrar con múltiples abonos.",
    solution: "Desarrollo en Laravel 12 con Octane (RoadRunner) para multiplicar el rendimiento HTTP x10. WebSockets con Laravel Reverb para notificaciones en vivo, módulo de préstamos internos y motor dinámico de Cuentas de Cobro y Cotizaciones.",
    architecture: [
      { step: "01. Kernel Octane", desc: "Servidor RoadRunner mantiene la aplicación en memoria, eliminando sobrecostos de arranque PHP." },
      { step: "02. Motor de Inventario", desc: "Algoritmo de reserva atómica que descuenta stock comercial y gestiona préstamos internos." },
      { step: "03. Generación PDF al Vuelo", desc: "Pipeline asíncrono para renderizado de cotizaciones en PDF con branding en <300ms." },
      { step: "04. WebSockets Reverb", desc: "Sincronización en vivo entre asesores comerciales y operarios de bodega en tiempo real." }
    ],
    highlights: [
      "Arquitectura acelerada con Laravel Octane y servidor de alto rendimiento RoadRunner",
      "Control de inventario con impacto en tiempo real por alquileres y préstamos internos",
      "Cotizador inteligente con previsualización y exportación instantánea en PDF",
      "Panel financiero de cuentas por cobrar, abonos parciales y alertas de mora"
    ],
    stack: [
      "PHP 8.2+", "Laravel 12", "Laravel Octane", "RoadRunner", "Laravel Reverb", "Spatie Permissions", "Tailwind CSS", "Vite"
    ],
    metrics: [
      { label: "Aumento de velocidad HTTP", value: "10x" },
      { label: "Generación de cotización PDF", value: "<300ms" },
      { label: "Precisión de stock", value: "100%" },
      { label: "Trazabilidad de préstamos", value: "Auditable" }
    ],
    github: "Privado Empresarial",
    demoStatus: "Producción Activa"
  },
  {
    id: "stickynotes",
    category: "native",
    categoryLabel: "Software Nativo de Sistema",
    title: "StickyNotes para Windows 11 — Fluent Native",
    tagline: "Aplicación nativa moderna para Windows con diseño Fluent (Mica Alt) y sincronización cifrada",
    gradient: "from-[#0052FF] via-[#00D2FF] to-[#1E293B]",
    accentColor: "#0052FF",
    badgeColor: "text-[#0052FF] bg-[#0052FF]/10 border-[#0052FF]/20",
    featuredBadge: "Native Windows 11",
    logoImage: "/assets/projects/stickynotes-icon.png",
    targetAudience: "Profesionales, Desarrolladores y Usuarios de Windows 11 que requieren notas rápidas de arranque instantáneo",
    summary: "Herramienta de productividad de arranque instantáneo construida en C# y .NET 8 sobre WinUI 3, con panel acoplable SideNotes, notas flotantes Always-on-Top y sincronización en Google Drive.",
    challenge: "Las aplicaciones de notas multiplataforma actuales basadas en Electron consumen cientos de megabytes de memoria, tardan segundos en abrir y comprometen la privacidad con nubes propietarias.",
    solution: "Ingeniería 100% nativa con Windows App SDK. Base de datos SQLite embebida con Entity Framework Core 8 y Write-Ahead Logging (WAL) para persistencia en microsegundos, y sincronización segura con Google Drive (scope restringido) con credenciales cifradas con la API DPAPI de Windows.",
    architecture: [
      { step: "01. Shell WinUI 3", desc: "Interfaz nativa con renderizado acelerado por GPU y materiales Mica Alt integrados con el SO." },
      { step: "02. SQLite WAL", desc: "Escrituras locales de notas con debounce de 500ms y persistencia a prueba de fallos de energía." },
      { step: "03. Google Drive OAuth", desc: "Sincronización en segundo plano con scope drive.appdata restringido a datos de la aplicación." },
      { step: "04. Windows DPAPI", desc: "Cifrado de tokens y credenciales a nivel de hardware mediante las APIs nativas de Windows." }
    ],
    highlights: [
      "Doble modalidad: Panel lateral acoplable (SideNotes) y ventanas flotantes fijas",
      "Material nativo Mica Alt y sombras Fluent adaptables al tema del sistema operativo",
      "Atajo global de teclado (Win + Alt + N) con apertura instantánea sin recarga",
      "Sincronización segura con Google Drive con cifrado DPAPI a nivel de hardware"
    ],
    stack: [
      "C#", ".NET 8", "WinUI 3", "Windows App SDK", "SQLite (EF Core 8)", "Google Drive API", "Windows DPAPI", "Inno Setup"
    ],
    metrics: [
      { label: "Tiempo de arranque", value: "<250ms" },
      { label: "Consumo de memoria RAM", value: "<45 MB" },
      { label: "Latencia de auto-guardado", value: "500ms (Debounce)" },
      { label: "Compatibilidad", value: "Win 11 / 10" }
    ],
    github: "github.com/MarkSerna/StickyNotes",
    demoStatus: "Release v1.0.0 (MSIX & Portable)"
  },
  {
    id: "oura",
    category: "opensource",
    categoryLabel: "Open Source & DevTools",
    title: "Oura.js — Glassmorphic Component Library",
    tagline: "La librería de componentes y notificaciones glassmórficas más versátil y ligera",
    gradient: "from-[#6E0DF2] via-[#FF007A] to-[#00D2FF]",
    accentColor: "#6E0DF2",
    badgeColor: "text-[#6E0DF2] bg-[#6E0DF2]/10 border-[#6E0DF2]/20",
    featuredBadge: "Open Source / NPM",
    targetAudience: "Desarrolladores Web, Diseñadores de UI/UX y Equipos de Frontend a nivel global",
    summary: "Librería zero-dependencies de 10 kB gzipped para crear experiencias visuales con profundidad 3D, soporte para 10 idiomas (i18n), dark mode y animaciones ultrarrápidas.",
    challenge: "Las librerías de UI actuales obligan a importar árboles de dependencias pesados (>100 kB), tienen estilos rígidos y complican la implementación de interfaces glassmorphism consistentes.",
    solution: "Construida desde cero en TypeScript moderno sin ninguna dependencia de terceros. Empaquetado en ESM y UMD con soporte para Modals, Toasts, Drawers, Popovers, Context Menus, Tooltips e Inline Alerts con aceleración GPU.",
    architecture: [
      { step: "01. Core TypeScript", desc: "Arquitectura tipada al 100% con compilación en bundles ESM y UMD para máxima compatibilidad." },
      { step: "02. Motor de Animación", desc: "Transiciones CSS3 aceleradas por hardware y curvas cúbicas sin dependencias externas." },
      { step: "03. Módulo i18n", desc: "Sistema de localización integrado con 10 idiomas sin recarga de página." },
      { step: "04. Distribución NPM", desc: "Publicada oficialmente en el registro global de paquetes NPM con documentación en VitePress." }
    ],
    highlights: [
      "10 kB gzipped con CERO dependencias externas para máxima velocidad de carga",
      "Efectos glassmorphic con profundidad 3D y 6 posiciones espaciales configurables",
      "Internacionalización integrada (i18n) lista en 10 idiomas y sincronización de tema",
      "Disponible en NPM como paquete oficial con tipado TypeScript exhaustivo"
    ],
    stack: [
      "TypeScript", "ES6+", "Vite", "VitePress", "Vitest", "CSS3 Glassmorphism", "NPM Registry", "ESM / UMD"
    ],
    metrics: [
      { label: "Bundle Size (Gzipped)", value: "10 kB" },
      { label: "Dependencias externas", value: "0 (Zero)" },
      { label: "Idiomas soportados", value: "10 (i18n)" },
      { label: "Cobertura TypeScript", value: "100%" }
    ],
    github: "github.com/MarkSerna/oura-ui",
    demoStatus: "Publicado en NPM (v1.0.0)"
  }
];
