---
theme: default
title: Braço & Axila
titleTemplate: '%s · APM I'
info: 'Seminário de APM I — Anatomia topográfica do braço e da axila: compartimentos, fáscias e septos, sulcos bicipitais, músculos, vasos e nervos do braço; limites da axila e plexo braquial.'
author: 'APM I · FAMENE'
fonts:
  sans: 'Geist'
  serif: 'Instrument Serif'
  mono: 'Geist Mono'
  weights: '300,400,500,600,700'
  italic: true
colorSchema: light
aspectRatio: 16/9
canvasWidth: 980
layout: none
defaults:
  layout: none
transition: fade
drawings:
  enabled: true
download: 'https://mersinn.github.io/seminario-braco-axila/Seminario-Braco-Axila.pdf'
routerMode: hash
monaco: false
lineNumbers: false
---

<!-- ================= 01 · CAPA ================= -->
<div class="frame cover">
  <div class="plate-head"><span class="num"><b>APM I</b> · Correlação anatomoclínica</span><span>Seminário · FAMENE</span></div>
  <div class="cover-grid">
    <div class="cover-text">
      <span class="eyebrow rise"><i></i>Anatomia topográfica do membro superior</span>
      <h1 class="display rise d1">Braço<br><em>&amp;</em> Axila</h1>
      <p class="lede rise d2">Fáscias e septos, compartimentos, sulcos bicipitais, músculos, vasos e nervos do braço — os limites da axila e o plexo braquial que a atravessa.</p>
      <div class="legend rise d3">
        <span class="chip"><i style="background:var(--art)"></i>artéria</span>
        <span class="chip"><i style="background:var(--vein)"></i>veia</span>
        <span class="chip"><i style="background:var(--nerve)"></i>nervo</span>
        <span class="chip"><i style="background:var(--muscle)"></i>músculo</span>
      </div>
      <div class="authors rise d4"><span>Emerson Freitas J. Neto</span><span>Maria Luisa Souza Carvalho</span><span>Bruna Pontes de Luna</span><span>Mateus Pereira de Alencar</span></div>
    </div>
    <div class="cover-fig rise d2">
      <img src="/img/p/biceps.png" class="fig" alt="Render 3D do músculo bíceps braquial" />
      <div class="pin r musc" style="left:47%;top:44%"><span class="dot"></span><span class="line" style="width:120px"></span><span class="lab">cabeça longa</span></div>
      <div class="pin r musc" style="left:52%;top:57%"><span class="dot" style="background:var(--amber)"></span><span class="line" style="width:96px"></span><span class="lab">cabeça curta</span></div>
    </div>
  </div>
  <div class="fig-cap" style="left:auto;right:44px">Render 3D · BodyParts3D/Anatomography · CC BY-SA 2.1 JP</div>
</div>

<style>
.cover-grid { flex: 1; display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 10px; align-items: center; }
.cover-text { display: flex; flex-direction: column; gap: 16px; padding-left: 6px; }
.cover .display { font-size: 112px; }
.legend { display: flex; gap: 8px; flex-wrap: wrap; }
.authors { display: grid; grid-template-columns: auto auto; gap: 4px 28px; justify-content: start; font-size: 15px; font-weight: 500; color: var(--ink-2); margin-top: 8px; padding-top: 12px; border-top: 1px solid var(--hair); }
.cover-fig { position: relative; height: 470px; background: var(--paper); isolation: isolate; }
.cover-fig img { height: 100%; width: 100%; object-fit: contain; mix-blend-mode: multiply; }
</style>

<!--
ABERTURA (30 s). Apresentar o grupo e o tema. Chamar atenção para a legenda de cores: ela vale para o seminário inteiro — vermelho é artéria, azul é veia, amarelo é nervo, terracota é músculo. É a mesma convenção dos atlas (Netter, Sobotta), então o que a turma vir aqui vai reconhecer na peça.
-->

---
clicks: 1
---

<!-- ================= 02 · CASO-GANCHO + MAPA ================= -->
<div class="frame">
  <div class="plate-head"><span class="num"><b>02</b> / 15 · Caso de abertura</span><span>Braço &amp; Axila</span></div>
  <div class="case-grid">
    <div class="dark-card rise">
      <div class="core case">
        <span class="mono cap">Pronto-socorro · 23h</span>
        <p class="story">Motociclista, 24 anos, queda sobre o braço direito. Radiografia: <b>fratura transversa no terço médio da diáfise do úmero</b>.</p>
        <div class="exam">
          <div><span class="ok">✓</span> Estende o cotovelo normalmente</div>
          <div><span class="no">✕</span> Não estende o punho nem os dedos</div>
          <div><span class="no">✕</span> Hipoestesia no dorso da mão, entre polegar e indicador</div>
        </div>
        <p class="q">Que estrutura foi lesada — e por que o <em>tríceps</em> continua funcionando?</p>
        <span class="mono cap dim">Discussão no slide 14</span>
      </div>
    </div>
    <div class="route">
      <span class="eyebrow"><i></i>Sequência da apresentação</span>
      <h2 class="title">Roteiro do <em>seminário</em></h2>
      <ol class="stops" :class="{ show: $clicks >= 1 }">
        <li><b>03</b><span>O úmero como eixo e mapa</span></li>
        <li><b>04–05</b><span>Axila: limites, conteúdo e artéria axilar</span></li>
        <li><b>06–07</b><span>Plexo braquial</span></li>
        <li><b>08–09</b><span>Fáscia, septos, compartimentos e sulcos</span></li>
        <li><b>10–11</b><span>Músculos anteriores e posteriores</span></li>
        <li><b>12–13</b><span>Artéria braquial e nervos do braço</span></li>
        <li><b>14–15</b><span>Correlação clínica e síntese</span></li>
      </ol>
    </div>
  </div>
</div>

<style>
.case-grid { flex: 1; display: grid; grid-template-columns: 1.08fr 0.92fr; gap: 34px; align-items: stretch; padding-top: 6px; }
.case { display: flex; flex-direction: column; gap: 14px; justify-content: center; }
.case .cap { font-size: 11px; letter-spacing: .22em; text-transform: uppercase; color: #a89b8b; }
.case .cap.dim { color: #7d7266; }
.story { font-family: var(--f-serif); font-size: 25px; line-height: 1.18; margin: 0; color: #f3ece1; }
.story b { font-weight: 400; color: #f0b49f; font-style: italic; }
.exam { display: flex; flex-direction: column; gap: 6px; font-size: 16px; color: #d9d0c3; border-top: 1px solid rgba(255,255,255,.1); padding-top: 12px; }
.exam .ok { color: #8fc28a; font-weight: 700; margin-right: 6px; }
.exam .no { color: #ef7d6b; font-weight: 700; margin-right: 6px; }
.q { font-family: var(--f-serif); font-size: 22px; line-height: 1.15; margin: 4px 0 0; color: #fff; }
.q em { color: var(--nerve); }
.route { display: flex; flex-direction: column; gap: 8px; justify-content: center; }
.stops { list-style: none; padding: 0; margin: 12px 0 0; display: flex; flex-direction: column; }
.stops li { display: grid; grid-template-columns: 58px 1fr; gap: 10px; padding: 7px 0; border-top: 1px solid var(--hair); font-size: 16px; color: var(--ink-2);
  opacity: 0; transform: translateY(8px); transition: opacity .6s var(--ease), transform .6s var(--ease); }
.stops li:last-child { border-bottom: 1px solid var(--hair); }
.stops li b { font-family: var(--f-mono); font-size: 12.5px; font-weight: 500; color: var(--muscle); padding-top: 2px; }
.stops.show li { opacity: 1; transform: none; }
.stops.show li:nth-child(2) { transition-delay: .06s } .stops.show li:nth-child(3) { transition-delay: .12s }
.stops.show li:nth-child(4) { transition-delay: .18s } .stops.show li:nth-child(5) { transition-delay: .24s }
.stops.show li:nth-child(6) { transition-delay: .30s } .stops.show li:nth-child(7) { transition-delay: .36s }
</style>

<!--
GANCHO (1 min). Ler o caso devagar. Perguntar à turma: "qual nervo?" — muitos vão dizer radial. A segunda pergunta é a que interessa: se o radial inerva o tríceps, por que o cotovelo estende? Não responder agora. Dizer que a resposta está na topografia e que vamos construí-la. [clique] Mostrar o roteiro: vamos de proximal para distal, seguindo o mesmo caminho que vasos e nervos fazem — da axila para o braço.
-->

---
clicks: 4
---

<!-- ================= 03 · LOCALIZAÇÃO + ÚMERO ================= -->
<div class="frame">
  <div class="plate-head"><span class="num"><b>03</b> / 15 · Região braquial</span><span>Braço &amp; Axila</span></div>
  <div class="loc-grid">
    <div class="loc-text">
      <span class="eyebrow"><i></i>Região braquial</span>
      <h2 class="title">Região braquial:<br><em>limites e eixo ósseo</em></h2>
      <p class="lede">Região entre o ombro e o cotovelo, com o <b>úmero</b> como eixo ósseo. A anatomia topográfica descreve as estruturas da região e suas <b>relações</b>, plano a plano.</p>
      <div class="strata">
        <div class="st s1"><b>Pele</b></div>
        <div class="st s2"><b>Tela subcutânea</b><span>vv. cefálica e basílica · nn. cutâneos</span></div>
        <div class="st s3"><b>Fáscia braquial</b><span>fáscia muscular profunda</span></div>
        <div class="st s4"><b>Compartimentos</b><span>anterior · posterior</span></div>
        <div class="st s5"><b>Úmero</b></div>
      </div>
    </div>
    <div class="plate hum-plate"><div class="core">
      <span class="fig-tag">Úmero · anterior | posterior</span>
      <div class="hum-box ant">
        <img src="/img/p/umero.png" class="fig fade-x" alt="Úmero, vista anterior (render 3D)" />
        <div v-click="1" class="pin l nerve" style="left:66%;top:25%"><span class="dot"></span><span class="line" style="width:70px"></span><span class="lab">Colo cirúrgico<small>n. axilar</small></span></div>
        <div v-click="3" class="pin l art" style="left:46%;top:80%"><span class="dot"></span><span class="line" style="width:8px"></span><span class="lab">Supracondilar<small>a. braquial · n. mediano</small></span></div>
      </div>
      <div class="hum-box post">
        <img src="/img/p/umero-post.png" class="fig fade-x" alt="Úmero, vista posterior (render 3D)" />
        <div v-click="2" class="pin r nerve" style="left:56%;top:48%"><span class="dot"></span><span class="line" style="width:40px"></span><span class="lab">Sulco do n. radial<small>n. radial · a. braq. profunda</small></span></div>
        <div v-click="4" class="pin r nerve" style="left:63%;top:87%"><span class="dot"></span><span class="line" style="width:30px"></span><span class="lab">Epicôndilo medial<small>n. ulnar (atrás)</small></span></div>
      </div>
    </div></div>
  </div>
  <div class="fig-cap">Renders 3D · BodyParts3D/Anatomography (DBCLS) · CC BY-SA 2.1 JP · recolorido</div>
</div>

<style>
.loc-grid { flex: 1; display: grid; grid-template-columns: 0.86fr 1.14fr; gap: 24px; min-height: 0; }
.loc-text { display: flex; flex-direction: column; gap: 4px; justify-content: center; }
.strata { margin-top: 12px; display: flex; flex-direction: column; gap: 3px; }
.st { display: flex; align-items: baseline; gap: 10px; padding: 5px 12px; border-radius: 10px; font-size: 15px; }
.st b { font-weight: 600; min-width: 112px; }
.st span { color: var(--ink-2); font-size: 13.5px; }
.s1 { background: #f1dcc8; } .s2 { background: #f5e8cc; margin-left: 10px; } .s3 { background: rgba(29,24,20,.85); color: #f6efe5; margin-left: 20px; }
.s3 span { color: #cfc4b6; } .s4 { background: var(--ant-soft); margin-left: 30px; box-shadow: inset 0 0 0 1px rgba(109,138,92,.25); }
.s5 { background: #efe6d6; margin-left: 40px; box-shadow: inset 0 0 0 1px #d8c9ae; }
.hum-plate { height: 490px; }
.hum-plate .core { overflow: visible; }
.hum-box { position: absolute; top: 34px; bottom: 26px; aspect-ratio: 298 / 787; }
.hum-box.ant { left: 34%; transform: translateX(-50%); }
.hum-box.post { left: 62%; transform: translateX(-50%); }
.hum-box img { width: 100%; height: 100%; object-fit: contain; mix-blend-mode: multiply; }
</style>

<!--
LOCALIZAÇÃO (1,5 min). Definir a região: entre ombro e cotovelo, eixo ósseo = úmero. Anatomia topográfica = estudar por região e por relações. Mostrar os planos de fora para dentro: pele, tela subcutânea (onde estão as veias superficiais e os nervos cutâneos), fáscia braquial, compartimentos e o osso.
Depois, o úmero como mapa (cada clique acende um ponto):
[1] Colo cirúrgico — o n. axilar contorna o colo junto com a a. circunflexa posterior do úmero.
[2] Sulco do n. radial, na face posterior — o n. radial e a a. braquial profunda correm em espiral colados ao osso.
[3] Região supracondilar — a a. braquial e o n. mediano passam logo à frente.
[4] Epicôndilo medial — o n. ulnar passa atrás dele, no sulco do n. ulnar ("o osso do cotovelo" que dá choque).
Dizer: "guardem esses quatro pontos; voltam no slide 14".
-->

---
clicks: 7
---

<!-- ================= 04 · AXILA: LIMITES ================= -->
<div class="frame">
  <div class="plate-head"><span class="num"><b>04</b> / 15 · Axila</span><span>Braço &amp; Axila</span></div>
  <div class="ax-grid">
    <div class="ax-left">
      <span class="eyebrow"><i></i>Fossa axilar</span>
      <h2 class="title">Axila:<br><em>limites e conteúdo</em></h2>
      <div class="pyr-box"><AxillaPyramid :step="$clicks" /></div>
    </div>
    <div class="rows ax-rows">
      <div class="row" :class="{ on: $clicks === 1, dim: $clicks >= 1 && $clicks <= 6 && $clicks !== 1 }"><b>Ápice</b><span>Canal cervicoaxilar: <b>clavícula</b>, margem superior da <b>escápula</b> e <b>1ª costela</b>. Por ele passam vasos e plexo vindos do pescoço.</span></div>
      <div class="row" :class="{ on: $clicks === 2, dim: $clicks >= 1 && $clicks <= 6 && $clicks !== 2 }"><b>Base</b><span>Pele, tela subcutânea e <b>fáscia axilar</b>, entre as pregas axilares anterior e posterior.</span></div>
      <div class="row" :class="{ on: $clicks === 3, dim: $clicks >= 1 && $clicks <= 6 && $clicks !== 3 }"><b>Anterior</b><span>Mm. <b>peitoral maior</b>, <b>peitoral menor</b> e subclávio; fáscia clavipeitoral.</span></div>
      <div class="row" :class="{ on: $clicks === 4, dim: $clicks >= 1 && $clicks <= 6 && $clicks !== 4 }"><b>Posterior</b><span>Mm. <b>subescapular</b>, <b>redondo maior</b> e <b>latíssimo do dorso</b> (sobre a escápula).</span></div>
      <div class="row" :class="{ on: $clicks === 5, dim: $clicks >= 1 && $clicks <= 6 && $clicks !== 5 }"><b>Medial</b><span>M. <b>serrátil anterior</b> sobre as 4–5 primeiras costelas e mm. intercostais. Sobre ele corre o <span class="t-nerve">n. torácico longo</span>.</span></div>
      <div class="row" :class="{ on: $clicks === 6, dim: $clicks >= 1 && $clicks <= 6 && $clicks !== 6 }"><b>Lateral</b><span>Parede estreita: <b>sulco intertubercular do úmero</b>, com o coracobraquial e a cabeça curta do bíceps.</span></div>
      <div class="row content" :class="{ on: $clicks >= 7, dim: $clicks >= 1 && $clicks <= 6 }"><b>Conteúdo</b><span><span class="t-art">a. axilar</span> e <span class="t-vein">v. axilar</span>, <span class="t-nerve">plexo braquial</span> (fascículos e ramos), <b>linfonodos axilares</b> (peitorais, subescapulares, umerais, centrais e apicais) e gordura axilar.</span></div>
    </div>
  </div>
</div>

<style>
.ax-grid { flex: 1; display: grid; grid-template-columns: 0.92fr 1.08fr; gap: 30px; min-height: 0; }
.ax-left { display: flex; flex-direction: column; }
.pyr-box { height: 372px; margin-top: 4px; }
.ax-rows { justify-content: center; }
.ax-rows .row { grid-template-columns: 92px 1fr; font-size: 15px; }
.row.content { background: linear-gradient(90deg, rgba(192,57,43,.05), transparent); }
</style>

<!--
AXILA — LIMITES (2 min). A axila é o espaço piramidal entre o tórax e o braço; é por ela que tudo o que vai para o membro superior passa.
[1] Ápice: não é um ponto, é uma abertura — o canal cervicoaxilar, entre clavícula, escápula e 1ª costela. É a comunicação com o pescoço.
[2] Base: a "cava" que a gente palpa — pele e fáscia axilar entre as duas pregas.
[3] Anterior: peitorais maior e menor (o peitoral maior forma a prega anterior).
[4] Posterior: subescapular, redondo maior e latíssimo do dorso (o latíssimo e o redondo maior formam a prega posterior).
[5] Medial: serrátil anterior e costelas. Importante: o n. torácico longo corre na superfície do serrátil — é ele que pode ser lesado em esvaziamento axilar (escápula alada).
[6] Lateral: a parede mais estreita — o sulco intertubercular do úmero.
[7] Conteúdo: o feixe neurovascular (a. e v. axilares, plexo braquial), os 5 grupos de linfonodos e gordura.
-->

---
clicks: 2
---

<!-- ================= 05 · ARTÉRIA AXILAR + ESPAÇOS ================= -->
<div class="frame">
  <div class="plate-head"><span class="num"><b>05</b> / 15 · Axila — artéria axilar</span><span>Braço &amp; Axila</span></div>
  <div class="aa-grid">
    <div class="plate aa-plate"><div class="core">
      <img src="/img/gray-axilar.png" class="fig" alt="Gray, fig. 523: artéria axilar e seus ramos" />
      <div class="pin l art" style="left:58%;top:30%"><span class="dot"></span><span class="line" style="width:20px"></span><span class="lab">A. axilar</span></div>
      <div class="pin r nerve" style="left:40%;top:52%"><span class="dot"></span><span class="line" style="width:22px"></span><span class="lab">Plexo braquial</span></div>
      <div class="pin r art" style="left:22%;top:71%"><span class="dot"></span><span class="line" style="width:22px"></span><span class="lab">A. braquial</span></div>
      <div class="fig-cap">Gray’s Anatomy (1918), fig. 523 · H. V. Carter · domínio público</div>
    </div></div>
    <div class="aa-right">
      <span class="eyebrow"><i style="background:var(--art)"></i>Vascularização da axila</span>
      <h2 class="title" v-if="$clicks < 2">Artéria axilar:<br><em>partes e ramos</em></h2>
      <h2 class="title" v-else>Espaço quadrangular<br>e <em>intervalo triangular</em></h2>
      <div class="parts" v-if="$clicks < 2" :class="{ show: $clicks >= 1 }">
        <div class="part"><span class="numeral">1</span><div><b>Medial</b> ao peitoral menor<span>a. torácica superior</span></div></div>
        <div class="part"><span class="numeral">2</span><div><b>Posterior</b> ao peitoral menor<span>a. toracoacromial · a. torácica lateral</span></div></div>
        <div class="part"><span class="numeral">3</span><div><b>Lateral</b> ao peitoral menor<span>a. subescapular · aa. circunflexas anterior e posterior do úmero</span></div></div>
      </div>
      <div class="spaces-box show" v-else>
        <div class="sp-fig"><PosteriorSpaces /></div>
        <div class="sp-txt">
          <div><b class="t-nerve">Q · Espaço quadrangular</b><br><span>n. axilar + a. circunflexa posterior do úmero</span></div>
          <div><b class="t-nerve">I · Intervalo triangular</b><br><span>n. radial + a. braquial profunda → compartimento posterior</span></div>
          <div><b class="t-art">T · Espaço triangular</b><br><span>a. circunflexa da escápula</span></div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
.aa-grid { flex: 1; display: grid; grid-template-columns: 1.02fr 0.98fr; gap: 28px; min-height: 0; }
.aa-plate { height: 470px; }
.aa-right { display: flex; flex-direction: column; justify-content: center; gap: 4px; }
.parts { display: flex; flex-direction: column; margin-top: 10px; }
.part { display: grid; grid-template-columns: 34px 1fr; gap: 10px; align-items: center; padding: 6px 0; border-top: 1px solid var(--hair); font-size: 15px;
  opacity: 0; transform: translateX(10px); transition: all .6s var(--ease); }
.part .numeral { font-size: 34px; color: var(--art); }
.part span:not(.numeral) { display: block; color: var(--ink-2); font-size: 14px; }
.parts.show .part { opacity: 1; transform: none; }
.parts.show .part:nth-child(2) { transition-delay: .1s } .parts.show .part:nth-child(3) { transition-delay: .2s }
.spaces-box { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 14px; align-items: center; margin-top: 12px; padding-top: 10px; border-top: 1px solid var(--hair); animation: rise .7s var(--ease-out) both; }
.spaces-box.show { opacity: 1; }
.sp-fig { height: 236px; }
.sp-txt { display: flex; flex-direction: column; gap: 6px; font-size: 13.5px; line-height: 1.3; }
.sp-txt span { color: var(--ink-2); }
</style>

<!--
ARTÉRIA AXILAR (2 min). Na prancha real (Gray, 1918) a artéria está em vermelho e o plexo em amarelo — o plexo abraça a artéria.
Limites: começa na margem lateral da 1ª costela e termina na margem inferior do redondo maior — daí em diante chama-se braquial. Esse limite é muito cobrado.
[1] O peitoral menor cruza a artéria pela frente e a divide em três partes. Truque: a parte 1 tem 1 ramo, a parte 2 tem 2, a parte 3 tem 3. Destacar a a. subescapular (o maior ramo) e as circunflexas, que abraçam o colo cirúrgico.
[2] Saídas posteriores (esquema em vista posterior): o espaço quadrangular (redondo menor em cima, redondo maior embaixo, cabeça longa do tríceps medialmente, úmero lateralmente) deixa passar o n. axilar e a a. circunflexa posterior. Abaixo do redondo maior, o intervalo triangular leva o n. radial e a a. braquial profunda para o compartimento posterior do braço. A cabeça longa do tríceps é a referência que separa esses espaços.
-->

---
clicks: 5
---

<!-- ================= 06 · PLEXO BRAQUIAL: ORGANIZAÇÃO ================= -->
<div class="frame">
  <div class="plate-head"><span class="num"><b>06</b> / 15 · Plexo braquial</span><span>Braço &amp; Axila</span></div>
  <div class="px-head">
    <div>
      <span class="eyebrow"><i style="background:var(--nerve)"></i>Plexo braquial · C5–T1</span>
      <h2 class="title">Plexo braquial:<br><em>organização</em></h2>
    </div>
    <div class="px-code mono">5 · 3 · 6 · 3 · 5</div>
  </div>
  <div class="px-fig"><Plexus :step="$clicks" /></div>
  <div class="px-foot small">Fascículos: nome pela posição em relação à <span class="t-art">2ª parte da a. axilar</span> · divisões anteriores → flexores; posteriores → extensores.</div>
</div>

<style>
.px-head { display: flex; justify-content: space-between; align-items: flex-end; }
.px-code { font-size: 24px; letter-spacing: .1em; color: var(--muscle); padding-bottom: 4px; }
.px-fig { height: 334px; margin-top: 4px; position: relative; }
.px-foot { border-top: 1px solid var(--hair); padding-top: 7px; }
</style>

<!--
PLEXO — ORGANIZAÇÃO (2,5 min). Formado pelos ramos anteriores de C5 a T1. Montar clique a clique:
[1] Troncos: superior (C5–C6), médio (C7), inferior (C8–T1).
[2] Divisões: cada tronco se divide em anterior e posterior — 6 divisões. Atrás da clavícula. Regra funcional: divisões anteriores vão para flexores, posteriores para extensores.
[3] Fascículos: lateral (divisões anteriores do superior e do médio), posterior (as três divisões posteriores), medial (divisão anterior do inferior). Nome = posição em relação à 2ª parte da a. axilar.
[4] Ramos terminais: musculocutâneo e raiz lateral do mediano (lateral); axilar e radial (posterior); ulnar e raiz medial do mediano (medial). As duas raízes do mediano formam o "M".
[5] Topografia: raízes entre os escalenos, troncos no trígono posterior do pescoço, divisões atrás da clavícula, fascículos e ramos na axila. Parte supraclavicular × infraclavicular.
-->

---
clicks: 1
---

<!-- ================= 07 · PLEXO: RAMOS + "M" ================= -->
<div class="frame">
  <div class="plate-head"><span class="num"><b>07</b> / 15 · Plexo braquial — ramos</span><span>Braço &amp; Axila</span></div>
  <div class="br-grid">
    <div class="br-left">
      <span class="eyebrow"><i style="background:var(--nerve)"></i>Plexo braquial</span>
      <h2 class="title">Ramos colaterais<br>e <em>terminais</em></h2>
      <div class="br-table">
        <div class="bt-row"><b>Raízes</b><div><span>N. dorsal da escápula <small>C5 · romboides, levantador da escápula</small></span><span>N. torácico longo <small>C5–C7 · serrátil anterior</small></span></div></div>
        <div class="bt-row"><b>Tronco sup.</b><div><span>N. supraescapular <small>C5–C6 · supra e infraespinal</small></span><span>N. para o subclávio</span></div></div>
        <div class="bt-row lat"><b>Fascículo lateral</b><div><span>N. peitoral lateral <small>peitoral maior</small></span><span class="term">N. musculocutâneo · raiz lateral do mediano</span></div></div>
        <div class="bt-row med"><b>Fascículo medial</b><div><span>N. peitoral medial <small>peitorais menor e maior</small></span><span>Nn. cutâneos mediais do braço e do antebraço</span><span class="term">N. ulnar · raiz medial do mediano</span></div></div>
        <div class="bt-row post"><b>Fascículo posterior</b><div><span>Nn. subescapulares sup. e inf. <small>subescapular · redondo maior</small></span><span>N. toracodorsal <small>latíssimo do dorso</small></span><span class="term">N. axilar · n. radial</span></div></div>
      </div>
    </div>
    <div class="m-box">
      <svg viewBox="-70 -14 440 340" class="m-svg">
        <path d="M150 20 V290" stroke="var(--art)" stroke-width="13" stroke-linecap="round" />
        <path d="M168 26 C176 120 200 200 216 290" stroke="var(--c-post)" stroke-width="7" fill="none" stroke-dasharray="2 8" stroke-linecap="round" />
        <path d="M86 40 C96 90 104 110 108 130" stroke="var(--c-lat)" stroke-width="8" fill="none" stroke-linecap="round" />
        <path d="M216 40 C206 90 196 110 192 130" stroke="var(--c-med)" stroke-width="8" fill="none" stroke-linecap="round" />
        <path d="M108 130 C100 180 80 230 64 290" stroke="var(--c-lat)" stroke-width="7" fill="none" stroke-linecap="round" />
        <path d="M108 130 C124 160 140 176 150 190" stroke="var(--c-lat)" stroke-width="7" fill="none" stroke-linecap="round" />
        <path d="M192 130 C176 160 160 176 150 190" stroke="var(--c-med)" stroke-width="7" fill="none" stroke-linecap="round" />
        <path d="M192 130 C206 180 222 230 238 290" stroke="var(--c-med)" stroke-width="7" fill="none" stroke-linecap="round" />
        <path d="M150 190 V290" stroke="#86913a" stroke-width="7" stroke-linecap="round" />
        <g font-weight="600" style="font-family:var(--f-sans);font-size:21px">
          <text x="78" y="40" text-anchor="end" fill="var(--nerve-ink)">fasc. lateral</text>
          <text x="224" y="40" fill="var(--c-med)">fasc. medial</text>
          <text x="58" y="282" text-anchor="end" fill="var(--nerve-ink)">musculo-</text>
          <text x="58" y="296" text-anchor="end" fill="var(--nerve-ink)">cutâneo</text>
          <text x="150" y="304" text-anchor="middle" fill="#5d6625">mediano</text>
          <text x="246" y="290" fill="var(--c-med)">ulnar</text>
          <text x="150" y="8" text-anchor="middle" fill="var(--art)">a. axilar</text>
        </g>
      </svg>
      <div class="m-tip" :class="{ show: $clicks >= 1 }">
        <span class="mono cap">Na peça</span>
        <p>Ache o <b>“M”</b> anterior à <span class="t-art">a. axilar</span>: musculocutâneo (lateral, perfura o coracobraquial), <b>mediano</b> (centro) e ulnar (medial). O fascículo posterior fica <b>atrás</b> da artéria e dá o axilar e o radial.</p>
      </div>
    </div>
  </div>
</div>

<style>
.br-grid { flex: 1; display: grid; grid-template-columns: 1.25fr 0.75fr; gap: 26px; min-height: 0; }
.br-left { display: flex; flex-direction: column; }
.br-table { margin-top: 10px; display: flex; flex-direction: column; }
.bt-row { display: grid; grid-template-columns: 128px 1fr; gap: 12px; padding: 7px 0 7px 10px; border-top: 1px solid var(--hair); font-size: 15px; }
.bt-row:last-child { border-bottom: 1px solid var(--hair); }
.bt-row > b { font-family: var(--f-mono); font-size: 12px; letter-spacing: .12em; text-transform: uppercase; font-weight: 500; padding-top: 2px; }
.bt-row > div { display: flex; flex-wrap: wrap; gap: 4px 16px; color: var(--ink); }
.bt-row small { color: var(--muted); font-size: 13px; margin-left: 3px; }
.bt-row .term { font-weight: 600; }
.bt-row.lat { background: linear-gradient(90deg, rgba(217,162,27,.13), transparent 70%); }
.bt-row.med { background: linear-gradient(90deg, rgba(47,124,140,.11), transparent 70%); }
.bt-row.post { background: linear-gradient(90deg, rgba(95,127,76,.12), transparent 70%); }
.bt-row.lat > b { color: var(--nerve-ink); } .bt-row.med > b { color: var(--c-med); } .bt-row.post > b { color: var(--c-post); }
.m-box { display: flex; flex-direction: column; gap: 8px; justify-content: center; }
.m-svg { width: 100%; height: 300px; overflow: visible; }
.m-tip { padding: 12px 14px; border-radius: 14px; background: rgba(29,24,20,.04); box-shadow: inset 0 0 0 1px var(--hair); opacity: 0; transform: translateY(8px); transition: all .6s var(--ease); }
.m-tip.show { opacity: 1; transform: none; }
.m-tip .cap { font-size: 11px; letter-spacing: .2em; text-transform: uppercase; color: var(--muscle); }
.m-tip p { margin: 4px 0 0; font-size: 15px; line-height: 1.45; color: var(--ink-2); }
</style>

<!--
PLEXO — RAMOS (2 min). Ramos colaterais seguindo o roteiro da prática, organizados por origem:
Raízes: dorsal da escápula (C5) e torácico longo (C5–C7, serrátil anterior).
Tronco superior: supraescapular e n. para o subclávio.
Fascículo lateral: peitoral lateral + terminais (musculocutâneo e raiz lateral do mediano).
Fascículo medial: peitoral medial, cutâneo medial do braço, cutâneo medial do antebraço + terminais (ulnar e raiz medial do mediano).
Fascículo posterior: subescapular superior, toracodorsal, subescapular inferior + terminais (axilar e radial).
Obs.: o "n. cutâneo posterior do antebraço" listado no roteiro é ramo do n. radial, não do fascículo diretamente.
[1] Dica de prática: na peça, procurem o "M" na frente da artéria axilar. O ramo lateral do M que perfura o coracobraquial é o musculocutâneo; o do meio é o mediano; o medial é o ulnar. O que está atrás da artéria é o fascículo posterior.
-->

---
clicks: 4
---

<!-- ================= 08 · FÁSCIA, SEPTOS, COMPARTIMENTOS ================= -->
<div class="frame">
  <div class="plate-head"><span class="num"><b>08</b> / 15 · Arquitetura do braço</span><span>Braço &amp; Axila</span></div>
  <div class="xs-grid">
    <div class="plate xs-plate"><div class="core">
      <span class="fig-tag">Terço médio · braço direito · visto de baixo</span>
      <div class="xs-svg"><CrossSection :step="$clicks" /></div>
      <div class="fig-cap">Esquema próprio baseado em Moore (2019) e Netter (2019)</div>
    </div></div>
    <div class="xs-text">
      <span class="eyebrow"><i></i>Corte transversal</span>
      <h2 class="title" v-if="$clicks <= 1">Fáscia<br><em>braquial</em></h2>
      <h2 class="title" v-else-if="$clicks === 2">Septos<br><em>intermusculares</em></h2>
      <h2 class="title" v-else-if="$clicks === 3">Compartimentos<br><em>do braço</em></h2>
      <h2 class="title" v-else>Feixes<br><em>neurovasculares</em></h2>
      <div class="xs-body" v-if="$clicks <= 1">
        <p>Fáscia muscular <b>profunda</b>, sob a pele e a tela subcutânea; envolve todo o braço.</p>
        <p>Contínua com as fáscias <b>deltóidea, peitoral, axilar</b> e do <b>antebraço</b>.</p>
        <p class="muted">Veias superficiais e nervos cutâneos ficam <b>fora</b> dela.</p>
      </div>
      <div class="xs-body" v-else-if="$clicks === 2">
        <p>Septos <b>medial</b> e <b>lateral</b>: da fáscia às <b>cristas supraepicondilares</b> do úmero.</p>
        <p>O medial é perfurado pelo <span class="t-nerve">n. ulnar</span>; o lateral, pelo <span class="t-nerve">n. radial</span>.</p>
      </div>
      <div class="xs-body comp" v-else-if="$clicks === 3">
        <div class="cp ant"><b>Anterior · flexor</b><span>Coracobraquial, bíceps, braquial</span><em>n. musculocutâneo</em></div>
        <div class="cp post"><b>Posterior · extensor</b><span>Tríceps braquial</span><em>n. radial</em></div>
        <p class="muted">Fáscia + septos + úmero delimitam os dois.</p>
      </div>
      <div class="xs-body" v-else>
        <p>Feixe principal no lado <b>medial</b>: <span class="t-art">a. braquial</span>, <span class="t-vein">vv. braquiais</span> e <span class="t-nerve">n. mediano</span>.</p>
        <p>O <span class="t-nerve">ulnar</span> já passou para trás do septo; o <span class="t-nerve">radial</span> está colado ao osso.</p>
      </div>
    </div>
  </div>
</div>

<style>
.xs-grid { flex: 1; display: grid; grid-template-columns: 1.36fr 0.64fr; gap: 24px; min-height: 0; }
.xs-plate { height: 474px; }
.xs-svg { position: absolute; inset: 24px 4px 20px; }
.xs-text { display: flex; flex-direction: column; justify-content: center; gap: 6px; }
.xs-body { margin-top: 8px; display: flex; flex-direction: column; gap: 8px; font-size: 16px; line-height: 1.5; color: var(--ink-2); animation: rise .7s var(--ease-out) both; }
.xs-body p { margin: 0; }
.cp { display: flex; flex-direction: column; gap: 2px; padding: 10px 14px; border-radius: 14px; font-size: 15.5px; }
.cp b { font-family: var(--f-mono); font-size: 12px; letter-spacing: .16em; text-transform: uppercase; font-weight: 600; }
.cp em { font-style: normal; font-weight: 600; color: var(--nerve-ink); font-size: 15px; }
.cp.ant { background: var(--ant-soft); box-shadow: inset 0 0 0 1px rgba(109,138,92,.3); }
.cp.ant b { color: #3f5a32; }
.cp.post { background: var(--post-soft); box-shadow: inset 0 0 0 1px rgba(130,101,140,.3); }
.cp.post b { color: #5a3f63; }
</style>

<!--
ARQUITETURA DO BRAÇO (3 min) — este slide substitui os três slides de fáscia/septos/compartimentos; o corte se monta por cliques.
[início] Corte no terço médio do braço direito, visto de baixo (como numa TC): anterior em cima, lateral à esquerda. Pele, tela subcutânea com as veias superficiais e o úmero no centro.
[1] Fáscia braquial: a fáscia profunda que envolve o braço como uma manga; contínua com as fáscias vizinhas (deltóidea, peitoral, axilar, infraespinal e do antebraço).
[2] Septos intermusculares medial e lateral: vão da fáscia até as cristas supraepicondilares. Quem fura o septo medial: n. ulnar e a. colateral ulnar superior. Quem fura o lateral: n. radial e a. colateral radial.
[3] Fáscia + septos + úmero = dois compartimentos. Anterior (flexor): coracobraquial, bíceps e braquial — n. musculocutâneo. Posterior (extensor): tríceps — n. radial.
[4] Feixes: o feixe principal (a. braquial, vv. braquiais, n. mediano) fica medial; o n. ulnar já atrás do septo medial; o n. radial com a a. braquial profunda no sulco do n. radial.
-->

---
clicks: 2
---

<!-- ================= 09 · SULCOS BICIPITAIS + VEIAS ================= -->
<div class="frame">
  <div class="plate-head"><span class="num"><b>09</b> / 15 · Sulcos bicipitais</span><span>Braço &amp; Axila</span></div>
  <div class="sb-grid">
    <div class="plate sb-plate"><div class="core">
      <div class="sb-img">
        <img src="/img/p/veias-braco.png" class="fig fade-x" alt="Gray, fig. 574: veias superficiais do membro superior" />
        <div class="pin r vein" style="left:43%;top:40%"><span class="dot"></span><span class="line" style="width:118px"></span><span class="lab">V. cefálica<small>sulco bicipital lateral</small></span></div>
        <div v-click="2" class="pin r" style="left:72%;top:55%"><span class="dot"></span><span class="line" style="width:40px"></span><span class="lab">Hiato basílico<small>perfura a fáscia</small></span></div>
        <div class="pin r vein" style="left:80%;top:68%"><span class="dot"></span><span class="line" style="width:30px"></span><span class="lab">V. basílica<small>sulco bicipital medial</small></span></div>
        <div class="pin r vein" style="left:52%;top:89%"><span class="dot"></span><span class="line" style="width:76px"></span><span class="lab">V. intermédia<small>do cotovelo</small></span></div>
      </div>
      <div class="fig-cap">Gray’s Anatomy (1918), fig. 574 · domínio público</div>
    </div></div>
    <div class="sb-right">
      <span class="eyebrow"><i style="background:var(--vein)"></i>Região braquial anterior</span>
      <h2 class="title">Sulcos bicipitais<br>e <em>veias superficiais</em></h2>
      <div class="sb-cols">
        <div class="sb-col" :class="{ on: $clicks === 1 }">
          <span class="mono cap">Sulco bicipital lateral</span>
          <p><span class="t-vein">V. cefálica</span> sobe na tela subcutânea → <b>sulco deltopeitoral</b> → perfura a fáscia clavipeitoral → <span class="t-vein">v. axilar</span>.</p>
        </div>
        <div class="sb-col" :class="{ on: $clicks === 2 }">
          <span class="mono cap">Sulco bicipital medial</span>
          <p><span class="t-vein">V. basílica</span> perfura a fáscia no <b>terço médio</b> e, com as vv. braquiais, forma a <span class="t-vein">v. axilar</span>.</p>
          <p>Profundamente: <span class="t-art">a. braquial</span> + <span class="t-nerve">n. mediano</span> — onde se palpa o <b>pulso braquial</b>.</p>
        </div>
      </div>
      <div class="sb-clin small"><b>Na clínica:</b> punção venosa na <span class="t-vein">v. intermédia do cotovelo</span>; PA aferida sobre a <span class="t-art">a. braquial</span>, medial ao tendão do bíceps.</div>
    </div>
  </div>
</div>

<style>
.sb-grid { flex: 1; display: grid; grid-template-columns: 0.86fr 1.14fr; gap: 28px; min-height: 0; }
.sb-plate { height: 474px; }
.sb-plate .core { overflow: visible; }
.sb-img { position: absolute; top: 14px; bottom: 26px; left: 6%; aspect-ratio: 336 / 900; }
.sb-img img { width: 100%; height: 100%; object-fit: contain; mix-blend-mode: multiply; }
.sb-right { display: flex; flex-direction: column; justify-content: center; gap: 6px; }
.sb-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 12px; }
.sb-col { padding: 12px 14px; border-radius: 16px; background: rgba(29,24,20,.035); box-shadow: inset 0 0 0 1px var(--hair-2); font-size: 15.5px; line-height: 1.48; color: var(--ink-2); transition: all .6s var(--ease); }
.sb-col.on { background: var(--core); box-shadow: inset 0 0 0 1px var(--hair), 0 18px 34px -24px rgba(60,40,20,.4); transform: translateY(-3px); }
.sb-col p { margin: 6px 0 0; }
.sb-col .cap { font-size: 11px; letter-spacing: .2em; text-transform: uppercase; color: var(--vein); }
.sb-clin { margin-top: 10px; padding-top: 9px; border-top: 1px solid var(--hair); }
</style>

<!--
SULCOS BICIPITAIS (2 min). O bíceps faz relevo na frente do braço; de cada lado dele há um sulco.
[1] Lateral: a v. cefálica sobe na tela subcutânea, passa ao sulco deltopeitoral e entra na v. axilar depois de perfurar a fáscia clavipeitoral.
[2] Medial: a v. basílica sobe superficial e, no terço médio, perfura a fáscia braquial (hiato basílico) para se juntar às vv. braquiais e formar a v. axilar. Profundamente no sulco medial estão a a. braquial e o n. mediano — é onde palpamos o pulso braquial e onde se comprime a artéria contra o úmero em hemorragia.
Clínica: v. intermédia do cotovelo para punção; aferição da PA sobre a a. braquial.
-->

---
clicks: 1
---

<!-- ================= 10 · COMPARTIMENTO ANTERIOR ================= -->
<div class="frame">
  <div class="plate-head"><span class="num"><b>10</b> / 15 · Compartimento anterior</span><span>Braço &amp; Axila</span></div>
  <div class="ma-head">
    <div>
      <span class="eyebrow"><i style="background:var(--ant)"></i>Flexores · n. musculocutâneo (C5–C7)</span>
      <h2 class="title">Músculos do compartimento <em>anterior</em></h2>
    </div>
  </div>
  <div class="ma-grid">
    <div class="mcol rise d1">
      <div class="plate mplate"><div class="core"><img src="/img/p/coraco.png" class="fig" alt="Render 3D do m. coracobraquial" /><span class="fig-tag">Coracobraquial</span></div></div>
      <dl>
        <dt>Origem</dt><dd>Ápice do processo coracoide</dd>
        <dt>Inserção</dt><dd>Terço médio, face medial do úmero</dd>
        <dt>Ação</dt><dd>Flexão e adução do braço (ombro)</dd>
        <dt>Nervo</dt><dd class="t-nerve">Musculocutâneo (o perfura)</dd>
      </dl>
    </div>
    <div class="mcol rise d2">
      <div class="plate mplate"><div class="core"><img src="/img/p/biceps.png" class="fig" alt="Render 3D do m. bíceps braquial" /><span class="fig-tag">Bíceps braquial</span>
        <div class="pin r musc" style="left:50%;top:40%"><span class="dot"></span><span class="line" style="width:18px"></span><span class="lab">longa</span></div>
        <div class="pin r musc" style="left:54%;top:56%"><span class="dot" style="background:var(--amber)"></span><span class="line" style="width:14px"></span><span class="lab">curta</span></div>
      </div></div>
      <dl>
        <dt>Origem</dt><dd><b>Longa:</b> tubérculo supraglenoidal<br><b>Curta:</b> processo coracoide</dd>
        <dt>Inserção</dt><dd>Tuberosidade do rádio</dd>
        <dt>Ação</dt><dd><b>Supinação</b> e flexão do cotovelo</dd>
        <dt>Nervo</dt><dd class="t-nerve">Musculocutâneo (C5–C6)</dd>
      </dl>
    </div>
    <div class="mcol rise d3">
      <div class="plate mplate"><div class="core"><img src="/img/p/braquial.png" class="fig" alt="Render 3D do m. braquial" /><span class="fig-tag">Braquial</span></div></div>
      <dl>
        <dt>Origem</dt><dd>Metade distal anterior do úmero</dd>
        <dt>Inserção</dt><dd>Tuberosidade da ulna</dd>
        <dt>Ação</dt><dd><b>Principal flexor</b> do cotovelo</dd>
        <dt>Nervo</dt><dd class="t-nerve">Musculocutâneo</dd>
      </dl>
    </div>
  </div>
  <div class="ma-pearl small" :class="{ show: $clicks >= 1 }">
    <b>Pérola:</b> ruptura do tendão da cabeça longa do bíceps → ventre “caído” no braço: <b>sinal de Popeye</b>.
  </div>
</div>

<style>
.ma-grid { flex: 1; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 10px; min-height: 0; }
.mcol { display: flex; flex-direction: column; gap: 8px; min-height: 0; }
.mplate { height: 196px; }
.mplate .core img { object-fit: contain; padding: 18px 0 6px; }
dl { display: grid; grid-template-columns: 78px 1fr; gap: 4px 10px; margin: 0; font-size: 14.5px; line-height: 1.35; }
dt { font-family: var(--f-mono); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: var(--muted); padding-top: 2px; }
dd { margin: 0; color: var(--ink); }
.ma-pearl { margin-top: 8px; padding-top: 8px; border-top: 1px solid var(--hair); opacity: 0; transition: opacity .6s var(--ease); }
.ma-pearl.show { opacity: 1; }
</style>

<!--
COMPARTIMENTO ANTERIOR (2,5 min). Todos inervados pelo n. musculocutâneo.
Coracobraquial: do processo coracoide ao terço médio da face medial do úmero; flete e aduz o braço. Marco: é perfurado pelo musculocutâneo — é assim que identificamos o nervo na peça.
Bíceps: duas cabeças — longa, do tubérculo supraglenoidal (tendão dentro da articulação do ombro, no sulco intertubercular); curta, do coracoide. Insere na tuberosidade do rádio e na aponeurose bicipital. É o principal SUPINADOR com o cotovelo fletido (aparafusar), além de fletir o cotovelo.
Braquial: profundo ao bíceps; da metade distal do úmero ao coronoide e à tuberosidade da ulna. É o principal FLEXOR do cotovelo — flete em qualquer posição do antebraço.
[1] Pérola clínica: sinal de Popeye na ruptura do tendão da cabeça longa.
-->

---
clicks: 1
---

<!-- ================= 11 · COMPARTIMENTO POSTERIOR ================= -->
<div class="frame">
  <div class="plate-head"><span class="num"><b>11</b> / 15 · Compartimento posterior</span><span>Braço &amp; Axila</span></div>
  <div class="mp-grid">
    <div class="plate mp-plate"><div class="core">
      <span class="fig-tag">Vista posterior</span>
      <div class="tri-img">
        <img src="/img/p/triceps.png" class="fig" alt="Render 3D do m. tríceps braquial, vista posterior" />
        <div class="pin r" style="left:56%;top:34%"><span class="dot" style="background:var(--muscle)"></span><span class="line" style="width:70px"></span><span class="lab">Cabeça longa</span></div>
        <div class="pin r" style="left:30%;top:50%"><span class="dot" style="background:var(--rose)"></span><span class="line" style="width:128px"></span><span class="lab">Cabeça lateral</span></div>
        <div class="pin r" style="left:40%;top:84%"><span class="dot" style="background:var(--amber)"></span><span class="line" style="width:100px"></span><span class="lab">Cabeça medial<small>profunda</small></span></div>
      </div>
      <div class="fig-cap">BodyParts3D/Anatomography · CC BY-SA 2.1 JP</div>
    </div></div>
    <div class="mp-right">
      <span class="eyebrow"><i style="background:var(--post)"></i>Extensores · n. radial (C6–C8)</span>
      <h2 class="title">Músculos do compartimento<br><em>posterior</em></h2>
      <div class="rows" style="margin-top:12px">
        <div class="row"><b>Cab. longa</b><span><b>Tubérculo infraglenoidal</b> da escápula — única que cruza o ombro.</span></div>
        <div class="row"><b>Cab. lateral</b><span>Face posterior do úmero, <b>acima</b> do sulco do n. radial.</span></div>
        <div class="row"><b>Cab. medial</b><span>Face posterior do úmero, <b>abaixo</b> do sulco.</span></div>
        <div class="row"><b>Inserção</b><span><b>Olécrano</b> · principal <b>extensor do cotovelo</b>.</span></div>
        <div class="row"><b>Ancôneo</b><span>Epicôndilo lateral → olécrano · auxilia a extensão.</span></div>
      </div>
      <div class="erratum" :class="{ show: $clicks >= 1 }">
        <span class="mono cap">Atenção na prática</span>
        <p>O roteiro cita “cabeça curta” do tríceps: o nome correto é <b>cabeça lateral</b>.</p>
      </div>
    </div>
  </div>
</div>

<style>
.mp-grid { flex: 1; display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 28px; min-height: 0; }
.mp-plate { height: 474px; }
.mp-plate .core { overflow: visible; }
.tri-img { position: absolute; top: 30px; bottom: 26px; left: 4%; aspect-ratio: 499 / 1114; }
.tri-img img { width: 100%; height: 100%; object-fit: contain; mix-blend-mode: multiply; }
.mp-right { display: flex; flex-direction: column; justify-content: center; gap: 4px; }
.mp-right .row { grid-template-columns: 136px 1fr; }
.erratum { margin-top: 12px; padding: 10px 14px; border-radius: 14px; background: var(--nerve-soft); box-shadow: inset 0 0 0 1px rgba(217,162,27,.35); opacity: 0; transform: translateY(8px); transition: all .6s var(--ease); }
.erratum.show { opacity: 1; transform: none; }
.erratum .cap { font-size: 11px; letter-spacing: .2em; text-transform: uppercase; color: var(--nerve-ink); }
.erratum p { margin: 4px 0 0; font-size: 15px; color: var(--ink-2); }
</style>

<!--
COMPARTIMENTO POSTERIOR (2 min). O tríceps é o único músculo do compartimento (o ancôneo, no cotovelo, costuma ser estudado junto).
Cabeça longa: tubérculo infraglenoidal — por isso também atua no ombro; é a referência entre o espaço quadrangular e o intervalo triangular.
Cabeça lateral: acima do sulco do n. radial. Cabeça medial: abaixo dele, profunda. Ou seja: o sulco do n. radial fica ENTRE as origens das cabeças lateral e medial — guardem isso para o caso.
Inserção no olécrano; principal extensor do cotovelo. Inervação: n. radial.
[1] Correção do roteiro: não existe "cabeça curta" do tríceps; o nome correto é cabeça lateral.
-->

---
clicks: 4
---

<!-- ================= 12 · ARTÉRIA BRAQUIAL ================= -->
<div class="frame">
  <div class="plate-head"><span class="num"><b>12</b> / 15 · Artéria braquial</span><span>Braço &amp; Axila</span></div>
  <div class="ab-grid">
    <div class="plate ab-plate"><div class="core">
      <span class="fig-tag">Braço direito · vista anterior</span>
      <div class="ab-svg"><ArmCourse mode="artery" :step="$clicks" /></div>
      <div class="fig-cap">Esquema próprio · tracejado = trajeto posterior</div>
    </div></div>
    <div class="ab-right">
      <span class="eyebrow"><i style="background:var(--art)"></i>Vascularização do braço</span>
      <h2 class="title">Artéria braquial<br>e <em>veias profundas</em></h2>
      <div class="rows" style="margin-top:12px">
        <div class="row" :class="{ on: $clicks === 1 }"><b>Trajeto</b><span>Começa na <b>margem inferior do redondo maior</b>; medial ao úmero, depois anterior. Superficial → <b>pulso e PA</b>.</span></div>
        <div class="row" :class="{ on: $clicks === 2 }"><b>Braquial profunda</b><span>1º e maior ramo; segue com o <span class="t-nerve">n. radial</span> no sulco do n. radial.</span></div>
        <div class="row" :class="{ on: $clicks === 3 }"><b>Colaterais ulnares</b><span><b>Superior</b> com o <span class="t-nerve">n. ulnar</span>; <b>inferior</b> acima do epicôndilo medial.</span></div>
        <div class="row" :class="{ on: $clicks === 4 }"><b>Término</b><span>Fossa cubital (colo do rádio): <span class="t-art">a. radial</span> + <span class="t-art">a. ulnar</span>.</span></div>
        <div class="row"><b>Veias profundas</b><span><span class="t-vein">Vv. braquiais</span>, em par ao redor da artéria.</span></div>
      </div>
      <p class="small muted" style="margin-top:8px">As colaterais formam a <b>rede anastomótica do cotovelo</b>.</p>
    </div>
  </div>
</div>

<style>
.ab-grid { flex: 1; display: grid; grid-template-columns: 0.94fr 1.06fr; gap: 28px; min-height: 0; }
.ab-plate { height: 474px; }
.ab-svg { position: absolute; inset: 26px 4px 18px; }
.ab-right { display: flex; flex-direction: column; justify-content: center; gap: 4px; }
.ab-right .row { grid-template-columns: 124px 1fr; font-size: 15px; }
</style>

<!--
ARTÉRIA BRAQUIAL (2 min).
[1] Começa na margem inferior do redondo maior (continuação da axilar). Desce medial ao úmero e, no cotovelo, fica anterior a ele. É superficial no sulco bicipital medial — por isso é onde medimos a PA e palpamos o pulso. É a artéria mais lesada do membro superior em trauma.
[2] A. braquial profunda: primeiro e maior ramo; acompanha o n. radial pelo sulco do n. radial (tracejado = atrás do osso) e termina como colateral média e colateral radial.
[3] Colateral ulnar superior: acompanha o n. ulnar, atravessa o septo medial. Colateral ulnar inferior: acima do epicôndilo medial.
[4] Termina na fossa cubital, na altura do colo do rádio, dividindo-se em radial e ulnar.
Veias profundas: as vv. braquiais são satélites da artéria (duas, uma de cada lado) e se juntam à basílica para formar a v. axilar.
-->

---
clicks: 5
---

<!-- ================= 13 · NERVOS DO BRAÇO ================= -->
<div class="frame">
  <div class="plate-head"><span class="num"><b>13</b> / 15 · Nervos do braço</span><span>Braço &amp; Axila</span></div>
  <div class="nb-grid">
    <div class="plate nb-plate"><div class="core">
      <span class="fig-tag">Braço direito · vista anterior</span>
      <div class="ab-svg"><ArmCourse mode="nerves" :step="$clicks" /></div>
      <div class="fig-cap">Esquema próprio · ○ = perfura um septo/músculo · tracejado = posterior</div>
    </div></div>
    <div class="nb-right">
      <span class="eyebrow"><i style="background:var(--nerve)"></i>Inervação do braço</span>
      <div class="nb-panel" v-if="$clicks === 0">
        <h2 class="title">Nervos do braço:<br><em>trajeto e relações</em></h2>
        <p class="lede">Para cada um: <b>de onde vem</b>, <b>que marco atravessa</b> e <b>o que inerva no braço</b>. Mediano e ulnar <b>não dão ramos no braço</b>.</p>
      </div>
      <div class="nb-panel" v-else-if="$clicks === 1">
        <span class="nb-orig mono">Fascículo lateral · C5–C7</span>
        <h2 class="title">Nervo musculocutâneo</h2>
        <ol class="steps"><li>Perfura o <b>coracobraquial</b></li><li>Desce entre <b>bíceps e braquial</b> — inerva os três</li><li>Emerge lateral ao tendão do bíceps como <b>n. cutâneo lateral do antebraço</b></li></ol>
      </div>
      <div class="nb-panel" v-else-if="$clicks === 2">
        <span class="nb-orig mono">Raízes lateral + medial · (C5) C6–T1</span>
        <h2 class="title">Nervo mediano</h2>
        <ol class="steps"><li>Começa <b>lateral</b> à a. braquial</li><li>No meio do braço <b>cruza a artéria</b> pela frente</li><li>Chega à fossa cubital <b>medial</b> à artéria · sem ramos no braço</li></ol>
      </div>
      <div class="nb-panel" v-else-if="$clicks === 3">
        <span class="nb-orig mono">Fascículo medial · (C7) C8–T1</span>
        <h2 class="title">Nervo ulnar</h2>
        <ol class="steps"><li>Desce <b>medial</b> à a. braquial</li><li>No terço médio <b>perfura o septo intermuscular medial</b> com a a. colateral ulnar superior</li><li>Passa <b>atrás do epicôndilo medial</b>, no sulco do n. ulnar · sem ramos no braço</li></ol>
      </div>
      <div class="nb-panel" v-else-if="$clicks === 4">
        <span class="nb-orig mono">Fascículo posterior · C5–T1</span>
        <h2 class="title">Nervo radial</h2>
        <ol class="steps"><li>Sai pelo <b>intervalo triangular</b> com a a. braquial profunda</li><li>Espirala no <b>sulco do n. radial</b>, entre as cabeças lateral e medial do tríceps</li><li><b>Perfura o septo lateral</b> e passa à frente do epicôndilo lateral → ramos superficial e profundo</li></ol>
        <p class="small" style="margin-top:6px">Os ramos para o tríceps saem <b>antes</b> do sulco.</p>
      </div>
      <div class="nb-panel" v-else>
        <span class="nb-orig mono">Fascículo posterior · C5–C6</span>
        <h2 class="title">Nervo axilar</h2>
        <ol class="steps"><li>Atravessa o <b>espaço quadrangular</b> com a a. circunflexa posterior do úmero</li><li>Contorna o <b>colo cirúrgico</b></li><li>Inerva <b>deltoide e redondo menor</b>; pele sobre o deltoide</li></ol>
      </div>
    </div>
  </div>
</div>

<style>
.nb-grid { flex: 1; display: grid; grid-template-columns: 0.94fr 1.06fr; gap: 30px; min-height: 0; }
.nb-plate { height: 474px; }
.nb-right { display: flex; flex-direction: column; justify-content: center; gap: 10px; }
.nb-panel { animation: rise .7s var(--ease-out) both; }
.nb-orig { font-size: 12.5px; letter-spacing: .16em; text-transform: uppercase; color: var(--nerve-ink); }
.nb-panel .title { font-size: 48px; }
.steps { list-style: none; counter-reset: s; padding: 0; margin: 14px 0 0; display: flex; flex-direction: column; }
.steps li { counter-increment: s; display: block; position: relative; padding-left: 40px !important; padding: 9px 0; border-top: 1px solid var(--hair); font-size: 16.5px; line-height: 1.4; color: var(--ink-2); }
.steps li:last-child { border-bottom: 1px solid var(--hair); }
.steps li::before { position: absolute; left: 0; top: 11px; content: counter(s, decimal-leading-zero); font-family: var(--f-mono); font-size: 12.5px; color: var(--nerve-ink); padding-top: 3px; }
</style>

<!--
NERVOS DO BRAÇO (3 min). Um por clique; o mapa apaga os outros.
[1] Musculocutâneo: perfura o coracobraquial, desce entre bíceps e braquial inervando os três, e termina como n. cutâneo lateral do antebraço.
[2] Mediano: lateral à artéria em cima, cruza na frente dela no meio do braço e chega medial na fossa cubital. Não dá ramos no braço.
[3] Ulnar: medial à artéria; no terço médio fura o septo medial e passa para o compartimento posterior; atrás do epicôndilo medial. Também não dá ramos no braço.
[4] Radial: intervalo triangular, sulco do n. radial entre as cabeças lateral e medial, fura o septo lateral e vai para a frente do epicôndilo lateral. Ponto-chave para o caso: os ramos para o tríceps saem ANTES de ele entrar no sulco.
[5] Axilar: espaço quadrangular com a circunflexa posterior, contorna o colo cirúrgico, inerva deltoide e redondo menor.
-->

---
clicks: 5
---

<!-- ================= 14 · CORRELAÇÃO CLÍNICA ================= -->
<div class="frame">
  <div class="plate-head"><span class="num"><b>14</b> / 15 · Correlação clínica</span><span>Braço &amp; Axila</span></div>
  <div class="cc-grid">
    <div class="plate cc-plate"><div class="core">
      <img src="/img/p/umero.png" class="fig" alt="Úmero, vista anterior, com pontos de risco" />
      <div class="pin num r" :style="{ opacity: $clicks >= 1 ? 1 : .35 }" style="left:54%;top:25%"><span class="dot">1</span></div>
      <div class="pin num r" :style="{ opacity: $clicks >= 2 ? 1 : .35 }" style="left:46%;top:47%"><span class="dot" style="background:var(--art)">2</span></div>
      <div class="pin num r" :style="{ opacity: $clicks >= 3 ? 1 : .35 }" style="left:38%;top:80%"><span class="dot">3</span></div>
      <div class="pin num r" :style="{ opacity: $clicks >= 4 ? 1 : .35 }" style="left:51%;top:88%"><span class="dot">4</span></div>
    </div></div>
    <div class="cc-right">
      <div class="answer rise">
        <span class="mono cap">Resposta do caso</span>
        <p>Fratura da diáfise lesa o <span class="t-nerve">n. radial</span> no sulco do n. radial → <b>mão caída</b>. O tríceps funciona porque seus ramos saem <b>antes</b> do sulco.</p>
      </div>
      <div class="rows cc-rows">
        <div class="row" :class="{ dim: $clicks < 1 }"><b>1 · Colo cirúrgico</b><span><span class="t-nerve">N. axilar</span> (fratura, luxação anterior do ombro): fraqueza na abdução, atrofia do deltoide, anestesia na face lateral do ombro.</span></div>
        <div class="row" :class="{ dim: $clicks < 2 }"><b>2 · Diáfise</b><span><span class="t-nerve">N. radial</span>: não estende punho e dedos; hipoestesia no dorso da mão (1º espaço).</span></div>
        <div class="row" :class="{ dim: $clicks < 3 }"><b>3 · Supracondilar</b><span><span class="t-art">A. braquial</span> e <span class="t-nerve">n. mediano</span> (criança): risco de isquemia → contratura isquêmica de Volkmann.</span></div>
        <div class="row" :class="{ dim: $clicks < 4 }"><b>4 · Epicôndilo medial</b><span><span class="t-nerve">N. ulnar</span>: parestesia no 4º–5º dedos, fraqueza dos músculos intrínsecos da mão.</span></div>
      </div>
      <div class="plex-strip" :class="{ show: $clicks >= 5 }">
        <div><b>Erb-Duchenne</b> · C5–C6<span>“gorjeta do garçom”: braço aduzido em rotação medial, cotovelo estendido, antebraço pronado</span></div>
        <div><b>Klumpke</b> · C8–T1<span>mão em garra; pode haver síndrome de Horner</span></div>
        <div><b>N. torácico longo</b><span>escápula alada após esvaziamento axilar</span></div>
      </div>
    </div>
  </div>
</div>

<style>
.cc-grid { flex: 1; display: grid; grid-template-columns: 0.5fr 1.5fr; gap: 26px; min-height: 0; }
.cc-plate { height: 474px; }
.cc-right { display: flex; flex-direction: column; justify-content: center; gap: 10px; }
.answer { padding: 12px 16px; border-radius: 16px; background: var(--dark); color: #efe8dc; }
.answer .cap { font-size: 11px; letter-spacing: .2em; text-transform: uppercase; color: var(--nerve); }
.answer p { margin: 4px 0 0; font-family: var(--f-serif); font-size: 20px; line-height: 1.2; }
.answer .t-nerve { color: var(--nerve); }
.answer b { font-weight: 400; font-style: italic; color: #f0b49f; }
.cc-rows .row { grid-template-columns: 136px 1fr; font-size: 14.5px; padding: 6px 0; }
.plex-strip { display: grid; grid-template-columns: 1.3fr 1fr 1fr; gap: 12px; font-size: 13.5px; line-height: 1.35; opacity: 0; transform: translateY(8px); transition: all .6s var(--ease); }
.plex-strip.show { opacity: 1; transform: none; }
.plex-strip > div { padding: 9px 12px; border-radius: 12px; background: rgba(29,24,20,.04); box-shadow: inset 0 0 0 1px var(--hair); }
.plex-strip b { font-weight: 600; }
.plex-strip span { display: block; color: var(--ink-2); margin-top: 2px; }
</style>

<!--
CORRELAÇÃO (3 min). Primeiro, fechar o caso: a fratura da diáfise lesa o n. radial no sulco do n. radial — mão caída e hipoestesia no dorso da mão. O tríceps está preservado porque os ramos para ele saem do radial antes do sulco (na axila e no braço proximal).
Depois, os quatro pontos ósseos do slide 3, agora como pontos de risco:
[1] Colo cirúrgico — n. axilar (fratura ou luxação anterior): abdução fraca, deltoide atrófico, anestesia na face lateral do ombro.
[2] Diáfise — n. radial.
[3] Supracondilar (típica de criança) — a. braquial e n. mediano: risco de isquemia e contratura de Volkmann.
[4] Epicôndilo medial — n. ulnar.
[5] Lesões do plexo: Erb (C5–C6, parto/queda com afastamento cabeça-ombro: "gorjeta do garçom"), Klumpke (C8–T1, tração do braço para cima: mão em garra, pode ter Horner) e lesão do n. torácico longo (escápula alada) no esvaziamento axilar.
-->

---
clicks: 3
---

<!-- ================= 15 · SÍNTESE + QUIZ ================= -->
<div class="frame">
  <div class="plate-head"><span class="num"><b>15</b> / 15 · Síntese</span><span>Braço &amp; Axila</span></div>
  <div class="sy-grid">
    <div class="sy-left">
      <span class="eyebrow"><i></i>Síntese</span>
      <h2 class="title">Síntese dos<br><em>pontos-chave</em></h2>
      <ol class="take">
        <li><span class="numeral">1</span><p>A <b>axila</b> é a passagem: tudo o que vai para o membro superior cruza a pirâmide, em volta da a. axilar.</p></li>
        <li><span class="numeral">2</span><p>O <b>plexo</b> segue 5-3-6-3-5; os fascículos levam o nome da posição em relação à a. axilar.</p></li>
        <li><span class="numeral">3</span><p><b>Fáscia + septos + úmero</b> = dois compartimentos, cada um com seu nervo: musculocutâneo e radial.</p></li>
        <li><span class="numeral">4</span><p>O <b>feixe principal</b> corre no sulco bicipital medial; a v. cefálica, no lateral.</p></li>
        <li><span class="numeral">5</span><p>O <b>úmero</b> carrega nervos: colo–axilar, diáfise–radial, supracondilar–mediano, epicôndilo medial–ulnar.</p></li>
      </ol>
    </div>
    <div class="quiz">
      <span class="mono cap">Revisão</span>
      <div class="qz"><p>Quem atravessa o espaço quadrangular junto do n. axilar?</p><span class="ans" :class="{ show: $clicks >= 1 }">A. circunflexa posterior do úmero</span></div>
      <div class="qz"><p>Que nervo perfura o m. coracobraquial?</p><span class="ans" :class="{ show: $clicks >= 2 }">N. musculocutâneo</span></div>
      <div class="qz"><p>Onde a a. axilar passa a se chamar braquial?</p><span class="ans" :class="{ show: $clicks >= 3 }">Margem inferior do m. redondo maior</span></div>
      <span class="mono thanks">Obrigado · perguntas?</span>
    </div>
  </div>
</div>

<style>
.sy-grid { flex: 1; display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 30px; min-height: 0; }
.sy-left { display: flex; flex-direction: column; justify-content: center; }
.take { list-style: none; padding: 0; margin: 12px 0 0; display: flex; flex-direction: column; }
.take li { display: grid; grid-template-columns: 38px 1fr; gap: 10px; align-items: center; padding: 6px 0; border-top: 1px solid var(--hair); }
.take li:last-child { border-bottom: 1px solid var(--hair); }
.take .numeral { font-size: 32px; }
.take p { margin: 0; font-size: 16px; line-height: 1.42; color: var(--ink-2); }
.quiz { align-self: center; padding: 6px; border-radius: 22px; background: rgba(21,17,14,.06); box-shadow: inset 0 0 0 1px var(--hair-2); }
.quiz { display: flex; flex-direction: column; gap: 0; }
.quiz > * { background: var(--dark); color: #efe8dc; padding: 0 22px; }
.quiz > .cap { padding-top: 20px; border-radius: 16px 16px 0 0; font-size: 11px; letter-spacing: .22em; text-transform: uppercase; color: var(--nerve); }
.qz { padding-top: 14px !important; padding-bottom: 12px !important; border-bottom: 1px solid rgba(255,255,255,.08); }
.qz p { margin: 0; font-family: var(--f-serif); font-size: 23.5px; line-height: 1.2; }
.ans { display: inline-block; margin-top: 8px; font-size: 15px; font-weight: 600; color: var(--dark); background: var(--nerve); padding: 3px 10px; border-radius: 999px;
  opacity: 0; transform: translateY(6px); transition: all .5s var(--ease); }
.ans.show { opacity: 1; transform: none; }
.thanks { padding-top: 16px !important; padding-bottom: 20px !important; border-radius: 0 0 16px 16px; font-size: 12.5px; letter-spacing: .2em; text-transform: uppercase; color: #a89b8b !important; }
</style>

<!--
SÍNTESE (1,5 min). Ler as cinco frases — são o esqueleto do seminário. Depois o quiz: perguntar à turma e revelar a resposta a cada clique.
[1] A. circunflexa posterior do úmero. [2] Musculocutâneo. [3] Margem inferior do redondo maior.
Agradecer e abrir para perguntas.
-->

---

<!-- ================= APÊNDICE · REFERÊNCIAS ================= -->
<div class="frame">
  <div class="plate-head"><span class="num"><b>Apêndice</b> · Referências e créditos</span><span>Braço &amp; Axila</span></div>
  <div class="ref-grid">
    <div>
      <span class="eyebrow"><i></i>Referências</span>
      <ol class="refs">
        <li>MOORE, K. L.; DALLEY, A. F.; AGUR, A. M. R. <i>Anatomia orientada para a clínica</i>. 8. ed. Rio de Janeiro: Guanabara Koogan, 2019. Cap. 3 — Membro superior.</li>
        <li>NETTER, F. H. <i>Atlas de anatomia humana</i>. 7. ed. Rio de Janeiro: Elsevier, 2019.</li>
        <li>GORDON, A.; ALSAYOURI, K. Anatomy, Shoulder and Upper Limb, Axilla. In: <i>StatPearls</i>. Treasure Island: StatPearls Publishing, 2023. NBK547723.</li>
        <li>BAYOT, M. L.; NASSEREDDIN, A.; VARACALLO, M. A. Anatomy, Shoulder and Upper Limb, Brachial Plexus. In: <i>StatPearls</i>, 2023. NBK500016.</li>
        <li>EPPERSON, T. N.; VARACALLO, M. A. Anatomy, Shoulder and Upper Limb, Brachial Artery. In: <i>StatPearls</i>, 2023. NBK537145.</li>
        <li>FORRO, S. D.; MUNJAL, A.; LOWE, J. B. Anatomy, Shoulder and Upper Limb, Arm Structure and Function. In: <i>StatPearls</i>, 2023. NBK507841.</li>
        <li>FAMENE. Roteiro de atividade prática — Membro superior: axila e braço. Correlação Anatomoclínica I.</li>
      </ol>
    </div>
    <div>
      <span class="eyebrow"><i style="background:var(--vein)"></i>Créditos de imagem</span>
      <ul class="refs credits">
        <li>Renders 3D: <b>BodyParts3D / Anatomography</b>, © DBCLS — CC BY-SA 2.1 JP, via Wikimedia Commons (recortados e recoloridos).</li>
        <li>Pranchas: <b>Gray’s Anatomy of the Human Body</b> (1918), ilustr. H. V. Carter — domínio público, via Wikimedia Commons (figs. 523 e 574).</li>
        <li>Corte transversal, pirâmide axilar, plexo braquial, espaços posteriores e mapas de trajeto: <b>esquemas próprios</b>, elaborados a partir de Moore (2019) e Netter (2019).</li>
      </ul>
    </div>
  </div>
</div>

<style>
.ref-grid { flex: 1; display: grid; grid-template-columns: 1.3fr 0.7fr; gap: 34px; padding-top: 8px; }
.refs { margin: 12px 0 0; padding-left: 18px; display: flex; flex-direction: column; gap: 7px; font-size: 13.5px; line-height: 1.45; color: var(--ink-2); }
.credits { list-style: none; padding-left: 0; }
</style>
