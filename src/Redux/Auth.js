

const initialState = {
  isAuth:false,
}


const verifiedReducer = (state = initialState, action)=>{
  switch (action.type) {
    case "login":
      return { ...state, isAuth: true }
    case "logout":
      return { ...state, isAuth: false }
    default:
      return {
        state
      }
   }
}
 

export default verifiedReducer