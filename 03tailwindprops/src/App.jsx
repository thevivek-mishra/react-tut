import React from "react"
import Card from "./components/card.jsx"


function App() {

  const details = [
    {
      name:"abhisehk  pandey",
      age:23,
      mobile: 7236821679
    },
    {
      name:"vivek mishra",
      age:23,
      mobile: 7236821679
    },
    {
      name:"aman gupta",
      age:23,
      mobile: 7236821679
    },
    {
      name:"prakhar singh",
      age:23,
      mobile: 7236821679
    }
  ]
  return (
   <>
   {
    details.map((detail, index)=>(
     <Card key={index}  name ={detail.name} age ={detail.age} mobile={detail.mobile}/>
    ))
   }
   

   </>
  )
}

export default App
