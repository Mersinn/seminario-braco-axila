<script setup>
// Esquema do plexo braquial direito, proximal (esq.) → distal (dir.)
// step 0 raízes · 1 troncos · 2 divisões · 3 fascículos · 4 ramos terminais · 5 topografia
const props = defineProps({ step: { type: Number, default: 0 } })
const roots = [
  { n: 'C5', y: 52 }, { n: 'C6', y: 112 }, { n: 'C7', y: 182 }, { n: 'C8', y: 252 }, { n: 'T1', y: 312 },
]
</script>

<template>
  <svg viewBox="0 0 980 440" preserveAspectRatio="xMidYMid meet" class="svg-anim plexus" role="img" aria-label="Esquema do plexo braquial">
    <!-- colunas -->
    <g class="cols" letter-spacing="2.2" text-anchor="middle" style="font-family:var(--f-mono);font-size:11.5px">
      <text x="85" y="18" :class="{ hi: step === 0 }">RAÍZES · 5</text>
      <text x="230" y="18" :class="{ hi: step === 1 }" :style="{ opacity: step >= 1 ? 1 : 0.25 }">TRONCOS · 3</text>
      <text x="350" y="18" :class="{ hi: step === 2 }" :style="{ opacity: step >= 2 ? 1 : 0.25 }">DIVISÕES · 6</text>
      <text x="490" y="18" :class="{ hi: step === 3 }" :style="{ opacity: step >= 3 ? 1 : 0.25 }">FASCÍCULOS · 3</text>
      <text x="745" y="18" :class="{ hi: step === 4 }" :style="{ opacity: step >= 4 ? 1 : 0.25 }">RAMOS TERMINAIS · 5</text>
    </g>

    <!-- RAÍZES (ramos anteriores C5–T1) -->
    <g>
      <template v-for="r in roots" :key="r.n">
        <text x="22" :y="r.y + 4" class="root-lab">{{ r.n }}</text>
        <path :d="`M46 ${r.y} H130`" class="nv base" />
      </template>
    </g>

    <!-- TRONCOS -->
    <g :style="{ opacity: step >= 1 ? 1 : 0 }">
      <path d="M130 52 C165 52 175 82 200 82 M130 112 C165 112 175 82 200 82 M200 82 H270" class="nv base" />
      <path d="M130 182 H270" class="nv base" />
      <path d="M130 252 C165 252 175 282 200 282 M130 312 C165 312 175 282 200 282 M200 282 H270" class="nv base" />
      <g class="tl" text-anchor="middle">
        <text x="236" y="70">superior · C5–C6</text>
        <text x="236" y="170">médio · C7</text>
        <text x="236" y="270">inferior · C8–T1</text>
      </g>
    </g>

    <!-- DIVISÕES: anteriores (cheias) e posteriores (tracejadas) -->
    <g :style="{ opacity: step >= 2 ? 1 : 0 }">
      <!-- anteriores do sup. e médio → lateral -->
      <path d="M270 82 C320 82 350 112 430 112" class="nv lat" />
      <path d="M270 182 C320 182 360 116 430 112" class="nv lat" />
      <!-- posteriores dos 3 → posterior -->
      <path d="M270 82 C320 90 360 196 430 200" class="nv post dash" />
      <path d="M270 182 C320 186 360 198 430 200" class="nv post dash" />
      <path d="M270 282 C320 274 360 206 430 200" class="nv post dash" />
      <!-- anterior do inferior → medial -->
      <path d="M270 282 C330 282 370 290 430 290" class="nv med" />
      <text x="352" y="352" class="tl" text-anchor="middle">— anterior   ┄ posterior</text>
    </g>

    <!-- FASCÍCULOS (nomeados pela posição em relação à 2ª parte da a. axilar) -->
    <g :style="{ opacity: step >= 3 ? 1 : 0 }">
      <path d="M430 112 H560" class="nv lat thick" />
      <path d="M430 200 H560" class="nv post thick" />
      <path d="M430 290 H560" class="nv med thick" />
      <g class="cl" text-anchor="middle">
        <text x="495" y="100" fill="var(--nerve-ink)">lateral</text>
        <text x="495" y="188" fill="var(--c-post)">posterior</text>
        <text x="495" y="278" fill="var(--c-med)">medial</text>
      </g>
    </g>

    <!-- RAMOS TERMINAIS -->
    <g :style="{ opacity: step >= 4 ? 1 : 0 }">
      <!-- posteriores primeiro (ficam "atrás") -->
      <path d="M560 200 C610 200 630 150 690 150 H780" class="nv post" />
      <path d="M560 200 C610 200 630 226 690 226 H780" class="nv post" />
      <!-- lateral → musculocutâneo + raiz lateral do mediano -->
      <path d="M560 112 C610 112 630 54 690 54 H780" class="nv lat" />
      <path d="M560 112 C620 112 640 300 700 302" class="nv lat" />
      <!-- medial → ulnar + raiz medial do mediano -->
      <path d="M560 290 C620 290 650 302 700 302" class="nv med" />
      <path d="M700 302 H780" class="nv median" />
      <path d="M560 290 C610 290 630 376 690 376 H780" class="nv med" />
      <circle cx="700" cy="302" r="4.5" fill="var(--core)" stroke="var(--ink)" stroke-width="1.4" />
      <g class="term">
        <text x="790" y="58">Musculocutâneo</text><text x="790" y="71" class="r">C5–C7</text>
        <text x="790" y="154">Axilar</text><text x="790" y="167" class="r">C5–C6</text>
        <text x="790" y="230">Radial</text><text x="790" y="243" class="r">C5–T1</text>
        <text x="790" y="306">Mediano</text><text x="790" y="319" class="r">(C5) C6–T1</text>
        <text x="790" y="380">Ulnar</text><text x="790" y="393" class="r">(C7) C8–T1</text>
      </g>
      <text x="640" y="336" class="tl" text-anchor="middle" font-style="italic">o “M”</text>
    </g>

    <!-- TOPOGRAFIA -->
    <g :style="{ opacity: step >= 5 ? 1 : 0 }" class="topo">
      <rect x="10" y="404" width="196" height="28" rx="14" />
      <text x="108" y="423">entre escalenos ant. e médio</text>
      <rect x="214" y="404" width="140" height="28" rx="14" />
      <text x="284" y="423">trígono posterior</text>
      <rect x="362" y="404" width="150" height="28" rx="14" />
      <text x="437" y="423">atrás da clavícula</text>
      <rect x="520" y="404" width="230" height="28" rx="14" class="ax" />
      <text x="635" y="423" class="axt">axila · ao redor da a. axilar</text>
    </g>
    <!-- divisória supra/infraclavicular -->
    <g :style="{ opacity: step >= 5 ? 1 : 0 }">
      <line x1="352" y1="34" x2="352" y2="344" stroke="var(--ink)" stroke-dasharray="3 5" stroke-width="1" opacity="0.4" />
      <text x="344" y="42" text-anchor="end" class="tl">supraclavicular</text>
      <text x="360" y="42" class="tl">infraclavicular</text>
    </g>
  </svg>
</template>

<style scoped>
.plexus { position: absolute; inset: 0; width: 100%; height: 100%; }
.cols text { fill: var(--muted); }
.cols text.hi { fill: var(--muscle); font-weight: 600; }
.root-lab { font-family: var(--f-mono); font-size: 17px; font-weight: 600; fill: var(--ink); }
.nv { fill: none; stroke-width: 7; stroke-linecap: round; stroke-linejoin: round; }
.nv.thick { stroke-width: 9; }
.nv.base { stroke: #cdb98e; }
.nv.lat { stroke: var(--c-lat); }
.nv.post { stroke: var(--c-post); }
.nv.med { stroke: var(--c-med); }
.nv.median { stroke: url(#none); stroke: #86913a; }
.nv.dash { stroke-dasharray: 2 9; stroke-width: 6.5; }
.tl { font-family: var(--f-sans); font-size: 14px; fill: var(--ink-2); }
.cl text { font-family: var(--f-sans); font-size: 16px; font-weight: 600; }
.term text { font-family: var(--f-sans); font-size: 18.5px; font-weight: 600; fill: var(--ink); }
.term text.r { font-family: var(--f-mono); font-size: 12.5px; font-weight: 400; fill: var(--muted); }
.topo rect { fill: rgba(29,24,20,.05); stroke: var(--hair); }
.topo rect.ax { fill: var(--art-soft); stroke: rgba(192,57,43,.3); }
.topo text { font-family: var(--f-sans); font-size: 12.5px; fill: var(--ink-2); text-anchor: middle; }
.topo .axt { fill: var(--art); font-weight: 600; }
</style>
