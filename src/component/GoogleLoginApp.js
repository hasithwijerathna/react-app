import React, { Component } from 'react';

import GoogleLogin from 'react-google-login';

class GoogleLoginApp extends Component {

    render() {

        const responseFacebook = (response) => {
            console.log(response);
        }

        const responseGoogle = (response) => {
            console.log(response);
            var profile = response.getBasicProfile();
            console.log("ID: " + profile.getId()); // Don't send this directly to your server!
            console.log('Full Name: ' + profile.getName());
            console.log('Given Name: ' + profile.getGivenName());
            console.log('Family Name: ' + profile.getFamilyName());
            console.log("Image URL: " + profile.getImageUrl());
            console.log("Email: " + profile.getEmail());
        }

        return (
            <div className="App">
                <h1>LOGIN WITH GOOGLE</h1>
                <GoogleLogin
                    clientId="53468814156-iihd2ci92mir08vq48bakf1qtl7eqv3r.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                    buttonText="LOGIN WITH GOOGLE"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />

            </div>
        );
    }
}

export default GoogleLoginApp;