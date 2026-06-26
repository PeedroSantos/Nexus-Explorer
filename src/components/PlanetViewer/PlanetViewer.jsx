import { useState } from 'react'
import HologramPlanet from '../HologramPlanet/HologramPlanet'
import PlanetInfoPanel from '../PlanetInfoPanel/PlanetInfoPanel'
import styles from './PlanetViewer.module.css'

/*
  PlanetViewer — Mesa Holográfica Interativa.

  Orquestra a experiência:
  - Mantém o estado do planeta selecionado (useState).
  - Renderiza um HologramPlanet por planeta sobre a mesa.
  - Ao clicar, abre o PlanetInfoPanel lateral (renderização
    condicional) com os dados completos.

  Os dados chegam via prop `planets` (reaproveitados do
  catálogo da Página Explorar).
*/
function PlanetViewer({ planets }) {
  const [selectedPlanet, setSelectedPlanet] = useState(null)

  const handleSelect = planet => setSelectedPlanet(planet)
  const handleClose  = () => setSelectedPlanet(null)

  return (
    <div className={styles.viewer}>
      {/* ─── Mesa holográfica ───────────────────── */}
      <div className={styles.table}>
        <div className={styles.tableGlow} aria-hidden="true" />
        <div className={styles.tableGrid} aria-hidden="true" />

        <div className={styles.nodes}>
          {planets.map(planet => (
            <HologramPlanet
              key={planet.id}
              planet={planet}
              isActive={selectedPlanet?.id === planet.id}
              onSelect={handleSelect}
            />
          ))}
        </div>

        <p className={styles.hint}>
          {selectedPlanet
            ? `Projeção ativa: ${selectedPlanet.name}`
            : 'Toque em um planeta para projetar seus dados'}
        </p>
      </div>

      {/* ─── Painel lateral ─────────────────────── */}
      <PlanetInfoPanel planet={selectedPlanet} onClose={handleClose} />
    </div>
  )
}

export default PlanetViewer
