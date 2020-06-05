import React from 'react'

const Hello = () => {

    /*return (
        <div>
            <h1>Hello Hello</h1>
        </div>
    )*/
    return React.createElement('div',
        {id:'hello-id', className:'testClass'},
        React.createElement('h1', null, 'Hello Hello React creates.'))
}

export default Hello