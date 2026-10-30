# Oru Studio — web

Web estática del estudio: PawPal y SeaCurrent. HTML/CSS sin framework, paquetes npm ni JavaScript en el navegador. Se conservan el dominio y las URLs existentes.

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
- `scripts/build.mjs`: plantilla común de cabecera, portada, pie y privacidad. Genera las cuatro páginas HTML y funciona desde cualquier directorio.
- `styles.css`: branding de Oru Studio según la guía v0.1: carbón, índigo, marfil y ámbar; Manrope y DM Sans locales. Los juegos conservan sus colores dentro de sus imágenes.
- `scripts/check.mjs`: comprueba enlaces internos, anchors, assets, mayúsculas de rutas, fuentes y manifest.
- `assets/images/web-v001/` y `assets/videos/`: material optimizado de esta revisión. Originales y procedencia en `docs/media-v001.md`.
- `assets/images/web-v002/`: ilustración de Oru sin texto, encuadre móvil, avatar, logo SVG de trabajo y nuevo recorte de Oxi. Procedencia, fuentes y revisión en `docs/review-v002.md`.

Los HTML generados se incluyen en Git: el hosting estático puede servirlos directamente. Después de modificar una fuente, regenera y comprueba antes de publicar. No hay instalación de dependencias ni compilación en producción. Para añadir idiomas, ampliar el contenido, el bucle de generación y los enlaces de idioma.

## Decisiones de contenido

Oru Studio es la marca principal. Ambos juegos se presentan en desarrollo; no hay enlaces ficticios a tiendas ni fechas de lanzamiento. SeaCurrent utiliza arte conceptual identificado, sin prometer que sea gameplay. PawPal muestra fotogramas y reels existentes; los borradores quedan sujetos a revisión editorial/artística antes de publicación.

Los vídeos tienen controles nativos, versiones EN/ES, `preload="none"` y carecen de autoplay. No se envían datos a Google Forms hasta que el usuario abre el enlace. La web no incluye analítica ni nuevas integraciones.

## Publicación

GitHub Pages publica desde la raíz de `main` en `Imagine-Studios/Pawpal-Web`, con dominio `oru.studio` (configuración verificada el 30/10/2026). Un push a `main` actualiza la web pública. Los HTML generados deben subirse junto con sus fuentes; `.nojekyll` evita procesarlos con Jekyll. Se conservan `CNAME`, `app-ads.txt`, el nombre `Sitemap.xml` y las rutas públicas de privacidad. La publicación de esta versión fue autorizada explícitamente por el usuario.

La revisión actual está en `docs/review-v002.md`; la pasada anterior se conserva en `docs/review-v001.md`. La dirección visual de la landing fue aceptada el 30/10/2026 (`docs/landing-approval-v002.md`). Pendientes para futuras iteraciones: aprobar el logo como maestro para otros soportes, confirmar el formulario de testers y las URLs definitivas de tiendas/redes cuando existan. La autorización de publicación incluye el contenido de la landing mostrado al usuario.

