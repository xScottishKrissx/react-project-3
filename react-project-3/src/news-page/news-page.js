import React from 'react';
import './news-item.css';

import {Link} from 'react-router-dom';

import DummyData from '../home-page/dummy-data.js';

const dummyNews = DummyData;

// This is a bit of a copy and paste job but I understand what's going on what i've been doing wrong.
export const NewsPage = ({match}) =>{

    //This is being set in routes.js and news-item-loop.js
    // Its a bit spaghetti but very simple
    const articleID = match.params.id;  
    // console.log(articleID);


    function findId(id){
        // Will need to do some string to int conversion here
        return id.id == articleID;
    }

    // console.log(dummyNews.find(findId));
    const articleObject = dummyNews.find(findId);

    // console.log(articleID);

    const imgUrl = "https://unsplash.it/500/200?random=" + articleObject.id;
    ///... and this.
    const style = {
        backgroundImage: 'url(' + imgUrl + ')',
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "400px",
        width:"100%"
    }


 return(   
    <div className='news-page-wrapper'>
    
    <p><Link to='/home'>...back</Link></p>
        <div style={style}></div>
        <div>
            <p>{articleID}</p>
            <p>{articleObject.id}</p> 
            <p>{articleObject.title}</p>
        </div>
    </div>
)};



export default NewsPage;