// Service worker mínimo: permite instalar V&A como aplicación.
// No guarda datos en caché: la información siempre viene fresca de Supabase.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => { e.respondWith(fetch(e.request)); });
