import React from 'react';
import Nav from "./Nav";
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Home";
import About from "./About";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Nav/>
                <Switch>
                    <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                </Switch>
            </BrowserRouter>

        </div>
    );
};

export default App;