import { Link } from 'react-router-dom'
import PlanetOrb from '../PlanetOrb/PlanetOrb'
import styles from './PlanetCard.module.css'

/*
  PlanetCard — cartão holográfico de um planeta.
  Props desestruturadas diretamente do objeto `planet`.
  O nível de perigo controla a cor do selo via data-attribute.
  O orbe único do planeta é renderizado pelo componente PlanetOrb.
*/
function PlanetCard({ planet }) {
  const { id, name, type, danger, temperature, description } = planet

  return (
    <Link to={`/explorar/${id}`} className={styles.card} aria-label={`Ver detalhes de ${name}`}>
      {/* Orbe único do planeta (superfície por tipo) */}
      <div className={styles.orbWrap} aria-hidden="true">
        <div className={styles.orbHolder}>
          <PlanetOrb planet={planet} size={112} />
        </div>
      </div>

      <div className={styles.body}>
        <header className={styles.cardHeader}>
          <h3 className={styles.name}>{name}</h3>
          <span className={styles.type}>{type}</span>
        </header>

        <p className={styles.description}>{description}</p>

        <dl className={styles.stats}>
          <div className={styles.stat}>
            <dt className={styles.statLabel}>Temp.</dt>
            <dd className={styles.statValue}>{temperature}</dd>
          </div>
          <div className={styles.stat}>
            <dt className={styles.statLabel}>Perigo</dt>
            <dd className={styles.dangerBadge} data-danger={danger}>{danger}</dd>
          </div>
        </dl>
      </div>

      {/* Brilho neon de borda no hover */}
      <span className={styles.borderGlow} aria-hidden="true" />
    </Link>
  )
}

export default PlanetCard
