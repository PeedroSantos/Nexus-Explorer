import styles from './PlanetFilter.module.css'

/*
  PlanetFilter — filtro por tipo de planeta.
  Componente controlado via props (Lift State Up).
  Renderiza os tipos dinamicamente com .map() e dispara
  onChange ao selecionar uma opção.
*/
function PlanetFilter({ types, activeType, onChange }) {
  return (
    <div className={styles.filter} role="group" aria-label="Filtrar por tipo de planeta">
      {types.map(type => (
        <button
          key={type}
          type="button"
          className={`${styles.chip} ${activeType === type ? styles.chipActive : ''}`}
          aria-pressed={activeType === type}
          onClick={() => onChange(type)}
        >
          {type}
        </button>
      ))}
    </div>
  )
}

export default PlanetFilter
