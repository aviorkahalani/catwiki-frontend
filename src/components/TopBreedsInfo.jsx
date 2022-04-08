import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const TopSearchedInfo = (props) => {
  let navigate = useNavigate()

  return (
    <div className="info">
      <div className="info__label">
        <p className="label__txt">Most Searched Breeds</p>
        <div className="label__line"></div>
      </div>
      <div className="info__title">
        <h1 className="title__txt">66+ Breeds For you to discover</h1>
        <Link className="title__link title__link--active" to="/top">
          SEE MORE
        </Link>
      </div>
      <div className="info__cats">
        {props.cats.map((cat) => (
          <article
            key={cat.id}
            className="info__cat"
            onClick={() => navigate(`/cat/${cat.id}`)}>
            <img src={cat.image.url} alt={cat.image.id} />
            <h1>{cat.name}</h1>
          </article>
        ))}
      </div>
    </div>
  )
}

export default TopSearchedInfo
