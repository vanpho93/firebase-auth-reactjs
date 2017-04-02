import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebaseRef from '../firebase';

class QuoteForm extends Component {
    addQuote() {
        const { user } = this.props;
        const uidRef = firebaseRef.child(`users/${user.uid}`);
        uidRef.set({ quote: this.refs.txtQuote.value });
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Enter your quote" ref="txtQuote" />
                <button onClick={this.addQuote.bind(this)}>Add quote</button>
            </div>
        );
    }
}

export default connect(state => ({ user: state.user }))(QuoteForm);

/*
    {
        users: {
            someUid: {
                //private zone
                quote: 'Dog is human's best friend'
            }
        }
    }
*/
