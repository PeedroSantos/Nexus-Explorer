import { useState } from 'react'
import { planets, planetTypes } from '../../data/planets'
import AtlasFilter from '../../components/AtlasFilter/AtlasFilter'
import AtlasCard from '../../components/AtlasCard/AtlasCard'
import styles from './Atlas.module.css'

/*
  Página Atlas Estelar — catálogo completo de planetas.

  Reaproveita o mesmo mock compartilhado (`planets.js`, Pessoa 1).

  Lift State Up: a categoria ativa e o termo de pesquisa vivem
  aqui e são passados via props para o AtlasFilter. A lista
  visível é derivada desses estados:
  - filtro por categoria (tipo de planeta)
  - pesquisa por nome OU tipo
*/
function Atlas() {
  const [query, setQuery]           = useState('')
  const [activeType, setActiveType] = useState('Todos')

  // Lista derivada: categoria + pesquisa (nome ou tipo).
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
            Catálogo completo dos mundos mapeados pela frota de exploração Nexus.
          </p>
        </header>

        <div className={styles.divider} aria-hidden="true" />

        {/* Controles: pesquisa + categorias (Lift State Up) */}
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
          {visiblePlanets.length === 1 ? 'planeta catalogado' : 'planetas catalogados'}
        </p>

        {/* Listagem dinâmica — renderização condicional para vazio */}
        {visiblePlanets.length === 0 ? (
          <div className={styles.empty} role="status">
            <span className={styles.emptyIcon} aria-hidden="true">◌</span>
            <p className={styles.emptyTitle}>Nenhum planeta encontrado</p>
            <p className={styles.emptyNote}>
              Ajuste a pesquisa ou a categoria para continuar a exploração.
            </p>
          </div>
        ) : (
          <section className={styles.grid} aria-label="Catálogo de planetas">
            {visiblePlanets.map(planet => (
              <AtlasCard key={planet.id} planet={planet} />
            ))}
          </section>
        )}

      </div>
    </div>
  )
}

export default Atlas
