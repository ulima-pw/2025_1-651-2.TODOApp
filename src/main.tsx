import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import HistoricoPage from './pages/HistoricoPage'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <MainPage /> } />
        <Route path='/historico' element={ <HistoricoPage /> } />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
