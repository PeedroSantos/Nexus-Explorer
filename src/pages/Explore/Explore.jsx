import styles from './Explore.module.css'

/*
  Página de Exploração — Catálogo de Planetas.

  INTEGRAÇÃO FUTURA:
  Este arquivo está pronto para receber:
  - Dados mockados de planetas (via props ou arquivo de dados)
  - Componente PlanetCard (com props desestruturadas)
  - Componente FilterBar (Lift State Up: estado de filtro aqui)
  - Renderização dinâmica com .map() sobre o array de planetas
  - Renderização condicional para "nenhum resultado encontrado"

  Exemplo de estrutura de dados esperada (mock):
  const planets = [
    { id: 'kepler-22b', name: 'Kepler-22B', type: 'Oceânico', ... },
    ...
  ]
*/
function Explore() {
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

        {/* Linha decorativa */}
        <div className={styles.divider} aria-hidden="true" />

        {/* ── ÁREA DE FILTROS ─────────────────────────────────────
            Substitua este bloco pelo componente <FilterBar />
            O estado de filtro ativo deve ser gerenciado aqui (Lift State Up)
            e passado via props para FilterBar e para a grade de planetas.
        ──────────────────────────────────────────────────────── */}
        <div className={styles.filterPlaceholder}>
          <p className={styles.placeholderLabel}>[ Área reservada para FilterBar ]</p>
          <p className={styles.placeholderNote}>
            Componente de filtros será integrado aqui.
            Gerenciar estado de filtro ativo nesta página (Lift State Up).
          </p>
        </div>

        {/* ── GRADE DE PLANETAS ────────────────────────────────────
            Substitua este bloco pelo mapeamento dos dados mockados:
            {planets.map(planet => (
              <PlanetCard key={planet.id} planet={planet} />
            ))}
        ──────────────────────────────────────────────────────── */}
        <section className={styles.grid} aria-label="Grade de planetas">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={styles.cardPlaceholder}>
              <div className={styles.cardPlaceholderIcon} aria-hidden="true">◉</div>
              <p className={styles.cardPlaceholderText}>Planeta {String(i + 1).padStart(2, '0')}</p>
              <p className={styles.cardPlaceholderNote}>PlanetCard aqui</p>
            </div>
          ))}
        </section>

      </div>
    </div>
  )
}

export default Explore
