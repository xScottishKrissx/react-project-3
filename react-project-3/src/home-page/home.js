import React from 'react';
import './home.css';



import {Link} from 'react-router-dom';


import GalleryData from './gallery-data';

// import NewsItem from '../news-item/news-item'

export class Home extends React.Component{

    render(){
        return(
            <div className='home-wrapper' >                
                <h1>Home</h1>
                <div class="news-item-wrapper">
                    <NewsItemLoop />
                </div>
            </div>
        )
    }
}


const NewsItemLoop = (title) => {
    let i;
    let newsArray = [];
    for(i = 0; i< 9; i++){
        
        newsArray.push(<UniqueNewsItem id={i} key={i}/>)
    }
    return newsArray;
}


const UniqueNewsItem = (props) => {
    const galleryData = GalleryData;
    const a = [];
    const s = galleryData[props.id];
    a.push(s);

    const gallery = a.map(arraymap => {
        const imgUrl = "https://unsplash.it/500/200?random=" + arraymap.id;
        const style = {
            backgroundImage: 'url(' + imgUrl + ')',
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
        }

        return (
            <div className="" style={style} id={arraymap.id} key={arraymap.id}>
                

                        <Link 
                            to={{
                                pathname: '/news-item',
                                state: {
                                    pageId: arraymap.id,
                                    pageTitle: arraymap.title,
                                    pageText: arraymap.text,
                                    pageAuthor: arraymap.author,
                                    pageLikes: arraymap.likes,
                                    pageDislikes: arraymap.dislikes,
                                    postDate: arraymap.postdate,
                                    pageImage: style

                                }
                            }}>
                            
                        <div className="">
                            <span>{arraymap.title}</span>
                        </div> 

                        </Link>
                   
                
            </div>
        )
    })
    return (
            <div className="news-item">
                 {gallery}
            </div>
    );
}

export default Home;