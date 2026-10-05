<script setup>
// Pirâmide axilar (esquema). step: 1 ápice · 2 base · 3 anterior · 4 posterior · 5 medial · 6 lateral · 7 conteúdo
import { computed } from 'vue'
const props = defineProps({ step: { type: Number, default: 0 } })
const P = { 1: [196, 58], 2: [236, 50], 3: [252, 66], 4: [212, 74] }
const Q = { 1: [64, 300], 2: [300, 262], 3: [338, 296], 4: [110, 346] }
const pts = (...a) => a.map(p => p.join(',')).join(' ')
const faces = {
  posterior: pts(P[1], P[2], Q[2], Q[1]),
  medial: pts(P[1], P[4], Q[4], Q[1]),
  lateral: pts(P[3], P[2], Q[2], Q[3]),
  anterior: pts(P[4], P[3], Q[3], Q[4]),
  base: pts(Q[1], Q[2], Q[3], Q[4]),
  apice: pts(P[1], P[2], P[3], P[4]),
}
const active = computed(() => ({ 1: 'apice', 2: 'base', 3: 'anterior', 4: 'posterior', 5: 'medial', 6: 'lateral' }[props.step]))
const cls = k => ['face', `f-${k}`, active.value === k && 'on', props.step >= 1 && props.step <= 6 && active.value !== k && 'off']
</script>

<template>
  <svg viewBox="20 20 380 360" class="svg-anim pyr" role="img" aria-label="Pirâmide axilar">
    <defs>
      <pattern id="py-hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
        <line x1="0" y1="0" x2="0" y2="7" stroke="#b99a80" stroke-width="1" />
      </pattern>
    </defs>
    <!-- faces ocultas primeiro -->
    <polygon :points="faces.posterior" :class="cls('posterior')" stroke-dasharray="4 4" />
    <polygon :points="faces.base" :class="cls('base')" />
    <polygon :points="faces.base" fill="url(#py-hatch)" :style="{ opacity: active === 'base' ? 0.9 : 0.35 }" pointer-events="none" />

    <!-- conteúdo: feixe neurovascular do ápice ao braço -->
    <g :style="{ opacity: step >= 7 ? 1 : 0 }">
      <path d="M218 40 C230 120 270 200 330 286 L362 330" fill="none" stroke="var(--nerve)" stroke-width="7" stroke-linecap="round" />
      <path d="M228 40 C240 120 282 196 340 280 L374 322" fill="none" stroke="var(--art)" stroke-width="6" stroke-linecap="round" />
      <path d="M208 42 C218 124 258 206 320 292 L350 336" fill="none" stroke="var(--vein)" stroke-width="6" stroke-linecap="round" />
      <g fill="#7a8f6a" opacity="0.8">
        <circle cx="176" cy="220" r="5" /><circle cx="200" cy="250" r="4" /><circle cx="150" cy="260" r="4.5" />
        <circle cx="238" cy="150" r="4" /><circle cx="262" cy="232" r="4" />
      </g>
    </g>

    <polygon :points="faces.medial" :class="cls('medial')" />
    <polygon :points="faces.lateral" :class="cls('lateral')" />
    <polygon :points="faces.anterior" :class="cls('anterior')" />
    <polygon :points="faces.apice" :class="cls('apice')" />

    <!-- rótulos das faces -->
    <g class="fl">
      <text x="224" y="38" text-anchor="middle" :class="{ on: active === 'apice' }">ÁPICE</text>
      <text x="200" y="372" text-anchor="middle" :class="{ on: active === 'base' }">BASE</text>
      <text x="232" y="214" text-anchor="middle" :class="{ on: active === 'anterior' }">ANTERIOR</text>
      <text x="140" y="206" text-anchor="middle" transform="rotate(-63 140 206)" :class="{ on: active === 'medial' }">MEDIAL</text>
      <text x="324" y="170" text-anchor="middle" :class="{ on: active === 'lateral' }">LATERAL</text>
      <text x="236" y="128" text-anchor="middle" class="hid" :class="{ on: active === 'posterior' }">posterior</text>
    </g>
    <g :style="{ opacity: step >= 7 ? 1 : 0 }" class="cl">
      <text x="276" y="98">a. · v. axilares</text>
      <text x="276" y="113">+ plexo braquial</text>
      <text x="132" y="294">linfonodos</text>
    </g>
  </svg>
</template>

<style scoped>
.pyr { width: 100%; height: 100%; }
.face { stroke: #8f7d68; stroke-width: 1.3; stroke-linejoin: round; transition: fill .6s var(--ease), opacity .6s var(--ease); }
.f-posterior { fill: #e6dccd; }
.f-base { fill: #f1dcc8; }
.f-medial { fill: #e9ddcb; opacity: .92; }
.f-lateral { fill: #ddd0bd; opacity: .92; }
.f-anterior { fill: #efe5d6; opacity: .78; }
.f-apice { fill: #e3d5c0; }
.face.off { opacity: .32; }
.face.on { fill: var(--muscle); opacity: .88; stroke: var(--ink); stroke-width: 1.8; }
.f-base.on { fill: #e7b9a1; }
.fl text { font-family: var(--f-mono); font-size: 13px; letter-spacing: 2px; fill: var(--ink-2); font-weight: 600; transition: fill .5s; }
.fl text.on { fill: var(--core); }
.fl text.hid { fill: var(--muted); font-style: italic; letter-spacing: 1px; }
.fl text.hid.on { fill: var(--core); }
.fl text[y="38"].on, .fl text[y="372"].on { fill: var(--muscle); }
.cl text { font-family: var(--f-sans); font-size: 14px; fill: var(--ink-2); font-weight: 600; }
</style>
