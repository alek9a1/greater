import React, { Component } from "react";
import Page from '../../views/Page';
import Home from '../../views/Home';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
            <Router>
                <section className="header">
                    <div className="container">
                        <div className="flex aic">
                            <div className="logo">
                                <img src="img/logo.png" alt="graterR"></img>
                            </div>
                            <nav>
                                <ul className="flex">
                                    <li>
                                    <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                    <Link to="/about">About</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </section>
                <Switch>
                    <Route path="/about">
                        <Page slug="about"/>
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
            </div>
        )
    }
}

export default Header;