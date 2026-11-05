# Catálogo de productos — datos pendientes de validación

Fuente principal: **BROCHURE FINAL (portafolio de productos 2024-2025)**. El brochure trae nombre, categoría y fotografía de cada producto, pero **no incluye referencias comerciales, fichas técnicas ni aplicaciones por producto**. Esos datos no se inventaron: quedan marcados aquí para validar.

- Productos cargados: **219**
- Con referencia comercial: **16** (las de los productos de importación que ya estaban en la página)
- Con características técnicas: **132**
- Con documentos (fichas técnicas): **0**

## Cómo se completó la información

- **Brochure:** nombre, categoría, fotografía y la descripción general de cada sección.
- **Otros catálogos de JIMACO** (Catálogo de Ferretería y Soluciones para la Energía y la Infraestructura): cuando un producto del brochure coincide con uno de esos catálogos, se tomó su descripción y características. En el campo `source` de cada producto (`src/data/products.ts`) queda registrado de dónde salió. Si prefieres que el catálogo use solo el brochure, se pueden quitar.
- **Productos de importación ya existentes en la página** (ponchadoras, kits MC4, caja de inspección, placa de protección): se conservaron con sus referencias (PJ-xxxxx) y se les quitó el precio y el stock.
- **Varillas Copperweld** (página anterior) y **Varilla cooper** (brochure) son el mismo producto: quedó un solo registro.

## Decisiones que conviene revisar

- El brochure llama **«Pinza»** a la pinza de la soldadura exotérmica; en la página aparece como *Pinza para soldadura exotérmica* (así figura en el catálogo de Soluciones).
- Dos productos del brochure se llaman **«Lámpara LED»**; se distinguieron como *Lámpara LED (con panel solar)* y *Lámpara LED*.
- En el brochure, las **cajas de herramientas** (4 fotos bajo 2 etiquetas) y los **equipos de emergencia** (inmovilizadores, cuello ortopédico, cuello para camilla) comparten etiqueta; se cargaron como productos separados, uno por fotografía.
- La imagen de **Tubería DB** trae una marca de texto («Tubería») del brochure.

## Fotografías que requieren mejor calidad (29)

Imágenes del brochure con menos de 190 px de lado. Se usaron tal cual (no se reemplazaron por imágenes genéricas):

- Accesorios para coraza — Corazas y Conectores
- Señalización peligro excavación profunda — Señalización
- Taladro — Herramientas Eléctricas
- Esmeril de banco — Herramientas Eléctricas
- Martillo percutor — Herramientas Eléctricas
- Llave de impacto — Herramientas Eléctricas
- Pulidora — Herramientas Eléctricas
- Pistola de calor — Herramientas Eléctricas
- Apisonador canguro — Herramientas Eléctricas
- Guadañadora profesional — Herramientas Eléctricas
- Martillo de goma — Herramientas Manuales
- Cizalla manual — Herramientas Manuales
- Ratchet — Herramientas Manuales
- Guadañadora — Mantenimiento y Jardinería
- Yoyo — Mantenimiento y Jardinería
- Careta para guadañar — Mantenimiento y Jardinería
- Tijeras podadoras — Mantenimiento y Jardinería
- Rastrillo — Mantenimiento y Jardinería
- Motosierra — Mantenimiento y Jardinería
- Fumigadora — Mantenimiento y Jardinería
- Hoja de segueta — Abrasivos y Consumibles
- Lija — Abrasivos y Consumibles
- Protectores faciales integrados con cascos — Protección de la Cabeza
- Tapones de oído de espuma desechables — Protección Auditiva
- Mascarillas desechables N95 — Protección Respiratoria
- Mascarillas autofiltrantes con válvula de exhalación — Protección Respiratoria
- Monos desechables para protección química — Protección para el Cuerpo
- Delantales de PVC — Protección para el Cuerpo
- Botas de seguridad con punta de acero — Protección para Piernas y Pies

## Pendientes por producto

| Categoría | Producto | Referencia | Características técnicas | Aplicaciones | Ficha técnica |
|---|---|---|---|---|---|
| Cables | Cable cobre aislado THHN | Pendiente | Pendiente | Pendiente | Pendiente |
| Cables | Cable de cobre desnudo | Pendiente | ✅ | Pendiente | Pendiente |
| Cables | Cable XLPE | Pendiente | Pendiente | Pendiente | Pendiente |
| Cables | Cable fotovoltaico | Pendiente | ✅ | Pendiente | Pendiente |
| Tuberías | Tubería DB | Pendiente | ✅ | ✅ | Pendiente |
| Tuberías | Tubería TDP | Pendiente | ✅ | ✅ | Pendiente |
| Tuberías | Tubería EMT | Pendiente | ✅ | ✅ | Pendiente |
| Tuberías | Tubería Conduit | Pendiente | ✅ | ✅ | Pendiente |
| Tuberías | Tubería IMC | Pendiente | ✅ | ✅ | Pendiente |
| Accesorios para Conduit y Tubería | Terminal campana | Pendiente | Pendiente | Pendiente | Pendiente |
| Accesorios para Conduit y Tubería | Curva 45° | Pendiente | Pendiente | Pendiente | Pendiente |
| Accesorios para Conduit y Tubería | Curva 90° | Pendiente | Pendiente | Pendiente | Pendiente |
| Accesorios para Conduit y Tubería | Terminal EMT | Pendiente | ✅ | ✅ | Pendiente |
| Accesorios para Conduit y Tubería | Conduleta LB | Pendiente | ✅ | Pendiente | Pendiente |
| Accesorios para Conduit y Tubería | Conduleta LR | Pendiente | ✅ | Pendiente | Pendiente |
| Accesorios para Conduit y Tubería | Soldaduras | Pendiente | ✅ | ✅ | Pendiente |
| Cajas Metálicas y Plásticas | Cajas metálicas | Pendiente | ✅ | ✅ | Pendiente |
| Cajas Metálicas y Plásticas | Caja sencilla rectangular | Pendiente | ✅ | ✅ | Pendiente |
| Cajas Metálicas y Plásticas | Caja plástica | Pendiente | ✅ | Pendiente | Pendiente |
| Cajas Metálicas y Plásticas | Caja doble | Pendiente | ✅ | Pendiente | Pendiente |
| Cajas Metálicas y Plásticas | Caja octagonal | Pendiente | ✅ | ✅ | Pendiente |
| Sistema Puesta a Tierra | Varilla cooper | Pendiente | ✅ | ✅ | Pendiente |
| Sistema Puesta a Tierra | Conector varilla | Pendiente | ✅ | ✅ | Pendiente |
| Sistema Puesta a Tierra | Moldes grafito | Pendiente | ✅ | Pendiente | Pendiente |
| Sistema Puesta a Tierra | Chispero | Pendiente | ✅ | Pendiente | Pendiente |
| Sistema Puesta a Tierra | Soldadura exotérmica | Pendiente | ✅ | ✅ | Pendiente |
| Sistema Puesta a Tierra | Pinza para soldadura exotérmica | Pendiente | ✅ | Pendiente | Pendiente |
| Sistema Puesta a Tierra | Caja puesta a tierra (material: cemento) | Pendiente | ✅ | Pendiente | Pendiente |
| Sistema Puesta a Tierra | Caja puesta a tierra (material: plástico) | Pendiente | ✅ | Pendiente | Pendiente |
| Corazas y Conectores | Coraza Interflex | Pendiente | ✅ | ✅ | Pendiente |
| Corazas y Conectores | Coraza Isynylon | Pendiente | Pendiente | Pendiente | Pendiente |
| Corazas y Conectores | Accesorios para coraza | Pendiente | ✅ | Pendiente | Pendiente |
| Tornillería | Varilla roscada | Pendiente | ✅ | Pendiente | Pendiente |
| Tornillería | Tuerca | Pendiente | ✅ | Pendiente | Pendiente |
| Tornillería | Wasa | Pendiente | ✅ | Pendiente | Pendiente |
| Tornillería | Chazo metálico RL | Pendiente | ✅ | Pendiente | Pendiente |
| Tornillería | Arandelas | Pendiente | ✅ | Pendiente | Pendiente |
| Tornillería | Chazo plástico | Pendiente | ✅ | Pendiente | Pendiente |
| Tornillería | Espárragos | Pendiente | ✅ | Pendiente | Pendiente |
| Tornillería | Perro galvanizado | Pendiente | ✅ | Pendiente | Pendiente |
| Tornillería | Chazo expansivo | Pendiente | ✅ | Pendiente | Pendiente |
| Tornillería | Guaya alma de acero | Pendiente | ✅ | Pendiente | Pendiente |
| Tableros, Tacos y Cajas | Tablero de circuitos | Pendiente | ✅ | ✅ | Pendiente |
| Tableros, Tacos y Cajas | Tablero bifásico | Pendiente | ✅ | Pendiente | Pendiente |
| Tableros, Tacos y Cajas | Tablero trifásico | Pendiente | ✅ | ✅ | Pendiente |
| Tableros, Tacos y Cajas | Caja de circuitos | Pendiente | ✅ | Pendiente | Pendiente |
| Tableros, Tacos y Cajas | Taco riel | Pendiente | ✅ | ✅ | Pendiente |
| Tableros, Tacos y Cajas | Riel chanel | Pendiente | ✅ | Pendiente | Pendiente |
| Accesorios Eléctricos | Terminal de ojo | Pendiente | ✅ | Pendiente | Pendiente |
| Accesorios Eléctricos | Clavija | Pendiente | ✅ | ✅ | Pendiente |
| Accesorios Eléctricos | Borna | Pendiente | ✅ | Pendiente | Pendiente |
| Accesorios Eléctricos | Cajas | Pendiente | Pendiente | Pendiente | Pendiente |
| Accesorios Eléctricos | Terminal cable aislado | Pendiente | Pendiente | Pendiente | Pendiente |
| Accesorios Eléctricos | Gel lubricante halado de cables | Pendiente | Pendiente | Pendiente | Pendiente |
| Iluminación | Reflector solar | Pendiente | ✅ | ✅ | Pendiente |
| Iluminación | Bombillo LED con panel solar | Pendiente | ✅ | ✅ | Pendiente |
| Iluminación | Bombillo LED | Pendiente | ✅ | Pendiente | Pendiente |
| Iluminación | Tubo LED | Pendiente | ✅ | ✅ | Pendiente |
| Iluminación | Lámpara LED (con panel solar) | Pendiente | ✅ | ✅ | Pendiente |
| Iluminación | Lámpara LED | Pendiente | ✅ | Pendiente | Pendiente |
| Herramientas de Tensión Eléctrica | Telurómetro | Pendiente | ✅ | ✅ | Pendiente |
| Herramientas de Tensión Eléctrica | Dinamómetro | Pendiente | Pendiente | Pendiente | Pendiente |
| Herramientas de Tensión Eléctrica | Pinza voltiamperimétrica | Pendiente | ✅ | ✅ | Pendiente |
| Herramientas de Tensión Eléctrica | Medidor de espesor | Pendiente | ✅ | ✅ | Pendiente |
| Herramientas de Tensión Eléctrica | Medidor de resistencia | Pendiente | ✅ | ✅ | Pendiente |
| Herramientas de Tensión Eléctrica | Torquímetro medición de ángulo | Pendiente | ✅ | ✅ | Pendiente |
| Marcación | Marquilla termoencogible | Pendiente | ✅ | Pendiente | Pendiente |
| Marcación | Portamarcador | Pendiente | ✅ | Pendiente | Pendiente |
| Marcación | Impresora Zebra | Pendiente | ✅ | Pendiente | Pendiente |
| Marcación | Amarres plásticos | Pendiente | ✅ | Pendiente | Pendiente |
| Marcación | Funda termoencogible | Pendiente | ✅ | ✅ | Pendiente |
| Marcación | Cinta aislante | Pendiente | ✅ | Pendiente | Pendiente |
| Señalización | Advertencia fuente de potencia fotovoltaica | Pendiente | Pendiente | Pendiente | Pendiente |
| Señalización | Centro de transformación | Pendiente | Pendiente | Pendiente | Pendiente |
| Señalización | Advertencia riesgo de choque eléctrico | Pendiente | Pendiente | Pendiente | Pendiente |
| Señalización | Límite de aproximación restringida | Pendiente | Pendiente | Pendiente | Pendiente |
| Señalización | Señalización riesgo eléctrico (peligro para el medio ambiente) | Pendiente | Pendiente | Pendiente | Pendiente |
| Señalización | Letrero 5 reglas de oro | Pendiente | Pendiente | Pendiente | Pendiente |
| Señalización | Lavaojos de emergencia | Pendiente | Pendiente | Pendiente | Pendiente |
| Señalización | Señalización ruta de evacuación | Pendiente | ✅ | Pendiente | Pendiente |
| Señalización | Señalización aviso de prohibido el ingreso a personal no autorizado | Pendiente | ✅ | Pendiente | Pendiente |
| Señalización | Señalización peligro excavación profunda | Pendiente | ✅ | Pendiente | Pendiente |
| Señalización | Señalización prohibido encender fuego | Pendiente | ✅ | Pendiente | Pendiente |
| Señalización | Señalización riesgo eléctrico | Pendiente | ✅ | Pendiente | Pendiente |
| Señalización | Señalización aviso de uso obligatorio EPP | Pendiente | ✅ | Pendiente | Pendiente |
| Señalización | Señalización velocidad permitida | Pendiente | ✅ | Pendiente | Pendiente |
| Señalización | Señalización punto de hidratación | Pendiente | ✅ | Pendiente | Pendiente |
| Señalización | Cinta peligro amarilla | Pendiente | ✅ | Pendiente | Pendiente |
| Señalización | Señalización riesgo de atrapamiento | Pendiente | ✅ | Pendiente | Pendiente |
| Señalización | Cinta de alta tensión | Pendiente | ✅ | Pendiente | Pendiente |
| Señalización | Tarjeta etiquetado y bloqueo amarilla | Pendiente | ✅ | Pendiente | Pendiente |
| Señalización | Cinta peligro roja | Pendiente | ✅ | Pendiente | Pendiente |
| Señalización | Señalización material inflamable | Pendiente | ✅ | Pendiente | Pendiente |
| Plantas, Generadores Eléctricos y Motobombas | Planta gasolina Maquitec | Pendiente | ✅ | Pendiente | Pendiente |
| Plantas, Generadores Eléctricos y Motobombas | Generador Hyundai | Pendiente | ✅ | Pendiente | Pendiente |
| Plantas, Generadores Eléctricos y Motobombas | Generador portátil gasolina Elite | Pendiente | ✅ | Pendiente | Pendiente |
| Plantas, Generadores Eléctricos y Motobombas | Bomba de agua sumergible | Pendiente | ✅ | Pendiente | Pendiente |
| Plantas, Generadores Eléctricos y Motobombas | Motobomba de succión | Pendiente | ✅ | Pendiente | Pendiente |
| Plantas, Generadores Eléctricos y Motobombas | Bomba autocebante | Pendiente | ✅ | Pendiente | Pendiente |
| Plantas, Generadores Eléctricos y Motobombas | Planta eléctrica Yorking | Pendiente | ✅ | Pendiente | Pendiente |
| Plantas, Generadores Eléctricos y Motobombas | Planta diésel cabinada | Pendiente | ✅ | Pendiente | Pendiente |
| Plantas, Generadores Eléctricos y Motobombas | Planta eléctrica diésel Kama | Pendiente | ✅ | Pendiente | Pendiente |
| Herramientas Eléctricas | Taladro | Pendiente | ✅ | Pendiente | Pendiente |
| Herramientas Eléctricas | Esmeril de banco | Pendiente | ✅ | Pendiente | Pendiente |
| Herramientas Eléctricas | Sierra circular | Pendiente | ✅ | Pendiente | Pendiente |
| Herramientas Eléctricas | Martillo percutor | Pendiente | ✅ | Pendiente | Pendiente |
| Herramientas Eléctricas | Llave de impacto | Pendiente | ✅ | Pendiente | Pendiente |
| Herramientas Eléctricas | Pulidora | Pendiente | ✅ | Pendiente | Pendiente |
| Herramientas Eléctricas | Pistola de calor | Pendiente | ✅ | Pendiente | Pendiente |
| Herramientas Eléctricas | Apisonador canguro | Pendiente | ✅ | Pendiente | Pendiente |
| Herramientas Eléctricas | Guadañadora profesional | Pendiente | ✅ | Pendiente | Pendiente |
| Herramientas Manuales | Hombresolo visegrip | Pendiente | ✅ | Pendiente | Pendiente |
| Herramientas Manuales | Pinza de punta | Pendiente | ✅ | Pendiente | Pendiente |
| Herramientas Manuales | Segueta | Pendiente | ✅ | Pendiente | Pendiente |
| Herramientas Manuales | Alicate electricista | Pendiente | ✅ | Pendiente | Pendiente |
| Herramientas Manuales | Destornillador | Pendiente | ✅ | Pendiente | Pendiente |
| Herramientas Manuales | Martillo de goma | Pendiente | ✅ | Pendiente | Pendiente |
| Herramientas Manuales | Torquímetro | Pendiente | ✅ | Pendiente | Pendiente |
| Herramientas Manuales | Cizalla manual | Pendiente | ✅ | Pendiente | Pendiente |
| Herramientas Manuales | Llaves mixtas | Pendiente | ✅ | Pendiente | Pendiente |
| Herramientas Manuales | Copa de impacto | Pendiente | ✅ | Pendiente | Pendiente |
| Herramientas Manuales | Ratchet | Pendiente | ✅ | Pendiente | Pendiente |
| Herramientas Manuales | Juego de copas | Pendiente | ✅ | Pendiente | Pendiente |
| Herramientas de Medición | Centro punto | Pendiente | ✅ | ✅ | Pendiente |
| Herramientas de Medición | Cinta métrica | Pendiente | ✅ | ✅ | Pendiente |
| Herramientas de Medición | Nivel de burbuja | Pendiente | ✅ | ✅ | Pendiente |
| Herramientas de Medición | Decámetro | Pendiente | ✅ | ✅ | Pendiente |
| Mantenimiento y Jardinería | Guadañadora | Pendiente | Pendiente | ✅ | Pendiente |
| Mantenimiento y Jardinería | Yoyo | Pendiente | ✅ | ✅ | Pendiente |
| Mantenimiento y Jardinería | Careta para guadañar | Pendiente | ✅ | ✅ | Pendiente |
| Mantenimiento y Jardinería | Tijeras podadoras | Pendiente | Pendiente | ✅ | Pendiente |
| Mantenimiento y Jardinería | Rastrillo | Pendiente | Pendiente | ✅ | Pendiente |
| Mantenimiento y Jardinería | Motosierra | Pendiente | Pendiente | ✅ | Pendiente |
| Mantenimiento y Jardinería | Fumigadora | Pendiente | Pendiente | ✅ | Pendiente |
| Abrasivos y Consumibles | Broca muro | Pendiente | Pendiente | ✅ | Pendiente |
| Abrasivos y Consumibles | Copa grata | Pendiente | Pendiente | Pendiente | Pendiente |
| Abrasivos y Consumibles | Hoja de segueta | Pendiente | Pendiente | Pendiente | Pendiente |
| Abrasivos y Consumibles | Lija | Pendiente | Pendiente | Pendiente | Pendiente |
| Abrasivos y Consumibles | Brocas HSS | Pendiente | ✅ | Pendiente | Pendiente |
| Abrasivos y Consumibles | Brocas tungsteno | Pendiente | ✅ | Pendiente | Pendiente |
| Abrasivos y Consumibles | Lija tela | Pendiente | Pendiente | Pendiente | Pendiente |
| Abrasivos y Consumibles | Lima basta | Pendiente | Pendiente | Pendiente | Pendiente |
| Abrasivos y Consumibles | Disco de corte | Pendiente | Pendiente | Pendiente | Pendiente |
| Abrasivos y Consumibles | Piedra esmeril | Pendiente | Pendiente | Pendiente | Pendiente |
| Hierro | Varillas | Pendiente | Pendiente | Pendiente | Pendiente |
| Hierro | Perfiles | Pendiente | Pendiente | Pendiente | Pendiente |
| Hierro | Tubo cerramiento | Pendiente | Pendiente | Pendiente | Pendiente |
| Hierro | Ángulos | Pendiente | Pendiente | Pendiente | Pendiente |
| Hierro | Lámina alfajor | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección de la Cabeza | Cascos de seguridad con visera ajustable | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección de la Cabeza | Cascos con barbuquejo de 4 puntos | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección de la Cabeza | Cascos dieléctricos para trabajos eléctricos | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección de la Cabeza | Gorras de seguridad anti-impacto | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección de la Cabeza | Protectores faciales integrados con cascos | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección Ocular y Facial | Gafas de seguridad con filtro UV | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección Ocular y Facial | Careta facial de policarbonato ajustable | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección Ocular y Facial | Gafas de seguridad transparentes | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección Auditiva | Tapones reutilizables con cordón | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección Auditiva | Tapones de oído de espuma desechables | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección Auditiva | Orejeras ajustables con cancelación de ruido | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección Auditiva | Orejeras dieléctricas para trabajos eléctricos | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección Auditiva | Protectores auditivos con radio incorporado | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección Auditiva | Tapones con filtros acústicos para reducción de ruido | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección Respiratoria | Mascarillas desechables N95 | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección Respiratoria | Mascarillas autofiltrantes con válvula de exhalación | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección Respiratoria | Respiradores de media cara con filtros intercambiables | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección Respiratoria | Filtros para partículas y vapores orgánicos | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección Respiratoria | Respiradores de cara completa | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección contra Caídas | Líneas de vida retráctiles | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección contra Caídas | Arnés de seguridad de cuerpo completo | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección contra Caídas | Cinturones de posicionamiento | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección contra Caídas | Cuerdas de vida con ganchos de seguridad | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección contra Caídas | Mosquetones de seguridad de acero | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección de Manos y Brazos | Guantes anticorte | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección de Manos y Brazos | Guantes de cuero para trabajos pesados | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección de Manos y Brazos | Guantes de nitrilo desechables | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección de Manos y Brazos | Guantes aislantes para trabajos eléctricos | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección de Manos y Brazos | Manguitos protectores resistentes a químicos | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección para el Cuerpo | Overoles ignífugos | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección para el Cuerpo | Chalecos reflectivos de alta visibilidad | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección para el Cuerpo | Monos desechables para protección química | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección para el Cuerpo | Delantales de PVC | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección para Piernas y Pies | Botas de seguridad con punta de acero | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección para Piernas y Pies | Polainas para soldador | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección para Piernas y Pies | Bota de caucho | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección para Piernas y Pies | Botas dieléctricas | Pendiente | Pendiente | Pendiente | Pendiente |
| Equipos de Emergencia y Primeros Auxilios | Botiquín | Pendiente | Pendiente | Pendiente | Pendiente |
| Equipos de Emergencia y Primeros Auxilios | Camilla de emergencia | Pendiente | Pendiente | Pendiente | Pendiente |
| Equipos de Emergencia y Primeros Auxilios | Inmovilizadores de extremidades | Pendiente | Pendiente | Pendiente | Pendiente |
| Equipos de Emergencia y Primeros Auxilios | Cuello ortopédico | Pendiente | Pendiente | Pendiente | Pendiente |
| Equipos de Emergencia y Primeros Auxilios | Cuello para camilla | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección Dieléctrica | Guantes dieléctricos | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección Dieléctrica | Pértiga aislante | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección Dieléctrica | Maleta electro socorro | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección Dieléctrica | Balaclava de protección contra arco eléctrico | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección Dieléctrica | Tapete dieléctrico | Pendiente | Pendiente | Pendiente | Pendiente |
| Protección Dieléctrica | Chaqueta arco eléctrico | Pendiente | Pendiente | Pendiente | Pendiente |
| Cajas de Herramientas | Caja de herramientas metálica (roja) | Pendiente | Pendiente | Pendiente | Pendiente |
| Cajas de Herramientas | Caja de herramientas metálica (amarilla) | Pendiente | Pendiente | Pendiente | Pendiente |
| Cajas de Herramientas | Caja de herramientas plástica (negra) | Pendiente | Pendiente | Pendiente | Pendiente |
| Cajas de Herramientas | Caja de herramientas plástica (Surtek) | Pendiente | Pendiente | Pendiente | Pendiente |
| Canalización y Señalización de Obra | Caja de Inspección en Polipropileno de Alta Densidad | Pendiente | ✅ | Pendiente | Pendiente |
| Canalización y Señalización de Obra | Placa de Protección y Señalización JIMACO | Pendiente | ✅ | ✅ | Pendiente |
| Ponchadoras y Herramientas de Crimpado | Ponchadora Hidráulica 6-70 mm² 7 Ton TQK-70 | ✅ PJ-26554 | ✅ | Pendiente | Pendiente |
| Ponchadoras y Herramientas de Crimpado | Ponchadora Hidráulica 16-300 mm² 10 Ton TQK-300 | ✅ PJ-26556 | ✅ | Pendiente | Pendiente |
| Ponchadoras y Herramientas de Crimpado | Ponchadora Hidráulica 10-120 mm² 8 Ton TQK-120 | ✅ PJ-26555 | ✅ | Pendiente | Pendiente |
| Ponchadoras y Herramientas de Crimpado | Cizalla Corta Cable 400 mm² | ✅ PJ-26661 | ✅ | ✅ | Pendiente |
| Ponchadoras y Herramientas de Crimpado | Ponchadora para Terminal Aislado AN-06WF2C | ✅ PJ-26660 | ✅ | Pendiente | Pendiente |
| Ponchadoras y Herramientas de Crimpado | Ponchadora Hidráulica FYQ-500 | ✅ PJ-26559 | ✅ | Pendiente | Pendiente |
| Ponchadoras y Herramientas de Crimpado | Ponchadora Hidráulica FYQ-630 | ✅ PJ-26558 | ✅ | Pendiente | Pendiente |
| Ponchadoras y Herramientas de Crimpado | Ponchadora Hidráulica FYQ-1000 | ✅ PJ-26560 | ✅ | Pendiente | Pendiente |
| Ponchadoras y Herramientas de Crimpado | Ponchadora Hidráulica Manual EP-430 | ✅ PJ-26557 | ✅ | Pendiente | Pendiente |
| Ponchadoras y Herramientas de Crimpado | Pinza Ponchadora Rachet | ✅ PJ-26659 | ✅ | Pendiente | Pendiente |
| Ponchadoras y Herramientas de Crimpado | Pinza Ponchadora para Terminales Aislados | ✅ PJ-26661 | ✅ | Pendiente | Pendiente |
| Ponchadoras y Herramientas de Crimpado | Ponchadora Inalámbrica 200 kN | ✅ PJ-28032 | ✅ | Pendiente | Pendiente |
| Conectores y Kits MC4 | Kit MC4 con Pelacable y Corta Cable PTB01 | ✅ PJ-26551 | ✅ | ✅ | Pendiente |
| Conectores y Kits MC4 | Kit MC4 con Pelacable PTB02 | ✅ PJ-26553 | ✅ | Pendiente | Pendiente |
| Conectores y Kits MC4 | Llaves para Conectores MC4 | ✅ PJ-26550 | ✅ | ✅ | Pendiente |
| Conectores y Kits MC4 | Llaves para Conectores MC4 (Doble Función) | ✅ PJ-26552 | ✅ | ✅ | Pendiente |
