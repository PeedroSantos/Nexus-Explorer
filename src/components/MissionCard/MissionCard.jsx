import { statusLabels } from '../../data/missions'
import styles from './MissionCard.module.css'

/*
  MissionCard — cartão de uma missão.
  Props desestruturadas direto do objeto `mission`.

  - `data-status` e `data-difficulty` controlam as cores via CSS.
  - Renderização condicional: missão concluída exibe o selo de
    conclusão; caso contrário, mostra o botão "Marcar como concluída".
  - O evento onClick dispara onComplete(id), que sobe para a página
    pai (Lift State Up) para alterar o status.
*/
function MissionCard({ mission, onComplete }) {
  const { id, title, description, difficulty, status, planet } = mission
  const isDone = status === 'concluida'

  return (
    <article className={styles.card} data-status={status}>
      {/* Barra lateral colorida por status */}
      <span className={styles.statusBar} aria-hidden="true" />

      <header className={styles.head}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.statusBadge} data-status={status}>
          {statusLabels[status]}
        </span>
      </header>

      <p className={styles.description}>{description}</p>

      <div className={styles.meta}>
        <span className={styles.metaItem}>
          <span className={styles.metaLabel}>Destino</span>
          {planet}
        </span>
        <span className={styles.metaItem}>
          <span className={styles.metaLabel}>Dificuldade</span>
          <span className={styles.difficulty} data-difficulty={difficulty}>
            {difficulty}
          </span>
        </span>
      </div>

      <footer className={styles.footer}>
        {isDone ? (
          <span className={styles.doneTag}>
            <span aria-hidden="true">✓</span> Missão concluída
          </span>
        ) : (
          <button
            type="button"
            className={styles.completeBtn}
            onClick={() => onComplete(id)}
            aria-label={`Marcar a missão "${title}" como concluída`}
          >
            Marcar como concluída
          </button>
        )}
      </footer>
    </article>
  )
}

export default MissionCard
