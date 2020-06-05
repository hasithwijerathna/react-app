import React, {Component} from 'react'

class Welcome extends Component{
    render(){
        const {name, age} = this.props
        return <h1>{name} is {age} years old.</h1>
    }
}

export default Welcome