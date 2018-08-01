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
            <section>
                <h1 className="article-title">{articleObject.title}</h1>
                <h2 className="article-subtitle">Subtitle</h2>
                <h3 className="article-author">{articleObject.author}</h3>
                <p className="article-text">{articleObject.text}</p>
                <p className="article-likes">Likes: {articleObject.likes} </p>
                <p className="article-dislikes">Dislikes: {articleObject.dislikes}</p>
            </section>
        </div>
    </div>
)};



export default NewsPage;