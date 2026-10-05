<script setup>
// Mapa esquemático do braço DIREITO em vista anterior (lateral = esquerda da tela).
// mode="artery": step 1 limites · 2 a. braquial profunda · 3 colaterais ulnares · 4 bifurcação
// mode="nerves": step 1 musculocutâneo · 2 mediano · 3 ulnar · 4 radial · 5 axilar (0 = todos)
import { computed } from 'vue'
const props = defineProps({ mode: { type: String, default: 'nerves' }, step: { type: Number, default: 0 } })
const N = computed(() => props.mode === 'nerves')
const focus = computed(() => (N.value ? ({ 1: 'mc', 2: 'med', 3: 'uln', 4: 'rad', 5: 'ax' }[props.step] || null) : null))
const nCls = k => ['nv', N.value ? (focus.value === null || focus.value === k ? 'hi' : 'lo') : 'ghost']
const aOn = s => !N.value && props.step >= s
</script>

<template>
  <svg viewBox="34 14 430 532" class="svg-anim course" role="img" aria-label="Trajeto de vasos e nervos no braço">
    <!-- úmero -->
    <path class="bone" d="M162 78 C158 58 168 40 188 36 C210 30 238 42 240 64 C242 84 224 96 202 98 L198 378 C216 398 238 420 242 446 C244 458 234 468 222 468 L206 478 L152 478 C140 472 128 462 126 450 C128 428 150 400 168 378 L170 102 C166 96 162 88 162 78 Z" />
    <g class="bl">
      <text x="246" y="473">epicôndilo medial</text>
      <text x="120" y="458" text-anchor="end">epicôndilo lateral</text>
    </g>
    <!-- coracobraquial -->
    <path d="M262 30 C250 70 226 150 200 236 L194 232 C214 150 236 70 250 28 Z" fill="var(--muscle)" opacity="0.22" />
    <text x="246" y="30" class="ml" text-anchor="end">m. coracobraquial</text>

    <!-- margem inferior do redondo maior: axilar → braquial -->
    <g :style="{ opacity: N ? 0.35 : (step >= 1 ? 1 : 0.35) }">
      <line x1="196" y1="118" x2="350" y2="118" stroke="var(--ink)" stroke-dasharray="3 4" stroke-width="1" />
      <text x="350" y="112" text-anchor="end" class="ref">margem inf. do redondo maior</text>
    </g>

    <!-- ====== ARTÉRIA ====== -->
    <g :class="N ? 'agh' : ''">
      <!-- a. axilar → braquial -->
      <path d="M300 22 C292 70 278 100 268 118" class="ar axl" />
      <path d="M268 118 C258 190 236 300 214 400 C206 436 198 456 192 474" class="ar main" />
      <!-- profunda (posterior: tracejada) -->
      <g :style="{ opacity: N || aOn(2) ? 1 : 0.15 }">
        <path d="M265 132 C240 152 212 192 188 240 C170 274 152 304 134 334" class="ar br dash" />
        <path d="M134 334 C124 370 120 410 122 446" class="ar br" />
        <path d="M150 300 C150 360 154 410 156 448" class="ar br dash thin" />
      </g>
      <!-- colaterais ulnares -->
      <g :style="{ opacity: N || aOn(3) ? 1 : 0.15 }">
        <path d="M250 206 C266 262 262 362 244 448" class="ar br dash" />
        <path d="M216 392 C228 404 238 418 246 434" class="ar br" />
      </g>
      <!-- bifurcação -->
      <g :style="{ opacity: N || aOn(4) ? 1 : 0.15 }">
        <path d="M192 474 C176 496 160 516 150 540" class="ar main" />
        <path d="M192 474 C204 496 216 516 226 540" class="ar main" />
      </g>
    </g>

    <!-- ====== NERVOS ====== -->
    <!-- axilar -->
    <path :class="nCls('ax')" d="M290 26 C276 50 248 84 214 94" />
    <path :class="[...nCls('ax'), 'dash']" d="M214 94 C190 100 168 98 148 86" />
    <!-- radial -->
    <path :class="nCls('rad')" d="M296 26 C290 70 282 110 272 138" />
    <path :class="[...nCls('rad'), 'dash']" d="M272 138 C246 168 214 208 190 250 C172 286 152 318 136 346" />
    <path :class="nCls('rad')" d="M136 346 C128 388 126 420 126 456 L128 540 M126 462 C120 484 112 506 106 524" />
    <!-- musculocutâneo -->
    <path :class="nCls('mc')" d="M262 22 C250 60 238 100 226 138 C200 220 172 330 152 428 C148 452 144 480 140 540" />
    <!-- mediano -->
    <path :class="nCls('med')" d="M280 22 C270 76 256 100 252 120 C244 180 232 228 234 258 C236 288 244 300 240 330 C236 380 220 430 208 476 L204 540" />
    <!-- ulnar -->
    <path :class="nCls('uln')" d="M312 22 C302 74 292 110 286 132 C280 180 272 210 266 236" />
    <path :class="[...nCls('uln'), 'dash']" d="M266 236 C262 300 254 380 242 452 L246 540" />

    <!-- marcos: perfurações -->
    <g :style="{ opacity: N ? 1 : 0 }">
      <circle cx="228" cy="132" r="7" class="mark" :style="{ opacity: !focus || focus === 'mc' ? 1 : .2 }" />
      <circle cx="266" cy="236" r="7" class="mark" :style="{ opacity: !focus || focus === 'uln' ? 1 : .2 }" />
      <circle cx="136" cy="346" r="7" class="mark" :style="{ opacity: !focus || focus === 'rad' ? 1 : .2 }" />
      <circle cx="236" cy="262" r="7" class="mark x" :style="{ opacity: !focus || focus === 'med' ? 1 : .2 }" />
    </g>

    <!-- rótulos de nervos -->
    <g v-if="N" class="nl">
      <text x="62" y="86" :class="{ f: focus === 'ax' }" :style="{ opacity: !focus || focus === 'ax' ? 1 : .25 }">N. axilar</text>
      <text x="62" y="250" :class="{ f: focus === 'rad' }" :style="{ opacity: !focus || focus === 'rad' ? 1 : .25 }">N. radial</text>
      <text x="62" y="264" class="s" :style="{ opacity: !focus || focus === 'rad' ? 1 : .25 }">no sulco do n. radial</text>
      <text x="62" y="410" :class="{ f: focus === 'mc' }" :style="{ opacity: !focus || focus === 'mc' ? 1 : .25 }">N. musculocutâneo</text>
      <text x="62" y="424" class="s" :style="{ opacity: !focus || focus === 'mc' ? 1 : .25 }">→ n. cutâneo lat. do antebraço</text>
      <text x="290" y="300" :class="{ f: focus === 'med' }" :style="{ opacity: !focus || focus === 'med' ? 1 : .25 }">N. mediano</text>
      <text x="290" y="314" class="s" :style="{ opacity: !focus || focus === 'med' ? 1 : .25 }">cruza a artéria</text>
      <text x="290" y="384" :class="{ f: focus === 'uln' }" :style="{ opacity: !focus || focus === 'uln' ? 1 : .25 }">N. ulnar</text>
      <text x="290" y="398" class="s" :style="{ opacity: !focus || focus === 'uln' ? 1 : .25 }">atrás do epicôndilo</text>
    </g>

    <!-- rótulos da artéria -->
    <g v-else class="al">
      <text x="306" y="60" :style="{ opacity: step >= 1 ? 1 : .3 }">A. axilar</text>
      <text x="290" y="190" :style="{ opacity: step >= 1 ? 1 : .3 }">A. braquial</text>
      <text x="290" y="204" class="s" :style="{ opacity: step >= 1 ? 1 : .3 }">medial → anterior</text>
      <text x="62" y="236" :style="{ opacity: step >= 2 ? 1 : .15 }">A. braquial</text>
      <text x="62" y="250" :style="{ opacity: step >= 2 ? 1 : .15 }">profunda</text>
      <text x="62" y="264" class="s" :style="{ opacity: step >= 2 ? 1 : .15 }">com o n. radial</text>
      <text x="62" y="372" class="s" :style="{ opacity: step >= 2 ? 1 : .15 }">a. colateral radial</text>
      <text x="282" y="300" :style="{ opacity: step >= 3 ? 1 : .15 }">A. colateral</text>
      <text x="282" y="314" :style="{ opacity: step >= 3 ? 1 : .15 }">ulnar superior</text>
      <text x="282" y="328" class="s" :style="{ opacity: step >= 3 ? 1 : .15 }">com o n. ulnar</text>
      <text x="282" y="420" :style="{ opacity: step >= 3 ? 1 : .15 }">A. col. ulnar inferior</text>
      <text x="62" y="520" :style="{ opacity: step >= 4 ? 1 : .15 }">A. radial</text>
      <text x="238" y="530" :style="{ opacity: step >= 4 ? 1 : .15 }">A. ulnar</text>
    </g>
  </svg>
</template>

<style scoped>
.course { position: absolute; inset: 0; width: 100%; height: 100%; }
.bone { fill: #efe6d6; stroke: #b4a283; stroke-width: 1.3; }
.bl text { font-family: var(--f-mono); font-size: 10.5px; letter-spacing: .5px; fill: var(--muted); }
.ml { font-family: var(--f-sans); font-size: 12.5px; fill: var(--muscle); font-weight: 600; }
.ref { font-family: var(--f-mono); font-size: 10.5px; fill: var(--ink-2); letter-spacing: .4px; }
.ar { fill: none; stroke: var(--art); stroke-linecap: round; }
.ar.main { stroke-width: 6.5; }
.ar.axl { stroke-width: 7; stroke: #a8322a; }
.ar.br { stroke-width: 3.2; }
.ar.thin { stroke-width: 2.4; }
.dash { stroke-dasharray: 4 5; }
.agh { opacity: .22; }
.nv { fill: none; stroke: var(--nerve); stroke-width: 4.6; stroke-linecap: round; stroke-linejoin: round; transition: opacity .6s var(--ease), stroke-width .6s var(--ease); }
.nv.dash { stroke-dasharray: 3 6; }
.nv.hi { opacity: 1; }
.nv.lo { opacity: .12; }
.nv.ghost { opacity: .18; stroke-width: 3; }
.mark { fill: none; stroke: var(--ink); stroke-width: 1.6; }
.mark.x { stroke: var(--art); stroke-dasharray: 2 2; }
.nl text, .al text { font-family: var(--f-sans); font-size: 16.5px; font-weight: 600; fill: var(--nerve-ink); transition: opacity .6s var(--ease); }
.al text { fill: var(--art); }
.nl text.s, .al text.s { font-size: 13px; font-weight: 400; fill: var(--ink-2); }
.nl text.f { fill: var(--ink); }
</style>
