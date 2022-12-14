import React from 'react'
import Home from './Binance'
import { Router, Routes, Route, useLocation } from 'react-router-dom';
import Change from './Change'
import BYBIT from './BYBIT'

function App() {
  return (
    <div className='app'>
    
    <Routes>
    <Route  path="/BYBIT" element={<BYBIT/>} />
    <Route  path="/forbinacefuture" element={<Home/>} />
    <Route  path="/" element={<Change/>} />
    
  </Routes>
    
    </div>
  )
}

export default App
