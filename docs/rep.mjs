import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const pairs = (await import(pathToFileURL(path.resolve(process.argv[2])).href)).default;
let s = fs.readFileSync('slides.md', 'utf8');
for (const [a, b] of pairs) { if (!s.includes(a)) { console.log('NOT FOUND:', a.slice(0, 80)); continue; } s = s.replace(a, b); }
fs.writeFileSync('slides.md', s); console.log('ok');
