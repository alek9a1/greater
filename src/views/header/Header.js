import React, { Component } from "react";
import Page from '../../views/Page';
import Home from '../../views/Home';
import Blog from '../../views/Blog';
import logo from '../../img/logo.png';
import Single from '../../views/Single';
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
                                <img src={logo} alt="graterR"></img>
                            </div>
                            <nav>
                                <ul className="flex">
                                    <li>
                                    <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                    <Link to="/about">About</Link>
                                    </li>
                                    <li>
                                    <Link to="/blog">Blog</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </section>
                <Switch>
                <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <Page slug="about"/>
                    </Route>
                    <Route exact path="/blog">
                        <Blog/>
                    </Route>
                    <Route exact path="/blog/:newsId" component={Single} />
                </Switch>
            </Router>
            </div>
        )
    }
}

export default Header;