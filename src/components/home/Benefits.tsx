import { Link } from 'react-router-dom'

export default function Benefits() {
  const images = [
    new URL('../../assets/cat-3.jpg', import.meta.url).href,
    new URL('../../assets/cat-4.jpg', import.meta.url).href,
    new URL('../../assets/cat-2.jpg', import.meta.url).href,
    new URL('../../assets/cat-1.jpg', import.meta.url).href,
  ]

  return (
    <div className="flex flex-col items-center justify-between gap-2.5 py-20 md:flex-row">
      <div className="max-w-lg flex-1">
        <div className="mb-4 h-0.5 w-12 bg-gray-800 bg-opacity-80"></div>
        <h2 className="mb-7 text-4xl font-medium">
          Why should you have a cat?
        </h2>
        <p className="mb-14 text-lg font-light">
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <Link to="/" className="transition hover:text-blue-600">
          Read More →
        </Link>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-2.5">
        {images.map((image) => (
          <div key={image} className="overflow-hidden rounded shadow-sm">
            <img
              src={image}
              alt=""
              className="aspect-square h-full w-full object-cover md:aspect-auto"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
