// Cachea todo para que la app funcione sin conexión.
const CACHE = 'kendo-nihongo-v17';
const FILES = ['./', 'index.html', 'style.css', 'chopper.js', 'data.js', 'data-kata.js', 'data-kanji.js', 'data-verbs.js', 'data-reading.js', 'data-te.js', 'data-a1.js', 'data-n5.js', 'app.js', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png', 'chopper.webp'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
// Red primero (para recibir actualizaciones); si no hay red, caché.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(fetch(e.request).then(r => { const cp = r.clone(); caches.open(CACHE).then(c => c.put(e.request, cp)); return r; }).catch(() => caches.match(e.request)));
});

