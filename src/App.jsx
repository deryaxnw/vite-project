// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/Home'
import Sobre from './pages/sobre/Sobre'
import { BrowserRouter, Routes , Route } from 'react-router-dom'


function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>

      <Route path='/' element={<Home></Home>}> </Route>
      <Route path='/sobre' element={<Sobre></Sobre>}> </Route>
    </Routes>
    
    </BrowserRouter>
  </>
  
  )
}

export default App
