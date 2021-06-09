import { getToken } from '../utils/localStorage'

export {
  headerOptions
}

function headerOptions () {
  return {
    headers: {
      'x-access-token': getToken() || null,
      'Content-Type': 'application/json'
    }
  }
}