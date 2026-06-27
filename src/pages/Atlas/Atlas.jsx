import { useState } from 'react'
import { planets, planetTypes } from '../../data/planets'
import AtlasFilter from '../../components/AtlasFilter/AtlasFilter'
import StarMap from '../../components/StarMap/StarMap'
import styles from './Atlas.module.css'

/*
  Página Atlas Estelar — mapa orbital interativo.

  Reaproveita o mesmo mock compartilhado (`planets.js`, Pessoa 1).

  Lift State Up: categoria ativa e termo de pesquisa vivem aqui e são
  passados via props para o AtlasFilter. A lista derivada (filtro por
  categoria + pesquisa por nome/tipo) define quais planetas orbitam no
  StarMap.
*/
function Atlas() {
  const [query, setQuery]           = useState('')
  const [activeType, setActiveType] = useState('Todos')

  const visiblePlanets = planets.filter(planet => {
    const matchesType = activeType === 'Todos' || planet.type === activeType
    const term = query.trim().toLowerCase()
    const matchesSearch =
      planet.name.toLowerCase().includes(term) ||
      planet.type.toLowerCase().includes(term)
    return matchesType && matchesSearch
  })

  return (
    <div className={styles.page}>
      <div className={styles.inner}>

        {/* Cabeçalho */}
        <header className={styles.header}>
          <p className={styles.breadcrumb}>
            <span>Nexus Explorer</span>
            <span className={styles.sep} aria-hidden="true">›</span>
            <span>Atlas Estelar</span>
          </p>
          <h1 className={styles.title}>Atlas Estelar</h1>
          <p className={styles.subtitle}>
            Mapa orbital da galáxia Nexus — passe o mouse pelos mundos para inspecioná-los.
          </p>
        </header>

        <div className={styles.divider} aria-hidden="true" />

        {/* Filtro por categoria + pesquisa (Lift State Up) */}
        <AtlasFilter
          types={planetTypes}
          activeType={activeType}
          onTypeChange={setActiveType}
          query={query}
          onQueryChange={setQuery}
        />

        {/* Contador de resultados */}
        <p className={styles.resultCount}>
          {visiblePlanets.length}{' '}
          {visiblePlanets.length === 1 ? 'mundo em órbita' : 'mundos em órbita'}
        </p>

        {/* Mapa estelar — renderização condicional para vazio */}
        {visiblePlanets.length === 0 ? (
          <div className={styles.empty} role="status">
            <span className={styles.emptyIcon} aria-hidden="true">◌</span>
            <p className={styles.emptyTitle}>Nenhum planeta encontrado</p>
            <p className={styles.emptyNote}>
              Ajuste a pesquisa ou a categoria para repovoar o mapa.
            </p>
          </div>
        ) : (
          <StarMap planets={visiblePlanets} />
        )}

      </div>
    </div>
  )
}

export default Atlas
