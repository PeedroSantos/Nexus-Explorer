import { useState } from 'react'
import styles from './Atlas.module.css'

/*
  Página Atlas Estelar — Mapa Galáctico.

  INTEGRAÇÃO FUTURA:
  Esta página está pronta para receber:
  - Componente de mapa interativo (StarMap)
  - Grade de sistemas estelares com dados mockados
  - Componente criativo holográfico (HolographicGlobe / StarChart)
  - Renderização condicional para sistema selecionado
  - Lift State Up: selectedSystem gerenciado aqui e passado via props

  DADOS MOCKADOS esperados (exemplo):
    const stellarSystems = [
      { id: 'nx-01', name: 'Sistema Auris', planets: 4, x: 120, y: 80, ... },
      ...
    ]
*/

/* Regiões do mapa para os tabs de navegação */
const MAP_REGIONS = ['Quadrante Alpha', 'Quadrante Beta', 'Quadrante Gama', 'Zona Nebular']

function Atlas() {
  // Lift State Up: região selecionada gerenciada aqui
  const [activeRegion, setActiveRegion] = useState('Quadrante Alpha')

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
            Cartografia completa da galáxia Nexus — sistemas, constelações e rotas de exploração.
          </p>
        </header>

        <div className={styles.divider} aria-hidden="true" />

        {/* ── TABS DE REGIÕES ───────────────────────────────────────
            Lift State Up: activeRegion é gerenciado nesta página.
            Passe activeRegion para o componente de mapa.
        ──────────────────────────────────────────────────────── */}
        <div
          className={styles.regionTabs}
          role="tablist"
          aria-label="Selecionar região do mapa"
        >
          {MAP_REGIONS.map(region => (
            <button
              key={region}
              role="tab"
              aria-selected={activeRegion === region}
              className={`${styles.regionTab} ${activeRegion === region ? styles.regionTabActive : ''}`}
              onClick={() => setActiveRegion(region)}
            >
              {region}
            </button>
          ))}
        </div>

        {/* ── MAPA ESTELAR ─────────────────────────────────────────
            Substitua este bloco pelo componente <StarMap /> ou
            pelo componente criativo holográfico do grupo.
            Passe activeRegion como prop para filtrar o conteúdo.
        ──────────────────────────────────────────────────────── */}
        <div
          className={styles.mapArea}
          role="tabpanel"
          aria-label={`Mapa do ${activeRegion}`}
        >
          {/* Estrelas decorativas do mapa */}
          <div className={styles.mapCanvas} aria-hidden="true">
            {Array.from({ length: 40 }).map((_, i) => (
              <div
                key={i}
                className={styles.mapStar}
                style={{
                  left:   `${5 + Math.random() * 90}%`,
                  top:    `${5 + Math.random() * 90}%`,
                  width:  `${1 + Math.random() * 3}px`,
                  height: `${1 + Math.random() * 3}px`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>

          <div className={styles.mapPlaceholder}>
            <span className={styles.mapIcon} aria-hidden="true">◈</span>
            <p className={styles.mapRegionLabel}>{activeRegion}</p>
            <p className={styles.mapNote}>Componente de mapa estelar aqui</p>
            <p className={styles.mapSub}>
              StarMap / HolographicGlobe / componente criativo
            </p>
          </div>
        </div>

        {/* ── CATÁLOGO DE SISTEMAS ─────────────────────────────────
            Grade de sistemas do quadrante ativo.
            Substitua pelos dados mockados e componentes reais.
        ──────────────────────────────────────────────────────── */}
        <section className={styles.systemsSection} aria-label="Sistemas estelares do quadrante">
          <h2 className={styles.systemsTitle}>
            Sistemas em <span className={styles.regionHighlight}>{activeRegion}</span>
          </h2>
          <div className={styles.systemsGrid}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className={styles.systemCard}>
                <div className={styles.systemDot} aria-hidden="true" />
                <div className={styles.systemInfo}>
                  <span className={styles.systemName}>Sistema NX-{String(i + 1).padStart(3, '0')}</span>
                  <span className={styles.systemPlanets}>--- planetas</span>
                </div>
                <span className={styles.systemTag}>---</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}

export default Atlas
