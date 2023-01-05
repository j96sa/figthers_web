import React from 'react'
import { Route, HashRouter, Routes } from 'react-router-dom'
import MainPage from './components/MainPage'
import AllFighters from './components/AllFighters'

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/:sport/fighters" element={<AllFighters/>} />
        <Route path="/" element={<MainPage/>} />
      </Routes>
    </HashRouter>
  )
}
