
const initialState = {
  count:0
}

 const counterReducer = (state = initialState, action)=>{
  switch (action.type) {
    case  "increment" :
      return { ...state, count : state.count + 1 }
    case "decrement" :
      return { ...state, count: state.count - 1 }
    default:
      return state
    
  }
}

// create action creator

export default  counterReducer
