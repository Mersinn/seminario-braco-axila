import sharp from 'sharp';
const m=await sharp('fontes-img/gray-veias.png').metadata();
const b=[.27,0,.73,.47];
await sharp('fontes-img/gray-veias.png').extract({left:Math.round(b[0]*m.width),top:0,width:Math.round((b[2]-b[0])*m.width),height:Math.round(b[3]*m.height)}).resize({height:900,kernel:'lanczos3'}).sharpen().png().toFile('public/img/p/veias-braco.png');
console.log('ok');
