# Mejoras de prioridad alta — 30/10/2026

## Alcance

El usuario solicita aplicar las cuatro mejoras de prioridad alta: acceso visible a testers, páginas propias de juego, portada equilibrada y navegación móvil legible.

## Implementación

- La portada conserva hero de marca, catálogo, estudio, contacto y borrado de datos. Las dos tarjetas comparten jerarquía visual y espacio; cada una enlaza a su página.
- «Probar PawPal» aparece en la tarjeta y en su página. Lleva al bloque de testers, situado antes de la galería y los vídeos. El enlace abre el formulario existente, sin prometer acceso inmediato ni añadir servicios.
- Nuevas rutas `/es/pawpal/`, `/en/pawpal/`, `/es/seacurrent/` y `/en/seacurrent/`. El selector de idioma mantiene el juego actual.
- PawPal contiene los mismos tres reels, capturas y textos existentes. SeaCurrent presenta a Oxi y el concepto de entorno, identificado como arte conceptual; no se añaden afirmaciones de gameplay o lanzamiento.
- Navegación reducida a Juegos, Estudio y Contacto. En móvil, texto de 14,4 px; enlaces y selector de idioma tienen zonas de al menos 44×44 px.
- Se mantienen portada inglesa `/`, portada española `/es/index.html`, privacidad y los fragmentos históricos `#reels`, `#screenshots` y `#testers`: estos últimos apuntan a accesos visibles al contenido reubicado.
- Títulos, descripciones, canonical, hreflang e imágenes sociales propios por juego. Las ocho rutas alimentan el sitemap y el validador desde un único módulo `scripts/pages.mjs`.

## Arquitectura

Se reutiliza el generador Node sin dependencias; no hay framework, backend ni JavaScript nuevo en el navegador. Galería y reels se extraen a funciones de plantilla compartidas. La definición de rutas sirve a generación, traducciones de enlaces, sitemap y comprobación.

## Validación

`node scripts/build.mjs`, `node scripts/check.mjs` y comprobación de sintaxis. El validador revisa ocho documentos, rutas exactas, anchors, IDs únicos, títulos distintos, metadatos enlazados, sitemap y recursos locales.

QA en Chrome real: ES/EN de portada, PawPal y SeaCurrent a 320, 390, 820 y 1440 px, con JavaScript desactivado. Comprueba imágenes, errores HTTP, overflow, zonas táctiles y continuidad del idioma. Flujo específico portada → Probar PawPal → bloque de testers, con despeje respecto a cabecera sticky; enlaces de privacidad; reproducción y avance en los seis vídeos localizados.

Se corrigió una zona menor de 44 px del enlace inglés Games detectada en tablet y se ajustó el encuadre de Oxi. Evidencia y resultados: `F:/GithubRepo/PawPal_Work/05_Exports/web/v003/`; script: `F:/GithubRepo/PawPal_Work/03_UI/Source/WebRefresh_v003/review.cjs`.

Resultado final: 24 combinaciones de página/tamaño comprobadas correctamente, continuidad de idioma, flujo de testers con margen bajo la cabecera, seis vídeos y privacidad. La portada inglesa a 390 px pasa de 8046 px de altura (captura pública v002) a 4388 px, aproximadamente un 45 % menos de recorrido.

## Estado de publicación

La revisión automática bloqueó el intento inicial de commit y push antes de ejecutarlo. Después, el usuario autorizó crear únicamente el commit local e indicó que realizará el push personalmente. Esta entrega prepara ese commit; no publica ni modifica GitHub Pages.

## Archivos afectados

`content/site.json`, `scripts/build.mjs`, `scripts/check.mjs`, nuevo `scripts/pages.mjs`, `styles.css`, `Sitemap.xml`, las cuatro páginas existentes regeneradas, cuatro nuevos `index.html` de juegos, `README.md`, `.github/copilot-instructions.md` y este informe. No se modifican assets, escenas de Unity, texto legal, fuentes o vídeos.

## Límites

No se prueba envío del formulario, Safari/iOS ni dispositivo físico. Las capturas y los reels siguen siendo el material existente; las mejoras de nuevas grabaciones, historia del estudio y redes quedan fuera de esta pasada. El contenido de SeaCurrent es conceptual.
