import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'

const FOOTER_LINKS = [
  { to: '/',         label: 'Home' },
  { to: '/explorar', label: 'Explorar' },
  { to: '/missoes',  label: 'Missões' },
  { to: '/atlas',    label: 'Atlas Estelar' },
]

const SYSTEM_STATS = [
  { label: 'Planetas Catalogados', value: '---' },
  { label: 'Missões Ativas',       value: '---' },
  { label: 'Exploradores',         value: '---' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer} role="contentinfo">
      {/* Linha decorativa superior */}
      <div className={styles.topBorder} aria-hidden="true" />

      <div className={styles.inner}>
        {/* Coluna 1 — Marca */}
        <div className={styles.brand}>
          <span className={styles.brandIcon} aria-hidden="true">◈</span>
          <p className={styles.brandName}>
            NEXUS<span className={styles.brandAccent}>EXPLORER</span>
          </p>
          <p className={styles.brandTagline}>
            Centro de Exploração Planetária
          </p>
          <p className={styles.brandDescription}>
            Navegue pelo cosmos fictício. Descubra mundos além da imaginação
            e registre sua jornada entre as estrelas.
          </p>
        </div>

        {/* Coluna 2 — Navegação */}
        <nav className={styles.linksSection} aria-label="Links do rodapé">
          <p className={styles.sectionTitle}>Navegação</p>
          <ul className={styles.linkList}>
            {FOOTER_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.linkActive : ''}`
                  }
                >
                  <span className={styles.linkArrow} aria-hidden="true">›</span>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Coluna 3 — Stats do sistema */}
        <div className={styles.statsSection} aria-label="Estatísticas do sistema">
          <p className={styles.sectionTitle}>Status do Sistema</p>
          <ul className={styles.statsList}>
            {SYSTEM_STATS.map(({ label, value }) => (
              <li key={label} className={styles.statItem}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            © {currentYear} Nexus Explorer — UNIUBE · Linguagem de Programação para Internet
          </p>
          <p className={styles.coordinates} aria-label="Coordenadas fictícias do sistema">
            <span className={styles.coordLabel} aria-hidden="true">SYS</span>
            <span className={styles.coordValue}>NX-4891 · 23:59:41 GST</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
