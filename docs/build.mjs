import fs from 'node:fs';
import sharp from 'sharp';
import pptxgen from 'pptxgenjs';
import { chromium } from 'playwright-chromium';
const man = JSON.parse(fs.readFileSync('shots/manifest.json', 'utf8'));
fs.mkdirSync('shots/jpg', { recursive: true });
for (const m of man) { m.jpg = m.file.replace('shots/', 'shots/jpg/').replace('.png', '.jpg'); await sharp(m.file).jpeg({ quality: 90, mozjpeg: true }).toFile(m.jpg); }
// ---- PPTX: um slide por estado de clique ----
const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE'; pres.title = 'Braço & Axila — APM I'; pres.author = 'Seminário APM I · FAMENE';
for (const m of man) {
  const s = pres.addSlide();
  s.background = { color: 'F3EEE5' };
  s.addImage({ path: m.jpg, x: 0, y: 0, w: 13.333, h: 7.5 });
  const tag = m.max ? `[Slide ${m.slide} · clique ${m.click}/${m.max}]\n` : `[Slide ${m.slide}]\n`;
  if (m.notes || m.max) s.addNotes(tag + (m.notes || ''));
}
await pres.writeFile({ fileName: '../Seminario-Braco-Axila.pptx' });
// ---- PDF: estado final de cada slide ----
const finals = man.filter(m => m.click === m.max);
const html = `<html><head><style>@page{size:1920px 1080px;margin:0}body{margin:0}img{display:block;width:1920px;height:1080px;page-break-after:always}</style></head><body>${finals.map(m => `<img src="data:image/jpeg;base64,${fs.readFileSync(m.jpg).toString('base64')}">`).join('')}</body></html>`;
const b = await chromium.launch(); const p = await b.newPage();
await p.setContent(html, { waitUntil: 'load' });
await p.pdf({ path: '../Seminario-Braco-Axila.pdf', width: '1920px', height: '1080px', printBackground: true });
await b.close();
console.log('pptx slides:', man.length, '| pdf pages:', finals.length);
