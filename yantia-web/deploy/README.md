# 🍳 Yantia — descubre tu paladar

App web (PWA) en español para descubrir qué ingredientes te gustan al estilo *swipe*, encontrar recetas que encajan contigo (con matices: «cebolla cruda no, pochada sí»), cocinar paso a paso con temporizadores, planificar la semana y generar la lista de la compra automáticamente.

**100 % gratis de operar**: es un sitio estático sin backend. Los datos de cada persona se guardan en su propio dispositivo (localStorage). Sin base de datos, sin servidores, sin costes.

## Usar en el móvil
Abre la web y elige **«Añadir a pantalla de inicio»** (Compartir → Añadir a inicio en iOS; menú ⋮ → Instalar app en Android). Funciona offline tras la primera visita.

## Desplegar tu propia copia (gratis)
- **Vercel**: importa el repo → Framework: *Other* → sin build → Output: raíz. Listo.
- **GitHub Pages**: Settings → Pages → Deploy from branch (`main`, `/root`).

## Stack
React 18 + lucide-react servidos por CDN (esm.sh) con import maps. Sin paso de build. Fotos de ingredientes: CDN público de Spoonacular con ficha ilustrada de respaldo.

## Licencia
MIT — úsala, cópiala y compártela libremente.
