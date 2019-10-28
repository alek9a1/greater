import React, { Component } from "react";
import axios from 'axios';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
 

class Single extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [],
            loaded: false
        };
    }

    


    componentDidMount() {
        console.log('did mount');
        axios.get('http://localhost/teamster/wp-json/wp/v2/posts?slug='+this.props.match.params.newsId)
        .then((response) => {
            console.log(response.data[0]);

            this.setState({
                item: response.data[0],
                loaded: true
            });

        })
        .catch( (error) => {
            console.log(error);

        })
        .finally(() =>  {
            console.log('single fetch');
        });
    }

    render() {
        const { item , loaded } = this.state;
        console.log(item);
        if ( loaded ) {
            return(
                <div className="container">
                  <h1>{ReactHtmlParser(item.title.rendered)}</h1>  
                {ReactHtmlParser(item.content.rendered)}
             
                </div>
            )
        } else {
            return(
                <div className="container">
                Loading
                </div>
            )
        }   
    }
}
        

export default Single;