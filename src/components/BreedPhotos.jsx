import React, { useEffect, useState } from 'react'
import { catService } from '../services/cat-service'

const BreedPhotos = ({ breedId }) => {
  const [images, setImages] = useState(null)

  useEffect(async () => {
    const images = await catService.getImagesByBreedId(breedId)
    setImages(images)
  }, [])

  return (
    <div className="photos">
      <h1>Other Photos</h1>
      {images && (
        <div className="images__wrapper">
          {images.map((image) => (
            <img key={image} src={image} alt="" />
          ))}
        </div>
      )}
    </div>
  )
}

export default BreedPhotos
