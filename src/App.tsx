import { Outlet } from 'react-router-dom'
import { useFetchCatBreedsQuery } from './store'

function App() {
  const { data, isLoading, error } = useFetchCatBreedsQuery()
  console.log('data:', data)

  return (
    <>
      <Outlet />
    </>
  )
}

export default App
