import { useState } from 'react'
import { planets, planetTypes } from '../../data/planets'
import PlanetSearch from '../../components/PlanetSearch/PlanetSearch'
import PlanetFilter from '../../components/PlanetFilter/PlanetFilter'
import PlanetGrid from '../../components/PlanetGrid/PlanetGrid'
import PlanetViewer from '../../components/PlanetViewer/PlanetViewer'
import styles from './Explore.module.css'

/*
  Página de Exploração — Catálogo Planetário.

  Lift State Up: o termo de busca e o tipo ativo são
  gerenciados aqui e passados via props para PlanetSearch,
  PlanetFilter e PlanetGrid. A lista visível é derivada
  desses estados (busca por nome + filtro por tipo).

  A Mesa Holográfica Interativa (PlanetViewer) reaproveita
  os mesmos dados mockados para projetar os planetas.
*/
function Explore() {
  const [query, setQuery]           = useState('')
  const [activeType, setActiveType] = useState('Todos')

  // Lista derivada: aplica filtro por tipo e busca por nome.
  const visiblePlanets = planets.filter(planet => {
    const matchesType = activeType === 'Todos' || planet.type === activeType
    const matchesName = planet.name.toLowerCase().includes(query.trim().toLowerCase())
    return matchesType && matchesName
  })

  return (
    <div className={styles.page}>
      <div className={styles.inner}>

        {/* Cabeçalho da seção */}
        <header className={styles.header}>
          <p className={styles.breadcrumb}>
            <span>Nexus Explorer</span>
            <span className={styles.breadcrumbSep} aria-hidden="true">›</span>
            <span>Explorar</span>
          </p>
          <h1 className={styles.title}>Catálogo Planetário</h1>
          <p className={styles.subtitle}>
            Banco de dados completo de mundos catalogados pela frota de exploração Nexus.
          </p>
        </header>

        <div className={styles.divider} aria-hidden="true" />

        {/* ── BUSCA E FILTROS ─────────────────────────────────────
            Estado gerenciado nesta página (Lift State Up). */}
        <div className={styles.controls}>
          <PlanetSearch value={query} onChange={setQuery} />
          <PlanetFilter
            types={planetTypes}
            activeType={activeType}
            onChange={setActiveType}
          />
        </div>

        {/* Contador de resultados */}
        <p className={styles.resultCount}>
          {visiblePlanets.length} {visiblePlanets.length === 1 ? 'planeta' : 'planetas'} encontrados
        </p>

        {/* ── GRADE DE PLANETAS ───────────────────────────────── */}
        <PlanetGrid planets={visiblePlanets} />

        {/* ── MESA HOLOGRÁFICA INTERATIVA ─────────────────────────
            Componente criativo principal. Reaproveita o catálogo
            completo para projetar os planetas. */}
        <section className={styles.hologramSection} aria-label="Mesa Holográfica Interativa">
          <div className={styles.sectionHead}>
            <h2 className={styles.sectionTitle}>Mesa Holográfica</h2>
            <p className={styles.sectionSubtitle}>
              Projete qualquer mundo do catálogo e inspecione seus dados em tempo real.
            </p>
          </div>
          <PlanetViewer planets={planets} />
        </section>

      </div>
    </div>
  )
}

export default Explore
