import styles from './AtlasCard.module.css'

/*
  AtlasCard — ficha de catálogo de um planeta no Atlas Estelar.
  Props desestruturadas direto do objeto `planet` (mesmo mock
  compartilhado da Pessoa 1).

  Diferente do PlanetCard (que leva ao detalhe), aqui o foco é
  exibir os dados catalogados de cada mundo: tipo, perigo,
  temperatura, atmosfera e recursos.
*/
function AtlasCard({ planet }) {
  const { name, type, danger, temperature, image, atmosphere, resources } = planet

  return (
    <article className={styles.card}>
      {/* Orbe do planeta (gradiente vindo dos dados) */}
      <div className={styles.orbWrap} aria-hidden="true">
        <div className={styles.orb} style={{ background: image }} />
        <div className={styles.orbGlow} style={{ background: image }} />
      </div>

      <div className={styles.body}>
        <header className={styles.head}>
          <h3 className={styles.name}>{name}</h3>
          <span className={styles.type}>{type}</span>
        </header>

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

        <p className={styles.atmosphere}>
          <span className={styles.metaLabel}>Atmosfera</span>
          {atmosphere}
        </p>

        <ul className={styles.resources} aria-label="Recursos disponíveis">
          {resources.map(resource => (
            <li key={resource} className={styles.resource}>{resource}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default AtlasCard
