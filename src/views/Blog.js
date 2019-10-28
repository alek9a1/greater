import React, { Component } from "react";
import axios from 'axios';
import Single from './Single';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";


  export default class Blog extends Component {
    
    constructor(props) {
        super(props);
    }

    state = {
        error: null,
        isLoaded: false,
        items: []
    };

    componentDidMount() {

        axios.get('http://localhost/teamster/wp-json/wp/v2/posts')
        .then((response) => {
            this.setState({
                isLoaded: true,
                items: response.data
            });
        })
        .catch( (error) => {
            this.setState({
                isLoaded: true,
                error: error
            });
        })
        .finally(() =>  {
        // always executed
        });
    }

    render() { 
        const { error, isLoaded, items } = this.state;
 

        if (error) {

        } else if (!isLoaded) {
            return (
                <div>
             
                 
                 <div className="container">
                 <div className="mt-100"><h2 className="font2 text-center">Aktualności</h2></div> 
                 Ładuję
                 </div>
                 </div>
             )
        } else {
            
        }
        return (
           <div>
            <div className="container mt-100">
            <div className="mt-100"><h1 className="font2 text-center">Aktualności</h1></div> 
            <div className="news row mt-100">

                {items.map(item => (
                    <div className="single-news col-lg-3" key={item.id}>
                    <h3>{item.title.rendered}</h3>
                    <div>{ReactHtmlParser(item.excerpt.rendered)}</div>
                    <Link to={`/blog/${item.slug}`}>Więcej</Link>
                    </div>
                ))}

                <Route exact path={`/blog/:newsId`} component={Single} />
                           
            </div>
            </div>
            </div>
        )
    }
  }