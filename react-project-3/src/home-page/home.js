import React from 'react';
import './home.css';

// import NewsItemLoop from '../home-page/news-item-loop/news-item-loop';

import NewsItemLoop from './news-item-loop/news-item-loop.js'

// import {Link} from 'react-router-dom';


// import GalleryData from '../home-page/gallery-data';

// import NewsItem from '../news-item/news-item'

export class Home extends React.Component{

    render(){
        return(
            <div className='home-wrapper' >                
                <h1>Home</h1>
                <div className="news-item-wrapper">
                    <NewsItemLoop />
                    
                </div>
            </div>
        )
    }
}




export default Home;