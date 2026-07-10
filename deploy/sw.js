/* EatyBlinders SW: app shell offline-first, CDN y fotos con caché en segundo plano */
const CORE = "eatyblinders-core-v1";
const RUNTIME = "eatyblinders-rt-v1";
const SHELL = ["./", "./index.html", "./app.js", "./manifest.webmanifest", "./icon.svg"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CORE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => ![CORE, RUNTIME].includes(k)).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  if (url.origin === location.origin) {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      const copy = res.clone(); caches.open(CORE).then(c => c.put(e.request, copy)); return res;
    })));
  } else {
    // CDN (react, iconos, fuentes) y fotos: caché tras primer uso
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      const copy = res.clone(); caches.open(RUNTIME).then(c => c.put(e.request, copy)); return res;
    }).catch(() => r)));
  }
});
