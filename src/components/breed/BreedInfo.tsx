import { CatBreed } from '../../types'
import BreedTraits from './BreedTraits'

interface BreedInfoProps {
  breed: CatBreed
}

export default function BreedInfo({ breed }: BreedInfoProps) {
  return (
    <div className="mb-7 flex flex-col items-start justify-between gap-10 md:flex-row">
      <div className="overflow-hidden rounded shadow md:w-80">
        <img
          src={breed.image?.url}
          alt={breed.name}
          className="aspect-square h-full w-full object-cover object-center"
        />
      </div>
      <div className="max-w-2xl">
        <h1 className="mb-2.5 text-3xl font-light">{breed.name}</h1>
        <p className="mb-5 font-light leading-relaxed">{breed.description}</p>
        <div className="mb-7 space-y-2.5 font-light">
          <p>
            <b>Temperament:</b> {breed.temperament}
          </p>
          <p>
            <b>Origin:</b> {breed.origin}
          </p>
          <p>
            <b>Life Span:</b> {breed.life_span}
          </p>
        </div>
        <BreedTraits breed={breed} />
      </div>
    </div>
  )
}
