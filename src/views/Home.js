import React, { Component } from "react";
import axios from 'axios';
import Slider from './Slider';
import Single from './Single';
import Loading from './Loading';

import SingleContent from './blog/SingleContent';

import {
    Switch,
    Route,
  } from "react-router-dom";

export default class Home extends Component {

   

    state = {
        error: null,
        isLoaded: false,
        items: []
    };

    

    componentDidMount() {

        axios.get('http://localhost/teamster/wp-json/wp/v2/posts?_embed=true')
        .then((response) => {
            console.log(response);
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
                 <Slider/>
                 <div className="container">
                 <div className="mt-100"><h2 className="font2 text-center">Aktualności</h2></div> 
                 <Loading/>
                 </div>
                 </div>
             )
        } else {
            
        }
        return (
           <div>
            <Slider/>
            <div className="container mt-100">
            <div className="mt-100"><h2 className="font2 text-center bold main-color">Aktualności</h2></div> 
            <div className="news row mt-100">
                {items.slice(0,3).map(item => {
                        return (
                            <div className="col-lg-4  mb-30" data-key={item.id} key={item.id} >
                                <SingleContent item={item} />
                            </div>
                        )
                })}
                <Switch>
                    <Route exact path={`/blog/:newsId`}>
                        <Single />
                    </Route>
                </Switch>
            </div>
            </div>
            </div>
        )
    }
}

