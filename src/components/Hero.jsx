import { useNavigate } from 'react-router-dom'

const Hero = (props) => {
  let navigate = useNavigate()

  const getImage = () => {
    return new URL('../assets/CatwikiLogo.svg', import.meta.url).href
  }

  const handleOption = () => {
    console.log('clicked')
  }

  return (
    <div className="hero">
      <div className="hero__logo">
        <img src={getImage()} alt="" />
      </div>
      <p className="hero__title">Get to know more about your cat breed</p>
      <input
        list="cats-breeds"
        type="text"
        className="hero__search"
        placeholder="Enter your breed"
      />

      <datalist className="hero__list" id="cats-breeds">
        {props.cats.map((cat) => (
          <option key={cat.id} value={cat.name} onChange={() => handleOption()}></option>
        ))}
      </datalist>
    </div>
  )
}

// navigate(`/cat/${cat.id}`)

export default Hero
