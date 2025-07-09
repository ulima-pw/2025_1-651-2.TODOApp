import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './views/pages/MainPage'
import HistoricoPage from './views/pages/HistoricoPage'
import LoginPage from './views/pages/LoginPage'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/2025_1-651-2.TODOApp'>
      <Routes>
        <Route path='/' element={ <LoginPage /> } />
        <Route path='/main' element={ <MainPage /> } />
        <Route path='/historico' element={ <HistoricoPage /> } />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
