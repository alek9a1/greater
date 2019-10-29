import React, { Component } from "react";
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import Loading from './Loading';
import heroImage from '../img/hero.jpg';

class Page extends Component {

    constructor(props) {
        super(props);

        this.state = {
            item: [],
            loaded: false,
            page: this.props.slug
        };
        
    }


    
   
    componentDidMount() {
        axios.get('http://localhost/teamster/wp-json/wp/v2/pages?slug='+this.props.slug+'&_embed')
        .then((response) => {

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
        
        const { item , loaded, page } = this.state

        if (page != this.props.slug) {
            window.location.reload();
        }
        

        if ( loaded ) {
            if ( 'source_url' in item) {
                var image = item._embedded["wp:featuredmedia"]["0"].media_details.sizes.full.source_url;
            } else {
                var image = heroImage;
            }
            
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
        

export default Page;