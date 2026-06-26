import styles from './HologramPlanet.module.css'

/*
  HologramPlanet — projeção holográfica de um único planeta
  sobre a Mesa Holográfica.

  Interações:
  - Hover: brilho aumenta, planeta cresce e gira levemente (CSS).
  - Clique: dispara onSelect para abrir o painel de informações.

  O estado de seleção (`isActive`) chega via props e aplica
  um anel holográfico de destaque.
*/
function HologramPlanet({ planet, isActive, onSelect }) {
  const { name, image } = planet

  return (
    <button
      type="button"
      className={`${styles.node} ${isActive ? styles.nodeActive : ''}`}
      onClick={() => onSelect(planet)}
      aria-pressed={isActive}
      aria-label={`Projetar ${name} na mesa holográfica`}
    >
      <span className={styles.planetWrap} aria-hidden="true">
        <span className={styles.glow} style={{ background: image }} />
        <span className={styles.planet} style={{ background: image }} />
        <span className={styles.ring} />
      </span>
      <span className={styles.label}>{name}</span>
    </button>
  )
}

export default HologramPlanet
