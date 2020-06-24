import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:''
        }
    }
    handlerUsernameChange=(event)=>{
        this.setState({
            username:event.target.value 
        })
    }
    handlerSubmit=(event)=>{
        alert(`${this.state.username}`)
        event.preventDefault()
    }
    
    render() {
        return (
            <form action="" onSubmit={this.handlerSubmit}>
                <div>
                    <label htmlFor="">Username</label>
                    <input type="text" value={this.state.username} onChange={this.handlerUsernameChange}/>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form
