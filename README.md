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
- Catálogo de planetas com busca, filtro por tipo (Lift State Up) e cards interativos
- Página de detalhes do planeta via rota dinâmica (`/explorar/:id`)
- Planetas renderizados com superfície única por tipo (lava, gelo, gás, crateras, etc.)
- Centro de missões: marcar como concluída, filtro por status e barra de progresso
- Atlas estelar com mapa orbital interativo (planetas em órbita ao redor de uma anã branca)
- Mapa: hover inspeciona o planeta e o clique fixa as informações, que acompanham o planeta em movimento
- Navbar responsiva com menu mobile e visual temático espacial com animações CSS

---

## 📁 Estrutura de Pastas

```
nexus-explorer/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar/            # barra de navegação (NavLink + menu mobile)
│   │   ├── Footer/
│   │   ├── PlanetOrb/         # orbe planetário único por tipo (reutilizável)
│   │   ├── PlanetCard/        # card do catálogo (Explorar)
│   │   ├── PlanetGrid/        # grade de cards
│   │   ├── PlanetSearch/      # campo de busca
│   │   ├── PlanetFilter/      # chips de filtro por tipo
│   │   ├── MissionCard/       # card de missão
│   │   ├── MissionList/       # lista de missões
│   │   ├── AtlasCard/         # cartão de info que acompanha o planeta no mapa
│   │   ├── AtlasFilter/       # busca + filtro por categoria do Atlas
│   │   └── StarMap/           # mapa estelar orbital (componente criativo)
│   ├── pages/
│   │   ├── Home/
│   │   ├── Explore/
│   │   ├── PlanetDetails/
│   │   ├── Missions/
│   │   └── Atlas/
│   ├── data/
│   │   ├── planets.js         # mock dos planetas
│   │   └── missions.js        # mock das missões
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

> Cada componente e página possui seu próprio arquivo `.module.css` ao lado do `.jsx`.

---

## ⚙️ Passos para Instalação

**Pré-requisitos:** Node.js 18+ instalado

```bash
# 1. Clone o repositório
git clone https://github.com/PeedroSantos/Nexus-Explorer.git

# 2. Acesse a pasta do projeto
cd Nexus-Explorer

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

[https://github.com/PeedroSantos/Nexus-Explorer](https://github.com/PeedroSantos/Nexus-Explorer)

---

## 🎨 Componente Criativo

### StarMap — Mapa Estelar Orbital

**Localização:** `src/components/StarMap/` (utilizado na página Atlas Estelar)

**Descrição:**  
Mapa interativo da galáxia Nexus: uma **anã branca** central e anéis orbitais concêntricos onde os planetas **orbitam continuamente**. A distância de cada planeta ao sol é ordenada pela sua **temperatura** (mundos mais quentes orbitam mais perto), e cada planeta tem **velocidade e sentido de órbita próprios**, então nenhum se move igual ao outro.

**Interações:**
- `onMouseEnter`: ao passar o mouse, projeta um cartão com os dados do planeta
- `onClick`: fixa o cartão (pinned); ele permanece visível e **acompanha o planeta enquanto ele orbita**
- `onClick` novamente: solta o cartão fixado

**Originalidade:**  
Vai muito além de um card ou grade comum — recria um "orrery" (mapa orbital) animado usando apenas React + CSS (transforms, animações e contra-rotação para manter os cartões legíveis durante o movimento), sem bibliotecas externas. Cada planeta ainda é desenhado com superfície própria por tipo (lava, gelo, faixas de gás, crateras, etc.), reforçando a identidade espacial do Nexus Explorer.

---

## 📐 Conceitos Aplicados

| Conceito | Onde foi aplicado |
|----------|-------------------|
| React Router DOM | `AppRoutes.jsx` — BrowserRouter, Routes, Route |
| NavLink / Link | `Navbar.jsx` (navegação principal), `PlanetCard.jsx` (link para o detalhe) |
| useNavigate | `Home.jsx` — botão "Iniciar Exploração" e cards de módulo |
| useParams | `PlanetDetails.jsx` — captura do id do planeta na rota `/explorar/:id` |
| Lift State Up | `Explore.jsx`, `Missions.jsx` e `Atlas.jsx` — busca/filtros geridos na página pai |
| Props desestruturadas | `PlanetCard`, `MissionCard`, `AtlasCard`, `PlanetOrb` — componentes filhos |
| Dados mockados | `src/data/planets.js` e `src/data/missions.js` |
| CSS Modules | Todos os componentes e páginas |
| Renderização condicional | Planeta não encontrado, lista/grade vazia, missão concluída vs. botão |
| Eventos | onClick, onMouseEnter, onMouseLeave, onChange nos componentes |
| Componente criativo | `StarMap.jsx` — mapa orbital interativo (ver seção acima) |

---

*UNIUBE — Linguagem de Programação para Internet — Prof. Dr. Camilo Barreto*
