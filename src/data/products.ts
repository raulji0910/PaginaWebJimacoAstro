export interface Product {
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

export const PRODUCTS: Product[] = [
  // --- ENERGÍA SOLAR ---
  {
    id: 'cable-solar-fotovoltaico-6mm-prysmian',
    sku: 'PJ-SOL-601',
    name: 'Cable Solar Fotovoltaico 6mm² Prysmian H1Z2Z2-K (Certificado RETIE)',
    brand: 'Prysmian',
    category: 'energia-solar',
    categoryName: 'Energía Solar',
    price: 11800,
    originalPrice: 13500,
    taxIncluded: true,
    stock: 850,
    unit: 'Metro',
    image: '/images/pic-feria-solar-600x480.jpg',
    badge: 'Certificado RETIE',
    rating: 4.9,
    reviewsCount: 38,
    description: 'Conductor de cobre estañado clase 5 flexible diseñado especialmente para instalaciones fotovoltaicas industriales y comerciales. Resistente a radiación UV, ozono y condiciones climáticas severas.',
    specs: {
      'Calibre': '6 mm² (10 AWG)',
      'Tensión Nominal': '1.5 kV DC / 1.0 kV AC',
      'Rango Temperatura': '-40°C a +120°C',
      'Norma': 'EN 50618 / RETIE Vigente',
      'Material': 'Cobre electrolítico estañado libre de halógenos'
    },
    isFeatured: true
  },
  {
    id: 'varilla-cobre-puesta-a-tierra-copperweld',
    sku: 'PJ-SOL-602',
    name: 'Varilla de Puesta a Tierra Copperweld 5/8" x 2.40m con Conector',
    brand: 'SAFER',
    category: 'energia-solar',
    categoryName: 'Energía Solar',
    price: 78500,
    taxIncluded: true,
    stock: 120,
    unit: 'Unidad',
    image: '/images/varilla-cobre.jpg',
    badge: 'Alta Conductividad',
    rating: 4.8,
    reviewsCount: 22,
    description: 'Varilla para sistema de puesta a tierra con núcleo de acero de alta resistencia y recubrimiento electrolítico de cobre al 99.9%. Ideal para protección contra descargas atmosféricas en granjas solares.',
    specs: {
      'Diámetro': '5/8 pulgada (15.8 mm)',
      'Longitud': '2.40 metros',
      'Capa de Cobre': 'Mínimo 254 micrones (10 mils)',
      'Certificación': 'CIDET / RETIE',
      'Incluye': 'Conector tipo tornillo de alta presión'
    },
    isFeatured: true
  },
  {
    id: 'placa-senalizacion-subterranea-alta-resistencia',
    sku: 'PJ-SOL-603',
    name: 'Placa de Protección y Señalización Subterránea Fotovoltaica',
    brand: 'JIMACO Industrial',
    category: 'energia-solar',
    categoryName: 'Energía Solar',
    price: 32000,
    taxIncluded: true,
    stock: 430,
    unit: 'Placa 1m',
    image: '/images/placa-subterranea.jpg',
    badge: 'Fabricación Especial',
    rating: 4.7,
    reviewsCount: 15,
    description: 'Placa protectora en polietileno de alta densidad (PEAD) para zanjas subterráneas de media y baja tensión en proyectos solares. Previene impactos mecánicos durante excavaciones.',
    specs: {
      'Dimensiones': '100 cm x 25 cm x 6 mm',
      'Material': 'Polietileno de Alta Densidad (PEAD) virgen',
      'Color': 'Rojo advertencia alta visibilidad',
      'Resistencia al impacto': '> 15 kJ/m²'
    }
  },
  {
    id: 'terminales-bimetalicas-tipo-ojal',
    sku: 'PJ-SOL-604',
    name: 'Terminal Bimetálica de Ojal para Conexión Inversor Solar (Bolsa x 10)',
    brand: 'LEGRAND',
    category: 'energia-solar',
    categoryName: 'Energía Solar',
    price: 64900,
    taxIncluded: true,
    stock: 85,
    unit: 'Bolsa x 10',
    image: '/images/terminal-tipo-ojal.jpg',
    badge: 'Uso Eléctrico Pesado',
    rating: 4.9,
    reviewsCount: 19,
    description: 'Terminales bimetálicas (Aluminio-Cobre) soldadas por fricción molecular para evitar par galvánico en conexiones de conductores solares hacia tableros e inversores centrales.',
    specs: {
      'Ojo': '1/2 pulgada (M12)',
      'Rango Conductor': '50 mm² a 70 mm²',
      'Tecnología': 'Fricción molecular bimetálica',
      'Acabado': 'Estaño electrolítico en la pala de cobre'
    }
  },

  // --- CONSTRUCCIÓN ---
  {
    id: 'tuberia-galvanizada-metalica-industrial-2-pulgadas',
    sku: 'PJ-CON-101',
    name: 'Tubería Metálica Galvanizada ASTM A53 Schedule 40 (2" x 6m)',
    brand: 'Tubosa',
    category: 'construccion',
    categoryName: 'Construcción',
    price: 185000,
    originalPrice: 205000,
    taxIncluded: true,
    stock: 94,
    unit: 'Tubo 6m',
    image: '/images/tuberia-galvanizada.jpg',
    badge: 'Uso Estructural y Fluidos',
    rating: 4.8,
    reviewsCount: 45,
    description: 'Tubería de acero al carbono soldada por resistencia eléctrica (ERW) con galvanizado en caliente por inmersión. Apta para conducción de agua, vapor, aire comprimido y estructuras industriales.',
    specs: {
      'Diámetro Nominal': '2 pulgadas',
      'Longitud': '6.00 metros',
      'Espesor de pared': '3.91 mm (SCH 40)',
      'Norma Técnica': 'ASTM A53 / NTC 3470',
      'Extremos': 'Biselados'
    },
    isFeatured: true
  },
  {
    id: 'tuberia-pvc-sanitaria-pavco-3-pulgadas',
    sku: 'PJ-CON-102',
    name: 'Tubería Sanitaria PVC Pavco Wavin 3" x 6 Metros',
    brand: 'Pavco',
    category: 'construccion',
    categoryName: 'Construcción',
    price: 68500,
    taxIncluded: true,
    stock: 140,
    unit: 'Tubo 6m',
    image: '/images/tubos-sanitario.jpg',
    badge: 'Garantía Pavco Wavin',
    rating: 4.9,
    reviewsCount: 62,
    description: 'Tubería para sistemas de desagüe y ventilación en edificaciones comerciales y residenciales. Fabricada con resina virgen de máxima durabilidad y hermeticidad química.',
    specs: {
      'Diámetro': '3 pulgadas (75 mm)',
      'Longitud': '6.0 metros con campana',
      'Norma': 'NTC 1082 / ASTM D2665',
      'Tipo de Unión': 'Soldada con cemento solvente'
    },
    isFeatured: true
  },
  {
    id: 'cemento-solvente-pvc-soldadura-liquida',
    sku: 'PJ-CON-103',
    name: 'Soldadura Líquida PVC Pavco Wavin 1/4 Galón con Aplicador',
    brand: 'Pavco',
    category: 'construccion',
    categoryName: 'Construcción',
    price: 49900,
    taxIncluded: true,
    stock: 75,
    unit: '1/4 Galón (946 ml)',
    image: '/images/pic-construccion.jpg',
    badge: 'Secado Rápido',
    rating: 4.7,
    reviewsCount: 31,
    description: 'Adhesivo solvente formulado para la unión por termofusión química de tuberías y accesorios de PVC hasta 6 pulgadas de diámetro. Garantiza sellado hermético inmediato.',
    specs: {
      'Presentación': '1/4 de galón (946 ml)',
      'Viscosidad': 'Media para fácil esparcido',
      'Incluye': 'Brocha aplicadora en la tapa'
    }
  },

  // --- PROTECCIÓN PERSONAL (EPP) ---
  {
    id: 'casco-dielectrico-tipo-2-steelpro-barbuquejo',
    sku: 'PJ-EPP-301',
    name: 'Casco de Seguridad Dieléctrico Tipo II Steelpro Mountain con Barbuquejo',
    brand: 'STEELPRO',
    category: 'proteccion-personal',
    categoryName: 'Protección Personal',
    price: 54900,
    originalPrice: 62000,
    taxIncluded: true,
    stock: 180,
    unit: 'Unidad',
    image: '/images/pic-proteccion.jpg',
    badge: 'Dieléctrico 20.000V',
    rating: 4.9,
    reviewsCount: 54,
    description: 'Casco de protección para trabajo en alturas y riesgo eléctrico. Fabricado en policarbonato/ABS de alto impacto con suspensión tipo rachet de 6 puntos y barbuquejo de 4 apoyos.',
    specs: {
      'Clasificación': 'Tipo II, Clase E (Dieléctrico hasta 20.000V)',
      'Norma': 'ANSI / ISEA Z89.1-2014',
      'Ajuste': 'Rachet ergonómico posterior',
      'Peso': '430 gramos ultraliviano'
    },
    isFeatured: true
  },
  {
    id: 'gafas-seguridad-antiempanantes-3m-virtua',
    sku: 'PJ-EPP-302',
    name: 'Gafas de Seguridad Antiempañantes 3M Virtua Plus Lente Claro',
    brand: '3M',
    category: 'proteccion-personal',
    categoryName: 'Protección Personal',
    price: 18900,
    taxIncluded: true,
    stock: 320,
    unit: 'Unidad',
    image: '/images/pic-proteccion.jpg',
    badge: 'Protección UV 99.9%',
    rating: 4.8,
    reviewsCount: 88,
    description: 'Gafas de diseño envolvente con recubrimiento Scotchgard™ antiempañante y antirrayaduras de alto desempeño. Ajuste cómodo y compatibilidad con respiradores y mascarillas.',
    specs: {
      'Material Lente': 'Policarbonato de alta densidad',
      'Recubrimiento': 'Antiempañante avanzado Scotchgard™',
      'Norma': 'ANSI Z87.1-2015 / CSA Z94.3',
      'Filtro': 'Bloquea el 99.9% de radiación UVA/UVB'
    },
    isFeatured: true
  },
  {
    id: 'arnes-cuerpo-entero-4-argollas-trabajo-alturas',
    sku: 'PJ-EPP-303',
    name: 'Arnés Multipropósito 4 Argollas en D para Alturas con Faja Lumbar',
    brand: 'STEELPRO',
    category: 'proteccion-personal',
    categoryName: 'Protección Personal',
    price: 189000,
    originalPrice: 215000,
    taxIncluded: true,
    stock: 45,
    unit: 'Unidad',
    image: '/images/pic-proteccion.jpg',
    badge: 'Norma Resolución 4272',
    rating: 5.0,
    reviewsCount: 29,
    description: 'Arnés ergonómico para detención de caídas, posicionamiento y rescate en estructuras industriales y torres solares. Reata de poliéster de 45mm con herrajes en acero forjado.',
    specs: {
      'Argollas': '4 argollas (1 dorsal, 1 esternal, 2 laterales)',
      'Resistencia reata': '5.000 lb (22.2 kN)',
      'Capacidad usuario': '140 kg',
      'Norma': 'ANSI Z359.11-2014 / Res. 4272 de 2021'
    }
  },

  // --- HERRAMIENTAS INDUSTRIALES ---
  {
    id: 'taladro-percutor-industrial-makita-hp1630',
    sku: 'PJ-HER-201',
    name: 'Taladro Percutor Industrial Makita HP1630 1/2" 710W con Maletín',
    brand: 'Makita',
    category: 'herramientas',
    categoryName: 'Herramientas',
    price: 389000,
    originalPrice: 429000,
    taxIncluded: true,
    stock: 24,
    unit: 'Unidad',
    image: '/images/Taladro.jpeg',
    badge: '1 Año Garantía Makita',
    rating: 4.9,
    reviewsCount: 73,
    description: 'Herramienta profesional con potente motor de 710W y velocidad variable reversible. Diseñado para perforaciones continuas en concreto, acero y madera con carcasa cilíndrica de aluminio.',
    specs: {
      'Potencia': '710 Watts',
      'Mandril': '1/2 pulgada (13 mm) con llave',
      'Impactos por minuto': '0 - 48.000 IPM',
      'Velocidad sin carga': '0 - 3.200 RPM'
    },
    isFeatured: true
  },
  {
    id: 'llave-de-tubo-stilson-industrial-truper-14',
    sku: 'PJ-HER-202',
    name: 'Llave para Tubo Tipo Stillson 14" Trabajo Pesado Truper Expert',
    brand: 'Truper',
    category: 'herramientas',
    categoryName: 'Herramientas',
    price: 62000,
    taxIncluded: true,
    stock: 58,
    unit: 'Unidad',
    image: '/images/tuberia-galvanizada.jpg',
    badge: 'Acero Forjado',
    rating: 4.7,
    reviewsCount: 26,
    description: 'Cuerpo robusto fundido en hierro nodular con mordazas templadas y forjadas en acero al cromo molibdeno. Proporciona agarre firme y sin deslizamiento en tuberías metálicas.',
    specs: {
      'Longitud': '14 pulgadas (350 mm)',
      'Apertura Máxima': '2 pulgadas (50 mm)',
      'Material Mordaza': 'Acero Cr-Mo con dientes templados'
    }
  },
  {
    id: 'multimetro-digital-fluke-117-electricistas',
    sku: 'PJ-HER-203',
    name: 'Multímetro Digital True-RMS Fluke 117 para Electricistas con VoltAlert™',
    brand: 'Fluke',
    category: 'herramientas',
    categoryName: 'Herramientas',
    price: 1190000,
    originalPrice: 1280000,
    taxIncluded: true,
    stock: 12,
    unit: 'Unidad',
    image: '/images/pic-feria-solar-600x480.jpg',
    badge: 'True RMS / Fluke',
    rating: 5.0,
    reviewsCount: 18,
    description: 'El instrumento de medición predilecto por técnicos solares y electricistas industriales. Incorpora detección de voltaje sin contacto VoltAlert™ y baja impedancia de entrada Auto-V/LoZ para evitar lecturas falsas.',
    specs: {
      'Medición': 'Voltaje AC/DC 600V, Corriente 10A continua',
      'Seguridad Eléctrica': 'CAT III 600 V',
      'Precisión': 'True RMS para señales no sinusoidales',
      'Garantía': '3 años directamente con Fluke Colombia'
    },
    isFeatured: true
  },

  // --- MATERIAL ELÉCTRICO & CONECTORES (NUEVA CATEGORÍA) ---
  {
    id: 'terminal-tipo-pala-bimetalica-legrand',
    sku: 'PJ-ELE-401',
    name: 'Terminal Tipo Pala Bimetálica 50mm² para Tablero Eléctrico (Bolsa x 20)',
    brand: 'LEGRAND',
    category: 'material-electrico',
    categoryName: 'Material Eléctrico & Conectores',
    price: 72000,
    taxIncluded: true,
    stock: 60,
    unit: 'Bolsa x 20',
    image: '/images/terminal-tipo-pala.jpg',
    badge: 'Cobre-Aluminio',
    rating: 4.8,
    reviewsCount: 14,
    description: 'Terminales bimetálicas de alta conductividad para transición segura entre barras de aluminio y conductores de cobre. Evita la corrosión galvánica en tableros de distribución.',
    specs: {
      'Calibre Conductor': '50 mm² (1/0 AWG)',
      'Material': 'Cuerpo de aluminio 99.5% con pala de cobre electrolítico',
      'Tecnología': 'Soldadura por fricción molecular',
      'Norma': 'IEC 61238-1 / RETIE'
    },
    isFeatured: true
  },
  {
    id: 'terminal-tipo-pin-aislado-legrand',
    sku: 'PJ-ELE-402',
    name: 'Terminal Tipo Pin Aislado para Conexión de Breakers Industriales (Bolsa x 50)',
    brand: 'LEGRAND',
    category: 'material-electrico',
    categoryName: 'Material Eléctrico & Conectores',
    price: 45000,
    taxIncluded: true,
    stock: 110,
    unit: 'Bolsa x 50',
    image: '/images/terminal-tipo-pin.jpg',
    badge: 'Aislamiento Seguro',
    rating: 4.9,
    reviewsCount: 20,
    description: 'Terminales de compresión tipo aguja / pin diseñados para inserción directa en bornes de interruptores termomagnéticos y contactores de riel DIN.',
    specs: {
      'Rango Conductor': '10 mm² a 16 mm²',
      'Aislamiento': 'Poliamida autoextinguible retardante de llama',
      'Tensión Máxima': '600V AC',
      'Temperatura Operación': 'Hasta 105°C'
    }
  },

  // --- TORNILLERÍA & FIJACIONES (NUEVA CATEGORÍA) ---
  {
    id: 'tornillo-autoperforante-hexagonal-epdm',
    sku: 'PJ-FIJ-501',
    name: 'Tornillo Autoperforante Cabeza Hexagonal 2" x 14 con Arandela EPDM (Caja x 100)',
    brand: 'JIMACO Industrial',
    category: 'tornilleria-fijaciones',
    categoryName: 'Tornillería & Fijaciones',
    price: 38500,
    originalPrice: 44000,
    taxIncluded: true,
    stock: 250,
    unit: 'Caja x 100',
    image: '/images/pic-construccion.jpg',
    badge: 'Anticorrosivo',
    rating: 4.8,
    reviewsCount: 41,
    description: 'Tornillería de fijación para cubiertas industriales, tejas termoacústicas y estructuras de soporte solar. Fabricado en acero cementado con recubrimiento de zinc brillante.',
    specs: {
      'Medida': '2 pulgadas longitud (#14 diámetro)',
      'Cabeza': 'Hexagonal 3/8" con arandela vulcanizada',
      'Empaque Sellante': 'Neopreno EPDM resistente a intemperie y rayos UV',
      'Punta': 'Broca autoperforante #3 para lámina de acero'
    },
    isFeatured: true
  }
];

export const CATEGORIES = [
  { id: 'todos', name: 'Todos los Productos', icon: 'grid' },
  { id: 'energia-solar', name: 'Energía Solar & Renovables', icon: 'sun' },
  { id: 'construccion', name: 'Obras & Construcción', icon: 'building' },
  { id: 'proteccion-personal', name: 'Seguridad Industrial (EPP)', icon: 'shield' },
  { id: 'herramientas', name: 'Herramientas Profesionales', icon: 'tool' },
  { id: 'material-electrico', name: 'Material Eléctrico & Conectores', icon: 'zap' },
  { id: 'tornilleria-fijaciones', name: 'Tornillería & Fijaciones', icon: 'nut' }
];

export const BRANDS = [
  'Prysmian',
  'SAFER',
  'LEGRAND',
  'Pavco',
  'Tubosa',
  'STEELPRO',
  '3M',
  'Makita',
  'Truper',
  'Fluke',
  'JIMACO Industrial'
];
