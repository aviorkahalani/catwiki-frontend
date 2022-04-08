export const utilService = {
  makeId,
  getRandomInt,
  debounce,
  loadFromStorage,
  saveToStorage,
}

function makeId(length = 4) {
  var txt = ''
  var possible = '0123456789'
  for (let i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}

function debounce(func, wait = 1000) {
  console.log('Debouncing...')
  let timeout

  return function executedFunction(...args) {
    const later = () => {
      console.log('Go search!')
      clearTimeout(timeout)
      func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

function loadFromStorage(key) {
  const val = localStorage.getItem(key)
  return val ? JSON.parse(val) : null
}

function saveToStorage(key, val) {
  localStorage[key] = JSON.stringify(val)
}
