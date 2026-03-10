import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Male from './pages/male'

const AppRoutes = () => {
    return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/male' element={<Male />} />
    </Routes>
    )
}

export default AppRoutes