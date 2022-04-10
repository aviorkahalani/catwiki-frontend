const BreedInfo = ({ breed }) => {
  const getRateBars = (num) => {
    return [...Array(num)].map((e, idx) => <div className="bar--active" key={idx}></div>)
  }

  const getRateBarsEmpty = (num) => {
    return [...Array(num)].map((e, idx) => <div className="bar--empty" key={idx}></div>)
  }

  if (!breed) return <h1 className="main">Loading...</h1>

  return (
    <div className="breed">
      <div className="breed__img">
        <img src={breed.image.url} alt="" />
      </div>
      <div className="breed__content">
        <h1>{breed.name}</h1>
        <p>{breed.description}</p>
        <p>
          <span className="fw-bold">Temperament:</span> {breed.temperament}
        </p>
        <p>
          <span className="fw-bold">Origin:</span> {breed.origin}
        </p>
        <p>
          <span className="fw-bold">Life Span:</span> {breed.life_span}
        </p>
        <div className="bars">
          <span className="fw-bold">Adaptability:</span>
          <div>
            {getRateBars(breed.adaptability)}
            {getRateBarsEmpty(5 - breed.adaptability)}
          </div>
        </div>

        <div className="bars">
          <span className="fw-bold">Affection Level:</span>
          <div>
            {getRateBars(breed.affection_level)}
            {getRateBarsEmpty(5 - breed.affection_level)}
          </div>
        </div>

        <div className="bars">
          <span className="fw-bold">Child Friendly:</span>
          <div>
            {getRateBars(breed.child_friendly)}
            {getRateBarsEmpty(5 - breed.child_friendly)}
          </div>
        </div>

        <div className="bars">
          <span className="fw-bold">Grooming:</span>
          <div>
            {getRateBars(breed.grooming)}
            {getRateBarsEmpty(5 - breed.grooming)}
          </div>
        </div>

        <div className="bars">
          <span className="fw-bold">Intelligence:</span>
          <div>
            {getRateBars(breed.intelligence)}
            {getRateBarsEmpty(5 - breed.intelligence)}
          </div>
        </div>

        <div className="bars">
          <span className="fw-bold">Health Issues:</span>
          <div>
            {getRateBars(breed.health_issues)}
            {getRateBarsEmpty(5 - breed.health_issues)}
          </div>
        </div>

        <div className="bars">
          <span className="fw-bold">Social Needs:</span>
          <div>
            {getRateBars(breed.social_needs)}
            {getRateBarsEmpty(5 - breed.social_needs)}
          </div>
        </div>

        <div className="bars">
          <span className="fw-bold">Stranger Friendly:</span>
          <div>
            {getRateBars(breed.stranger_friendly)}
            {getRateBarsEmpty(5 - breed.stranger_friendly)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreedInfo
