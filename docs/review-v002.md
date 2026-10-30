# Landing Oru Studio — branding v002 — 30/10/2026

## Cambio

Aplicación local del branding elegido «Guardián de pequeños mundos»: carbón/índigo, marfil/ámbar, Manrope y DM Sans locales. Hero con el personaje desgastado, titular y controles en HTML, encuadre propio para móvil y superficies tranquilas para el catálogo. PawPal y SeaCurrent conservan su arte y sus colores.

Se mantiene el generador estático ES/EN sin framework ni JavaScript de interfaz, las rutas públicas, privacidad, contacto y borrado de datos. Las páginas legales reciben únicamente el estilo compartido; su texto y fecha no cambian. No hay push ni publicación.

## Material y procedencia

- `assets/images/web-v002/worldkeeper.webp`: derivado WebP de la dirección seleccionada `Oru Studio/01_Brand/Approved/Direction_v001/OruStudio_WorldKeeper_v001.png`. Se ha eliminado el lettering mediante edición con `image_gen`, para superponer contenido HTML real. No se altera el original. 1536×1024, aproximadamente 181 KB.
- `worldkeeper-mobile.webp`: recorte cuadrado del derivado, conserva cabeza, corazón, manos y pies. `guardian.webp`: encuadre para el bloque del estudio.
- `oru-avatar-64.png`, `oru-avatar-192.png`, `oru-avatar-512.png`: recortes opacos intencionales para favicon/manifest. No son sprites transparentes ni se importan a Unity.
- `oru-wordmark.svg`: reconstrucción geométrica editable, sin dependencia de fuentes y con letras de STUDIO en trazos. Recoge la R abierta, curvas redondeadas, marfil y destello ámbar. Es un candidato de producción para revisar, no una afirmación de fidelidad vectorial exacta al render ni un maestro aprobado. No se ha sobrescrito el logo original ni la guía de marca.
- `seacurrent-oxi.webp`: recorte del pez grande del bloque superior izquierdo del archivo elegido por el usuario, `J:/PORTFOLIO/LinkedIn/Imagen de Codex 18 ago 2026, 18_06_29.png`. Recorte original x=415, y=50, 605×550, adaptado a 1000×1000. No se regenera ni se rediseña el personaje; se identifica como arte conceptual.
- `social-studio.jpg`: concepto elegido adaptado a 1200×630 para metadatos sociales. El logo queda dentro de la imagen social, no dentro de los controles de la web.
- Los assets `web-v001/`, vídeos y originales se conservan. No se han modificado archivos del juego.

## Fuentes

Descargadas el 30/10/2026 del repositorio oficial Google Fonts, servidas localmente; no hay llamadas a Google Fonts en el navegador:

- Manrope variable: https://github.com/google/fonts/tree/main/ofl/manrope — `assets/fonts/Manrope-Variable.ttf` y `Manrope-OFL.txt`.
- DM Sans variable: https://github.com/google/fonts/tree/main/ofl/dmsans — `assets/fonts/DMSans-Variable.ttf` y `DMSans-OFL.txt`.

Manrope 600/700 para títulos y controles; DM Sans 400/500 para lectura. Se declaran los rangos variables en CSS y se utiliza `font-display: swap`. Las licencias originales se conservan junto a los archivos.

## Validación

- `node scripts/build.mjs`, `node scripts/check.mjs`, comprobación de sintaxis del servidor y `git diff --check`: correctos.
- Chrome real en Windows, ES/EN entre 320 y 1440 px; ES también a 820 px, EN también a 1920 px. Páginas de privacidad ES móvil y EN escritorio.
- Pruebas de documento con JavaScript desactivado, fuentes cargadas y todas las imágenes decodificadas: sin recursos ausentes, errores HTTP ni overflow horizontal.
- Selector ES→EN y apertura del bloque de borrado de datos comprobados. Enlaces/anchors y mayúsculas de rutas comprobados por el validador estático.
- Los seis vídeos localizados reproducen y permiten avanzar a 3 s, sin autoplay y manteniendo `preload="none"`.
- Inspección de screenshots reales: hero escritorio/móvil/tablet, catálogo, encuadre de Oxi, galería y bloque del estudio. El texto se coloca sobre una protección oscura; la imagen móvil y el texto ocupan áreas separadas.
- Evidencia y script de QA: `F:/GithubRepo/PawPal_Work/03_UI/Source/WebRefresh_v002/`.
- Capturas seleccionadas e informe final: `F:/GithubRepo/PawPal_Work/05_Exports/web/v002/`.

## Archivos afectados en esta pasada

`styles.css`, `scripts/build.mjs`, `scripts/serve.mjs`, `content/site.json`, las cuatro páginas HTML generadas, `oruStudio-manifest.json`, `README.md`, `.github/copilot-instructions.md`, este informe, nuevas fuentes/licencias y `assets/images/web-v002/`. Se añaden fuentes y evidencia de revisión en PawPal_Work; se conserva la evidencia v001. El checkout ya contenía los cambios de la primera revisión, que no se descartan.

## Límites y revisión humana

La dirección de marca está seleccionada; esta implementación y el SVG del logo quedan para revisión artística. No se ha probado Safari/iOS ni un teléfono físico, envío del formulario o renderizado real de tarjetas sociales en cada red. Los reels siguen siendo los borradores de la primera pasada y las capturas existentes pueden mejorar con nuevas grabaciones sin cursor y con la cara de Max despejada.

## Prompt de la edición de imagen

Se conserva íntegro en `PawPal_Work/03_UI/Source/WebRefresh_v002/image-edit-prompt.txt`. La herramienta integrada `image_gen` retiró únicamente el logo y el destello del concepto para obtener un fondo con texto editable superpuesto en HTML.
