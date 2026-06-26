/* =============================================
   Dados mockados — Catálogo Planetário Nexus
   ---------------------------------------------
   Fonte única de verdade para a Página Explorar e
   para a Mesa Holográfica Interativa.

   Campo `image` guarda um gradiente CSS (radial) usado
   para renderizar o orbe do planeta — mantém o projeto
   autocontido, sem dependências de imagens externas.
   ============================================= */

export const planets = [
  {
    id: 'kepler-22b',
    name: 'Kepler-22b',
    type: 'Oceânico',
    danger: 'Baixo',
    temperature: '22°C',
    image: 'radial-gradient(circle at 32% 30%, #6fe3ff 0%, #1f8fd6 38%, #0a3b6b 78%, #03162e 100%)',
    description: 'Mundo coberto por oceanos profundos sob um céu de neblina turquesa.',
    atmosphere: 'Nitrogênio · Oxigênio · Vapor de água',
    resources: ['Água pura', 'Hidrogênio', 'Bioluminescência'],
  },
  {
    id: 'aridia-prime',
    name: 'Aridia Prime',
    type: 'Desértico',
    danger: 'Médio',
    temperature: '64°C',
    image: 'radial-gradient(circle at 35% 28%, #ffd89b 0%, #e8995a 40%, #9c4a2a 80%, #3a160d 100%)',
    description: 'Dunas intermináveis varridas por tempestades de areia magnética.',
    atmosphere: 'Dióxido de carbono · Poeira de sílica',
    resources: ['Silício', 'Cristais de quartzo', 'Hélio-3'],
  },
  {
    id: 'cryos-9',
    name: 'Cryos-9',
    type: 'Gelado',
    danger: 'Alto',
    temperature: '-138°C',
    image: 'radial-gradient(circle at 33% 30%, #e8fbff 0%, #9fd8ec 38%, #4f7fb0 78%, #16273f 100%)',
    description: 'Planeta congelado com geleiras de metano e auroras permanentes.',
    atmosphere: 'Metano · Argônio · Traços de nitrogênio',
    resources: ['Gelo de metano', 'Deutério', 'Minerais raros'],
  },
  {
    id: 'pyron-4',
    name: 'Pyron-4',
    type: 'Vulcânico',
    danger: 'Extremo',
    temperature: '438°C',
    image: 'radial-gradient(circle at 34% 30%, #ffd36f 0%, #ff7a3c 36%, #c41f1f 74%, #3a0606 100%)',
    description: 'Superfície de lava ativa com rios incandescentes e céu de cinzas.',
    atmosphere: 'Enxofre · Dióxido de carbono · Cinzas',
    resources: ['Enxofre', 'Magma cristalizado', 'Ferro fundido'],
  },
  {
    id: 'verdania',
    name: 'Verdania',
    type: 'Florestal',
    danger: 'Baixo',
    temperature: '28°C',
    image: 'radial-gradient(circle at 33% 30%, #c4ff9b 0%, #4fbf5a 40%, #1f7a3a 78%, #0a2e18 100%)',
    description: 'Floresta tropical contínua habitada por flora bioluminescente.',
    atmosphere: 'Oxigênio · Nitrogênio · Esporos orgânicos',
    resources: ['Biomassa', 'Oxigênio', 'Compostos medicinais'],
  },
  {
    id: 'nimbus-x',
    name: 'Nimbus-X',
    type: 'Gasoso',
    danger: 'Médio',
    temperature: '-52°C',
    image: 'radial-gradient(circle at 32% 30%, #d8c4ff 0%, #9b7ae8 38%, #5a3ca8 76%, #1f1242 100%)',
    description: 'Gigante gasoso com tempestades violáceas e anéis de poeira fina.',
    atmosphere: 'Hidrogênio · Hélio · Amônia',
    resources: ['Hidrogênio', 'Hélio', 'Amônia comprimida'],
  },
  {
    id: 'ferros-2',
    name: 'Ferros-2',
    type: 'Rochoso',
    danger: 'Médio',
    temperature: '12°C',
    image: 'radial-gradient(circle at 34% 30%, #d6d9e0 0%, #8a93a3 40%, #4a525e 78%, #1a1e24 100%)',
    description: 'Mundo árido de crateras metálicas rico em depósitos de minério.',
    atmosphere: 'Tênue · Dióxido de carbono · Argônio',
    resources: ['Ferro', 'Titânio', 'Níquel'],
  },
  {
    id: 'noctis-7',
    name: 'Noctis-7',
    type: 'Sombrio',
    danger: 'Extremo',
    temperature: '-201°C',
    image: 'radial-gradient(circle at 35% 28%, #5a6cff 0%, #2a2f8a 40%, #15163f 78%, #050510 100%)',
    description: 'Planeta sem estrela próxima, mergulhado em escuridão glacial.',
    atmosphere: 'Hidrogênio congelado · Néon',
    resources: ['Néon', 'Cristais escuros', 'Antimatéria residual'],
  },
  {
    id: 'aurea',
    name: 'Aurea',
    type: 'Oceânico',
    danger: 'Baixo',
    temperature: '19°C',
    image: 'radial-gradient(circle at 33% 30%, #fff0a8 0%, #5fe0c4 42%, #1f8fa8 80%, #0a2e3a 100%)',
    description: 'Arquipélagos dourados sobre mares calmos e recifes cristalinos.',
    atmosphere: 'Oxigênio · Nitrogênio · Iodo marinho',
    resources: ['Água pura', 'Ouro', 'Algas energéticas'],
  },
]

/* Tipos únicos derivados dos dados — usados pelo filtro.
   "Todos" representa a ausência de filtro. */
export const planetTypes = ['Todos', ...new Set(planets.map(p => p.type))]
