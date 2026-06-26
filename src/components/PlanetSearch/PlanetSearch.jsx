import styles from './PlanetSearch.module.css'

/*
  PlanetSearch — campo de busca por nome.
  Componente controlado: o valor e o handler vêm da
  página (Lift State Up) via props. Dispara onChange.
*/
function PlanetSearch({ value, onChange }) {
  return (
    <div className={styles.search}>
      <span className={styles.icon} aria-hidden="true">⌕</span>
      <input
        type="search"
        className={styles.input}
        value={value}
        onChange={event => onChange(event.target.value)}
        placeholder="Buscar planeta por nome..."
        aria-label="Buscar planeta por nome"
      />
    </div>
  )
}

export default PlanetSearch
