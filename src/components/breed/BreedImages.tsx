interface BreedImagesProps {
  images: string[]
  breedOriginalImage: string
}

export default function BreedImages({
  images,
  breedOriginalImage,
}: BreedImagesProps) {
  const filteredImages = images.filter((image) => image !== breedOriginalImage)
  const renderedImages = new Set(
    filteredImages.map((image, i) => (
      <div key={i} className="overflow-hidden rounded">
        <img
          src={image}
          alt=""
          className="aspect-square  h-full w-full object-cover object-center"
        />
      </div>
    )),
  )

  return (
    <div className="space-y-2.5">
      <h2 className="text-xl font-light">Other Photos</h2>
      <div className="grid grid-cols-3 gap-2.5 md:grid-cols-4">
        {renderedImages}
      </div>
    </div>
  )
}
