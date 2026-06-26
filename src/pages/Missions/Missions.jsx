import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Missions.module.css'

/*
  Página Centro de Missões.

  INTEGRAÇÃO FUTURA:
  Esta página está preparada para receber componentes de missão.

  LIFT STATE UP — exemplo de estrutura esperada:
    const [activeMission, setActiveMission] = useState(null)
    // Passe activeMission e setActiveMission como props para:
    //   <MissionList onSelect={setActiveMission} />
    //   <MissionDetail mission={activeMission} />

  DADOS MOCKADOS esperados (exemplo):
    const missions = [
      { id: 'm-001', title: 'Operação Horizonte', status: 'ativa', planet: 'Kepler-22B', ... },
      ...
    ]
*/

/* Filtros de status disponíveis para as missões */
const STATUS_FILTERS = ['Todas', 'Ativas', 'Concluídas', 'Em Espera']

function Missions() {
  // Lift State Up: estado dos filtros gerenciado aqui e passado via props
  const [activeFilter, setActiveFilter] = useState('Todas')
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <div className={styles.inner}>

        {/* Cabeçalho */}
        <header className={styles.header}>
          <p className={styles.breadcrumb}>
            <span>Nexus Explorer</span>
            <span className={styles.sep} aria-hidden="true">›</span>
            <span>Missões</span>
          </p>
          <h1 className={styles.title}>Centro de Missões</h1>
          <p className={styles.subtitle}>
            Gerencie expedições interestelares e acompanhe o progresso das operações ativas.
          </p>
        </header>

        <div className={styles.divider} aria-hidden="true" />

        {/* ── FILTROS DE STATUS ─────────────────────────────────────
            Lift State Up: activeFilter é gerenciado nesta página.
            Passe activeFilter e setActiveFilter para o componente
            de filtro quando ele for criado.
        ──────────────────────────────────────────────────────── */}
        <div
          className={styles.filterBar}
          role="group"
          aria-label="Filtrar missões por status"
        >
          {STATUS_FILTERS.map(filter => (
            <button
              key={filter}
              className={`${styles.filterBtn} ${activeFilter === filter ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Indicador do filtro ativo (renderização condicional) */}
        {activeFilter !== 'Todas' && (
          <p className={styles.filterIndicator} role="status">
            Exibindo missões: <strong>{activeFilter}</strong>
          </p>
        )}

        {/* ── CONTEÚDO PRINCIPAL ───────────────────────────────────
            Estrutura de dois painéis: lista + detalhe.
            Substitua os placeholders pelos componentes reais.
        ──────────────────────────────────────────────────────── */}
        <div className={styles.contentLayout}>

          {/* Lista de missões */}
          <section className={styles.missionList} aria-label="Lista de missões">
            <h2 className={styles.panelTitle}>Missões Registradas</h2>
            <div className={styles.listPlaceholder}>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className={styles.missionItemPlaceholder}>
                  <div className={styles.missionStatus} aria-hidden="true" />
                  <div className={styles.missionInfo}>
                    <span className={styles.missionName}>Missão {String(i + 1).padStart(3, '0')}</span>
                    <span className={styles.missionPlanet}>— Planeta ---</span>
                  </div>
                  <button
                    className={styles.missionViewBtn}
                    onClick={() => navigate('/explorar')}
                    aria-label={`Ver planeta da missão ${i + 1}`}
                  >
                    Ver
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Detalhe da missão */}
          <section className={styles.missionDetail} aria-label="Detalhes da missão selecionada">
            <h2 className={styles.panelTitle}>Detalhes</h2>
            <div className={styles.detailPlaceholder}>
              <span className={styles.detailIcon} aria-hidden="true">◎</span>
              <p className={styles.detailNote}>Selecione uma missão para ver os detalhes</p>
              <p className={styles.detailSub}>
                MissionDetail e MissionCard serão integrados aqui.
              </p>
            </div>
          </section>

        </div>

      </div>
    </div>
  )
}

export default Missions
