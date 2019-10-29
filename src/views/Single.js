import React, { Component } from "react";
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import Loading from './Loading';

 

class Single extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [],
            loaded: false
        };
    }

    


    componentDidMount() {
        axios.get('http://localhost/teamster/wp-json/wp/v2/posts?slug='+this.props.match.params.newsId+'&_embed')
        .then((response) => {
            console.log(response);
            this.setState({
                item: response.data[0],
                loaded: true
            });

        })
        .catch( (error) => {
            console.log(error);

        })
        .finally(() =>  {
        });
    }

    render() {
        const { item , loaded } = this.state;
        if ( loaded ) {
            var image = item._embedded["wp:featuredmedia"]["0"].media_details.sizes.full.source_url;
            return(
                <div>
                <div className="hero" style={{backgroundImage: 'url('+image+')'}}></div>
                <div className="container">
                  <h1 className="mb-30">{ReactHtmlParser(item.title.rendered)}</h1>  
                    {ReactHtmlParser(item.content.rendered)}
                </div>
                
                </div>
            )
        } else {
            return(
                <Loading/>
            )
        }   
    }
}
        

export default Single;