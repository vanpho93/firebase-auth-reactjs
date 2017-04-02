import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { Provider } from 'react-redux';

import App from './component/App';
import firebaseRef from './firebase';
import './api/foundationSetup';
import store from './redux';

//Listen to auth changing

firebase.auth().onAuthStateChanged(user => {
    store.dispatch({ type: 'SET_USER', user });
    if (user) {
        const uidRef = firebaseRef.child(`users/${user.uid}`);
        uidRef.once('value')
        .then(res => {
            store.dispatch({ type: 'SET_QUOTE', quote: res.val().quote });
        })
        .catch(err => console.log(err))
        .then(() => store.dispatch({ type: 'INIT_FINISHED' }));

        uidRef.on('child_changed', 
            snapshot => store.dispatch({ type: 'SET_QUOTE', quote: snapshot.val() }));
    }
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') // eslint-disable-line
);
