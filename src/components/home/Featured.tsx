import { useFetchCatBreedsQuery } from '../../store'
import { Link } from 'react-router-dom'

export default function Featured() {
  const { data: breeds, isLoading, error } = useFetchCatBreedsQuery()

  let content: React.ReactNode = null
  if (isLoading) {
    content = <div>Loading...</div>
  } else if (breeds) {
    content = breeds.slice(0, 4).map((breed) => (
      <article
        key={breed.id}
        className="space-y-2.5 overflow-hidden rounded shadow-sm"
      >
        <img
          src={breed.image?.url}
          alt={breed.name}
          className="aspect-square object-cover"
        />
        <p className="text-lg font-light">{breed.name}</p>
      </article>
    ))
  }

  return (
    <div className="flex flex-col items-start rounded-b bg-gray-800 p-10 text-white">
      <h2 className="mb-1 text-lg font-medium">Most Searched Breeds</h2>
      <div className="mb-7 h-0.5 w-12 bg-white bg-opacity-80"></div>
      <div className="mb-7 flex w-full flex-wrap items-end justify-between">
        <p className="text-3xl font-light">66+ Breeds For you to discover</p>
        <Link
          to="/"
          className="text-sm font-light opacity-80 transition hover:underline hover:opacity-100"
        >
          See More →
        </Link>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2 md:grid-cols-4">
        {content}
      </div>
    </div>
  )
}
