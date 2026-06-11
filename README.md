# Portfólio — Hannya Cavalcante

Site/portfólio de **Hannya Cavalcante**, UX | UI Designer.
HTML + CSS + JavaScript (estático), responsivo (mobile / tablet / desktop), com modo
claro/escuro, cursor estilo Figma, animações de entrada, faixa (marquee) animada,
páginas de detalhe por projeto e painel de Tweaks.

## Estrutura
```
index.html        → página principal
projeto.html      → template de detalhe de projeto (?id=...)
styles.css        → estilos + tokens de design
script.js         → interações da home (carrossel, cursor, dark mode, reveals, formulário)
projeto.js        → lógica das páginas de projeto
projects-data.js  → DADOS dos projetos (edite aqui para atualizar conteúdo)
tweaks.jsx        → painel de ajustes (cores, fontes, etc.)
tweaks-panel.jsx  → componente base do painel
assets/           → imagens, logos e banners
vercel.json       → configuração de deploy
```

## Editar conteúdo dos projetos
Tudo que aparece nas páginas de projeto vem de **`projects-data.js`** — nome, descrição,
ano, equipe, links, banner, etc. Basta editar esse arquivo.

## Rodar localmente
```bash
python3 -m http.server 8000   # ou: npx serve .
```
Abra `http://localhost:8000`.

## Subir para o GitHub (primeira vez)
```bash
git init
git add .
git commit -m "Primeiro commit do portfólio"
git branch -M main
git remote add origin git@github.com:HannyaCavalcante/Portfolio_HannyaCavalcante_V1.git
git push -u origin main
```

## Atualizações seguintes
```bash
git add .
git commit -m "Descrição da mudança"
git push
```

## Deploy na Vercel
1. Em [vercel.com](https://vercel.com) → **Add New → Project** → importe o repositório.
2. **Framework Preset:** `Other` · **Build Command:** vazio · **Output Directory:** `./`
3. **Deploy.** A cada `git push`, a Vercel publica a nova versão automaticamente.

## Contato
O botão **Enviar** abre o e-mail do visitante apontando para
`hannyacavalcante@hotmail.com`.
