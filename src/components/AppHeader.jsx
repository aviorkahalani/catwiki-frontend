import { useNavigate } from 'react-router-dom'

const AppHeader = () => {
  let navigate = useNavigate()

  const getImage = () => {
    return new URL('../assets/CatwikiLogo.svg', import.meta.url).href
  }

  return (
    <header className="header">
      <div className="header__logo" onClick={() => navigate('/')}>
        <img src={getImage()} alt="" />
      </div>
    </header>
  )
}

export default AppHeader
