import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import TopSearchedInfo from './components/TopBreedsInfo'
import ArticleInfo from './components/ArticleInfo'
import { catService } from './services/cat-service'

const App = () => {
  const [cats, setCats] = useState(null)

  useEffect(async () => {
    let catsData = await catService.query()
    setCats(catsData)
  }, [])

  const getLoader = () => new URL('./assets/loader.gif', import.meta.url).href

  if (!cats)
    return (
      <h1 className="main loader-wrapper">
        <img className="loader" src={getLoader()} alt="" />
      </h1>
    )

  return (
    <div className="main">
      <Hero cats={cats} />
      <TopSearchedInfo cats={cats.slice(0, 4)} />
      <ArticleInfo />
    </div>
  )
}

export default App
