import styles from './PlanetInfoPanel.module.css'

/*
  PlanetInfoPanel — painel lateral com os dados completos
  do planeta projetado na mesa holográfica.

  Renderização condicional: quando `planet` é nulo, exibe
  um estado de espera; quando há planeta, mostra todas as
  informações (nome, tipo, atmosfera, perigo, recursos).
*/
function PlanetInfoPanel({ planet, onClose }) {
  if (!planet) {
    return (
      <aside className={styles.panel} aria-label="Painel de informações do planeta">
        <div className={styles.idle}>
          <span className={styles.idleIcon} aria-hidden="true">◍</span>
          <p className={styles.idleText}>Selecione um planeta na mesa para projetar seus dados.</p>
        </div>
      </aside>
    )
  }

  const { name, type, atmosphere, danger, resources, temperature } = planet

  return (
    <aside className={`${styles.panel} ${styles.panelActive}`} aria-label={`Informações de ${name}`}>
      <header className={styles.header}>
        <div>
          <p className={styles.kicker}>Planeta projetado</p>
          <h3 className={styles.name}>{name}</h3>
        </div>
        <button type="button" className={styles.close} onClick={onClose} aria-label="Fechar painel">
          ✕
        </button>
      </header>

      <dl className={styles.rows}>
        <div className={styles.row}>
          <dt className={styles.label}>Tipo</dt>
          <dd className={styles.value}>{type}</dd>
        </div>
        <div className={styles.row}>
          <dt className={styles.label}>Atmosfera</dt>
          <dd className={styles.value}>{atmosphere}</dd>
        </div>
        <div className={styles.row}>
          <dt className={styles.label}>Temperatura</dt>
          <dd className={styles.value}>{temperature}</dd>
        </div>
        <div className={styles.row}>
          <dt className={styles.label}>Nível de perigo</dt>
          <dd className={styles.dangerValue} data-danger={danger}>{danger}</dd>
        </div>
      </dl>

      <div className={styles.resources}>
        <p className={styles.label}>Recursos</p>
        <ul className={styles.resourceList}>
          {resources.map(resource => (
            <li key={resource} className={styles.resourceTag}>{resource}</li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default PlanetInfoPanel
