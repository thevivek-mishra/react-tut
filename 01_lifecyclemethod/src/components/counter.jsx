import React,{Component} from "react";

class Counter extends Component {
    constructor(){
        super();
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.num !== this.props.num){
            console.log("compoent updated")
        }

    }
    
    render(){
        return(
            <>
            {this.props.num}
            </>
        )
    }
}
export default Counter;