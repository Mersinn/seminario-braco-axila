import fs from 'node:fs';
const map = {
 'biceps-3d.png':'Biceps brachii muscle06.png',
 'biceps-3d-b.png':'Biceps brachii muscle04.png',
 'coraco-3d.png':'Coracobrachialis muscle06.png',
 'coraco-3d-b.png':'Coracobrachialis muscle02.png',
 'braquial-3d.png':'Brachialis muscle06.png',
 'braquial-3d-b.png':'Brachialis muscle02.png',
 'triceps-3d.png':'Triceps brachii muscle06.png',
 'triceps-3d-b.png':'Triceps brachii muscle02.png',
 'umero-ant-3d.png':'Humerus - anterior view.png',
 'umero-post-3d.png':'Humerus - posterior view.png',
 'umero-esq-ant.png':'Left humerus - anterior view.png',
 'plexo-cor.svg':'Brachial plexus color - PT.svg',
 'gray-axilar.png':'Gray523.png',
 'gray-braquial.png':'Gray525.png',
 'gray-braquial2.png':'Gray526.png',
 'gray-circunflexas.png':'Gray524.png',
 'gray-plexo-insitu.png':'Gray808.png',
 'gray-plexo-axila.png':'Gray809.png',
 'gray-axilar-nervo.png':'Gray810.png',
 'gray-musc-ant.png':'Gray411.png',
 'gray-musc-post.png':'Gray412.png',
 'gray413.png':'Gray413.png',
 'gray414.png':'Gray414.png',
 'gray-veias.png':'Gray574.png',
 'gray-cutaneos.png':'Gray811.png',
 'gray-umero-ant.png':'Gray207.png',
 'gray-umero-post.png':'Gray208.png',
 'openstax-veias.jpg':'2134 Thoracic Upper Limb Veins.jpg',
 'axilar-limites.png':'Axillary limits.PNG',
};
const UA={'User-Agent':'EduSeminarBot/1.0 (student anatomy seminar)'};
const titles=Object.values(map).map(t=>'File:'+t);
const meta={};
for(let i=0;i<titles.length;i+=40){
  const u='https://commons.wikimedia.org/w/api.php?'+new URLSearchParams({action:'query',titles:titles.slice(i,i+40).join('|'),prop:'imageinfo',iiprop:'url|extmetadata',iiurlwidth:'1800',iiextmetadatafilter:'LicenseShortName|Artist',format:'json',formatversion:'2'});
  const r=await (await fetch(u,{headers:UA})).json();
  for(const p of r.query.pages){ if(p.imageinfo) meta[p.title.replace('File:','')]=p.imageinfo[0]; else console.log('MISSING',p.title); }
}
const credits=[];
for(const [out,t] of Object.entries(map)){
  const ii=meta[t]||meta[t.replace(/_/g,' ')]; if(!ii){console.log('no meta',t);continue;}
  const dest='public/img/'+out;
  if(!fs.existsSync(dest)){
    let url=(ii.thumburl&&!t.endsWith('.svg'))?ii.thumburl:ii.url;
    let res; for(let k=0;k<6;k++){res=await fetch(url,{headers:UA}); if(res.status!==429)break; const w=(+res.headers.get('retry-after')||20)*1000; console.log('wait',w,t); await new Promise(r=>setTimeout(r,w));} if(!res.ok){console.log('FAIL',res.status,t);continue;}
    fs.writeFileSync(dest,Buffer.from(await res.arrayBuffer()));
    await new Promise(r=>setTimeout(r,6000));
  }
  const m=ii.extmetadata||{};
  credits.push({file:out,source:t,license:m.LicenseShortName?.value,artist:(m.Artist?.value||'').replace(/<[^>]+>/g,'').trim().slice(0,80),page:ii.descriptionurl});
  console.log('ok',out);
}
fs.writeFileSync('docs/credits.json',JSON.stringify(credits,null,1));
