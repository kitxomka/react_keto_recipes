import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Container, CssBaseline } from '@material-ui/core';

import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage';
import SingleRecipePage from './components/SingleRecipePage';

const App = () => {
    return ( 
        <Router> 
            <CssBaseline /> 
                <Container maxWidth="lg">
                    <Switch>
                    <Route exact path="/" >
                        <HomePage/>
                    </Route>
                    <Route exact path="/category/:category">
                        <CategoryPage />
                    </Route>
                    <Route exact path="/recipe/:id">
                        <SingleRecipePage />
                    </Route>
                </Switch>
                </Container> 
        </Router> 
    )
}

export default App
