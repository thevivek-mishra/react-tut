// import Usestate from "./components/UseState/Usestate"
import { useState } from "react"
// import Usereducer from "./components/UseReducer/Usereducer"
import { myContext } from "./components/context/mycontex"
import ComA from './components/UseContext/ComA'

function App() {
  const [text, setText] =useState()

  return (
    <myContext.Provider value={{text,setText}}>
      {/* <Usereducer/> */}
      <ComA/>
    </myContext.Provider>

    
  )
}

export default App
