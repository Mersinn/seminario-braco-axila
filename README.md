# Seminário APM I — Braço & Axila

**Apresentação online:** https://mersinn.github.io/seminario-braco-axila/  ·  **Modo apresentador (com notas):** https://mersinn.github.io/seminario-braco-axila/#/presenter/1


## Arquivos

| Arquivo | Para quê |
|---|---|
| `Seminario-Braco-Axila.pptx` | Apresentar em qualquer PC (PowerPoint/Google Slides). **61 slides = 15 slides × cliques**: cada clique do Slidev virou um slide, então basta avançar normalmente. Notas do apresentador incluídas. |
| `Seminario-Braco-Axila.pdf` | 16 páginas com o estado final de cada slide — backup e material de estudo. |
| `Roteiro-de-fala.md` | O que falar em cada slide e em cada clique (~25 min). |
| `seminario-braco-axila/` | Projeto Slidev (versão interativa, com animações). |

## Rodar a versão interativa (Slidev)

```bash
cd seminario-braco-axila
npx slidev slides.md --open
```

Teclas: `→`/espaço avança (inclusive os cliques) e `o` mostra a visão geral. O **modo apresentador** (com notas) abre pelo ícone da barra inferior esquerda ou pelo endereço `/#/presenter/1`.
A versão interativa carrega as fontes da internet; no PC da faculdade sem internet, use o PPTX.

Antes de apresentar: na capa, troque “Integrantes do grupo — editar aqui” pelos nomes (no `slides.md`, linha com `class="authors"`). Depois regenere o PPTX/PDF:

```bash
cd seminario-braco-axila
node docs/shoot.mjs
node docs/build.mjs
```

(o servidor do Slidev precisa estar rodando na porta 3131 para o `shoot.mjs`)

## Estrutura (15 slides)

1. Capa · 2. Caso-gancho (fratura de úmero → mão caída) · 3. Região braquial e úmero como mapa de nervos · 4. Axila: limites (pirâmide) e conteúdo · 5. Artéria axilar (regra 1-2-3) e espaços posteriores · 6. Plexo braquial 5-3-6-3-5 · 7. Ramos por origem + o “M” · 8. Fáscia, septos e compartimentos (corte transversal) · 9. Sulcos bicipitais e veias · 10. Compartimento anterior · 11. Compartimento posterior · 12. Artéria braquial · 13. Nervos do braço · 14. Correlação clínica (resolve o caso) · 15. Síntese + quiz · Apêndice: referências.

## Erros encontrados nas fontes (e corrigidos no seminário)

- **Roteiro da prática**: “cabeça curta” do tríceps → o nome correto é **cabeça lateral** (está sinalizado no slide 11). O “n. cutâneo posterior do antebraço” é ramo do **n. radial**, não do fascículo posterior diretamente.
- **StatPearls — Axilla**: diz que o coracobraquial faz “flexão e adução do *cotovelo*” → atua no **ombro** (braço). Dá o n. torácico longo como C6–C8 → o padrão é **C5–C7**.
- **StatPearls — Arm Structure**: diz que a a. axilar vira braquial ao passar o redondo *menor* → é a margem inferior do **redondo maior**; e atribui à a. braquial o trajeto no sulco radial → quem acompanha o n. radial é a **a. braquial profunda**.
- **StatPearls — Brachial Artery**: diz que a a. braquial profunda “perfura o músculo supinador” → não procede (no braço ela perfura o septo intermuscular lateral, como a. colateral radial).
- **Slides da sua amiga**: o conteúdo estava correto, mas 3 slides para fáscia/septos/compartimentos ocupavam espaço demais. Foram condensados num único slide interativo (o 8), em que o corte transversal se monta por cliques.

## Imagens

- Renders 3D: BodyParts3D/Anatomography (DBCLS), CC BY-SA 2.1 JP — recortados e recoloridos para a paleta do deck.
- Pranchas: Gray’s Anatomy (1918), H. V. Carter — domínio público.
- Corte transversal, pirâmide, plexo, espaços posteriores e mapas de trajeto: esquemas próprios baseados em Moore (2019) e Netter (2019).
