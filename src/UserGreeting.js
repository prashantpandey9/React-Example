import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    render() {
        return this.state.isLoggedIn &&<div>hello user</div>
        
        // return(this.state.isLoggedIn?<div>Hello User</div>:<div>Hello guest</div>)
        // let message
        // if (this.state.isLoggedIn){
        //     message=<div>welcome user</div>
        // }
        // else{
        //     message=<div>Welcome Guest</div>
        // }
        // return(<div>{message}</div>)
    //     if (this.state.isLoggedIn){
    //     return (
    //         <div>
    //             <div>Hello Pandey</div>
            
    //         </div>
    //     )}
    // else{
    //     return(
    //         <div>Hello guest</div>
    //     )
    // }
    }
}

export default UserGreeting
