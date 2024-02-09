import ComB from './ComB'
import { myContext } from '../context/mycontex'
import  {useContext} from 'react'
function ComA (){
    const {text} = useContext(myContext)
    return(<>
    <h2>this is component A</h2>
    <p>{text}</p>
    <ComB/>
    </>)
}
export default ComA