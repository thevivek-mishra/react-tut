import React, {Component} from 'react'

class CounterState extends Component {
    componentDidUpdate(prevprops,prevstate){
        console.log(prevprops.number)
        console.log(this.props.number)
        if(prevprops.number !== this.props.number){
            console.log(`component update`)
        }

    }

    render(){
        return(
            <h1>{this.props.number}</h1>
        )
    }
}

export default CounterState