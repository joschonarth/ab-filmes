<div align="center">

<img alt="ab-filmes" src="./public/images/logo.svg" />

# AB Filmes

_Gerenciador de catálogo de filmes com avaliações, favoritos e autenticação de usuários._

<img src="https://img.shields.io/github/last-commit/joschonarth/ab-filmes?style=default&logo=git&logoColor=white&color=9333ea&labelColor=27272a" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/joschonarth/ab-filmes?style=default&color=9333ea&labelColor=27272a" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/joschonarth/ab-filmes?style=default&color=9333ea&labelColor=27272a" alt="repo-language-count">

---

📃 [Sobre](#-sobre)&nbsp;&nbsp;•&nbsp;&nbsp;
🛠️ [Tecnologias](#️-tecnologias)&nbsp;&nbsp;•&nbsp;&nbsp;
✨ [Funcionalidades](#-funcionalidades)&nbsp;&nbsp;•&nbsp;&nbsp;
🚀 [Como rodar](#-como-rodar)&nbsp;&nbsp;

</div>

---

<img width="1366" height="1197" alt="screencapture-localhost-4200-explore-2026-07-23-21_53_25" src="https://github.com/user-attachments/assets/b56cbcaa-3fcc-47bc-bfcb-016971955205" />

---

## 📃 Sobre

O **AB Filmes** é uma aplicação web para gerenciamento de catálogo de filmes, desenvolvida com **Angular** no frontend e **Node.js/Express** no backend. O usuário pode criar uma conta, fazer login e cadastrar filmes com imagem, título, ano de lançamento, gênero e descrição. É possível avaliar cada filme com estrelas, marcar filmes como favoritos e filtrar o catálogo por nome ou categoria.

Neste projeto, os **signals** do Angular são utilizados como principal forma de gerenciamento de estado, aplicados em um contexto completo que envolve autenticação, validação de formulários, comunicação com API e cálculo automático da média das avaliações.

---

## 🛠️ Tecnologias

### Frontend

- 🅰️ **[Angular](https://angular.dev/)** — Framework para construção de aplicações web robustas e escaláveis.
- 🟦 **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática e segurança em tempo de desenvolvimento.
- 🎨 **[TailwindCSS](https://tailwindcss.com/)** — Framework CSS utility-first para estilização e responsividade.
- 🔄 **[RxJS](https://rxjs.dev/)** — Programação reativa com observables para gerenciamento de estado e eventos.
- ⚡ **Signals** — Gerenciamento de estado reativo nativo do Angular.

### Backend

- 🟩 **[Node.js](https://nodejs.org/)** — Ambiente de execução JavaScript no servidor.
- 🌐 **[Express](https://expressjs.com/)** — Framework para construção da API REST.
- 🟦 **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática também no backend.
- 🔐 **[JWT](https://jwt.io/)** — Autenticação e controle de acesso baseados em token.
- 📦 **[Multer](https://github.com/expressjs/multer)** — Upload e tratamento de imagens dos filmes.

---

## ✨ Funcionalidades

- [x] 👤 Criação de conta e login de usuários
- [x] 🔐 Autenticação e controle de acesso com JWT
- [x] 🎬 Listagem do catálogo de filmes
- [x] ➕ Cadastro de filmes com imagem, título, ano, gênero e descrição
- [x] ⭐ Avaliação de filmes com sistema de estrelas
- [x] ❤️ Marcação de filmes como favoritos
- [x] 📋 Listagem de filmes favoritos
- [x] 🔍 Filtro de busca por nome e categoria

---

## 🚀 Como rodar

### 📋 Pré-requisitos

- 🟩 [Node.js 18+](https://nodejs.org/)
- 🅰️ [Angular CLI](https://angular.dev/tools/cli)

### 🔧 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/joschonarth/ab-filmes.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd ab-filmes
   ```
3. Instale as dependências do frontend:
   ```bash
   npm install
   ```
4. Instale as dependências do backend:
   ```bash
   cd server
   npm install
   ```

### ▶️ Execução

Inicie o backend:

```bash
cd server
npm run start
```

Em outro terminal, inicie o frontend:

```bash
npm run start
```

Acesse **[http://localhost:4200](http://localhost:4200)** no navegador.

---

## ⭐ Apoie este Projeto

Se curtiu o projeto, deixe uma ⭐ aqui no GitHub — isso ajuda muito!

---

<div align="center">

Feito com ♥ por **[João Otávio Schonarth](https://github.com/joschonarth)**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/joschonarth)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/joschonarth)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:joschonarth@gmail.com)

</div>
