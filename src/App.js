import { BrowserRouter, Routes, Route } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import News from './pages/News'





export default function App(){
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/news" element={<News/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}