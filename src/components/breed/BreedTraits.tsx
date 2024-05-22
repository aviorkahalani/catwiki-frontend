import { CatBreed } from '../../types'

interface BreedTraitsProps {
  breed: CatBreed
}

export default function BreedTraits({ breed }: BreedTraitsProps) {
  console.log(breed)

  return (
    <div className="space-y-4 font-light">
      <div className="flex items-center gap-10">
        <b>Adaptability:</b>
        <div className="flex items-center gap-1">
          {_getTraitRatings(breed.adaptability)}
        </div>
      </div>

      <div className="flex items-center gap-10">
        <b>Affection level:</b>
        <div className="flex items-center gap-1">
          {_getTraitRatings(breed.affection_level)}
        </div>
      </div>

      <div className="flex items-center gap-10">
        <b>Child Friendly:</b>
        <div className="flex items-center gap-1">
          {_getTraitRatings(breed.child_friendly)}
        </div>
      </div>

      <div className="flex items-center gap-10">
        <b>Grooming:</b>
        <div className="flex items-center gap-1">
          {_getTraitRatings(breed.grooming)}
        </div>
      </div>

      <div className="flex items-center gap-10">
        <b>Intelligence:</b>
        <div className="flex items-center gap-1">
          {_getTraitRatings(breed.intelligence)}
        </div>
      </div>

      <div className="flex items-center gap-10">
        <b>Health issues:</b>
        <div className="flex items-center gap-1">
          {_getTraitRatings(breed.health_issues)}
        </div>
      </div>

      <div className="flex items-center gap-10">
        <b>Social needs:</b>
        <div className="flex items-center gap-1">
          {_getTraitRatings(breed.social_needs)}
        </div>
      </div>

      <div className="flex items-center gap-10">
        <b>Stranger friendly:</b>
        <div className="flex items-center gap-1">
          {_getTraitRatings(breed.stranger_friendly)}
        </div>
      </div>
    </div>
  )
}

function _getTraitRatings(rate: number) {
  const MAX = 5
  let divs = []

  let i = 0
  for (; i < rate; i++) {
    divs.push(
      <div
        key={i}
        className="h-2 w-10 rounded-full bg-stone-700 md:h-3 md:w-14"
      />,
    )
  }

  for (let j = i; j < MAX; j++) {
    divs.push(
      <div
        key={j}
        className="h-2 w-10 rounded-full bg-stone-300 md:h-3 md:w-14"
      />,
    )
  }

  return divs
}
