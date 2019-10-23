import React, { Component } from "react";
import axios from 'axios';
import Slider from './Slider';
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
                 Ładuję</div>
            )
        } else {
            
        }
        return (
            <div>
            <Slider/>
            <div className="container">
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                    {item.title.rendered}
                    </li>
                ))}
            </ul>
            </div>
            </div>
        )
    }
}

