import { Link } from 'react-router-dom'
import { Cat } from '@phosphor-icons/react'

export default function Hero() {
  return (
    <div className="flex flex-col items-start rounded-t bg-gray-300 bg-hero bg-cover bg-center p-10 py-20">
      <h1 className="mb-7 flex items-center gap-2.5 text-3xl">
        CatWiki <Cat size={30} />
      </h1>
      <p className="mb-14 text-lg font-light">
        Get to know more about your cat breed
      </p>

      <Link
        to="/breeds"
        className="rounded border bg-gray-800 px-5 py-2.5 text-lg font-light text-white"
      >
        Explore All Breeds
      </Link>
    </div>
  )
}
