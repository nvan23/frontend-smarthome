import { GET_HOME } from './constant'

const initialState = {
  id: null,
  hostId: null,
}

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME: {
      return {
        ...state,
        id: action.payload.homeId,
        hostId: action.payload.userId,
      }
    }

    default:
      return state
  }
}

export default homeReducer