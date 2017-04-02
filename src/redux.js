const redux = require('redux');

const userReducer = (state = null, action) => {
    if (action.type === 'SET_USER') {
        return action.user ? action.user : null;
    }
    return state;
};

const quoteReducer = (state = null, action) => {
    if (action.type === 'SET_QUOTE') {
        return action.quote;
    }
    return state;
};

const reducer = redux.combineReducers({ user: userReducer, quote: quoteReducer });

const store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f // eslint-disable-line
));

export default store;
