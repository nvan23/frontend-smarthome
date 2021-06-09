import homeReducer from '../pages/Home/reducer'

import { combineReducers } from "redux"

const rootReducer = combineReducers({
  home: homeReducer,
})

export default rootReducer