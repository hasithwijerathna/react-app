import React, {Component} from 'react'

class Message extends Component{

    constructor(){
        super();
        this.state = {
            message: "Please subscribe clicking the button",
         count:0
        }
    }

    changeMessage(){
        this.state.count++;
        if(this.state.count === 1){
            this.setState({
                message: "Thank you for subscribing"
            })
        }
        if(this.state.count > 1){
            this.setState({
                message: "You cannot subscribe more than one"
            })
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message