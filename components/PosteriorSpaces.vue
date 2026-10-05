<script setup>
// Vista POSTERIOR do ombro direito (lateral = direita da tela)
</script>

<template>
  <svg viewBox="0 0 330 236" class="spaces" role="img" aria-label="Espaço quadrangular e intervalo triangular">
    <!-- regiões -->
    <path d="M172 90 L236 92 L236 130 L172 128 Z" class="zone q" />
    <path d="M70 84 L146 88 L146 122 L70 116 Z" class="zone t" />
    <path d="M174 158 L236 162 L236 222 L174 222 Z" class="zone i" />

    <!-- úmero -->
    <path d="M236 20 C258 14 276 28 272 50 L262 60 L262 236 L236 236 Z" class="bone" />
    <!-- redondo maior (inferior) -->
    <path d="M30 116 C90 124 170 134 236 132 L236 160 C170 162 90 152 30 144 Z" class="musc tmaj" />
    <!-- cabeça longa do tríceps: sobre o redondo maior, sob o redondo menor -->
    <path d="M146 30 L174 30 C176 100 178 170 176 236 L148 236 C150 170 148 100 146 30 Z" class="musc tlong" />
    <!-- redondo menor (superior) -->
    <path d="M30 62 C90 70 170 84 236 90 L236 92 L236 92 C170 92 90 88 30 86 Z" class="musc tmin" />
    <path d="M30 62 C90 64 170 70 236 72 L236 92 C170 90 90 88 30 86 Z" class="musc tmin" />

    <!-- conteúdo -->
    <circle cx="198" cy="106" r="6" class="nv" /><circle cx="214" cy="114" r="4" class="ar" />
    <circle cx="112" cy="104" r="4" class="ar" />
    <circle cx="198" cy="186" r="6" class="nv" /><circle cx="214" cy="196" r="4" class="ar" />

    <g class="ml">
      <text x="40" y="58">redondo menor</text>
      <text x="40" y="170">redondo maior</text>
      <text x="161" y="24" text-anchor="middle">cab. longa do tríceps</text>
      <text x="282" y="44">úmero</text>
    </g>
    <g class="zl"><text x="184" y="104">Q</text><text x="80" y="104">T</text><text x="184" y="214">I</text></g>
  </svg>
</template>

<style scoped>
.spaces { width: 100%; height: 100%; }
.bone { fill: #efe6d6; stroke: #b4a283; stroke-width: 1.2; }
.musc { stroke: #fbf7ef; stroke-width: 1.4; }
.tmaj { fill: #c97a5c; }
.tmin { fill: #b9802c; }
.tlong { fill: #b5563e; }
.zone { stroke: none; }
.zone.q { fill: rgba(217, 162, 27, .22); }
.zone.t { fill: rgba(192, 57, 43, .12); }
.zone.i { fill: rgba(217, 162, 27, .22); }
.nv { fill: var(--nerve); stroke: var(--nerve-ink); stroke-width: 1.2; }
.ar { fill: var(--art); stroke: #fff; stroke-width: 1; }
.zl text { font-family: var(--f-mono); font-size: 17px; font-weight: 700; fill: var(--ink); }
.ml text { font-family: var(--f-mono); font-size: 13px; fill: var(--ink-2); letter-spacing: .3px; }
</style>
