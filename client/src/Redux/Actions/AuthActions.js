import { FAIL, LOGIN, REGISTER } from "../ActionsTypes/AuthTypes"
import axios from "axios"

export const register=(signUser,navigate,)=>async(dispatch)=>{
    try {
      const res= await axios.post('/api/auth/SignUp',signUser)

      dispatch(
        {
            type:REGISTER,
            payload: res.data
        }
      ) 
      navigate('/Profile')

    } catch (error) {
        dispatch(
            {
                type: FAIL,
                payload: error.response.data
            }
        )
    }
 
}
export const login=(logUser,navigate)=>async(dispatch)=>{
           try { 
            const res= await axios.post("/api/auth/SignIn",logUser)
            dispatch(
                {
                    type:LOGIN,
                    payload: res.data
                }
            )
            navigate("/profile")
            
           } catch (error) {
            dispatch(
                {
                    type: FAIL,
                    payload: error.response.data
                }
            )
            
           }
}
export const current=()=>async(dispatch)=>{
    const config={
        headers : {
            Authorized : localStorage.getItem("token")
        } 
    }
    try {
        const res= await axios.get("/api/auth/currentuUser",config)
        dispatch(
            {
                type: current,
                payload: res.data
            }
        )
    } catch (error) {
        dispatch(
            {
                type: FAIL,
                payload: error.response.data
            }
        )    
    }
    
}