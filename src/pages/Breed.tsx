import { useParams } from 'react-router-dom'
import {
  useFetchCatBreedByIdQuery,
  useFetchCatBreedImagesByIdQuery,
} from '../store'
import Container from '../components/Container'
import Loader from '../components/Loader'
import BreedInfo from '../components/breed/BreedInfo'
import BreedImages from '../components/breed/BreedImages'
import BreedTraits from '../components/breed/BreedTraits'

export default function Breed() {
  const { breedId } = useParams()
  const { data: breed, isLoading: isBreedLoading } = breedId
    ? useFetchCatBreedByIdQuery(breedId)
    : { data: null, isLoading: false }

  const { data: images = null, isLoading: isImagesLoading = false } = breedId
    ? useFetchCatBreedImagesByIdQuery(breedId)
    : { data: null, isLoading: false }

  let content: React.ReactNode = null
  if (isBreedLoading) {
    content = <Loader />
  } else if (breed) {
    content = (
      <div className="mb-14 flex-col">
        <BreedInfo breed={breed} />
      </div>
    )
  }

  return (
    <section className="py-10">
      <Container>
        {content}
        {images && (
          <BreedImages
            images={images}
            breedOriginalImage={breed?.image?.url || ''}
          />
        )}
      </Container>
    </section>
  )
}
