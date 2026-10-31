# Play — pantalla completa y carga — 31/10/2026

## Solicitud y cambio

Corregir el tamaño del juego en móvil, entrar en pantalla completa al pulsar Jugar y mostrar un indicador durante el arranque.

- Se reutiliza `scripts/player.js`. El clic solicita fullscreen nativo de inmediato, antes de esperar la carga, e intenta fijar orientación horizontal cuando la API está disponible. Si el navegador no admite o rechaza fullscreen, el reproductor ocupa la ventana mediante CSS y mantiene salida accesible.
- En horizontal el iframe ocupa toda la superficie del reproductor: la barra y el estado ya no restan altura. Los botones de cerrar y salir quedan superpuestos, con objetivos de 44 px. El canvas conserva su relación 16:9 y el escalado FIT del juego.
- En vertical se reservan 56 px para salida/cierre, evitando tapar el HUD; como el canvas está limitado por el ancho, esto no reduce su tamaño. Una indicación invita a girar el dispositivo, fuera del HUD.
- Se conserva la portada bajo un overlay «Cargando juego…» con un pulso suave. Se respeta movimiento reducido. El estado está localizado en ES/EN.
- El overlay no desaparece con el evento load del iframe: observa el marcador de escena que el juego ya expone (`body.dataset.scene`) y confirma canvas y panel de menú. Al estar listo desconecta el observador y cancela el timeout.
- El cierre cancela observación y temporizador, descarga el iframe, restaura la portada, desbloquea el scroll y devuelve foco al botón. También se cubre cerrar mientras la petición de fullscreen está pendiente.
- Si el arranque supera 30 segundos, se conserva el indicador y aparece el aviso existente para cerrar/reintentar o abrir por separado. Una llegada tardía al menú retira el aviso y recupera el estado listo.

No se modifican el bundle de Balloon Hunters, sus reglas, assets ni el repositorio ArcadeFactory. La detección de disponibilidad depende del marcador de escena del build actual; revisar esta integración al renovar el build.

## Archivos modificados

`scripts/player.js`, `scripts/build.mjs`, `styles.css`, `content/site.json`, `es/play/balloon-hunters/index.html`, `play/balloon-hunters/index.html`, `README.md` y este informe.

## Validación

- Generación de las 12 páginas y validador estático correctos; sintaxis JS correcta y diff sin errores.
- Chrome real con fullscreen nativo a 1440×900 y vista móvil horizontal de 844×390. Fullscreen automático tras Jugar, carga diferida, menú real, inicio de partida, salida, cierre y reapertura comprobados.
- Carga del runtime bloqueada deliberadamente: el iframe llega a load y el overlay continúa hasta que el juego tiene menú. No hay solicitudes al build antes de pulsar.
- Viewport móvil vertical de 390×844 sin API fullscreen: modo ampliado, aviso de giro y salida funcionales.
- Canvas en 844×390: 693,33×390, coincide con el máximo rectángulo 16:9 que cabe. En 1440×900: 1440×810. Se preserva toda la partida; las bandas restantes responden a la proporción de pantalla.
- Movimiento reducido: indicador sin animación.
- Rechazo de la promesa fullscreen, carga lenta con timeout simulado, cierre durante la espera y reintento exitoso: correctos, sin mensajes antiguos ni scroll bloqueado al cerrar.
- Sin errores de JavaScript ni respuestas HTTP fallidas en los cuatro escenarios principales.
- Capturas reales inspeccionadas: carga y gameplay de escritorio y móvil, más variante vertical. Evidencia en `F:/GithubRepo/PawPal_Work/05_Exports/web/play-mobile-v002/`; scripts en `03_UI/Source/PlayMobile_v002/`.

## Límites y entrega

La rotación automática no se reproduce en un dispositivo físico con esta emulación. Verificar en el Android/iPhone del usuario: los permisos de fullscreen y orientación dependen del navegador. En el modo ampliado de un navegador sin fullscreen puede seguir visible su barra. Si no admite bloquear orientación, girar el móvil manualmente. No se ha hecho commit, push ni publicación en esta tarea.

Referencias consultadas:
- https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen
- https://developer.mozilla.org/en-US/docs/Web/API/ScreenOrientation/lock
