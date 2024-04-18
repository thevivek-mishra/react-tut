import React, {Component} from 'react'
import Counter from './components/counter'


class App extends Component {
  constructor(){
    super()
    this.state ={
      count: 0,
      showTitle:true
    }
  }

  componentDidMount(){
    console.log("componentDidMount: when the page load first time")
  }
  increment(){
    this.setState({count:this.state.count +1})
  }
  decrement(){
    this.setState({count:this.state.count -1})
  }
  componentWillUnmount(){
    console.log("componentWilUnmount: component remove")
  }
  removeTitle(){
    this.setState({showTitle: !this.state.showTitle})

  }

  render(){
    return(
      <>
      { this.state.showTitle &&<h1>counter </h1> }
      <Counter num = {this.state.count}/>
      <button onClick={this.removeTitle.bind(this)}>remove counter title</button>
      <button onClick={()=>this.increment()}>Click me</button>
       {/* onClick= {this.increment.bind(this)} we have to use like this if you won't use array expression */}
      <button onClick={this.decrement.bind(this)}>decrememt</button>
      </>
    )
  }
}

export default App