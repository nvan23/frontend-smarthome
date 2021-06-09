
import axios from 'axios'

import { headerOptions } from '../helpers/setHeader'

import config from '../config'

export {
  register,
  login,
  logout,
  getUser,
  isJwtExpired,
}

/**
 * [POST] - /user/register - REGISTER
 *
 * @param {string} name
 * @param {string} email
 * @param {string} password
 */

function register (name, email, password) {
  return axios.post(
    `${config.API_URL}/user/register`,
    {
      'name': name,
      "email": email,
      "password": password,
    }
  )
};

/**
 * [POST] - /user/login - LOGIN
 *
 * @param {string} email
 * @param {string} password
 */

function login (email, password) {
  return axios.post(
    `${config.API_URL}/user/login`,
    {
      "email": email,
      "password": password
    }
  )
};

/**
 * [POST] - /user/logout - LOGOUT
 *
 */
function logout () {
  return axios.post(`${config.API_URL}/user/me/logout`, {}, headerOptions())
};

/**
 * [GET] - /user/me - GET USER
 *
 */
function getUser () {
  return axios.get(`${config.API_URL}/user/me`, {}, headerOptions())
}
