# ◈ Nexus Explorer

> Centro de Exploração Planetária Interestelar

---

## 👥 Integrantes do Grupo

| Nome | RA |
|------|----|
| Luan Gonzaga Oliveira | 5168164 |
| Pedro Evangelista Santos | 5168181 |
| Diego Mendes Santos | 5168179 |

---

## 📋 Descrição do Projeto

**Nexus Explorer** é uma Single Page Application (SPA) com tema espacial futurista, desenvolvida como trabalho final da disciplina **Linguagem de Programação para Internet** — UNIUBE.

A aplicação simula um Centro de Exploração Planetária, onde usuários podem navegar por mundos fictícios, consultar dados de planetas, acompanhar missões interestelares e explorar o mapa da galáxia Nexus.

---

## 🪐 Tema Escolhido

**Centro de Exploração Planetária Futurista** — Uma interface espacial moderna onde usuários exploram planetas fictícios, gerenciam missões e visualizam o atlas estelar da galáxia Nexus.

---

## 🛠 Tecnologias Utilizadas

- **React 19** — Biblioteca de interface de usuário
- **JavaScript (ES2024)** — Linguagem de programação
- **Vite 6** — Bundler e servidor de desenvolvimento
- **React Router DOM 7** — Roteamento SPA
- **CSS Modules** — Estilização com escopo isolado

---

## ✨ Principais Funcionalidades

- Navegação SPA entre 5 páginas sem recarregamento
- Catálogo de planetas fictícios com cards interativos
- Sistema de filtros com Lift State Up
- Centro de missões com status e detalhes
- Atlas estelar com mapa galáctico por quadrantes
- Navbar responsiva com mobile menu
- Componente holográfico criativo (componente autoral)
- Visual temático espacial com animações CSS

---

## 📁 Estrutura de Pastas

```
nexus-explorer/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/              # Imagens, ícones e mídias
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.module.css
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.module.css
│   │   ├── Explore/
│   │   │   ├── Explore.jsx
│   │   │   └── Explore.module.css
│   │   ├── PlanetDetails/
│   │   │   ├── PlanetDetails.jsx
│   │   │   └── PlanetDetails.module.css
│   │   ├── Missions/
│   │   │   ├── Missions.jsx
│   │   │   └── Missions.module.css
│   │   └── Atlas/
│   │       ├── Atlas.jsx
│   │       └── Atlas.module.css
│   ├── routes/
│   │   └── AppRoutes.jsx
│   ├── styles/
│   │   └── Global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## ⚙️ Passos para Instalação

**Pré-requisitos:** Node.js 18+ instalado

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/nexus-explorer.git

# 2. Acesse a pasta do projeto
cd nexus-explorer

# 3. Instale as dependências
npm install
```

---

## ▶️ Passos para Execução

```bash
# Inicia o servidor de desenvolvimento
npm run dev
```

Acesse em: **http://localhost:5173**

```bash
# Para build de produção
npm run build

# Para visualizar o build
npm run preview
```

---

## 🔗 Link do Repositório

[https://github.com/seu-usuario/nexus-explorer](https://github.com/seu-usuario/nexus-explorer)

---

## 🎨 Componente Criativo

### HolographicPlanetViewer

**Localização:** `src/components/HolographicPlanetViewer/`

**Descrição:**  
Componente visual interativo que exibe um planeta 3D holográfico com anéis orbitais animados, camadas atmosféricas e partículas flutuantes. O usuário pode interagir com o planeta via hover e clique para ver diferentes camadas e dados do astro projetados como holograma.

**Interações:**
- `onMouseEnter`: Revela camadas atmosféricas e expande os anéis
- `onClick`: Projeta dados do planeta em forma de painel holográfico
- `onMouseLeave`: Retorna ao estado de repouso com animação suave

**Originalidade:**  
Vai além de um simples card — simula uma projeção holográfica 3D usando apenas CSS transforms, gradients e animações, sem bibliotecas externas. A identidade visual é totalmente coerente com o tema espacial do Nexus Explorer.

---

## 📐 Conceitos Aplicados

| Conceito | Onde foi aplicado |
|----------|-------------------|
| React Router DOM | `AppRoutes.jsx` — BrowserRouter, Routes, Route |
| NavLink | `Navbar.jsx` — navegação principal com classe ativa |
| useNavigate | `Home.jsx`, `Missions.jsx` — botões de navegação |
| useParams | `PlanetDetails.jsx` — captura do id do planeta |
| Lift State Up | `Missions.jsx` + `Atlas.jsx` — filtros gerenciados na página pai |
| Props desestruturadas | `PlanetCard`, `MissionCard` — componentes filhos |
| Dados mockados | `src/data/` — arrays de planetas e missões |
| CSS Modules | Todos os componentes e páginas |
| Renderização condicional | Filtro ativo, planeta não encontrado, missão selecionada |
| Eventos | onClick, onMouseEnter, onChange nos componentes |

---

*UNIUBE — Linguagem de Programação para Internet — Prof. Dr. Camilo Barreto*
