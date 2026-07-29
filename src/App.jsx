import { GlobalCss } from './styles'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './routes'
import ScrollToTop from './components/ScrollToTop'


function App() {

  return (
      <BrowserRouter>
      <GlobalCss />
      <ScrollToTop />
        <Navbar />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
  )
}

export default App
