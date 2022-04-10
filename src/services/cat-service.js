import { httpService } from './http-service'
import { utilService } from './util-service'

export const catService = {
  query,
  getBreedById,
  getImagesByBreedId,
  getMostSearched,
}

const ENDPOINT = 'cat'

async function query() {
  return await httpService.get(ENDPOINT)
}

async function getBreedById(breedId) {
  return await httpService.get(`${ENDPOINT}/${breedId}`)
}

async function getImagesByBreedId(breedId) {
  return await httpService.get(`${ENDPOINT}/image/${breedId}`)
}

async function getMostSearched() {
  const cats = await query()
  const shuffledCats = utilService.shuffle(cats)
  return shuffledCats.slice(0, 10)
}
