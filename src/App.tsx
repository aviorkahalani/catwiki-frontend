import { Outlet } from 'react-router-dom'
import useScrollToTop from './hooks/useScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  useScrollToTop()
  return (
    <>
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
