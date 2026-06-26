import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

/*
  Links de navegação centralizados para fácil manutenção.
  Adicione novos links aqui sem alterar o JSX do componente.
*/
const NAV_LINKS = [
  { to: '/',         label: 'Home',        exact: true },
  { to: '/explorar', label: 'Explorar',    exact: false },
  { to: '/missoes',  label: 'Missões',     exact: false },
  { to: '/atlas',    label: 'Atlas Estelar', exact: false },
]

function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  /* Adiciona sombra/blur ao fazer scroll */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Fecha menu mobile ao redimensionar para desktop */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => setMenuOpen(prev => !prev)
  const closeMenu  = () => setMenuOpen(false)

  return (
    <header
      className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}
      role="banner"
    >
      <div className={styles.inner}>

        {/* Logotipo */}
        <NavLink to="/" className={styles.logo} onClick={closeMenu} aria-label="Nexus Explorer — Página inicial">
          <span className={styles.logoIcon} aria-hidden="true">◈</span>
          <span className={styles.logoText}>
            NEXUS<span className={styles.logoAccent}>EXPLORER</span>
          </span>
        </NavLink>

        {/* Navegação principal — desktop */}
        <nav className={styles.nav} role="navigation" aria-label="Navegação principal">
          <ul className={styles.navList}>
            {NAV_LINKS.map(({ to, label, exact }) => (
              <li key={to} className={styles.navItem}>
                <NavLink
                  to={to}
                  end={exact}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                  }
                >
                  {label}
                  <span className={styles.navUnderline} aria-hidden="true" />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Indicador de status da missão */}
        <div className={styles.statusBadge} aria-label="Sistema online">
          <span className={styles.statusDot} aria-hidden="true" />
          <span className={styles.statusText}>SYS ONLINE</span>
        </div>

        {/* Botão hambúrguer — mobile */}
        <button
          className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleOpen : ''}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </div>

      {/* Menu mobile */}
      <nav
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}
        aria-label="Menu mobile"
        aria-hidden={!menuOpen}
      >
        <ul className={styles.mobileNavList}>
          {NAV_LINKS.map(({ to, label, exact }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={exact}
                className={({ isActive }) =>
                  `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`
                }
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
