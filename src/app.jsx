import React from 'react';
import ReactDOM from 'react-dom';
import './api/foundationSetup';
// import firebase from 'firebase';
import firebaseRef from './firebase';

firebaseRef.set({
    users: {
        someUid: {
            note: 'Xin chao cac ban!'
        },
        someOtherUid: {
            note: 'How are you today?'
        }
    }
});

ReactDOM.render(
    <h3>Khoa Pham ReactJS</h3>,
    document.getElementById('root')
);
