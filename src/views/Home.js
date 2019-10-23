import React, { Component } from "react";
import axios from 'axios';
import Slider from './Slider';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


export default class Home extends Component {
    state = {
        error: null,
        isLoaded: false,
        items: []
    };

   
    componentDidMount() {


        axios.get('http://localhost/teamster/wp-json/wp/v2/posts')
        .then((response) => {
            console.log(response);

            this.setState({
                isLoaded: true,
                items: response.data
            });

        })
        .catch( (error) => {
            console.log(error);

            this.setState({
                isLoaded: true,
                error
            });
        })
        .finally(() =>  {
        // always executed
        });
    }

    render() { 
        const { error, isLoaded, items } = this.state;
        console.log(items);

       

        if (error) {

        } else if (!isLoaded) {
            return (
                <div>
                 <Slider/>
                 
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
            <Slider/>
            <div className="container mt-100">
            <div className="mt-100"><h2 className="font2 text-center">Aktualności</h2></div> 
            <div className="news row mt-100">
                {items.map(item => (
                    <div className="single-news col-lg-3" key={item.id}>
                    <h3>{item.title.rendered}</h3>
                    <div>{ReactHtmlParser(item.excerpt.rendered)}</div>
                    </div>
                ))}
            </div>
            </div>
            </div>
        )
    }
}

