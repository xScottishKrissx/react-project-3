import React from 'react';
import {Link} from 'react-router-dom';
import GalleryData from '../dummy-data';
import UniqueNewsItem from '../unique-news-item/unique-news-item';

import FetchRandomImage from '../../news-page/news-page'

import '../news-item-loop/news-item-loop.css';

const testData = GalleryData;

console.log(testData);
export const NewsItemLoop = () => {
    return <NewMap />;    
}

const NewMap = () => {


  
    const myEffingMap = testData.map((value,key) => {

        // There is probably a better way of doing this...
        const imgUrl = "https://unsplash.it/500/200?random=" + value.id;
        ///... and this.
        const style = {
            backgroundImage: 'url(' + imgUrl + ')',
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "400px",
            width:"100%"
        }


        return (
                <div className='news-square' key={key}>                    
                    <Link className="news-item-link" to={{pathname: '/news-page/' + value.id}}>    

                        <div style={style}>
                            <span>{value.title}</span>
                            
                        </div> 

                    </Link>
                </div>
        );
  })
    return myEffingMap;    
}


export default NewsItemLoop;