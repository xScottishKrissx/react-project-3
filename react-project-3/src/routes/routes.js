import React from 'react';

import {Route, Redirect, Switch} from 'react-router-dom';

import Home from '../home-page/home.js';
import NewsItem from '../news-item/news-item.js'

export class Routes extends React.Component{
    render(){
        return (
            <div>
                <Switch>            
                    <Redirect from="/home" to="/" /> 
                    <Route exact path="/" component={Home} /> 
                </Switch> 

                {/* <Route  path="/home" component={Home}/> */}
                <Route  path="/news-item" component={NewsItem}/>

            </div>
        )
    }
}

export default Routes;