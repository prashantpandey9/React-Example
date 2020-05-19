import React, { Component } from 'react'

export class State extends Component {
    constructor() {
        super()
        this.state={
            message:"welcome here!!"
        }
    }
    changemesssage(){
        this.setState({
            message:"Thanks for coming"
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changemesssage()}>bu</button>
            </div>
        )
    }
}

export default State
