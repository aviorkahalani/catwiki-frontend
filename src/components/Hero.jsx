import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'

const Hero = ({ cats }) => {
  let navigate = useNavigate()
  const [breedId, setBreedId] = useState('')

  const handleChange = (ev) => {
    navigate(`/cat/${ev.target.value}`)
  }

  const getImage = () => {
    return new URL('../assets/CatwikiLogo.svg', import.meta.url).href
  }

  return (
    <div className="hero">
      <div className="hero__logo">
        <img src={getImage()} alt="" />
      </div>
      <p className="hero__title">Get to know more about your cat breed</p>

      <Select id="select" value={breedId} onChange={handleChange}>
        <MenuItem value="">
          <em>Enter your breed</em>
        </MenuItem>
        {cats.map((cat) => (
          <MenuItem key={cat.id} value={cat.id}>
            {cat.name}
          </MenuItem>
        ))}
      </Select>
    </div>
  )
}

// navigate(`/cat/${cat.id}`)

export default Hero
