import React from 'react';
import './news-item.css';
import MediaQuery from 'react-responsive';
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
        return id.id === Number(articleID);
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

    const changeFontSize = {
        fontSize:"25rem",
    }

console.log(ExtraImageLoop)
 return(    
     
    <div className='news-page-wrapper'>
    
        <p><Link to='/home'>...back</Link></p>

        
        <div style={style}></div>

        <header className="news-article-header">
                <h1 className="article-title">{articleObject.title}</h1>
                <h2 className="article-subtitle">Subtitle</h2>
                <h3 className="article-author">{articleObject.author}</h3>
        </header>


        <div className="news-article-body">
            <article>
                    <p className="article-text">{articleObject.text}</p>
                    <p className="article-likes">Likes: {articleObject.likes} </p>
                    <p className="article-dislikes">Dislikes: {articleObject.dislikes}</p>
            </article>

            <div className="extra-images">
                <ExtraImageLoop />             
            </div>  

        </div>
    </div>
)};




 const ExtraImageLoop = (title) => {
    let i;
    let imagesArray = [];
    for(i = 0; i < 3; i++){        
        imagesArray.push(<img key={i} src={"https://unsplash.it/500/200?random=" + (i * 12 ) } alt="the-knews-extra-images" />)
    }
    return imagesArray;
}


export default NewsPage;