import styles from './AtlasCard.module.css'

/*
  AtlasCard — cartão compacto de informações de um planeta.
  Props desestruturadas direto do objeto `planet` (mesmo mock
  compartilhado da Pessoa 1).

  Usado pelo StarMap como o painel flutuante que aparece no
  hover/clique e acompanha o planeta em órbita. Como o próprio
  orbe do planeta já está visível no mapa, o cartão foca apenas
  nos dados: tipo, perigo, temperatura, atmosfera e recursos.
*/
function AtlasCard({ planet }) {
  const { name, type, danger, temperature, atmosphere, resources } = planet

  return (
    <article className={styles.card}>
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
    </article>
  )
}

export default AtlasCard
