import React from 'react'
import { Route, HashRouter, Routes } from 'react-router-dom'
import MainPage from './components/MainPage'
import AllFighters from './components/AllFighters'
import FormHandler from './components/FormHandler'

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/:sport/fighters/editFighter/:division/:id" element={<FormHandler/>} />
        <Route path="/:sport/fighters/postFighter/:division/" element={<FormHandler/>} />
        <Route path="/:sport/fighters" element={<AllFighters/>} />
        <Route path="/" element={<MainPage/>} />
      </Routes>
    </HashRouter>
  )
}
