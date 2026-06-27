import { useState } from 'react'
import PlanetOrb from '../PlanetOrb/PlanetOrb'
import AtlasCard from '../AtlasCard/AtlasCard'
import styles from './StarMap.module.css'

/*
  StarMap — mapa estelar orbital interativo.

  Anã branca central + anéis orbitais concêntricos. Cada planeta orbita
  continuamente (animação CSS). O conteúdo do planeta é mantido na
  vertical por uma contra-rotação, então o cartão de informações
  "acompanha" o planeta enquanto ele se move.

  - DISTÂNCIA ao sol: ordenada por temperatura — mundos mais quentes
    orbitam mais perto da anã branca; mais frios, mais longe.
  - MOVIMENTO: cada planeta tem velocidade e sentido próprios (derivados
    de forma estável do id), então nenhum se move igual ao outro.

  Interação (Lift State Up nesta componente):
  - Hover no planeta  → mostra o cartão de informações (transitório).
  - Hover + clique     → fixa o cartão (pinned); ele permanece visível e
    continua acompanhando o planeta em movimento até clicar de novo.
*/

// Hash determinístico (FNV-1a) a partir do id → inteiro estável.
// Garante movimento "aleatório" porém consistente entre renders.
function hashId(id) {
  let h = 2166136261
  for (let i = 0; i < id.length; i++) {
    h ^= id.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function tempValue(planet) {
  return parseInt(planet.temperature, 10) || 0
}

function StarMap({ planets }) {
  const [hoveredId, setHoveredId] = useState(null)
  const [pinnedId, setPinnedId]   = useState(null)

  // Estrelas de fundo geradas uma única vez (posições estáveis).
  const [stars] = useState(() =>
    Array.from({ length: 70 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 1 + Math.random() * 2,
      delay: Math.random() * 3,
    }))
  )

  const togglePin = id => setPinnedId(prev => (prev === id ? null : id))

  // Ranking por temperatura: mais quente (rank 0) = órbita mais interna.
  const total = planets.length
  const rankById = {}
  ;[...planets]
    .sort((a, b) => tempValue(b) - tempValue(a))
    .forEach((p, i) => { rankById[p.id] = i })

  const configFor = planet => {
    const rank = rankById[planet.id]
    const t = total <= 1 ? 0.4 : rank / (total - 1)
    const h = hashId(planet.id)
    const r = (h % 1000) / 1000                 // 0..1 estável por id
    return {
      diameter: Math.round(180 + (560 - 180) * t),
      duration: Math.round(26 + r * 44),        // 26..70s — velocidade única
      dir: (h & 1) ? 'ccw' : 'cw',              // sentido único
      delay: -((rank / total) * (26 + r * 44)), // espalha as posições iniciais
      orbSize: 30 + Math.round(t * 14),
    }
  }

  return (
    <div className={styles.map} role="group" aria-label="Mapa estelar interativo">
      {/* Estrelas de fundo */}
      <div className={styles.stars} aria-hidden="true">
        {stars.map((s, i) => (
          <span
            key={i}
            className={styles.star}
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Campo orbital (escala em telas pequenas) */}
      <div className={styles.field}>
        {/* Anéis orbitais concêntricos */}
        {planets.map((planet, i) => {
          const { diameter } = configFor(planet)
          return (
            <span
              key={`ring-${planet.id}`}
              className={styles.orbitRing}
              style={{ width: `${diameter}px`, height: `${diameter}px` }}
              data-accent={i % 2 === 0 ? 'cyan' : 'purple'}
              aria-hidden="true"
            />
          )
        })}

        {/* Anã branca central */}
        <div className={styles.center} aria-hidden="true">
          <span className={styles.centerGlow} />
          <span className={styles.centerCore} />
        </div>

        {/* Planetas em órbita */}
        {planets.map(planet => {
          const { diameter, duration, delay, dir, orbSize } = configFor(planet)
          const isPinned = pinnedId === planet.id
          const isOpen = hoveredId === planet.id || isPinned

          return (
            <div
              key={planet.id}
              className={styles.orbit}
              data-dir={dir}
              style={{
                width: `${diameter}px`,
                height: `${diameter}px`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            >
              <div
                className={`${styles.satellite} ${isOpen ? styles.satelliteOpen : ''}`}
                data-dir={dir}
                style={{ animationDuration: `${duration}s`, animationDelay: `${delay}s` }}
              >
                <button
                  type="button"
                  className={`${styles.planetBtn} ${isOpen ? styles.planetBtnActive : ''}`}
                  onMouseEnter={() => setHoveredId(planet.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => togglePin(planet.id)}
                  aria-pressed={isPinned}
                  aria-label={`${planet.name}. ${isPinned ? 'Clique para desafixar' : 'Clique para fixar'} as informações`}
                >
                  <PlanetOrb planet={planet} size={orbSize} />
                </button>

                {/* Cartão de informações que acompanha o planeta */}
                {isOpen && (
                  <div className={styles.info} data-pinned={isPinned}>
                    <AtlasCard planet={planet} />
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Legenda de uso */}
      <p className={styles.hint}>
        {pinnedId
          ? 'Informações fixadas — clique de novo no planeta para soltar'
          : 'Passe o mouse para inspecionar · clique para fixar as informações'}
      </p>
    </div>
  )
}

export default StarMap
