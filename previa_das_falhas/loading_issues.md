# Prévia das Falhas e Soluções - Problemas de Carregamento

## Contexto
Este documento detalha os problemas enfrentados durante a reforma arquitetural do projeto Labora, especificamente relacionados a telas brancas, erros de MIME type e performance de carregamento.

## 1. Erro de Tela Branca / Porta 3000
**Sintoma:** O servidor inicia, mas a página fica em branco ou não carrega.
**Causa:** Processos "zumbis" do Node.js segurando a porta 3000 ou conflito de cache do navegador.
**Solução:**
- Executar `taskkill /F /IM node.exe` para limpar portas.
- Configurar explicitamente `server: { port: 3000 }` no `vite.config.ts`.

## 2. Erro "Failed to load module script... MIME type 'text/css'"
**Sintoma:** O console mostra erro estrito de MIME type ao tentar carregar `index.css`.
**Causa:**
- Importar CSS incorretamente via tag `<script>` ou conflito no `index.html`.
- O navegador esperava um módulo JS mas recebeu um arquivo CSS.
**Solução:**
- **Remover** qualquer link manual `<link rel="stylesheet" href="/index.css">` do `index.html` em ambiente Vite Dev.
- **Manter** apenas `import './index.css'` dentro do `main.tsx`. O Vite cuida da injeção.

## 3. Problema de Texto Solto no Topo (href="..." visible)
**Sintoma:** Código HTML aparecendo como texto na página.
**Causa:** Tag `<link>` mal formatada no `index.html` (faltava a abertura `<link`).
**Solução:** Correção da sintaxe HTML.

## 4. Performance e Travamentos ("Noise" e Scroll)
**Sintoma:** Site travando ao rolar em dispositivos móveis.
**Causa:**
- Efeito de "Noise" (ruído) aplicado ao `body::before` forçando repintura (repaint) da página inteira a cada pixel de scroll.
- Tailwind carregado via CDN (Runtime) bloqueando a renderização.
**Solução:**
- Migração para **Tailwind Build-Time** (PostCSS compilado).
- Efeito Noise movido para `div.noise-overlay` com `transform: translateZ(0)` para aceleração de hardware (GPU) e `pointer-events: none`.
- Uso de `Overscroll-behavior: none` para evitar "bungee jumping" no scroll.

## 5. Falha de Imagens Grandes
**Sintoma:** Imagens explodindo o layout ou SVG quebrado.
**Causa:** Falta de processamento do CSS global antes da renderização do componente.
**Solução:** Garantir que o CSS global (`index.css`) seja o primeiro import no `main.tsx`.
