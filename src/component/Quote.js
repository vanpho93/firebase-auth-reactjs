import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';
import QuoteFrom from './QuoteForm';

class Quote extends Component {
    onLogout() {
        firebase.auth().signOut()
        .then(() => console.log('Sign out!'));
    }
    render() {
        const { user, quote } = this.props;
        console.log('QUOTE:', quote);
        if (!user) return <Redirect to="/" />;
        if (!quote) return <QuoteFrom />;
        return (
            <div>
                <p>{quote}</p>
                <button className="button" onClick={this.onLogout}>Sign out</button>
            </div>
        );
    }
}

export default connect(state => ({ user: state.user, quote: state.quote }))(Quote);
