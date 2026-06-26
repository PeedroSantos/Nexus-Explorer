import { useNavigate } from 'react-router-dom'
import styles from './Home.module.css'

/*
  Página inicial do Nexus Explorer.
  Demonstra o uso de useNavigate() para redirecionar
  ao catálogo de planetas ao clicar em "Iniciar Exploração".
*/
function Home() {
  const navigate = useNavigate()

  const handleExplore = () => {
    navigate('/explorar')
  }

  return (
    <div className={styles.page}>

      {/* Estrelas de fundo animadas */}
      <div className={styles.starsLayer} aria-hidden="true">
        {Array.from({ length: 60 }).map((_, i) => (
          <span key={i} className={styles.star} style={{
            left:              `${Math.random() * 100}%`,
            top:               `${Math.random() * 100}%`,
            animationDelay:    `${Math.random() * 4}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            width:             `${1 + Math.random() * 2}px`,
            height:            `${1 + Math.random() * 2}px`,
          }} />
        ))}
      </div>

      {/* ─── Hero ────────────────────────────── */}
      <section className={styles.hero} aria-label="Seção principal">

        {/* Anel orbital decorativo */}
        <div className={styles.orbitalRing} aria-hidden="true">
          <div className={styles.orbitalRingInner} />
          <div className={styles.orbitalDot} />
        </div>

        <div className={styles.heroContent}>
          {/* Eyebrow */}
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDash} aria-hidden="true" />
            Sistema Galáctico NX-4891
            <span className={styles.eyebrowDash} aria-hidden="true" />
          </p>

          {/* Título principal */}
          <h1 className={styles.title}>
            <span className={styles.titleLine1}>NEXUS</span>
            <span className={styles.titleLine2}>EXPLORER</span>
          </h1>

          {/* Subtítulo futurista */}
          <p className={styles.subtitle}>
            Centro de Exploração Planetária de Nova Geração
          </p>

          {/* Descrição */}
          <p className={styles.description}>
            Embarque em uma jornada pelos confins do cosmos fictício. Catalogamos
            mundos desconhecidos, gerenciamos missões interestelares e cartografamos
            regiões inexploradas da galáxia Nexus.
          </p>

          {/* CTAs */}
          <div className={styles.ctas}>
            <button
              className={styles.ctaPrimary}
              onClick={handleExplore}
              aria-label="Navegar para a página de exploração de planetas"
            >
              <span className={styles.ctaIcon} aria-hidden="true">⬡</span>
              Iniciar Exploração
            </button>
          </div>

          {/* Métricas rápidas */}
          <div className={styles.metrics} role="list" aria-label="Dados do sistema">
            {[
              { value: '---', label: 'Planetas' },
              { value: '---', label: 'Sistemas' },
              { value: '---', label: 'Missões' },
            ].map(({ value, label }) => (
              <div key={label} className={styles.metric} role="listitem">
                <span className={styles.metricValue}>{value}</span>
                <span className={styles.metricLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Planeta decorativo à direita */}
        <div className={styles.planetVisual} aria-hidden="true">
          <div className={styles.planet}>
            <div className={styles.planetGlow} />
            <div className={styles.planetRing} />
            <div className={styles.planetSurface} />
          </div>
        </div>
      </section>

      {/* ─── Seção de recursos — placeholder ── */}
      <section className={styles.features} aria-label="Recursos do sistema">
        <div className={styles.featuresInner}>
          <div className={styles.neonDivider} aria-hidden="true" />
          <h2 className={styles.featuresTitle}>Módulos do Sistema</h2>
          <div className={styles.featuresGrid}>
            {[
              {
                icon:  '◉',
                title: 'Catálogo de Planetas',
                desc:  'Explore mundos catalogados com dados detalhados de cada astro.',
                path:  '/explorar',
              },
              {
                icon:  '◎',
                title: 'Centro de Missões',
                desc:  'Gerencie expedições e acompanhe o progresso das suas missões.',
                path:  '/missoes',
              },
              {
                icon:  '◈',
                title: 'Atlas Estelar',
                desc:  'Mapa interativo de todos os sistemas e constelações da galáxia.',
                path:  '/atlas',
              },
            ].map(({ icon, title, desc, path }) => (
              <button
                key={title}
                className={styles.featureCard}
                onClick={() => navigate(path)}
                aria-label={`Navegar para ${title}`}
              >
                <span className={styles.featureIcon}>{icon}</span>
                <h3 className={styles.featureTitle}>{title}</h3>
                <p className={styles.featureDesc}>{desc}</p>
                <span className={styles.featureArrow} aria-hidden="true">→</span>
              </button>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home
