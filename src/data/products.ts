// Catálogo de productos JIMACO.
// Fuente principal: BROCHURE FINAL (portafolio de productos 2024-2025).
// Los datos que el brochure no trae (referencia, características técnicas, aplicaciones, fichas técnicas)
// quedan en `pending` para validación; no se inventan.

export interface ProductDocument {
  name: string;
  url: string;
}

export interface Product {
  id: string;
  name: string;
  /** Referencia comercial. null = pendiente de validación. */
  reference: string | null;
  /** Precio en COP con IVA incluido. null = sin precio publicado (cotizar con asesor). */
  price: number | null;
  brand: string | null;
  category: string;
  categoryName: string;
  group: string;
  image: string;
  description: string;
  specs: Record<string, string>;
  applications: string[];
  documents: ProductDocument[];
  /** Datos pendientes de validación (uso interno, no se muestran al público). */
  pending: string[];
  source: string;
}

export interface Category {
  id: string;
  name: string;
  group: string;
}

export const PRODUCTS: Product[] = [
  {
    "id": "cable-cobre-aislado-thhn",
    "name": "Cable cobre aislado THHN",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "cables",
    "categoryName": "Cables",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/cable-cobre-aislado-thhn.jpg",
    "description": "Los cables son un conjunto de hilos metálicos, generalmente de cobre (por su grado de conductividad) o aluminio (por su bajo coste), que cumplen la función de conducir la electricidad de un punto a otro.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 6"
  },
  {
    "id": "cable-de-cobre-desnudo",
    "name": "Cable de cobre desnudo",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "cables",
    "categoryName": "Cables",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/cable-de-cobre-desnudo.jpg",
    "description": "Conductor de cobre electrolítico de 99,9 % de pureza, con 100 % IACS de conductividad.",
    "specs": {
      "Material": "Cobre suave electrolítico",
      "Pureza": "99,9 %",
      "Conductividad": "100 % IACS",
      "Calibres": "De 14 AWG a 500 kcmil"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 6; Otro catálogo JIMACO: Cable de Cobre Desnudo"
  },
  {
    "id": "cable-xlpe",
    "name": "Cable XLPE",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "cables",
    "categoryName": "Cables",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/cable-xlpe.jpg",
    "description": "Los cables son un conjunto de hilos metálicos, generalmente de cobre (por su grado de conductividad) o aluminio (por su bajo coste), que cumplen la función de conducir la electricidad de un punto a otro.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 6"
  },
  {
    "id": "cable-fotovoltaico",
    "name": "Cable fotovoltaico",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "cables",
    "categoryName": "Cables",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/cable-fotovoltaico.jpg",
    "description": "Cable fotovoltaico con conductor de cobre flexible electrolítico y aislamiento XLPE (polietileno reticulado) de alto desempeño.",
    "specs": {
      "Conductor": "Cobre flexible electrolítico",
      "Aislamiento": "XLPE (polietileno reticulado)",
      "Resistencia UV": "Apto para exposición solar",
      "Seguridad": "Libre de halógenos y baja emisión de humos"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 6; Otro catálogo JIMACO: Cable Solar Fotovoltaico con Aislamiento XLPE"
  },
  {
    "id": "tuberia-db",
    "name": "Tubería DB",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "tuberias",
    "categoryName": "Tuberías",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/tuberia-db.jpg",
    "description": "Tubería de doble pared, ideal para instalaciones subterráneas que requieren máxima protección del cableado.",
    "specs": {
      "Material": "PEAD",
      "Características": "Alta resistencia mecánica; protección contra impactos; resistente a la humedad; larga vida útil"
    },
    "applications": [
      "Instalaciones subterráneas, alta eficiencia y resistencia a impacto y compresión"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 7; Otro catálogo JIMACO: Tubería DB (Doble Pared)"
  },
  {
    "id": "tuberia-tdp",
    "name": "Tubería TDP",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "tuberias",
    "categoryName": "Tuberías",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/tuberia-tdp.jpg",
    "description": "Tubería corrugada flexible y resistente, diseñada para canalización en proyectos eléctricos y telecomunicaciones.",
    "specs": {
      "Material": "PEAD corrugado",
      "Características": "Alta flexibilidad; resistente a agentes químicos; fácil instalación; liviana y durable"
    },
    "applications": [
      "Infraestructura eléctrica, telecomunicaciones y obras civiles"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 7; Otro catálogo JIMACO: Tubería TDP Corrugada"
  },
  {
    "id": "tuberia-emt",
    "name": "Tubería EMT",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "tuberias",
    "categoryName": "Tuberías",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/tuberia-emt.jpg",
    "description": "Tubería metálica lisa de pared delgada, con un lado galvanizado, para instalaciones eléctricas.",
    "specs": {
      "Material": "Acero galvanizado",
      "Características": "Ligera y fácil de manipular; recubrimiento galvanizado; resistente a la corrosión; compatible con accesorios"
    },
    "applications": [
      "Instalaciones eléctricas residenciales e industriales interiores"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 7; Otro catálogo JIMACO: Tubería EMT"
  },
  {
    "id": "tuberia-conduit",
    "name": "Tubería Conduit",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "tuberias",
    "categoryName": "Tuberías",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/tuberia-conduit.jpg",
    "description": "Tubería rígida lisa para instalaciones eléctricas expuestas o embebidas en obra.",
    "specs": {
      "Material": "PVC",
      "Características": "Interior liso para fácil cableado; no propaga la llama; resistente a la corrosión; fácil instalación"
    },
    "applications": [
      "Instalaciones eléctricas residenciales, comerciales e industriales"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 7; Otro catálogo JIMACO: Tubería Conduit PVC"
  },
  {
    "id": "tuberia-imc",
    "name": "Tubería IMC",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "tuberias",
    "categoryName": "Tuberías",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/tuberia-imc.jpg",
    "description": "Tubería metálica de pared gruesa y alta resistencia mecánica, con roscas en ambos extremos.",
    "specs": {
      "Material": "Acero galvanizado",
      "Características": "Máxima resistencia mecánica; rosca NPT en ambos extremos; alta protección del cableado; ideal para ambientes exigentes"
    },
    "applications": [
      "Ambientes industriales exigentes y áreas de alto riesgo"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 7; Otro catálogo JIMACO: Tubería IMC"
  },
  {
    "id": "terminal-campana",
    "name": "Terminal campana",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "accesorios-tuberia",
    "categoryName": "Accesorios para Conduit y Tubería",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/terminal-campana.jpg",
    "description": "Los accesorios para conduit y tubería PVC facilitan la instalación, conexión y protección en sistemas eléctricos. Ofrecen durabilidad y resistencia a la corrosión. Garantizan un rendimiento confiable en diversas aplicaciones industriales, comerciales y residenciales al permitir configuraciones personalizadas y una instalación segura y eficiente.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 8"
  },
  {
    "id": "curva-45",
    "name": "Curva 45°",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "accesorios-tuberia",
    "categoryName": "Accesorios para Conduit y Tubería",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/curva-45.jpg",
    "description": "Los accesorios para conduit y tubería PVC facilitan la instalación, conexión y protección en sistemas eléctricos. Ofrecen durabilidad y resistencia a la corrosión. Garantizan un rendimiento confiable en diversas aplicaciones industriales, comerciales y residenciales al permitir configuraciones personalizadas y una instalación segura y eficiente.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 8"
  },
  {
    "id": "curva-90",
    "name": "Curva 90°",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "accesorios-tuberia",
    "categoryName": "Accesorios para Conduit y Tubería",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/curva-90.jpg",
    "description": "Los accesorios para conduit y tubería PVC facilitan la instalación, conexión y protección en sistemas eléctricos. Ofrecen durabilidad y resistencia a la corrosión. Garantizan un rendimiento confiable en diversas aplicaciones industriales, comerciales y residenciales al permitir configuraciones personalizadas y una instalación segura y eficiente.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 8"
  },
  {
    "id": "terminal-emt",
    "name": "Terminal EMT",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "accesorios-tuberia",
    "categoryName": "Accesorios para Conduit y Tubería",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/terminal-emt.jpg",
    "description": "Conector para tubería EMT que asegura una conexión firme y confiable.",
    "specs": {
      "Características": "Materiales robustos, resistentes a la corrosión y a impactos"
    },
    "applications": [
      "Tubería EMT"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 8; Otro catálogo JIMACO: Terminal EMT"
  },
  {
    "id": "conduleta-lb",
    "name": "Conduleta LB",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "accesorios-tuberia",
    "categoryName": "Accesorios para Conduit y Tubería",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/conduleta-lb.jpg",
    "description": "Permite cambios de dirección de 90° en el sistema de canalización.",
    "specs": {
      "Función": "Cambio de dirección de 90°",
      "Características": "Alta resistencia, versatilidad y protección"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 8; Otro catálogo JIMACO: Conduleta LB"
  },
  {
    "id": "conduleta-lr",
    "name": "Conduleta LR",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "accesorios-tuberia",
    "categoryName": "Accesorios para Conduit y Tubería",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/conduleta-lr.jpg",
    "description": "Permite cambios de dirección de 90° y facilita el acceso a los cables.",
    "specs": {
      "Función": "Cambio de dirección de 90° con acceso a los cables",
      "Características": "Alta resistencia, versatilidad y protección"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 8; Otro catálogo JIMACO: Conduleta LR"
  },
  {
    "id": "soldaduras",
    "name": "Soldaduras",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "accesorios-tuberia",
    "categoryName": "Accesorios para Conduit y Tubería",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/soldaduras.jpg",
    "description": "Adhesivo de alto rendimiento para realizar uniones permanentes entre tuberías y accesorios de PVC Conduit, con sellado hermético, resistente y de larga duración.",
    "specs": {
      "Secado": "Rápido",
      "Aplicación en obra": "Brocha incorporada en el envase",
      "Presentaciones": "Diferentes presentaciones"
    },
    "applications": [
      "Uniones PVC Conduit"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 9; Otro catálogo JIMACO: Soldadura Líquida para PVC Conduit"
  },
  {
    "id": "cajas-metalicas",
    "name": "Cajas metálicas",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "cajas",
    "categoryName": "Cajas Metálicas y Plásticas",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/cajas-metalicas.jpg",
    "description": "Caja metálica ideal para instalaciones eléctricas expuestas o empotradas.",
    "specs": {
      "Material": "Metálica"
    },
    "applications": [
      "Expuesta o empotrada"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 9; Otro catálogo JIMACO: Caja Metálica"
  },
  {
    "id": "caja-sencilla-rectangular",
    "name": "Caja sencilla rectangular",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "cajas",
    "categoryName": "Cajas Metálicas y Plásticas",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/caja-sencilla-rectangular.jpg",
    "description": "Diseñada para instalaciones livianas en muros y tabiques. Resistente a la corrosión y de fácil instalación.",
    "specs": {
      "Forma": "Sencilla rectangular"
    },
    "applications": [
      "Muros y tabiques"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 9; Otro catálogo JIMACO: Caja Sencilla Rectangular"
  },
  {
    "id": "caja-plastica",
    "name": "Caja plástica",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "cajas",
    "categoryName": "Cajas Metálicas y Plásticas",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/caja-plastica.jpg",
    "description": "Caja plástica resistente a la corrosión y de fácil instalación.",
    "specs": {
      "Material": "Plástico",
      "Características": "Resistente a la corrosión y de fácil instalación"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 9; Otro catálogo JIMACO: Caja Plástica"
  },
  {
    "id": "caja-doble",
    "name": "Caja doble",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "cajas",
    "categoryName": "Cajas Metálicas y Plásticas",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/caja-doble.jpg",
    "description": "Mayor capacidad para cableado en instalaciones eléctricas.",
    "specs": {
      "Forma": "Doble",
      "Característica": "Mayor capacidad para cableado"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 9; Otro catálogo JIMACO: Caja Doble"
  },
  {
    "id": "caja-octagonal",
    "name": "Caja octagonal",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "cajas",
    "categoryName": "Cajas Metálicas y Plásticas",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/caja-octagonal.jpg",
    "description": "Perfecta para puntos de iluminación en techos y paredes.",
    "specs": {
      "Forma": "Octagonal"
    },
    "applications": [
      "Puntos de iluminación en techos y paredes"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 9; Otro catálogo JIMACO: Caja Octagonal"
  },
  {
    "id": "varilla-cooper",
    "name": "Varilla cooper",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "puesta-a-tierra",
    "categoryName": "Sistema Puesta a Tierra",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/varilla-cooper.jpg",
    "description": "Varilla con núcleo de acero recubierto de cobre electrolítico de alta pureza, con alta conductividad eléctrica y excelente resistencia a la corrosión.",
    "specs": {
      "Núcleo": "Acero",
      "Recubrimiento": "Cobre electrolítico de alta pureza",
      "Corrosión": "Pensada para larga duración enterrada"
    },
    "applications": [
      "Vertical mediante hincado"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 10; Otro catálogo JIMACO: Varillas Copperweld para Puesta a Tierra"
  },
  {
    "id": "conector-varilla",
    "name": "Conector varilla",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "puesta-a-tierra",
    "categoryName": "Sistema Puesta a Tierra",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/conector-varilla.jpg",
    "description": "Conector que permite unir el conductor a la varilla Copperweld en sistemas de puesta a tierra.",
    "specs": {
      "Compatibilidad": "Conductores de cobre y CS-Coppersteel",
      "Material": "Aleación de cobre con alto contacto eléctrico",
      "Protección": "Anticorrosiva"
    },
    "applications": [
      "Directa, en suelo o en hormigón"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 10; Otro catálogo JIMACO: Conector para Varillas Copperweld"
  },
  {
    "id": "moldes-grafito",
    "name": "Moldes grafito",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "puesta-a-tierra",
    "categoryName": "Sistema Puesta a Tierra",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/moldes-grafito.jpg",
    "description": "Moldes de grafito de alta densidad que, junto con la soldadura exotérmica, permiten realizar conexiones permanentes en sistemas de puesta a tierra.",
    "specs": {
      "Material": "Grafito de alta densidad",
      "Durabilidad": "Resistente a repetidos usos",
      "Conexiones": "Cable-cable, platina y tubería",
      "Conexión": "Permanente mediante soldadura exotérmica",
      "Aleación": "Cobre de alta conductividad"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 10; Otro catálogo JIMACO: Moldes de Grafito para Soldadura Exotérmica"
  },
  {
    "id": "chispero",
    "name": "Chispero",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "puesta-a-tierra",
    "categoryName": "Sistema Puesta a Tierra",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/chispero.jpg",
    "description": "Dispositivo utilizado en sistemas de puesta a tierra para controlar y disipar sobretensiones transitorias ocasionadas por descargas atmosféricas o maniobras eléctricas.",
    "specs": {
      "Material": "Acero galvanizado de alta resistencia",
      "Acabado": "Galvanizado anticorrosivo para intemperie",
      "Montaje": "Se fija mediante perno",
      "Función": "Descarga sobretensiones transitorias en el sistema"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 10; Otro catálogo JIMACO: Chispero para Sistemas de Puesta a Tierra"
  },
  {
    "id": "soldadura-exotermica",
    "name": "Soldadura exotérmica",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "puesta-a-tierra",
    "categoryName": "Sistema Puesta a Tierra",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/soldadura-exotermica.jpg",
    "description": "Compuesto especialmente formulado para realizar uniones permanentes entre conductores de cobre en sistemas de puesta a tierra.",
    "specs": {
      "Compatibilidad": "Moldes para soldadura exotérmica",
      "Unión": "Molecular permanente, sin piezas mecánicas que se aflojen",
      "Presentación": "Cartucho de carga individual"
    },
    "applications": [
      "Sistemas de puesta a tierra"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 10; Otro catálogo JIMACO: Soldadura Exotérmica en Cartucho"
  },
  {
    "id": "pinza",
    "name": "Pinza para soldadura exotérmica",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "puesta-a-tierra",
    "categoryName": "Sistema Puesta a Tierra",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/pinza.jpg",
    "description": "Pinza que sujeta de forma firme y segura los moldes durante el proceso de soldadura. Fabricada en acero galvanizado de alta resistencia, con ajuste mecánico de precisión.",
    "specs": {
      "Material": "Acero galvanizado de alta resistencia",
      "Operación": "Manual, sin energía ni equipos adicionales",
      "Sujeción": "Mantiene el molde firme durante la soldadura",
      "Ajuste": "Mecánico de precisión para un cierre estable"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 10; Otro catálogo JIMACO: Pinza para Soldadura Exotérmica"
  },
  {
    "id": "caja-puesta-a-tierra-material-cemento",
    "name": "Caja puesta a tierra (material: cemento)",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "puesta-a-tierra",
    "categoryName": "Sistema Puesta a Tierra",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/caja-puesta-a-tierra-material-cemento.jpg",
    "description": "Caja de puesta a tierra en cemento, ideal para instalaciones eléctricas que requieren una solución robusta y de largo plazo.",
    "specs": {
      "Material": "Cemento",
      "Características": "Alta resistencia y durabilidad; excelente dispersión de corrientes; resistente a la intemperie y condiciones extremas"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 11; Otro catálogo JIMACO: Caja Puesta a Tierra en Cemento"
  },
  {
    "id": "caja-puesta-a-tierra-material-plastico",
    "name": "Caja puesta a tierra (material: plástico)",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "puesta-a-tierra",
    "categoryName": "Sistema Puesta a Tierra",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/caja-puesta-a-tierra-material-plastico.jpg",
    "description": "Caja de puesta a tierra en plástico, una opción práctica y eficiente para instalaciones donde se requiere ligereza y resistencia.",
    "specs": {
      "Material": "Plástico",
      "Características": "Ligera y de fácil manejo; resistente a la corrosión y a productos químicos; instalación rápida y práctica"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 11; Otro catálogo JIMACO: Caja Puesta a Tierra en Plástico"
  },
  {
    "id": "coraza-interflex",
    "name": "Coraza Interflex",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "corazas",
    "categoryName": "Corazas y Conectores",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/coraza-interflex.jpg",
    "description": "Las corazas protegen los cables de conexión eléctrica de daños mecánicos y condiciones ambientales adversas, asegurando el funcionamiento seguro y confiable del sistema fotovoltaico. Alta resistencia mecánica.",
    "specs": {
      "Resistencia mecánica": "Alta",
      "Intemperie y corrosión": "Resistente"
    },
    "applications": [
      "Flexible y fácil de instalar"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 12; Otro catálogo JIMACO: Coraza Interflex"
  },
  {
    "id": "coraza-isynylon",
    "name": "Coraza Isynylon",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "corazas",
    "categoryName": "Corazas y Conectores",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/coraza-isynylon.jpg",
    "description": "Las corazas protegen los cables de conexión eléctrica de daños mecánicos y condiciones ambientales adversas, asegurando el funcionamiento seguro y confiable del sistema fotovoltaico.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 12"
  },
  {
    "id": "accesorios-para-coraza",
    "name": "Accesorios para coraza",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "corazas",
    "categoryName": "Corazas y Conectores",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/accesorios-para-coraza.jpg",
    "description": "Amplia gama de accesorios que garantizan conexiones seguras, estéticas y duraderas para corazas en instalaciones eléctricas y fotovoltaicas.",
    "specs": {
      "Calidad": "Accesorios que aseguran conexiones firmes y duraderas",
      "Versatilidad": "Se adaptan a distintos tipos de instalación",
      "Materiales": "Resistentes, para sistemas más eficientes y sostenibles"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 12; Otro catálogo JIMACO: Accesorios y Conectores para Coraza"
  },
  {
    "id": "varilla-roscada",
    "name": "Varilla roscada",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "tornilleria",
    "categoryName": "Tornillería",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/varilla-roscada.jpg",
    "description": "Barra metálica completamente roscada que permite sujetar, fijar o ajustar elementos con tuercas.",
    "specs": {
      "Características": "Alta resistencia y durabilidad; rosca uniforme y precisa; disponible en diferentes medidas y materiales",
      "Calidad": "Elementos de fijación para uniones seguras, resistentes y duraderas"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 13; Otro catálogo JIMACO: Varilla Roscada"
  },
  {
    "id": "tuerca",
    "name": "Tuerca",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "tornilleria",
    "categoryName": "Tornillería",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/tuerca.jpg",
    "description": "Pieza con rosca interna que se utiliza junto con pernos o varillas para generar uniones firmes y seguras.",
    "specs": {
      "Características": "Rosca interna de alta precisión; unión segura y confiable; fabricada en materiales de alta calidad",
      "Calidad": "Elementos de fijación para uniones seguras, resistentes y duraderas"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 13; Otro catálogo JIMACO: Tuerca"
  },
  {
    "id": "wasa",
    "name": "Wasa",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "tornilleria",
    "categoryName": "Tornillería",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/wasa.jpg",
    "description": "Arandela de seguridad que se utiliza para evitar el aflojamiento de tuercas y tornillos por vibración.",
    "specs": {
      "Características": "Evita el aflojamiento; mayor seguridad en la unión; ideal para aplicaciones de alta exigencia",
      "Calidad": "Elementos de fijación para uniones seguras, resistentes y duraderas"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 13; Otro catálogo JIMACO: Wasa (Arandela de Seguridad)"
  },
  {
    "id": "chazo-metalico-rl",
    "name": "Chazo metálico RL",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "tornilleria",
    "categoryName": "Tornillería",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/chazo-metalico-rl.jpg",
    "description": "Anclaje metálico de expansión que garantiza fijaciones seguras en concreto y materiales sólidos.",
    "specs": {
      "Características": "Alta capacidad de carga; ideal para concreto y mampostería; fácil y rápida instalación",
      "Calidad": "Elementos de fijación para uniones seguras, resistentes y duraderas"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 14; Otro catálogo JIMACO: Chazo Metálico RL"
  },
  {
    "id": "arandelas",
    "name": "Arandelas",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "tornilleria",
    "categoryName": "Tornillería",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/arandelas.jpg",
    "description": "Discos metálicos que se colocan entre la tuerca y la superficie para distribuir la presión y evitar daños.",
    "specs": {
      "Características": "Protege la superficie de contacto; distribuye la carga uniformemente; resistentes a la corrosión y al desgaste",
      "Calidad": "Elementos de fijación para uniones seguras, resistentes y duraderas"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 14; Otro catálogo JIMACO: Arandelas"
  },
  {
    "id": "chazo-plastico",
    "name": "Chazo plástico",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "tornilleria",
    "categoryName": "Tornillería",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/chazo-plastico.jpg",
    "description": "El chazo plástico es un elemento de fijación diseñado para proporcionar un anclaje seguro y estable en materiales como concreto, ladrillo y mampostería.",
    "specs": {
      "Características": "Alta resistencia y durabilidad; rosca uniforme y precisa; disponible en diferentes medidas y materiales",
      "Calidad": "Elementos de fijación para uniones seguras, resistentes y duraderas"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 15; Otro catálogo JIMACO: Chazo Plástico"
  },
  {
    "id": "esparragos",
    "name": "Espárragos",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "tornilleria",
    "categoryName": "Tornillería",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/esparragos.jpg",
    "description": "Los espárragos son elementos de fijación roscados diseñados para ofrecer uniones seguras, resistentes y de alta precisión en aplicaciones industriales, eléctricas y de construcción.",
    "specs": {
      "Características": "Rosca de alta precisión; unión segura y confiable; fabricados en materiales de alta calidad",
      "Calidad": "Elementos de fijación para uniones seguras, resistentes y duraderas"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 15; Otro catálogo JIMACO: Espárragos"
  },
  {
    "id": "perro-galvanizado",
    "name": "Perro galvanizado",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "tornilleria",
    "categoryName": "Tornillería",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/perro-galvanizado.jpg",
    "description": "El perro galvanizado es un accesorio de sujeción utilizado para asegurar y fijar cables de acero de forma confiable.",
    "specs": {
      "Características": "Evita el aflojamiento; mayor seguridad en la unión; ideal para aplicaciones de alta exigencia",
      "Calidad": "Elementos de fijación para uniones seguras, resistentes y duraderas"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 15; Otro catálogo JIMACO: Perro Galvanizado"
  },
  {
    "id": "chazo-expansivo",
    "name": "Chazo expansivo",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "tornilleria",
    "categoryName": "Tornillería",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/chazo-expansivo.jpg",
    "description": "El chazo expansivo es un sistema de anclaje metálico diseñado para proporcionar una fijación firme y segura en concreto y otros materiales sólidos.",
    "specs": {
      "Características": "Alta capacidad de carga; ideal para concreto y mampostería; fácil y rápida instalación",
      "Calidad": "Elementos de fijación para uniones seguras, resistentes y duraderas"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 16; Otro catálogo JIMACO: Chazo Expansivo"
  },
  {
    "id": "guaya-alma-de-acero",
    "name": "Guaya alma de acero",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "tornilleria",
    "categoryName": "Tornillería",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/guaya-alma-de-acero.jpg",
    "description": "La guaya con alma de acero está diseñada para aplicaciones que requieren alta resistencia mecánica, estabilidad y seguridad.",
    "specs": {
      "Características": "Distribuye la carga uniformemente; resistente a la corrosión y al desgaste",
      "Calidad": "Elementos de fijación para uniones seguras, resistentes y duraderas"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 16; Otro catálogo JIMACO: Guaya Alma de Acero"
  },
  {
    "id": "tablero-de-circuitos",
    "name": "Tablero de circuitos",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "tableros",
    "categoryName": "Tableros, Tacos y Cajas",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/tablero-de-circuitos.jpg",
    "description": "Solución ideal para la distribución y protección de circuitos eléctricos en instalaciones residenciales y comerciales.",
    "specs": {
      "Función": "Protección de circuitos y distribución organizada"
    },
    "applications": [
      "Fácil",
      "Residenciales y comerciales"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 17; Otro catálogo JIMACO: Tablero de Circuitos"
  },
  {
    "id": "tablero-bifasico",
    "name": "Tablero bifásico",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "tableros",
    "categoryName": "Tableros, Tacos y Cajas",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/tablero-bifasico.jpg",
    "description": "Diseñado para instalaciones bifásicas que requieren una distribución segura, eficiente y organizada de la energía.",
    "specs": {
      "Sistema": "Bifásico",
      "Función": "Protección de circuitos",
      "Mantenimiento": "Fácil",
      "Operación": "Segura"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 17; Otro catálogo JIMACO: Tablero Bifásico"
  },
  {
    "id": "tablero-trifasico",
    "name": "Tablero trifásico",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "tableros",
    "categoryName": "Tableros, Tacos y Cajas",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/tablero-trifasico.jpg",
    "description": "Solución robusta para sistemas trifásicos en aplicaciones comerciales, industriales y de infraestructura.",
    "specs": {
      "Sistema": "Trifásico",
      "Función": "Distribución trifásica y organización de circuitos"
    },
    "applications": [
      "Comerciales, industriales e infraestructura"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 17; Otro catálogo JIMACO: Tablero Trifásico"
  },
  {
    "id": "caja-de-circuitos",
    "name": "Caja de circuitos",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "tableros",
    "categoryName": "Tableros, Tacos y Cajas",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/caja-de-circuitos.jpg",
    "description": "Gabinete de distribución para la protección y organización de circuitos. Fabricado con material resistente a impactos y diseño moderno.",
    "specs": {
      "Función": "Protección y organización de circuitos",
      "Material": "Resistente a impactos",
      "Diseño": "Moderno y funcional"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 17; Otro catálogo JIMACO: Caja de Circuitos"
  },
  {
    "id": "taco-riel",
    "name": "Taco riel",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "tableros",
    "categoryName": "Tableros, Tacos y Cajas",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/taco-riel.jpg",
    "description": "Proporciona protección contra sobrecargas y cortocircuitos en instalaciones eléctricas.",
    "specs": {
      "Protección": "Sobrecargas y cortocircuitos",
      "Montaje": "En riel DIN"
    },
    "applications": [
      "Fácil",
      "Residencial y comercial"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 17; Otro catálogo JIMACO: Taco Riel"
  },
  {
    "id": "riel-chanel",
    "name": "Riel chanel",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "tableros",
    "categoryName": "Tableros, Tacos y Cajas",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/riel-chanel.jpg",
    "description": "Diseñado para montar de forma segura dispositivos eléctricos en tableros de distribución. Garantiza estabilidad y una instalación profesional.",
    "specs": {
      "Resistencia": "Alta resistencia mecánica y a la corrosión",
      "Compatibilidad": "Dispositivos modulares",
      "Montaje": "Rápido y sencillo"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 17; Otro catálogo JIMACO: Riel Chanel"
  },
  {
    "id": "terminal-de-ojo",
    "name": "Terminal de ojo",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "accesorios-electricos",
    "categoryName": "Accesorios Eléctricos",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/terminal-de-ojo.jpg",
    "description": "Elemento de conexión diseñado para asegurar un contacto eléctrico firme y seguro en instalaciones.",
    "specs": {
      "Conexión": "Segura",
      "Conductividad": "Alta",
      "Durabilidad": "Resistencia y durabilidad"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 18; Otro catálogo JIMACO: Terminal de Ojo"
  },
  {
    "id": "clavija",
    "name": "Clavija",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "accesorios-electricos",
    "categoryName": "Accesorios Eléctricos",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/clavija.jpg",
    "description": "Dispositivo de conexión eléctrica diseñado para garantizar un contacto seguro y estable.",
    "specs": {
      "Protección": "Y seguridad"
    },
    "applications": [
      "Fácil",
      "Confiables"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 18; Otro catálogo JIMACO: Clavija"
  },
  {
    "id": "borna",
    "name": "Borna",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "accesorios-electricos",
    "categoryName": "Accesorios Eléctricos",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/borna.jpg",
    "description": "Elemento de conexión para unir y asegurar cables en instalaciones eléctricas de manera eficiente.",
    "specs": {
      "Conexión": "Segura",
      "Conductividad": "Excelente",
      "Calidad": "Alta calidad y durabilidad"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 18; Otro catálogo JIMACO: Borna"
  },
  {
    "id": "cajas",
    "name": "Cajas",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "accesorios-electricos",
    "categoryName": "Accesorios Eléctricos",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/cajas.jpg",
    "description": "Los accesorios eléctricos garantizan la seguridad en todas las instalaciones eléctricas. Estos accesorios minimizan el riesgo de accidentes eléctricos al proteger tanto a las personas como a los equipos e instalaciones.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 18"
  },
  {
    "id": "terminal-cable-aislado",
    "name": "Terminal cable aislado",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "accesorios-electricos",
    "categoryName": "Accesorios Eléctricos",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/terminal-cable-aislado.jpg",
    "description": "Los accesorios eléctricos garantizan la seguridad en todas las instalaciones eléctricas. Estos accesorios minimizan el riesgo de accidentes eléctricos al proteger tanto a las personas como a los equipos e instalaciones.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 18"
  },
  {
    "id": "gel-lubricante-halado-de-cables",
    "name": "Gel lubricante halado de cables",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "accesorios-electricos",
    "categoryName": "Accesorios Eléctricos",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/gel-lubricante-halado-de-cables.jpg",
    "description": "Los accesorios eléctricos garantizan la seguridad en todas las instalaciones eléctricas. Estos accesorios minimizan el riesgo de accidentes eléctricos al proteger tanto a las personas como a los equipos e instalaciones.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 18"
  },
  {
    "id": "reflector-solar",
    "name": "Reflector solar",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "iluminacion",
    "categoryName": "Iluminación",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/reflector-solar.jpg",
    "description": "Reflector solar diseñado para brindar iluminación eficiente y autónoma, aprovechando la energía del sol. Ideal para espacios exteriores, zonas residenciales, comerciales e industriales.",
    "specs": {
      "Alimentación": "Energía solar",
      "Conexión": "Segura"
    },
    "applications": [
      "Exteriores residenciales, comerciales e industriales"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 19; Otro catálogo JIMACO: Reflector Solar"
  },
  {
    "id": "bombillo-led-con-panel-solar",
    "name": "Bombillo LED con panel solar",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "iluminacion",
    "categoryName": "Iluminación",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/bombillo-led-con-panel-solar.jpg",
    "description": "Iluminación LED eficiente alimentada por energía solar.",
    "specs": {
      "Alimentación": "Panel solar",
      "Tecnología": "LED"
    },
    "applications": [
      "Fácil"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 19; Otro catálogo JIMACO: Bombillo LED con Panel Solar"
  },
  {
    "id": "bombillo-led",
    "name": "Bombillo LED",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "iluminacion",
    "categoryName": "Iluminación",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/bombillo-led.jpg",
    "description": "Iluminación eficiente, duradera y de bajo consumo.",
    "specs": {
      "Tecnología": "LED",
      "Consumo": "Bajo",
      "Durabilidad": "Alta"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 19; Otro catálogo JIMACO: Bombillo LED"
  },
  {
    "id": "tubo-led",
    "name": "Tubo LED",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "iluminacion",
    "categoryName": "Iluminación",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/tubo-led.jpg",
    "description": "Iluminación LED eficiente y autónoma con energía solar.",
    "specs": {
      "Alimentación": "Energía solar",
      "Tecnología": "LED"
    },
    "applications": [
      "Fácil"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 19; Otro catálogo JIMACO: Tubo LED Solar"
  },
  {
    "id": "lampara-led-con-panel-solar",
    "name": "Lámpara LED (con panel solar)",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "iluminacion",
    "categoryName": "Iluminación",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/lampara-led-con-panel-solar.jpg",
    "description": "Iluminación LED eficiente alimentada por energía solar.",
    "specs": {
      "Alimentación": "Energía solar",
      "Tecnología": "LED"
    },
    "applications": [
      "Fácil"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 19; Otro catálogo JIMACO: Lámpara LED Solar"
  },
  {
    "id": "lampara-led",
    "name": "Lámpara LED",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "iluminacion",
    "categoryName": "Iluminación",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/lampara-led.jpg",
    "description": "Iluminación eficiente, duradera y de bajo consumo.",
    "specs": {
      "Tecnología": "LED",
      "Consumo": "Bajo",
      "Durabilidad": "Alta"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 19; Otro catálogo JIMACO: Lámpara LED"
  },
  {
    "id": "telurometro",
    "name": "Telurómetro",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-tension",
    "categoryName": "Herramientas de Tensión Eléctrica",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/telurometro.jpg",
    "description": "Equipo digital utilizado para medir la resistencia de los sistemas de puesta a tierra, facilitando la verificación y control de instalaciones eléctricas.",
    "specs": {
      "Tipo": "Digital",
      "Mide": "Resistencia de puesta a tierra"
    },
    "applications": [
      "Verificación y control de instalaciones eléctricas"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 20; Otro catálogo JIMACO: Telurómetro Digital"
  },
  {
    "id": "dinamometro",
    "name": "Dinamómetro",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-tension",
    "categoryName": "Herramientas de Tensión Eléctrica",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/dinamometro.jpg",
    "description": "Las herramientas de medición son cruciales para garantizar la precisión y eficiencia de la instalación, permiten verificar el rendimiento, monitorear la producción de energía y realizar diagnósticos precisos.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 20"
  },
  {
    "id": "pinza-voltiamperimetrica",
    "name": "Pinza voltiamperimétrica",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-tension",
    "categoryName": "Herramientas de Tensión Eléctrica",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/pinza-voltiamperimetrica.jpg",
    "description": "Instrumento de medición eléctrica que permite verificar corriente y voltaje de forma práctica, ideal para diagnóstico, mantenimiento e instalaciones eléctricas.",
    "specs": {
      "Mide": "Corriente y voltaje"
    },
    "applications": [
      "Diagnóstico, mantenimiento e instalaciones eléctricas"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 20; Otro catálogo JIMACO: Pinza Voltiamperimétrica"
  },
  {
    "id": "medidor-de-espesor",
    "name": "Medidor de espesor",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-tension",
    "categoryName": "Herramientas de Tensión Eléctrica",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/medidor-de-espesor.jpg",
    "description": "Instrumento diseñado para medir con precisión el espesor de diferentes materiales, ideal para inspección, control de calidad y aplicaciones industriales.",
    "specs": {
      "Pantalla": "Digital",
      "Mide": "Espesor de materiales"
    },
    "applications": [
      "Inspección, control de calidad e industria"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 20; Otro catálogo JIMACO: Medidor de Espesor"
  },
  {
    "id": "medidor-de-resistencia",
    "name": "Medidor de resistencia",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-tension",
    "categoryName": "Herramientas de Tensión Eléctrica",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/medidor-de-resistencia.jpg",
    "description": "Equipo utilizado para realizar mediciones de resistencia eléctrica de manera práctica y precisa, facilitando el diagnóstico y mantenimiento de instalaciones y equipos.",
    "specs": {
      "Mide": "Resistencia eléctrica"
    },
    "applications": [
      "Diagnóstico y mantenimiento de instalaciones y equipos"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 20; Otro catálogo JIMACO: Medidor de Resistencia"
  },
  {
    "id": "torquimetro-medicion-de-angulo",
    "name": "Torquímetro medición de ángulo",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-tension",
    "categoryName": "Herramientas de Tensión Eléctrica",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/torquimetro-medicion-de-angulo.jpg",
    "description": "Herramienta digital diseñada para controlar y medir el torque y el ángulo de apriete, garantizando ajustes precisos en aplicaciones de mantenimiento y montaje industrial.",
    "specs": {
      "Tipo": "Digital",
      "Mide": "Torque y ángulo de apriete"
    },
    "applications": [
      "Mantenimiento y montaje industrial"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 20; Otro catálogo JIMACO: Torquímetro Medición de Ángulo"
  },
  {
    "id": "marquilla-termoencogible",
    "name": "Marquilla termoencogible",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "marcacion",
    "categoryName": "Marcación",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/marquilla-termoencogible.jpg",
    "description": "Identificación permanente para cables, con excelente ajuste y resistencia.",
    "specs": {
      "Función": "Identificación permanente de cables",
      "Resistencia": "Pensada para las condiciones de parques solares",
      "Ajuste": "Excelente"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 21; Otro catálogo JIMACO: Marquilla Termoencogible"
  },
  {
    "id": "portamarcador",
    "name": "Portamarcador",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "marcacion",
    "categoryName": "Marcación",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/portamarcador.jpg",
    "description": "Solución práctica para organizar y mantener identificados los cables.",
    "specs": {
      "Función": "Organización e identificación de cables",
      "Resistencia": "Pensado para las condiciones de parques solares"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 21; Otro catálogo JIMACO: Portamarcador"
  },
  {
    "id": "impresora-zebra",
    "name": "Impresora Zebra",
    "reference": null,
    "price": null,
    "brand": "Zebra",
    "category": "marcacion",
    "categoryName": "Marcación",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/impresora-zebra.jpg",
    "description": "Impresión rápida y precisa de etiquetas para una marcación profesional.",
    "specs": {
      "Marca": "Zebra",
      "Función": "Impresión de etiquetas",
      "Velocidad": "Rápida y precisa"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 21; Otro catálogo JIMACO: Impresora Zebra"
  },
  {
    "id": "amarres-plasticos",
    "name": "Amarres plásticos",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "marcacion",
    "categoryName": "Marcación",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/amarres-plasticos.jpg",
    "description": "Ideales para organizar, sujetar y asegurar cables y conductores.",
    "specs": {
      "Función": "Organizar, sujetar y asegurar cables y conductores",
      "Material": "Plástico"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 21; Otro catálogo JIMACO: Amarres Plásticos"
  },
  {
    "id": "funda-termoencogible",
    "name": "Funda termoencogible",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "marcacion",
    "categoryName": "Marcación",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/funda-termoencogible.jpg",
    "description": "Protección y aislamiento para cables, conexiones y componentes eléctricos.",
    "specs": {
      "Función": "Protección y aislamiento"
    },
    "applications": [
      "Cables, conexiones y componentes eléctricos"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 21; Otro catálogo JIMACO: Funda Termoencogible"
  },
  {
    "id": "cinta-aislante",
    "name": "Cinta aislante",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "marcacion",
    "categoryName": "Marcación",
    "group": "Suministros eléctricos",
    "image": "/images/catalogo/cinta-aislante.jpg",
    "description": "Solución para aislamiento, protección y organización de instalaciones eléctricas.",
    "specs": {
      "Color": "Negro",
      "Función": "Aislamiento, protección y organización"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 21; Otro catálogo JIMACO: Cinta Aislante Negra"
  },
  {
    "id": "advertencia-fuente-de-potencia-fotovoltaica",
    "name": "Advertencia fuente de potencia fotovoltaica",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "senalizacion",
    "categoryName": "Señalización",
    "group": "Señalización",
    "image": "/images/catalogo/advertencia-fuente-de-potencia-fotovoltaica.jpg",
    "description": "La señalización adecuada es crucial para indicar zonas de peligro, rutas de evacuación y procedimientos de seguridad, garantizando la prevención de accidentes y la respuesta efectiva en casos de emergencia.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 23; Otro catálogo JIMACO: Advertencia Fuente de Potencia Fotovoltaica"
  },
  {
    "id": "centro-de-transformacion",
    "name": "Centro de transformación",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "senalizacion",
    "categoryName": "Señalización",
    "group": "Señalización",
    "image": "/images/catalogo/centro-de-transformacion.jpg",
    "description": "La señalización adecuada es crucial para indicar zonas de peligro, rutas de evacuación y procedimientos de seguridad, garantizando la prevención de accidentes y la respuesta efectiva en casos de emergencia.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 23; Otro catálogo JIMACO: Centro de Transformación"
  },
  {
    "id": "advertencia-riesgo-de-choque-electrico",
    "name": "Advertencia riesgo de choque eléctrico",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "senalizacion",
    "categoryName": "Señalización",
    "group": "Señalización",
    "image": "/images/catalogo/advertencia-riesgo-de-choque-electrico.jpg",
    "description": "La señalización adecuada es crucial para indicar zonas de peligro, rutas de evacuación y procedimientos de seguridad, garantizando la prevención de accidentes y la respuesta efectiva en casos de emergencia.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 23; Otro catálogo JIMACO: Advertencia Riesgo de Choque Eléctrico"
  },
  {
    "id": "limite-de-aproximacion-restringida",
    "name": "Límite de aproximación restringida",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "senalizacion",
    "categoryName": "Señalización",
    "group": "Señalización",
    "image": "/images/catalogo/limite-de-aproximacion-restringida.jpg",
    "description": "La señalización adecuada es crucial para indicar zonas de peligro, rutas de evacuación y procedimientos de seguridad, garantizando la prevención de accidentes y la respuesta efectiva en casos de emergencia.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 23; Otro catálogo JIMACO: Límite de Aproximación Restringida"
  },
  {
    "id": "senalizacion-riesgo-electrico-peligro-para-el-medio-ambiente",
    "name": "Señalización riesgo eléctrico (peligro para el medio ambiente)",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "senalizacion",
    "categoryName": "Señalización",
    "group": "Señalización",
    "image": "/images/catalogo/senalizacion-riesgo-electrico-peligro-para-el-medio-ambiente.jpg",
    "description": "La señalización adecuada es crucial para indicar zonas de peligro, rutas de evacuación y procedimientos de seguridad, garantizando la prevención de accidentes y la respuesta efectiva en casos de emergencia.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 23"
  },
  {
    "id": "letrero-5-reglas-de-oro",
    "name": "Letrero 5 reglas de oro",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "senalizacion",
    "categoryName": "Señalización",
    "group": "Señalización",
    "image": "/images/catalogo/letrero-5-reglas-de-oro.jpg",
    "description": "La señalización adecuada es crucial para indicar zonas de peligro, rutas de evacuación y procedimientos de seguridad, garantizando la prevención de accidentes y la respuesta efectiva en casos de emergencia.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 23; Otro catálogo JIMACO: Letrero 5 Reglas de Oro"
  },
  {
    "id": "lavaojos-de-emergencia",
    "name": "Lavaojos de emergencia",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "senalizacion",
    "categoryName": "Señalización",
    "group": "Señalización",
    "image": "/images/catalogo/lavaojos-de-emergencia.jpg",
    "description": "La señalización adecuada es crucial para indicar zonas de peligro, rutas de evacuación y procedimientos de seguridad, garantizando la prevención de accidentes y la respuesta efectiva en casos de emergencia.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 23; Otro catálogo JIMACO: Lavaojos de Emergencia"
  },
  {
    "id": "senalizacion-ruta-de-evacuacion",
    "name": "Señalización ruta de evacuación",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "senalizacion",
    "categoryName": "Señalización",
    "group": "Señalización",
    "image": "/images/catalogo/senalizacion-ruta-de-evacuacion.jpg",
    "description": "Indica la dirección de las rutas de evacuación en caso de emergencia.",
    "specs": {
      "Tipo": "Señal",
      "Función": "Prevenir accidentes, advertir peligros y orientar a las personas"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 24; Otro catálogo JIMACO: Señalización Ruta de Evacuación"
  },
  {
    "id": "senalizacion-aviso-de-prohibido-el-ingreso-a-personal-no-autorizado",
    "name": "Señalización aviso de prohibido el ingreso a personal no autorizado",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "senalizacion",
    "categoryName": "Señalización",
    "group": "Señalización",
    "image": "/images/catalogo/senalizacion-aviso-de-prohibido-el-ingreso-a-personal-no-autorizado.jpg",
    "description": "Restringe el ingreso únicamente a personal autorizado.",
    "specs": {
      "Tipo": "Señal",
      "Función": "Prevenir accidentes, advertir peligros y orientar a las personas"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 24; Otro catálogo JIMACO: Señalización Aviso de Prohibido el Ingreso a Personal no Autorizado"
  },
  {
    "id": "senalizacion-peligro-excavacion-profunda",
    "name": "Señalización peligro excavación profunda",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "senalizacion",
    "categoryName": "Señalización",
    "group": "Señalización",
    "image": "/images/catalogo/senalizacion-peligro-excavacion-profunda.jpg",
    "description": "Advierte sobre el peligro de excavaciones profundas en el área.",
    "specs": {
      "Tipo": "Señal",
      "Función": "Prevenir accidentes, advertir peligros y orientar a las personas"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 24; Otro catálogo JIMACO: Señalización Peligro Excavación Profunda"
  },
  {
    "id": "senalizacion-prohibido-encender-fuego",
    "name": "Señalización prohibido encender fuego",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "senalizacion",
    "categoryName": "Señalización",
    "group": "Señalización",
    "image": "/images/catalogo/senalizacion-prohibido-encender-fuego.jpg",
    "description": "Prohíbe encender fuego o realizar cualquier actividad que genere llamas.",
    "specs": {
      "Tipo": "Señal",
      "Función": "Prevenir accidentes, advertir peligros y orientar a las personas"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 24; Otro catálogo JIMACO: Señalización Prohibido Encender Fuego"
  },
  {
    "id": "senalizacion-riesgo-electrico",
    "name": "Señalización riesgo eléctrico",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "senalizacion",
    "categoryName": "Señalización",
    "group": "Señalización",
    "image": "/images/catalogo/senalizacion-riesgo-electrico.jpg",
    "description": "Advierte sobre la presencia de riesgo eléctrico en la zona.",
    "specs": {
      "Tipo": "Señal",
      "Función": "Prevenir accidentes, advertir peligros y orientar a las personas"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 24; Otro catálogo JIMACO: Señalización Riesgo Eléctrico"
  },
  {
    "id": "senalizacion-aviso-de-uso-obligatorio-epp",
    "name": "Señalización aviso de uso obligatorio EPP",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "senalizacion",
    "categoryName": "Señalización",
    "group": "Señalización",
    "image": "/images/catalogo/senalizacion-aviso-de-uso-obligatorio-epp.jpg",
    "description": "Indica el uso obligatorio de elementos de protección personal en el área.",
    "specs": {
      "Tipo": "Señal",
      "Función": "Prevenir accidentes, advertir peligros y orientar a las personas"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 24; Otro catálogo JIMACO: Señalización Aviso de Uso Obligatorio EPP"
  },
  {
    "id": "senalizacion-velocidad-permitida",
    "name": "Señalización velocidad permitida",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "senalizacion",
    "categoryName": "Señalización",
    "group": "Señalización",
    "image": "/images/catalogo/senalizacion-velocidad-permitida.jpg",
    "description": "Indica la velocidad máxima permitida en el área.",
    "specs": {
      "Tipo": "Señal",
      "Función": "Prevenir accidentes, advertir peligros y orientar a las personas"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 24; Otro catálogo JIMACO: Señalización Velocidad Permitida"
  },
  {
    "id": "senalizacion-punto-de-hidratacion",
    "name": "Señalización punto de hidratación",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "senalizacion",
    "categoryName": "Señalización",
    "group": "Señalización",
    "image": "/images/catalogo/senalizacion-punto-de-hidratacion.jpg",
    "description": "Indica la ubicación de puntos de hidratación en el área.",
    "specs": {
      "Tipo": "Señal",
      "Función": "Prevenir accidentes, advertir peligros y orientar a las personas"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 25; Otro catálogo JIMACO: Señalización Punto de Hidratación"
  },
  {
    "id": "cinta-peligro-amarilla",
    "name": "Cinta peligro amarilla",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "senalizacion",
    "categoryName": "Señalización",
    "group": "Señalización",
    "image": "/images/catalogo/cinta-peligro-amarilla.jpg",
    "description": "Delimita áreas de riesgo y restringe el acceso.",
    "specs": {
      "Tipo": "Cinta de seguridad",
      "Función": "Prevenir accidentes, advertir peligros y orientar a las personas"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 25; Otro catálogo JIMACO: Cinta Peligro Amarilla"
  },
  {
    "id": "senalizacion-riesgo-de-atrapamiento",
    "name": "Señalización riesgo de atrapamiento",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "senalizacion",
    "categoryName": "Señalización",
    "group": "Señalización",
    "image": "/images/catalogo/senalizacion-riesgo-de-atrapamiento.jpg",
    "description": "Advierte sobre el riesgo de atrapamiento en equipos o maquinaria.",
    "specs": {
      "Tipo": "Señal",
      "Función": "Prevenir accidentes, advertir peligros y orientar a las personas"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 25; Otro catálogo JIMACO: Señalización Riesgo de Atrapamiento"
  },
  {
    "id": "cinta-de-alta-tension",
    "name": "Cinta de alta tensión",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "senalizacion",
    "categoryName": "Señalización",
    "group": "Señalización",
    "image": "/images/catalogo/cinta-de-alta-tension.jpg",
    "description": "Delimita y advierte sobre cables eléctricos de alta tensión.",
    "specs": {
      "Tipo": "Cinta de seguridad",
      "Función": "Prevenir accidentes, advertir peligros y orientar a las personas"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 25; Otro catálogo JIMACO: Cinta de Alta Tensión"
  },
  {
    "id": "tarjeta-etiquetado-y-bloqueo-amarilla",
    "name": "Tarjeta etiquetado y bloqueo amarilla",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "senalizacion",
    "categoryName": "Señalización",
    "group": "Señalización",
    "image": "/images/catalogo/tarjeta-etiquetado-y-bloqueo-amarilla.jpg",
    "description": "Identifica equipos fuera de servicio y evita su manipulación.",
    "specs": {
      "Tipo": "Tarjeta",
      "Función": "Prevenir accidentes, advertir peligros y orientar a las personas"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 25; Otro catálogo JIMACO: Tarjeta Etiquetado y Bloqueo Amarilla"
  },
  {
    "id": "cinta-peligro-roja",
    "name": "Cinta peligro roja",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "senalizacion",
    "categoryName": "Señalización",
    "group": "Señalización",
    "image": "/images/catalogo/cinta-peligro-roja.jpg",
    "description": "Delimita y advierte sobre zonas de peligro o acceso restringido.",
    "specs": {
      "Tipo": "Cinta de seguridad",
      "Función": "Prevenir accidentes, advertir peligros y orientar a las personas"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 25; Otro catálogo JIMACO: Cinta Peligro Roja"
  },
  {
    "id": "senalizacion-material-inflamable",
    "name": "Señalización material inflamable",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "senalizacion",
    "categoryName": "Señalización",
    "group": "Señalización",
    "image": "/images/catalogo/senalizacion-material-inflamable.jpg",
    "description": "Advierte sobre la presencia de materiales inflamables.",
    "specs": {
      "Tipo": "Señal",
      "Función": "Prevenir accidentes, advertir peligros y orientar a las personas"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 25; Otro catálogo JIMACO: Señalización Material Inflamable"
  },
  {
    "id": "planta-gasolina-maquitec",
    "name": "Planta gasolina Maquitec",
    "reference": null,
    "price": null,
    "brand": "Maquitec",
    "category": "plantas-generadores",
    "categoryName": "Plantas, Generadores Eléctricos y Motobombas",
    "group": "Generadores de energía",
    "image": "/images/catalogo/planta-gasolina-maquitec.jpg",
    "description": "Planta eléctrica a gasolina, diseñada para ofrecer máxima potencia y eficiencia en trabajos exigentes.",
    "specs": {
      "Combustible": "Gasolina",
      "Características": "Potencia constante, eficiencia de combustible, durabilidad superior"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 27; Otro catálogo JIMACO: Planta Gasolina Maquitec"
  },
  {
    "id": "generador-hyundai",
    "name": "Generador Hyundai",
    "reference": null,
    "price": null,
    "brand": "Hyundai",
    "category": "plantas-generadores",
    "categoryName": "Plantas, Generadores Eléctricos y Motobombas",
    "group": "Generadores de energía",
    "image": "/images/catalogo/generador-hyundai.jpg",
    "description": "Generador a gasolina Hyundai, tecnología avanzada y gran capacidad para respaldo de energía confiable.",
    "specs": {
      "Combustible": "Gasolina",
      "Características": "Tecnología avanzada, gran capacidad, rendimiento confiable"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 27; Otro catálogo JIMACO: Generador Hyundai"
  },
  {
    "id": "generador-portatil-gasolina-elite",
    "name": "Generador portátil gasolina Elite",
    "reference": null,
    "price": null,
    "brand": "Elite",
    "category": "plantas-generadores",
    "categoryName": "Plantas, Generadores Eléctricos y Motobombas",
    "group": "Generadores de energía",
    "image": "/images/catalogo/generador-portatil-gasolina-elite.jpg",
    "description": "Generador portátil a gasolina, ideal para uso residencial, comercial y actividades al aire libre. Potente, confiable y fácil de transportar.",
    "specs": {
      "Combustible": "Gasolina",
      "Tipo": "Portátil",
      "Características": "Energía confiable, alto rendimiento, fácil transporte"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 27; Otro catálogo JIMACO: Generador Portátil Gasolina Elite"
  },
  {
    "id": "bomba-de-agua-sumergible",
    "name": "Bomba de agua sumergible",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "plantas-generadores",
    "categoryName": "Plantas, Generadores Eléctricos y Motobombas",
    "group": "Generadores de energía",
    "image": "/images/catalogo/bomba-de-agua-sumergible.jpg",
    "description": "Bomba sumergible diseñada para drenaje y bombeo de agua limpia o ligeramente sucia en pozos, tanques, cisternas y otras aplicaciones.",
    "specs": {
      "Tipo": "Sumergible",
      "Características": "Impermeable y segura, máxima eficiencia, larga durabilidad"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 28; Otro catálogo JIMACO: Bomba de Agua Sumergible"
  },
  {
    "id": "motobomba-de-succion",
    "name": "Motobomba de succión",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "plantas-generadores",
    "categoryName": "Plantas, Generadores Eléctricos y Motobombas",
    "group": "Generadores de energía",
    "image": "/images/catalogo/motobomba-de-succion.jpg",
    "description": "Motobomba potente y portátil, ideal para la transferencia de grandes volúmenes de agua en riego, construcción, agricultura y emergencias.",
    "specs": {
      "Tipo": "Motobomba de succión",
      "Características": "Succión potente, motor de alto desempeño, resistente y confiable"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 28; Otro catálogo JIMACO: Motobomba de Succión"
  },
  {
    "id": "bomba-autocebante",
    "name": "Bomba autocebante",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "plantas-generadores",
    "categoryName": "Plantas, Generadores Eléctricos y Motobombas",
    "group": "Generadores de energía",
    "image": "/images/catalogo/bomba-autocebante.jpg",
    "description": "Bomba de alta eficiencia con capacidad de autocebado, ideal para aplicaciones que requieren succión y traslado de agua sin necesidad de cebado manual.",
    "specs": {
      "Tipo": "Autocebante",
      "Características": "Alto rendimiento, uso industrial"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 28; Otro catálogo JIMACO: Bomba Autocebante"
  },
  {
    "id": "planta-electrica-yorking",
    "name": "Planta eléctrica",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "plantas-generadores",
    "categoryName": "Plantas, Generadores Eléctricos y Motobombas",
    "group": "Generadores de energía",
    "image": "/images/catalogo/planta-electrica-yorking.jpg",
    "description": "Planta eléctrica robusta y eficiente, ideal para uso industrial y comercial. Potencia y confiabilidad en todo momento.",
    "specs": {
      "Características": "Energía confiable, operación continua, diseño resistente"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 29; Otro catálogo JIMACO: Planta Eléctrica Yorking"
  },
  {
    "id": "planta-diesel-cabinada",
    "name": "Planta diésel cabinada",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "plantas-generadores",
    "categoryName": "Plantas, Generadores Eléctricos y Motobombas",
    "group": "Generadores de energía",
    "image": "/images/catalogo/planta-diesel-cabinada.jpg",
    "description": "Planta eléctrica diésel cabinada, con aislamiento acústico y protección total para un funcionamiento seguro y silencioso.",
    "specs": {
      "Combustible": "Diésel",
      "Tipo": "Cabinada",
      "Características": "Bajo ruido, máxima seguridad, protección total"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 29; Otro catálogo JIMACO: Planta Diésel Cabinada"
  },
  {
    "id": "planta-electrica-diesel-kama",
    "name": "Planta eléctrica diésel Kama",
    "reference": null,
    "price": null,
    "brand": "Kama",
    "category": "plantas-generadores",
    "categoryName": "Plantas, Generadores Eléctricos y Motobombas",
    "group": "Generadores de energía",
    "image": "/images/catalogo/planta-electrica-diesel-kama.jpg",
    "description": "Planta eléctrica diésel de alto rendimiento, diseñada para ofrecer energía confiable y duradera en trabajos exigentes.",
    "specs": {
      "Combustible": "Diésel",
      "Características": "Alto rendimiento, bajo consumo de combustible, fácil mantenimiento"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 29; Otro catálogo JIMACO: Planta Eléctrica Diésel Kama"
  },
  {
    "id": "taladro",
    "name": "Taladro",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-electricas",
    "categoryName": "Herramientas Eléctricas",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/taladro.jpg",
    "description": "Descubre nuestra gama de herramientas eléctricas, diseñadas para brindar potencia y precisión en cada proyecto. Nuestras herramientas están construidas para ofrecer rendimiento confiable y eficiencia en cualquier tarea.",
    "specs": {
      "Características": "Potente, preciso, duradero"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 31; Otro catálogo JIMACO: Taladro"
  },
  {
    "id": "esmeril-de-banco",
    "name": "Esmeril de banco",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-electricas",
    "categoryName": "Herramientas Eléctricas",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/esmeril-de-banco.jpg",
    "description": "Descubre nuestra gama de herramientas eléctricas, diseñadas para brindar potencia y precisión en cada proyecto. Nuestras herramientas están construidas para ofrecer rendimiento confiable y eficiencia en cualquier tarea.",
    "specs": {
      "Características": "Estable, alto rendimiento, precisión"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 31; Otro catálogo JIMACO: Esmeril de Banco"
  },
  {
    "id": "sierra-circular",
    "name": "Sierra circular",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-electricas",
    "categoryName": "Herramientas Eléctricas",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/sierra-circular.jpg",
    "description": "Descubre nuestra gama de herramientas eléctricas, diseñadas para brindar potencia y precisión en cada proyecto. Nuestras herramientas están construidas para ofrecer rendimiento confiable y eficiencia en cualquier tarea.",
    "specs": {
      "Características": "Corte preciso, alta potencia, resistente"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 31; Otro catálogo JIMACO: Sierra Circular"
  },
  {
    "id": "martillo-percutor",
    "name": "Martillo percutor",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-electricas",
    "categoryName": "Herramientas Eléctricas",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/martillo-percutor.jpg",
    "description": "Descubre nuestra gama de herramientas eléctricas, diseñadas para brindar potencia y precisión en cada proyecto. Nuestras herramientas están construidas para ofrecer rendimiento confiable y eficiencia en cualquier tarea.",
    "specs": {
      "Características": "Perforación eficiente, alta potencia, uso profesional"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 31; Otro catálogo JIMACO: Martillo Percutor"
  },
  {
    "id": "llave-de-impacto",
    "name": "Llave de impacto",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-electricas",
    "categoryName": "Herramientas Eléctricas",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/llave-de-impacto.jpg",
    "description": "Descubre nuestra gama de herramientas eléctricas, diseñadas para brindar potencia y precisión en cada proyecto. Nuestras herramientas están construidas para ofrecer rendimiento confiable y eficiencia en cualquier tarea.",
    "specs": {
      "Características": "Alto torque, máximo desempeño, uso industrial"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 31; Otro catálogo JIMACO: Llave de Impacto"
  },
  {
    "id": "pulidora",
    "name": "Pulidora",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-electricas",
    "categoryName": "Herramientas Eléctricas",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/pulidora.jpg",
    "description": "Descubre nuestra gama de herramientas eléctricas, diseñadas para brindar potencia y precisión en cada proyecto. Nuestras herramientas están construidas para ofrecer rendimiento confiable y eficiencia en cualquier tarea.",
    "specs": {
      "Características": "Segura, alto rendimiento, uso profesional"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 31; Otro catálogo JIMACO: Pulidora"
  },
  {
    "id": "pistola-de-calor",
    "name": "Pistola de calor",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-electricas",
    "categoryName": "Herramientas Eléctricas",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/pistola-de-calor.jpg",
    "description": "Descubre nuestra gama de herramientas eléctricas, diseñadas para brindar potencia y precisión en cada proyecto. Nuestras herramientas están construidas para ofrecer rendimiento confiable y eficiencia en cualquier tarea.",
    "specs": {
      "Características": "Control térmico, calentamiento rápido, versátil"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 31; Otro catálogo JIMACO: Pistola de Calor"
  },
  {
    "id": "apisonador-canguro",
    "name": "Apisonador canguro",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-electricas",
    "categoryName": "Herramientas Eléctricas",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/apisonador-canguro.jpg",
    "description": "Descubre nuestra gama de herramientas eléctricas, diseñadas para brindar potencia y precisión en cada proyecto. Nuestras herramientas están construidas para ofrecer rendimiento confiable y eficiencia en cualquier tarea.",
    "specs": {
      "Características": "Compactación efectiva, fuerza superior, uso intensivo"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 31; Otro catálogo JIMACO: Apisonador Canguro"
  },
  {
    "id": "guadanadora-profesional",
    "name": "Guadañadora profesional",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-electricas",
    "categoryName": "Herramientas Eléctricas",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/guadanadora-profesional.jpg",
    "description": "Descubre nuestra gama de herramientas eléctricas, diseñadas para brindar potencia y precisión en cada proyecto. Nuestras herramientas están construidas para ofrecer rendimiento confiable y eficiencia en cualquier tarea.",
    "specs": {
      "Características": "Potente, eficiente, duradera"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 31; Otro catálogo JIMACO: Guadañadora Profesional"
  },
  {
    "id": "hombresolo-visegrip",
    "name": "Hombresolo visegrip",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-manuales",
    "categoryName": "Herramientas Manuales",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/hombresolo-visegrip.jpg",
    "description": "Explora nuestra amplia gama de herramientas manuales, confiables, ergonómicas y duraderas.",
    "specs": {
      "Características": "Resistente y duradera; diseño ergonómico; alta calidad; uso profesional"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 32; Otro catálogo JIMACO: Hombresolo Visegrip"
  },
  {
    "id": "pinza-de-punta",
    "name": "Pinza de punta",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-manuales",
    "categoryName": "Herramientas Manuales",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/pinza-de-punta.jpg",
    "description": "Explora nuestra amplia gama de herramientas manuales, confiables, ergonómicas y duraderas.",
    "specs": {
      "Características": "Resistente y duradera; diseño ergonómico; alta calidad; uso profesional"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 32; Otro catálogo JIMACO: Pinza de Punta"
  },
  {
    "id": "segueta",
    "name": "Segueta",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-manuales",
    "categoryName": "Herramientas Manuales",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/segueta.jpg",
    "description": "Explora nuestra amplia gama de herramientas manuales, confiables, ergonómicas y duraderas.",
    "specs": {
      "Características": "Resistente y duradera; diseño ergonómico; alta calidad; uso profesional"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 32; Otro catálogo JIMACO: Segueta"
  },
  {
    "id": "alicate-electricista",
    "name": "Alicate electricista",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-manuales",
    "categoryName": "Herramientas Manuales",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/alicate-electricista.jpg",
    "description": "Explora nuestra amplia gama de herramientas manuales, confiables, ergonómicas y duraderas.",
    "specs": {
      "Características": "Resistente y duradera; diseño ergonómico; alta calidad; uso profesional"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 32; Otro catálogo JIMACO: Alicate Electricista"
  },
  {
    "id": "destornillador",
    "name": "Destornillador",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-manuales",
    "categoryName": "Herramientas Manuales",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/destornillador.jpg",
    "description": "Explora nuestra amplia gama de herramientas manuales, confiables, ergonómicas y duraderas.",
    "specs": {
      "Características": "Resistente y duradera; diseño ergonómico; alta calidad; uso profesional"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 32; Otro catálogo JIMACO: Destornillador"
  },
  {
    "id": "martillo-de-goma",
    "name": "Martillo de goma",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-manuales",
    "categoryName": "Herramientas Manuales",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/martillo-de-goma.jpg",
    "description": "Explora nuestra amplia gama de herramientas manuales, confiables, ergonómicas y duraderas.",
    "specs": {
      "Características": "Resistente y duradera; diseño ergonómico; alta calidad; uso profesional"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 32; Otro catálogo JIMACO: Martillo de Goma"
  },
  {
    "id": "torquimetro",
    "name": "Torquímetro",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-manuales",
    "categoryName": "Herramientas Manuales",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/torquimetro.jpg",
    "description": "Explora nuestra amplia gama de herramientas manuales, confiables, ergonómicas y duraderas.",
    "specs": {
      "Características": "Resistente y duradera; diseño ergonómico; alta calidad; uso profesional"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 33; Otro catálogo JIMACO: Torquímetro"
  },
  {
    "id": "cizalla-manual",
    "name": "Cizalla manual",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-manuales",
    "categoryName": "Herramientas Manuales",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/cizalla-manual.jpg",
    "description": "Explora nuestra amplia gama de herramientas manuales, confiables, ergonómicas y duraderas.",
    "specs": {
      "Características": "Resistente y duradera; diseño ergonómico; alta calidad; uso profesional"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 33; Otro catálogo JIMACO: Cizalla Manual"
  },
  {
    "id": "llaves-mixtas",
    "name": "Llaves mixtas",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-manuales",
    "categoryName": "Herramientas Manuales",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/llaves-mixtas.jpg",
    "description": "Explora nuestra amplia gama de herramientas manuales, confiables, ergonómicas y duraderas.",
    "specs": {
      "Características": "Resistente y duradera; diseño ergonómico; alta calidad; uso profesional"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 33; Otro catálogo JIMACO: Llaves Mixtas"
  },
  {
    "id": "copa-de-impacto",
    "name": "Copa de impacto",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-manuales",
    "categoryName": "Herramientas Manuales",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/copa-de-impacto.jpg",
    "description": "Explora nuestra amplia gama de herramientas manuales, confiables, ergonómicas y duraderas.",
    "specs": {
      "Características": "Resistente y duradera; diseño ergonómico; alta calidad; uso profesional"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 33; Otro catálogo JIMACO: Copa de Impacto"
  },
  {
    "id": "ratchet",
    "name": "Ratchet",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-manuales",
    "categoryName": "Herramientas Manuales",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/ratchet.jpg",
    "description": "Explora nuestra amplia gama de herramientas manuales, confiables, ergonómicas y duraderas.",
    "specs": {
      "Características": "Resistente y duradera; diseño ergonómico; alta calidad; uso profesional"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 33; Otro catálogo JIMACO: Ratchet"
  },
  {
    "id": "juego-de-copas",
    "name": "Juego de copas",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-manuales",
    "categoryName": "Herramientas Manuales",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/juego-de-copas.jpg",
    "description": "Explora nuestra amplia gama de herramientas manuales, confiables, ergonómicas y duraderas.",
    "specs": {
      "Características": "Resistente y duradera; diseño ergonómico; alta calidad; uso profesional"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 33; Otro catálogo JIMACO: Juego de Copas"
  },
  {
    "id": "centro-punto",
    "name": "Centro punto",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-medicion",
    "categoryName": "Herramientas de Medición",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/centro-punto.jpg",
    "description": "El centro punto es esencial en trabajos de torneado, proporciona soporte axial preciso para piezas en el torno, asegurando una rotación suave y precisa para una mecanización efectiva.",
    "specs": {
      "Función": "Soporte axial preciso para piezas en el torno"
    },
    "applications": [
      "Torneado"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 35; Otro catálogo JIMACO: Centro Punto"
  },
  {
    "id": "cinta-metrica",
    "name": "Cinta métrica",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-medicion",
    "categoryName": "Herramientas de Medición",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/cinta-metrica.jpg",
    "description": "Utilizadas para medir longitudes y dimensiones en una variedad de proyectos de construcción, carpintería, costura y otros trabajos donde se requiere precisión en las mediciones.",
    "specs": {
      "Función": "Medir longitudes y dimensiones"
    },
    "applications": [
      "Construcción, carpintería, costura"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 35; Otro catálogo JIMACO: Cinta Métrica"
  },
  {
    "id": "nivel-de-burbuja",
    "name": "Nivel de burbuja",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-medicion",
    "categoryName": "Herramientas de Medición",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/nivel-de-burbuja.jpg",
    "description": "Herramientas esenciales para garantizar la horizontalidad o verticalidad de superficies durante la instalación de estructuras, estanterías, marcos y otros elementos, proporcionando un nivel de precisión crucial en proyectos de construcción y carpintería.",
    "specs": {
      "Función": "Verificar horizontalidad y verticalidad"
    },
    "applications": [
      "Construcción y carpintería"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 35; Otro catálogo JIMACO: Nivel de Burbuja"
  },
  {
    "id": "decametro",
    "name": "Decámetro",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "herramientas-medicion",
    "categoryName": "Herramientas de Medición",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/decametro.jpg",
    "description": "Es utilizado para medir grandes distancias con precisión, ideal para trabajos de topografía, construcción y planificación de terrenos.",
    "specs": {
      "Función": "Medir grandes distancias"
    },
    "applications": [
      "Topografía, construcción y planificación de terrenos"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 35; Otro catálogo JIMACO: Decámetro"
  },
  {
    "id": "guadanadora",
    "name": "Guadañadora",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "jardineria",
    "categoryName": "Mantenimiento y Jardinería",
    "group": "Herramientas de mantenimiento y jardinería",
    "image": "/images/catalogo/guadanadora.jpg",
    "description": "Ideal para cortar césped, maleza y vegetación densa con potencia y precisión.",
    "specs": {},
    "applications": [
      "Corte de césped, maleza y vegetación densa"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 37; Otro catálogo JIMACO: Guadañadora"
  },
  {
    "id": "yoyo",
    "name": "Yoyo",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "jardineria",
    "categoryName": "Mantenimiento y Jardinería",
    "group": "Herramientas de mantenimiento y jardinería",
    "image": "/images/catalogo/yoyo.jpg",
    "description": "Repuesto resistente y de alta durabilidad para guadañadoras. Fácil de instalar y usar.",
    "specs": {
      "Tipo": "Repuesto"
    },
    "applications": [
      "Fácil de instalar y usar"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 37; Otro catálogo JIMACO: Yoyo para Guadañadora"
  },
  {
    "id": "careta-para-guadanar",
    "name": "Careta para guadañar",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "jardineria",
    "categoryName": "Mantenimiento y Jardinería",
    "group": "Herramientas de mantenimiento y jardinería",
    "image": "/images/catalogo/careta-para-guadanar.jpg",
    "description": "Protege el rostro de objetos voladores, garantizando seguridad y comodidad durante el trabajo.",
    "specs": {
      "Función": "Protección facial"
    },
    "applications": [
      "Trabajos de guadañado"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 37; Otro catálogo JIMACO: Careta para Guadañar"
  },
  {
    "id": "tijeras-podadoras",
    "name": "Tijeras podadoras",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "jardineria",
    "categoryName": "Mantenimiento y Jardinería",
    "group": "Herramientas de mantenimiento y jardinería",
    "image": "/images/catalogo/tijeras-podadoras.jpg",
    "description": "Perfectas para podar ramas y dar forma a plantas y arbustos con facilidad.",
    "specs": {},
    "applications": [
      "Poda de ramas, plantas y arbustos"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 37; Otro catálogo JIMACO: Tijeras Podadoras"
  },
  {
    "id": "rastrillo",
    "name": "Rastrillo",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "jardineria",
    "categoryName": "Mantenimiento y Jardinería",
    "group": "Herramientas de mantenimiento y jardinería",
    "image": "/images/catalogo/rastrillo.jpg",
    "description": "Ideal para recoger hojas, nivelar terrenos y mantener limpios los espacios verdes.",
    "specs": {},
    "applications": [
      "Recoger hojas y nivelar terrenos"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 37; Otro catálogo JIMACO: Rastrillo"
  },
  {
    "id": "motosierra",
    "name": "Motosierra",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "jardineria",
    "categoryName": "Mantenimiento y Jardinería",
    "group": "Herramientas de mantenimiento y jardinería",
    "image": "/images/catalogo/motosierra.jpg",
    "description": "Potente y confiable para cortes rápidos y precisos en madera y ramas de gran tamaño.",
    "specs": {},
    "applications": [
      "Corte de madera y ramas de gran tamaño"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 37; Otro catálogo JIMACO: Motosierra"
  },
  {
    "id": "fumigadora",
    "name": "Fumigadora",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "jardineria",
    "categoryName": "Mantenimiento y Jardinería",
    "group": "Herramientas de mantenimiento y jardinería",
    "image": "/images/catalogo/fumigadora.jpg",
    "description": "Útil para aplicar fertilizantes, pesticidas y tratamientos de forma uniforme y eficiente.",
    "specs": {},
    "applications": [
      "Aplicación de fertilizantes, pesticidas y tratamientos"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 37; Otro catálogo JIMACO: Fumigadora"
  },
  {
    "id": "broca-muro",
    "name": "Broca muro",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "abrasivos",
    "categoryName": "Abrasivos y Consumibles",
    "group": "Herramientas de mantenimiento y jardinería",
    "image": "/images/catalogo/broca-muro.jpg",
    "description": "Ideal para perforaciones en concreto, ladrillo y otros materiales de mampostería.",
    "specs": {},
    "applications": [
      "Concreto, ladrillo y mampostería"
    ],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 39; Otro catálogo JIMACO: Broca Muro"
  },
  {
    "id": "copa-grata",
    "name": "Copa grata",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "abrasivos",
    "categoryName": "Abrasivos y Consumibles",
    "group": "Herramientas de mantenimiento y jardinería",
    "image": "/images/catalogo/copa-grata.jpg",
    "description": "Remueve óxido, pintura y suciedad en metal y otras superficies.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 39; Otro catálogo JIMACO: Copa Grata"
  },
  {
    "id": "hoja-de-segueta",
    "name": "Hoja de segueta",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "abrasivos",
    "categoryName": "Abrasivos y Consumibles",
    "group": "Herramientas de mantenimiento y jardinería",
    "image": "/images/catalogo/hoja-de-segueta.jpg",
    "description": "Diseñada para cortes precisos en metal y otros materiales resistentes.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 39; Otro catálogo JIMACO: Hoja de Segueta"
  },
  {
    "id": "lija",
    "name": "Lija",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "abrasivos",
    "categoryName": "Abrasivos y Consumibles",
    "group": "Herramientas de mantenimiento y jardinería",
    "image": "/images/catalogo/lija.jpg",
    "description": "Para lijado manual o con máquina, ideal para acabado de superficies.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 39; Otro catálogo JIMACO: Lija"
  },
  {
    "id": "brocas-hss",
    "name": "Brocas HSS",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "abrasivos",
    "categoryName": "Abrasivos y Consumibles",
    "group": "Herramientas de mantenimiento y jardinería",
    "image": "/images/catalogo/brocas-hss.jpg",
    "description": "Alta resistencia y precisión para perforaciones en metal y diversos materiales.",
    "specs": {
      "Material": "HSS"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 39; Otro catálogo JIMACO: Brocas HSS"
  },
  {
    "id": "brocas-tungsteno",
    "name": "Brocas tungsteno",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "abrasivos",
    "categoryName": "Abrasivos y Consumibles",
    "group": "Herramientas de mantenimiento y jardinería",
    "image": "/images/catalogo/brocas-tungsteno.jpg",
    "description": "Máxima dureza y rendimiento para perforaciones en materiales duros y de alta exigencia.",
    "specs": {
      "Material": "Tungsteno"
    },
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 39; Otro catálogo JIMACO: Brocas Tungsteno"
  },
  {
    "id": "lija-tela",
    "name": "Lija tela",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "abrasivos",
    "categoryName": "Abrasivos y Consumibles",
    "group": "Herramientas de mantenimiento y jardinería",
    "image": "/images/catalogo/lija-tela.jpg",
    "description": "Las herramientas abrasivas y consumibles se utilizan para desgastar, pulir o limpiar superficies mediante fricción, facilitando tareas como lijado, esmerilado o corte en diversas aplicaciones industriales y de mantenimiento.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 40; Otro catálogo JIMACO: Lija Tela"
  },
  {
    "id": "lima-basta",
    "name": "Lima basta",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "abrasivos",
    "categoryName": "Abrasivos y Consumibles",
    "group": "Herramientas de mantenimiento y jardinería",
    "image": "/images/catalogo/lima-basta.jpg",
    "description": "Las herramientas abrasivas y consumibles se utilizan para desgastar, pulir o limpiar superficies mediante fricción, facilitando tareas como lijado, esmerilado o corte en diversas aplicaciones industriales y de mantenimiento.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 40; Otro catálogo JIMACO: Lima Basta"
  },
  {
    "id": "disco-de-corte",
    "name": "Disco de corte",
    "reference": null,
    "price": null,
    "brand": "DeWalt",
    "category": "abrasivos",
    "categoryName": "Abrasivos y Consumibles",
    "group": "Herramientas de mantenimiento y jardinería",
    "image": "/images/catalogo/disco-de-corte.jpg",
    "description": "Las herramientas abrasivas y consumibles se utilizan para desgastar, pulir o limpiar superficies mediante fricción, facilitando tareas como lijado, esmerilado o corte en diversas aplicaciones industriales y de mantenimiento.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 40; Otro catálogo JIMACO: Disco de Corte"
  },
  {
    "id": "piedra-esmeril",
    "name": "Piedra esmeril",
    "reference": null,
    "price": null,
    "brand": "Truper",
    "category": "abrasivos",
    "categoryName": "Abrasivos y Consumibles",
    "group": "Herramientas de mantenimiento y jardinería",
    "image": "/images/catalogo/piedra-esmeril.jpg",
    "description": "Las herramientas abrasivas y consumibles se utilizan para desgastar, pulir o limpiar superficies mediante fricción, facilitando tareas como lijado, esmerilado o corte en diversas aplicaciones industriales y de mantenimiento.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 40; Otro catálogo JIMACO: Piedra Esmeril"
  },
  {
    "id": "varillas",
    "name": "Varillas",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "hierro",
    "categoryName": "Hierro",
    "group": "Material en hierro",
    "image": "/images/catalogo/varillas.jpg",
    "description": "El hierro es fundamental en los parques solares como componente estructural para soportar paneles solares y sistemas de montaje.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 42"
  },
  {
    "id": "perfiles",
    "name": "Perfiles",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "hierro",
    "categoryName": "Hierro",
    "group": "Material en hierro",
    "image": "/images/catalogo/perfiles.jpg",
    "description": "El hierro es fundamental en los parques solares como componente estructural para soportar paneles solares y sistemas de montaje.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 42"
  },
  {
    "id": "tubo-cerramiento",
    "name": "Tubo cerramiento",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "hierro",
    "categoryName": "Hierro",
    "group": "Material en hierro",
    "image": "/images/catalogo/tubo-cerramiento.jpg",
    "description": "El hierro es fundamental en los parques solares como componente estructural para soportar paneles solares y sistemas de montaje.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 42"
  },
  {
    "id": "angulos",
    "name": "Ángulos",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "hierro",
    "categoryName": "Hierro",
    "group": "Material en hierro",
    "image": "/images/catalogo/angulos.jpg",
    "description": "El hierro es fundamental en los parques solares como componente estructural para soportar paneles solares y sistemas de montaje.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 42"
  },
  {
    "id": "lamina-alfajor",
    "name": "Lámina alfajor",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "hierro",
    "categoryName": "Hierro",
    "group": "Material en hierro",
    "image": "/images/catalogo/lamina-alfajor.jpg",
    "description": "El hierro es fundamental en los parques solares como componente estructural para soportar paneles solares y sistemas de montaje.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 42"
  },
  {
    "id": "cascos-de-seguridad-con-visera-ajustable",
    "name": "Cascos de seguridad con visera ajustable",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-cabeza",
    "categoryName": "Protección de la Cabeza",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/cascos-de-seguridad-con-visera-ajustable.jpg",
    "description": "Elementos de protección de la cabeza para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 44"
  },
  {
    "id": "cascos-con-barbuquejo-de-4-puntos",
    "name": "Cascos con barbuquejo de 4 puntos",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-cabeza",
    "categoryName": "Protección de la Cabeza",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/cascos-con-barbuquejo-de-4-puntos.jpg",
    "description": "Elementos de protección de la cabeza para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 44"
  },
  {
    "id": "cascos-dielectricos-para-trabajos-electricos",
    "name": "Cascos dieléctricos para trabajos eléctricos",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-cabeza",
    "categoryName": "Protección de la Cabeza",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/cascos-dielectricos-para-trabajos-electricos.jpg",
    "description": "Elementos de protección de la cabeza para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 44"
  },
  {
    "id": "gorras-de-seguridad-anti-impacto",
    "name": "Gorras de seguridad anti-impacto",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-cabeza",
    "categoryName": "Protección de la Cabeza",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/gorras-de-seguridad-anti-impacto.jpg",
    "description": "Elementos de protección de la cabeza para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 44"
  },
  {
    "id": "protectores-faciales-integrados-con-cascos",
    "name": "Protectores faciales integrados con cascos",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-cabeza",
    "categoryName": "Protección de la Cabeza",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/protectores-faciales-integrados-con-cascos.jpg",
    "description": "Elementos de protección de la cabeza para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 44"
  },
  {
    "id": "gafas-de-seguridad-con-filtro-uv",
    "name": "Gafas de seguridad con filtro UV",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-ocular",
    "categoryName": "Protección Ocular y Facial",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/gafas-de-seguridad-con-filtro-uv.jpg",
    "description": "Elementos de protección ocular y facial para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 45"
  },
  {
    "id": "careta-facial-de-policarbonato-ajustable",
    "name": "Careta facial de policarbonato ajustable",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-ocular",
    "categoryName": "Protección Ocular y Facial",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/careta-facial-de-policarbonato-ajustable.jpg",
    "description": "Elementos de protección ocular y facial para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 45"
  },
  {
    "id": "gafas-de-seguridad-transparentes",
    "name": "Gafas de seguridad transparentes",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-ocular",
    "categoryName": "Protección Ocular y Facial",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/gafas-de-seguridad-transparentes.jpg",
    "description": "Elementos de protección ocular y facial para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 45"
  },
  {
    "id": "tapones-reutilizables-con-cordon",
    "name": "Tapones reutilizables con cordón",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-auditiva",
    "categoryName": "Protección Auditiva",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/tapones-reutilizables-con-cordon.jpg",
    "description": "Elementos de protección auditiva para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 46"
  },
  {
    "id": "tapones-de-oido-de-espuma-desechables",
    "name": "Tapones de oído de espuma desechables",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-auditiva",
    "categoryName": "Protección Auditiva",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/tapones-de-oido-de-espuma-desechables.jpg",
    "description": "Elementos de protección auditiva para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 46"
  },
  {
    "id": "orejeras-ajustables-con-cancelacion-de-ruido",
    "name": "Orejeras ajustables con cancelación de ruido",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-auditiva",
    "categoryName": "Protección Auditiva",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/orejeras-ajustables-con-cancelacion-de-ruido.jpg",
    "description": "Elementos de protección auditiva para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 46"
  },
  {
    "id": "orejeras-dielectricas-para-trabajos-electricos",
    "name": "Orejeras dieléctricas para trabajos eléctricos",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-auditiva",
    "categoryName": "Protección Auditiva",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/orejeras-dielectricas-para-trabajos-electricos.jpg",
    "description": "Elementos de protección auditiva para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 46"
  },
  {
    "id": "protectores-auditivos-con-radio-incorporado",
    "name": "Protectores auditivos con radio incorporado",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-auditiva",
    "categoryName": "Protección Auditiva",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/protectores-auditivos-con-radio-incorporado.jpg",
    "description": "Elementos de protección auditiva para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 46"
  },
  {
    "id": "tapones-con-filtros-acusticos-para-reduccion-de-ruido",
    "name": "Tapones con filtros acústicos para reducción de ruido",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-auditiva",
    "categoryName": "Protección Auditiva",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/tapones-con-filtros-acusticos-para-reduccion-de-ruido.jpg",
    "description": "Elementos de protección auditiva para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 46"
  },
  {
    "id": "mascarillas-desechables-n95",
    "name": "Mascarillas desechables N95",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-respiratoria",
    "categoryName": "Protección Respiratoria",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/mascarillas-desechables-n95.jpg",
    "description": "Elementos de protección respiratoria para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 47"
  },
  {
    "id": "mascarillas-autofiltrantes-con-valvula-de-exhalacion",
    "name": "Mascarillas autofiltrantes con válvula de exhalación",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-respiratoria",
    "categoryName": "Protección Respiratoria",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/mascarillas-autofiltrantes-con-valvula-de-exhalacion.jpg",
    "description": "Elementos de protección respiratoria para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 47"
  },
  {
    "id": "respiradores-de-media-cara-con-filtros-intercambiables",
    "name": "Respiradores de media cara con filtros intercambiables",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-respiratoria",
    "categoryName": "Protección Respiratoria",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/respiradores-de-media-cara-con-filtros-intercambiables.jpg",
    "description": "Elementos de protección respiratoria para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 47"
  },
  {
    "id": "filtros-para-particulas-y-vapores-organicos",
    "name": "Filtros para partículas y vapores orgánicos",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-respiratoria",
    "categoryName": "Protección Respiratoria",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/filtros-para-particulas-y-vapores-organicos.jpg",
    "description": "Elementos de protección respiratoria para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 47"
  },
  {
    "id": "respiradores-de-cara-completa",
    "name": "Respiradores de cara completa",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-respiratoria",
    "categoryName": "Protección Respiratoria",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/respiradores-de-cara-completa.jpg",
    "description": "Elementos de protección respiratoria para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 47"
  },
  {
    "id": "lineas-de-vida-retractiles",
    "name": "Líneas de vida retráctiles",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-caidas",
    "categoryName": "Protección contra Caídas",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/lineas-de-vida-retractiles.jpg",
    "description": "Elementos de protección contra caídas para trabajo en alturas.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 48"
  },
  {
    "id": "arnes-de-seguridad-de-cuerpo-completo",
    "name": "Arnés de seguridad de cuerpo completo",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-caidas",
    "categoryName": "Protección contra Caídas",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/arnes-de-seguridad-de-cuerpo-completo.jpg",
    "description": "Elementos de protección contra caídas para trabajo en alturas.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 48"
  },
  {
    "id": "cinturones-de-posicionamiento",
    "name": "Cinturones de posicionamiento",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-caidas",
    "categoryName": "Protección contra Caídas",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/cinturones-de-posicionamiento.jpg",
    "description": "Elementos de protección contra caídas para trabajo en alturas.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 48"
  },
  {
    "id": "cuerdas-de-vida-con-ganchos-de-seguridad",
    "name": "Cuerdas de vida con ganchos de seguridad",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-caidas",
    "categoryName": "Protección contra Caídas",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/cuerdas-de-vida-con-ganchos-de-seguridad.jpg",
    "description": "Elementos de protección contra caídas para trabajo en alturas.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 48"
  },
  {
    "id": "mosquetones-de-seguridad-de-acero",
    "name": "Mosquetones de seguridad de acero",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-caidas",
    "categoryName": "Protección contra Caídas",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/mosquetones-de-seguridad-de-acero.jpg",
    "description": "Elementos de protección contra caídas para trabajo en alturas.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 48"
  },
  {
    "id": "guantes-anticorte",
    "name": "Guantes anticorte",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-manos",
    "categoryName": "Protección de Manos y Brazos",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/guantes-anticorte.jpg",
    "description": "Elementos de protección de manos y brazos para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 49"
  },
  {
    "id": "guantes-de-cuero-para-trabajos-pesados",
    "name": "Guantes de cuero para trabajos pesados",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-manos",
    "categoryName": "Protección de Manos y Brazos",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/guantes-de-cuero-para-trabajos-pesados.jpg",
    "description": "Elementos de protección de manos y brazos para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 49"
  },
  {
    "id": "guantes-de-nitrilo-desechables",
    "name": "Guantes de nitrilo desechables",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-manos",
    "categoryName": "Protección de Manos y Brazos",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/guantes-de-nitrilo-desechables.jpg",
    "description": "Elementos de protección de manos y brazos para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 49"
  },
  {
    "id": "guantes-aislantes-para-trabajos-electricos",
    "name": "Guantes aislantes para trabajos eléctricos",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-manos",
    "categoryName": "Protección de Manos y Brazos",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/guantes-aislantes-para-trabajos-electricos.jpg",
    "description": "Elementos de protección de manos y brazos para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 49"
  },
  {
    "id": "manguitos-protectores-resistentes-a-quimicos",
    "name": "Manguitos protectores resistentes a químicos",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-manos",
    "categoryName": "Protección de Manos y Brazos",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/manguitos-protectores-resistentes-a-quimicos.jpg",
    "description": "Elementos de protección de manos y brazos para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 49"
  },
  {
    "id": "overoles-ignifugos",
    "name": "Overoles ignífugos",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-cuerpo",
    "categoryName": "Protección para el Cuerpo",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/overoles-ignifugos.jpg",
    "description": "Elementos de protección para el cuerpo para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 50"
  },
  {
    "id": "chalecos-reflectivos-de-alta-visibilidad",
    "name": "Chalecos reflectivos de alta visibilidad",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-cuerpo",
    "categoryName": "Protección para el Cuerpo",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/chalecos-reflectivos-de-alta-visibilidad.jpg",
    "description": "Elementos de protección para el cuerpo para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 50"
  },
  {
    "id": "monos-desechables-para-proteccion-quimica",
    "name": "Monos desechables para protección química",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-cuerpo",
    "categoryName": "Protección para el Cuerpo",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/monos-desechables-para-proteccion-quimica.jpg",
    "description": "Elementos de protección para el cuerpo para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 50"
  },
  {
    "id": "delantales-de-pvc",
    "name": "Delantales de PVC",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-cuerpo",
    "categoryName": "Protección para el Cuerpo",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/delantales-de-pvc.jpg",
    "description": "Elementos de protección para el cuerpo para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 50"
  },
  {
    "id": "botas-de-seguridad-con-punta-de-acero",
    "name": "Botas de seguridad con punta de acero",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-piernas-pies",
    "categoryName": "Protección para Piernas y Pies",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/botas-de-seguridad-con-punta-de-acero.jpg",
    "description": "Elementos de protección para piernas y pies para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos",
      "Fotografía de mayor calidad"
    ],
    "source": "Brochure p. 51"
  },
  {
    "id": "polainas-para-soldador",
    "name": "Polainas para soldador",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-piernas-pies",
    "categoryName": "Protección para Piernas y Pies",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/polainas-para-soldador.jpg",
    "description": "Elementos de protección para piernas y pies para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 51"
  },
  {
    "id": "bota-de-caucho",
    "name": "Bota de caucho",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-piernas-pies",
    "categoryName": "Protección para Piernas y Pies",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/bota-de-caucho.jpg",
    "description": "Elementos de protección para piernas y pies para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 51"
  },
  {
    "id": "botas-dielectricas",
    "name": "Botas dieléctricas",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "proteccion-piernas-pies",
    "categoryName": "Protección para Piernas y Pies",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/botas-dielectricas.jpg",
    "description": "Elementos de protección para piernas y pies para dotación industrial y seguridad.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 51"
  },
  {
    "id": "botiquin",
    "name": "Botiquín",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "emergencia",
    "categoryName": "Equipos de Emergencia y Primeros Auxilios",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/botiquin.jpg",
    "description": "Estos productos son esenciales para brindar atención inmediata en caso de accidentes, garantizando la seguridad de los trabajadores y reduciendo el riesgo de complicaciones en situaciones críticas.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 52"
  },
  {
    "id": "camilla-de-emergencia",
    "name": "Camilla de emergencia",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "emergencia",
    "categoryName": "Equipos de Emergencia y Primeros Auxilios",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/camilla-de-emergencia.jpg",
    "description": "Estos productos son esenciales para brindar atención inmediata en caso de accidentes, garantizando la seguridad de los trabajadores y reduciendo el riesgo de complicaciones en situaciones críticas.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 52"
  },
  {
    "id": "guantes-dielectricos",
    "name": "Guantes dieléctricos",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "dielectrica",
    "categoryName": "Protección Dieléctrica",
    "group": "Suministros dieléctricos",
    "image": "/images/catalogo/guantes-dielectricos.jpg",
    "description": "La protección dieléctrica es esencial para la seguridad eléctrica, ofrece aislamiento efectivo contra corrientes eléctricas. Con propiedades no conductoras, protege de descargas y cortocircuitos, garantizando entornos eléctricos seguros.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 54"
  },
  {
    "id": "pertiga-aislante",
    "name": "Pértiga aislante",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "dielectrica",
    "categoryName": "Protección Dieléctrica",
    "group": "Suministros dieléctricos",
    "image": "/images/catalogo/pertiga-aislante.jpg",
    "description": "La protección dieléctrica es esencial para la seguridad eléctrica, ofrece aislamiento efectivo contra corrientes eléctricas. Con propiedades no conductoras, protege de descargas y cortocircuitos, garantizando entornos eléctricos seguros.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 54"
  },
  {
    "id": "maleta-electro-socorro",
    "name": "Maleta electro socorro",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "dielectrica",
    "categoryName": "Protección Dieléctrica",
    "group": "Suministros dieléctricos",
    "image": "/images/catalogo/maleta-electro-socorro.jpg",
    "description": "La protección dieléctrica es esencial para la seguridad eléctrica, ofrece aislamiento efectivo contra corrientes eléctricas. Con propiedades no conductoras, protege de descargas y cortocircuitos, garantizando entornos eléctricos seguros.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 54"
  },
  {
    "id": "balaclava-de-proteccion-contra-arco-electrico",
    "name": "Balaclava de protección contra arco eléctrico",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "dielectrica",
    "categoryName": "Protección Dieléctrica",
    "group": "Suministros dieléctricos",
    "image": "/images/catalogo/balaclava-de-proteccion-contra-arco-electrico.jpg",
    "description": "La protección dieléctrica es esencial para la seguridad eléctrica, ofrece aislamiento efectivo contra corrientes eléctricas. Con propiedades no conductoras, protege de descargas y cortocircuitos, garantizando entornos eléctricos seguros.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 54"
  },
  {
    "id": "tapete-dielectrico",
    "name": "Tapete dieléctrico",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "dielectrica",
    "categoryName": "Protección Dieléctrica",
    "group": "Suministros dieléctricos",
    "image": "/images/catalogo/tapete-dielectrico.jpg",
    "description": "La protección dieléctrica es esencial para la seguridad eléctrica, ofrece aislamiento efectivo contra corrientes eléctricas. Con propiedades no conductoras, protege de descargas y cortocircuitos, garantizando entornos eléctricos seguros.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 54"
  },
  {
    "id": "chaqueta-arco-electrico",
    "name": "Chaqueta arco eléctrico",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "dielectrica",
    "categoryName": "Protección Dieléctrica",
    "group": "Suministros dieléctricos",
    "image": "/images/catalogo/chaqueta-arco-electrico.jpg",
    "description": "La protección dieléctrica es esencial para la seguridad eléctrica, ofrece aislamiento efectivo contra corrientes eléctricas. Con propiedades no conductoras, protege de descargas y cortocircuitos, garantizando entornos eléctricos seguros.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 54"
  },
  {
    "id": "inmovilizadores-de-extremidades",
    "name": "Inmovilizadores de extremidades",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "emergencia",
    "categoryName": "Equipos de Emergencia y Primeros Auxilios",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/inmovilizadores-de-extremidades.jpg",
    "description": "Estos productos son esenciales para brindar atención inmediata en caso de accidentes, garantizando la seguridad de los trabajadores y reduciendo el riesgo de complicaciones en situaciones críticas.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 52"
  },
  {
    "id": "cuello-ortopedico",
    "name": "Cuello ortopédico",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "emergencia",
    "categoryName": "Equipos de Emergencia y Primeros Auxilios",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/cuello-ortopedico.jpg",
    "description": "Estos productos son esenciales para brindar atención inmediata en caso de accidentes, garantizando la seguridad de los trabajadores y reduciendo el riesgo de complicaciones en situaciones críticas.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 52"
  },
  {
    "id": "cuello-para-camilla",
    "name": "Cuello para camilla",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "emergencia",
    "categoryName": "Equipos de Emergencia y Primeros Auxilios",
    "group": "Dotación industrial y seguridad",
    "image": "/images/catalogo/cuello-para-camilla.jpg",
    "description": "Estos productos son esenciales para brindar atención inmediata en caso de accidentes, garantizando la seguridad de los trabajadores y reduciendo el riesgo de complicaciones en situaciones críticas.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 52"
  },
  {
    "id": "caja-de-herramientas-metalica-roja",
    "name": "Caja de herramientas metálica (roja)",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "cajas-herramientas",
    "categoryName": "Cajas de Herramientas",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/caja-de-herramientas-metalica-roja.jpg",
    "description": "Las cajas de herramientas permiten organizar y transportar herramientas de forma segura y práctica, facilitando el acceso rápido en el trabajo.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 34"
  },
  {
    "id": "caja-de-herramientas-metalica-amarilla",
    "name": "Caja de herramientas metálica (amarilla)",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "cajas-herramientas",
    "categoryName": "Cajas de Herramientas",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/caja-de-herramientas-metalica-amarilla.jpg",
    "description": "Las cajas de herramientas permiten organizar y transportar herramientas de forma segura y práctica, facilitando el acceso rápido en el trabajo.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 34"
  },
  {
    "id": "caja-de-herramientas-plastica-negra",
    "name": "Caja de herramientas plástica (negra)",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "cajas-herramientas",
    "categoryName": "Cajas de Herramientas",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/caja-de-herramientas-plastica-negra.jpg",
    "description": "Las cajas de herramientas permiten organizar y transportar herramientas de forma segura y práctica, facilitando el acceso rápido en el trabajo.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 34"
  },
  {
    "id": "caja-de-herramientas-plastica-surtek",
    "name": "Caja de herramientas plástica (Surtek)",
    "reference": null,
    "price": null,
    "brand": null,
    "category": "cajas-herramientas",
    "categoryName": "Cajas de Herramientas",
    "group": "Herramienta para trabajo eléctrico",
    "image": "/images/catalogo/caja-de-herramientas-plastica-surtek.jpg",
    "description": "Las cajas de herramientas permiten organizar y transportar herramientas de forma segura y práctica, facilitando el acceso rápido en el trabajo.",
    "specs": {},
    "applications": [],
    "documents": [],
    "pending": [
      "Referencia comercial",
      "Características técnicas",
      "Aplicaciones",
      "Ficha técnica / documentos"
    ],
    "source": "Brochure p. 34"
  }
];

export const CATEGORIES: Category[] = [
  {
    "id": "todos",
    "name": "Todos los Productos",
    "group": "all"
  },
  {
    "id": "cables",
    "name": "Cables",
    "group": "Suministros eléctricos"
  },
  {
    "id": "tuberias",
    "name": "Tuberías",
    "group": "Suministros eléctricos"
  },
  {
    "id": "accesorios-tuberia",
    "name": "Accesorios para Conduit y Tubería",
    "group": "Suministros eléctricos"
  },
  {
    "id": "cajas",
    "name": "Cajas Metálicas y Plásticas",
    "group": "Suministros eléctricos"
  },
  {
    "id": "puesta-a-tierra",
    "name": "Sistema Puesta a Tierra",
    "group": "Suministros eléctricos"
  },
  {
    "id": "corazas",
    "name": "Corazas y Conectores",
    "group": "Suministros eléctricos"
  },
  {
    "id": "tornilleria",
    "name": "Tornillería",
    "group": "Suministros eléctricos"
  },
  {
    "id": "tableros",
    "name": "Tableros, Tacos y Cajas",
    "group": "Suministros eléctricos"
  },
  {
    "id": "accesorios-electricos",
    "name": "Accesorios Eléctricos",
    "group": "Suministros eléctricos"
  },
  {
    "id": "iluminacion",
    "name": "Iluminación",
    "group": "Suministros eléctricos"
  },
  {
    "id": "herramientas-tension",
    "name": "Herramientas de Tensión Eléctrica",
    "group": "Suministros eléctricos"
  },
  {
    "id": "marcacion",
    "name": "Marcación",
    "group": "Suministros eléctricos"
  },
  {
    "id": "senalizacion",
    "name": "Señalización",
    "group": "Señalización"
  },
  {
    "id": "plantas-generadores",
    "name": "Plantas, Generadores Eléctricos y Motobombas",
    "group": "Generadores de energía"
  },
  {
    "id": "herramientas-electricas",
    "name": "Herramientas Eléctricas",
    "group": "Herramienta para trabajo eléctrico"
  },
  {
    "id": "herramientas-manuales",
    "name": "Herramientas Manuales",
    "group": "Herramienta para trabajo eléctrico"
  },
  {
    "id": "cajas-herramientas",
    "name": "Cajas de Herramientas",
    "group": "Herramienta para trabajo eléctrico"
  },
  {
    "id": "herramientas-medicion",
    "name": "Herramientas de Medición",
    "group": "Herramienta para trabajo eléctrico"
  },
  {
    "id": "jardineria",
    "name": "Mantenimiento y Jardinería",
    "group": "Herramientas de mantenimiento y jardinería"
  },
  {
    "id": "abrasivos",
    "name": "Abrasivos y Consumibles",
    "group": "Herramientas de mantenimiento y jardinería"
  },
  {
    "id": "hierro",
    "name": "Hierro",
    "group": "Material en hierro"
  },
  {
    "id": "proteccion-cabeza",
    "name": "Protección de la Cabeza",
    "group": "Dotación industrial y seguridad"
  },
  {
    "id": "proteccion-ocular",
    "name": "Protección Ocular y Facial",
    "group": "Dotación industrial y seguridad"
  },
  {
    "id": "proteccion-auditiva",
    "name": "Protección Auditiva",
    "group": "Dotación industrial y seguridad"
  },
  {
    "id": "proteccion-respiratoria",
    "name": "Protección Respiratoria",
    "group": "Dotación industrial y seguridad"
  },
  {
    "id": "proteccion-caidas",
    "name": "Protección contra Caídas",
    "group": "Dotación industrial y seguridad"
  },
  {
    "id": "proteccion-manos",
    "name": "Protección de Manos y Brazos",
    "group": "Dotación industrial y seguridad"
  },
  {
    "id": "proteccion-cuerpo",
    "name": "Protección para el Cuerpo",
    "group": "Dotación industrial y seguridad"
  },
  {
    "id": "proteccion-piernas-pies",
    "name": "Protección para Piernas y Pies",
    "group": "Dotación industrial y seguridad"
  },
  {
    "id": "emergencia",
    "name": "Equipos de Emergencia y Primeros Auxilios",
    "group": "Dotación industrial y seguridad"
  },
  {
    "id": "dielectrica",
    "name": "Protección Dieléctrica",
    "group": "Suministros dieléctricos"
  }
];

export const GROUPS: string[] = ["Suministros eléctricos", "Señalización", "Generadores de energía", "Herramienta para trabajo eléctrico", "Herramientas de mantenimiento y jardinería", "Material en hierro", "Dotación industrial y seguridad", "Suministros dieléctricos"];
