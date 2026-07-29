import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Male from './pages/Male'
import Female from './pages/Female'
import Acessorios from './pages/Accessories'
import Shoes from './pages/Shoes'

const AppRoutes = () => {
    return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/male' element={<Male />} />
        <Route path='/female' element={<Female />} />
        <Route path='/accessories' element={<Acessorios />} />
        <Route path='/shoes' element={<Shoes />} />
    </Routes>
    )
}

export default AppRoutes