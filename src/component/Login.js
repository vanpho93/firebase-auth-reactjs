import React, { Component } from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { githubProvider } from '../firebase';

class Login extends Component {
    onLogin() {
        firebase.auth().signInWithPopup(githubProvider)
        .then(result => console.log('Worded', result))
        .catch(err => console.log('Err', err));
    }
    render() {
        const { user } = this.props;
        const loginButton = (
            <div>
                <button className="button" onClick={this.onLogin}>Login with Github</button>
            </div>
        );
        return (user ? <Redirect to="/quote" /> : loginButton);
    }
}

export default connect(state => ({ user: state.user }))(Login);
