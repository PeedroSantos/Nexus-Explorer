/* =============================================
   Dados mockados — Centro de Missões Nexus
   ---------------------------------------------
   Fonte única de verdade para a Página Missões.
   Cada missão referencia (por nome) um planeta do
   catálogo definido em `planets.js`.

   Campo `status` aceita: 'ativa' | 'concluida' | 'em-espera'
   Campo `difficulty` aceita: 'Fácil' | 'Média' | 'Difícil' | 'Extrema'
   ============================================= */

export const missions = [
  {
    id: 'm-001',
    title: 'Operação Horizonte Azul',
    description: 'Mapear as correntes oceânicas profundas de Kepler-22b e coletar amostras de bioluminescência.',
    difficulty: 'Média',
    status: 'ativa',
    planet: 'Kepler-22b',
  },
  {
    id: 'm-002',
    title: 'Resgate nas Dunas',
    description: 'Recuperar a sonda Vega-7 perdida durante uma tempestade de areia magnética em Aridia Prime.',
    difficulty: 'Difícil',
    status: 'em-espera',
    planet: 'Aridia Prime',
  },
  {
    id: 'm-003',
    title: 'Sondagem Criogênica',
    description: 'Perfurar as geleiras de metano de Cryos-9 para estudar a formação de auroras permanentes.',
    difficulty: 'Difícil',
    status: 'concluida',
    planet: 'Cryos-9',
  },
  {
    id: 'm-004',
    title: 'Contenção Vulcânica',
    description: 'Instalar sensores térmicos nos rios de lava de Pyron-4 e monitorar a atividade sísmica.',
    difficulty: 'Extrema',
    status: 'ativa',
    planet: 'Pyron-4',
  },
  {
    id: 'm-005',
    title: 'Censo da Flora',
    description: 'Catalogar as espécies bioluminescentes da floresta contínua de Verdania.',
    difficulty: 'Fácil',
    status: 'concluida',
    planet: 'Verdania',
  },
  {
    id: 'm-006',
    title: 'Travessia das Tempestades',
    description: 'Atravessar os anéis de poeira de Nimbus-X e coletar amostras de amônia comprimida.',
    difficulty: 'Média',
    status: 'em-espera',
    planet: 'Nimbus-X',
  },
  {
    id: 'm-007',
    title: 'Vigília Sombria',
    description: 'Estabelecer um posto de observação em Noctis-7 para rastrear traços de antimatéria residual.',
    difficulty: 'Extrema',
    status: 'ativa',
    planet: 'Noctis-7',
  },
  {
    id: 'm-008',
    title: 'Expedição Dourada',
    description: 'Explorar os arquipélagos de Aurea e avaliar o potencial das algas energéticas.',
    difficulty: 'Fácil',
    status: 'ativa',
    planet: 'Aurea',
  },
]

/* Filtros de status — `value` casa com o campo `status` das missões.
   "todas" representa a ausência de filtro. */
export const statusFilters = [
  { label: 'Todas',      value: 'todas' },
  { label: 'Ativas',     value: 'ativa' },
  { label: 'Concluídas', value: 'concluida' },
  { label: 'Em Espera',  value: 'em-espera' },
]

/* Rótulo legível de cada status — usado nos selos dos cards. */
export const statusLabels = {
  ativa:        'Ativa',
  concluida:    'Concluída',
  'em-espera':  'Em Espera',
}
