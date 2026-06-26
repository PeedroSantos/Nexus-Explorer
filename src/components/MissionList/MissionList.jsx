import MissionCard from '../MissionCard/MissionCard'
import styles from './MissionList.module.css'

/*
  MissionList — grade de missões.
  Recebe a lista já filtrada via props e renderiza
  dinamicamente com .map(). Renderização condicional
  para o caso de nenhuma missão no filtro ativo.
  Repassa o handler onComplete para cada MissionCard.
*/
function MissionList({ missions, onComplete }) {
  if (missions.length === 0) {
    return (
      <div className={styles.empty} role="status">
        <span className={styles.emptyIcon} aria-hidden="true">◎</span>
        <p className={styles.emptyTitle}>Nenhuma missão neste status</p>
        <p className={styles.emptyNote}>Selecione outro filtro para ver mais operações.</p>
      </div>
    )
  }

  return (
    <section className={styles.list} aria-label="Lista de missões">
      {missions.map(mission => (
        <MissionCard key={mission.id} mission={mission} onComplete={onComplete} />
      ))}
    </section>
  )
}

export default MissionList
