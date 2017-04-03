import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { githubProvider, facebookProvider } from '../firebase';

class Login extends Component {
    onLoginGitHub() {
        firebase.auth().signInWithPopup(githubProvider)
        .then(result => console.log('Worded', result))
        .catch(err => console.log('Err', err));
    }
    onLoginFacebook() {
        firebase.auth().signInWithPopup(facebookProvider)
        .then(result => console.log('Worded', result))
        .catch(err => console.log('Err', err));
    }
    render() {
        const { user } = this.props;
        const loginButton = (
            <div>
                <button className="button" onClick={this.onLoginGitHub}>Login with GitHub</button>
                <button 
                    className="button" 
                    onClick={this.onLoginFacebook}
                >Login with Facebook</button>
            </div>
        );
        return (user ? <Redirect to="/quote" /> : loginButton);
    }
}

export default connect(state => ({ user: state.user }))(Login);
