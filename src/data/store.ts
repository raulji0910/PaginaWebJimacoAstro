// Datos de la Tienda Virtual: productos con precio (importaciones).
// El catálogo corporativo (sin precios) vive en ./products.ts

export interface StoreProduct {
  id: string;
  sku: string;
  name: string;
  brand: string;
  category: string;
  categoryName: string;
  price: number;
  originalPrice?: number;
  taxIncluded: boolean;
  stock: number;
  unit: string;
  image: string;
  badge?: string;
  rating?: number;
  reviewsCount?: number;
  description: string;
  specs: Record<string, string>;
  isFeatured?: boolean;
}

export const PRODUCTS: StoreProduct[] = [
  {
    id: 'caja-de-inspeccion-polipropileno',
    sku: 'PJ-CAT-001',
    name: 'Caja de Inspección en Polipropileno de Alta Densidad',
    brand: 'JIMACO',
    category: 'construccion',
    categoryName: 'Construcción',
    price: 77350,
    taxIncluded: true,
    stock: 100,
    unit: 'Unidad',
    image: '/images/catalogo/caja-de-inspeccion-polipropileno.jpg',
    badge: 'Soporta 15 Ton',
    description: 'Caja de inspección fabricada en polipropileno de alta densidad (PP), diseñada para brindar máxima resistencia y protección en instalaciones eléctricas y de telecomunicaciones.',
    specs: {
      'Material': 'Polipropileno de alta densidad (PP)',
      'Resistencia mecánica': 'Soporta cargas de hasta 15 toneladas',
      'Protección': 'Resistente a agentes químicos y ácidos',
      'Temperatura': '-40 °C a +80 °C',
      'Seguridad': 'Resistente a la humedad y al fuego'
    },
    isFeatured: true
  },
  {
    id: 'placa-de-proteccion-pe-hd',
    sku: 'PJ-CAT-002',
    name: 'Placa de Protección y Señalización JIMACO',
    brand: 'JIMACO',
    category: 'construccion',
    categoryName: 'Construcción',
    price: 8330,
    taxIncluded: true,
    stock: 100,
    unit: 'Unidad',
    image: '/images/catalogo/placa-de-proteccion-pe-hd.jpg',
    badge: 'Reciclado PE-HD',
    description: 'Placa fabricada en PE-HD reciclado para proteger y señalizar canalizaciones eléctricas subterráneas.',
    specs: {
      'Material': 'PE-HD reciclado',
      'Resistencia mecánica': 'Soporta cargas de hasta 15 toneladas',
      'Temperatura': '-40 °C a +80 °C',
      'Seguridad': 'Resistente a la humedad y al fuego',
      'Uso': 'Protección y señalización de canalizaciones subterráneas'
    },
    isFeatured: true
  },
  {
    id: 'varillas-copperweld',
    sku: 'PJ-CAT-010',
    name: 'Varillas Copperweld para Puesta a Tierra',
    brand: 'JIMACO',
    category: 'energia-solar',
    categoryName: 'Energía Solar',
    price: 48552,
    taxIncluded: true,
    stock: 100,
    unit: 'Unidad',
    image: '/images/catalogo/varillas-copperweld.jpg',
    badge: 'Alta conductividad',
    description: 'Varilla con núcleo de acero recubierto de cobre electrolítico de alta pureza, con alta conductividad eléctrica y excelente resistencia a la corrosión.',
    specs: {
      'Núcleo': 'Acero',
      'Recubrimiento': 'Cobre electrolítico de alta pureza',
      'Instalación': 'Vertical mediante hincado',
      'Corrosión': 'Pensada para larga duración enterrada'
    },
    isFeatured: false
  },
  {
    id: 'ponchadora-hidraulica-tqk-70',
    sku: 'PJ-26554',
    name: 'Ponchadora Hidráulica 6-70 mm² 7 Ton TQK-70',
    brand: 'JIMACO',
    category: 'herramientas',
    categoryName: 'Herramientas Profesionales',
    price: 172431,
    taxIncluded: true,
    stock: 100,
    unit: 'Unidad',
    image: '/images/catalogo/ponchadora-hidraulica-tqk-70.jpg',
    badge: 'Incluye 8 matrices',
    description: 'Herramienta para realizar conexiones firmes y precisas en cables de diferentes secciones.',
    specs: {
      'Referencia': 'TQK-70',
      'Rango de cables': '6 a 70 mm²',
      'Fuerza': 'Hasta 7 toneladas',
      'Incluye': '8 matrices intercambiables',
      'Accionamiento': 'Manual hidráulico'
    },
    isFeatured: false
  },
  {
    id: 'ponchadora-hidraulica-tqk-300',
    sku: 'PJ-26556',
    name: 'Ponchadora Hidráulica 16-300 mm² 10 Ton TQK-300',
    brand: 'JIMACO',
    category: 'herramientas',
    categoryName: 'Herramientas Profesionales',
    price: 227409,
    taxIncluded: true,
    stock: 100,
    unit: 'Unidad',
    image: '/images/catalogo/ponchadora-hidraulica-tqk-300.jpg',
    badge: '10 Toneladas',
    description: 'Ponchadora hidráulica manual para conexiones en cables de mayor sección, con potencia y versatilidad para trabajos exigentes.',
    specs: {
      'Referencia': 'TQK-300',
      'Rango de cables': '16 a 300 mm²',
      'Fuerza': '10 toneladas',
      'Matrices': 'Desde 16 hasta 240 mm²',
      'Accionamiento': 'Manual hidráulico'
    },
    isFeatured: false
  },
  {
    id: 'ponchadora-hidraulica-tqk-120',
    sku: 'PJ-26555',
    name: 'Ponchadora Hidráulica 10-120 mm² 8 Ton TQK-120',
    brand: 'JIMACO',
    category: 'herramientas',
    categoryName: 'Herramientas Profesionales',
    price: 196172,
    taxIncluded: true,
    stock: 100,
    unit: 'Unidad',
    image: '/images/catalogo/ponchadora-hidraulica-tqk-120.jpg',
    description: 'Ponchadora hidráulica para conexiones eléctricas con diferentes secciones de cable.',
    specs: {
      'Referencia': 'TQK-120',
      'Rango de cables': '10 a 120 mm²',
      'Fuerza': '8 toneladas',
      'Matrices': 'Desde 10 hasta 120 mm²',
      'Accionamiento': 'Manual hidráulico'
    },
    isFeatured: false
  },
  {
    id: 'cizalla-corta-cable-400-mm2',
    sku: 'PJ-26661',
    name: 'Cizalla Corta Cable 400 mm²',
    brand: 'JIMACO',
    category: 'herramientas',
    categoryName: 'Herramientas Profesionales',
    price: 514500,
    taxIncluded: true,
    stock: 100,
    unit: 'Unidad',
    image: '/images/catalogo/cizalla-corta-cable-400-mm2.jpg',
    description: 'Cortacables manual para facilitar el corte de cables en trabajos de instalación y mantenimiento eléctrico.',
    specs: {
      'Capacidad de corte': 'Cables de hasta 400 mm²',
      'Accionamiento': 'Totalmente manual',
      'Uso': 'Instalaciones, mantenimiento y montaje eléctrico'
    },
    isFeatured: false
  },
  {
    id: 'ponchadora-terminal-aislado-an-06wf2c',
    sku: 'PJ-26660',
    name: 'Ponchadora para Terminal Aislado AN-06WF2C',
    brand: 'JIMACO',
    category: 'herramientas',
    categoryName: 'Herramientas Profesionales',
    price: 93713,
    taxIncluded: true,
    stock: 100,
    unit: 'Unidad',
    image: '/images/catalogo/ponchadora-terminal-aislado-an-06wf2c.jpg',
    description: 'Herramienta para el engaste de terminales eléctricos, con practicidad y control en trabajos de instalación y mantenimiento.',
    specs: {
      'Referencia': 'AN-06WF2C',
      'Engaste': 'Ciclo controlado y progresivo',
      'Compatibilidad': 'Terminales dentro de su rango de capacidad',
      'Diseño': 'Mangos ergonómicos'
    },
    isFeatured: false
  },
  {
    id: 'kit-mc4-pelacable-corta-cable-ptb01',
    sku: 'PJ-26551',
    name: 'Kit MC4 con Pelacable y Corta Cable PTB01',
    brand: 'JIMACO',
    category: 'energia-solar',
    categoryName: 'Energía Solar',
    price: 189924,
    taxIncluded: true,
    stock: 100,
    unit: 'Kit',
    image: '/images/catalogo/kit-mc4-pelacable-corta-cable-ptb01.jpg',
    badge: 'Kit completo',
    description: 'Kit para preparación, corte y conexión de cables en instalaciones fotovoltaicas: ponchadora, pelacables, cortacables y llave MC4.',
    specs: {
      'Referencia': 'PTB01',
      'Contenido': 'Ponchadora, pelacables, cortacables y llave MC4',
      'Aplicación': 'Ponchado para conectores solares MC4',
      'Diseño': 'Manual para trabajo directo en instalación'
    },
    isFeatured: false
  },
  {
    id: 'kit-mc4-pelacable-ptb02',
    sku: 'PJ-26553',
    name: 'Kit MC4 con Pelacable PTB02',
    brand: 'JIMACO',
    category: 'energia-solar',
    categoryName: 'Energía Solar',
    price: 181178,
    taxIncluded: true,
    stock: 100,
    unit: 'Kit',
    image: '/images/catalogo/kit-mc4-pelacable-ptb02.jpg',
    badge: 'Conectores 1500 V DC',
    description: 'Kit para preparar cables y montar conexiones en sistemas solares fotovoltaicos: ponchadora, pelacables, juego de llaves MC4 y conectores MC4.',
    specs: {
      'Referencia': 'PTB02',
      'Cables compatibles': 'Fotovoltaicos de 2,5 / 4 / 6 mm²',
      'Terminales': 'MC4 estampados',
      'Conectores': 'Tensión nominal 1500 V DC'
    },
    isFeatured: false
  },
  {
    id: 'ponchadora-hidraulica-fyq-500',
    sku: 'PJ-26559',
    name: 'Ponchadora Hidráulica FYQ-500',
    brand: 'JIMACO',
    category: 'herramientas',
    categoryName: 'Herramientas Profesionales',
    price: 3398640,
    taxIncluded: true,
    stock: 100,
    unit: 'Unidad',
    image: '/images/catalogo/ponchadora-hidraulica-fyq-500.jpg',
    description: 'Herramienta para realizar conexiones firmes y precisas en cables de diferentes secciones.',
    specs: {
      'Referencia': 'FYQ-500',
      'Rango de ponchado': '16 a 500 mm²',
      'Fuerza': '15 toneladas',
      'Incluye': '8 matrices intercambiables',
      'Accionamiento': 'Bomba hidráulica manual'
    },
    isFeatured: false
  },
  {
    id: 'ponchadora-hidraulica-fyq-630',
    sku: 'PJ-26558',
    name: 'Ponchadora Hidráulica FYQ-630',
    brand: 'JIMACO',
    category: 'herramientas',
    categoryName: 'Herramientas Profesionales',
    price: 6707316,
    taxIncluded: true,
    stock: 100,
    unit: 'Unidad',
    image: '/images/catalogo/ponchadora-hidraulica-fyq.jpg',
    description: 'Herramienta para realizar conexiones firmes y precisas en cables de diferentes secciones.',
    specs: {
      'Referencia': 'FYQ-630',
      'Rango de ponchado': '150 a 630 mm²',
      'Fuerza': '30 toneladas',
      'Incluye': '8 matrices intercambiables',
      'Accionamiento': 'Bomba hidráulica manual'
    },
    isFeatured: false
  },
  {
    id: 'ponchadora-hidraulica-fyq-1000',
    sku: 'PJ-26560',
    name: 'Ponchadora Hidráulica FYQ-1000',
    brand: 'JIMACO',
    category: 'herramientas',
    categoryName: 'Herramientas Profesionales',
    price: 8403137,
    taxIncluded: true,
    stock: 100,
    unit: 'Unidad',
    image: '/images/catalogo/ponchadora-hidraulica-fyq.jpg',
    description: 'Herramienta para realizar conexiones firmes y precisas en cables de diferentes secciones.',
    specs: {
      'Referencia': 'FYQ-1000',
      'Rango de ponchado': '300 a 1000 mm²',
      'Fuerza': '50 toneladas',
      'Incluye': '8 matrices intercambiables',
      'Accionamiento': 'Bomba hidráulica manual'
    },
    isFeatured: false
  },
  {
    id: 'ponchadora-hidraulica-manual-ep-430',
    sku: 'PJ-26557',
    name: 'Ponchadora Hidráulica Manual EP-430',
    brand: 'JIMACO',
    category: 'herramientas',
    categoryName: 'Herramientas Profesionales',
    price: 2186625,
    taxIncluded: true,
    stock: 100,
    unit: 'Unidad',
    image: '/images/catalogo/ponchadora-hidraulica-manual-ep-430.jpg',
    badge: '16 Toneladas',
    description: 'Herramienta hidráulica manual de alta precisión y gran potencia para el ponchado y compresión de terminales y conectores eléctricos de gran calibre.',
    specs: {
      'Referencia': 'EP-430',
      'Fuerza': 'Hasta 16 toneladas',
      'Calibres': '50 mm² a 400 mm²',
      'Cabezal': 'Giratorio y robusto',
      'Mangos': 'Ergonómicos y aislados'
    },
    isFeatured: false
  },
  {
    id: 'pinza-ponchadora-rachet',
    sku: 'PJ-26659',
    name: 'Pinza Ponchadora Rachet',
    brand: 'JIMACO',
    category: 'herramientas',
    categoryName: 'Herramientas Profesionales',
    price: 93713,
    taxIncluded: true,
    stock: 100,
    unit: 'Unidad',
    image: '/images/catalogo/pinza-ponchadora-rachet.jpg',
    badge: 'Trinquete',
    description: 'Herramienta de ponchado con sistema de trinquete (ratchet) y ajuste autorregulable, para un prensado preciso.',
    specs: {
      'Sistema': 'Trinquete (ratchet), ciclo completo de ponchado',
      'Matriz': 'Autorregulable, terminales de 0,25 a 10 mm²',
      'Ponchado': 'Cuadrado',
      'Mangos': 'Antideslizantes'
    },
    isFeatured: false
  },
  {
    id: 'pinza-ponchadora-terminales-aislados',
    sku: 'PJ-26661',
    name: 'Pinza Ponchadora para Terminales Aislados',
    brand: 'JIMACO',
    category: 'herramientas',
    categoryName: 'Herramientas Profesionales',
    price: 93713,
    taxIncluded: true,
    stock: 100,
    unit: 'Unidad',
    image: '/images/catalogo/pinza-ponchadora-terminales-aislados.jpg',
    description: 'Herramienta de ponchado con trinquete de alta precisión para el prensado y empalme seguro de terminales eléctricos aislados.',
    specs: {
      'Sistema': 'Mecanismo de trinquete',
      'Matriz': '0,5-1,5 / 1,5-2,5 / 4,0-6,0 mm²',
      'Material': 'Acero aleado de alta calidad',
      'Diseño': 'Palanca optimizada que reduce el esfuerzo'
    },
    isFeatured: false
  },
  {
    id: 'ponchadora-inalambrica-200kn',
    sku: 'PJ-28032',
    name: 'Ponchadora Inalámbrica 200 kN',
    brand: 'JIMACO',
    category: 'herramientas',
    categoryName: 'Herramientas Profesionales',
    price: 8746500,
    taxIncluded: true,
    stock: 100,
    unit: 'Unidad',
    image: '/images/catalogo/ponchadora-inalambrica-200kn.jpg',
    badge: 'Con batería',
    description: 'Herramienta inalámbrica de alta capacidad para el ponchado rápido, eficiente y sin esfuerzo.',
    specs: {
      'Fuerza': '200 kN de fuerza hidráulica',
      'Calibres': 'Hasta 1250 mm²',
      'Batería': 'Hasta 130 ciclos continuos',
      'Incluye': '14 pares de dados de ponchado'
    },
    isFeatured: false
  },
  {
    id: 'llaves-para-conectores-mc4',
    sku: 'PJ-26550',
    name: 'Llaves para Conectores MC4',
    brand: 'JIMACO',
    category: 'energia-solar',
    categoryName: 'Energía Solar',
    price: 18743,
    taxIncluded: true,
    stock: 100,
    unit: 'Juego',
    image: '/images/catalogo/llaves-para-conectores-mc4.jpg',
    description: 'Herramientas para el ajuste, montaje y desconexión de conectores MC4 en instalaciones solares fotovoltaicas.',
    specs: {
      'Función': 'Ajuste del conector MC4',
      'Desconexión': 'Libera los seguros para separar conectores acoplados',
      'Aplicación': 'Instalación y mantenimiento fotovoltaico'
    },
    isFeatured: false
  },
  {
    id: 'llaves-mc4-doble-funcion',
    sku: 'PJ-26552',
    name: 'Llaves para Conectores MC4 (Doble Función)',
    brand: 'JIMACO',
    category: 'energia-solar',
    categoryName: 'Energía Solar',
    price: 18743,
    taxIncluded: true,
    stock: 100,
    unit: 'Juego',
    image: '/images/catalogo/llaves-mc4-doble-funcion.jpg',
    description: 'Herramientas para el ajuste, montaje y desconexión de conectores MC4 en instalaciones solares fotovoltaicas.',
    specs: {
      'Función': 'Ajuste del conector MC4',
      'Desconexión': 'Libera los seguros para separar conectores acoplados',
      'Aplicación': 'Instalación y mantenimiento fotovoltaico'
    },
    isFeatured: false
  }
];

export const CATEGORIES = [
  { id: 'todos', name: 'Todos los Productos', icon: 'grid' },
  { id: 'energia-solar', name: 'Energía Solar & Renovables', icon: 'sun' },
  { id: 'construccion', name: 'Obras & Construcción', icon: 'building' },
  { id: 'herramientas', name: 'Herramientas Profesionales', icon: 'tool' }
];
