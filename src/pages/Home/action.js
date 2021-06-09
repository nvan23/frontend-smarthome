import { GET_HOME } from './constant'

export const getHome = (homeId, userId) => {
  return {
    type: GET_HOME,
    payload: {
      homeId,
      userId
    },
  }
}
