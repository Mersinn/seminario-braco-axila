import { chromium } from 'playwright-chromium';
import fs from 'node:fs';
const md = fs.readFileSync('slides.md', 'utf8');
// separa slides: o 1º bloco é headmatter + slide 1
const parts = md.split(/\n---\n/);
// reconstruir slides: frontmatter de slide aparece como "clicks: N" isolado entre separadores
const slides = []; let pendingClicks = 0;
for (let i = 1; i < parts.length; i++) {
  const p = parts[i];
  if (/^clicks:\s*\d+\s*$/.test(p.trim())) { pendingClicks = +p.trim().split(':')[1]; continue; }
  slides.push({ clicks: pendingClicks, body: p }); pendingClicks = 0;
}
// slide 1 está no parts[1] (após headmatter) — ajustar: headmatter é parts[0]
const out = 'shots'; fs.mkdirSync(out, { recursive: true });
fs.rmSync(out, { recursive: true, force: true }); fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
const manifest = [];
for (let s = 0; s < slides.length; s++) {
  const n = s + 1, max = slides[s].clicks;
  const notes = (slides[s].body.match(/<!--([\s\S]*?)-->\s*$/) || [, ''])[1].trim();
  for (let k = 0; k <= max; k++) {
    await page.goto(`http://localhost:3131/#/${n}?clicks=${k}`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.mouse.move(5, 5);
    await page.waitForTimeout(k === 0 ? 1600 : 1300);
    const file = `${out}/s${String(n).padStart(2, '0')}_${k}.png`;
    await page.screenshot({ path: file });
    manifest.push({ slide: n, click: k, max, file, notes });
    process.stdout.write(`${n}.${k} `);
  }
}
fs.writeFileSync(`${out}/manifest.json`, JSON.stringify(manifest, null, 1));
await browser.close(); console.log('\nshots:', manifest.length);
