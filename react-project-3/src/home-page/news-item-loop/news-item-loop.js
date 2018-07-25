import React from 'react';

// import {Link} from 'react-router-dom';
// import GalleryData from '../gallery-data';

import UniqueNewsItem from '../unique-news-item/unique-news-item';

export const NewsItemLoop = (title) => {
    let i;
    let newsArray = [];
    for(i = 0; i< 9; i++){
        
        newsArray.push(<UniqueNewsItem id={i} key={i}/>)
    }
    return newsArray;
}
export default NewsItemLoop;