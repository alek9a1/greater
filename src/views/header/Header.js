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
                            <Link to="/"><img src={logo} alt="graterR"></img></Link>
                            </div>
                            <nav>
                                <ul className="flex">
                                    <li>
                                    <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                    <Link to="/o-nas">About</Link>
                                    </li>
                                    <li>
                                    <Link to="/blog">Blog</Link>
                                    </li>
                                    <li>
                                    <Link to="/contact">Contact</Link>
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
                    <Route path="/o-nas">
                        <Page slug="o-nas"/>
                    </Route>
                    <Route path="/contact">
                        <Page slug="contact"/>
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