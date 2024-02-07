import { useState } from "react"

function Usestate(){
    const [count,setCount] =useState(0)
    
    function incrementHandler(){
        if(count >=10) return
        else return setCount((prevCount)=>prevCount+1)
    }
    function decrementHandler(){
        if(count <= 0) return
        else return  setCount((prevCount)=>prevCount-1)
       
    }
    return(
        <>
        <div className="container">
        <h2>{count}</h2>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler}>Increment</button>
        </div>
        </>
    )
}
export default Usestate