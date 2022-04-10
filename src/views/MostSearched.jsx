import React, { useState, useEffect } from 'react'
import { catService } from '../services/cat-service'
import CatPreview from '../components/CatPreview'

const MostSearched = () => {
  const [cats, setCats] = useState(null)

  useEffect(async () => {
    let catsData = await catService.getMostSearched()
    setCats(catsData)
  }, [])

  return (
    <section className="most-searched main">
      <h1>Top 10 most searched breeds</h1>
      {cats && cats.map((cat, idx) => <CatPreview key={cat.id} cat={cat} idx={idx + 1} />)}
    </section>
  )
}

export default MostSearched
