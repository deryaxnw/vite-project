// import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
// import Produtos from './pages/produtos/Produtos'
import Sobre from './pages/sobre/Sobre'
import Produto from './pages/produtos/Produto'
import { BrowserRouter, Routes , Route } from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>

      <Route path='/' element={<Home></Home>}> </Route>
      <Route path='/sobre' element={<Sobre></Sobre>}> </Route>
      <Route path='/produtos' element={<Produto></Produto>}> </Route>
    </Routes>
    
    </BrowserRouter>
  </>
  
  )
}

export default App
