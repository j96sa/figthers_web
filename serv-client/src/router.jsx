import React from 'react'
import { Route, HashRouter, Routes } from 'react-router-dom'
import MainPage from './components/MainPage'
import UFCAllFighters from './components/ufc/ufc_fighters/UFCAllFighters'

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/ufc/fighters" element={<UFCAllFighters/>} />
        <Route path="/" element={<MainPage/>} />
      </Routes>
    </HashRouter>
  )
}
