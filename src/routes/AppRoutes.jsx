import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Home from '../pages/Home/Home'
import Explore from '../pages/Explore/Explore'
import PlanetDetails from '../pages/PlanetDetails/PlanetDetails'
import Missions from '../pages/Missions/Missions'
import Atlas from '../pages/Atlas/Atlas'

/*
  Layout wrapper: envolve todas as páginas com Navbar e Footer.
  Cada <Route> renderiza apenas o conteúdo da página dentro de
  <main>, mantendo a estrutura consistente em toda a SPA.
*/
function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ flex: 1, paddingTop: 'var(--navbar-height)' }}>
        {children}
      </main>
      <Footer />
    </>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/explorar"
        element={
          <Layout>
            <Explore />
          </Layout>
        }
      />
      {/*
        :id permite navegar para o detalhe de um planeta específico.
        Ex.: /explorar/kepler-22b
        Outros integrantes podem usar useParams() para acessar o id.
      */}
      <Route
        path="/explorar/:id"
        element={
          <Layout>
            <PlanetDetails />
          </Layout>
        }
      />
      <Route
        path="/missoes"
        element={
          <Layout>
            <Missions />
          </Layout>
        }
      />
      <Route
        path="/atlas"
        element={
          <Layout>
            <Atlas />
          </Layout>
        }
      />
    </Routes>
  )
}

export default AppRoutes
