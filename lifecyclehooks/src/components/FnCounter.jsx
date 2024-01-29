import { useEffect, useState } from "react"

function FnCounter(){
    const [state,setState] =useState(0)
    function increment(){
        setState(state+1)
    }
    // useEffect(()=>{
    //     console.log("functional component mounting")
    // })
    // useEffect(()=>{
    //     console.log("functional component: updating")

    // },[state])
    useEffect(()=>{
       return ()=>{
        console.log("functional component: remove")
       } 

    },[state])
    return(
       <div>
        <h1>{state}</h1>
        <button onClick={increment}>click me</button>
       </div>
    )
}
export default FnCounter