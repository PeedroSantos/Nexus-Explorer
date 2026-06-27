import styles from './PlanetOrb.module.css'

/*
  PlanetOrb — orbe planetário detalhado e ÚNICO por tipo.

  Renderiza um planeta esférico cuja superfície muda conforme o
  `type` (lava vulcânica, gelo com aurora, faixas de gás, crateras,
  nuvens oceânicas, dunas, etc.) e cujo halo atmosférico muda de
  cor/intensidade conforme o `danger`. A cor base vem do gradiente
  `image` definido nos dados mockados.

  É reutilizado pelo catálogo (PlanetCard), pela página de detalhes
  (PlanetDetails) e pelo mapa estelar (StarMap).

  Props desestruturadas:
  - planet: objeto do planeta (type, image, danger, name)
  - size:   diâmetro do orbe (número em px ou string CSS) — default 100
*/
const RINGED_TYPES = ['Gasoso']

function PlanetOrb({ planet, size = 100 }) {
  const { name, type, image, danger } = planet
  const dimension = typeof size === 'number' ? `${size}px` : size

  return (
    <span
      className={styles.wrap}
      style={{ width: dimension, height: dimension }}
      data-type={type}
      data-danger={danger}
      role="img"
      aria-label={`Representação do planeta ${name}`}
    >
      {/* Halo atmosférico (cor depende do nível de perigo) */}
      <span className={styles.atmosphere} aria-hidden="true" />

      {/* Anel planetário (apenas gigantes gasosos) */}
      {RINGED_TYPES.includes(type) && <span className={styles.ring} aria-hidden="true" />}

      {/* Globo esférico — cor base + camadas de superfície */}
      <span className={styles.globe} style={{ background: image }}>
        <span className={styles.surface} aria-hidden="true" />
        <span className={styles.clouds} aria-hidden="true" />
        <span className={styles.shade} aria-hidden="true" />
      </span>
    </span>
  )
}

export default PlanetOrb
