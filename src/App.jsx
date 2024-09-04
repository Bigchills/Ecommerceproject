import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contactpage from './pages/Contactpage'

const App = () => {
  return (
    <div className='box-border m-0 p-0'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contactpage/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App