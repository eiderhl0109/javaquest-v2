// GENERADO por vite.config.ts. No editar a mano.
const CACHE = "javaquest-mvqvmmyh";
const FILES = ["./","./assets/geist-latin-400-normal-B40WzpMT.woff2","./assets/geist-latin-ext-400-normal-CND6cjiG.woff2","./assets/geist-latin-600-normal-CSETrqM2.woff2","./assets/geist-latin-500-normal-CTWBw9NS.woff2","./assets/geist-latin-ext-500-normal-BovoTgeE.woff2","./assets/geist-latin-ext-600-normal-CVFbg5dS.woff2","./assets/geist-mono-latin-ext-500-normal-Buglb9-a.woff2","./assets/geist-mono-latin-ext-400-normal-DI-rJ0UV.woff2","./assets/Phosphor-C7GjLAHT.woff2","./assets/Phosphor-Fill-DF13sixS.woff2","./assets/geist-mono-latin-400-normal-DTRLJnHl.woff2","./assets/geist-mono-latin-500-normal-YINYabwD.woff2","./assets/index-BOtPma6Q.css","./assets/index-DwmvvwWh.js","./manifest.webmanifest","./favicon.svg","./icon-192.png","./icon-512.png","./icon-maskable-512.png","./apple-touch-icon.png"];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)));
  self.skipWaiting();
});
// Solo borra sus cachés antiguas: en github.io comparte el almacén con JavaQuest retro (jqretro-…)
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((k) => Promise.all(k.filter((x) => x.startsWith('javaquest-') && x !== CACHE).map((x) => caches.delete(x)))));
  self.clients.claim();
});
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // La página: primero la red (para recibir versiones nuevas) y, sin conexión, la guardada
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).catch(() => caches.match('./', { ignoreVary: true })));
    return;
  }
  // El resto lleva un hash en el nombre: si está guardado, no cambia nunca.
  // ignoreVary: los scripts con crossorigin llevan la cabecera Origin y, si el servidor responde
  // con «Vary: Origin», no coincidirían con la copia guardada y fallarían sin conexión
  e.respondWith(caches.match(req, { ignoreVary: true }).then((hit) => hit || fetch(req)));
});
