import { useState } from 'react'
import { Cat, MagnifyingGlass } from '@phosphor-icons/react'

export default function Hero() {
  const [breed, setBreed] = useState('')

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    console.log('breed:', breed)
  }

  return (
    <div className="flex flex-col items-start rounded-t bg-hero bg-cover bg-center p-10 py-20">
      <h1 className="mb-7 flex items-center gap-2.5 text-3xl">
        CatWiki <Cat size={30} />
      </h1>
      <p className="mb-14 text-lg font-light">
        Get to know more about your cat breed
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex w-64 items-center rounded border border-gray-900 p-2.5"
      >
        <input
          type="text"
          placeholder="Enter your breed"
          value={breed}
          onChange={(ev) => setBreed(ev.target.value)}
          className="w-full bg-transparent outline-none"
        />
        <button type="submit">
          <MagnifyingGlass size={20} weight="bold" />
        </button>
      </form>
    </div>
  )
}
