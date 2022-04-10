import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { catService } from '../services/cat-service'
import BreedInfo from '../components/BreedInfo'
import BreedPhotos from '../components/BreedPhotos'

const catDetails = () => {
  let { breedId } = useParams()
  const [breed, setBreed] = useState(null)

  useEffect(async () => {
    const breed = await catService.getBreedById(breedId)
    setBreed(breed)
  }, [])

  const getLoader = () => new URL('../assets/loader.gif', import.meta.url).href

  return (
    <React.Fragment>
      {breed && (
        <section className="main">
          <BreedInfo breed={breed} />
          <BreedPhotos breedId={breedId} />
        </section>
      )}
      {!breed && (
        <h1 className="main loader-wrapper">
          <img className="loader" src={getLoader()} alt="" />
        </h1>
      )}
    </React.Fragment>
  )
}

export default catDetails
