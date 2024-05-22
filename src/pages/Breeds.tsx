import { useFetchCatBreedsQuery } from '../store'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import CardSkeleton from '../components/CardSkeleton'

export default function Breeds() {
  const { data: breeds, isLoading } = useFetchCatBreedsQuery()

  let content: React.ReactNode = null
  if (isLoading) {
    content = <CardSkeleton />
  } else if (breeds) {
    content = breeds.map((breed) => (
      <Link
        to={breed.id}
        key={breed.id}
        className="space-y-2.5 overflow-hidden rounded border transition hover:shadow"
      >
        <img
          src={breed.image?.url}
          alt={breed.name}
          className="aspect-video object-cover object-top"
        />
        <div className="p-2.5">
          <h2 className="mb-2.5 text-lg font-medium">{breed.name}</h2>
          <p className="line-clamp-3 text-sm font-light leading-relaxed">
            {breed.description}
          </p>
        </div>
      </Link>
    ))
  }

  return (
    <section className="py-10">
      <Container>
        <h1 className="my-2.5 text-4xl font-light">
          Dive Into a World Full of Cats
        </h1>
        <p className="mb-7 text-lg font-light leading-relaxed text-gray-500">
          Explore cat breeds and learn to be a better cat lover and owner
        </p>
        <div className="grid gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {content}
        </div>
      </Container>
    </section>
  )
}
