import { useParams, useNavigate, Link } from 'react-router-dom'
import { planets } from '../../data/planets'
import PlanetOrb from '../../components/PlanetOrb/PlanetOrb'
import styles from './PlanetDetails.module.css'

/*
  Página de Detalhes do Planeta.

  - useParams() captura o `id` da rota "/explorar/:id".
  - Busca o planeta nos dados mockados (planets.find).
  - Renderização condicional: se não encontrar, mostra estado "não encontrado".
  - useNavigate() no botão "Voltar".
*/
function PlanetDetails() {
  const { id }   = useParams()
  const navigate = useNavigate()
  const planet   = planets.find(p => p.id === id)

  const handleBack = () => navigate('/explorar')

  // Planeta inexistente → renderização condicional
  if (!planet) {
    return (
      <div className={styles.page}>
        <div className={styles.inner}>
          <button className={styles.backBtn} onClick={handleBack} aria-label="Voltar ao catálogo">
            <span aria-hidden="true">←</span> Voltar ao Catálogo
          </button>
          <div className={styles.notFound} role="status">
            <span className={styles.notFoundIcon} aria-hidden="true">◌</span>
            <h1 className={styles.notFoundTitle}>Planeta não encontrado</h1>
            <p className={styles.notFoundNote}>
              O mundo <strong>{id}</strong> não consta no catálogo da frota Nexus.
            </p>
            <Link to="/explorar" className={styles.notFoundLink}>Ver catálogo completo</Link>
          </div>
        </div>
      </div>
    )
  }

  const { name, type, danger, temperature, atmosphere, description, resources } = planet

  const generalData = [
    { label: 'Tipo',           value: type },
    { label: 'Temperatura',    value: temperature },
    { label: 'Atmosfera',      value: atmosphere },
  ]

  return (
    <div className={styles.page}>
      <div className={styles.inner}>

        {/* Navegação de retorno */}
        <button
          className={styles.backBtn}
          onClick={handleBack}
          aria-label="Voltar ao catálogo de planetas"
        >
          <span aria-hidden="true">←</span>
          Voltar ao Catálogo
        </button>

        {/* Cabeçalho com ID do planeta */}
        <header className={styles.header}>
          <p className={styles.planetId} aria-label={`ID do planeta: ${id}`}>
            <span className={styles.idLabel}>ID</span>
            <span className={styles.idValue}>{id}</span>
          </p>
          <h1 className={styles.title}>{name}</h1>
        </header>

        <div className={styles.divider} aria-hidden="true" />

        <div className={styles.contentGrid}>

          {/* Visão do planeta */}
          <div className={styles.visualPanel}>
            <div className={styles.visualCard}>
              <PlanetOrb planet={planet} size={210} />
              <p className={styles.visualName}>{name}</p>
              <span className={styles.visualType}>{type}</span>
            </div>
          </div>

          {/* Dados do planeta */}
          <div className={styles.dataPanel}>

            <div className={styles.dataSection}>
              <h2 className={styles.dataSectionTitle}>Dados Gerais</h2>
              {generalData.map(({ label, value }) => (
                <div key={label} className={styles.dataRow}>
                  <span className={styles.dataLabel}>{label}</span>
                  <span className={styles.dataValue}>{value}</span>
                </div>
              ))}
              <div className={styles.dataRow}>
                <span className={styles.dataLabel}>Nível de perigo</span>
                <span className={styles.dangerValue} data-danger={danger}>{danger}</span>
              </div>
            </div>

            <div className={styles.dataSection}>
              <h2 className={styles.dataSectionTitle}>Relatório de Exploração</h2>
              <p className={styles.description}>{description}</p>
            </div>

            <div className={styles.dataSection}>
              <h2 className={styles.dataSectionTitle}>Recursos Catalogados</h2>
              <ul className={styles.resourceList}>
                {resources.map(resource => (
                  <li key={resource} className={styles.resourceTag}>{resource}</li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default PlanetDetails
