import React, { Component } from 'react';
import firebaseRef from '../firebase';

class TestAuth extends Component {
    onTest() {
        const uid = this.refs.txtUid.value;
        const uidRef = firebaseRef.child('users').child(uid);
        uidRef.once('value').then(snapshot => console.log(snapshot.val()));
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Enter your test uid" ref="txtUid" />
                <button className="button" onClick={this.onTest.bind(this)}>Test</button>
            </div>
        );
    }
}

export default TestAuth;
