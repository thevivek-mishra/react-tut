import { useReducer } from "react"
import { reducer } from "./reducer";

let initialState = 0;


function Usereducer(){
    const [state,dispatch] =useReducer(reducer,initialState)
    
    function incrementHandler(){
        dispatch({type:'inc'})
        
    }
    function decrementHandler(){
        dispatch({type:'dec'})
       
       
    }
    return(
        <>
          <div className="container">
            <h2>{state}</h2>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={incrementHandler}>Increment</button>
          </div>
        </>
    )
}
export default Usereducer