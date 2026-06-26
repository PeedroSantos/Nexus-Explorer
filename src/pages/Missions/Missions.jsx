import { useState } from 'react'
import { missions as initialMissions, statusFilters } from '../../data/missions'
import MissionList from '../../components/MissionList/MissionList'
import styles from './Missions.module.css'

/*
  Página Centro de Missões.

  Sistema local de missões:
  - O array de missões vive no estado (useState), inicializado
    a partir dos dados mockados. Marcar como concluída altera o
    status no estado e re-renderiza os cards (alteração visual).
  - Lift State Up: o filtro de status e o handler de conclusão
    são gerenciados aqui e passados via props para a MissionList.
  - A lista visível é derivada do filtro ativo.
*/
function Missions() {
  const [missions, setMissions]         = useState(initialMissions)
  const [activeFilter, setActiveFilter] = useState('todas')

  // Altera o status de uma missão para "concluída".
  const handleComplete = id => {
    setMissions(prev =>
      prev.map(mission =>
        mission.id === id ? { ...mission, status: 'concluida' } : mission
      )
    )
  }

  // Lista derivada: aplica o filtro por status.
  const visibleMissions = missions.filter(mission =>
    activeFilter === 'todas' ? true : mission.status === activeFilter
  )

  const completedCount = missions.filter(m => m.status === 'concluida').length
  const progress = Math.round((completedCount / missions.length) * 100)

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

        {/* Resumo de progresso */}
        <div className={styles.progressBar} role="status" aria-label="Progresso das missões">
          <p className={styles.progressLabel}>
            <strong>{completedCount}</strong> de <strong>{missions.length}</strong> missões concluídas
          </p>
          <div className={styles.progressTrack} aria-hidden="true">
            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Filtros de status — Lift State Up */}
        <div
          className={styles.filterBar}
          role="group"
          aria-label="Filtrar missões por status"
        >
          {statusFilters.map(({ label, value }) => (
            <button
              key={value}
              className={`${styles.filterBtn} ${activeFilter === value ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveFilter(value)}
              aria-pressed={activeFilter === value}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Indicador do filtro ativo (renderização condicional) */}
        {activeFilter !== 'todas' && (
          <p className={styles.filterIndicator} role="status">
            {visibleMissions.length}{' '}
            {visibleMissions.length === 1 ? 'missão encontrada' : 'missões encontradas'}
          </p>
        )}

        {/* Lista de missões */}
        <MissionList missions={visibleMissions} onComplete={handleComplete} />

      </div>
    </div>
  )
}

export default Missions
