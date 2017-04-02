import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import '../api/foundationSetup';
import Login from '../component/Login';
import Quote from '../component/Quote';
import Loading from '../component/Loading';

const App = (props) => {
    const { isLoading } = props;
    const main = (
        <HashRouter>
            <div>
                <Route exact path="/" component={Login} />
                <Route path="/quote" component={Quote} />
            </div>
        </HashRouter>
    );
    if (isLoading) return <Loading />;
    return main;
};

export default connect(state => ({ isLoading: state.isLoading }))(App);
