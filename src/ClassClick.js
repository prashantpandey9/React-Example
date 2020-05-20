import React, { Component } from 'react'

class ClassClick extends Component {
    ClickHandler(){
        console.log(
            "clicked LOGGEd"
        )
    }
    render() {
        return (
            <div>
                <button onClick={this.ClickHandler}>ClickME</button>
            </div>
        )
    }
}

export default ClassClick
