// import { httpService } from './http.service'
import axios from 'axios'
import { utilService } from './util-service'

export const catService = {
  query,
  getBreedById,
  getImagesByBreedId,
  getMostSearched,
}

const API_KEY = '577fb47f-2089-447a-804f-5c23c087aeca'
const STORAGE_KEY = 'cats_db'

// const ENDPOINT = 'cat'

async function query() {
  // return httpService.get(ENDPOINT)
  let cats = utilService.loadFromStorage(STORAGE_KEY)

  if (!cats || !cats.length) {
    const { data } = await axios.get(`https://api.thecatapi.com/v1/breeds`, {
      headers: {
        'x-api-key': API_KEY,
      },
    })
    cats = data
    utilService.saveToStorage(STORAGE_KEY, cats)
  }
  return Promise.resolve(cats)
}

async function getBreedById(breedId) {
  const cats = await query()
  const breed = cats.find((cat) => cat.id === breedId)
  return breed
}

async function getImagesByBreedId(breedId) {
  const breedImages = utilService.loadFromStorage('breeds_images_db') || {}
  if (!breedImages[breedId]) {
    const { data } = await axios.get('https://api.thecatapi.com/v1/images/search', {
      params: {
        limit: 8,
        breed_id: breedId,
      },
      headers: {
        'x-api-key': API_KEY,
      },
    })
    const images = data.reduce((acc, item) => {
      acc.push(item.url)
      return acc
    }, [])

    breedImages[breedId] = images
    utilService.saveToStorage('breeds_images_db', breedImages)
  }

  return breedImages[breedId]
}

async function getMostSearched() {
  const cats = await query()
  const shuffledCats = utilService.shuffle(cats)
  return shuffledCats.slice(0, 10)
}
