# JIMACO S.A.S. - Portal Web Corporativo (Astro SSG + Tailwind CSS)

Sitio web oficial y catálogo interactivo de suministros para Ferretería Industrial JIMACO S.A.S. («Engranando futuro juntos»).

---

## 🚀 Entornos y Comandos de Trabajo

Para evitar bloqueos de archivos (`EPERM`) y demoras por indexación de OneDrive, el flujo de trabajo está dividido:

* **Directorio de Build y Ejecución Local:** `C:\PaginaJimaco`
* **Directorio de Resguardo y Contexto:** `C:\Users\Lenovo\OneDrive\Documentos\Personal\ProyectosJimaco\PaginaWebAstro`

### Comandos Principales (Ejecutar en `C:\PaginaJimaco`)

```bash
# Iniciar servidor de desarrollo en puerto 4321
npm run dev -- --host 127.0.0.1 --port 4321

# Compilar sitio estático (genera C:\PaginaJimaco\dist)
npm run build

# Previsualizar el build estático localmente
npm run preview
```

---

## 📁 Rutas del Proyecto (16 Páginas Estáticas)

| Ruta | Archivo Fuente | Descripción |
| :--- | :--- | :--- |
| `/` | `src/pages/index.astro` | Portada institucional con slider ExpoSolar 2026, mapa interactivo y portafolio |
| `/sobre-jimaco` | `src/pages/sobre-jimaco.astro` | Video drone, historia desde 2013, misión, visión y valores |
| `/politica-de-calidad` | `src/pages/politica-de-calidad.astro` | 6 pilares de calidad SVG y 5 objetivos de calidad |
| `/tuberias-cloruro-de-polivinilo-pvc` | `src/pages/tuberias-cloruro-de-polivinilo-pvc.astro` | **Landing interactiva estilo ALR Group** con selector de colores, diámetros y cotizador WhatsApp |
| `/suministros/tuberias-pvc` | `src/pages/suministros/tuberias-pvc.astro` | Portafolio de tuberías PVC |
| `/suministros/construccion` | `src/pages/suministros/construccion.astro` | Materiales y suministros para obra civil |
| `/suministros/energia-solar` | `src/pages/suministros/energia-solar.astro` | Suministros para proyectos fotovoltaicos |
| `/suministros/proteccion-personal` | `src/pages/suministros/proteccion-personal.astro` | Elementos de Protección Personal (EPP) |
| `/suministros` | `src/pages/suministros/index.astro` | Catálogo general de suministros |
| `/tienda` | `src/pages/tienda.astro` | Marketplace y tienda de productos |
| `/contacto` | `src/pages/contacto.astro` | Formulario y datos de contacto |
| `/ponte-en-contacto` | `src/pages/ponte-en-contacto.astro` | Página alternativa de contacto |
| `/admin` | `src/pages/admin/index.astro` | Consola interna de administración |

---

## 📦 Paquetes de Distribución (Staging / Producción)

El paquete de staging compilado se genera directamente como:
`C:\PaginaJimaco\staging_actualizacion_marketplace.zip` (~54.66 MB).
Contiene todos los assets optimizados listos para desplegar en el hosting (cPanel / LiteSpeed).

---
*Ferretería Industrial JIMACO S.A.S. - 2026*

