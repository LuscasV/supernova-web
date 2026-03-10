import { GlobalCss } from './styles'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import AppRoutes from './routes'


function App() {

  return (
      <BrowserRouter>
      <GlobalCss />
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
  )
}

export default App
