import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]= useState(15)
  const desCount =()=>{
    if(counter >0) setCounter(counter-1)
    else return alert("we can not decrease anymore min value is 0")
    
  }
  const incCount=()=>{
    if(counter < 20) setCounter(counter+1)
    else return alert("we can not increse anymore max value is 20")
  }
  return(<>
  <h2>value of counter {counter}</h2>
  <button onClick={desCount}>Decrease Counter</button>
  <button onClick={incCount}>Increasre Counter</button>
  </>)
}

export default App
