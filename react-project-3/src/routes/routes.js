import React from 'react';

import {Route, Redirect, Switch} from 'react-router-dom';

import './routes.css';

import Home from '../home-page/home.js';
import NewsPage from '../news-page/news-page.js'

//  const TestLoop = (title) => {
//     let i;
//     let newsArray = [];
//     for(i = 0; i< 9; i++){
        
//         newsArray.push(i)
//     }
//     return newsArray;
// }

export class Routes extends React.Component{
    render(){
        return (
            <div className="body-wrapper">
                <Switch>            
                    <Redirect from="/home" to="/" /> 
                    <Route exact path="/" component={Home} /> 
                </Switch> 

                {/* <Route  path="/home" component={Home}/> */}
                {/* <Route  path={"/news-item" + {TestLoop} } component={NewsItem}/> */}
                
                <Route path="/news-page/:id" component={NewsPage}/>
                
            </div>
        )
    }
}

export default Routes;