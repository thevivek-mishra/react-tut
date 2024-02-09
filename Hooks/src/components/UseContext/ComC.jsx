import { useContext } from "react"
import { myContext } from "../context/mycontex"
function ComC (){
    const {setText} =useContext(myContext)
    return(<>
    <h2>This is comp c</h2>
    <button onClick={()=>setText("Hello i am coponent C")}>Click me</button>
    </>)
}
export default ComC