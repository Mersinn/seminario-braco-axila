export default [
 ['<dt>Inserção</dt><dd>Terço médio da face medial do úmero</dd>','<dt>Inserção</dt><dd>Terço médio, face medial do úmero</dd>'],
 ['<dt>Nervo</dt><dd class="t-nerve">Musculocutâneo — que o perfura</dd>','<dt>Nervo</dt><dd class="t-nerve">Musculocutâneo (o perfura)</dd>'],
 ['<dt>Ação</dt><dd><b>Supinação</b> (cotovelo fletido) e flexão do cotovelo</dd>','<dt>Ação</dt><dd><b>Supinação</b> e flexão do cotovelo</dd>'],
 ['<dt>Origem</dt><dd><b>Longa:</b> tubérculo supraglenoidal · <b>curta:</b> processo coracoide</dd>','<dt>Origem</dt><dd><b>Longa:</b> tubérculo supraglenoidal<br><b>Curta:</b> processo coracoide</dd>'],
 ['<dt>Inserção</dt><dd>Tuberosidade do rádio + aponeurose bicipital</dd>','<dt>Inserção</dt><dd>Tuberosidade do rádio</dd>'],
 ['<dt>Origem</dt><dd>Metade distal da face anterior do úmero</dd>','<dt>Origem</dt><dd>Metade distal anterior do úmero</dd>'],
 ['<dt>Inserção</dt><dd>Processo coronoide e tuberosidade da ulna</dd>','<dt>Inserção</dt><dd>Tuberosidade da ulna</dd>'],
 ['<dt>Ação</dt><dd><b>Principal flexor do cotovelo</b>, em qualquer posição</dd>','<dt>Ação</dt><dd><b>Principal flexor</b> do cotovelo</dd>'],
 ['<dt>Nervo</dt><dd class="t-nerve">Musculocutâneo (+ ramo do radial)</dd>','<dt>Nervo</dt><dd class="t-nerve">Musculocutâneo</dd>'],
 ['<b>Pérola:</b> o tendão da cabeça longa do bíceps é intra-articular e corre no sulco intertubercular. Sua ruptura deixa o ventre “caído” no braço — o <b>sinal de Popeye</b>.','<b>Pérola:</b> ruptura do tendão da cabeça longa do bíceps → ventre “caído” no braço: <b>sinal de Popeye</b>.'],
 ['.mplate { height: 232px; }','.mplate { height: 196px; }'],
 ['dl { display: grid; grid-template-columns: 62px 1fr;','dl { display: grid; grid-template-columns: 78px 1fr;'],
 // slide 11
 [`<span class="fig-tag">Tríceps braquial · vista posterior</span>
      <img src="/img/p/triceps.png" class="fig" alt="Render 3D do m. tríceps braquial, vista posterior" />
      <div class="pin l" style="left:30%;top:42%"><span class="dot" style="background:var(--rose)"></span><span class="line" style="width:34px"></span><span class="lab">Cabeça lateral</span></div>
      <div class="pin r" style="left:58%;top:36%"><span class="dot" style="background:var(--muscle)"></span><span class="line" style="width:40px"></span><span class="lab">Cabeça longa</span></div>
      <div class="pin r" style="left:46%;top:82%"><span class="dot" style="background:var(--amber)"></span><span class="line" style="width:50px"></span><span class="lab">Cabeça medial<small>profunda</small></span></div>`,
 `<span class="fig-tag">Vista posterior</span>
      <div class="tri-img">
        <img src="/img/p/triceps.png" class="fig" alt="Render 3D do m. tríceps braquial, vista posterior" />
        <div class="pin r" style="left:56%;top:34%"><span class="dot" style="background:var(--muscle)"></span><span class="line" style="width:70px"></span><span class="lab">Cabeça longa</span></div>
        <div class="pin r" style="left:30%;top:50%"><span class="dot" style="background:var(--rose)"></span><span class="line" style="width:128px"></span><span class="lab">Cabeça lateral</span></div>
        <div class="pin r" style="left:40%;top:84%"><span class="dot" style="background:var(--amber)"></span><span class="line" style="width:100px"></span><span class="lab">Cabeça medial<small>profunda</small></span></div>
      </div>`],
 ['.mp-grid { flex: 1; display: grid; grid-template-columns: 0.72fr 1.28fr;','.mp-grid { flex: 1; display: grid; grid-template-columns: 0.9fr 1.1fr;'],
 ['.mp-plate .core img { padding: 22px 0 14px; }','.mp-plate .core { overflow: visible; }\n.tri-img { position: absolute; top: 30px; bottom: 26px; left: 4%; aspect-ratio: 499 / 1114; }\n.tri-img img { width: 100%; height: 100%; object-fit: contain; mix-blend-mode: multiply; }'],
 ['<div class="row"><b>Cab. longa</b><span><b>Tubérculo infraglenoidal</b> da escápula. Única que cruza o ombro; separa o espaço quadrangular do intervalo triangular.</span></div>','<div class="row"><b>Cab. longa</b><span><b>Tubérculo infraglenoidal</b> da escápula — única que cruza o ombro.</span></div>'],
 ['<div class="row"><b>Cab. medial</b><span>Face posterior do úmero, <b>abaixo</b> do sulco do n. radial (profunda).</span></div>','<div class="row"><b>Cab. medial</b><span>Face posterior do úmero, <b>abaixo</b> do sulco.</span></div>'],
 ['<div class="row"><b>Inserção · ação</b><span><b>Olécrano</b> da ulna · principal <b>extensor do cotovelo</b>.</span></div>','<div class="row"><b>Inserção</b><span><b>Olécrano</b> · principal <b>extensor do cotovelo</b>.</span></div>'],
 ['<div class="row"><b>Ancôneo</b><span>Epicôndilo lateral → olécrano; auxilia a extensão e estabiliza o cotovelo · n. radial.</span></div>','<div class="row"><b>Ancôneo</b><span>Epicôndilo lateral → olécrano · auxilia a extensão.</span></div>'],
 ['<p>No roteiro aparece “cabeça curta” do tríceps — pela Terminologia Anatômica o nome é <b>cabeça lateral</b>. “Cabeça curta” é do <b>bíceps</b>.</p>','<p>O roteiro cita “cabeça curta” do tríceps: o nome correto é <b>cabeça lateral</b>.</p>'],
 ['.mp-right .row { grid-template-columns: 118px 1fr; }','.mp-right .row { grid-template-columns: 136px 1fr; }'],
];
