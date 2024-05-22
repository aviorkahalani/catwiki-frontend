interface CardSkeletonProps {
  amount?: number
}

export default function CardSkeleton({ amount = 8 }: CardSkeletonProps) {
  const skeletons = []
  for (let i = 0; i < amount; i++) {
    skeletons.push(
      <div
        key={i}
        className="space-y-2.5 overflow-hidden rounded border transition hover:shadow"
      >
        <div className="h-40 w-full animate-pulse bg-gray-200"></div>
        <div className="p-2.5">
          <div className="mb-2.5 h-5 w-48 animate-pulse bg-gray-200"></div>
          <div className="space-y-1">
            <div className="h-3 w-48 animate-pulse bg-gray-200"></div>
            <div className="h-3 w-full animate-pulse bg-gray-200"></div>
            <div className="h-3 w-56 animate-pulse bg-gray-200"></div>
          </div>
        </div>
      </div>,
    )
  }

  return skeletons
}
