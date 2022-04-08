const AppFooter = () => {
  const getImage = () => {
    return new URL('../assets/CatwikiLogo.svg', import.meta.url).href
  }

  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={getImage()} alt="" />
      </div>
      <p className="footer__info">
        &copy; created by <span className="username">Sanbuko</span> - devChallenge.io 2022
      </p>
    </footer>
  )
}

export default AppFooter
