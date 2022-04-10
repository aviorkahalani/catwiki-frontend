import { useNavigate } from 'react-router-dom'

const catPreview = ({ cat, idx }) => {
  let navigate = useNavigate()
  return (
    <article className="cat__preview" onClick={() => navigate(`/cat/${cat.id}`)}>
      <div className="cat__img">{cat.image && <img src={cat.image.url} alt="" />}</div>
      <div className="cat__info">
        <h2>
          {idx}. {cat.name}
        </h2>
        <p>{cat.description}</p>
      </div>
    </article>
  )
}

export default catPreview
