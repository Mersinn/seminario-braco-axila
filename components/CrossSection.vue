<script setup>
// Corte transversal do braço DIREITO no terço médio, visto de baixo
// (convenção de imagem axial): anterior em cima, lateral à esquerda.
// step 0 pele/subcutâneo/úmero · 1 fáscia · 2 septos · 3 compartimentos · 4 feixes
const props = defineProps({ step: { type: Number, default: 0 } })
</script>

<template>
  <svg viewBox="-138 30 976 484" class="svg-anim xsec" role="img"
       aria-label="Corte transversal do braço no terço médio">
    <defs>
      <clipPath id="xs-in"><ellipse cx="350" cy="255" rx="195" ry="174" /></clipPath>
      <clipPath id="xs-ant"><path d="M0 0 H700 V300 L374 300 A30 30 0 0 0 316 300 L0 300 Z" /></clipPath>
      <clipPath id="xs-post"><path d="M0 520 H700 V300 L374 300 A30 30 0 0 1 316 300 L0 300 Z" /></clipPath>
      <pattern id="xs-fat" width="10" height="10" patternUnits="userSpaceOnUse">
        <circle cx="5" cy="5" r="3.6" fill="none" stroke="#e2cf9f" stroke-width="0.9" />
      </pattern>
      <radialGradient id="xs-bone" cx="45%" cy="40%" r="60%">
        <stop offset="0%" stop-color="#fffaf0" /><stop offset="100%" stop-color="#e3d7c2" />
      </radialGradient>
    </defs>

    <!-- pele + tela subcutânea -->
    <ellipse cx="350" cy="255" rx="218" ry="196" fill="#f1dcc8" stroke="#b99a80" stroke-width="1.8" />
    <ellipse cx="350" cy="255" rx="211" ry="189" fill="url(#xs-fat)" />
    <ellipse cx="350" cy="255" rx="211" ry="189" fill="#f6e9cf" opacity="0.5" />
    <ellipse cx="350" cy="255" rx="196" ry="175" fill="#ece1d2" />

    <!-- compartimentos (tinta) -->
    <g :style="{ opacity: step >= 3 ? 1 : 0 }">
      <ellipse cx="350" cy="255" rx="196" ry="175" fill="rgba(109,138,92,.30)" clip-path="url(#xs-ant)" />
      <ellipse cx="350" cy="255" rx="196" ry="175" fill="rgba(130,101,140,.30)" clip-path="url(#xs-post)" />
    </g>

    <!-- músculos, recortados pela fáscia -->
    <g :class="['mus', step >= 3 && 'on']" clip-path="url(#xs-in)">
      <ellipse class="m m-a1" cx="290" cy="138" rx="84" ry="58" />
      <ellipse class="m m-a2" cx="420" cy="140" rx="74" ry="54" />
      <path class="m m-a3" d="M192 300 C192 240 262 212 340 210 C420 212 468 244 472 300 L374 300 A30 30 0 0 0 316 300 Z" />
      <path class="m m-p2" d="M140 306 L262 306 C268 350 296 376 334 392 L334 470 L140 470 Z" />
      <path class="m m-p3" d="M430 306 L570 306 L570 470 L334 470 L334 392 C380 380 420 352 430 306 Z" />
      <path class="m m-p1" d="M262 306 C268 350 296 376 334 392 C376 380 420 352 430 306 Z" />
    </g>

    <!-- úmero -->
    <circle cx="345" cy="300" r="30" fill="url(#xs-bone)" stroke="#a89474" stroke-width="1.6" />
    <circle cx="345" cy="300" r="15" fill="#e9d6a8" stroke="#c7b083" stroke-width="0.9" />

    <!-- FÁSCIA BRAQUIAL -->
    <ellipse cx="350" cy="255" rx="196" ry="175" fill="none"
             :stroke="step >= 1 ? 'var(--ink)' : '#b8a68e'"
             :stroke-width="step === 1 ? 4.5 : step >= 1 ? 2.6 : 1.2" />
    <ellipse v-if="step === 1" cx="350" cy="255" rx="196" ry="175" fill="none"
             stroke="var(--muscle)" stroke-width="10" class="pulse" />

    <!-- SEPTOS INTERMUSCULARES -->
    <g fill="none" stroke="var(--ink)" stroke-linecap="round">
      <path d="M316 302 C270 302 210 302 160 302" :stroke-width="step === 2 ? 4.5 : 2.6"
            stroke-dasharray="170" :stroke-dashoffset="step >= 2 ? 0 : 170" />
      <path d="M374 302 C420 302 490 302 540 302" :stroke-width="step === 2 ? 4.5 : 2.6"
            stroke-dasharray="180" :stroke-dashoffset="step >= 2 ? 0 : 180" />
    </g>

    <!-- FEIXES NEUROVASCULARES -->
    <g :style="{ opacity: step >= 4 ? 1 : 0 }">
      <circle cx="188" cy="140" r="10" fill="var(--vein)" stroke="#fff" stroke-width="1.6" />
      <circle cx="548" cy="200" r="10" fill="var(--vein)" stroke="#fff" stroke-width="1.6" />
      <circle cx="505" cy="262" r="12" fill="var(--art)" stroke="#fff" stroke-width="1.6" />
      <circle cx="489" cy="277" r="6" fill="var(--vein)" stroke="#fff" stroke-width="1.2" />
      <circle cx="521" cy="277" r="6" fill="var(--vein)" stroke="#fff" stroke-width="1.2" />
      <circle cx="508" cy="237" r="9" fill="var(--nerve)" stroke="var(--nerve-ink)" stroke-width="1.4" />
      <circle cx="350" cy="203" r="7" fill="var(--nerve)" stroke="var(--nerve-ink)" stroke-width="1.4" />
      <circle cx="503" cy="322" r="8" fill="var(--nerve)" stroke="var(--nerve-ink)" stroke-width="1.4" />
      <circle cx="518" cy="332" r="4.5" fill="var(--art)" stroke="#fff" stroke-width="1" />
      <circle cx="282" cy="340" r="8" fill="var(--nerve)" stroke="var(--nerve-ink)" stroke-width="1.4" />
      <circle cx="296" cy="354" r="5" fill="var(--art)" stroke="#fff" stroke-width="1" />
    </g>

    <!-- orientação -->
    <g class="ori">
      <text x="350" y="50" text-anchor="middle">ANTERIOR</text>
      <text x="350" y="506" text-anchor="middle">POSTERIOR</text>
      <text x="350" y="300" text-anchor="middle" class="u" :style="{ opacity: step === 2 ? 1 : 0 }">úmero</text>
    </g>

    <!-- passo 1-2 -->
    <g class="lbl" :style="{ opacity: step >= 1 && step < 3 ? 1 : 0 }">
      <line x1="228" y1="104" x2="124" y2="84" />
      <text x="118" y="80" text-anchor="end" class="b">Fáscia braquial</text>
      <text x="118" y="104" text-anchor="end" class="s">fáscia muscular profunda</text>
      <line x1="176" y1="400" x2="124" y2="440" />
      <text x="118" y="448" text-anchor="end" class="s">tela subcutânea</text>
    </g>
    <g class="lbl" :style="{ opacity: step === 2 ? 1 : 0 }">
      <line x1="220" y1="302" x2="124" y2="330" />
      <text x="118" y="330" text-anchor="end" class="b">Septo</text>
      <text x="118" y="356" text-anchor="end" class="b">intermuscular lateral</text>
      <line x1="480" y1="302" x2="576" y2="330" />
      <text x="582" y="330" class="b">Septo</text>
      <text x="582" y="356" class="b">intermuscular medial</text>
    </g>

    <!-- passo 3: músculos -->
    <g class="lbl" :style="{ opacity: step === 3 ? 1 : 0 }">
      <line x1="236" y1="112" x2="124" y2="96" />
      <text x="118" y="92" text-anchor="end" class="b">Bíceps</text>
      <text x="118" y="116" text-anchor="end" class="s">cabeça longa</text>
      <line x1="468" y1="112" x2="576" y2="96" />
      <text x="582" y="92" class="b">Bíceps</text>
      <text x="582" y="116" class="s">cabeça curta</text>
      <line x1="232" y1="262" x2="124" y2="232" />
      <text x="118" y="238" text-anchor="end" class="b">Braquial</text>
      <line x1="196" y1="358" x2="124" y2="388" />
      <text x="118" y="386" text-anchor="end" class="b">Tríceps</text>
      <text x="118" y="410" text-anchor="end" class="s">cabeça lateral</text>
      <line x1="345" y1="372" x2="208" y2="474" />
      <text x="200" y="482" text-anchor="end" class="s">cabeça medial</text>
      <line x1="470" y1="372" x2="576" y2="392" />
      <text x="582" y="390" class="b">Tríceps</text>
      <text x="582" y="414" class="s">cabeça longa</text>
    </g>

    <!-- passo 4: feixes -->
    <g class="lbl" :style="{ opacity: step >= 4 ? 1 : 0 }">
      <line x1="180" y1="134" x2="124" y2="112" />
      <text x="118" y="116" text-anchor="end" class="b v">V. cefálica</text>
      <line x1="343" y1="203" x2="124" y2="184" />
      <text x="118" y="190" text-anchor="end" class="b n">N. musculocutâneo</text>
      <line x1="274" y1="342" x2="124" y2="390" />
      <text x="118" y="388" text-anchor="end" class="b n">N. radial</text>
      <text x="118" y="412" text-anchor="end" class="s a">+ a. braquial profunda</text>
      <line x1="556" y1="194" x2="576" y2="166" />
      <text x="582" y="166" class="b v">V. basílica</text>
      <line x1="516" y1="234" x2="576" y2="214" />
      <text x="582" y="218" class="b n">N. mediano</text>
      <line x1="517" y1="262" x2="576" y2="264" />
      <text x="582" y="266" class="b a">A. braquial</text>
      <text x="582" y="290" class="s v">+ vv. braquiais</text>
      <line x1="511" y1="324" x2="576" y2="350" />
      <text x="582" y="352" class="b n">N. ulnar</text>
      <text x="582" y="376" class="s a">+ a. colateral ulnar sup.</text>
    </g>
  </svg>
</template>

<style scoped>
.xsec { width: 100%; height: 100%; }
.m { fill: #d9cbb8; stroke: #fbf7ef; stroke-width: 2.4; }
.mus.on .m-a1 { fill: #b5563e; }
.mus.on .m-a2 { fill: #b9802c; }
.mus.on .m-a3 { fill: #c97a5c; }
.mus.on .m-p1 { fill: #b9802c; }
.mus.on .m-p2 { fill: #9c4a5a; }
.mus.on .m-p3 { fill: #b5563e; }
.ori text { font-family: var(--f-mono); font-size: 15px; letter-spacing: 3px; fill: var(--muted); }
.ori text.u { font-family: var(--f-sans); letter-spacing: 0; font-size: 13px; fill: var(--ink-2); transition: opacity .5s; }
.lbl line { stroke: var(--ink); stroke-width: 1.3; opacity: 0.55; }
.lbl text { font-family: var(--f-sans); fill: var(--ink); }
.lbl .b { font-size: 26px; font-weight: 600; }
.lbl .s { font-size: 20.5px; fill: var(--ink-2); }
.lbl .a { fill: var(--art); }
.lbl .v { fill: var(--vein); }
.lbl .n { fill: var(--nerve-ink); }
.pulse { animation: pulse 1.8s var(--ease) infinite; }
@keyframes pulse { 0%,100% { opacity: .06 } 50% { opacity: .26 } }
</style>
