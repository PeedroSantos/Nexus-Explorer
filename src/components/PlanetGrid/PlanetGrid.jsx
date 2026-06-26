import PlanetCard from '../PlanetCard/PlanetCard'
import styles from './PlanetGrid.module.css'

/*
  PlanetGrid — grade responsiva de planetas.
  Recebe a lista já filtrada via props e renderiza
  dinamicamente com .map(). Renderização condicional
  para o caso de nenhum resultado.
*/
function PlanetGrid({ planets }) {
  if (planets.length === 0) {
    return (
      <div className={styles.empty} role="status">
        <span className={styles.emptyIcon} aria-hidden="true">◌</span>
        <p className={styles.emptyTitle}>Nenhum planeta encontrado</p>
        <p className={styles.emptyNote}>Ajuste a busca ou os filtros para continuar a exploração.</p>
      </div>
    )
  }

  return (
    <section className={styles.grid} aria-label="Grade de planetas">
      {planets.map(planet => (
        <PlanetCard key={planet.id} planet={planet} />
      ))}
    </section>
  )
}

export default PlanetGrid
