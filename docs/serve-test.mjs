import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path';
import { chromium } from 'playwright-chromium';
const types = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.png':'image/png', '.svg':'image/svg+xml', '.pdf':'application/pdf', '.woff2':'font/woff2', '.json':'application/json' };
const srv = http.createServer((req, res) => {
  let u = decodeURIComponent(req.url.split('?')[0]);
  if (!u.startsWith('/seminario-braco-axila/')) { res.writeHead(404); return res.end(); }
  let f = path.join('dist', u.replace('/seminario-braco-axila/', '')); if (u.endsWith('/')) f = path.join(f, 'index.html');
  if (!fs.existsSync(f)) { res.writeHead(404); return res.end('nf ' + u); }
  res.writeHead(200, { 'content-type': types[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(res);
}).listen(4173);
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
const bad = []; p.on('response', r => { if (r.status() >= 400) bad.push(r.status() + ' ' + r.url()); });
for (const [n, k] of [[1, 0], [8, 4], [13, 2]]) {
  await p.goto(`http://localhost:4173/seminario-braco-axila/#/${n}?clicks=${k}`, { waitUntil: 'networkidle' });
  await p.waitForTimeout(1500); await p.screenshot({ path: `../qa/site-${n}.png` });
}
await p.goto('http://localhost:4173/seminario-braco-axila/#/presenter/3', { waitUntil: 'networkidle' }); await p.waitForTimeout(1500);
await p.screenshot({ path: '../qa/site-presenter.png' });
console.log('falhas:', bad.length ? bad : 'nenhuma');
await b.close(); srv.close();
