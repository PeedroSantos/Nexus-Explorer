import styles from './AtlasFilter.module.css'

/*
  AtlasFilter — controles do Atlas Estelar.
  Componente controlado via props (Lift State Up):

  - Campo de pesquisa (por nome OU tipo) — dispara onQueryChange.
  - Chips de categoria (tipo de planeta) — dispara onTypeChange.

  Renderiza as categorias dinamicamente com .map().
*/
function AtlasFilter({ types, activeType, onTypeChange, query, onQueryChange }) {
  return (
    <div className={styles.filter}>
      {/* Pesquisa por nome ou tipo */}
      <div className={styles.searchWrap}>
        <span className={styles.searchIcon} aria-hidden="true">⌕</span>
        <input
          type="search"
          className={styles.search}
          value={query}
          onChange={event => onQueryChange(event.target.value)}
          placeholder="Pesquisar por nome ou tipo..."
          aria-label="Pesquisar planeta por nome ou tipo"
        />
      </div>

      {/* Filtro por categoria */}
      <div className={styles.chips} role="group" aria-label="Filtrar por categoria">
        {types.map(type => (
          <button
            key={type}
            type="button"
            className={`${styles.chip} ${activeType === type ? styles.chipActive : ''}`}
            aria-pressed={activeType === type}
            onClick={() => onTypeChange(type)}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  )
}

export default AtlasFilter
