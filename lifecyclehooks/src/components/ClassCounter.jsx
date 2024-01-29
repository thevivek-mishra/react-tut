import React, {Component} from 'react'
import CounterState from './CounterState'


class ClassCounter extends Component{

  constructor(){
    // page load hone se pahle vari
    super()
    this.state ={
      count:0
    }
  }
  componentWillUnmount(){
    console.log(`component will unmount :componet remove`)
  }

  

  componentDidMount(){
    console.log(`Component Did Mount : when component render first time`)
  }
  
  increment(){
    this.setState({count:this.state.count+1})
  }
  render(){
    return(
      <div id='container'>
        <CounterState number={this.state.count}/>
        {/* <button onClick={this.increment} >click me</button> does not work because this is not bind   ---onClick={this.increment.bind(this)}  */} 
        <button onClick={ ()=>this.increment()}>click me</button> 
      </div>
    )
  }
}

export default ClassCounter
