# Play · revisión local · 30/10/2026

Solicitud: ampliar la web existente, sin publicación automática. El usuario confirma que no tiene acuerdo de exclusividad con CrazyGames.

## Implementación

- Se mantiene HTML/CSS estático, el generador Node existente y contenido EN/ES. No se añaden paquetes ni frameworks.
- Catálogo: `/play/` (EN) y `/es/play/` (ES). Ficha: `/play/balloon-hunters/` y `/es/play/balloon-hunters/`. El selector conserva la página.
- Navegación Play compartida y bloque en ambas portadas, entre los juegos principales y el estudio.
- Balloon Hunters disponible y exactamente dos tarjetas Coming soon no interactivas, sin nombres, fechas ni imágenes de juegos inventadas.
- Reproductor con carga al pulsar, instrucciones, estado anunciado, cierre que descarga el iframe, fullscreen con salida, foco visible, botones nativos y acceso independiente sin JavaScript.
- Títulos, descripciones, canonical, alternates EN/ES/x-default, Open Graph/Twitter y sitemap. El HTML bruto del build se marca noindex para evitar duplicar la ficha.
- La web no tiene analítica: se conserva esta situación, sin servicios ni solicitudes de seguimiento nuevos.

## Procedencia y adaptación del juego

Nombre confirmado en `F:/GithubRepo/ORU_ArcadeFactory/games/BH_Work/SUBMISSION_METADATA.json` y `publication/SUBMISSION_STATUS.md`: **Balloon Hunters**.

Se copia el build vigente de `F:/GithubRepo/ORU_ArcadeFactory/games/balloon-hunters/`, no el ZIP histórico (anterior al ajuste de fullscreen). Todos sus recursos y sonidos se conservan. No se modifica el repositorio ArcadeFactory ni las reglas jugables.

Adaptaciones exclusivas de la copia web:

1. `games/balloon-hunters/index.html`: título Balloon Hunters y robots noindex.
2. `games/balloon-hunters/assets/runtime.json`: las rutas `assets/...` pasan a `/games/balloon-hunters/assets/...`. Las variables de imagen usadas por el CSS externo resolvían erróneamente `assets/assets/...`; esta adaptación evita los 404 observados en paneles y estados de botones.

Al renovar el build hay que repetir estas dos adaptaciones y la prueba local. Si cambia la ubicación de alojamiento, actualizar el prefijo absoluto del manifest. La copia desplegada no se actualiza automáticamente desde el proyecto del juego.

Portada: original aprobado `games/BH_Work/publication/covers-v01/balloon-hunters-landscape-v01.png`, SHA-256 `535f298ca5cb2feb0534b6f35c90ecd1da980b9b4170b29d6b160135b62bc190`. Derivado web `assets/images/balloon-hunters-landscape-v01.webp`: 1200×675, calidad 86, 202866 bytes frente a 5032834 del original. No se genera arte nuevo ni se sobrescribe el original aprobado.

## Verificación

- `node scripts/build.mjs`: 12 páginas y sitemap generados.
- `node scripts/check.mjs`: enlaces, anchors, mayúsculas, títulos, IDs, idiomas, fuentes, manifest y sitemap correctos.
- Chromium local: ambas home, ambos catálogos y ambas fichas a 320, 768 y 1440 px; sin desbordamiento horizontal. Capturas revisadas del catálogo móvil, menú y partida.
- Cero solicitudes al build antes de pulsar Jugar. Lanzamiento por teclado, canvas y menú reales, inicio de oleada, fullscreen y salida mediante botón, cierre y reapertura y cambio de idioma comprobados.
- Sin errores de JavaScript ni respuestas HTTP fallidas tras corregir las rutas del manifest.
- El servidor local admite PORT configurable y MIME de audio OGG/WAV; el puerto predeterminado sigue siendo 8080.

## Pendiente antes de publicar

- Revisar visualmente esta ampliación con el usuario. Se prepara un commit local, sin push ni despliegue; el hosting actual publica automáticamente al enviar a main.
- Escape para salir de fullscreen queda pendiente de comprobación manual: la automatización sin ventana no reprodujo la salida con esa tecla; el botón sí se comprobó.
- Comprobación en Safari/iPhone y Android físicos, audio real y accesibilidad con lector de pantalla. La prueba de adaptación visual no certifica estos dispositivos ni constituye una auditoría WCAG del juego.
- Los dos juegos futuros siguen sin título, fecha ni arte final. Sustituir los anuncios únicamente cuando se disponga del contenido real.
- No se inventa ni se enlaza una URL de CrazyGames. La disponibilidad allí procede de lo comunicado por el usuario.
