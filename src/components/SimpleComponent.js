// Code SimpleComponentHere Here
import React from 'react'

class SimpleComponent extends React.Component{
  constructor(){
    super()
    this.state = {
      mood: 'happy'
    }
  }

  changeMood = ()=>{
    this.setState({
      mood:  this.state.mood==='happy' ? 'sad' : 'happy'
    })
  }

  render(){
    return(
      <div onClick={this.changeMood}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent
