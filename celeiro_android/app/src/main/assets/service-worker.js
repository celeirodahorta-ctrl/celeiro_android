const CACHE='celeiro-horta-exact-reference-v3';
const CORE=[
 './', './index.html', './manifest.json',
 './logo-celeiro.png', './logo-original.jpg', './logo-transparente.png',
 './icons/icon-192.png', './icons/icon-512.png',
 './assets/fundo-horta.png', './assets/icon-horta.png', './assets/icon-flores.png',
 './assets/icon-aromaticas.png', './assets/icon-pragas.png', './assets/icon-lua.png', './assets/pagina-inicial-referencia.png'
];
self.addEventListener('install',e=>{
 e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
 e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET') return;
 e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(r=>{
   const copy=r.clone();
   caches.open(CACHE).then(c=>c.put(e.request,copy));
   return r;
 }).catch(()=>cached)));
});
