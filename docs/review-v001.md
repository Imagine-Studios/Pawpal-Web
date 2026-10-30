# Revisión de la web — v001 — 27/10/2026

## Resultado

Oru Studio encabeza la web y presenta PawPal y SeaCurrent. Portada, catálogo, galería real de PawPal, tres reels localizados, testers, estudio, contacto y privacidad. Diseño cálido basado en Art Bible v0.5; SeaCurrent conserva su imagen submarina y se identifica como arte conceptual en desarrollo. Borrador local pendiente de revisión humana, sin push ni publicación.

## Arquitectura

La implementación anterior generaba todo el contenido en el navegador mediante scripts globales, dependía de Tailwind y Font Awesome por CDN y duplicaba el arranque de ES/EN. Ahora una plantilla Node sin paquetes genera cuatro documentos estáticos con contenido disponible sin JavaScript. Las traducciones y políticas viven en `content/`. Se eliminan los 14 scripts de renderizado anteriores. No se añade framework, backend, analítica ni integración externa.

Se corrigen portada inexistente, metadatos sociales con rutas rotas, enlaces ficticios de tiendas/redes, navegación parcial en inglés, selector de idioma de privacidad, canonical de privacidad ES, `robots.txt`, URLs del sitemap e iconos del manifest. Se conserva `CNAME`, `app-ads.txt`, el nombre `Sitemap.xml` y las rutas de privacidad. El formulario pasa de iframe a enlace existente; falta verificar su acceso real, pues el servicio de consulta web no pudo abrirlo.

La fecha y el texto sustancial de las políticas se conservan; se elimina únicamente el bloque promocional que afirmaba disponibilidad y enlazaba tiendas ficticias. No es una revisión jurídica del contenido.

## Archivos afectados

- Portadas: `index.html`, `es/index.html`.
- Privacidad: `en/privacy-policy.html`, `es/privacy-policy.html`.
- Diseño: `styles.css`; fuentes, licencias, imágenes y vídeos nuevos en `assets/fonts/`, `assets/images/web-v001/`, `assets/videos/`.
- Fuentes de contenido: `content/site.json`, `content/privacy-en.json`, `content/privacy-es.json`.
- Herramientas sin dependencias: `scripts/build.mjs`, `scripts/check.mjs`, `scripts/serve.mjs`.
- Configuración y documentación: `robots.txt`, `Sitemap.xml`, `oruStudio-manifest.json`, `README.md`, `.github/copilot-instructions.md`, `docs/media-v001.md`, este documento.
- Eliminados por quedar sustituidos: `index.js`, `es/index.js`, `en/privacy.js`, `es/privacy.js` y los diez scripts de `components/`.
- No se modifican archivos de Unity ni fuentes de PawPal_Work o SeaCurrent_Work. En PawPal_Work solo se añaden evidencia y exports de esta revisión.

## Validación

- Node 24: generación y comprobación de enlaces, assets, mayúsculas de rutas, anchors, fuentes y manifest correctas.
- `git diff --check` correcto. El repositorio usa normalización de finales de línea de Windows.
- Chrome real sin interfaz, ES/EN a 320, 390 y 1440 px; ES también a 820 px. Privacidad ES móvil y EN escritorio. Sin overflow horizontal, imágenes rotas ni errores HTTP/JavaScript en las páginas locales.
- Portada y políticas con JavaScript desactivado. Carga explícita de imágenes antes de capturar para comprobar también las que usan lazy loading.
- Selector de idioma ES→EN y apertura de solicitud de borrado comprobados.
- Seis vídeos ES/EN: reproducción y salto a 3 s correctos, sin autoplay. 0,76–1,16 MB por export frente a 6,7–13,6 MB de los originales empleados.
- Inspección visual de portada móvil/escritorio/tablet y secciones de juegos, galería, reels y estudio.
- Evidencia completa: `F:/GithubRepo/PawPal_Work/03_UI/Source/WebRefresh_v001/`; informe `final-checks.json` y capturas `final-*.png`. Selección para revisión en `F:/GithubRepo/PawPal_Work/05_Exports/web/v001/`.

## Revisión humana y siguientes capturas

Falta aprobación editorial/artística de la web y los reels fuente, que siguen marcados como draft. La paleta usa valores provisionales; no fija los tokens definitivos de PawPal. La reutilización del tipo display en la web es una propuesta de presentación del estudio, no una nueva Art Bible de SeaCurrent.

Conviene revisar en un móvil real y Safari/iOS: las pruebas se han realizado con Chrome en Windows, sin evaluación auditiva de la música ni prueba del envío del formulario. Tampoco se ha verificado una configuración de despliegue o caché del hosting real.

Para renovar capturas de PawPal: salón con Max mirando a cámara y sin cursor, baño con cara despejada, armario con un accesorio equipado y texto estable, decoración sin partículas de transición. Grabar unos segundos de reposo por escena permite obtener fotos sin artefactos ni UI en mitad de una animación. No se ha automatizado el gameplay para grabarlas.

Para SeaCurrent: sustituir o acompañar el concepto con una captura real cuando haya una versión visual representativa; mantener identificadas las imágenes conceptuales. Incorporar redes y tiendas solo con URLs confirmadas, sin inventar fechas ni plataformas de lanzamiento.
