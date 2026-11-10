# Oru Studio — web

Web estática del estudio: PawPal, SeaCurrent y Play. HTML/CSS sin framework ni paquetes npm; un pequeño script de navegador carga el minijuego al pulsar Jugar. Se conservan el dominio y las URLs existentes.

## Editar y comprobar

Requiere Node.js moderno (validado con Node 24).

```powershell
node scripts/build.mjs
node scripts/check.mjs
node scripts/serve.mjs
```

Abre `http://127.0.0.1:8080/es/index.html`. Detén el servidor con Ctrl+C.

- `content/site.json`: textos EN/ES de la portada.
- `content/privacy-en.json` y `privacy-es.json`: contenido legal trasladado de las páginas anteriores. No actualizar la fecha sin una revisión real de la política.
- `scripts/build.mjs`: plantilla común de cabecera, portada, páginas de juego, pie y privacidad. Genera catorce páginas HTML y el sitemap; funciona desde cualquier directorio.
- `scripts/pages.mjs`: rutas compartidas por el generador y el validador. Cada juego tiene páginas ES/EN y el selector de idioma conserva el juego actual.
- `styles.css`: branding de Oru Studio según la guía v0.1: carbón, índigo, marfil y ámbar; Manrope y DM Sans locales. Los juegos conservan sus colores dentro de sus imágenes.
- `scripts/check.mjs`: comprueba enlaces internos, anchors, assets, mayúsculas de rutas, fuentes y manifest.
- `assets/images/web-v001/` y `assets/videos/`: material optimizado de esta revisión. Originales y procedencia en `docs/media-v001.md`.
- `assets/images/web-v002/`: ilustración de Oru sin texto, encuadre móvil, avatar, logo SVG de trabajo y nuevo recorte de Oxi. Procedencia, fuentes y revisión en `docs/review-v002.md`.

Los HTML generados se incluyen en Git: el hosting estático puede servirlos directamente. Después de modificar una fuente, regenera y comprueba antes de publicar. No hay instalación de dependencias ni compilación en producción. Para añadir idiomas, ampliar el contenido, el bucle de generación y los enlaces de idioma.

## Decisiones de contenido

Oru Studio es la marca principal. Ambos juegos se presentan en desarrollo; no hay enlaces ficticios a tiendas ni fechas de lanzamiento. SeaCurrent utiliza arte conceptual identificado, sin prometer que sea gameplay. PawPal muestra fotogramas y reels existentes; los borradores quedan sujetos a revisión editorial/artística antes de publicación.

La portada resume el estudio y sus dos juegos. PawPal tiene la galería, los tres reels y el bloque de testers en `/es/pawpal/` y `/en/pawpal/`; SeaCurrent tiene su presentación y arte conceptual en `/es/seacurrent/` y `/en/seacurrent/`. Las portadas antiguas conservan `#screenshots`, `#reels` y `#testers` como accesos al contenido reubicado. Navegación principal: Juegos, Estudio y Contacto; selector de idioma y enlaces con zonas táctiles mínimas de 44 px.

Los vídeos tienen controles nativos, versiones EN/ES, `preload="none"` y carecen de autoplay. No se envían datos a Google Forms hasta que el usuario abre el enlace. La web no incluye analítica ni nuevas integraciones.

## Publicación

GitHub Pages publica desde la raíz de `main` en `Imagine-Studios/Pawpal-Web`, con dominio `oru.studio` (configuración verificada el 30/10/2026). Un push a `main` actualiza la web pública. Los HTML generados deben subirse junto con sus fuentes; `.nojekyll` evita procesarlos con Jekyll. Se conservan `CNAME`, `app-ads.txt`, el nombre `Sitemap.xml` y las rutas públicas de privacidad. La publicación de esta versión fue autorizada explícitamente por el usuario.

La revisión actual está en `docs/review-v003.md`; las pasadas anteriores se conservan en `docs/review-v001.md` y `docs/review-v002.md`. La dirección visual de la landing fue aceptada el 30/10/2026 (`docs/landing-approval-v002.md`). Pendientes para futuras iteraciones: aprobar el logo como maestro para otros soportes, confirmar el formulario de testers y las URLs definitivas de tiendas/redes cuando existan. La autorización de publicación incluye el contenido de la landing mostrado al usuario.


## Play · juegos de navegador

Rutas: `/play/`, `/play/balloon-hunters/`, `/play/dream-runner/` y sus equivalentes bajo `/es/play/`. Balloon Hunters y la demo web de Dream Runner utilizan builds reales; queda una tarjeta Coming soon. Textos en `content/site.json`, plantillas en `scripts/build.mjs` y rutas en `scripts/pages.mjs`. La home y la navegación enlazan Play.

La integración de Dream Runner en la web ha sido autorizada por el usuario el 31/10/2026 después de probar el juego. GitHub Pages publica automáticamente al enviar a `main`. Para previsualizar en otro puerto en PowerShell: `$env:PORT=8097; node scripts/serve.mjs`. Las revisiones anteriores de Play se conservan en `docs/review-play-v001.md` y `docs/review-play-mobile-v002.md`.

El reproductor solicita pantalla completa al pulsar Jugar, intenta orientación horizontal y ofrece un modo ampliado si el navegador rechaza la API. El overlay espera la escena real de Balloon Hunters o el marcador `body.dataset.gameReady` de Unity; el evento load del iframe no basta. Dream Runner dispone de dos minutos antes del aviso de carga lenta; la carga puede completarse después y retirar el aviso.

Dream Runner procede de `F:/GithubRepo/PawPal/Builds/Web/DreamRunnerRelease/`, generado con `PawPal > Dream Runner Web > Build Release`. Se copia íntegro a `games/dream-runner/`. La build Release usa gzip con descompresión de respaldo de Unity (`.unityweb`) para funcionar en Pages sin configurar Content-Encoding. La plantilla expone la señal de disponibilidad y `?lang=en` / `?lang=es` selecciona la localización existente del juego. No usa guardados Android, login ni nube. Al renovar la build, volver a probar el iframe, la señal de disponibilidad y la ausencia de solicitudes externas.
