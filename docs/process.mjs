import sharp from 'sharp';
// hue targets (deg, sat) by source color class
const PAL = {
  red:    [12, 0.52],   // terracota (cabeça longa / músculo principal)
  green:  [34, 0.62],   // âmbar (cabeça curta / medial)
  yellow: [352, 0.42],  // rosado-vinho (cabeça lateral)
};
function rgb2hsl(r,g,b){r/=255;g/=255;b/=255;const mx=Math.max(r,g,b),mn=Math.min(r,g,b);let h=0,s=0;const l=(mx+mn)/2;
 if(mx!==mn){const d=mx-mn;s=l>.5?d/(2-mx-mn):d/(mx+mn);
  h= mx===r?((g-b)/d+(g<b?6:0)):mx===g?((b-r)/d+2):((r-g)/d+4); h*=60;}return [h,s,l];}
function hsl2rgb(h,s,l){h/=360;const f=(p,q,t)=>{if(t<0)t+=1;if(t>1)t-=1;if(t<1/6)return p+(q-p)*6*t;if(t<1/2)return q;if(t<2/3)return p+(q-p)*(2/3-t)*6;return p;};
 if(s===0)return[l,l,l].map(v=>v*255);const q=l<.5?l*(1+s):l+s-l*s,p=2*l-q;return[f(p,q,h+1/3),f(p,q,h),f(p,q,h-1/3)].map(v=>Math.round(v*255));}
async function proc(src,out,box,{gain=1,recolor=true,width=1400}={}){
  const img=sharp('fontes-img/'+src); const m=await img.metadata();
  const left=Math.round(box[0]*m.width), top=Math.round(box[1]*m.height);
  const w=Math.round((box[2]-box[0])*m.width), h=Math.round((box[3]-box[1])*m.height);
  const {data,info}=await sharp('fontes-img/'+src).extract({left,top,width:w,height:h}).removeAlpha().raw().toBuffer({resolveWithObject:true});
  for(let i=0;i<data.length;i+=3){
    let r=Math.min(255,data[i]*gain),g=Math.min(255,data[i+1]*gain),b=Math.min(255,data[i+2]*gain);
    if(recolor){const [hh,s,l]=rgb2hsl(r,g,b);
      if(s>0.35&&l<0.97){let cls=null;
        if(hh<20||hh>340)cls='red';else if(hh>=40&&hh<75)cls='yellow';else if(hh>=75&&hh<170)cls='green';
        if(cls){const [th,ts]=PAL[cls];const L=cls==='yellow'?l*0.78:l;[r,g,b]=hsl2rgb(th,ts,Math.min(.92,L));}}}
    data[i]=r;data[i+1]=g;data[i+2]=b;}
  await sharp(data,{raw:info}).resize({width:Math.min(width,info.width)}).png({compressionLevel:9}).toFile('public/img/p/'+out);
  console.log('ok',out,info.width,info.height);
}
await proc('biceps-3d.png','biceps.png',[.07,.20,.34,.75]);
await proc('coraco-3d.png','coraco.png',[.12,.30,.42,.70]);
await proc('braquial-3d.png','braquial.png',[.18,.26,.42,.66]);
await proc('triceps-3d.png','triceps.png',[.08,.18,.34,.76],{gain:255/232});
await proc('umero-ant-3d.png','umero.png',[.19,.19,.40,.60],{recolor:false});
await proc('umero-post-3d.png','umero-post.png',[.19,.19,.40,.60],{recolor:false,gain:1});
await proc('gray-veias.png','veias.png',[0,0,1,1],{recolor:false,width:800});
// úmero: vermelho → osso realçado (marfim-ocre), clareando
async function bone(src,out,box){
  const m=await sharp('fontes-img/'+src).metadata();
  const left=Math.round(box[0]*m.width), top=Math.round(box[1]*m.height);
  const w=Math.round((box[2]-box[0])*m.width), h=Math.round((box[3]-box[1])*m.height);
  const {data,info}=await sharp('fontes-img/'+src).extract({left,top,width:w,height:h}).removeAlpha().raw().toBuffer({resolveWithObject:true});
  for(let i=0;i<data.length;i+=3){const [hh,s,l]=rgb2hsl(data[i],data[i+1],data[i+2]);
    if(s>0.35&&(hh<20||hh>340)){const [r,g,b]=hsl2rgb(34,0.52,Math.min(.9,.3+.8*l));data[i]=r;data[i+1]=g;data[i+2]=b;}}
  await sharp(data,{raw:info}).png().toFile('public/img/p/'+out); console.log('ok',out);
}
await bone('umero-ant-3d.png','umero.png',[.20,.19,.345,.60]);
await bone('umero-post-3d.png','umero-post.png',[.20,.19,.345,.60]);
