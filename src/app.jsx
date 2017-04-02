import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import firebase from 'firebase';

import firebaseRef from './firebase';
import './api/foundationSetup';
import Login from './component/Login';
import Quote from './component/Quote';
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
        .catch(err => console.log(err));

        uidRef.on('child_changed', 
            snapshot => store.dispatch({ type: 'SET_QUOTE', quote: snapshot.val().qoute }));
    }
});

//Listen to quote changing

const App = () => (
    <Provider store={store}>
        <HashRouter>
            <div>
                <Route exact path="/" component={Login} />
                <Route path="/quote" component={Quote} />
            </div>
        </HashRouter>
    </Provider>
);

ReactDOM.render(
    <App />,
    document.getElementById('root') // eslint-disable-line
);
