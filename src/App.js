import React from 'react';
import './App.css';
import Greet from './component/Greet'
import Welcome from './component/Welcome'
import Hello from './component/Hello'
import Message from './component/Message'
import GoogleLoginApp from './component/GoogleLoginApp'
import AppRoute from './component/Route'


function App() {
  return (
    <div className="App">
        <Greet name='Hasith'>
            <p>Some description</p>
            <p>Some description</p>
        </Greet>
        <Greet name='Kamal'/>
        <Greet name='Nimal'/>
        <Welcome name='Hasith' age='21'/>
        <Welcome name='Nimal' age='25'/>
        <Welcome name='Kamal' age='23'/>
        <Hello/>
        <Message/>
        <GoogleLoginApp/>
        <AppRoute/>
    </div>
  );
}

export default App;
