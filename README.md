# Portfólio de Desenvolvedora (React + Vite + TypeScript)

Projeto inicial para um portfólio com seção de projetos, blog e contatos.

## Requisitos
- Node.js 18+
- npm

## Instalação
```bash
npm install
```

## Desenvolvimento
```bash
npm run dev
```
Acesse o endereço exibido no terminal (geralmente http://localhost:5173).

## Build
```bash
npm run build
```

## Preview do build
```bash
npm run preview
```

## Deploy (GitHub Pages)
- Link publicado: https://rebecaelens.github.io/meu_portfolio/
- Build automatizado via GitHub Actions (workflow `Deploy to GitHub Pages`).
- Para disparar manualmente: abra Actions → `Deploy to GitHub Pages` → Run workflow.

## Estrutura
- `src/App.tsx`: layout principal do portfólio.
- `src/index.css`: estilos base.
- `vite.config.ts`: configuração do Vite.

## Personalização rápida
- Ajuste os dados de projetos, posts e contatos em `src/App.tsx`.
- Substitua `contato@exemplo.dev` pelo seu email real.
- Atualize os links `#` com URLs reais de repositórios e artigos.
