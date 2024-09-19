
import { combineReducers } from "redux"
import verifiedReducer from "./Auth"
import counterReducer from "./CounterSlice"


  const rootReducer = combineReducers({
  auth: verifiedReducer,
  counter:counterReducer
  })


  export default rootReducer