import React from 'react';

import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Home from '../home-page/home.js';
import NewsItem from '../news-item/news-item.js'

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
            <div>
                <Switch>            
                    <Redirect from="/home" to="/" /> 
                    <Route exact path="/" component={Home} /> 
                </Switch> 

                {/* <Route  path="/home" component={Home}/> */}
                {/* <Route  path={"/news-item" + {TestLoop} } component={NewsItem}/> */}
                
                <Route path="/news-item/:id" component={NewsItem}/>
                
            </div>
        )
    }
}

export default Routes;