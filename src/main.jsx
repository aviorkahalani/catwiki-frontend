import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './sass/style.scss'
import App from './App'
import CatDetails from './views/CatDetails'
import MostSearched from './views/MostSearched'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <section className="main-layout">
        <AppHeader />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/cat/:breedId" element={<CatDetails />} />
          <Route path="/top" element={<MostSearched />} />
        </Routes>
        <AppFooter />
      </section>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
