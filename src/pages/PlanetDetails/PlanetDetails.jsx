import { useParams, useNavigate } from 'react-router-dom'
import styles from './PlanetDetails.module.css'

/*
  Página de Detalhes do Planeta.

  INTEGRAÇÃO FUTURA:
  - Use useParams() para capturar o `id` da rota "/explorar/:id"
  - Faça a busca nos dados mockados pelo id: planets.find(p => p.id === id)
  - Aplique renderização condicional:
      if (!planet) return <NotFound />
  - Use useNavigate() para o botão "Voltar"
  - Props desestruturadas nos sub-componentes de detalhe

  Exemplo:
  const { id } = useParams()
  const planet = planets.find(p => p.id === id)
*/
function PlanetDetails() {
  const { id }   = useParams()
  const navigate = useNavigate()

  const handleBack = () => navigate('/explorar')

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
          <p className={styles.planetId} aria-label={`ID do planeta: ${id || 'não definido'}`}>
            <span className={styles.idLabel}>ID</span>
            <span className={styles.idValue}>{id ?? '---'}</span>
          </p>
          <h1 className={styles.title}>Dados do Planeta</h1>
        </header>

        <div className={styles.divider} aria-hidden="true" />

        {/* ── ÁREA DE CONTEÚDO ─────────────────────────────────────
            Substitua este bloco pelo conteúdo real do planeta:
            - Visualização do planeta (imagem ou componente holográfico)
            - Dados atmosféricos, gravitacionais, de temperatura
            - Lista de missões associadas ao planeta
            - Componente criativo (ex: HolographicViewer)
        ──────────────────────────────────────────────────────── */}
        <div className={styles.contentGrid}>

          {/* Visão do planeta */}
          <div className={styles.visualPanel}>
            <div className={styles.visualPlaceholder}>
              <div className={styles.planetPreview} aria-hidden="true">
                <div className={styles.planetOrb} />
              </div>
              <p className={styles.visualNote}>Visualização do planeta aqui</p>
              <p className={styles.visualSub}>Componente holográfico / imagem</p>
            </div>
          </div>

          {/* Dados do planeta */}
          <div className={styles.dataPanel}>
            <div className={styles.dataSection}>
              <h2 className={styles.dataSectionTitle}>Dados Gerais</h2>
              {[
                { label: 'Tipo',        value: '---' },
                { label: 'Diâmetro',    value: '---' },
                { label: 'Temperatura', value: '---' },
                { label: 'Atmosfera',   value: '---' },
                { label: 'Luas',        value: '---' },
              ].map(({ label, value }) => (
                <div key={label} className={styles.dataRow}>
                  <span className={styles.dataLabel}>{label}</span>
                  <span className={styles.dataValue}>{value}</span>
                </div>
              ))}
            </div>

            <div className={styles.dataSection}>
              <h2 className={styles.dataSectionTitle}>Status de Exploração</h2>
              <div className={styles.statusPlaceholder}>
                <p className={styles.placeholderNote}>
                  Missões e status de exploração virão aqui.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default PlanetDetails
