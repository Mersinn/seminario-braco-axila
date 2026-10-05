export default [
 ['<span class="eyebrow"><i style="background:var(--art)"></i>Da margem lateral da 1ª costela à margem inf. do redondo maior</span>','<span class="eyebrow"><i style="background:var(--art)"></i>1ª costela → redondo maior</span>'],
 ['<div class="parts" :class="{ show: $clicks >= 1 }">','<div class="parts" v-if="$clicks < 2" :class="{ show: $clicks >= 1 }">'],
 ['<div class="spaces-box" :class="{ show: $clicks >= 2 }">','<div class="spaces-box show" v-else>'],
 ['.spaces-box { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; align-items: center; margin-top: 10px; padding-top: 8px; border-top: 1px solid var(--hair);\n  opacity: 0; transition: opacity .7s var(--ease); }',
  '.spaces-box { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 14px; align-items: center; margin-top: 12px; padding-top: 10px; border-top: 1px solid var(--hair); animation: rise .7s var(--ease-out) both; }'],
 ['.sp-fig { height: 150px; }','.sp-fig { height: 236px; }'],
];
