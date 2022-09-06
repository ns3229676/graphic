import React from 'react'
import Home from './Home'
import { Router, Routes, Route, useLocation } from 'react-router-dom';
import Change from './Change'

function App() {
  return (
    <div className='app'>
    
    <Routes>
    <Route  path="/change" element={<Home/>} />
    <Route  path="/" element={<Change/>} />
    
  </Routes>
    
    </div>
  )
}

export default App
