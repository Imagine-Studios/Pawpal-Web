# Favicon Oru Studio — cabeza del guardián

Propuesta: cabeza marfil inclinada sobre fondo carbón, ojos oscuros y desgaste simplificado. Generada con image_gen integrada y exportada a tamaños web; pendiente de revisión artística.

## Archivos e integración

- Maestro: assets/icons/oru-guardian-head-v001.png, 512×512.
- /favicon-96.png: PNG cuadrado 96×96, con URL estable.
- /favicon.ico: versiones 16, 32, 48 y 64 px.
- /apple-touch-icon.png: 180×180.
- assets/icons/oru-guardian-192-v001.png y oru-guardian-512-v001.png: manifest.
- scripts/build.mjs: enlaces explícitos a iconos y manifest, comunes a las ocho páginas.
- scripts/serve.mjs: tipo MIME de ICO para preview.
- oruStudio-manifest.json: referencias actualizadas.

Los PNG son opacos de forma intencionada: el fondo carbón forma parte del icono. No son sprites de Unity. Los iconos anteriores se conservan sin sobrescribir.

## Validación

Generador y validador de ocho páginas correctos. ICO comprobado por cabecera y decodificación de sus cuatro imágenes. Dimensiones PNG comprobadas. Chrome local: iconos y manifest responden HTTP 200 con tipos MIME correctos; PNG de 96 px decodificado. Inspección a 16, 32, 48, 64 y 96 px sobre claro y oscuro.

Prompt y scripts: PawPal_Work/03_UI/Source/OruFavicon_v001/. Maestro de revisión, comparación e informes: PawPal_Work/05_Exports/web/favicon-v001/.

## Google y publicación

La web ya tenía un favicon. Que Google muestre el globo no demuestra que faltase la etiqueta. Esta propuesta prepara una imagen propia más limpia y enlaces explícitos, con URL estable y archivos accesibles según robots.txt.

Google necesita volver a rastrear y procesar la página; puede tardar días o semanas y no garantiza mostrar el favicon. Tras subirlo puede solicitarse la indexación de la portada en Search Console. No se ha solicitado ni publicado desde esta tarea; el usuario gestiona el push según su última indicación.

Referencia oficial: https://developers.google.com/search/docs/appearance/favicon-in-search
