import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"hello"
        }
        // this.clickHand=this.clickHand.bind(this) //Binding the event in the constructor using this statement
    }
    // clickHand(){
    //     this.setState({
    //         message:"goodBye"
    //     })
    //    console.log(this) 
    // }

    
    //using arrow function we also call a event

    clickHand=()=>{
        this.setState({
            message:"Good Morning"})
        
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHand.bind(this)}>click</button> */}
                {/* <button onClick={()=>this.clickHand()}>click</button> */}
                {/* <button onClick={this.clickHand}>click</button> */}
                <button onClick={this.clickHand}>click</button>
            </div>
        )
    }
}

export default EventBind
