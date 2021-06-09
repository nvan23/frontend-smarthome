import {
  TOKEN,
  REFRESH_TOKEN,
} from '../constants/authentication'

export {
  getToken,
  setToken,
  removeToken,
  getRefreshToken,
  setRefreshToken,
  removeRefreshToken,
}

function getToken () {
  return JSON.parse(localStorage.getItem(TOKEN))
}

function getRefreshToken () {
  return JSON.parse(localStorage.getItem(REFRESH_TOKEN))
}

function setToken (token) {
  localStorage.setItem(TOKEN, JSON.stringify(token))
}

function setRefreshToken (token) {
  localStorage.setItem(REFRESH_TOKEN, JSON.stringify(token))
}

function removeToken () {
  localStorage.removeItem(TOKEN)
}

function removeRefreshToken () {
  localStorage.removeItem(REFRESH_TOKEN)
}