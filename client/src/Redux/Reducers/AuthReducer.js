import { CURRENT, FAIL, LOGIN, REGISTER } from "../ActionsTypes/AuthTypes"

const intialState={
    user : {},
    errors:[],

}
const AuthReducer=(state=intialState,action)=>{
    switch(action.type){
        case FAIL : return {...state,errors: action.payload.errors,user:null}
        case REGISTER : 
        localStorage.setItem("token",action.payload.token)
        return{...state,user:action.payload.newUser,errors:null}
        case LOGIN:
            localStorage.setItem("token",action.payload.token)
            return{...state,user: action.payload.found,errors:null}
            case CURRENT : return{...state,user:action.payload}
        default: return state
    }

}
export default AuthReducer