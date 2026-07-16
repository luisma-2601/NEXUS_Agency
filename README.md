# Nexus — Web de agencia (automatizaciones + páginas web)

Landing page de una sola página (`index.html`), 100% responsive, con:

- Secciones: hero, servicios, capacidades, proceso, FAQ y contacto.
- Chatbot flotante conectable a un flujo de **n8n** (con respaldo local de preguntas frecuentes si el webhook no responde).
- Panel de personalización de colores en vivo (botón 🎨, abajo a la izquierda) — herramienta temporal para probar paletas antes de fijar el diseño final.
- Sin dependencias externas más allá de Google Fonts. No requiere build ni `npm install`.

## Estructura

```
.
├── index.html   # todo el sitio: HTML + CSS + JS en un solo archivo
└── README.md
```

## Cómo verlo localmente

Abre `index.html` directamente en el navegador, o sirve la carpeta con cualquier servidor estático:

```bash
python3 -m http.server 8000
# luego visita http://localhost:8000
```

## Pendientes para producción

Busca estos marcadores dentro de `index.html` y reemplázalos:

- `N8N_WEBHOOK_URL` (en el `<script>` del chatbot) — URL real de tu webhook de n8n. Debe recibir `{ message, sessionId }` y responder `{ reply }`.
- Número de WhatsApp, usuarios de Instagram/TikTok y email — en la sección de Contacto y en el footer.
- Nombre "Nexus" — si defines un nombre de marca definitivo.

## Publicar con GitHub Pages

1. Sube este repositorio a GitHub (ver instrucciones que te dio Claude).
2. En GitHub: **Settings → Pages → Source → Deploy from a branch**, selecciona la rama `main` y la carpeta `/ (root)`.
3. En un par de minutos tu sitio estará disponible en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.
